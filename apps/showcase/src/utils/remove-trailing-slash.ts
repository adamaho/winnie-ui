/**
 * Portions of this code are from the @tanstack/react-router package
 *
 * @see https://github.com/TanStack/router/blob/main/packages/react-router/src/utils.ts
 */

/**
 * Remove the trailing slash from a string
 *
 * @param value - string to remove the trailing slash from
 * @param basepath - basepath to remove the trailing slash from
 * @returns string with the trailing slash removed
 */
export function removeTrailingSlash(value: string, basepath: string): string {
  if (value.endsWith("/") && value !== "/" && value !== `${basepath}/`) {
    return value.slice(0, -1);
  }
  return value;
}
