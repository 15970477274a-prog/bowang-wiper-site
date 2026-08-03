import { alternatesWithHreflang } from "../../../lib/hreflang";
import type { Metadata } from "next";
import { translations, Locale } from "../../translations";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const t = translations[(lang as Locale)] || translations.en;
  const title = t.blogPageTitle + " | Bowang Autoparts";
  const description = t.blogPageSub;
  const canonicalPath = "/" + lang + "/blog";

  return {
    metadataBase: new URL("https://www.lelionautopart.com"),
    title,
    description,
    keywords: "wiper blade blog, automotive aftermarket blog, wiper blade sourcing guide, B2B auto parts, China wiper manufacturer blog",
    alternates: alternatesWithHreflang("/blog", canonicalPath),
    openGraph: {
      title,
      description,
      url: "https://www.lelionautopart.com" + canonicalPath,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
