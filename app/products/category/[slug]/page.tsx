"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { translations, Locale } from "../../../translations";
import { allProducts } from "../../../data/products";

const CATEGORY_MAP: Record<string, string> = {
  "universal": "Universal",
  "specific-fit": "Specific Fit",
  "multifunction": "Multifunction",
};

const SLUG_MAP: Record<string, string> = {
  "Universal": "universal",
  "Specific Fit": "specific-fit",
  "Multifunction": "multifunction",
};

export default function ProductCategoryPage() {
  const params = useParams();
  const slug = params.slug as string;
  const category = CATEGORY_MAP[slug];
  const [mobileMenu, setMobileMenu] = useState(false);
  const [lang, setLang] = useState<Locale>("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("lelion_lang") as Locale;
    if (savedLang && ["en", "es", "ru", "fr", "de"].includes(savedLang)) setLang(savedLang);
  }, []);

  const closeMobileMenu = () => setMobileMenu(false);

  const handleLangChange = (newLang: Locale) => {
    setLang(newLang);
    localStorage.setItem("lelion_lang", newLang);
  };

  if (!category) {
    return <div style={{padding:"100px",textAlign:"center"}}><h1>Category Not Found</h1><Link href="/products" style={{color:"#0284c7"}}>← All Products</Link></div>;
  }

  const t = translations[lang];
  const filtered = allProducts.filter(p => p.category === category);

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type":"ListItem","position":1,"name":"Home","item":"https://www.lelionautopart.com/"},
      {"@type":"ListItem","position":2,"name":"Products","item":"https://www.lelionautopart.com/products"},
      {"@type":"ListItem","position":3,"name":category + " Wipers","item":"https://www.lelionautopart.com/products/category/" + slug}
    ]
  };

  // CollectionPage Schema
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": category + " Wiper Blades - Wholesale | Bowang Autoparts",
    "description": "Browse our wholesale " + category.toLowerCase() + " wiper blades. OEM/ODM manufacturer with factory-direct pricing, ISO certified, global shipping.",
    "url": "https://www.lelionautopart.com/products/category/" + slug,
    "isPartOf": {"@type":"WebSite","name":"Bowang Wiper - LeLion Autoparts"}
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(breadcrumbSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(collectionSchema)}} />

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
            <Link href="/contact" className="nav-cta">{t.navGetQuote}</Link>
            <select value={lang} onChange={(e) => handleLangChange(e.target.value as Locale)} className="lang-select">
              <option value="en">English</option><option value="es">Español</option><option value="ru">Русский</option><option value="fr">Français</option><option value="de">Deutsch</option>
            </select>
          </nav>
        </div>
      </header>
      {/* Mobile Menu Overlay */}
      <div className={"mobile-menu-overlay" + (mobileMenu ? " open" : "")}>
        <a href="/" onClick={closeMobileMenu}>Home</a>
        <a href="/products" onClick={closeMobileMenu}>Products</a>
        <a href="/blog" onClick={closeMobileMenu}>Blog</a>
        <a href="/about" onClick={closeMobileMenu}>About</a>
        <a href="/contact" onClick={closeMobileMenu} style={className:"nav-cta"}>Contact Us</a>
        <select value={lang} onChange={(e) => { handleLangChange(e.target.value as Locale); closeMobileMenu(); }} className="lang-select-mobile">
          <option value="en">English</option><option value="es">Español</option><option value="ru">Русский</option><option value="fr">Français</option><option value="de">Deutsch</option>
        </select>
      </div>


      <section className="banner-dark">
        <h1 className="banner-title">{category} Wiper Blades</h1>
        <p className="banner-subtitle">Wholesale " + category.toLowerCase() + " wiper blades from a leading Chinese OEM/ODM manufacturer.</p>
      </section>

      <section className="section">
        <div className="container">
          <div style={{display:"flex",gap:"40px",flexWrap:"wrap"}}>
            {/* Sidebar */}
            <aside className="sidebar">
              <h3 className="sidebar-title">Series Filter</h3>
              <ul className="sidebar-list">
                <Link href="/products" style={{textDecoration:"none",color:"inherit"}}><li className="sidebar-item">All Wipers</li></Link>
                {Object.entries(CATEGORY_MAP).map(([s, c]) => (
                  <Link key={s} href={"/products/category/" + s} style={{textDecoration:"none",color:"inherit"}}>
                    <li className={"sidebar-item" + (s === slug ? " active" : "")}>{c} Wipers</li>
                  </Link>
                ))}
              </ul>
            </aside>

            {/* Product Grid */}
            <div style={{flex:"1 1 800px"}}>
              {filtered.length === 0 ? (
                <p style={{color:"#64748b",textAlign:"center",padding:"40px"}}>No products found in this category.</p>
              ) : (
                <div className="grid-products">
                  {filtered.map(product => (
                    <Link key={product.id} href={"/products/" + product.id} style={{textDecoration:"none",color:"inherit"}}>
                      <div className="product-card card-hover">
                        <div className="product-card-img">
                          <img src={product.image} loading="lazy"  alt={product.name} style={{maxWidth:"100%",maxHeight:"100%",objectFit:"contain"}} />
                        </div>
                        <div className="product-card-body">
                          <span className="card-tag">{product.tag}</span>
                          <h3 style={{fontSize:"18px",fontWeight:700,margin:"15px 0 10px",color:"#0f172a",lineHeight:1.4}}>{product.name}</h3>
                          <p className="card-text" style={{marginBottom:"15px"}}>{product.desc}</p>
                          <p className="text-muted" style={{fontSize:"13px",marginBottom:"10px"}}>MOQ: {product.moq}</p>
                          <div className="product-card-footer">
                            <span className="card-link">View Details →</span>
                            <span style={{backgroundColor:"#e0f2fe",color:"#0369a1",padding:"2px 10px",borderRadius:"10px",fontSize:"11px",fontWeight:600}}>{product.category}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt text-center">
        <div className="container-narrow">
          <h2 style={{fontSize:"28px",fontWeight:800,marginBottom:"15px"}}>Need a Custom Solution?</h2>
          <p className="section-subtitle">We offer OEM/ODM services with custom branding, packaging, and formulations.</p>
          <Link href="/contact" className="btn-primary-lg">Contact Our Team</Link>
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
