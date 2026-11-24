"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

/**
 * /[lang]/exhibitions — Trade shows and customer visits page.
 *
 * IMPORTANT: No specific exhibition names, dates, customer names or awards are
 * published here because no verified event records were supplied. The copy is
 * deliberately generic but honest: we regularly attend industry trade shows
 * and welcome buyers to visit our factory or meet us in person. Only replace
 * this text with named events once dates and records are confirmed in writing.
 *
 * Structure follows app/[lang]/about/page.tsx (inline styles, useParams,
 * urlLang, JSON-LD scripts, conclusion-first copy, FAQ blocks).
 */

type Lang = "en" | "es" | "ru" | "fr" | "de" | "zh";

const languages: Lang[] = ["en", "es", "ru", "fr", "de", "zh"];

const meetingTopics = [
  { title: "Product fitment and range", text: "Compare universal, specific-fit, multifunction, hybrid, rear and bus/truck blades in person, check adapter fitment against your vehicle list, and identify the right SKUs for your market." },
  { title: "Quality evidence", text: "Review the certificate numbers — ISO 9001:2015 No. 134956 (NQA) and CE No. M.2022.206.C79712 (UDEM) — and discuss laboratory data such as 1,500,000 wipe cycles, salt spray, ozone and low-temperature flexibility testing face to face." },
  { title: "Private label and packaging", text: "See physical samples of laser-printed logos, color boxes, blister cards and export carton marking, and agree the packaging route for your retail or wholesale programme." },
  { title: "Commercial terms", text: "Discuss MOQ of 500 pcs (100 pcs per size), lead times of 7 days for stock, 15–35 days for custom orders and 30–50 days for new tooling, and T/T terms of 30% deposit plus 70% before shipment." },
  { title: "Logistics from Ningbo Port", text: "Plan shipment consolidation through our 8,000㎡ warehouse at Ningbo Port and review export documentation requirements for your destination market." },
];

const visitOptions = [
  { title: "Meet us at an industry trade show", text: "Lelion regularly attends automotive aftermarket trade shows to meet distributors, wholesalers and private-label brand owners. Contact our export office to ask about our current schedule and to reserve a meeting slot; we will confirm details directly with you rather than publishing unverified dates." },
  { title: "Visit our factory in Ningbo", text: "Buyers are welcome to audit our operations at No.399 Minhe Road, Zhenhai District, Ningbo, Zhejiang 315202, China. A factory visit lets your team walk the lines, see the laboratory and review quality records with our staff." },
  { title: "Arrange a remote video meeting", text: "If travel is not practical, we can host a live video walkthrough of the production lines and a remote pre-shipment inspection. This gives your QA team the same visibility without the cost of a trip." },
];

const faqs = [
  {
    q: "Does Lelion attend automotive aftermarket trade shows?",
    a: "Yes. We regularly attend industry trade shows to meet distributors, wholesalers and private-label brand owners. Because our schedule changes, we confirm upcoming events directly with buyers rather than listing unverified dates here. Contact our export sales office to ask about our current programme and to book a meeting.",
  },
  {
    q: "Can I visit the Lelion factory before placing an order?",
    a: "Yes. Buyers are welcome to visit our plant in Ningbo at No.399 Minhe Road, Zhenhai District, Ningbo, Zhejiang 315202, China, and to review our second plant in Pingxiang, Jiangxi. Contact our export office in advance so we can prepare samples, quality records and a guided tour of the lines.",
  },
  {
    q: "What can I discuss in a meeting with Lelion?",
    a: "Meetings typically cover product fitment and SKU selection, certification and laboratory evidence, private-label packaging, MOQ and lead times, and shipping from Ningbo Port. Bring your vehicle model list, target quantities and packaging requirements and our team will work through them with you.",
  },
  {
    q: "Can I inspect my order without travelling to China?",
    a: "Yes. Before shipment we support live remote video inspection or provide recorded product inspection videos through your dedicated sales representative. This is the same evidence a buyer would see during an on-site pre-shipment check.",
  },
  {
    q: "How do I arrange a meeting or request an invitation?",
    a: "Send your request through the contact page or email bwb@bwwiper.com with your company name, market, product interest and preferred dates. Our export sales office will respond within 12 hours with available options and the next steps.",
  },
];

