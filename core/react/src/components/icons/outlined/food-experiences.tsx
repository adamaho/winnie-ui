import { type ComponentRef, type ForwardedRef } from "react";
import { type IconProps, getIconProps } from "../../../utils/get-icon-props";

import clsx from "clsx";

type FoodExperiencesProps = IconProps & {
  /**
   * Ref to button element
   */
  ref?: ForwardedRef<ComponentRef<"svg">>;
};

/**
 * # Outlined - FoodExperiences
 *
 *
 * ```tsx
 * <FoodExperiences />
 * ```
 *
 * See {@link https://winnie-ui.com/react/docs/components/icons Documentation} for examples.
 */
function FoodExperiences({
  className,
  color = undefined,
  contrast = "high",
  size = "3",
  ...props
}: FoodExperiencesProps) {
  return (
    <svg
      {...props}
      {...getIconProps({ color, contrast, size })}
      className={clsx(
        "wui-icon wui-icon-outlined wui-icon__food-experiences",
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
        d="M9.35 4.5H9.5H9.65M10.25 4.5C10.25 4.91421 9.91421 5.25 9.5 5.25C9.08579 5.25 8.75 4.91421 8.75 4.5C8.75 4.08579 9.08579 3.75 9.5 3.75C9.91421 3.75 10.25 4.08579 10.25 4.5Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 19.25C18.1875 19.25 20.25 15.8667 20.25 15.8667V15.75H3.75V15.8667C3.75 15.8667 5.8125 19.25 12 19.25Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.75 20.25H14.25"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.75 6.75L16.25 3.75L17.75 6.75L20.75 8.25L17.75 9.75L16.25 12.75L14.75 9.75L11.75 8.25L14.75 6.75Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6 7.42705L6.67131 8.76967C6.79226 9.01158 6.98842 9.20773 7.23033 9.32869L8.57295 10L7.23033 10.6713C6.98842 10.7923 6.79227 10.9884 6.67131 11.2303L7.34213 11.5657L6.67131 11.2303L6 12.5729L5.32869 11.2303C5.20773 10.9884 5.01158 10.7923 4.76967 10.6713L4.43426 11.3421L4.76967 10.6713L3.42705 10L4.76967 9.32869C5.01158 9.20773 5.20774 9.01158 5.32869 8.76967L6 7.42705ZM2.97984 10.2236L2.98024 10.2234L2.97984 10.2236Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="square"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export { FoodExperiences };
export type { FoodExperiencesProps };
