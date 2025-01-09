import {
  Navigation,
  NavigationDisclosure,
  NavigationDisclosureContent,
  NavigationDisclosureTrigger,
  NavigationDisclosureTriggerIcon,
  NavigationDisclosureTriggerLabel,
  NavigationItem,
  NavigationItemIcon,
  NavigationItemLabel,
} from "@winnie-ui/react/navigation";

import {
  Menu,
  MenuItem,
  MenuItemLabel,
  MenuPopover,
  MenuProvider,
  MenuSeparator,
} from "@winnie-ui/react/menu";

import { Button, ButtonIcon } from "@winnie-ui/react/button";
import { Burger } from "@winnie-ui/react/icons/outlined/burger.tsx";
import { Cocktail } from "@winnie-ui/react/icons/outlined/cocktail.tsx";
import { DotGrid1x3 } from "@winnie-ui/react/icons/outlined/dot-grid-1x3.tsx";
import { HomeDoor } from "@winnie-ui/react/icons/outlined/home-door.tsx";
import { LayoutGrid } from "@winnie-ui/react/icons/outlined/layout-grid.tsx";
import { Store } from "@winnie-ui/react/icons/outlined/store.tsx";

/* -------------------------------------------------------------------------------------------------
 * NavigationDemo
 * -----------------------------------------------------------------------------------------------*/
export function NavigationDemo() {
  return (
    <Navigation
      className="not-content"
      style={{
        background: "var(--wui-color-grey-1)",
        border: "var(--wui-border-width-1) solid var(--wui-color-grey-a4)",
        borderRadius: "min(var(--wui-border-radius-3), 12px)",
        maxWidth: "250px",
        padding: "var(--wui-space-3",
      }}
    >
      <NavigationItem>
        <NavigationItemIcon>
          <HomeDoor />
        </NavigationItemIcon>
        <NavigationItemLabel>Home</NavigationItemLabel>
      </NavigationItem>
      <NavigationItem>
        <NavigationItemIcon>
          <Burger />
        </NavigationItemIcon>
        <NavigationItemLabel>Dishes</NavigationItemLabel>
      </NavigationItem>
      <NavigationItem>
        <NavigationItemIcon>
          <Cocktail />
        </NavigationItemIcon>
        <NavigationItemLabel>Drinks</NavigationItemLabel>
      </NavigationItem>
      <NavigationItem>
        <NavigationItemIcon>
          <LayoutGrid />
        </NavigationItemIcon>
        <NavigationItemLabel>Menus</NavigationItemLabel>
      </NavigationItem>
      <NavigationDisclosure defaultExpanded>
        <NavigationDisclosureTrigger>
          <NavigationDisclosureTriggerIcon>
            <Store />
          </NavigationDisclosureTriggerIcon>
          <NavigationDisclosureTriggerLabel>
            Locations
          </NavigationDisclosureTriggerLabel>
          <MenuProvider>
            <Button slot="action" color="grey" variant="plain" size="sm">
              <ButtonIcon>
                <DotGrid1x3 />
              </ButtonIcon>
            </Button>
            <MenuPopover placement="bottom right">
              <Menu>
                <MenuItem>
                  <MenuItemLabel>Add</MenuItemLabel>
                </MenuItem>
                <MenuItem>
                  <MenuItemLabel>Edit</MenuItemLabel>
                </MenuItem>
                <MenuItem>
                  <MenuItemLabel>Duplicate</MenuItemLabel>
                </MenuItem>
                <MenuSeparator />
                <MenuItem color="red">
                  <MenuItemLabel>Delete</MenuItemLabel>
                </MenuItem>
              </Menu>
            </MenuPopover>
          </MenuProvider>
        </NavigationDisclosureTrigger>
        <NavigationDisclosureContent>
          <NavigationItem>
            <NavigationItemLabel>Toronto</NavigationItemLabel>
          </NavigationItem>
          <NavigationItem>
            <NavigationItemLabel>Vancouver</NavigationItemLabel>
          </NavigationItem>
          <NavigationItem>
            <NavigationItemLabel>Waterloo</NavigationItemLabel>
          </NavigationItem>
        </NavigationDisclosureContent>
      </NavigationDisclosure>
    </Navigation>
  );
}
