import {
  LinkButton,
  LinkButtonIcon,
  LinkButtonLabel,
} from "@winnie-ui/react/link-button";

import { SquareArrowTopRight } from "@winnie-ui/icons/line/square-arrow-top-right";

import { HomeDoor } from "@winnie-ui/icons/solid/home-door";

import { Checkmark } from "@winnie-ui/icons/line/checkmark";

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
