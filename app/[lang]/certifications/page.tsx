"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

/**
 * /[lang]/certifications — Verified certifications evidence page.
 *
 * Purpose: move the certificate numbers that previously existed only in
 * llms.txt into visible, citable on-page copy. Every certificate name,
 * number and issuing body below is a confirmed company fact; do not alter
 * the strings without re-verifying against the original certificate PDFs.
 *
 * Structure follows app/[lang]/about/page.tsx (inline styles, useParams,
 * urlLang, JSON-LD scripts, conclusion-first copy, FAQ blocks).
 */

type Lang = "en" | "es" | "ru" | "fr" | "de" | "zh";

const languages: Lang[] = ["en", "es", "ru", "fr", "de", "zh"];

const certificates = [
  {
    name: "ISO 9001:2015",
    number: "No. 134956",
    issuer: "NQA",
    scope: "Company-wide quality management system covering the design, manufacture and export of windshield wiper blades and related components.",
    verification: "The certificate number and issuing body are published here for buyers and auditors. Copies of the certificate are available from our export sales office on request and can be cross-checked with NQA using the certificate number.",
  },
  {
    name: "CE Certification",
    number: "No. M.2022.206.C79712",
    issuer: "UDEM",
    scope: "CE conformity of Lelion wiper blades supplied to the European market.",
    verification: "The CE certificate number and notified body appear in the table above so buyers can trace the document. Ask our sales team for the certificate scan and verify the number directly with UDEM before placing an order.",
  },
  {
    name: "EN ISO 12100:2010",
    number: "Reference standard",
    issuer: "Applied in product safety assessment",
    scope: "Safety of machinery principles applied to wiper blade design and risk assessment (EN ISO 12100:2010, Safety of machinery — General principles for design — Risk assessment and risk reduction).",
    verification: "This standard is listed as a technical reference used in our product safety assessment. It is not a product certificate number; buyers may request the related technical documentation from our export team.",
  },
];

const faqs = [
  {
    q: "Is Lelion an ISO 9001:2015 certified wiper blade manufacturer?",
    a: "Yes. Ningbo Zhenhai Bowang Autoparts Co., Ltd. operates a quality management system certified to ISO 9001:2015 under certificate No. 134956, issued by NQA. The certificate covers the design, manufacture and export of our wiper blades and related components.",
  },
  {
    q: "What is Lelion's CE certificate number and who issued it?",
    a: "Lelion's CE certificate number is No. M.2022.206.C79712 and it was issued by UDEM. It covers the conformity of our wiper blades supplied to the European market. The number is published above so buyers can verify the document with the issuing body.",
  },
  {
    q: "Can I see copies of the certificates before placing an order?",
    a: "Yes. Send your request through the contact page or email bwb@bwwiper.com. Our export sales office will provide certificate scans, and we can arrange a video call to show the originals and walk through the certificate numbers with your QA team.",
  },
  {
    q: "Does Lelion apply EN ISO 12100:2010 to its products?",
    a: "Yes. EN ISO 12100:2010 (Safety of machinery — General principles for design — Risk assessment and risk reduction) is a reference standard in our product safety assessment. It is a standard reference, not a separate certificate number; the related technical documentation is available on request.",
  },
  {
    q: "How does Lelion's certification relate to product testing?",
    a: "ISO 9001:2015 governs the management system behind every production batch. Product-level evidence comes from our in-house laboratory, including a wipe durability test of 1,500,000 cycles, salt spray testing, ozone testing and low-temperature flexibility testing. See our Quality page for the full test list.",
  },
];

const navLabels: Record<Lang, { home: string; certifications: string; quality: string; factory: string }> = {
  en: { home: "Home", certifications: "Certifications", quality: "Quality", factory: "Factory" },
  es: { home: "Inicio", certifications: "Certificaciones", quality: "Calidad", factory: "Fábrica" },
  ru: { home: "Главная", certifications: "Сертификаты", quality: "Качество", factory: "Завод" },
  fr: { home: "Accueil", certifications: "Certifications", quality: "Qualité", factory: "Usine" },
  de: { home: "Startseite", certifications: "Zertifizierungen", quality: "Qualität", factory: "Fabrik" },
  zh: { home: "首页", certifications: "认证资质", quality: "质量控制", factory: "工厂实力" },
};

