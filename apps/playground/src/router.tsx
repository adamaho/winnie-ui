import { QueryClient } from "@tanstack/react-query";
import {
  LinkProps,
  createRouter as createTanStackRouter,
} from "@tanstack/react-router";
import { setupRouterSsrQueryIntegration } from "@tanstack/react-router-ssr-query";

import { routeTree } from "./routeTree.gen";

/**
 * Creates and configures a TanStack Router instance with React Query integration.
 *
 * @returns Configured router instance with query client integration
 */
export function createRouter() {
  const queryClient = new QueryClient();

  const router = createTanStackRouter({
    context: { queryClient },
    routeTree,
    defaultPreload: "intent",
    scrollRestoration: true,
    defaultNotFoundComponent: () => <div>Not Found</div>,
  });

  setupRouterSsrQueryIntegration({
    router,
    queryClient,
  });

  return router;
}

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof createRouter>;
  }
}

export type Router = ReturnType<typeof createRouter>;
export type Routes = LinkProps<Router>["to"];
