// Blog content translations for es, ru, fr, de
// English content is in blog.ts
// Full content (article body) falls back to English

export interface BlogTranslation {
  title: string;
  excerpt: string;
}

export function getBlogTranslation(
  postId: string,
  lang: string
): BlogTranslation | null {
  const t = blogTranslations[postId];
  if (!t) return null;
  return t[lang] || null;
}

export const blogTranslations: Record<string, Record<string, BlogTranslation>> = {

  "how-to-choose-wiper-blade-manufacturer": {
    es: {
      title: "Cómo Elegir el Fabricante de Escobillas Adecuado para su Negocio",
      excerpt: "Una guía completa para distribuidores e importadores globales que buscan adquirir escobillas de alta calidad de China. Conozca los estándares de calidad, MOQ, certificaciones y evaluación de proveedores."
    },
    ru: {
      title: "Как выбрать правильного производителя стеклоочистителей для вашего бизнеса",
      excerpt: "Полное руководство для глобальных дистрибьюторов и импортеров по поиску высококачественных стеклоочистителей из Китая. Узнайте о стандартах качества, минимальных заказах, сертификации и оценке поставщиков."
    },
    fr: {
      title: "Comment Choisir le Bon Fabricant de Balais d'Essuie-glace pour Votre Entreprise",
      excerpt: "Un guide complet pour les distributeurs et importateurs mondiaux cherchant à s'approvisionner en balais d'essuie-glace de haute qualité en Chine. Découvrez les normes de qualité, MOQ, certifications et l'évaluation des fournisseurs."
    },
    de: {
      title: "So wählen Sie den richtigen Wischerblatt-Hersteller für Ihr Unternehmen",
      excerpt: "Ein umfassender Leitfaden für globale Distributoren und Importeure, die hochwertige Wischerblätter aus China beziehen möchten. Erfahren Sie mehr über Qualitätsstandards, MOQ, Zertifizierungen und Lieferantenbewertung."
    },
    zh: {
      title: "如何为您的业务选择合适的雨刮片制造商",
      excerpt: "面向全球分销商和进口商的综合指南，帮助您从中国采购高品质雨刮片。了解质量标准、起订量、认证和供应商评估。"
    }
  },

  "wiper-blade-rubber-materials-guide": {
    es: {
      title: "Guía Completa de Materiales: Caucho Natural vs Escobillas de Silicona para Compradores",
      excerpt: "Comprenda las diferencias entre los materiales de escobillas de caucho natural, silicona e híbridas. Tome decisiones de compra informadas para su mercado objetivo."
    },
    ru: {
      title: "Полное руководство по материалам: натуральный каучук и силиконовые стеклоочистители для покупателей",
      excerpt: "Поймите различия между натуральным каучуком, силиконом и гибридными материалами стеклоочистителей. Принимайте обоснованные решения о закупках для вашего целевого рынка."
    },
    fr: {
      title: "Guide Complet des Matériaux : Caoutchouc Naturel vs Balais d'Essuie-glace en Silicone pour Acheteurs",
      excerpt: "Comprenez les différences entre les matériaux des balais d'essuie-glace en caoutchouc naturel, silicone et hybrides. Prenez des décisions d'approvisionnement éclairées pour votre marché cible."
    },
    de: {
      title: "Vollständiger Materialleitfaden: Naturkautschuk vs. Silikon-Wischerblätter für Einkäufer",
      excerpt: "Verstehen Sie die Unterschiede zwischen Naturkautschuk, Silikon und Hybrid-Wischerblattmaterialien. Treffen Sie fundierte Beschaffungsentscheidungen für Ihren Zielmarkt."
    },
    zh: {
      title: "天然橡胶与硅胶雨刮片：买家完整材料指南",
      excerpt: "了解天然橡胶、硅胶和混合雨刮片材料之间的差异。为您的目标市场做出明智的采购决策。"
    }
  },

  "b2b-wiper-blade-import-guide": {
    es: {
      title: "Guía de Importación B2B: Cómo Importar Escobillas de China (Guía Completa 2026)",
      excerpt: "Todo lo que los distribuidores necesitan saber sobre la importación de escobillas de China: regulaciones, aranceles aduaneros, logística de envío y control de calidad."
    },
    ru: {
      title: "Руководство по импорту B2B: Как импортировать стеклоочистители из Китая (Полное руководство 2026)",
      excerpt: "Все, что нужно знать дистрибьюторам об импорте стеклоочистителей из Китая: правила, таможенные пошлины, логистика доставки и контроль качества."
    },
    fr: {
      title: "Guide d'Importation B2B : Comment Importer des Balais d'Essuie-glace de Chine (Guide Complet 2026)",
      excerpt: "Tout ce que les distributeurs doivent savoir sur l'importation de balais d'essuie-glace de Chine : réglementations, droits de douane, logistique d'expédition et contrôle qualité."
    },
    de: {
      title: "B2B-Importleitfaden: So importieren Sie Wischerblätter aus China (Komplettanleitung 2026)",
      excerpt: "Alles, was Distributoren über den Import von Wischerblättern aus China wissen müssen: Vorschriften, Zollgebühren, Versandlogistik und Qualitätskontrolle."
    },
    zh: {
      title: "B2B进口指南：如何从中国进口雨刮片（2026完整指南）",
      excerpt: "分销商需要了解的有关从中国进口雨刮片的一切：法规、关税、运输物流和质量控制。"
    }
  },

  "wiper-blade-quality-certifications-explained": {
    es: {
      title: "Certificaciones de Calidad de Escobillas Explicadas: ISO, IATF, CE y Más",
      excerpt: "¿Qué significan las certificaciones ISO 9001, IATF 16949 y CE para la calidad de las escobillas? Una explicación detallada para compradores B2B y profesionales de compras."
    },
    ru: {
      title: "Объяснение сертификатов качества стеклоочистителей: ISO, IATF, CE и другие",
      excerpt: "Что означают сертификаты ISO 9001, IATF 16949 и CE для качества стеклоочистителей? Подробное объяснение для B2B-покупателей и специалистов по закупкам."
    },
    fr: {
      title: "Certifications de Qualité des Balais d'Essuie-glace Expliquées : ISO, IATF, CE et Plus",
      excerpt: "Que signifient les certifications ISO 9001, IATF 16949 et CE pour la qualité des balais d'essuie-glace ? Une explication détaillée pour les acheteurs B2B et les professionnels des achats."
    },
    de: {
      title: "Wischerblatt-Qualitätszertifizierungen erklärt: ISO, IATF, CE und mehr",
      excerpt: "Was bedeuten ISO 9001, IATF 16949 und CE-Zertifizierungen für die Wischerblattqualität? Eine detaillierte Erklärung für B2B-Einkäufer und Beschaffungsprofis."
    },
    zh: {
      title: "雨刮片质量认证详解：ISO、IATF、CE及更多",
      excerpt: "ISO 9001、IATF 16949和CE认证对雨刮片质量意味着什么？为B2B买家和采购专业人士提供的详细解释。"
    }
  },

  "automotive-aftermarket-trends-2026": {
    es: {
      title: "Tendencias del Mercado de Posventa Automotriz 2026: Oportunidades para Distribuidores de Escobillas",
      excerpt: "Descubra las tendencias clave que están dando forma al mercado global de posventa automotriz en 2026 y cómo los distribuidores de escobillas pueden capitalizar las oportunidades emergentes."
    },
    ru: {
      title: "Тенденции автомобильного послепродажного рынка 2026: Возможности для дистрибьюторов стеклоочистителей",
      excerpt: "Узнайте о ключевых тенденциях, формирующих мировой автомобильный послепродажный рынок в 2026 году, и о том, как дистрибьюторы стеклоочистителей могут использовать новые возможности."
    },
    fr: {
      title: "Tendances du Marché Secondaire Automobile 2026 : Opportunités pour les Distributeurs de Balais d'Essuie-glace",
      excerpt: "Découvrez les principales tendances qui façonnent le marché secondaire automobile mondial en 2026 et comment les distributeurs de balais d'essuie-glace peuvent tirer parti des opportunités émergentes."
    },
    de: {
      title: "Automobil-Ersatzteilmarkt Trends 2026: Chancen für Wischerblatt-Distributoren",
      excerpt: "Entdecken Sie die wichtigsten Trends, die den globalen Automobil-Ersatzteilmarkt 2026 prägen, und wie Wischerblatt-Distributoren von neuen Chancen profitieren können."
    },
    zh: {
      title: "2026年汽车后市场趋势：雨刮片分销商的机遇",
      excerpt: "探索塑造2026年全球汽车后市场的关键趋势，以及雨刮片分销商如何把握新兴机遇。"
    }
  },
};

export default blogTranslations;
