import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/lifeos/")({
  beforeLoad: async () => {
    return redirect({ to: "/lifeos/receipts" });
  },
});
