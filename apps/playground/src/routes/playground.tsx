import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/playground")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="grid w-full grid-cols-[minmax(var(--w-s-5),1fr)_1px_minmax(300px,375px)_1px_minmax(var(--w-s-5),1fr)] grid-rows-[var(--w-s-8)_1px_1fr_1px_1fr_1px_1fr_1px_var(--w-s-8)] overflow-x-hidden md:grid-cols-[minmax(var(--w-s-8),1fr)_1px_375px_1px_375px_1px_minmax(var(--w-s-8),1fr)] md:grid-rows-[var(--w-s-8)_1px_1fr_1px_1fr_1px_var(--w-s-8)] xl:grid-cols-[minmax(var(--w-s-8),1fr)_1px_375px_1px_375px_1px_375px_1px_minmax(var(--w-s-8),1fr)] xl:grid-rows-[var(--w-s-8)_1px_1fr_1px_var(--w-s-8)]">
      {/* vertical dividers */}
      <div className="bg-accent-7 col-start-2 row-[1/-1] row-start-1" />
      <div className="bg-accent-7 col-start-4 row-[1/-1] row-start-1" />
      <div className="bg-accent-7 col-start-6 row-[1/-1] row-start-1" />
      <div className="bg-accent-7 col-start-8 row-[1/-1] row-start-1" />

      {/* horizontal dividers */}
      <div className="bg-accent-7 col-[1/-1] row-start-2" />
      <div className="bg-accent-7 col-[1/-1] row-start-4" />
      <div className="bg-accent-7 col-[1/-1] row-start-6" />
      <div className="bg-accent-7 col-[1/-1] row-start-8" />

      {/* row 1 */}
      <div className="bg-accent-3 col-start-3 row-start-3 aspect-video md:col-start-3 md:row-start-3 xl:col-start-3 xl:row-start-3" />
      <div className="bg-accent-3 col-start-3 row-start-5 aspect-video md:col-start-5 md:row-start-3 xl:col-start-5 xl:row-start-3" />
      <div className="bg-accent-3 col-start-3 row-start-7 aspect-video md:col-start-3 md:row-start-5 xl:col-start-7 xl:row-start-3" />
    </div>
  );
}
