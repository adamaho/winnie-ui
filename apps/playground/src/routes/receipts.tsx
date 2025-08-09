import { createFileRoute } from "@tanstack/react-router";

import { signIn, useSession } from "~/lib/auth-client";

export const Route = createFileRoute("/receipts")({
  component: RouteComponent,
});

function RouteComponent() {
  /**
   * Get the users current session
   */
  const { data: session, isPending } = useSession();

  if (isPending) {
    return <div>Fetching Session</div>;
  }

  return (
    <div>
      {!session?.user && (
        <button
          onClick={async () => {
            await signIn.social({
              provider: "google",
              scopes: [
                "https://www.googleapis.com/auth/spreadsheets",
                "openid",
                "email",
                "profile",
              ],
            });
          }}
        >
          Login to Google
        </button>
      )}
      <div>
        <h1>Receipts</h1>
      </div>
    </div>
  );
}
