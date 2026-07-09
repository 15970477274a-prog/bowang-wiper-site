"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Locale } from "../app/translations";

interface LanguageContextType {
  lang: Locale;
  setLang: (lang: Locale) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
});

export function LanguageProvider({ children, initialLang = "en" }: { children: ReactNode; initialLang?: Locale }) {
  const [lang, setLangState] = useState<Locale>(initialLang);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check localStorage for persisted language
    const savedLang = localStorage.getItem("lelion_lang") as Locale;
    if (savedLang && ["en", "es", "ru", "fr", "de", "zh"].includes(savedLang) && savedLang !== initialLang) {
      setLangState(savedLang);
    }
    setMounted(true);
  }, []);

  const setLang = (newLang: Locale) => {
    setLangState(newLang);
    localStorage.setItem("lelion_lang", newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}