// Product content translations for es, ru, fr, de
// English content is in products.ts
// longDesc and technicalDetails fall back to English
import { migratedProductTranslations } from "./migratedProductTranslations";

export interface ProductTranslation {
  name: string;
  desc: string;
  longDesc?: string;
  technicalDetails?: Record<string, string>;
  specs: string[];
  features: string[];
}

export function getProductTranslation(
  productId: string,
  lang: string
): ProductTranslation | null {
  const t = productTranslations[productId] ?? migratedProductTranslations[productId];
  if (!t) return null;
  return t[lang] || null;
}

export const productTranslations: Record<string, Record<string, ProductTranslation>> = {

  // ===== BW-201 Specific Fit Tesla Model X =====
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
        "Certificado ISO 9001"
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
        "Сертифицировано ISO 9001"
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
        "Certifié ISO 9001"
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
        "ISO 9001 zertifiziert"
      ],
      features: [
        "Das 22-Adapter-System deckt über 98% der Fahrzeuge weltweit ab",
        "Aerodynamisches Balkendesign reduziert Windgeräusche bei Autobahngeschwindigkeit",
        "Teflonbeschichtete Gummikante sorgt für reibungslosen und leisen Betrieb",
        "Memory-Stahlrahmen hält konstanten Druck über die gesamte Windschutzscheibenkrümmung",
        "Einzelhandelsfertige Verpackung mit Optionen für individuelles Branding",
        "Perfekt für Distributoren, die SKU-Inventar minimieren und Abdeckung maximieren möchten"
      ]
    },
    zh: {
      name: "BW-861 多功能通用雨刮片（含22个适配器）",
      desc: "高级多适配器雨刮片系统，配备22个适配器，可适配全球98%的车辆 - 理想的分销商选择。",
      specs: [
        "多适配器集线系统，含22个适配器（适配98%以上车辆）",
        "集成扰流板的空气动力学梁式设计",
        "优质天然橡胶刮拭边缘，特氟龙涂层",
        "柔性记忆弹簧钢框架",
        "无噪音无痕刮拭",
        "零售级包装，可定制品牌",
        "ISO 9001认证"
      ],
      features: [
        "22个适配器系统覆盖全球98%以上车辆",
        "空气动力学梁式设计降低高速公路风噪",
        "特氟龙涂层橡胶边缘确保顺滑安静的运行",
        "记忆钢框架在整个挡风玻璃曲面上保持恒定压力",
        "零售级包装，可选定制品牌",
        "完美适合希望减少SKU库存同时最大化覆盖范围的分销商"
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
    },
    zh: {
      name: "BW-802 通用无骨雨刮片 - U型钩 (12\"-28\")",
      desc: "高性能通用无骨雨刮片，预装U型钩适配器。中国工厂直销价格。",
      specs: [
        "无骨梁式设计（平刮片）",
        "预装U型钩适配器",
        "尺寸范围12英寸至28英寸",
        "优质天然橡胶刮拭边缘",
        "集成空气动力学扰流板",
        "无噪音无痕刮拭",
        "ISO 9001认证 / OEM就绪"
      ],
      features: [
        "无骨设计防止冬季积雪结冰",
        "集成空气动力学扰流板确保高速恒定刮拭压力",
        "预装U型钩适配器，无需工具即可瞬间安装",
        "优质天然橡胶边缘提供高达100万次刮拭循环",
        "12英寸至28英寸宽尺寸范围覆盖大多数轿车和SUV",
        "有竞争力的工厂价格，新分销商低起订量"
      ]
    }
  },

  // ===== BW-203 Mercedes S-Class =====
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
    },
    zh: {
      name: "BW-027 丰田卡罗拉1993-1996前右雨刮臂（右舵）",
      desc: "丰田卡罗拉1993-1996年前右雨刮臂OEM替换件。耐用结构，直接安装，轻松便捷。",
      specs: [
        "前右雨刮臂（右舵RHD）",
        "直接适配丰田卡罗拉1993-1996",
        "耐用钢结构",
        "耐腐蚀黑色涂层",
        "含安装螺母和盖子",
        "ISO 9001认证",
        "低起订量 - 100支"
      ],
      features: [
        "直接替换丰田原装雨刮臂",
        "高强度钢结构，持久耐用",
        "耐候黑色粉末涂层",
        "包含完整安装配件",
        "精密花键衬套安装，无晃动运行",
        "理想适用于右舵地区的售后和车队市场"
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
    },
    zh: {
      name: "BW-808 三段式混合雨刮片（12-28英寸）",
      desc: "高级三段式混合雨刮片，结合空气动力学梁式设计与耐用金属框架结构。适配95%配备U型钩臂的车辆。",
      specs: [
        "三段式混合设计",
        "兼容U型钩臂 - 覆盖95%车辆",
        "尺寸范围12英寸至28英寸",
        "优质天然橡胶刮拭边缘",
        "集成空气动力学扰流板",
        "耐用金属框架，柔性铰链",
        "ISO 9001认证"
      ],
      features: [
        "独特三段式混合设计，卓越适应挡风玻璃曲面",
        "梁式技术与传统框架结合，均衡压力分布",
        "柔性铰链使雨刮片精确贴合玻璃曲面",
        "空气动力学扰流板降低高速公路风阻升力",
        "广泛兼容各品牌车辆的U型钩臂",
        "理想适用于寻找中端性能产品的分销商"
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
    },
    zh: {
      name: "BW-160 多功能后雨刮片 - 通用安装（98%覆盖率）",
      desc: "高级多功能后雨刮片，配备通用适配器系统，覆盖98%车辆。理想适用于批发分销商。",
      specs: [
        "通用多连接器适配器系统",
        "覆盖全球98%车辆",
        "专为后挡风玻璃设计",
        "优质天然橡胶刮拭边缘",
        "无噪音无痕刮拭",
        "简单即插即用安装",
        "ISO 9001认证"
      ],
      features: [
        "通用适配器系统覆盖几乎所有配备后雨刮的车辆",
        "紧凑设计，优化后挡风玻璃曲面适配",
        "优质橡胶边缘，顺滑静音刮拭",
        "无需特殊工具，快速安装",
        "零售级包装，可选定制品牌",
        "完美适合希望整合后雨刮库存的分销商"
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
    },
    zh: {
      name: "BW-161 多功能通用后挡风雨刮片",
      desc: "批发多功能通用后挡风雨刮片，通用安装。理想适用于批量分销商和OEM替换市场。",
      specs: [
        "后挡风玻璃多功能设计",
        "通用安装，多适配器",
        "优质天然橡胶刮拭边缘",
        "无噪音无痕刮拭",
        "简单安装",
        "ISO 9001认证",
        "OEM/ODM就绪"
      ],
      features: [
        "多功能设计，兼容大多数配备后雨刮的车辆",
        "含多个适配器，最大化车辆覆盖",
        "优质橡胶边缘，持久刮拭",
        "简单安装，无需特殊工具",
        "有竞争力的大批量批发价格",
        "OEM/ODM定制选项可用"
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
        "Certificado ISO 9001",
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
        "Сертифицировано ISO 9001",
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
        "Certifié ISO 9001",
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
        "ISO 9001 zertifiziert",
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
    },
    zh: {
      name: "BW-001 奥迪Q7前挡右舵雨刮臂（2007-2016）",
      desc: "OEM级前挡右舵（RHD）雨刮臂，专为奥迪Q7 2007-2016设计。直接替换安装，黑色涂层。",
      specs: [
        "前挡右舵雨刮臂（RHD）",
        "直接适配奥迪Q7 2007-2016",
        "OEM级钢结构",
        "耐腐蚀黑色涂层",
        "含安装螺母和盖子",
        "ISO 9001认证",
        "起订量100支"
      ],
      features: [
        "专为右舵奥迪Q7车辆设计（英国、日本、澳大利亚）",
        "高强度钢结构，黑色粉末涂层",
        "精密花键衬套安装，无晃动运行",
        "包含完整安装配件",
        "OEM级规格，完美安装和表面处理",
        "理想适用于右舵市场的欧洲售后分销商"
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
        "Certificado ISO 9001",
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
        "Сертифицировано ISO 9001",
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
        "Certifié ISO 9001",
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
        "ISO 9001 zertifiziert",
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
    },
    zh: {
      name: "BW-002 奥迪Q7前挡左舵雨刮臂（2007-2016）",
      desc: "OEM级前挡左舵（LHD）雨刮臂，适配奥迪Q7 2007-2016。直接替换，耐腐蚀黑色涂层，低起订量。",
      specs: [
        "前挡左舵雨刮臂（LHD）",
        "直接适配奥迪Q7 2007-2016",
        "OEM级钢结构",
        "耐腐蚀黑色涂层",
        "含安装螺母和盖子",
        "ISO 9001认证",
        "起订量100支"
      ],
      features: [
        "专为左舵奥迪Q7车辆设计（北美、欧洲大陆、中国）",
        "高强度钢结构，黑色粉末涂层",
        "精密花键衬套安装，符合OEM规格",
        "包含完整安装配件",
        "耐候耐用黑色涂层",
        "低起订量100支，适合中小型分销商"
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
        "Certificado ISO 9001",
        "MOQ 100 PCS"
      ],
      features: [
        "Diseño de ajuste exacto con especificación OE para MINI COOPER R50 R53 (2001-2004)",
        "Ingeniería de precisión para mantener el perfil compacto del limpiaparabrisas trasero de MINI",
        "Construcción duradera y resistente a la intemperie para climas europeos",
        "Reemplazo directo atornillado - sin modificaciones ni adaptadores necesarios",
        "Disponible al por mayor con MOQ de 100 PCS para distribuidores establecidos",
        "Producción certificada ISO 9001 para calidad automotriz consistente"
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
        "Сертифицировано ISO 9001",
        "Минимальный заказ 100 шт."
      ],
      features: [
        "Конструкция точной посадки по спецификации OE для MINI COOPER R50 R53 (2001-2004)",
        "Прецизионное проектирование для сохранения культового компактного профиля заднего стеклоочистителя MINI",
        "Прочная атмосферостойкая конструкция для европейского климата",
        "Прямая замена на болтах - без модификаций и адаптеров",
        "Доступна оптовая продажа с минимальным заказом 100 шт. для постоянных дистрибьюторов",
        "Сертифицированное производство ISO 9001 для стабильного автомобильного качества"
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
        "Certifié ISO 9001",
        "MOQ 100 PCS"
      ],
      features: [
        "Conception à ajustement exact selon les spécifications OE pour MINI COOPER R50 R53 (2001-2004)",
        "Ingénierie de précision pour maintenir le profil compact emblématique de l'essuie-glace arrière MINI",
        "Construction durable et résistante aux intempéries pour les climats européens",
        "Remplacement direct boulonné - aucune modification ni adaptateur requis",
        "Disponible en gros avec MOQ de 100 PCS pour les distributeurs établis",
        "Production certifiée ISO 9001 pour une qualité automobile constante"
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
        "ISO 9001 zertifiziert",
        "MOQ 100 Stück"
      ],
      features: [
        "Exakte OE-Spezifikations-Passform für MINI COOPER R50 R53 (2001-2004)",
        "Präzisionsentwicklung zur Beibehaltung des ikonischen kompakten MINI-Heckwischerprofils",
        "Langlebige, witterungsbeständige Konstruktion für europäisches Klima",
        "Direkter verschraubter Ersatz - keine Modifikationen oder Adapter erforderlich",
        "Großhandel verfügbar mit MOQ von 100 Stück für etablierte Distributoren",
        "ISO 9001 zertifizierte Produktion für gleichbleibende Automobilqualität"
      ]
    },
    zh: {
      name: "BW3002 MINI COOPER R50 R53后雨刮臂（2001-2004）",
      desc: "OEM规格后挡风雨刮臂，适配MINI COOPER R50 R53（2001-2004）。精密工程设计，直接替换，耐用结构。",
      specs: [
        "MINI COOPER R50 R53后雨刮臂",
        "车型年份：2001-2004",
        "耐用钢结构",
        "耐腐蚀黑色涂层",
        "含安装螺母和盖子",
        "ISO 9001认证",
        "起订量100支"
      ],
      features: [
        "精确OE规格安装，适配MINI COOPER R50 R53（2001-2004）",
        "精密工程设计，保持MINI经典紧凑后雨刮轮廓",
        "耐候耐用结构，适合欧洲气候",
        "直接螺栓替换 - 无需改装或适配器",
        "批发供应，成熟分销商起订量100支",
        "ISO 9001认证生产，确保稳定汽车级品质"
      ]
    }
  },

  // ===== BW-405 Classic Frame Wiper =====
  
};

export default productTranslations;
