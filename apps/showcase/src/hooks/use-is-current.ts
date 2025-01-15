/**
 * Portions of this code are from the @tanstack/react-router package
 *
 * @see https://github.com/TanStack/router/blob/main/packages/react-router/src/link.tsx#L587
 */

import {
  deepEqual,
  ToOptions,
  useRouter,
  useRouterState,
} from "@tanstack/react-router";
import { useMemo } from "react";
import { isExactPath } from "~/utils/is-exact-path";
import { removeTrailingSlash } from "~/utils/remove-trailing-slash";

type UseIsCurrentOptions = {
  to: ToOptions["to"];
  exact?: boolean;
  explicitUndefined?: boolean;
  includeSearch?: boolean;
  includeHash?: boolean;
};

export function useIsCurrent(options: UseIsCurrentOptions) {
  /**
   * Get an instance of the router
   */
  const router = useRouter();

  /**
   * Get the current search params
   */
  const currentSearch = useRouterState({
    select: (s) => s.location.search,
    structuralSharing: true as any,
  });

  /**
   * Figure out what the next route is going to be
   */
  const next = useMemo(
    () => router.buildLocation(options as any),
    [router, options, currentSearch],
  );

  return useRouterState({
    select: (s) => {
      if (options?.exact) {
        const testExact = isExactPath(
          s.location.pathname,
          next.pathname,
          router.basepath,
        );

        if (!testExact) {
          return false;
        }
      } else {
        const currentPathSplit = removeTrailingSlash(
          s.location.pathname,
          router.basepath,
        ).split("/");
        const nextPathSplit = removeTrailingSlash(
          next.pathname,
          router.basepath,
        ).split("/");

        const pathIsFuzzyEqual = nextPathSplit.every(
          (d, i) => d === currentPathSplit[i],
        );
        if (!pathIsFuzzyEqual) {
          return false;
        }
      }

      if (options?.includeSearch ?? true) {
        const searchTest = deepEqual(s.location.search, next.search, {
          partial: !options?.exact,
          ignoreUndefined: !options?.explicitUndefined,
        });
        if (!searchTest) {
          return false;
        }
      }

      if (options?.includeHash) {
        return s.location.hash === next.hash;
      }
      return true;
    },
  });
}
