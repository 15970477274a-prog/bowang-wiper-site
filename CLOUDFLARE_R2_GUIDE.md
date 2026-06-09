# Cloudflare R2 & Custom Domain Integration Guide (lelionautopart.com)

This guide walks you through setting up **Cloudflare R2** for your independent B2B autoparts website (`lelionautopart.com`). Using R2 allows you to store product images, technical diagrams, and PDF catalogs with zero egress fees, served globally via Cloudflare's ultra-fast CDN.

---

## Part 1: Creating a Cloudflare R2 Bucket

1. **Log in to Cloudflare**: Go to the [Cloudflare Dashboard](https://dash.cloudflare.com/) and select your account.
2. **Navigate to R2**: Click on **"R2 Object Storage"** in the left sidebar.
3. **Create Bucket**:
   - Click the **"Create bucket"** button.
   - **Bucket Name**: e.g., `bowang-wiper-assets` (or any clean name).
   - **Location**: Choose **"Automatic"** or select a region closest to your main buyers (e.g., North America or Europe if targeting export).
   - Click **"Create bucket"**.

---

## Part 2: Connecting Your Custom Subdomain (e.g., `cdn.lelionautopart.com`)

Since your domain DNS is managed, you can route asset traffic through a dedicated subdomain to provide a fully branded experience and leverage Cloudflare's edge caching.

1. **In the R2 Bucket Page**: Go to the **"Settings"** tab of your newly created bucket.
2. **Public Access**: Find the **"Public Access"** section.
3. **Connect Domain**:
   - Click **"Connect Domain"**.
   - **Domain Name**: Enter **`cdn.lelionautopart.com`** (or `assets.lelionautopart.com`).
   - Click **"Continue"**.
4. **DNS Setup**:
   - Cloudflare will prompt you to add a CNAME record at your DNS provider (e.g., **Alibaba Cloud DNS** or your active DNS manager).
   - **Type**: `CNAME`
   - **Name/Host**: `cdn`
   - **Target/Value**: Enter the unique R2 custom domain target provided by Cloudflare (e.g., `public.r2.dev` alias target).
   - Click **"Connect Domain"** once the record is saved. Cloudflare will automatically provision an SSL certificate for `cdn.lelionautopart.com`.

---

## Part 3: Uploading Assets

1. Go to the **"Objects"** tab of your R2 bucket.
2. Click **"Upload"** and select your product images, technical specification PDFs, or factory showcase banners.
3. **Organize Folders**: It is highly recommended to upload files into structured folders:
   - `products/universal-wiper.jpg`
   - `products/specific-fit.jpg`
   - `products/multifunction.jpg`
   - `factory/workshop-1.jpg`
   - `catalogs/bowang-wiper-catalog-2026.pdf`

---

## Part 4: Referencing R2 Assets in Next.js

Once uploaded and your subdomain is active, any file in your bucket can be accessed publicly via:
`https://cdn.lelionautopart.com/folder/filename.jpg`

### 1. Verification in Code
In the `next.config.js` we created for you, we have already whitelisted your domain patterns:
```javascript
remotePatterns: [
  {
    protocol: "https",
    hostname: "**.lelionautopart.com",
  },
]
```

### 2. Using in app/page.tsx
To showcase high-resolution product images in your newly designed [app/page.tsx](app/page.tsx), replace temporary layouts or place real images like this:
```jsx
// Example using Next.js Image
import Image from "next/image";

<Image 
  src="https://cdn.lelionautopart.com/products/universal-wiper.jpg" 
  alt="Universal Wiper Blades" 
  width={400} 
  height={300} 
  className="rounded-lg shadow-sm"
/>
```

---

## Part 5: CORS Configuration (For PDF Downloads or Direct Client Fetching)

If you intend to allow buyers to download catalog PDFs or if your Next.js frontend fetches assets programmatically:
1. Go to the **"Settings"** tab of your R2 bucket.
2. Under **"CORS Policy"**, click **"Add CORS Policy"** (JSON) and paste:
```json
[
  {
    "AllowedOrigins": ["https://lelionautopart.com", "https://*.vercel.app", "http://localhost:3000"],
    "AllowedMethods": ["GET", "HEAD"],
    "AllowedHeaders": ["*"],
    "ExposeHeaders": [],
    "MaxAgeSeconds": 3000
  }
]
```
3. Click **"Save"**. This ensures safe loading of assets across development, staging (Vercel previews), and production environments.
