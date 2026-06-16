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
        throw new Error("Failed to send inquiry. Please try again.");
      }
    } catch (err: any) {
      setStatus({ submitted: false, loading: false, error: err.message || "An error occurred." });
    }
  };

  const t = translations[lang];

  const faqItems = [
    { q: t.faqQ1, a: t.faqA1 },
    { q: t.faqQ2, a: t.faqA2 },
    { q: t.faqQ3, a: t.faqA3 },
    { q: t.faqQ4, a: t.faqA4 },
    { q: t.faqQ5, a: t.faqA5 },
    { q: t.faqQ6, a: t.faqA6 }
  ];

  return (
    <main style={{ fontFamily: "system-ui, -apple-system, sans-serif", color: "#1e293b", backgroundColor: "#fcfcfc" }}>
      
      {/* Navigation Header */}
      <header style={{
        backgroundColor: "#0f172a", color: "#ffffff", position: "sticky", top: 0, zIndex: 50,
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)"
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "15px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "20px", fontWeight: "bold", letterSpacing: "0.05em", color: "#38bdf8" }}>BOWANG WIPER</span>
            <span style={{ fontSize: "10px", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "1px" }}>Autoparts Manufacturer</span>
          </div>
          <nav style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <Link href="/" style={{ color: "#38bdf8", textDecoration: "none", fontSize: "14px", fontWeight: 600 }}>{t.navHome}</Link>
            <Link href="/products" style={{ color: "#f8fafc", textDecoration: "none", fontSize: "14px", fontWeight: 500 }}>{t.navProducts}</Link>
            <Link href="/about" style={{ color: "#f8fafc", textDecoration: "none", fontSize: "14px", fontWeight: 500 }}>{t.navAboutUs}</Link>
            <a href="/Catalog.pdf" target="_blank" style={{ color: "#38bdf8", textDecoration: "none", fontSize: "14px", fontWeight: 600 }}>{t.navCatalog}</a>
            <Link href="/contact" style={{ backgroundColor: "#0284c7", color: "#ffffff", padding: "8px 16px", borderRadius: "4px", textDecoration: "none", fontSize: "14px", fontWeight: "bold" }}>{t.navGetQuote}</Link>
            <select value={lang} onChange={(e) => handleLangChange(e.target.value as Locale)} style={{ backgroundColor: "#1e293b", color: "#ffffff", border: "1px solid #475569", padding: "6px 12px", borderRadius: "4px", cursor: "pointer", fontSize: "13px" }}>
              <option value="en">English</option><option value="es">Español</option><option value="ru">Русский</option><option value="fr">Français</option><option value="de">Deutsch</option>
            </select>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" style={{ padding: "120px 20px", textAlign: "center", background: "linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80') center/cover no-repeat", color: "white" }}>
        <div style={{ maxWidth: "850px", margin: "0 auto" }}>
          <span style={{ backgroundColor: "#0284c7", padding: "6px 16px", borderRadius: "20px", fontSize: "12px", fontWeight: "bold", textTransform: "uppercase", marginBottom: "25px", display: "inline-block" }}>{t.heroTag}</span>
          <h1 style={{ fontSize: "52px", fontWeight: 800, marginBottom: "25px", lineHeight: 1.1 }}>{t.heroTitle}</h1>
          <p style={{ fontSize: "20px", color: "#cbd5e1", marginBottom: "45px", lineHeight: 1.6 }}>{t.heroSubtitle}</p>
          <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
            <Link href="/contact" className="btn-primary" style={{ padding: "16px 40px", fontSize: "18px", backgroundColor: "#0284c7", color: "white", textDecoration: "none", borderRadius: "8px", fontWeight: "bold" }}>{t.heroInquireBtn}</Link>
            <Link href="/products" className="btn-secondary" style={{ padding: "16px 40px", fontSize: "18px", backgroundColor: "white", color: "#0f172a", textDecoration: "none", borderRadius: "8px", fontWeight: "bold" }}>View All Products</Link>
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section style={{ padding: "100px 20px", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2 style={{ fontSize: "36px", fontWeight: 800, color: "#0f172a" }}>Featured Categories</h2>
          <div style={{ height: "4px", width: "60px", backgroundColor: "#0284c7", margin: "15px auto" }}></div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "30px" }}>
          {allProducts.slice(0, 3).map(p => (
            <div key={p.id} style={{ backgroundColor: "white", borderRadius: "12px", overflow: "hidden", border: "1px solid #e2e8f0", textAlign: "center" }}>
               <div style={{ height: "250px", backgroundColor: "#f8fafc", display: "flex", alignItems: "center", justifyContent: "center" }}>
                 <img src={p.image} alt={p.name} style={{ width: "80%", height: "auto", mixBlendMode: "multiply" }} />
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

      {/* FAQ Section - NEW */}
      <section style={{ padding: "100px 20px", backgroundColor: "#f8fafc" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ fontSize: "36px", fontWeight: 800, color: "#0f172a" }}>{t.faqTitle}</h2>
            <div style={{ height: "4px", width: "60px", backgroundColor: "#0284c7", margin: "15px auto" }}></div>
            <p style={{ color: "#64748b" }}>{t.faqSubtitle}</p>
          </div>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            {faqItems.map((item, idx) => (
              <div key={idx} style={{ 
                backgroundColor: "#ffffff", 
                borderRadius: "12px", 
                border: "1px solid #e2e8f0", 
                overflow: "hidden",
                boxShadow: openFaq === idx ? "0 10px 15px -3px rgba(0,0,0,0.05)" : "none"
              }}>
                <button 
                  onClick={() => toggleFaq(idx)}
                  style={{ 
                    width: "100%", 
                    padding: "20px 30px", 
                    display: "flex", 
                    justifyContent: "space-between", 
                    alignItems: "center",
                    backgroundColor: "transparent",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left"
                  }}
                >
                  <span style={{ fontSize: "18px", fontWeight: 700, color: openFaq === idx ? "#0284c7" : "#0f172a" }}>{item.q}</span>
                  <span style={{ fontSize: "24px", color: "#94a3b8", transform: openFaq === idx ? "rotate(45deg)" : "rotate(0)", transition: "transform 0.3s" }}>+</span>
                </button>
                <div style={{ 
                  maxHeight: openFaq === idx ? "300px" : "0", 
                  overflow: "hidden", 
                  transition: "all 0.3s ease-out",
                  padding: openFaq === idx ? "0 30px 25px 30px" : "0 30px"
                }}>
                  <p style={{ fontSize: "16px", color: "#64748b", lineHeight: 1.6, margin: 0 }}>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="contact" style={{ padding: "100px 20px", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", backgroundColor: "#f8fafc", padding: "60px", borderRadius: "16px", border: "1px solid #e2e8f0" }}>
          <div style={{ textAlign: "center", marginBottom: "45px" }}>
            <h2 style={{ fontSize: "32px", fontWeight: 800, color: "#0f172a" }}>{t.contactTitle}</h2>
            <p style={{ color: "#64748b" }}>{t.contactSubtitle}</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "25px", marginBottom: "25px" }}>
              <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder={t.contactNameLabel} style={{ width: "100%", padding: "14px", border: "1px solid #e2e8f0", borderRadius: "8px" }} />
              <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder={t.contactEmailLabel} style={{ width: "100%", padding: "14px", border: "1px solid #e2e8f0", borderRadius: "8px" }} />
            </div>
            <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder={t.contactCompanyLabel} style={{ width: "100%", padding: "14px", border: "1px solid #e2e8f0", borderRadius: "8px", marginBottom: "25px" }} />
            <select name="product" value={formData.product} onChange={handleChange} style={{ width: "100%", padding: "14px", border: "1px solid #e2e8f0", borderRadius: "8px", marginBottom: "25px" }}>
              <option value="Universal Wiper Blades">Universal</option>
              <option value="Specific Fit Wiper Blades">Specific Fit</option>
              <option value="Multifunction Wiper Blades">Multifunction</option>
            </select>
            <textarea name="message" required rows={4} value={formData.message} onChange={handleChange} placeholder={t.contactMessagePlaceholder} style={{ width: "100%", padding: "14px", border: "1px solid #e2e8f0", borderRadius: "8px", marginBottom: "35px" }} />
            {status.submitted && <div style={{ backgroundColor: "#ecfdf5", color: "#065f46", padding: "15px", borderRadius: "8px", marginBottom: "25px" }}><strong>{t.contactSuccessMsg}</strong></div>}
            <button type="submit" disabled={status.loading} style={{ width: "100%", backgroundColor: "#0284c7", color: "white", padding: "16px", borderRadius: "8px", fontSize: "16px", fontWeight: "bold", cursor: "pointer" }}>{status.loading ? t.contactSubmittingBtn : t.contactSubmitBtn}</button>
          </form>
        </div>
      </section>

      <footer style={{ backgroundColor: "#0f172a", color: "#94a3b8", padding: "80px 20px 40px 20px", textAlign: "center" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h3 style={{ color: "white", marginBottom: "20px" }}>BOWANG WIPER</h3>
          <p style={{ maxWidth: "600px", margin: "0 auto 40px", fontSize: "14px" }}>{t.footerDesc}</p>
          <div style={{ borderTop: "1px solid #1e293b", paddingTop: "30px", fontSize: "12px" }}>
            &copy; 2026 Ningbo Zhenhai Bowang Autoparts Co., Ltd. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a href="https://wa.me/8618867886795" target="_blank" rel="noopener noreferrer" style={{ position: "fixed", bottom: "30px", right: "30px", width: "60px", height: "60px", backgroundColor: "#25d366", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)", zIndex: 9999 }}>
        <svg width="30" height="30" viewBox="0 0 448 512" fill="white"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.1 0-65.6-8.9-93.3-25.7l-6.7-4.1-69.5 18.3 18.7-67.7-4.5-7.1C51.3 322.2 42.1 289 42.1 254c0-100.1 81.3-181.5 181.6-181.5 48.5 0 94.1 18.9 128.4 53.3 34.3 34.4 53.2 80 53.2 128.4 0 100.2-81.4 181.5-181.4 181.5zm113.8-154.2c-6.2-3.1-36.8-18.1-42.5-20.1-5.7-2-9.8-3.1-13.9 3.1-4.1 6.2-15.8 20.1-19.4 24.1-3.6 4-7.2 4.5-13.4 1.5-6.2-3.1-26.2-9.6-49.9-27.5-18.4-16.4-30.8-36.7-34.4-42.8-3.6-6.2-.4-9.6 2.7-12.7 2.8-2.8 6.2-7.2 9.3-10.8 3.1-3.6 4.1-6.2 6.2-10.3 2-4.1 1-7.7-.5-10.8-1.5-3.1-13.9-33.5-19.1-45.8-5-12.2-10.2-10.5-13.9-10.6-3.6-.1-7.7-.1-11.8-.1-4.1 0-10.8 1.5-16.5 7.7-5.7 6.2-21.6 21.1-21.6 51.5 0 30.4 22.1 59.8 25.2 64 3.1 4.1 43.5 33.2 105.3 59.8 14.7 6.3 26.2 10.1 35.1 13 14.8 2.8 28.2 2.4 38.9 1c11.9-1.5 36.8-4.8 42-9.5 5.1-4.6 5.1-8.7 3.6-10.8-1.5-2.1-5.7-3.1-11.8-6.2z" /></svg>
      </a>

    </main>
  );
}
