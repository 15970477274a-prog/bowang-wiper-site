"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { translations, Locale } from "./translations";
import { allProducts } from "./data/products";

export default function Home() {
  const [lang, setLang] = useState<Locale>("en");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    product: "Universal Wiper Blades",
    message: ""
  });
  const [status, setStatus] = useState({
    submitted: false,
    loading: false,
    error: ""
  });

  useEffect(() => {
    const savedLang = localStorage.getItem("lelion_lang") as Locale;
    if (savedLang && ["en", "es", "ru", "fr", "de"].includes(savedLang)) {
      setLang(savedLang);
    }
  }, []);

  const handleLangChange = (newLang: Locale) => {
    setLang(newLang);
    localStorage.setItem("lelion_lang", newLang);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ submitted: false, loading: true, error: "" });
    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus({ submitted: true, loading: false, error: "" });
        setFormData({ name: "", email: "", company: "", product: "Universal Wiper Blades", message: "" });
      } else {
        throw new Error("Failed to send inquiry.");
      }
    } catch (err: any) {
      setStatus({ submitted: false, loading: false, error: err.message });
    }
  };

  const t = translations[lang];

  // FAQPage structured data for AI engines (AEO)
  const en = translations["en"];
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": en.faqQ1, "acceptedAnswer": { "@type": "Answer", "text": en.faqA1 } },
      { "@type": "Question", "name": en.faqQ2, "acceptedAnswer": { "@type": "Answer", "text": en.faqA2 } },
      { "@type": "Question", "name": en.faqQ3, "acceptedAnswer": { "@type": "Answer", "text": en.faqA3 } },
      { "@type": "Question", "name": en.faqQ4, "acceptedAnswer": { "@type": "Answer", "text": en.faqA4 } },
      { "@type": "Question", "name": en.faqQ5, "acceptedAnswer": { "@type": "Answer", "text": en.faqA5 } },
      { "@type": "Question", "name": en.faqQ6, "acceptedAnswer": { "@type": "Answer", "text": en.faqA6 } },
    ]
  };

  // BreadcrumbList schema for homepage
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.lelionautopart.com/" }
    ]
  };

  const faqItems = [
    { q: t.faqQ1, a: t.faqA1 },
    { q: t.faqQ2, a: t.faqA2 },
    { q: t.faqQ3, a: t.faqA3 },
    { q: t.faqQ4, a: t.faqA4 },
    { q: t.faqQ5, a: t.faqA5 },
    { q: t.faqQ6, a: t.faqA6 }
  ];

  return (
    <main>
      
      {/* FAQPage JSON-LD for AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <header className="header">
        <div className="header-inner">
          <div className="header-brand">
            <span className="header-title">BOWANG WIPER</span>
            <span className="header-subtitle">Autoparts Manufacturer</span>
          </div>
          <nav className="nav">
            <Link href="/" className="nav-link active">{t.navHome}</Link>
            <Link href="/products" className="nav-link">{t.navProducts}</Link>
            <Link href="/blog" className="nav-link">Blog</Link>
            <Link href="/about" className="nav-link">{t.navAboutUs}</Link>
            <a href="/Catalog.pdf" target="_blank" className="nav-link" style={{color:"var(--accent-glow)",fontWeight:600}}>{t.navCatalog}</a>
            <Link href="/contact" className="nav-cta">{t.navGetQuote}</Link>
            <select value={lang} onChange={(e) => handleLangChange(e.target.value as Locale)} className="lang-select">
              <option value="en">English</option><option value="es">Español</option><option value="ru">Русский</option><option value="fr">Français</option><option value="de">Deutsch</option>
            </select>
          </nav>
        </div>
      </header>

      <section id="hero" className="hero-overlay">
        <div className="container-narrow">
          <span style={{ backgroundColor: "#0284c7", padding: "6px 16px", borderRadius: "20px", fontSize: "12px", fontWeight: "bold", textTransform: "uppercase", marginBottom: "25px", display: "inline-block" }}>{t.heroTag}</span>
          <h1 style={{ fontSize: "52px", fontWeight: 800, marginBottom: "25px", lineHeight: 1.1 }}>{t.heroTitle}</h1>
          <p style={{ fontSize: "20px", color: "#cbd5e1", marginBottom: "45px", lineHeight: 1.6 }}>{t.heroSubtitle}</p>
          <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
            <Link href="/contact" className="btn-primary" style={{ padding: "16px 40px", fontSize: "18px", textDecoration: "none", backgroundColor: "#0284c7", color: "white", borderRadius: "8px", fontWeight: "bold" }}>{t.heroInquireBtn}</Link>
            <Link href="/products" className="btn-secondary" style={{ padding: "16px 40px", fontSize: "18px", backgroundColor: "white", color: "#0f172a", textDecoration: "none", borderRadius: "8px", fontWeight: "bold" }}>View All Products</Link>
          </div>
        </div>
      </section>

      <section style={{ padding: "100px 20px", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2 style={{ fontSize: "36px", fontWeight: 800, color: "#0f172a" }}>Featured Categories</h2>
          <div style={{ height: "4px", width: "60px", backgroundColor: "#0284c7", margin: "15px auto" }}></div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "30px" }}>
          {allProducts.slice(0, 3).map(p => (
            <div key={p.id} style={{ backgroundColor: "white", borderRadius: "12px", overflow: "hidden", border: "1px solid #e2e8f0", textAlign: "center" }}>
               <div style={{ height: "300px", backgroundColor: "#f8fafc", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
                 <img src={p.image} alt={p.name} style={{ maxWidth: "100%", maxHeight: "100%", width: "auto", height: "auto", objectFit: "contain" }} />
               </div>
               <div style={{ padding: "30px" }}>
                 <h3 style={{ fontSize: "22px", fontWeight: 700, marginBottom: "15px" }}>{p.name}</h3>
                 <p style={{ color: "#64748b", fontSize: "15px", marginBottom: "25px", height: "45px", overflow: "hidden" }}>{p.desc}</p>
                 <Link href={`/products/${p.id}`} style={{ color: "#0284c7", fontWeight: "bold", textDecoration: "none", fontSize: "15px" }}>Explore Detailed Specs →</Link>
               </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "60px" }}>
           <Link href="/products" style={{ backgroundColor: "#0f172a", color: "white", padding: "15px 40px", borderRadius: "8px", textDecoration: "none", fontWeight: "bold" }}>Enter Full Product Center</Link>
        </div>
      </section>

      <section style={{ padding: "100px 20px", backgroundColor: "#f8fafc" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ fontSize: "36px", fontWeight: 800, color: "#0f172a" }}>{t.faqTitle}</h2>
            <div style={{ height: "4px", width: "60px", backgroundColor: "#0284c7", margin: "15px auto" }}></div>
            <p style={{ color: "#64748b" }}>{t.faqSubtitle}</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            {faqItems.map((item, idx) => (
              <div key={idx} style={{ backgroundColor: "#ffffff", borderRadius: "12px", border: "1px solid #e2e8f0", overflow: "hidden" }}>
                <button onClick={() => toggleFaq(idx)} style={{ width: "100%", padding: "20px 30px", display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "transparent", border: "none", cursor: "pointer", textAlign: "left" }}>
                  <span style={{ fontSize: "18px", fontWeight: 700, color: openFaq === idx ? "#0284c7" : "#0f172a" }}>{item.q}</span>
                  <span style={{ fontSize: "24px", color: "#94a3b8", transform: openFaq === idx ? "rotate(45deg)" : "rotate(0)", transition: "transform 0.3s" }}>+</span>
                </button>
                <div style={{ maxHeight: openFaq === idx ? "300px" : "0", overflow: "hidden", transition: "all 0.3s ease-out", padding: openFaq === idx ? "0 30px 25px 30px" : "0 30px" }}>
                  <p style={{lineHeight:1.6,margin:0}}>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section section-white">
        <div className="form-card">
          <div className="text-center mb-40">
            <h2 className="section-title">{t.contactTitle}</h2>
            <p className="text-muted">{t.contactSubtitle}</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder={t.contactNameLabel} className="form-input" />
              <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder={t.contactEmailLabel} className="form-input" />
            </div>
            <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder={t.contactCompanyLabel} className="form-input" style={{marginBottom:"25px"}} />
            <select name="product" value={formData.product} onChange={handleChange} className="form-select" style={{marginBottom:"25px"}}>
              <option value="Universal Wiper Blades">Universal</option><option value="Specific Fit Wiper Blades">Specific Fit</option><option value="Multifunction Wiper Blades">Multifunction</option>
            </select>
            <textarea name="message" required rows={4} value={formData.message} onChange={handleChange} placeholder={t.contactMessagePlaceholder} className="form-textarea" style={{marginBottom:"35px"}} />
            {status.submitted && <div className="form-success"><strong>{t.contactSuccessMsg}</strong></div>}
            <button type="submit" disabled={status.loading} className="form-submit">{status.loading ? t.contactSubmittingBtn : t.contactSubmitBtn}</button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <h3 className="footer-brand">BOWANG WIPER</h3>
          <p className="footer-desc">{t.footerDesc}</p>
          <div className="footer-divider">&copy; 2026 Ningbo Zhenhai Bowang Autoparts Co., Ltd. All rights reserved.</div>
        </div>
      </footer>
      <a href="https://wa.me/8618867886795" target="_blank" rel="noopener noreferrer" className="whatsapp-float">
        <svg width="30" height="30" viewBox="0 0 448 512" fill="white"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.1 0-65.6-8.9-93.3-25.7l-6.7-4.1-69.5 18.3 18.7-67.7-4.5-7.1C51.3 322.2 42.1 289 42.1 254c0-100.1 81.3-181.5 181.6-181.5 48.5 0 94.1 18.9 128.4 53.3 34.3 34.4 53.2 80 53.2 128.4 0 100.2-81.4 181.5-181.4 181.5zm113.8-154.2c-6.2-3.1-36.8-18.1-42.5-20.1-5.7-2-9.8-3.1-13.9 3.1-4.1 6.2-15.8 20.1-19.4 24.1-3.6 4-7.2 4.5-13.4 1.5-6.2-3.1-26.2-9.6-49.9-27.5-18.4-16.4-30.8-36.7-34.4-42.8-3.6-6.2-.4-9.6 2.7-12.7 2.8-2.8 6.2-7.2 9.3-10.8 3.1-3.6 4.1-6.2 6.2-10.3 2-4.1 1-7.7-.5-10.8-1.5-3.1-13.9-33.5-19.1-45.8-5-12.2-10.2-10.5-13.9-10.6-3.6-.1-7.7-.1-11.8-.1-4.1 0-10.8 1.5-16.5 7.7-5.7 6.2-21.6 21.1-21.6 51.5 0 30.4 22.1 59.8 25.2 64 3.1 4.1 43.5 33.2 105.3 59.8 14.7 6.3 26.2 10.1 35.1 13 14.8 2.8 28.2 2.4 38.9 1c11.9-1.5 36.8-4.8 42-9.5 5.1-4.6 5.1-8.7 3.6-10.8-1.5-2.1-5.7-3.1-11.8-6.2z" /></svg>
      </a>
    </main>
  );
}




