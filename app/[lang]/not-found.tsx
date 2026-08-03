"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { translations, Locale } from "../translations";

export default function LangNotFound() {
  const params = useParams();
  const lang = ((params.lang as string) || "en") as Locale;
  const t = translations[lang] || translations.en;
  const l = (p: string) => "/" + lang + p;

  return (
    <main style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <section
        style={{
          padding: "120px 20px",
          textAlign: "center",
          background: "linear-gradient(rgba(15, 23, 42, 0.92), rgba(15, 23, 42, 0.92))",
          color: "white",
        }}
      >
        <div style={{ fontSize: "72px", fontWeight: 800, color: "#0284c7", marginBottom: "10px" }}>404</div>
        <h1 style={{ fontSize: "32px", fontWeight: 800, margin: "0 0 15px" }}>
          {lang === "zh" ? "页面未找到" : lang === "es" ? "Página No Encontrada" : lang === "ru" ? "Страница Не Найдена" : lang === "fr" ? "Page Introuvable" : lang === "de" ? "Seite Nicht Gefunden" : "Page Not Found"}
        </h1>
        <p style={{ color: "#94a3b8", maxWidth: "560px", margin: "0 auto 40px", fontSize: "16px", lineHeight: 1.7 }}>
          {lang === "zh"
            ? "您访问的页面不存在或已被移动。请返回首页浏览我们的雨刮片产品，或直接联系我们获取报价。"
            : lang === "es"
            ? "La página que busca no existe o ha sido movida. Vuelva al inicio para ver nuestras escobillas o contáctenos para obtener una cotización."
            : lang === "ru"
            ? "Страница, которую вы ищете, не существует или была перемещена. Вернитесь на главную, чтобы просмотреть наши щетки стеклоочистителя, или свяжитесь с нами."
            : lang === "fr"
            ? "La page recherchée n'existe pas ou a été déplacée. Retournez à l'accueil pour voir nos balais d'essuie-glace ou contactez-nous."
            : lang === "de"
            ? "Die gesuchte Seite existiert nicht oder wurde verschoben. Kehren Sie zur Startseite zurück oder kontaktieren Sie uns."
            : "The page you are looking for does not exist or has been moved. Return to the homepage to browse our wiper blades, or contact us for a quote."}
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            href={l("/")}
            style={{
              backgroundColor: "#0284c7",
              color: "white",
              padding: "14px 32px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "15px",
            }}
          >
            {t.navHome}
          </Link>
          <Link
            href={l("/products")}
            style={{
              backgroundColor: "white",
              color: "#0f172a",
              padding: "14px 32px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "15px",
            }}
          >
            {t.navProducts}
          </Link>
          <Link
            href={l("/contact")}
            style={{
              border: "1.5px solid rgba(255,255,255,0.4)",
              color: "white",
              padding: "14px 32px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "15px",
            }}
          >
            {t.navGetQuote}
          </Link>
        </div>
      </section>
    </main>
  );
}
