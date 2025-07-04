import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/font-size")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="bg-accent-1 mx-auto flex h-full flex-col items-center justify-center p-2">
      <div className="w-full max-w-[70ch] pt-10">
        <h3 className="text-6 font-1 mb-4 leading-none">Font Size</h3>
        <p className="text-3 text-accent-12 mb-5">
          Adjust the size of your text using these helpful utilities.
        </p>
        <ul className="bg-accent-3 border-accent-6 rounded-2 flex flex-col gap-3 border p-4">
          <li className="border-accent-8 flex items-end justify-end border-b py-2">
            <code className="text-1 text-accent-12 font-mono">
              variable <span className="text-accent-11">•</span> tailwind
            </code>
          </li>
          <li className="border-accent-5 flex items-end justify-between border-b py-2">
            <span className="text-1 text-accent-13 leading-none">Inter</span>
            <span className="text-1 text-accent-12 font-mono">
              w-fs-1 <span className="text-accent-11">•</span> text-1
            </span>
          </li>
          <li className="border-accent-5 flex items-end justify-between border-b py-2">
            <span className="text-2 text-accent-13 leading-none">Inter</span>
            <span className="text-1 text-accent-12 font-mono">
              w-fs-2 <span className="text-accent-11">•</span> text-2
            </span>
          </li>
          <li className="border-accent-5 flex items-end justify-between border-b py-2">
            <span className="text-3 text-accent-13 leading-none">Inter</span>
            <span className="text-1 text-accent-12 font-mono">
              w-fs-3 <span className="text-accent-11">•</span> text-3
            </span>
          </li>
          <li className="border-accent-5 flex items-end justify-between border-b py-2">
            <span className="text-4 text-accent-13 leading-none">Inter</span>
            <span className="text-1 text-accent-12 font-mono">
              w-fs-4 <span className="text-accent-11">•</span> text-4
            </span>
          </li>
          <li className="border-accent-5 flex items-end justify-between border-b py-2">
            <span className="text-4 text-accent-13 leading-none">Inter</span>
            <span className="text-1 text-accent-12 font-mono">
              w-fs-5 <span className="text-accent-11">•</span> text-5
            </span>
          </li>
          <li className="border-accent-5 flex items-end justify-between border-b py-2">
            <span className="text-5 text-accent-13 leading-none">Inter</span>
            <span className="text-1 text-accent-12 font-mono">
              w-fs-6 <span className="text-accent-11">•</span> text-6
            </span>
          </li>
          <li className="border-accent-5 flex items-end justify-between border-b py-2">
            <span className="text-7 text-accent-13 leading-none">Inter</span>
            <span className="text-1 text-accent-12 font-mono">
              w-fs-7 <span className="text-accent-11">•</span> text-7
            </span>
          </li>
          <li className="border-accent-5 flex items-end justify-between border-b py-2">
            <span className="text-8 text-accent-13 flex-1 leading-none">
              Inter
            </span>
            <span className="text-1 text-accent-12 font-mono">
              w-fs-8 <span className="text-accent-11">•</span> text-8
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