const navLabels: Record<Lang, { home: string; exhibitions: string; factory: string; contact: string }> = {
  en: { home: "Home", exhibitions: "Exhibitions & Visits", factory: "Factory", contact: "Contact Us" },
  es: { home: "Inicio", exhibitions: "Ferias y Visitas", factory: "Fábrica", contact: "Contáctanos" },
  ru: { home: "Главная", exhibitions: "Выставки и Визиты", factory: "Завод", contact: "Связаться" },
  fr: { home: "Accueil", exhibitions: "Salons et Visites", factory: "Usine", contact: "Nous contacter" },
  de: { home: "Startseite", exhibitions: "Messen & Besuche", factory: "Fabrik", contact: "Kontakt" },
  zh: { home: "首页", exhibitions: "展会与客户拜访", factory: "工厂实力", contact: "联系我们" },
};

export default function ExhibitionsPage() {
  const params = useParams();
  const urlLang = (params.lang as Lang) || "en";
  const lang: Lang = languages.includes(urlLang) ? urlLang : "en";
  const labels = navLabels[lang];
  const pageUrl = "https://www.lelionautopart.com/" + lang + "/exhibitions";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ningbo Zhenhai Bowang Autoparts Co., Ltd.",
    "alternateName": "Lelion Autoparts",
    "url": "https://www.lelionautopart.com",
    "description": "Wiper blade manufacturer founded in 2007, exporting to 60+ countries. We regularly attend industry trade shows and welcome buyers to visit our Ningbo factory or arrange remote video meetings.",
    "foundingDate": "2007",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "No.399 Minhe Road, Zhenhai District",
      "addressLocality": "Ningbo",
      "addressRegion": "Zhejiang",
      "postalCode": "315202",
      "addressCountry": "CN",
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "contactType": "sales",
        "email": "bwb@bwwiper.com",
        "telephone": "+8618867886795",
        "areaServed": "Worldwide",
        "availableLanguage": ["English", "Spanish", "Russian", "French", "German", "Chinese"],
      },
    ],
    "sameAs": [
      "https://www.facebook.com/lelionwiper168",
      "https://www.instagram.com/lelionwiper/",
      "https://www.linkedin.com/in/lelion-wiperblade/",
      "https://www.youtube.com/@Lelion-wiper",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": { "@type": "Answer", "text": item.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": labels.home, "item": "https://www.lelionautopart.com/" + lang },
      { "@type": "ListItem", "position": 2, "name": labels.exhibitions, "item": pageUrl },
    ],
  };

  return (
    <main style={{ fontFamily: "system-ui, -apple-system, sans-serif", color: "#1e293b", backgroundColor: "#ffffff" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero — honest, conclusion-first, no invented event details */}
      <section style={{ padding: "90px 20px", background: "linear-gradient(135deg, #0f172a 0%, #0c4a6e 100%)", color: "white", textAlign: "center" }}>
        <div style={{ maxWidth: "920px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "var(--h1-about, 48px)", fontWeight: 800, marginBottom: "20px", lineHeight: 1.2 }}>
            Meet Lelion: Industry Trade Shows, Factory Visits and Direct Buyer Meetings
          </h1>
          <p style={{ fontSize: "18px", color: "#cbd5e1", lineHeight: 1.7 }}>
            Lelion Autoparts regularly attends automotive aftermarket trade shows and welcomes buyers who want to see the factory, inspect samples and review quality evidence in person. Whether you meet our team at an event, visit our Ningbo plant or join a live video walkthrough, the conversation starts with your product list, your market and your order requirements. Tell us what you need and we will arrange the right format.
          </p>
          <div style={{ marginTop: "28px", display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#meeting-options" style={{ display: "inline-block", backgroundColor: "#0284c7", color: "white", padding: "13px 26px", borderRadius: "6px", fontWeight: 700, textDecoration: "none" }}>Explore meeting options</a>
            <Link href={"/" + lang + "/contact"} style={{ display: "inline-block", border: "1px solid #38bdf8", color: "white", padding: "13px 26px", borderRadius: "6px", fontWeight: 700, textDecoration: "none" }}>Request a meeting</Link>
          </div>
        </div>
      </section>

      {/* Trust strip — verifiable company facts, no event claims */}
      <section style={{ backgroundColor: "#f1f5f9", padding: "44px 20px" }}>
        <div style={{ maxWidth: "1050px", margin: "0 auto", display: "flex", justifyContent: "space-around", textAlign: "center", flexWrap: "wrap", gap: "28px" }}>
          <div><span style={{ display: "block", fontSize: "36px", fontWeight: 800, color: "#0284c7" }}>2007</span><span style={{ fontSize: "14px", color: "#475569" }}>Founded · 18+ years of experience</span></div>
          <div><span style={{ display: "block", fontSize: "36px", fontWeight: 800, color: "#0284c7" }}>60+</span><span style={{ fontSize: "14px", color: "#475569" }}>Export countries served</span></div>
          <div><span style={{ display: "block", fontSize: "36px", fontWeight: 800, color: "#0284c7" }}>20,000+㎡</span><span style={{ fontSize: "14px", color: "#475569" }}>Two manufacturing plants</span></div>
          <div><span style={{ display: "block", fontSize: "36px", fontWeight: 800, color: "#0284c7" }}>12h</span><span style={{ fontSize: "14px", color: "#475569" }}>Typical inquiry response time</span></div>
        </div>
      </section>

      {/* Meeting options */}
      <section id="meeting-options" style={{ padding: "80px 20px", maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "32px", fontWeight: 800, marginBottom: "16px", color: "#0f172a" }}>Three ways to meet our team</h2>
        <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#475569", marginBottom: "30px", maxWidth: "850px" }}>
          Different buyers prefer different levels of contact. We support all three routes below, and each one can be paired with samples, certificates and test records before you commit to a bulk order.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(290px, 100%), 1fr))", gap: "24px" }}>
          {visitOptions.map((item, i) => (
            <div key={i} style={{ backgroundColor: "#f8fafc", padding: "26px", borderRadius: "12px", borderLeft: "4px solid #0284c7", border: "1px solid #e2e8f0" }}>
              <h3 style={{ margin: "0 0 10px", fontSize: "19px", color: "#0f172a" }}>{item.title}</h3>
              <p style={{ margin: 0, fontSize: "15px", lineHeight: 1.7, color: "#475569" }}>{item.text}</p>
            </div>
          ))}
        </div>
        <p style={{ fontSize: "13px", color: "#64748b", marginTop: "20px", lineHeight: 1.6 }}>
          We do not list named events, dates or customer references on this page because we only publish details we can verify. Ask our export office for the current trade show schedule and we will confirm the specifics with you directly.
        </p>
      </section>

      {/* What to discuss */}
      <section style={{ backgroundColor: "#f1f5f9", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "32px", fontWeight: 800, marginBottom: "16px", color: "#0f172a" }}>What we can cover in a buyer meeting</h2>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#475569", marginBottom: "30px" }}>
            A useful meeting is a working session, not a sales pitch. Bring your vehicle application list, target volumes and packaging ideas; our team will bring physical samples, certificate numbers and production data. The topics below are the ones buyers most often ask us to walk through.
          </p>
          <div style={{ display: "grid", gap: "18px" }}>
            {meetingTopics.map((item, i) => (
              <div key={i} style={{ backgroundColor: "white", padding: "22px 26px", borderRadius: "10px", borderLeft: "4px solid #0284c7" }}>
                <h3 style={{ margin: "0 0 8px", fontSize: "18px", color: "#0f172a" }}>{item.title}</h3>
                <p style={{ margin: 0, fontSize: "15px", lineHeight: 1.7, color: "#475569" }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factory visit logistics */}
      <section style={{ padding: "80px 20px", maxWidth: "1000px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "32px", fontWeight: 800, marginBottom: "20px", color: "#0f172a" }}>Planning a factory visit</h2>
        <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#475569", marginBottom: "20px" }}>
          Our registered address is No.399 Minhe Road, Zhenhai District, Ningbo, Zhejiang 315202, China. The company operates two plants — in Ningbo, Zhejiang and Pingxiang, Jiangxi — totaling 20,000+㎡, plus an 8,000㎡ warehouse at Ningbo Port. Tell us which sites and processes matter most to your audit and we will prepare the visit accordingly.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))", gap: "20px" }}>
          {[
            { title: "Before you travel", text: "Send your company profile, target SKUs and proposed dates. We will prepare samples, certificate copies and quality records so your time on site is productive." },
            { title: "During the visit", text: "Walk the production lines, review the laboratory and see how incoming materials, batch testing and export packing are handled." },
            { title: "After the visit", text: "Receive a written follow-up with the agreed specifications, samples sent and commercial terms discussed, so both teams have the same record." },
          ].map((item, i) => (
            <div key={i} style={{ backgroundColor: "#f8fafc", padding: "24px", borderRadius: "10px", border: "1px solid #e2e8f0" }}>
              <h3 style={{ margin: "0 0 10px", color: "#0f172a", fontSize: "19px" }}>{item.title}</h3>
              <p style={{ margin: 0, fontSize: "15px", lineHeight: 1.7, color: "#475569" }}>{item.text}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "26px", display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <Link href={"/" + lang + "/factory"} style={{ color: "#0284c7", fontWeight: 700, textDecoration: "none" }}>→ {labels.factory}: two plants, 20,000+㎡, 50,000 pcs/day</Link>
        </div>
      </section>

      {/* Stay in touch */}
      <section style={{ backgroundColor: "#f1f5f9", padding: "70px 20px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "30px", fontWeight: 800, marginBottom: "20px", color: "#0f172a" }}>Follow our official channels</h2>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#475569", marginBottom: "20px" }}>
            Our official accounts are the simplest way to see new products and ask about meeting opportunities. For a formal meeting request or a quotation, use the contact form or email bwb@bwwiper.com — our export team replies within 12 hours.
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "12px" }}>
            <li><a href="https://www.facebook.com/lelionwiper168" target="_blank" rel="noopener noreferrer" style={{ color: "#0284c7", fontWeight: 700, textDecoration: "none" }}>Facebook — facebook.com/lelionwiper168</a></li>
            <li><a href="https://www.instagram.com/lelionwiper/" target="_blank" rel="noopener noreferrer" style={{ color: "#0284c7", fontWeight: 700, textDecoration: "none" }}>Instagram — instagram.com/lelionwiper/</a></li>
            <li><a href="https://www.linkedin.com/in/lelion-wiperblade/" target="_blank" rel="noopener noreferrer" style={{ color: "#0284c7", fontWeight: 700, textDecoration: "none" }}>LinkedIn — /in/lelion-wiperblade/</a></li>
            <li><a href="https://www.youtube.com/@Lelion-wiper" target="_blank" rel="noopener noreferrer" style={{ color: "#0284c7", fontWeight: 700, textDecoration: "none" }}>YouTube — @Lelion-wiper</a></li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px", borderTop: "1px solid #e2e8f0" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "32px", fontWeight: 800, textAlign: "center", marginBottom: "12px", color: "#0f172a" }}>Trade show and factory visit FAQ</h2>
          <p style={{ textAlign: "center", color: "#64748b", marginBottom: "40px", fontSize: "15px" }}>Direct answers to common questions about meeting Lelion in person or remotely.</p>
          {faqs.map((item, i) => (
            <div key={i} style={{ marginBottom: "28px", paddingBottom: "24px", borderBottom: "1px solid #e2e8f0" }}>
              <h3 style={{ fontSize: "20px", fontWeight: 800, color: "#0f172a", margin: "0 0 10px" }}>{item.q}</h3>
              <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#475569", margin: 0 }}>{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#0f172a", padding: "70px 20px", color: "white", textAlign: "center" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "30px", fontWeight: 800, marginBottom: "18px" }}>Book a conversation with our export team</h2>
          <p style={{ color: "#cbd5e1", lineHeight: 1.8, marginBottom: "28px" }}>
            Include your company name, target market, product interest and preferred dates in your message. We will confirm a trade show meeting, a factory visit or a live video session, and send samples and documentation ahead of time.
          </p>
          <Link href={"/" + lang + "/contact"} style={{ display: "inline-block", backgroundColor: "#0284c7", color: "white", padding: "14px 30px", borderRadius: "6px", fontWeight: 700, textDecoration: "none" }}>{labels.contact}</Link>
        </div>
      </section>
    </main>
  );
}
