import { Button, ButtonIcon } from "@winnie-ui/react";
import { Tooltip, TooltipLabel, TooltipProvider } from "@winnie-ui/react";

import { SidebarSimpleLeftSquare } from "@winnie-ui/icons/react/solid";

/* -------------------------------------------------------------------------------------------------
 * TooltipDemo
 * -----------------------------------------------------------------------------------------------*/
export function TooltipDemo() {
  return (
    <TooltipProvider>
      <Button>
        <ButtonIcon>
          <SidebarSimpleLeftSquare />
        </ButtonIcon>
      </Button>
      <Tooltip placement="bottom">
        <TooltipLabel>Close navigation sidebar</TooltipLabel>
      </Tooltip>
    </TooltipProvider>
  );
}
