import Link from "next/link";

export default function RootNotFound() {
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
        <h1 style={{ fontSize: "32px", fontWeight: 800, margin: "0 0 15px" }}>Page Not Found</h1>
        <p style={{ color: "#94a3b8", maxWidth: "560px", margin: "0 auto 40px", fontSize: "16px", lineHeight: 1.7 }}>
          The page you are looking for does not exist or has been moved. Return to the homepage to browse our wiper
          blades, or contact us for a quote.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link
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
          </Link>
          <Link
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
          </Link>
          <Link
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
          </Link>
        </div>
      </section>
    </main>
  );
}
