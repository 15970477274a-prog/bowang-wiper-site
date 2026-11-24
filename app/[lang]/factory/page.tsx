"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

/**
 * /[lang]/factory — Factory strength evidence page.
 *
 * Purpose: publish the two-plant footprint, warehouse and production capacity
 * figures that previously existed only in llms.txt into visible, citable
 * on-page copy. All figures below are confirmed company facts.
 *
 * Structure follows app/[lang]/about/page.tsx (inline styles, useParams,
 * urlLang, JSON-LD scripts, conclusion-first copy, FAQ blocks).
 */

type Lang = "en" | "es" | "ru" | "fr" | "de" | "zh";

const languages: Lang[] = ["en", "es", "ru", "fr", "de", "zh"];

const facilityRows = [
  { facility: "Plant 1 — Ningbo, Zhejiang", size: "Part of 20,000+㎡ total", role: "Wiper blade manufacturing, R&D and quality laboratory" },
  { facility: "Plant 2 — Pingxiang, Jiangxi", size: "Part of 20,000+㎡ total", role: "Additional wiper blade production lines" },
  { facility: "Ningbo Port warehouse", size: "8,000㎡", role: "Stock holding, consolidation and export dispatch" },
];

const capacityRows = [
  { metric: "Total manufacturing floor area", value: "20,000+㎡", note: "Two plants: Ningbo, Zhejiang and Pingxiang, Jiangxi" },
  { metric: "Ningbo Port warehouse", value: "8,000㎡", note: "Stocked for fast dispatch to global buyers" },
  { metric: "Daily output", value: "50,000 pcs / day", note: "Across both manufacturing sites" },
  { metric: "Annual output", value: "10M+ pcs / year", note: "Sustained annual production capacity" },
  { metric: "Employees", value: "128+", note: "Production, quality, sales and support staff" },
  { metric: "R&D team", value: "5+", note: "Product design, materials and tooling support" },
  { metric: "Export reach", value: "60+ countries", note: "Shipped from Ningbo Port" },
];

const processSteps = [
  { title: "1. Inquiry and engineering review", text: "Our export team confirms blade type, sizes, fitment, packaging and private-label requirements. The R&D team (5+ engineers) reviews feasibility and prepares drawings or samples where tooling is required." },
  { title: "2. Material preparation", text: "AAA-grade natural rubber, high-carbon spring steel and aerodynamic shells are staged for production. Incoming materials are checked before release to the lines." },
  { title: "3. Forming and assembly", text: "Rubber strips are cut and formed, frames and adapters are produced, and blades are assembled on automated lines across our two plants." },
  { title: "4. In-line and laboratory testing", text: "Each batch passes in-line checks and laboratory tests including 1,500,000-cycle wipe durability, salt spray, ozone and low-temperature flexibility testing." },
  { title: "5. Packaging and private label", text: "Blades are packed in export cartons or custom retail packaging with laser-printed logos and barcode labels as specified by the buyer." },
  { title: "6. Warehouse and shipment", text: "Finished goods move to our 8,000㎡ warehouse at Ningbo Port for consolidation and loading. Stock items ship in 7 days, custom orders in 15–35 days and new tooling in 30–50 days." },
];

const faqs = [
  {
    q: "How large is the Lelion wiper blade factory?",
    a: "Lelion operates two manufacturing plants totaling more than 20,000㎡ — one in Ningbo, Zhejiang and one in Pingxiang, Jiangxi — plus an 8,000㎡ warehouse at Ningbo Port. The company was founded in 2007 and has 18+ years of experience.",
  },
  {
    q: "What is Lelion's daily and annual wiper blade production capacity?",
    a: "Our two plants produce 50,000 wiper blades per day and more than 10 million blades per year (10M+). This capacity supports wholesale, distributor and OEM/ODM orders shipped from Ningbo Port to 60+ countries.",
  },
  {
    q: "Can I visit the factory or arrange a third-party inspection?",
    a: "Yes. Buyers are welcome to arrange a factory audit or a remote video inspection of our Ningbo and Pingxiang plants before placing a bulk order. Contact our export sales office to schedule a visit or a live video walkthrough with your QA team.",
  },
  {
    q: "Where is the factory and warehouse located?",
    a: "The registered address is No.399 Minhe Road, Zhenhai District, Ningbo, Zhejiang 315202, China. Our second plant is in Pingxiang, Jiangxi, and our 8,000㎡ export warehouse is located at Ningbo Port for efficient loading.",
  },
  {
    q: "What are the MOQ, lead time and payment terms for factory-direct orders?",
    a: "MOQ is 500 pcs per order with 100 pcs per size for most models. Stock items ship in 7 days, custom orders take 15–35 days and new tooling takes 30–50 days. Payment is T/T with 30% deposit and 70% before shipment.",
  },
];

