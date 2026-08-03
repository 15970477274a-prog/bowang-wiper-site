"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageContext";
import Image from "next/image";
import { translations } from "../app/translations";

export default function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const l = (path: string) => "/" + lang + path;

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
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "56px 20px 40px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: "48px"
      }}>
        {/* Column 1: Brand + Description */}
        <div>
          <div style={{ marginBottom: "20px" }}>
            <Image src="/logo.jpg" alt="Bowang Wiper" width={104} height={52} style={{ height: "52px", width: "auto", marginBottom: "8px" }} />
            <div style={{ fontSize: "20px", fontWeight: 800, color: "#ffffff", letterSpacing: "0.05em" }}>BOWANG WIPER</div>
          </div>
          <p style={{ color: "#94a3b8", lineHeight: "1.8", fontSize: "14px", maxWidth: "300px" }}>
            {t.footerBrandDesc}
          </p>
        </div>

        {/* Column 2: Products */}
        <div>
          <h4 style={{ color: "#ffffff", fontSize: "16px", fontWeight: 700, marginBottom: "20px", textTransform: "uppercase", letterSpacing: "0.05em", position: "relative", paddingBottom: "12px" }}>
            {t.footerProducts}
            <span style={{ position: "absolute", bottom: 0, left: 0, width: "40px", height: "2px", background: "#0D68B0", display: "block" }}></span>
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
            <li><Link href={l("/products/category/universal")} style={{ color: "#94a3b8", textDecoration: "none", fontSize: "14px", transition: "color 0.3s" }}>{t.footerUniversal}</Link></li>
            <li><Link href={l("/products/category/specific-fit")} style={{ color: "#94a3b8", textDecoration: "none", fontSize: "14px", transition: "color 0.3s" }}>{t.footerSpecific}</Link></li>
            <li><Link href={l("/products/category/multifunction")} style={{ color: "#94a3b8", textDecoration: "none", fontSize: "14px", transition: "color 0.3s" }}>{t.footerMultifunction}</Link></li>
            <li><Link href={l("/products/category/hybrid")} style={{ color: "#94a3b8", textDecoration: "none", fontSize: "14px", transition: "color 0.3s" }}>{t.footerHybrid}</Link></li>
            <li><Link href={l("/products/category/wiper-arm")} style={{ color: "#94a3b8", textDecoration: "none", fontSize: "14px", transition: "color 0.3s" }}>{t.footerWiperArm}</Link></li>
            <li><Link href={l("/products/category/rear-wiper-combo")} style={{ color: "#94a3b8", textDecoration: "none", fontSize: "14px", transition: "color 0.3s" }}>{t.footerRearCombo}</Link></li>
          </ul>
        </div>

        {/* Column 3: Information */}
        <div>
          <h4 style={{ color: "#ffffff", fontSize: "16px", fontWeight: 700, marginBottom: "20px", textTransform: "uppercase", letterSpacing: "0.05em", position: "relative", paddingBottom: "12px" }}>
            {t.footerInformation}
            <span style={{ position: "absolute", bottom: 0, left: 0, width: "40px", height: "2px", background: "#0D68B0", display: "block" }}></span>
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
            <li><Link href={l("/")} style={{ color: "#94a3b8", textDecoration: "none", fontSize: "14px", transition: "color 0.3s" }}>{t.navHome}</Link></li>
            <li><Link href={l("/products")} style={{ color: "#94a3b8", textDecoration: "none", fontSize: "14px", transition: "color 0.3s" }}>{t.navProducts}</Link></li>
            <li><Link href={l("/about")} style={{ color: "#94a3b8", textDecoration: "none", fontSize: "14px", transition: "color 0.3s" }}>{t.navAboutUs}</Link></li>
            <li><Link href={l("/blog")} style={{ color: "#94a3b8", textDecoration: "none", fontSize: "14px", transition: "color 0.3s" }}>{t.navBlog}</Link></li>
            <li><Link href={l("/contact")} style={{ color: "#94a3b8", textDecoration: "none", fontSize: "14px", transition: "color 0.3s" }}>{t.navGetQuote}</Link></li>
            <li><a href="/Catalog.pdf" target="_blank" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "14px", transition: "color 0.3s" }}>{t.navCatalog}</a></li>
          </ul>
        </div>

        {/* Column 4: Contact Us */}
        <div>
          <h4 style={{ color: "#ffffff", fontSize: "16px", fontWeight: 700, marginBottom: "20px", textTransform: "uppercase", letterSpacing: "0.05em", position: "relative", paddingBottom: "12px" }}>
            {t.footerContact}
            <span style={{ position: "absolute", bottom: 0, left: 0, width: "40px", height: "2px", background: "#0D68B0", display: "block" }}></span>
          </h4>
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
                <a href="https://api.whatsapp.com/send?phone=8618867886795" style={{ color: "#e2e8f0", textDecoration: "none", fontSize: "14px" }}>+86 188 6788 6795</a>
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

      {/* Social Media */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "12px",
        padding: "0 20px 40px"
      }}>
        <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px", borderRadius: "8px", backgroundColor: "rgba(255,255,255,0.1)", transition: "all 0.3s" }} aria-label="Facebook">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#cbd5e1"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
        </span>
        <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px", borderRadius: "8px", backgroundColor: "rgba(255,255,255,0.1)", transition: "all 0.3s" }} aria-label="Instagram">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#cbd5e1"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
        </span>
        <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px", borderRadius: "8px", backgroundColor: "rgba(255,255,255,0.1)", transition: "all 0.3s" }} aria-label="LinkedIn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#cbd5e1"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        </span>
        <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px", borderRadius: "8px", backgroundColor: "rgba(255,255,255,0.1)", transition: "all 0.3s" }} aria-label="YouTube">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#cbd5e1"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
        </span>
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