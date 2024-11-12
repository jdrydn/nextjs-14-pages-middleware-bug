import { v4 as uuid } from "uuid";
import { type NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const requestId = uuid();

  const headers = new Headers(request.headers);
  headers.set("X-Request-ID", requestId);

  const response = NextResponse.next({ request: { headers } });
  response.headers.set("X-Request-ID", requestId);
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - /_next/static (static files)
     * - /_next/image (image optimization files)
     * - /api (API routes)
     * - /fonts (Font files)
     * - /favicon.ico (Favicon file)
     */
    {
      source: "/((?!_next/static|_next/image|api|fonts|favicon.ico).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
