import { Link } from "@winnie-ui/react";

import { createLazyFileRoute } from "@tanstack/react-router";

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
