"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { translations, Locale } from "../app/translations";
import { CATEGORY_MAP, CATEGORY_LABEL_KEYS } from "../app/data/categories";
import Pager from "./Pager";
import type { ProductListItem } from "../app/data/productList";

type Props = { locale: Locale; slug: string; products: ProductListItem[] };

export default function ProductCategoryClient({ locale, slug, products }: Props) {
  const urlLang = locale;
  const category = CATEGORY_MAP[slug];
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 6;

  useEffect(() => {
    localStorage.setItem("lelion_lang", urlLang);
  }, [urlLang]);

  const t = translations[urlLang];
  const getCategoryName = () => {
    const key = CATEGORY_LABEL_KEYS[category];
    return key ? t[key as keyof typeof t] : category;
  };
  const l = (p: string) => "/" + urlLang + p;

  if (!category) {
    return <div style={{padding:"100px",textAlign:"center"}}><h1>{t.categoryNotFound}</h1><Link href={l("/products")} style={{color:"var(--accent-strong)"}}>{t.backToProducts}</Link></div>;
  }
  const filtered = products;
  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type":"ListItem","position":1,"name":"Home","item":"https://www.lelionautopart.com/" + urlLang},
      {"@type":"ListItem","position":2,"name":"Products","item":"https://www.lelionautopart.com/" + urlLang + "/products"},
      {"@type":"ListItem","position":3,"name":category + " " + t.wiperBladesWord,"item":"https://www.lelionautopart.com/" + urlLang + "/products/category/" + slug}
    ]
  };

  // CollectionPage Schema
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": category + " " + t.wiperBladesWord + " - Wholesale | Lelion Autoparts",
    "description": "Browse our wholesale " + category.toLowerCase() + " " + t.wiperBladesWord.toLowerCase() + ". OEM/ODM manufacturer with factory-direct pricing, ISO certified, global shipping.",
    "url": "https://www.lelionautopart.com/" + urlLang + "/products/category/" + slug,
    "inLanguage": urlLang,
    "isPartOf": {"@type":"WebSite","name":"Lelion Autoparts"}
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(breadcrumbSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(collectionSchema)}} />


      <section className="banner-dark">
        <h1 className="banner-title">{getCategoryName()}</h1>
        <p className="banner-subtitle">{t.categoryBannerSub}</p>
      </section>

      <section className="section">
        <div className="container">
          <div className="pl-layout">
            {/* Sidebar */}
            <aside className="sidebar pl-aside">
              <h3 className="sidebar-title">{t.seriesFilter}</h3>
              {/* <ul> may only contain <li>; the anchor fills the row (.sidebar-link). */}
              <ul className="sidebar-list pl-aside-list">
                <li className="sidebar-item"><Link href={l("/products")} className="sidebar-link" style={{textDecoration:"none",color:"inherit"}}>{t.allWipers}</Link></li>
                {Object.entries(CATEGORY_MAP).map(([s, c]) => {
                  const key = CATEGORY_LABEL_KEYS[c];
                  const label = key ? t[key as keyof typeof t] : c;
                  return (
                    <li key={s} className={"sidebar-item" + (s === slug ? " active" : "")}>
                      <Link href={l("/products/category/" + s)} className="sidebar-link" style={{textDecoration:"none",color:"inherit"}}>{label}</Link>
                    </li>
                  );
                })}
              </ul>
            </aside>

            {/* Product Grid */}
            <div className="pl-gridcol">
              {filtered.length === 0 ? (
                <p style={{color:"#64748b",textAlign:"center",padding:"40px"}}>{t.categoryNotFoundDesc || "No products found in this category."}</p>
              ) : (
                <>
                  <div className="pl-grid">
                    {(filtered.length <= ITEMS_PER_PAGE ? filtered : filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)).map(product => (
                      <div key={product.id} style={{
                        backgroundColor:"white",borderRadius:"16px",overflow:"hidden",border:"1px solid #f1f5f9",
                        display:"flex",flexDirection:"column",transition:"transform 0.3s ease"
                      }}>
                        <Link href={l("/products/" + product.id)} style={{
                          height:"300px",backgroundColor:"#f8fafc",display:"flex",alignItems:"center",
                          justifyContent:"center",position:"relative",padding:"20px"
                        }}>
                          <span style={{position:"absolute",top:"20px",left:"20px",backgroundColor:"#ecfdf5",
                            color:"#047857",fontSize:"11px",fontWeight:"bold",padding:"5px 12px",borderRadius:"6px",zIndex:10
                          }}>{product.tag}</span>
                          <Image src={product.image} alt={product.name} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: "contain" }} loading="lazy" />
                        </Link>
                        <div style={{padding:"25px",flexGrow:1,display:"flex",flexDirection:"column"}}>
                          <h3 style={{fontSize:"19px",fontWeight:800,marginBottom:"10px"}}>
                            <Link href={l("/products/" + product.id)} style={{color:"#0f172a",textDecoration:"none"}}>{product.name}</Link>
                          </h3>
                          <div style={{marginBottom:"20px"}}>
                            <span style={{fontSize:"13px",color:"#64748b",fontWeight:600}}>MOQ: {product.moq}</span><span style={{fontSize:"13px",color:"#64748b",fontWeight:600}}>{t.leadTimeLabel}: {t.leadTimeValue}</span>
                          </div>
                          <ul style={{padding:0,margin:"0 0 25px 0",listStyle:"none"}}>
                            {product.specs.slice(0, 3).map((s, i) => (
                              <li key={i} style={{fontSize:"13.5px",color:"#475569",marginBottom:"8px",display:"flex",alignItems:"center"}}>
                                <span style={{color:"#10b981",marginRight:"10px"}}>✓</span> {s}
                              </li>
                            ))}
                          </ul>
                          <div style={{display:"flex",gap:"12px",marginTop:"auto"}}>
                            <Link href={l("/contact")} style={{flex:1,textAlign:"center",backgroundColor:"var(--accent-strong)",color:"white",
                              padding:"12px",borderRadius:"8px",fontSize:"14px",fontWeight:"bold",textDecoration:"none"
                            }}>{t.inquiry}</Link>
                            <Link href={l("/products/" + product.id)} style={{flex:1,textAlign:"center",border:"1.5px solid #0f172a",
                              color:"#0f172a",padding:"12px",borderRadius:"8px",fontSize:"14px",fontWeight:"bold",textDecoration:"none"
                            }}>{t.details}</Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Pagination - shared windowed pager (components/Pager.tsx) */}
                  <Pager
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                    prevLabel={t.prev}
                    nextLabel={t.next}
                  />
                </>
              )}
            </div>
          </div>

          {/* All Series Navigation - identical on every category page and in every language.
              Items are generated from the shared CATEGORY_MAP source, never hand-written. */}
          <div style={{marginTop:"70px",paddingTop:"45px",borderTop:"1px solid #e2e8f0"}}>
            <h2 style={{fontSize:"26px",fontWeight:800,color:"#0f172a",textAlign:"center",marginBottom:"30px"}}>{t.allSeriesTitle}</h2>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:"14px"}}>
              {Object.entries(CATEGORY_MAP).map(([s, c]) => {
                const key = CATEGORY_LABEL_KEYS[c];
                const label = key ? t[key as keyof typeof t] : c;
                const isCurrent = s === slug;
                return (
                  <Link key={s} href={l("/products/category/" + s)} aria-current={isCurrent ? "page" : undefined}
                    style={{display:"block",textAlign:"center",textDecoration:"none",padding:"14px 16px",borderRadius:"10px",
                      fontSize:"14.5px",fontWeight:isCurrent?700:600,color:isCurrent?"var(--accent-strong)":"#0f172a",
                      backgroundColor:isCurrent?"#f0f9ff":"#ffffff",
                      border:"1px solid " + (isCurrent?"#0284c7":"#e2e8f0"),
                      boxShadow:isCurrent?"0 0 0 1px #0284c7":"none"
                    }}>{label}</Link>
                );
              })}
            </div>
            <p style={{textAlign:"center",marginTop:"34px"}}>
              <Link href={l("/products/all")} style={{color:"var(--accent-strong)",fontWeight:600,textDecoration:"none",fontSize:"15px"}}>{t.fullCatalogTitle} →</Link>
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: "60px 20px", backgroundColor: "#f8fafc", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "28px", fontWeight: 800, color: "#0f172a", marginBottom: "16px" }}>{t.needCustomSolution}</h2>
          <p style={{ fontSize: "16px", color: "#64748b", lineHeight: "1.7", marginBottom: "30px", maxWidth: "480px", marginLeft: "auto", marginRight: "auto" }}>{t.needCustomSolutionDesc}</p>
          <Link href={l("/contact")} style={{ display: "inline-block", backgroundColor: "var(--accent-strong)", color: "#ffffff", padding: "14px 36px", borderRadius: "8px", fontSize: "16px", fontWeight: 600, textDecoration: "none" }}>{t.contactOurTeam}</Link>
        </div>
      </section>
    </main>
  );
}
