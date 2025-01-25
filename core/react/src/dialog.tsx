import {
  type ComponentPropsWithRef,
  type ComponentRef,
  type ForwardedRef,
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
  width?: "sm" | "md" | "lg";
};
function Dialog({
  className,
  children,
  isDismissible,
  isKeyboardDismissDisabled,
  ref,
  width = "md",
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
 * DialogClose
 * -----------------------------------------------------------------------------------------------*/
type DialogCloseProps = ButtonProps;

function DialogClose({
  className,
  children,
  ref,
  slot = "close",
  ...props
}: DialogCloseProps) {
  return (
    <Button
      {...props}
      className={clsx("wui-dialog__close", className)}
      slot={slot}
      color="grey"
      size="sm"
      variant="soft"
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

export { DialogProvider, Dialog, DialogTitle, DialogDescription, DialogClose };
export type {
  DialogProviderProps,
  DialogProps,
  DialogTitleProps,
  DialogDescriptionProps,
  DialogCloseProps,
};
