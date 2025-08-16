import {
  type ChangeEvent,
  type FormEvent,
  useCallback,
  useRef,
  useState,
} from "react";

import { Loader, ReceiptBill } from "@winnie-ui/icons/react/solid";

import { createFileRoute } from "@tanstack/react-router";

import { processReceipts } from "~/server-functions/process-receipts";

export const Route = createFileRoute("/lifeos/receipts")({
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
   * Get a reference to the form
   */
  const formRef = useRef<HTMLFormElement>(null);

  /**
   * Handles the input change event and sets the files in state
   */
  const handleFormChange = useCallback((e: ChangeEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);
    setReceipts(formData.getAll("receipts") as File[]);
  }, []);

  /**
   * Handles the form submission
   */
  const handleFormSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);

      if (formData.getAll("receipts").length === 0) {
        return;
      }

      try {
        setIsLoading(true);
        setIsError(false);
        await processReceipts({ data: formData });
        formRef.current!.reset();
        setReceipts([]);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    },
    [],
  );

  return (
    <>
      <ReceiptBill className="h-8 w-8" />
      <h1 className="text-5 text-accent-13 mt-3">Receipts</h1>
      <p
        className="text-3 text-accent-12 mt-2 text-center leading-3"
        data-greyscale="true"
      >
        Take a picture of your receipts, upload them and see the magic happen in
        a google sheet.
      </p>
      <form
        encType="multipart/form-data"
        className="mt-9 flex w-full flex-col"
        ref={formRef}
        onChange={handleFormChange}
        onSubmit={handleFormSubmit}
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
        <ul className="mt-4">
          {receipts.map((receipt) => {
            return (
              <li className="" key={receipt.name}>
                {receipt.name}
              </li>
            );
          })}
        </ul>
        <div className="mt-4 flex items-center justify-end">
          <button
            data-component="button"
            data-size="lg"
            data-width="full"
            className="bg-accent-9 hover:not-[:disabled]:bg-accent-10 disabled:bg-accent-7 group"
            data-greyscale={receipts.length === 0}
            disabled={receipts.length === 0}
          >
            {isLoading && (
              <div data-slot="pending" className="flex w-full justify-center">
                <Loader className="animate-[spin_2s_linear_infinite]" />
              </div>
            )}
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
    </>
  );
}
