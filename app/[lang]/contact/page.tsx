"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { translations, Locale } from "../../translations";

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

  return (
    <main style={{ fontFamily: "system-ui, -apple-system, sans-serif", color: "#1e293b", backgroundColor: "#ffffff" }}>
{/* REPLACED WITH GLOBAL LOGISTICS / SHIPPING BANNER */}
      <section style={{ 
        padding: "100px 20px", 
        background: "linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.75)), url('https://sc02.alicdn.com/kf/Hb0410965e6194f008a583d7f500e1b7at.png') center/cover no-repeat", 
        color: "white", 
        textAlign: "center" 
      }}>
        <h1 style={{ fontSize: "42px", fontWeight: 800, marginBottom: "15px" }}>{t.contactPageTitle}</h1>
        <p style={{ color: "#94a3b8", maxWidth: "700px", margin: "0 auto" }}>{t.contactPageDesc}</p>
      </section>

      <section style={{ padding: "80px 20px", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "60px" }}>
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
               <p style={{ fontSize: "14px", color: "#64748b", lineHeight: 1.6 }}>Our export department provides 1-on-1 technical consultation.</p>
               <div style={{ display: "flex", gap: "15px", marginTop: "20px" }}>
                  <a href="https://wa.me/8618867886795" target="_blank" style={{ flex: 1, textAlign: "center", backgroundColor: "#25d366", color: "white", padding: "12px", borderRadius: "8px", textDecoration: "none", fontWeight: "bold", fontSize: "14px" }}>WhatsApp Me</a>
                  <a href="mailto:15970477274a@gmail.com" style={{ flex: 1, textAlign: "center", backgroundColor: "#0f172a", color: "white", padding: "12px", borderRadius: "8px", textDecoration: "none", fontWeight: "bold", fontSize: "14px" }}>Email Us</a>
               </div>
            </div>
          </div>
          <div style={{ backgroundColor: "#ffffff", padding: "40px", borderRadius: "20px", boxShadow: "0 20px 40px rgba(0,0,0,0.08)", border: "1px solid #f1f5f9" }}>
            <h3 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "10px" }}>{t.contactTitle}</h3>
            <p style={{ color: "#64748b", fontSize: "14px", marginBottom: "30px" }}>{t.contactSubtitle}</p>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: "20px" }}><label style={{ display: "block", fontSize: "13px", fontWeight: 700, marginBottom: "8px" }}>{t.contactNameLabel}</label><input type="text" name="name" required value={formData.name} onChange={handleChange} style={{ width: "100%", padding: "12px", border: "1px solid #e2e8f0", borderRadius: "6px" }} placeholder={t.contactNamePlaceholder} /></div>
              <div style={{ marginBottom: "20px" }}><label style={{ display: "block", fontSize: "13px", fontWeight: 700, marginBottom: "8px" }}>{t.contactEmailLabel}</label><input type="email" name="email" required value={formData.email} onChange={handleChange} style={{ width: "100%", padding: "12px", border: "1px solid #e2e8f0", borderRadius: "6px" }} placeholder={t.contactEmailPlaceholder} /></div>
              <div style={{ marginBottom: "20px" }}><label style={{ display: "block", fontSize: "13px", fontWeight: 700, marginBottom: "8px" }}>{t.contactCompanyLabel}</label><input type="text" name="company" value={formData.company} onChange={handleChange} style={{ width: "100%", padding: "12px", border: "1px solid #e2e8f0", borderRadius: "6px" }} placeholder={t.contactCompanyPlaceholder} /></div>
              <div style={{ marginBottom: "25px" }}><label style={{ display: "block", fontSize: "13px", fontWeight: 700, marginBottom: "8px" }}>{t.contactMessageLabel}</label><textarea name="message" required rows={4} value={formData.message} onChange={handleChange} style={{ width: "100%", padding: "12px", border: "1px solid #e2e8f0", borderRadius: "6px", resize: "none" }} placeholder={t.contactMessagePlaceholder} /></div>
              {status.submitted && <div style={{ backgroundColor: "#ecfdf5", color: "#065f46", padding: "15px", borderRadius: "8px", marginBottom: "20px", fontSize: "14px" }}><strong>{t.contactSuccessMsg}</strong></div>}
              <button type="submit" disabled={status.loading} style={{ width: "100%", backgroundColor: "#0284c7", color: "white", padding: "15px", borderRadius: "8px", fontSize: "16px", fontWeight: "bold", cursor: "pointer" }}>{status.loading ? t.contactSubmittingBtn : t.contactSubmitBtn}</button>
            </form>
          </div>
        </div>
      </section>

      <section style={{ height: "450px", width: "100%", backgroundColor: "#f1f5f9" }}>
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108846.54924734346!2d121.49391033671239!3d29.98632662058356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x344d799015099f67%3A0x6b4430e461244517!2sZhenhai%20District%2C%20Ningbo%2C%20Zhejiang%2C%20China!5e0!3m2!1sen!2sus!4v1717891234567!5m2!1sen!2sus" width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </section>
</main>
  );
}
