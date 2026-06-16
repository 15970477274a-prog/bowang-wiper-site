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
    "url": "https://www.lelionautopart.com",
    "logo": "https://sc02.alicdn.com/kf/H2533c3c14bc74cd3afe116f60a8357f4U.jpg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+86-18867886795",
      "contactType": "sales",
      "email": "15970477274a@gmail.com",
      "areaServed": "Worldwide",
      "availableLanguage": ["English", "Spanish", "Russian", "French", "German"]
    },
    "sameAs": [
      "https://wa.me/8618867886795"
    ]
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
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
