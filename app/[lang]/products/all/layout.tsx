import { alternatesWithHreflang } from "../../../../lib/hreflang";
import type { Metadata } from "next";
import { translations, Locale } from "../../../translations";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const t = translations[(lang as Locale)] || translations.en;
  const title = t.fullCatalogTitle + " | Lelion Autoparts";
  const description = t.productsBannerSub;
  const canonicalPath = "/" + lang + "/products/all";

  return {
    metadataBase: new URL("https://www.lelionautopart.com"),
    title,
    description,
    alternates: alternatesWithHreflang("/products/all", canonicalPath),
    openGraph: { title, description, url: "https://www.lelionautopart.com" + canonicalPath, type: "website" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default function AllProductsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
