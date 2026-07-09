import { alternatesWithHreflang } from "../../../lib/hreflang";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lelionautopart.com"),
  title: "Wholesale Wiper Blade Products | Bowang Autoparts - OEM/ODM Manufacturer",
  description: "Browse our complete range of OEM/ODM wiper blades: universal, specific fit, multifunction, hybrid, and rear wiper blades. Factory-direct wholesale pricing with global shipping from Ningbo, China.",
  keywords: "wiper blades wholesale, OEM wiper blade, universal wiper blade, specific fit wiper, multifunction wiper blade, China wiper manufacturer, bulk wiper blades",
  alternates: alternatesWithHreflang("/en/products", "/en/products"), 
  openGraph: {
    title: "Wholesale Wiper Blade Products | Bowang Autoparts",
    description: "Browse our complete range of OEM/ODM wiper blades. Factory-direct wholesale pricing with global shipping.",
    url: "https://www.lelionautopart.com/products",
    images: [{ url: "https://sc02.alicdn.com/kf/Hb0410965e6194f008a583d7f500e1b7at.png", width: 800, height: 600, alt: "Bowang Wiper Blade Product Range" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wholesale Wiper Blade Products | Bowang Autoparts",
    description: "Browse our complete range of OEM/ODM wiper blades. Factory-direct wholesale pricing with global shipping.",
    images: ["https://sc02.alicdn.com/kf/Hb0410965e6194f008a583d7f500e1b7at.png"],
  },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children;
}