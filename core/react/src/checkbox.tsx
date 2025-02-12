import { ComponentPropsWithoutRef, ComponentRef, ForwardedRef } from "react";
import {
  Checkbox as AriaCheckbox,
  CheckboxProps as AriaCheckboxProps,
  Text as AriaText,
  TextProps as AriaTextProps,
} from "react-aria-components";

import { Checkmark, MinusLarge } from "@winnie-ui/icons/react/solid";

import clsx from "clsx";

/* -------------------------------------------------------------------------------------------------
 * CheckboxField
 * -----------------------------------------------------------------------------------------------*/
type CheckboxFieldProps = ComponentPropsWithoutRef<"div"> & {
  /**
   * Ref to checkbox element
   */
  ref?: ForwardedRef<ComponentRef<"div">>;
};

function CheckboxField({
  children,
  className,
  ref,
  ...props
}: CheckboxFieldProps) {
  return (
    <div
      {...props}
      data-component="field"
      className={clsx(className, "wui-field")}
      ref={ref}
    >
      {children}
    </div>
  );
}

/* -------------------------------------------------------------------------------------------------
 * Checkbox
 * -----------------------------------------------------------------------------------------------*/
type CheckboxProps = AriaCheckboxProps & {
  /**
   * Ref to checkbox element
   */
  ref?: ForwardedRef<ComponentRef<typeof AriaCheckbox>>;

  /**
   * Changes the size of the checkbox
   *
   * @default "md"
   */
  size?: "sm" | "md" | "lg";
};

/**
 * # Checkbox
 * Captures binary user input.
 *
 * ## Anatomy
 * Arrange the components in the structure below.
 *
 * ```tsx
 * <Checkbox>
 *  <CheckboxLabel />
 * </Checkbox>
 * ```
 *
 * See {@link https://winnie-ui.com/react/docs/components/checkbox Documentation} for examples.
 */
function Checkbox({
  className,
  children,
  ref,
  size = "md",
  ...props
}: CheckboxProps) {
  return (
    <AriaCheckbox
      {...props}
      data-component="checkbox"
      className={clsx("wui-checkbox", className)}
      ref={ref}
    >
      {({ isIndeterminate, isSelected }) => {
        return (
          <>
            <div
              data-slot="indicator"
              className="wui-checkbox__indicator"
              data-size={size}
            >
              {isIndeterminate && isSelected && (
                <MinusLarge
                  aria-hidden="true"
                  data-slot="icon"
                  className="wui-checkbox__icon"
                />
              )}
              {!isIndeterminate && isSelected && (
                <Checkmark
                  aria-hidden="true"
                  data-slot="icon"
                  className="wui-checkbox__icon"
                />
              )}
            </div>
            {children}
          </>
        );
      }}
    </AriaCheckbox>
  );
}

/* -------------------------------------------------------------------------------------------------
 * CheckboxLabel
 * -----------------------------------------------------------------------------------------------*/
type CheckboxLabelProps = AriaTextProps & {
  /**
   * Ref to checkbox label element
   */
  ref?: ForwardedRef<ComponentRef<typeof AriaText>>;
};

function CheckboxLabel({
  children,
  className,
  ref,
  ...props
}: CheckboxLabelProps) {
  return (
    <AriaText
      {...props}
      data-slot="label"
      className={clsx(className, "wui-checkbox__label")}
      ref={ref}
    >
      {children}
    </AriaText>
  );
}

export { Checkbox, CheckboxField, CheckboxLabel };
export type { CheckboxProps, CheckboxFieldProps, CheckboxLabelProps };
