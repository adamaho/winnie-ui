import {
  Navigation,
  NavigationItem,
  NavigationItemIcon,
  NavigationItemLabel,
} from "@winnie-ui/react";

import {
  BooleanGroupSubtract,
  Cocktail,
  ForkKnife,
  HomeDoor,
  LayoutGrid2,
} from "@winnie-ui/icons/solid";

import { ReactNode, ToOptions } from "@tanstack/react-router";

import { useIsCurrent } from "~/hooks/use-is-current";

/* -------------------------------------------------------------------------------------------------
 * AppNavigationItem
 * -----------------------------------------------------------------------------------------------*/
type AppNavigationItemProps = {
  href: ToOptions["to"];
  icon: ReactNode;
  label: string;
};

function AppNavigationItem({ href, icon, label }: AppNavigationItemProps) {
  /**
   * Check if the current route is active
   */
  const isCurrent = useIsCurrent({ to: href });

  return (
    <NavigationItem href={href} isCurrent={isCurrent}>
      <NavigationItemIcon>{icon}</NavigationItemIcon>
      <NavigationItemLabel>{label}</NavigationItemLabel>
    </NavigationItem>
  );
}

/* -------------------------------------------------------------------------------------------------
 * AppNavigation
 * -----------------------------------------------------------------------------------------------*/
export function AppNavigation() {
  return (
    <Navigation>
      <AppNavigationItem href="/home" icon={<HomeDoor />} label="Home" />
      <AppNavigationItem href="/dishes" icon={<ForkKnife />} label="Dishes" />
      <AppNavigationItem href="/drinks" icon={<Cocktail />} label="Drinks" />
      <AppNavigationItem
        href="/sections"
        icon={<BooleanGroupSubtract />}
        label="Sections"
      />
      <AppNavigationItem href="/menus" icon={<LayoutGrid2 />} label="Menus" />
    </Navigation>
  );
}
