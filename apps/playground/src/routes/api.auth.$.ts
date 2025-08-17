import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/auth/$")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/api/auth/$"!</div>;
}
