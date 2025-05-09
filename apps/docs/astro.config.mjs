import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
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

  integrations: [react(), expressiveCode(), , mdx()],

  vite: {
    plugins: [tailwindcss()],
  },
});