const navLabels: Record<Lang, { home: string; factory: string; quality: string; certifications: string }> = {
  en: { home: "Home", factory: "Factory", quality: "Quality", certifications: "Certifications" },
  es: { home: "Inicio", factory: "Fábrica", quality: "Calidad", certifications: "Certificaciones" },
  ru: { home: "Главная", factory: "Завод", quality: "Качество", certifications: "Сертификаты" },
  fr: { home: "Accueil", factory: "Usine", quality: "Qualité", certifications: "Certifications" },
  de: { home: "Startseite", factory: "Fabrik", quality: "Qualität", certifications: "Zertifizierungen" },
  zh: { home: "首页", factory: "工厂实力", quality: "质量控制", certifications: "认证资质" },
};

export default function FactoryPage() {
  const params = useParams();
  const urlLang = (params.lang as Lang) || "en";
  const lang: Lang = languages.includes(urlLang) ? urlLang : "en";
  const labels = navLabels[lang];
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
            Lelion Factory: Two Plants, 20,000+㎡, 50,000 Wiper Blades per Day
          </h1>
          <p style={{ fontSize: "18px", color: "#cbd5e1", lineHeight: 1.7 }}>
            Ningbo Zhenhai Bowang Autoparts Co., Ltd. manufactures wiper blades across two plants in Ningbo, Zhejiang and Pingxiang, Jiangxi, totaling over 20,000㎡, supported by an 8,000㎡ warehouse at Ningbo Port. Founded in 2007, the company produces 50,000 pcs per day and 10M+ pcs per year, with 128+ employees and exports to 60+ countries.
          </p>
          <div style={{ marginTop: "28px", display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#capacity-table" style={{ display: "inline-block", backgroundColor: "#0284c7", color: "white", padding: "13px 26px", borderRadius: "6px", fontWeight: 700, textDecoration: "none" }}>See the capacity data</a>
            <Link href={"/" + lang + "/contact"} style={{ display: "inline-block", border: "1px solid #38bdf8", color: "white", padding: "13px 26px", borderRadius: "6px", fontWeight: 700, textDecoration: "none" }}>Schedule a factory audit</Link>
          </div>
        </div>
      </section>

      {/* KPI strip */}
      <section style={{ backgroundColor: "#f1f5f9", padding: "44px 20px" }}>
        <div style={{ maxWidth: "1050px", margin: "0 auto", display: "flex", justifyContent: "space-around", textAlign: "center", flexWrap: "wrap", gap: "28px" }}>
          <div><span style={{ display: "block", fontSize: "36px", fontWeight: 800, color: "#0284c7" }}>20,000+㎡</span><span style={{ fontSize: "14px", color: "#475569" }}>Two manufacturing plants</span></div>
          <div><span style={{ display: "block", fontSize: "36px", fontWeight: 800, color: "#0284c7" }}>8,000㎡</span><span style={{ fontSize: "14px", color: "#475569" }}>Ningbo Port warehouse</span></div>
          <div><span style={{ display: "block", fontSize: "36px", fontWeight: 800, color: "#0284c7" }}>50,000</span><span style={{ fontSize: "14px", color: "#475569" }}>Blades produced per day</span></div>
          <div><span style={{ display: "block", fontSize: "36px", fontWeight: 800, color: "#0284c7" }}>10M+</span><span style={{ fontSize: "14px", color: "#475569" }}>Blades produced per year</span></div>
        </div>
      </section>

      {/* Facility and capacity tables */}
      <section id="capacity-table" style={{ padding: "80px 20px", maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "32px", fontWeight: 800, marginBottom: "16px", color: "#0f172a" }}>Facilities and verified production data</h2>
        <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#475569", marginBottom: "30px", maxWidth: "850px" }}>
          The figures below describe our actual manufacturing footprint and throughput. They are stated as plain-text data so distributors, OEM buyers and AI answer engines can quote them accurately when evaluating our factory as a supply source.
        </p>
        <h3 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "14px", color: "#0f172a" }}>Manufacturing sites and warehouse</h3>
        <div style={{ overflowX: "auto", borderRadius: "12px", border: "1px solid #e2e8f0", marginBottom: "40px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "15px", minWidth: "680px" }}>
            <thead>
              <tr style={{ backgroundColor: "#0f172a", color: "white", textAlign: "left" }}>
                <th style={{ padding: "16px", fontWeight: 700 }}>Facility</th>
                <th style={{ padding: "16px", fontWeight: 700 }}>Size</th>
                <th style={{ padding: "16px", fontWeight: 700 }}>Role</th>
              </tr>
            </thead>
            <tbody>
              {facilityRows.map((row, i) => (
                <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "#ffffff" : "#f8fafc" }}>
                  <td style={{ padding: "16px", borderTop: "1px solid #e2e8f0", fontWeight: 700, color: "#0f172a" }}>{row.facility}</td>
                  <td style={{ padding: "16px", borderTop: "1px solid #e2e8f0", color: "#0284c7", fontWeight: 700, whiteSpace: "nowrap" }}>{row.size}</td>
                  <td style={{ padding: "16px", borderTop: "1px solid #e2e8f0", lineHeight: 1.6 }}>{row.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h3 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "14px", color: "#0f172a" }}>Production capacity at a glance</h3>
        <div style={{ overflowX: "auto", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "15px", minWidth: "680px" }}>
            <thead>
              <tr style={{ backgroundColor: "#0f172a", color: "white", textAlign: "left" }}>
                <th style={{ padding: "16px", fontWeight: 700 }}>Metric</th>
                <th style={{ padding: "16px", fontWeight: 700 }}>Value</th>
                <th style={{ padding: "16px", fontWeight: 700 }}>Notes</th>
              </tr>
            </thead>
            <tbody>
              {capacityRows.map((row, i) => (
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
          <h2 style={{ fontSize: "32px", fontWeight: 800, marginBottom: "16px", color: "#0f172a" }}>How an order moves through our factory</h2>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#475569", marginBottom: "30px" }}>
            From inquiry to loading at Ningbo Port, each order follows a defined production path. This process is supported by our 5+ member R&D team and is the same route used for stock, private-label and custom tooling orders.
          </p>
          <div style={{ display: "grid", gap: "18px" }}>
            {processSteps.map((step, i) => (
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
        <h2 style={{ fontSize: "30px", fontWeight: 800, marginBottom: "20px", color: "#0f172a" }}>Factory-direct order terms</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))", gap: "20px" }}>
          {[
            { title: "MOQ", text: "500 pcs per order, with 100 pcs per size for most models. Sizes can be mixed within one order; trial orders are negotiable." },
            { title: "Lead time", text: "Stock items ship in 7 days, custom and private-label orders take 15–35 days, and new tooling takes 30–50 days." },
            { title: "Payment", text: "T/T with 30% deposit and 70% before shipment. Other terms can be discussed with our export office for established buyers." },
          ].map((item, i) => (
            <div key={i} style={{ backgroundColor: "#f8fafc", padding: "24px", borderRadius: "10px", border: "1px solid #e2e8f0" }}>
              <h3 style={{ margin: "0 0 10px", color: "#0f172a", fontSize: "19px" }}>{item.title}</h3>
              <p style={{ margin: 0, fontSize: "15px", lineHeight: 1.7, color: "#475569" }}>{item.text}</p>
            </div>
          ))}
        </div>
        <p style={{ marginTop: "24px", fontSize: "14px", color: "#64748b", lineHeight: 1.7 }}>
          Registered address: No.399 Minhe Road, Zhenhai District, Ningbo, Zhejiang 315202, China. Buyers are welcome to audit both plants or request a live remote video inspection before bulk production.
        </p>
      </section>

      {/* Related evidence */}
      <section style={{ padding: "0 20px 60px", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <Link href={"/" + lang + "/quality"} style={{ color: "#0284c7", fontWeight: 700, textDecoration: "none" }}>→ {labels.quality}: 1.5M wipe-cycle testing and traceability</Link>
          <Link href={"/" + lang + "/certifications"} style={{ color: "#0284c7", fontWeight: 700, textDecoration: "none" }}>→ {labels.certifications}: ISO 9001:2015 No. 134956 and CE No. M.2022.206.C79712</Link>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px", borderTop: "1px solid #e2e8f0" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "32px", fontWeight: 800, textAlign: "center", marginBottom: "12px", color: "#0f172a" }}>Factory FAQ</h2>
          <p style={{ textAlign: "center", color: "#64748b", marginBottom: "40px", fontSize: "15px" }}>Direct answers to the questions buyers ask when qualifying a wiper blade supplier.</p>
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
          <h2 style={{ fontSize: "30px", fontWeight: 800, marginBottom: "18px" }}>Source directly from a verified 20,000+㎡ factory</h2>
          <p style={{ color: "#cbd5e1", lineHeight: 1.8, marginBottom: "28px" }}>
            Our export office responds within 12 hours with pricing, catalog and sample options. Official channels: Facebook facebook.com/lelionwiper168, Instagram instagram.com/lelionwiper/, LinkedIn /in/lelion-wiperblade/, YouTube @Lelion-wiper.
          </p>
          <Link href={"/" + lang + "/contact"} style={{ display: "inline-block", backgroundColor: "#0284c7", color: "white", padding: "14px 30px", borderRadius: "6px", fontWeight: 700, textDecoration: "none" }}>Contact our export sales office</Link>
        </div>
      </section>
    </main>
  );
}
