import { type ChangeEvent } from "react";

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/demo")({
  component: RouteComponent,
});

function RouteComponent() {
  /**
   * Handle toggling data-mono on the root
   */
  const handelToggleMono = (ev: ChangeEvent<HTMLInputElement>) => {
    const htmlEl = document.querySelector("html")!;
    htmlEl.setAttribute("data-mono", String(ev.target.checked));
  };

  /**
   * Handle setting the accent color
   */
  const handleSetAccentColor = (color: string) => {
    const htmlEl = document.querySelector("html")!;
    htmlEl.setAttribute("data-accent-color", color);
  };

  /**
   * Removes the `data-mono` attribute from the root
   */
  const removeMono = () => {
    const htmlEl = document.querySelector("html")!;
    htmlEl.removeAttribute("data-mono");
  };

  return (
    <div className="grid h-full h-screen grid-rows-[54px_1fr]">
      <header className="flex items-center justify-center">
        <label>
          <input type="checkbox" onChange={handelToggleMono} />
          <span className="ml-1">Toggle Mono</span>
        </label>
        <button onClick={removeMono}>Remove Mono</button>
      </header>
      <main className="grid grid-cols-[auto_1fr] gap-1 p-1">
        <div className="grid grid-cols-[auto_repeat(14,28px)] grid-rows-[repeat(2,28px)] gap-1">
          <div
            className="col-span-full grid grid-cols-subgrid gap-1"
            onClick={() => handleSetAccentColor("amethyst")}
          >
            <span
              className="text-1 text-accent-g12 mr-3 self-center font-mono"
              data-mono="true"
            >
              amethyst
            </span>
            <div className="bg-amethyst-1" />
            <div className="bg-amethyst-2" />
            <div className="bg-amethyst-3" />
            <div className="bg-amethyst-4" />
            <div className="bg-amethyst-5" />
            <div className="bg-amethyst-6" />
            <div className="bg-amethyst-7" />
            <div className="bg-amethyst-8" />
            <div className="bg-amethyst-9" />
            <div className="bg-amethyst-10" />
            <div className="bg-amethyst-11" />
            <div className="bg-amethyst-12" />
            <div className="bg-amethyst-13" />
            <div className="bg-amethyst-14" />
          </div>
          <div className="col-span-full grid grid-cols-subgrid">
            <span className="text-1 text-accent-g12 mr-3 self-center font-mono">
              amethyst grey
            </span>
            <div className="bg-amethyst-g1" />
            <div className="bg-amethyst-g2" />
            <div className="bg-amethyst-g3" />
            <div className="bg-amethyst-g4" />
            <div className="bg-amethyst-g5" />
            <div className="bg-amethyst-g6" />
            <div className="bg-amethyst-g7" />
            <div className="bg-amethyst-g8" />
            <div className="bg-amethyst-g9" />
            <div className="bg-amethyst-g10" />
            <div className="bg-amethyst-g11" />
            <div className="bg-amethyst-g12" />
            <div className="bg-amethyst-g13" />
            <div className="bg-amethyst-g14" />
          </div>
        </div>
        <div className="bg-accent-1 grid grid-rows-[54px_1fr]">
          <header className="bg-accent-2 border-accent-4 flex items-center border-b px-4">
            <div className="flex items-center gap-1">
              <span
                className="bg-linear-to-br from-accent-9 to-accent-12 rounded-round mr-1 h-[24px] w-[24px]"
                data-accent-color="amethyst"
              />
              <span className="text-2 text-accent-14 font-medium">Winnie</span>
              <span className="text-1 text-accent-12">/</span>
              <span className="text-2 text-accent-13">Colors</span>
            </div>
          </header>
          <div className="mx-auto w-full max-w-[70ch]">
            <div className="overflow-x-auto p-4">
              <table className="grid table-auto grid-cols-[auto_auto_1fr]">
                <thead className="col-span-full grid grid-cols-subgrid">
                  <tr className="border-accent-6 col-span-full grid grid-cols-subgrid border-b">
                    <th className="text-1 text-accent-14 p-3 text-left font-mono">
                      variable
                    </th>
                    <th className="text-1 text-accent-14 p-3 text-left font-mono">
                      tailwind
                    </th>
                    <th className="text-1 text-accent-14 p-3 text-left font-mono">
                      value
                    </th>
                  </tr>
                </thead>
                <tbody className="col-span-full grid grid-cols-subgrid">
                  <tr className="border-accent-4 col-span-full grid grid-cols-subgrid border-b">
                    <td
                      className="text-1 text-accent-12 p-3 font-mono"
                      data-accent-color="amethyst"
                    >
                      w-fs-1
                    </td>
                    <td className="text-1 text-accent-12 p-3 font-mono">
                      text-1
                    </td>
                    <td className="text-1 text-accent-12 whitespace-nowrap p-3 font-mono">
                      calc(11px * var(--w-scale, 1))
                    </td>
                  </tr>
                  <tr className="border-accent-4 col-span-full grid grid-cols-subgrid border-b">
                    <td
                      className="text-1 text-accent-12 p-3 font-mono"
                      data-accent-color="amethyst"
                    >
                      w-fs-2
                    </td>
                    <td className="text-1 text-accent-12 p-3 font-mono">
                      text-2
                    </td>
                    <td className="text-1 text-accent-12 whitespace-nowrap p-3 font-mono">
                      calc(13px * var(--w-scale, 1))
                    </td>
                  </tr>
                  <tr className="border-accent-4 col-span-full grid grid-cols-subgrid border-b">
                    <td
                      className="text-1 text-accent-12 p-3 font-mono"
                      data-accent-color="amethyst"
                    >
                      w-fs-3
                    </td>
                    <td className="text-1 text-accent-12 p-3 font-mono">
                      text-3
                    </td>
                    <td className="text-1 text-accent-12 whitespace-nowrap p-3 font-mono">
                      calc(15px * var(--w-scale, 1))
                    </td>
                  </tr>
                  <tr className="border-accent-4 col-span-full grid grid-cols-subgrid border-b">
                    <td
                      className="text-1 text-accent-12 p-3 font-mono"
                      data-accent-color="amethyst"
                    >
                      w-fs-4
                    </td>
                    <td className="text-1 text-accent-12 p-3 font-mono">
                      text-4
                    </td>
                    <td className="text-1 text-accent-12 whitespace-nowrap p-3 font-mono">
                      calc(18px * var(--w-scale, 1))
                    </td>
                  </tr>
                  <tr className="border-accent-4 col-span-full grid grid-cols-subgrid border-b">
                    <td
                      className="text-1 text-accent-12 p-3 font-mono"
                      data-accent-color="amethyst"
                    >
                      w-fs-5
                    </td>
                    <td className="text-1 text-accent-12 p-3 font-mono">
                      text-5
                    </td>
                    <td className="text-1 text-accent-12 whitespace-nowrap p-3 font-mono">
                      calc(22px * var(--w-scale, 1))
                    </td>
                  </tr>
                  <tr className="border-accent-4 col-span-full grid grid-cols-subgrid border-b">
                    <td
                      className="text-1 text-accent-12 p-3 font-mono"
                      data-accent-color="amethyst"
                    >
                      w-fs-6
                    </td>
                    <td className="text-1 text-accent-12 p-3 font-mono">
                      text-6
                    </td>
                    <td className="text-1 text-accent-12 whitespace-nowrap p-3 font-mono">
                      calc(28px * var(--w-scale, 1))
                    </td>
                  </tr>
                  <tr className="border-accent-4 col-span-full grid grid-cols-subgrid border-b">
                    <td
                      className="text-1 text-accent-12 p-3 font-mono"
                      data-accent-color="amethyst"
                    >
                      w-fs-7
                    </td>
                    <td className="text-1 text-accent-12 p-3 font-mono">
                      text-7
                    </td>
                    <td className="text-1 text-accent-12 whitespace-nowrap p-3 font-mono">
                      calc(32px * var(--w-scale, 1))
                    </td>
                  </tr>
                  <tr className="border-accent-6 col-span-full grid grid-cols-subgrid border-b">
                    <td
                      className="text-1 text-accent-12 p-3 font-mono"
                      data-accent-color="amethyst"
                    >
                      w-fs-8
                    </td>
                    <td className="text-1 text-accent-12 p-3 font-mono">
                      text-8
                    </td>
                    <td className="text-1 text-accent-12 whitespace-nowrap p-3 font-mono">
                      calc(64px * var(--w-scale, 1))
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
