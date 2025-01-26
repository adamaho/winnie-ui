import {
  Button,
  ButtonIcon,
  ButtonLabel,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
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
            <Button variant="solid">
              <ButtonIcon>
                <Plus />
              </ButtonIcon>
              <ButtonLabel>New Session</ButtonLabel>
            </Button>
            <Dialog width="sm">
              <DialogTitle>New Session</DialogTitle>
              <DialogDescription>
                Track your daily poker sessions and monitor your progress over
                time.
              </DialogDescription>
              <form>
                <DialogContent>Content</DialogContent>
                <DialogFooter>
                  {(state) => {
                    return (
                      <>
                        <Button
                          color="grey"
                          variant="outlined"
                          data-slot="cancel"
                          onPress={state.close}
                        >
                          <ButtonLabel>Cancel</ButtonLabel>
                        </Button>
                        <Button data-slot="action" onPress={state.close}>
                          <ButtonLabel>Save</ButtonLabel>
                        </Button>
                      </>
                    );
                  }}
                </DialogFooter>
              </form>
            </Dialog>
          </DialogProvider>
        </PageHeaderActions>
      </PageHeader>
      <PageContent>Content</PageContent>
    </>
  );
}
