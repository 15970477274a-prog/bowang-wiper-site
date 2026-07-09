"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function HtmlLangFix() {
  const pathname = usePathname();

  useEffect(() => {
    const segments = pathname.split("/").filter(Boolean);
    const lang = segments[0];
    const localeMap: Record<string, string> = {
      en: "en", es: "es", ru: "ru", fr: "fr", de: "de", zh: "zh-Hans"
    };
    if (localeMap[lang]) {
      document.documentElement.lang = localeMap[lang];
    }
  }, [pathname]);

  return null;
}
