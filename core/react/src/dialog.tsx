import {
  type ComponentPropsWithRef,
  type ComponentRef,
  type ForwardedRef,
  ReactNode,
  useContext,
} from "react";
import {
  Dialog as AriaDialog,
  type DialogProps as AriaDialogProps,
  DialogTrigger as AriaDialogTrigger,
  type DialogTriggerProps as AriaDialogTriggerProps,
  Heading as AriaHeading,
  type HeadingProps as AriaHeadingProps,
  Modal as AriaModal,
  ModalOverlay as AriaModalOverlay,
  type ModalOverlayProps,
  OverlayTriggerStateContext,
} from "react-aria-components";

import { CrossLarge } from "@winnie-ui/icons/react/line";

import clsx from "clsx";

import { Button, ButtonIcon, type ButtonProps } from "./button";

/* -------------------------------------------------------------------------------------------------
 * DialogProvider
 * -----------------------------------------------------------------------------------------------*/
type DialogProviderProps = AriaDialogTriggerProps;

/**
 * # Dialog
 * Overlay shown above other application content.
 *
 * ## Anatomy
 * Arrange the components in the structure below.
 *
 * ```tsx
 * <DialogProvider>
 *  <Button />
 *  <Dialog>
 *    <DialogTitle />
 *    <DialogDescription />
 *    <DialogClose />
 *  </Dialog>
 * </DialogProvider>
 * ```
 *
 * See {@link https://winnie-ui.com/react/docs/components/dialog Documentation} for examples.
 */
function DialogProvider({ children, ...props }: DialogProviderProps) {
  return <AriaDialogTrigger {...props}>{children}</AriaDialogTrigger>;
}

/* -------------------------------------------------------------------------------------------------
 * Dialog
 * -----------------------------------------------------------------------------------------------*/
type DialogProps = AriaDialogProps & {
  /**
   * Whether the dialog can be dismissed by clicking outside of it
   */
  isDismissible?: ModalOverlayProps["isDismissable"];

  /**
   * If true, pressing the escape key will not dismiss the dialog
   */
  isKeyboardDismissDisabled?: ModalOverlayProps["isKeyboardDismissDisabled"];

  /**
   * Ref to dialog element
   */
  ref?: ForwardedRef<ComponentRef<typeof AriaDialog>>;

  /**
   * Modifies the width of the dialog
   */
  width?: "1" | "2" | "3";
};
function Dialog({
  className,
  children,
  isDismissible,
  isKeyboardDismissDisabled,
  ref,
  width = "2",
  ...props
}: DialogProps) {
  return (
    <AriaModalOverlay data-component="overlay">
      <AriaModal
        data-component="modal"
        isDismissable={isDismissible}
        isKeyboardDismissDisabled={isKeyboardDismissDisabled}
      >
        <AriaDialog
          {...props}
          className={clsx("wui-dialog", className)}
          data-component="dialog"
          data-width={width}
          ref={ref}
        >
          {children}
        </AriaDialog>
      </AriaModal>
    </AriaModalOverlay>
  );
}

/* -------------------------------------------------------------------------------------------------
 * DialogHeader
 * -----------------------------------------------------------------------------------------------*/
type DialogHeaderProps = ComponentPropsWithRef<"header"> & {
  /**
   * Ref to header element
   */
  ref?: ForwardedRef<ComponentRef<"header">>;
};

function DialogHeader({
  className,
  children,
  ref,
  ...props
}: DialogHeaderProps) {
  return (
    <header
      {...props}
      className={clsx("wui-dialog__header", className)}
      data-component="header"
      ref={ref}
    >
      {children}
    </header>
  );
}

/* -------------------------------------------------------------------------------------------------
 * DialogTitle
 * -----------------------------------------------------------------------------------------------*/
type DialogTitleProps = AriaHeadingProps & {
  /**
   * Ref to title element
   */
  ref?: ForwardedRef<ComponentRef<typeof AriaHeading>>;
};

function DialogTitle({ className, children, ref, ...props }: DialogTitleProps) {
  return (
    <AriaHeading
      {...props}
      className={clsx("wui-dialog__title", className)}
      data-slot="title"
      slot="title"
      ref={ref}
    >
      {children}
    </AriaHeading>
  );
}

/* -------------------------------------------------------------------------------------------------
 * DialogDescription
 * -----------------------------------------------------------------------------------------------*/
type DialogDescriptionProps = ComponentPropsWithRef<"p"> & {
  /**
   * Ref to description element
   */
  ref?: ForwardedRef<ComponentRef<"p">>;
};

function DialogDescription({
  className,
  children,
  ref,
  ...props
}: DialogDescriptionProps) {
  return (
    <p
      {...props}
      className={clsx("wui-dialog__description", className)}
      data-slot="description"
      ref={ref}
    >
      {children}
    </p>
  );
}

/* -------------------------------------------------------------------------------------------------
 * DialogContent
 * -----------------------------------------------------------------------------------------------*/
type DialogContentProps = ComponentPropsWithRef<"div"> & {
  /**
   * Ref to content element
   */
  ref?: ForwardedRef<ComponentRef<"div">>;
};

function DialogContent({
  className,
  children,
  ref,
  ...props
}: DialogContentProps) {
  return (
    <div
      {...props}
      className={clsx("wui-dialog__content", className)}
      data-component="content"
      ref={ref}
    >
      {children}
    </div>
  );
}

/* -------------------------------------------------------------------------------------------------
 * DialogClose
 * -----------------------------------------------------------------------------------------------*/
type DialogCloseProps = ButtonProps;

function DialogClose({ className, children, ref, ...props }: DialogCloseProps) {
  return (
    <Button
      {...props}
      className={clsx("wui-dialog__close", className)}
      data-slot="close"
      slot="close"
      color="grey"
      size="sm"
      variant="2"
      ref={ref}
    >
      <ButtonIcon>
        <CrossLarge />
      </ButtonIcon>
    </Button>
  );
}

/* -------------------------------------------------------------------------------------------------
 * DialogFooter
 * -----------------------------------------------------------------------------------------------*/
type DialogFooterRenderProps = {
  close: () => void;
};

type DialogFooterProps = Omit<ComponentPropsWithRef<"footer">, "children"> & {
  /**
   * Children of the footer
   */
  children?: ReactNode | ((props: DialogFooterRenderProps) => ReactNode);

  /**
   * Ref to footer element
   */
  ref?: ForwardedRef<ComponentRef<"footer">>;
};

function DialogFooter({
  className,
  children,
  ref,
  ...props
}: DialogFooterProps) {
  /**
   * Get an instance of dialog state
   */
  const { close } = useContext(OverlayTriggerStateContext)!;

  return (
    <footer
      {...props}
      className={clsx("wui-dialog__footer", className)}
      data-component="footer"
      ref={ref}
    >
      {typeof children === "function" ? children({ close }) : children}
    </footer>
  );
}

export {
  DialogProvider,
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogContent,
  DialogClose,
  DialogFooter,
};
export type {
  DialogProviderProps,
  DialogProps,
  DialogHeaderProps,
  DialogTitleProps,
  DialogDescriptionProps,
  DialogContentProps,
  DialogCloseProps,
  DialogFooterProps,
};
