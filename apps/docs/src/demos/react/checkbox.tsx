import {
  Checkbox,
  CheckboxField,
  CheckboxLabel,
  FieldDescription,
  FieldError,
} from "@winnie-ui/react";

/* -------------------------------------------------------------------------------------------------
 * CheckboxDemo
 * -----------------------------------------------------------------------------------------------*/
export function CheckboxDemo() {
  return (
    <Checkbox defaultSelected>
      <CheckboxLabel>Pineapple</CheckboxLabel>
    </Checkbox>
  );
}

/* -------------------------------------------------------------------------------------------------
 * CheckboxSizeDemo
 * -----------------------------------------------------------------------------------------------*/
export function CheckboxSizeDemo() {
  return (
    <div style={{ display: "flex", gap: "var(--wui-space-4)" }}>
      <Checkbox size="1" defaultSelected />
      <Checkbox size="2" defaultSelected />
      <Checkbox size="3" defaultSelected />
    </div>
  );
}

/* -------------------------------------------------------------------------------------------------
 * CheckboxLabelDemo
 * -----------------------------------------------------------------------------------------------*/
export function CheckboxLabelDemo() {
  return (
    <Checkbox defaultSelected>
      <CheckboxLabel>Pineapple</CheckboxLabel>
    </Checkbox>
  );
}

/* -------------------------------------------------------------------------------------------------
 * CheckboxFieldDemo
 * -----------------------------------------------------------------------------------------------*/
export function CheckboxFieldDemo() {
  return (
    <CheckboxField>
      <Checkbox defaultSelected>
        <CheckboxLabel>Pineapple</CheckboxLabel>
      </Checkbox>
      <FieldDescription>
        Only if you dare to admit you like pineapple on your pizza.
      </FieldDescription>
      <FieldError>Not allowed pineapple on your pizza.</FieldError>
    </CheckboxField>
  );
}

/* -------------------------------------------------------------------------------------------------
 * CheckboxDisabledDemo
 * -----------------------------------------------------------------------------------------------*/
export function CheckboxDisabledDemo() {
  return (
    <div style={{ display: "flex", gap: "var(--wui-space-4)" }}>
      <Checkbox isDisabled />
      <Checkbox isDisabled isSelected />
      <Checkbox isDisabled isSelected>
        <CheckboxLabel>Pineapple</CheckboxLabel>
      </Checkbox>
    </div>
  );
}

/* -------------------------------------------------------------------------------------------------
 * CheckboxIndeterminateDemo
 * -----------------------------------------------------------------------------------------------*/
export function CheckboxIndeterminateDemo() {
  return <Checkbox isIndeterminate defaultSelected />;
}

/* -------------------------------------------------------------------------------------------------
 * CheckboxInvalidDemo
 * -----------------------------------------------------------------------------------------------*/
export function CheckboxInvalidDemo() {
  return (
    <Checkbox defaultSelected isInvalid>
      <CheckboxLabel>Pineapple</CheckboxLabel>
    </Checkbox>
  );
}
