import { useControls } from "leva";

export function Controls() {
  useControls({
    "data-theme": {
      options: ["light", "dark"],
      onChange(theme) {
        const layoutRoot = document.getElementById("playground")!;
        layoutRoot.style.colorScheme = theme;
        layoutRoot.setAttribute("data-theme", theme);
      },
      value: "dark",
    },
    "data-accent-color": {
      options: [
        "salmon",
        "tomato",
        "apricot",
        "tuscon",
        "sand",
        "cocoa",
        "mustard",
        "caramel",
        "lime",
        "olive",
        "grass",
        "basil",
        "peppermint",
        "pine",
        "coast",
        "emerald",
        "cyan",
        "lagoon",
        "sky",
        "cobalt",
        "iris",
        "indigo",
        "lilac",
        "lavender",
        "orchid",
        "amethyst",
        "fuchsia",
        "plum",
        "blossom",
        "grape",
        "coral",
        "merlot",
      ],
      value: "mustard",
      onChange(color) {
        const layoutRoot = document.getElementById("playground")!;
        layoutRoot.setAttribute("data-accent-color", color);
      },
    },
    grey: {
      value: true,
      onChange(value) {
        const layoutRoot = document.getElementById("playground")!;
        layoutRoot.setAttribute("data-mono", value);
      },
    },
  });

  return null;
}
