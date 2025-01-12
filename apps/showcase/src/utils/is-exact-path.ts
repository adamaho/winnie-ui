/**
 * Portions of this code are from the @tanstack/react-router package
 *
 * @see https://github.com/TanStack/router/blob/main/packages/react-router/src/utils.ts
 */

import { removeTrailingSlash } from "./remove-trailing-slash";

/**
 * Check if two paths are exactly the same
 *
 * @param pathName1 - The first path to compare
 * @param pathName2 - The second path to compare
 * @param basepath - The basepath to compare the paths against
 * @returns True if the paths are exactly the same, false otherwise
 *
 * @example
 *
 * ```ts
 * isExactPath("/sample/path1", "/sample/path1/", "/") // true
 * isExactPath("/sample/path1", "/sample/path1/some", "/") // false
 * ```
 */
export function isExactPath(
  pathName1: string,
  pathName2: string,
  basepath: string,
): boolean {
  return (
    removeTrailingSlash(pathName1, basepath) ===
    removeTrailingSlash(pathName2, basepath)
  );
}
