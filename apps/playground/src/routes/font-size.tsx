import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/font-size")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="bg-accent-1 mx-auto flex h-full flex-col items-center justify-center p-2 pt-10">
      <div className="bg-accent-3 bg-accent-3 border-accent-6 rounded-2 w-full max-w-[70ch] overflow-x-auto border p-4">
        <table className="grid table-auto grid-cols-[auto_auto_1fr]">
          <thead className="col-span-full grid grid-cols-subgrid">
            <tr className="border-accent-7 col-span-full grid grid-cols-subgrid border-b">
              <th className="text-1 text-accent-13 p-2 text-left font-mono">
                variable
              </th>
              <th className="text-1 text-accent-13 p-2 text-left font-mono">
                tailwind
              </th>
              <th className="text-1 text-accent-13 p-2 text-left font-mono">
                value
              </th>
            </tr>
          </thead>
          <tbody className="col-span-full grid grid-cols-subgrid">
            <tr className="border-accent-6 col-span-full grid grid-cols-subgrid border-b">
              <td
                className="text-1 text-accent-12 p-2 font-mono"
                data-accent-color="amethyst"
              >
                w-fs-1
              </td>
              <td
                className="text-1 text-accent-12 p-2 font-mono"
                data-accent-color="sky"
              >
                text-1
              </td>
              <td className="text-1 text-accent-12 whitespace-nowrap p-2 font-mono">
                calc(11px * var(--w-scale, 1))
              </td>
            </tr>
            <tr className="border-accent-6 col-span-full grid grid-cols-subgrid border-b">
              <td
                className="text-1 text-accent-12 p-2 font-mono"
                data-accent-color="amethyst"
              >
                w-fs-2
              </td>
              <td
                className="text-1 text-accent-12 p-2 font-mono"
                data-accent-color="sky"
              >
                text-2
              </td>
              <td className="text-1 text-accent-12 whitespace-nowrap p-2 font-mono">
                calc(13px * var(--w-scale, 1))
              </td>
            </tr>
            <tr className="border-accent-6 col-span-full grid grid-cols-subgrid border-b">
              <td
                className="text-1 text-accent-12 p-2 font-mono"
                data-accent-color="amethyst"
              >
                w-fs-3
              </td>
              <td
                className="text-1 text-accent-12 p-2 font-mono"
                data-accent-color="sky"
              >
                text-3
              </td>
              <td className="text-1 text-accent-12 whitespace-nowrap p-2 font-mono">
                calc(15px * var(--w-scale, 1))
              </td>
            </tr>
            <tr className="border-accent-6 col-span-full grid grid-cols-subgrid border-b">
              <td
                className="text-1 text-accent-12 p-2 font-mono"
                data-accent-color="amethyst"
              >
                w-fs-4
              </td>
              <td
                className="text-1 text-accent-12 p-2 font-mono"
                data-accent-color="sky"
              >
                text-4
              </td>
              <td className="text-1 text-accent-12 whitespace-nowrap p-2 font-mono">
                calc(18px * var(--w-scale, 1))
              </td>
            </tr>
            <tr className="border-accent-6 col-span-full grid grid-cols-subgrid border-b">
              <td
                className="text-1 text-accent-12 p-2 font-mono"
                data-accent-color="amethyst"
              >
                w-fs-5
              </td>
              <td
                className="text-1 text-accent-12 p-2 font-mono"
                data-accent-color="sky"
              >
                text-5
              </td>
              <td className="text-1 text-accent-12 whitespace-nowrap p-2 font-mono">
                calc(22px * var(--w-scale, 1))
              </td>
            </tr>
            <tr className="border-accent-6 col-span-full grid grid-cols-subgrid border-b">
              <td
                className="text-1 text-accent-12 p-2 font-mono"
                data-accent-color="amethyst"
              >
                w-fs-6
              </td>
              <td
                className="text-1 text-accent-12 p-2 font-mono"
                data-accent-color="sky"
              >
                text-6
              </td>
              <td className="text-1 text-accent-12 whitespace-nowrap p-2 font-mono">
                calc(28px * var(--w-scale, 1))
              </td>
            </tr>
            <tr className="border-accent-6 col-span-full grid grid-cols-subgrid border-b">
              <td
                className="text-1 text-accent-12 p-2 font-mono"
                data-accent-color="amethyst"
              >
                w-fs-7
              </td>
              <td
                className="text-1 text-accent-12 p-2 font-mono"
                data-accent-color="sky"
              >
                text-7
              </td>
              <td className="text-1 text-accent-12 whitespace-nowrap p-2 font-mono">
                calc(32px * var(--w-scale, 1))
              </td>
            </tr>
            <tr className="col-span-full grid grid-cols-subgrid">
              <td
                className="text-1 text-accent-12 p-2 font-mono"
                data-accent-color="amethyst"
              >
                w-fs-8
              </td>
              <td
                className="text-1 text-accent-12 p-2 font-mono"
                data-accent-color="sky"
              >
                text-8
              </td>
              <td className="text-1 text-accent-12 whitespace-nowrap p-2 font-mono">
                calc(64px * var(--w-scale, 1))
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
