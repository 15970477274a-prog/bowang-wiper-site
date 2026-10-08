"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { translations, Locale } from "../../../translations";
import { allProducts } from "../../../data/products";
import { getProductTranslation } from "../../../data/productTranslations";
import { CATEGORY_MAP, CATEGORY_LABEL_KEYS } from "../../../data/categories";

export default function FullCatalogPage() {
  const params = useParams();
  const urlLang = (params.lang as Locale) || "en";
  const [lang, setLang] = useState<Locale>(urlLang);

  useEffect(() => {
    setLang(urlLang);
    localStorage.setItem("lelion_lang", urlLang);
  }, [urlLang]);

  const t = translations[lang];
  const l = (p: string) => "/" + lang + p;

  const getCategoryName = (category: string) => {
    const key = CATEGORY_LABEL_KEYS[category];
    return key ? t[key as keyof typeof t] : category;
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type":"ListItem","position":1,"name":"Home","item":"https://www.lelionautopart.com/" + lang},
      {"@type":"ListItem","position":2,"name":"Products","item":"https://www.lelionautopart.com/" + lang + "/products"},
      {"@type":"ListItem","position":3,"name":t.fullCatalogTitle,"item":"https://www.lelionautopart.com/" + lang + "/products/all"}
    ]
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": t.fullCatalogTitle + " | Lelion Autoparts",
    "description": t.productsBannerSub,
    "url": "https://www.lelionautopart.com/" + lang + "/products/all",
    "inLanguage": lang,
    "isPartOf": {"@type":"WebSite","name":"Lelion Autoparts"}
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(breadcrumbSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(collectionSchema)}} />

      <section className="banner-dark">
        <h1 className="banner-title">{t.fullCatalogTitle}</h1>
        <p className="banner-subtitle">{t.productsBannerSub}</p>
      </section>

      <section className="section">
        <div className="container">
          <p style={{marginBottom:"30px"}}>
            <Link href={l("/products")} style={{color:"#0284c7",fontWeight:600,textDecoration:"none",fontSize:"14px"}}>{t.backToProducts}</Link>
          </p>

          {Object.entries(CATEGORY_MAP).map(([slug, category]) => {
            const items = allProducts.filter(p => p.category === category);
            if (items.length === 0) return null;
            return (
              <div key={slug} id={slug} style={{marginBottom:"55px"}}>
                <h2 style={{fontSize:"24px",fontWeight:800,color:"#0f172a",marginBottom:"20px",paddingBottom:"12px",borderBottom:"1px solid #e2e8f0"}}>
                  <Link href={l("/products/category/" + slug + "/all")} style={{color:"#0f172a",textDecoration:"none"}}>{getCategoryName(category)}</Link>
                </h2>
                <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(170px, 1fr))",gap:"18px"}}>
                  {items.map(p => (
                    <Link key={p.id} href={l("/products/" + p.id)} style={{
                      textDecoration:"none",color:"inherit",backgroundColor:"white",borderRadius:"12px",
                      border:"1px solid #f1f5f9",padding:"12px",display:"flex",flexDirection:"column",gap:"10px"
                    }}>
                      <span style={{position:"relative",display:"block",height:"130px",backgroundColor:"#f8fafc",borderRadius:"8px"}}>
                        <Image src={p.image} alt={p.name} fill sizes="(max-width: 768px) 50vw, 20vw" style={{ objectFit: "contain", padding: "10px" }} loading="lazy" />
                      </span>
                      <span style={{fontSize:"13.5px",fontWeight:700,color:"#0f172a",lineHeight:"1.4"}}>{(getProductTranslation(p.id, lang)?.name || p.name)}</span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
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
