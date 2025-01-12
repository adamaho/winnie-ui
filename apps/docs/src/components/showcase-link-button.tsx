import { LinkButton, LinkButtonIcon, LinkButtonLabel } from "@winnie-ui/react";

import { SquareArrowTopRight } from "@winnie-ui/icons/line";

export function ShowcaseLinkButton() {
  return (
    <LinkButton
      className="layout-demo-showcase-link"
      href="https://showcase.winnie-ui.com"
      target="blank"
      color="grey"
    >
      <LinkButtonIcon>
        <SquareArrowTopRight />
      </LinkButtonIcon>
      <LinkButtonLabel>View Showcase</LinkButtonLabel>
    </LinkButton>
  );
}
