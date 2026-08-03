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
  "oem-private-label-wiper-blades-guide": {
    es: {
      title: "OEM y Marca Blanca de Escobillas: Gu��a Completa para Importadores y Distribuidores",
      excerpt: "Todo lo que los compradores B2B necesitan saber sobre la fabricaci��n OEM y de marca blanca de escobillas. Desde marca personalizada y empaque hasta MOQ y plazos de producci��n."
    },
    ru: {
      title: "OEM �� Private Label ����֧ܧݧ���ڧ��ڧ�֧ݧ�: ����ݧߧ�� ����ܧ�ӧ�է��ӧ� �էݧ� ���ާ����֧��� �� ���ڧ���ڧҧ�������",
      excerpt: "�����, ���� �ߧ�اߧ� �٧ߧѧ�� B2B-���ܧ��ѧ�֧ݧ�� �� ����ڧ٧ӧ�է��ӧ� OEM �� private label ���֧ܧݧ���ڧ��ڧ�֧ݧ֧�. ���� �ڧߧէڧӧڧէ�ѧݧ�ߧ�ԧ� �ҧ�֧ߧէڧߧԧ� �� ���ѧܧ�ӧܧ� �է� MOQ �� ����ܧ�� ����ڧ٧ӧ�է��ӧ�."
    },
    fr: {
      title: "Balais d'Essuie-glace OEM et Marque Blanche : Guide Complet pour Importateurs et Distributeurs",
      excerpt: "Tout ce que les acheteurs B2B doivent savoir sur la fabrication de balais d'essuie-glace OEM et marque blanche. De la personnalisation et l'emballage aux MOQ et d��lais de production."
    },
    de: {
      title: "OEM & Private Label Wischerbl?tter: Vollst?ndiger Leitfaden f��r Importeure und Distributoren",
      excerpt: "Alles, was B2B-K?ufer ��ber die Herstellung von OEM- und Private-Label-Wischerbl?ttern wissen m��ssen. Von individuellem Branding und Verpackung bis hin zu MOQ und Produktionszeiten."
    },
    zh: {
      title: "OEM������Ʒ�����Ƭ�������̺ͷ���������ָ��",
      excerpt: "B2B�����Ҫ�˽���й�OEM������Ʒ�����Ƭ�����������Ϣ���Ӷ���Ʒ�ƺͰ�װ���������������ڡ�"
    }
  },

  "wiper-blade-import-cost-guide": {
    es: {
      title: "Gu��a de Costos de Importaci��n de Escobillas: Desglose FOB, Flete, Aranceles y Precio Final",
      excerpt: "Gu��a completa para calcular los costos reales de importaci��n de escobillas desde China. Precios FOB, tarifas de flete mar��timo, aranceles de importaci��n y ejemplos de costo final para compradores B2B."
    },
    ru: {
      title: "���ѧ��֧� ����ڧާ���� �ڧާ����� ���֧ܧݧ���ڧ��ڧ�֧ݧ֧�: FOB, ���ѧ��, ����ݧڧߧ� �� �ڧ��ԧ�ӧѧ� ��֧ߧ�",
      excerpt: "����ݧߧ�� ���ܧ�ӧ�է��ӧ� ��� ��ѧ��֧�� ��֧ѧݧ�ߧ��� �٧ѧ��ѧ� �ߧ� �ڧާ���� ���֧ܧݧ���ڧ��ڧ�֧ݧ֧� �ڧ� ���ڧ�ѧ�. ���֧ߧ� FOB, ����ڧާ���� �ާ���ܧ�ԧ� ���ѧ���, �ڧާ����ߧ��� ����ݧڧߧ� �� ���ڧާ֧�� �ڧ��ԧ�ӧ�� ����ڧާ���� �էݧ� B2B-���ܧ��ѧ�֧ݧ֧�."
    },
    fr: {
      title: "Guide des Co?ts d'Importation de Balais d'Essuie-glace : FOB, Fret, Droits et Prix Final",
      excerpt: "Guide complet pour calculer les co?ts r��els d'importation de balais d'essuie-glace depuis la Chine. Prix FOB, tarifs de fret maritime, droits d'importation et exemples de co?t final pour acheteurs B2B."
    },
    de: {
      title: "Importkosten f��r Wischerbl?tter: FOB, Fracht, Z?lle und Gesamtpreis im Detail",
      excerpt: "Vollst?ndiger Leitfaden zur Berechnung der tats?chlichen Importkosten f��r Wischerbl?tter aus China. FOB-Preise, Seefrachtraten, Einfuhrz?lle und Gesamtkostenbeispiele f��r B2B-K?ufer."
    },
    zh: {
      title: "���Ƭ���ڳɱ�ָ�ϣ�FOB�۸��˷ѡ���˰�͵����ɱ����",
      excerpt: "����������й��������Ƭʵ�ʳɱ���ָ�ϡ�FOB���ۡ����˷��á����ڹ�˰��B2B��ҵ����ɱ�ʾ����"
    }
  },

  "wiper-blade-quality-testing-guide": {
    es: {
      title: "Pruebas de Calidad de Escobillas: Gu��a Completa de Inspecci��n Antes de Pedidos al por Mayor",
      excerpt: "Aprenda a inspeccionar la calidad de las escobillas antes de realizar pedidos al por mayor. Cubre pruebas de laboratorio, muestreo AQL, auditor��as de f��brica y verificaci��n de materiales para compradores B2B."
    },
    ru: {
      title: "����ߧ���ݧ� �ܧѧ�֧��ӧ� ���֧ܧݧ���ڧ��ڧ�֧ݧ֧�: ����ݧߧ�� ���ܧ�ӧ�է��ӧ� ��� ����ӧ֧�ܧ� ��֧�֧� �����ӧ��ާ� �٧ѧܧѧ٧ѧާ�",
      excerpt: "���٧ߧѧۧ��, �ܧѧ� ����ӧ֧���� �ܧѧ�֧��ӧ� ���֧ܧݧ���ڧ��ڧ�֧ݧ֧� ��֧�֧� ��ѧ٧ާ֧�֧ߧڧ֧� �����ӧ��� �٧ѧܧѧ٧��. ����ӧѧ���ӧѧ֧� �ݧѧҧ��ѧ���ߧ��� �ڧ�����ѧߧڧ�, �ӧ��ҧ��ܧ� AQL, �ѧ�էڧ� ��ѧҧ�ڧܧ� �� ����ӧ֧�ܧ� �ާѧ�֧�ڧѧݧ�� �էݧ� B2B-���ܧ��ѧ�֧ݧ֧�."
    },
    fr: {
      title: "Contr?le Qualit�� des Balais d'Essuie-glace : Guide Complet d'Inspection Avant Commandes en Gros",
      excerpt: "Apprenez �� inspecter la qualit�� des balais d'essuie-glace avant de passer des commandes en gros. Couvre les tests en laboratoire, l'��chantillonnage AQL, les audits d'usine et la v��rification des mat��riaux pour acheteurs B2B."
    },
    de: {
      title: "Qualit?tspr��fung von Wischerbl?ttern: Vollst?ndiger Inspektionsleitfaden vor Gro?bestellungen",
      excerpt: "Erfahren Sie, wie Sie die Qualit?t von Wischerbl?ttern vor Gro?bestellungen pr��fen. Behandelt Labortests, AQL-Stichproben, Fabrikaudits und Materialpr��fungen f��r B2B-K?ufer."
    },
    zh: {
      title: "���Ƭ������⣺��������ǰ����������ָ��",
      excerpt: "�˽������ɹ�ǰ��μ������Ƭ����������ʵ���Ҳ��ԡ�AQL������������˺Ͳ�����֤������B2B�ɹ��̡�"
    }
  },

  "common-mistakes-sourcing-auto-parts-china": {
    es: {
      title: "7 Errores Comunes al Comprar Autopartes de China (Y C\u00f3mo Evitarlos)",
      excerpt: "Evite errores costosos al importar autopartes de fabricantes chinos. Conozca los 7 errores m\u00e1s comunes y estrategias pr\u00e1cticas para garantizar calidad, control de costos y entregas confiables."
    },
    ru: {
      title: "7 \u0440\u0430\u0441\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u0445 \u043e\u0448\u0438\u0431\u043e\u043a \u043f\u0440\u0438 \u0437\u0430\u043a\u0443\u043f\u043a\u0435 \u0430\u0432\u0442\u043e\u0437\u0430\u043f\u0447\u0430\u0441\u0442\u0435\u0439 \u0438\u0437 \u041a\u0438\u0442\u0430\u044f (\u0438 \u043a\u0430\u043a \u0438\u0445 \u0438\u0437\u0431\u0435\u0436\u0430\u0442\u044c)",
      excerpt: "\u0418\u0437\u0431\u0435\u0433\u0430\u0439\u0442\u0435 \u0434\u043e\u0440\u043e\u0433\u043e\u0441\u0442\u043e\u044f\u0449\u0438\u0445 \u043e\u0448\u0438\u0431\u043e\u043a \u043f\u0440\u0438 \u0438\u043c\u043f\u043e\u0440\u0442\u0435 \u0430\u0432\u0442\u043e\u0437\u0430\u043f\u0447\u0430\u0441\u0442\u0435\u0439 \u043e\u0442 \u043a\u0438\u0442\u0430\u0439\u0441\u043a\u0438\u0445 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u0435\u0439. \u0423\u0437\u043d\u0430\u0439\u0442\u0435 \u043e 7 \u0441\u0430\u043c\u044b\u0445 \u0440\u0430\u0441\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u0445 \u043e\u0448\u0438\u0431\u043a\u0430\u0445 \u0438 \u043f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044f\u0445 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u044f \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430, \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044f \u0437\u0430\u0442\u0440\u0430\u0442 \u0438 \u043d\u0430\u0434\u0435\u0436\u043d\u044b\u0445 \u043f\u043e\u0441\u0442\u0430\u0432\u043e\u043a."
    },
    fr: {
      title: "7 Erreurs Courantes lors de l'Achat de Pi\u00e8ces Auto en Chine (Et Comment les \u00c9viter)",
      excerpt: "\u00c9vitez les erreurs co\u00fbteuses lors de l'importation de pi\u00e8ces auto aupr\u00e8s de fabricants chinois. D\u00e9couvrez les 7 erreurs les plus courantes et des strat\u00e9gies pratiques pour garantir qualit\u00e9, ma\u00eetrise des co\u00fbts et livraisons fiables."
    },
    de: {
      title: "7 h\u00e4ufige Fehler beim Einkauf von Autoteilen aus China (und wie man sie vermeidet)",
      excerpt: "Vermeiden Sie kostspielige Fehler beim Import von Autoteilen von chinesischen Herstellern. Lernen Sie die 7 h\u00e4ufigsten Fehler und praktische Strategien f\u00fcr Qualit\u00e4t, Kostenkontrolle und zuverl\u00e4ssige Lieferung kennen."
    },
    zh: {
      title: "\u4ece\u4e2d\u56fd\u91c7\u8d2d\u6c7d\u914d\u76847\u4e2a\u5e38\u89c1\u8bef\u533a\uff08\u53ca\u907f\u5751\u6307\u5357\uff09",
      excerpt: "\u907f\u514d\u4ece\u4e2d\u56fd\u5236\u9020\u5546\u8fdb\u53e3\u6c7d\u914d\u65f6\u7684\u4ee3\u4ef7\u9ad8\u6602\u7684\u9519\u8bef\u3002\u4e86\u89e37\u4e2a\u6700\u5e38\u89c1\u7684\u91c7\u8d2d\u8bef\u533a\uff0c\u4ee5\u53ca\u786e\u4fdd\u8d28\u91cf\u3001\u6210\u672c\u63a7\u5236\u548c\u53ef\u9760\u4ea4\u4ed8\u7684\u5b9e\u7528\u7b56\u7565\u3002"
    }
  },

};