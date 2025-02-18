/*
 * Iconists Central Icon System.
 * Distribution of this file is not permitted.
 *
 * For more information, see:
 * https://iconists.co/license
 */
import { createIcon } from "../utilities/create-icon";

export const ShareArrowDown = createIcon({
  name: "share-arrow-down",
  type: "line",
  paths: [
    "M12 15V1.75M12 15L8.5 11.5M12 15L15.5 11.5",
    "M16.75 4.75H18.25C19.3546 4.75 20.25 5.64543 20.25 6.75V18.25C20.25 19.3546 19.3546 20.25 18.25 20.25H5.75C4.64543 20.25 3.75 19.3546 3.75 18.25V6.75C3.75 5.64543 4.64543 4.75 5.75 4.75H7.25",
  ],
  pathProps: {
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinejoin: "round",
    strokeLinecap: "round",
  },
});
