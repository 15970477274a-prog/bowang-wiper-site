"use client";

import { useState, useEffect } from "react";
import { translations, Locale } from "./translations";

export default function Home() {
  const [lang, setLang] = useState<Locale>("en");
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

  // Load language preference on client side
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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({
          submitted: true,
          loading: false,
          error: ""
        });
        setFormData({
          name: "",
          email: "",
          company: "",
          product: "Universal Wiper Blades",
          message: ""
        });
      } else {
        throw new Error("Failed to send inquiry. Please try again.");
      }
    } catch (err: any) {
      setStatus({
        submitted: false,
        loading: false,
        error: err.message || "An error occurred."
      });
    }
  };

  const t = translations[lang];

  return (
    <main style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>

      {/* Navigation Header with Language Selector */}
      <header style={{
        backgroundColor: "#0f172a",
        color: "#ffffff",
        position: "sticky",
        top: 0,
        zIndex: 50,
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
        fontFamily: "system-ui, -apple-system, sans-serif"
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "15px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "20px", fontWeight: "bold", letterSpacing: "0.05em", color: "#38bdf8" }}>
              BOWANG WIPER
            </span>
            <span style={{ fontSize: "10px", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "1px" }}>
              Autoparts Manufacturer
            </span>
          </div>
          <nav style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <a href="#hero" style={{ color: "#f8fafc", textDecoration: "none", fontSize: "14px", fontWeight: 500 }} className="nav-link">
              {t.navHome}
            </a>
            <a href="#products" style={{ color: "#f8fafc", textDecoration: "none", fontSize: "14px", fontWeight: 500 }} className="nav-link">
              {t.navProducts}
            </a>
            <a href="#why-choose-us" style={{ color: "#f8fafc", textDecoration: "none", fontSize: "14px", fontWeight: 500 }} className="nav-link">
              {t.navAdvantages}
            </a>
            <a href="#about" style={{ color: "#f8fafc", textDecoration: "none", fontSize: "14px", fontWeight: 500 }} className="nav-link">
              {t.navAboutUs}
            </a>
            <a href="/Catalog.pdf" target="_blank" style={{ color: "#38bdf8", textDecoration: "none", fontSize: "14px", fontWeight: 600 }} className="nav-link">
              {t.navCatalog}
            </a>
            <a href="#contact" style={{
              backgroundColor: "#0284c7",
              color: "#ffffff",
              padding: "8px 16px",
              borderRadius: "4px",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: "bold"
            }}>
              {t.navGetQuote}
            </a>

            {/* Language Selector Dropdown */}
            <select
              value={lang}
              onChange={(e) => handleLangChange(e.target.value as Locale)}
              style={{
                backgroundColor: "#1e293b",
                color: "#ffffff",
                border: "1px solid #475569",
                padding: "6px 12px",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "13px",
                outline: "none"
              }}
            >
              <option value="en">English (EN)</option>
              <option value="es">Español (ES)</option>
              <option value="ru">Русский (RU)</option>
              <option value="fr">Français (FR)</option>
              <option value="de">Deutsch (DE)</option>
            </select>
          </nav>
        </div>
      </header>
      
      {/* Hero Section */}
      <section id="hero" className="hero-bg" style={{
        padding: "100px 20px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        <div style={{ maxWidth: "800px" }}>
          <span style={{
            backgroundColor: "#0284c7",
            color: "#ffffff",
            padding: "6px 12px",
            borderRadius: "20px",
            fontSize: "12px",
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: "1px",
            marginBottom: "20px",
            display: "inline-block"
          }}>
            {t.heroTag}
          </span>
          <h1 style={{
            fontSize: "46px",
            fontWeight: 800,
            lineHeight: "1.2",
            marginBottom: "20px",
            letterSpacing: "-0.02em"
          }}>
            {t.heroTitle}
          </h1>
          <p style={{
            fontSize: "18px",
            color: "#94a3b8",
            lineHeight: "1.6",
            marginBottom: "40px",
            maxWidth: "650px",
            margin: "0 auto 40px auto"
          }}>
            {t.heroSubtitle}
          </p>
          <div style={{ display: "flex", gap: "15px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#contact" className="btn-primary" style={{ fontSize: "16px", padding: "14px 36px" }}>
              {t.heroInquireBtn}
            </a>
            <a href="/Catalog.pdf" target="_blank" className="btn-secondary" style={{ fontSize: "16px", padding: "14px 36px" }}>
              {t.navCatalog}
            </a>
            <a href="#products" className="btn-secondary" style={{ fontSize: "16px", padding: "14px 36px", backgroundColor: "transparent", border: "1px solid #475569" }}>
              {t.heroProductsBtn}
            </a>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="section" style={{ backgroundColor: "#f8fafc" }}>
        <h2 className="section-title">{t.productsTitle}</h2>
        <p className="section-subtitle">
          {t.productsSubtitle}
        </p>

        <div className="grid-container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Product 1 */}
          <div className="card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <div style={{
                backgroundColor: "#f0fdf4",
                color: "#16a34a",
                padding: "8px 12px",
                borderRadius: "4px",
                fontSize: "12px",
                fontWeight: "bold",
                display: "inline-block",
                marginBottom: "15px"
              }}>
                {t.bestSeller}
              </div>
              <h3 style={{ fontSize: "22px", color: "#0f172a", marginBottom: "12px" }}>{t.universalTitle}</h3>
              <p style={{ color: "#64748b", fontSize: "14px", lineHeight: "1.6", marginBottom: "20px" }}>
                {t.universalDesc}
              </p>
              <ul style={{ paddingLeft: "20px", fontSize: "13px", color: "#475569", lineHeight: "1.8", marginBottom: "25px" }}>
                <li><strong>Material:</strong> {t.universalSpec1}</li>
                <li><strong>Sizes Available:</strong> {t.universalSpec2}</li>
                <li><strong>Wiping Life:</strong> {t.universalSpec3}</li>
                <li><strong>Adapters:</strong> {t.universalSpec4}</li>
              </ul>
            </div>
            <a href="#contact" onClick={() => setFormData({ ...formData, product: "Universal Wiper Blades" })} className="btn-primary" style={{ width: "100%", padding: "10px" }}>
              {t.getCatalogBtn}
            </a>
          </div>

          {/* Product 2 */}
          <div className="card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <div style={{
                backgroundColor: "#eff6ff",
                color: "#2563eb",
                padding: "8px 12px",
                borderRadius: "4px",
                fontSize: "12px",
                fontWeight: "bold",
                display: "inline-block",
                marginBottom: "15px"
              }}>
                {t.premiumChoice}
              </div>
              <h3 style={{ fontSize: "22px", color: "#0f172a", marginBottom: "12px" }}>{t.specificTitle}</h3>
              <p style={{ color: "#64748b", fontSize: "14px", lineHeight: "1.6", marginBottom: "20px" }}>
                {t.specificDesc}
              </p>
              <ul style={{ paddingLeft: "20px", fontSize: "13px", color: "#475569", lineHeight: "1.8", marginBottom: "25px" }}>
                <li><strong>Material:</strong> {t.specificSpec1}</li>
                <li><strong>Sizes Available:</strong> {t.specificSpec2}</li>
                <li><strong>OE Quality:</strong> {t.specificSpec3}</li>
                <li><strong>Installation:</strong> {t.specificSpec4}</li>
              </ul>
            </div>
            <a href="#contact" onClick={() => setFormData({ ...formData, product: "Specific Fit Wiper Blades" })} className="btn-primary" style={{ width: "100%", padding: "10px" }}>
              {t.getCatalogBtn}
            </a>
          </div>

          {/* Product 3 */}
          <div className="card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <div style={{
                backgroundColor: "#faf5ff",
                color: "#7c3aed",
                padding: "8px 12px",
                borderRadius: "4px",
                fontSize: "12px",
                fontWeight: "bold",
                display: "inline-block",
                marginBottom: "15px"
              }}>
                {t.multiCompatible}
              </div>
              <h3 style={{ fontSize: "22px", color: "#0f172a", marginBottom: "12px" }}>{t.multifunctionTitle}</h3>
              <p style={{ color: "#64748b", fontSize: "14px", lineHeight: "1.6", marginBottom: "20px" }}>
                {t.multifunctionDesc}
              </p>
              <ul style={{ paddingLeft: "20px", fontSize: "13px", color: "#475569", lineHeight: "1.8", marginBottom: "25px" }}>
                <li><strong>Material:</strong> {t.multifunctionSpec1}</li>
                <li><strong>Sizes Available:</strong> {t.multifunctionSpec2}</li>
                <li><strong>Compatibility:</strong> {t.multifunctionSpec3}</li>
                <li><strong>Advantage:</strong> {t.multifunctionSpec4}</li>
              </ul>
            </div>
            <a href="#contact" onClick={() => setFormData({ ...formData, product: "Multifunction Wiper Blades" })} className="btn-primary" style={{ width: "100%", padding: "10px" }}>
              {t.getCatalogBtn}
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="section" style={{ backgroundColor: "#ffffff" }}>
        <h2 className="section-title">{t.whyTitle}</h2>
        <p className="section-subtitle">
          {t.whySubtitle}
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "30px",
          maxWidth: "1200px",
          margin: "0 auto"
        }}>
          <div style={{ padding: "20px", borderLeft: "4px solid #0284c7" }}>
            <h4 style={{ fontSize: "18px", color: "#0f172a", marginBottom: "10px" }}>{t.whyAdv1Title}</h4>
            <p style={{ fontSize: "14px", color: "#64748b", lineHeight: "1.6" }}>
              {t.whyAdv1Desc}
            </p>
          </div>
          <div style={{ padding: "20px", borderLeft: "4px solid #0284c7" }}>
            <h4 style={{ fontSize: "18px", color: "#0f172a", marginBottom: "10px" }}>{t.whyAdv2Title}</h4>
            <p style={{ fontSize: "14px", color: "#64748b", lineHeight: "1.6" }}>
              {t.whyAdv2Desc}
            </p>
          </div>
          <div style={{ padding: "20px", borderLeft: "4px solid #0284c7" }}>
            <h4 style={{ fontSize: "18px", color: "#0f172a", marginBottom: "10px" }}>{t.whyAdv3Title}</h4>
            <p style={{ fontSize: "14px", color: "#64748b", lineHeight: "1.6" }}>
              {t.whyAdv3Desc}
            </p>
          </div>
          <div style={{ padding: "20px", borderLeft: "4px solid #0284c7" }}>
            <h4 style={{ fontSize: "18px", color: "#0f172a", marginBottom: "10px" }}>{t.whyAdv4Title}</h4>
            <p style={{ fontSize: "14px", color: "#64748b", lineHeight: "1.6" }}>
              {t.whyAdv4Desc}
            </p>
          </div>
        </div>
      </section>

      {/* About Us (Factory Showcase) */}
      <section id="about" className="section" style={{ backgroundColor: "#f1f5f9" }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "50px"
        }}>
          <div style={{ flex: "1 1 500px" }}>
            <span style={{ color: "#0284c7", fontWeight: "bold", fontSize: "14px", textTransform: "uppercase" }}>{t.aboutTag}</span>
            <h2 style={{ fontSize: "36px", color: "#0f172a", margin: "10px 0 20px 0", fontWeight: 800 }}>
              {t.aboutTitle}
            </h2>
            <p style={{ color: "#475569", fontSize: "15px", lineHeight: "1.7", marginBottom: "20px" }}>
              {t.aboutDesc1}
            </p>
            <p style={{ color: "#475569", fontSize: "15px", lineHeight: "1.7", marginBottom: "20px" }}>
              {t.aboutDesc2}
            </p>
            <div style={{ display: "flex", gap: "30px", marginTop: "30px" }}>
              <div>
                <span style={{ fontSize: "32px", fontWeight: "bold", color: "#0284c7" }}>{t.aboutStat1Title}</span>
                <p style={{ fontSize: "12px", color: "#64748b", margin: "5px 0 0 0" }}>{t.aboutStat1Desc}</p>
              </div>
              <div>
                <span style={{ fontSize: "32px", fontWeight: "bold", color: "#0284c7" }}>{t.aboutStat2Title}</span>
                <p style={{ fontSize: "12px", color: "#64748b", margin: "5px 0 0 0" }}>{t.aboutStat2Desc}</p>
              </div>
              <div>
                <span style={{ fontSize: "32px", fontWeight: "bold", color: "#0284c7" }}>{t.aboutStat3Title}</span>
                <p style={{ fontSize: "12px", color: "#64748b", margin: "5px 0 0 0" }}>{t.aboutStat3Desc}</p>
              </div>
            </div>
          </div>
          <div style={{
            flex: "1 1 400px",
            backgroundColor: "#0f172a",
            borderRadius: "12px",
            padding: "40px",
            color: "#ffffff"
          }}>
            <h3 style={{ fontSize: "24px", color: "#38bdf8", marginBottom: "20px" }}>{t.aboutPledgeTitle}</h3>
            <blockquote style={{ margin: 0, padding: 0, fontSize: "15px", lineHeight: "1.6", fontStyle: "italic", color: "#cbd5e1" }}>
              {t.aboutPledgeQuote}
            </blockquote>
            <p style={{ margin: "20px 0 0 0", fontSize: "14px", fontWeight: "bold" }}>{t.aboutPledgeAuthor}</p>
          </div>
        </div>
      </section>

      {/* Contact / Inquiry Form */}
      <section id="contact" className="section" style={{ backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 className="section-title">{t.contactTitle}</h2>
          <p className="section-subtitle">
            {t.contactSubtitle}
          </p>

          <form onSubmit={handleSubmit} style={{
            backgroundColor: "#f8fafc",
            border: "1px solid #e2e8f0",
            borderRadius: "8px",
            padding: "40px",
            boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)"
          }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
              marginBottom: "20px"
            }}>
              <div>
                <label style={{ display: "block", fontSize: "14px", fontWeight: 600, marginBottom: "8px", color: "#334155" }}>{t.contactNameLabel}</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder={t.contactNamePlaceholder}
                />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "14px", fontWeight: 600, marginBottom: "8px", color: "#334155" }}>{t.contactEmailLabel}</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder={t.contactEmailPlaceholder}
                />
              </div>
            </div>

            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
              marginBottom: "20px"
            }}>
              <div>
                <label style={{ display: "block", fontSize: "14px", fontWeight: 600, marginBottom: "8px", color: "#334155" }}>{t.contactCompanyLabel}</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="form-input"
                  placeholder={t.contactCompanyPlaceholder}
                />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "14px", fontWeight: 600, marginBottom: "8px", color: "#334155" }}>{t.contactProductLabel}</label>
                <select
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  className="form-input"
                  style={{ cursor: "pointer" }}
                >
                  <option value="Universal Wiper Blades">Universal Wiper Blades</option>
                  <option value="Specific Fit Wiper Blades">Specific Fit Wiper Blades</option>
                  <option value="Multifunction Wiper Blades">Multifunction Wiper Blades</option>
                  <option value="Bulk Customized Order">Bulk OEM/ODM Order</option>
                </select>
              </div>
            </div>

            <div style={{ marginBottom: "30px" }}>
              <label style={{ display: "block", fontSize: "14px", fontWeight: 600, marginBottom: "8px", color: "#334155" }}>{t.contactMessageLabel}</label>
              <textarea
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="form-input"
                placeholder={t.contactMessagePlaceholder}
                style={{ resize: "vertical" }}
              />
            </div>

            {/* Submission Status Message */}
            {status.submitted && (
              <div style={{
                backgroundColor: "#ecfdf5",
                border: "1px solid #059669",
                color: "#065f46",
                padding: "15px",
                borderRadius: "6px",
                marginBottom: "20px",
                fontSize: "14px"
              }}>
                <strong>{t.contactSuccessMsg}</strong>
              </div>
            )}

            {status.error && (
              <div style={{
                backgroundColor: "#fef2f2",
                border: "1px solid #dc2626",
                color: "#991b1b",
                padding: "15px",
                borderRadius: "6px",
                marginBottom: "20px",
                fontSize: "14px"
              }}>
                <strong>{t.contactErrorMsg}</strong> {status.error}
              </div>
            )}

            <button
              type="submit"
              disabled={status.loading}
              className="btn-primary"
              style={{
                width: "100%",
                fontSize: "16px",
                padding: "14px",
                opacity: status.loading ? 0.7 : 1,
                cursor: status.loading ? "not-allowed" : "pointer"
              }}
            >
              {status.loading ? t.contactSubmittingBtn : t.contactSubmitBtn}
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        backgroundColor: "#0f172a",
        color: "#94a3b8",
        padding: "50px 20px 20px 20px",
        fontFamily: "system-ui, -apple-system, sans-serif"
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "40px",
          marginBottom: "40px"
        }}>
          <div>
            <h3 style={{ color: "#f8fafc", fontSize: "18px", marginBottom: "15px" }}>BOWANG WIPER</h3>
            <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
              {t.footerDesc}
            </p>
          </div>
          <div>
            <h3 style={{ color: "#f8fafc", fontSize: "16px", marginBottom: "15px" }}>{t.footerQuickLinks}</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px", fontSize: "14px" }}>
              <li><a href="#hero" style={{ color: "#94a3b8", textDecoration: "none" }}>{t.navHome}</a></li>
              <li><a href="#products" style={{ color: "#94a3b8", textDecoration: "none" }}>{t.navProducts}</a></li>
              <li><a href="#why-choose-us" style={{ color: "#94a3b8", textDecoration: "none" }}>{t.navAdvantages}</a></li>
              <li><a href="#about" style={{ color: "#94a3b8", textDecoration: "none" }}>{t.navAboutUs}</a></li>
            </ul>
          </div>
          <div>
            <h3 style={{ color: "#f8fafc", fontSize: "16px", marginBottom: "15px" }}>{t.footerContactInfo}</h3>
            <p style={{ fontSize: "14px", lineHeight: "1.6", margin: "5px 0" }}>
              <strong>Factory Address:</strong> {t.footerAddress}
            </p>
            <p style={{ fontSize: "14px", lineHeight: "1.6", margin: "5px 0" }}>
              <strong>Email:</strong> sales@lelionautopart.com
            </p>
            <p style={{ fontSize: "14px", lineHeight: "1.6", margin: "5px 0" }}>
              <strong>Domain:</strong> lelionautopart.com
            </p>
          </div>
        </div>
        <div style={{
          borderTop: "1px solid #1e293b",
          paddingTop: "20px",
          textAlign: "center",
          fontSize: "12px",
          color: "#64748b"
        }}>
          <p>&copy; {new Date().getFullYear()} Ningbo Zhenhai Bowang Autoparts Co., Ltd. All rights reserved.</p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/8618867886795"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          width: "60px",
          height: "60px",
          backgroundColor: "#25d366",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
          zIndex: 9999,
          transition: "transform 0.3s ease, background-color 0.3s ease",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        title="Chat with us on WhatsApp"
      >
        <svg
          width="35"
          height="35"
          viewBox="0 0 448 512"
          fill="#ffffff"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.1 0-65.6-8.9-93.3-25.7l-6.7-4.1-69.5 18.3 18.7-67.7-4.5-7.1C51.3 322.2 42.1 289 42.1 254c0-100.1 81.3-181.5 181.6-181.5 48.5 0 94.1 18.9 128.4 53.3 34.3 34.4 53.2 80 53.2 128.4 0 100.2-81.4 181.5-181.4 181.5zm113.8-154.2c-6.2-3.1-36.8-18.1-42.5-20.1-5.7-2-9.8-3.1-13.9 3.1-4.1 6.2-15.8 20.1-19.4 24.1-3.6 4-7.2 4.5-13.4 1.5-6.2-3.1-26.2-9.6-49.9-27.5-18.4-16.4-30.8-36.7-34.4-42.8-3.6-6.2-.4-9.6 2.7-12.7 2.8-2.8 6.2-7.2 9.3-10.8 3.1-3.6 4.1-6.2 6.2-10.3 2-4.1 1-7.7-.5-10.8-1.5-3.1-13.9-33.5-19.1-45.8-5-12.2-10.2-10.5-13.9-10.6-3.6-.1-7.7-.1-11.8-.1-4.1 0-10.8 1.5-16.5 7.7-5.7 6.2-21.6 21.1-21.6 51.5 0 30.4 22.1 59.8 25.2 64 3.1 4.1 43.5 33.2 105.3 59.8 14.7 6.3 26.2 10.1 35.1 13 14.8 2.8 28.2 2.4 38.9 1c11.9-1.5 36.8-4.8 42-9.5 5.1-4.6 5.1-8.7 3.6-10.8-1.5-2.1-5.7-3.1-11.8-6.2z" />
        </svg>
      </a>

    </main>
  );
}
