"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { certificationsI18n, CertificationsLang } from "../../data/certificationsI18n";

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
 * All visible copy is localized via app/data/certificationsI18n.ts.
 */

const languages: CertificationsLang[] = ["en", "es", "ru", "fr", "de", "zh"];

export default function CertificationsPage() {
  const params = useParams();
  const urlLang = (params.lang as CertificationsLang) || "en";
  const lang: CertificationsLang = languages.includes(urlLang) ? urlLang : "en";
  const c = certificationsI18n[lang];
  const labels = c.navLabels;
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
        "telephone": "+8618867886795",
        "areaServed": "Worldwide",
        "availableLanguage": ["English", "Spanish", "Russian", "French", "German", "Chinese"],
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": c.faqs.map((item) => ({
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
            {c.heroTitle}
          </h1>
          <p style={{ fontSize: "18px", color: "#cbd5e1", lineHeight: 1.7 }}>
            {c.heroSub}
          </p>
          <div style={{ marginTop: "28px", display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#certificate-table" style={{ display: "inline-block", backgroundColor: "#0284c7", color: "white", padding: "13px 26px", borderRadius: "6px", fontWeight: 700, textDecoration: "none" }}>{c.heroBtn1}</a>
            <Link href={"/" + lang + "/contact"} style={{ display: "inline-block", border: "1px solid #38bdf8", color: "white", padding: "13px 26px", borderRadius: "6px", fontWeight: 700, textDecoration: "none" }}>{c.heroBtn2}</Link>
          </div>
        </div>
      </section>

      {/* Key facts strip */}
      <section style={{ backgroundColor: "#f1f5f9", padding: "40px 20px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "flex", justifyContent: "space-around", textAlign: "center", flexWrap: "wrap", gap: "28px" }}>
          <div><span style={{ display: "block", fontSize: "34px", fontWeight: 800, color: "#0284c7" }}>2007</span><span style={{ fontSize: "14px", color: "#475569" }}>{c.kpi1Label}</span></div>
          <div><span style={{ display: "block", fontSize: "34px", fontWeight: 800, color: "#0284c7" }}>NQA</span><span style={{ fontSize: "14px", color: "#475569" }}>{c.kpi2Label}</span></div>
          <div><span style={{ display: "block", fontSize: "34px", fontWeight: 800, color: "#0284c7" }}>UDEM</span><span style={{ fontSize: "14px", color: "#475569" }}>{c.kpi3Label}</span></div>
          <div><span style={{ display: "block", fontSize: "34px", fontWeight: 800, color: "#0284c7" }}>60+</span><span style={{ fontSize: "14px", color: "#475569" }}>{c.kpi4Label}</span></div>
        </div>
      </section>

      {/* Certificate table — the core citable evidence block */}
      <section id="certificate-table" style={{ padding: "80px 20px", maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "32px", fontWeight: 800, marginBottom: "16px", color: "#0f172a" }}>{c.certTableTitle}</h2>
        <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#475569", marginBottom: "32px", maxWidth: "850px" }}>
          {c.certTableIntro}
        </p>
        <div style={{ overflowX: "auto", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "15px", minWidth: "820px" }}>
            <thead>
              <tr style={{ backgroundColor: "#0f172a", color: "white", textAlign: "left" }}>
                <th style={{ padding: "16px", fontWeight: 700 }}>{c.thCertificate}</th>
                <th style={{ padding: "16px", fontWeight: 700 }}>{c.thNumber}</th>
                <th style={{ padding: "16px", fontWeight: 700 }}>{c.thIssuer}</th>
                <th style={{ padding: "16px", fontWeight: 700 }}>{c.thScope}</th>
                <th style={{ padding: "16px", fontWeight: 700 }}>{c.thVerify}</th>
              </tr>
            </thead>
            <tbody>
              {c.certificates.map((cert, i) => (
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
          {c.certNote}
        </p>
      </section>

      {/* What the certifications mean for buyers */}
      <section style={{ backgroundColor: "#f1f5f9", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "32px", fontWeight: 800, marginBottom: "24px", color: "#0f172a" }}>{c.buyersTitle}</h2>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#475569", marginBottom: "28px" }}>
            {c.buyersIntro}
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))", gap: "24px" }}>
            {c.benefitCards.map((item, i) => (
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
        <h2 style={{ fontSize: "28px", fontWeight: 800, marginBottom: "20px", color: "#0f172a" }}>{c.relatedTitle}</h2>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <Link href={"/" + lang + "/factory"} style={{ color: "#0284c7", fontWeight: 700, textDecoration: "none" }}>→ {labels.factory}: {c.relatedFactory}</Link>
          <Link href={"/" + lang + "/quality"} style={{ color: "#0284c7", fontWeight: 700, textDecoration: "none" }}>→ {labels.quality}: {c.relatedQuality}</Link>
        </div>
      </section>

      {/* FAQ — question/answer pairs for buyers and AI engines */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px", borderTop: "1px solid #e2e8f0" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "32px", fontWeight: 800, textAlign: "center", marginBottom: "12px", color: "#0f172a" }}>{c.faqTitle}</h2>
          <p style={{ textAlign: "center", color: "#64748b", marginBottom: "40px", fontSize: "15px" }}>{c.faqIntro}</p>
          {c.faqs.map((item, i) => (
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
          <h2 style={{ fontSize: "30px", fontWeight: 800, marginBottom: "18px" }}>{c.ctaTitle}</h2>
          <p style={{ color: "#cbd5e1", lineHeight: 1.8, marginBottom: "28px" }}>
            {c.ctaText}
          </p>
          <Link href={"/" + lang + "/contact"} style={{ display: "inline-block", backgroundColor: "#0284c7", color: "white", padding: "14px 30px", borderRadius: "6px", fontWeight: 700, textDecoration: "none" }}>{c.ctaBtn}</Link>
        </div>
      </section>
    </main>
  );
}
