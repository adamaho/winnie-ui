/*
 * Iconists Central Icon System.
 * Distribution of this file is not permitted.
 *
 * For more information, see:
 * https://iconists.co/license
 */
import { createIcon } from "../utilities/create-icon";

export const SquarePlaceholderDashed = createIcon({
  name: "square-placeholder-dashed",
  type: "line",
  paths: [
    "M5.7 3.75V3.75C4.62304 3.75 3.75 4.62305 3.75 5.7V5.75M18.25 3.75V3.75C19.3546 3.75 20.25 4.64543 20.25 5.75V5.75M3.75 18.25V18.3C3.75 19.377 4.62304 20.25 5.7 20.25V20.25M18.25 20.25V20.25C19.3546 20.25 20.25 19.3546 20.25 18.25V18.25M10.25 3.75H13.75M20.25 10.25V13.75M13.75 20.25H10.25M3.75 13.75V10.25",
  ],
  pathProps: {
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinejoin: "round",
    strokeLinecap: "round",
  },
});