export default function CertificationsPage() {
  const params = useParams();
  const urlLang = (params.lang as Lang) || "en";
  const lang: Lang = languages.includes(urlLang) ? urlLang : "en";
  const labels = navLabels[lang];
  const pageUrl = "https://www.lelionautopart.com/" + lang + "/certifications";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ningbo Zhenhai Bowang Autoparts Co., Ltd.",
    "alternateName": "Lelion Autoparts",
    "url": "https://www.lelionautopart.com",
    "description": "Wiper blade manufacturer founded in 2007 with 18+ years of experience, ISO 9001:2015 (No. 134956, NQA) and CE (No. M.2022.206.C79712, UDEM) certified, exporting to 60+ countries.",
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
        "telephone": "+86-18867886795",
        "areaServed": "Worldwide",
        "availableLanguage": ["English", "Spanish", "Russian", "French", "German", "Chinese"],
      },
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
      { "@type": "ListItem", "position": 2, "name": labels.certifications, "item": pageUrl },
    ],
  };

  return (
    <main style={{ fontFamily: "system-ui, -apple-system, sans-serif", color: "#1e293b", backgroundColor: "#ffffff" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero — conclusion first: the exact certificate numbers appear above the fold */}
      <section style={{ padding: "90px 20px", background: "linear-gradient(135deg, #0f172a 0%, #0c4a6e 100%)", color: "white", textAlign: "center" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "var(--h1-about, 48px)", fontWeight: 800, marginBottom: "20px", lineHeight: 1.2 }}>
            Lelion Certifications: ISO 9001:2015 No. 134956 and CE No. M.2022.206.C79712
          </h1>
          <p style={{ fontSize: "18px", color: "#cbd5e1", lineHeight: 1.7 }}>
            Ningbo Zhenhai Bowang Autoparts Co., Ltd. is an ISO 9001:2015 certified wiper blade manufacturer (certificate No. 134956, issued by NQA), and its wiper blades carry CE certification No. M.2022.206.C79712 issued by UDEM. Both certificate numbers are published below so procurement and QA teams can verify them before placing an order.
          </p>
          <div style={{ marginTop: "28px", display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#certificate-table" style={{ display: "inline-block", backgroundColor: "#0284c7", color: "white", padding: "13px 26px", borderRadius: "6px", fontWeight: 700, textDecoration: "none" }}>View the certificate table</a>
            <Link href={"/" + lang + "/contact"} style={{ display: "inline-block", border: "1px solid #38bdf8", color: "white", padding: "13px 26px", borderRadius: "6px", fontWeight: 700, textDecoration: "none" }}>Request certificate copies</Link>
          </div>
        </div>
      </section>

      {/* Key facts strip */}
      <section style={{ backgroundColor: "#f1f5f9", padding: "40px 20px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "flex", justifyContent: "space-around", textAlign: "center", flexWrap: "wrap", gap: "28px" }}>
          <div><span style={{ display: "block", fontSize: "34px", fontWeight: 800, color: "#0284c7" }}>2007</span><span style={{ fontSize: "14px", color: "#475569" }}>Founded · 18+ years of experience</span></div>
          <div><span style={{ display: "block", fontSize: "34px", fontWeight: 800, color: "#0284c7" }}>NQA</span><span style={{ fontSize: "14px", color: "#475569" }}>ISO 9001:2015 issuing body</span></div>
          <div><span style={{ display: "block", fontSize: "34px", fontWeight: 800, color: "#0284c7" }}>UDEM</span><span style={{ fontSize: "14px", color: "#475569" }}>CE issuing body</span></div>
          <div><span style={{ display: "block", fontSize: "34px", fontWeight: 800, color: "#0284c7" }}>60+</span><span style={{ fontSize: "14px", color: "#475569" }}>Export countries</span></div>
        </div>
      </section>

      {/* Certificate table — the core citable evidence block */}
      <section id="certificate-table" style={{ padding: "80px 20px", maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "32px", fontWeight: 800, marginBottom: "16px", color: "#0f172a" }}>Certificate register: names, numbers and issuing bodies</h2>
        <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#475569", marginBottom: "32px", maxWidth: "850px" }}>
          The table below lists every certification and reference standard we publish. Certificate numbers and issuing bodies are stated in full rather than hidden in images, so they can be read by buyers, QA auditors and AI answer engines. For traceable copies, contact our export sales office with the number you wish to check.
        </p>
        <div style={{ overflowX: "auto", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "15px", minWidth: "820px" }}>
            <thead>
              <tr style={{ backgroundColor: "#0f172a", color: "white", textAlign: "left" }}>
                <th style={{ padding: "16px", fontWeight: 700 }}>Certificate / standard</th>
                <th style={{ padding: "16px", fontWeight: 700 }}>Number</th>
                <th style={{ padding: "16px", fontWeight: 700 }}>Issuing body / source</th>
                <th style={{ padding: "16px", fontWeight: 700 }}>Scope of application</th>
                <th style={{ padding: "16px", fontWeight: 700 }}>How to verify</th>
              </tr>
            </thead>
            <tbody>
              {certificates.map((cert, i) => (
                <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "#ffffff" : "#f8fafc", verticalAlign: "top" }}>
                  <td style={{ padding: "16px", borderTop: "1px solid #e2e8f0", fontWeight: 700, color: "#0f172a" }}>{cert.name}</td>
                  <td style={{ padding: "16px", borderTop: "1px solid #e2e8f0", fontWeight: 700, color: "#0284c7", whiteSpace: "nowrap" }}>{cert.number}</td>
                  <td style={{ padding: "16px", borderTop: "1px solid #e2e8f0" }}>{cert.issuer}</td>
                  <td style={{ padding: "16px", borderTop: "1px solid #e2e8f0", lineHeight: 1.6 }}>{cert.scope}</td>
                  <td style={{ padding: "16px", borderTop: "1px solid #e2e8f0", lineHeight: 1.6 }}>{cert.verification}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: "13px", color: "#64748b", marginTop: "18px", lineHeight: 1.6 }}>
          Note: EN ISO 12100:2010 is a technical reference standard applied in product safety assessment, not a product certificate with its own serial number. All figures on this page are published as verifiable company facts; certificate scans and related technical documentation are supplied by our sales office on request.
        </p>
      </section>

      {/* What the certifications mean for buyers */}
      <section style={{ backgroundColor: "#f1f5f9", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "32px", fontWeight: 800, marginBottom: "24px", color: "#0f172a" }}>Why these certificates matter to your purchase</h2>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#475569", marginBottom: "28px" }}>
            A certificate number is only useful when it can be checked. We publish ours in plain text so your procurement team can confirm the issuing body, request the original document and record the number in your supplier file. Founded in 2007, our company has 18+ years of manufacturing experience, 128+ employees, 5+ R&D staff and exports to more than 60 countries — the management system behind these certificates is applied across two plants totaling 20,000+㎡ and a warehouse at Ningbo Port.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))", gap: "24px" }}>
            {[
              { title: "Audit-ready documentation", text: "ISO 9001:2015 No. 134956 (NQA) evidences a documented quality management system. Buyers can request the certificate scan and audit reports through our export office." },
              { title: "European market conformity", text: "CE certificate No. M.2022.206.C79712 (UDEM) supports compliance documentation for wiper blades supplied to European distributors and retailers." },
              { title: "Safety by design", text: "EN ISO 12100:2010 risk-assessment principles inform product design and safety review, alongside laboratory tests such as 1.5M wipe cycles, salt spray, ozone and low-temperature flexibility testing." },
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: "white", padding: "26px", borderRadius: "12px", borderLeft: "4px solid #0284c7", boxShadow: "0 4px 16px rgba(15,23,42,0.06)" }}>
                <h3 style={{ margin: "0 0 10px", fontSize: "19px", color: "#0f172a" }}>{item.title}</h3>
                <p style={{ margin: 0, fontSize: "15px", lineHeight: 1.7, color: "#475569" }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related evidence links */}
      <section style={{ padding: "60px 20px", maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "28px", fontWeight: 800, marginBottom: "20px", color: "#0f172a" }}>Related evidence pages</h2>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <Link href={"/" + lang + "/factory"} style={{ color: "#0284c7", fontWeight: 700, textDecoration: "none" }}>→ {labels.factory}: two plants, 20,000+㎡, 50,000 pcs/day</Link>
          <Link href={"/" + lang + "/quality"} style={{ color: "#0284c7", fontWeight: 700, textDecoration: "none" }}>→ {labels.quality}: 1.5M wipe-cycle durability testing</Link>
        </div>
      </section>

      {/* FAQ — question/answer pairs for buyers and AI engines */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px", borderTop: "1px solid #e2e8f0" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "32px", fontWeight: 800, textAlign: "center", marginBottom: "12px", color: "#0f172a" }}>Certification FAQ</h2>
          <p style={{ textAlign: "center", color: "#64748b", marginBottom: "40px", fontSize: "15px" }}>Direct answers to the questions procurement and QA teams ask before sourcing wiper blades.</p>
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
          <h2 style={{ fontSize: "30px", fontWeight: 800, marginBottom: "18px" }}>Verify our certifications with your own team</h2>
          <p style={{ color: "#cbd5e1", lineHeight: 1.8, marginBottom: "28px" }}>
            Standard terms: MOQ 500 pcs (100 pcs per size), stock ships in 7 days, custom orders in 15–35 days, new tooling in 30–50 days, T/T 30% deposit + 70% before shipment. Factory address: No.399 Minhe Road, Zhenhai District, Ningbo, Zhejiang 315202, China.
          </p>
          <Link href={"/" + lang + "/contact"} style={{ display: "inline-block", backgroundColor: "#0284c7", color: "white", padding: "14px 30px", borderRadius: "6px", fontWeight: 700, textDecoration: "none" }}>Contact our export sales office</Link>
        </div>
      </section>
    </main>
  );
}
