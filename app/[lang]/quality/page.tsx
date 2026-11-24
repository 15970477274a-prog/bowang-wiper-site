"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

/**
 * /[lang]/quality — Quality control evidence page.
 *
 * Purpose: move laboratory test data that previously existed only in llms.txt
 * into visible, citable on-page copy: 1,500,000 wipe cycles, salt spray,
 * ozone and low-temperature flexibility tests, plus traceability.
 * All figures below are confirmed company facts.
 *
 * Structure follows app/[lang]/about/page.tsx (inline styles, useParams,
 * urlLang, JSON-LD scripts, conclusion-first copy, FAQ blocks).
 */

type Lang = "en" | "es" | "ru" | "fr" | "de" | "zh";

const languages: Lang[] = ["en", "es", "ru", "fr", "de", "zh"];

const testRows = [
  {
    test: "Wipe durability test",
    method: "Continuous wiping cycle test on production blades",
    criterion: "1,500,000 wipe cycles (1.5M)",
    purpose: "Confirms long-term wiping performance and resistance to wear of the rubber lip and blade structure.",
  },
  {
    test: "Salt spray test",
    method: "Exposed metal components in a controlled salt-fog chamber",
    criterion: "Corrosion resistance check",
    purpose: "Verifies that frames, springs and adapters resist corrosion in coastal and winter-road-salt environments.",
  },
  {
    test: "Ozone test",
    method: "Rubber strips exposed to an ozone-enriched atmosphere",
    criterion: "Ozone-resistance check",
    purpose: "Checks that rubber does not crack or degrade prematurely under atmospheric ozone exposure.",
  },
  {
    test: "Low-temperature flexibility test",
    method: "Blades conditioned and flexed at low temperatures",
    criterion: "Low-temperature flexibility check",
    purpose: "Ensures the rubber lip stays flexible and maintains glass contact in winter conditions.",
  },
];

const qcSteps = [
  { title: "1. Incoming material inspection", text: "AAA-grade natural rubber, spring steel, adapters and packaging materials are checked before they enter production. Material lots are recorded so that any later issue can be traced back to its source." },
  { title: "2. In-process checks", text: "Line operators and QC inspectors sample blades during cutting, forming and assembly. Fitment, dimensions, adapter tension and appearance are checked against the approved sample and specification." },
  { title: "3. Laboratory verification", text: "Samples from each production batch are subjected to laboratory testing, including the 1.5M-cycle wipe durability test, salt spray, ozone and low-temperature flexibility testing described in the table above." },
  { title: "4. Final random inspection", text: "Before packing, finished blades undergo a random visual and functional inspection. Only batches that pass are released to the 8,000㎡ Ningbo Port warehouse for shipment." },
  { title: "5. Pre-shipment evidence for buyers", text: "We support live remote video inspection and can provide recorded inspection videos through your dedicated sales representative. Buyers arranging a factory audit can review the same records on site." },
];

const faqs = [
  {
    q: "How many wipe cycles are Lelion wiper blades tested for?",
    a: "Lelion wiper blades are tested to 1,500,000 wipe cycles (1.5M) in our durability test. This figure is published on this page as a verifiable product claim and is supported by laboratory test records available from our export sales office on request.",
  },
  {
    q: "What quality tests does Lelion run besides durability?",
    a: "In addition to the 1,500,000-cycle wipe durability test, our laboratory runs salt spray testing for corrosion resistance, ozone testing for rubber ageing, and low-temperature flexibility testing for winter performance. These tests are applied to production batches as part of our documented quality control process.",
  },
  {
    q: "Can I inspect the goods before shipment?",
    a: "Yes. Before shipment we support live remote video inspection or provide recorded product inspection videos through your dedicated sales representative. Factory audits at our Ningbo and Pingxiang plants can also be arranged through the export office.",
  },
  {
    q: "Is Lelion's quality system certified?",
    a: "Yes. The manufacturing facility operates under an ISO 9001:2015 quality management system, certificate No. 134956 issued by NQA. Wiper blades supplied to Europe carry CE certification No. M.2022.206.C79712 issued by UDEM. Certificate numbers are published on our Certifications page.",
  },
  {
    q: "How does Lelion trace a quality issue back to a production batch?",
    a: "Incoming material lots are recorded when they enter production, in-process and laboratory checks are documented per batch, and finished goods are packed with export carton marking. This chain lets our QA team connect a reported issue to a material lot, production date and shipment, and respond with corrective action.",
  },
];

