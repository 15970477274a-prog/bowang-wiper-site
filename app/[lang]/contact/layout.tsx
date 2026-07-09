import { alternatesWithHreflang } from "../../../lib/hreflang";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lelionautopart.com"),
  title: "Contact Bowang Autoparts | Get Wiper Blade Quote & Samples",
  description: "Contact our sales team for wiper blade inquiries, OEM/ODM requests, bulk pricing, and free samples. WhatsApp: +86-18867886795. Global shipping from Ningbo, China.",
  keywords: "contact Bowang Autoparts, wiper blade quote, OEM wiper inquiry, wiper blade samples, China wiper factory contact, B2B wiper blades",
  alternates: alternatesWithHreflang("/en/contact", "/en/contact"), 
  openGraph: {
    title: "Contact Bowang Autoparts | Get Wiper Blade Quote & Samples",
    description: "Contact our sales team for wiper blade inquiries, OEM/ODM requests, bulk pricing, and free samples.",
    url: "https://www.lelionautopart.com/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Bowang Autoparts | Get Wiper Blade Quote",
    description: "Contact our sales team for wiper blade inquiries, OEM/ODM requests, bulk pricing.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}