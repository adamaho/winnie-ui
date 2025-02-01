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
    <LinkButton variant="outlined">
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
      <LinkButton size="sm" variant="soft">
        <LinkButtonLabel>Edit Dish</LinkButtonLabel>
      </LinkButton>
      <LinkButton size="md" variant="soft">
        <LinkButtonLabel>Edit Dish</LinkButtonLabel>
      </LinkButton>
      <LinkButton size="lg" variant="soft">
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
      <LinkButton variant="solid">
        <LinkButtonLabel>Edit Dish</LinkButtonLabel>
      </LinkButton>
      <LinkButton variant="soft">
        <LinkButtonLabel>Edit Dish</LinkButtonLabel>
      </LinkButton>
      <LinkButton variant="outlined">
        <LinkButtonLabel>Edit Dish</LinkButtonLabel>
      </LinkButton>
      <LinkButton variant="plain">
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
      <LinkButton variant="soft" radius="none">
        <LinkButtonLabel>Edit Dish</LinkButtonLabel>
      </LinkButton>
      <LinkButton variant="soft" radius="lg">
        <LinkButtonLabel>Edit Dish</LinkButtonLabel>
      </LinkButton>
      <LinkButton variant="soft" radius="round">
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
      <LinkButton variant="soft">
        <LinkButtonLabel>Edit Dish</LinkButtonLabel>
      </LinkButton>
      <LinkButton variant="soft" color="red">
        <LinkButtonLabel>Edit Dish</LinkButtonLabel>
      </LinkButton>
      <LinkButton variant="soft" color="orange">
        <LinkButtonLabel>Edit Dish</LinkButtonLabel>
      </LinkButton>
      <LinkButton variant="soft" color="yellow">
        <LinkButtonLabel>Edit Dish</LinkButtonLabel>
      </LinkButton>
      <LinkButton variant="soft" color="green">
        <LinkButtonLabel>Edit Dish</LinkButtonLabel>
      </LinkButton>
      <LinkButton variant="soft" color="blue">
        <LinkButtonLabel>Edit Dish</LinkButtonLabel>
      </LinkButton>
      <LinkButton variant="soft" color="purple">
        <LinkButtonLabel>Edit Dish</LinkButtonLabel>
      </LinkButton>
      <LinkButton variant="soft" color="pink">
        <LinkButtonLabel>Edit Dish</LinkButtonLabel>
      </LinkButton>
      <LinkButton variant="soft" color="grey">
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
      <LinkButton variant="soft">
        <LinkButtonIcon>
          <Plus />
        </LinkButtonIcon>
        <LinkButtonLabel>New Dish</LinkButtonLabel>
        <LinkButtonShortcut>
          <LinkButtonKbd>C</LinkButtonKbd>
        </LinkButtonShortcut>
      </LinkButton>
      <LinkButton variant="outlined">
        <LinkButtonIcon>
          <Plus />
        </LinkButtonIcon>
        <LinkButtonLabel>New Dish</LinkButtonLabel>
        <LinkButtonShortcut>
          <LinkButtonKbd>C</LinkButtonKbd>
        </LinkButtonShortcut>
      </LinkButton>
      <LinkButton variant="plain">
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
        <LinkButton variant="solid">
          <LinkButtonLabel>Edit Dish</LinkButtonLabel>
        </LinkButton>
        <LinkButton variant="soft">
          <LinkButtonLabel>Edit Dish</LinkButtonLabel>
        </LinkButton>
        <LinkButton variant="outlined">
          <LinkButtonLabel>Edit Dish</LinkButtonLabel>
        </LinkButton>
        <LinkButton variant="plain">
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
