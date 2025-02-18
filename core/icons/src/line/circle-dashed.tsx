/*
 * Iconists Central Icon System.
 * Distribution of this file is not permitted.
 *
 * For more information, see:
 * https://iconists.co/license
 */
import { createIcon } from "../utilities/create-icon";

export const CircleDashed = createIcon({
  name: "circle-dashed",
  type: "line",
  paths: [
    "M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z",
  ],
  pathProps: {
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinejoin: "round",
    strokeLinecap: "round",
    strokeDasharray: "3 4",
  },
});
