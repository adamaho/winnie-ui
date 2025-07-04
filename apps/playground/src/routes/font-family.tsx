import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/font-family")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="bg-accent-1 mx-auto flex h-full flex-col items-center justify-center p-2">
      <div className="w-full max-w-[70ch] pt-10">
        <h3 className="text-6 font-1 mb-4 leading-none">Font Family</h3>
        <p className="text-3 text-accent-12 mb-5">
          Adjust the family of your text using these helpful utilities.
        </p>
        <ul className="bg-accent-3 border-accent-6 rounded-2 flex flex-col gap-3 border p-4">
          <li className="border-accent-8 flex items-end justify-end border-b py-2">
            <code className="text-1 text-accent-13 font-mono">
              variable <span className="text-accent-11">•</span> tailwind
            </code>
          </li>
          <li className="border-accent-5 flex items-end justify-between border-b py-2">
            <span className="text-4 text-accent-13 font-sans leading-none">
              Sans
            </span>
            <span className="text-1 text-accent-12 font-mono">
              w-ff-sans <span className="text-accent-11">•</span> font-sans
            </span>
          </li>
          <li className="border-accent-5 flex items-end justify-between border-b py-2">
            <span className="text-4 text-accent-13 font-serif leading-none">
              Serif
            </span>
            <span className="text-1 text-accent-12 font-mono">
              w-ff-serif <span className="text-accent-11">•</span> font-serif
            </span>
          </li>
          <li className="border-accent-5 flex items-end justify-between border-b py-2">
            <span className="text-4 text-accent-13 font-mono leading-none">
              Mono
            </span>
            <span className="text-1 text-accent-12 font-mono">
              w-ff-mono <span className="text-accent-11">•</span> font-mono
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
