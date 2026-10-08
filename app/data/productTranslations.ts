// Product translation lookup that can fall back to the migrated catalogue.
//
// FULL-CATALOGUE USE ONLY - this module imports migratedProductTranslations
// (~2.7 MB of source). Client components that only render the curated base
// products should import getBaseProductTranslation from
// "./productTranslationsBase" instead, so that data stays out of their bundle.
import { migratedProductTranslations } from "./migratedProductTranslations";
import { productTranslations } from "./productTranslationsBase";
import type { ProductTranslation } from "./productTranslationsBase";

export type { ProductTranslation };
export { productTranslations };

export function getProductTranslation(
  productId: string,
  lang: string
): ProductTranslation | null {
  const t = productTranslations[productId] ?? migratedProductTranslations[productId];
  if (!t) return null;
  return t[lang] || null;
}

export default productTranslations;
