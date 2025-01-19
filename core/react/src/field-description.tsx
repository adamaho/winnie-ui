import { ComponentRef, ForwardedRef } from "react";
import {
  Text as AriaText,
  type TextProps as AriaTextProps,
} from "react-aria-components";

import clsx from "clsx";

/* -------------------------------------------------------------------------------------------------
 * FieldDescription
 * -----------------------------------------------------------------------------------------------*/
type FieldDescriptionProps = AriaTextProps & {
  /**
   * Ref to description element
   */
  ref?: ForwardedRef<ComponentRef<typeof AriaText>>;
};

/**
 * # Description
 * Displays additional information about a form field.
 *
 * ## Anatomy
 * Arrange the components in the structure below.
 *
 * ```tsx
 * <Description />
 * ```
 */
function FieldDescription({
  children,
  className,
  ref,
  ...props
}: FieldDescriptionProps) {
  return (
    <AriaText
      {...props}
      data-component="description"
      data-slot="description"
      className={clsx("wui-description", className)}
      ref={ref}
    >
      {children}
    </AriaText>
  );
}

export { FieldDescription };
export type { FieldDescriptionProps };
