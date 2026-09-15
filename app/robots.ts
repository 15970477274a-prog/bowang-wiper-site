import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      { userAgent: ["GPTBot", "OAI-SearchBot", "ClaudeBot", "PerplexityBot", "Google-Extended"], allow: "/", disallow: ["/api/"] },
    ],
    sitemap: "https://www.lelionautopart.com/sitemap.xml",
  };
}
