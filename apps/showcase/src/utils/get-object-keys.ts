/**
 * Portions of this code are from the @tanstack/react-router package
 *
 * @see https://github.com/TanStack/router/blob/main/packages/react-router/src/utils.ts
 */

/**
 * Get the keys of an object
 *
 * @param obj - The object to get the keys of
 * @param ignoreUndefined - Whether to ignore undefined keys
 * @returns The keys of the object
 */
export function getObjectKeys(obj: any, ignoreUndefined: boolean) {
  let keys = Object.keys(obj);
  if (ignoreUndefined) {
    keys = keys.filter((key) => obj[key] !== undefined);
  }
  return keys;
}
