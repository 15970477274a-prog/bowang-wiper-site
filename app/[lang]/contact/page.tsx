"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { translations, Locale } from "../../translations";
import { trackInquiry } from "../../../lib/analytics";

export default function ContactPage() {
  const params = useParams();
  const urlLang = (params.lang as Locale) || "en";
  const [lang, setLang] = useState<Locale>(urlLang);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    product: "General Inquiry",
    quantity: "",
    sizes: "",
    destination: "",
    packaging: "",
    whatsapp: "",
    message: "",
    marketingConsent: false
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

  // The product page links here as /contact?product=<name>. Without this the
  // parameter was sent and then dropped, so every quote request arrived as
  // "General Inquiry". Read it after mount: the page is statically exported,
  // and a Suspense-wrapped useSearchParams would be needed otherwise.
  useEffect(() => {
    const raw = new URLSearchParams(window.location.search).get("product");
    if (!raw) return;
    const clean = raw.replace(/[\u0000-\u001f]/g, "").trim().slice(0, 200);
    if (clean) setFormData((prev) => ({ ...prev, product: clean }));
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
        trackInquiry({ source: "contact_form", product: formData.product, locale: urlLang });
        setStatus({ submitted: true, loading: false, error: "" });
        setFormData({ name: "", email: "", company: "", product: "General Inquiry", quantity: "", sizes: "", destination: "", packaging: "", whatsapp: "", message: "", marketingConsent: false });
      } else {
        throw new Error("Failed to send inquiry.");
      }
    } catch (err: any) {
      setStatus({ submitted: false, loading: false, error: err.message });
    }
  };

  const t = translations[lang];
  const inputStyle: React.CSSProperties = { width: "100%", padding: "12px", border: "1px solid #e2e8f0", borderRadius: "6px", backgroundColor: "#ffffff" };
  const labelStyle: React.CSSProperties = { display: "block", fontSize: "13px", fontWeight: 700, marginBottom: "8px" };

  return (
    <main style={{ fontFamily: "system-ui, -apple-system, sans-serif", color: "#1e293b", backgroundColor: "#ffffff" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": t.navHome, "item": "https://www.lelionautopart.com/" + urlLang },
              { "@type": "ListItem", "position": 2, "name": t.contactPageTitle, "item": "https://www.lelionautopart.com/" + urlLang + "/contact" }
            ]
          })
        }}
      />
{/* REPLACED WITH GLOBAL LOGISTICS / SHIPPING BANNER */}
      <section style={{ 
        padding: "100px 20px", 
        background: "linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.75)), url('https://sc02.alicdn.com/kf/Hb0410965e6194f008a583d7f500e1b7at.png') center/cover no-repeat", 
        color: "white", 
        textAlign: "center" 
      }}>
        <h1 style={{ fontSize: "42px", fontWeight: 800, marginBottom: "15px" }}>{t.contactPageTitle}</h1>
        <p style={{ color: "#64748b", maxWidth: "700px", margin: "0 auto" }}>{t.contactPageDesc}</p>
      </section>

      <section style={{ padding: "80px 20px", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(400px, 100%), 1fr))", gap: "60px" }}>
          <div>
            <h2 style={{ fontSize: "28px", fontWeight: 800, marginBottom: "35px" }}>{t.contactInfoTitle}</h2>
            <div style={{ marginBottom: "30px" }}>
              <h3 style={{ color: "var(--accent-strong)", textTransform: "uppercase", fontSize: "13px", fontWeight: 800, marginBottom: "10px" }}>{t.contactAddressTitle}</h3>
              <p style={{ fontSize: "16px", color: "#475569", lineHeight: 1.6 }}>{t.footerAddress}</p>
            </div>
            <div style={{ marginBottom: "30px" }}>
              <h3 style={{ color: "var(--accent-strong)", textTransform: "uppercase", fontSize: "13px", fontWeight: 800, marginBottom: "10px" }}>{t.contactPhoneTitle}</h3>
              <p style={{ fontSize: "18px", fontWeight: 700, color: "#0f172a" }}>+8618867886795</p>
              <p style={{ fontSize: "14px", color: "#64748b" }}>{t.contactAvailableOn}</p>
            </div>
            <div style={{ marginBottom: "30px" }}>
              <h3 style={{ color: "var(--accent-strong)", textTransform: "uppercase", fontSize: "13px", fontWeight: 800, marginBottom: "10px" }}>{t.contactOfficialEmail}</h3>
              <p style={{ fontSize: "18px", fontWeight: 700, color: "#0f172a" }}>bwb@bwwiper.com</p>
            </div>
            <div style={{ marginTop: "50px", padding: "30px", backgroundColor: "#f8fafc", borderRadius: "16px", border: "1px solid #e2e8f0" }}>
               <h3 style={{ fontSize: "16px", fontWeight: 800, marginBottom: "15px" }}>{t.contactSupportTitle}</h3>
               <p style={{ fontSize: "14px", color: "#64748b", lineHeight: 1.6 }}>{t.contactSupportDesc}</p>
               <div style={{ display: "flex", gap: "15px", marginTop: "20px" }}>
                  <a href="https://wa.me/8618867886795" target="_blank" onClick={() => trackInquiry({ source: "whatsapp_button", locale: urlLang })} style={{ flex: 1, textAlign: "center", backgroundColor: "var(--whatsapp)", color: "white", padding: "12px", borderRadius: "8px", textDecoration: "none", fontWeight: "bold", fontSize: "14px" }}>{t.whatsappMe}</a>
                  <a href="mailto:bwb@bwwiper.com" onClick={() => trackInquiry({ source: "email_button", locale: urlLang })} style={{ flex: 1, textAlign: "center", backgroundColor: "#0f172a", color: "white", padding: "12px", borderRadius: "8px", textDecoration: "none", fontWeight: "bold", fontSize: "14px" }}>{t.emailUs}</a>
               </div>
            </div>
          </div>
          <div style={{ backgroundColor: "#ffffff", padding: "40px", borderRadius: "20px", boxShadow: "0 20px 40px rgba(0,0,0,0.08)", border: "1px solid #f1f5f9" }}>
            <h3 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "10px" }}>{t.contactTitle}</h3>
            <p style={{ color: "#64748b", fontSize: "14px", marginBottom: "30px" }}>{t.contactSubtitle}</p>
            <div style={{ backgroundColor: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "10px", padding: "16px 18px", marginBottom: "24px", fontSize: "13px", color: "#334155", lineHeight: 1.8 }}>
              <div style={{ fontWeight: 800, color: "#0f172a", marginBottom: "6px" }}>✓ Verified Factory & Certifications</div>
              <div>ISO 9001:2015 · No. 134956 (NQA)</div>
              <div>CE Compliance Certificate (UDEM) · No. M.2022.206.C79712</div>
              <div>MOQ 500 pcs per order · from 100 pcs per size (most models)</div>
              <a href="https://youtu.be/ppMeBaDm2hk" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent-strong)", fontWeight: 700 }}>▶ Watch Factory Video</a>
            </div>
            <form onSubmit={handleSubmit}>
              <input type="text" name="website" tabIndex={-1} autoComplete="off" style={{ position: "absolute", left: "-9999px", opacity: 0 }} aria-hidden="true" />
              <div className="quote-grid">
                <div className="quote-field"><label style={labelStyle}>{t.contactNameLabel}</label><input type="text" name="name" required value={formData.name} onChange={handleChange} style={inputStyle} placeholder={t.contactNamePlaceholder} /></div>
                <div className="quote-field"><label style={labelStyle}>{t.contactEmailLabel}</label><input type="email" name="email" required value={formData.email} onChange={handleChange} style={inputStyle} placeholder={t.contactEmailPlaceholder} /></div>
                <div className="quote-field"><label style={labelStyle}>{t.contactCompanyLabel}</label><input type="text" name="company" value={formData.company} onChange={handleChange} style={inputStyle} placeholder={t.contactCompanyPlaceholder} /></div>
                <div className="quote-field"><label style={labelStyle}>{t.contactWhatsappLabel}</label><input type="text" name="whatsapp" value={formData.whatsapp} onChange={handleChange} style={inputStyle} placeholder={t.contactWhatsappPlaceholder} /></div>
                <div className="quote-field quote-full"><label style={labelStyle}>{t.contactProductLabel}</label><input type="text" name="product" required value={formData.product} onChange={handleChange} style={inputStyle} /></div>
                <div className="quote-field"><label style={labelStyle}>{t.contactQuantityLabel}</label><input type="text" name="quantity" required value={formData.quantity} onChange={handleChange} style={inputStyle} placeholder={t.contactQuantityPlaceholder} /></div>
                <div className="quote-field"><label style={labelStyle}>{t.contactSizesLabel}</label><input type="text" name="sizes" value={formData.sizes} onChange={handleChange} style={inputStyle} placeholder={t.contactSizesPlaceholder} /></div>
                <div className="quote-field"><label style={labelStyle}>{t.contactDestinationLabel}</label><input type="text" name="destination" value={formData.destination} onChange={handleChange} style={inputStyle} placeholder={t.contactDestinationPlaceholder} /></div>
                <div className="quote-field"><label style={labelStyle}>{t.contactPackagingLabel}</label><select name="packaging" value={formData.packaging} onChange={handleChange} style={inputStyle}>
                  <option value="">—</option>
                  <option value="Standard export carton">{t.contactPackagingStandard}</option>
                  <option value="Private label (OEM)">{t.contactPackagingPrivate}</option>
                  <option value="Custom packaging">{t.contactPackagingCustom}</option>
                  <option value="Not sure yet">{t.contactPackagingUnsure}</option>
                </select></div>
                <div className="quote-field quote-full"><label style={labelStyle}>{t.contactMessageLabel}</label><textarea name="message" rows={4} value={formData.message} onChange={handleChange} style={{ ...inputStyle, resize: "none" }} placeholder={t.contactMessagePlaceholder} /></div>
                <div className="quote-field quote-full" style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginTop: "4px" }}>
                  <input type="checkbox" name="marketingConsent" id="marketingConsent" checked={formData.marketingConsent} onChange={(e) => setFormData((prev) => ({ ...prev, marketingConsent: e.target.checked }))} style={{ width: "16px", height: "16px", marginTop: "3px", flexShrink: 0 }} />
                  <label htmlFor="marketingConsent" style={{ fontSize: "12px", color: "#475569", lineHeight: 1.5, cursor: "pointer" }}>{t.consentMarketingLabel}</label>
                </div>
                <div className="quote-field quote-full" style={{ fontSize: "11px", color: "#64748b", lineHeight: 1.6 }}>
                  {t.consentNotice}{" "}
                  <Link href={`/${urlLang}/privacy`} style={{ color: "var(--accent-strong)", textDecoration: "underline" }}>{t.footerPrivacy}</Link>
                </div>
              </div>
              {status.submitted && <div style={{ backgroundColor: "#ecfdf5", color: "#065f46", padding: "15px", borderRadius: "8px", marginBottom: "20px", fontSize: "14px" }}><strong>{t.contactSuccessMsg}</strong></div>}
              <button type="submit" disabled={status.loading} style={{ width: "100%", backgroundColor: "var(--accent-strong)", color: "white", padding: "15px", borderRadius: "8px", fontSize: "16px", fontWeight: "bold", cursor: "pointer" }}>{status.loading ? t.contactSubmittingBtn : t.contactSubmitBtn}</button>
            </form>
          </div>
        </div>
      </section>

      <section style={{ height: "450px", width: "100%", backgroundColor: "#f1f5f9" }}>
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108846.54924734346!2d121.49391033671239!3d29.98632662058356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x344d799015099f67%3A0x6b4430e461244517!2sZhenhai%20District%2C%20Ningbo%2C%20Zhejiang%2C%20China!5e0!3m2!1sen!2sus!4v1717891234567!5m2!1sen!2sus" title="Lelion Autoparts location in Zhenhai District, Ningbo on Google Maps" width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </section>
</main>
  );
}
