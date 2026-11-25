"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { factoryI18n, FactoryLang } from "../../data/factoryI18n";

/**
 * /[lang]/factory — Factory strength evidence page.
 *
 * Purpose: publish the two-plant footprint, warehouse and production capacity
 * figures that previously existed only in llms.txt into visible, citable
 * on-page copy. All figures are confirmed company facts and identical across
 * all six languages (see app/data/factoryI18n.ts).
 */

const languages: FactoryLang[] = ["en", "es", "ru", "fr", "de", "zh"];

export default function FactoryPage() {
  const params = useParams();
  const urlLang = (params.lang as FactoryLang) || "en";
  const lang: FactoryLang = languages.includes(urlLang) ? urlLang : "en";
  const c = factoryI18n[lang];
  const labels = c.navLabels;
  const pageUrl = "https://www.lelionautopart.com/" + lang + "/factory";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ningbo Zhenhai Bowang Autoparts Co., Ltd.",
    "alternateName": "Lelion Autoparts",
    "url": "https://www.lelionautopart.com",
    "description": "Wiper blade manufacturer founded in 2007 with two plants totaling 20,000+㎡ in Ningbo and Pingxiang, an 8,000㎡ Ningbo Port warehouse, 50,000 pcs daily output and 10M+ annual capacity.",
    "foundingDate": "2007",
    "numberOfEmployees": "128+",
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
      { "@type": "ListItem", "position": 2, "name": labels.factory, "item": pageUrl },
    ],
  };

  return (
    <main style={{ fontFamily: "system-ui, -apple-system, sans-serif", color: "#1e293b", backgroundColor: "#ffffff" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero — conclusion first with all headline capacity figures */}
      <section style={{ padding: "90px 20px", background: "linear-gradient(rgba(15, 23, 42, 0.88), rgba(12, 74, 110, 0.88)), url('https://sc02.alicdn.com/kf/H2533c3c14bc74cd3afe116f60a8357f4U.jpg') center/cover no-repeat", color: "white", textAlign: "center" }}>
        <div style={{ maxWidth: "920px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "var(--h1-about, 48px)", fontWeight: 800, marginBottom: "20px", lineHeight: 1.2 }}>
            {c.heroTitle}
          </h1>
          <p style={{ fontSize: "18px", color: "#cbd5e1", lineHeight: 1.7 }}>
            {c.heroSub}
          </p>
          <div style={{ marginTop: "28px", display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#capacity-table" style={{ display: "inline-block", backgroundColor: "#0284c7", color: "white", padding: "13px 26px", borderRadius: "6px", fontWeight: 700, textDecoration: "none" }}>{c.heroBtn1}</a>
            <Link href={"/" + lang + "/contact"} style={{ display: "inline-block", border: "1px solid #38bdf8", color: "white", padding: "13px 26px", borderRadius: "6px", fontWeight: 700, textDecoration: "none" }}>{c.heroBtn2}</Link>
          </div>
        </div>
      </section>

      {/* KPI strip */}
      <section style={{ backgroundColor: "#f1f5f9", padding: "44px 20px" }}>
        <div style={{ maxWidth: "1050px", margin: "0 auto", display: "flex", justifyContent: "space-around", textAlign: "center", flexWrap: "wrap", gap: "28px" }}>
          <div><span style={{ display: "block", fontSize: "36px", fontWeight: 800, color: "#0284c7" }}>20,000+㎡</span><span style={{ fontSize: "14px", color: "#475569" }}>{c.kpi1Label}</span></div>
          <div><span style={{ display: "block", fontSize: "36px", fontWeight: 800, color: "#0284c7" }}>8,000㎡</span><span style={{ fontSize: "14px", color: "#475569" }}>{c.kpi2Label}</span></div>
          <div><span style={{ display: "block", fontSize: "36px", fontWeight: 800, color: "#0284c7" }}>50,000</span><span style={{ fontSize: "14px", color: "#475569" }}>{c.kpi3Label}</span></div>
          <div><span style={{ display: "block", fontSize: "36px", fontWeight: 800, color: "#0284c7" }}>10M+</span><span style={{ fontSize: "14px", color: "#475569" }}>{c.kpi4Label}</span></div>
        </div>
      </section>

      {/* Facility and capacity tables */}
      <section id="capacity-table" style={{ padding: "80px 20px", maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "32px", fontWeight: 800, marginBottom: "16px", color: "#0f172a" }}>{c.dataTitle}</h2>
        <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#475569", marginBottom: "30px", maxWidth: "850px" }}>
          {c.dataIntro}
        </p>
        <h3 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "14px", color: "#0f172a" }}>{c.facilityTitle}</h3>
        <div style={{ overflowX: "auto", borderRadius: "12px", border: "1px solid #e2e8f0", marginBottom: "40px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "15px", minWidth: "680px" }}>
            <thead>
              <tr style={{ backgroundColor: "#0f172a", color: "white", textAlign: "left" }}>
                <th style={{ padding: "16px", fontWeight: 700 }}>{c.thFacility}</th>
                <th style={{ padding: "16px", fontWeight: 700 }}>{c.thSize}</th>
                <th style={{ padding: "16px", fontWeight: 700 }}>{c.thRole}</th>
              </tr>
            </thead>
            <tbody>
              {c.facilityRows.map((row, i) => (
                <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "#ffffff" : "#f8fafc" }}>
                  <td style={{ padding: "16px", borderTop: "1px solid #e2e8f0", fontWeight: 700, color: "#0f172a" }}>{row.facility}</td>
                  <td style={{ padding: "16px", borderTop: "1px solid #e2e8f0", color: "#0284c7", fontWeight: 700, whiteSpace: "nowrap" }}>{row.size}</td>
                  <td style={{ padding: "16px", borderTop: "1px solid #e2e8f0", lineHeight: 1.6 }}>{row.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h3 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "14px", color: "#0f172a" }}>{c.capacityTitle}</h3>
        <div style={{ overflowX: "auto", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "15px", minWidth: "680px" }}>
            <thead>
              <tr style={{ backgroundColor: "#0f172a", color: "white", textAlign: "left" }}>
                <th style={{ padding: "16px", fontWeight: 700 }}>{c.thMetric}</th>
                <th style={{ padding: "16px", fontWeight: 700 }}>{c.thValue}</th>
                <th style={{ padding: "16px", fontWeight: 700 }}>{c.thNotes}</th>
              </tr>
            </thead>
            <tbody>
              {c.capacityRows.map((row, i) => (
                <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "#ffffff" : "#f8fafc" }}>
                  <td style={{ padding: "16px", borderTop: "1px solid #e2e8f0", fontWeight: 700, color: "#0f172a" }}>{row.metric}</td>
                  <td style={{ padding: "16px", borderTop: "1px solid #e2e8f0", color: "#0284c7", fontWeight: 700, whiteSpace: "nowrap" }}>{row.value}</td>
                  <td style={{ padding: "16px", borderTop: "1px solid #e2e8f0", lineHeight: 1.6 }}>{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Production workflow */}
      <section style={{ backgroundColor: "#f1f5f9", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "32px", fontWeight: 800, marginBottom: "16px", color: "#0f172a" }}>{c.workflowTitle}</h2>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#475569", marginBottom: "30px" }}>
            {c.workflowIntro}
          </p>
          <div style={{ display: "grid", gap: "18px" }}>
            {c.processSteps.map((step, i) => (
              <div key={i} style={{ backgroundColor: "white", padding: "22px 26px", borderRadius: "10px", borderLeft: "4px solid #0284c7" }}>
                <h3 style={{ margin: "0 0 8px", fontSize: "18px", color: "#0f172a" }}>{step.title}</h3>
                <p style={{ margin: 0, fontSize: "15px", lineHeight: 1.7, color: "#475569" }}>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Buying terms */}
      <section style={{ padding: "70px 20px", maxWidth: "1000px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "30px", fontWeight: 800, marginBottom: "20px", color: "#0f172a" }}>{c.termsTitle}</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))", gap: "20px" }}>
          {c.terms.map((item, i) => (
            <div key={i} style={{ backgroundColor: "#f8fafc", padding: "24px", borderRadius: "10px", border: "1px solid #e2e8f0" }}>
              <h3 style={{ margin: "0 0 10px", color: "#0f172a", fontSize: "19px" }}>{item.title}</h3>
              <p style={{ margin: 0, fontSize: "15px", lineHeight: 1.7, color: "#475569" }}>{item.text}</p>
            </div>
          ))}
        </div>
        <p style={{ marginTop: "24px", fontSize: "14px", color: "#64748b", lineHeight: 1.7 }}>
          {c.addressNote}
        </p>
      </section>

      {/* Related evidence */}
      <section style={{ padding: "0 20px 60px", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <Link href={"/" + lang + "/quality"} style={{ color: "#0284c7", fontWeight: 700, textDecoration: "none" }}>→ {labels.quality}: {c.relatedQuality}</Link>
          <Link href={"/" + lang + "/certifications"} style={{ color: "#0284c7", fontWeight: 700, textDecoration: "none" }}>→ {labels.certifications}: {c.relatedCerts}</Link>
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
