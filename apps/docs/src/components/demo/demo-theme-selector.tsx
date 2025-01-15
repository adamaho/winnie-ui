import { ToggleButton, ToggleButtonGroup } from "react-aria-components";

export function DemoThemeSelector() {
  return (
    <ToggleButtonGroup
      defaultSelectedKeys={["spatial"]}
      onSelectionChange={(keys) => {
        if (keys.size > 1) {
          return;
        }

        const value = keys.values().next().value as "spatial" | "presentation";

        const demoArea = document.getElementById("demo-area");

        switch (value) {
          case "spatial": {
            demoArea?.setAttribute("data-color-scheme", "minimal");
            break;
          }
          case "presentation": {
            demoArea?.setAttribute("data-color-scheme", "winnie");
            break;
          }
        }
      }}
    >
      <ToggleButton id="spatial">Spatial</ToggleButton>
      <ToggleButton id="presentation">Presentation</ToggleButton>
    </ToggleButtonGroup>
  );
}
