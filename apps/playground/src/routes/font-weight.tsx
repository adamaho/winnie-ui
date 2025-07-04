import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/font-weight")({
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
          <li className="border-accent-6 flex items-end justify-between border-b py-2">
            <span className="text-1 text-accent-13 leading-none">Normal</span>
            <span className="text-1 text-accent-12">400</span>
          </li>
          <li className="border-accent-6 flex items-end justify-between border-b py-2">
            <span className="text-2 text-accent-13 leading-none">Inter</span>
            <span className="text-1 text-accent-12">13px</span>
          </li>
          <li className="border-accent-6 flex items-end justify-between border-b py-2">
            <span className="text-3 text-accent-13 leading-none">Inter</span>
            <span className="text-1 text-accent-12">15px</span>
          </li>
          <li className="border-accent-6 flex items-end justify-between border-b py-2">
            <span className="text-4 text-accent-13 leading-none">Inter</span>
            <span className="text-1 text-accent-12">18px</span>
          </li>
          <li className="border-accent-6 flex items-end justify-between border-b py-2">
            <span className="text-4 text-accent-13 leading-none">Inter</span>
            <span className="text-1 text-accent-12">22px</span>
          </li>
          <li className="border-accent-6 flex items-end justify-between border-b py-2">
            <span className="text-5 text-accent-13 leading-none">Inter</span>
            <span className="text-1 text-accent-12">28px</span>
          </li>
          <li className="border-accent-6 flex items-end justify-between border-b py-2">
            <span className="text-7 text-accent-13 leading-none">Inter</span>
            <span className="text-1 text-accent-12">32px</span>
          </li>
          <li className="border-accent-6 flex items-end justify-between border-b py-2">
            <span className="text-8 text-accent-13 leading-none">Inter</span>
            <span className="text-1 text-accent-12">64px</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
