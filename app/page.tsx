"use client";

import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    product: "Universal Wiper Blades",
    message: ""
  });
  const [status, setStatus] = useState({
    submitted: false,
    loading: false,
    error: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ submitted: false, loading: true, error: "" });

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({
          submitted: true,
          loading: false,
          error: ""
        });
        setFormData({
          name: "",
          email: "",
          company: "",
          product: "Universal Wiper Blades",
          message: ""
        });
      } else {
        throw new Error("Failed to send inquiry. Please try again.");
      }
    } catch (err: any) {
      setStatus({
        submitted: false,
        loading: false,
        error: err.message || "An error occurred."
      });
    }
  };

  return (
    <main style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
      
      {/* Hero Section */}
      <section id="hero" className="hero-bg" style={{
        padding: "100px 20px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        <div style={{ maxWidth: "800px" }}>
          <span style={{
            backgroundColor: "#0284c7",
            color: "#ffffff",
            padding: "6px 12px",
            borderRadius: "20px",
            fontSize: "12px",
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: "1px",
            marginBottom: "20px",
            display: "inline-block"
          }}>
            ISO9001 Certified Factory
          </span>
          <h1 style={{
            fontSize: "46px",
            fontWeight: 800,
            lineHeight: "1.2",
            marginBottom: "20px",
            letterSpacing: "-0.02em"
          }}>
            Professional Wiper Blade Manufacturer From China
          </h1>
          <p style={{
            fontSize: "18px",
            color: "#94a3b8",
            lineHeight: "1.6",
            marginBottom: "40px",
            maxWidth: "650px",
            margin: "0 auto 40px auto"
          }}>
            Ningbo Zhenhai Bowang Autoparts Co., Ltd. specializes in OEM & ODM production of high-performance wiper blades. We deliver premium durability, perfect wiping, and global export logistics.
          </p>
          <div style={{ display: "flex", gap: "15px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#contact" className="btn-primary" style={{ fontSize: "16px", padding: "14px 36px" }}>
              Inquire Now
            </a>
            <a href="#products" className="btn-secondary" style={{ fontSize: "16px", padding: "14px 36px" }}>
              Our Products
            </a>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="section" style={{ backgroundColor: "#f8fafc" }}>
        <h2 className="section-title">Our Featured Products</h2>
        <p className="section-subtitle">
          Engineered for all-weather performance. Manufactured with premium natural rubber, high-carbon spring steel, and durable aerodynamics shell.
        </p>

        <div className="grid-container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Product 1 */}
          <div className="card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <div style={{
                backgroundColor: "#f0fdf4",
                color: "#16a34a",
                padding: "8px 12px",
                borderRadius: "4px",
                fontSize: "12px",
                fontWeight: "bold",
                display: "inline-block",
                marginBottom: "15px"
              }}>
                Best Seller
              </div>
              <h3 style={{ fontSize: "22px", color: "#0f172a", marginBottom: "12px" }}>Universal Wiper Blades</h3>
              <p style={{ color: "#64748b", fontSize: "14px", lineHeight: "1.6", marginBottom: "20px" }}>
                Designed to fit 99% of vehicles with pre-installed hooks. Exceptional aerodynamic frame ensures uniform pressure and streak-free wiping even at highway speeds.
              </p>
              <ul style={{ paddingLeft: "20px", fontSize: "13px", color: "#475569", lineHeight: "1.8", marginBottom: "25px" }}>
                <li><strong>Material:</strong> AAA-Grade Natural Rubber</li>
                <li><strong>Sizes Available:</strong> 12" to 28"</li>
                <li><strong>Wiping Life:</strong> &gt; 1,000,000 times</li>
                <li><strong>Adapters:</strong> Pre-installed U-Hook</li>
              </ul>
            </div>
            <a href="#contact" onClick={() => setFormData({ ...formData, product: "Universal Wiper Blades" })} className="btn-primary" style={{ width: "100%", padding: "10px" }}>
              Get Catalog & Price
            </a>
          </div>

          {/* Product 2 */}
          <div className="card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <div style={{
                backgroundColor: "#eff6ff",
                color: "#2563eb",
                padding: "8px 12px",
                borderRadius: "4px",
                fontSize: "12px",
                fontWeight: "bold",
                display: "inline-block",
                marginBottom: "15px"
              }}>
                Premium Choice
              </div>
              <h3 style={{ fontSize: "22px", color: "#0f172a", marginBottom: "12px" }}>Specific Fit Wiper Blades</h3>
              <p style={{ color: "#64748b", fontSize: "14px", lineHeight: "1.6", marginBottom: "20px" }}>
                OEM replacement wiper blades matching luxury and European vehicle models (BMW, Benz, Audi, Porsche, etc.) with original connection arms.
              </p>
              <ul style={{ paddingLeft: "20px", fontSize: "13px", color: "#475569", lineHeight: "1.8", marginBottom: "25px" }}>
                <li><strong>Material:</strong> Teflon Coated Natural Rubber</li>
                <li><strong>Sizes Available:</strong> 14" to 28"</li>
                <li><strong>OE Quality:</strong> Match original specifications</li>
                <li><strong>Installation:</strong> Direct fit without adapters</li>
              </ul>
            </div>
            <a href="#contact" onClick={() => setFormData({ ...formData, product: "Specific Fit Wiper Blades" })} className="btn-primary" style={{ width: "100%", padding: "10px" }}>
              Get Catalog & Price
            </a>
          </div>

          {/* Product 3 */}
          <div className="card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <div style={{
                backgroundColor: "#faf5ff",
                color: "#7c3aed",
                padding: "8px 12px",
                borderRadius: "4px",
                fontSize: "12px",
                fontWeight: "bold",
                display: "inline-block",
                marginBottom: "15px"
              }}>
                Multi-Compatible
              </div>
              <h3 style={{ fontSize: "22px", color: "#0f172a", marginBottom: "12px" }}>Multifunction Wiper Blades</h3>
              <p style={{ color: "#64748b", fontSize: "14px", lineHeight: "1.6", marginBottom: "20px" }}>
                Equipped with interchangeable adapters. Solves inventory problems by fitting 15+ different wiper arms with only a few SKU models.
              </p>
              <ul style={{ paddingLeft: "20px", fontSize: "13px", color: "#475569", lineHeight: "1.8", marginBottom: "25px" }}>
                <li><strong>Material:</strong> Silicone / Natural Rubber</li>
                <li><strong>Sizes Available:</strong> 12" to 30"</li>
                <li><strong>Compatibility:</strong> 10+ adaptors included</li>
                <li><strong>Advantage:</strong> Drastically reduce inventory cost</li>
              </ul>
            </div>
            <a href="#contact" onClick={() => setFormData({ ...formData, product: "Multifunction Wiper Blades" })} className="btn-primary" style={{ width: "100%", padding: "10px" }}>
              Get Catalog & Price
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="section" style={{ backgroundColor: "#ffffff" }}>
        <h2 className="section-title">Factory Manufacturing Advantages</h2>
        <p className="section-subtitle">
          Direct factory sourcing guarantees high quality, competitive pricing, and secure supply chains.
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "30px",
          maxWidth: "1200px",
          margin: "0 auto"
        }}>
          <div style={{ padding: "20px", borderLeft: "4px solid #0284c7" }}>
            <h4 style={{ fontSize: "18px", color: "#0f172a", marginBottom: "10px" }}>Factory-Direct Price</h4>
            <p style={{ fontSize: "14px", color: "#64748b", lineHeight: "1.6" }}>
              Buy directly from our Ningbo-based manufacturing facility. Cut out middle trading companies and maximize your profit margins.
            </p>
          </div>
          <div style={{ padding: "20px", borderLeft: "4px solid #0284c7" }}>
            <h4 style={{ fontSize: "18px", color: "#0f172a", marginBottom: "10px" }}>Strict Quality Control</h4>
            <p style={{ fontSize: "14px", color: "#64748b", lineHeight: "1.6" }}>
              Each batch undergoes extensive testing, including salt spray tests, ozone resistance, and low-temperature durability.
            </p>
          </div>
          <div style={{ padding: "20px", borderLeft: "4px solid #0284c7" }}>
            <h4 style={{ fontSize: "18px", color: "#0f172a", marginBottom: "10px" }}>OEM & ODM Customization</h4>
            <p style={{ fontSize: "14px", color: "#64748b", lineHeight: "1.6" }}>
              Support custom laser-printed logos, exclusive color designs, and bespoke packaging boxes tailored to your brand.
            </p>
          </div>
          <div style={{ padding: "20px", borderLeft: "4px solid #0284c7" }}>
            <h4 style={{ fontSize: "18px", color: "#0f172a", marginBottom: "10px" }}>Global Shipping & Support</h4>
            <p style={{ fontSize: "14px", color: "#64748b", lineHeight: "1.6" }}>
              Decades of experience exporting to North America, Europe, Southeast Asia, and South America. Safe customs clearance and prompt service.
            </p>
          </div>
        </div>
      </section>

      {/* About Us (Factory Showcase) */}
      <section id="about" className="section" style={{ backgroundColor: "#f1f5f9" }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "50px"
        }}>
          <div style={{ flex: "1 1 500px" }}>
            <span style={{ color: "#0284c7", fontWeight: "bold", fontSize: "14px", textTransform: "uppercase" }}>Corporate Profile</span>
            <h2 style={{ fontSize: "36px", color: "#0f172a", margin: "10px 0 20px 0", fontWeight: 800 }}>
              Ningbo Zhenhai Bowang Autoparts Co., Ltd.
            </h2>
            <p style={{ color: "#475569", fontSize: "15px", lineHeight: "1.7", marginBottom: "20px" }}>
              Located in the coastal industrial hub of Ningbo, China, Bowang Autoparts is a modern manufacturer specializing in automotive wiper blades. Spanning over 8,000 square meters of production workshop, our facility integrates independent R&D, structural design, manufacturing, and distribution under one roof.
            </p>
            <p style={{ color: "#475569", fontSize: "15px", lineHeight: "1.7", marginBottom: "20px" }}>
              Equipped with multiple automated assembly lines, high-precision rubber strip cutting machines, and state-of-the-art laboratory testing equipment, our annual output exceeds 12 million units.
            </p>
            <div style={{ display: "flex", gap: "30px", marginTop: "30px" }}>
              <div>
                <span style={{ fontSize: "32px", fontWeight: "bold", color: "#0284c7" }}>15+</span>
                <p style={{ fontSize: "12px", color: "#64748b", margin: "5px 0 0 0" }}>Years Experience</p>
              </div>
              <div>
                <span style={{ fontSize: "32px", fontWeight: "bold", color: "#0284c7" }}>8,000㎡</span>
                <p style={{ fontSize: "12px", color: "#64748b", margin: "5px 0 0 0" }}>Factory Area</p>
              </div>
              <div>
                <span style={{ fontSize: "32px", fontWeight: "bold", color: "#0284c7" }}>50+</span>
                <p style={{ fontSize: "12px", color: "#64748b", margin: "5px 0 0 0" }}>Exporting Countries</p>
              </div>
            </div>
          </div>
          <div style={{
            flex: "1 1 400px",
            backgroundColor: "#0f172a",
            borderRadius: "12px",
            padding: "40px",
            color: "#ffffff"
          }}>
            <h3 style={{ fontSize: "24px", color: "#38bdf8", marginBottom: "20px" }}>Our Quality Pledge</h3>
            <blockquote style={{ margin: 0, padding: 0, fontSize: "15px", lineHeight: "1.6", fontStyle: "italic", color: "#cbd5e1" }}>
              "Quality is the core driver of Bowang. We utilize strictly imported AAA-grade raw rubber materials, high-tension spring steels, and execute full-inspection QC procedures. We assure a streak-free, quiet, and lasting wipe for all our global buyers."
            </blockquote>
            <p style={{ margin: "20px 0 0 0", fontSize: "14px", fontWeight: "bold" }}>— Production Director, Bowang Autoparts</p>
          </div>
        </div>
      </section>

      {/* Contact / Inquiry Form */}
      <section id="contact" className="section" style={{ backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 className="section-title">Request a Catalog & Free Sample</h2>
          <p className="section-subtitle">
            Are you a wholesaler, distributor, or brand owner? Send us an inquiry to request bulk pricing, complete product catalogs, or free physical samples.
          </p>

          <form onSubmit={handleSubmit} style={{
            backgroundColor: "#f8fafc",
            border: "1px solid #e2e8f0",
            borderRadius: "8px",
            padding: "40px",
            boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)"
          }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
              marginBottom: "20px"
            }}>
              <div>
                <label style={{ display: "block", fontSize: "14px", fontWeight: 600, marginBottom: "8px", color: "#334155" }}>Your Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "14px", fontWeight: 600, marginBottom: "8px", color: "#334155" }}>Business Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="john@yourcompany.com"
                />
              </div>
            </div>

            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
              marginBottom: "20px"
            }}>
              <div>
                <label style={{ display: "block", fontSize: "14px", fontWeight: 600, marginBottom: "8px", color: "#334155" }}>Company Name</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Autoparts Import LLC"
                />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "14px", fontWeight: 600, marginBottom: "8px", color: "#334155" }}>Product of Interest *</label>
                <select
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  className="form-input"
                  style={{ cursor: "pointer" }}
                >
                  <option value="Universal Wiper Blades">Universal Wiper Blades</option>
                  <option value="Specific Fit Wiper Blades">Specific Fit Wiper Blades</option>
                  <option value="Multifunction Wiper Blades">Multifunction Wiper Blades</option>
                  <option value="Bulk Customized Order">Bulk OEM/ODM Order</option>
                </select>
              </div>
            </div>

            <div style={{ marginBottom: "30px" }}>
              <label style={{ display: "block", fontSize: "14px", fontWeight: 600, marginBottom: "8px", color: "#334155" }}>Detailed Requirements / Message *</label>
              <textarea
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="form-input"
                placeholder="Please describe your interest, required sizes, quantity estimation, or custom logo requests..."
                style={{ resize: "vertical" }}
              />
            </div>

            {/* Submission Status Message */}
            {status.submitted && (
              <div style={{
                backgroundColor: "#ecfdf5",
                border: "1px solid #059669",
                color: "#065f46",
                padding: "15px",
                borderRadius: "6px",
                marginBottom: "20px",
                fontSize: "14px"
              }}>
                <strong>Thank you!</strong> Your inquiry has been sent successfully. Our export sales team will reach out with pricing and catalog within 12 hours.
              </div>
            )}

            {status.error && (
              <div style={{
                backgroundColor: "#fef2f2",
                border: "1px solid #dc2626",
                color: "#991b1b",
                padding: "15px",
                borderRadius: "6px",
                marginBottom: "20px",
                fontSize: "14px"
              }}>
                <strong>Error:</strong> {status.error}
              </div>
            )}

            <button
              type="submit"
              disabled={status.loading}
              className="btn-primary"
              style={{
                width: "100%",
                fontSize: "16px",
                padding: "14px",
                opacity: status.loading ? 0.7 : 1,
                cursor: status.loading ? "not-allowed" : "pointer"
              }}
            >
              {status.loading ? "Sending Inquiry..." : "Submit Inquiry (Get Quick Response)"}
            </button>
          </form>
        </div>
      </section>

    </main>
  );
}
