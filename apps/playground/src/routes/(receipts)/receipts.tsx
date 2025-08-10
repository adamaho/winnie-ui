import { createFileRoute } from "@tanstack/react-router";

import { signIn, useSession } from "~/lib/auth-client";

import { processReceipt } from "./_process-receipt";

export const Route = createFileRoute("/(receipts)/receipts")({
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
      <div>
        <h1>Receipts</h1>
        <form
          encType="multipart/form-data"
          onSubmit={async (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            console.log(formData.getAll("receipts"));
            await processReceipt({ data: formData });
          }}
        >
          <input
            type="file"
            name="receipts"
            accept="image/*,application/pdf"
            multiple
          />
          <button>Upload</button>
        </form>
      </div>
    </div>
  );
}
