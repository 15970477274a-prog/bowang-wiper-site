import { alternatesWithHreflang } from "../../lib/hreflang";
import type { Metadata } from "next";
import { LanguageProvider } from "../../components/LanguageContext";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WhatsAppFloat from "../../components/WhatsAppFloat";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;

  const titles: Record<string, string> = {
    en: "Professional Wiper Blade Manufacturer | Lelion Autoparts",
    es: "Fabricante Profesional de Escobillas Limpiaparabrisas | Lelion Autoparts",
    ru: "\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c \u0421\u0442\u0435\u043a\u043b\u043e\u043e\u0447\u0438\u0441\u0442\u0438\u0442\u0435\u043b\u0435\u0439 | Lelion Autoparts",
    fr: "Fabricant Professionnel de Balais d''Essuie-glace | Lelion Autoparts",
    de: "Professioneller Wischerblatt-Hersteller | Lelion Autoparts",
    zh: "专业雨刮片制造商 | Lelion",
  };

  const descriptions: Record<string, string> = {
    en: "Lelion is a leading OEM/ODM wiper blade manufacturer in China. ISO 9001 & CE certified factory, MOQ 100 pcs/size, 15-day lead time, free samples, and global shipping.",
    es: "Lelion es un fabricante líder de escobillas limpiaparabrisas OEM/ODM en China. Fábrica certificada ISO 9001 y CE, MOQ 100 uds/talla, plazo de 15 días, muestras gratis y envío global.",
    ru: "Lelion — ведущий OEM/ODM производитель стеклоочистителей в Китае. Сертификация ISO 9001 и CE, MOQ 100 шт/размер, срок 15 дней, бесплатные образцы и доставка по всему миру.",
    fr: "Lelion est un fabricant leader de balais d'essuie-glace OEM/ODM en Chine. Usine certifiée ISO 9001 et CE, MOQ 100 pcs/taille, délai de 15 jours, échantillons gratuits et expédition mondiale.",
    de: "Lelion ist ein führender OEM/ODM-Hersteller von Wischerblättern in China. ISO 9001- und CE-zertifizierte Fabrik, MOQ 100 Stk./Größe, Lieferzeit 15 Tage, kostenlose Muster und weltweiter Versand.",
    zh: "Lelion 是中国领先的 OEM/ODM 雨刮片制造商。ISO 9001 与 CE 认证工厂，MOQ 100 支/尺寸，交期 15 天，免费打样，全球发货。",
  };

  return {
    metadataBase: new URL("https://www.lelionautopart.com"),
    title: titles[lang] || titles.en,
    description: descriptions[lang] || descriptions.en,
    alternates: alternatesWithHreflang("", "/" + lang),
    openGraph: {
      type: "website",
      siteName: "Lelion Autoparts",
      title: titles[lang] || titles.en,
      description: descriptions[lang] || descriptions.en,
      url: "https://www.lelionautopart.com/" + lang,
      images: [{ url: "https://sc02.alicdn.com/kf/H2533c3c14bc74cd3afe116f60a8357f4U.jpg", width: 800, height: 600, alt: "Lelion Wiper Blades" }],
    },
    twitter: {
      card: "summary_large_image",
      title: titles[lang] || titles.en,
      description: descriptions[lang] || descriptions.en,
      images: ["https://sc02.alicdn.com/kf/H2533c3c14bc74cd3afe116f60a8357f4U.jpg"],
    },
    robots: { index: true, follow: true },
  };
}

const locales = ["en", "es", "ru", "fr", "de", "zh"];

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const dynamicParams = false;

export default async function LangLayout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return (
    <LanguageProvider initialLang={lang as any}>
      <Header />
      {children}
      <Footer />
      <WhatsAppFloat />
    </LanguageProvider>
  );
}
