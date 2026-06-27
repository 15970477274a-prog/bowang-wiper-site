"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "./LanguageContext";
import { translations, Locale } from "../app/translations";

export default function Header() {
  const { lang, setLang } = useLanguage();
  const [mobileMenu, setMobileMenu] = useState(false);
  const closeMobileMenu = () => setMobileMenu(false);
  const t = translations[lang];

  const handleLangChange = (newLang: Locale) => {
    setLang(newLang);
    localStorage.setItem("lelion_lang", newLang);
    const pathParts = window.location.pathname.split("/").filter(Boolean);
    if (pathParts.length > 0 && ["en","es","ru","fr","de","zh"].includes(pathParts[0])) {
      pathParts[0] = newLang;
    } else {
      pathParts.unshift(newLang);
    }
    window.location.href = "/" + pathParts.join("/") + window.location.search;
  };
  const l = (path: string) => "/" + lang + path;

  return (
    <>
      <header className="header">
        <div className="header-inner">
          <div className="header-brand">
            <Link href={l("/")} style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "12px" }}>
              <img src="/logo.jpg" alt="Bowang Wiper" style={{ height: "56px", width: "auto" }} />
              <div>
                <span className="header-title">BOWANG WIPER</span>
                <span className="header-subtitle" style={{ display: "block" }}>Autoparts Manufacturer</span>
              </div>
            </Link>
          </div>
          <button
            className={"hamburger" + (mobileMenu ? " open" : "")}
            onClick={() => setMobileMenu(!mobileMenu)}
            aria-label="Toggle navigation menu"
          >
            <span></span><span></span><span></span>
          </button>
          <nav className="nav">
            <Link href={l("/")} className="nav-link">{t.navHome}</Link>
            <Link href={l("/products")} className="nav-link">{t.navProducts}</Link>
            <Link href={l("/blog")} className="nav-link">{t.navBlog || "Blog"}</Link>
            <Link href={l("/about")} className="nav-link">{t.navAboutUs}</Link>
            <a href="/Catalog.pdf" target="_blank" className="nav-link" style={{color:"var(--accent-glow)",fontWeight:600}}>{t.navCatalog}</a>
            <Link href={l("/contact")} className="nav-cta">{t.navGetQuote}</Link>
            <select value={lang} onChange={(e) => handleLangChange(e.target.value as Locale)} className="lang-select">
              <option value="en">English</option><option value="es">Español</option><option value="ru">Русский</option><option value="fr">Français</option><option value="de">Deutsch</option><option value="zh">中文</option>
            </select>
          </nav>
        </div>
      </header>
      <div className={"mobile-menu-overlay" + (mobileMenu ? " open" : "")}>
        <a href={l("/")} onClick={closeMobileMenu}>{t.navHome}</a>
        <a href={l("/products")} onClick={closeMobileMenu}>{t.navProducts}</a>
        <a href={l("/blog")} onClick={closeMobileMenu}>{t.navBlog || "Blog"}</a>
        <a href={l("/about")} onClick={closeMobileMenu}>{t.navAboutUs}</a>
        <a href="/Catalog.pdf" target="_blank" onClick={closeMobileMenu} style={{color:"var(--accent-glow)",fontWeight:600}}>{t.navCatalog}</a>
        <a href={l("/contact")} className="nav-cta" onClick={closeMobileMenu}>{t.navGetQuote}</a>
        <select value={lang} onChange={(e) => { handleLangChange(e.target.value as Locale); }} className="lang-select-mobile">
          <option value="en">English</option><option value="es">Español</option><option value="ru">Русский</option><option value="fr">Français</option><option value="de">Deutsch</option><option value="zh">中文</option>
        </select>
      </div>
    </>
  );
}