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
  Tactics1,
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
      <AppNavigationItem
        href="/sessions"
        icon={<Tactics1 />}
        label="Sessions"
      />
    </Navigation>
  );
}
