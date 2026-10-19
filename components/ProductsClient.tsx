"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { translations, Locale } from "../app/translations";
import { CATEGORY_MAP, CATEGORY_LABEL_KEYS } from "../app/data/categories";
import Pager from "./Pager";
import type { ProductListItem } from "../app/data/productList";

type Props = { locale: Locale; products: ProductListItem[] };

export default function ProductsClient({ locale, products }: Props) {
  const urlLang = locale;
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 6;

  useEffect(() => {
    localStorage.setItem("lelion_lang", urlLang);
  }, [urlLang]);

  const t = translations[urlLang];
  const l = (p: string) => "/" + urlLang + p;

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);
  
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
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.lelionautopart.com/" + urlLang },
      { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://www.lelionautopart.com/" + urlLang + "/products" }
    ]
  };

  return (
    <main>
      
      {/* BreadcrumbList JSON-LD for AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Banner */}
      <section style={{ backgroundColor: "#0f172a", padding: "60px 20px", color: "white", textAlign: "center", borderBottom: "1px solid #1e293b" }}>
        <h1 style={{ fontSize: "36px", fontWeight: 800, marginBottom: "15px" }}>{t.productsBannerTitle}</h1>
        <p style={{ color: "#64748b", maxWidth: "600px", margin: "0 auto" }}>{t.productsBannerSub}</p>
        <p style={{ marginTop: "22px" }}>
          <Link href={l("/products/all")} style={{ display: "inline-block", backgroundColor: "var(--accent-strong)", color: "#ffffff", padding: "12px 28px", borderRadius: "8px", fontSize: "15px", fontWeight: 600, textDecoration: "none" }}>{t.viewFullCatalog}</Link>
        </p>
      </section>

      {/* Main Content */}
      <section style={{ padding: "80px 20px", maxWidth: "1250px", margin: "0 auto" }}>
        <div className="pl-layout">
          
          {/* Categories Sidebar */}
          <aside className="pl-aside">
            <h2 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "25px", color: "#0f172a" }}>{t.seriesFilter}</h2>
            {/* <ul> may only contain <li>, so the row is the <li> and the anchor fills it
                (.sidebar-link). The link text previously lived in <li> inside <a>, which is
                invalid nesting and left each row sized to its own label. */}
            <ul className="sidebar-list pl-aside-list">
                <li className="sidebar-item active"><Link href={l("/products")} className="sidebar-link" style={{textDecoration:"none",color:"inherit"}}>{t.allWipers}</Link></li>
                {Object.entries(CATEGORY_MAP).map(([slug, catName]) => {
                  const key = CATEGORY_LABEL_KEYS[catName];
                  const label = key ? t[key as keyof typeof t] : catName;
                  return (
                    <li key={slug} className="sidebar-item">
                      <Link href={l("/products/category/" + slug)} className="sidebar-link" style={{textDecoration:"none",color:"inherit"}}>{label}</Link>
                    </li>
                  );
                })}
              </ul>
          </aside>

          {/* Product Grid - Fixed Image Display */}
          <div className="pl-gridcol">
             <div className="pl-grid">
              {paginatedProducts.length === 0 ? (
                  <p style={{textAlign:"center",padding:"60px 20px",color:"#64748b",fontSize:"16px",width:"100%"}}>No products found in this category.</p>
                ) : paginatedProducts.map(p => (
                <div key={p.id} style={{
                  backgroundColor: "white", borderRadius: "16px", overflow: "hidden", border: "1px solid #f1f5f9",
                  display: "flex", flexDirection: "column", transition: "transform 0.3s ease"
                }}>
                  <Link href={l(`/products/${p.id}`)} style={{ 
                    height: "300px", 
                    backgroundColor: "#f8fafc", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    position: "relative",
                    padding: "20px"
                  }}>
                     <span style={{ position: "absolute", top: "20px", left: "20px", backgroundColor: "#ecfdf5", color: "#059669", fontSize: "11px", fontWeight: "bold", padding: "5px 12px", borderRadius: "6px", zIndex: 10 }}>{p.tag}</span>
                     <Image src={p.image} alt={p.name} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: "contain" }} loading="lazy" />
                  </Link>
                  <div style={{ padding: "25px", flexGrow: 1, display: "flex", flexDirection: "column" }}>
                    <h3 style={{ fontSize: "19px", fontWeight: 800, marginBottom: "10px" }}>
                      <Link href={l(`/products/${p.id}`)} style={{ color: "#0f172a", textDecoration: "none" }}>{p.name}</Link>
                    </h3>
                    <div style={{ marginBottom: "20px" }}>
                      <span style={{ fontSize: "13px", color: "#64748b", fontWeight: 600 }}>MOQ: {p.moq}</span><span style={{ fontSize: "13px", color: "#64748b", fontWeight: 600 }}>{t.leadTimeLabel}: {t.leadTimeValue}</span>
                    </div>
                    <ul style={{ padding: 0, margin: "0 0 25px 0", listStyle: "none" }}>
                      {p.specs.slice(0, 3).map((s, i) => (
                        <li key={i} style={{ fontSize: "13.5px", color: "#475569", marginBottom: "8px", display: "flex", alignItems: "center" }}>
                          <span style={{ color: "#10b981", marginRight: "10px" }}>✓</span> {s}
                        </li>
                      ))}
                    </ul>
                    <div style={{ display: "flex", gap: "12px", marginTop: "auto" }}>
                      <Link href={l("/contact")} style={{ flex: 1, textAlign: "center", backgroundColor: "var(--accent-strong)", color: "white", padding: "12px", borderRadius: "8px", fontSize: "14px", fontWeight: "bold", textDecoration: "none" }}>{t.inquiry}</Link>
                      <Link href={l(`/products/${p.id}`)} style={{ flex: 1, textAlign: "center", border: "1.5px solid #0f172a", color: "#0f172a", padding: "12px", borderRadius: "8px", fontSize: "14px", fontWeight: "bold", textDecoration: "none" }}>{t.details}</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Pagination - shared windowed pager (components/Pager.tsx) */}
            {totalPages > 1 && (
              <Pager
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
                prevLabel={t.prev}
                nextLabel={t.next}
              />
            )}
          </div>

        </div>
      </section>

      {/* Footer */}
</main>
  );
}


