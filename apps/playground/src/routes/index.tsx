import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Link to="/color">Color</Link>
      <Link to="/font-family">Font Family</Link>
      <Link to="/font-size">Font Size</Link>
      <Link to="/font-weight">Font Weight</Link>
      <Link to="/line-height">Line Height</Link>
    </div>
  );
}
