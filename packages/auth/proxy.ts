import { clerkMiddleware } from "@clerk/nextjs/server";

export const authMiddleware = ((
  ...args: Parameters<typeof clerkMiddleware>
) => {
  if (!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) {
    const handler = typeof args[0] === "function" ? args[0] : undefined;

    return async (request: any, event: any) => {
      if (!handler) {
        return;
      }

      return handler((() => undefined) as never, request, event);
    };
  }

  return clerkMiddleware(...args);
}) as typeof clerkMiddleware;
