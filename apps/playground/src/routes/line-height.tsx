import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/line-height")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="bg-accent-1 mx-auto flex h-full flex-col items-center justify-center p-2">
      <div className="w-full max-w-[70ch] pt-10">
        <h3 className="text-6 font-1 mb-4 leading-none">Line Height</h3>
        <p className="text-accent-12 text-3 mb-5">
          Adjust the line height of your text using these helpful utilities.
        </p>
        <ul className="bg-accent-3 border-accent-6 rounded-2 flex flex-col border p-4">
          <li className="border-accent-8 flex items-end justify-end border-b py-2">
            <code className="text-1 text-accent-13 font-mono">
              variable <span className="text-accent-11">•</span> tailwind
            </code>
          </li>
          <li className="border-accent-5 flex items-end justify-between border-b py-2">
            <span className="text-3 text-accent-13 leading-1 max-w-[40ch]">
              Pizza is one of the world's most beloved comfort foods,
              originating from Italy but now enjoyed globally in countless
              variations.
            </span>
            <span className="text-1 text-accent-12 font-mono">
              w-lh-1 <span className="text-accent-11">•</span> leading-1
            </span>
          </li>
          <li className="border-accent-5 flex items-end justify-between border-b py-2">
            <span className="text-3 text-accent-13 leading-2 max-w-[40ch]">
              Pizza is one of the world's most beloved comfort foods,
              originating from Italy but now enjoyed globally in countless
              variations.
            </span>
            <span className="text-1 text-accent-12 font-mono">
              w-lh-2<span className="text-accent-11">•</span> leading-2
            </span>
          </li>
          <li className="border-accent-5 flex items-end justify-between border-b py-2">
            <span className="text-3 text-accent-13 max-w-[40ch] leading-3">
              Pizza is one of the world's most beloved comfort foods,
              originating from Italy but now enjoyed globally in countless
              variations.
            </span>
            <span className="text-1 text-accent-12 font-mono">
              w-lh-3<span className="text-accent-11">•</span> leading-3
            </span>
          </li>
          <li className="border-accent-5 flex items-end justify-between border-b py-2">
            <span className="text-3 text-accent-13 max-w-[40ch] leading-4">
              Pizza is one of the world's most beloved comfort foods,
              originating from Italy but now enjoyed globally in countless
              variations.
            </span>
            <span className="text-1 text-accent-12 font-mono">
              w-lh-4<span className="text-accent-11">•</span> leading-4
            </span>
          </li>
          <li className="border-accent-5 flex items-end justify-between border-b py-2">
            <span className="text-3 text-accent-13 max-w-[40ch] leading-5">
              Pizza is one of the world's most beloved comfort foods,
              originating from Italy but now enjoyed globally in countless
              variations.
            </span>
            <span className="text-1 text-accent-12 font-mono">
              w-lh-5<span className="text-accent-11">•</span> leading-5
            </span>
          </li>
          <li className="border-accent-5 flex items-end justify-between border-b py-2">
            <span className="text-3 text-accent-13 max-w-[40ch] leading-6">
              Pizza is one of the world's most beloved comfort foods,
              originating from Italy but now enjoyed globally in countless
              variations.
            </span>
            <span className="text-1 text-accent-12 font-mono">
              w-lh-6<span className="text-accent-11">•</span> leading-6
            </span>
          </li>
          <li className="border-accent-5 flex items-end justify-between border-b py-2">
            <span className="text-3 text-accent-13 max-w-[40ch] leading-7">
              Pizza is one of the world's most beloved comfort foods,
              originating from Italy but now enjoyed globally in countless
              variations.
            </span>
            <span className="text-1 text-accent-12 font-mono">
              w-lh-7<span className="text-accent-11">•</span> leading-7
            </span>
          </li>
          <li className="border-accent-5 flex items-end justify-between border-b py-2">
            <span className="text-3 text-accent-13 max-w-[40ch] leading-8">
              Pizza is one of the world's most beloved comfort foods,
              originating from Italy but now enjoyed globally in countless
              variations.
            </span>
            <span className="text-1 text-accent-12 font-mono">
              w-lh-8<span className="text-accent-11">•</span> leading-8
            </span>
          </li>
          <li className="border-accent-5 flex items-end justify-between border-b py-2">
            <span className="text-3 text-accent-13 max-w-[40ch] leading-9">
              Pizza is one of the world's most beloved comfort foods,
              originating from Italy but now enjoyed globally in countless
              variations.
            </span>
            <span className="text-1 text-accent-12 font-mono">
              w-lh-9<span className="text-accent-11">•</span> leading-9
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
