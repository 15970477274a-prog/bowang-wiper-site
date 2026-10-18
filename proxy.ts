import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "es", "ru", "fr", "de", "zh"];
const defaultLocale = "en";

function getLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get("accept-language") || "";
  for (const lang of acceptLanguage.split(",")) {
    const code = lang.split(";")[0].trim().substring(0, 2).toLowerCase();
    if (locales.includes(code)) return code;
  }
  return defaultLocale;
}

/** Collapse trailing slashes; the canonical form has none (`/en`, not `/en/`). */
function stripTrailingSlash(pathname: string): string {
  return pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
}

export default function proxy(request: NextRequest) {
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

  // Skip file extensions even with locale prefix (e.g., /zh/Catalog.pdf)
  if (pathname.match(/\.(jpg|png|svg|ico|pdf|xml|txt|js|css|woff2?|ttf|eot)$/)) {
    return NextResponse.next();
  }

  const normalized = stripTrailingSlash(pathname);

  // Check if path already has a locale prefix
  const pathnameHasLocale = locales.some(
    (locale) => normalized === `/${locale}` || normalized.startsWith(`/${locale}/`)
  );

  if (pathnameHasLocale) {
    // Canonical form carries no trailing slash. Measured behaviour: Next.js
    // normalises a trailing slash (`/en/` -> `/en`) with a 308 BEFORE middleware
    // runs, so this branch normally does not fire. It is kept as a guard so a
    // slash-suffixed variant can never be served as-is if that changes, and so
    // the locale redirect below always builds a slash-free destination.
    if (normalized !== pathname) {
      const cleanUrl = new URL(normalized, request.url);
      cleanUrl.search = request.nextUrl.search;
      return NextResponse.redirect(cleanUrl, 301);
    }
    return NextResponse.next();
  }

  // Redirect to the default locale (permanent — collapses link equity and
  // prevents duplicate-content pairs for legacy non-prefixed URLs).
  // `normalized` keeps the destination free of a trailing slash so the locale
  // redirect lands directly on the canonical URL in a single hop.
  const locale = getLocale(request);
  const newUrl = new URL(`/${locale}${normalized === "/" ? "" : normalized}`, request.url);
  newUrl.search = request.nextUrl.search;
  return NextResponse.redirect(newUrl, 301);
}

export const config = {
  matcher: ["/((?!_next|api|public|packaging|.*\\..*).*)"],
};
