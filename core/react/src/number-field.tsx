import {
  ComponentPropsWithoutRef,
  type ComponentRef,
  type ForwardedRef,
} from "react";
import {
  Group as AriaGroup,
  GroupProps as AriaGroupProps,
  Input as AriaInput,
  type InputProps as AriaInputProps,
  NumberField as AriaNumberField,
  type NumberFieldProps as AriaNumberFieldProps,
  Button,
} from "react-aria-components";

import {
  ChevronBottomSmall,
  ChevronTopSmall,
} from "@winnie-ui/icons/react/solid";

import clsx from "clsx";

/* -------------------------------------------------------------------------------------------------
 * NumberField
 * -----------------------------------------------------------------------------------------------*/
type NumberFieldProps = AriaNumberFieldProps & {
  /**
   * Ref to number field element
   */
  ref?: ForwardedRef<ComponentRef<typeof AriaNumberField>>;
};

/**
 * # NumberField
 * Allows a user to enter number.
 *
 * ## Anatomy
 * Arrange the components in the structure below.
 *
 * ```tsx
 * <NumberField>
 *  <FieldLabel />
 *  <FieldDescription />
 *  <NumberGroup>
 *    <NumberInput />
 *  </NumberGroup>
 *  <FieldError />
 * </NumberField>
 * ```
 */
function NumberField({ children, className, ref, ...props }: NumberFieldProps) {
  return (
    <AriaNumberField
      {...props}
      data-component="field"
      className={clsx("wui-field wui-number-field", className)}
      ref={ref}
    >
      {children}
    </AriaNumberField>
  );
}

/* -------------------------------------------------------------------------------------------------
 * NumberGroup
 * -----------------------------------------------------------------------------------------------*/
type NumberGroupProps = AriaGroupProps & {
  /*
   * Ref to group element
   */
  ref?: ForwardedRef<ComponentRef<typeof AriaGroup>>;

  /**
   * Changes the size of the input
   */
  size?: "sm" | "md" | "lg";
};

function NumberGroup({
  children,
  className,
  ref,
  size = "md",
  ...props
}: NumberGroupProps) {
  return (
    <AriaGroup
      {...props}
      data-component="input-group"
      data-slot="control"
      data-size={size}
      className={clsx("wui-control wui-input-group", className)}
    >
      {children}
    </AriaGroup>
  );
}

/* -------------------------------------------------------------------------------------------------
 * NumberStepper
 * -----------------------------------------------------------------------------------------------*/
type NumberStepperProps = ComponentPropsWithoutRef<"div"> & {
  /*
   * Ref to stepper element
   */
  ref?: ForwardedRef<ComponentRef<"div">>;
};

function NumberStepper({ className, ref, ...props }: NumberStepperProps) {
  return (
    <div
      {...props}
      data-component="stepper"
      data-slot="action"
      className={clsx("wui-stepper", className)}
    >
      <Button data-component="step" slot="increment">
        <ChevronTopSmall data-slot="icon" />
      </Button>
      <Button data-component="step" slot="decrement">
        <ChevronBottomSmall data-slot="icon" />
      </Button>
    </div>
  );
}

/* -------------------------------------------------------------------------------------------------
 * NumberInput
 * -----------------------------------------------------------------------------------------------*/
type NumberInputProps = Omit<AriaInputProps, "size"> & {
  /*
   * Ref to input element
   */
  ref?: ForwardedRef<ComponentRef<typeof AriaInput>>;
};

function NumberInput({ children, className, ref, ...props }: NumberInputProps) {
  return (
    <AriaInput
      {...props}
      data-component="input"
      data-slot="input"
      className={clsx("wui-control wui-input wui-number-input", className)}
    />
  );
}

export { NumberField, NumberGroup, NumberInput, NumberStepper };
export type {
  NumberFieldProps,
  NumberGroupProps,
  NumberInputProps,
  NumberStepperProps,
};
