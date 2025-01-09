import { type ComponentRef, type ForwardedRef } from "react";
import { type IconProps, getIconProps } from "../../../utils/get-icon-props";

import clsx from "clsx";

type LayoutGridProps = IconProps & {
  /**
   * Ref to button element
   */
  ref?: ForwardedRef<ComponentRef<"svg">>;
};

/**
 * # Outlined - LayoutGrid
 *
 *
 * ```tsx
 * <LayoutGrid />
 * ```
 *
 * See {@link https://winnie-ui.com/react/docs/components/icons Documentation} for examples.
 */
function LayoutGrid({
  className,
  color = undefined,
  contrast = "high",
  size = "3",
  ...props
}: LayoutGridProps) {
  return (
    <svg
      {...props}
      {...getIconProps({ color, contrast, size })}
      className={clsx(
        "wui-icon wui-icon-outlined wui-icon__layout-grid",
        className,
      )}
      data-component="icon"
      width="24"
      height="24"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.75 5.35C3.75 4.78995 3.75 4.50992 3.85899 4.29601C3.95487 4.10785 4.10785 3.95487 4.29601 3.85899C4.50992 3.75 4.78995 3.75 5.35 3.75H10.25V10.25H3.75V5.35Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.75 3.75H18.65C19.2101 3.75 19.4901 3.75 19.704 3.85899C19.8922 3.95487 20.0451 4.10785 20.141 4.29601C20.25 4.50992 20.25 4.78995 20.25 5.35V10.25H13.75V3.75Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.75 13.75H10.25V20.25H5.35C4.78995 20.25 4.50992 20.25 4.29601 20.141C4.10785 20.0451 3.95487 19.8922 3.85899 19.704C3.75 19.4901 3.75 19.2101 3.75 18.65V13.75Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.75 13.75H20.25V18.65C20.25 19.2101 20.25 19.4901 20.141 19.704C20.0451 19.8922 19.8922 20.0451 19.704 20.141C19.4901 20.25 19.2101 20.25 18.65 20.25H13.75V13.75Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export { LayoutGrid };
export type { LayoutGridProps };
