import {
  type NavigateOptions,
  RouterProvider,
  type ToOptions,
  createRouter,
  useRouter,
} from "@tanstack/react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { ZeroProvider } from "@rocicorp/zero/react";
import { RouterProvider as WinnieRouterProvider } from "@winnie-ui/react";

import { routeTree } from "./routeTree.gen";
import { zero } from "./singletons/zero";

import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "./main.css";

/**
 * Create instance of Router
 */
const router = createRouter({
  routeTree,
  Wrap: function Wrap({ children }) {
    return <ZeroProvider zero={zero}>{children}</ZeroProvider>;
  },
  InnerWrap: function InnerWrap({ children }) {
    const router = useRouter();
    return (
      <WinnieRouterProvider
        navigate={(to, options) => router.navigate({ to, ...options })}
        useHref={(to) => router.buildLocation({ to }).href}
      >
        {children}
      </WinnieRouterProvider>
    );
  },
});

/**
 * Register the router instance for type safety
 */
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

/**
 * Register router instance for use with winnie react component type safety on components
 * that use links
 */
declare module "@winnie-ui/react" {
  interface RouterConfig {
    href: ToOptions["to"];
    routerOptions: Omit<NavigateOptions, keyof ToOptions>;
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
