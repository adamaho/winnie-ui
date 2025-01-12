import {
  Navigation,
  NavigationItem,
  NavigationItemIcon,
  NavigationItemLabel,
} from "@winnie-ui/react";

import {
  Cocktail,
  ForkKnife,
  HomeDoor,
  LayoutGrid2,
} from "@winnie-ui/icons/solid";

import { ReactNode, ToOptions } from "@tanstack/react-router";

import { useIsActiveLink } from "~/hooks/use-is-active-link";

/* -------------------------------------------------------------------------------------------------
 * AppNavigationItem
 * -----------------------------------------------------------------------------------------------*/
type AppNavigationItemProps = {
  href: ToOptions["to"];
  icon: ReactNode;
  label: string;
};

function AppNavigationItem({ href, icon, label }: AppNavigationItemProps) {
  const isCurrent = useIsActiveLink({ to: href });

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
      <AppNavigationItem href="/menus" icon={<LayoutGrid2 />} label="Menus" />
    </Navigation>
  );
}
