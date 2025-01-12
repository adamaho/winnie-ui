import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/drinks")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/drinks"!</div>;
}
