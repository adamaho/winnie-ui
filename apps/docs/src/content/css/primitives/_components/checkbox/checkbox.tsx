import { Checkmark } from "@winnie-ui/icons/react/solid";

import {
  Checkbox as RadixCheckbox,
  CheckboxIndicator as RadixCheckboxIndicator,
} from "@radix-ui/react-checkbox";

import "./checkbox.css";

export function Checkbox(props: any) {
  return (
    <label data-component="checkbox">
      <RadixCheckbox {...props} defaultChecked data-slot="indicator">
        <RadixCheckboxIndicator asChild>
          <Checkmark data-slot="icon" />
        </RadixCheckboxIndicator>
      </RadixCheckbox>
    </label>
  );
}

export function CheckboxWithLabel(props: any) {
  return (
    <label data-component="checkbox">
      <RadixCheckbox {...props} defaultChecked data-slot="indicator">
        <RadixCheckboxIndicator asChild>
          <Checkmark data-slot="icon" />
        </RadixCheckboxIndicator>
      </RadixCheckbox>
      <span data-slot="label">Accept terms and conditions.</span>
    </label>
  );
}

export function CheckboxWithLabelAndDescription(props: any) {
  return (
    <div data-component="field">
      <label data-component="checkbox" className="label">
        <RadixCheckbox {...props} defaultChecked data-slot="indicator" id="wld">
          <RadixCheckboxIndicator asChild>
            <Checkmark data-slot="icon" />
          </RadixCheckboxIndicator>
        </RadixCheckbox>
        <span data-slot="label">Display full names</span>
      </label>
      <span data-slot="description" className="description">
        Show full names of users instead of shorter usernames.
      </span>
    </div>
  );
}
