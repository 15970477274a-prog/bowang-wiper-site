import { alternatesWithHreflang } from "../../../../../lib/hreflang";
import type { Metadata } from "next";

type Props = { params: Promise<{ lang: string; slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const categoryName = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  const title = categoryName + " Wiper Blades | Bowang Autoparts";
  const description = "Factory-direct wholesale " + categoryName.toLowerCase() + " wiper blades. ISO 9001 & IATF 16949 certified OEM/ODM manufacturer. Global shipping, competitive bulk pricing.";
  const canonicalPath = "/" + lang + "/products/category/" + slug;

  return {
    metadataBase: new URL("https://www.lelionautopart.com"),
    title,
    description,
    alternates: alternatesWithHreflang("/products/category/" + slug, canonicalPath),
    openGraph: { title, description, url: "https://www.lelionautopart.com" + canonicalPath, type: "website" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default function CategoryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
