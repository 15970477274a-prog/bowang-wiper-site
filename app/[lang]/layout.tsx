import { alternatesWithHreflang } from "../../lib/hreflang";
import type { Metadata } from "next";
import { LanguageProvider } from "../../components/LanguageContext";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WhatsAppFloat from "../../components/WhatsAppFloat";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;

  const titles: Record<string, string> = {
    en: "Professional Wiper Blade Manufacturer | Bowang Autoparts",
    es: "Fabricante Profesional de Escobillas Limpiaparabrisas | Bowang Autoparts",
    ru: "\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c \u0421\u0442\u0435\u043a\u043b\u043e\u043e\u0447\u0438\u0441\u0442\u0438\u0442\u0435\u043b\u0435\u0439 | Bowang Autoparts",
    fr: "Fabricant Professionnel de Balais d''Essuie-glace | Bowang Autoparts",
    de: "Professioneller Wischerblatt-Hersteller | Bowang Autoparts",
    zh: "专业雨刮片制造商 | 博旺汽配",
  };

  const descriptions: Record<string, string> = {
    en: "Leading OEM/ODM wiper blade manufacturer in China. ISO 9001 and IATF 16949 certified factory.",
    es: "Fabricante lider de escobillas limpiaparabrisas OEM/ODM en China. Fabrica certificada ISO 9001 e IATF 16949.",
    ru: "\u0412\u0435\u0434\u0443\u0449\u0438\u0439 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c \u0441\u0442\u0435\u043a\u043b\u043e\u043e\u0447\u0438\u0441\u0442\u0438\u0442\u0435\u043b\u0435\u0439 OEM/ODM \u0432 \u041a\u0438\u0442\u0430\u0435.",
    fr: "Principal fabricant de balais d''essuie-glace OEM/ODM en Chine. Usine certifiee ISO 9001 et IATF 16949.",
    de: "Fuhrender OEM/ODM-Wischerblatt-Hersteller in China. ISO 9001 und IATF 16949 zertifizierte Fabrik.",
    zh: "中国领先的OEM/ODM雨刮片制造商。ISO 9001和IATF 16949认证工厂。",
  };

  return {
    metadataBase: new URL("https://www.lelionautopart.com"),
    title: titles[lang] || titles.en,
    description: descriptions[lang] || descriptions.en,
    alternates: alternatesWithHreflang("", "/" + lang),
    openGraph: {
      type: "website",
      siteName: "Bowang Wiper - LeLion Autoparts",
      title: titles[lang] || titles.en,
      description: descriptions[lang] || descriptions.en,
      url: "https://www.lelionautopart.com/" + lang,
      images: [{ url: "https://sc02.alicdn.com/kf/H2533c3c14bc74cd3afe116f60a8357f4U.jpg", width: 800, height: 600, alt: "Bowang Wiper Blades" }],
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
