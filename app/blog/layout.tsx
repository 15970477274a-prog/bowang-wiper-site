import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lelionautopart.com"),
  title: "Wiper Blade Industry Blog | Sourcing Guides & Market Insights - Bowang Autoparts",
  description: "Expert insights on wiper blade sourcing, quality standards, industry trends, and B2B procurement. Read our guides for global automotive parts distributors and importers.",
  keywords: "wiper blade blog, automotive aftermarket blog, wiper blade sourcing guide, B2B auto parts, China wiper manufacturer blog",
  alternates: { canonical: "https://www.lelionautopart.com/blog" },
  openGraph: {
    title: "Wiper Blade Industry Blog | Bowang Autoparts",
    description: "Expert insights on wiper blade sourcing, quality standards, and industry trends for global distributors.",
    url: "https://www.lelionautopart.com/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wiper Blade Industry Blog | Bowang Autoparts",
    description: "Expert insights on wiper blade sourcing, quality standards, and industry trends.",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}