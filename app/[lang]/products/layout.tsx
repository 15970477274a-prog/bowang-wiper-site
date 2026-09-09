import { alternatesWithHreflang } from "../../../lib/hreflang";
import { truncateTitle } from "../../../lib/seo";
import type { Metadata } from "next";
import { translations, Locale } from "../../translations";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const t = translations[(lang as Locale)] || translations.en;
  // keep total title <= 60 chars (short suffix, truncate the banner text)
  const title = truncateTitle(t.productsBannerTitle, 40) + " | Lelion Autoparts";
  const description = t.productsBannerSub;
  const canonicalPath = "/" + lang + "/products";
  const ogImage = "https://sc02.alicdn.com/kf/Hb0410965e6194f008a583d7f500e1b7at.png";

  return {
    metadataBase: new URL("https://www.lelionautopart.com"),
    title,
    description,
    alternates: alternatesWithHreflang("/products", canonicalPath),
    openGraph: {
      title,
      description,
      url: "https://www.lelionautopart.com" + canonicalPath,
      images: [{ url: ogImage, width: 800, height: 600, alt: "Lelion Wiper Blade Product Range" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
