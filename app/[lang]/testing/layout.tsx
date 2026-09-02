import { alternatesWithHreflang } from "../../../lib/hreflang";
import type { Metadata } from "next";

type Props = { params: Promise<{ lang: string }> };

const titles: Record<string, string> = {
  en: "Wiper Blade Rubber Test Data | Lelion Autoparts",
  es: "Datos de Prueba del Caucho de Escobillas | Lelion Autoparts",
  ru: "Данные испытаний резины стеклоочистителей | Lelion Autoparts",
  fr: "Données d'Essai du Caoutchouc des Balais | Lelion Autoparts",
  de: "Gummi-Testdaten für Wischerblätter | Lelion Autoparts",
  zh: "雨刮片胶条测试数据 | Lelion",
};

const descriptions: Record<string, string> = {
  en: "Verified lab test data for Lelion wiper rubber refill: 500,000 cycles, 18.9 MPa tensile strength, 482.5% elongation, and ozone resistance.",
  es: "Datos de laboratorio verificados del caucho de escobillas Lelion: 500.000 ciclos, 18,9 MPa de resistencia a la tracción, 482,5% de alargamiento y resistencia al ozono.",
  ru: "Проверенные лабораторные данные резины стеклоочистителей Lelion: 500 000 циклов, 18,9 МПа прочность на разрыв, 482,5% удлинение и озоностойкость.",
  fr: "Données de laboratoire vérifiées du caoutchouc des balais Lelion : 500 000 cycles, 18,9 MPa de résistance à la traction, 482,5% d'allongement et résistance à l'ozone.",
  de: "Verifizierte Labordaten des Lelion-Wischergummis: 500.000 Zyklen, 18,9 MPa Zugfestigkeit, 482,5% Dehnung und Ozonbeständigkeit.",
  zh: "Lelion雨刮胶条经实验室验证的数据：500,000次循环、18.9 MPa拉伸强度、482.5%断裂伸长率及耐臭氧性能。",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const title = titles[lang] || titles.en;
  const description = descriptions[lang] || descriptions.en;
  const canonicalPath = "/" + lang + "/testing";
  return {
    metadataBase: new URL("https://www.lelionautopart.com"),
    title,
    description,
    alternates: alternatesWithHreflang("/testing", canonicalPath),
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

export default function TestingLayout({ children }: { children: React.ReactNode }) {
  return children;
}