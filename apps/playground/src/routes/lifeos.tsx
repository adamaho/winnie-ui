import { createFileRoute, redirect } from "@tanstack/react-router";
import { Outlet } from "@tanstack/react-router";

import { getSession } from "~/server-functions/auth/get-user-session";
import { signOut } from "~/utils/auth-client";

/* -------------------------------------------------------------------------------------------------
 * Route
 * -----------------------------------------------------------------------------------------------*/
export const Route = createFileRoute("/lifeos")({
  beforeLoad: async ({ location }) => {
    const session = await getSession();

    if (!session) {
      throw redirect({ to: "/login", search: { returnTo: location.pathname } });
    }
  },
  component: RouteComponent,
});

/* -------------------------------------------------------------------------------------------------
 * RouteComponent
 * -----------------------------------------------------------------------------------------------*/
function RouteComponent() {
  return (
    <div className="bg-accent-1 grid h-screen grid-rows-[60px_1fr]">
      <header className="flex items-center justify-between px-4">
        <span className="flex items-center gap-1">
          <span className="text-2 text-accent-13">LifeOS</span>
          <span className="text-2 text-accent-11" data-greyscale="true">
            /
          </span>
          <span className="text-2 text-accent-12" data-greyscale="true">
            Receipts
          </span>
        </span>
        <button
          onClick={() => signOut()}
          data-component="button"
          className="hover:bg-accent-g4"
        >
          <span data-slot="label">Logout</span>
        </button>
      </header>
      <main className="mx-auto mt-9 flex w-full max-w-[50ch] flex-col items-center p-4">
        <Outlet />
      </main>
    </div>
  );
}
