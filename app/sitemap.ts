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

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // NOTE: `lastModified` is intentionally omitted for pages whose content has no
  // real modification date. These entries previously used `new Date()` (build
  // time), which stamped every deploy date onto the homepage, about, testing,
  // contact and blog index for all six locales — that tells crawlers the pages
  // changed on every deploy and quickly devalues the signal. Omit the field
  // rather than publish a date we cannot stand behind.
  for (const locale of locales) {
    const prefix = "/" + locale;

    // Static routes
    entries.push(
      { url: baseUrl + prefix, changeFrequency: "weekly" as const, priority: 1.0 },
      { url: baseUrl + prefix + "/products", lastModified: PRODUCT_LASTMOD, changeFrequency: "weekly" as const, priority: 0.8 },
      { url: baseUrl + prefix + "/about", changeFrequency: "monthly" as const, priority: 0.7 },
      { url: baseUrl + prefix + "/testing", changeFrequency: "monthly" as const, priority: 0.7 },
      { url: baseUrl + prefix + "/contact", changeFrequency: "monthly" as const, priority: 0.7 },
      { url: baseUrl + prefix + "/blog", changeFrequency: "weekly" as const, priority: 0.7 },
    );

    // Category routes
    for (const cat of categorySlugs) {
      entries.push({
        url: baseUrl + prefix + "/products/category/" + cat,
        lastModified: PRODUCT_LASTMOD,
        changeFrequency: "weekly" as const,
        priority: 0.7,
      });
    }

    // Product routes
    for (const product of allProducts) {
      entries.push({
        url: baseUrl + prefix + "/products/" + product.id,
        lastModified: PRODUCT_LASTMOD,
        changeFrequency: "weekly" as const,
        priority: 0.8,
      });
    }

    // Blog routes
    for (const post of blogPosts) {
      entries.push({
        url: baseUrl + prefix + "/blog/" + post.id,
        lastModified: new Date(post.date),
        changeFrequency: "monthly" as const,
        priority: 0.8,
      });
    }
  }

  return entries;
}
