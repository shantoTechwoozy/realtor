import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)", // match all routes except those with dots or _next
    "/", 
    "/(api|trpc)(.*)", // match API routes
    "/logauth(.*)", // ensure this route is included
  ],
};
