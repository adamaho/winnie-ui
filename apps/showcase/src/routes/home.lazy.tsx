import {
  Breadcrumb,
  BreadcrumbIcon,
  BreadcrumbLabel,
  BreadcrumbLink,
  Breadcrumbs,
  PageContent,
  PageHeader,
} from "@winnie-ui/react";

import { HomeDoor } from "@winnie-ui/icons/react/solid";

import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/home")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <PageHeader>
        <Breadcrumbs>
          <Breadcrumb>
            <BreadcrumbLink>
              <BreadcrumbIcon>
                <HomeDoor />
              </BreadcrumbIcon>
              <BreadcrumbLabel>Home</BreadcrumbLabel>
            </BreadcrumbLink>
          </Breadcrumb>
          <Breadcrumb>
            <BreadcrumbLink>
              <BreadcrumbLabel>Menus</BreadcrumbLabel>
            </BreadcrumbLink>
          </Breadcrumb>
        </Breadcrumbs>
      </PageHeader>
      <PageContent>Content</PageContent>
    </>
  );
}
