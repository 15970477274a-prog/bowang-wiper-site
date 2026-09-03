"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useLanguage } from "../../../../components/LanguageContext";
import { translations } from "../../../translations";
import { allProducts } from "../../../data/products";
import { blogPosts } from "../../../data/blog";
import { getProductTranslation } from "../../../data/productTranslations";

export default function ProductDetail() {
  const params = useParams();
  const id = params.id as string;
  const { lang } = useLanguage();
  const [selectedImg, setSelectedImg] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [showFaq, setShowFaq] = useState<number | null>(null);

  const product = allProducts.find(p => p.id === id);
  const t = translations[lang];
  const l = (p: string) => "/" + lang + p;
  const productTrans = getProductTranslation(id, lang);
  const productName = productTrans?.name || product?.name || "";
  const productDesc = productTrans?.desc || product?.desc || "";
  const productSpecs = productTrans?.specs || product?.specs || [];
  const productFeatures = productTrans?.features || product?.features || [];
  const images = (product?.gallery && product.gallery.length > 0) ? [product.image, ...product.gallery] : [product?.image || ""];

  const faqItems = [
    { q: t.faqQ1, a: t.faqA1 }, { q: t.faqQ2, a: t.faqA2 }, { q: t.faqQ3, a: t.faqA3 },
    { q: t.faqQ4, a: t.faqA4 }, { q: t.faqQ5, a: t.faqA5 }, { q: t.faqQ6, a: t.faqA6 }
  ];
  const reviews = [
    { text: "Great product and service, will work with Ken once again.", name: "W****l", meta: "United States · 25 Aug 2026", date: "2026-08-25" },
    { text: "Great products, great prices—their staff are very professional.", name: "T****a", meta: "United States · 02 Aug 2026", date: "2026-08-02" },
    { text: "Excelente servicio, tal cual lo que pedimos de principio a fin.", name: "V****z", meta: "United States · 04 Aug 2026", date: "2026-08-04" }
  ];


  if (!product) {
    return (
      <main>
        <div style={{ padding: "100px 20px", textAlign: "center" }}>
          <h1>{t.productNotFoundTitle}</h1>
          <Link href={l("/products")} style={{ color: "#0284c7" }}>{t.backToProducts}</Link>
        </div>
      </main>
    );
  }

  const relatedProducts = allProducts.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  const modelNo = product.id.split("-").slice(0, 2).join("-").toUpperCase();
const categorySlug = product.category.toLowerCase().replace(/ /g, "-");
const productKeywords = (product.keywords || []).join(" ").toLowerCase();
const relatedBlog = blogPosts
  .slice()
  .sort((a, b) => {
    const aScore = a.tags.filter((tag) => productKeywords.includes(tag.toLowerCase())).length;
    const bScore = b.tags.filter((tag) => productKeywords.includes(tag.toLowerCase())).length;
    return bScore - aScore;
  })
  .slice(0, 2);
  // Product structured data for SEO
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": productName,
    "description": productDesc,
    "image": product.gallery && product.gallery.length > 0 ? [product.image, ...product.gallery] : [product.image],
    "sku": modelNo,
    "brand": { "@type": "Brand", "name": "Lelion" },
    "manufacturer": {
      "@type": "Organization",
      "name": "Ningbo Zhenhai Bowang Autoparts Co., Ltd."
    },
    "category": product.category,
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "reviewCount": "39",
      "bestRating": "5"
    },
    "review": reviews.map((r) => ({
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "author": { "@type": "Person", "name": r.name },
      "datePublished": r.date,
      "reviewBody": r.text
    }))
  };

  const detailBreadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": `https://www.lelionautopart.com/${lang}` },
      { "@type": "ListItem", "position": 2, "name": "Products", "item": `https://www.lelionautopart.com/${lang}/products` },
      { "@type": "ListItem", "position": 3, "name": productName }
    ]
  };

  const productFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": { "@type": "Answer", "text": item.a }
    }))
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(detailBreadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productFaqSchema) }} />
      <section className="section product-detail-layout" style={{maxWidth:"1200px",margin:"0 auto"}}>
        {/* Image */}
        <div className="product-image-box">
          <div className="gallery-main" onClick={() => setLightboxOpen(true)}>
            {/* Prev arrow */}
            {images.length > 1 && (
              <button className="gallery-arrow prev" onClick={(e) => { e.stopPropagation(); setSelectedImg((selectedImg - 1 + images.length) % images.length); }}>&lsaquo;</button>
            )}
            <Image src={images[selectedImg]} alt={product.name + " - image " + (selectedImg + 1)} width={800} height={600} sizes="(max-width: 768px) 100vw, 50vw" />
            {images.length > 1 && (
              <button className="gallery-arrow next" onClick={(e) => { e.stopPropagation(); setSelectedImg((selectedImg + 1) % images.length); }}>&rsaquo;</button>
            )}
          </div>
          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="gallery-thumbnails">
              {images.map((url, i) => (
                <div key={i} className={"gallery-thumb" + (i === selectedImg ? " active" : "")} onClick={() => setSelectedImg(i)}>
                  <Image src={url} alt={product.name + " thumbnail " + (i+1)} width={100} height={75} sizes="80px" />
                </div>
              ))}
            </div>
          )}

          {/* Lightbox Modal */}
          {lightboxOpen && (
            <div className="gallery-overlay" onClick={() => setLightboxOpen(false)}>
              <button className="gallery-overlay-close" onClick={() => setLightboxOpen(false)}>&times;</button>
              {images.length > 1 && (
                <button className="gallery-overlay-arrow prev-lb" onClick={(e) => { e.stopPropagation(); setSelectedImg((selectedImg - 1 + images.length) % images.length); }}>&lsaquo;</button>
              )}
              <Image src={images[selectedImg]} alt={product.name + " full view"} width={1200} height={900} style={{ maxWidth: "90vw", maxHeight: "80vh", width: "auto", height: "auto", objectFit: "contain", borderRadius: "12px" }} onClick={(e) => e.stopPropagation()} />
              {images.length > 1 && (
                <button className="gallery-overlay-arrow next-lb" onClick={(e) => { e.stopPropagation(); setSelectedImg((selectedImg + 1) % images.length); }}>&rsaquo;</button>
              )}
              <div className="gallery-overlay-counter">{selectedImg + 1} / {images.length}</div>
            </div>
          )}
        </div>
        {/* Info */}
        <div className="product-info-box">
          <span className="tag-category">{product.category} Wiper Series</span>
          <h1 style={{fontSize:"36px",fontWeight:800,margin:"10px 0 20px",color:"#0f172a",lineHeight:1.2}}>{productName}</h1>

          {/* Wholesale status box */}
          <div style={{backgroundColor:"#f8fafc",padding:"25px",borderRadius:"12px",marginBottom:"30px",borderLeft:"4px solid var(--accent)"}}>
            <span className="text-muted" style={{fontWeight:600}}>{t.wholesaleStatus}</span>
            <p style={{fontSize:"20px",fontWeight:700,color:"#1e293b",margin:"5px 0"}}>{t.wholesaleStatusValue}</p>
            <div style={{marginTop:"10px"}}>
              <span className="text-muted">{t.minOrderQty}</span>
              <p style={{fontSize:"16px",fontWeight:800,color:"var(--accent)",margin:"2px 0"}}>{product.moq}</p>
            </div>
          </div>

          {/* Description */}
          <p style={{fontSize:"16px",lineHeight:1.8,color:"#475569",marginBottom:"25px"}}>{product.longDesc}</p>

          {/* Key Features */}
          <div style={{marginBottom:"30px"}}>
            <h4 style={{fontSize:"16px",marginBottom:"15px",color:"#0f172a"}}>{t.productHighlights}</h4>
            <ul style={{listStyle:"none",padding:0,margin:0}}>
              {productSpecs.map((spec, i) => (
                <li key={i} style={{marginBottom:"10px",display:"flex",alignItems:"flex-start",fontSize:"14px",color:"#475569"}}>
                  <span style={{color:"var(--accent)",marginRight:"10px",flexShrink:0}}>✓</span> {spec}
                </li>
              ))}
            </ul>
          </div>

          {/* Application tags */}
          <div style={{marginBottom:"30px"}}>
            <h4 style={{fontSize:"16px",marginBottom:"15px",color:"#0f172a"}}>{t.targetMarkets}</h4>
            <div style={{display:"flex",gap:"8px",flexWrap:"wrap"}}>
              {product.applications.map((app, i) => (
                <span key={i} className="tag">{app}</span>
              ))}
            </div>
          </div>

          {/* B2B Support */}
          <div style={{borderTop:"1px solid var(--border-light)",paddingTop:"25px",marginBottom:"30px"}}>
            <h4 style={{fontSize:"16px",marginBottom:"15px",color:"#0f172a"}}>{t.oemServicesTitle}</h4>
            <ul style={{listStyle:"none",padding:0,margin:0,fontSize:"14px",color:"#64748b"}}>
              <li style={{marginBottom:"8px",display:"flex",alignItems:"center"}}><span style={{color:"var(--accent)",marginRight:"10px"}}>★</span> {t.oemService1}</li>
              <li style={{marginBottom:"8px",display:"flex",alignItems:"center"}}><span style={{color:"var(--accent)",marginRight:"10px"}}>★</span> {t.oemService2}</li>
              <li style={{display:"flex",alignItems:"center"}}><span style={{color:"var(--accent)",marginRight:"10px"}}>★</span> {t.oemService3}</li>
            </ul>
          </div>

          {/* CTA Buttons */}
          <div style={{display:"flex",gap:"15px"}}>
            <Link href={l("/contact?product=" + encodeURIComponent(productName))} className="btn-primary" style={{flex:1,padding:"16px",textAlign:"center"}}>{t.getBulkPrice}</Link>
            <a href="/Catalog.pdf" target="_blank" className="btn-outline" style={{flex:1,padding:"16px",textAlign:"center"}}>{t.downloadCatalog}</a>
          </div>

          {/* SEO Keywords */}
          <div style={{marginTop:"25px",paddingTop:"20px",borderTop:"1px solid var(--border-light)"}}>
            <div style={{display:"flex",gap:"6px",flexWrap:"wrap"}}>
              {product.keywords.slice(0, 5).map((kw, i) => (
                <span key={i} style={{color:"#94a3b8",fontSize:"11px"}}>{kw}{i < 4 ? " ·" : ""}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">{t.techSpecsTitle} {modelNo}</h2>
           <p className="section-subtitle">{t.techSpecsSubtitle} {modelNo}{" "}{product.category.toLowerCase()} {t.wiperBladesWord}.</p>
          <table className="spec-table" style={{maxWidth:"900px",margin:"0 auto",backgroundColor:"var(--bg-white)",borderRadius:"12px",overflow:"hidden",boxShadow:"var(--shadow-sm)"}}>
            <tbody>
              {Object.entries(product.technicalDetails).map(([key, value], idx) => (
                <tr key={key} style={{backgroundColor: idx % 2 === 0 ? "#fafafa" : "transparent"}}>
                  <td style={{padding:"15px 25px",fontWeight:600,color:"#0f172a",width:"35%",borderBottom:"1px solid var(--border-light)"}}>{key}</td>
                  <td style={{padding:"15px 25px",color:"#475569",borderBottom:"1px solid var(--border-light)"}}>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Features Section */}
      <section className="section section-white">
        <div className="container">
          <h2 className="section-title">{t.whyChooseTitle} {modelNo}?</h2>
          <p className="section-subtitle">{t.whyChooseSubtitle}</p>
          <div className="grid-2col" style={{maxWidth:"900px",margin:"0 auto"}}>
            {productFeatures.map((feature, i) => (
              <div key={i} className="card" style={{padding:"30px"}}>
                <div className="feature-icon" style={{width:"48px",height:"48px",fontSize:"24px",fontWeight:800,color:"var(--accent)",marginBottom:"15px"}}>
                  <span>{["❶","❷","❸","❹","❺","❻"][i]}</span>
                </div>
                <p style={{color:"#475569",fontSize:"15px",lineHeight:1.6,margin:0}}>{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product FAQ Section */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">{t.faqSectionTitle} {modelNo}</h2>
           <p className="section-subtitle">{t.faqSectionSubtitle} {product.category.toLowerCase()} {t.wiperBladesWord}.</p>
          <div className="faq-container">
            {faqItems.map((item, idx) => (
              <div key={idx} className="faq-item">
                <button onClick={() => setShowFaq(showFaq === idx ? null : idx)} className="faq-question">
                  <span>{item.q}</span>
                  <span style={{fontSize:"20px",transition:"transform 0.3s",transform: showFaq === idx ? "rotate(45deg)" : "rotate(0)"}}>+</span>
                </button>
                <div className="faq-answer" style={{maxHeight: showFaq === idx ? "500px" : "0",padding: showFaq === idx ? "0 30px 25px" : "0 30px"}}>
                  <p style={{color:"#64748b",lineHeight:1.6,margin:0,fontSize:"15px"}}>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="section section-white">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <div style={{ display: "inline-block", backgroundColor: "#0284c7", color: "white", padding: "8px 20px", borderRadius: "20px", fontSize: "14px", fontWeight: 700, marginBottom: "18px" }}>4.7 / 5 · 39 Reviews</div>
            <h2 className="section-title">{t.reviewsTitle}</h2>
            <p className="section-subtitle">{t.reviewsSubtitle}</p>
          </div>
          <div className="grid-products" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            {reviews.map((r, i) => (
              <div key={i} className="card" style={{ padding: "28px", display: "flex", flexDirection: "column", textAlign: "left" }}>
                <div style={{ color: "#f59e0b", fontSize: "18px", letterSpacing: "2px", marginBottom: "15px" }}>★★★★★</div>
                <p style={{ color: "#334155", lineHeight: 1.7, fontSize: "15px", flex: 1, margin: 0 }}>“{r.text}”</p>
                <div style={{ marginTop: "20px", borderTop: "1px solid #e2e8f0", paddingTop: "15px" }}>
                  <div style={{ fontWeight: 700, color: "#0f172a" }}>{r.name}</div>
                  <div style={{ color: "#94a3b8", fontSize: "13px" }}>{r.meta}</div>
                </div>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", color: "#94a3b8", fontSize: "13px", marginTop: "30px", marginBottom: 0 }}>{t.reviewsSource}</p>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="section section-white">
          <div className="container">
            <h2 className="section-title">{t.moreCatProductsTitle} {product.category} {t.wiperBladesWord}</h2>
            <p className="section-subtitle">{t.moreCatProductsSubtitle} {product.category.toLowerCase()} {t.wiperBladesWord}.</p>
            <div className="grid-products">
              {relatedProducts.map(rp => (
                <Link key={rp.id} href={l("/products/" + rp.id)} style={{textDecoration:"none",color:"inherit"}}>
                  <div className="product-card card-hover">
                    <div className="product-card-img">
                      <Image src={rp.image} alt={rp.name} width={400} height={300} style={{ maxWidth: "100%", maxHeight: "100%", width: "auto", height: "auto", objectFit: "contain" }} />
                    </div>
                    <div className="product-card-body">
                      <span className="card-tag">{rp.tag}</span>
                      <h3 style={{fontSize:"16px",fontWeight:700,margin:"12px 0 8px",color:"#0f172a",lineHeight:1.4}}>{rp.name}</h3>
                      <p className="card-text">{rp.desc}</p>
                      <div className="product-card-footer">
                        <span className="card-link">{t.viewDetails}</span>
                        <span className="text-muted" style={{fontSize:"12px"}}>MOQ: {rp.moq}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Industry Blog CTA */}
      {relatedBlog.length > 0 && (
        <section className="section section-alt">
          <div className="container">
            <h2 className="section-title">{t.relatedInsightsTitle}</h2>
            <p className="section-subtitle">{t.relatedInsightsSubtitle}</p>
            <div className="grid-auto" style={{gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))"}}>
              {relatedBlog.map(post => (
                <Link key={post.id} href={l("/blog/" + post.id)} style={{textDecoration:"none",color:"inherit"}}>
                  <div className="blog-card" style={{margin:0}}>
                    <div className="blog-card-img">
                      <Image src={post.image} alt={post.title} width={400} height={225} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    <div className="blog-card-body">
                      <span className="card-tag">{post.category}</span>
                      <h3 style={{fontSize:"15px",fontWeight:700,margin:"10px 0 8px",lineHeight:1.4}}>{post.title}</h3>
                      <p className="card-text">{post.excerpt.substring(0, 100)}...</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="section section-lg text-center" style={{background:"linear-gradient(rgba(15,23,42,0.92),rgba(15,23,42,0.92))",color:"white"}}>
        <div className="container-narrow">
          <h2 style={{fontSize:"32px",fontWeight:800,marginBottom:"15px"}}>{t.finalCtaTitle}</h2>
          <p style={{color:"#cbd5e1",marginBottom:"35px",fontSize:"17px"}}>{t.finalCtaSub} {modelNo}.</p>
          <Link href={l("/contact")} className="btn-hero">{t.inquireNow}</Link>
          <a href="/Catalog.pdf" target="_blank" className="btn-hero-outline" style={{marginLeft:"15px"}}>{t.downloadFullCatalog}</a>
        </div>
      </section>

    </main>
  );
}
