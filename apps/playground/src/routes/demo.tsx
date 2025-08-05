import { MagnifyingGlass } from "@winnie-ui/icons/react/line";
import { Bell2, People, SettingsGear3 } from "@winnie-ui/icons/react/solid";

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/demo")({
  component: RouteComponent,
});

function RouteComponent() {
  /**
   * Handle setting the accent color
   */
  const handleSetAccentColor = (color: string) => {
    const htmlEl = document.querySelector("html")!;
    htmlEl.setAttribute("data-accent-color", color);
  };

  /**
   * Sets the monochrome attribute changing the colors just the single accent color
   */
  const handleSetChromatic = () => {
    const htmlEl = document.querySelector("html")!;
    htmlEl.setAttribute("data-chromatic", "");
    htmlEl.removeAttribute("data-greyscale");
  };

  /**
   * Sets the greyscale attribute changing the colors just the single grey accent color
   */
  const handleSetGreyscale = () => {
    const htmlEl = document.querySelector("html")!;
    htmlEl.setAttribute("data-greyscale", "");
    htmlEl.removeAttribute("data-chromatic");
  };

  /**
   * Removes the data-mono and data-greyscale attributes
   */
  const handleSetMixed = () => {
    const htmlEl = document.querySelector("html")!;
    htmlEl.removeAttribute("data-chromatic");
    htmlEl.removeAttribute("data-greyscale");
  };

  return (
    <div className="grid h-full h-screen grid-rows-[54px_1fr]">
      <header className="flex items-center justify-center gap-2">
        <button onClick={handleSetChromatic}>chromatic</button>
        <button onClick={handleSetGreyscale}>greyscale</button>
        <button onClick={handleSetMixed}>mixed</button>
      </header>
      <main className="grid grid-cols-[auto_1fr] gap-1 p-1">
        <div>
          <div className="grid grid-cols-[auto_repeat(13,28px)] grid-rows-[auto_repeat(2,28px)] gap-[2px]">
            <div className="col-span-full grid grid-cols-subgrid justify-items-center gap-[2px]">
              <span className="text-1 text-accent-g12 mr-3 font-mono"></span>
              <span className="text-1 text-accent-g12 font-mono">1</span>
              <span className="text-1 text-accent-g12 font-mono">2</span>
              <span className="text-1 text-accent-g12 font-mono">3</span>
              <span className="text-1 text-accent-g12 font-mono">4</span>
              <span className="text-1 text-accent-g12 font-mono">5</span>
              <span className="text-1 text-accent-g12 font-mono">6</span>
              <span className="text-1 text-accent-g12 font-mono">7</span>
              <span className="text-1 text-accent-g12 font-mono">8</span>
              <span className="text-1 text-accent-g12 font-mono">9</span>
              <span className="text-1 text-accent-g12 font-mono">10</span>
              <span className="text-1 text-accent-g12 font-mono">11</span>
              <span className="text-1 text-accent-g12 font-mono">12</span>
              <span className="text-1 text-accent-g12 font-mono">13</span>
            </div>
            <div
              className="col-span-full grid grid-cols-subgrid gap-[2px]"
              onClick={() => handleSetAccentColor("amethyst")}
            >
              <span
                className="text-1 text-accent-g12 mr-3 font-mono"
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
            </div>
            <div
              className="col-span-full grid grid-cols-subgrid gap-[2px]"
              onClick={() => handleSetAccentColor("amethyst")}
            >
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
            </div>
          </div>
        </div>
        <div className="bg-accent-g1 border-accent-g3 grid grid-rows-[100px_1fr] border">
          <header className="bg-accent-g2 border-accent-g4 flex flex-col justify-between border-b px-3 pt-2">
            <div className="flex items-center">
              <div className="flex items-center gap-1">
                <span className="bg-linear-to-br from-accent-9 to-accent-12 rounded-round mr-1 h-[24px] w-[24px]" />
                <span className="text-2 text-accent-g13 font-medium">
                  Winnie
                </span>
                <span className="text-3 text-accent-g12 mx-1">/</span>
                <span className="text-2 text-accent-g12 mr-2 whitespace-nowrap">
                  Command Center
                </span>
              </div>
              <div className="flex flex-1 items-center justify-end">
                <div
                  data-component="input-group"
                  data-size="sm"
                  className="border-accent-g5 bg-accent-g3 focus-within:border-accent-8 focus-within:outline-accent-8 mr-2 max-w-[200px] border focus-within:border-transparent focus-within:outline-2 focus-within:-outline-offset-2"
                >
                  <MagnifyingGlass data-slot="icon" />
                  <input
                    data-slot="input"
                    placeholder="Search..."
                    className="focus:outline-none"
                  />
                  <kbd data-slot="shortcut">
                    <kbd
                      data-component="kbd"
                      className="bg-accent-g4 border-accent-g5 border font-sans"
                    >
                      /
                    </kbd>
                  </kbd>
                </div>
                <button
                  data-component="button"
                  className="hover:bg-accent-g3 active:bg-accent-g4 text-accent-g12"
                >
                  <Bell2 data-slot="icon" />
                </button>
                <button
                  data-component="button"
                  className="hover:bg-accent-g3 active:bg-accent-g4 text-accent-g12"
                >
                  <SettingsGear3 data-slot="icon" />
                </button>
                <button
                  data-component="button"
                  className="hover:bg-accent-g3 active:bg-accent-g4"
                >
                  <div
                    data-slot="icon"
                    className="rounded-round bg-linear-to-br from-accent-6 to-accent-9"
                  />
                </button>
              </div>
            </div>
            <div className="flex gap-5">
              <button className="text-2 text-accent-g13 border-accent-9 rounded-none border-b-2 pb-2">
                <span data-slot="label">Dashboard</span>
              </button>
              <button className="text-2 text-accent-g12 pb-3">
                <span data-slot="label">Issues</span>
              </button>
              <button className="text-2 text-accent-g12 pb-3">
                <span data-slot="label">Tasks</span>
              </button>
            </div>
          </header>
          <div className="mx-auto w-full max-w-[70ch]">
            <div className="overflow-x-auto p-4">
              <table className="grid table-auto grid-cols-[auto_auto_1fr]">
                <thead className="col-span-full grid grid-cols-subgrid">
                  <tr className="border-accent-g6 col-span-full grid grid-cols-subgrid border-b">
                    <th className="text-1 text-accent-g13 p-3 text-left font-mono">
                      variable
                    </th>
                    <th className="text-1 text-accent-g13 p-3 text-left font-mono">
                      tailwind
                    </th>
                    <th className="text-1 text-accent-g13 p-3 text-left font-mono">
                      value
                    </th>
                  </tr>
                </thead>
                <tbody className="col-span-full grid grid-cols-subgrid">
                  <tr className="border-accent-g4 col-span-full grid grid-cols-subgrid border-b">
                    <td className="text-1 text-accent-12 p-3 font-mono">
                      w-fs-1
                    </td>
                    <td className="text-1 text-accent-g12 p-3 font-mono">
                      text-1
                    </td>
                    <td className="text-1 text-accent-g12 whitespace-nowrap p-3 font-mono">
                      calc(11px * var(--w-scale, 1))
                    </td>
                  </tr>
                  <tr className="border-accent-g4 col-span-full grid grid-cols-subgrid border-b">
                    <td className="text-1 text-accent-12 p-3 font-mono">
                      w-fs-2
                    </td>
                    <td className="text-1 text-accent-g12 p-3 font-mono">
                      text-2
                    </td>
                    <td className="text-1 text-accent-g12 whitespace-nowrap p-3 font-mono">
                      calc(13px * var(--w-scale, 1))
                    </td>
                  </tr>
                  <tr className="border-accent-g4 col-span-full grid grid-cols-subgrid border-b">
                    <td className="text-1 text-accent-12 p-3 font-mono">
                      w-fs-3
                    </td>
                    <td className="text-1 text-accent-g12 p-3 font-mono">
                      text-3
                    </td>
                    <td className="text-1 text-accent-g12 whitespace-nowrap p-3 font-mono">
                      calc(15px * var(--w-scale, 1))
                    </td>
                  </tr>
                  <tr className="border-accent-g4 col-span-full grid grid-cols-subgrid border-b">
                    <td className="text-1 text-accent-12 p-3 font-mono">
                      w-fs-4
                    </td>
                    <td className="text-1 text-accent-g12 p-3 font-mono">
                      text-4
                    </td>
                    <td className="text-1 text-accent-g12 whitespace-nowrap p-3 font-mono">
                      calc(18px * var(--w-scale, 1))
                    </td>
                  </tr>
                  <tr className="border-accent-g4 col-span-full grid grid-cols-subgrid border-b">
                    <td className="text-1 text-accent-12 p-3 font-mono">
                      w-fs-5
                    </td>
                    <td className="text-1 text-accent-g12 p-3 font-mono">
                      text-5
                    </td>
                    <td className="text-1 text-accent-g12 whitespace-nowrap p-3 font-mono">
                      calc(22px * var(--w-scale, 1))
                    </td>
                  </tr>
                  <tr className="border-accent-g4 col-span-full grid grid-cols-subgrid border-b">
                    <td className="text-1 text-accent-12 p-3 font-mono">
                      w-fs-6
                    </td>
                    <td className="text-1 text-accent-g12 p-3 font-mono">
                      text-6
                    </td>
                    <td className="text-1 text-accent-g12 whitespace-nowrap p-3 font-mono">
                      calc(28px * var(--w-scale, 1))
                    </td>
                  </tr>
                  <tr className="border-accent-g4 col-span-full grid grid-cols-subgrid border-b">
                    <td className="text-1 text-accent-12 p-3 font-mono">
                      w-fs-7
                    </td>
                    <td className="text-1 text-accent-g12 p-3 font-mono">
                      text-7
                    </td>
                    <td className="text-1 text-accent-g12 whitespace-nowrap p-3 font-mono">
                      calc(32px * var(--w-scale, 1))
                    </td>
                  </tr>
                  <tr className="border-accent-g6 col-span-full grid grid-cols-subgrid border-b">
                    <td className="text-1 text-accent-12 p-3 font-mono">
                      w-fs-8
                    </td>
                    <td className="text-1 text-accent-g12 p-3 font-mono">
                      text-8
                    </td>
                    <td className="text-1 text-accent-g12 whitespace-nowrap p-3 font-mono">
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
