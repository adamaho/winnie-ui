import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/playground")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="grid w-full grid-cols-[minmax(var(--w-s-5),1fr)_1px_minmax(300px,375px)_1px_minmax(var(--w-s-5),1fr)] grid-rows-[var(--w-s-8)_1px_1fr_1px_1fr_1px_1fr_1px_var(--w-s-8)] overflow-x-hidden md:grid-cols-[minmax(var(--w-s-8),1fr)_1px_375px_1px_375px_1px_minmax(var(--w-s-8),1fr)] md:grid-rows-[var(--w-s-8)_1px_1fr_1px_1fr_1px_var(--w-s-8)] xl:grid-cols-[minmax(var(--w-s-8),1fr)_1px_375px_1px_375px_1px_375px_1px_minmax(var(--w-s-8),1fr)] xl:grid-rows-[repeat(3,var(--w-s-8)_1px_1fr_1px_var(--w-s-8))]"></div>
  );
}
