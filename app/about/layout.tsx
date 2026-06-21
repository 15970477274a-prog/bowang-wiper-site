import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lelionautopart.com"),
  title: "About Bowang Autoparts | OEM/ODM Wiper Blade Manufacturer Since 2011",
  description: "Ningbo Zhenhai Bowang Autoparts Co., Ltd. is an ISO 9001 & IATF 16949 certified wiper blade manufacturer. 8,000sqm factory, 200+ employees, exporting to 50+ countries since 2011.",
  keywords: "about Bowang Autoparts, wiper blade manufacturer China, Ningbo wiper factory, ISO 9001 wiper manufacturer, IATF 16949 certified, OEM ODM wiper blades",
  alternates: { canonical: "https://www.lelionautopart.com/about" },
  openGraph: {
    title: "About Bowang Autoparts | OEM/ODM Wiper Blade Manufacturer",
    description: "ISO 9001 & IATF 16949 certified wiper blade manufacturer. 8,000sqm factory, 200+ employees, exporting to 50+ countries since 2011.",
    url: "https://www.lelionautopart.com/about",
    images: [{ url: "https://sc02.alicdn.com/kf/H2533c3c14bc74cd3afe116f60a8357f4U.jpg", width: 800, height: 600, alt: "Bowang Autoparts Factory" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Bowang Autoparts | OEM/ODM Wiper Blade Manufacturer",
    description: "ISO 9001 & IATF 16949 certified wiper blade manufacturer since 2011.",
    images: ["https://sc02.alicdn.com/kf/H2533c3c14bc74cd3afe116f60a8357f4U.jpg"],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}