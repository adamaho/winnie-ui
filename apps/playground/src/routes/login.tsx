import { createFileRoute } from "@tanstack/react-router";
import * as z from "zod";

import { DEFAULT_ROUTE } from "~/constants/default-route";
import { signIn } from "~/utils/auth-client";

/* -------------------------------------------------------------------------------------------------
 * LoginSearchParams
 * -----------------------------------------------------------------------------------------------*/
const LoginSearchParams = z.object({
  returnTo: z.string().optional(),
});

/* -------------------------------------------------------------------------------------------------
 * Route
 * -----------------------------------------------------------------------------------------------*/
export const Route = createFileRoute("/login")({
  validateSearch: LoginSearchParams,
  component: RouteComponent,
});

/* -------------------------------------------------------------------------------------------------
 * RouteComponent
 * -----------------------------------------------------------------------------------------------*/
function RouteComponent() {
  /**
   * Get search params from url
   */
  const { returnTo } = Route.useSearch();

  return (
    <div>
      <button
        onClick={() =>
          signIn.social({
            provider: "google",
            callbackURL: returnTo ?? DEFAULT_ROUTE,
          })
        }
      >
        Login with Google
      </button>
    </div>
  );
}
