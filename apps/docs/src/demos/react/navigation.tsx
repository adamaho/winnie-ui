import type { CSSProperties } from "react";

import {
  Button,
  ButtonIcon,
  Menu,
  MenuItem,
  MenuItemLabel,
  MenuPopover,
  MenuProvider,
  Navigation,
  NavigationDisclosure,
  NavigationDisclosureContent,
  NavigationDisclosureTrigger,
  NavigationDisclosureTriggerIcon,
  NavigationDisclosureTriggerLabel,
  NavigationGroup,
  NavigationItem,
  NavigationItemIcon,
  NavigationItemLabel,
} from "@winnie-ui/react";

import {
  Cocktail,
  DotGrid1x3Horizontal,
  ForkKnife,
  HomeDoor,
  LayoutGrid2,
  Store1,
} from "@winnie-ui/icons/react/solid";

const navigationDemoStyles = {
  background: "var(--wui-color-grey-1)",
  border: "var(--wui-border-width-1) solid var(--wui-color-grey-a4)",
  borderRadius: "min(var(--wui-border-radius-3), 12px)",
  maxWidth: "250px",
  padding: "var(--wui-space-3",
} satisfies CSSProperties;

/* -------------------------------------------------------------------------------------------------
 * NavigationDemo
 * -----------------------------------------------------------------------------------------------*/
