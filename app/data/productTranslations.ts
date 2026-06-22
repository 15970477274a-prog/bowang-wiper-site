// Product content translations for es, ru, fr, de
// English content is in products.ts
// longDesc and technicalDetails fall back to English

export interface ProductTranslation {
  name: string;
  desc: string;
  specs: string[];
  features: string[];
}

export function getProductTranslation(
  productId: string,
  lang: string
): ProductTranslation | null {
  const t = productTranslations[productId];
  if (!t) return null;
  return t[lang] || null;
}

export const productTranslations: Record<string, Record<string, ProductTranslation>> = {

  // ===== BW-201 Specific Fit Tesla Model X =====
  "bw-201-specific-fit-tesla-model-x": {
    es: {
      name: "BW-201 Escobilla Limpiaparabrisas Específica para Tesla Model X",
      desc: "Escobilla limpiaparabrisas con sistema de pulverización integrado, diseñada específicamente para Tesla Model X con boquilla lavaparabrisas incorporada.",
      specs: [
        "Sistema de boquilla pulverizadora integrada",
        "Ajuste directo OEM para Tesla Model X",
        "Tecnología de limpieza ultrasilenciosa",
        "Instalación Plug & Play - Sin adaptadores necesarios",
        "Borde de goma natural de grado AA+",
        "Bastidor de acero elástico de alta memoria",
        "Recubrimiento anti-ozono y resistente a rayos UV"
      ],
      features: [
        "Las boquillas pulverizadoras integradas eliminan los chorros tradicionales para un parabrisas más limpio",
        "El alerón aerodinámico reduce la elevación del viento a altas velocidades para una presión de limpieza constante",
        "Reemplazo directo OEM - mismo conector que las escobillas originales de Tesla",
        "El borde de goma natural recubierto de teflón reduce la fricción y prolonga la vida útil",
        "Probado en condiciones climáticas extremas de -30°C a +80°C"
      ]
    },
    ru: {
      name: "BW-201 Специализированный стеклоочиститель для Tesla Model X",
      desc: "Стеклоочиститель OEM-класса с распылительной системой, разработанный специально для Tesla Model X со встроенной форсункой омывателя.",
      specs: [
        "Встроенная система распылительных форсунок",
        "Прямая установка OEM для Tesla Model X",
        "Технология ультрамалошумной очистки",
        "Установка Plug & Play - адаптеры не требуются",
        "Резиновая кромка из натурального каучука класса AA+",
        "Стальной каркас с эффектом памяти",
        "Антиозоновое и УФ-защитное покрытие"
      ],
      features: [
        "Встроенные распылительные форсунки устраняют традиционные струи для более чистого лобового стекла",
        "Аэродинамический спойлер снижает подъемную силу ветра на высоких скоростях",
        "Прямая замена OEM - тот же разъем, что и у оригинальных стеклоочистителей Tesla",
        "Резиновая кромка с тефлоновым покрытием снижает трение и увеличивает срок службы",
        "Протестировано в экстремальных погодных условиях от -30°C до +80°C"
      ]
    },
    fr: {
      name: "BW-201 Balai d'Essuie-glace Spécifique pour Tesla Model X",
      desc: "Balai d'essuie-glace de qualité OEM avec système de pulvérisation intégré, spécialement conçu pour Tesla Model X avec buse de lave-glace incorporée.",
      specs: [
        "Système de buse de pulvérisation intégrée",
        "Montage direct OEM pour Tesla Model X",
        "Technologie d'essuyage ultra-silencieuse",
        "Installation Plug & Play - Aucun adaptateur requis",
        "Bord d'essuyage en caoutchouc naturel grade AA+",
        "Cadre en acier élastique à mémoire de forme",
        "Revêtement anti-ozone et résistant aux UV"
      ],
      features: [
        "Les buses de pulvérisation intégrées éliminent les jets traditionnels pour un pare-brise plus propre",
        "Le spoiler aérodynamique réduit la portance du vent à grande vitesse",
        "Remplacement direct OEM - même connecteur que les balais Tesla d'origine",
        "Le bord en caoutchouc naturel revêtu de téflon réduit la friction et prolonge la durée de vie",
        "Testé dans des conditions météorologiques extrêmes de -30°C à +80°C"
      ]
    },
    de: {
      name: "BW-201 Spezifisches Wischerblatt für Tesla Model X",
      desc: "OEM-Wischerblatt mit integriertem Sprühsystem, speziell entwickelt für Tesla Model X mit eingebauter Waschdüse.",
      specs: [
        "Integriertes Sprühdüsensystem",
        "Direkte OEM-Passform für Tesla Model X",
        "Ultra-leise Wischtechnologie",
        "Plug & Play Installation - Keine Adapter erforderlich",
        "Naturkautschuk-Wischkante Klasse AA+",
        "Memory-Stahlrahmen mit hoher Elastizität",
        "Anti-Ozon- und UV-beständige Beschichtung"
      ],
      features: [
        "Integrierte Sprühdüsen ersetzen traditionelle Spritzdüsen für eine sauberere Windschutzscheibe",
        "Aerodynamischer Spoiler reduziert Windauftrieb bei hohen Geschwindigkeiten",
        "Direkter OEM-Ersatz - gleicher Anschluss wie originale Tesla-Wischerblätter",
        "Teflonbeschichtete Naturkautschukkante reduziert Reibung und verlängert die Lebensdauer",
        "Getestet für extreme Wetterbedingungen von -30°C bis +80°C"
      ]
    }
  },

  // ===== BW-861 Multifunction Universal =====
  "bw-861-multifunction-wiper-blade": {
    es: {
      name: "BW-861 Escobilla Multifunción Universal con 22 Adaptadores",
      desc: "Sistema premium de escobilla con múltiples adaptadores que se ajusta al 98% de los vehículos del mundo con 22 adaptadores incluidos - ideal para distribuidores.",
      specs: [
        "Sistema de buje multiadaptador con 22 adaptadores (se ajusta al 98%+ de vehículos)",
        "Diseño aerodinámico de viga con alerón integrado",
        "Borde de goma natural de primera calidad con recubrimiento de teflón",
        "Marco de acero elástico con memoria de forma flexible",
        "Operación sin ruido y sin rayas",
        "Listo para venta al por menor con caja de marca personalizada",
        "Certificado ISO 9001 e IATF 16949"
      ],
      features: [
        "El sistema de 22 adaptadores cubre más del 98% de los vehículos a nivel mundial",
        "El diseño aerodinámico de la viga reduce el ruido del viento a velocidades de autopista",
        "El borde de goma recubierto de teflón garantiza un funcionamiento suave y silencioso",
        "El marco de acero con memoria mantiene una presión constante en toda la curva del parabrisas",
        "Embalaje listo para venta al por menor con opciones de marca personalizada disponibles",
        "Perfecto para distribuidores que buscan minimizar el inventario de SKU y maximizar la cobertura"
      ]
    },
    ru: {
      name: "BW-861 Многофункциональный универсальный стеклоочиститель с 22 адаптерами",
      desc: "Премиальная система стеклоочистителей с несколькими адаптерами, подходящая для 98% мировых автомобилей с 22 адаптерами в комплекте - идеально для дистрибьюторов.",
      specs: [
        "Система мультиадаптерной ступицы с 22 адаптерами (подходит для 98%+ автомобилей)",
        "Аэродинамическая балочная конструкция со встроенным спойлером",
        "Премиальная резиновая кромка из натурального каучука с тефлоновым покрытием",
        "Гибкий стальной каркас из пружинной стали с эффектом памяти",
        "Бесшумная работа без разводов",
        "Готовая розничная упаковка с индивидуальным брендированием",
        "Сертифицировано ISO 9001 и IATF 16949"
      ],
      features: [
        "Система с 22 адаптерами охватывает более 98% автомобилей по всему миру",
        "Аэродинамическая балочная конструкция снижает шум ветра на скоростях шоссе",
        "Резиновая кромка с тефлоновым покрытием обеспечивает плавную и тихую работу",
        "Стальной каркас с эффектом памяти поддерживает равномерное давление по всей кривизне лобового стекла",
        "Готовая розничная упаковка с возможностью индивидуального брендирования",
        "Идеально для дистрибьюторов, стремящихся минимизировать складские запасы при максимальном охвате"
      ]
    },
    fr: {
      name: "BW-861 Balai d'Essuie-glace Multifonction Universel avec 22 Adaptateurs",
      desc: "Système de balai d'essuie-glace premium à adaptateurs multiples couvrant 98% des véhicules mondiaux avec 22 adaptateurs inclus - idéal pour les distributeurs.",
      specs: [
        "Système de moyeu multi-adaptateur avec 22 adaptateurs (couvre 98%+ des véhicules)",
        "Conception aérodynamique en poutre avec spoiler intégré",
        "Bord d'essuyage en caoutchouc naturel premium avec revêtement téflon",
        "Cadre flexible en acier à ressort à mémoire de forme",
        "Fonctionnement silencieux et sans traces",
        "Emballage prêt pour la vente au détail avec marque personnalisée",
        "Certifié ISO 9001 et IATF 16949"
      ],
      features: [
        "Le système à 22 adaptateurs couvre plus de 98% des véhicules dans le monde",
        "La conception aérodynamique en poutre réduit le bruit du vent à vitesse d'autoroute",
        "Le bord en caoutchouc revêtu de téflon assure un fonctionnement fluide et silencieux",
        "Le cadre en acier à mémoire maintient une pression constante sur toute la courbe du pare-brise",
        "Emballage prêt pour la vente au détail avec options de marque personnalisée disponibles",
        "Parfait pour les distributeurs cherchant à minimiser les SKU tout en maximisant la couverture"
      ]
    },
    de: {
      name: "BW-861 Multifunktions-Universal-Wischerblatt mit 22 Adaptern",
      desc: "Premium-Wischerblattsystem mit mehreren Adaptern, das 98% der weltweiten Fahrzeuge mit 22 mitgelieferten Adaptern abdeckt - ideal für Distributoren.",
      specs: [
        "Multi-Adapter-Nabensystem mit 22 Adaptern (passt für 98%+ Fahrzeuge)",
        "Aerodynamisches Balkendesign mit integriertem Spoiler",
        "Premium-Naturkautschuk-Wischkante mit Teflonbeschichtung",
        "Flexibler Memory-Federstahlrahmen",
        "Geräuschloses und streifenfreies Wischen",
        "Einzelhandelsfertige Verpackung mit individuellem Branding",
        "ISO 9001 und IATF 16949 zertifiziert"
      ],
      features: [
        "Das 22-Adapter-System deckt über 98% der Fahrzeuge weltweit ab",
        "Aerodynamisches Balkendesign reduziert Windgeräusche bei Autobahngeschwindigkeit",
        "Teflonbeschichtete Gummikante sorgt für reibungslosen und leisen Betrieb",
        "Memory-Stahlrahmen hält konstanten Druck über die gesamte Windschutzscheibenkrümmung",
        "Einzelhandelsfertige Verpackung mit Optionen für individuelles Branding",
        "Perfekt für Distributoren, die SKU-Inventar minimieren und Abdeckung maximieren möchten"
      ]
    }
  },

  // ===== BW-802 Universal Frameless =====
  "bw-802-universal-wiper-blade": {
    es: {
      name: "BW-802 Escobilla Universal sin Marco - U-Hook (12\"-28\")",
      desc: "Escobilla universal sin marco de alto rendimiento con adaptador U-Hook preinstalado. Precios directos de fábrica desde China.",
      specs: [
        "Diseño de viga sin marco (Flat Blade)",
        "Adaptador U-Hook preinstalado",
        "Disponible en tamaños de 12\" a 28\"",
        "Borde de goma natural de primera calidad",
        "Alerón aerodinámico integrado",
        "Funcionamiento sin ruido y sin rayas",
        "Certificado ISO 9001 / Listo para OEM"
      ],
      features: [
        "El diseño sin marco elimina la acumulación de nieve y hielo en invierno",
        "El alerón aerodinámico integrado garantiza una presión de limpieza constante a alta velocidad",
        "El adaptador U-Hook preinstalado permite una instalación instantánea sin herramientas",
        "El borde de goma natural de primera calidad ofrece hasta 1 millón de ciclos de limpieza",
        "Amplia gama de tamaños de 12\" a 28\" cubre la mayoría de turismos y SUV",
        "Precios competitivos de fábrica con MOQ bajo para nuevos distribuidores"
      ]
    },
    ru: {
      name: "BW-802 Универсальный бескаркасный стеклоочиститель - U-Hook (12\"-28\")",
      desc: "Высокопроизводительный универсальный бескаркасный стеклоочиститель с предустановленным адаптером U-Hook. Прямые заводские цены из Китая.",
      specs: [
        "Бескаркасная балочная конструкция (Flat Blade)",
        "Предустановленный адаптер U-Hook",
        "Доступны размеры от 12\" до 28\"",
        "Премиальная резиновая кромка из натурального каучука",
        "Встроенный аэродинамический спойлер",
        "Бесшумная работа без разводов",
        "Сертифицировано ISO 9001 / Готово для OEM"
      ],
      features: [
        "Бескаркасная конструкция предотвращает скопление снега и льда зимой",
        "Встроенный аэродинамический спойлер обеспечивает постоянное давление на высокой скорости",
        "Предустановленный адаптер U-Hook позволяет мгновенно установить без инструментов",
        "Премиальная резиновая кромка обеспечивает до 1 миллиона циклов очистки",
        "Широкий диапазон размеров от 12\" до 28\" охватывает большинство легковых автомобилей и внедорожников",
        "Конкурентоспособные заводские цены с низким минимальным заказом для новых дистрибьюторов"
      ]
    },
    fr: {
      name: "BW-802 Balai d'Essuie-glace Universel sans Armature - U-Hook (12\"-28\")",
      desc: "Balai d'essuie-glace universel sans armature haute performance avec adaptateur U-Hook préinstallé. Prix directs d'usine depuis la Chine.",
      specs: [
        "Conception en poutre sans armature (Flat Blade)",
        "Adaptateur U-Hook préinstallé",
        "Disponible en tailles de 12\" à 28\"",
        "Bord d'essuyage en caoutchouc naturel premium",
        "Spoiler aérodynamique intégré",
        "Fonctionnement silencieux et sans traces",
        "Certifié ISO 9001 / Prêt pour OEM"
      ],
      features: [
        "La conception sans armature élimine l'accumulation de neige et de glace en hiver",
        "Le spoiler aérodynamique intégré assure une pression d'essuyage constante à haute vitesse",
        "L'adaptateur U-Hook préinstallé permet une installation instantanée sans outils",
        "Le bord en caoutchouc naturel premium offre jusqu'à 1 million de cycles d'essuyage",
        "Large gamme de tailles de 12\" à 28\" couvre la plupart des voitures particulières et SUV",
        "Prix d'usine compétitifs avec faible MOQ pour les nouveaux distributeurs"
      ]
    },
    de: {
      name: "BW-802 Universelles Rahmenloses Wischerblatt - U-Hook (12\"-28\")",
      desc: "Hochleistungsfähiges universelles rahmenloses Wischerblatt mit vorinstalliertem U-Hook-Adapter. Fabrikdirektpreise aus China.",
      specs: [
        "Rahmenloses Balkendesign (Flat Blade)",
        "Vorinstallierter U-Hook-Adapter",
        "Erhältlich in Größen von 12\" bis 28\"",
        "Premium-Naturkautschuk-Wischkante",
        "Integrierter aerodynamischer Spoiler",
        "Geräuschloses und streifenfreies Wischen",
        "ISO 9001 zertifiziert / OEM-bereit"
      ],
      features: [
        "Rahmenloses Design verhindert Schnee- und Eisansammlung im Winter",
        "Integrierter aerodynamischer Spoiler sorgt für konstanten Wischdruck bei hoher Geschwindigkeit",
        "Vorinstallierter U-Hook-Adapter ermöglicht sofortige werkzeuglose Installation",
        "Premium-Naturkautschukkante liefert bis zu 1 Million Wischzyklen",
        "Breiter Größenbereich von 12\" bis 28\" deckt die meisten Pkw und SUVs ab",
        "Wettbewerbsfähige Fabrikpreise mit niedrigem MOQ für neue Distributoren"
      ]
    }
  },

  // ===== BW-203 Mercedes S-Class =====
  "bw-203": {
    es: {
      name: "BW-203 LELION Escobilla con Pulverizador para Mercedes Benz W222 (Clase S)",
      desc: "Escobilla limpiaparabrisas con sistema de pulverización de grado OEM diseñada específicamente para Mercedes Benz Clase S W222 (2014-2020) con sistema de boquilla lavaparabrisas integrado.",
      specs: [
        "Sistema de boquilla pulverizadora de agua integrada",
        "Ajuste directo para Mercedes Benz W222 Clase S (2014-2020)",
        "Tecnología de limpieza ultrasilenciosa",
        "Instalación Plug & Play - Sin adaptadores necesarios",
        "Borde de goma natural de grado AA+ con recubrimiento de teflón",
        "Bastidor de acero elástico de alta memoria",
        "Recubrimiento anti-ozono y resistente a rayos UV"
      ],
      features: [
        "Las boquillas pulverizadoras integradas distribuyen el líquido uniformemente por todo el recorrido de la escobilla",
        "Ajuste perfecto OEM para Mercedes Benz Clase S - no requiere modificaciones",
        "Funcionamiento ultrasilencioso adecuado para vehículos de lujo",
        "El borde de goma recubierto de teflón garantiza un deslizamiento suave y una larga vida útil",
        "Probado en condiciones climáticas extremas de -30°C a +80°C"
      ]
    },
    ru: {
      name: "BW-203 LELION Стеклоочиститель с распылителем для Mercedes Benz W222 (S-Class)",
      desc: "Стеклоочиститель OEM-класса с распылительной системой, специально разработанный для Mercedes Benz S-Class W222 (2014-2020) со встроенной форсункой омывателя.",
      specs: [
        "Встроенная система распылительных форсунок",
        "Прямая установка для Mercedes Benz W222 S-Class (2014-2020)",
        "Технология ультрамалошумной очистки",
        "Установка Plug & Play - адаптеры не требуются",
        "Резиновая кромка класса AA+ с тефлоновым покрытием",
        "Стальной каркас с эффектом памяти",
        "Антиозоновое и УФ-защитное покрытие"
      ],
      features: [
        "Встроенные распылительные форсунки равномерно распределяют жидкость по всей длине щетки",
        "Идеальная посадка OEM для Mercedes Benz S-Class - модификации не требуются",
        "Ультратихая работа, подходящая для автомобилей класса люкс",
        "Резиновая кромка с тефлоновым покрытием обеспечивает плавное скольжение и длительный срок службы",
        "Протестировано в экстремальных погодных условиях от -30°C до +80°C"
      ]
    },
    fr: {
      name: "BW-203 LELION Balai d'Essuie-glace avec Pulvérisation pour Mercedes Benz W222 (Classe S)",
      desc: "Balai d'essuie-glace de qualité OEM avec système de pulvérisation spécialement conçu pour Mercedes Benz Classe S W222 (2014-2020) avec buse de lave-glace intégrée.",
      specs: [
        "Système de buse de pulvérisation d'eau intégrée",
        "Montage direct pour Mercedes Benz W222 Classe S (2014-2020)",
        "Technologie d'essuyage ultra-silencieuse",
        "Installation Plug & Play - Aucun adaptateur requis",
        "Bord en caoutchouc naturel grade AA+ avec revêtement téflon",
        "Cadre en acier élastique à mémoire de forme",
        "Revêtement anti-ozone et résistant aux UV"
      ],
      features: [
        "Les buses de pulvérisation intégrées répartissent uniformément le liquide sur tout le trajet du balai",
        "Ajustement OEM parfait pour Mercedes Benz Classe S - aucune modification requise",
        "Fonctionnement ultra-silencieux adapté aux véhicules de luxe",
        "Le bord en caoutchouc revêtu de téflon assure un glissement fluide et une longue durée de vie",
        "Testé dans des conditions météorologiques extrêmes de -30°C à +80°C"
      ]
    },
    de: {
      name: "BW-203 LELION Sprühwischerblatt für Mercedes Benz W222 (S-Klasse)",
      desc: "OEM-Sprühwischerblatt speziell entwickelt für Mercedes Benz S-Klasse W222 (2014-2020) mit integriertem Waschdüsensystem.",
      specs: [
        "Integriertes Wassersprühdüsensystem",
        "Direkte Passform für Mercedes Benz W222 S-Klasse (2014-2020)",
        "Ultra-leise Wischtechnologie",
        "Plug & Play Installation - Keine Adapter erforderlich",
        "AA+ Naturkautschukkante mit Teflonbeschichtung",
        "Memory-Stahlrahmen mit hoher Elastizität",
        "Anti-Ozon- und UV-beständige Beschichtung"
      ],
      features: [
        "Integrierte Sprühdüsen verteilen die Flüssigkeit gleichmäßig über den gesamten Wischweg",
        "Perfekte OEM-Passform für Mercedes Benz S-Klasse - keine Modifikationen erforderlich",
        "Ultra-leiser Betrieb, geeignet für Luxusfahrzeuge",
        "Teflonbeschichtete Gummikante sorgt für reibungsloses Gleiten und lange Lebensdauer",
        "Getestet für extreme Wetterbedingungen von -30°C bis +80°C"
      ]
    }
  },

  // ===== BW-202 Volvo XC60 =====
  "bw-202-volvo-xc60-spray": {
    es: {
      name: "BW-202 LELION Escobilla con Pulverizador para Volvo XC60 2018-2022",
      desc: "Escobilla limpiaparabrisas con sistema de pulverización de grado OEM diseñada específicamente para Volvo XC60 (2018-2022) con sistema de boquilla lavaparabrisas integrado.",
      specs: [
        "Sistema de boquilla pulverizadora de agua integrada",
        "Ajuste directo para Volvo XC60 (2018-2022)",
        "Tecnología de limpieza ultrasilenciosa",
        "Instalación Plug & Play - Sin adaptadores necesarios",
        "Borde de goma natural de grado AA+ con recubrimiento de teflón",
        "Bastidor de acero elástico de alta memoria",
        "Recubrimiento anti-ozono y resistente a rayos UV"
      ],
      features: [
        "Sistema de pulverización integrado para una distribución óptima del líquido lavaparabrisas",
        "Ajuste directo preciso para Volvo XC60 sin necesidad de modificaciones",
        "Funcionamiento ultrasilencioso adecuado para un SUV premium",
        "Borde de goma con recubrimiento de teflón para un rendimiento duradero",
        "Probado en condiciones climáticas nórdicas extremas de -30°C a +80°C"
      ]
    },
    ru: {
      name: "BW-202 LELION Стеклоочиститель с распылителем для Volvo XC60 2018-2022",
      desc: "Стеклоочиститель OEM-класса с распылительной системой, специально разработанный для Volvo XC60 (2018-2022) со встроенной форсункой омывателя.",
      specs: [
        "Встроенная система распылительных форсунок",
        "Прямая установка для Volvo XC60 (2018-2022)",
        "Технология ультрамалошумной очистки",
        "Установка Plug & Play - адаптеры не требуются",
        "Резиновая кромка класса AA+ с тефлоновым покрытием",
        "Стальной каркас с эффектом памяти",
        "Антиозоновое и УФ-защитное покрытие"
      ],
      features: [
        "Встроенная система распыления для оптимального распределения омывающей жидкости",
        "Точная прямая установка для Volvo XC60 без модификаций",
        "Ультратихая работа, подходящая для премиального внедорожника",
        "Резиновая кромка с тефлоновым покрытием для долговечной работы",
        "Протестировано в экстремальных скандинавских погодных условиях от -30°C до +80°C"
      ]
    },
    fr: {
      name: "BW-202 LELION Balai d'Essuie-glace avec Pulvérisation pour Volvo XC60 2018-2022",
      desc: "Balai d'essuie-glace de qualité OEM avec système de pulvérisation spécialement conçu pour Volvo XC60 (2018-2022) avec buse de lave-glace intégrée.",
      specs: [
        "Système de buse de pulvérisation d'eau intégrée",
        "Montage direct pour Volvo XC60 (2018-2022)",
        "Technologie d'essuyage ultra-silencieuse",
        "Installation Plug & Play - Aucun adaptateur requis",
        "Bord en caoutchouc naturel grade AA+ avec revêtement téflon",
        "Cadre en acier élastique à mémoire de forme",
        "Revêtement anti-ozone et résistant aux UV"
      ],
      features: [
        "Système de pulvérisation intégré pour une distribution optimale du liquide lave-glace",
        "Ajustement direct précis pour Volvo XC60 sans modification nécessaire",
        "Fonctionnement ultra-silencieux adapté à un SUV premium",
        "Bord en caoutchouc revêtu de téflon pour des performances durables",
        "Testé dans des conditions météorologiques nordiques extrêmes de -30°C à +80°C"
      ]
    },
    de: {
      name: "BW-202 LELION Sprühwischerblatt für Volvo XC60 2018-2022",
      desc: "OEM-Sprühwischerblatt speziell entwickelt für Volvo XC60 (2018-2022) mit integriertem Waschdüsensystem.",
      specs: [
        "Integriertes Wassersprühdüsensystem",
        "Direkte Passform für Volvo XC60 (2018-2022)",
        "Ultra-leise Wischtechnologie",
        "Plug & Play Installation - Keine Adapter erforderlich",
        "AA+ Naturkautschukkante mit Teflonbeschichtung",
        "Memory-Stahlrahmen mit hoher Elastizität",
        "Anti-Ozon- und UV-beständige Beschichtung"
      ],
      features: [
        "Integriertes Sprühsystem für optimale Verteilung der Scheibenwaschflüssigkeit",
        "Präzise Direktpassform für Volvo XC60 ohne Modifikationen",
        "Ultra-leiser Betrieb, geeignet für einen Premium-SUV",
        "Teflonbeschichtete Gummikante für langanhaltende Leistung",
        "Getestet unter extremen nordischen Wetterbedingungen von -30°C bis +80°C"
      ]
    }
  },

  // ===== BW-204 Mercedes E-Class Heated =====
  "bw-204-mercedes-e-class-heated": {
    es: {
      name: "BW-204 Escobilla Calefactada para Mercedes E-Class C238/A238 24\"+21\" (2017-2022)",
      desc: "Escobillas limpiaparabrisas delanteras calefactadas de ajuste directo para Mercedes-Benz E-Class C238/A238 (2017-2022). Compatibles con pulverización de agua, estilo OE, instalación rápida sin herramientas.",
      specs: [
        "Función de calefacción integrada para rendimiento en invierno",
        "Ajuste directo para Mercedes E-Class C238/A238 (2017-2022)",
        "Compatible con sistema de pulverización de agua",
        "Conjunto de 24 pulgadas + 21 pulgadas",
        "Instalación rápida sin herramientas",
        "Estilo y ajuste OE",
        "Certificado ISO 9001 e IATF 16949"
      ],
      features: [
        "El elemento calefactor integrado evita la acumulación de hielo en climas fríos",
        "Ajuste directo exacto para Mercedes E-Class - no se necesitan adaptadores",
        "Compatible con el sistema de pulverización de agua original de Mercedes",
        "Diseño de grado OE para una integración perfecta con el vehículo",
        "Instalación sin herramientas en segundos con conector de presión",
        "Ideal para mercados europeos y de clima frío"
      ]
    },
    ru: {
      name: "BW-204 Стеклоочиститель с подогревом для Mercedes E-Class C238/A238 24\"+21\" (2017-2022)",
      desc: "Передние стеклоочистители с подогревом прямой установки для Mercedes-Benz E-Class C238/A238 (2017-2022). Совместимы с системой распыления воды, стиль OE, установка без инструментов.",
      specs: [
        "Встроенная функция подогрева для зимней эксплуатации",
        "Прямая установка для Mercedes E-Class C238/A238 (2017-2022)",
        "Совместимость с системой распыления воды",
        "Комплект 24 дюйма + 21 дюйм",
        "Быстрая установка без инструментов",
        "Стиль и посадка OE",
        "Сертифицировано ISO 9001 и IATF 16949"
      ],
      features: [
        "Встроенный нагревательный элемент предотвращает образование льда в холодную погоду",
        "Точная прямая установка для Mercedes E-Class - адаптеры не требуются",
        "Совместимость с оригинальной системой распыления воды Mercedes",
        "Дизайн класса OE для бесшовной интеграции с автомобилем",
        "Установка без инструментов за секунды с помощью защелкивающегося разъема",
        "Идеально для европейских рынков и холодного климата"
      ]
    },
    fr: {
      name: "BW-204 Balai d'Essuie-glace Chauffant pour Mercedes E-Class C238/A238 24\"+21\" (2017-2022)",
      desc: "Balais d'essuie-glace avant chauffants à montage direct pour Mercedes-Benz E-Class C238/A238 (2017-2022). Compatibles avec le système de pulvérisation d'eau, style OE, installation rapide sans outils.",
      specs: [
        "Fonction de chauffage intégrée pour les performances hivernales",
        "Montage direct pour Mercedes E-Class C238/A238 (2017-2022)",
        "Compatible avec le système de pulvérisation d'eau",
        "Ensemble 24 pouces + 21 pouces",
        "Installation rapide sans outils",
        "Style et ajustement OE",
        "Certifié ISO 9001 et IATF 16949"
      ],
      features: [
        "L'élément chauffant intégré empêche l'accumulation de glace par temps froid",
        "Ajustement direct exact pour Mercedes E-Class - aucun adaptateur nécessaire",
        "Compatible avec le système de pulvérisation d'eau d'origine Mercedes",
        "Conception de qualité OE pour une intégration parfaite avec le véhicule",
        "Installation sans outils en quelques secondes avec connecteur à encliquetage",
        "Idéal pour les marchés européens et les climats froids"
      ]
    },
    de: {
      name: "BW-204 Beheiztes Wischerblatt für Mercedes E-Class C238/A238 24\"+21\" (2017-2022)",
      desc: "Beheizte Frontwischerblätter mit Direktpassform für Mercedes-Benz E-Class C238/A238 (2017-2022). Kompatibel mit Wassersprühsystem, OE-Stil, werkzeuglose Schnellmontage.",
      specs: [
        "Integrierte Heizfunktion für Winterleistung",
        "Direkte Passform für Mercedes E-Class C238/A238 (2017-2022)",
        "Kompatibel mit Wassersprühsystem",
        "Set mit 24 Zoll + 21 Zoll",
        "Werkzeuglose Schnellmontage",
        "OE-Stil und Passform",
        "ISO 9001 und IATF 16949 zertifiziert"
      ],
      features: [
        "Integriertes Heizelement verhindert Eisbildung bei kaltem Wetter",
        "Exakte Direktpassform für Mercedes E-Class - keine Adapter erforderlich",
        "Kompatibel mit dem originalen Mercedes-Wassersprühsystem",
        "OE-Design für nahtlose Integration mit dem Fahrzeug",
        "Werkzeuglose Montage in Sekunden mit Snap-In-Anschluss",
        "Ideal für europäische Märkte und kaltes Klima"
      ]
    }
  },

  // ===== BW-205 Volvo V60/S60 =====
  "bw-205-volvo-v60-s60": {
    es: {
      name: "BW-205 Escobillas de Ajuste Directo para Volvo V60/S60 (2019-2022)",
      desc: "Escobillas limpiaparabrisas delanteras de ajuste directo para Volvo V60/S60 (2019-2022) y V60 Cross Country (2020-2022). Instalación sin herramientas, silenciosas y duraderas.",
      specs: [
        "Ajuste directo para Volvo V60/S60 (2019-2022)",
        "Compatible con V60 Cross Country (2020-2022)",
        "Instalación rápida sin herramientas",
        "Tecnología de limpieza silenciosa",
        "Borde de goma natural premium",
        "Marco de acero elástico de alta memoria",
        "Recubrimiento resistente a rayos UV y ozono"
      ],
      features: [
        "Ajuste directo preciso para vehículos Volvo sin necesidad de adaptadores",
        "Instalación sin herramientas en segundos",
        "Funcionamiento ultrasilencioso adecuado para vehículos premium",
        "Construcción duradera con materiales de grado OE",
        "Probado en condiciones climáticas nórdicas"
      ]
    },
    ru: {
      name: "BW-205 Стеклоочистители прямой установки для Volvo V60/S60 (2019-2022)",
      desc: "Передние стеклоочистители прямой установки для Volvo V60/S60 (2019-2022) и V60 Cross Country (2020-2022). Установка без инструментов, тихие и долговечные.",
      specs: [
        "Прямая установка для Volvo V60/S60 (2019-2022)",
        "Совместимость с V60 Cross Country (2020-2022)",
        "Быстрая установка без инструментов",
        "Технология бесшумной очистки",
        "Премиальная резиновая кромка из натурального каучука",
        "Стальной каркас с эффектом памяти",
        "УФ- и озоностойкое покрытие"
      ],
      features: [
        "Точная прямая установка для автомобилей Volvo без адаптеров",
        "Установка без инструментов за секунды",
        "Ультратихая работа, подходящая для премиальных автомобилей",
        "Прочная конструкция с материалами класса OE",
        "Протестировано в скандинавских погодных условиях"
      ]
    },
    fr: {
      name: "BW-205 Balais d'Essuie-glace à Montage Direct pour Volvo V60/S60 (2019-2022)",
      desc: "Balais d'essuie-glace avant à montage direct pour Volvo V60/S60 (2019-2022) et V60 Cross Country (2020-2022). Installation sans outils, silencieux et durables.",
      specs: [
        "Montage direct pour Volvo V60/S60 (2019-2022)",
        "Compatible avec V60 Cross Country (2020-2022)",
        "Installation rapide sans outils",
        "Technologie d'essuyage silencieuse",
        "Bord en caoutchouc naturel premium",
        "Cadre en acier élastique à mémoire de forme",
        "Revêtement résistant aux UV et à l'ozone"
      ],
      features: [
        "Ajustement direct précis pour véhicules Volvo sans adaptateur nécessaire",
        "Installation sans outils en quelques secondes",
        "Fonctionnement ultra-silencieux adapté aux véhicules premium",
        "Construction durable avec des matériaux de qualité OE",
        "Testé dans des conditions météorologiques nordiques"
      ]
    },
    de: {
      name: "BW-205 Direktpassform-Wischerblätter für Volvo V60/S60 (2019-2022)",
      desc: "Frontwischerblätter mit Direktpassform für Volvo V60/S60 (2019-2022) und V60 Cross Country (2020-2022). Werkzeuglose Montage, leise und langlebig.",
      specs: [
        "Direkte Passform für Volvo V60/S60 (2019-2022)",
        "Kompatibel mit V60 Cross Country (2020-2022)",
        "Werkzeuglose Schnellmontage",
        "Leise Wischtechnologie",
        "Premium-Naturkautschuk-Wischkante",
        "Memory-Stahlrahmen mit hoher Elastizität",
        "UV- und ozonbeständige Beschichtung"
      ],
      features: [
        "Präzise Direktpassform für Volvo-Fahrzeuge ohne Adapter",
        "Werkzeuglose Montage in Sekunden",
        "Ultra-leiser Betrieb, geeignet für Premium-Fahrzeuge",
        "Langlebige Konstruktion mit OE-Materialien",
        "Getestet unter nordischen Wetterbedingungen"
      ]
    }
  },

  // ===== BW-027 Toyota Corolla Wiper Arm =====
  "bw-027-toyota-corolla-wiper-arm": {
    es: {
      name: "BW-027 Brazo de Limpiaparabrisas Delantero Derecho para Toyota Corolla 1993-1996 (RHD)",
      desc: "Brazo de limpiaparabrisas delantero derecho de reemplazo OEM para Toyota Corolla 1993-1996. Construcción duradera, ajuste directo, instalación sencilla.",
      specs: [
        "Brazo de limpiaparabrisas delantero derecho (RHD)",
        "Ajuste directo para Toyota Corolla 1993-1996",
        "Construcción de acero duradero",
        "Acabado negro resistente a la corrosión",
        "Incluye tuerca de montaje y cubierta",
        "Certificado ISO 9001",
        "MOQ bajo - 100 PCS"
      ],
      features: [
        "Reemplazo directo para el brazo de limpiaparabrisas original de Toyota",
        "Construcción de acero de alta resistencia para uso duradero",
        "Acabado negro con recubrimiento en polvo resistente a la intemperie",
        "Incluye todo el hardware de montaje para una instalación completa",
        "Ajuste preciso del buje estriado para un funcionamiento sin bamboleo",
        "Ideal para mercados de posventa y flotas en regiones RHD"
      ]
    },
    ru: {
      name: "BW-027 Передний правый рычаг стеклоочистителя для Toyota Corolla 1993-1996 (RHD)",
      desc: "Передний правый рычаг стеклоочистителя OEM-замены для Toyota Corolla 1993-1996. Прочная конструкция, прямая установка, легкий монтаж.",
      specs: [
        "Передний правый рычаг стеклоочистителя (RHD)",
        "Прямая установка для Toyota Corolla 1993-1996",
        "Прочная стальная конструкция",
        "Коррозионностойкое черное покрытие",
        "В комплекте монтажная гайка и крышка",
        "Сертифицировано ISO 9001",
        "Низкий минимальный заказ - 100 шт."
      ],
      features: [
        "Прямая замена оригинального рычага стеклоочистителя Toyota",
        "Высокопрочная стальная конструкция для длительного использования",
        "Черное порошковое покрытие, устойчивое к погодным условиям",
        "Включает весь монтажный крепеж для полной установки",
        "Точная посадка шлицевой втулки для работы без люфта",
        "Идеально для рынков послепродажного обслуживания и автопарков в регионах RHD"
      ]
    },
    fr: {
      name: "BW-027 Bras d'Essuie-glace Avant Droit pour Toyota Corolla 1993-1996 (RHD)",
      desc: "Bras d'essuie-glace avant droit de remplacement OEM pour Toyota Corolla 1993-1996. Construction durable, montage direct, installation facile.",
      specs: [
        "Bras d'essuie-glace avant droit (RHD)",
        "Montage direct pour Toyota Corolla 1993-1996",
        "Construction en acier durable",
        "Finition noire résistante à la corrosion",
        "Écrou de montage et capuchon inclus",
        "Certifié ISO 9001",
        "Faible MOQ - 100 PCS"
      ],
      features: [
        "Remplacement direct du bras d'essuie-glace d'origine Toyota",
        "Construction en acier à haute résistance pour une utilisation durable",
        "Finition noire à revêtement en poudre résistante aux intempéries",
        "Toute la quincaillerie de montage incluse pour une installation complète",
        "Ajustement précis de la douille cannelée pour un fonctionnement sans oscillation",
        "Idéal pour les marchés de pièces de rechange et les flottes en régions RHD"
      ]
    },
    de: {
      name: "BW-027 Vorderer Rechter Wischerarm für Toyota Corolla 1993-1996 (RHD)",
      desc: "Vorderer rechter OEM-Ersatz-Wischerarm für Toyota Corolla 1993-1996. Langlebige Konstruktion, direkte Passform, einfache Montage.",
      specs: [
        "Vorderer rechter Wischerarm (RHD)",
        "Direkte Passform für Toyota Corolla 1993-1996",
        "Langlebige Stahlkonstruktion",
        "Korrosionsbeständige schwarze Oberfläche",
        "Montagemutter und Abdeckung inklusive",
        "ISO 9001 zertifiziert",
        "Niedriger MOQ - 100 Stück"
      ],
      features: [
        "Direkter Ersatz für den originalen Toyota-Wischerarm",
        "Hochfeste Stahlkonstruktion für langlebigen Einsatz",
        "Witterungsbeständige schwarze Pulverbeschichtung",
        "Alle Montageteile für eine vollständige Installation enthalten",
        "Präzise Passform der Keilnabenbuchse für wackelfreien Betrieb",
        "Ideal für Aftermarket- und Flottenmärkte in RHD-Regionen"
      ]
    }
  },

  // ===== BW-808 Hybrid Wiper =====
  "bw-808-hybrid-wiper": {
    es: {
      name: "BW-808 Escobilla Híbrida - Diseño de Tres Secciones (12-28 pulgadas)",
      desc: "Escobilla híbrida premium de tres secciones que combina el diseño aerodinámico de viga con una construcción duradera de marco metálico. Se ajusta al 95% de los vehículos con brazos U-Hook.",
      specs: [
        "Diseño híbrido de tres secciones",
        "Compatible con brazos U-Hook - cubre el 95% de los vehículos",
        "Disponible en tamaños de 12\" a 28\"",
        "Borde de goma natural premium",
        "Alerón aerodinámico integrado",
        "Marco metálico duradero con bisagras flexibles",
        "Certificado ISO 9001"
      ],
      features: [
        "Diseño híbrido único de tres secciones para una adaptabilidad superior a la curvatura del parabrisas",
        "Combinación de tecnología de viga y marco tradicional para una presión equilibrada",
        "Las bisagras flexibles permiten que la escobilla siga con precisión la curvatura del parabrisas",
        "El alerón aerodinámico reduce la elevación del viento a velocidades de autopista",
        "Amplia compatibilidad con brazos U-Hook en todas las marcas de vehículos",
        "Ideal para distribuidores que buscan un producto de rendimiento de gama media"
      ]
    },
    ru: {
      name: "BW-808 Гибридный стеклоочиститель - Трехсекционная конструкция (12-28 дюймов)",
      desc: "Премиальный трехсекционный гибридный стеклоочиститель, сочетающий аэродинамическую балочную конструкцию с прочным металлическим каркасом. Подходит для 95% автомобилей с рычагами U-Hook.",
      specs: [
        "Гибридная трехсекционная конструкция",
        "Совместимость с рычагами U-Hook - охватывает 95% автомобилей",
        "Доступны размеры от 12\" до 28\"",
        "Премиальная резиновая кромка из натурального каучука",
        "Встроенный аэродинамический спойлер",
        "Прочный металлический каркас с гибкими шарнирами",
        "Сертифицировано ISO 9001"
      ],
      features: [
        "Уникальная гибридная трехсекционная конструкция для превосходной адаптации к кривизне лобового стекла",
        "Сочетание балочной технологии и традиционного каркаса для сбалансированного давления",
        "Гибкие шарниры позволяют щетке точно следовать кривизне стекла",
        "Аэродинамический спойлер снижает подъемную силу ветра на скоростях шоссе",
        "Широкая совместимость с рычагами U-Hook для всех марок автомобилей",
        "Идеально для дистрибьюторов, ищущих продукт среднего ценового сегмента"
      ]
    },
    fr: {
      name: "BW-808 Balai d'Essuie-glace Hybride - Conception Trois Sections (12-28 pouces)",
      desc: "Balai d'essuie-glace hybride premium à trois sections combinant la conception aérodynamique en poutre avec une construction durable à cadre métallique. Compatible avec 95% des véhicules à bras U-Hook.",
      specs: [
        "Conception hybride à trois sections",
        "Compatible avec les bras U-Hook - couvre 95% des véhicules",
        "Disponible en tailles de 12\" à 28\"",
        "Bord en caoutchouc naturel premium",
        "Spoiler aérodynamique intégré",
        "Cadre métallique durable avec charnières flexibles",
        "Certifié ISO 9001"
      ],
      features: [
        "Conception hybride unique à trois sections pour une adaptabilité supérieure à la courbure du pare-brise",
        "Combinaison de la technologie en poutre et du cadre traditionnel pour une pression équilibrée",
        "Les charnières flexibles permettent au balai de suivre précisément la courbure du pare-brise",
        "Le spoiler aérodynamique réduit la portance du vent à vitesse d'autoroute",
        "Large compatibilité avec les bras U-Hook sur toutes les marques de véhicules",
        "Idéal pour les distributeurs recherchant un produit de performance milieu de gamme"
      ]
    },
    de: {
      name: "BW-808 Hybrid-Wischerblatt - Dreiteiliges Design (12-28 Zoll)",
      desc: "Premium-Hybrid-Wischerblatt mit dreiteiligem Design, das aerodynamische Balkentechnologie mit langlebiger Metallrahmenkonstruktion kombiniert. Passt für 95% der Fahrzeuge mit U-Hook-Armen.",
      specs: [
        "Dreiteiliges Hybrid-Design",
        "Kompatibel mit U-Hook-Armen - deckt 95% der Fahrzeuge ab",
        "Erhältlich in Größen von 12\" bis 28\"",
        "Premium-Naturkautschuk-Wischkante",
        "Integrierter aerodynamischer Spoiler",
        "Langlebiger Metallrahmen mit flexiblen Scharnieren",
        "ISO 9001 zertifiziert"
      ],
      features: [
        "Einzigartiges dreiteiliges Hybrid-Design für überlegene Anpassung an die Windschutzscheibenkrümmung",
        "Kombination aus Balkentechnologie und traditionellem Rahmen für ausgewogenen Druck",
        "Flexible Scharniere ermöglichen präzises Folgen der Scheibenkrümmung",
        "Aerodynamischer Spoiler reduziert Windauftrieb bei Autobahngeschwindigkeit",
        "Breite Kompatibilität mit U-Hook-Armen über alle Fahrzeugmarken hinweg",
        "Ideal für Distributoren, die ein Mittelklasse-Leistungsprodukt suchen"
      ]
    }
  },

  // ===== BW-160 Rear Wiper =====
  "bw-160-rear-wiper-blade": {
    es: {
      name: "BW-160 Escobilla Trasera Multifuncional - Ajuste Universal (98% de Cobertura)",
      desc: "Escobilla trasera multifuncional premium con sistema de adaptador universal que cubre el 98% de los vehículos. Ideal para distribuidores mayoristas.",
      specs: [
        "Sistema de adaptador universal multiconector",
        "Cubre el 98% de los vehículos a nivel mundial",
        "Diseño específico para parabrisas trasero",
        "Borde de goma natural premium",
        "Funcionamiento sin ruido y sin rayas",
        "Fácil instalación Plug & Play",
        "Certificado ISO 9001"
      ],
      features: [
        "El sistema de adaptador universal cubre prácticamente todos los vehículos con limpiaparabrisas trasero",
        "Diseño compacto optimizado para la curvatura del parabrisas trasero",
        "Borde de goma premium para una limpieza suave y sin ruido",
        "Instalación rápida sin necesidad de herramientas especiales",
        "Embalaje listo para venta al por menor con marca personalizada opcional",
        "Perfecto para distribuidores que buscan consolidar el inventario de escobillas traseras"
      ]
    },
    ru: {
      name: "BW-160 Многофункциональный задний стеклоочиститель - Универсальная установка (98% охват)",
      desc: "Премиальный многофункциональный задний стеклоочиститель с универсальной адаптерной системой, охватывающей 98% автомобилей. Идеально для оптовых дистрибьюторов.",
      specs: [
        "Универсальная мультиразъемная адаптерная система",
        "Охватывает 98% автомобилей по всему миру",
        "Специальная конструкция для заднего стекла",
        "Премиальная резиновая кромка из натурального каучука",
        "Бесшумная работа без разводов",
        "Простая установка Plug & Play",
        "Сертифицировано ISO 9001"
      ],
      features: [
        "Универсальная адаптерная система охватывает практически все автомобили с задним стеклоочистителем",
        "Компактная конструкция, оптимизированная для кривизны заднего стекла",
        "Премиальная резиновая кромка для плавной и бесшумной очистки",
        "Быстрая установка без специальных инструментов",
        "Готовая розничная упаковка с возможностью индивидуального брендирования",
        "Идеально для дистрибьюторов, стремящихся консолидировать запасы задних щеток"
      ]
    },
    fr: {
      name: "BW-160 Balai d'Essuie-glace Arrière Multifonction - Montage Universel (98% de Couverture)",
      desc: "Balai d'essuie-glace arrière multifonction premium avec système d'adaptateur universel couvrant 98% des véhicules. Idéal pour les distributeurs en gros.",
      specs: [
        "Système d'adaptateur universel multi-connecteur",
        "Couvre 98% des véhicules dans le monde",
        "Conception spécifique pour pare-brise arrière",
        "Bord en caoutchouc naturel premium",
        "Fonctionnement silencieux et sans traces",
        "Installation facile Plug & Play",
        "Certifié ISO 9001"
      ],
      features: [
        "Le système d'adaptateur universel couvre pratiquement tous les véhicules avec essuie-glace arrière",
        "Conception compacte optimisée pour la courbure du pare-brise arrière",
        "Bord en caoutchouc premium pour un essuyage fluide et silencieux",
        "Installation rapide sans outils spéciaux nécessaires",
        "Emballage prêt pour la vente au détail avec marque personnalisée en option",
        "Parfait pour les distributeurs cherchant à consolider l'inventaire des balais arrière"
      ]
    },
    de: {
      name: "BW-160 Multifunktionales Heckwischerblatt - Universalpassform (98% Abdeckung)",
      desc: "Premium multifunktionales Heckwischerblatt mit universellem Adaptersystem, das 98% der Fahrzeuge abdeckt. Ideal für Großhandelsdistributoren.",
      specs: [
        "Universelles Multi-Stecker-Adapter-System",
        "Deckt 98% der Fahrzeuge weltweit ab",
        "Spezielles Design für Heckscheibe",
        "Premium-Naturkautschuk-Wischkante",
        "Geräuschloses und streifenfreies Wischen",
        "Einfache Plug & Play Installation",
        "ISO 9001 zertifiziert"
      ],
      features: [
        "Das universelle Adaptersystem deckt praktisch alle Fahrzeuge mit Heckscheibenwischer ab",
        "Kompaktes Design, optimiert für die Heckscheibenkrümmung",
        "Premium-Gummikante für reibungsloses und leises Wischen",
        "Schnelle Installation ohne Spezialwerkzeug",
        "Einzelhandelsfertige Verpackung mit optionalem individuellem Branding",
        "Perfekt für Distributoren, die Heckwischer-Inventar konsolidieren möchten"
      ]
    }
  },

  // ===== BW-161 Rear Wiper =====
  "bw-161-rear-wiper-blade": {
    es: {
      name: "BW-161 Escobilla Trasera Multifuncional Universal",
      desc: "Escobilla trasera multifuncional universal al por mayor con ajuste universal. Ideal para distribuidores a granel y el mercado de reemplazo OEM.",
      specs: [
        "Diseño multifuncional para parabrisas trasero",
        "Ajuste universal con múltiples adaptadores",
        "Borde de goma natural premium",
        "Funcionamiento sin ruido y sin rayas",
        "Fácil instalación",
        "Certificado ISO 9001",
        "Listo para OEM/ODM"
      ],
      features: [
        "Diseño versátil compatible con la mayoría de los vehículos con limpiaparabrisas trasero",
        "Múltiples adaptadores incluidos para máxima cobertura de vehículos",
        "Borde de goma premium para una limpieza duradera",
        "Instalación sencilla que no requiere herramientas especiales",
        "Precios mayoristas competitivos para pedidos al por mayor",
        "Opciones de personalización OEM/ODM disponibles"
      ]
    },
    ru: {
      name: "BW-161 Многофункциональный универсальный задний стеклоочиститель",
      desc: "Оптовый многофункциональный универсальный задний стеклоочиститель. Идеально для оптовых дистрибьюторов и рынка OEM-замены.",
      specs: [
        "Многофункциональная конструкция для заднего стекла",
        "Универсальная установка с несколькими адаптерами",
        "Премиальная резиновая кромка из натурального каучука",
        "Бесшумная работа без разводов",
        "Простая установка",
        "Сертифицировано ISO 9001",
        "Готово для OEM/ODM"
      ],
      features: [
        "Универсальная конструкция, совместимая с большинством автомобилей с задним стеклоочистителем",
        "Несколько адаптеров в комплекте для максимального охвата автомобилей",
        "Премиальная резиновая кромка для долговечной очистки",
        "Простая установка без специальных инструментов",
        "Конкурентные оптовые цены для крупных заказов",
        "Доступны варианты OEM/ODM кастомизации"
      ]
    },
    fr: {
      name: "BW-161 Balai d'Essuie-glace Arrière Multifonction Universel",
      desc: "Balai d'essuie-glace arrière multifonction universel en gros avec montage universel. Idéal pour les distributeurs en vrac et le marché de remplacement OEM.",
      specs: [
        "Conception multifonction pour pare-brise arrière",
        "Montage universel avec plusieurs adaptateurs",
        "Bord en caoutchouc naturel premium",
        "Fonctionnement silencieux et sans traces",
        "Installation facile",
        "Certifié ISO 9001",
        "Prêt pour OEM/ODM"
      ],
      features: [
        "Conception polyvalente compatible avec la plupart des véhicules à essuie-glace arrière",
        "Plusieurs adaptateurs inclus pour une couverture maximale des véhicules",
        "Bord en caoutchouc premium pour un essuyage durable",
        "Installation simple ne nécessitant pas d'outils spéciaux",
        "Prix de gros compétitifs pour les commandes en vrac",
        "Options de personnalisation OEM/ODM disponibles"
      ]
    },
    de: {
      name: "BW-161 Multifunktionales Universal-Heckwischerblatt",
      desc: "Multifunktionales Universal-Heckwischerblatt für den Großhandel. Ideal für Großdistributoren und den OEM-Ersatzmarkt.",
      specs: [
        "Multifunktionales Design für Heckscheibe",
        "Universelle Passform mit mehreren Adaptern",
        "Premium-Naturkautschuk-Wischkante",
        "Geräuschloses und streifenfreies Wischen",
        "Einfache Installation",
        "ISO 9001 zertifiziert",
        "OEM/ODM-bereit"
      ],
      features: [
        "Vielseitiges Design, kompatibel mit den meisten Fahrzeugen mit Heckscheibenwischer",
        "Mehrere Adapter im Lieferumfang für maximale Fahrzeugabdeckung",
        "Premium-Gummikante für langanhaltende Wischleistung",
        "Einfache Installation ohne Spezialwerkzeug",
        "Wettbewerbsfähige Großhandelspreise für Großbestellungen",
        "OEM/ODM-Anpassungsoptionen verfügbar"
      ]
    }
  },

  // ===== BW-001 Audi Q7 RHD =====
  "bw-001-audi-q7-rhd-wiper-arm": {
    es: {
      name: "BW-001 Brazo de Limpiaparabrisas Delantero RHD para AUDI Q7 2007-2016",
      desc: "Brazo de limpiaparabrisas delantero RHD (conducción a la derecha) de grado OEM diseñado específicamente para Audi Q7 2007-2016. Reemplazo de ajuste directo, acabado negro.",
      specs: [
        "Brazo de limpiaparabrisas delantero para conducción a la derecha (RHD)",
        "Ajuste directo para Audi Q7 2007-2016",
        "Construcción de acero de grado OEM",
        "Acabado negro resistente a la corrosión",
        "Incluye tuerca de montaje y cubierta",
        "Certificado ISO 9001 e IATF 16949",
        "MOQ 100 PCS"
      ],
      features: [
        "Diseñado específicamente para vehículos Audi Q7 con conducción a la derecha (Reino Unido, Japón, Australia)",
        "Construcción de acero de alta resistencia con recubrimiento en polvo negro",
        "Ajuste preciso del buje estriado para un funcionamiento sin bamboleo",
        "Incluye todo el hardware de montaje para una instalación completa",
        "Especificaciones de grado OEM para un ajuste y acabado perfectos",
        "Ideal para distribuidores de posventa europeos en mercados RHD"
      ]
    },
    ru: {
      name: "BW-001 Передний рычаг стеклоочистителя RHD для AUDI Q7 2007-2016",
      desc: "Передний рычаг стеклоочистителя RHD (правостороннее управление) класса OEM, специально разработанный для Audi Q7 2007-2016. Прямая замена, черное покрытие.",
      specs: [
        "Передний рычаг стеклоочистителя для правостороннего управления (RHD)",
        "Прямая установка для Audi Q7 2007-2016",
        "Стальная конструкция класса OEM",
        "Коррозионностойкое черное покрытие",
        "В комплекте монтажная гайка и крышка",
        "Сертифицировано ISO 9001 и IATF 16949",
        "Минимальный заказ 100 шт."
      ],
      features: [
        "Специально разработан для автомобилей Audi Q7 с правосторонним управлением (Великобритания, Япония, Австралия)",
        "Высокопрочная стальная конструкция с черным порошковым покрытием",
        "Точная посадка шлицевой втулки для работы без люфта",
        "Включает весь монтажный крепеж для полной установки",
        "Спецификации класса OEM для идеальной посадки и отделки",
        "Идеально для европейских дистрибьюторов послепродажного обслуживания на рынках RHD"
      ]
    },
    fr: {
      name: "BW-001 Bras d'Essuie-glace Avant RHD pour AUDI Q7 2007-2016",
      desc: "Bras d'essuie-glace avant RHD (conduite à droite) de qualité OEM spécialement conçu pour Audi Q7 2007-2016. Remplacement à montage direct, finition noire.",
      specs: [
        "Bras d'essuie-glace avant pour conduite à droite (RHD)",
        "Montage direct pour Audi Q7 2007-2016",
        "Construction en acier de qualité OEM",
        "Finition noire résistante à la corrosion",
        "Écrou de montage et capuchon inclus",
        "Certifié ISO 9001 et IATF 16949",
        "MOQ 100 PCS"
      ],
      features: [
        "Spécialement conçu pour les véhicules Audi Q7 à conduite à droite (Royaume-Uni, Japon, Australie)",
        "Construction en acier à haute résistance avec revêtement en poudre noir",
        "Ajustement précis de la douille cannelée pour un fonctionnement sans oscillation",
        "Toute la quincaillerie de montage incluse pour une installation complète",
        "Spécifications de qualité OEM pour un ajustement et une finition parfaits",
        "Idéal pour les distributeurs de pièces de rechange européens sur les marchés RHD"
      ]
    },
    de: {
      name: "BW-001 Vorderer Wischerarm RHD für AUDI Q7 2007-2016",
      desc: "Vorderer OEM-Wischerarm RHD (Rechtslenkung) speziell entwickelt für Audi Q7 2007-2016. Direkter Ersatz, schwarze Oberfläche.",
      specs: [
        "Vorderer Wischerarm für Rechtslenkung (RHD)",
        "Direkte Passform für Audi Q7 2007-2016",
        "OEM-Stahlkonstruktion",
        "Korrosionsbeständige schwarze Oberfläche",
        "Montagemutter und Abdeckung inklusive",
        "ISO 9001 und IATF 16949 zertifiziert",
        "MOQ 100 Stück"
      ],
      features: [
        "Speziell entwickelt für Audi Q7 Fahrzeuge mit Rechtslenkung (UK, Japan, Australien)",
        "Hochfeste Stahlkonstruktion mit schwarzer Pulverbeschichtung",
        "Präzise Passform der Keilnabenbuchse für wackelfreien Betrieb",
        "Alle Montageteile für eine vollständige Installation enthalten",
        "OEM-Spezifikationen für perfekte Passform und Verarbeitung",
        "Ideal für europäische Aftermarket-Distributoren in RHD-Märkten"
      ]
    }
  },

  // ===== BW-002 Audi Q7 LHD =====
  "bw-002-audi-q7-lhd-wiper-arm": {
    es: {
      name: "BW-002 Brazo de Limpiaparabrisas Delantero para AUDI Q7 (LHD) 2007-2016",
      desc: "Brazo de limpiaparabrisas delantero LHD (conducción a la izquierda) de grado OEM para Audi Q7 2007-2016. Reemplazo directo con acabado negro resistente a la corrosión, MOQ bajo.",
      specs: [
        "Brazo de limpiaparabrisas delantero para conducción a la izquierda (LHD)",
        "Ajuste directo para Audi Q7 2007-2016",
        "Construcción de acero de grado OEM",
        "Acabado negro resistente a la corrosión",
        "Incluye tuerca de montaje y cubierta",
        "Certificado ISO 9001 e IATF 16949",
        "MOQ 100 PCS"
      ],
      features: [
        "Diseñado para vehículos Audi Q7 con conducción a la izquierda (América del Norte, Europa continental, China)",
        "Construcción de acero de alta resistencia con recubrimiento en polvo negro",
        "Ajuste preciso del buje estriado que coincide con las especificaciones OEM",
        "Instalación completa con todo el hardware de montaje incluido",
        "Acabado negro duradero y resistente a la intemperie",
        "MOQ bajo de 100 PCS adecuado para distribuidores pequeños y medianos"
      ]
    },
    ru: {
      name: "BW-002 Передний рычаг стеклоочистителя для AUDI Q7 (LHD) 2007-2016",
      desc: "Передний рычаг стеклоочистителя LHD (левостороннее управление) класса OEM для Audi Q7 2007-2016. Прямая замена с коррозионностойким черным покрытием, низкий минимальный заказ.",
      specs: [
        "Передний рычаг стеклоочистителя для левостороннего управления (LHD)",
        "Прямая установка для Audi Q7 2007-2016",
        "Стальная конструкция класса OEM",
        "Коррозионностойкое черное покрытие",
        "В комплекте монтажная гайка и крышка",
        "Сертифицировано ISO 9001 и IATF 16949",
        "Минимальный заказ 100 шт."
      ],
      features: [
        "Разработан для автомобилей Audi Q7 с левосторонним управлением (Северная Америка, континентальная Европа, Китай)",
        "Высокопрочная стальная конструкция с черным порошковым покрытием",
        "Точная посадка шлицевой втулки, соответствующая спецификациям OEM",
        "Полная установка со всем монтажным крепежом в комплекте",
        "Прочная атмосферостойкая черная отделка",
        "Низкий минимальный заказ 100 шт., подходит для малых и средних дистрибьюторов"
      ]
    },
    fr: {
      name: "BW-002 Bras d'Essuie-glace Avant pour AUDI Q7 (LHD) 2007-2016",
      desc: "Bras d'essuie-glace avant LHD (conduite à gauche) de qualité OEM pour Audi Q7 2007-2016. Remplacement direct avec finition noire résistante à la corrosion, faible MOQ.",
      specs: [
        "Bras d'essuie-glace avant pour conduite à gauche (LHD)",
        "Montage direct pour Audi Q7 2007-2016",
        "Construction en acier de qualité OEM",
        "Finition noire résistante à la corrosion",
        "Écrou de montage et capuchon inclus",
        "Certifié ISO 9001 et IATF 16949",
        "MOQ 100 PCS"
      ],
      features: [
        "Conçu pour les véhicules Audi Q7 à conduite à gauche (Amérique du Nord, Europe continentale, Chine)",
        "Construction en acier à haute résistance avec revêtement en poudre noir",
        "Ajustement précis de la douille cannelée conforme aux spécifications OEM",
        "Installation complète avec toute la quincaillerie de montage incluse",
        "Finition noire durable et résistante aux intempéries",
        "Faible MOQ de 100 PCS adapté aux petits et moyens distributeurs"
      ]
    },
    de: {
      name: "BW-002 Vorderer Wischerarm für AUDI Q7 (LHD) 2007-2016",
      desc: "Vorderer OEM-Wischerarm LHD (Linkslenkung) für Audi Q7 2007-2016. Direkter Ersatz mit korrosionsbeständiger schwarzer Oberfläche, niedriger MOQ.",
      specs: [
        "Vorderer Wischerarm für Linkslenkung (LHD)",
        "Direkte Passform für Audi Q7 2007-2016",
        "OEM-Stahlkonstruktion",
        "Korrosionsbeständige schwarze Oberfläche",
        "Montagemutter und Abdeckung inklusive",
        "ISO 9001 und IATF 16949 zertifiziert",
        "MOQ 100 Stück"
      ],
      features: [
        "Entwickelt für Audi Q7 Fahrzeuge mit Linkslenkung (Nordamerika, Kontinentaleuropa, China)",
        "Hochfeste Stahlkonstruktion mit schwarzer Pulverbeschichtung",
        "Präzise Passform der Keilnabenbuchse gemäß OEM-Spezifikationen",
        "Komplette Installation mit allem Montagematerial im Lieferumfang",
        "Langlebige, witterungsbeständige schwarze Oberfläche",
        "Niedriger MOQ von 100 Stück, geeignet für kleine und mittlere Distributoren"
      ]
    }
  },

  // ===== BW3002 MINI Cooper Rear Wiper Arm =====
  "bw3002-mini-cooper-rear-wiper-arm": {
    es: {
      name: "BW3002 Brazo de Limpiaparabrisas Trasero para MINI COOPER R50 R53 2001-2004",
      desc: "Brazo de limpiaparabrisas trasero con especificación OEM para MINI COOPER R50 R53 (2001-2004). Reemplazo directo de ingeniería de precisión con construcción duradera.",
      specs: [
        "Brazo de limpiaparabrisas trasero para MINI COOPER R50 R53",
        "Años del modelo: 2001-2004",
        "Construcción de acero duradero",
        "Acabado negro resistente a la corrosión",
        "Incluye tuerca de montaje y cubierta",
        "Certificado ISO 9001 e IATF 16949",
        "MOQ 100 PCS"
      ],
      features: [
        "Diseño de ajuste exacto con especificación OE para MINI COOPER R50 R53 (2001-2004)",
        "Ingeniería de precisión para mantener el perfil compacto del limpiaparabrisas trasero de MINI",
        "Construcción duradera y resistente a la intemperie para climas europeos",
        "Reemplazo directo atornillado - sin modificaciones ni adaptadores necesarios",
        "Disponible al por mayor con MOQ de 100 PCS para distribuidores establecidos",
        "Producción certificada ISO 9001 e IATF 16949 para calidad automotriz consistente"
      ]
    },
    ru: {
      name: "BW3002 Задний рычаг стеклоочистителя для MINI COOPER R50 R53 2001-2004",
      desc: "Задний рычаг стеклоочистителя OEM-спецификации для MINI COOPER R50 R53 (2001-2004). Прецизионная прямая замена с прочной конструкцией.",
      specs: [
        "Задний рычаг стеклоочистителя для MINI COOPER R50 R53",
        "Модельные годы: 2001-2004",
        "Прочная стальная конструкция",
        "Коррозионностойкое черное покрытие",
        "В комплекте монтажная гайка и крышка",
        "Сертифицировано ISO 9001 и IATF 16949",
        "Минимальный заказ 100 шт."
      ],
      features: [
        "Конструкция точной посадки по спецификации OE для MINI COOPER R50 R53 (2001-2004)",
        "Прецизионное проектирование для сохранения культового компактного профиля заднего стеклоочистителя MINI",
        "Прочная атмосферостойкая конструкция для европейского климата",
        "Прямая замена на болтах - без модификаций и адаптеров",
        "Доступна оптовая продажа с минимальным заказом 100 шт. для постоянных дистрибьюторов",
        "Сертифицированное производство ISO 9001 и IATF 16949 для стабильного автомобильного качества"
      ]
    },
    fr: {
      name: "BW3002 Bras d'Essuie-glace Arrière pour MINI COOPER R50 R53 2001-2004",
      desc: "Bras d'essuie-glace arrière de spécification OEM pour MINI COOPER R50 R53 (2001-2004). Remplacement direct de précision avec construction durable.",
      specs: [
        "Bras d'essuie-glace arrière pour MINI COOPER R50 R53",
        "Années modèles : 2001-2004",
        "Construction en acier durable",
        "Finition noire résistante à la corrosion",
        "Écrou de montage et capuchon inclus",
        "Certifié ISO 9001 et IATF 16949",
        "MOQ 100 PCS"
      ],
      features: [
        "Conception à ajustement exact selon les spécifications OE pour MINI COOPER R50 R53 (2001-2004)",
        "Ingénierie de précision pour maintenir le profil compact emblématique de l'essuie-glace arrière MINI",
        "Construction durable et résistante aux intempéries pour les climats européens",
        "Remplacement direct boulonné - aucune modification ni adaptateur requis",
        "Disponible en gros avec MOQ de 100 PCS pour les distributeurs établis",
        "Production certifiée ISO 9001 et IATF 16949 pour une qualité automobile constante"
      ]
    },
    de: {
      name: "BW3002 Heckwischerarm für MINI COOPER R50 R53 2001-2004",
      desc: "Heckwischerarm in OEM-Spezifikation für MINI COOPER R50 R53 (2001-2004). Präzisions-Direktersatz mit langlebiger Konstruktion.",
      specs: [
        "Heckwischerarm für MINI COOPER R50 R53",
        "Modelljahre: 2001-2004",
        "Langlebige Stahlkonstruktion",
        "Korrosionsbeständige schwarze Oberfläche",
        "Montagemutter und Abdeckung inklusive",
        "ISO 9001 und IATF 16949 zertifiziert",
        "MOQ 100 Stück"
      ],
      features: [
        "Exakte OE-Spezifikations-Passform für MINI COOPER R50 R53 (2001-2004)",
        "Präzisionsentwicklung zur Beibehaltung des ikonischen kompakten MINI-Heckwischerprofils",
        "Langlebige, witterungsbeständige Konstruktion für europäisches Klima",
        "Direkter verschraubter Ersatz - keine Modifikationen oder Adapter erforderlich",
        "Großhandel verfügbar mit MOQ von 100 Stück für etablierte Distributoren",
        "ISO 9001 und IATF 16949 zertifizierte Produktion für gleichbleibende Automobilqualität"
      ]
    }
  },

  // ===== BW-405 Classic Frame Wiper =====
  "bw-405-classic-frame-wiper-blade": {
    es: {
      name: "LELION Juego de Escobillas Clásicas con Marco BW-405 (12-28 pulgadas)",
      desc: "Juego de escobillas clásicas con marco de calidad OEM. Marco de acero galvanizado, goma natural premium, ajuste universal, funcionamiento silencioso. Disponible en tamaños de 12 a 28 pulgadas.",
      specs: [
        "Diseño clásico de escobilla con marco",
        "Marco de acero galvanizado con recubrimiento antioxidación",
        "Borde de goma natural premium",
        "Conector U-Hook universal - se ajusta al 98% de los vehículos",
        "Disponible en tamaños de 12\" a 28\"",
        "Rendimiento de limpieza silencioso y suave",
        "Garantía de 6 meses / Certificado ISO 9001 e IATF 16949"
      ],
      features: [
        "El marco de acero galvanizado proporciona una resistencia superior a la corrosión y durabilidad a largo plazo",
        "El borde de goma natural premium garantiza una limpieza sin rayas y silenciosa en cualquier clima",
        "El conector U-Hook universal se ajusta al 98% de los vehículos sin adaptadores adicionales",
        "El diseño de marco tradicional distribuye la presión uniformemente en toda la longitud de la escobilla",
        "Disponible en tamaños de 12 a 28 pulgadas para cubrir prácticamente todos los turismos",
        "Fácil instalación DIY con instrucciones paso a paso incluidas - no se necesitan herramientas",
        "Respaldado por garantía de 6 meses y fabricado según las normas ISO 9001 e IATF 16949"
      ]
    },
    ru: {
      name: "LELION Классический каркасный стеклоочиститель BW-405 (12-28 дюймов)",
      desc: "Комплект классических каркасных стеклоочистителей OEM-качества. Оцинкованный стальной каркас, премиальный натуральный каучук, универсальная установка, бесшумная работа. Доступны размеры от 12 до 28 дюймов.",
      specs: [
        "Классическая каркасная конструкция стеклоочистителя",
        "Оцинкованный стальной каркас с антиокислительным покрытием",
        "Премиальная резиновая кромка из натурального каучука",
        "Универсальный разъем U-Hook - подходит для 98% автомобилей",
        "Доступны размеры от 12\" до 28\"",
        "Бесшумная и плавная очистка",
        "Гарантия 6 месяцев / Сертифицировано ISO 9001 и IATF 16949"
      ],
      features: [
        "Оцинкованный стальной каркас обеспечивает превосходную коррозионную стойкость и длительную долговечность",
        "Премиальная резиновая кромка из натурального каучука обеспечивает очистку без разводов и бесшумную работу в любую погоду",
        "Универсальный разъем U-Hook подходит для 98% автомобилей без дополнительных адаптеров",
        "Традиционная каркасная конструкция равномерно распределяет давление по всей длине щетки",
        "Доступны размеры от 12 до 28 дюймов для охвата практически всех легковых автомобилей",
        "Простая самостоятельная установка с пошаговыми инструкциями - инструменты не требуются",
        "Гарантия 6 месяцев, изготовлено по стандартам ISO 9001 и IATF 16949"
      ]
    },
    fr: {
      name: "LELION Balai d'Essuie-glace Classique à Armature BW-405 (12-28 pouces)",
      desc: "Jeu de balais d'essuie-glace classiques à armature de qualité OEM. Armature en acier galvanisé, caoutchouc naturel premium, montage universel, fonctionnement silencieux. Disponible en tailles de 12 à 28 pouces.",
      specs: [
        "Conception classique de balai d'essuie-glace à armature",
        "Armature en acier galvanisé avec revêtement anti-oxydation",
        "Bord d'essuyage en caoutchouc naturel premium",
        "Connecteur U-Hook universel - compatible avec 98% des véhicules",
        "Disponible en tailles de 12\" à 28\"",
        "Performance d'essuyage silencieuse et fluide",
        "Garantie 6 mois / Certifié ISO 9001 et IATF 16949"
      ],
      features: [
        "L'armature en acier galvanisé offre une résistance supérieure à la corrosion et une durabilité à long terme",
        "Le bord en caoutchouc naturel premium assure un essuyage sans traces et silencieux par tous les temps",
        "Le connecteur U-Hook universel s'adapte à 98% des véhicules sans adaptateurs supplémentaires",
        "La conception traditionnelle à armature répartit la pression uniformément sur toute la longueur du balai",
        "Disponible en tailles de 12 à 28 pouces pour couvrir pratiquement tous les véhicules particuliers",
        "Installation DIY facile avec instructions étape par étape incluses - aucun outil requis",
        "Garantie 6 mois et fabriqué selon les normes ISO 9001 et IATF 16949"
      ]
    },
    de: {
      name: "LELION Klassisches Rahmen-Wischerblatt-Set BW-405 (12-28 Zoll)",
      desc: "OEM-Qualität klassisches Rahmen-Wischerblatt-Set. Verzinkter Stahlrahmen, Premium-Naturkautschuk, Universalpassform, geräuschloser Betrieb. Erhältlich in Größen von 12 bis 28 Zoll.",
      specs: [
        "Klassisches Rahmen-Wischerblatt-Design",
        "Verzinkter Stahlrahmen mit Antioxidationsbeschichtung",
        "Premium-Naturkautschuk-Wischkante",
        "Universeller U-Hook-Anschluss - passt für 98% der Fahrzeuge",
        "Erhältlich in Größen von 12\" bis 28\"",
        "Geräuschlose und sanfte Wischleistung",
        "6 Monate Garantie / ISO 9001 und IATF 16949 zertifiziert"
      ],
      features: [
        "Verzinkter Stahlrahmen bietet überlegene Korrosionsbeständigkeit und langfristige Haltbarkeit",
        "Premium-Naturkautschukkante sorgt für streifenfreies und geräuschloses Wischen bei jedem Wetter",
        "Universeller U-Hook-Anschluss passt für 98% der Fahrzeuge ohne zusätzliche Adapter",
        "Traditionelles Rahmendesign verteilt den Druck gleichmäßig über die gesamte Blattlänge",
        "Erhältlich in Größen von 12 bis 28 Zoll für praktisch alle Pkw",
        "Einfache DIY-Installation mit Schritt-für-Schritt-Anleitung - kein Werkzeug erforderlich",
        "6 Monate Garantie, hergestellt nach ISO 9001 und IATF 16949 Standards"
      ]
    }
  },
};

export default productTranslations;
