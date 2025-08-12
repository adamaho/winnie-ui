import { ChangeEvent, useCallback, useState } from "react";

import { Google, ReceiptBill } from "@winnie-ui/icons/react/solid";

import { createFileRoute } from "@tanstack/react-router";

import { signIn, signOut, useSession } from "~/lib/auth-client";
import { processReceipts } from "~/server-functions/process-receipts";

export const Route = createFileRoute("/(receipts)/receipts")({
  component: RouteComponent,
});

function RouteComponent() {
  /**
   * Tracks the loading state
   */
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Tracks the error state
   */
  const [isError, setIsError] = useState(false);

  /**
   * Tracks the selected receipts
   */
  const [receipts, setReceipts] = useState<File[]>([]);

  /**
   * Get the users current session
   */
  const { data } = useSession();

  /**
   * Handles the input change event and sets the files in state
   */
  const handleFormChange = useCallback((e: ChangeEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);
    setReceipts(formData.getAll("receipts") as File[]);
  }, []);

  return (
    <div className="bg-accent-1 grid h-screen grid-rows-[60px_1fr]">
      <header className="flex items-center justify-between px-4">
        <span className="flex items-center gap-1">
          <span className="text-2 text-accent-13">Goho</span>
          <span className="text-2 text-accent-11" data-greyscale="true">
            /
          </span>
          <span className="text-2 text-accent-12" data-greyscale="true">
            Receipts
          </span>
        </span>
        {data?.session ? (
          <button
            data-component="button"
            data-greyscale="true"
            className="bg-accent-4 hover:bg-accent-5"
            onClick={async () => {
              await signOut();
            }}
          >
            <span data-slot="label">Logout</span>
          </button>
        ) : (
          <button
            data-component="button"
            data-greyscale="true"
            className="bg-accent-4 hover:bg-accent-5"
            onClick={async () => {
              await signIn.social({
                provider: "google",
              });
            }}
          >
            <Google data-slot="icon" />
            <span data-slot="label">Login with Google</span>
          </button>
        )}
      </header>
      <main className="mx-auto mt-9 flex w-full max-w-[50ch] flex-col items-center p-4">
        <ReceiptBill className="h-8 w-8" />
        <h1 className="text-5 text-accent-13 mt-3">Receipts</h1>
        <p
          className="text-3 text-accent-12 mt-2 text-center leading-3"
          data-greyscale="true"
        >
          Take a picture of your receipts, upload them and see the magic happen
          in a google sheet.
        </p>
        <form
          encType="multipart/form-data"
          className="mt-9 flex w-full flex-col"
          onChange={handleFormChange}
          onSubmit={async (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);

            if (formData.getAll("receipts").length === 0) {
              return;
            }

            try {
              setIsLoading(true);
              setIsError(false);
              await processReceipts({ data: formData });
              event.currentTarget.reset();
            } catch (error) {
              console.log("ererrorr", error);
              setIsError(true);
            } finally {
              setIsLoading(false);
            }
          }}
        >
          <label
            htmlFor="receipts"
            className="bg-accent-2 rounded-3 border-accent-6 hover:border-accent-7 flex items-center justify-center border border-dashed p-5"
          >
            <span className="text-2 text-accent-12">
              Select receipts to upload...
            </span>
          </label>
          <input
            type="file"
            id="receipts"
            name="receipts"
            accept="image/*,application/pdf"
            className="hidden"
            tabIndex={-1}
            multiple
          />
          <ul>
            {receipts.map((receipt) => {
              return <li key={receipt.name}>{receipt.name}</li>;
            })}
          </ul>
          <div className="mt-4 flex items-center justify-end">
            <button
              data-component="button"
              data-size="lg"
              data-width="full"
              className="bg-accent-9 hover:not-[:disabled]:bg-accent-10 group"
              data-greyscale={receipts.length === 0}
              disabled={receipts.length === 0}
            >
              {isLoading && <span data-slot="pending">Loading</span>}
              <span
                data-slot="label"
                className="group-disabled:text-accent-12 font-medium"
              >
                Upload receipts
              </span>
            </button>
          </div>
          {isError && <div>Failed to process receipts</div>}
        </form>
      </main>
    </div>
  );
}
