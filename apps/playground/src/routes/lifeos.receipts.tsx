import { useRef, useState } from "react";

import { CrossLarge } from "@winnie-ui/icons/react/line";
import { Loader, ReceiptBill } from "@winnie-ui/icons/react/solid";

import { useForm } from "@tanstack/react-form";
import { createFileRoute } from "@tanstack/react-router";
import * as z from "zod";

import { processReceipts } from "~/server-functions/google/process-receipts";

/* -------------------------------------------------------------------------------------------------
 * ReceiptsFormSchema
 * -----------------------------------------------------------------------------------------------*/
const ReceiptsFormSchema = z.object({
  receipts: z.array(z.file()),
});

/* -------------------------------------------------------------------------------------------------
 * Route
 * -----------------------------------------------------------------------------------------------*/
export const Route = createFileRoute("/lifeos/receipts")({
  component: RouteComponent,
});

/* -------------------------------------------------------------------------------------------------
 * RouteComponent
 * -----------------------------------------------------------------------------------------------*/
function RouteComponent() {
  /**
   * Init a ref to the form
   */
  const formRef = useRef<HTMLFormElement>(null);

  /**
   * Init the form
   */
  const form = useForm({
    defaultValues: { receipts: [] as File[] },
    validators: {
      onSubmit: ReceiptsFormSchema,
    },
    onSubmit: async ({ value }) => {
      const data = new FormData();

      for (const receipt of value.receipts) {
        data.append("receipts", receipt);
      }

      try {
        setIsError(false);
        await processReceipts({ data });
        form.reset();
        formRef.current?.reset();
      } catch (error) {
        setIsError(true);
      }
    },
  });

  /**
   * Tracks the error state
   */
  const [isError, setIsError] = useState(false);

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
        ref={formRef}
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit(e);
        }}
        className="mt-9 flex w-full flex-col"
      >
        <form.Field
          name="receipts"
          children={(field) => {
            return (
              <>
                <label
                  htmlFor={field.name}
                  className="bg-accent-g2 rounded-3 border-accent-g6 hover:border-accent-g7 group flex items-center justify-center border border-dashed p-5"
                >
                  <span className="text-2 text-accent-g12 group-hover:text-accent-g13">
                    Select receipts to upload...
                  </span>
                </label>
                <input
                  type="file"
                  id={field.name}
                  name={field.name}
                  onBlur={field.handleBlur}
                  value=""
                  onChange={(e) => {
                    const fileList = e.target.files;
                    if (fileList == null || fileList.length === 0) return;
                    field.handleChange(Array.from(fileList));
                  }}
                  accept="image/*"
                  capture="environment"
                  className="hidden"
                  tabIndex={-1}
                  multiple
                />
              </>
            );
          }}
        />
        <form.Subscribe
          selector={(state) => ({
            receipts: state.values.receipts,
            isSubmitting: state.isSubmitting,
          })}
          children={({ receipts, isSubmitting }) => {
            return (
              <>
                <ul className="mt-2 flex flex-col gap-2">
                  {form.state.values.receipts.map((receipt, i) => {
                    return (
                      <li
                        className="bg-accent-g3 rounded-2 flex items-center justify-between px-2 py-3"
                        key={receipt.name}
                      >
                        <span className="text-2 text-accent-g13">
                          {receipt.name}
                        </span>
                        <button
                          type="button"
                          data-component="button"
                          data-size="sm"
                          onClick={() => form.removeFieldValue("receipts", i)}
                          className="hover:bg-accent-g4"
                        >
                          <CrossLarge data-slot="icon" />
                        </button>
                      </li>
                    );
                  })}
                </ul>
                <div className="mt-4 flex items-center justify-end">
                  <button
                    data-component="button"
                    data-size="lg"
                    data-width="full"
                    className="bg-accent-9 hover:not-disabled:bg-accent-10 disabled:bg-accent-5 group"
                    data-greyscale={receipts.length === 0}
                    disabled={receipts.length === 0}
                  >
                    {isSubmitting && (
                      <div
                        data-slot="pending"
                        className="flex w-full justify-center"
                      >
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
                        className="bg-accent-8/70 group-disabled:bg-accent-4 group-disabled:text-accent-11 rounded-1 font-sans"
                      >
                        ⌘
                      </kbd>
                      <kbd
                        data-component="kbd"
                        className="bg-accent-8/70 group-disabled:bg-accent-4 group-disabled:text-accent-11 rounded-1 font-sans"
                      >
                        Enter
                      </kbd>
                    </kbd>
                  </button>
                </div>
              </>
            );
          }}
        />
        {isError && <div>Failed to process receipts</div>}
      </form>
    </>
  );
}
