"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { translations, Locale } from "../translations";
import { allProducts } from "../data/products";

export default function ProductsPage() {
  const [lang, setLang] = useState<Locale>("en");
  const [activeCategory, setActiveCategory] = useState("All");
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("lelion_lang") as Locale;
    if (savedLang && ["en", "es", "ru", "fr", "de"].includes(savedLang)) {
      setLang(savedLang);
    }
  }, []);

  const closeMobileMenu = () => setMobileMenu(false);

  const handleLangChange = (newLang: Locale) => {
    setLang(newLang);
    localStorage.setItem("lelion_lang", newLang);
  };

  const t = translations[lang];

  const filteredProducts = activeCategory === "All" 
    ? allProducts 
    : allProducts.filter(p => p.category === activeCategory);

  // BreadcrumbList schema for AEO
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.lelionautopart.com/" },
      { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://www.lelionautopart.com/products" }
    ]
  };

  return (
    <main>
      
      {/* BreadcrumbList JSON-LD for AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Navigation Header */}
      <header className="header">
        <div className="header-inner">
          <div className="header-brand">
            <span className="header-title">BOWANG WIPER</span>
            <span className="header-subtitle">Autoparts Manufacturer</span>
          </div>
          <button className={"hamburger" + (mobileMenu ? " open" : "")} onClick={() => setMobileMenu(!mobileMenu)} aria-label="Toggle navigation menu">
            <span></span><span></span><span></span>
          </button>
          <nav className="nav">
            <Link href="/" className="nav-link">{t.navHome}</Link>
            <Link href="/products" className="nav-link active">{t.navProducts}</Link>
            <Link href="/blog" className="nav-link">Blog</Link>
            <Link href="/about" className="nav-link">{t.navAboutUs}</Link>
            <a href="/Catalog.pdf" target="_blank" className="nav-link" style={{color:"var(--accent-glow)",fontWeight:600}}>{t.navCatalog}</a>
            <Link href="/contact" style={{ backgroundColor: "#0284c7", color: "#ffffff", padding: "8px 16px", borderRadius: "4px", textDecoration: "none", fontSize: "14px", fontWeight: "bold" }}>{t.navGetQuote}</Link>
            <select value={lang} onChange={(e) => handleLangChange(e.target.value as Locale)} className="lang-select">
              <option value="en">English</option><option value="es">Español</option><option value="ru">Русский</option><option value="fr">Français</option><option value="de">Deutsch</option>
            </select>
          </nav>
        </div>
      </header>
      {/* Mobile Menu Overlay */}
      <div className={"mobile-menu-overlay" + (mobileMenu ? " open" : "")}>
        <a href="/" onClick={closeMobileMenu}>{t.navHome}</a>
        <a href="/products" onClick={closeMobileMenu}>{t.navProducts}</a>
        <a href="/blog" onClick={closeMobileMenu}>Blog</a>
        <a href="/about" onClick={closeMobileMenu}>{t.navAboutUs}</a>
        <a href="/Catalog.pdf" target="_blank" onClick={closeMobileMenu} style={{color:"var(--accent-glow)",fontWeight:600}}>{t.navCatalog}</a>
        <a href="/contact" className="nav-cta" onClick={closeMobileMenu}>{t.navGetQuote}</a>
        <select value={lang} onChange={(e) => { handleLangChange(e.target.value as Locale); closeMobileMenu(); }} className="lang-select-mobile">
          <option value="en">English</option><option value="es">Español</option><option value="ru">Русский</option><option value="fr">Français</option><option value="de">Deutsch</option>
        </select>
      </div>


      {/* Banner */}
      <section style={{ backgroundColor: "#0f172a", padding: "60px 20px", color: "white", textAlign: "center", borderBottom: "1px solid #1e293b" }}>
        <h1 style={{ fontSize: "36px", fontWeight: 800, marginBottom: "15px" }}>Wholesale Wiper Blade Solutions</h1>
        <p style={{ color: "#94a3b8", maxWidth: "600px", margin: "0 auto" }}>Leading OEM/ODM manufacturer in China providing premium quality wiper components for global distributors.</p>
      </section>

      {/* Main Content */}
      <section style={{ padding: "80px 20px", maxWidth: "1250px", margin: "0 auto" }}>
        <div style={{ display: "flex", gap: "40px", flexDirection: "row", flexWrap: "wrap" }}>
          
          {/* Categories Sidebar */}
          <aside style={{ flex: "1 1 250px", borderRight: "1px solid #e2e8f0", paddingRight: "20px" }}>
            <h3 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "25px", color: "#0f172a" }}>Series Filter</h3>
            <ul className="sidebar-list">
                <Link href="/products" style={{textDecoration:"none",color:"inherit"}}><li className="sidebar-item active">All Wipers</li></Link>
                <Link href="/products/category/universal" style={{textDecoration:"none",color:"inherit"}}><li className="sidebar-item">Universal Wipers</li></Link>
                <Link href="/products/category/specific-fit" style={{textDecoration:"none",color:"inherit"}}><li className="sidebar-item">Specific Fit Wipers</li></Link>
                <Link href="/products/category/multifunction" style={{textDecoration:"none",color:"inherit"}}><li className="sidebar-item">Multifunction Wipers</li></Link>
              </ul>
          </aside>

          {/* Product Grid - Fixed Image Display */}
          <div style={{ flex: "3 1 600px" }}>
             <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "30px" }}>
              {filteredProducts.map(p => (
                <div key={p.id} style={{
                  backgroundColor: "white", borderRadius: "16px", overflow: "hidden", border: "1px solid #f1f5f9",
                  display: "flex", flexDirection: "column", transition: "transform 0.3s ease"
                }}>
                  <Link href={`/products/${p.id}`} style={{ 
                    height: "300px", 
                    backgroundColor: "#f8fafc", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    position: "relative",
                    padding: "20px"
                  }}>
                     <span style={{ position: "absolute", top: "20px", left: "20px", backgroundColor: "#ecfdf5", color: "#059669", fontSize: "11px", fontWeight: "bold", padding: "5px 12px", borderRadius: "6px", zIndex: 10 }}>{p.tag}</span>
                     <img 
                      src={p.image} loading="lazy"  
                      alt={p.name} 
                      style={{ 
                        maxWidth: "100%", 
                        maxHeight: "100%", 
                        width: "auto", 
                        height: "auto", 
                        objectFit: "contain" 
                      }} 
                     />
                  </Link>
                  <div style={{ padding: "25px", flexGrow: 1, display: "flex", flexDirection: "column" }}>
                    <h3 style={{ fontSize: "19px", fontWeight: 800, marginBottom: "10px" }}>
                      <Link href={`/products/${p.id}`} style={{ color: "#0f172a", textDecoration: "none" }}>{p.name}</Link>
                    </h3>
                    <div style={{ marginBottom: "20px" }}>
                      <span style={{ fontSize: "13px", color: "#64748b", fontWeight: 600 }}>MOQ: {p.moq}</span>
                    </div>
                    <ul style={{ padding: 0, margin: "0 0 25px 0", listStyle: "none" }}>
                      {p.specs.slice(0, 3).map((s, i) => (
                        <li key={i} style={{ fontSize: "13.5px", color: "#475569", marginBottom: "8px", display: "flex", alignItems: "center" }}>
                          <span style={{ color: "#10b981", marginRight: "10px" }}>✓</span> {s}
                        </li>
                      ))}
                    </ul>
                    <div style={{ display: "flex", gap: "12px", marginTop: "auto" }}>
                      <Link href="/contact" style={{ flex: 1, textAlign: "center", backgroundColor: "#0284c7", color: "white", padding: "12px", borderRadius: "8px", fontSize: "14px", fontWeight: "bold", textDecoration: "none" }}>Inquiry</Link>
                      <Link href={`/products/${p.id}`} style={{ flex: 1, textAlign: "center", border: "1.5px solid #0f172a", color: "#0f172a", padding: "12px", borderRadius: "8px", fontSize: "14px", fontWeight: "bold", textDecoration: "none" }}>Details</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <h3 className="footer-brand">BOWANG WIPER</h3>
          <p className="footer-desc">{t.footerDesc}</p>
          <div className="footer-divider">
            &copy; 2026 Ningbo Zhenhai Bowang Autoparts Co., Ltd. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}


