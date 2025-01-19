import { ComponentRef, ForwardedRef } from "react";
import {
  Text as AriaText,
  type TextProps as AriaTextProps,
} from "react-aria-components";

import clsx from "clsx";

/* -------------------------------------------------------------------------------------------------
 * Description
 * -----------------------------------------------------------------------------------------------*/
type ErrorProps = AriaTextProps & {
  /**
   * Ref to error element
   */
  ref?: ForwardedRef<ComponentRef<typeof AriaText>>;
};

/**
 * # Error
 * Displays an error message for a form field.
 *
 * ## Anatomy
 * Arrange the components in the structure below.
 *
 * ```tsx
 * <Error />
 * ```
 */
function Error({ children, className, ref, ...props }: ErrorProps) {
  return (
    <AriaText
      {...props}
      slot="error"
      data-component="description"
      data-slot="error"
      className={clsx("wui-error", className)}
      ref={ref}
    >
      {children}
    </AriaText>
  );
}

export { Error };
export type { ErrorProps };
