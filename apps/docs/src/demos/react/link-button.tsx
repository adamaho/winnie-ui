import {
  LinkButton,
  LinkButtonContext,
  LinkButtonIcon,
  LinkButtonKbd,
  LinkButtonLabel,
  LinkButtonShortcut,
} from "@winnie-ui/react";

import { ForkKnife, Plus, SettingsGear3 } from "@winnie-ui/icons/react/solid";

/* -------------------------------------------------------------------------------------------------
 * NewDishLinkButton
 * -----------------------------------------------------------------------------------------------*/
export function NewDishLinkButton() {
  return (
    <LinkButton>
      <LinkButtonIcon>
        <ForkKnife />
      </LinkButtonIcon>
      <LinkButtonLabel>New Dish</LinkButtonLabel>
    </LinkButton>
  );
}

/* -------------------------------------------------------------------------------------------------
 * LinkButtonIconOnlyDemo
 * -----------------------------------------------------------------------------------------------*/
export function LinkButtonIconOnlyDemo() {
  return (
    <LinkButton variant="3">
      <LinkButtonIcon>
        <SettingsGear3 />
      </LinkButtonIcon>
    </LinkButton>
  );
}

/* -------------------------------------------------------------------------------------------------
 * LinkButtonSizeDemo
 * -----------------------------------------------------------------------------------------------*/
export function LinkButtonSizeDemo() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "var(--wui-space-4)",
      }}
    >
      <LinkButton size="sm" variant="2">
        <LinkButtonLabel>Edit Dish</LinkButtonLabel>
      </LinkButton>
      <LinkButton size="md" variant="2">
        <LinkButtonLabel>Edit Dish</LinkButtonLabel>
      </LinkButton>
      <LinkButton size="lg" variant="2">
        <LinkButtonLabel>Edit Dish</LinkButtonLabel>
      </LinkButton>
    </div>
  );
}

/* -------------------------------------------------------------------------------------------------
 * LinkButtonVariantDemo
 * -----------------------------------------------------------------------------------------------*/
export function LinkButtonVariantDemo() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "var(--wui-space-4)",
      }}
    >
      <LinkButton variant="1">
        <LinkButtonLabel>Edit Dish</LinkButtonLabel>
      </LinkButton>
      <LinkButton variant="2">
        <LinkButtonLabel>Edit Dish</LinkButtonLabel>
      </LinkButton>
      <LinkButton variant="3">
        <LinkButtonLabel>Edit Dish</LinkButtonLabel>
      </LinkButton>
      <LinkButton variant="4">
        <LinkButtonLabel>Edit Dish</LinkButtonLabel>
      </LinkButton>
    </div>
  );
}

/* -------------------------------------------------------------------------------------------------
 * LinkButtonRadiusDemo
 * -----------------------------------------------------------------------------------------------*/
export function LinkButtonRadiusDemo() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "var(--wui-space-4)",
      }}
    >
      <LinkButton variant="2" radius="none">
        <LinkButtonLabel>Edit Dish</LinkButtonLabel>
      </LinkButton>
      <LinkButton variant="2" radius="3">
        <LinkButtonLabel>Edit Dish</LinkButtonLabel>
      </LinkButton>
      <LinkButton variant="2" radius="round">
        <LinkButtonLabel>Edit Dish</LinkButtonLabel>
      </LinkButton>
    </div>
  );
}

/* -------------------------------------------------------------------------------------------------
 * LinkButtonColorDemo
 * -----------------------------------------------------------------------------------------------*/
