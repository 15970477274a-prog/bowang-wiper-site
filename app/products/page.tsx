"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { translations, Locale } from "../translations";
import { allProducts } from "../data/products";

export default function ProductsPage() {
  const [lang, setLang] = useState<Locale>("en");
  const [activeCategory, setActiveCategory] = useState("All");

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
            <Link href="/products" style={{ color: "#38bdf8", textDecoration: "none", fontSize: "14px", fontWeight: 600 }}>{t.navProducts}</Link>
            <Link href="/about" style={{ color: "#f8fafc", textDecoration: "none", fontSize: "14px", fontWeight: 500 }}>{t.navAboutUs}</Link>
            <a href="/Catalog.pdf" target="_blank" style={{ color: "#38bdf8", textDecoration: "none", fontSize: "14px", fontWeight: 600 }}>{t.navCatalog}</a>
            <Link href="/#contact" style={{ backgroundColor: "#0284c7", color: "#ffffff", padding: "8px 16px", borderRadius: "4px", textDecoration: "none", fontSize: "14px", fontWeight: "bold" }}>{t.navGetQuote}</Link>
            <select value={lang} onChange={(e) => handleLangChange(e.target.value as Locale)} style={{ backgroundColor: "#1e293b", color: "#ffffff", border: "1px solid #475569", padding: "6px 12px", borderRadius: "4px", cursor: "pointer", fontSize: "13px" }}>
              <option value="en">English</option><option value="es">Español</option><option value="ru">Русский</option><option value="fr">Français</option><option value="de">Deutsch</option>
            </select>
          </nav>
        </div>
      </header>

      {/* Banner */}
      <section style={{ backgroundColor: "#0f172a", padding: "60px 20px", color: "white", textAlign: "center", borderBottom: "1px solid #1e293b" }}>
        <h1 style={{ fontSize: "42px", fontWeight: 800, marginBottom: "15px" }}>{t.productsTitle}</h1>
        <p style={{ color: "#94a3b8", maxWidth: "600px", margin: "0 auto" }}>Explore our full range of high-performance wiper blades for global wholesale.</p>
      </section>

      {/* Main Content: Sidebar + Grid */}
      <section style={{ padding: "80px 20px", maxWidth: "1250px", margin: "0 auto" }}>
        <div style={{ display: "flex", gap: "40px", flexDirection: "row", flexWrap: "wrap" }}>
          
          {/* Categories Sidebar */}
          <aside style={{ flex: "1 1 250px", borderRight: "1px solid #e2e8f0", paddingRight: "20px" }}>
            <h3 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "25px", color: "#0f172a" }}>Product Categories</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {["All", "Universal", "Specific Fit", "Multifunction"].map(cat => (
                <li key={cat} onClick={() => setActiveCategory(cat)} style={{
                  padding: "15px 20px", cursor: "pointer", borderRadius: "8px", marginBottom: "10px",
                  transition: "all 0.3s ease", fontSize: "15px", fontWeight: activeCategory === cat ? 700 : 500,
                  backgroundColor: activeCategory === cat ? "#0284c7" : "transparent",
                  color: activeCategory === cat ? "#ffffff" : "#475569",
                  boxShadow: activeCategory === cat ? "0 4px 12px rgba(2, 132, 199, 0.2)" : "none"
                }}>
                  {cat} Series
                </li>
              ))}
            </ul>
            <div style={{ marginTop: "50px", padding: "25px", backgroundColor: "#f8fafc", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
              <h4 style={{ fontSize: "15px", fontWeight: 700, marginBottom: "12px" }}>Custom OEM/ODM</h4>
              <p style={{ fontSize: "13px", color: "#64748b", lineHeight: 1.5, marginBottom: "20px" }}>Need private label or custom packaging for your brand? Our factory provides full support.</p>
              <Link href="/#contact" style={{ display: "block", textAlign: "center", backgroundColor: "#0f172a", color: "white", padding: "12px", borderRadius: "6px", fontSize: "13px", fontWeight: "bold", textDecoration: "none" }}>Request Custom Quote</Link>
            </div>
          </aside>

          {/* Product Grid */}
          <div style={{ flex: "3 1 600px" }}>
             <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "30px" }}>
              {filteredProducts.map(p => (
                <div key={p.id} style={{
                  backgroundColor: "white", borderRadius: "16px", overflow: "hidden", border: "1px solid #f1f5f9",
                  display: "flex", flexDirection: "column", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.02)", transition: "transform 0.3s ease"
                }} className="product-card-hover">
                  <Link href={`/products/${p.id}`} style={{ height: "250px", backgroundColor: "#f8fafc", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                     <span style={{ position: "absolute", top: "20px", left: "20px", backgroundColor: "#ecfdf5", color: "#059669", fontSize: "11px", fontWeight: "bold", padding: "5px 12px", borderRadius: "6px" }}>{p.tag}</span>
                     <img src={p.image} alt={p.name} style={{ width: "85%", height: "auto", mixBlendMode: "multiply" }} />
                  </Link>
                  <div style={{ padding: "25px", flexGrow: 1, display: "flex", flexDirection: "column" }}>
                    <h3 style={{ fontSize: "20px", fontWeight: 800, marginBottom: "10px" }}>
                      <Link href={`/products/${p.id}`} style={{ color: "#0f172a", textDecoration: "none" }}>{p.name}</Link>
                    </h3>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                      <span style={{ color: "#ef4444", fontWeight: 800, fontSize: "20px" }}>{p.price}</span>
                      <span style={{ fontSize: "12px", color: "#64748b", fontWeight: 600 }}>MOQ: {p.moq}</span>
                    </div>
                    <ul style={{ padding: 0, margin: "0 0 25px 0", listStyle: "none" }}>
                      {p.specs.slice(0, 3).map((s, i) => (
                        <li key={i} style={{ fontSize: "14px", color: "#475569", marginBottom: "8px", display: "flex", alignItems: "center" }}>
                          <span style={{ color: "#10b981", marginRight: "10px" }}>✓</span> {s}
                        </li>
                      ))}
                    </ul>
                    <div style={{ display: "flex", gap: "12px", marginTop: "auto" }}>
                      <Link href="/#contact" style={{ flex: 1, textAlign: "center", backgroundColor: "#0284c7", color: "white", padding: "12px", borderRadius: "8px", fontSize: "14px", fontWeight: "bold", textDecoration: "none" }}>Inquiry</Link>
                      <Link href={`/products/${p.id}`} style={{ flex: 1, textAlign: "center", border: "1.5px solid #0f172a", color: "#0f172a", padding: "12px", borderRadius: "8px", fontSize: "14px", fontWeight: "bold", textDecoration: "none" }}>View Details</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div> 

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
