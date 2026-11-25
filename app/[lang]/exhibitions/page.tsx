"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { exhibitionsI18n, ExhibitionsLang } from "../../data/exhibitionsI18n";

/**
 * /[lang]/exhibitions — Trade shows and customer visits page.
 *
 * Six-language version. Section order, inline styles, ids and layouts are kept
 * identical to the original page; every piece of visible copy comes from
 * app/data/exhibitionsI18n.ts. Verified facts (numbers, certificate IDs,
 * address, email, phone and social handles) are literal and unchanged in all
 * locales. organizationSchema.description stays in English by design.
 */

const languages: ExhibitionsLang[] = ["en", "es", "ru", "fr", "de", "zh"];

export default function ExhibitionsPage() {
  const params = useParams();
  const urlLang = (params.lang as ExhibitionsLang) || "en";
  const lang: ExhibitionsLang = languages.includes(urlLang) ? urlLang : "en";
  const c = exhibitionsI18n[lang];
  const labels = c.navLabels;
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
            {c.heroTitle}
          </h1>
          <p style={{ fontSize: "18px", color: "#cbd5e1", lineHeight: 1.7 }}>
            {c.heroSub}
          </p>
          <div style={{ marginTop: "28px", display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#meeting-options" style={{ display: "inline-block", backgroundColor: "#0284c7", color: "white", padding: "13px 26px", borderRadius: "6px", fontWeight: 700, textDecoration: "none" }}>{c.heroBtn1}</a>
            <Link href={"/" + lang + "/contact"} style={{ display: "inline-block", border: "1px solid #38bdf8", color: "white", padding: "13px 26px", borderRadius: "6px", fontWeight: 700, textDecoration: "none" }}>{c.heroBtn2}</Link>
          </div>
        </div>
      </section>

      {/* Trust strip — verifiable company facts, no event claims */}
      <section style={{ backgroundColor: "#f1f5f9", padding: "44px 20px" }}>
        <div style={{ maxWidth: "1050px", margin: "0 auto", display: "flex", justifyContent: "space-around", textAlign: "center", flexWrap: "wrap", gap: "28px" }}>
          <div><span style={{ display: "block", fontSize: "36px", fontWeight: 800, color: "#0284c7" }}>2007</span><span style={{ fontSize: "14px", color: "#475569" }}>{c.kpi1Label}</span></div>
          <div><span style={{ display: "block", fontSize: "36px", fontWeight: 800, color: "#0284c7" }}>60+</span><span style={{ fontSize: "14px", color: "#475569" }}>{c.kpi2Label}</span></div>
          <div><span style={{ display: "block", fontSize: "36px", fontWeight: 800, color: "#0284c7" }}>20,000+㎡</span><span style={{ fontSize: "14px", color: "#475569" }}>{c.kpi3Label}</span></div>
          <div><span style={{ display: "block", fontSize: "36px", fontWeight: 800, color: "#0284c7" }}>12h</span><span style={{ fontSize: "14px", color: "#475569" }}>{c.kpi4Label}</span></div>
        </div>
      </section>

      {/* Meeting options */}
      <section id="meeting-options" style={{ padding: "80px 20px", maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "32px", fontWeight: 800, marginBottom: "16px", color: "#0f172a" }}>{c.meetingTitle}</h2>
        <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#475569", marginBottom: "30px", maxWidth: "850px" }}>
          {c.meetingIntro}
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(290px, 100%), 1fr))", gap: "24px" }}>
          {c.visitOptions.map((item, i) => (
            <div key={i} style={{ backgroundColor: "#f8fafc", padding: "26px", borderRadius: "12px", borderLeft: "4px solid #0284c7", border: "1px solid #e2e8f0" }}>
              <h3 style={{ margin: "0 0 10px", fontSize: "19px", color: "#0f172a" }}>{item.title}</h3>
              <p style={{ margin: 0, fontSize: "15px", lineHeight: 1.7, color: "#475569" }}>{item.text}</p>
            </div>
          ))}
        </div>
        <p style={{ fontSize: "13px", color: "#64748b", marginTop: "20px", lineHeight: 1.6 }}>
          {c.meetingNote}
        </p>
      </section>

      {/* What to discuss */}
      <section style={{ backgroundColor: "#f1f5f9", padding: "80px 20px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "32px", fontWeight: 800, marginBottom: "16px", color: "#0f172a" }}>{c.topicsTitle}</h2>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#475569", marginBottom: "30px" }}>
            {c.topicsIntro}
          </p>
          <div style={{ display: "grid", gap: "18px" }}>
            {c.meetingTopics.map((item, i) => (
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
        <h2 style={{ fontSize: "32px", fontWeight: 800, marginBottom: "20px", color: "#0f172a" }}>{c.visitTitle}</h2>
        <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#475569", marginBottom: "20px" }}>
          {c.visitIntro}
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))", gap: "20px" }}>
          {c.visitSteps.map((item, i) => (
            <div key={i} style={{ backgroundColor: "#f8fafc", padding: "24px", borderRadius: "10px", border: "1px solid #e2e8f0" }}>
              <h3 style={{ margin: "0 0 10px", color: "#0f172a", fontSize: "19px" }}>{item.title}</h3>
              <p style={{ margin: 0, fontSize: "15px", lineHeight: 1.7, color: "#475569" }}>{item.text}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "26px", display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <Link href={"/" + lang + "/factory"} style={{ color: "#0284c7", fontWeight: 700, textDecoration: "none" }}>→ {labels.factory}: {c.factoryLinkTail}</Link>
        </div>
      </section>

      {/* Stay in touch */}
      <section style={{ backgroundColor: "#f1f5f9", padding: "70px 20px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "30px", fontWeight: 800, marginBottom: "20px", color: "#0f172a" }}>{c.channelsTitle}</h2>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#475569", marginBottom: "20px" }}>
            {c.channelsIntro}
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "12px" }}>
            <li><a href="https://www.facebook.com/lelionwiper168" target="_blank" rel="noopener noreferrer" style={{ color: "#0284c7", fontWeight: 700, textDecoration: "none" }}>{c.socialFacebook}</a></li>
            <li><a href="https://www.instagram.com/lelionwiper/" target="_blank" rel="noopener noreferrer" style={{ color: "#0284c7", fontWeight: 700, textDecoration: "none" }}>{c.socialInstagram}</a></li>
            <li><a href="https://www.linkedin.com/in/lelion-wiperblade/" target="_blank" rel="noopener noreferrer" style={{ color: "#0284c7", fontWeight: 700, textDecoration: "none" }}>{c.socialLinkedIn}</a></li>
            <li><a href="https://www.youtube.com/@Lelion-wiper" target="_blank" rel="noopener noreferrer" style={{ color: "#0284c7", fontWeight: 700, textDecoration: "none" }}>{c.socialYouTube}</a></li>
          </ul>
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
          <Link href={"/" + lang + "/contact"} style={{ display: "inline-block", backgroundColor: "#0284c7", color: "white", padding: "14px 30px", borderRadius: "6px", fontWeight: 700, textDecoration: "none" }}>{labels.contact}</Link>
        </div>
      </section>
    </main>
  );
}
