"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { translations, Locale } from "../../translations";
import { allProducts } from "../../data/products";

export default function ProductDetail() {
  const params = useParams();
  const id = params.id as string;
  const [lang, setLang] = useState<Locale>("en");
  
  const product = allProducts.find(p => p.id === id);

  useEffect(() => {
    const savedLang = localStorage.getItem("lelion_lang") as Locale;
    if (savedLang && ["en", "es", "ru", "fr", "de"].includes(savedLang)) {
      setLang(savedLang);
    }
  }, []);

  if (!product) {
    return <div style={{ padding: "100px", textAlign: "center" }}>Product Not Found</div>;
  }

  const t = translations[lang];

  // JSON-LD Product Schema
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": [product.image, ...(product.gallery || [])],
    "description": product.desc,
    "sku": product.technicalDetails["Product Model"] || product.technicalDetails["Model Number"] || product.id,
    "brand": {
      "@type": "Brand",
      "name": "LELION"
    },
    "offers": {
      "@type": "AggregateOffer",
      "offerCount": "1",
      "lowPrice": "0",
      "highPrice": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": `https://www.lelionautopart.com/products/${product.id}`
    }
  };

  // BreadcrumbList schema for AEO
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.lelionautopart.com/" },
      { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://www.lelionautopart.com/products" },
      { "@type": "ListItem", "position": 3, "name": product.name, "item": `https://www.lelionautopart.com/products/${product.id}` }
    ]
  };

  return (
    <main>
      
      {/* JSON-LD Injected into the page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Navigation Header */}
      <header className="header" style={{padding:"15px 20px"}}>
        <div className="header-inner">
          <Link href="/" style={{color:"white",textDecoration:"none",fontWeight:"bold",fontSize:"18px"}}>BOWANG WIPER</Link>
          <nav className="nav">
            <Link href="/" style={{ color: "#f8fafc", textDecoration: "none", fontSize: "14px" }}>{t.navHome}</Link>
            <Link href="/products" className="nav-link active">{t.navProducts}</Link>
            <Link href="/blog" className="nav-link">Blog</Link>
            <Link href="/about" style={{ color: "#f8fafc", textDecoration: "none", fontSize: "14px" }}>{t.navAboutUs}</Link>
            <Link href="/contact" className="nav-cta">{t.navGetQuote}</Link>
          </nav>
        </div>
      </header>

      <section style={{ padding: "80px 20px", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "flex", gap: "60px", flexWrap: "wrap" }}>
          
          {/* Main Image */}
          <div style={{ flex: "1 1 500px" }}>
            <div style={{ backgroundColor: "#f8fafc", borderRadius: "20px", padding: "50px", border: "1px solid #e2e8f0", textAlign: "center" }}>
              <img src={product.image} alt={product.name} style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }} />
            </div>
          </div>

          {/* Product Info */}
          <div style={{ flex: "1 1 400px" }}>
            <span style={{ color: "#0284c7", fontWeight: "bold", textTransform: "uppercase", fontSize: "12px", letterSpacing: "1px" }}>{product.category} Series</span>
            <h1 style={{ fontSize: "36px", fontWeight: 800, margin: "10px 0 20px 0", color: "#0f172a", lineHeight: 1.2 }}>{product.name}</h1>
            
            <div style={{ backgroundColor: "#f8fafc", padding: "25px", borderRadius: "12px", marginBottom: "30px", borderLeft: "4px solid #0284c7" }}>
              <span style={{ fontSize: "14px", color: "#64748b", fontWeight: 600 }}>Wholesale Status:</span>
              <p style={{ fontSize: "20px", fontWeight: 700, color: "#1e293b", margin: "5px 0" }}>In Stock & Ready for Export</p>
              <div style={{ marginTop: "10px" }}>
                <span style={{ fontSize: "13px", color: "#64748b" }}>Minimum Order Quantity:</span>
                <p style={{ fontSize: "16px", fontWeight: 800, color: "#0284c7", margin: "2px 0" }}>{product.moq}</p>
              </div>
            </div>

            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#475569", marginBottom: "30px" }}>{product.longDesc}</p>

            <div style={{ borderTop: "1px solid #f1f5f9", paddingTop: "25px", marginBottom: "35px" }}>
              <h4 style={{ fontSize: "16px", marginBottom: "15px", color: "#0f172a" }}>B2B Support:</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "14px", color: "#64748b" }}>
                <li style={{ marginBottom: "8px", display: "flex", alignItems: "center" }}><span style={{ color: "#0284c7", marginRight: "10px" }}>★</span> Private Label & Laser Logo Printing</li>
                <li style={{ marginBottom: "8px", display: "flex", alignItems: "center" }}><span style={{ color: "#0284c7", marginRight: "10px" }}>★</span> Customized Export Packaging Solutions</li>
                <li style={{ display: "flex", alignItems: "center" }}><span style={{ color: "#0284c7", marginRight: "10px" }}>★</span> Global Logistics & Customs Support</li>
              </ul>
            </div>

            <div style={{ display: "flex", gap: "15px" }}>
              <Link href="/contact" style={{ flex: 1, backgroundColor: "#0284c7", color: "white", padding: "16px", borderRadius: "8px", textAlign: "center", fontWeight: "bold", textDecoration: "none" }}>Inquiry for Bulk Price</Link>
              <a href="/Catalog.pdf" target="_blank" style={{ flex: 1, border: "2px solid #0f172a", color: "#0f172a", padding: "16px", borderRadius: "8px", textAlign: "center", fontWeight: "bold", textDecoration: "none" }}>Full Catalog</a>
            </div>
          </div>
        </div>

        {/* Spec Table */}
        <div style={{ marginTop: "100px" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "30px", borderBottom: "2px solid #f1f5f9", paddingBottom: "15px", textAlign: "center" }}>Technical Specifications</h2>
          <table style={{ width: "100%", maxWidth: "900px", margin: "0 auto", borderCollapse: "collapse", fontSize: "15px" }}>
            <tbody>
              {Object.entries(product.technicalDetails).map(([key, value], idx) => (
                <tr key={key} style={{ backgroundColor: idx % 2 === 0 ? "#fcfcfc" : "transparent" }}>
                  <td style={{ padding: "15px 25px", fontWeight: "bold", border: "1px solid #f1f5f9", width: "35%", color: "#0f172a" }}>{key}</td>
                  <td style={{ padding: "15px 25px", border: "1px solid #f1f5f9", color: "#64748b" }}>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Gallery */}
        {product.gallery && product.gallery.length > 0 && (
          <div style={{ marginTop: "100px", backgroundColor: "#f8fafc", padding: "80px 20px", borderRadius: "30px" }}>
            <h2 style={{ fontSize: "24px", fontWeight: 800, marginBottom: "50px", textAlign: "center", color: "#0f172a" }}>Visual Breakdown & Features</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "50px", alignItems: "center" }}>
              {product.gallery.map((imgUrl, idx) => (
                <div key={idx} style={{ maxWidth: "800px", width: "100%", textAlign: "center" }}>
                   <img 
                    src={imgUrl} 
                    alt={`${product.name} View ${idx + 1}`} 
                    style={{ width: "100%", height: "auto", borderRadius: "12 px", boxShadow: "0 15px 30px rgba(0,0,0,0.06)", border: "1px solid #ffffff" }} 
                   />
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      <footer style={{ backgroundColor: "#0f172a", color: "#94a3b8", padding: "60px 20px", marginTop: "100px", textAlign: "center" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p style={{ fontSize: "14px" }}>&copy; 2026 Ningbo Zhenhai Bowang Autoparts Co., Ltd. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

