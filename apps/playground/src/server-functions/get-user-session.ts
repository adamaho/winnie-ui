import { createServerFn } from "@tanstack/react-start";
import { getWebRequest } from "@tanstack/react-start/server";
import { auth } from "~/lib/auth";

/**
 * Retrieves the current authenticated user session from the server.
 *
 * @returns {Promise<{email: string} | null>} User session data containing email if authenticated, null if no session exists
 */
export const getSession = createServerFn({ method: "GET" }).handler(
  async () => {
    const request = getWebRequest();
    const session = await auth.api.getSession({ headers: request.headers });

    if (!session?.session.id) {
      return null;
    }

    return {
      email: session.user.email,
    };
  },
);
