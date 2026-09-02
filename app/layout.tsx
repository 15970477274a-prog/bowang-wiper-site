import type { Metadata } from "next";
import { hreflangUrls } from "../lib/hreflang";
import Script from "next/script";
import HtmlLangFix from "../components/HtmlLangFix";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lelionautopart.com"),
  title: "Professional Wiper Blade Manufacturer | Lelion Autoparts",
  description: "Ningbo Zhenhai Bowang is a leading OEM/ODM wiper blade manufacturer in China. ISO 9001 certified factory with global shipping since 2011.",
  verification: {
    google: "1k31SR_2_8VvfchohXge3PuhcLUPc69UfIAgA0samO8",
  },
  openGraph: {
    type: "website",
    siteName: "Lelion Autoparts",
    title: "Professional Wiper Blade Manufacturer | Lelion Autoparts",
    description: "Leading OEM/ODM wiper blade manufacturer in China. ISO 9001 certified factory producing universal, specific fit, and multifunction wiper blades since 2011.",
    url: "https://www.lelionautopart.com",
    images: [
      {
        url: "https://sc02.alicdn.com/kf/H2533c3c14bc74cd3afe116f60a8357f4U.jpg",
        width: 800,
        height: 600,
        alt: "Lelion Wiper Blades - Professional OEM/ODM Manufacturer",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Wiper Blade Manufacturer | Lelion Autoparts",
    description: "Leading OEM/ODM wiper blade manufacturer in China. ISO 9001 certified factory since 2011.",
    images: ["https://sc02.alicdn.com/kf/H2533c3c14bc74cd3afe116f60a8357f4U.jpg"],
  },
  alternates: {
    canonical: "https://www.lelionautopart.com/en",
    languages: hreflangUrls(""),
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
  "description": "Leading OEM/ODM wiper blade manufacturer in China. Factory-direct pricing, ISO certified, global shipping.",
  "inLanguage": ["en", "es", "ru", "fr", "de", "zh"],
  "isAccessibleForFree": true
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://sc02.alicdn.com" />
        <link rel="dns-prefetch" href="https://sc02.alicdn.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://analytics.ahrefs.com" />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-DHVDM5P7YQ" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          { `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DHVDM5P7YQ');
          ` }
        </Script>
        <Script src="https://analytics.ahrefs.com/analytics.js" data-key="PWw/q/G6NqWiQAPzBLLNTw" strategy="afterInteractive" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        <HtmlLangFix />
        {children}
      </body>
    </html>
  );
}
