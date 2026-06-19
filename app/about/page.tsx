"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { translations, Locale } from "../translations";

export default function AboutPage() {
  const [lang, setLang] = useState<Locale>("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("lelion_lang") as Locale;
    if (savedLang && ["en", "es", "ru", "fr", "de"].includes(savedLang)) {
      setLang(savedLang);
    }
  }, []);

  const handleLangChange = (newLang: Locale) => {
    setLang(newLang);
    localStorage.setItem("lelion_lang", newLang);
  };

  const t = translations[lang];

  const certificates = [
    {
      title: "ISO 9001:2015 Certificate",
      url: "https://sc02.alicdn.com/kf/H1be823d630b64d1f853a7537099aab2bJ.jpg",
      desc: "International Quality Management Standard"
    },
    {
      title: "CE Certificate",
      url: "https://sc02.alicdn.com/kf/Hb31ab6aad6c947558d269b45b921199bz.png",
      desc: "European Market Conformity"
    },
    {
      title: "Wiper Rubber Strip Test Report",
      url: "https://sc02.alicdn.com/kf/He68d042a711e42babef62c2ebea3ee2fN.png",
      desc: "Physical Property & Durability Analysis"
    }
  ];

  // BreadcrumbList schema for AEO
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.lelionautopart.com/" },
      { "@type": "ListItem", "position": 2, "name": "About Us", "item": "https://www.lelionautopart.com/about" }
    ]
  };

  return (
    <main>
      
      {/* BreadcrumbList JSON-LD for AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      {/* Navigation Header */}
      <header className="header">
        <div className="header-inner">
          <div className="header-brand">
            <span className="header-title">BOWANG WIPER</span>
            <span className="header-subtitle">Autoparts Manufacturer</span>
          </div>
          <nav className="nav">
            <Link href="/" className="nav-link">{t.navHome}</Link>
            <Link href="/products" className="nav-link">{t.navProducts}</Link>
            <Link href="/blog" className="nav-link">Blog</Link>
            <Link href="/about" className="nav-link active">{t.navAboutUs}</Link>
            <a href="/Catalog.pdf" target="_blank" className="nav-link" style={{color:"var(--accent-glow)",fontWeight:600}}>{t.navCatalog}</a>
            <Link href="/contact" style={{ backgroundColor: "#0284c7", color: "#ffffff", padding: "8px 16px", borderRadius: "4px", textDecoration: "none", fontSize: "14px", fontWeight: "bold" }}>{t.navGetQuote}</Link>
            <select value={lang} onChange={(e) => handleLangChange(e.target.value as Locale)} className="lang-select">
              <option value="en">English</option><option value="es">Español</option><option value="ru">Русский</option><option value="fr">Français</option><option value="de">Deutsch</option>
            </select>
          </nav>
        </div>
      </header>

      {/* Hero / Banner */}
      <section style={{ 
        padding: "100px 20px", 
        background: "linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.85)), url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80') center/cover no-repeat", 
        color: "white", 
        textAlign: "center" 
      }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "48px", fontWeight: 800, marginBottom: "20px" }}>About Lelion Autoparts</h1>
          <p style={{ fontSize: "18px", color: "#cbd5e1", lineHeight: 1.6 }}>Leading the global wiper blade industry through innovation, quality, and direct factory manufacturing excellence.</p>
        </div>
      </section>

      {/* Main Content: Company Intro */}
      <section style={{ padding: "80px 20px", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ display: "flex", gap: "60px", flexWrap: "wrap", alignItems: "center" }}>
          <div style={{ flex: "1 1 500px" }}>
             <h2 style={{ fontSize: "32px", fontWeight: 800, marginBottom: "25px", color: "#0f172a" }}>{t.aboutTitle}</h2>
             <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#475569", marginBottom: "20px" }}>{t.aboutDesc1}</p>
             <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#475569", marginBottom: "30px" }}>{t.aboutDesc2}</p>
             
             <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginTop: "40px" }}>
                <div style={{ backgroundColor: "#f8fafc", padding: "20px", borderRadius: "10px", borderLeft: "4px solid #0284c7" }}>
                   <h4 style={{ margin: "0 0 5px 0", color: "#0f172a" }}>Our Mission</h4>
                   <p style={{ margin: 0, fontSize: "14px", color: "#64748b" }}>To provide crystal clear vision and safety to every driver worldwide.</p>
                </div>
                <div style={{ backgroundColor: "#f8fafc", padding: "20px", borderRadius: "10px", borderLeft: "4px solid #0284c7" }}>
                   <h4 style={{ margin: "0 0 5px 0", color: "#0f172a" }}>Global Vision</h4>
                   <p style={{ margin: 0, fontSize: "14px", color: "#64748b" }}>Becoming the #1 trusted OEM partner for the automotive aftermarket.</p>
                </div>
             </div>
          </div>
          <div style={{ flex: "1 1 400px", position: "relative" }}>
             {/* Updated with real company storefront photo */}
             <img src="https://sc02.alicdn.com/kf/H2533c3c14bc74cd3afe116f60a8357f4U.jpg" alt="Bowang Autoparts Factory Front" style={{ width: "100%", borderRadius: "16px", boxShadow: "0 20px 50px rgba(0,0,0,0.15)", border: "1px solid #e2e8f0" }} />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ backgroundColor: "#f1f5f9", padding: "60px 20px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "flex", justifyContent: "space-around", textAlign: "center", flexWrap: "wrap", gap: "30px" }}>
          <div>
            <span style={{ fontSize: "42px", fontWeight: 800, color: "#0284c7" }}>{t.aboutStat1Title}</span>
            <p style={{ fontSize: "14px", fontWeight: 600, color: "#64748b", textTransform: "uppercase" }}>{t.aboutStat1Desc}</p>
          </div>
          <div>
            <span style={{ fontSize: "42px", fontWeight: 800, color: "#0284c7" }}>{t.aboutStat2Title}</span>
            <p style={{ fontSize: "14px", fontWeight: 600, color: "#64748b", textTransform: "uppercase" }}>{t.aboutStat2Desc}</p>
          </div>
          <div>
            <span style={{ fontSize: "42px", fontWeight: 800, color: "#0284c7" }}>{t.aboutStat3Title}</span>
            <p style={{ fontSize: "14px", fontWeight: 600, color: "#64748b", textTransform: "uppercase" }}>{t.aboutStat3Desc}</p>
          </div>
          <div>
            <span style={{ fontSize: "42px", fontWeight: 800, color: "#0284c7" }}>12M+</span>
            <p style={{ fontSize: "14px", fontWeight: 600, color: "#64748b", textTransform: "uppercase" }}>Annual Capacity</p>
          </div>
        </div>
      </section>

      {/* QC & Certificates Section */}
      <section style={{ backgroundColor: "#0f172a", padding: "100px 20px", color: "white" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "32px", fontWeight: 800, marginBottom: "20px" }}>Quality & Certifications</h2>
          <p style={{ color: "#94a3b8", marginBottom: "60px", maxWidth: "700px", margin: "0 auto 60px" }}>
            We strictly adhere to global automotive quality management standards. Every wiper blade undergoes rigorous testing to ensure peak performance.
          </p>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px" }}>
             {certificates.map((cert, i) => (
               <div key={i} style={{ 
                 backgroundColor: "white", 
                 borderRadius: "16px", 
                 padding: "20px", 
                 textAlign: "center",
                 boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                 transition: "transform 0.3s ease"
               }} className="cert-card-hover">
                 <div style={{ height: "400px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                   <img src={cert.url} alt={cert.title} style={{ maxWidth: "100%", maxHeight: "100%", borderRadius: "4px" }} />
                 </div>
                 <h3 style={{ color: "#0f172a", fontSize: "18px", fontWeight: 800, marginBottom: "8px" }}>{cert.title}</h3>
                 <p style={{ color: "#64748b", fontSize: "13px", fontWeight: 500 }}>{cert.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Milestone Section */}
      <section style={{ padding: "100px 20px", maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "32px", fontWeight: 800, textAlign: "center", marginBottom: "60px" }}>Our Development Milestones</h2>
        <div style={{ borderLeft: "2px solid #e2e8f0", paddingLeft: "30px", marginLeft: "20px" }}>
           {[
             { year: "2011", event: "Foundation of Bowang Autoparts in Ningbo." },
             { year: "2015", event: "Expanded manufacturing facility to 8,000sqm and introduced automated lines." },
             { year: "2019", event: "Obtained IATF 16949 international quality certification." },
             { year: "2024", event: "Reaching 50+ export countries and launching high-performance silicone series." }
           ].map((item, i) => (
             <div key={i} style={{ marginBottom: "40px", position: "relative" }}>
               <div style={{ position: "absolute", width: "12px", height: "12px", backgroundColor: "#0284c7", borderRadius: "50%", left: "-37px", top: "8px" }}></div>
               <span style={{ fontWeight: 800, color: "#0284c7", fontSize: "20px" }}>{item.year}</span>
               <p style={{ margin: "10px 0 0 0", color: "#475569" }}>{item.event}</p>
             </div>
           ))}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: "100px 20px", textAlign: "center", backgroundColor: "#f8fafc" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "36px", fontWeight: 800, marginBottom: "20px" }}>Ready to partner with us?</h2>
          <p style={{ color: "#64748b", marginBottom: "40px" }}>Get in touch with our expert export team today for bulk pricing and technical support.</p>
          <Link href="/contact" className="btn-primary-lg">Contact Us Now</Link>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <h3 className="footer-brand">BOWANG WIPER</h3>
          <p className="footer-desc">{t.footerDesc}</p>
          <div className="footer-divider">
            &copy; 2026 Ningbo Zhenhai Bowang Autoparts Co., Ltd. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a href="https://wa.me/8618867886795" target="_blank" rel="noopener noreferrer" className="whatsapp-float">
        <svg width="30" height="30" viewBox="0 0 448 512" fill="white"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.1 0-65.6-8.9-93.3-25.7l-6.7-4.1-69.5 18.3 18.7-67.7-4.5-7.1C51.3 322.2 42.1 289 42.1 254c0-100.1 81.3-181.5 181.6-181.5 48.5 0 94.1 18.9 128.4 53.3 34.3 34.4 53.2 80 53.2 128.4 0 100.2-81.4 181.5-181.4 181.5zm113.8-154.2c-6.2-3.1-36.8-18.1-42.5-20.1-5.7-2-9.8-3.1-13.9 3.1-4.1 6.2-15.8 20.1-19.4 24.1-3.6 4-7.2 4.5-13.4 1.5-6.2-3.1-26.2-9.6-49.9-27.5-18.4-16.4-30.8-36.7-34.4-42.8-3.6-6.2-.4-9.6 2.7-12.7 2.8-2.8 6.2-7.2 9.3-10.8 3.1-3.6 4.1-6.2 6.2-10.3 2-4.1 1-7.7-.5-10.8-1.5-3.1-13.9-33.5-19.1-45.8-5-12.2-10.2-10.5-13.9-10.6-3.6-.1-7.7-.1-11.8-.1-4.1 0-10.8 1.5-16.5 7.7-5.7 6.2-21.6 21.1-21.6 51.5 0 30.4 22.1 59.8 25.2 64 3.1 4.1 43.5 33.2 105.3 59.8 14.7 6.3 26.2 10.1 35.1 13 14.8 2.8 28.2 2.4 38.9 1c11.9-1.5 36.8-4.8 42-9.5 5.1-4.6 5.1-8.7 3.6-10.8-1.5-2.1-5.7-3.1-11.8-6.2z" /></svg>
      </a>

    </main>
  );
}


