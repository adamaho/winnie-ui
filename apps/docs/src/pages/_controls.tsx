import { useControls } from "leva";

export function Controls() {
  useControls({
    "data-accent-color": {
      options: [
        "salmon",
        "tomato",
        "apricot",
        "tuscon",
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
        "orchid",
        "amethyst",
      ],
      value: "salmon",
      onChange(color) {
        const layoutRoot = document.getElementById("playground")!;
        layoutRoot.setAttribute("data-accent-color", color);
      },
    },
    grey: {
      value: false,
      onChange(value) {
        const layoutRoot = document.getElementById("playground")!;
        if (value) {
          layoutRoot.classList.add("grey");
          layoutRoot.classList.remove("color");
        } else {
          layoutRoot.classList.add("color");
          layoutRoot.classList.remove("grey");
        }
      },
    },
  });

  return null;
}
