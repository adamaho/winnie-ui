import { useState } from "react";

import { createFileRoute } from "@tanstack/react-router";

import { signIn, useSession } from "~/lib/auth-client";

import { processReceipt } from "./_process-receipt";

export const Route = createFileRoute("/(receipts)/receipts")({
  component: RouteComponent,
});

function RouteComponent() {
  /**
   * Tracks the loading state
   */
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  /**
   * Get the users current session
   */
  const { isPending } = useSession();

  if (isPending) {
    return <div>Fetching Session</div>;
  }

  if (isLoading) {
    return <div>Processing Receipts</div>;
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

            if (formData.getAll("receipts").length === 0) {
              return;
            }

            try {
              setIsLoading(true);
              await processReceipt({ data: formData });
            } catch (error) {
              setIsError(true);
            } finally {
              setIsLoading(false);
            }
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
        {isError && <div>Failed to process receipts</div>}
      </div>
    </div>
  );
}
