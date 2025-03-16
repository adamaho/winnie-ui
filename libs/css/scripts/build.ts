import { buildCss } from "@winnie-ui/lightning";

buildCss({
  inDir: "src",
  outDir: "dist",
}).catch((error) => console.log("Failed to build css", error));
