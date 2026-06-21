"use client";

import { useLanguage } from "./LanguageContext";
import { translations } from "../app/translations";

export default function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <footer className="footer">
      <div className="container">
        <h3 className="footer-brand">BOWANG WIPER</h3>
        <p className="footer-desc">{t.footerDesc}</p>
        <div className="footer-divider">
          &copy; 2026 Ningbo Zhenhai Bowang Autoparts Co., Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}