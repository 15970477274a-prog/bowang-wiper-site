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
  return (
    <html lang="en">
      <head>
        {/* Google Analytics 4 (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RBL05NJR4S"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-RBL05NJR4S');
          `}
        </Script>
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
