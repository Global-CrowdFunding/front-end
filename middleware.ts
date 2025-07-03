import type { NextRequest } from "next/server";

import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  console.log("Middleware hit!");
  console.log("Requested URL:", request.url);
  return NextResponse.next();
}
