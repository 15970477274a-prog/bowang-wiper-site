"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { translations, Locale } from "../../../../../translations";
import { allProducts } from "../../../../../data/products";
import { getProductTranslation } from "../../../../../data/productTranslations";
import { CATEGORY_MAP, CATEGORY_LABEL_KEYS } from "../../../../../data/categories";

export default function CategoryAllProductsPage() {
  const params = useParams();
  const slug = params.slug as string;
  const urlLang = (params.lang as Locale) || "en";
  const category = CATEGORY_MAP[slug];
  const [lang, setLang] = useState<Locale>(urlLang);

  useEffect(() => {
    setLang(urlLang);
    localStorage.setItem("lelion_lang", urlLang);
  }, [urlLang]);

  const t = translations[lang];
  const getCategoryName = () => {
    const key = CATEGORY_LABEL_KEYS[category];
    return key ? t[key as keyof typeof t] : category;
  };
  const l = (p: string) => "/" + lang + p;

  if (!category) {
    return <div style={{padding:"100px",textAlign:"center"}}><h1>{t.categoryNotFound}</h1><Link href={l("/products")} style={{color:"#0284c7"}}>{t.backToProducts}</Link></div>;
  }

  // Every product of this series, rendered as real links so the whole series is reachable.
  const items = allProducts.filter(p => p.category === category);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type":"ListItem","position":1,"name":"Home","item":"https://www.lelionautopart.com/" + lang},
      {"@type":"ListItem","position":2,"name":"Products","item":"https://www.lelionautopart.com/" + lang + "/products"},
      {"@type":"ListItem","position":3,"name":getCategoryName(),"item":"https://www.lelionautopart.com/" + lang + "/products/category/" + slug},
      {"@type":"ListItem","position":4,"name":getCategoryName() + " " + t.viewAllInSeries,"item":"https://www.lelionautopart.com/" + lang + "/products/category/" + slug + "/all"}
    ]
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": getCategoryName() + " - " + t.fullCatalogTitle + " | Lelion Autoparts",
    "description": t.categoryBannerSub,
    "url": "https://www.lelionautopart.com/" + lang + "/products/category/" + slug + "/all",
    "inLanguage": lang,
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
          <div style={{display:"flex",gap:"40px",flexWrap:"wrap"}}>
            <aside className="sidebar">
              <h3 className="sidebar-title">{t.seriesFilter}</h3>
              <ul className="sidebar-list">
                <Link href={l("/products")} style={{textDecoration:"none",color:"inherit"}}><li className="sidebar-item">{t.allWipers}</li></Link>
                {Object.entries(CATEGORY_MAP).map(([s, c]) => {
                  const key = CATEGORY_LABEL_KEYS[c];
                  return (
                    <Link key={s} href={l("/products/category/" + s + "/all")} style={{textDecoration:"none",color:"inherit"}}>
                      <li className={"sidebar-item" + (s === slug ? " active" : "")}>{key ? t[key as keyof typeof t] : c}</li>
                    </Link>
                  );
                })}
              </ul>
            </aside>

            <div style={{flex:"1 1 800px",minWidth:0}}>
              <p style={{marginBottom:"25px"}}>
                <Link href={l("/products/category/" + slug)} style={{color:"#0284c7",fontWeight:600,textDecoration:"none",fontSize:"14px"}}>{t.backToProducts}</Link>
              </p>

              {items.length === 0 ? (
                <p style={{color:"#64748b",textAlign:"center",padding:"40px"}}>{t.categoryNotFoundDesc || "No products found in this category."}</p>
              ) : (
                <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))",gap:"28px"}}>
                  {items.map(product => (
                    <div key={product.id} style={{
                      backgroundColor:"white",borderRadius:"16px",overflow:"hidden",border:"1px solid #f1f5f9",
                      display:"flex",flexDirection:"column",transition:"transform 0.3s ease"
                    }}>
                      <Link href={l("/products/" + product.id)} style={{
                        height:"240px",backgroundColor:"#f8fafc",display:"flex",alignItems:"center",
                        justifyContent:"center",position:"relative",padding:"20px"
                      }}>
                        <span style={{position:"absolute",top:"20px",left:"20px",backgroundColor:"#ecfdf5",
                          color:"#059669",fontSize:"11px",fontWeight:"bold",padding:"5px 12px",borderRadius:"6px",zIndex:10
                        }}>{product.tag}</span>
                        <Image src={product.image} alt={product.name} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: "contain" }} loading="lazy" />
                      </Link>
                      <div style={{padding:"20px",flexGrow:1,display:"flex",flexDirection:"column"}}>
                        <h3 style={{fontSize:"17px",fontWeight:800,marginBottom:"10px"}}>
                          <Link href={l("/products/" + product.id)} style={{color:"#0f172a",textDecoration:"none"}}>{(getProductTranslation(product.id, lang)?.name || product.name)}</Link>
                        </h3>
                        <div style={{marginBottom:"16px"}}>
                          <span style={{fontSize:"13px",color:"#64748b",fontWeight:600}}>MOQ: {product.moq}</span><span style={{fontSize:"13px",color:"#64748b",fontWeight:600}}>{t.leadTimeLabel}: {t.leadTimeValue}</span>
                        </div>
                        <div style={{display:"flex",gap:"12px",marginTop:"auto"}}>
                          <Link href={l("/contact")} style={{flex:1,textAlign:"center",backgroundColor:"#0284c7",color:"white",
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
