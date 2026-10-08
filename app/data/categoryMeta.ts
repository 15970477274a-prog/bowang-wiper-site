/**
 * Per-category SEO metadata.
 *
 * Before this file existed, every product category page shared one generic
 * meta description (`categoryBannerSub`) and appended the same
 * "<category> Wiper Blades" suffix to its title, so all 16 category pages
 * shipped near-identical titles and byte-identical descriptions.
 *
 * English is written out per category (primary B2B market). The remaining
 * locales use a per-locale template that interpolates the localized category
 * name, which keeps every page's description unique in every language.
 */

export const CATEGORY_SEO_TITLES_EN: Record<string, string> = {
  universal: "Universal Wiper Blades | Lelion Autoparts",
  "specific-fit": "Specific Fit Wiper Blades | Lelion Autoparts",
  multifunction: "Multifunction Wiper Blades | Lelion Autoparts",
  "wiper-arm": "Wiper Arms | Lelion Autoparts",
  hybrid: "Hybrid Wiper Blades | Lelion Autoparts",
  "rear-wiper": "Rear Wiper Blades | Lelion Autoparts",
  "rear-wiper-combo": "Rear Wiper Blade and Arm Combos | Lelion Autoparts",
  "frame-wiper": "Frame Wiper Blades | Lelion Autoparts",
  "frameless-wiper": "Frameless Wiper Blades | Lelion Autoparts",
  "colored-wiper-blade": "Colored Wiper Blades | Lelion Autoparts",
  "electric-spray-wiper": "Electric Spray Wiper Blades | Lelion Autoparts",
  "bus-truck-wiper": "Bus and Truck Wiper Blades | Lelion Autoparts",
  "snow-wiper": "Snow Wiper Blades | Lelion Autoparts",
  "special-wiper": "Special Wiper Blades | Lelion Autoparts",
  "wiper-parts": "Wiper Parts | Lelion Autoparts",
  "rear-wiper-arm": "Rear Wiper Arms | Lelion Autoparts",
};

export const CATEGORY_META_DESCRIPTIONS_EN: Record<string, string> = {
  universal:
    "Universal wiper blades with pre-installed U-hook adapters, 12-28 inch. Factory-direct wholesale from an ISO 9001 certified Chinese manufacturer. MOQ 100 pcs.",
  "specific-fit":
    "Vehicle-specific wiper blades for Tesla, Mercedes, Audi, Toyota and more. ISO 9001 certified Chinese factory, OEM/ODM, MOQ 100 pcs per size, free samples.",
  multifunction:
    "Multifunction wiper blades with 22 interchangeable adapters, fitting 98% of vehicles. Factory-direct wholesale, ISO 9001 certified, OEM/ODM, MOQ 100 pcs.",
  "wiper-arm":
    "OEM wiper arms for Audi Q7, Mercedes-Benz, Toyota Corolla and other models. Factory-direct wholesale from an ISO 9001 certified manufacturer, MOQ from 10 pcs.",
  hybrid:
    "Three-section hybrid wiper blades combining frame stability with beam aerodynamics. Wholesale pricing from an ISO 9001 certified Chinese factory, MOQ 100 pcs.",
  "rear-wiper":
    "Rear windshield wiper blades for global distributors. Factory-direct wholesale, ISO 9001 certified manufacturing, OEM/ODM branding, 15-25 day lead time.",
  "rear-wiper-combo":
    "Rear wiper blade and arm combo sets, factory-direct for distributors and importers. ISO 9001 certified, OEM/ODM packaging, MOQ 100 pcs, free samples.",
  "frame-wiper":
    "Classic frame (bone) wiper blades in 12-28 inch, galvanized steel with anti-oxidation coating. Wholesale from an ISO 9001 certified factory, MOQ 100 pcs.",
  "frameless-wiper":
    "Frameless beam wiper blades with aerodynamic spoilers and uniform pressure. Factory-direct wholesale, ISO 9001 certified, OEM/ODM, MOQ 100 pcs per size.",
  "colored-wiper-blade":
    "Colored wiper blades in multiple finishes for retail brands. Factory-direct wholesale from an ISO 9001 certified manufacturer, OEM packaging, MOQ 100 pcs.",
  "electric-spray-wiper":
    "Electric spray wiper blades with integrated washer nozzles for modern and EV models. ISO 9001 certified Chinese factory, OEM/ODM, MOQ 100 pcs.",
  "bus-truck-wiper":
    "Heavy-duty bus and truck wiper blades built for large windshields and long service life. Factory-direct wholesale, ISO 9001 certified, MOQ 100 pcs.",
  "snow-wiper":
    "Snow and winter wiper blades with freeze-resistant frames and rubber covers. Factory-direct wholesale from an ISO 9001 certified manufacturer, MOQ 100 pcs.",
  "special-wiper":
    "Special and custom wiper blades for niche vehicles and non-standard fitments. OEM/ODM from an ISO 9001 certified Chinese factory, MOQ 100 pcs, free samples.",
  "wiper-parts":
    "Wiper blade spare parts, refills and adapters for aftermarket supply. Factory-direct wholesale from an ISO 9001 certified manufacturer, MOQ 100 pcs.",
  "rear-wiper-arm":
    "Rear wiper arms for SUV, hatchback and wagon models. Factory-direct wholesale from an ISO 9001 certified Chinese manufacturer, OEM/ODM, MOQ 100 pcs.",
};

