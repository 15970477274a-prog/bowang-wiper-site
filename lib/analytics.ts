/**
 * GA4 custom event helpers.
 * layout.tsx already injects standard gtag (G-DHVDM5P7YQ) via next/script;
 * this module only pushes events into window.dataLayer / window.gtag on the client.
 */

export type InquiryEventParams = {
  source: "home_form" | "contact_form" | "whatsapp_float" | "whatsapp_button" | "email_button" | "phone_link";
  product?: string;
  locale?: string;
};

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

/** Send a GA4 event (client-side only). */
export function sendEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const w = window;
  if (typeof w.gtag === "function") {
    w.gtag("event", name, params);
  } else if (Array.isArray(w.dataLayer)) {
    w.dataLayer.push({ event: name, ...params });
  }
}

/**
 * Track an inquiry/contact conversion.
 * Emits generate_lead (Google's recommended lead event) plus a semantic event.
 * Remember to mark generate_lead as a Key Event in GA4 after deploy.
 */
export function trackInquiry(params: InquiryEventParams) {
  sendEvent("generate_lead", {
    inquiry_source: params.source,
    product: params.product ?? "General Inquiry",
    locale: params.locale ?? "en",
  });
  sendEvent("inquiry_contact", {
    inquiry_source: params.source,
    product: params.product ?? "General Inquiry",
    locale: params.locale ?? "en",
  });
}
