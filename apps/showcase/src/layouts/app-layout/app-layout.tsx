import {
  Layout,
  LayoutContent,
  LayoutMask,
  LayoutSidebar,
  LayoutSidebarResizeHandle,
  LayoutSidebarToggle,
  Tooltip,
  TooltipLabel,
  TooltipProvider,
} from "@winnie-ui/react";

import type { PropsWithChildren } from "react";

/* -------------------------------------------------------------------------------------------------
 * AppLayout
 * -----------------------------------------------------------------------------------------------*/
function AppLayout(props: PropsWithChildren) {
  return (
    <Layout>
      <LayoutMask />
      <LayoutSidebar>
        <LayoutSidebarResizeHandle />
      </LayoutSidebar>
      <LayoutContent>
        {({ sidebarState }) => {
          return (
            <>
              <TooltipProvider>
                <LayoutSidebarToggle />
                <Tooltip>
                  <TooltipLabel>
                    {sidebarState === "docked"
                      ? "Close sidebar"
                      : "Expand sidebar"}
                  </TooltipLabel>
                </Tooltip>
              </TooltipProvider>
              {props.children}
            </>
          );
        }}
      </LayoutContent>
    </Layout>
  );
}

export { AppLayout };
