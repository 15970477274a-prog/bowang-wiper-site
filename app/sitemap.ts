import { MetadataRoute } from "next";
import { allProducts } from "./data/products";
import { blogPosts } from "./data/blog";

const locales = ["en", "es", "ru", "fr", "de", "zh"];
const baseUrl = "https://www.lelionautopart.com";
// Real last-commit dates of the content data files (from git history).
// Products: 2026-07-27 (image migration commit); blog posts use their publish date.
const PRODUCT_LASTMOD = new Date("2026-07-27");
const categorySlugs = ["universal", "specific-fit", "multifunction", "wiper-arm", "hybrid", "rear-wiper", "rear-wiper-combo"];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  const now = new Date();

  for (const locale of locales) {
    const prefix = "/" + locale;

    // Static routes
    entries.push(
      { url: baseUrl + prefix, lastModified: now, changeFrequency: "weekly" as const, priority: 1.0 },
      { url: baseUrl + prefix + "/products", lastModified: PRODUCT_LASTMOD, changeFrequency: "weekly" as const, priority: 0.8 },
      { url: baseUrl + prefix + "/about", lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
      { url: baseUrl + prefix + "/testing", lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
      { url: baseUrl + prefix + "/contact", lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
      { url: baseUrl + prefix + "/blog", lastModified: now, changeFrequency: "weekly" as const, priority: 0.7 },
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
