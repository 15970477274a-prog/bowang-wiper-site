"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { translations, Locale } from "../../translations";
import { allProducts } from "../../data/products";
import { getProductTranslation } from "../../data/productTranslations";

export default function ProductsPage() {
  const params = useParams();
  const urlLang = (params.lang as Locale) || "en";
  const [lang, setLang] = useState<Locale>(urlLang);
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 6;
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    localStorage.setItem("lelion_lang", urlLang);
    const savedLang = localStorage.getItem("lelion_lang") as Locale;
    if (savedLang && ["en", "es", "ru", "fr", "de", "zh"].includes(savedLang)) {
      setLang(savedLang);
    }
  }, [urlLang]);

  const closeMobileMenu = () => setMobileMenu(false);

  const handleLangChange = (newLang: Locale) => {
    setLang(newLang);
    localStorage.setItem("lelion_lang", newLang);
  };

  const t = translations[lang];
  const l = (p: string) => "/" + lang + p;

  const filteredProducts = activeCategory === "All" 
    ? allProducts 
    : allProducts.filter(p => p.category === activeCategory);
  
  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / ITEMS_PER_PAGE));
  const paginatedProducts = filteredProducts.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);
  
  // Reset to page 1 when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

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
{/* Mobile Menu Overlay */}
      <div className={"mobile-menu-overlay" + (mobileMenu ? " open" : "")}>
        <a href={l("/")} onClick={closeMobileMenu}>{t.navHome}</a>
        <a href={l("/products")} onClick={closeMobileMenu}>{t.navProducts}</a>
        <a href={l("/blog")} onClick={closeMobileMenu}>Blog</a>
        <a href={l("/about")} onClick={closeMobileMenu}>{t.navAboutUs}</a>
        <a href={l("/Catalog.pdf")} target="_blank" onClick={closeMobileMenu} style={{color:"var(--accent-glow)",fontWeight:600}}>{t.navCatalog}</a>
        <a href={l("/contact")} className="nav-cta" onClick={closeMobileMenu}>{t.navGetQuote}</a>
        <select value={lang} onChange={(e) => { handleLangChange(e.target.value as Locale); closeMobileMenu(); }} className="lang-select-mobile">
          <option value="en">English</option><option value="es">Español</option><option value="ru">Русский</option><option value="fr">Français</option><option value="de">Deutsch</option><option value="zh">中文</option>
        </select>
      </div>


      {/* Banner */}
      <section style={{ backgroundColor: "#0f172a", padding: "60px 20px", color: "white", textAlign: "center", borderBottom: "1px solid #1e293b" }}>
        <h1 style={{ fontSize: "36px", fontWeight: 800, marginBottom: "15px" }}>{t.productsBannerTitle}</h1>
        <p style={{ color: "#94a3b8", maxWidth: "600px", margin: "0 auto" }}>{t.productsBannerSub}</p>
      </section>

      {/* Main Content */}
      <section style={{ padding: "80px 20px", maxWidth: "1250px", margin: "0 auto" }}>
        <div style={{ display: "flex", gap: "40px", flexDirection: "row", flexWrap: "wrap" }}>
          
          {/* Categories Sidebar */}
          <aside style={{ flex: "1 1 250px", borderRight: "1px solid #e2e8f0", paddingRight: "20px" }}>
            <h3 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "25px", color: "#0f172a" }}>{t.seriesFilter}</h3>
            <ul className="sidebar-list">
                <Link href={l("/products")} style={{textDecoration:"none",color:"inherit"}}><li className="sidebar-item active">{t.allWipers}</li></Link>
                <Link href={l("/products/category/universal")} style={{textDecoration:"none",color:"inherit"}}><li className="sidebar-item">Universal Wipers</li></Link>
                <Link href={l("/products/category/specific-fit")} style={{textDecoration:"none",color:"inherit"}}><li className="sidebar-item">Specific Fit Wipers</li></Link>
                <Link href={l("/products/category/multifunction")} style={{textDecoration:"none",color:"inherit"}}><li className="sidebar-item">Multifunction Wipers</li></Link>
                <Link href={l("/products/category/wiper-arm")} style={{textDecoration:"none",color:"inherit"}}><li className="sidebar-item">Wiper Arm</li></Link>
                <Link href={l("/products/category/hybrid")} style={{textDecoration:"none",color:"inherit"}}><li className="sidebar-item">Hybrid Wipers</li></Link>
                <Link href={l("/products/category/rear-wiper")} style={{textDecoration:"none",color:"inherit"}}><li className="sidebar-item">Rear Wipers</li>
              <li onClick={() => setActiveCategory("Rear Wiper Combo")} style={{ padding: "12px 16px", cursor: "pointer", borderRadius: "8px", marginBottom: "5px", fontSize: "14px", fontWeight: activeCategory === "Rear Wiper Combo" ? 700 : 500, backgroundColor: activeCategory === "Rear Wiper Combo" ? "#e0f2fe" : "transparent", color: activeCategory === "Rear Wiper Combo" ? "#0284c7" : "#475569" }}>Rear Wiper Combo</li></Link>
              </ul>
          </aside>

          {/* Product Grid - Fixed Image Display */}
          <div style={{ flex: "3 1 600px" }}>
             <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "30px" }}>
              {paginatedProducts.length === 0 ? (
                  <p style={{textAlign:"center",padding:"60px 20px",color:"#64748b",fontSize:"16px",width:"100%"}}>No products found in this category.</p>
                ) : paginatedProducts.map(p => (
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
                      <Link href={l(`/products/${p.id}`)} style={{ color: "#0f172a", textDecoration: "none" }}>{(getProductTranslation(p.id, lang)?.name || p.name)}</Link>
                    </h3>
                    <div style={{ marginBottom: "20px" }}>
                      <span style={{ fontSize: "13px", color: "#64748b", fontWeight: 600 }}>MOQ: {p.moq}</span>
                    </div>
                    <ul style={{ padding: 0, margin: "0 0 25px 0", listStyle: "none" }}>
                      {(getProductTranslation(p.id, lang)?.specs || p.specs).slice(0, 3).map((s, i) => (
                        <li key={i} style={{ fontSize: "13.5px", color: "#475569", marginBottom: "8px", display: "flex", alignItems: "center" }}>
                          <span style={{ color: "#10b981", marginRight: "10px" }}>✓</span> {s}
                        </li>
                      ))}
                    </ul>
                    <div style={{ display: "flex", gap: "12px", marginTop: "auto" }}>
                      <Link href={l("/contact")} style={{ flex: 1, textAlign: "center", backgroundColor: "#0284c7", color: "white", padding: "12px", borderRadius: "8px", fontSize: "14px", fontWeight: "bold", textDecoration: "none" }}>{t.inquiry}</Link>
                      <Link href={l(`/products/${p.id}`)} style={{ flex: 1, textAlign: "center", border: "1.5px solid #0f172a", color: "#0f172a", padding: "12px", borderRadius: "8px", fontSize: "14px", fontWeight: "bold", textDecoration: "none" }}>{t.details}</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Pagination */}
            {totalPages > 1 && (
              <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"8px",marginTop:"50px",paddingTop:"30px",borderTop:"1px solid #e2e8f0"}}>
                <button 
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  style={{padding:"10px 18px",border:currentPage===1?"1px solid #e2e8f0":"1px solid #cbd5e1",borderRadius:"8px",background:currentPage===1?"#f1f5f9":"white",color:currentPage===1?"#94a3b8":"#0f172a",cursor:currentPage===1?"not-allowed":"pointer",fontSize:"14px",fontWeight:600,transition:"all 0.2s"}}
                >
                  {t.prev}
                </button>
                
                {Array.from({length: totalPages}, (_, i) => i + 1).map(page => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    style={{width:"40px",height:"40px",border:page===currentPage?"none":"1px solid #e2e8f0",borderRadius:"8px",background:page===currentPage?"#0284c7":"white",color:page===currentPage?"white":"#475569",cursor:"pointer",fontSize:"14px",fontWeight:page===currentPage?700:500,transition:"all 0.2s"}}
                  >
                    {page}
                  </button>
                ))}
                
                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  style={{padding:"10px 18px",border:currentPage===totalPages?"1px solid #e2e8f0":"1px solid #cbd5e1",borderRadius:"8px",background:currentPage===totalPages?"#f1f5f9":"white",color:currentPage===totalPages?"#94a3b8":"#0f172a",cursor:currentPage===totalPages?"not-allowed":"pointer",fontSize:"14px",fontWeight:600,transition:"all 0.2s"}}
                >
                  {t.next}
                </button>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Footer */}
</main>
  );
}


