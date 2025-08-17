import {
  type ChangeEvent,
  type FormEvent,
  useCallback,
  useRef,
  useState,
} from "react";

// import { CrossLarge } from "@winnie-ui/icons/react/line";
import { Loader, ReceiptBill } from "@winnie-ui/icons/react/solid";

import { createFileRoute } from "@tanstack/react-router";

import { processReceipts } from "~/server-functions/google/process-receipts";

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
  const handleFileInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files == null) {
        return;
      }
      setReceipts(Array.from(e.target.files) || []);
    },
    [],
  );

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
        onSubmit={handleFormSubmit}
      >
        <label
          htmlFor="receipts"
          className="bg-accent-g2 rounded-3 border-accent-g6 hover:border-accent-g7 group flex items-center justify-center border border-dashed p-5"
        >
          <span className="text-2 text-accent-g12 group-hover:text-accent-g13">
            Select receipts to upload...
          </span>
        </label>
        <input
          type="file"
          id="receipts"
          name="receipts"
          accept="image/*"
          className="hidden"
          onChange={handleFileInputChange}
          tabIndex={-1}
          multiple
        />
        <ul className="mt-4 flex flex-col gap-2">
          {receipts.map((receipt) => {
            return (
              <li
                className="bg-accent-g3 rounded-2 flex items-center justify-between px-2 py-3"
                key={receipt.name}
              >
                <span className="text-2 text-accent-g13">{receipt.name}</span>
                {/* <button data-component="button" className="hover:bg-accent-g4"> */}
                {/*   <CrossLarge data-slot="icon" /> */}
                {/* </button> */}
              </li>
            );
          })}
        </ul>
        <div className="mt-4 flex items-center justify-end">
          <button
            data-component="button"
            data-size="lg"
            data-width="full"
            className="bg-accent-9 hover:not-[:disabled]:bg-accent-10 disabled:bg-accent-5 group"
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
              className="group-disabled:text-accent-11 font-medium"
            >
              Upload receipts
            </span>
            <kbd data-slot="shortcut">
              <kbd
                data-component="kbd"
                className="bg-accent-8 group-disabled:bg-accent-4 group-disabled:text-accent-11 rounded-1 font-sans"
              >
                Enter
              </kbd>
            </kbd>
          </button>
        </div>
        {isError && <div>Failed to process receipts</div>}
      </form>
    </>
  );
}
