import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/space")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="bg-accent-1 mx-auto flex h-full flex-col items-center justify-center p-2">
      <div className="w-full max-w-[70ch] pt-10">
        <h3 className="text-6 font-1 mb-4 leading-none">Space</h3>
        <p className="text-3 text-accent-12 mb-5">
          Adjust the margin, padding, etc of your elements using these helpful
          utilities.
        </p>
        <ul className="bg-accent-3 border-accent-6 rounded-2 flex flex-col gap-3 border p-4">
          <li className="border-accent-8 flex items-end justify-end border-b py-2">
            <code className="text-1 text-accent-13 font-mono">
              variable <span className="text-accent-11">•</span> tailwind
            </code>
          </li>
          <li className="border-accent-5 flex items-end justify-between border-b py-2">
            <span className="bg-accent-9 rounded-1 h-[24px] w-1" />
            <span className="text-1 text-accent-12 font-mono">
              w-sp-1 <span className="text-accent-11">•</span>
              &nbsp;
              <var>{"<prefix>"}</var>-1
            </span>
          </li>
          <li className="border-accent-5 flex items-end justify-between border-b py-2">
            <span className="bg-accent-9 rounded-1 h-[24px] w-2" />
            <span className="text-1 text-accent-12 font-mono">
              w-sp-2 <span className="text-accent-11">•</span>
              &nbsp;
              <var>{"<prefix>"}</var>-2
            </span>
          </li>
          <li className="border-accent-5 flex items-end justify-between border-b py-2">
            <span className="bg-accent-9 rounded-1 h-[24px] w-3" />
            <span className="text-1 text-accent-12 font-mono">
              w-sp-3 <span className="text-accent-11">•</span>
              &nbsp;
              <var>{"<prefix>"}</var>-3
            </span>
          </li>
          <li className="border-accent-5 flex items-end justify-between border-b py-2">
            <span className="bg-accent-9 rounded-1 h-[24px] w-4" />
            <span className="text-1 text-accent-12 font-mono">
              w-sp-4 <span className="text-accent-11">•</span>
              &nbsp;
              <var>{"<prefix>"}</var>-4
            </span>
          </li>
          <li className="border-accent-5 flex items-end justify-between border-b py-2">
            <span className="bg-accent-9 rounded-1 h-[24px] w-5" />
            <span className="text-1 text-accent-12 font-mono">
              w-sp-5 <span className="text-accent-11">•</span>
              &nbsp;
              <var>{"<prefix>"}</var>-5
            </span>
          </li>
          <li className="border-accent-5 flex items-end justify-between border-b py-2">
            <span className="bg-accent-9 rounded-1 h-[24px] w-6" />
            <span className="text-1 text-accent-12 font-mono">
              w-sp-6 <span className="text-accent-11">•</span>
              &nbsp;
              <var>{"<prefix>"}</var>-6
            </span>
          </li>
          <li className="border-accent-5 flex items-end justify-between border-b py-2">
            <span className="bg-accent-9 rounded-1 h-[24px] w-7" />
            <span className="text-1 text-accent-12 font-mono">
              w-sp-7 <span className="text-accent-11">•</span>
              &nbsp;
              <var>{"<prefix>"}</var>-7
            </span>
          </li>
          <li className="border-accent-5 flex items-end justify-between border-b py-2">
            <span className="bg-accent-9 rounded-1 h-[24px] w-8" />
            <span className="text-1 text-accent-12 font-mono">
              w-sp-8 <span className="text-accent-11">•</span>
              &nbsp;
              <var>{"<prefix>"}</var>-8
            </span>
          </li>
          <li className="border-accent-5 flex items-end justify-between border-b py-2">
            <span className="bg-accent-9 rounded-1 h-[24px] w-9" />
            <span className="text-1 text-accent-12 font-mono">
              w-sp-9 <span className="text-accent-11">•</span>
              &nbsp;
              <var>{"<prefix>"}</var>-9
            </span>
          </li>{" "}
          <li className="border-accent-5 flex items-end justify-between border-b py-2">
            <span className="bg-accent-9 rounded-1 h-[24px] w-10" />
            <span className="text-1 text-accent-12 font-mono">
              w-sp-10 <span className="text-accent-11">•</span>
              &nbsp;
              <var>{"<prefix>"}</var>-10
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
