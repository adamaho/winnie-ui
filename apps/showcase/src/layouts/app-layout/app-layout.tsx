import type { PropsWithChildren } from "react";

import {
  Layout,
  LayoutContent,
  LayoutMask,
  LayoutSidebar,
  LayoutSidebarResizeHandle,
  LayoutSidebarToggle,
  Page,
  PageContent,
  PageHeader,
  Tooltip,
  TooltipLabel,
  TooltipProvider,
} from "@winnie-ui/react";

import { AppNavigation } from "./app-navigation";

/* -------------------------------------------------------------------------------------------------
 * AppLayout
 * -----------------------------------------------------------------------------------------------*/
function AppLayout(props: PropsWithChildren) {
  return (
    <Layout>
      <LayoutMask />
      <LayoutSidebar>
        <AppNavigation />
        <LayoutSidebarResizeHandle />
      </LayoutSidebar>
      <LayoutContent>
        {({ sidebarState }) => {
          return (
            <Page>
              <PageHeader>
                <TooltipProvider closeDelay={1000}>
                  <LayoutSidebarToggle />
                  <Tooltip>
                    <TooltipLabel>
                      {sidebarState === "docked"
                        ? "Close sidebar"
                        : "Expand sidebar"}
                    </TooltipLabel>
                  </Tooltip>
                </TooltipProvider>
              </PageHeader>
              <PageContent>{props.children}</PageContent>
            </Page>
          );
        }}
      </LayoutContent>
    </Layout>
  );
}

export { AppLayout };
