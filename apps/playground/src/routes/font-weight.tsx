import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/font-weight")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="bg-accent-1 mx-auto flex h-full flex-col items-center justify-center p-2">
      <div className="w-full max-w-[70ch] pt-10">
        <h3 className="text-6 font-1 mb-4 leading-none">Font Weight</h3>
        <p className="text-3 text-accent-12 mb-5">
          Adjust the weight of your text using these helpful utilities.
        </p>
        <ul className="bg-accent-3 border-accent-6 rounded-2 flex flex-col gap-3 border p-4">
          <li className="border-accent-8 flex items-end justify-end border-b py-2">
            <code className="text-1 text-accent-13 font-mono">
              variable <span className="text-accent-11">•</span> tailwind
            </code>
          </li>
          <li className="border-accent-5 flex items-end justify-between border-b py-2">
            <span className="text-4 text-accent-13 font-1 leading-none">
              Normal
            </span>
            <span className="text-1 text-accent-12 font-mono">
              w-fw-1 <span className="text-accent-11">•</span> font-1
            </span>
          </li>
          <li className="border-accent-5 flex items-end justify-between border-b py-2">
            <span className="text-4 text-accent-13 font-2 leading-none">
              Medium
            </span>
            <span className="text-1 text-accent-12 font-mono">
              w-fw-2 <span className="text-accent-11">•</span> font-2
            </span>
          </li>
          <li className="border-accent-5 flex items-end justify-between border-b py-2">
            <span className="text-4 text-accent-13 font-3 leading-none">
              Semibold
            </span>
            <span className="text-1 text-accent-12 font-mono">
              w-fw-3 <span className="text-accent-11">•</span> font-3
            </span>
          </li>
          <li className="border-accent-5 flex items-end justify-between border-b py-2">
            <span className="text-4 text-accent-13 font-4 leading-none">
              Bold
            </span>
            <span className="text-1 text-accent-12 font-mono">
              w-fw-4 <span className="text-accent-11">•</span> font-4
            </span>
          </li>
          <li className="border-accent-5 flex items-end justify-between border-b py-2">
            <span className="text-4 text-accent-13 font-5 leading-none">
              Heavy
            </span>
            <span className="text-1 text-accent-12 font-mono">
              w-fw-5 <span className="text-accent-11">•</span> font-5
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
