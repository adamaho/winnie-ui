import {
  Button,
  ButtonIcon,
  ButtonKbd,
  ButtonLabel,
  ButtonShortcut,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogProvider,
  DialogTitle,
  FieldLabel,
  NumberField,
  NumberGroup,
  NumberInput,
  NumberStepper,
  PageContent,
  PageHeader,
  PageHeaderActions,
  TextArea,
  TextAreaField,
} from "@winnie-ui/react";

import { Plus } from "@winnie-ui/icons/react/solid";

import { createLazyFileRoute } from "@tanstack/react-router";

import { CreateAccountDialog } from "~/components/create-account-dialog";

export const Route = createLazyFileRoute("/accounts")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <PageHeader>
        <PageHeaderActions>
          <DialogProvider>
            <Button variant="outlined" color="grey">
              <ButtonIcon>
                <Plus />
              </ButtonIcon>
              <ButtonLabel>New Account</ButtonLabel>
              <ButtonShortcut>
                <ButtonKbd>N</ButtonKbd>
              </ButtonShortcut>
            </Button>
            <CreateAccountDialog />
          </DialogProvider>
        </PageHeaderActions>
      </PageHeader>
      <PageContent></PageContent>
    </>
  );
}
