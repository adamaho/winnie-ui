/**
 * Portions of this code are from the @tanstack/react-router package
 *
 * @see https://github.com/TanStack/router/blob/main/packages/react-router/src/utils.ts
 */

/**
 * Check if a value has an object prototype
 *
 * @param o - The value to check
 * @returns True if the value has an object prototype, false otherwise
 */
export function hasObjectPrototype(o: any) {
  return Object.prototype.toString.call(o) === "[object Object]";
}
