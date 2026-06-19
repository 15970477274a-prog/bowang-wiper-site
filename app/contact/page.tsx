"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { translations, Locale } from "../translations";

export default function ContactPage() {
  const [lang, setLang] = useState<Locale>("en");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    product: "General Inquiry",
    message: ""
  });
  const [status, setStatus] = useState({
    submitted: false,
    loading: false,
    error: ""
  });

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
        setFormData({ name: "", email: "", company: "", product: "General Inquiry", message: "" });
      } else {
        throw new Error("Failed to send inquiry.");
      }
    } catch (err: any) {
      setStatus({ submitted: false, loading: false, error: err.message });
    }
  };

  const t = translations[lang];

  // BreadcrumbList schema for AEO
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.lelionautopart.com/" },
      { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://www.lelionautopart.com/contact" }
    ]
  };

  return (
    <main>
      
      {/* BreadcrumbList JSON-LD for AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      {/* Header */}
      <header style={{ backgroundColor: "#0f172a", color: "#ffffff", position: "sticky", top: 0, zIndex: 100 }}>
        <div className="header-inner">
          <Link href="/" style={{ color: "white", textDecoration: "none", fontWeight: "bold", fontSize: "18px" }}>BOWANG WIPER</Link>
          <nav className="nav">
            <Link href="/" style={{ color: "#f8fafc", textDecoration: "none", fontSize: "14px" }}>{t.navHome}</Link>
            <Link href="/products" style={{ color: "#f8fafc", textDecoration: "none", fontSize: "14px" }}>{t.navProducts}</Link>
            <Link href="/blog" className="nav-link">Blog</Link>
            <Link href="/about" style={{ color: "#f8fafc", textDecoration: "none", fontSize: "14px" }}>{t.navAboutUs}</Link>
            <Link href="/contact" style={{ color: "#38bdf8", textDecoration: "none", fontSize: "14px", fontWeight: "bold" }}>{t.navGetQuote}</Link>
            <select value={lang} onChange={(e) => handleLangChange(e.target.value as Locale)} style={{ backgroundColor: "#1e293b", color: "#ffffff", border: "1px solid #475569", padding: "6px 12px", borderRadius: "4px", fontSize: "12px" }}>
               <option value="en">English</option><option value="es">Español</option><option value="ru">Русский</option><option value="fr">Français</option><option value="de">Deutsch</option>
            </select>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section style={{ padding: "80px 20px", backgroundColor: "#0f172a", color: "white", textAlign: "center" }}>
        <h1 style={{ fontSize: "42px", fontWeight: 800, marginBottom: "15px" }}>{t.contactPageTitle}</h1>
        <p style={{ color: "#94a3b8", maxWidth: "700px", margin: "0 auto" }}>{t.contactPageDesc}</p>
      </section>

      {/* Main Grid */}
      <section style={{ padding: "80px 20px", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "60px" }}>
          
          {/* Left: Contact Info */}
          <div>
            <h2 style={{ fontSize: "28px", fontWeight: 800, marginBottom: "35px" }}>{t.contactInfoTitle}</h2>
            
            <div style={{ marginBottom: "30px" }}>
              <h4 style={{ color: "#0284c7", textTransform: "uppercase", fontSize: "13px", fontWeight: 800, marginBottom: "10px" }}>{t.contactAddressTitle}</h4>
              <p style={{ fontSize: "16px", color: "#475569", lineHeight: 1.6 }}>{t.footerAddress}</p>
            </div>

            <div style={{ marginBottom: "30px" }}>
              <h4 style={{ color: "#0284c7", textTransform: "uppercase", fontSize: "13px", fontWeight: 800, marginBottom: "10px" }}>{t.contactPhoneTitle}</h4>
              <p style={{ fontSize: "18px", fontWeight: 700, color: "#0f172a" }}>+86 188 6788 6795</p>
              <p style={{ fontSize: "14px", color: "#64748b" }}>Available on WhatsApp & WeChat</p>
            </div>

            <div style={{ marginBottom: "30px" }}>
              <h4 style={{ color: "#0284c7", textTransform: "uppercase", fontSize: "13px", fontWeight: 800, marginBottom: "10px" }}>Official Email</h4>
              <p style={{ fontSize: "18px", fontWeight: 700, color: "#0f172a" }}>15970477274a@gmail.com</p>
            </div>

            <div style={{ marginTop: "50px", padding: "30px", backgroundColor: "#f8fafc", borderRadius: "16px", border: "1px solid #e2e8f0" }}>
               <h4 style={{ fontSize: "16px", fontWeight: 800, marginBottom: "15px" }}>Wholesale & OEM Support</h4>
               <p style={{ fontSize: "14px", color: "#64748b", lineHeight: 1.6 }}>Our export department provides 1-on-1 technical consultation and bulk pricing for international distributors.</p>
               <div style={{ display: "flex", gap: "15px", marginTop: "20px" }}>
                  <a href="https://wa.me/8618867886795" target="_blank" style={{ flex: 1, textAlign: "center", backgroundColor: "#25d366", color: "white", padding: "12px", borderRadius: "8px", textDecoration: "none", fontWeight: "bold", fontSize: "14px" }}>WhatsApp Me</a>
                  <a href="mailto:15970477274a@gmail.com" style={{ flex: 1, textAlign: "center", backgroundColor: "#0f172a", color: "white", padding: "12px", borderRadius: "8px", textDecoration: "none", fontWeight: "bold", fontSize: "14px" }}>Email Us</a>
               </div>
            </div>
          </div>

          {/* Right: Form */}
          <div style={{ backgroundColor: "#ffffff", padding: "40px", borderRadius: "20px", boxShadow: "0 20px 40px rgba(0,0,0,0.08)", border: "1px solid #f1f5f9" }}>
            <h3 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "10px" }}>{t.contactTitle}</h3>
            <p style={{ color: "#64748b", fontSize: "14px", marginBottom: "30px" }}>{t.contactSubtitle}</p>
            
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: "20px" }}>
                <label style={{ display: "block", fontSize: "13px", fontWeight: 700, marginBottom: "8px" }}>{t.contactNameLabel}</label>
                <input type="text" name="name" required value={formData.name} onChange={handleChange} style={{ width: "100%", padding: "12px", border: "1px solid #e2e8f0", borderRadius: "6px" }} placeholder={t.contactNamePlaceholder} />
              </div>
              <div style={{ marginBottom: "20px" }}>
                <label style={{ display: "block", fontSize: "13px", fontWeight: 700, marginBottom: "8px" }}>{t.contactEmailLabel}</label>
                <input type="email" name="email" required value={formData.email} onChange={handleChange} style={{ width: "100%", padding: "12px", border: "1px solid #e2e8f0", borderRadius: "6px" }} placeholder={t.contactEmailPlaceholder} />
              </div>
              <div style={{ marginBottom: "20px" }}>
                <label style={{ display: "block", fontSize: "13px", fontWeight: 700, marginBottom: "8px" }}>{t.contactCompanyLabel}</label>
                <input type="text" name="company" value={formData.company} onChange={handleChange} style={{ width: "100%", padding: "12px", border: "1px solid #e2e8f0", borderRadius: "6px" }} placeholder={t.contactCompanyPlaceholder} />
              </div>
              <div style={{ marginBottom: "25px" }}>
                <label style={{ display: "block", fontSize: "13px", fontWeight: 700, marginBottom: "8px" }}>{t.contactMessageLabel}</label>
                <textarea name="message" required rows={4} value={formData.message} onChange={handleChange} style={{ width: "100%", padding: "12px", border: "1px solid #e2e8f0", borderRadius: "6px", resize: "none" }} placeholder={t.contactMessagePlaceholder} />
              </div>
              {status.submitted && <div style={{ backgroundColor: "#ecfdf5", color: "#065f46", padding: "15px", borderRadius: "8px", marginBottom: "20px", fontSize: "14px" }}><strong>{t.contactSuccessMsg}</strong></div>}
              <button type="submit" disabled={status.loading} style={{ width: "100%", backgroundColor: "#0284c7", color: "white", padding: "15px", borderRadius: "8px", fontSize: "16px", fontWeight: "bold", cursor: "pointer" }}>{status.loading ? t.contactSubmittingBtn : t.contactSubmitBtn}</button>
            </form>
          </div>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section style={{ height: "450px", width: "100%", backgroundColor: "#f1f5f9" }}>
         <iframe 
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108846.54924734346!2d121.49391033671239!3d29.98632662058356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x344d799015099f67%3A0x6b4430e461244517!2sZhenhai%20District%2C%20Ningbo%2C%20Zhejiang%2C%20China!5e0!3m2!1sen!2sus!4v1717891234567!5m2!1sen!2sus" 
           width="100%" 
           height="100%" 
           style={{ border: 0 }} 
           allowFullScreen={true} 
           loading="lazy" 
           referrerPolicy="no-referrer-when-downgrade">
         </iframe>
      </section>

      <footer style={{ backgroundColor: "#0f172a", color: "#94a3b8", padding: "60px 20px", textAlign: "center" }}>
        <p style={{ fontSize: "12px" }}>&copy; 2026 Ningbo Zhenhai Bowang Autoparts Co., Ltd. All rights reserved.</p>
      </footer>

      {/* Floating WhatsApp */}
      <a href="https://wa.me/8618867886795" target="_blank" rel="noopener noreferrer" className="whatsapp-float">
        <svg width="30" height="30" viewBox="0 0 448 512" fill="white"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.1 0-65.6-8.9-93.3-25.7l-6.7-4.1-69.5 18.3 18.7-67.7-4.5-7.1C51.3 322.2 42.1 289 42.1 254c0-100.1 81.3-181.5 181.6-181.5 48.5 0 94.1 18.9 128.4 53.3 34.3 34.4 53.2 80 53.2 128.4 0 100.2-81.4 181.5-181.4 181.5zm113.8-154.2c-6.2-3.1-36.8-18.1-42.5-20.1-5.7-2-9.8-3.1-13.9 3.1-4.1 6.2-15.8 20.1-19.4 24.1-3.6 4-7.2 4.5-13.4 1.5-6.2-3.1-26.2-9.6-49.9-27.5-18.4-16.4-30.8-36.7-34.4-42.8-3.6-6.2-.4-9.6 2.7-12.7 2.8-2.8 6.2-7.2 9.3-10.8 3.1-3.6 4.1-6.2 6.2-10.3 2-4.1 1-7.7-.5-10.8-1.5-3.1-13.9-33.5-19.1-45.8-5-12.2-10.2-10.5-13.9-10.6-3.6-.1-7.7-.1-11.8-.1-4.1 0-10.8 1.5-16.5 7.7-5.7 6.2-21.6 21.1-21.6 51.5 0 30.4 22.1 59.8 25.2 64 3.1 4.1 43.5 33.2 105.3 59.8 14.7 6.3 26.2 10.1 35.1 13 14.8 2.8 28.2 2.4 38.9 1c11.9-1.5 36.8-4.8 42-9.5 5.1-4.6 5.1-8.7 3.6-10.8-1.5-2.1-5.7-3.1-11.8-6.2z" /></svg>
      </a>

    </main>
  );
}


