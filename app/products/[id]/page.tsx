"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { translations, Locale } from "../../translations";
import { allProducts } from "../../data/products";
import { blogPosts } from "../../data/blog";

export default function ProductDetail() {
  const params = useParams();
  const id = params.id as string;
  const [mobileMenu, setMobileMenu] = useState(false);
  const [lang, setLang] = useState<Locale>("en");
  const [selectedImg, setSelectedImg] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const closeMobileMenu = () => setMobileMenu(false);
  const handleLangChange = (newLang: Locale) => {
    setLang(newLang);
    localStorage.setItem("lelion_lang", newLang);
  };

  const [showFaq, setShowFaq] = useState<number | null>(null);

  const product = allProducts.find(p => p.id === id);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'ArrowLeft') setSelectedImg((selectedImg - 1 + allImages.length) % allImages.length);
      if (e.key === 'ArrowRight') setSelectedImg((selectedImg + 1) % allImages.length);
      if (e.key === 'Escape') setLightboxOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, selectedImg]);

  useEffect(() => {
    const savedLang = localStorage.getItem("lelion_lang") as Locale;
    if (savedLang && ["en", "es", "ru", "fr", "de"].includes(savedLang)) setLang(savedLang);
  }, []);

  if (!product) {
    return <div style={{padding:"100px",textAlign:"center"}}><h1>Product Not Found</h1><Link href="/products" style={{color:"#0284c7"}}>← All Products</Link></div>;
  }

  const t = translations[lang];
  const modelNo = product.technicalDetails["Product Model"] || product.technicalDetails["Model Number"] || product.id;

  // Enhanced Product Schema with more SEO fields
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": [product.image, ...(product.gallery || [])],
    "description": product.longDesc.substring(0, 250) + "...",
    "sku": modelNo,
    "mpn": modelNo,
    "brand": {"@type": "Brand", "name": "LELION"},
    "manufacturer": {"@type": "Organization", "name": "Ningbo Zhenhai Bowang Autoparts Co., Ltd."},
    "category": product.category + " Wiper Blades",
    "material": product.technicalDetails["Main Material"] || "Natural Rubber",
    "offers": {
      "@type": "AggregateOffer",
      "offerCount": "1",
      "lowPrice": "0",
      "highPrice": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": "https://www.lelionautopart.com/products/" + product.id,
      "acceptedPaymentMethod": ["http://purl.org/goodrelations/v1#ByBankTransferInAdvance", "http://purl.org/goodrelations/v1#LetterOfCredit"]
    },
    "keywords": product.keywords.join(", ")
  };

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type":"ListItem","position":1,"name":"Home","item":"https://www.lelionautopart.com/"},
      {"@type":"ListItem","position":2,"name":"Products","item":"https://www.lelionautopart.com/products"},
      {"@type":"ListItem","position":3,"name":product.name,"item":"https://www.lelionautopart.com/products/" + product.id}
    ]
  };

  // Product FAQ Schema
  const categorySlug = product.category.toLowerCase().replace(/ /g, "-");
  const faqItems = [
    { q: "What is the minimum order quantity (MOQ) for " + modelNo + "?", a: "The MOQ for our " + modelNo + " wiper blade is " + product.moq + ". However, we welcome trial orders and can discuss flexible terms for new partnerships." },
    { q: "Do you offer free samples of the " + modelNo + " wiper blade?", a: "Yes, we provide free samples of the " + modelNo + ". You only need to cover the shipping cost, which is credited back on your first bulk order." },
    { q: "Can I get custom branding on the " + modelNo + "?", a: "Absolutely. We offer full OEM/ODM services including laser-printed logo, custom retail packaging, and private label options for the " + modelNo + "." },
    { q: "What certifications does the " + modelNo + " have?", a: "Our factory is ISO 9001 and IATF 16949 certified. All " + modelNo + " blades pass salt spray, ozone resistance, and cold flexibility tests." },
    { q: "How long does shipping take for the " + modelNo + "?", a: "Production takes 15-25 days. Express shipping (DHL/FedEx) takes 5-7 days, sea freight 20-30 days depending on destination." }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question", "name": item.q,
      "acceptedAnswer": {"@type": "Answer", "text": item.a}
    }))
  };

  // Related products (same category, exclude current)
  const allImages = [product.image, ...(product.gallery || [])];
  const relatedProducts = allProducts.filter(p => p.category === product.category && p.id !== product.id);
  const relatedBlog = blogPosts.slice(0, 2);

  return (
    <main>
      {/* JSON-LD Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(productSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(breadcrumbSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}} />

      {/* Header */}
      <header className="header" style={{padding:"15px 20px"}}>
        <div className="header-inner">
          <Link href="/" style={{color:"white",textDecoration:"none",fontWeight:"bold",fontSize:"18px"}}>BOWANG WIPER</Link>
          <button className={"hamburger" + (mobileMenu ? " open" : "")} onClick={() => setMobileMenu(!mobileMenu)} aria-label="Toggle navigation menu">
            <span></span><span></span><span></span>
          </button>
          <nav className="nav">
            <Link href="/" className="nav-link">{t.navHome}</Link>
            <Link href="/products" className="nav-link active">{t.navProducts}</Link>
            <Link href="/blog" className="nav-link">Blog</Link>
            <Link href="/about" className="nav-link">{t.navAboutUs}</Link>
            <Link href={"/products/category/" + categorySlug} className="nav-link">{product.category} Wipers</Link>
            <Link href="/contact" className="nav-cta">{t.navGetQuote}</Link>
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
        <a href="/contact" onClick={closeMobileMenu} className="nav-cta">{t.navGetQuote}</a>
        <select value={lang} onChange={(e) => { handleLangChange(e.target.value as Locale); closeMobileMenu(); }} className="lang-select-mobile">
          <option value="en">English</option><option value="es">Español</option><option value="ru">Русский</option><option value="fr">Français</option><option value="de">Deutsch</option>
        </select>
      </div>


      {/* Product Main Section */}
      <section className="section product-detail-layout" style={{maxWidth:"1200px",margin:"0 auto"}}>
        {/* Image */}
        <div className="product-image-box">
          <div className="gallery-main" onClick={() => setLightboxOpen(true)}>
            {/* Prev arrow */}
            {allImages.length > 1 && (
              <button className="gallery-arrow prev" onClick={(e) => { e.stopPropagation(); setSelectedImg((selectedImg - 1 + allImages.length) % allImages.length); }}>&lsaquo;</button>
            )}
            <img src={allImages[selectedImg]} alt={product.name + " - image " + (selectedImg + 1)} />
            {allImages.length > 1 && (
              <button className="gallery-arrow next" onClick={(e) => { e.stopPropagation(); setSelectedImg((selectedImg + 1) % allImages.length); }}>&rsaquo;</button>
            )}
          </div>
          {/* Thumbnails */}
          {allImages.length > 1 && (
            <div className="gallery-thumbnails">
              {allImages.map((url, i) => (
                <div key={i} className={"gallery-thumb" + (i === selectedImg ? " active" : "")} onClick={() => setSelectedImg(i)}>
                  <img src={url} alt={product.name + " thumbnail " + (i+1)} loading="lazy" />
                </div>
              ))}
            </div>
          )}

          {/* Lightbox Modal */}
          {lightboxOpen && (
            <div className="gallery-overlay" onClick={() => setLightboxOpen(false)}>
              <button className="gallery-overlay-close" onClick={() => setLightboxOpen(false)}>&times;</button>
              {allImages.length > 1 && (
                <button className="gallery-overlay-arrow prev-lb" onClick={(e) => { e.stopPropagation(); setSelectedImg((selectedImg - 1 + allImages.length) % allImages.length); }}>&lsaquo;</button>
              )}
              <img src={allImages[selectedImg]} alt={product.name + " full view"} onClick={(e) => e.stopPropagation()} />
              {allImages.length > 1 && (
                <button className="gallery-overlay-arrow next-lb" onClick={(e) => { e.stopPropagation(); setSelectedImg((selectedImg + 1) % allImages.length); }}>&rsaquo;</button>
              )}
              <div className="gallery-overlay-counter">{selectedImg + 1} / {allImages.length}</div>
            </div>
          )}
        </div>
        {/* Info */}
        <div className="product-info-box">
          <span className="tag-category">{product.category} Wiper Series</span>
          <h1 style={{fontSize:"36px",fontWeight:800,margin:"10px 0 20px",color:"#0f172a",lineHeight:1.2}}>{product.name}</h1>

          {/* Wholesale status box */}
          <div style={{backgroundColor:"#f8fafc",padding:"25px",borderRadius:"12px",marginBottom:"30px",borderLeft:"4px solid var(--accent)"}}>
            <span className="text-muted" style={{fontWeight:600}}>Wholesale Status:</span>
            <p style={{fontSize:"20px",fontWeight:700,color:"#1e293b",margin:"5px 0"}}>Factory Direct · In Stock · Ready to Ship</p>
            <div style={{marginTop:"10px"}}>
              <span className="text-muted">Minimum Order Quantity:</span>
              <p style={{fontSize:"16px",fontWeight:800,color:"var(--accent)",margin:"2px 0"}}>{product.moq}</p>
            </div>
          </div>

          {/* Description */}
          <p style={{fontSize:"16px",lineHeight:1.8,color:"#475569",marginBottom:"25px"}}>{product.longDesc}</p>

          {/* Key Features */}
          <div style={{marginBottom:"30px"}}>
            <h4 style={{fontSize:"16px",marginBottom:"15px",color:"#0f172a"}}>Product Highlights:</h4>
            <ul style={{listStyle:"none",padding:0,margin:0}}>
              {product.specs.map((spec, i) => (
                <li key={i} style={{marginBottom:"10px",display:"flex",alignItems:"flex-start",fontSize:"14px",color:"#475569"}}>
                  <span style={{color:"var(--accent)",marginRight:"10px",flexShrink:0}}>✓</span> {spec}
                </li>
              ))}
            </ul>
          </div>

          {/* Application tags */}
          <div style={{marginBottom:"30px"}}>
            <h4 style={{fontSize:"16px",marginBottom:"15px",color:"#0f172a"}}>Target Markets:</h4>
            <div style={{display:"flex",gap:"8px",flexWrap:"wrap"}}>
              {product.applications.map((app, i) => (
                <span key={i} className="tag">{app}</span>
              ))}
            </div>
          </div>

          {/* B2B Support */}
          <div style={{borderTop:"1px solid var(--border-light)",paddingTop:"25px",marginBottom:"30px"}}>
            <h4 style={{fontSize:"16px",marginBottom:"15px",color:"#0f172a"}}>OEM/ODM Services Available:</h4>
            <ul style={{listStyle:"none",padding:0,margin:0,fontSize:"14px",color:"#64748b"}}>
              <li style={{marginBottom:"8px",display:"flex",alignItems:"center"}}><span style={{color:"var(--accent)",marginRight:"10px"}}>★</span> Private Label & Laser Logo Printing</li>
              <li style={{marginBottom:"8px",display:"flex",alignItems:"center"}}><span style={{color:"var(--accent)",marginRight:"10px"}}>★</span> Customized Retail & Export Packaging</li>
              <li style={{display:"flex",alignItems:"center"}}><span style={{color:"var(--accent)",marginRight:"10px"}}>★</span> Global Logistics & Customs Documentation</li>
            </ul>
          </div>

          {/* CTA Buttons */}
          <div style={{display:"flex",gap:"15px"}}>
            <Link href={"/contact?product=" + encodeURIComponent(product.name)} className="btn-primary" style={{flex:1,padding:"16px",textAlign:"center"}}>Get Bulk Price →</Link>
            <a href="/Catalog.pdf" target="_blank" className="btn-outline" style={{flex:1,padding:"16px",textAlign:"center"}}>Download Catalog</a>
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
          <h2 className="section-title">Technical Specifications — {modelNo}</h2>
          <p className="section-subtitle">Detailed engineering specifications for the " + modelNo + " " + product.category.toLowerCase() + " wiper blade series from Bowang Autoparts.</p>
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
          <h2 className="section-title">Why Choose the {modelNo}?</h2>
          <p className="section-subtitle">Engineered for performance, built for durability, backed by a certified Chinese wiper blade factory.</p>
          <div className="grid-2col" style={{maxWidth:"900px",margin:"0 auto"}}>
            {product.features.map((feature, i) => (
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
          <h2 className="section-title">Frequently Asked Questions — {modelNo}</h2>
          <p className="section-subtitle">Common B2B inquiries about our " + product.category.toLowerCase() + " wiper blades.</p>
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

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="section section-white">
          <div className="container">
            <h2 className="section-title">More " + product.category + " Wiper Blades</h2>
            <p className="section-subtitle">Browse our complete range of " + product.category.toLowerCase() + " wiper blades from the same series.</p>
            <div className="grid-products">
              {relatedProducts.map(rp => (
                <Link key={rp.id} href={"/products/" + rp.id} style={{textDecoration:"none",color:"inherit"}}>
                  <div className="product-card card-hover">
                    <div className="product-card-img">
                      <img src={rp.image} alt={rp.name} style={{maxWidth:"100%",maxHeight:"100%",objectFit:"contain"}} loading="lazy" />
                    </div>
                    <div className="product-card-body">
                      <span className="card-tag">{rp.tag}</span>
                      <h3 style={{fontSize:"16px",fontWeight:700,margin:"12px 0 8px",color:"#0f172a",lineHeight:1.4}}>{rp.name}</h3>
                      <p className="card-text">{rp.desc}</p>
                      <div className="product-card-footer">
                        <span className="card-link">View Details →</span>
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
            <h2 className="section-title">Related Industry Insights</h2>
            <p className="section-subtitle">Learn more about wiper blade quality, sourcing, and industry trends from our blog.</p>
            <div className="grid-auto" style={{gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))"}}>
              {relatedBlog.map(post => (
                <Link key={post.id} href={"/blog/" + post.id} style={{textDecoration:"none",color:"inherit"}}>
                  <div className="blog-card" style={{margin:0}}>
                    <div className="blog-card-img">
                      <img src={post.image} alt={post.title} loading="lazy" />
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
          <h2 style={{fontSize:"32px",fontWeight:800,marginBottom:"15px"}}>Ready to Place a Bulk Order?</h2>
          <p style={{color:"#cbd5e1",marginBottom:"35px",fontSize:"17px"}}>Contact our export team for competitive factory pricing on the " + modelNo + " and other wiper blade models.</p>
          <Link href="/contact" className="btn-hero">Inquire Now</Link>
          <a href="/Catalog.pdf" target="_blank" className="btn-hero-outline" style={{marginLeft:"15px"}}>Download Full Catalog</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <h3 className="footer-brand">BOWANG WIPER</h3>
          <div className="footer-divider">&copy; 2026 Ningbo Zhenhai Bowang Autoparts Co., Ltd. All rights reserved.</div>
        </div>
      </footer>

      {/* WhatsApp */}
      <a href="https://wa.me/8618867886795" target="_blank" rel="noopener noreferrer" className="whatsapp-float">
        <svg width="30" height="30" viewBox="0 0 448 512" fill="white"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.1 0-65.6-8.9-93.3-25.7l-6.7-4.1-69.5 18.3 18.7-67.7-4.5-7.1C51.3 322.2 42.1 289 42.1 254c0-100.1 81.3-181.5 181.6-181.5 48.5 0 94.1 18.9 128.4 53.3 34.3 34.4 53.2 80 53.2 128.4 0 100.2-81.4 181.5-181.4 181.5zm113.8-154.2c-6.2-3.1-36.8-18.1-42.5-20.1-5.7-2-9.8-3.1-13.9 3.1-4.1 6.2-15.8 20.1-19.4 24.1-3.6 4-7.2 4.5-13.4 1.5-6.2-3.1-26.2-9.6-49.9-27.5-18.4-16.4-30.8-36.7-34.4-42.8-3.6-6.2-.4-9.6 2.7-12.7 2.8-2.8 6.2-7.2 9.3-10.8 3.1-3.6 4.1-6.2 6.2-10.3 2-4.1 1-7.7-.5-10.8-1.5-3.1-13.9-33.5-19.1-45.8-5-12.2-10.2-10.5-13.9-10.6-3.6-.1-7.7-.1-11.8-.1-4.1 0-10.8 1.5-16.5 7.7-5.7 6.2-21.6 21.1-21.6 51.5 0 30.4 22.1 59.8 25.2 64 3.1 4.1 43.5 33.2 105.3 59.8 14.7 6.3 26.2 10.1 35.1 13 14.8 2.8 28.2 2.4 38.9 1c11.9-1.5 36.8-4.8 42-9.5 5.1-4.6 5.1-8.7 3.6-10.8-1.5-2.1-5.7-3.1-11.8-6.2z" /></svg>
      </a>
    </main>
  );
}
