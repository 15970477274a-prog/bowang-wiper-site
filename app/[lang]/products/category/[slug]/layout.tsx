import { alternatesWithHreflang } from "../../../../../lib/hreflang";
import type { Metadata } from "next";
import { translations, Locale } from "../../../../translations";

type Props = { params: Promise<{ lang: string; slug: string }> };

const locales = ["en", "es", "ru", "fr", "de", "zh"];
const categorySlugs = ["universal", "specific-fit", "multifunction", "wiper-arm", "hybrid", "rear-wiper", "rear-wiper-combo", "frame-wiper", "frameless-wiper", "colored-wiper-blade", "electric-spray-wiper", "bus-truck-wiper", "snow-wiper", "special-wiper", "wiper-parts", "rear-wiper-arm"];

export function generateStaticParams() {
  return categorySlugs.flatMap((slug) => locales.map((lang) => ({ lang, slug })));
}

export const dynamicParams = false;

const categoryKeyMap: Record<string, keyof (typeof translations)["en"]> = {
  universal: "catUniversal",
  "specific-fit": "catSpecificFit",
  multifunction: "catMultifunction",
  "wiper-arm": "catWiperArm",
  "rear-wiper": "catRearWiper",
  hybrid: "catHybrid",
  "rear-wiper-combo": "catRearWiperCombo",
  "frame-wiper": "catFrameWiper",
  "frameless-wiper": "catFramelessWiper",
  "colored-wiper-blade": "catColoredWiper",
  "electric-spray-wiper": "catElectricSpray",
  "bus-truck-wiper": "catBusTruck",
  "snow-wiper": "catSnowWiper",
  "special-wiper": "catSpecialWiper",
  "wiper-parts": "catWiperParts",
  "rear-wiper-arm": "catRearWiperArm",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const t = translations[(lang as Locale)] || translations.en;
  const catKey = categoryKeyMap[slug];
  const categoryName = catKey
    ? t[catKey]
    : slug
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");
  const title = categoryName + " " + t.wiperBladesWord + " | Lelion Autoparts";
  const description = t.categoryBannerSub;
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
