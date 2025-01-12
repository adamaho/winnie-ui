/**
 * Portions of this code are from the @tanstack/react-router package
 *
 * @see https://github.com/TanStack/router/blob/main/packages/react-router/src/utils.ts
 */

import { hasObjectPrototype } from "./has-object-prototype";

/**
 * Check if a value is a plain object
 *
 * @param o - The value to check
 * @returns True if the value is a plain object, false otherwise
 */
export function isPlainObject(o: any) {
  if (!hasObjectPrototype(o)) {
    return false;
  }

  // If has modified constructor
  const ctor = o.constructor;
  if (typeof ctor === "undefined") {
    return true;
  }

  // If has modified prototype
  const prot = ctor.prototype;
  if (!hasObjectPrototype(prot)) {
    return false;
  }

  // If constructor does not have an Object-specific method
  if (!prot.hasOwnProperty("isPrototypeOf")) {
    return false;
  }

  // Most likely a plain Object
  return true;
}
