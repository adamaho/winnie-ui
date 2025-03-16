import { Glob } from "bun";

import browserslist from "browserslist";
import { browserslistToTargets, bundle } from "lightningcss";

type BuildCssOptions = {
  /**
   * directory to bundle css files from
   */
  inDir: string;

  /**
   * directory to place css file in
   */
  outDir: string;

  /**
   * browserslist targets
   */
  targets?: string;
};

/**
 * Builds each file matching the glob into its own file
 *
 * @param options options available on the build
 */
async function buildCss({
  inDir,
  outDir,
  targets = "last 2 versions",
}: BuildCssOptions) {
  const t = browserslistToTargets(browserslist(targets));
  const glob = new Glob(`**/*.css`);

  /**
   * Collect files to bundle
   */
  const filesToBundle: string[][] = [];
  try {
    for await (const file of glob.scan(inDir)) {
      const outFile = file.split(".")[0];
      filesToBundle.push([`${inDir}/${file}`, `${outDir}/${outFile}.min.css`]);
    }
  } catch (error) {
    console.log("Failed to parse glob file", error);
    return;
  }

  /**
   * Bundle files synchronously and write them to outDir
   */
  for (const [inFile, outFile] of filesToBundle) {
    const { code } = bundle({ filename: inFile, minify: true, targets: t });
    await Bun.write(outFile, code);
    console.log(`bundled ${inFile} and wrote it to ${outFile}`);
  }
}

export { buildCss };
