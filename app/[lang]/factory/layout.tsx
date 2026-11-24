// Server-side metadata for the factory evidence page.
// Auto-generated 2026-11 to give this page an independent title/description/
// canonical/hreflang. The page component stays a client component; this
// layout supplies the metadata that client components cannot export.
import type { Metadata } from "next";

const SEO: Record<string, { title: string; desc: string }> = {
  "en": { title: "Factory | 20,000㎡, 50,000 Wipers/Day | Lelion", desc: "Lelion runs two wiper blade plants totaling 20,000+㎡ in Ningbo and Pingxiang, an 8,000㎡ port warehouse, 50,000 pcs/day and 10M+ a year. Book an audit." },
  "es": { title: "Fábrica | 20.000㎡, 50.000 limpiadores/día | Lelion", desc: "Lelion opera dos plantas de limpiaparabrisas de más de 20.000㎡ en Ningbo y Pingxiang, un almacén portuario de 8.000㎡ y 50.000 unidades diarias." },
  "ru": { title: "Завод | 20 000㎡, 50 000 щёток/день | Lelion", desc: "Lelion управляет двумя заводами по производству щёток стеклоочистителя общей площадью более 20 000㎡ в Нинбо и Пинсяне, а также складом 8 000㎡ в порту." },
  "fr": { title: "Usine | 20 000㎡, 50 000 essuie-glaces/jour | Lelion", desc: "Lelion exploite deux usines d'essuie-glaces totalisant plus de 20 000㎡ à Ningbo et Pingxiang, un entrepôt portuaire de 8 000㎡ et 50 000 pièces par jour." },
  "de": { title: "Fabrik | 20.000㎡, 50.000 Wischer/Tag | Lelion", desc: "Lelion betreibt zwei Wischblattwerke mit über 20.000㎡ in Ningbo und Pingxiang, ein 8.000㎡ Hafenlager und fertigt 50.000 Stück pro Tag." },
  "zh": { title: "工厂实力 | 20,000㎡，日产 50,000 支 | Lelion", desc: "Lelion 拥有宁波与萍乡两座雨刮器工厂，合计 20,000+㎡，另设 8,000㎡ 港口仓库，日产 50,000 支、年产 1,000 万支以上，欢迎预约验厂。" },
};

const LOCALES = ["en", "es", "ru", "fr", "de", "zh"];
const OG_IMG = "https://sc02.alicdn.com/kf/H2533c3c14bc74cd3afe116f60a8357f4U.jpg";

export async function generateMetadata(
  { params }: { params: Promise<{ lang: string }> }
): Promise<Metadata> {
  const { lang } = await params;
  const s = SEO[lang] ?? SEO.en;
  const url = `https://www.lelionautopart.com/${lang}/factory`;
  const languages: Record<string, string> = {};
  for (const l of LOCALES) languages[l] = `https://www.lelionautopart.com/${l}/factory`;
  languages["x-default"] = `https://www.lelionautopart.com/en/factory`;
  return {
    metadataBase: new URL("https://www.lelionautopart.com"),
    title: s.title,
    description: s.desc,
    alternates: { canonical: url, languages },
    openGraph: {
      type: "website",
      siteName: "Lelion Autoparts",
      title: s.title,
      description: s.desc,
      url,
      images: [{ url: OG_IMG, width: 800, height: 600, alt: "Lelion Wiper Blades" }],
      locale: lang === "en" ? "en_US" : lang,
    },
    twitter: {
      card: "summary_large_image",
      title: s.title,
      description: s.desc,
      images: [OG_IMG],
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
