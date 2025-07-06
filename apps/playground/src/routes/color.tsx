import { useState } from "react";

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/color")({
  component: RouteComponent,
});

function RouteComponent() {
  /**
   * tracks selected color
   */
  const [selectedColor, setSelectedColor] = useState("amethyst");

  return (
    <div className="bg-accent-1 mx-auto flex h-full flex-col items-center justify-center px-5">
      <div className="w-full max-w-[70ch] pb-6 pt-10">
        <h3 className="text-6 font-1 mb-4 leading-none">Color</h3>
        <p className="text-3 text-accent-12 mb-5">
          Apply color to your elements using these helpful utilities.
        </p>
        <ul
          className="bg-accent-3 border-accent-6 rounded-2 flex flex-col gap-3 border p-4"
          data-accent-color={selectedColor}
        >
          <li className="border-accent-8 flex items-end justify-between border-b py-2">
            <select onChange={(e) => setSelectedColor(e.target.value)}>
              <option value="red">Red</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
              <option value="yellow">Yellow</option>
            </select>
            <code className="text-1 text-accent-13 font-mono">
              variable <span className="text-accent-11">•</span> tailwind
            </code>
          </li>
          <li className="border-accent-5 flex items-end justify-between border-b py-2">
            <span className="bg-accent-1 rounded-1 h-[32px] w-[32px] shrink-0" />
            <code className="text-1 text-accent-12 shrink-0 font-mono">
              w-c-amethyst-1 <span className="text-accent-11">•</span>&nbsp;
              <var>{"<prefix>"}</var>-1
            </code>
          </li>
          <li className="border-accent-5 flex items-end justify-between border-b py-2">
            <span className="bg-accent-2 rounded-1 h-[32px] w-[32px]" />
            <span className="text-1 text-accent-12 font-mono">
              w-c-amethyst-2 <span className="text-accent-11">•</span>
              &nbsp;
              <var>{"<prefix>"}</var>-2
            </span>
          </li>
          <li className="border-accent-5 flex items-end justify-between border-b py-2">
            <span className="bg-accent-3 rounded-1 border-accent-6 h-[32px] w-[32px] border" />
            <span className="text-1 text-accent-12 font-mono">
              w-c-amethyst-3 <span className="text-accent-11">•</span>
              &nbsp;
              <var>{"<prefix>"}</var>-3
            </span>
          </li>
          <li className="border-accent-5 flex items-end justify-between border-b py-2">
            <span className="bg-accent-4 rounded-1 h-[32px] w-[32px]" />
            <span className="text-1 text-accent-12 font-mono">
              w-c-amethyst-4 <span className="text-accent-11">•</span>
              &nbsp;
              <var>{"<prefix>"}</var>-4
            </span>
          </li>
          <li className="border-accent-5 flex items-end justify-between border-b py-2">
            <span className="bg-accent-5 rounded-1 h-[32px] w-[32px]" />
            <span className="text-1 text-accent-12 font-mono">
              w-c-amethyst-5 <span className="text-accent-11">•</span>
              &nbsp;
              <var>{"<prefix>"}</var>-5
            </span>
          </li>
          <li className="border-accent-5 flex items-end justify-between border-b py-2">
            <span className="bg-accent-6 rounded-1 h-[32px] w-[32px]" />
            <span className="text-1 text-accent-12 font-mono">
              w-c-amethyst-6 <span className="text-accent-11">•</span>
              &nbsp;
              <var>{"<prefix>"}</var>-6
            </span>
          </li>
          <li className="border-accent-5 flex items-end justify-between border-b py-2">
            <span className="bg-accent-7 rounded-1 h-[32px] w-[32px]" />
            <span className="text-1 text-accent-12 font-mono">
              w-c-amethyst-7 <span className="text-accent-11">•</span>
              &nbsp;
              <var>{"<prefix>"}</var>-7
            </span>
          </li>
          <li className="border-accent-5 flex items-end justify-between border-b py-2">
            <span className="bg-accent-8 rounded-1 h-[32px] w-[32px]" />
            <span className="text-1 text-accent-12 font-mono">
              w-c-amethyst-8 <span className="text-accent-11">•</span>
              &nbsp;
              <var>{"<prefix>"}</var>-8
            </span>
          </li>
          <li className="border-accent-5 flex items-end justify-between border-b py-2">
            <span className="bg-accent-9 rounded-1 h-[32px] w-[32px]" />
            <span className="text-1 text-accent-12 font-mono">
              w-c-amethyst-9 <span className="text-accent-11">•</span>
              &nbsp;
              <var>{"<prefix>"}</var>-9
            </span>
          </li>{" "}
          <li className="border-accent-5 flex items-end justify-between border-b py-2">
            <span className="bg-accent-10 rounded-1 h-[32px] w-[32px]" />
            <span className="text-1 text-accent-12 font-mono">
              w-c-amethyst-10 <span className="text-accent-11">•</span>
              &nbsp;
              <var>{"<prefix>"}</var>-10
            </span>
          </li>
          <li className="border-accent-5 flex items-end justify-between border-b py-2">
            <span className="bg-accent-11 rounded-1 h-[32px] w-[32px]" />
            <span className="text-1 text-accent-12 font-mono">
              w-c-amethyst-11 <span className="text-accent-11">•</span>
              &nbsp;
              <var>{"<prefix>"}</var>-11
            </span>
          </li>
          <li className="border-accent-5 flex items-end justify-between border-b py-2">
            <span className="bg-accent-12 rounded-1 h-[32px] w-[32px]" />
            <span className="text-1 text-accent-12 font-mono">
              w-c-amethyst-12 <span className="text-accent-11">•</span>
              &nbsp;
              <var>{"<prefix>"}</var>-12
            </span>
          </li>
          <li className="border-accent-5 flex items-end justify-between border-b py-2">
            <span className="bg-accent-13 rounded-1 h-[32px] w-[32px]" />
            <span className="text-1 text-accent-12 font-mono">
              w-c-amethyst-13 <span className="text-accent-11">•</span>
              &nbsp;
              <var>{"<prefix>"}</var>-13
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
