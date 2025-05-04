import { Hono } from "hono";
import { openai } from "./providers/openai";
import { generateObject } from "ai";
import z from "zod";
import { SYSTEM_PROMPT } from "./constants/system-prompt";
import { google } from "googleapis";

const oauthClient = new google.auth.OAuth2({
  clientId: Bun.env.GOOGLE_CLIENT_ID,
  clientSecret: Bun.env.GOOGLE_CLIENT_SECRET,
  redirectUri: "http://localhost:3000/oauth/callback",
});

const scopes = ["https://www.googleapis.com/auth/spreadsheets"];

const state = crypto.randomUUID();

const authorizationUrl = oauthClient.generateAuthUrl({
  access_type: "offline",
  scope: scopes,
  include_granted_scopes: true,
  state,
});

const service = google.sheets({
  version: "v4",
  auth: oauthClient,
});

type Env = {
  Variables: {
    state: string;
  };
};

const app = new Hono<Env>();

app.get("/login", async (c) => {
  return c.redirect(authorizationUrl);
});

app.get("/oauth/callback", async (c) => {
  const params = new URL(c.req.url).searchParams;

  console.log(params.get("state"));

  if (params.get("error")) {
    console.log("Error:" + params.get("error"));
    return c.text("error");
  } else if (params.get("state") !== state) {
    console.log("State mismatch. Possible CSRF attack");
    return c.text("State mismatch. Possible CSRF attack", 400);
  } else {
    // Get access and refresh tokens (if access_type is offline)
    let { tokens } = await oauthClient.getToken(params.get("code") ?? "");
    oauthClient.setCredentials(tokens);
    return c.redirect("/");
  }
});

app.get("/", async (c) => {
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
    const result = await service.spreadsheets.values.append({
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
    console.log(result);
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
