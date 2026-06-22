import { Locale, TranslationDict } from "./types";
import { en } from "./en";
import { es } from "./es";
import { ru } from "./ru";
import { fr } from "./fr";
import { de } from "./de";
import { zh } from "./zh";

export type { Locale, TranslationDict };

export function getTranslations(lang: Locale): TranslationDict {
  switch (lang) {
    case "en": return en;
    case "es": return es;
    case "ru": return ru;
    case "fr": return fr;
    case "de": return de;
    case "zh": return zh;
  }
}

// Keep the original translations export for backward compatibility
export const translations: Record<Locale, TranslationDict> = { en, es, ru, fr, de, zh };

export { en, es, ru, fr, de, zh };
