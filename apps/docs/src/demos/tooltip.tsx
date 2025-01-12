import { Button, ButtonIcon } from "@winnie-ui/react/button";
import {
  Tooltip,
  TooltipLabel,
  TooltipProvider,
} from "@winnie-ui/react/tooltip";

import { SidebarSimpleLeftSquare } from "@winnie-ui/icons/solid/sidebar-simple-left-square";

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
