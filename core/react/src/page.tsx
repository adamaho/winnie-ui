import {
  type ComponentPropsWithoutRef,
  type ComponentRef,
  type ForwardedRef,
} from "react";

import clsx from "clsx";

/* -------------------------------------------------------------------------------------------------
 * Page
 * -----------------------------------------------------------------------------------------------*/
type PageProps = ComponentPropsWithoutRef<"div"> & {
  /**
   * Ref to span element
   */
  ref?: ForwardedRef<ComponentRef<"div">>;
};

/**
 * # Page
 * Represents an application page.
 *
 * ## Anatomy
 * Arrange the components in the structure below.
 *
 * ```tsx
 * <Page>
 *  <PageHeader />
 *  <PageContent />
 * </Page>
 * ```
 *
 * See {@link https://winnie-ui.com/react/docs/components/page Documentation} for examples.
 */
function Page({ children, className, ref, ...props }: PageProps) {
  return (
    <div
      {...props}
      className={clsx("wui-page", className)}
      ref={ref}
      data-component="page"
    >
      {children}
    </div>
  );
}

/* -------------------------------------------------------------------------------------------------
 * PageHeader
 * -----------------------------------------------------------------------------------------------*/
type PageHeaderProps = ComponentPropsWithoutRef<"header"> & {
  /**
   * Ref to span element
   */
  ref?: ForwardedRef<ComponentRef<"header">>;
};
function PageHeader({ children, className, ref, ...props }: PageHeaderProps) {
  return (
    <header
      {...props}
      className={clsx("wui-page__header", className)}
      data-component="header"
      ref={ref}
    >
      {children}
    </header>
  );
}

/* -------------------------------------------------------------------------------------------------
 * PageContent
 * -----------------------------------------------------------------------------------------------*/
type PageContentProps = ComponentPropsWithoutRef<"div"> & {
  /**
   * Ref to span element
   */
  ref?: ForwardedRef<ComponentRef<"div">>;
};

function PageContent({ children, className, ref, ...props }: PageContentProps) {
  return (
    <div
      {...props}
      className={clsx("wui-page__content", className)}
      data-component="content"
      ref={ref}
    >
      {children}
    </div>
  );
}

export { Page, PageHeader, PageContent };
export type { PageProps, PageHeaderProps, PageContentProps };
