import {
  type ComponentPropsWithoutRef,
  type ComponentRef,
  type ForwardedRef,
} from "react";

import clsx from "clsx";

import { type BaseIconProps, getIconProps } from "./get-icon-props";

type IconType = "line" | "solid";

/* -------------------------------------------------------------------------------------------------
 * Utilities
 * -----------------------------------------------------------------------------------------------*/
type PathProps = ComponentPropsWithoutRef<"path">;
/**
 * Computes the shared path props based on the provided icon type
 *
 * @param type type of the icon
 * @returns object of shared path props
 */
function getSharedPathProps(type: IconType): PathProps {
  switch (type) {
    case "line": {
      return {};
    }
    case "solid": {
      return {
        fill: "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
      };
    }
  }
}

/* -------------------------------------------------------------------------------------------------
 * CreateIcon
 * -----------------------------------------------------------------------------------------------*/
type IconProps = BaseIconProps &
  ComponentPropsWithoutRef<"svg"> & {
    /**
     * Ref to button element
     */
    ref?: ForwardedRef<ComponentRef<"svg">>;
  };

type CreateIconArgs = {
  name: string;
  paths: string[];
  type: "line" | "solid";
  pathProps?: PathProps;
};

/**
 * Creates an icon component
 *
 * @param name name of the icon
 * @param paths array of paths for the icon
 * @param type type of icon (line or solid)
 * @param pathPrrops extra props for path element
 * @returns icon component
 */
function createIcon({ name, paths, type, pathProps }: CreateIconArgs) {
  return function Icon({
    className,
    color = undefined,
    contrast = "high",
    size = "3",
    ...props
  }: IconProps) {
    return (
      <svg
        {...props}
        {...getIconProps({ color, contrast, size })}
        className={clsx(`wui-icon wui-icon__${name} ${type}`, className)}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {paths.map((d, i) => {
          return (
            <path key={i} d={d} {...getSharedPathProps(type)} {...pathProps} />
          );
        })}
      </svg>
    );
  };
}

export { createIcon };
export type { IconProps };
