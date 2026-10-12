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
]; } };