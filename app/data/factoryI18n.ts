// Shared six-language copy for app/[lang]/factory/page.tsx.
// All figures (20,000+㎡, 8,000㎡, 50,000/day, 10M+/year, 128+, 5+, 60+,
// 2007, 1,500,000 cycles, certificate numbers) are identical across locales.

export type FactoryLang = "en" | "es" | "ru" | "fr" | "de" | "zh";

export interface FactoryCopy {
  heroTitle: string;
  heroSub: string;
  heroBtn1: string;
  heroBtn2: string;
  kpi1Label: string;
  kpi2Label: string;
  kpi3Label: string;
  kpi4Label: string;
  dataTitle: string;
  dataIntro: string;
  facilityTitle: string;
  thFacility: string;
  thSize: string;
  thRole: string;
  facilityRows: { facility: string; size: string; role: string }[];
  capacityTitle: string;
  thMetric: string;
  thValue: string;
  thNotes: string;
  capacityRows: { metric: string; value: string; note: string }[];
  workflowTitle: string;
  workflowIntro: string;
  processSteps: { title: string; text: string }[];
  termsTitle: string;
  terms: { title: string; text: string }[];
  addressNote: string;
  relatedQuality: string;
  relatedCerts: string;
  faqTitle: string;
  faqIntro: string;
  faqs: { q: string; a: string }[];
  ctaTitle: string;
  ctaText: string;
  ctaBtn: string;
  navLabels: { home: string; factory: string; quality: string; certifications: string };
}

