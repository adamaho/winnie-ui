import { type ComponentRef, type ForwardedRef } from "react";
import { type IconProps, getIconProps } from "../../../utils/get-icon-props";

import clsx from "clsx";

type CocktailProps = IconProps & {
  /**
   * Ref to button element
   */
  ref?: ForwardedRef<ComponentRef<"svg">>;
};

/**
 * # Outlined - Cocktail
 *
 *
 * ```tsx
 * <Cocktail />
 * ```
 *
 * See {@link https://winnie-ui.com/react/docs/components/icons Documentation} for examples.
 */
function Cocktail({
  className,
  color = undefined,
  contrast = "high",
  size = "3",
  ...props
}: CocktailProps) {
  return (
    <svg
      {...props}
      {...getIconProps({ color, contrast, size })}
      className={clsx(
        "wui-icon wui-icon-outlined wui-icon__cocktail",
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
        d="M12.0006 13.0147V21.25M12.0006 13.0147L3.09608 5.51486C2.3827 4.91402 2.80758 3.75 3.74028 3.75H20.261C21.1937 3.75 21.6186 4.91402 20.9052 5.51486L12.0006 13.0147ZM12.0006 21.25H7.75061M12.0006 21.25H16.2506"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export { Cocktail };
export type { CocktailProps };
