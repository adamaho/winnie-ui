import type { ReactNode } from "react";

import { LinkButton, LinkButtonIcon, LinkButtonLabel } from "@winnie-ui/react";

import { Circle } from "@winnie-ui/icons/react/solid";

import type { DocType } from "~/content.config";

const iconMap = {
  "react-aria": (
    <svg
      viewBox="0 0 30 26"
      aria-label="Adobe"
      fill="currentColor"
      data-slot="icon"
    >
      <polygon points="19,0 30,0 30,26"></polygon>
      <polygon points="11.1,0 0,0 0,26"></polygon>
      <polygon points="15,9.6 22.1,26 17.5,26 15.4,20.8 10.2,20.8"></polygon>
    </svg>
  ),
  "base-ui": (
    <svg
      width="17"
      height="24"
      viewBox="0 0 17 24"
      fill="currentcolor"
      aria-label="Base UI"
    >
      <path d="M9.5001 7.01537C9.2245 6.99837 9 7.22385 9 7.49999V23C13.4183 23 17 19.4183 17 15C17 10.7497 13.6854 7.27351 9.5001 7.01537Z"></path>
      <path d="M8 9.8V12V23C3.58172 23 0 19.0601 0 14.2V12V1C4.41828 1 8 4.93989 8 9.8Z"></path>
    </svg>
  ),
  react: (
    <svg
      width="100%"
      height="100%"
      viewBox="-10.5 -9.45 21 18.9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
      <g stroke="currentColor" stroke-width="1" fill="none">
        <ellipse rx="10" ry="4.5"></ellipse>
        <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
        <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
      </g>
    </svg>
  ),
} satisfies Record<DocType, ReactNode>;

type DocumentationLinkButtonProps = {
  link: string;
  label: string;
  icon: DocType;
};

export function DocumentationLinkButton({
  link,
  label,
  icon,
}: DocumentationLinkButtonProps) {
  return (
    <LinkButton
      color="grey"
      size="sm"
      variant="soft"
      href={link}
      target="_blank"
      className="wui-docs-article-documentation"
    >
      <LinkButtonIcon>{iconMap[icon]}</LinkButtonIcon>
      <LinkButtonLabel>{label}</LinkButtonLabel>
    </LinkButton>
  );
}
