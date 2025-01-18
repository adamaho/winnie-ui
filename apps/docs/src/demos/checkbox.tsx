import { Checkbox } from "@winnie-ui/react";

import { CheckboxLabel } from "node_modules/@winnie-ui/react/src/checkbox";

/* -------------------------------------------------------------------------------------------------
 * CheckboxDemo
 * -----------------------------------------------------------------------------------------------*/
export function CheckboxDemo() {
  return (
    <div data-component="field">
      <Checkbox>
        <CheckboxLabel>Pineapple</CheckboxLabel>
      </Checkbox>
      <div data-slot="description">asdfasfasdfasdfasdf</div>
    </div>
  );
}
