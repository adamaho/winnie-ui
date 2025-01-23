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
            <BreadcrumbLabel>Menus</BreadcrumbLabel>
          </Breadcrumb>
        </Breadcrumbs>
      </PageHeader>
      <PageContent className="flex flex-col gap-4">
        <Breadcrumbs size="sm">
          <Breadcrumb>
            <BreadcrumbLink>
              <BreadcrumbIcon>
                <HomeDoor />
              </BreadcrumbIcon>
              <BreadcrumbLabel>Home</BreadcrumbLabel>
            </BreadcrumbLink>
          </Breadcrumb>
          <Breadcrumb>
            <BreadcrumbLabel>Menus</BreadcrumbLabel>
          </Breadcrumb>
        </Breadcrumbs>
        <Breadcrumbs size="md">
          <Breadcrumb>
            <BreadcrumbLink>
              <BreadcrumbIcon>
                <HomeDoor />
              </BreadcrumbIcon>
              <BreadcrumbLabel>Home</BreadcrumbLabel>
            </BreadcrumbLink>
          </Breadcrumb>
          <Breadcrumb>
            <BreadcrumbLabel>Menus</BreadcrumbLabel>
          </Breadcrumb>
        </Breadcrumbs>
        <Breadcrumbs size="lg">
          <Breadcrumb>
            <BreadcrumbLink>
              <BreadcrumbIcon>
                <HomeDoor />
              </BreadcrumbIcon>
              <BreadcrumbLabel>Home</BreadcrumbLabel>
            </BreadcrumbLink>
          </Breadcrumb>
          <Breadcrumb>
            <BreadcrumbLabel>Menus</BreadcrumbLabel>
          </Breadcrumb>
        </Breadcrumbs>
      </PageContent>
    </>
  );
}
