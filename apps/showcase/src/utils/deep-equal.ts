/**
 * Portions of this code are from the @tanstack/react-router package
 *
 * @see https://github.com/TanStack/router/blob/main/packages/react-router/src/utils.ts
 */

import { isPlainObject } from "@tanstack/react-router";
import { getObjectKeys } from "./get-object-keys";

/**
 * Deeply compare two values
 *
 * @param a - The first value to compare
 * @param b - The second value to compare
 * @param opts - Options for the comparison
 * @returns True if the values are deeply equal, false otherwise
 */
export function deepEqual(
  a: any,
  b: any,
  opts?: { partial?: boolean; ignoreUndefined?: boolean },
): boolean {
  if (a === b) {
    return true;
  }

  if (typeof a !== typeof b) {
    return false;
  }

  if (isPlainObject(a) && isPlainObject(b)) {
    const ignoreUndefined = opts?.ignoreUndefined ?? true;
    const aKeys = getObjectKeys(a, ignoreUndefined);
    const bKeys = getObjectKeys(b, ignoreUndefined);

    if (!opts?.partial && aKeys.length !== bKeys.length) {
      return false;
    }

    return bKeys.every((key) => deepEqual(a[key], b[key], opts));
  }

  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) {
      return false;
    }
    return !a.some((item, index) => !deepEqual(item, b[index], opts));
  }

  return false;
}
