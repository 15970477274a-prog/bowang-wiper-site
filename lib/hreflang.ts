import type { Metadata } from "next";

const baseUrl = "https://www.lelionautopart.com";
const locales = ["en", "es", "ru", "fr", "de", "zh"] as const;

/**
 * Site-wide fallback Open Graph / Twitter card image.
 *
 * Pages that do not have a better per-page image (contact, blog index, category
 * listings, testing, products/all) previously emitted no og:image at all, so
 * their social shares rendered as a bare link with no preview. Each route can
 * still override this with a more specific image — this is only the default.
 */
export const DEFAULT_OG_IMAGE = "https://sc02.alicdn.com/kf/H2533c3c14bc74cd3afe116f60a8357f4U.jpg";
export const DEFAULT_OG_IMAGE_ALT = "Lelion Autoparts — wiper blade manufacturer in Ningbo, China";

/** Ready-made `openGraph.images` value for the default card image. */
export const defaultOgImages = [
  { url: DEFAULT_OG_IMAGE, width: 800, height: 600, alt: DEFAULT_OG_IMAGE_ALT },
] as const;

/**
 * BCP-47 value for the <html lang> attribute of each route segment.
 *
 * `zh` maps to `zh-Hans` because the site ships Simplified Chinese copy; the
 * route segment itself stays `zh`. The previous build hard-coded lang="en" in
 * the root layout and patched it on the client, so crawlers reading the server
 * response saw every localised page declared as English.
 */
export const HTML_LANG: Record<string, string> = {
  en: "en",
  es: "es",
  ru: "ru",
  fr: "fr",
  de: "de",
  zh: "zh-Hans",
};

export function htmlLangFor(lang: string): string {
  return HTML_LANG[lang] || "en";
}

export function hreflangUrls(path: string): Record<string, string> {
  const result: Record<string, string> = {};
  for (const locale of locales) {
    result[locale] = `${baseUrl}/${locale}${path}`;
  }
  // x-default points to English version
  result["x-default"] = `${baseUrl}/en${path}`;
  return result;
}

export function alternatesWithHreflang(path: string, canonicalPath?: string): Metadata["alternates"] {
  return {
    canonical: canonicalPath ? `${baseUrl}${canonicalPath}` : `${baseUrl}${path}`,
    languages: hreflangUrls(path),
  };
}
