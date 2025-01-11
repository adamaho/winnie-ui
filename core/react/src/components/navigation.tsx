import clsx from "clsx";
import {
  Children,
  type ComponentPropsWithoutRef,
  type ComponentRef,
  type ForwardedRef,
  PropsWithChildren,
  ReactElement,
  cloneElement,
} from "react";
import {
  Button as AriaButton,
  type ButtonProps as AriaButtonProps,
  Disclosure as AriaDisclosure,
  DisclosurePanel as AriaDisclosurePanel,
  type DisclosurePanelProps as AriaDisclosurePanelProps,
  type DisclosureProps as AriaDisclosureProps,
  Heading as AriaHeading,
  Link as AriaLink,
  type LinkProps as AriaLinkProps,
} from "react-aria-components";

import { ChevronRight } from "@winnie-ui/icons/line/chevron-right";

/* -------------------------------------------------------------------------------------------------
 * Navigation
 * -----------------------------------------------------------------------------------------------*/
type NavigationProps = ComponentPropsWithoutRef<"ul"> & {
  /**
   * Ref to ul element
   */
  ref?: ForwardedRef<ComponentRef<"ul">>;
};

/**
 * # Navigation
 * Provides users the ability to navigate an application.
 *
 * ## Anatomy
 * Arrange the components in the structure below.
 *
 * ```tsx
 * <Navigation>
 *   <NavigationDisclosure>
 *    <NavigationDisclosureTrigger>
 *      <NavigationDisclosureTriggerLabel />
 *      <NavigationDisclosureTriggerIcon />
 *    </NavigationDisclosureTrigger>
 *    <NavigationDisclosureContent>
 *      <NavigationItem>
 *        <NavigationItemIcon />
 *        <NavigationItemLabel />
 *      </NavigationItem>
 *    </NavigationDisclosureContent>
 *   </NavigationDisclosure>
 *   <NavigationItem>
 *     <NavigationItemIcon />
 *     <NavigationItemLabel />
 *   </NavigationItem>
 * </Navigation>
 * ```
 *
 * See {@link https://winnie-ui.com/react/docs/components/navigation Documentation} for examples.
 */
function Navigation({ children, className, ref, ...props }: NavigationProps) {
  return (
    <ul
      {...props}
      className={clsx("wui-navigation", className)}
      ref={ref}
      data-component="navigation"
    >
      {children}
    </ul>
  );
}

/* -------------------------------------------------------------------------------------------------
 * NavigationDisclosure
 * -----------------------------------------------------------------------------------------------*/
type NavigationDisclosureProps = AriaDisclosureProps & {
  /**
   * Ref to disclosure element
   */
  ref?: ForwardedRef<ComponentRef<typeof AriaDisclosure>>;
};

function NavigationDisclosure({
  children,
  className,
  ref,
  ...props
}: NavigationDisclosureProps) {
  return (
    <AriaDisclosure
      {...props}
      className={clsx("wui-navigation__disclosure")}
      data-component="disclosure"
      ref={ref}
    >
      {children}
    </AriaDisclosure>
  );
}

/* -------------------------------------------------------------------------------------------------
 * NavigationDisclosureTrigger
 * -----------------------------------------------------------------------------------------------*/
type NavigationDisclosureTriggerProps = Omit<AriaButtonProps, "children"> & {
  /**
   * Ref to disclosure trigger element
   */
  ref?: ForwardedRef<ComponentRef<typeof AriaButton>>;
};

function NavigationDisclosureTrigger({
  children,
  className,
  ref,
  ...props
}: PropsWithChildren<NavigationDisclosureTriggerProps>) {
  return (
    <AriaHeading>
      <AriaButton
        {...props}
        className={clsx(
          "wui-navigation__item",
          "wui-navigation__disclosure-trigger",
          className,
        )}
        data-component="navigation-item"
        ref={ref}
        slot="trigger"
      >
        {children}
        <ChevronRight data-slot="indicator" />
      </AriaButton>
    </AriaHeading>
  );
}

/* -------------------------------------------------------------------------------------------------
 * NavigationDisclosureTriggerLabel
 * -----------------------------------------------------------------------------------------------*/
type NavigationDisclosureTriggerLabelProps =
  ComponentPropsWithoutRef<"span"> & {
    /**
     * Ref to nav item label element
     */
    ref?: ForwardedRef<ComponentRef<"span">>;
  };

function NavigationDisclosureTriggerLabel({
  children,
  className,
  ref,
  ...props
}: NavigationDisclosureTriggerLabelProps) {
  return (
    <span
      {...props}
      className={clsx("wui-navigation__disclosure-trigger-label", className)}
      data-slot="label"
      ref={ref}
    >
      {children}
    </span>
  );
}

/* -------------------------------------------------------------------------------------------------
 * NavigationDisclosureTriggerIcon
 * -----------------------------------------------------------------------------------------------*/
type NavigationDisclosureTriggerIconProps = {
  className?: string;
};

