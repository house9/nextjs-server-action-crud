import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getLogger } from "@/lib/logger";

export function middleware(request: NextRequest) {
  const correlationId = crypto.randomUUID();
  const logger = getLogger({ correlationId, request });
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-correlation-id", correlationId);

  if (request.nextUrl.pathname === "/") {
    logger.debug("redirecting / to /home");
    return NextResponse.redirect(new URL("/home", request.url));
  }

  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico).*)",
};
