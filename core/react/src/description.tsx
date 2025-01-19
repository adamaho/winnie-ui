import { ComponentRef, ForwardedRef } from "react";
import {
  Text as AriaText,
  type TextProps as AriaTextProps,
} from "react-aria-components";

import clsx from "clsx";

/* -------------------------------------------------------------------------------------------------
 * Description
 * -----------------------------------------------------------------------------------------------*/
type DescriptionProps = AriaTextProps & {
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
function Description({ children, className, ref, ...props }: DescriptionProps) {
  return (
    <AriaText
      {...props}
      slot="description"
      data-component="description"
      data-slot="description"
      className={clsx("wui-description", className)}
      ref={ref}
    >
      {children}
    </AriaText>
  );
}

export { Description };
export type { DescriptionProps };
