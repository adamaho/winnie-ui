import {
  Button,
  ButtonContext,
  ButtonIcon,
  ButtonKbd,
  ButtonLabel,
  ButtonPending,
  ButtonShortcut,
} from "@winnie-ui/react";

import {
  ForkKnife,
  Loader,
  Plus,
  SettingsGear3,
} from "@winnie-ui/icons/react/solid";

/* -------------------------------------------------------------------------------------------------
 * NewDishButton
 * -----------------------------------------------------------------------------------------------*/
export function NewDishButton() {
  return (
    <Button>
      <ButtonIcon>
        <ForkKnife />
      </ButtonIcon>
      <ButtonLabel>New Dish</ButtonLabel>
    </Button>
  );
}

/* -------------------------------------------------------------------------------------------------
 * ButtonIconOnlyDemo
 * -----------------------------------------------------------------------------------------------*/
export function ButtonIconOnlyDemo() {
  return (
    <Button variant="3">
      <ButtonIcon>
        <SettingsGear3 />
      </ButtonIcon>
    </Button>
  );
}

/* -------------------------------------------------------------------------------------------------
 * ButtonSizeDemo
 * -----------------------------------------------------------------------------------------------*/
export function ButtonSizeDemo() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "var(--wui-space-4)",
      }}
    >
      <Button size="sm" variant="2">
        <ButtonLabel>Edit Dish</ButtonLabel>
      </Button>
      <Button size="md" variant="2">
        <ButtonLabel>Edit Dish</ButtonLabel>
      </Button>
      <Button size="lg" variant="2">
        <ButtonLabel>Edit Dish</ButtonLabel>
      </Button>
    </div>
  );
}

/* -------------------------------------------------------------------------------------------------
 * ButtonVariantDemo
 * -----------------------------------------------------------------------------------------------*/
export function ButtonVariantDemo() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "var(--wui-space-4)",
      }}
    >
      <Button variant="1">
        <ButtonLabel>Edit Dish</ButtonLabel>
      </Button>
      <Button variant="2">
        <ButtonLabel>Edit Dish</ButtonLabel>
      </Button>
      <Button variant="3">
        <ButtonLabel>Edit Dish</ButtonLabel>
      </Button>
      <Button variant="4">
        <ButtonLabel>Edit Dish</ButtonLabel>
      </Button>
    </div>
  );
}

/* -------------------------------------------------------------------------------------------------
 * ButtonRadiusDemo
 * -----------------------------------------------------------------------------------------------*/
export function ButtonRadiusDemo() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "var(--wui-space-4)",
      }}
    >
      <Button variant="2" radius="none">
        <ButtonLabel>Edit Dish</ButtonLabel>
      </Button>
      <Button variant="2" radius="3">
        <ButtonLabel>Edit Dish</ButtonLabel>
      </Button>
      <Button variant="2" radius="round">
        <ButtonLabel>Edit Dish</ButtonLabel>
      </Button>
    </div>
  );
}

/* -------------------------------------------------------------------------------------------------
 * ButtonColorDemo
 * -----------------------------------------------------------------------------------------------*/
export function ButtonColorDemo() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "var(--wui-space-4)",
      }}
    >
      <Button variant="2">
        <ButtonLabel>Edit Dish</ButtonLabel>
      </Button>
      <Button variant="2" color="red">
        <ButtonLabel>Edit Dish</ButtonLabel>
      </Button>
      <Button variant="2" color="orange">
        <ButtonLabel>Edit Dish</ButtonLabel>
      </Button>
      <Button variant="2" color="yellow">
        <ButtonLabel>Edit Dish</ButtonLabel>
      </Button>
      <Button variant="2" color="green">
        <ButtonLabel>Edit Dish</ButtonLabel>
      </Button>
      <Button variant="2" color="blue">
        <ButtonLabel>Edit Dish</ButtonLabel>
      </Button>
      <Button variant="2" color="purple">
        <ButtonLabel>Edit Dish</ButtonLabel>
      </Button>
      <Button variant="2" color="pink">
        <ButtonLabel>Edit Dish</ButtonLabel>
      </Button>
      <Button variant="2" color="grey">
        <ButtonLabel>Edit Dish</ButtonLabel>
      </Button>
    </div>
  );
}

/* -------------------------------------------------------------------------------------------------
 * ButtonShortcutDemo
 * -----------------------------------------------------------------------------------------------*/
export function ButtonShortcutDemo() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "var(--wui-space-4)",
      }}
    >
      <Button>
        <ButtonIcon>
          <Plus />
        </ButtonIcon>
        <ButtonLabel>New Dish</ButtonLabel>
        <ButtonShortcut>
          <ButtonKbd>C</ButtonKbd>
        </ButtonShortcut>
      </Button>
      <Button variant="2">
        <ButtonIcon>
          <Plus />
        </ButtonIcon>
        <ButtonLabel>New Dish</ButtonLabel>
        <ButtonShortcut>
          <ButtonKbd>C</ButtonKbd>
        </ButtonShortcut>
      </Button>
      <Button variant="3">
        <ButtonIcon>
          <Plus />
        </ButtonIcon>
        <ButtonLabel>New Dish</ButtonLabel>
        <ButtonShortcut>
          <ButtonKbd>C</ButtonKbd>
        </ButtonShortcut>
      </Button>
      <Button variant="4">
        <ButtonIcon>
          <Plus />
        </ButtonIcon>
        <ButtonLabel>New Dish</ButtonLabel>
        <ButtonShortcut>
          <ButtonKbd>C</ButtonKbd>
        </ButtonShortcut>
      </Button>
    </div>
  );
}

/* -------------------------------------------------------------------------------------------------
 * ButtonDisabledDemo
 * -----------------------------------------------------------------------------------------------*/
export function ButtonDisabledDemo() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "var(--wui-space-4)",
      }}
    >
      <ButtonContext.Provider value={{ isDisabled: true }}>
        <Button variant="1">
          <ButtonLabel>Edit Dish</ButtonLabel>
        </Button>
        <Button variant="2">
          <ButtonLabel>Edit Dish</ButtonLabel>
        </Button>
        <Button variant="3">
          <ButtonLabel>Edit Dish</ButtonLabel>
        </Button>
        <Button variant="4">
          <ButtonLabel>Edit Dish</ButtonLabel>
        </Button>
      </ButtonContext.Provider>
    </div>
  );
}

/* -------------------------------------------------------------------------------------------------
 * ButtonPendingDemo
 * -----------------------------------------------------------------------------------------------*/
export function ButtonPendingDemo() {
  return (
    <Button isPending>
      <ButtonLabel>Delete Dish</ButtonLabel>
      <ButtonPending
        style={{ display: "flex", justifyContent: "center", width: "100%" }}
      >
        <Loader />
      </ButtonPending>
    </Button>
  );
}

/* -------------------------------------------------------------------------------------------------
 * ButtonWidthDemo
 * -----------------------------------------------------------------------------------------------*/
export function ButtonWidthDemo() {
  return (
    <Button width="full">
      <ButtonLabel>Save Dish</ButtonLabel>
    </Button>
  );
}
