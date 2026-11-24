// Server-side metadata for the quality evidence page.
// Auto-generated 2026-11 to give this page an independent title/description/
// canonical/hreflang. The page component stays a client component; this
// layout supplies the metadata that client components cannot export.
import type { Metadata } from "next";

const SEO: Record<string, { title: string; desc: string }> = {
  "en": { title: "Quality | 1.5M Wipe-Cycle Tested Wipers | Lelion", desc: "Lelion wipers are tested to 1,500,000 wipe cycles, plus salt spray, ozone and low-temp flexibility tests. Review our lab data and inspection evidence." },
  "es": { title: "Calidad | Limpiadores probados 1,5 M ciclos | Lelion", desc: "Los limpiadores Lelion se prueban hasta 1.500.000 ciclos de limpieza, además de niebla salina, ozono y flexibilidad a baja temperatura." },
  "ru": { title: "Качество | щётки с ресурсом 1,5 млн циклов | Lelion", desc: "Щётки Lelion проходят испытания на 1 500 000 циклов очистки, а также тесты на солевой туман, озон и гибкость при низкой температуре." },
  "fr": { title: "Qualité | essuie-glaces testés 1,5 M cycles | Lelion", desc: "Les essuie-glaces Lelion sont testés sur 1 500 000 cycles d'essuyage, ainsi qu'aux embruns salins, à l'ozone et à la souplesse basse température." },
  "de": { title: "Qualität | 1,5 Mio. Wischzyklen getestet | Lelion", desc: "Lelion-Wischblätter werden auf 1.500.000 Wischzyklen geprüft sowie auf Salznebel, Ozon und Tieftemperatur-Flexibilität getestet." },
  "zh": { title: "品质管控 | 150 万次刮刷测试 | Lelion", desc: "Lelion 雨刮片通过 1,500,000 次刮刷测试，并经盐雾、臭氧与低温柔韧性测试，实验室数据与批检证据可查。" },
};

const LOCALES = ["en", "es", "ru", "fr", "de", "zh"];
const OG_IMG = "https://sc02.alicdn.com/kf/H2533c3c14bc74cd3afe116f60a8357f4U.jpg";

export async function generateMetadata(
  { params }: { params: Promise<{ lang: string }> }
): Promise<Metadata> {
  const { lang } = await params;
  const s = SEO[lang] ?? SEO.en;
  const url = `https://www.lelionautopart.com/${lang}/quality`;
  const languages: Record<string, string> = {};
  for (const l of LOCALES) languages[l] = `https://www.lelionautopart.com/${l}/quality`;
  languages["x-default"] = `https://www.lelionautopart.com/en/quality`;
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
