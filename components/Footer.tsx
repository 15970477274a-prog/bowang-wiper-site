"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageContext";
import Image from "next/image";
import { translations } from "../app/translations";
import { COOKIE_SETTINGS_EVENT } from "./CookieConsent";

export default function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const l = (path: string) => "/" + lang + path;
  const evidenceLabels: Record<string, { certifications: string; factory: string; quality: string; exhibitions: string }> = {
    en: { certifications: "Certifications", factory: "Factory", quality: "Quality", exhibitions: "Exhibitions" },
    es: { certifications: "Certificaciones", factory: "Fábrica", quality: "Calidad", exhibitions: "Exposiciones" },
    ru: { certifications: "Сертификаты", factory: "Завод", quality: "Качество", exhibitions: "Выставки" },
    fr: { certifications: "Certifications", factory: "Usine", quality: "Qualité", exhibitions: "Expositions" },
    de: { certifications: "Zertifizierungen", factory: "Fabrik", quality: "Qualität", exhibitions: "Messen" },
    zh: { certifications: "认证资质", factory: "工厂实力", quality: "质量控制", exhibitions: "展会活动" },
  };
  const trustTitles: Record<string, string> = {
    en: "Trust & Compliance",
    es: "Confianza y cumplimiento",
    ru: "Доверие и соответствие",
    fr: "Confiance et conformité",
    de: "Vertrauen & Compliance",
    zh: "资质与合规",
  };

  return (
    <footer style={{ background: "linear-gradient(135deg, #093D6A 0%, #0a1628 100%)", color: "#cbd5e1", fontSize: "14px", position: "relative" }}>
      {/* Top CTA Bar */}
      <div style={{
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        padding: "32px 20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "24px"
      }}>
        <span style={{ fontSize: "22px", fontWeight: 700, color: "#ffffff", textAlign: "center" as const }}>
          {t.footerTagline}
        </span>
        <a
          href={l("/contact")}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            backgroundColor: "#0D68B0",
            color: "#ffffff",
            padding: "12px 28px",
            borderRadius: "6px",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "15px",
            transition: "background 0.3s"
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          {t.footerCta}
        </a>
      </div>

      {/* Main Columns */}
      <div style={{
        maxWidth: "1440px",
        margin: "0 auto",
        padding: "56px 20px 40px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(min(210px, 100%), 1fr))",
        gap: "32px"
      }}>
        {/* Column 1: Brand + Description */}
        <div>
          <div style={{ marginBottom: "20px" }}>
            <Image src="/logo.jpg" alt="Lelion Wiper" width={104} height={52} style={{ height: "52px", width: "auto", marginBottom: "8px" }} />
            <div style={{ fontSize: "20px", fontWeight: 800, color: "#ffffff", letterSpacing: "0.05em" }}>LELION WIPER</div>
          </div>
          <p style={{ color: "#cbd5e1", lineHeight: "1.8", fontSize: "14px", maxWidth: "300px" }}>
            {t.footerBrandDesc}
          </p>
        </div>

        {/* Column 2: Products */}
        <div>
          <h3 style={{ color: "#ffffff", fontSize: "16px", fontWeight: 700, marginBottom: "20px", textTransform: "uppercase", letterSpacing: "0.05em", position: "relative", paddingBottom: "12px" }}>
            {t.footerProducts}
            <span style={{ position: "absolute", bottom: 0, left: 0, width: "40px", height: "2px", background: "#0D68B0", display: "block" }}></span>
          </h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
            <li><Link href={l("/products/category/universal")} style={{ color: "#cbd5e1", textDecoration: "none", fontSize: "14px", transition: "color 0.3s" }}>{t.footerUniversal}</Link></li>
            <li><Link href={l("/products/category/specific-fit")} style={{ color: "#cbd5e1", textDecoration: "none", fontSize: "14px", transition: "color 0.3s" }}>{t.footerSpecific}</Link></li>
            <li><Link href={l("/products/category/multifunction")} style={{ color: "#cbd5e1", textDecoration: "none", fontSize: "14px", transition: "color 0.3s" }}>{t.footerMultifunction}</Link></li>
            <li><Link href={l("/products/category/hybrid")} style={{ color: "#cbd5e1", textDecoration: "none", fontSize: "14px", transition: "color 0.3s" }}>{t.footerHybrid}</Link></li>
            <li><Link href={l("/products/category/wiper-arm")} style={{ color: "#cbd5e1", textDecoration: "none", fontSize: "14px", transition: "color 0.3s" }}>{t.footerWiperArm}</Link></li>
            <li><Link href={l("/products/category/rear-wiper-combo")} style={{ color: "#cbd5e1", textDecoration: "none", fontSize: "14px", transition: "color 0.3s" }}>{t.footerRearCombo}</Link></li>
          </ul>
        </div>

        {/* Column 3: Company / Navigation */}
        <div>
          <h3 style={{ color: "#ffffff", fontSize: "16px", fontWeight: 700, marginBottom: "20px", textTransform: "uppercase", letterSpacing: "0.05em", position: "relative", paddingBottom: "12px" }}>
            {t.footerInformation}
            <span style={{ position: "absolute", bottom: 0, left: 0, width: "40px", height: "2px", background: "#0D68B0", display: "block" }}></span>
          </h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
            <li><Link href={l("/")} style={{ color: "#cbd5e1", textDecoration: "none", fontSize: "14px", transition: "color 0.3s" }}>{t.navHome}</Link></li>
            <li><Link href={l("/products")} style={{ color: "#cbd5e1", textDecoration: "none", fontSize: "14px", transition: "color 0.3s" }}>{t.navProducts}</Link></li>
            <li><Link href={l("/about")} style={{ color: "#cbd5e1", textDecoration: "none", fontSize: "14px", transition: "color 0.3s" }}>{t.navAboutUs}</Link></li>
            <li><Link href={l("/blog")} style={{ color: "#cbd5e1", textDecoration: "none", fontSize: "14px", transition: "color 0.3s" }}>{t.navBlog}</Link></li>
            <li><Link href={l("/contact")} style={{ color: "#cbd5e1", textDecoration: "none", fontSize: "14px", transition: "color 0.3s" }}>{t.navGetQuote}</Link></li>
            <li><a href="/Catalog.pdf" target="_blank" style={{ color: "#cbd5e1", textDecoration: "none", fontSize: "14px", transition: "color 0.3s" }}>{t.navCatalog}</a></li>
          </ul>
        </div>
        {/* Column 4: Trust & Compliance */}
        <div>
          <h3 style={{ color: "#ffffff", fontSize: "16px", fontWeight: 700, marginBottom: "20px", textTransform: "uppercase", letterSpacing: "0.05em", position: "relative", paddingBottom: "12px" }}>
            {trustTitles[lang]}
            <span style={{ position: "absolute", bottom: 0, left: 0, width: "40px", height: "2px", background: "#0D68B0", display: "block" }}></span>
          </h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
            <li><Link href={l("/certifications")} style={{ color: "#cbd5e1", textDecoration: "none", fontSize: "14px", transition: "color 0.3s" }}>{evidenceLabels[lang].certifications}</Link></li>
            <li><Link href={l("/factory")} style={{ color: "#cbd5e1", textDecoration: "none", fontSize: "14px", transition: "color 0.3s" }}>{evidenceLabels[lang].factory}</Link></li>
            <li><Link href={l("/quality")} style={{ color: "#cbd5e1", textDecoration: "none", fontSize: "14px", transition: "color 0.3s" }}>{evidenceLabels[lang].quality}</Link></li>
            <li><Link href={l("/exhibitions")} style={{ color: "#cbd5e1", textDecoration: "none", fontSize: "14px", transition: "color 0.3s" }}>{evidenceLabels[lang].exhibitions}</Link></li>
            <li><Link href={l("/privacy")} style={{ color: "#cbd5e1", textDecoration: "none", fontSize: "14px", transition: "color 0.3s" }}>{t.footerPrivacy}</Link></li>
            <li><button type="button" onClick={() => window.dispatchEvent(new Event(COOKIE_SETTINGS_EVENT))} style={{ background: "none", border: 0, padding: 0, color: "#cbd5e1", textDecoration: "none", fontSize: "14px", cursor: "pointer", transition: "color 0.3s" }}>{t.cookieSettings}</button></li>
          </ul>
        </div>
        {/* Column 5: Contact Us */}
        <div>
          <h3 style={{ color: "#ffffff", fontSize: "16px", fontWeight: 700, marginBottom: "20px", textTransform: "uppercase", letterSpacing: "0.05em", position: "relative", paddingBottom: "12px" }}>
            {t.footerContact}
            <span style={{ position: "absolute", bottom: 0, left: 0, width: "40px", height: "2px", background: "#0D68B0", display: "block" }}></span>
          </h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
              <div style={{ width: "20px", height: "20px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <div>
                <span style={{ color: "#64748b", fontSize: "11px", textTransform: "uppercase", display: "block", marginBottom: "2px" }}>{t.emailLabel}</span>
                <a href="mailto:bwb@bwwiper.com" style={{ color: "#e2e8f0", textDecoration: "none", fontSize: "14px" }}>bwb@bwwiper.com</a>
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
              <div style={{ width: "20px", height: "20px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#38bdf8"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </div>
              <div>
                <span style={{ color: "#64748b", fontSize: "11px", textTransform: "uppercase", display: "block", marginBottom: "2px" }}>{t.footerWhatsapp}</span>
                <a href="https://api.whatsapp.com/send?phone=8618867886795" style={{ color: "#e2e8f0", textDecoration: "none", fontSize: "14px" }}>+8618867886795</a>
              </div>
            </li>
            <li style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
              <div style={{ width: "20px", height: "20px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <span style={{ color: "#64748b", fontSize: "11px", textTransform: "uppercase", display: "block", marginBottom: "2px" }}>{t.addressLabel}</span>
                <span style={{ color: "#e2e8f0", fontSize: "14px", lineHeight: "1.6" }}>{t.footerAddress}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{
        borderTop: "1px solid rgba(255,255,255,0.1)",
        padding: "20px",
        textAlign: "center",
        color: "#64748b",
        fontSize: "13px"
      }}>
        {t.footerCopyright}
      </div>
    </footer>
  );
}