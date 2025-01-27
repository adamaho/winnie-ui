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
            <Button variant="outlined" color="grey">
              <ButtonIcon>
                <Plus />
              </ButtonIcon>
              <ButtonLabel>New Session</ButtonLabel>
              <ButtonShortcut>
                <ButtonKbd>C</ButtonKbd>
              </ButtonShortcut>
            </Button>
            <Dialog width="sm">
              <DialogTitle>New Session</DialogTitle>
              <DialogDescription>
                Track your daily poker sessions and monitor your progress over
                time.
              </DialogDescription>
              <form>
                <DialogContent></DialogContent>
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
                          <ButtonShortcut>
                            <ButtonKbd>Esc</ButtonKbd>
                          </ButtonShortcut>
                        </Button>
                        <Button data-slot="action" onPress={state.close}>
                          <ButtonLabel>Create session</ButtonLabel>
                          <ButtonShortcut>
                            <ButtonKbd>⌘</ButtonKbd>
                            <ButtonKbd>⮐</ButtonKbd>
                          </ButtonShortcut>
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
      <PageContent></PageContent>
    </>
  );
}
