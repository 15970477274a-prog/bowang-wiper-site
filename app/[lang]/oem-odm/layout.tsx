import { alternatesWithHreflang } from "../../../lib/hreflang";
import type { Metadata } from "next";

type Props = { params: Promise<{ lang: string }> };

// Page-level metadata is kept in this file so the route stays self-contained,
// the same way app/[lang]/oem-odm/page.tsx keeps its own per-language copy.
const meta: Record<string, { title: string; description: string }> = {
  en: {
    title: "OEM & ODM Wiper Blades — Custom Manufacturing | LELION",
    description:
      "OEM and ODM windshield wiper blades by LELION: minimum order from 500 pcs, sampling 7–15 days, 7 working days for in-stock items and 15–35 working days for custom production.",
  },
  es: {
    title: "Escobillas limpiaparabrisas OEM y ODM — Fabricación personalizada | LELION",
    description:
      "Escobillas limpiaparabrisas OEM y ODM de LELION: pedido mínimo desde 500 unidades, muestreo 7–15 días, 7 días laborables en stock y 15–35 días laborables para producción personalizada.",
  },
  ru: {
    title: "Щётки стеклоочистителя OEM и ODM — изготовление на заказ | LELION",
    description:
      "Щётки стеклоочистителя OEM и ODM от LELION: минимальный заказ от 500 шт., изготовление образцов 7–15 дней, 7 рабочих дней со склада и 15–35 рабочих дней под заказ.",
  },
  fr: {
    title: "Balais d'essuie-glace OEM et ODM — fabrication sur mesure | LELION",
    description:
      "Balais d'essuie-glace OEM et ODM par LELION : commande minimale à partir de 500 pièces, échantillonnage 7–15 jours, 7 jours ouvrés en stock et 15–35 jours ouvrés sur mesure.",
  },
  de: {
    title: "OEM- und ODM-Wischerblätter — Sonderanfertigung | LELION",
    description:
      "OEM- und ODM-Wischerblätter von LELION: Mindestbestellmenge ab 500 Stück, Bemusterung 7–15 Tage, 7 Werktage ab Lager und 15–35 Werktage für Sonderanfertigungen.",
  },
  zh: {
    title: "OEM / ODM 雨刮片 — 定制制造 | LELION",
    description:
      "LELION 提供 OEM / ODM 雨刮片定制：整单 500 pcs 起，打样 7–15 天，现货 7 个工作日、定制 15–35 个工作日交付。",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const m = meta[lang] || meta.en;
  const canonicalPath = "/" + lang + "/oem-odm";
  const ogImage = "https://sc02.alicdn.com/kf/H2533c3c14bc74cd3afe116f60a8357f4U.jpg";

  return {
    metadataBase: new URL("https://www.lelionautopart.com"),
    title: m.title,
    description: m.description,
    alternates: alternatesWithHreflang("/oem-odm", canonicalPath),
    openGraph: {
      title: m.title,
      description: m.description,
      url: "https://www.lelionautopart.com" + canonicalPath,
      images: [{ url: ogImage, width: 800, height: 600, alt: "Lelion Autoparts OEM and ODM wiper blades" }],
    },
    twitter: {
      card: "summary_large_image",
      title: m.title,
      description: m.description,
      images: [ogImage],
    },
  };
}

export default function OemOdmLayout({ children }: { children: React.ReactNode }) {
  return children;
}
