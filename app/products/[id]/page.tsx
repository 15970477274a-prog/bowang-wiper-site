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

  return (
    <main style={{ fontFamily: "system-ui, -apple-system, sans-serif", color: "#1e293b", backgroundColor: "#ffffff" }}>
      
      {/* Mini Navigation Header */}
      <header style={{ backgroundColor: "#0f172a", padding: "15px 20px", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Link href="/" style={{ color: "white", textDecoration: "none", fontWeight: "bold", fontSize: "18px" }}>BOWANG WIPER</Link>
          <nav style={{ display: "flex", gap: "25px", alignItems: "center" }}>
            <Link href="/" style={{ color: "#f8fafc", textDecoration: "none", fontSize: "14px" }}>{t.navHome}</Link>
            <Link href="/products" style={{ color: "#38bdf8", textDecoration: "none", fontSize: "14px", fontWeight: "bold" }}>{t.navProducts}</Link>
            <Link href="/about" style={{ color: "#f8fafc", textDecoration: "none", fontSize: "14px" }}>{t.navAboutUs}</Link>
            <Link href="/#contact" style={{ backgroundColor: "#0284c7", color: "white", padding: "8px 16px", borderRadius: "4px", textDecoration: "none", fontSize: "14px", fontWeight: "bold" }}>{t.navGetQuote}</Link>
          </nav>
        </div>
      </header>

      <section style={{ padding: "80px 20px", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "flex", gap: "60px", flexWrap: "wrap" }}>
          
          {/* Left: Image Gallery */}
          <div style={{ flex: "1 1 500px" }}>
            <div style={{ backgroundColor: "#f8fafc", borderRadius: "16px", padding: "40px", border: "1px solid #e2e8f0" }}>
              <img src={product.image} alt={product.name} style={{ width: "100%", height: "auto", borderRadius: "8px" }} />
            </div>
          </div>

          {/* Right: Product Info */}
          <div style={{ flex: "1 1 400px" }}>
            <span style={{ color: "#0284c7", fontWeight: "bold", textTransform: "uppercase", fontSize: "13px", letterSpacing: "1px" }}>{product.category} Series</span>
            <h1 style={{ fontSize: "42px", fontWeight: 800, margin: "10px 0 20px 0", color: "#0f172a" }}>{product.name}</h1>
            
            <div style={{ backgroundColor: "#f8fafc", padding: "25px", borderRadius: "12px", marginBottom: "30px", borderLeft: "4px solid #0284c7" }}>
              <div style={{ marginBottom: "10px" }}>
                <span style={{ fontSize: "14px", color: "#64748b" }}>FOB Reference Price:</span>
                <p style={{ fontSize: "28px", fontWeight: 800, color: "#ef4444", margin: "5px 0" }}>{product.price} <small style={{ fontSize: "12px", color: "#94a3b8" }}>/ Piece</small></p>
              </div>
              <div>
                <span style={{ fontSize: "14px", color: "#64748b" }}>Minimum Order Quantity:</span>
                <p style={{ fontSize: "16px", fontWeight: 600, color: "#0f172a", margin: "5px 0" }}>{product.moq}</p>
              </div>
            </div>

            <p style={{ fontSize: "16px", lineHeight: 1.7, color: "#475569", marginBottom: "30px" }}>{product.longDesc}</p>

            <div style={{ display: "flex", gap: "15px" }}>
              <Link href="/#contact" style={{ flex: 1, backgroundColor: "#0284c7", color: "white", padding: "16px", borderRadius: "8px", textAlign: "center", fontWeight: "bold", textDecoration: "none" }}>Get Best Quote Now</Link>
              <a href="/Catalog.pdf" target="_blank" style={{ flex: 1, border: "2px solid #0f172a", color: "#0f172a", padding: "16px", borderRadius: "8px", textAlign: "center", fontWeight: "bold", textDecoration: "none" }}>Download Catalog</a>
            </div>
          </div>
        </div>

        {/* Technical Specification Table */}
        <div style={{ marginTop: "80px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 800, marginBottom: "30px", borderBottom: "2px solid #f1f5f9", paddingBottom: "15px" }}>Technical Specifications</h2>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "15px" }}>
            <tbody>
              {Object.entries(product.technicalDetails).map(([key, value], idx) => (
                <tr key={key} style={{ backgroundColor: idx % 2 === 0 ? "#f8fafc" : "transparent" }}>
                  <td style={{ padding: "15px 20px", fontWeight: "bold", border: "1px solid #e2e8f0", width: "30%" }}>{key}</td>
                  <td style={{ padding: "15px 20px", border: "1px solid #e2e8f0", color: "#475569" }}>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: "#0f172a", color: "#94a3b8", padding: "60px 20px", marginTop: "100px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
          <h3 style={{ color: "white", marginBottom: "20px" }}>Ningbo Zhenhai Bowang Autoparts Co., Ltd.</h3>
          <p style={{ fontSize: "14px" }}>Zhenhai District, Ningbo City, Zhejiang Province, China</p>
          <div style={{ marginTop: "30px", borderTop: "1px solid #1e293b", paddingTop: "20px", fontSize: "12px" }}>
            &copy; 2026 Bowang Autoparts. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
