import type { Metadata } from "next";
import Script from "next/script";
import { alternatesWithHreflang, hreflangUrls, htmlLangFor } from "../../lib/hreflang";
import { buildTitle, clampDescription, DESC_MAX } from "../../lib/seo";
import { LanguageProvider } from "../../components/LanguageContext";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WhatsAppFloat from "../../components/WhatsAppFloat";
import "../globals.css";


/*
 * Root layout for every localised route.
 *
 * This layout owns <html> / <body> so that the `ang attribute can be rendered
 * per locale in the server response. It previously lived in app/layout.tsx
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
  en: "China OEM/ODM wiper blade factory. ISO 9001:2015, CE-compliant, MOQ 500 pcs (100/size), 7-day stock lead, free samples, global shipping. Quote in 12h.",
  es: "Fabricante OEM/ODM de escobillas en China. Fábrica ISO 9001:2015, productos CE, MOQ 500 uds (100/talla), envío 7 días, muestras gratis. Cotiza en 12h.",
  ru: "OEM/ODM производитель щёток в Китае. Завод ISO 9001:2015, продукция соответствует CE, MOQ 500 шт (100/размер), 7 дней со склада, бесплатные образцы.",
  fr: "Fabricant OEM/ODM de balais en Chine. Usine ISO 9001:2015, produits CE, MOQ 500 pcs (100/taille), stock 7 j, échantillons gratuits, devis sous 12h.",
  de: "OEM/ODM-Wischerhersteller aus China. ISO 9001:2015-Werk, CE-konforme Produkte, MOQ 500 Stk. (100/Größe), 7 Tage Lager, Gratismuster. Angebot in 12h.",
  zh: "中国 OEM/ODM 雨刮片制造商。ISO 9001:2015 工厂，符合 CE 的产品，起订 500 支（100/尺寸），现货 7 天，免费打样，全球发货，12 小时报价。",
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  // Home titles carry the brand suffix. buildTitle() keeps the whole phrase and
  // drops the suffix only when the full string would not fit the SERP budget
  // (es/ru/fr were 67-72 chars); it never emits a trailing "...".
  const title = buildTitle((titles[lang] || titles.en).replace(/\s*\|\s*Lelion(\s+Autoparts)?\s*$/, ""));
  // Sentence-aware clamp: never publish a half-cut phrase as the description.
  const description = clampDescription(descriptions[lang] || descriptions.en, DESC_MAX);

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
  "description": "Leading OEM/ODM wiper blade manufacturer in Ningbo, China. ISO 9001 certified factory producing universal, specific fit, and multifunction wiper blades since 2007.",
  "url": "https://www.lelionautopart.com",
  "logo": "https://sc02.alicdn.com/kf/H2533c3c14bc74cd3afe116f60a8357f4U.jpg",
  "foundingDate": "2007",
  "numberOfEmployees": "128+",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "No.399 Minhe Road, Zhenhai District",
    "addressLocality": "Ningbo",
    "addressRegion": "Zhejiang",
    "postalCode": "315202",
    "addressCountry": "CN"
  },
  "contactPoint": [
    { "@type": "ContactPoint", "name": "Overseas Sales Office", "telephone": "+8618867886795", "email": "bwb@bwwiper.com", "contactType": "sales", "areaServed": "Worldwide", "availableLanguage": ["English", "Spanish", "Russian", "French", "German", "Chinese"] }
  ],
  "sameAs": [
    "https://nb-bowang.en.alibaba.com/",
    "https://nbzhbw.en.made-in-china.com/",
    "https://www.bwwiper.com/",
    "https://www.youtube.com/channel/UCxgd3bIU_kAivg0xL4XOh2Q",
    "https://wa.me/8618867886795"
  ]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Lelion Autoparts",
  "url": "https://www.lelionautopart.com",
  "description": "Lelion is an OEM/ODM wiper blade manufacturer in China. ISO 9001:2015 certified factory producing CE-compliant wiper blades. MOQ 500 pcs, 7-day stock lead time, free samples, and global shipping.",
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
