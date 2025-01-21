import {
  Navigation,
  NavigationItem,
  NavigationItemIcon,
  NavigationItemLabel,
  useLayoutContext,
} from "@winnie-ui/react";

import {
  BooleanGroupSubtract,
  Cocktail,
  ForkKnife,
  HomeDoor,
  LayoutGrid2,
} from "@winnie-ui/icons/react/solid";

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

  /**
   * Get an instance of the layout context
   */
  const layoutContext = useLayoutContext();

  /**
   * Handle press event on navigation item
   */
  const handlePress = () => {
    if (layoutContext.sidebarState === "open") {
      layoutContext.setSidebarState("closed");
    }
  };

  return (
    <NavigationItem href={href} isCurrent={isCurrent} onPress={handlePress}>
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
