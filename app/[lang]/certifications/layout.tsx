// Server-side metadata for the certifications evidence page.
// Auto-generated 2026-11 to give this page an independent title/description/
// canonical/hreflang. The page component stays a client component; this
// layout supplies the metadata that client components cannot export.
import type { Metadata } from "next";

const SEO: Record<string, { title: string; desc: string }> = {
  "en": { title: "Certifications | ISO 9001 No.134956 & CE | Lelion", desc: "Lelion's ISO 9001:2015 No.134956 (NQA) and CE No.M.2022.206.C79712 (UDEM) certificates published with scope and verification steps. Verify before ordering." },
  "es": { title: "Certificaciones | ISO 9001 No.134956 y CE | Lelion", desc: "Lelion publica los certificados ISO 9001:2015 No.134956 (NQA) y CE No.M.2022.206.C79712 (UDEM) con su alcance y pasos de verificación." },
  "ru": { title: "Сертификаты | ISO 9001 No.134956 и CE | Lelion", desc: "Lelion публикует сертификаты ISO 9001:2015 No.134956 (NQA) и CE No.M.2022.206.C79712 (UDEM) с областью применения и шагами проверки." },
  "fr": { title: "Certifications | ISO 9001 n°134956 et CE | Lelion", desc: "Lelion publie les certificats ISO 9001:2015 n°134956 (NQA) et CE n°M.2022.206.C79712 (UDEM) avec leur portée et leurs étapes de vérification." },
  "de": { title: "Zertifizierungen | ISO 9001 Nr.134956 & CE | Lelion", desc: "Lelion veröffentlicht die Zertifikate ISO 9001:2015 Nr.134956 (NQA) und CE Nr.M.2022.206.C79712 (UDEM) mit Geltungsbereich und Prüfschritten." },
  "zh": { title: "认证资质 | ISO 9001 No.134956 与 CE | Lelion", desc: "Lelion 公开 ISO 9001:2015 No.134956 (NQA) 与 CE No.M.2022.206.C79712 (UDEM) 证书编号、认证范围与核验方式，下单前可验证。" },
};

const LOCALES = ["en", "es", "ru", "fr", "de", "zh"];
const OG_IMG = "https://sc02.alicdn.com/kf/H2533c3c14bc74cd3afe116f60a8357f4U.jpg";

export async function generateMetadata(
  { params }: { params: Promise<{ lang: string }> }
): Promise<Metadata> {
  const { lang } = await params;
  const s = SEO[lang] ?? SEO.en;
  const url = `https://www.lelionautopart.com/${lang}/certifications`;
  const languages: Record<string, string> = {};
  for (const l of LOCALES) languages[l] = `https://www.lelionautopart.com/${l}/certifications`;
  languages["x-default"] = `https://www.lelionautopart.com/en/certifications`;
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