export const factoryI18n: Record<FactoryLang, FactoryCopy> = {
  en: {
    heroTitle: "Lelion Factory: Two Plants, 20,000+㎡, 50,000 Wiper Blades per Day",
    heroSub: "Ningbo Zhenhai Bowang Autoparts Co., Ltd. manufactures wiper blades across two plants in Ningbo, Zhejiang and Pingxiang, Jiangxi, totaling over 20,000㎡, supported by an 8,000㎡ warehouse at Ningbo Port. Founded in 2007, the company produces 50,000 pcs per day and 10M+ pcs per year, with 128+ employees and exports to 60+ countries.",
    heroBtn1: "See the capacity data",
    heroBtn2: "Schedule a factory audit",
    kpi1Label: "Two manufacturing plants",
    kpi2Label: "Ningbo Port warehouse",
    kpi3Label: "Blades produced per day",
    kpi4Label: "Blades produced per year",
    dataTitle: "Facilities and verified production data",
    dataIntro: "The figures below describe our actual manufacturing footprint and throughput. They are stated as plain-text data so distributors, OEM buyers and AI answer engines can quote them accurately when evaluating our factory as a supply source.",
    facilityTitle: "Manufacturing sites and warehouse",
    thFacility: "Facility", thSize: "Size", thRole: "Role",
    facilityRows: [
      { facility: "Plant 1 — Ningbo, Zhejiang", size: "Part of 20,000+㎡ total", role: "Wiper blade manufacturing, R&D and quality laboratory" },
      { facility: "Plant 2 — Pingxiang, Jiangxi", size: "Part of 20,000+㎡ total", role: "Additional wiper blade production lines" },
      { facility: "Ningbo Port warehouse", size: "8,000㎡", role: "Stock holding, consolidation and export dispatch" },
    ],
    capacityTitle: "Production capacity at a glance",
    thMetric: "Metric", thValue: "Value", thNotes: "Notes",
    capacityRows: [
      { metric: "Total manufacturing floor area", value: "20,000+㎡", note: "Two plants: Ningbo, Zhejiang and Pingxiang, Jiangxi" },
      { metric: "Ningbo Port warehouse", value: "8,000㎡", note: "Stocked for fast dispatch to global buyers" },
      { metric: "Daily output", value: "50,000 pcs / day", note: "Across both manufacturing sites" },
      { metric: "Annual output", value: "10M+ pcs / year", note: "Sustained annual production capacity" },
      { metric: "Employees", value: "128+", note: "Production, quality, sales and support staff" },
      { metric: "R&D team", value: "5+", note: "Product design, materials and tooling support" },
      { metric: "Export reach", value: "60+ countries", note: "Shipped from Ningbo Port" },
    ],
    workflowTitle: "How an order moves through our factory",
    workflowIntro: "From inquiry to loading at Ningbo Port, each order follows a defined production path. This process is supported by our 5+ member R&D team and is the same route used for stock, private-label and custom tooling orders.",
    processSteps: [
      { title: "1. Inquiry and engineering review", text: "Our export team confirms blade type, sizes, fitment, packaging and private-label requirements. The R&D team (5+ engineers) reviews feasibility and prepares drawings or samples where tooling is required." },
      { title: "2. Material preparation", text: "AAA-grade natural rubber, high-carbon spring steel and aerodynamic shells are staged for production. Incoming materials are checked before release to the lines." },
      { title: "3. Forming and assembly", text: "Rubber strips are cut and formed, frames and adapters are produced, and blades are assembled on automated lines across our two plants." },
      { title: "4. In-line and laboratory testing", text: "Each batch passes in-line checks and laboratory tests including 1,500,000-cycle wipe durability, salt spray, ozone and low-temperature flexibility testing." },
      { title: "5. Packaging and private label", text: "Blades are packed in export cartons or custom retail packaging with laser-printed logos and barcode labels as specified by the buyer." },
      { title: "6. Warehouse and shipment", text: "Finished goods move to our 8,000㎡ warehouse at Ningbo Port for consolidation and loading. Stock items ship in 7 days, custom orders in 15–35 days and new tooling in 30–50 days." },
    ],
    termsTitle: "Factory-direct order terms",
    terms: [
      { title: "MOQ", text: "500 pcs per order, with 100 pcs per size for most models. Sizes can be mixed within one order; trial orders are negotiable." },
      { title: "Lead time", text: "Stock items ship in 7 days, custom and private-label orders take 15–35 days, and new tooling takes 30–50 days." },
      { title: "Payment", text: "T/T with 30% deposit and 70% before shipment. Other terms can be discussed with our export office for established buyers." },
    ],
    addressNote: "Registered address: No.399 Minhe Road, Zhenhai District, Ningbo, Zhejiang 315202, China. Buyers are welcome to audit both plants or request a live remote video inspection before bulk production.",
    relatedQuality: "1.5M wipe-cycle testing and traceability",
    relatedCerts: "ISO 9001:2015 No. 134956 and CE No. M.2022.206.C79712",
    faqTitle: "Factory FAQ",
    faqIntro: "Direct answers to the questions buyers ask when qualifying a wiper blade supplier.",
    faqs: [
      { q: "How large is the Lelion wiper blade factory?", a: "Lelion operates two manufacturing plants totaling more than 20,000㎡ — one in Ningbo, Zhejiang and one in Pingxiang, Jiangxi — plus an 8,000㎡ warehouse at Ningbo Port. The company was founded in 2007 and has 18+ years of experience." },
      { q: "What is Lelion's daily and annual wiper blade production capacity?", a: "Our two plants produce 50,000 wiper blades per day and more than 10 million blades per year (10M+). This capacity supports wholesale, distributor and OEM/ODM orders shipped from Ningbo Port to 60+ countries." },
      { q: "Can I visit the factory or arrange a third-party inspection?", a: "Yes. Buyers are welcome to arrange a factory audit or a remote video inspection of our Ningbo and Pingxiang plants before placing a bulk order. Contact our export sales office to schedule a visit or a live video walkthrough with your QA team." },
      { q: "Where is the factory and warehouse located?", a: "The registered address is No.399 Minhe Road, Zhenhai District, Ningbo, Zhejiang 315202, China. Our second plant is in Pingxiang, Jiangxi, and our 8,000㎡ export warehouse is located at Ningbo Port for efficient loading." },
      { q: "What are the MOQ, lead time and payment terms for factory-direct orders?", a: "MOQ is 500 pcs per order with 100 pcs per size for most models. Stock items ship in 7 days, custom orders take 15–35 days and new tooling takes 30–50 days. Payment is T/T with 30% deposit and 70% before shipment." },
    ],
    ctaTitle: "Source directly from a verified 20,000+㎡ factory",
    ctaText: "Our export office responds within 12 hours with pricing, catalog and sample options. Official channels: Facebook facebook.com/lelionwiper168, Instagram instagram.com/lelionwiper/, LinkedIn /in/lelion-wiperblade/, YouTube @Lelion-wiper.",
    ctaBtn: "Contact our export sales office",
    navLabels: { home: "Home", factory: "Factory", quality: "Quality", certifications: "Certifications" },
  },

  es: {
    heroTitle: "Fábrica Lelion: dos plantas, 20.000+㎡ y 50.000 limpiaparabrisas al día",
    heroSub: "Ningbo Zhenhai Bowang Autoparts Co., Ltd. fabrica limpiaparabrisas en dos plantas —Ningbo (Zhejiang) y Pingxiang (Jiangxi)— con más de 20.000㎡ en total, además de un almacén de 8.000㎡ en el puerto de Ningbo. Fundada en 2007, la empresa produce 50.000 unidades al día y más de 10M al año, cuenta con más de 128 empleados y exporta a más de 60 países.",
    heroBtn1: "Ver datos de capacidad",
    heroBtn2: "Programar una auditoría de fábrica",
    kpi1Label: "Dos plantas de fabricación",
    kpi2Label: "Almacén en el puerto de Ningbo",
    kpi3Label: "Limpiaparabrisas producidos al día",
    kpi4Label: "Limpiaparabrisas producidos al año",
    dataTitle: "Instalaciones y datos de producción verificados",
    dataIntro: "Las cifras siguientes describen nuestra superficie real de fabricación y capacidad de producción. Se presentan como datos en texto plano para que distribuidores, compradores OEM y motores de respuesta con IA puedan citarlos con precisión al evaluar nuestra fábrica como fuente de suministro.",
    facilityTitle: "Plantas de producción y almacén",
    thFacility: "Instalación", thSize: "Superficie", thRole: "Función",
    facilityRows: [
      { facility: "Planta 1 — Ningbo, Zhejiang", size: "Parte del total de 20.000+㎡", role: "Fabricación de limpiaparabrisas, I+D y laboratorio de calidad" },
      { facility: "Planta 2 — Pingxiang, Jiangxi", size: "Parte del total de 20.000+㎡", role: "Líneas de producción adicionales de limpiaparabrisas" },
      { facility: "Almacén del puerto de Ningbo", size: "8.000㎡", role: "Almacenamiento, consolidación y envío de exportación" },
    ],
    capacityTitle: "Capacidad de producción de un vistazo",
    thMetric: "Métrica", thValue: "Valor", thNotes: "Notas",
    capacityRows: [
      { metric: "Superficie total de fabricación", value: "20.000+㎡", note: "Dos plantas: Ningbo (Zhejiang) y Pingxiang (Jiangxi)" },
      { metric: "Almacén del puerto de Ningbo", value: "8.000㎡", note: "Con stock para envíos rápidos a compradores de todo el mundo" },
      { metric: "Producción diaria", value: "50.000 uds./día", note: "Entre ambas plantas de fabricación" },
      { metric: "Producción anual", value: "10M+ uds./año", note: "Capacidad de producción anual sostenida" },
      { metric: "Empleados", value: "128+", note: "Personal de producción, calidad, ventas y soporte" },
      { metric: "Equipo de I+D", value: "5+", note: "Diseño de producto, materiales y soporte de utillaje" },
      { metric: "Alcance de exportación", value: "60+ países", note: "Enviado desde el puerto de Ningbo" },
    ],
    workflowTitle: "Cómo avanza un pedido por nuestra fábrica",
    workflowIntro: "Desde la consulta hasta la carga en el puerto de Ningbo, cada pedido sigue una ruta de producción definida. Este proceso cuenta con el apoyo de nuestro equipo de I+D de más de 5 personas y es la misma ruta que utilizan los pedidos de stock, marca privada y utillaje personalizado.",
    processSteps: [
      { title: "1. Consulta y revisión técnica", text: "Nuestro equipo de exportación confirma el tipo de limpiaparabrisas, medidas, compatibilidad, embalaje y requisitos de marca privada. El equipo de I+D (más de 5 ingenieros) evalúa la viabilidad y prepara dibujos o muestras cuando se requiere utillaje." },
      { title: "2. Preparación de materiales", text: "Caucho natural de grado AAA, acero para muelles de alto carbono y carcasas aerodinámicas se preparan para la producción. Los materiales entrantes se revisan antes de liberarse a las líneas." },
      { title: "3. Conformado y ensamblaje", text: "Las tiras de caucho se cortan y conforman, se producen las estructuras y adaptadores, y los limpiaparabrisas se ensamblan en líneas automatizadas en nuestras dos plantas." },
      { title: "4. Pruebas en línea y de laboratorio", text: "Cada lote supera controles en línea y pruebas de laboratorio, incluyendo durabilidad de 1.500.000 ciclos de limpieza, niebla salina, ozono y flexibilidad a baja temperatura." },
      { title: "5. Embalaje y marca privada", text: "Los limpiaparabrisas se empaquetan en cajas de exportación o embalaje minorista personalizado, con logotipos grabados con láser y etiquetas de código de barras según las indicaciones del comprador." },
      { title: "6. Almacenamiento y envío", text: "Los productos terminados se trasladan a nuestro almacén de 8.000㎡ en el puerto de Ningbo para su consolidación y carga. Los artículos en stock se envían en 7 días, los pedidos personalizados en 15–35 días y el utillaje nuevo en 30–50 días." },
    ],
    termsTitle: "Condiciones de pedido directo de fábrica",
    terms: [
      { title: "MOQ", text: "500 unidades por pedido, con 100 unidades por medida para la mayoría de los modelos. Se pueden mezclar medidas dentro de un mismo pedido; los pedidos de prueba son negociables." },
      { title: "Plazo de entrega", text: "Los artículos en stock se envían en 7 días, los pedidos personalizados y de marca privada tardan 15–35 días y el utillaje nuevo 30–50 días." },
      { title: "Pago", text: "Transferencia bancaria (T/T) con 30% de anticipo y 70% antes del envío. Otras condiciones pueden discutirse con nuestra oficina de exportación para compradores habituales." },
    ],
    addressNote: "Dirección registrada: No.399 Minhe Road, distrito de Zhenhai, Ningbo, Zhejiang 315202, China. Los compradores pueden auditar ambas plantas o solicitar una inspección por vídeo en directo antes de la producción en masa.",
    relatedQuality: "pruebas de 1,5 millones de ciclos de limpieza y trazabilidad",
    relatedCerts: "ISO 9001:2015 No. 134956 y CE No. M.2022.206.C79712",
    faqTitle: "Preguntas frecuentes sobre la fábrica",
    faqIntro: "Respuestas directas a las preguntas que los compradores hacen al evaluar a un proveedor de limpiaparabrisas.",
    faqs: [
      { q: "¿Qué tamaño tiene la fábrica de limpiaparabrisas de Lelion?", a: "Lelion opera dos plantas de fabricación con más de 20.000㎡ en total —una en Ningbo (Zhejiang) y otra en Pingxiang (Jiangxi)— además de un almacén de 8.000㎡ en el puerto de Ningbo. La empresa se fundó en 2007 y cuenta con más de 18 años de experiencia." },
      { q: "¿Cuál es la capacidad de producción diaria y anual de Lelion?", a: "Nuestras dos plantas producen 50.000 limpiaparabrisas al día y más de 10 millones al año (10M+). Esta capacidad atiende pedidos de mayoristas, distribuidores y OEM/ODM enviados desde el puerto de Ningbo a más de 60 países." },
      { q: "¿Puedo visitar la fábrica o programar una inspección de terceros?", a: "Sí. Los compradores pueden organizar una auditoría de fábrica o una inspección por vídeo a distancia de nuestras plantas de Ningbo y Pingxiang antes de realizar un pedido grande. Contacte con nuestra oficina de ventas de exportación para programar una visita o una visita guiada por vídeo en directo con su equipo de garantía de calidad." },
      { q: "¿Dónde están ubicadas la fábrica y el almacén?", a: "La dirección registrada es No.399 Minhe Road, distrito de Zhenhai, Ningbo, Zhejiang 315202, China. Nuestra segunda planta está en Pingxiang (Jiangxi) y nuestro almacén de exportación de 8.000㎡ se encuentra en el puerto de Ningbo para una carga eficiente." },
      { q: "¿Cuáles son el MOQ, el plazo de entrega y las condiciones de pago para pedidos directos de fábrica?", a: "El MOQ es de 500 unidades por pedido, con 100 unidades por medida para la mayoría de los modelos. Los artículos en stock se envían en 7 días, los pedidos personalizados tardan 15–35 días y el utillaje nuevo 30–50 días. El pago es mediante T/T, con 30% de anticipo y 70% antes del envío." },
    ],
    ctaTitle: "Compre directamente a una fábrica verificada de 20.000+㎡",
    ctaText: "Nuestra oficina de exportación responde en un plazo de 12 horas con precios, catálogo y opciones de muestras. Canales oficiales: Facebook facebook.com/lelionwiper168, Instagram instagram.com/lelionwiper/, LinkedIn /in/lelion-wiperblade/, YouTube @Lelion-wiper.",
    ctaBtn: "Contacte con nuestra oficina de ventas de exportación",
    navLabels: { home: "Inicio", factory: "Fábrica", quality: "Calidad", certifications: "Certificaciones" },
  },

  ru: {
    heroTitle: "Завод LELION: два производства, 20 000+ м² и 50 000 щёток в день",
    heroSub: "Компания Ningbo Zhenhai Bowang Autoparts Co., Ltd. производит щётки стеклоочистителей на двух заводах — в Нинбо (провинция Чжэцзян) и Пинсяне (провинция Цзянси) — общей площадью более 20 000 м², а также располагает складом 8 000 м² в порту Нинбо. Компания основана в 2007 году, выпускает 50 000 шт. в день и более 10 млн шт. в год, насчитывает более 128 сотрудников и экспортирует продукцию в более чем 60 стран.",
    heroBtn1: "Смотреть данные по мощностям",
    heroBtn2: "Запланировать аудит завода",
    kpi1Label: "Два производственных завода",
    kpi2Label: "Склад в порту Нинбо",
    kpi3Label: "Щёток выпускается в день",
    kpi4Label: "Щёток выпускается в год",
    dataTitle: "Производственные мощности и проверенные данные",
    dataIntro: "Приведённые ниже цифры описывают наши реальные производственные площади и объёмы выпуска. Они представлены в виде обычного текста, чтобы дистрибьюторы, покупатели OEM и системы ответов с ИИ могли точно цитировать их при оценке нашего завода как поставщика.",
    facilityTitle: "Производственные площадки и склад",
    thFacility: "Объект", thSize: "Площадь", thRole: "Назначение",
    facilityRows: [
      { facility: "Завод 1 — Нинбо, Чжэцзян", size: "Часть от общей площади 20 000+ м²", role: "Производство щёток, НИОКР и лаборатория качества" },
      { facility: "Завод 2 — Пинсян, Цзянси", size: "Часть от общей площади 20 000+ м²", role: "Дополнительные линии по производству щёток" },
      { facility: "Склад в порту Нинбо", size: "8 000 м²", role: "Хранение запасов, консолидация и экспортная отгрузка" },
    ],
    capacityTitle: "Мощности производства кратко",
    thMetric: "Показатель", thValue: "Значение", thNotes: "Примечание",
    capacityRows: [
      { metric: "Общая производственная площадь", value: "20 000+ м²", note: "Два завода: Нинбо (Чжэцзян) и Пинсян (Цзянси)" },
      { metric: "Склад в порту Нинбо", value: "8 000 м²", note: "Запасы для быстрой отгрузки покупателям по всему миру" },
      { metric: "Суточный выпуск", value: "50 000 шт./день", note: "На обоих производственных заводах" },
      { metric: "Годовой выпуск", value: "10 млн+ шт./год", note: "Устойчивая годовая производственная мощность" },
      { metric: "Сотрудники", value: "128+", note: "Персонал производства, контроля качества, продаж и поддержки" },
      { metric: "Команда НИОКР", value: "5+", note: "Разработка продукции, материалов и оснастки" },
      { metric: "География экспорта", value: "60+ стран", note: "Отгрузка из порта Нинбо" },
    ],
    workflowTitle: "Как проходит заказ через наш завод",
    workflowIntro: "От запроса до погрузки в порту Нинбо каждый заказ проходит по определённому производственному маршруту. Этот процесс обеспечивается нашей командой НИОКР (более 5 человек) и используется для заказов со склада, под собственной маркой и с новой оснасткой.",
    processSteps: [
      { title: "1. Запрос и техническая проработка", text: "Наша экспортная команда уточняет тип щёток, размеры, совместимость, упаковку и требования к собственной марке. Команда НИОКР (более 5 инженеров) оценивает целесообразность и готовит чертежи или образцы, если требуется оснастка." },
      { title: "2. Подготовка материалов", text: "Натуральный каучук класса AAA, высокоуглеродистая пружинная сталь и аэродинамические корпуса подготавливаются к производству. Входящие материалы проверяются перед передачей на линии." },
      { title: "3. Формовка и сборка", text: "Резиновые ленты нарезаются и формуются, изготавливаются каркасы и адаптеры, а щётки собираются на автоматизированных линиях на обоих заводах." },
      { title: "4. Контроль в процессе и лабораторные испытания", text: "Каждая партия проходит межоперационный контроль и лабораторные испытания, включая ресурс 1 500 000 циклов очистки, соляной туман, озон и гибкость при низких температурах." },
      { title: "5. Упаковка и собственная марка", text: "Щётки упаковываются в экспортные коробки или фирменную розничную упаковку с лазерной гравировкой логотипа и штрихкодами по требованиям покупателя." },
      { title: "6. Хранение и отгрузка", text: "Готовая продукция поступает на наш склад 8 000 м² в порту Нинбо для консолидации и погрузки. Товары со склада отгружаются за 7 дней, индивидуальные заказы — за 15–35 дней, новая оснастка — за 30–50 дней." },
    ],
    termsTitle: "Условия заказа напрямую с завода",
    terms: [
      { title: "Минимальный заказ", text: "500 шт. на заказ, для большинства моделей — 100 шт. на размер. В одном заказе можно комбинировать размеры; пробные заказы обсуждаются." },
      { title: "Срок отгрузки", text: "Товары со склада — 7 дней, индивидуальные заказы и собственная марка — 15–35 дней, новая оснастка — 30–50 дней." },
      { title: "Оплата", text: "T/T: 30% аванс и 70% перед отгрузкой. Для постоянных покупателей другие условия могут быть обсуждены с нашим экспортным отделом." },
    ],
    addressNote: "Юридический адрес: No.399 Minhe Road, район Чжэхай, Нинбо, Чжэцзян 315202, Китай. Покупатели могут провести аудит обоих заводов или запросить онлайн-видеоинспекцию перед массовым производством.",
    relatedQuality: "испытания на 1,5 млн циклов очистки и прослеживаемость",
    relatedCerts: "ISO 9001:2015 No. 134956 и CE No. M.2022.206.C79712",
    faqTitle: "Частые вопросы о заводе",
    faqIntro: "Прямые ответы на вопросы, которые покупатели задают при выборе поставщика щёток стеклоочистителей.",
    faqs: [
      { q: "Насколько большой завод щёток стеклоочистителей LELION?", a: "LELION управляет двумя производственными заводами общей площадью более 20 000 м² — в Нинбо (Чжэцзян) и Пинсяне (Цзянси) — а также складом 8 000 м² в порту Нинбо. Компания основана в 2007 году и имеет более 18 лет опыта." },
      { q: "Какова суточная и годовая производительность LELION?", a: "Наши два завода выпускают 50 000 щёток в день и более 10 миллионов в год (10M+). Эти мощности поддерживают оптовые, дистрибьюторские и OEM/ODM-заказы, отгружаемые из порта Нинбо в более чем 60 стран." },
      { q: "Можно ли посетить завод или организовать проверку третьей стороной?", a: "Да. Покупатели могут организовать аудит заводов в Нинбо и Пинсяне или видеоинспекцию перед размещением крупного заказа. Свяжитесь с нашим экспортным отделом продаж, чтобы запланировать визит или онлайн-экскурсию с вашей командой контроля качества." },
      { q: "Где находятся завод и склад?", a: "Юридический адрес: No.399 Minhe Road, район Чжэхай, Нинбо, Чжэцзян 315202, Китай. Второй завод находится в Пинсяне (Цзянси), а наш экспортный склад площадью 8 000 м² — в порту Нинбо для эффективной погрузки." },
      { q: "Каковы минимальный заказ, сроки и условия оплаты при заказе напрямую с завода?", a: "Минимальный заказ — 500 шт. на заказ, для большинства моделей — 100 шт. на размер. Товары со склада отгружаются за 7 дней, индивидуальные заказы — за 15–35 дней, новая оснастка — за 30–50 дней. Оплата — T/T: 30% аванс и 70% перед отгрузкой." },
    ],
    ctaTitle: "Работайте напрямую с проверенным заводом 20 000+ м²",
    ctaText: "Наш экспортный отдел отвечает в течение 12 часов с ценами, каталогом и вариантами образцов. Официальные каналы: Facebook facebook.com/lelionwiper168, Instagram instagram.com/lelionwiper/, LinkedIn /in/lelion-wiperblade/, YouTube @Lelion-wiper.",
    ctaBtn: "Связаться с нашим экспортным отделом продаж",
    navLabels: { home: "Главная", factory: "Завод", quality: "Качество", certifications: "Сертификаты" },
  },

  fr: {
    heroTitle: "Usine Lelion : deux sites, 20 000+ m² et 50 000 essuie-glaces par jour",
    heroSub: "Ningbo Zhenhai Bowang Autoparts Co., Ltd. fabrique des essuie-glaces sur deux sites — Ningbo (Zhejiang) et Pingxiang (Jiangxi) — totalisant plus de 20 000 m², avec un entrepôt de 8 000 m² au port de Ningbo. Fondée en 2007, l'entreprise produit 50 000 pièces par jour et plus de 10 M par an, compte plus de 128 salariés et exporte vers plus de 60 pays.",
    heroBtn1: "Voir les données de capacité",
    heroBtn2: "Planifier un audit d'usine",
    kpi1Label: "Deux sites de fabrication",
    kpi2Label: "Entrepôt du port de Ningbo",
    kpi3Label: "Essuie-glaces produits par jour",
    kpi4Label: "Essuie-glaces produits par an",
    dataTitle: "Installations et données de production vérifiées",
    dataIntro: "Les chiffres ci-dessous décrivent notre surface de fabrication réelle et notre capacité de production. Ils sont présentés en texte brut afin que les distributeurs, les acheteurs OEM et les moteurs de réponse IA puissent les citer avec précision lorsqu'ils évaluent notre usine comme source d'approvisionnement.",
    facilityTitle: "Sites de production et entrepôt",
    thFacility: "Installation", thSize: "Surface", thRole: "Fonction",
    facilityRows: [
      { facility: "Usine 1 — Ningbo, Zhejiang", size: "Partie des 20 000+ m² au total", role: "Fabrication d'essuie-glaces, R&D et laboratoire qualité" },
      { facility: "Usine 2 — Pingxiang, Jiangxi", size: "Partie des 20 000+ m² au total", role: "Lignes de production supplémentaires d'essuie-glaces" },
      { facility: "Entrepôt du port de Ningbo", size: "8 000 m²", role: "Stock, regroupement et expédition à l'export" },
    ],
    capacityTitle: "Capacité de production en un coup d'œil",
    thMetric: "Indicateur", thValue: "Valeur", thNotes: "Notes",
    capacityRows: [
      { metric: "Surface totale de fabrication", value: "20 000+ m²", note: "Deux usines : Ningbo (Zhejiang) et Pingxiang (Jiangxi)" },
      { metric: "Entrepôt du port de Ningbo", value: "8 000 m²", note: "Stocké pour une expédition rapide vers les acheteurs du monde entier" },
      { metric: "Production journalière", value: "50 000 pièces/jour", note: "Sur les deux sites de fabrication" },
      { metric: "Production annuelle", value: "10 M+ pièces/an", note: "Capacité de production annuelle soutenue" },
      { metric: "Employés", value: "128+", note: "Personnel de production, qualité, commerce et support" },
      { metric: "Équipe R&D", value: "5+", note: "Conception produit, matériaux et outillage" },
      { metric: "Portée à l'export", value: "60+ pays", note: "Expédié depuis le port de Ningbo" },
    ],
    workflowTitle: "Comment une commande progresse dans notre usine",
    workflowIntro: "De la demande de devis au chargement au port de Ningbo, chaque commande suit un parcours de production défini. Ce processus est soutenu par notre équipe R&D de plus de 5 personnes et constitue la même voie utilisée pour les commandes en stock, sous marque propre et avec outillage sur mesure.",
    processSteps: [
      { title: "1. Demande et étude technique", text: "Notre équipe export confirme le type d'essuie-glace, les tailles, l'compatibilité, l'emballage et les exigences de marque propre. L'équipe R&D (plus de 5 ingénieurs) évalue la faisabilité et prépare des plans ou des échantillons lorsqu'un outillage est nécessaire." },
      { title: "2. Préparation des matières", text: "Caoutchouc naturel de qualité AAA, acier à ressort haute carbone et carrosseries aérodynamiques sont préparés pour la production. Les matières entrantes sont contrôlées avant leur mise en ligne." },
      { title: "3. Formage et assemblage", text: "Les bandes de caoutchouc sont découpées et formées, les armatures et adaptateurs sont fabriqués, et les essuie-glaces sont assemblés sur des lignes automatisées dans nos deux usines." },
      { title: "4. Contrôles en ligne et essais en laboratoire", text: "Chaque lot passe des contrôles en ligne et des essais de laboratoire, dont la durabilité de 1 500 000 cycles d'essuyage, le brouillard salin, l'ozone et la souplesse à basse température." },
      { title: "5. Emballage et marque propre", text: "Les essuie-glaces sont conditionnés dans des cartons d'export ou des emballages de vente personnalisés, avec logos gravés au laser et étiquettes codes-barres selon les indications de l'acheteur." },
      { title: "6. Stockage et expédition", text: "Les produits finis rejoignent notre entrepôt de 8 000 m² au port de Ningbo pour regroupement et chargement. Les articles en stock partent en 7 jours, les commandes personnalisées en 15–35 jours et un nouvel outillage en 30–50 jours." },
    ],
    termsTitle: "Conditions de commande directe usine",
    terms: [
      { title: "MOQ", text: "500 pièces par commande, avec 100 pièces par taille pour la plupart des modèles. Les tailles peuvent être mélangées dans une même commande ; les commandes d'essai sont négociables." },
      { title: "Délai de livraison", text: "Les articles en stock partent en 7 jours, les commandes personnalisées et sous marque propre en 15–35 jours, et un nouvel outillage en 30–50 jours." },
      { title: "Paiement", text: "T/T avec 30 % d'acompte et 70 % avant expédition. D'autres conditions peuvent être discutées avec notre bureau export pour les acheteurs habituels." },
    ],
    addressNote: "Adresse enregistrée : No.399 Minhe Road, district de Zhenhai, Ningbo, Zhejiang 315202, Chine. Les acheteurs sont invités à auditer les deux usines ou à demander une inspection vidéo en direct avant la production de masse.",
    relatedQuality: "essais de 1,5 million de cycles d'essuyage et traçabilité",
    relatedCerts: "ISO 9001:2015 No. 134956 et CE No. M.2022.206.C79712",
    faqTitle: "FAQ de l'usine",
    faqIntro: "Réponses directes aux questions posées par les acheteurs lors de la qualification d'un fournisseur d'essuie-glaces.",
    faqs: [
      { q: "Quelle est la taille de l'usine d'essuie-glaces de Lelion ?", a: "Lelion exploite deux usines totalisant plus de 20 000 m² — l'une à Ningbo (Zhejiang) et l'autre à Pingxiang (Jiangxi) — ainsi qu'un entrepôt de 8 000 m² au port de Ningbo. L'entreprise a été fondée en 2007 et dispose de plus de 18 ans d'expérience." },
      { q: "Quelle est la capacité de production journalière et annuelle de Lelion ?", a: "Nos deux usines produisent 50 000 essuie-glaces par jour et plus de 10 millions par an (10 M+). Cette capacité répond aux commandes en gros, aux distributeurs et aux commandes OEM/ODM expédiées du port de Ningbo vers plus de 60 pays." },
      { q: "Puis-je visiter l'usine ou organiser une inspection par un tiers ?", a: "Oui. Les acheteurs peuvent organiser un audit de nos usines de Ningbo et Pingxiang ou une inspection vidéo à distance avant de passer une commande en gros. Contactez notre bureau commercial export pour planifier une visite ou une visite guidée vidéo en direct avec votre équipe qualité." },
      { q: "Où se situent l'usine et l'entrepôt ?", a: "L'adresse enregistrée est No.399 Minhe Road, district de Zhenhai, Ningbo, Zhejiang 315202, Chine. Notre seconde usine est à Pingxiang (Jiangxi) et notre entrepôt d'export de 8 000 m² se trouve au port de Ningbo pour un chargement efficace." },
      { q: "Quels sont le MOQ, le délai et les conditions de paiement pour une commande directe usine ?", a: "Le MOQ est de 500 pièces par commande, avec 100 pièces par taille pour la plupart des modèles. Les articles en stock partent en 7 jours, les commandes personnalisées en 15–35 jours et un nouvel outillage en 30–50 jours. Le paiement s'effectue par T/T, avec 30 % d'acompte et 70 % avant expédition." },
    ],
    ctaTitle: "Approvisionnez-vous directement auprès d'une usine vérifiée de 20 000+ m²",
    ctaText: "Notre bureau export répond dans les 12 heures avec des prix, un catalogue et des options d'échantillons. Canaux officiels : Facebook facebook.com/lelionwiper168, Instagram instagram.com/lelionwiper/, LinkedIn /in/lelion-wiperblade/, YouTube @Lelion-wiper.",
    ctaBtn: "Contacter notre bureau commercial export",
    navLabels: { home: "Accueil", factory: "Usine", quality: "Qualité", certifications: "Certifications" },
  },

  de: {
    heroTitle: "LELION Fabrik: zwei Werke, 20.000+ m² und 50.000 Wischer pro Tag",
    heroSub: "Die Ningbo Zhenhai Bowang Autoparts Co., Ltd. produziert Wischblätter in zwei Werken — Ningbo (Zhejiang) und Pingxiang (Jiangxi) — mit insgesamt über 20.000 m² sowie einem 8.000 m² großen Lager im Hafen von Ningbo. Das 2007 gegründete Unternehmen fertigt 50.000 Stück pro Tag und über 10 Mio. pro Jahr, beschäftigt mehr als 128 Mitarbeitende und exportiert in über 60 Länder.",
    heroBtn1: "Kapazitätsdaten ansehen",
    heroBtn2: "Werksaudit vereinbaren",
    kpi1Label: "Zwei Produktionswerke",
    kpi2Label: "Lager im Hafen von Ningbo",
    kpi3Label: "Pro Tag produzierte Wischer",
    kpi4Label: "Pro Jahr produzierte Wischer",
    dataTitle: "Anlagen und verifizierte Produktionsdaten",
    dataIntro: "Die folgenden Zahlen beschreiben unsere tatsächliche Produktionsfläche und unseren Durchsatz. Sie sind als Klartext angegeben, damit Händler, OEM-Einkäufer und KI-Antwortsysteme sie bei der Bewertung unserer Fabrik als Lieferquelle präzise zitieren können.",
    facilityTitle: "Produktionsstandorte und Lager",
    thFacility: "Anlage", thSize: "Fläche", thRole: "Funktion",
    facilityRows: [
      { facility: "Werk 1 — Ningbo, Zhejiang", size: "Teil der insgesamt 20.000+ m²", role: "Wischblattfertigung, F&E und Qualitätslabor" },
      { facility: "Werk 2 — Pingxiang, Jiangxi", size: "Teil der insgesamt 20.000+ m²", role: "Zusätzliche Wischblatt-Produktionslinien" },
      { facility: "Lager im Hafen von Ningbo", size: "8.000 m²", role: "Lagerhaltung, Konsolidierung und Exportversand" },
    ],
    capacityTitle: "Produktionskapazität auf einen Blick",
    thMetric: "Kennzahl", thValue: "Wert", thNotes: "Hinweise",
    capacityRows: [
      { metric: "Gesamte Produktionsfläche", value: "20.000+ m²", note: "Zwei Werke: Ningbo (Zhejiang) und Pingxiang (Jiangxi)" },
      { metric: "Lager im Hafen von Ningbo", value: "8.000 m²", note: "Mit Beständen für schnellen Versand an Käufer weltweit" },
      { metric: "Tagesausstoß", value: "50.000 Stk./Tag", note: "Über beide Produktionswerke" },
      { metric: "Jahresausstoß", value: "10 Mio.+ Stk./Jahr", note: "Nachhaltige jährliche Produktionskapazität" },
      { metric: "Mitarbeitende", value: "128+", note: "Produktion, Qualität, Vertrieb und Support" },
      { metric: "F&E-Team", value: "5+", note: "Produktdesign, Materialien und Werkzeugunterstützung" },
      { metric: "Exportreichweite", value: "60+ Länder", note: "Versand ab Hafen Ningbo" },
    ],
    workflowTitle: "Wie eine Bestellung unsere Fabrik durchläuft",
    workflowIntro: "Von der Anfrage bis zur Verladung im Hafen von Ningbo folgt jede Bestellung einem festgelegten Produktionsweg. Dieser Prozess wird von unserem F&E-Team mit mehr als 5 Mitgliedern unterstützt und gilt gleichermaßen für Lager-, Private-Label- und Sonderwerkzeug-Aufträge.",
    processSteps: [
      { title: "1. Anfrage und technische Prüfung", text: "Unser Exportteam bestätigt Wischblatttyp, Größen, Passgenauigkeit, Verpackung und Private-Label-Anforderungen. Das F&E-Team (mehr als 5 Ingenieure) prüft die Machbarkeit und erstellt bei Bedarf Zeichnungen oder Muster." },
      { title: "2. Materialvorbereitung", text: "Naturkautschuk der Klasse AAA, hochkohlenstoffhaltiger Federstahl und aerodynamische Gehäuse werden für die Produktion bereitgestellt. Ankommende Materialien werden vor der Freigabe für die Linien geprüft." },
      { title: "3. Formen und Montage", text: "Gummistreifen werden geschnitten und geformt, Rahmen und Adapter gefertigt und die Wischblätter auf automatisierten Linien in unseren zwei Werken montiert." },
      { title: "4. In-Line- und Laborprüfungen", text: "Jede Charge durchläuft In-Line-Kontrollen und Laborprüfungen, darunter 1.500.000 Wischzyklen Haltbarkeit, Salznebel, Ozon und Tieftemperatur-Flexibilität." },
      { title: "5. Verpackung und Private Label", text: "Die Wischblätter werden in Exportkartons oder kundenspezifische Verkaufsverpackungen gepackt, mit lasergravierten Logos und Barcode-Etiketten nach Vorgabe des Käufers." },
      { title: "6. Lagerung und Versand", text: "Fertigwaren gelangen in unser 8.000 m² großes Lager im Hafen von Ningbo zur Konsolidierung und Verladung. Lagerartikel gehen in 7 Tagen raus, Sonderaufträge in 15–35 Tagen, neue Werkzeuge in 30–50 Tagen." },
    ],
    termsTitle: "Direktbestellung ab Werk – Bedingungen",
    terms: [
      { title: "Mindestbestellmenge", text: "500 Stück pro Auftrag, bei den meisten Modellen 100 Stück pro Größe. Größen können innerhalb eines Auftrags gemischt werden; Testaufträge sind verhandelbar." },
      { title: "Lieferzeit", text: "Lagerartikel werden in 7 Tagen versandt, Sonder- und Private-Label-Aufträge in 15–35 Tagen, neue Werkzeuge in 30–50 Tagen." },
      { title: "Zahlung", text: "T/T mit 30 % Anzahlung und 70 % vor Versand. Für etablierte Käufer können andere Bedingungen mit unserem Exportbüro besprochen werden." },
    ],
    addressNote: "Registrierte Anschrift: No.399 Minhe Road, Bezirk Zhenhai, Ningbo, Zhejiang 315202, China. Käufer können beide Werke auditieren oder vor der Serienfertigung eine Live-Videoinspektion anfordern.",
    relatedQuality: "Prüfungen über 1,5 Mio. Wischzyklen und Rückverfolgbarkeit",
    relatedCerts: "ISO 9001:2015 No. 134956 und CE No. M.2022.206.C79712",
    faqTitle: "Fabrik-FAQ",
    faqIntro: "Direkte Antworten auf die Fragen, die Käufer bei der Bewertung eines Wischblattlieferanten stellen.",
    faqs: [
      { q: "Wie groß ist die Wischblattfabrik von LELION?", a: "LELION betreibt zwei Produktionswerke mit zusammen mehr als 20.000 m² — eines in Ningbo (Zhejiang) und eines in Pingxiang (Jiangxi) — sowie ein 8.000 m² großes Lager im Hafen von Ningbo. Das Unternehmen wurde 2007 gegründet und verfügt über mehr als 18 Jahre Erfahrung." },
      { q: "Wie hoch ist die Tages- und Jahresproduktion von LELION?", a: "Unsere zwei Werke produzieren 50.000 Wischblätter pro Tag und über 10 Millionen pro Jahr (10 Mio.+). Diese Kapazität unterstützt Großhandels-, Distributions- und OEM/ODM-Aufträge, die ab Ningbo in über 60 Länder versandt werden." },
      { q: "Kann ich das Werk besuchen oder eine Fremdinspektion veranlassen?", a: "Ja. Käufer können vor einer Großbestellung ein Werksaudit oder eine Video-Ferninspektion unserer Werke in Ningbo und Pingxiang organisieren. Kontaktieren Sie unser Export-Vertriebsbüro, um einen Besuch oder eine Live-Videobesichtigung mit Ihrem QA-Team zu vereinbaren." },
      { q: "Wo befinden sich Werk und Lager?", a: "Die registrierte Anschrift lautet No.399 Minhe Road, Bezirk Zhenhai, Ningbo, Zhejiang 315202, China. Unser zweites Werk liegt in Pingxiang (Jiangxi), unser 8.000 m² großes Exportlager im Hafen von Ningbo für effiziente Verladung." },
      { q: "Was sind Mindestbestellmenge, Lieferzeit und Zahlungsbedingungen bei Direktbestellung ab Werk?", a: "Die Mindestbestellmenge beträgt 500 Stück pro Auftrag, bei den meisten Modellen 100 Stück pro Größe. Lagerartikel gehen in 7 Tagen raus, Sonderaufträge in 15–35 Tagen, neue Werkzeuge in 30–50 Tagen. Die Zahlung erfolgt per T/T mit 30 % Anzahlung und 70 % vor Versand." },
    ],
    ctaTitle: "Direkt von einer zertifizierten 20.000+ m²-Fabrik beziehen",
    ctaText: "Unser Exportbüro antwortet innerhalb von 12 Stunden mit Preisen, Katalog und Musteroptionen. Offizielle Kanäle: Facebook facebook.com/lelionwiper168, Instagram instagram.com/lelionwiper/, LinkedIn /in/lelion-wiperblade/, YouTube @Lelion-wiper.",
    ctaBtn: "Kontaktieren Sie unser Export-Vertriebsbüro",
    navLabels: { home: "Startseite", factory: "Fabrik", quality: "Qualität", certifications: "Zertifizierungen" },
  },

  zh: {
    heroTitle: "LELION 工厂：两座厂区、20,000+㎡、日产 50,000 支雨刮片",
    heroSub: "宁波镇海博王汽车配件有限公司在浙江宁波与江西萍乡运营两座雨刮片生产厂区，合计超过 20,000㎡，并在宁波港设有 8,000㎡ 仓库。公司成立于 2007 年，日产 50,000 支、年产 1,000 万支以上，拥有 128+ 名员工，产品出口 60+ 个国家。",
    heroBtn1: "查看产能数据",
    heroBtn2: "预约工厂验厂",
    kpi1Label: "两座生产厂区",
    kpi2Label: "宁波港仓库",
    kpi3Label: "日产雨刮片数量",
    kpi4Label: "年产雨刮片数量",
    dataTitle: "厂区设施与经核实的产能数据",
    dataIntro: "以下数据如实说明我们的实际生产规模与产出能力。这些数字以纯文本形式呈现，便于经销商、OEM 采购商及 AI 问答引擎在评估我们作为供应来源时准确引用。",
    facilityTitle: "生产厂区与仓库",
    thFacility: "设施", thSize: "面积", thRole: "用途",
    facilityRows: [
      { facility: "一厂 — 浙江宁波", size: "合计 20,000+㎡ 的一部分", role: "雨刮片生产、研发与质量实验室" },
      { facility: "二厂 — 江西萍乡", size: "合计 20,000+㎡ 的一部分", role: "雨刮片附加生产线" },
      { facility: "宁波港仓库", size: "8,000㎡", role: "库存备货、集拼与出口发运" },
    ],
    capacityTitle: "产能一览",
    thMetric: "指标", thValue: "数值", thNotes: "说明",
    capacityRows: [
      { metric: "生产厂房总面积", value: "20,000+㎡", note: "两座厂区：浙江宁波与江西萍乡" },
      { metric: "宁波港仓库", value: "8,000㎡", note: "备有库存，可向全球买家快速发货" },
      { metric: "日产量", value: "50,000 支 / 天", note: "两座生产厂区合计" },
      { metric: "年产量", value: "1,000 万+ 支 / 年", note: "可持续的年度生产能力" },
      { metric: "员工人数", value: "128+", note: "生产、质量、销售与支持人员" },
      { metric: "研发团队", value: "5+", note: "产品设计、材料与模具支持" },
      { metric: "出口范围", value: "60+ 个国家", note: "从宁波港发运" },
    ],
    workflowTitle: "订单在我们工厂如何流转",
    workflowIntro: "从询盘到宁波港装运，每张订单都遵循既定的生产流程。该流程由 5+ 人的研发团队提供支持，现货、贴牌与开模订单均走同一路径。",
    processSteps: [
      { title: "1. 询盘与工程评审", text: "我们的出口团队确认雨刮片类型、尺寸、适配车型、包装与贴牌要求；研发团队（5+ 名工程师）评估可行性，并在需要开模时准备图纸或样品。" },
      { title: "2. 物料准备", text: "AAA 级天然橡胶、高碳弹簧钢与空气动力学外壳备料待产；来料在上线前均经过检验。" },
      { title: "3. 成型与装配", text: "胶条被裁切成型，骨架与接头完成生产，雨刮片在两座厂区的自动化产线上完成装配。" },
      { title: "4. 在线与实验室测试", text: "每批产品均通过在线检验与实验室测试，包括 1,500,000 次刮擦耐久测试、盐雾、臭氧与低温柔韧性测试。" },
      { title: "5. 包装与贴牌", text: "雨刮片按买方要求装入出口纸箱或定制零售包装，并印制激光 logo 与条形码标签。" },
      { title: "6. 仓储与发运", text: "成品进入宁波港 8,000㎡ 仓库集拼装柜。现货 7 天发货，定制订单 15–35 天，新开模 30–50 天。" },
    ],
    termsTitle: "工厂直供订购条款",
    terms: [
      { title: "起订量", text: "每单 500 支起，多数型号每种尺寸 100 支起；同一订单可混搭尺寸，试单可议。" },
      { title: "交期", text: "现货 7 天发货，定制与贴牌订单 15–35 天，新开模 30–50 天。" },
      { title: "付款", text: "电汇（T/T），30% 定金、发货前付清 70%；老客户可与我出口部门商议其他条款。" },
    ],
    addressNote: "注册地址：中国浙江省宁波市镇海区民和路 399 号，邮编 315202。欢迎买家对两座厂区进行验厂，或在批量生产前要求实时远程视频验厂。",
    relatedQuality: "1,500,000 次刮擦测试与可追溯体系",
    relatedCerts: "ISO 9001:2015 No. 134956 与 CE No. M.2022.206.C79712",
    faqTitle: "工厂常见问题",
    faqIntro: "直接回答买家在筛选雨刮片供应商时最关心的问题。",
    faqs: [
      { q: "LELION 雨刮片工厂有多大？", a: "LELION 运营两座生产厂区，合计超过 20,000㎡——一座位于浙江宁波，一座位于江西萍乡——另在宁波港设有 8,000㎡ 仓库。公司成立于 2007 年，拥有 18+ 年经验。" },
      { q: "LELION 的日产与年产雨刮片产能是多少？", a: "两座厂区日产 50,000 支雨刮片，年产超过 1,000 万支（10M+）。该产能可支持从宁波港发往 60+ 国家的批发、经销与 OEM/ODM 订单。" },
      { q: "我可以参观工厂或安排第三方验厂吗？", a: "可以。买家可在下大单前安排对我宁波与萍乡厂区的验厂或远程视频验厂。请联系我们的出口销售部门预约到访，或与您的 QA 团队进行实时视频巡检。" },
      { q: "工厂和仓库位于哪里？", a: "注册地址为中国浙江省宁波市镇海区民和路 399 号，邮编 315202。第二座厂区位于江西萍乡，8,000㎡ 出口仓库位于宁波港，便于高效装运。" },
      { q: "工厂直供订单的起订量、交期与付款条款是什么？", a: "起订量为每单 500 支，多数型号每种尺寸 100 支起。现货 7 天发货，定制订单 15–35 天，新开模 30–50 天。付款方式为电汇，30% 定金、发货前付清 70%。" },
    ],
    ctaTitle: "直接向经核实的 20,000+㎡ 工厂采购",
    ctaText: "我们的出口办公室在 12 小时内回复报价、目录与打样方案。官方渠道：Facebook facebook.com/lelionwiper168、Instagram instagram.com/lelionwiper/、LinkedIn /in/lelion-wiperblade/、YouTube @Lelion-wiper。",
    ctaBtn: "联系我们的出口销售部门",
    navLabels: { home: "首页", factory: "工厂实力", quality: "质量控制", certifications: "认证资质" },
  },
};
