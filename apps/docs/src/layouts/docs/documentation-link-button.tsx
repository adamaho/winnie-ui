import {
  LinkButton,
  LinkButtonIcon,
  LinkButtonLabel,
} from "@winnie-ui/react/link-button";
import { SquareArrowOutUpRight } from "lucide-react";

type DocumentationLinkButtonProps = {
  link: string;
  label: string;
};

export function DocumentationLinkButton({
  link,
  label,
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
      <LinkButtonIcon>
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
      </LinkButtonIcon>
      <LinkButtonLabel>{label}</LinkButtonLabel>
      <LinkButtonIcon>
        <SquareArrowOutUpRight data-slot="icon" />
      </LinkButtonIcon>
    </LinkButton>
  );
}
