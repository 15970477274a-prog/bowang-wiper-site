"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { translations, Locale } from "./translations";
import { allProducts } from "./data/products";

export default function Home() {
  const [lang, setLang] = useState<Locale>("en");
  const [activeCategory, setActiveCategory] = useState("All");
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

  // Load language preference
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

  const filteredProducts = activeCategory === "All" 
    ? allProducts 
    : allProducts.filter(p => p.category === activeCategory);

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
            <Link href="/" style={{ color: "#f8fafc", textDecoration: "none", fontSize: "14px", fontWeight: 500 }}>{t.navHome}</Link>
            <a href="#products" style={{ color: "#f8fafc", textDecoration: "none", fontSize: "14px", fontWeight: 500 }}>{t.navProducts}</a>
            <a href="#about" style={{ color: "#f8fafc", textDecoration: "none", fontSize: "14px", fontWeight: 500 }}>{t.navAboutUs}</a>
            <a href="/Catalog.pdf" target="_blank" style={{ color: "#38bdf8", textDecoration: "none", fontSize: "14px", fontWeight: 600 }}>{t.navCatalog}</a>
            <a href="#contact" style={{ backgroundColor: "#0284c7", color: "#ffffff", padding: "8px 16px", borderRadius: "4px", textDecoration: "none", fontSize: "14px", fontWeight: "bold" }}>{t.navGetQuote}</a>
            <select value={lang} onChange={(e) => handleLangChange(e.target.value as Locale)} style={{ backgroundColor: "#1e293b", color: "#ffffff", border: "1px solid #475569", padding: "6px 12px", borderRadius: "4px", cursor: "pointer", fontSize: "13px" }}>
              <option value="en">English</option><option value="es">Español</option><option value="ru">Русский</option><option value="fr">Français</option><option value="de">Deutsch</option>
            </select>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" style={{ padding: "120px 20px", textAlign: "center", background: "linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.9)), url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80') center/cover no-repeat", color: "white" }}>
        <div style={{ maxWidth: "850px", margin: "0 auto" }}>
          <span style={{ backgroundColor: "#0284c7", padding: "6px 16px", borderRadius: "20px", fontSize: "12px", fontWeight: "bold", textTransform: "uppercase", marginBottom: "25px", display: "inline-block" }}>{t.heroTag}</span>
          <h1 style={{ fontSize: "52px", fontWeight: 800, marginBottom: "25px", lineHeight: 1.1 }}>{t.heroTitle}</h1>
          <p style={{ fontSize: "20px", color: "#cbd5e1", marginBottom: "45px", lineHeight: 1.6 }}>{t.heroSubtitle}</p>
          <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
            <a href="#contact" className="btn-primary" style={{ padding: "16px 40px", fontSize: "18px" }}>{t.heroInquireBtn}</a>
            <a href="/Catalog.pdf" target="_blank" className="btn-secondary" style={{ padding: "16px 40px", fontSize: "18px", backgroundColor: "white", color: "#0f172a" }}>{t.navCatalog}</a>
          </div>
        </div>
      </section>

      {/* Product Center Section */}
      <section id="products" style={{ padding: "100px 20px", maxWidth: "1250px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2 style={{ fontSize: "36px", fontWeight: 800, color: "#0f172a", marginBottom: "15px" }}>{t.productsTitle}</h2>
          <div style={{ height: "4px", width: "60px", backgroundColor: "#0284c7", margin: "0 auto 20px" }}></div>
          <p style={{ color: "#64748b", maxWidth: "700px", margin: "0 auto" }}>{t.productsSubtitle}</p>
        </div>

        <div style={{ display: "flex", gap: "40px", flexDirection: "row", flexWrap: "wrap" }}>
          <aside style={{ flex: "1 1 250px", borderRight: "1px solid #e2e8f0", paddingRight: "20px" }}>
            <h3 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "20px" }}>Categories</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {["All", "Universal", "Specific Fit", "Multifunction"].map(cat => (
                <li key={cat} onClick={() => setActiveCategory(cat)} style={{
                  padding: "12px 15px", cursor: "pointer", borderRadius: "6px", marginBottom: "8px",
                  transition: "all 0.2s", fontSize: "15px", fontWeight: activeCategory === cat ? 700 : 500,
                  backgroundColor: activeCategory === cat ? "#eff6ff" : "transparent",
                  color: activeCategory === cat ? "#2563eb" : "#475569",
                  borderLeft: activeCategory === cat ? "4px solid #2563eb" : "4px solid transparent"
                }}>
                  {cat} Wipers
                </li>
              ))}
            </ul>
          </aside>

          <div style={{ flex: "3 1 600px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "30px" }}>
              {filteredProducts.map(p => (
                <div key={p.id} style={{
                  backgroundColor: "white", borderRadius: "12px", overflow: "hidden", border: "1px solid #e2e8f0",
                  display: "flex", flexDirection: "column"
                }}>
                  <Link href={`/products/${p.id}`} style={{ height: "220px", backgroundColor: "#f1f5f9", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", cursor: "pointer" }}>
                     <span style={{ position: "absolute", top: "15px", left: "15px", backgroundColor: "#f0fdf4", color: "#16a34a", fontSize: "10px", fontWeight: "bold", padding: "4px 10px", borderRadius: "4px" }}>{p.tag}</span>
                     <img src={p.image} alt={p.name} style={{ width: "80%", height: "auto", mixBlendMode: "multiply" }} />
                  </Link>
                  <div style={{ padding: "20px", flexGrow: 1, display: "flex", flexDirection: "column" }}>
                    <h3 style={{ fontSize: "19px", fontWeight: 700, marginBottom: "8px" }}>
                      <Link href={`/products/${p.id}`} style={{ color: "#0f172a", textDecoration: "none" }}>{p.name}</Link>
                    </h3>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
                      <span style={{ color: "#ef4444", fontWeight: 800, fontSize: "18px" }}>{p.price}</span>
                      <span style={{ fontSize: "11px", color: "#64748b" }}>MOQ: {p.moq}</span>
                    </div>
                    <div style={{ display: "flex", gap: "10px", marginTop: "auto" }}>
                      <a href="#contact" onClick={() => setFormData({...formData, product: p.name})} style={{ flex: 1, textAlign: "center", backgroundColor: "#0284c7", color: "white", padding: "10px", borderRadius: "6px", fontSize: "13px", fontWeight: "bold", textDecoration: "none" }}>Inquiry</a>
                      <Link href={`/products/${p.id}`} style={{ flex: 1, textAlign: "center", border: "1px solid #cbd5e1", color: "#475569", padding: "10px", borderRadius: "6px", fontSize: "13px", textDecoration: "none", fontWeight: "600" }}>Details</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-choose-us" style={{ backgroundColor: "#0f172a", padding: "100px 20px", color: "white" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "70px" }}>
            <h2 style={{ fontSize: "36px", fontWeight: 800, marginBottom: "20px" }}>{t.whyTitle}</h2>
            <p style={{ color: "#94a3b8" }}>{t.whySubtitle}</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "40px" }}>
            {[ {t: t.whyAdv1Title, d: t.whyAdv1Desc}, {t: t.whyAdv2Title, d: t.whyAdv2Desc}, {t: t.whyAdv3Title, d: t.whyAdv3Desc}, {t: t.whyAdv4Title, d: t.whyAdv4Desc} ].map((adv, i) => (
              <div key={i} style={{ padding: "30px", backgroundColor: "#1e293b", borderRadius: "12px", border: "1px solid #334155" }}>
                <h4 style={{ fontSize: "20px", marginBottom: "15px", color: "#38bdf8" }}>{adv.t}</h4>
                <p style={{ fontSize: "14px", color: "#cbd5e1", lineHeight: 1.6 }}>{adv.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{ padding: "100px 20px", backgroundColor: "white" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", gap: "60px", alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 500px" }}>
             <span style={{ color: "#0284c7", fontWeight: 800, fontSize: "14px", textTransform: "uppercase" }}>{t.aboutTag}</span>
             <h2 style={{ fontSize: "42px", fontWeight: 800, margin: "15px 0 25px 0" }}>{t.aboutTitle}</h2>
             <p style={{ fontSize: "16px", color: "#64748b", lineHeight: 1.8, marginBottom: "35px" }}>{t.aboutDesc1}</p>
             <div style={{ display: "flex", gap: "40px" }}>
                <div><span style={{ fontSize: "36px", fontWeight: 800, color: "#0284c7" }}>{t.aboutStat1Title}</span><p style={{ fontSize: "13px", color: "#94a3b8" }}>{t.aboutStat1Desc}</p></div>
                <div><span style={{ fontSize: "36px", fontWeight: 800, color: "#0284c7" }}>{t.aboutStat2Title}</span><p style={{ fontSize: "13px", color: "#94a3b8" }}>{t.aboutStat2Desc}</p></div>
                <div><span style={{ fontSize: "36px", fontWeight: 800, color: "#0284c7" }}>{t.aboutStat3Title}</span><p style={{ fontSize: "13px", color: "#94a3b8" }}>{t.aboutStat3Desc}</p></div>
             </div>
          </div>
          <div style={{ flex: "1 1 400px", background: "#0f172a", padding: "50px", borderRadius: "16px" }}>
             <p style={{ fontSize: "18px", fontStyle: "italic", color: "#cbd5e1", lineHeight: 1.6 }}>{t.aboutPledgeQuote}</p>
             <p style={{ marginTop: "25px", fontWeight: "bold", color: "#38bdf8" }}>{t.aboutPledgeAuthor}</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: "100px 20px", backgroundColor: "#f8fafc" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", backgroundColor: "white", padding: "50px", borderRadius: "16px", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <h2 style={{ fontSize: "32px", fontWeight: 800, marginBottom: "10px" }}>{t.contactTitle}</h2>
            <p style={{ color: "#64748b" }}>{t.contactSubtitle}</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "20px" }}>
              <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder={t.contactNameLabel} style={{ width: "100%", padding: "14px", border: "1px solid #e2e8f0", borderRadius: "8px" }} />
              <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder={t.contactEmailLabel} style={{ width: "100%", padding: "14px", border: "1px solid #e2e8f0", borderRadius: "8px" }} />
            </div>
            <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder={t.contactCompanyLabel} style={{ width: "100%", padding: "14px", border: "1px solid #e2e8f0", borderRadius: "8px", marginBottom: "20px" }} />
            <select name="product" value={formData.product} onChange={handleChange} style={{ width: "100%", padding: "14px", border: "1px solid #e2e8f0", borderRadius: "8px", marginBottom: "20px" }}>
              <option value="Universal Wiper Blades">Universal</option>
              <option value="Specific Fit Wiper Blades">Specific Fit</option>
              <option value="Multifunction Wiper Blades">Multifunction</option>
            </select>
            <textarea name="message" required rows={4} value={formData.message} onChange={handleChange} placeholder={t.contactMessagePlaceholder} style={{ width: "100%", padding: "14px", border: "1px solid #e2e8f0", borderRadius: "8px", marginBottom: "30px" }} />
            {status.submitted && <div style={{ backgroundColor: "#ecfdf5", color: "#065f46", padding: "15px", borderRadius: "8px", marginBottom: "20px" }}><strong>{t.contactSuccessMsg}</strong></div>}
            <button type="submit" disabled={status.loading} style={{ width: "100%", backgroundColor: "#0284c7", color: "white", padding: "16px", borderRadius: "8px", fontSize: "16px", fontWeight: "bold" }}>{status.loading ? t.contactSubmittingBtn : t.contactSubmitBtn}</button>
          </form>
        </div>
      </section>

      <footer style={{ backgroundColor: "#0f172a", color: "#94a3b8", padding: "80px 20px 40px 20px", textAlign: "center" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h3 style={{ color: "white", marginBottom: "20px" }}>BOWANG WIPER</h3>
          <p style={{ maxWidth: "600px", margin: "0 auto 40px" }}>{t.footerDesc}</p>
          <div style={{ borderTop: "1px solid #1e293b", paddingTop: "30px", fontSize: "12px" }}>
            &copy; 2026 Ningbo Zhenhai Bowang Autoparts Co., Ltd. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a href="https://wa.me/8618867886795" target="_blank" rel="noopener noreferrer" style={{ position: "fixed", bottom: "30px", right: "30px", width: "60px", height: "60px", backgroundColor: "#25d366", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center", boxShadow: "0 4px 12px rgba(0,0,0,0.2)", zIndex: 9999 }}>
        <svg width="30" height="30" viewBox="0 0 448 512" fill="white"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.1 0-65.6-8.9-93.3-25.7l-6.7-4.1-69.5 18.3 18.7-67.7-4.5-7.1C51.3 322.2 42.1 289 42.1 254c0-100.1 81.3-181.5 181.6-181.5 48.5 0 94.1 18.9 128.4 53.3 34.3 34.4 53.2 80 53.2 128.4 0 100.2-81.4 181.5-181.4 181.5zm113.8-154.2c-6.2-3.1-36.8-18.1-42.5-20.1-5.7-2-9.8-3.1-13.9 3.1-4.1 6.2-15.8 20.1-19.4 24.1-3.6 4-7.2 4.5-13.4 1.5-6.2-3.1-26.2-9.6-49.9-27.5-18.4-16.4-30.8-36.7-34.4-42.8-3.6-6.2-.4-9.6 2.7-12.7 2.8-2.8 6.2-7.2 9.3-10.8 3.1-3.6 4.1-6.2 6.2-10.3 2-4.1 1-7.7-.5-10.8-1.5-3.1-13.9-33.5-19.1-45.8-5-12.2-10.2-10.5-13.9-10.6-3.6-.1-7.7-.1-11.8-.1-4.1 0-10.8 1.5-16.5 7.7-5.7 6.2-21.6 21.1-21.6 51.5 0 30.4 22.1 59.8 25.2 64 3.1 4.1 43.5 33.2 105.3 59.8 14.7 6.3 26.2 10.1 35.1 13 14.8 2.8 28.2 2.4 38.9 1c11.9-1.5 36.8-4.8 42-9.5 5.1-4.6 5.1-8.7 3.6-10.8-1.5-2.1-5.7-3.1-11.8-6.2z" /></svg>
      </a>

    </main>
  );
}