export function LinkButtonColorDemo() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "var(--wui-space-4)",
      }}
    >
      <LinkButton variant="2">
        <LinkButtonLabel>Edit Dish</LinkButtonLabel>
      </LinkButton>
      <LinkButton variant="2" color="red">
        <LinkButtonLabel>Edit Dish</LinkButtonLabel>
      </LinkButton>
      <LinkButton variant="2" color="orange">
        <LinkButtonLabel>Edit Dish</LinkButtonLabel>
      </LinkButton>
      <LinkButton variant="2" color="yellow">
        <LinkButtonLabel>Edit Dish</LinkButtonLabel>
      </LinkButton>
      <LinkButton variant="2" color="green">
        <LinkButtonLabel>Edit Dish</LinkButtonLabel>
      </LinkButton>
      <LinkButton variant="2" color="blue">
        <LinkButtonLabel>Edit Dish</LinkButtonLabel>
      </LinkButton>
      <LinkButton variant="2" color="purple">
        <LinkButtonLabel>Edit Dish</LinkButtonLabel>
      </LinkButton>
      <LinkButton variant="2" color="pink">
        <LinkButtonLabel>Edit Dish</LinkButtonLabel>
      </LinkButton>
      <LinkButton variant="2" color="grey">
        <LinkButtonLabel>Edit Dish</LinkButtonLabel>
      </LinkButton>
    </div>
  );
}

/* -------------------------------------------------------------------------------------------------
 * LinkButtonShortcutDemo
 * -----------------------------------------------------------------------------------------------*/
export function LinkButtonShortcutDemo() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "var(--wui-space-4)",
      }}
    >
      <LinkButton>
        <LinkButtonIcon>
          <Plus />
        </LinkButtonIcon>
        <LinkButtonLabel>New Dish</LinkButtonLabel>
        <LinkButtonShortcut>
          <LinkButtonKbd>C</LinkButtonKbd>
        </LinkButtonShortcut>
      </LinkButton>
      <LinkButton variant="2">
        <LinkButtonIcon>
          <Plus />
        </LinkButtonIcon>
        <LinkButtonLabel>New Dish</LinkButtonLabel>
        <LinkButtonShortcut>
          <LinkButtonKbd>C</LinkButtonKbd>
        </LinkButtonShortcut>
      </LinkButton>
      <LinkButton variant="3">
        <LinkButtonIcon>
          <Plus />
        </LinkButtonIcon>
        <LinkButtonLabel>New Dish</LinkButtonLabel>
        <LinkButtonShortcut>
          <LinkButtonKbd>C</LinkButtonKbd>
        </LinkButtonShortcut>
      </LinkButton>
      <LinkButton variant="4">
        <LinkButtonIcon>
          <Plus />
        </LinkButtonIcon>
        <LinkButtonLabel>New Dish</LinkButtonLabel>
        <LinkButtonShortcut>
          <LinkButtonKbd>C</LinkButtonKbd>
        </LinkButtonShortcut>
      </LinkButton>
    </div>
  );
}

/* -------------------------------------------------------------------------------------------------
 * LinkButtonDisabledDemo
 * -----------------------------------------------------------------------------------------------*/
export function LinkButtonDisabledDemo() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "var(--wui-space-4)",
      }}
    >
      <LinkButtonContext.Provider value={{ isDisabled: true }}>
        <LinkButton variant="1">
          <LinkButtonLabel>Edit Dish</LinkButtonLabel>
        </LinkButton>
        <LinkButton variant="2">
          <LinkButtonLabel>Edit Dish</LinkButtonLabel>
        </LinkButton>
        <LinkButton variant="3">
          <LinkButtonLabel>Edit Dish</LinkButtonLabel>
        </LinkButton>
        <LinkButton variant="4">
          <LinkButtonLabel>Edit Dish</LinkButtonLabel>
        </LinkButton>
      </LinkButtonContext.Provider>
    </div>
  );
}

/* -------------------------------------------------------------------------------------------------
 * LinkButtonWidthDemo
 * -----------------------------------------------------------------------------------------------*/
export function LinkButtonWidthDemo() {
  return (
    <LinkButton width="full">
      <LinkButtonLabel>Save Dish</LinkButtonLabel>
    </LinkButton>
  );
}
