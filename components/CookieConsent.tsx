"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { useLanguage } from "./LanguageContext";
import { translations } from "../app/translations";

/**
 * GDPR cookie consent gate.
 *
 * Google Analytics and Ahrefs both set non-essential cookies, so under GDPR /
 * ePrivacy they may not load until the visitor explicitly agrees. This component
 * owns that decision:
 *
 *   - no stored choice -> render the banner, load nothing
 *   - "granted"        -> inject the GA4 + Ahrefs scripts
 *   - "denied"         -> load nothing, remember the refusal
 *
 * The choice is stored in localStorage (`lelion_cookie_consent`). The visitor can
 * change their mind later via the "Cookie settings" link in the footer, which
 * clears the stored value and re-opens the banner.
 */

const STORAGE_KEY = "lelion_cookie_consent";
export const COOKIE_SETTINGS_EVENT = "lelion:open-cookie-settings";

type Consent = "granted" | "denied" | null;

export default function CookieConsent() {
  const { lang } = useLanguage();
  const t = translations[lang] || translations.en;
  const [consent, setConsent] = useState<Consent>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "granted" || saved === "denied") setConsent(saved);
    setMounted(true);

    // The footer "Cookie settings" link dispatches this to re-open the banner.
    const reopen = () => {
      localStorage.removeItem(STORAGE_KEY);
      setConsent(null);
    };
    window.addEventListener(COOKIE_SETTINGS_EVENT, reopen);
    return () => window.removeEventListener(COOKIE_SETTINGS_EVENT, reopen);
  }, []);

  const decide = (value: "granted" | "denied") => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* storage blocked (private mode) — the choice still applies for this page view */
    }
    setConsent(value);
  };

  return (
    <>
      {consent === "granted" && (
        <>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-DHVDM5P7YQ"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-DHVDM5P7YQ');`}
          </Script>
          <Script
            src="https://analytics.ahrefs.com/analytics.js"
            data-key="PWw/q/G6NqWiQAPzBLLNTw"
            strategy="afterInteractive"
          />
        </>
      )}

      {mounted && consent === null && (
        <div
          role="dialog"
          aria-live="polite"
          aria-label={t.cookieTitle}
          style={{
            position: "fixed",
            left: "16px",
            right: "16px",
            bottom: "16px",
            zIndex: 9999,
            margin: "0 auto",
            maxWidth: "860px",
            backgroundColor: "#0f172a",
            color: "#e2e8f0",
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
            fontSize: "14px",
            lineHeight: 1.6,
          }}
        >
          <div style={{ fontWeight: 700, fontSize: "15px", color: "#ffffff", marginBottom: "8px" }}>
            {t.cookieTitle}
          </div>
          <div style={{ marginBottom: "16px", color: "#cbd5e1" }}>
            {t.cookieDesc}{" "}
            <a
              href={`/${lang}/privacy`}
              style={{ color: "#38bdf8", textDecoration: "underline" }}
            >
              {t.footerPrivacy}
            </a>
          </div>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <button
              type="button"
              onClick={() => decide("granted")}
              style={{
                flex: "1 1 160px",
                backgroundColor: "#0D68B0",
                color: "#ffffff",
                border: "none",
                borderRadius: "8px",
                padding: "11px 18px",
                fontSize: "14px",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              {t.cookieAccept}
            </button>
            <button
              type="button"
              onClick={() => decide("denied")}
              style={{
                flex: "1 1 160px",
                backgroundColor: "transparent",
                color: "#e2e8f0",
                border: "1px solid rgba(226,232,240,0.4)",
                borderRadius: "8px",
                padding: "11px 18px",
                fontSize: "14px",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              {t.cookieReject}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
