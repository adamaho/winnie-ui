import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/home")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/home"!</div>;
}
