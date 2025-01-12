import { createLazyFileRoute } from "@tanstack/react-router";

import { Link } from "@winnie-ui/react/components";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Link href="/about">To about</Link>
    </>
  );
}
