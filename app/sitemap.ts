import { MetadataRoute } from "next";
import { allProducts } from "./data/products";
import { blogPosts } from "./data/blog";

const locales = ["en", "es", "ru", "fr", "de", "zh"];
const baseUrl = "https://www.lelionautopart.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    const prefix = "/" + locale;

    // Static routes
    entries.push(
      { url: baseUrl + prefix, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1.0 },
      { url: baseUrl + prefix + "/products", lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
      { url: baseUrl + prefix + "/about", lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
      { url: baseUrl + prefix + "/contact", lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
      { url: baseUrl + prefix + "/blog", lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 },
    );

    // Category routes
    const categories = ["universal", "specific-fit", "multifunction", "wiper-arm", "hybrid", "rear-wiper", "rear-wiper-combo"];
    for (const cat of categories) {
      entries.push({
        url: baseUrl + prefix + "/products/category/" + cat,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.7,
      });
    }

    // Product routes
    for (const product of allProducts) {
      entries.push({
        url: baseUrl + prefix + "/products/" + product.id,
        lastModified: new Date(),
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