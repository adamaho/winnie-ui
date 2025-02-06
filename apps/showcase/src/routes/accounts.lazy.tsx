import {
  Button,
  ButtonIcon,
  ButtonKbd,
  ButtonLabel,
  ButtonShortcut,
  DialogProvider,
  PageContent,
  PageHeader,
  PageHeaderActions,
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
            <Button variant="3" color="grey">
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
