import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { openai } from "./providers/openai";
import { generateObject } from "ai";
import z from "zod";
import { SYSTEM_PROMPT } from "./constants/system-prompt";
import type { Credentials } from "google-auth-library";
import { google } from "googleapis";
import { getCookie, setCookie } from "hono/cookie";
import { env } from "hono/adapter";
import { html, raw } from "hono/html";
import { readFile, writeFile } from "node:fs/promises";

import "dotenv/config";

type Variables = {
  tokens: Credentials;
};

type EnvVariables = {
  GOOGLE_API_KEY: string;
  GOOGLE_CLIENT_ID: string;
  GOOGLE_CLIENT_SECRET: string;
};

const scopes = [
  "https://www.googleapis.com/auth/spreadsheets",
  "openid",
  "email",
  "profile",
];

const app = new Hono<{ Variables: Variables }>();

app.use(async (c, next) => {
  if (c.req.path === "/login" || c.req.path === "/oauth/callback") {
    return await next();
  }

  const email = getCookie(c, "email");
  let file: Buffer;

  try {
    file = await readFile("tokens.json");
  } catch (error) {
    return c.redirect("/login");
  }

  const all = JSON.parse(file.toString());
  const userTokens = all[email!] || null;

  if (userTokens == null) {
    return c.redirect("/login");
  }

  c.set("tokens", userTokens);

  await next();
});

app.get("/login", async (c) => {
  const state = crypto.randomUUID();
  const params = new URL(c.req.url).searchParams;

  const vars = env<EnvVariables>(c);

  const oauthClient = new google.auth.OAuth2({
    clientId: vars.GOOGLE_CLIENT_ID,
    clientSecret: vars.GOOGLE_CLIENT_SECRET,
    redirectUri: "http://localhost:3000/oauth/callback",
  });

  if (!params.get("code")) {
    setCookie(c, "state", state, {
      maxAge: 60 * 10,
      httpOnly: true,
      path: "/",
      // secure: true,
    });

    const authorizationUrl = oauthClient.generateAuthUrl({
      access_type: "offline",
      scope: scopes,
      include_granted_scopes: true,
      state,
    });

    return c.redirect(authorizationUrl);
  }
});

app.get("/oauth/callback", async (c) => {
  if (c.req.query("error")) {
    return c.text("Authentication error", 401);
  }

  if (c.req.query("state") !== getCookie(c, "state")) {
    return c.text("State mismatch. Possible CSRF attack", 401);
  }

  const vars = env<EnvVariables>(c);

  const oauthClient = new google.auth.OAuth2({
    clientId: vars.GOOGLE_CLIENT_ID,
    clientSecret: vars.GOOGLE_CLIENT_SECRET,
    redirectUri: "http://localhost:3000/oauth/callback",
  });
  const { tokens } = await oauthClient.getToken(c.req.query("code")!);
  oauthClient.setCredentials(tokens);

  // write user info to db
  const oauth2 = google.oauth2({ version: "v2", auth: oauthClient });
  const { data } = await oauth2.userinfo.get();
  await setCookie(c, "email", data.email!);

  let file: Buffer;
  let hasFile = false;
  let db = <Record<string, any>>{};
  try {
    file = await readFile("tokens.json");
    hasFile = true;
    db = JSON.parse(file.toString());
  } catch (error) {}

  if (!hasFile) {
    await writeFile("tokens.json", "{}");
  }

  if (!(data.email! in db)) {
    db[data.email!] = tokens;
    await writeFile("tokens.json", JSON.stringify(db, null, 2));
  }

  return c.redirect("/");
});

app.get("/", async (c) => {
  return c.html(html`
    <html>
      <body>
        <h1>Receipts</h1>
        <form
          method="post"
          action="/process-receipt"
          enctype="multipart/form-data"
        >
          <input
            id="file-input"
            type="file"
            name="receipt"
            accept=".jpg, .jpeg, .png"
          />
          <button>Upload Receipt</button>
        </form>
      </body>
    </html>
  `);
});

app.post("/process-receipt", async (c) => {
  const tokens = c.get("tokens");

  const vars = env<EnvVariables>(c);

  const oauthClient = new google.auth.OAuth2({
    clientId: vars.GOOGLE_CLIENT_ID,
    clientSecret: vars.GOOGLE_CLIENT_SECRET,
    redirectUri: "http://localhost:3000/oauth/callback",
  });

  oauthClient.setCredentials(tokens);

  const sheets = google.sheets({
    version: "v4",
    auth: oauthClient,
  });

  const body = await c.req.parseBody();

  if (typeof body["receipt"] === "string") {
    return c.text("File cannot be a string", 400);
  }

  const image = await body["receipt"].arrayBuffer();

  const receipt = await generateObject({
    model: openai("gpt-4.1-mini", {
      structuredOutputs: true,
    }),
    system: SYSTEM_PROMPT,
    schemaName: "receipt",
    schemaDescription: "A representation of the contents of a receipt",
    schema: z.object({
      store: z.object({
        name: z.string(),
      }),
      date: z.string(),
      transaction: z.object({
        items: z.array(
          z.object({
            name: z.string(),
            price: z.number(),
          }),
        ),
        category: z.string(),
        subtotal: z.number(),
        tax: z.number(),
        total: z.number(),
      }),
    }),
    messages: [
      {
        role: "user",
        content: [
          {
            type: "image",
            image,
          },
        ],
      },
    ],
  });

  try {
    await sheets.spreadsheets.values.append({
      spreadsheetId: "1_KZhJju1hlpEeHpcLpYEeZVwukHTs86KejPG1iy9SWY",
      range: "A1:B1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        range: "A1:B1",
        majorDimension: "ROWS",
        values: receipt.object.transaction.items.map(({ name, price }) => {
          return [
            receipt.object.store.name,
            receipt.object.date,
            receipt.object.transaction.category,
            name,
            price,
          ];
        }),
      },
    });
  } catch (err) {
    console.log(err);
    throw err;
  }

  return c.redirect("/");
});

serve({
  fetch: app.fetch,
});
