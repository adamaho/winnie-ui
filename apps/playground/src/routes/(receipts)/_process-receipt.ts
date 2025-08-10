import { openai } from "@ai-sdk/openai";
import { redirect } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { getWebRequest } from "@tanstack/react-start/server";
import { type FilePart, generateObject, type ImagePart } from "ai";
import { google } from "googleapis";
import * as z from "zod";

import { auth } from "~/lib/auth";
import { RECEIPT_SYSTEM_PROMPT } from "~/constants/receipt-system-prompt";

const spreadsheetId = "1_KZhJju1hlpEeHpcLpYEeZVwukHTs86KejPG1iy9SWY";

/**
 * Server function that processes receipt images using AI and integrates with Google Sheets.
 *
 * This function:
 * 1. Authenticates the user via Google OAuth
 * 2. Sets up Google Sheets API access
 * 3. Uses OpenAI to extract structured data from receipt images
 * 4. Returns parsed receipt information including store details, items, and totals
 *
 * @throws {redirect} Redirects to /receipts with 401 status if authentication fails
 * @returns {Promise<void>} Currently logs the spreadsheet data to console
 */
export const processReceipt = createServerFn({ method: "POST" })
  .validator((data) => {
    if (!(data instanceof FormData)) {
      throw new Error("Invalid form data");
    }

    const receipts = data.getAll("receipts") as File[];

    if (!receipts || receipts.length === 0) {
      throw new Error("Field receipts is required");
    }

    return {
      receipts,
    };
  })
  .handler(async ({ data: { receipts } }) => {
    const request = getWebRequest();

    const { accessToken } = await auth.api.getAccessToken({
      body: {
        providerId: "google",
      },
      headers: request.headers,
    });

    if (!accessToken) {
      throw redirect({
        to: "/receipts",
        statusCode: 401,
      });
    }

    const oauth2Client = new google.auth.OAuth2();
    oauth2Client.setCredentials({
      access_token: accessToken,
    });

    const sheets = google.sheets({
      version: "v4",
      auth: oauth2Client,
    });

    const content = await Promise.all(
      receipts.map(async (r) => {
        const isImage = r.type.startsWith("image");
        const buffer = await r.arrayBuffer();

        if (isImage) {
          return {
            type: "image",
            image: buffer,
            mimeType: r.type,
          } satisfies ImagePart;
        }

        return {
          type: "file",
          data: buffer,
          mimeType: r.type,
        } satisfies FilePart;
      }),
    );

    /**
     * Process receipts with ai
     */
    const receiptData = await generateObject({
      model: openai("gpt-4.1-mini", {
        structuredOutputs: true,
      }),
      system: RECEIPT_SYSTEM_PROMPT,
      schemaDescription: "A array of shopping receipt objects",
      schema: z.object({
        receipts: z.array(
          z.object({
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
        ),
      }),
      messages: [
        {
          role: "user",
          content,
        },
      ],
    });

    /**
     * Create the rows for the google sheet
     */
    let rows: [string, string, string, string, number][] = [];
    for (const receipt of receiptData.object.receipts) {
      for (const { name, price } of receipt.transaction.items) {
        rows.push([
          receipt.store.name,
          receipt.date,
          receipt.transaction.category,
          name,
          price,
        ]);
      }
    }

    try {
      await sheets.spreadsheets.values.append({
        spreadsheetId: "1_KZhJju1hlpEeHpcLpYEeZVwukHTs86KejPG1iy9SWY",
        range: "A1:B1",
        valueInputOption: "USER_ENTERED",
        requestBody: {
          range: "A1:B1",
          majorDimension: "ROWS",
          values: rows,
        },
      });
    } catch (err) {
      console.log(err);
      throw new Error("Failed to write rows to sheet");
    }
  });
