import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const docsTypeSchema = z.enum(["react-aria", "base-ui", "react"]);

const docsSchema = z.object({
  title: z.string(),
  description: z.string(),
  documentation: z
    .array(
      z.object({
        label: z.string(),
        link: z.string(),
        icon: docsTypeSchema,
      }),
    )
    .optional(),
});

export type DocsSchema = z.infer<typeof docsSchema>;
export type DocType = z.infer<typeof docsTypeSchema>;

const css = defineCollection({
  loader: glob({
    pattern: ["**/*.mdx"],
    base: "./src/content/css",
  }),
});

const react = defineCollection({
  loader: glob({
    pattern: ["**/*.mdx"],
    base: "./src/content/react",
  }),
  schema: docsSchema,
});

export const collections = { css, react };
