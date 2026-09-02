import { alternatesWithHreflang } from "../../../lib/hreflang";
import type { Metadata } from "next";
import { translations, Locale } from "../../translations";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const t = translations[(lang as Locale)] || translations.en;
  const title = t.aboutPageTitle;
  const description = t.aboutPageDesc;
  const canonicalPath = "/" + lang + "/about";
  const ogImage = "https://sc02.alicdn.com/kf/H2533c3c14bc74cd3afe116f60a8357f4U.jpg";

  return {
    metadataBase: new URL("https://www.lelionautopart.com"),
    title,
    description,
    alternates: alternatesWithHreflang("/about", canonicalPath),
    openGraph: {
      title,
      description,
      url: "https://www.lelionautopart.com" + canonicalPath,
      images: [{ url: ogImage, width: 800, height: 600, alt: "Lelion Autoparts Factory" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
