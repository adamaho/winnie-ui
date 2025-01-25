import {
  Button,
  ButtonIcon,
  ButtonLabel,
  Dialog,
  DialogClose,
  DialogDescription,
  DialogProvider,
  DialogTitle,
  PageContent,
  PageHeader,
  PageHeaderActions,
} from "@winnie-ui/react";

import { Plus } from "@winnie-ui/icons/react/solid";

import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/sessions")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <PageHeader>
        <PageHeaderActions>
          <DialogProvider>
            <Button>
              <ButtonIcon>
                <Plus />
              </ButtonIcon>
              <ButtonLabel>New Session</ButtonLabel>
            </Button>
            <Dialog>
              <DialogTitle>New Session</DialogTitle>
              <DialogDescription>Create a new session to</DialogDescription>
              <form>
                <input />
              </form>
            </Dialog>
          </DialogProvider>
        </PageHeaderActions>
      </PageHeader>
      <PageContent>Content</PageContent>
    </>
  );
}
