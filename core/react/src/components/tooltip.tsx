import { ComponentPropsWithRef, ComponentRef, ForwardedRef } from "react";
import {
  Tooltip as AriaTooltip,
  TooltipProps as AriaTooltipProps,
  TooltipTrigger as AriaTooltipTrigger,
  TooltipTriggerComponentProps as AriaTooltipTriggerProps,
} from "react-aria-components";

import clsx from "clsx";

/* -------------------------------------------------------------------------------------------------
 * TooltipProvider
 * -----------------------------------------------------------------------------------------------*/
type TooltipProviderProps = AriaTooltipTriggerProps;

/**
 * # Tooltip
 *
 * ## Anatomy
 * A helpful description of an element when hovered or focused.
 *
 * ```tsx
 * <TooltipProvider>
 *  <Button />
 *  <Tooltip>
 *    <TooltipLabel />
 *  </Tooltip>
 * </TooltipProvider>
 * ```
 *
 * See {@link https://winnie-ui.com/react/docs/components/tooltip Documentation} for examples.
 */
function TooltipProvider({
  children,
  delay = 800,
  closeDelay = 0,
  ...props
}: TooltipProviderProps) {
  return (
    <AriaTooltipTrigger {...props} closeDelay={0} delay={delay}>
      {children}
    </AriaTooltipTrigger>
  );
}

/* -------------------------------------------------------------------------------------------------
 * Tooltip
 * -----------------------------------------------------------------------------------------------*/
type TooltipProps = AriaTooltipProps & {
  /**
   * Ref to tooltip element
   */
  ref?: ForwardedRef<ComponentRef<typeof AriaTooltip>>;
};
function Tooltip({
  className,
  children,
  ref,
  offset = 8,
  ...props
}: TooltipProps) {
  return (
    <AriaTooltip
      {...props}
      className={clsx("wui-tooltip", className)}
      data-component="tooltip"
      offset={offset}
      ref={ref}
    >
      {children}
    </AriaTooltip>
  );
}

/* -------------------------------------------------------------------------------------------------
 * TooltipLabel
 * -----------------------------------------------------------------------------------------------*/
type TooltipLabelProps = ComponentPropsWithRef<"span"> & {
  /**
   * Ref to span element
   */
  ref?: ForwardedRef<ComponentRef<"span">>;
};
function TooltipLabel({
  className,
  children,
  ref,
  ...props
}: TooltipLabelProps) {
  return (
    <span
      {...props}
      className={clsx("wui-tooltip__label", className)}
      data-slot="label"
      ref={ref}
    >
      {children}
    </span>
  );
}

export { TooltipProvider, Tooltip, TooltipLabel };
export type { TooltipProviderProps, TooltipProps, TooltipLabelProps };
