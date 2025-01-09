import { type ComponentRef, type ForwardedRef } from "react";
import { type IconProps, getIconProps } from "../../../utils/get-icon-props";

import clsx from "clsx";

type StoreProps = IconProps & {
  /**
   * Ref to button element
   */
  ref?: ForwardedRef<ComponentRef<"svg">>;
};

/**
 * # Outlined - Store
 *
 *
 * ```tsx
 * <Store />
 * ```
 *
 * See {@link https://winnie-ui.com/react/docs/components/icons Documentation} for examples.
 */
function Store({
  className,
  color = undefined,
  contrast = "high",
  size = "3",
  ...props
}: StoreProps) {
  return (
    <svg
      {...props}
      {...getIconProps({ color, contrast, size })}
      className={clsx("wui-icon wui-icon-outlined wui-icon__store", className)}
      data-component="icon"
      width="24"
      height="24"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.2503 11.4087V19.25C20.2503 19.8023 19.8025 20.25 19.2503 20.25H4.75026C4.19798 20.25 3.75026 19.8023 3.75026 19.25V11.4087M9.50026 3.75H14.5003M9.50026 3.75L8.90923 8.77398C8.69156 10.6243 10.1373 12.25 12.0003 12.25C13.8633 12.25 15.309 10.6243 15.0914 8.77397L14.5003 3.75M9.50026 3.75H5.15126C4.71429 3.75 4.32792 4.03372 4.19711 4.45066L2.97261 8.35377C2.36663 10.2853 3.80934 12.25 5.83373 12.25C7.3543 12.25 8.63416 11.1119 8.81182 9.60174L9.50026 3.75ZM14.5003 3.75H18.8493C19.2862 3.75 19.6726 4.03372 19.8034 4.45066L21.0279 8.35377C21.6339 10.2853 20.1912 12.25 18.1668 12.25C16.6462 12.25 15.3664 11.1119 15.1887 9.60174L14.5003 3.75Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export { Store };
export type { StoreProps };
