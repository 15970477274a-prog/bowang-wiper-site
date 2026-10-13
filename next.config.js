const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "*.lelionautopart.com" },
      { protocol: "https", hostname: "sc02.alicdn.com" },
      { protocol: "https", hostname: "**.faiusr.com" },
      { protocol: "https", hostname: "*.edgeone.dev" },
      { protocol: "https", hostname: "*.r2.dev" },
    ],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [480, 640, 768, 1024, 1280, 1536],
    imageSizes: [128, 256, 384],
  },
  async headers() {
    return [
      { source: "/(.*)", headers: [
        { key: "Vary", value: "Accept-Language" },
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "X-Frame-Options", value: "SAMEORIGIN" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        { key: "X-XSS-Protection", value: "1; mode=block" },
        { key: "Content-Security-Policy", value: [
          "default-src 'self'",
          "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.gstatic.com https://analytics.ahrefs.com",
          "style-src 'self' 'unsafe-inline'",
          "img-src 'self' https://sc02.alicdn.com https://*.r2.dev https://*.edgeone.dev data:",
          "font-src 'self'",
          "connect-src 'self' https://www.google-analytics.com https://analytics.ahrefs.com",
          "frame-src 'self' https://www.google.com https://www.youtube.com https://www.youtube-nocookie.com",
          "object-src 'none'",
          "base-uri 'self'",
          "form-action 'self'",
        ].join("; ") },
      ] },
      { source: "/:path*.(png|jpg|jpeg|gif|webp|avif|ico|svg)", headers: [
        { key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" },
      ] },
      { source: "/:path*.(pdf|woff|woff2)", headers: [
        { key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" },
      ] },
    ];
  },
};

module.exports = { ...nextConfig, async redirects() { return [
  { source: "/:lang/Catalog.pdf", destination: "/Catalog.pdf", permanent: true },
  { source: "/about-us", destination: "/en/about", permanent: true },
  { source: "/contact-us", destination: "/en/contact", permanent: true },
  // Product 8512900000-124 was renamed to bw-866-multifunction-wiper-blade.
  // statusCode 301 (rather than permanent:true, which Next maps to 308) matches the
  // requested permanent-redirect status exactly. :lang keeps the language prefix.
  { source: "/:lang/products/8512900000-124", destination: "/:lang/products/bw-866-multifunction-wiper-blade", statusCode: 301 },
  // --- Retired pages, 2026-10-12 (Special Wiper category removed + 5 Specific Fit items) ---
  { source: "/:lang/products/category/special-wiper/all", destination: "/:lang/products", statusCode: 301 },
  { source: "/:lang/products/category/special-wiper", destination: "/:lang/products", statusCode: 301 },
  { source: "/:lang/products/bw-201-specific-fit-tesla-model-x", destination: "/:lang/products/bw-201-spray-wiper-blade-tesla-modelx", statusCode: 301 },
  { source: "/:lang/products/bw-202-volvo-xc60-spray", destination: "/:lang/products/bw-202-spray-wiper-blade-volvo-xc60-2018", statusCode: 301 },
  { source: "/:lang/products/bw-203", destination: "/:lang/products/bw-203-spray-wiper-blade-benz-w222-2019", statusCode: 301 },
  { source: "/:lang/products/bw-204-mercedes-e-class-heated", destination: "/:lang/products/bw-204-electric-water-spraying-wiper-blade-bw-204", statusCode: 301 },
  { source: "/:lang/products/bw-205-volvo-v60-s60", destination: "/:lang/products/bw-205-electric-water-spraying-wiper-blade-bw-205", statusCode: 301 },
  // Owner decision, 2026-10-12: the two pages that sat under the removed Special Wiper
  // category are KEPT, not redirected - they now report Specific Fit.
  //   bw-825-special-wiper-blade-buick-enclave-2012-2017 (BW-825 / Buick Enclave 2012-2017)
  //   bw-829-special-wiper-blade-buick-encore-2013-2022   (BW-829 / Buick Encore 2013-2022)
  // Their URLs are unchanged, so no redirect is defined for either of them.
  // --- Retired pages, 2026-10-12 (Frameless Wiper category removed) ---
  // The two products below exist only once on the site, so they point at the category
  // page that now carries the survivors. statusCode 301 keeps the code exact (:lang
  // preserves the language prefix).
  { source: "/:lang/products/category/frameless-wiper/all", destination: "/:lang/products/category/specific-fit", statusCode: 301 },
  { source: "/:lang/products/category/frameless-wiper", destination: "/:lang/products/category/specific-fit", statusCode: 301 },
  { source: "/:lang/products/bw-802l-frameless-wiper-blade-factory-bw-802l", destination: "/:lang/products/category/specific-fit", statusCode: 301 },
  { source: "/:lang/products/bw-850-frameless-wiper-bw-85", destination: "/:lang/products/category/specific-fit", statusCode: 301 },
  // --- Duplicate model numbers, 2026-10-12 (one page kept per model) ---
  // Each losing page points at the kept page for the same model, so link equity
  // follows the entry that stays. statusCode 301 keeps the code exact.
  { source: "/:lang/products/bw0302-283", destination: "/:lang/products/bw0302-278", statusCode: 301 },
  { source: "/:lang/products/bw0311-327", destination: "/:lang/products/bw0311-320", statusCode: 301 },
  { source: "/:lang/products/bw0333-338", destination: "/:lang/products/bw0333-293", statusCode: 301 },
  { source: "/:lang/products/bw3302-304", destination: "/:lang/products/bw3302-292", statusCode: 301 },
  { source: "/:lang/products/bw-001-360", destination: "/:lang/products/bw-001-audi-q7-rhd-wiper-arm", statusCode: 301 },
  { source: "/:lang/products/bw-002-361", destination: "/:lang/products/bw-002-audi-q7-lhd-wiper-arm", statusCode: 301 },
  { source: "/:lang/products/bw-027-front-right-wiper-arm-toyota-corolla-1993-1996", destination: "/:lang/products/bw-027-toyota-corolla-wiper-arm", statusCode: 301 },
  { source: "/:lang/products/bw-160-multi-functional-rear-wiper-blade-factory-bw160", destination: "/:lang/products/bw-160-rear-wiper-blade", statusCode: 301 },
  { source: "/:lang/products/bw-161-134", destination: "/:lang/products/bw-161-rear-wiper-blade", statusCode: 301 },
  { source: "/:lang/products/bw-861-multi-functional-wiper-blade-factory-bw861", destination: "/:lang/products/bw-861-multifunction-wiper-blade", statusCode: 301 },
  // Duplicate BW-808 facade page removed 2026-10-12; the kept page carries the
  // same product, so the losing URL points there. The golden and silver editions
  // are separate products and deliberately have no redirect.
  { source: "/:lang/products/bw-808-hybrid-wiper-blade-three-section-factory-bw808", destination: "/:lang/products/bw-808-hybrid-wiper", statusCode: 301 },
  // --- Rear Wiper Arm retired 2026-10-13 (category removed, 9 arm pages removed) ---
  // The nine BW***B arm pages pointed nowhere else in the catalogue, so they land on
  // the combined rear-wiper category; the category pages return to the product index.
  // statusCode 301 keeps the code exact (:lang covers all six locales).
  { source: "/:lang/products/bw0202b-rear-wiper-arm-bw0202b", destination: "/:lang/products/category/rear-wiper-combo", statusCode: 301 },
  { source: "/:lang/products/bw0208b-rear-wiper-arm-bw0208b", destination: "/:lang/products/category/rear-wiper-combo", statusCode: 301 },
  { source: "/:lang/products/bw0230b-rear-wiper-arm-bw0230b", destination: "/:lang/products/category/rear-wiper-combo", statusCode: 301 },
  { source: "/:lang/products/bw0247b-rear-wiper-arm-bw0247b", destination: "/:lang/products/category/rear-wiper-combo", statusCode: 301 },
  { source: "/:lang/products/bw0306b-rear-wiper-arm-bw0306b", destination: "/:lang/products/category/rear-wiper-combo", statusCode: 301 },
  { source: "/:lang/products/bw0307b-rear-wiper-arm-bw0307b", destination: "/:lang/products/category/rear-wiper-combo", statusCode: 301 },
  { source: "/:lang/products/bw0308b-rear-wiper-arm-bw0308b", destination: "/:lang/products/category/rear-wiper-combo", statusCode: 301 },
  { source: "/:lang/products/bw1105b-rear-wiper-arm-bw1105b", destination: "/:lang/products/category/rear-wiper-combo", statusCode: 301 },
  { source: "/:lang/products/bw1244b-rear-wiper-arm-bw1244b", destination: "/:lang/products/category/rear-wiper-combo", statusCode: 301 },
  { source: "/:lang/products/category/rear-wiper-arm/all", destination: "/:lang/products", statusCode: 301 },
  { source: "/:lang/products/category/rear-wiper-arm", destination: "/:lang/products", statusCode: 301 },
  // --- BW-405 duplicate retired 2026-10-14 ---
  // bw-405-classic-frame-wiper-blade (Universal) carried the same five images as
  // bw-405-frame-wiper-bw-405 (Frame Wiper), so the Universal facade is removed and
  // points at the surviving page. statusCode 301 keeps the code exact.
  { source: "/:lang/products/bw-405-classic-frame-wiper-blade", destination: "/:lang/products/bw-405-frame-wiper-bw-405", statusCode: 301 },
]; } };