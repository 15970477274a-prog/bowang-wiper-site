"use client";

const packages = [
  { name: "PP Package", img: "/packaging/pp-package.jpg" },
  { name: "PVC Package", img: "/packaging/pvc-package.jpg" },
  { name: "Single Blister Package", img: "/packaging/single-blister-package.jpg" },
  { name: "Paper Box Package", img: "/packaging/paper-box-package.jpg" },
  { name: "Window Box Package", img: "/packaging/window-box-package.jpg" },
  { name: "Kraft Paper Box Package", img: "/packaging/kraft-paper-box-package.jpg" },
  { name: "OPP&amp;PE Bag Package", img: "/packaging/opp-pe-bag-package.jpg" },
  { name: "Double Blister Package", img: "/packaging/double-blister-package.jpg" },
];

export default function PackagingSection() {
  return (
    <section style={{ padding: "100px 20px", backgroundColor: "#ffffff" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2 style={{ fontSize: "36px", fontWeight: 800, color: "#0f172a", marginBottom: "12px" }}>
            OEM &amp; Private Label Packaging Solutions
          </h2>
          <div style={{ height: "4px", width: "60px", backgroundColor: "#0284c7", margin: "15px auto" }}></div>
          <p style={{ color: "#64748b", fontSize: "16px", maxWidth: "700px", margin: "0 auto", lineHeight: "1.7" }}>
            Flexible packaging options for retail, wholesale, and aftermarket distribution, including color boxes, blister cards, logo printing, barcode labels, multilingual instructions, and export carton marking.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "24px" }}>
          {packages.map((item, i) => (
            <div key={i} style={{
              backgroundColor: "#f8fafc",
              borderRadius: "12px",
              overflow: "hidden",
              border: "1px solid #e2e8f0",
              transition: "transform 0.3s, box-shadow 0.3s",
              cursor: "pointer"
            }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.1)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div style={{ padding: "20px 20px 0", textAlign: "center" }}>
                <div style={{ fontSize: "40px", fontWeight: 800, color: "#0284c7", opacity: 0.15, marginBottom: "-20px" }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <img src={item.img} alt={item.name} loading="lazy" style={{ width: "100%", height: "180px", objectFit: "contain" }} />
              </div>
              <div style={{ padding: "16px 20px 20px", textAlign: "center" }}>
                <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#0f172a", margin: 0 }}>{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}