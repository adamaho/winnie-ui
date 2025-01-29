import { ComponentRef, ForwardedRef } from "react";
import {
  Label as AriaLabel,
  type LabelProps as AriaLabelProps,
} from "react-aria-components";

import clsx from "clsx";

/* -------------------------------------------------------------------------------------------------
 * FieldLabel
 * -----------------------------------------------------------------------------------------------*/
type FieldLabelProps = AriaLabelProps & {
  /**
   * Ref to label element
   */
  ref?: ForwardedRef<ComponentRef<typeof AriaLabel>>;
};

/**
 * # FieldLabel
 * Displays primary information about a form field.
 *
 * ## Anatomy
 * Arrange the components in the structure below.
 *
 * ```tsx
 * <FieldLabel />
 * ```
 */
function FieldLabel({ children, className, ref, ...props }: FieldLabelProps) {
  return (
    <AriaLabel
      {...props}
      data-component="label"
      data-slot="label"
      slot="label"
      className={clsx("wui-label", className)}
      ref={ref}
    >
      {children}
    </AriaLabel>
  );
}

export { FieldLabel };
export type { FieldLabelProps };
