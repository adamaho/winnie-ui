import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sentry from "@sentry/astro";
import expressiveCode from "astro-expressive-code";
import aws from "astro-sst";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://winnie-ui.com",
  output: "server",
  adapter: aws(),
  redirects: {
    "/": "/css",
    "/css/docs": "/css/docs/start/quick-start",
  },
  integrations: [
    expressiveCode(),
    mdx(),
    react(),
    sentry({
      dsn: "https://33f77d84c33d318cf8557e4ec13ea1dd@o4508645218516992.ingest.us.sentry.io/4508645220089856",
      sourceMapsUploadOptions: {
        project: "javascript-astro",
        authToken: process.env.SENTRY_AUTH_TOKEN,
      },
    }),
  ],
});
