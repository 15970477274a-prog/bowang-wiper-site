"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { translations, Locale } from "../translations";
import Image from "next/image";
import { allProducts } from "../data/products";
import { getProductTranslation } from "../data/productTranslations";
import PackagingSection from "../../components/PackagingSection";

export default function Home() {
  const params = useParams();
  const urlLang = (params.lang as Locale) || "en";
  const [lang, setLang] = useState<Locale>(urlLang);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    product: "Universal Wiper Blades",
    message: ""
  });
  const [status, setStatus] = useState({
    submitted: false,
    loading: false,
    error: ""
  });

  useEffect(() => {
    setLang(urlLang);
    localStorage.setItem("lelion_lang", urlLang);
  }, [urlLang]);

  const handleLangChange = (newLang: Locale) => {
    setLang(newLang);
    localStorage.setItem("lelion_lang", newLang);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ submitted: false, loading: true, error: "" });
    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus({ submitted: true, loading: false, error: "" });
        setFormData({ name: "", email: "", company: "", product: "Universal Wiper Blades", message: "" });
      } else {
        throw new Error("Failed to send inquiry.");
      }
    } catch (err: any) {
      setStatus({ submitted: false, loading: false, error: err.message });
    }
  };

  const t = translations[lang];
  const l = (p: string) => "/" + lang + p;

  const faqItems = [
    { q: t.faqQ1, a: t.faqA1 },
    { q: t.faqQ2, a: t.faqA2 },
    { q: t.faqQ3, a: t.faqA3 },
    { q: t.faqQ4, a: t.faqA4 },
    { q: t.faqQ5, a: t.faqA5 },
    { q: t.faqQ6, a: t.faqA6 }
  ];

  
  // FAQ Structured Data
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": { "@type": "Answer", "text": item.a }
    }))
  };

  // LocalBusiness Structured Data
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Ningbo Zhenhai Bowang Autoparts Co., Ltd.",
    "image": "https://www.lelionautopart.com/banner.webp",
    "@id": "https://www.lelionautopart.com/",
    "url": "https://www.lelionautopart.com/",
    "telephone": "+86-18867886795",
    "email": "bwb@bwwiper.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ningbo",
      "addressRegion": "Zhejiang",
      "addressCountry": "CN"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    "priceRange": "$"
  };

  return (
    <main style={{ fontFamily: "system-ui, -apple-system, sans-serif", color: "#1e293b", backgroundColor: "#fcfcfc" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
{/* REPLACED WITH PROFESSIONAL RAIN-DRIVING BANNER */}
      <section id="hero" style={{ 
        padding: "140px 20px", 
        textAlign: "center", 
        background: "linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url('/banner.webp') center/cover no-repeat", 
        color: "white" 
      }}>
        <div style={{ maxWidth: "850px", margin: "0 auto" }}>
          <span style={{ backgroundColor: "#0284c7", padding: "6px 16px", borderRadius: "20px", fontSize: "12px", fontWeight: "bold", textTransform: "uppercase", marginBottom: "25px", display: "inline-block" }}>{t.heroTag}</span>
          <h1 style={{ fontSize: "56px", fontWeight: 800, marginBottom: "25px", lineHeight: 1.1, textShadow: "0 2px 10px rgba(0,0,0,0.3)" }}>{t.heroTitle}</h1>
          <p style={{ fontSize: "20px", color: "#cbd5e1", marginBottom: "45px", lineHeight: 1.6 }}>{t.heroSubtitle}</p>
          <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
            <Link href={l("/contact")} className="btn-primary" style={{ padding: "18px 45px", fontSize: "18px", textDecoration: "none", backgroundColor: "#0284c7", color: "white", borderRadius: "8px", fontWeight: "bold", boxShadow: "0 10px 25px rgba(2, 132, 199, 0.4)" }}>{t.heroInquireBtn}</Link>
            <Link href={l("/products")} className="btn-secondary" style={{ padding: "18px 45px", fontSize: "18px", backgroundColor: "white", color: "#0f172a", textDecoration: "none", borderRadius: "8px", fontWeight: "bold" }}>{t.heroProductsBtn}</Link>
          </div>
        </div>
      </section>

      <section style={{ padding: "100px 20px", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2 style={{ fontSize: "36px", fontWeight: 800, color: "#0f172a" }}>{t.featuredCategories}</h2>
          <div style={{ height: "4px", width: "60px", backgroundColor: "#0284c7", margin: "15px auto" }}></div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "30px" }}>
          {allProducts.slice(0, 3).map(p => {
              const pt = getProductTranslation(p.id, lang);
              const pName = pt?.name || p.name;
              const pDesc = pt?.desc || p.desc;
              return (
            <div key={p.id} style={{ backgroundColor: "white", borderRadius: "12px", overflow: "hidden", border: "1px solid #e2e8f0", textAlign: "center" }}>
               <div style={{ height: "300px", backgroundColor: "#f8fafc", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
                 <img loading="lazy" src={p.image} alt={pName} style={{ maxWidth: "100%", maxHeight: "100%", width: "auto", height: "auto", objectFit: "contain" }} />
               </div>
               <div style={{ padding: "30px" }}>
                 <h3 style={{ fontSize: "22px", fontWeight: 700, marginBottom: "15px" }}>{pName}</h3>
                 <p style={{ color: "#64748b", fontSize: "15px", marginBottom: "25px", height: "45px", overflow: "hidden" }}>{pDesc}</p>
                 <Link href={`/products/${p.id}`} style={{ color: "#0284c7", fontWeight: "bold", textDecoration: "none", fontSize: "15px" }}>{t.viewProducts}</Link>
               </div>
            </div>
          )})}
        </div>
        <div style={{ textAlign: "center", marginTop: "60px" }}>
           <Link href={l("/products")} style={{ background: "linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url('/banner.webp') center/cover no-repeat", color: "white", padding: "15px 40px", borderRadius: "8px", textDecoration: "none", fontWeight: "bold" }}>{t.enterProductCenter}</Link>
        </div>
      </section>

      
      <PackagingSection title={t.packagingTitle} desc={t.packagingDesc} />

      <section style={{ padding: "100px 20px", backgroundColor: "#f8fafc" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ fontSize: "36px", fontWeight: 800, color: "#0f172a" }}>{t.faqTitle}</h2>
            <div style={{ height: "4px", width: "60px", backgroundColor: "#0284c7", margin: "15px auto" }}></div>
            <p style={{ color: "#64748b" }}>{t.faqSubtitle}</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            {faqItems.map((item, idx) => (
              <div key={idx} style={{ backgroundColor: "#ffffff", borderRadius: "12px", border: "1px solid #e2e8f0", overflow: "hidden" }}>
                <button onClick={() => toggleFaq(idx)} style={{ width: "100%", padding: "20px 30px", display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "transparent", border: "none", cursor: "pointer", textAlign: "left" }}>
                  <span style={{ fontSize: "18px", fontWeight: 700, color: openFaq === idx ? "#0284c7" : "#0f172a" }}>{item.q}</span>
                  <span style={{ fontSize: "24px", color: "#94a3b8", transform: openFaq === idx ? "rotate(45deg)" : "rotate(0)", transition: "transform 0.3s" }}>+</span>
                </button>
                <div style={{ maxHeight: openFaq === idx ? "300px" : "0", overflow: "hidden", transition: "all 0.3s ease-out", padding: openFaq === idx ? "0 30px 25px 30px" : "0 30px" }}>
                  <p style={{ fontSize: "16px", color: "#64748b", lineHeight: 1.6, margin: 0 }}>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" style={{ padding: "100px 20px", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", backgroundColor: "#f8fafc", padding: "60px", borderRadius: "16px", border: "1px solid #e2e8f0" }}>
          <div style={{ textAlign: "center", marginBottom: "45px" }}>
            <h2 style={{ fontSize: "32px", fontWeight: 800, color: "#0f172a" }}>{t.contactTitle}</h2>
            <p style={{ color: "#64748b" }}>{t.contactSubtitle}</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "25px", marginBottom: "25px" }}>
              <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder={t.contactNameLabel} style={{ width: "100%", padding: "14px", border: "1px solid #e2e8f0", borderRadius: "8px" }} />
              <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder={t.contactEmailLabel} style={{ width: "100%", padding: "14px", border: "1px solid #e2e8f0", borderRadius: "8px" }} />
            </div>
            <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder={t.contactCompanyLabel} style={{ width: "100%", padding: "14px", border: "1px solid #e2e8f0", borderRadius: "8px", marginBottom: "25px" }} />
            <select name="product" value={formData.product} onChange={handleChange} style={{ width: "100%", padding: "14px", border: "1px solid #e2e8f0", borderRadius: "8px", marginBottom: "25px" }}>
              <option value="Universal Wiper Blades">Universal</option><option value="Specific Fit Wiper Blades">Specific Fit</option><option value="Multifunction Wiper Blades">Multifunction</option>
            </select>
            <textarea name="message" required rows={4} value={formData.message} onChange={handleChange} placeholder={t.contactMessagePlaceholder} style={{ width: "100%", padding: "14px", border: "1px solid #e2e8f0", borderRadius: "8px", marginBottom: "35px" }} />
            {status.submitted && <div style={{ backgroundColor: "#ecfdf5", color: "#065f46", padding: "15px", borderRadius: "8px", marginBottom: "25px" }}><strong>{t.contactSuccessMsg}</strong></div>}
            <button type="submit" disabled={status.loading} style={{ width: "100%", backgroundColor: "#0284c7", color: "white", padding: "16px", borderRadius: "8px", fontSize: "16px", fontWeight: "bold", cursor: "pointer" }}>{status.loading ? t.contactSubmittingBtn : t.contactSubmitBtn}</button>
          </form>
        </div>
      </section>
    </main>
  );
}
