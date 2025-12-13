import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();
  const { pathname } = req.nextUrl;

  const isAuthPage =
    pathname === "/sign-in" ||
    pathname === "/sign-up" ||
    pathname.startsWith("/en/sign-in") ||
    pathname.startsWith("/en/sign-up") ||
    pathname.startsWith("/sk/sign-in") ||
    pathname.startsWith("/sk/sign-up");

  if (isAuthPage && userId) {
    return NextResponse.redirect(new URL("/", req.url));
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
