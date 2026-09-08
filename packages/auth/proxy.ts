import { clerkMiddleware } from "@clerk/nextjs/server";

export const authMiddleware: typeof clerkMiddleware = (...args) => {
  if (!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) {
    const handler = typeof args[0] === "function" ? args[0] : undefined;

    return (async (request, event) => {
      if (!handler) {
        return;
      }

      return handler((() => undefined) as never, request, event);
    }) as ReturnType<typeof clerkMiddleware>;
  }

  return clerkMiddleware(...args);
};
