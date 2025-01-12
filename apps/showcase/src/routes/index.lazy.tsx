import { createLazyFileRoute } from "@tanstack/react-router";

import { Link } from "@winnie-ui/react";

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
