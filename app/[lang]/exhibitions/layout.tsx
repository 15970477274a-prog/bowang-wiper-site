// Server-side metadata for the exhibitions evidence page.
// Auto-generated 2026-11 to give this page an independent title/description/
// canonical/hreflang. The page component stays a client component; this
// layout supplies the metadata that client components cannot export.
import type { Metadata } from "next";

const SEO: Record<string, { title: string; desc: string }> = {
  "en": { title: "Trade Shows & Factory Visits | Lelion Wipers", desc: "Lelion attends aftermarket trade shows and welcomes buyer factory visits and video inspections. Book a meeting to review samples, certificates and test data." },
  "es": { title: "Ferias y visitas a fábrica | Lelion Wipers", desc: "Lelion asiste a ferias del mercado de recambios y recibe visitas de compradores a la fábrica e inspecciones por vídeo." },
  "ru": { title: "Выставки и визиты на завод | Lelion Wipers", desc: "Lelion участвует в выставках автозапчастей и приглашает покупателей на завод или на видеоосмотр производства." },
  "fr": { title: "Salons et visites d'usine | Lelion Wipers", desc: "Lelion participe aux salons de la rechange automobile et accueille les acheteurs pour des visites d'usine ou des inspections vidéo." },
  "de": { title: "Messen & Werksbesuche | Lelion Wipers", desc: "Lelion nimmt an Messen des Kfz-Ersatzteilmarkts teil und begrüßt Käufer im Werk sowie bei Videoinspektionen." },
  "zh": { title: "展会与客户拜访 | Lelion 雨刮", desc: "Lelion 参加汽车后市场展会，欢迎买家到厂考察或视频验厂。预约会面可现场查看样品、证书与测试数据。" },
};

const LOCALES = ["en", "es", "ru", "fr", "de", "zh"];
const OG_IMG = "https://sc02.alicdn.com/kf/H2533c3c14bc74cd3afe116f60a8357f4U.jpg";

export async function generateMetadata(
  { params }: { params: Promise<{ lang: string }> }
): Promise<Metadata> {
  const { lang } = await params;
  const s = SEO[lang] ?? SEO.en;
  const url = `https://www.lelionautopart.com/${lang}/exhibitions`;
  const languages: Record<string, string> = {};
  for (const l of LOCALES) languages[l] = `https://www.lelionautopart.com/${l}/exhibitions`;
  languages["x-default"] = `https://www.lelionautopart.com/en/exhibitions`;
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
