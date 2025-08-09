import { createAuthClient } from "better-auth/react";

export const { signIn, useSession } = createAuthClient({
  baseURL: "http://localhost:3000",
});
