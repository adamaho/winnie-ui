import { Hono } from "hono";
import { openai } from "./providers/openai";
import { generateObject } from "ai";
import z from "zod";
import { SYSTEM_PROMPT } from "./constants/system-prompt";
import type { Credentials } from "google-auth-library";
import { google } from "googleapis";
import { getCookie, setCookie } from "hono/cookie";

type Variables = {
  tokens: Credentials;
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
  const file = Bun.file("tokens.json");
  if (!(await file.exists())) return c.status(401);
  const all = JSON.parse(await file.text());
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

  const oauthClient = new google.auth.OAuth2({
    clientId: Bun.env.GOOGLE_CLIENT_ID,
    clientSecret: Bun.env.GOOGLE_CLIENT_SECRET,
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

  const oauthClient = new google.auth.OAuth2({
    clientId: Bun.env.GOOGLE_CLIENT_ID,
    clientSecret: Bun.env.GOOGLE_CLIENT_SECRET,
    redirectUri: "http://localhost:3000/oauth/callback",
  });
  const { tokens } = await oauthClient.getToken(c.req.query("code")!);
  oauthClient.setCredentials(tokens);

  // write user info to db
  const oauth2 = google.oauth2({ version: "v2", auth: oauthClient });
  const { data } = await oauth2.userinfo.get();
  await setCookie(c, "email", data.email!);

  const file = Bun.file("tokens.json");
  const existing = (await file.exists()) ? JSON.parse(await file.text()) : {};

  if (!(data.email! in existing)) {
    existing[data.email!] = tokens;
    await Bun.write("tokens.json", JSON.stringify(existing, null, 2));
  }

  return c.redirect("/");
});

app.get("/", async (c) => {
  return c.text("welcome");
});

app.get("/process-receipt", async (c) => {
  const tokens = c.get("tokens");

  const oauthClient = new google.auth.OAuth2({
    clientId: Bun.env.GOOGLE_CLIENT_ID,
    clientSecret: Bun.env.GOOGLE_CLIENT_SECRET,
    redirectUri: "http://localhost:3000/oauth/callback",
  });
  oauthClient.setCredentials(tokens);

  const sheets = google.sheets({
    version: "v4",
    auth: oauthClient,
  });
  // const body = await c.req.parseBody();

  // if (typeof body["file"] === "string") {
  //   return c.text("File cannot be a string", 400);
  // }

  // const image = await body["file"].arrayBuffer();

  const image = await Bun.file("./src/test.jpg").arrayBuffer();

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
    const result = await sheets.spreadsheets.values.append({
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
    console.log("updated sheet");
  } catch (err) {
    console.log(err);
    throw err;
  }

  return c.text("updated sheet");
});

export default {
  fetch: app.fetch,
  idleTimeout: 60,
};
