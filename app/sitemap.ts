import { MetadataRoute } from "next";
import { allProducts } from "./data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.lelionautopart.com";

  // 1. Define static routes
  const staticRoutes = [
    "",
    "/products",
    "/about",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // 2. Define dynamic product routes
  const productRoutes = allProducts.map((product) => ({
    url: `${baseUrl}/products/${product.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...productRoutes];
}
