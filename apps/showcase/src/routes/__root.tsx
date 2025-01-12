import { Suspense, lazy } from "react";

import { Outlet, createRootRoute } from "@tanstack/react-router";

import { AppLayout } from "~/layouts/app-layout/app-layout";

const TanStackRouterDevtools = import.meta.env.PROD
  ? () => null // Render nothing in production
  : lazy(() =>
      import("@tanstack/router-devtools").then((res) => ({
        default: res.TanStackRouterDevtools,
      })),
    );

export const Route = createRootRoute({
  component: () => (
    <>
      <AppLayout>
        <Outlet />
      </AppLayout>
      <Suspense>
        <TanStackRouterDevtools />
      </Suspense>
    </>
  ),
});