const NavigationDisclosureTriggerIcon = ({
  className,
  children,
}: PropsWithChildren<NavigationDisclosureTriggerIconProps>) => {
  /**
   * Check that there is a single child passed
   */
  if (Children.count(children) > 1) {
    throw new Error("NavigationDisclosureTriggerIcon accepts only one child");
  }
  /**
   * Convert children to array
   */
  const icon = Children.only(children);

  return cloneElement(
    icon as ReactElement<
      NavigationDisclosureTriggerIconProps & { "data-slot": string }
    >,
    {
      className: clsx("wui-navigation__disclosure-trigger-icon", className),
      "data-slot": "icon",
    },
  );
};

/* -------------------------------------------------------------------------------------------------
 * NavigationDisclosureContent
 * -----------------------------------------------------------------------------------------------*/
type NavigationDisclosureContentProps = AriaDisclosurePanelProps & {
  /**
   * Ref to disclosure content element
   */
  ref?: ForwardedRef<ComponentRef<typeof AriaDisclosurePanel>>;
};

function NavigationDisclosureContent({
  children,
  className,
  ref,
  ...props
}: NavigationDisclosureContentProps) {
  return (
    <AriaDisclosurePanel
      {...props}
      className={clsx("wui-navigation__disclosure-content", className)}
      data-component="navigation-group"
      ref={ref}
    >
      <ul>{children}</ul>
    </AriaDisclosurePanel>
  );
}

/* -------------------------------------------------------------------------------------------------
 * NavigationGroup
 * -----------------------------------------------------------------------------------------------*/
type NavigationGroupProps = ComponentPropsWithoutRef<"ul"> & {
  /**
   * Ref to group element
   */
  ref?: ForwardedRef<ComponentRef<"ul">>;
};

function NavigationGroup({
  children,
  className,
  ref,
  ...props
}: NavigationGroupProps) {
  return (
    <ul
      {...props}
      className={clsx("wui-navigation__group", className)}
      data-component="navigation-group"
      ref={ref}
    >
      {children}
    </ul>
  );
}

/* -------------------------------------------------------------------------------------------------
 * NavigationItem
 * -----------------------------------------------------------------------------------------------*/
type NavigationItemProps = AriaLinkProps & {
  /**
   * If true, the navigation item is represents the current page
   *
   * @default false
   */
  isCurrent?: boolean;

  /**
   * Ref to nav item element
   */
  ref?: ForwardedRef<ComponentRef<typeof AriaLink>>;
};

function NavigationItem({
  children,
  className,
  isCurrent = false,
  ref,
  ...props
}: NavigationItemProps) {
  return (
    <li>
      <AriaLink
        {...props}
        className={clsx("wui-navigation__item", className)}
        data-component="navigation-item"
        aria-current={isCurrent ? "page" : undefined}
        ref={ref}
      >
        {children}
      </AriaLink>
    </li>
  );
}

/* -------------------------------------------------------------------------------------------------
 * NavigationItemLabel
 * -----------------------------------------------------------------------------------------------*/
type NavigationItemLabelProps = ComponentPropsWithoutRef<"span"> & {
  /**
   * Ref to nav item label element
   */
  ref?: ForwardedRef<ComponentRef<"span">>;
};

function NavigationItemLabel({
  children,
  className,
  ref,
  ...props
}: NavigationItemLabelProps) {
  return (
    <span
      {...props}
      className={clsx("wui-navigation__item-label", className)}
      data-slot="label"
      ref={ref}
    >
      {children}
    </span>
  );
}

/* -------------------------------------------------------------------------------------------------
 * NavigationItemIcon
 * -----------------------------------------------------------------------------------------------*/
type NavigationItemIconProps = {
  className?: string;
};

const NavigationItemIcon = ({
  className,
  children,
}: PropsWithChildren<NavigationItemIconProps>) => {
  /**
   * Check that there is a single child passed
   */
  if (Children.count(children) > 1) {
    throw new Error("NavigationItemIcon accepts only one child");
  }
  /**
   * Convert children to array
   */
  const icon = Children.only(children);

  return cloneElement(
    icon as ReactElement<NavigationItemIconProps & { "data-slot": string }>,
    {
      className: clsx("wui-navigation__item-icon", className),
      "data-slot": "icon",
    },
  );
};

export {
  Navigation,
  NavigationItem,
  NavigationItemLabel,
  NavigationItemIcon,
  NavigationGroup,
  NavigationDisclosure,
  NavigationDisclosureTrigger,
  NavigationDisclosureTriggerIcon,
  NavigationDisclosureTriggerLabel,
  NavigationDisclosureContent,
};
export type {
  NavigationProps,
  NavigationItemProps,
  NavigationItemIconProps,
  NavigationItemLabelProps,
  NavigationGroupProps,
  NavigationDisclosureProps,
  NavigationDisclosureTriggerProps,
  NavigationDisclosureTriggerIconProps,
  NavigationDisclosureTriggerLabelProps,
  NavigationDisclosureContentProps,
};
