import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/dishes")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/dishes"!</div>;
}
