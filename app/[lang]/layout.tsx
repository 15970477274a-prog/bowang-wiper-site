import type { Metadata } from "next";
import Script from "next/script";
import { alternatesWithHreflang, hreflangUrls, htmlLangFor } from "../../lib/hreflang";
import { buildTitle, clampText, DESC_MAX } from "../../lib/seo";
import { LanguageProvider } from "../../components/LanguageContext";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WhatsAppFloat from "../../components/WhatsAppFloat";
import "../globals.css";

/**
 * Root layout for every localised route.
 *
 * This layout owns <html> / <body> so that the `lang` attribute can be rendered
 * per locale in the server response. It previously lived in `app/layout.tsx`
 * with a hard-coded lang="en" plus a client-side patch, which meant crawlers saw
 * `lang="en"` on /es, /ru, /fr, /de and /zh. There is no `app/layout.tsx`
 * anymore: localised routes use this layout, and the non-routed fallback shell
 * (app/(root)) has its own.
 */

const titles: Record<string, string> = {
  en: "Professional Wiper Blade Manufacturer | Lelion Autoparts",
  es: "Fabricante Profesional de Escobillas Limpiaparabrisas | Lelion Autoparts",
  ru: "\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c \u0421\u0442\u0435\u043a\u043b\u043e\u043e\u0447\u0438\u0441\u0442\u0438\u0442\u0435\u043b\u0435\u0439 | Lelion Autoparts",
  fr: "Fabricant Professionnel de Balais d'Essuie-glace | Lelion Autoparts",
  de: "Professioneller Wischerblatt-Hersteller | Lelion Autoparts",
  zh: "专业雨刮片制造商 | Lelion",
};

const descriptions: Record<string, string> = {
  en: "Lelion is an OEM/ODM wiper blade manufacturer in China. ISO 9001 & CE certified factory, MOQ 100 pcs/size, 15-day lead time, free samples, and global shipping.",
  es: "Lelion es un fabricante líder de escobillas limpiaparabrisas OEM/ODM en China. Fábrica certificada ISO 9001 y CE, MOQ 100 uds/talla, plazo de 15 días, muestras gratis y envío global.",
  ru: "Lelion — ведущий OEM/ODM производитель стеклоочистителей в Китае. Сертификация ISO 9001 и CE, MOQ 100 шт/размер, срок 15 дней, бесплатные образцы и доставка по всему миру.",
  fr: "Lelion est un fabricant leader de balais d'essuie-glace OEM/ODM en Chine. Usine certifiée ISO 9001 et CE, MOQ 100 pcs/taille, délai de 15 jours, échantillons gratuits et expédition mondiale.",
  de: "Lelion ist ein führender OEM/ODM-Hersteller von Wischerblättern in China. ISO 9001- und CE-zertifizierte Fabrik, MOQ 100 Stk./Größe, Lieferzeit 15 Tage, kostenlose Muster und weltweiter Versand.",
  zh: "Lelion 是中国领先的 OEM/ODM 雨刮片制造商。ISO 9001 与 CE 认证工厂，MOQ 100 支/尺寸，交期 15 天，免费打样，全球发货。",
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  // Home titles carry the brand suffix. buildTitle() keeps the whole phrase and
  // drops the suffix only when the full string would not fit the SERP budget
  // (es/ru/fr were 67-72 chars); it never emits a trailing "...".
  const title = buildTitle((titles[lang] || titles.en).replace(/\s*\|\s*Lelion(\s+Autoparts)?\s*$/, ""));
  // Word-boundary clamp, no trailing "..." (the previous helper appended one).
  const description = clampText(descriptions[lang] || descriptions.en, DESC_MAX);

  return {
    metadataBase: new URL("https://www.lelionautopart.com"),
    title,
    description,
    verification: {
      google: "1k31SR_2_8VvfchohXge3PuhcLUPc69UfIAgA0samO8",
    },
    alternates: alternatesWithHreflang("", "/" + lang),
    openGraph: {
      type: "website",
      siteName: "Lelion Autoparts",
      title,
      description,
      url: "https://www.lelionautopart.com/" + lang,
      images: [
        {
          url: "https://sc02.alicdn.com/kf/H2533c3c14bc74cd3afe116f60a8357f4U.jpg",
          width: 800,
          height: 600,
          alt: "Lelion Wiper Blades - Professional OEM/ODM Manufacturer",
        },
      ],
      locale: lang === "en" ? "en_US" : lang,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://sc02.alicdn.com/kf/H2533c3c14bc74cd3afe116f60a8357f4U.jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Ningbo Zhenhai Bowang Autoparts Co., Ltd.",
  "alternateName": "Lelion Autoparts",
  "description": "Leading OEM/ODM wiper blade manufacturer in Ningbo, China. ISO 9001 certified factory producing universal, specific fit, and multifunction wiper blades since 2011.",
  "url": "https://www.lelionautopart.com",
  "logo": "https://sc02.alicdn.com/kf/H2533c3c14bc74cd3afe116f60a8357f4U.jpg",
  "foundingDate": "2011",
  "numberOfEmployees": "200+",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Zhenhai District, Ningbo",
    "addressRegion": "Zhejiang",
    "addressCountry": "CN"
  },
  "contactPoint": [
    { "@type": "ContactPoint", "telephone": "+86-18867886795", "contactType": "sales", "email": "bwb@bwwiper.com", "areaServed": "Worldwide", "availableLanguage": ["English", "Spanish", "Russian", "French", "German"] },
    { "@type": "ContactPoint", "telephone": "+86-18867886795", "contactType": "technical support", "areaServed": "Worldwide", "availableLanguage": ["English", "Chinese"] }
  ],
  "sameAs": [
    "https://nb-bowang.en.alibaba.com/",
    "https://nbzhbw.en.made-in-china.com/",
    "https://www.bwwiper.com/",
    "https://www.facebook.com/groups/750483250868131/",
    "https://www.instagram.com/lelionwiper/",
    "https://wa.me/8618867886795"
  ]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Lelion Autoparts",
  "url": "https://www.lelionautopart.com",
  "description": "Lelion is an OEM/ODM wiper blade manufacturer in China. ISO 9001 & CE certified factory, MOQ 100 pcs/size, 15-day lead time, free samples, and global shipping.",
  "inLanguage": ["en", "es", "ru", "fr", "de", "zh"],
  "isAccessibleForFree": true
};

const locales = ["en", "es", "ru", "fr", "de", "zh"];

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const dynamicParams = false;

export default async function LangLayout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return (
    <html lang={htmlLangFor(lang)} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://sc02.alicdn.com" />
        <link rel="dns-prefetch" href="https://sc02.alicdn.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://analytics.ahrefs.com" />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-DHVDM5P7YQ" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DHVDM5P7YQ');
          `}
        </Script>
        <Script src="https://analytics.ahrefs.com/analytics.js" data-key="PWw/q/G6NqWiQAPzBLLNTw" strategy="afterInteractive" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        <LanguageProvider initialLang={lang as any}>
          <Header />
          {children}
          <Footer />
          <WhatsAppFloat />
        </LanguageProvider>
      </body>
    </html>
  );
}