/** `{cat}` is replaced with the localized category name. */
const CATEGORY_DESCRIPTION_TEMPLATES: Record<string, string> = {
  en: "{cat} — factory-direct wholesale from an ISO 9001 certified Chinese wiper blade manufacturer. MOQ 100 pcs per size, 15-25 day lead time, OEM/ODM and free samples.",
  es: "{cat} — venta al por mayor directa de fábrica de un fabricante chino de escobillas certificado ISO 9001. MOQ 100 unidades por medida, plazo de 15-25 días, OEM/ODM y muestras gratuitas.",
  ru: "{cat} — оптовые поставки напрямую с завода китайского производителя стеклоочистителей с сертификатом ISO 9001. MOQ 100 шт. на размер, срок 15-25 дней, OEM/ODM и бесплатные образцы.",
  fr: "{cat} — vente en gros directe d'usine par un fabricant chinois de balais d'essuie-glace certifié ISO 9001. MOQ 100 pièces par taille, délai de 15 à 25 jours, OEM/ODM et échantillons gratuits.",
  de: "{cat} — direkt ab Werk vom ISO 9001-zertifizierten chinesischen Hersteller. MOQ 100 Stk. pro Größe, Lieferzeit 15-25 Tage, OEM/ODM und kostenlose Muster.",
  zh: "{cat} — 中国 ISO 9001 认证雨刮片工厂直供批发。每尺寸起订量 100 支，交期 15-25 天，支持 OEM/ODM 与免费打样。",
};

const KNOWN_LOCALES = ["en", "es", "ru", "fr", "de", "zh"];

export function getCategoryMetaTitle(slug: string, categoryName: string, lang: string): string {
  if (lang === "en" && CATEGORY_SEO_TITLES_EN[slug]) {
    return CATEGORY_SEO_TITLES_EN[slug];
  }
  return categoryName + " | Lelion Autoparts";
}

export function getCategoryMetaDescription(slug: string, categoryName: string, lang: string): string {
  if (lang === "en" && CATEGORY_META_DESCRIPTIONS_EN[slug]) {
    return CATEGORY_META_DESCRIPTIONS_EN[slug];
  }
  const template = CATEGORY_DESCRIPTION_TEMPLATES[lang] || CATEGORY_DESCRIPTION_TEMPLATES.en;
  const localizedName =
    lang === "en" && CATEGORY_SEO_TITLES_EN[slug]
      ? CATEGORY_SEO_TITLES_EN[slug].replace(" | Lelion Autoparts", "")
      : categoryName;
  return template.replace("{cat}", localizedName);
}

export { KNOWN_LOCALES as CATEGORY_META_LOCALES };
