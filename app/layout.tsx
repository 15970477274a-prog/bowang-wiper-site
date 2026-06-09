import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Professional Wiper Blade Manufacturer | Bowang Autoparts",
  description: "Ningbo Zhenhai Bowang Autoparts Co., Ltd. is a leading OEM/ODM wiper blade manufacturer in China. High-quality universal, specific fit, and multifunction wiper blades.",
  keywords: "wiper blades, windshield wipers, China manufacturer, autoparts, Bowang, OEM wiper blade, ODM wiper blade",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        {/* Navigation Header */}
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
            <nav style={{ display: "flex", gap: "25px", alignItems: "center" }}>
              <a href="#hero" style={{ color: "#f8fafc", textDecoration: "none", fontSize: "14px", fontWeight: 500, transition: "color 0.2s" }} className="nav-link">Home</a>
              <a href="#products" style={{ color: "#f8fafc", textDecoration: "none", fontSize: "14px", fontWeight: 500, transition: "color 0.2s" }} className="nav-link">Products</a>
              <a href="#why-choose-us" style={{ color: "#f8fafc", textDecoration: "none", fontSize: "14px", fontWeight: 500, transition: "color 0.2s" }} className="nav-link">Advantages</a>
              <a href="#about" style={{ color: "#f8fafc", textDecoration: "none", fontSize: "14px", fontWeight: 500, transition: "color 0.2s" }} className="nav-link">About Us</a>
              <a href="#contact" style={{
                backgroundColor: "#0284c7",
                color: "#ffffff",
                padding: "8px 16px",
                borderRadius: "4px",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: "bold",
                transition: "background-color 0.2s"
              }}>Get a Quote</a>
            </nav>
          </div>
        </header>

        {children}

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
                Ningbo Zhenhai Bowang Autoparts Co., Ltd. is dedicated to manufacturing high-quality wiper blades with global standards, exporting worldwide.
              </p>
            </div>
            <div>
              <h3 style={{ color: "#f8fafc", fontSize: "16px", marginBottom: "15px" }}>Quick Links</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px", fontSize: "14px" }}>
                <li><a href="#hero" style={{ color: "#94a3b8", textDecoration: "none" }}>Home</a></li>
                <li><a href="#products" style={{ color: "#94a3b8", textDecoration: "none" }}>Products</a></li>
                <li><a href="#why-choose-us" style={{ color: "#94a3b8", textDecoration: "none" }}>Advantages</a></li>
                <li><a href="#about" style={{ color: "#94a3b8", textDecoration: "none" }}>About Us</a></li>
              </ul>
            </div>
            <div>
              <h3 style={{ color: "#f8fafc", fontSize: "16px", marginBottom: "15px" }}>Contact Info</h3>
              <p style={{ fontSize: "14px", lineHeight: "1.6", margin: "5px 0" }}>
                <strong>Factory Address:</strong> Zhenhai District, Ningbo City, Zhejiang Province, China
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
      </body>
    </html>
  );
}
