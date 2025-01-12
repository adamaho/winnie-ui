import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/menus")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/menus"!</div>;
}
