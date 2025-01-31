import { PropsWithChildren } from "react";

import {
  Button,
  ButtonIcon,
  DialogProvider,
  Navigation,
  NavigationDisclosure,
  NavigationDisclosureContent,
  NavigationDisclosureTrigger,
  NavigationDisclosureTriggerIcon,
  NavigationDisclosureTriggerLabel,
  NavigationItem,
  NavigationItemIcon,
  NavigationItemLabel,
  useLayoutContext,
} from "@winnie-ui/react";

import { Dollar, Plus } from "@winnie-ui/icons/react/solid";

import { ReactNode, ToOptions } from "@tanstack/react-router";

import { CreateAccountDialog } from "~/components/create-account-dialog";
import { useIsCurrent } from "~/hooks/use-is-current";

/* -------------------------------------------------------------------------------------------------
 * AppNavigationDisclosure
 * -----------------------------------------------------------------------------------------------*/
type AppNavigationDisclosureProps = {
  action?: ReactNode;
  icon?: ReactNode;
  label: string;
};

// @ts-ignore
function AppNavigationDisclosure({
  action,
  children,
  icon,
  label,
}: PropsWithChildren<AppNavigationDisclosureProps>) {
  return (
    <NavigationDisclosure defaultOpen>
      <NavigationDisclosureTrigger>
        {icon && (
          <NavigationDisclosureTriggerIcon>
            {icon}
          </NavigationDisclosureTriggerIcon>
        )}
        <NavigationDisclosureTriggerLabel>
          {label}
        </NavigationDisclosureTriggerLabel>
        {action}
      </NavigationDisclosureTrigger>
      <NavigationDisclosureContent>{children}</NavigationDisclosureContent>
    </NavigationDisclosure>
  );
}

/* -------------------------------------------------------------------------------------------------
 * AppNavigationItem
 * -----------------------------------------------------------------------------------------------*/
type AppNavigationItemProps = {
  href: ToOptions["to"];
  icon?: ReactNode;
  label: string;
};

// @ts-ignore
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
      {icon && <NavigationItemIcon>{icon}</NavigationItemIcon>}
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
      <AppNavigationDisclosure
        icon={<Dollar />}
        label="Account"
        action={
          <DialogProvider>
            <Button color="grey" variant="plain" data-slot="action" size="sm">
              <ButtonIcon>
                <Plus />
              </ButtonIcon>
            </Button>
            <CreateAccountDialog />
          </DialogProvider>
        }
      ></AppNavigationDisclosure>
    </Navigation>
  );
}
