import { CrossLarge, SettingsSliderHor } from "@winnie-ui/icons/react/line";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@radix-ui/react-dialog";

import { ThemePicker } from "./theme-picker";

import "./theme-picker-dialog.css";

/* -------------------------------------------------------------------------------------------------
 * ThemePickerDialog
 * -----------------------------------------------------------------------------------------------*/
function ThemePickerDialog() {
  return (
    <Dialog>
      <DialogTrigger
        data-component="button"
        data-accent-color="grey"
        data-size="md"
        data-variant="4"
        aria-label="Customize Theme"
      >
        <SettingsSliderHor data-slot="icon" />
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay className="theme-picker-modal-overlay" />
        <DialogContent
          data-component="dialog"
          data-size="sm"
          className="theme-picker-modal wui-scrollbar"
        >
          <header data-component="dialog-header">
            <DialogClose
              data-component="button"
              data-accent-color="grey"
              data-size="md"
              data-variant="4"
              data-slot="close"
            >
              <CrossLarge data-slot="icon" />
            </DialogClose>
          </header>
          <DialogTitle data-slot="title" slot="title">
            Customize Theme
          </DialogTitle>
          <DialogDescription data-slot="description">
            Change the vibes of your docs
          </DialogDescription>
          <div data-component="dialog-content">
            <ThemePicker />
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}

export { ThemePickerDialog };
