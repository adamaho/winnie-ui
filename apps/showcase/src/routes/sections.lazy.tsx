import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/sections")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div></div>;
}
