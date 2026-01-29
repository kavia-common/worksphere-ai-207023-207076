import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { AUTH_COOKIE_NAME, isAuthenticatedCookieValue } from "@/lib/auth";

// PUBLIC_INTERFACE
export function middleware(request: NextRequest) {
  /** Route protection middleware for dashboard routes. Redirects to /login when unauthenticated. */
  const { pathname } = request.nextUrl;

  // Only protect dashboard routes (and their subpaths).
  if (!pathname.startsWith("/dashboard")) {
    return NextResponse.next();
  }

  const cookieValue = request.cookies.get(AUTH_COOKIE_NAME)?.value;

  if (!isAuthenticatedCookieValue(cookieValue)) {
    const loginUrl = request.nextUrl.clone();
    loginUrl.pathname = "/login";
    // Keep it minimal: no "next" param for now; can add later.
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"]
};
