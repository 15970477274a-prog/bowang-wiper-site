import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "es", "ru", "fr", "de"];
const defaultLocale = "en";

function getLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get("accept-language") || "";
  for (const lang of acceptLanguage.split(",")) {
    const code = lang.split(";")[0].trim().substring(0, 2).toLowerCase();
    if (locales.includes(code)) return code;
  }
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip static files, API routes, etc.
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/public") ||
    pathname.startsWith("/packaging") ||
    pathname.match(/\.(jpg|png|svg|ico|pdf|xml|txt|js|css)$/)
  ) {
    return NextResponse.next();
  }

  // Check if path already has a locale prefix
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return NextResponse.next();

  // Redirect to default locale
  const locale = getLocale(request);
  const newUrl = new URL(`/${locale}${pathname}`, request.url);
  newUrl.search = request.nextUrl.search;
  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: ["/((?!_next|api|public|packaging|.*\\..*).*)"],
};