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

  return (
    <main style={{ fontFamily: "system-ui, -apple-system, sans-serif", color: "#1e293b", backgroundColor: "#ffffff" }}>
{/* REPLACED WITH MODERN FACTORY PRODUCTION LINE BANNER */}
      <section style={{ 
        padding: "100px 20px", 
        background: "linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url('https://sc02.alicdn.com/kf/Hf62654b25ce145c596b525b489f1a81aW.png') center/cover no-repeat", 
        color: "white", 
        textAlign: "center" 
      }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "48px", fontWeight: 800, marginBottom: "20px" }}>Excellence in Manufacturing</h1>
          <p style={{ fontSize: "18px", color: "#cbd5e1", lineHeight: 1.6 }}>Leading the global wiper blade industry through continuous innovation and strict quality control standards.</p>
        </div>
      </section>

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
             <img src="https://sc02.alicdn.com/kf/H2533c3c14bc74cd3afe116f60a8357f4U.jpg" alt="Bowang Autoparts Factory Front" style={{ width: "100%", borderRadius: "16px", boxShadow: "0 20px 50px rgba(0,0,0,0.15)", border: "1px solid #e2e8f0" }} />
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#f1f5f9", padding: "60px 20px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "flex", justifyContent: "space-around", textAlign: "center", flexWrap: "wrap", gap: "30px" }}>
          <div><span style={{ fontSize: "42px", fontWeight: 800, color: "#0284c7" }}>{t.aboutStat1Title}</span><p style={{ fontSize: "14px", fontWeight: 600, color: "#64748b", textTransform: "uppercase" }}>{t.aboutStat1Desc}</p></div>
          <div><span style={{ fontSize: "42px", fontWeight: 800, color: "#0284c7" }}>{t.aboutStat2Title}</span><p style={{ fontSize: "14px", fontWeight: 600, color: "#64748b", textTransform: "uppercase" }}>{t.aboutStat2Desc}</p></div>
          <div><span style={{ fontSize: "42px", fontWeight: 800, color: "#0284c7" }}>{t.aboutStat3Title}</span><p style={{ fontSize: "14px", fontWeight: 600, color: "#64748b", textTransform: "uppercase" }}>{t.aboutStat3Desc}</p></div>
          <div><span style={{ fontSize: "42px", fontWeight: 800, color: "#0284c7" }}>12M+</span><p style={{ fontSize: "14px", fontWeight: 600, color: "#64748b", textTransform: "uppercase" }}>Annual Capacity</p></div>
        </div>
      </section>

      <section style={{ backgroundColor: "#0f172a", padding: "100px 20px", color: "white" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "36px", fontWeight: 800, marginBottom: "20px" }}>Quality & Certifications</h2>
          <p style={{ color: "#94a3b8", marginBottom: "60px", maxWidth: "700px", margin: "0 auto" }}>We strictly adhere to global automotive quality management standards. Every wiper blade undergoes rigorous testing.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px" }}>
             {certificates.map((cert, i) => (
               <div key={i} style={{ backgroundColor: "white", borderRadius: "16px", padding: "20px", textAlign: "center", boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}>
                 <div style={{ height: "400px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                   <img src={cert.url} alt={cert.title} style={{ maxWidth: "100%", maxHeight: "100%", borderRadius: "4px" }} />
                 </div>
                 <h3 style={{ color: "#0f172a", fontSize: "18px", fontWeight: 800, marginBottom: "8px" }}>{cert.title}</h3>
                 <p style={{ color: "#64748b", fontSize: "13px" }}>{cert.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

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
</main>
  );
}
