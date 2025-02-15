import { ComponentRef, ForwardedRef } from "react";
import {
  Text as AriaText,
  type TextProps as AriaTextProps,
} from "react-aria-components";

import clsx from "clsx";

/* -------------------------------------------------------------------------------------------------
 * FieldError
 * -----------------------------------------------------------------------------------------------*/
type FieldErrorProps = AriaTextProps & {
  /**
   * Ref to error element
   */
  ref?: ForwardedRef<ComponentRef<typeof AriaText>>;
};

/**
 * # FieldError
 * Displays an error message for a form field.
 *
 * ## Anatomy
 * Arrange the components in the structure below.
 *
 * ```tsx
 * <FieldError />
 * ```
 */
function FieldError({ children, className, ref, ...props }: FieldErrorProps) {
  return (
    <AriaText
      {...props}
      data-component="error"
      data-slot="validation"
      className={clsx("wui-error", className)}
      ref={ref}
    >
      {children}
    </AriaText>
  );
}

export { FieldError };
export type { FieldErrorProps };