const navLabels: Record<Lang, { home: string; quality: string; factory: string; certifications: string }> = {
  en: { home: "Home", quality: "Quality", factory: "Factory", certifications: "Certifications" },
  es: { home: "Inicio", quality: "Calidad", factory: "Fábrica", certifications: "Certificaciones" },
  ru: { home: "Главная", quality: "Качество", factory: "Завод", certifications: "Сертификаты" },
  fr: { home: "Accueil", quality: "Qualité", factory: "Usine", certifications: "Certifications" },
  de: { home: "Startseite", quality: "Qualität", factory: "Fabrik", certifications: "Zertifizierungen" },
  zh: { home: "首页", quality: "质量控制", factory: "工厂实力", certifications: "认证资质" },
};

export default function QualityPage() {
  const params = useParams();
  const urlLang = (params.lang as Lang) || "en";
  const lang: Lang = languages.includes(urlLang) ? urlLang : "en";
  const labels = navLabels[lang];
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
            Lelion Quality Control: 1,500,000 Wipe-Cycle Testing and Traceable Batch Inspection
          </h1>
          <p style={{ fontSize: "18px", color: "#cbd5e1", lineHeight: 1.7 }}>
            Every Lelion wiper blade is backed by a documented quality process. Our laboratory tests blades to 1,500,000 wipe cycles (1.5M) and additionally runs salt spray, ozone and low-temperature flexibility tests. The manufacturing system holds ISO 9001:2015 certificate No. 134956 (NQA), and buyers can inspect goods by live video before shipment.
          </p>
          <div style={{ marginTop: "28px", display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#test-table" style={{ display: "inline-block", backgroundColor: "#0284c7", color: "white", padding: "13px 26px", borderRadius: "6px", fontWeight: 700, textDecoration: "none" }}>View the test table</a>
            <Link href={"/" + lang + "/contact"} style={{ display: "inline-block", border: "1px solid #38bdf8", color: "white", padding: "13px 26px", borderRadius: "6px", fontWeight: 700, textDecoration: "none" }}>Request inspection evidence</Link>
          </div>
        </div>
      </section>

      {/* Test data strip */}
      <section style={{ backgroundColor: "#f1f5f9", padding: "44px 20px" }}>
        <div style={{ maxWidth: "1050px", margin: "0 auto", display: "flex", justifyContent: "space-around", textAlign: "center", flexWrap: "wrap", gap: "28px" }}>
          <div><span style={{ display: "block", fontSize: "36px", fontWeight: 800, color: "#0284c7" }}>1.5M</span><span style={{ fontSize: "14px", color: "#475569" }}>Wipe cycles durability test</span></div>
          <div><span style={{ display: "block", fontSize: "36px", fontWeight: 800, color: "#0284c7" }}>4</span><span style={{ fontSize: "14px", color: "#475569" }}>Documented test categories</span></div>
          <div><span style={{ display: "block", fontSize: "36px", fontWeight: 800, color: "#0284c7" }}>2007</span><span style={{ fontSize: "14px", color: "#475569" }}>Founded · 18+ years of QC experience</span></div>
          <div><span style={{ display: "block", fontSize: "36px", fontWeight: 800, color: "#0284c7" }}>NQA</span><span style={{ fontSize: "14px", color: "#475569" }}>ISO 9001:2015 issuing body</span></div>
        </div>
      </section>

      {/* Test table */}
      <section id="test-table" style={{ padding: "80px 20px", maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "32px", fontWeight: 800, marginBottom: "16px", color: "#0f172a" }}>Our laboratory test program</h2>
        <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#475569", marginBottom: "30px", maxWidth: "850px" }}>
          The table below lists the tests we run on wiper blades and rubber strips. Each entry is stated in plain text with its purpose, so procurement and QA teams can quote the data accurately and request the supporting records from our sales office.
        </p>
        <div style={{ overflowX: "auto", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "15px", minWidth: "860px" }}>
            <thead>
              <tr style={{ backgroundColor: "#0f172a", color: "white", textAlign: "left" }}>
                <th style={{ padding: "16px", fontWeight: 700 }}>Test</th>
                <th style={{ padding: "16px", fontWeight: 700 }}>Method summary</th>
                <th style={{ padding: "16px", fontWeight: 700 }}>Criterion / result published</th>
                <th style={{ padding: "16px", fontWeight: 700 }}>What it proves</th>
              </tr>
            </thead>
            <tbody>
              {testRows.map((row, i) => (
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
          Test records and sample reports can be supplied by our export sales office. Durability is stated as 1,500,000 wipe cycles (1.5M), the verified figure used throughout our product documentation.
        </p>
      </section>

      {/* QC process */}
      <section style={{ backgroundColor: "#f1f5f9", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "32px", fontWeight: 800, marginBottom: "16px", color: "#0f172a" }}>Quality control from raw material to shipment</h2>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#475569", marginBottom: "30px" }}>
            Quality is checked at each stage rather than only at the end of the line. The steps below apply to stock items, private-label orders and custom tooling orders produced across our two plants.
          </p>
          <div style={{ display: "grid", gap: "18px" }}>
            {qcSteps.map((step, i) => (
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
        <h2 style={{ fontSize: "32px", fontWeight: 800, marginBottom: "20px", color: "#0f172a" }}>Traceability and buyer-accessible evidence</h2>
        <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#475569", marginBottom: "24px", maxWidth: "850px" }}>
          Traceability means you can connect a blade in a carton to the material lot and production batch behind it. Incoming lots are recorded, in-process and laboratory checks are documented per batch, and export cartons are marked for shipment identification. If a quality question arises, our team can work back through that chain and issue a corrective response.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))", gap: "20px" }}>
          {[
            { title: "Remote video inspection", text: "Before shipment, we support live remote video inspection or provide recorded product inspection videos through your dedicated sales representative." },
            { title: "Factory audits welcome", text: "Quality records, laboratory equipment and production lines can be reviewed during a scheduled audit at our Ningbo or Pingxiang plant." },
            { title: "Certified management system", text: "ISO 9001:2015 No. 134956 (NQA) governs the documented procedures behind inspection, test and traceability activities." },
          ].map((item, i) => (
            <div key={i} style={{ backgroundColor: "#f8fafc", padding: "24px", borderRadius: "10px", border: "1px solid #e2e8f0" }}>
              <h3 style={{ margin: "0 0 10px", color: "#0f172a", fontSize: "19px" }}>{item.title}</h3>
              <p style={{ margin: 0, fontSize: "15px", lineHeight: 1.7, color: "#475569" }}>{item.text}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "26px", display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <Link href={"/" + lang + "/certifications"} style={{ color: "#0284c7", fontWeight: 700, textDecoration: "none" }}>→ {labels.certifications}: ISO and CE certificate numbers</Link>
          <Link href={"/" + lang + "/factory"} style={{ color: "#0284c7", fontWeight: 700, textDecoration: "none" }}>→ {labels.factory}: 20,000+㎡ plants and 50,000 pcs/day output</Link>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px", borderTop: "1px solid #e2e8f0" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "32px", fontWeight: 800, textAlign: "center", marginBottom: "12px", color: "#0f172a" }}>Quality FAQ</h2>
          <p style={{ textAlign: "center", color: "#64748b", marginBottom: "40px", fontSize: "15px" }}>Direct answers to the test and inspection questions B2B buyers ask.</p>
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
          <h2 style={{ fontSize: "30px", fontWeight: 800, marginBottom: "18px" }}>Ask for test records before your next order</h2>
          <p style={{ color: "#cbd5e1", lineHeight: 1.8, marginBottom: "28px" }}>
            Standard terms: MOQ 500 pcs (100 pcs per size), stock ships in 7 days, custom orders in 15–35 days, new tooling in 30–50 days, T/T 30% deposit + 70% before shipment. Factory: No.399 Minhe Road, Zhenhai District, Ningbo, Zhejiang 315202, China.
          </p>
          <Link href={"/" + lang + "/contact"} style={{ display: "inline-block", backgroundColor: "#0284c7", color: "white", padding: "14px 30px", borderRadius: "6px", fontWeight: 700, textDecoration: "none" }}>Contact our export sales office</Link>
        </div>
      </section>
    </main>
  );
}
