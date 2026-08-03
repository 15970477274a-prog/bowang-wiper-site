import { alternatesWithHreflang } from "../../../lib/hreflang";
import type { Metadata } from "next";
import { translations, Locale } from "../../translations";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const t = translations[(lang as Locale)] || translations.en;
  const title = t.contactPageTitle + " | Bowang Autoparts";
  const description = t.contactPageDesc;
  const canonicalPath = "/" + lang + "/contact";

  return {
    metadataBase: new URL("https://www.lelionautopart.com"),
    title,
    description,
    keywords: "contact Bowang Autoparts, wiper blade quote, OEM wiper inquiry, wiper blade samples, China wiper factory contact, B2B wiper blades",
    alternates: alternatesWithHreflang("/contact", canonicalPath),
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

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
