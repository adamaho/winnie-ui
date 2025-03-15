import { Button } from "react-aria-components";

import { MagnifyingGlass } from "@winnie-ui/icons/react/line";

import type { CollectionKey } from "astro:content";

import { SearchCommandMenu } from "~/components/search-command-menu/search-command-menu";
import { useMediaQuery } from "~/hooks/use-media-query";

type SearchProps = {
  collection: CollectionKey;
};

export const SearchDesktop = ({ collection }: SearchProps) => {
  /**
   * Computes if the current breakpoint is less than 1024px
   */
  const isMobile = useMediaQuery("(max-width: 1024px)");

  return !isMobile ? (
    <SearchCommandMenu collection={collection}>
      <Button
        data-component="input-group"
        className="dark:bg-grey-2 dark:border-grey-3"
      >
        <MagnifyingGlass data-slot="icon" />
        <span className="text-grey-10 flex items-center" data-slot="input">
          Search docs...
        </span>
        <kbd data-slot="shortcut">
          <kbd data-component="kbd">/</kbd>
        </kbd>
      </Button>
    </SearchCommandMenu>
  ) : null;
};

export const SearchMobile = ({ collection }: SearchProps) => {
  /**
   * Computes if the current breakpoint is less than 1024px
   */
  const isMobile = useMediaQuery("(max-width: 1024px)");

  return isMobile ? (
    <SearchCommandMenu collection={collection}>
      <Button
        data-component="button"
        data-accent-color="grey"
        data-size="md"
        data-variant="4"
      >
        <MagnifyingGlass data-slot="icon" />
      </Button>
    </SearchCommandMenu>
  ) : null;
};
