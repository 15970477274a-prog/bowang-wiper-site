import type { Metadata } from "next";
import "./globals.css";

/**
 * Global 404 for the whole application.
 *
 * This file is required because the app now has route trees that each own their
 * own <html> element: `app/[lang]/layout.tsx` (all localised routes) and — after
 * this change — no other. There is therefore no single root layout to compose a
 * global 404 from, which is exactly the case `global-not-found.tsx` covers
 * (enabled via `experimental.globalNotFound` in next.config.js).
 *
 * It bypasses normal rendering, so it must return a complete HTML document and
 * import its own global styles, and it cannot rely on the site header/footer or
 * the JSON-LD emitted by the locale layout. Links are plain anchors because this
 * page is outside the app router tree.
 *
 * NOTE: moving the global 404 here (instead of a route-group `not-found.tsx`)
 * matters — Next.js does not pick up a not-found file that lives inside a route
 * group for unmatched URLs, so the app would fall back to the framework's
 * unstyled "404: This page could not be found." page.
 */
export const metadata: Metadata = {
  metadataBase: new URL("https://www.lelionautopart.com"),
  title: "Page Not Found | Lelion Autoparts",
  description:
    "The page you are looking for does not exist or has been moved. Return to the Lelion Autoparts home page to browse wiper blades, or contact us for a quote.",
  robots: { index: false, follow: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
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
            <h1 style={{ fontSize: "32px", fontWeight: 800, margin: "0 0 15px" }}>Page Not Found</h1>
            <p style={{ color: "#94a3b8", maxWidth: "560px", margin: "0 auto 40px", fontSize: "16px", lineHeight: 1.7 }}>
              The page you are looking for does not exist or has been moved. Return to the homepage to browse our wiper
              blades, or contact us for a quote.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href="/en"
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
                Home
              </a>
              <a
                href="/en/products"
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
                Products
              </a>
              <a
                href="/en/contact"
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
                Get a Quote
              </a>
            </div>
          </section>
        </main>
      </body>
    </html>
  );
}
