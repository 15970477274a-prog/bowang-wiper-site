"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { qualityI18n, QualityLang } from "../../data/qualityI18n";

/**
 * /[lang]/quality — Quality control evidence page.
 *
 * Purpose: move laboratory test data that previously existed only in llms.txt
 * into visible, citable on-page copy: 1,500,000 wipe cycles, salt spray,
 * ozone and low-temperature flexibility tests, plus traceability.
 * All figures are confirmed company facts and identical across
 * all six languages (see app/data/qualityI18n.ts).
 *
 * Structure follows app/[lang]/about/page.tsx (inline styles, useParams,
 * urlLang, JSON-LD scripts, conclusion-first copy, FAQ blocks).
 */

const languages: QualityLang[] = ["en", "es", "ru", "fr", "de", "zh"];

export default function QualityPage() {
  const params = useParams();
  const urlLang = (params.lang as QualityLang) || "en";
  const lang: QualityLang = languages.includes(urlLang) ? urlLang : "en";
  const c = qualityI18n[lang];
  const labels = c.navLabels;
  const pageUrl = "https://www.lelionautopart.com/" + lang + "/quality";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ningbo Zhenhai Bowang Autoparts Co., Ltd.",
    "alternateName": "Lelion Autoparts",
    "url": "https://www.lelionautopart.com",
    "description": "Wiper blade manufacturer founded in 2007 with ISO 9001:2015 (No. 134956, NQA) and CE (No. M.2022.206.C79712, UDEM) certified products; blades tested to 1,500,000 wipe cycles plus salt spray, ozone and low-temperature flexibility tests.",
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
      { "@type": "ListItem", "position": 2, "name": labels.quality, "item": pageUrl },
    ],
  };

  return (
    <main style={{ fontFamily: "system-ui, -apple-system, sans-serif", color: "#1e293b", backgroundColor: "#ffffff" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero — conclusion first: headline test data visible immediately */}
      <section style={{ padding: "90px 20px", background: "linear-gradient(135deg, #0f172a 0%, #0c4a6e 100%)", color: "white", textAlign: "center" }}>
        <div style={{ maxWidth: "920px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "var(--h1-about, 48px)", fontWeight: 800, marginBottom: "20px", lineHeight: 1.2 }}>
            {c.heroTitle}
          </h1>
          <p style={{ fontSize: "18px", color: "#cbd5e1", lineHeight: 1.7 }}>
            {c.heroSub}
          </p>
          <div style={{ marginTop: "28px", display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#test-table" style={{ display: "inline-block", backgroundColor: "#0284c7", color: "white", padding: "13px 26px", borderRadius: "6px", fontWeight: 700, textDecoration: "none" }}>{c.heroBtn1}</a>
            <Link href={"/" + lang + "/contact"} style={{ display: "inline-block", border: "1px solid #38bdf8", color: "white", padding: "13px 26px", borderRadius: "6px", fontWeight: 700, textDecoration: "none" }}>{c.heroBtn2}</Link>
          </div>
        </div>
      </section>

      {/* Test data strip */}
      <section style={{ backgroundColor: "#f1f5f9", padding: "44px 20px" }}>
        <div style={{ maxWidth: "1050px", margin: "0 auto", display: "flex", justifyContent: "space-around", textAlign: "center", flexWrap: "wrap", gap: "28px" }}>
          <div><span style={{ display: "block", fontSize: "36px", fontWeight: 800, color: "#0284c7" }}>1.5M</span><span style={{ fontSize: "14px", color: "#475569" }}>{c.kpi1Label}</span></div>
          <div><span style={{ display: "block", fontSize: "36px", fontWeight: 800, color: "#0284c7" }}>4</span><span style={{ fontSize: "14px", color: "#475569" }}>{c.kpi2Label}</span></div>
          <div><span style={{ display: "block", fontSize: "36px", fontWeight: 800, color: "#0284c7" }}>2007</span><span style={{ fontSize: "14px", color: "#475569" }}>{c.kpi3Label}</span></div>
          <div><span style={{ display: "block", fontSize: "36px", fontWeight: 800, color: "#0284c7" }}>NQA</span><span style={{ fontSize: "14px", color: "#475569" }}>{c.kpi4Label}</span></div>
        </div>
      </section>

      {/* Test table */}
      <section id="test-table" style={{ padding: "80px 20px", maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "32px", fontWeight: 800, marginBottom: "16px", color: "#0f172a" }}>{c.testTableTitle}</h2>
        <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#475569", marginBottom: "30px", maxWidth: "850px" }}>
          {c.testTableIntro}
        </p>
        <div style={{ overflowX: "auto", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "15px", minWidth: "860px" }}>
            <thead>
              <tr style={{ backgroundColor: "#0f172a", color: "white", textAlign: "left" }}>
                <th style={{ padding: "16px", fontWeight: 700 }}>{c.thTest}</th>
                <th style={{ padding: "16px", fontWeight: 700 }}>{c.thMethod}</th>
                <th style={{ padding: "16px", fontWeight: 700 }}>{c.thCriterion}</th>
                <th style={{ padding: "16px", fontWeight: 700 }}>{c.thProves}</th>
              </tr>
            </thead>
            <tbody>
              {c.testRows.map((row, i) => (
                <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "#ffffff" : "#f8fafc", verticalAlign: "top" }}>
                  <td style={{ padding: "16px", borderTop: "1px solid #e2e8f0", fontWeight: 700, color: "#0f172a" }}>{row.test}</td>
                  <td style={{ padding: "16px", borderTop: "1px solid #e2e8f0", lineHeight: 1.6 }}>{row.method}</td>
                  <td style={{ padding: "16px", borderTop: "1px solid #e2e8f0", color: "#0284c7", fontWeight: 700, lineHeight: 1.6 }}>{row.criterion}</td>
                  <td style={{ padding: "16px", borderTop: "1px solid #e2e8f0", lineHeight: 1.6 }}>{row.purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: "13px", color: "#64748b", marginTop: "18px", lineHeight: 1.6 }}>
          {c.testFootnote}
        </p>
      </section>

      {/* QC process */}
      <section style={{ backgroundColor: "#f1f5f9", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "32px", fontWeight: 800, marginBottom: "16px", color: "#0f172a" }}>{c.qcTitle}</h2>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#475569", marginBottom: "30px" }}>
            {c.qcIntro}
          </p>
          <div style={{ display: "grid", gap: "18px" }}>
            {c.qcSteps.map((step, i) => (
              <div key={i} style={{ backgroundColor: "white", padding: "22px 26px", borderRadius: "10px", borderLeft: "4px solid #0284c7" }}>
                <h3 style={{ margin: "0 0 8px", fontSize: "18px", color: "#0f172a" }}>{step.title}</h3>
                <p style={{ margin: 0, fontSize: "15px", lineHeight: 1.7, color: "#475569" }}>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Traceability and buyer evidence */}
      <section style={{ padding: "80px 20px", maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "32px", fontWeight: 800, marginBottom: "20px", color: "#0f172a" }}>{c.traceTitle}</h2>
        <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#475569", marginBottom: "24px", maxWidth: "850px" }}>
          {c.traceIntro}
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))", gap: "20px" }}>
          {c.evidenceCards.map((item, i) => (
            <div key={i} style={{ backgroundColor: "#f8fafc", padding: "24px", borderRadius: "10px", border: "1px solid #e2e8f0" }}>
              <h3 style={{ margin: "0 0 10px", color: "#0f172a", fontSize: "19px" }}>{item.title}</h3>
              <p style={{ margin: 0, fontSize: "15px", lineHeight: 1.7, color: "#475569" }}>{item.text}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "26px", display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <Link href={"/" + lang + "/certifications"} style={{ color: "#0284c7", fontWeight: 700, textDecoration: "none" }}>→ {labels.certifications}: {c.relatedCertsText}</Link>
          <Link href={"/" + lang + "/factory"} style={{ color: "#0284c7", fontWeight: 700, textDecoration: "none" }}>→ {labels.factory}: {c.relatedFactoryText}</Link>
        </div>
      </section>

      {/* FAQ */}
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
