import {
  Children,
  ComponentPropsWithoutRef,
  ComponentRef,
  ForwardedRef,
  PropsWithChildren,
  ReactElement,
  cloneElement,
} from "react";
import {
  Breadcrumb as AriaBreadcrumb,
  type BreadcrumbProps as AriaBreadcrumbProps,
  Breadcrumbs as AriaBreadcrumbs,
  type BreadcrumbsProps as AriaBreadcrumbsProps,
  Link as AriaLink,
  type LinkProps as AriaLinkProps,
} from "react-aria-components";

import { ChevronRight } from "@winnie-ui/icons/react/solid";

import clsx from "clsx";

/* -------------------------------------------------------------------------------------------------
 * Breadcrumbs
 * -----------------------------------------------------------------------------------------------*/
type BreadcrumbsProps<T> = AriaBreadcrumbsProps<T> & {
  /**
   * Ref to breadcrumbselement
   */
  ref?: ForwardedRef<ComponentRef<typeof AriaBreadcrumbs>>;

  /**
   * Size of the breadcrumbs
   *
   * @default "md"
   */
  size?: "sm" | "md" | "lg";
};

function Breadcrumbs<T extends object>({
  children,
  className,
  ref,
  size = "md",
  ...props
}: BreadcrumbsProps<T>) {
  return (
    <AriaBreadcrumbs
      {...props}
      className={clsx("wui-breadcrumbs", className)}
      data-component="breadcrumbs"
      data-slot="breadcrumbs"
      data-size={size}
      ref={ref}
    >
      {children}
    </AriaBreadcrumbs>
  );
}

/* -------------------------------------------------------------------------------------------------
 * Breadcrumb
 * -----------------------------------------------------------------------------------------------*/
type BreadcrumbProps = AriaBreadcrumbProps & {
  /**
   * Ref to breadcrumb element
   */
  ref?: ForwardedRef<ComponentRef<typeof AriaBreadcrumb>>;

  /**
   * Separator type
   *
   * @default "chevron"
   */
  separator?: "chevron" | "slash";
};

function Breadcrumb({
  children,
  className,
  ref,
  separator = "chevron",
  ...props
}: BreadcrumbProps) {
  return (
    <AriaBreadcrumb
      {...props}
      className={clsx("wui-breadcrumb", className)}
      data-component="breadcrumb"
      ref={ref}
    >
      <>
        {children}
        {separator === "slash" && (
          <span aria-hidden="true" data-slot="separator">
            /
          </span>
        )}
        {separator === "chevron" && (
          <ChevronRight aria-hidden="true" data-slot="separator" />
        )}
      </>
    </AriaBreadcrumb>
  );
}

/* -------------------------------------------------------------------------------------------------
 * BreadcrumbLink
 * -----------------------------------------------------------------------------------------------*/
type BreadcrumbLinkProps = AriaLinkProps & {
  /**
   * Ref to breadcrumb link element
   */
  ref?: ForwardedRef<ComponentRef<typeof AriaLink>>;
};

function BreadcrumbLink({
  children,
  className,
  ref,
  ...props
}: BreadcrumbLinkProps) {
  return (
    <AriaLink
      {...props}
      className={clsx("wui-breadcrumb__link", className)}
      data-slot="link"
      ref={ref}
    >
      {children}
    </AriaLink>
  );
}

/* -------------------------------------------------------------------------------------------------
 * BreadcrumbLabel
 * -----------------------------------------------------------------------------------------------*/
type BreadcrumbLabelProps = ComponentPropsWithoutRef<"span"> & {
  /**
   * Ref to breadcrumb label element
   */
  ref?: ForwardedRef<ComponentRef<"span">>;
};

function BreadcrumbLabel({
  children,
  className,
  ref,
  ...props
}: BreadcrumbLabelProps) {
  return (
    <span
      {...props}
      className={clsx("wui-breadcrumb__label", className)}
      data-slot="label"
      ref={ref}
    >
      {children}
    </span>
  );
}

/* -------------------------------------------------------------------------------------------------
 * BreadcrumbIcon
 * -----------------------------------------------------------------------------------------------*/
type BreadcrumbIconProps = {
  className?: string;
};

const BreadcrumbIcon = ({
  className,
  children,
}: PropsWithChildren<BreadcrumbIconProps>) => {
  /**
   * Check that there is a single child passed
   */
  if (Children.count(children) > 1) {
    throw new Error("BreadcrumbIcon accepts only one child");
  }
  /**
   * Convert children to array
   */
  const icon = Children.only(children);

  return cloneElement(
    icon as ReactElement<BreadcrumbIconProps & { "data-slot": string }>,
    {
      className: clsx("wui-breadcrumb__icon", className),
      "data-slot": "icon",
    },
  );
};

export {
  Breadcrumbs,
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbLabel,
  BreadcrumbIcon,
};
export type {
  BreadcrumbsProps,
  BreadcrumbProps,
  BreadcrumbLinkProps,
  BreadcrumbLabelProps,
  BreadcrumbIconProps,
};
