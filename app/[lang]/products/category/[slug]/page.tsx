"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { translations, Locale } from "../../../../translations";
import { allProducts } from "../../../../data/products";
import { getProductTranslation } from "../../../../data/productTranslations";

const CATEGORY_MAP: Record<string, string> = {
  "universal": "Universal",
  "specific-fit": "Specific Fit",
  "multifunction": "Multifunction",
  "wiper-arm": "Wiper Arm",
  "rear-wiper": "Rear Wiper",
  "hybrid": "Hybrid",
  "rear-wiper-combo": "Rear Wiper Combo",
};

const SLUG_MAP: Record<string, string> = {
  "Universal": "universal",
  "Specific Fit": "specific-fit",
  "Multifunction": "multifunction",
  "Wiper Arm": "wiper-arm",
  "Rear Wiper": "rear-wiper",
  "hybrid": "Hybrid",
  "rear-wiper-combo": "Rear Wiper Combo",
};

export default function ProductCategoryPage() {
  const params = useParams();
  const slug = params.slug as string;
  const urlLang = (params.lang as Locale) || "en";
  const category = CATEGORY_MAP[slug];
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 6;
  const [lang, setLang] = useState<Locale>(urlLang);

  useEffect(() => {
    setLang(urlLang);
    localStorage.setItem("lelion_lang", urlLang);
  }, [urlLang]);

  const t = translations[lang];
  const getCategoryName = () => {
    const map: Record<string, string> = {
      "Universal": t.footerUniversal,
      "Specific Fit": t.footerSpecific,
      "Multifunction": t.footerMultifunction,
      "Wiper Arm": t.footerWiperArm,
      "Rear Wiper": t.footerRearWiper,
      "Hybrid": t.footerHybrid,
      "Rear Wiper Combo": t.footerRearCombo,
    };
    return map[category] || category;
  };
  const l = (p: string) => "/" + lang + p;

  if (!category) {
    return <div style={{padding:"100px",textAlign:"center"}}><h1>{t.categoryNotFound}</h1><Link href={l("/products")} style={{color:"#0284c7"}}>{t.backToProducts}</Link></div>;
  }
  const filtered = allProducts.filter(p => p.category === category);

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type":"ListItem","position":1,"name":"Home","item":"https://www.lelionautopart.com/" + lang},
      {"@type":"ListItem","position":2,"name":"Products","item":"https://www.lelionautopart.com/" + lang + "/products"},
      {"@type":"ListItem","position":3,"name":category + " " + t.wiperBladesWord,"item":"https://www.lelionautopart.com/" + lang + "/products/category/" + slug}
    ]
  };

  // CollectionPage Schema
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": category + " " + t.wiperBladesWord + " - Wholesale | Bowang Autoparts",
    "description": "Browse our wholesale " + category.toLowerCase() + " " + t.wiperBladesWord.toLowerCase() + ". OEM/ODM manufacturer with factory-direct pricing, ISO certified, global shipping.",
    "url": "https://www.lelionautopart.com/" + lang + "/products/category/" + slug,
    "inLanguage": lang,
    "isPartOf": {"@type":"WebSite","name":"Bowang Wiper - LeLion Autoparts"}
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
          <div style={{display:"flex",gap:"40px",flexWrap:"wrap"}}>
            {/* Sidebar */}
            <aside className="sidebar">
              <h3 className="sidebar-title">{t.seriesFilter}</h3>
              <ul className="sidebar-list">
                <Link href={l("/products")} style={{textDecoration:"none",color:"inherit"}}><li className="sidebar-item">{t.allWipers}</li></Link>
                {Object.entries(CATEGORY_MAP).map(([s, c]) => (
                  <Link key={s} href={l("/products/category/" + s)} style={{textDecoration:"none",color:"inherit"}}>
                    <li className={"sidebar-item" + (s === slug ? " active" : "")}>{(() => { const catMap: Record<string, string> = { "Universal": t.footerUniversal, "Specific Fit": t.footerSpecific, "Multifunction": t.footerMultifunction, "Wiper Arm": t.footerWiperArm, "Rear Wiper": t.footerRearWiper, "Hybrid": t.footerHybrid, "Rear Wiper Combo": t.footerRearCombo }; return catMap[c] || c; })()}</li>
                  </Link>
                ))}
              </ul>
            </aside>

            {/* Product Grid */}
            <div style={{flex:"1 1 800px"}}>
              {filtered.length === 0 ? (
                <p style={{color:"#64748b",textAlign:"center",padding:"40px"}}>{t.categoryNotFoundDesc || "No products found in this category."}</p>
              ) : (
                <>
                  <div style={{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"30px"}}>
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
                            color:"#059669",fontSize:"11px",fontWeight:"bold",padding:"5px 12px",borderRadius:"6px",zIndex:10
                          }}>{product.tag}</span>
                          <Image src={product.image} alt={product.name} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: "contain" }} />
                        </Link>
                        <div style={{padding:"25px",flexGrow:1,display:"flex",flexDirection:"column"}}>
                          <h3 style={{fontSize:"19px",fontWeight:800,marginBottom:"10px"}}>
                            <Link href={l("/products/" + product.id)} style={{color:"#0f172a",textDecoration:"none"}}>{(getProductTranslation(product.id, lang)?.name || product.name)}</Link>
                          </h3>
                          <div style={{marginBottom:"20px"}}>
                            <span style={{fontSize:"13px",color:"#64748b",fontWeight:600}}>MOQ: {product.moq}</span>
                          </div>
                          <ul style={{padding:0,margin:"0 0 25px 0",listStyle:"none"}}>
                            {(getProductTranslation(product.id, lang)?.specs || product.specs).slice(0, 3).map((s, i) => (
                              <li key={i} style={{fontSize:"13.5px",color:"#475569",marginBottom:"8px",display:"flex",alignItems:"center"}}>
                                <span style={{color:"#10b981",marginRight:"10px"}}>✓</span> {s}
                              </li>
                            ))}
                          </ul>
                          <div style={{display:"flex",gap:"12px",marginTop:"auto"}}>
                            <Link href={l("/contact")} style={{flex:1,textAlign:"center",backgroundColor:"#0284c7",color:"white",
                              padding:"12px",borderRadius:"8px",fontSize:"14px",fontWeight:"bold",textDecoration:"none"
                            }}>{t.inquiry}</Link>
                            <Link href={"/products/" + product.id} style={{flex:1,textAlign:"center",border:"1.5px solid #0f172a",
                              color:"#0f172a",padding:"12px",borderRadius:"8px",fontSize:"14px",fontWeight:"bold",textDecoration:"none"
                            }}>{t.details}</Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Pagination */}
                  <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"8px",marginTop:"50px",paddingTop:"30px",borderTop:"1px solid #e2e8f0"}}>
                    <button
                      onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                      disabled={currentPage === 1}
                      style={{padding:"10px 18px",border:currentPage===1?"1px solid #e2e8f0":"1px solid #cbd5e1",
                        borderRadius:"8px",background:currentPage===1?"#f1f5f9":"white",
                        color:currentPage===1?"#94a3b8":"#0f172a",cursor:currentPage===1?"not-allowed":"pointer",
                        fontSize:"14px",fontWeight:600,transition:"all 0.2s"
                      }}
                    >
                      {t.prev}
                    </button>
                    {Array.from({length: Math.ceil(filtered.length / ITEMS_PER_PAGE)}, (_, i) => i + 1).map(page => (
                      <button key={page} onClick={() => setCurrentPage(page)}
                        style={{width:"40px",height:"40px",border:page===currentPage?"none":"1px solid #e2e8f0",
                          borderRadius:"8px",background:page===currentPage?"#0284c7":"white",
                          color:page===currentPage?"white":"#475569",cursor:"pointer",
                          fontSize:"14px",fontWeight:page===currentPage?700:500,transition:"all 0.2s"
                        }}
                      >
                        {page}
                      </button>
                    ))}
                    <button
                      onClick={() => setCurrentPage(Math.min(Math.ceil(filtered.length / ITEMS_PER_PAGE), currentPage + 1))}
                      disabled={currentPage === Math.ceil(filtered.length / ITEMS_PER_PAGE)}
                      style={{padding:"10px 18px",border:currentPage===Math.ceil(filtered.length/ITEMS_PER_PAGE)?"1px solid #e2e8f0":"1px solid #cbd5e1",
                        borderRadius:"8px",background:currentPage===Math.ceil(filtered.length/ITEMS_PER_PAGE)?"#f1f5f9":"white",
                        color:currentPage===Math.ceil(filtered.length/ITEMS_PER_PAGE)?"#94a3b8":"#0f172a",
                        cursor:currentPage===Math.ceil(filtered.length/ITEMS_PER_PAGE)?"not-allowed":"pointer",
                        fontSize:"14px",fontWeight:600,transition:"all 0.2s"
                      }}
                    >
                      {t.next}
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "60px 20px", backgroundColor: "#f8fafc", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "28px", fontWeight: 800, color: "#0f172a", marginBottom: "16px" }}>{t.needCustomSolution}</h2>
          <p style={{ fontSize: "16px", color: "#64748b", lineHeight: "1.7", marginBottom: "30px", maxWidth: "480px", marginLeft: "auto", marginRight: "auto" }}>{t.needCustomSolutionDesc}</p>
          <Link href={l("/contact")} style={{ display: "inline-block", backgroundColor: "#0284c7", color: "#ffffff", padding: "14px 36px", borderRadius: "8px", fontSize: "16px", fontWeight: 600, textDecoration: "none" }}>{t.contactOurTeam}</Link>
        </div>
      </section>
    </main>
  );
}