export function NavigationDemo() {
  return (
    <Navigation className="not-content" style={navigationDemoStyles}>
      <NavigationItem>
        <NavigationItemLabel>Home</NavigationItemLabel>
      </NavigationItem>
      <NavigationItem>
        <NavigationItemLabel>Dishes</NavigationItemLabel>
      </NavigationItem>
      <NavigationItem>
        <NavigationItemLabel>Drinks</NavigationItemLabel>
      </NavigationItem>
      <NavigationItem>
        <NavigationItemLabel>Menus</NavigationItemLabel>
      </NavigationItem>
      <NavigationDisclosure defaultOpen>
        <NavigationDisclosureTrigger>
          <NavigationDisclosureTriggerLabel>
            Locations
          </NavigationDisclosureTriggerLabel>
        </NavigationDisclosureTrigger>
        <NavigationDisclosureContent className="not-content">
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

/* -------------------------------------------------------------------------------------------------
 * NavigationIconDemo
 * -----------------------------------------------------------------------------------------------*/
export function NavigationIconDemo() {
  return (
    <Navigation className="not-content" style={navigationDemoStyles}>
      <NavigationItem>
        <NavigationItemIcon>
          <HomeDoor />
        </NavigationItemIcon>
        <NavigationItemLabel>Home</NavigationItemLabel>
      </NavigationItem>
      <NavigationItem>
        <NavigationItemIcon>
          <ForkKnife />
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
          <LayoutGrid2 />
        </NavigationItemIcon>
        <NavigationItemLabel>Menus</NavigationItemLabel>
      </NavigationItem>
    </Navigation>
  );
}

/* -------------------------------------------------------------------------------------------------
 * NavigationGroupDemo
 * -----------------------------------------------------------------------------------------------*/
export function NavigationGroupDemo() {
  return (
    <Navigation className="not-content" style={navigationDemoStyles}>
      <NavigationItem>
        <NavigationItemLabel>Home</NavigationItemLabel>
      </NavigationItem>
      <NavigationItem>
        <NavigationItemLabel>Dishes</NavigationItemLabel>
      </NavigationItem>
      <NavigationItem>
        <NavigationItemLabel>Drinks</NavigationItemLabel>
      </NavigationItem>
      <NavigationItem>
        <NavigationItemLabel>Menus</NavigationItemLabel>
      </NavigationItem>
      <NavigationItem>
        <NavigationItemLabel>Locations</NavigationItemLabel>
      </NavigationItem>
      <NavigationGroup className="not-content">
        <NavigationItem>
          <NavigationItemLabel>Toronto</NavigationItemLabel>
        </NavigationItem>
        <NavigationItem>
          <NavigationItemLabel>Vancouver</NavigationItemLabel>
        </NavigationItem>
        <NavigationItem>
          <NavigationItemLabel>Waterloo</NavigationItemLabel>
        </NavigationItem>
      </NavigationGroup>
    </Navigation>
  );
}

/* -------------------------------------------------------------------------------------------------
 * NavigationDisclosureDemo
 * -----------------------------------------------------------------------------------------------*/
export function NavigationDisclosureDemo() {
  return (
    <Navigation className="not-content" style={navigationDemoStyles}>
      <NavigationItem>
        <NavigationItemIcon>
          <HomeDoor />
        </NavigationItemIcon>
        <NavigationItemLabel>Home</NavigationItemLabel>
      </NavigationItem>
      <NavigationItem>
        <NavigationItemIcon>
          <ForkKnife />
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
          <LayoutGrid2 />
        </NavigationItemIcon>
        <NavigationItemLabel>Menus</NavigationItemLabel>
      </NavigationItem>
      <NavigationDisclosure>
        <NavigationDisclosureTrigger>
          <NavigationDisclosureTriggerIcon>
            <Store1 />
          </NavigationDisclosureTriggerIcon>
          <NavigationDisclosureTriggerLabel>
            Locations
          </NavigationDisclosureTriggerLabel>
        </NavigationDisclosureTrigger>
        <NavigationDisclosureContent className="not-content">
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

/* -------------------------------------------------------------------------------------------------
 * NavigationActionDemo
 * -----------------------------------------------------------------------------------------------*/
export function NavigationActionDemo() {
  return (
    <Navigation className="not-content" style={navigationDemoStyles}>
      <NavigationItem>
        <NavigationItemIcon>
          <HomeDoor />
        </NavigationItemIcon>
        <NavigationItemLabel>Home</NavigationItemLabel>
      </NavigationItem>
      <NavigationItem>
        <NavigationItemIcon>
          <ForkKnife />
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
          <LayoutGrid2 />
        </NavigationItemIcon>
        <NavigationItemLabel>Menus</NavigationItemLabel>
        <MenuProvider>
          <Button color="grey" variant="4" data-slot="action" size="sm">
            <ButtonIcon>
              <DotGrid1x3Horizontal />
            </ButtonIcon>
          </Button>
          <MenuPopover placement="bottom right">
            <Menu>
              <MenuItem>
                <MenuItemLabel>Add</MenuItemLabel>
              </MenuItem>
              <MenuItem>
                <MenuItemLabel>Manage</MenuItemLabel>
              </MenuItem>
            </Menu>
          </MenuPopover>
        </MenuProvider>
      </NavigationItem>
      <NavigationDisclosure>
        <NavigationDisclosureTrigger>
          <NavigationDisclosureTriggerIcon>
            <Store1 />
          </NavigationDisclosureTriggerIcon>
          <NavigationDisclosureTriggerLabel>
            Locations
          </NavigationDisclosureTriggerLabel>
          <MenuProvider>
            <Button color="grey" variant="4" data-slot="action" size="sm">
              <ButtonIcon>
                <DotGrid1x3Horizontal />
              </ButtonIcon>
            </Button>
            <MenuPopover placement="bottom right">
              <Menu>
                <MenuItem>
                  <MenuItemLabel>Add</MenuItemLabel>
                </MenuItem>
                <MenuItem>
                  <MenuItemLabel>Manage</MenuItemLabel>
                </MenuItem>
              </Menu>
            </MenuPopover>
          </MenuProvider>
        </NavigationDisclosureTrigger>
        <NavigationDisclosureContent className="not-content">
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

/* -------------------------------------------------------------------------------------------------
 * NavigationCurrentDemo
 * -----------------------------------------------------------------------------------------------*/
export function NavigationCurrentDemo() {
  return (
    <Navigation className="not-content" style={navigationDemoStyles}>
      <NavigationItem>
        <NavigationItemIcon>
          <HomeDoor />
        </NavigationItemIcon>
        <NavigationItemLabel>Home</NavigationItemLabel>
      </NavigationItem>
      <NavigationItem>
        <NavigationItemIcon>
          <ForkKnife />
        </NavigationItemIcon>
        <NavigationItemLabel>Dishes</NavigationItemLabel>
      </NavigationItem>
      <NavigationItem isCurrent>
        <NavigationItemIcon>
          <Cocktail />
        </NavigationItemIcon>
        <NavigationItemLabel>Drinks</NavigationItemLabel>
      </NavigationItem>
      <NavigationItem>
        <NavigationItemIcon>
          <LayoutGrid2 />
        </NavigationItemIcon>
        <NavigationItemLabel>Menus</NavigationItemLabel>
      </NavigationItem>
    </Navigation>
  );
}
