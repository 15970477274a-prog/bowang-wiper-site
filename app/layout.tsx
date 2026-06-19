import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Professional Wiper Blade Manufacturer | Bowang Autoparts",
  description: "Ningbo Zhenhai Bowang Autoparts Co., Ltd. is a leading OEM/ODM wiper blade manufacturer in China. High-quality universal, specific fit, and multifunction wiper blades.",
  keywords: "wiper blades, windshield wipers, China manufacturer, autoparts, Bowang, OEM wiper blade, ODM wiper blade",
  verification: {
    google: "google-site-verification=1k31SR_2_8VvfchohXge3PuhcLUPc69UfIAgA0samO8",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ningbo Zhenhai Bowang Autoparts Co., Ltd.",
    "alternateName": "Bowang Wiper | LeLion Autoparts",
    "description": "Leading OEM/ODM wiper blade manufacturer in Ningbo, China. ISO 9001 & IATF 16949 certified factory producing universal, specific fit, and multifunction wiper blades since 2011.",
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
      { "@type": "ContactPoint", "telephone": "+86-18867886795", "contactType": "sales", "email": "15970477274a@gmail.com", "areaServed": "Worldwide", "availableLanguage": ["English", "Spanish", "Russian", "French", "German"] },
      { "@type": "ContactPoint", "telephone": "+86-18867886795", "contactType": "technical support", "areaServed": "Worldwide", "availableLanguage": ["English", "Chinese"] }
    ],
    "sameAs": [
      "https://wa.me/8618867886795",
      "https://www.lelionautopart.com"
    ]
  };

  // WebSite schema + SiteNavigationElement for better AI/crawler understanding
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Bowang Wiper - LeLion Autoparts",
    "url": "https://www.lelionautopart.com",
    "description": "Leading OEM/ODM wiper blade manufacturer in China. Factory-direct pricing, ISO certified, global shipping.",
    "inLanguage": ["en", "es", "ru", "fr", "de"],
    "isAccessibleForFree": true,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.lelionautopart.com/?s={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="en">
      <head>
        {/* Google Analytics 4 (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DHVDM5P7YQ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          { `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-DHVDM5P7YQ');
          ` }
        </Script>

        {/* Ahrefs Analytics */}
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="PWw/q/G6NqWiQAPzBLLNTw"
          strategy="afterInteractive"
        />

        {/* JSON-LD Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />

        {/* JSON-LD WebSite Schema for AEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}

