import { Brain1, Google } from "@winnie-ui/icons/react/solid";

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
    <div className="bg-accent-1 flex h-screen w-full flex-col items-center justify-center">
      <div className="flex w-full max-w-[300px] flex-col items-center">
        <Brain1 className="h-[48px] w-[48px]" />
        <h1 className="text-4 text-accent-13 leading-9 font-medium">LifeOS</h1>
        <button
          onClick={() =>
            signIn.social({
              provider: "google",
              callbackURL: returnTo ?? DEFAULT_ROUTE,
            })
          }
          data-component="button"
          data-size="lg"
          className="bg-accent-9"
          data-width="full"
        >
          <Google data-slot="icon" />
          <span data-slot="label">Continue with Google</span>
        </button>
      </div>
    </div>
  );
}
