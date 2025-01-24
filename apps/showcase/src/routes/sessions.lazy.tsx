import {
  Button,
  ButtonIcon,
  ButtonLabel,
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
          <Button>
            <ButtonIcon>
              <Plus />
            </ButtonIcon>
            <ButtonLabel>New Session</ButtonLabel>
          </Button>
        </PageHeaderActions>
      </PageHeader>
      <PageContent>Content</PageContent>
    </>
  );
}
