import type { Metadata } from "next";

const baseUrl = "https://www.lelionautopart.com";
const locales = ["en", "es", "ru", "fr", "de", "zh"] as const;

export function hreflangUrls(path: string): Record<string, string> {
  const result: Record<string, string> = {};
  for (const locale of locales) {
    result[locale] = `${baseUrl}/${locale}${path}`;
  }
  return result;
}

export function alternatesWithHreflang(path: string, canonicalPath?: string): Metadata["alternates"] {
  return {
    canonical: canonicalPath ? `${baseUrl}${canonicalPath}` : `${baseUrl}${path}`,
    languages: hreflangUrls(path),
  };
}