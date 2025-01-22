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

import clsx from "clsx";

/* -------------------------------------------------------------------------------------------------
 * Breadcrumbs
 * -----------------------------------------------------------------------------------------------*/
type BreadcrumbsProps<T> = AriaBreadcrumbsProps<T> & {
  /**
   * Ref to breadcrumbselement
   */
  ref?: ForwardedRef<ComponentRef<typeof AriaBreadcrumbs>>;
};

function Breadcrumbs<T extends object>({
  children,
  className,
  ref,
  ...props
}: BreadcrumbsProps<T>) {
  return (
    <AriaBreadcrumbs
      {...props}
      className={clsx("wui-breadcrumbs", className)}
      data-component="breadcrumbs"
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
};

function Breadcrumb({ children, className, ref, ...props }: BreadcrumbProps) {
  return (
    <AriaBreadcrumb
      {...props}
      className={clsx("wui-breadcrumb", className)}
      data-component="breadcrumb"
      ref={ref}
    >
      {children}
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
      data-component="breadcrumb-link"
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
