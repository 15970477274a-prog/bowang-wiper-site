import type { Metadata } from "next";

const baseUrl = "https://www.lelionautopart.com";
const locales = ["en", "es", "ru", "fr", "de", "zh"] as const;

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
