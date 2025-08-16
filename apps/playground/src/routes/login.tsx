import { createFileRoute, useParams } from "@tanstack/react-router";
import * as z from "zod";

import { signIn } from "~/lib/auth-client";

const LoginSearchParams = z.object({
  returnTo: z.string(),
});

export const Route = createFileRoute("/login")({
  validateSearch: LoginSearchParams,
  component: RouteComponent,
});

function RouteComponent() {
  /**
   * Get search params from url
   */
  const { returnTo } = Route.useSearch();

  return (
    <div>
      <button
        onClick={() =>
          signIn.social({ provider: "google", callbackURL: returnTo })
        }
      >
        Login with Google
      </button>
    </div>
  );
}
