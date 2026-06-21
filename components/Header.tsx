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

  const handleLangChange = (newLang: Locale) => setLang(newLang);

  return (
    <>
      <header className="header">
        <div className="header-inner">
          <div className="header-brand">
            <Link href="/" style={{ textDecoration: "none" }}>
              <span className="header-title">BOWANG WIPER</span>
              <span className="header-subtitle">Autoparts Manufacturer</span>
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
            <Link href="/" className="nav-link">{t.navHome}</Link>
            <Link href="/products" className="nav-link">{t.navProducts}</Link>
            <Link href="/blog" className="nav-link">Blog</Link>
            <Link href="/about" className="nav-link">{t.navAboutUs}</Link>
            <a href="/Catalog.pdf" target="_blank" className="nav-link" style={{color:"var(--accent-glow)",fontWeight:600}}>{t.navCatalog}</a>
            <Link href="/contact" className="nav-cta">{t.navGetQuote}</Link>
            <select value={lang} onChange={(e) => handleLangChange(e.target.value as Locale)} className="lang-select">
              <option value="en">English</option><option value="es">Español</option><option value="ru">Русский</option><option value="fr">Français</option><option value="de">Deutsch</option>
            </select>
          </nav>
        </div>
      </header>
      <div className={"mobile-menu-overlay" + (mobileMenu ? " open" : "")}>
        <a href="/" onClick={closeMobileMenu}>{t.navHome}</a>
        <a href="/products" onClick={closeMobileMenu}>{t.navProducts}</a>
        <a href="/blog" onClick={closeMobileMenu}>Blog</a>
        <a href="/about" onClick={closeMobileMenu}>{t.navAboutUs}</a>
        <a href="/Catalog.pdf" target="_blank" onClick={closeMobileMenu} style={{color:"var(--accent-glow)",fontWeight:600}}>{t.navCatalog}</a>
        <a href="/contact" className="nav-cta" onClick={closeMobileMenu}>{t.navGetQuote}</a>
        <select value={lang} onChange={(e) => { handleLangChange(e.target.value as Locale); closeMobileMenu(); }} className="lang-select-mobile">
          <option value="en">English</option><option value="es">Español</option><option value="ru">Русский</option><option value="fr">Français</option><option value="de">Deutsch</option>
        </select>
      </div>
    </>
  );
}