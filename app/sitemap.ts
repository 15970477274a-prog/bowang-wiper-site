import { MetadataRoute } from "next";
import { allProducts } from "./data/products";
import { CATEGORY_SLUGS } from "./data/categories";
import { blogPosts } from "./data/blog";

const locales = ["en", "es", "ru", "fr", "de", "zh"];
const baseUrl = "https://www.lelionautopart.com";
// Real last-commit dates of the content data files (from git history).
// Products: 2026-07-27 (image migration commit); blog posts use their publish date.
const PRODUCT_LASTMOD = new Date("2026-09-10");
const categorySlugs = CATEGORY_SLUGS;

// Build a complete, reciprocal hreflang map for any locale-neutral path.
// e.g. hreflangFor("/products/bw-861") returns:
//   { en: ".../en/products/bw-861", es: ".../es/products/bw-861", ...,
//     zh: ".../zh/products/bw-861", "x-default": ".../en/products/bw-861" }
// Every URL node lists all 7 languages INCLUDING itself (self-referencing),
// which is what Google requires for sitemap-level hreflang. Previously only
// the 6 OEM/ODM entries carried alternates; now every entry does.
function hreflangFor(pathAfterLocale: string): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const l of locales) {
    languages[l] = baseUrl + "/" + l + pathAfterLocale;
  }
  languages["x-default"] = baseUrl + "/en" + pathAfterLocale;
  return languages;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  const now = new Date();

  for (const locale of locales) {
    const prefix = "/" + locale;

    // Static routes
    entries.push(
      { url: baseUrl + prefix, lastModified: now, changeFrequency: "weekly" as const, priority: 1.0, alternates: { languages: hreflangFor("") } },
      { url: baseUrl + prefix + "/products", lastModified: PRODUCT_LASTMOD, changeFrequency: "weekly" as const, priority: 0.8, alternates: { languages: hreflangFor("/products") } },
      { url: baseUrl + prefix + "/about", lastModified: now, changeFrequency: "monthly" as const, priority: 0.7, alternates: { languages: hreflangFor("/about") } },
      { url: baseUrl + prefix + "/oem-odm", lastModified: now, changeFrequency: "monthly" as const, priority: 0.8, alternates: { languages: hreflangFor("/oem-odm") } },
      { url: baseUrl + prefix + "/packing", lastModified: now, changeFrequency: "monthly" as const, priority: 0.6, alternates: { languages: hreflangFor("/packing") } },
      { url: baseUrl + prefix + "/testing", lastModified: now, changeFrequency: "monthly" as const, priority: 0.7, alternates: { languages: hreflangFor("/testing") } },
      { url: baseUrl + prefix + "/contact", lastModified: now, changeFrequency: "monthly" as const, priority: 0.7, alternates: { languages: hreflangFor("/contact") } },
      { url: baseUrl + prefix + "/privacy", lastModified: now, changeFrequency: "yearly" as const, priority: 0.3, alternates: { languages: hreflangFor("/privacy") } },
      { url: baseUrl + prefix + "/blog", lastModified: now, changeFrequency: "weekly" as const, priority: 0.7, alternates: { languages: hreflangFor("/blog") } },
    );

    // Category routes
    for (const cat of categorySlugs) {
      entries.push({
        url: baseUrl + prefix + "/products/category/" + cat,
        lastModified: PRODUCT_LASTMOD,
        changeFrequency: "weekly" as const,
        priority: 0.7,
        alternates: { languages: hreflangFor("/products/category/" + cat) },
      });
    }

    // Product routes
    for (const product of allProducts) {
      entries.push({
        url: baseUrl + prefix + "/products/" + product.id,
        lastModified: PRODUCT_LASTMOD,
        changeFrequency: "weekly" as const,
        priority: 0.8,
        alternates: { languages: hreflangFor("/products/" + product.id) },
      });
    }

    // Blog routes
    for (const post of blogPosts) {
      entries.push({
        url: baseUrl + prefix + "/blog/" + post.id,
        lastModified: new Date(post.date),
        changeFrequency: "monthly" as const,
        priority: 0.8,
        alternates: { languages: hreflangFor("/blog/" + post.id) },
      });
    }
  }

  return entries;
}
