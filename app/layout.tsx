import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Professional Wiper Blade Manufacturer | Bowang Autoparts",
  description: "Ningbo Zhenhai Bowang Autoparts Co., Ltd. is a leading OEM/ODM wiper blade manufacturer in China. High-quality universal, specific fit, and multifunction wiper blades.",
  keywords: "wiper blades, windshield wipers, China manufacturer, autoparts, Bowang, OEM wiper blade, ODM wiper blade",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
