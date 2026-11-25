// Shared six-language copy for app/[lang]/quality/page.tsx.
// Invariant verified facts, kept digit-for-digit in every locale:
// 1,500,000 wipe cycles / 1.5M; 2007; 18+ years; 4 test categories;
// NQA, ISO 9001:2015, certificate No. 134956; CE, No. M.2022.206.C79712, UDEM;
// 8,000㎡ Ningbo Port warehouse; 20,000+㎡; two plants; 50,000 pcs/day;
// 60+ countries; No.399 Minhe Road, Zhenhai District, Ningbo, Zhejiang 315202, China;
// bwb@bwwiper.com; +8618867886795; MOQ 500 pcs (100 pcs per size);
// 7 days; 15–35 days; 30–50 days; T/T 30% deposit + 70% before shipment.

export type QualityLang = "en" | "es" | "ru" | "fr" | "de" | "zh";

export interface QualityCopy {
  heroTitle: string;
  heroSub: string;
  heroBtn1: string;
  heroBtn2: string;
  kpi1Label: string;
  kpi2Label: string;
  kpi3Label: string;
  kpi4Label: string;
  testTableTitle: string;
  testTableIntro: string;
  thTest: string;
  thMethod: string;
  thCriterion: string;
  thProves: string;
  testRows: { test: string; method: string; criterion: string; purpose: string }[];
  testFootnote: string;
  qcTitle: string;
  qcIntro: string;
  qcSteps: { title: string; text: string }[];
  traceTitle: string;
  traceIntro: string;
  evidenceCards: { title: string; text: string }[];
  relatedCertsText: string;
  relatedFactoryText: string;
  faqTitle: string;
  faqIntro: string;
  faqs: { q: string; a: string }[];
  ctaTitle: string;
  ctaText: string;
  ctaBtn: string;
  navLabels: { home: string; quality: string; factory: string; certifications: string };
}

export const qualityI18n: Record<QualityLang, QualityCopy> = {
  en: {
    heroTitle: "Lelion Quality Control: 1,500,000 Wipe-Cycle Testing and Traceable Batch Inspection",
    heroSub: "Every Lelion wiper blade is backed by a documented quality process. Our laboratory tests blades to 1,500,000 wipe cycles (1.5M) and additionally runs salt spray, ozone and low-temperature flexibility tests. The manufacturing system holds ISO 9001:2015 certificate No. 134956 (NQA), and buyers can inspect goods by live video before shipment.",
    heroBtn1: "View the test table",
    heroBtn2: "Request inspection evidence",
    kpi1Label: "Wipe cycles durability test",
    kpi2Label: "Documented test categories",
    kpi3Label: "Founded · 18+ years of QC experience",
    kpi4Label: "ISO 9001:2015 issuing body",
    testTableTitle: "Our laboratory test program",
    testTableIntro: "The table below lists the tests we run on wiper blades and rubber strips. Each entry is stated in plain text with its purpose, so procurement and QA teams can quote the data accurately and request the supporting records from our sales office.",
    thTest: "Test", thMethod: "Method summary", thCriterion: "Criterion / result published", thProves: "What it proves",
    testRows: [
      { test: "Wipe durability test", method: "Continuous wiping cycle test on production blades", criterion: "1,500,000 wipe cycles (1.5M)", purpose: "Confirms long-term wiping performance and resistance to wear of the rubber lip and blade structure." },
      { test: "Salt spray test", method: "Exposed metal components in a controlled salt-fog chamber", criterion: "Corrosion resistance check", purpose: "Verifies that frames, springs and adapters resist corrosion in coastal and winter-road-salt environments." },
      { test: "Ozone test", method: "Rubber strips exposed to an ozone-enriched atmosphere", criterion: "Ozone-resistance check", purpose: "Checks that rubber does not crack or degrade prematurely under atmospheric ozone exposure." },
      { test: "Low-temperature flexibility test", method: "Blades conditioned and flexed at low temperatures", criterion: "Low-temperature flexibility check", purpose: "Ensures the rubber lip stays flexible and maintains glass contact in winter conditions." },
    ],
    testFootnote: "Test records and sample reports can be supplied by our export sales office. Durability is stated as 1,500,000 wipe cycles (1.5M), the verified figure used throughout our product documentation.",
    qcTitle: "Quality control from raw material to shipment",
    qcIntro: "Quality is checked at each stage rather than only at the end of the line. The steps below apply to stock items, private-label orders and custom tooling orders produced across our two plants.",
    qcSteps: [
      { title: "1. Incoming material inspection", text: "AAA-grade natural rubber, spring steel, adapters and packaging materials are checked before they enter production. Material lots are recorded so that any later issue can be traced back to its source." },
      { title: "2. In-process checks", text: "Line operators and QC inspectors sample blades during cutting, forming and assembly. Fitment, dimensions, adapter tension and appearance are checked against the approved sample and specification." },
      { title: "3. Laboratory verification", text: "Samples from each production batch are subjected to laboratory testing, including the 1.5M-cycle wipe durability test, salt spray, ozone and low-temperature flexibility testing described in the table above." },
      { title: "4. Final random inspection", text: "Before packing, finished blades undergo a random visual and functional inspection. Only batches that pass are released to the 8,000㎡ Ningbo Port warehouse for shipment." },
      { title: "5. Pre-shipment evidence for buyers", text: "We support live remote video inspection and can provide recorded inspection videos through your dedicated sales representative. Buyers arranging a factory audit can review the same records on site." },
    ],
    traceTitle: "Traceability and buyer-accessible evidence",
    traceIntro: "Traceability means you can connect a blade in a carton to the material lot and production batch behind it. Incoming lots are recorded, in-process and laboratory checks are documented per batch, and export cartons are marked for shipment identification. If a quality question arises, our team can work back through that chain and issue a corrective response.",
    evidenceCards: [
      { title: "Remote video inspection", text: "Before shipment, we support live remote video inspection or provide recorded product inspection videos through your dedicated sales representative." },
      { title: "Factory audits welcome", text: "Quality records, laboratory equipment and production lines can be reviewed during a scheduled audit at our Ningbo or Pingxiang plant." },
      { title: "Certified management system", text: "ISO 9001:2015 No. 134956 (NQA) governs the documented procedures behind inspection, test and traceability activities." },
    ],
    relatedCertsText: "ISO and CE certificate numbers",
    relatedFactoryText: "20,000+㎡ plants and 50,000 pcs/day output",
    faqTitle: "Quality FAQ",
    faqIntro: "Direct answers to the test and inspection questions B2B buyers ask.",
    faqs: [
      { q: "How many wipe cycles are Lelion wiper blades tested for?", a: "Lelion wiper blades are tested to 1,500,000 wipe cycles (1.5M) in our durability test. This figure is published on this page as a verifiable product claim and is supported by laboratory test records available from our export sales office on request." },
      { q: "What quality tests does Lelion run besides durability?", a: "In addition to the 1,500,000-cycle wipe durability test, our laboratory runs salt spray testing for corrosion resistance, ozone testing for rubber ageing, and low-temperature flexibility testing for winter performance. These tests are applied to production batches as part of our documented quality control process." },
      { q: "Can I inspect the goods before shipment?", a: "Yes. Before shipment we support live remote video inspection or provide recorded product inspection videos through your dedicated sales representative. Factory audits at our Ningbo and Pingxiang plants can also be arranged through the export office." },
      { q: "Is Lelion's quality system certified?", a: "Yes. The manufacturing facility operates under an ISO 9001:2015 quality management system, certificate No. 134956 issued by NQA. Wiper blades supplied to Europe carry CE certification No. M.2022.206.C79712 issued by UDEM. Certificate numbers are published on our Certifications page." },
      { q: "How does Lelion trace a quality issue back to a production batch?", a: "Incoming material lots are recorded when they enter production, in-process and laboratory checks are documented per batch, and finished goods are packed with export carton marking. This chain lets our QA team connect a reported issue to a material lot, production date and shipment, and respond with corrective action." },
    ],
    ctaTitle: "Ask for test records before your next order",
    ctaText: "Standard terms: MOQ 500 pcs (100 pcs per size), stock ships in 7 days, custom orders in 15–35 days, new tooling in 30–50 days, T/T 30% deposit + 70% before shipment. Two plants above 20,000+㎡ produce 50,000 pcs/day and export to 60+ countries; the 8,000㎡ Ningbo Port warehouse supports shipment. Founded in 2007 with 18+ years of QC experience. Factory: No.399 Minhe Road, Zhenhai District, Ningbo, Zhejiang 315202, China. bwb@bwwiper.com · +8618867886795.",
    ctaBtn: "Contact our export sales office",
    navLabels: { home: "Home", quality: "Quality", factory: "Factory", certifications: "Certifications" },
  },

  es: {
    heroTitle: "Control de calidad de Lelion: ensayos de 1.500.000 ciclos de limpieza e inspección trazable por lote",
    heroSub: "Cada limpiaparabrisas Lelion respalda un proceso de calidad documentado. Nuestro laboratorio somete las hojas a 1.500.000 ciclos de limpieza (1.5M) y realiza además ensayos de niebla salina, ozono y flexibilidad a baja temperatura. El sistema de fabricación cuenta con el certificado ISO 9001:2015 No. 134956 emitido por NQA, y los compradores pueden inspeccionar la mercancía por vídeo en directo antes del envío.",
    heroBtn1: "Ver la tabla de ensayos",
    heroBtn2: "Solicitar pruebas de inspección",
    kpi1Label: "Ensayo de durabilidad en ciclos de limpieza",
    kpi2Label: "Categorías de ensayo documentadas",
    kpi3Label: "Fundada en 2007 · más de 18 años de experiencia en QC",
    kpi4Label: "Organismo emisor de ISO 9001:2015",
    testTableTitle: "Nuestro programa de ensayos de laboratorio",
    testTableIntro: "La tabla siguiente recoge los ensayos que realizamos en limpiaparabrisas y tiras de caucho. Cada entrada se indica en texto plano junto a su finalidad, para que los equipos de compras y calidad puedan citar los datos con exactitud y solicitar los registros de respaldo a nuestro departamento comercial.",
    thTest: "Ensayo", thMethod: "Resumen del método", thCriterion: "Criterio / resultado publicado", thProves: "Qué demuestra",
    testRows: [
      { test: "Ensayo de durabilidad de limpieza", method: "Ensayo continuo de ciclos de limpieza en hojas de producción", criterion: "1.500.000 ciclos de limpieza (1.5M)", purpose: "Confirma el rendimiento de limpieza a largo plazo y la resistencia al desgaste del labio de caucho y de la estructura de la hoja." },
      { test: "Ensayo de niebla salina", method: "Componentes metálicos expuestos en una cámara controlada de niebla salina", criterion: "Comprobación de resistencia a la corrosión", purpose: "Verifica que bastidores, muelles y adaptadores resisten la corrosión en entornos costeros y en carreteras con sal en invierno." },
      { test: "Ensayo de ozono", method: "Tiras de caucho expuestas a una atmósfera enriquecida con ozono", criterion: "Comprobación de resistencia al ozono", purpose: "Comprueba que el caucho no se agrieta ni se degrada prematuramente por exposición atmosférica al ozono." },
      { test: "Ensayo de flexibilidad a baja temperatura", method: "Hojas acondicionadas y flexionadas a bajas temperaturas", criterion: "Comprobación de flexibilidad a baja temperatura", purpose: "Garantiza que el labio de caucho permanezca flexible y mantenga el contacto con el cristal en condiciones invernales." },
    ],
    testFootnote: "Los registros de ensayo y los informes de muestra pueden ser proporcionados por nuestra oficina de exportación. La durabilidad se declara en 1.500.000 ciclos de limpieza (1.5M), la cifra verificada que utilizamos en toda nuestra documentación de producto.",
    qcTitle: "Control de calidad desde la materia prima hasta el envío",
    qcIntro: "La calidad se comprueba en cada etapa, no solo al final de la línea. Estos pasos se aplican a los artículos en stock, a los pedidos de marca privada y a los pedidos con utillaje personalizado fabricados en nuestras dos plantas.",
    qcSteps: [
      { title: "1. Inspección de materiales entrantes", text: "El caucho natural de grado AAA, el acero para muelles, los adaptadores y los materiales de embalaje se revisan antes de entrar en producción. Los lotes de material se registran para que cualquier incidencia posterior pueda rastrearse hasta su origen." },
      { title: "2. Controles en proceso", text: "Los operarios de línea y los inspectores de QC toman muestras de las hojas durante el corte, el conformado y el ensamblaje. Se comprueban la compatibilidad, las dimensiones, la tensión del adaptador y el aspecto frente a la muestra y la especificación aprobadas." },
      { title: "3. Verificación de laboratorio", text: "Las muestras de cada lote de producción se someten a ensayos de laboratorio, incluido el ensayo de durabilidad de 1.5M ciclos de limpieza, niebla salina, ozono y flexibilidad a baja temperatura descritos en la tabla anterior." },
      { title: "4. Inspección final por muestreo", text: "Antes del embalaje, las hojas terminadas pasan una inspección visual y funcional por muestreo. Solo los lotes que la superan se liberan hacia nuestro almacén de 8.000㎡ en el puerto de Ningbo para su envío." },
      { title: "5. Evidencia previa al envío para compradores", text: "Admitimos la inspección por vídeo en directo a distancia y podemos facilitar vídeos grabados de la inspección a través de su representante comercial dedicado. Los compradores que organicen una auditoría de fábrica pueden revisar los mismos registros in situ." },
    ],
    traceTitle: "Trazabilidad y evidencia accesible para el comprador",
    traceIntro: "La trazabilidad permite asociar una hoja dentro de una caja con el lote de material y el lote de producción de los que procede. Los lotes entrantes se registran, los controles en proceso y de laboratorio se documentan por lote y las cajas de exportación se marcan para identificar el envío. Si surge una cuestión de calidad, nuestro equipo puede recorrer esa cadena y emitir una respuesta correctiva.",
    evidenceCards: [
      { title: "Inspección por vídeo a distancia", text: "Antes del envío, admitimos la inspección por vídeo en directo a distancia o facilitamos vídeos grabados de la inspección del producto a través de su representante comercial dedicado." },
      { title: "Auditorías de fábrica bienvenidas", text: "Los registros de calidad, los equipos de laboratorio y las líneas de producción pueden revisarse durante una auditoría programada en nuestra planta de Ningbo o Pingxiang." },
      { title: "Sistema de gestión certificado", text: "ISO 9001:2015 No. 134956 (NQA) rige los procedimientos documentados que respaldan las actividades de inspección, ensayo y trazabilidad." },
    ],
    relatedCertsText: "números de certificado ISO y CE",
    relatedFactoryText: "plantas de 20.000+㎡ y producción de 50.000 uds./día",
    faqTitle: "Preguntas frecuentes sobre calidad",
    faqIntro: "Respuestas directas a las preguntas sobre ensayos e inspección que formulan los compradores B2B.",
    faqs: [
      { q: "¿Para cuántos ciclos de limpieza se ensayan los limpiaparabrisas Lelion?", a: "Los limpiaparabrisas Lelion se ensayan hasta 1.500.000 ciclos de limpieza (1.5M) en nuestro ensayo de durabilidad. Esta cifra se publica en esta página como una declaración de producto verificable y cuenta con registros de ensayos de laboratorio que nuestra oficina de ventas de exportación puede facilitar previa solicitud." },
      { q: "¿Qué ensayos de calidad realiza Lelion además de la durabilidad?", a: "Además del ensayo de durabilidad de 1.500.000 ciclos de limpieza, nuestro laboratorio realiza ensayos de niebla salina para la resistencia a la corrosión, ensayos de ozono para el envejecimiento del caucho y ensayos de flexibilidad a baja temperatura para el rendimiento invernal. Estos ensayos se aplican a los lotes de producción como parte de nuestro proceso de control de calidad documentado." },
      { q: "¿Puedo inspeccionar la mercancía antes del envío?", a: "Sí. Antes del envío admitimos la inspección por vídeo en directo a distancia o facilitamos vídeos grabados de la inspección del producto a través de su representante comercial dedicado. Las auditorías de fábrica en nuestras plantas de Ningbo y Pingxiang también pueden organizarse a través de la oficina de exportación." },
      { q: "¿Está certificado el sistema de calidad de Lelion?", a: "Sí. La instalación de fabricación opera bajo un sistema de gestión de la calidad ISO 9001:2015, certificado No. 134956 emitido por NQA. Los limpiaparabrisas suministrados a Europa cuentan con la certificación CE No. M.2022.206.C79712 emitida por UDEM. Los números de certificado se publican en nuestra página de Certificaciones." },
      { q: "¿Cómo rastrea Lelion una incidencia de calidad hasta un lote de producción?", a: "Los lotes de material entrante se registran al entrar en producción, los controles en proceso y de laboratorio se documentan por lote y los productos terminados se empaquetan con marcado en la caja de exportación. Esta cadena permite a nuestro equipo de QA vincular una incidencia notificada con un lote de material, una fecha de producción y un envío, y responder con una acción correctiva." },
    ],
    ctaTitle: "Solicite los registros de ensayo antes de su próximo pedido",
    ctaText: "Condiciones estándar: MOQ 500 unidades (100 unidades por tamaño para la mayoría de los modelos), las existencias se envían en 7 días, los pedidos personalizados en 15–35 días, el utillaje nuevo en 30–50 días y pago T/T con 30% de anticipo y 70% antes del envío. Dos plantas de más de 20.000+㎡ producen 50.000 unidades al día y exportan a más de 60 países; el almacén de 8.000㎡ en el puerto de Ningbo agiliza los envíos. Fundada en 2007, con más de 18 años de experiencia en control de calidad. Fábrica: No.399 Minhe Road, Zhenhai District, Ningbo, Zhejiang 315202, China. bwb@bwwiper.com · +8618867886795.",
    ctaBtn: "Contacte con nuestra oficina de ventas de exportación",
    navLabels: { home: "Inicio", quality: "Calidad", factory: "Fábrica", certifications: "Certificaciones" },
  },

  ru: {
    heroTitle: "Контроль качества LELION: испытания на 1 500 000 циклов очистки и прослеживаемость партий",
    heroSub: "Каждая щётка LELION производится по документированному процессу контроля качества. Наша лаборатория испытывает щётки на 1 500 000 циклов очистки (1.5M) и дополнительно проводит испытания на соляной туман, озон и гибкость при низких температурах. Производственная система работает по ISO 9001:2015, сертификат No. 134956 выдан NQA; покупатели могут осмотреть товар в прямом видеоэфире перед отгрузкой.",
    heroBtn1: "Смотреть таблицу испытаний",
    heroBtn2: "Запросить доказательства проверки",
    kpi1Label: "Испытание на долговечность: циклы очистки",
    kpi2Label: "Документированные категории испытаний",
    kpi3Label: "Основана в 2007 · более 18 лет опыта в QC",
    kpi4Label: "Орган, выдавший ISO 9001:2015",
    testTableTitle: "Наша программа лабораторных испытаний",
    testTableIntro: "В таблице ниже приведены испытания, которым мы подвергаем щётки и резиновые ленты. Каждая позиция описана простым текстом с указанием цели, чтобы отделы закупок и контроля качества могли точно цитировать данные и запросить подтверждающие протоколы в нашем экспортном отделе.",
    thTest: "Испытание", thMethod: "Краткое описание метода", thCriterion: "Критерий / опубликованный результат", thProves: "Что подтверждает",
    testRows: [
      { test: "Испытание на долговечность очистки", method: "Непрерывный циклический тест очистки на серийных щётках", criterion: "1 500 000 циклов очистки (1.5M)", purpose: "Подтверждает долговременную эффективность очистки и износостойкость резиновой кромки и конструкции щётки." },
      { test: "Испытание в соляном тумане", method: "Металлические компоненты в контролируемой камере соляного тумана", criterion: "Проверка коррозионной стойкости", purpose: "Подтверждает, что каркасы, пружины и адаптеры устойчивы к коррозии в прибрежных условиях и на дорогах, посыпанных солью зимой." },
      { test: "Озонное испытание", method: "Резиновые ленты в атмосфере с повышенным содержанием озона", criterion: "Проверка стойкости к озону", purpose: "Проверяет, что резина не трескается и не разрушается преждевременно при атмосферном воздействии озона." },
      { test: "Испытание гибкости при низкой температуре", method: "Щётки выдерживаются и изгибаются при низких температурах", criterion: "Проверка гибкости при низкой температуре", purpose: "Гарантирует, что резиновая кромка остаётся гибкой и сохраняет контакт со стеклом в зимних условиях." },
    ],
    testFootnote: "Протоколы испытаний и образцы отчётов могут быть предоставлены нашим экспортным отделом продаж. Долговечность указана как 1 500 000 циклов очистки (1.5M) — проверенная цифра, используемая во всей нашей документации по продукции.",
    qcTitle: "Контроль качества от сырья до отгрузки",
    qcIntro: "Качество проверяется на каждом этапе, а не только в конце линии. Эти шаги применяются к товарам со склада, заказам под собственной маркой и заказам с новой оснасткой, производимым на двух наших заводах.",
    qcSteps: [
      { title: "1. Входной контроль материалов", text: "Натуральный каучук класса AAA, пружинная сталь, адаптеры и упаковочные материалы проверяются до поступления в производство. Лоты материалов регистрируются, чтобы любую последующую проблему можно было проследить до источника." },
      { title: "2. Межоперационный контроль", text: "Операторы линии и инспекторы ОТК отбирают образцы щёток при резке, формовании и сборке. Соответствие посадки, размеры, натяжение адаптера и внешний вид проверяются по утверждённому образцу и спецификации." },
      { title: "3. Лабораторная проверка", text: "Образцы из каждой производственной партии проходят лабораторные испытания, включая тест на долговечность 1.5M циклов очистки, соляной туман, озон и гибкость при низких температурах, описанные в таблице выше." },
      { title: "4. Финальный выборочный контроль", text: "Перед упаковкой готовые щётки проходят выборочный визуальный и функциональный контроль. Только прошедшие его партии направляются на наш склад 8 000 м² в порту Нинбо для отгрузки." },
      { title: "5. Доказательства для покупателя перед отгрузкой", text: "Мы поддерживаем онлайн-видеоинспекцию и можем предоставить записанные видео проверки через вашего персонального менеджера по продажам. Покупатели, организующие аудит завода, могут просмотреть те же протоколы на месте." },
    ],
    traceTitle: "Прослеживаемость и доказательства для покупателя",
    traceIntro: "Прослеживаемость означает, что вы можете связать щётку в коробке с лотом материала и производственной партией. Входящие лоты регистрируются, межоперационные и лабораторные проверки документируются по каждой партии, а экспортные коробки маркируются для идентификации отгрузки. При возникшем вопросе по качеству наша команда может пройти по этой цепочке и подготовить корректирующие меры.",
    evidenceCards: [
      { title: "Видеоинспекция по видеосвязи", text: "Перед отгрузкой мы поддерживаем онлайн-видеоинспекцию или предоставляем записанные видео проверки продукции через вашего персонального менеджера по продажам." },
      { title: "Аудит завода приветствуется", text: "Протоколы контроля качества, лабораторное оборудование и производственные линии можно осмотреть во время запланированного аудита на нашем заводе в Нинбо или Пинсяне." },
      { title: "Сертифицированная система менеджмента", text: "ISO 9001:2015 No. 134956 (NQA) определяет документированные процедуры инспекции, испытаний и прослеживаемости." },
    ],
    relatedCertsText: "номера сертификатов ISO и CE",
    relatedFactoryText: "заводы 20 000+ м² и выпуск 50 000 шт./день",
    faqTitle: "Частые вопросы о качестве",
    faqIntro: "Прямые ответы на вопросы об испытаниях и инспекции, которые задают покупатели B2B.",
    faqs: [
      { q: "На сколько циклов очистки испытываются щётки LELION?", a: "Щётки LELION испытываются на 1 500 000 циклов очистки (1.5M) в нашем тесте на долговечность. Эта цифра опубликована на странице как проверяемое утверждение о продукте и подтверждается протоколами лабораторных испытаний, которые экспортный отдел продаж предоставит по запросу." },
      { q: "Какие испытания качества проводит LELION кроме долговечности?", a: "Помимо испытания на долговечность 1 500 000 циклов очистки, наша лаборатория проводит испытание на соляной туман для коррозионной стойкости, озонное испытание для старения резины и испытание гибкости при низких температурах для зимней эксплуатации. Эти испытания применяются к производственным партиям в рамках нашего документированного процесса контроля качества." },
      { q: "Можно ли осмотреть товар перед отгрузкой?", a: "Да. Перед отгрузкой мы поддерживаем онлайн-видеоинспекцию или предоставляем записанные видео осмотра продукции через вашего персонального менеджера по продажам. Аудит заводов в Нинбо и Пинсяне также может быть организован через экспортный отдел." },
      { q: "Сертифицирована ли система качества LELION?", a: "Да. Производство работает по системе менеджмента качества ISO 9001:2015, сертификат No. 134956 выдан NQA. Щётки, поставляемые в Европу, имеют сертификат CE No. M.2022.206.C79712, выданный UDEM. Номера сертификатов опубликованы на странице «Сертификаты»." },
      { q: "Как LELION прослеживает проблему качества до производственной партии?", a: "Лоты входящих материалов регистрируются при поступлении в производство, межоперационные и лабораторные проверки документируются по каждой партии, а готовая продукция упаковывается с маркировкой экспортной коробки. Эта цепочка позволяет команде ОТК связать заявленную проблему с лотом материала, датой производства и отгрузкой и принять корректирующие меры." },
    ],
    ctaTitle: "Запросите протоколы испытаний перед следующим заказом",
    ctaText: "Стандартные условия: MOQ 500 шт. (100 шт. на размер для большинства моделей), товар со склада отгружается за 7 дней, индивидуальные заказы — за 15–35 дней, новая оснастка — за 30–50 дней, оплата T/T: 30% аванс и 70% перед отгрузкой. Два завода общей площадью более 20 000+ м² выпускают 50 000 шт./день и экспортируют в более чем 60 стран; склад 8 000 м² в порту Нинбо обеспечивает отгрузку. Компания основана в 2007 году и имеет более 18 лет опыта в контроле качества. Завод: No.399 Minhe Road, Zhenhai District, Ningbo, Zhejiang 315202, China. bwb@bwwiper.com · +8618867886795.",
    ctaBtn: "Связаться с нашим экспортным отделом продаж",
    navLabels: { home: "Главная", quality: "Качество", factory: "Завод", certifications: "Сертификаты" },
  },

  fr: {
    heroTitle: "Contrôle qualité Lelion : essais de 1 500 000 cycles d'essuyage et inspection des lots traçable",
    heroSub: "Chaque essuie-glace Lelion s'appuie sur un processus qualité documenté. Notre laboratoire soumet les lames à 1 500 000 cycles d'essuyage (1.5M) et réalise en plus des essais au brouillard salin, à l'ozone et de souplesse à basse température. Le système de fabrication est certifié ISO 9001:2015, certificat No. 134956 délivré par NQA, et les acheteurs peuvent inspecter les marchandises par vidéo en direct avant expédition.",
    heroBtn1: "Voir le tableau des essais",
    heroBtn2: "Demander les preuves d'inspection",
    kpi1Label: "Essai de durabilité en cycles d'essuyage",
    kpi2Label: "Catégories d'essais documentées",
    kpi3Label: "Fondée en 2007 · plus de 18 ans d'expérience en QC",
    kpi4Label: "Organisme émetteur de l'ISO 9001:2015",
    testTableTitle: "Notre programme d'essais en laboratoire",
    testTableIntro: "Le tableau ci-dessous présente les essais que nous réalisons sur les essuie-glaces et les bandes de caoutchouc. Chaque ligne est énoncée en texte brut avec son objectif, afin que les équipes achats et qualité puissent citer les données avec précision et demander les justificatifs à notre bureau commercial.",
    thTest: "Essai", thMethod: "Résumé de la méthode", thCriterion: "Critère / résultat publié", thProves: "Ce que cela prouve",
    testRows: [
      { test: "Essai de durabilité d'essuyage", method: "Essai continu de cycles d'essuyage sur des lames de production", criterion: "1 500 000 cycles d'essuyage (1.5M)", purpose: "Confirme la performance d'essuyage à long terme et la résistance à l'usure du lippe en caoutchouc et de la structure de la lame." },
      { test: "Essai au brouillard salin", method: "Composants métalliques exposés dans une chambre de brouillard salin contrôlée", criterion: "Contrôle de la résistance à la corrosion", purpose: "Vérifie que les armatures, ressorts et adaptateurs résistent à la corrosion en milieu côtier et sur les routes salées en hiver." },
      { test: "Essai à l'ozone", method: "Bandes de caoutchouc exposées à une atmosphère enrichie en ozone", criterion: "Contrôle de la résistance à l'ozone", purpose: "Vérifie que le caoutchouc ne se fissure ni ne se dégrade prématurément sous l'exposition atmosphérique à l'ozone." },
      { test: "Essai de souplesse à basse température", method: "Lames conditionnées et fléchies à basse température", criterion: "Contrôle de la souplesse à basse température", purpose: "Garantit que le lippe en caoutchouc reste souple et maintient le contact avec le pare-brise en conditions hivernales." },
    ],
    testFootnote: "Les procès-verbaux d'essai et les rapports types peuvent être fournis par notre bureau export. La durabilité est annoncée à 1 500 000 cycles d'essuyage (1.5M), chiffre vérifié utilisé dans toute notre documentation produit.",
    qcTitle: "Contrôle qualité de la matière première à l'expédition",
    qcIntro: "La qualité est vérifiée à chaque étape, et pas seulement en fin de ligne. Ces étapes s'appliquent aux articles en stock, aux commandes sous marque propre et aux commandes avec outillage sur mesure produites dans nos deux usines.",
    qcSteps: [
      { title: "1. Contrôle des matières entrantes", text: "Le caoutchouc naturel de qualité AAA, l'acier à ressort, les adaptateurs et les matériaux d'emballage sont contrôlés avant leur entrée en production. Les lots de matières sont enregistrés afin que tout problème ultérieur puisse être retracé jusqu'à son origine." },
      { title: "2. Contrôles en cours de production", text: "Les opérateurs de ligne et les contrôleurs qualité prélèvent des lames pendant la découpe, le formage et l'assemblage. L'ajustement, les dimensions, la tension de l'adaptateur et l'aspect sont vérifiés par rapport à l'échantillon et à la spécification approuvés." },
      { title: "3. Vérification en laboratoire", text: "Des échantillons de chaque lot de production sont soumis à des essais de laboratoire, dont l'essai de durabilité 1.5M cycles d'essuyage, le brouillard salin, l'ozone et la souplesse à basse température décrits dans le tableau ci-dessus." },
      { title: "4. Contrôle final par sondage", text: "Avant l'emballage, les lames finies font l'objet d'un contrôle visuel et fonctionnel par sondage. Seuls les lots conformes sont libérés vers notre entrepôt de 8 000 m² au port de Ningbo pour expédition." },
      { title: "5. Justificatifs avant expédition pour les acheteurs", text: "Nous prenons en charge l'inspection vidéo à distance en direct et pouvons fournir des vidéos d'inspection enregistrées via votre représentant commercial dédié. Les acheteurs organisant un audit d'usine peuvent consulter les mêmes dossiers sur place." },
    ],
    traceTitle: "Traçabilité et preuves accessibles à l'acheteur",
    traceIntro: "La traçabilité permet de relier une lame dans un carton au lot de matière et au lot de production dont elle provient. Les lots entrants sont enregistrés, les contrôles en cours et en laboratoire sont documentés par lot et les cartons d'export sont marqués pour l'identification de l'expédition. Si une question qualité survient, notre équipe peut remonter cette chaîne et apporter une réponse corrective.",
    evidenceCards: [
      { title: "Inspection vidéo à distance", text: "Avant l'expédition, nous prenons en charge l'inspection vidéo à distance en direct ou fournissons des vidéos enregistrées de l'inspection des produits via votre représentant commercial dédié." },
      { title: "Audits d'usine bienvenus", text: "Les dossiers qualité, les équipements de laboratoire et les lignes de production peuvent être examinés lors d'un audit planifié dans notre usine de Ningbo ou de Pingxiang." },
      { title: "Système de management certifié", text: "ISO 9001:2015 No. 134956 (NQA) régit les procédures documentées qui sous-tendent les activités d'inspection, d'essai et de traçabilité." },
    ],
    relatedCertsText: "numéros de certificat ISO et CE",
    relatedFactoryText: "usines de 20 000+ m² et production de 50 000 pièces/jour",
    faqTitle: "FAQ qualité",
    faqIntro: "Réponses directes aux questions sur les essais et l'inspection posées par les acheteurs B2B.",
    faqs: [
      { q: "Combien de cycles d'essuyage les essuie-glaces Lelion sont-ils testés ?", a: "Les essuie-glaces Lelion sont testés sur 1 500 000 cycles d'essuyage (1.5M) dans notre essai de durabilité. Ce chiffre est publié sur cette page comme allégation produit vérifiable et s'appuie sur des procès-verbaux d'essais en laboratoire que notre bureau commercial export peut fournir sur demande." },
      { q: "Quels essais qualité Lelion réalise-t-il en plus de la durabilité ?", a: "Outre l'essai de durabilité de 1 500 000 cycles d'essuyage, notre laboratoire réalise un essai au brouillard salin pour la résistance à la corrosion, un essai à l'ozone pour le vieillissement du caoutchouc et un essai de souplesse à basse température pour le rendement hivernal. Ces essais sont appliqués aux lots de production dans le cadre de notre processus de contrôle qualité documenté." },
      { q: "Puis-je inspecter les marchandises avant l'expédition ?", a: "Oui. Avant l'expédition, nous prenons en charge l'inspection vidéo à distance en direct ou fournissons des vidéos enregistrées de l'inspection des produits via votre représentant commercial dédié. Les audits d'usine dans nos usines de Ningbo et Pingxiang peuvent également être organisés via le bureau export." },
      { q: "Le système qualité de Lelion est-il certifié ?", a: "Oui. Le site de fabrication fonctionne selon un système de management de la qualité ISO 9001:2015, certificat No. 134956 délivré par NQA. Les essuie-glaces fournis en Europe portent la certification CE No. M.2022.206.C79712 délivrée par UDEM. Les numéros de certificat sont publiés sur notre page Certifications." },
      { q: "Comment Lelion retrace-t-il un problème qualité jusqu'à un lot de production ?", a: "Les lots de matières entrantes sont enregistrés à leur entrée en production, les contrôles en cours et en laboratoire sont documentés par lot et les produits finis sont emballés avec un marquage sur le carton d'export. Cette chaîne permet à notre équipe qualité de relier un problème signalé à un lot de matière, une date de production et une expédition, et d'apporter une réponse corrective." },
    ],
    ctaTitle: "Demandez les procès-verbaux d'essai avant votre prochaine commande",
    ctaText: "Conditions standard : MOQ 500 pièces (100 pièces par taille pour la plupart des modèles), les articles en stock partent en 7 jours, les commandes personnalisées en 15–35 jours, un nouvel outillage en 30–50 jours, paiement T/T avec 30 % d'acompte et 70 % avant expédition. Deux usines de plus de 20 000+ m² produisent 50 000 pièces/jour et exportent vers plus de 60 pays ; l'entrepôt de 8 000 m² au port de Ningbo facilite l'expédition. Fondée en 2007, l'entreprise dispose de plus de 18 ans d'expérience en contrôle qualité. Usine : No.399 Minhe Road, Zhenhai District, Ningbo, Zhejiang 315202, China. bwb@bwwiper.com · +8618867886795.",
    ctaBtn: "Contacter notre bureau commercial export",
    navLabels: { home: "Accueil", quality: "Qualité", factory: "Usine", certifications: "Certifications" },
  },

  de: {
    heroTitle: "LELION Qualitätskontrolle: 1.500.000 Wischzyklen-Prüfung und rückverfolgbare Chargeninspektion",
    heroSub: "Jedes LELION-Wischblatt stützt sich auf einen dokumentierten Qualitätsprozess. Unser Labor prüft die Blätter auf 1.500.000 Wischzyklen (1.5M) und führt zusätzlich Salznebel-, Ozon- und Tieftemperatur-Flexibilitätstests durch. Das Fertigungssystem ist nach ISO 9001:2015 zertifiziert, Zertifikat No. 134956 ausgestellt von NQA; Käufer können die Ware vor dem Versand per Live-Video prüfen.",
    heroBtn1: "Prüftabelle ansehen",
    heroBtn2: "Prüfnachweise anfordern",
    kpi1Label: "Dauerhaftigkeitsprüfung in Wischzyklen",
    kpi2Label: "Dokumentierte Prüfkategorien",
    kpi3Label: "Gegründet 2007 · über 18 Jahre QC-Erfahrung",
    kpi4Label: "Ausstellende Stelle von ISO 9001:2015",
    testTableTitle: "Unser Laborprüfprogramm",
    testTableIntro: "Die untenstehende Tabelle führt die Prüfungen auf, die wir an Wischblättern und Gummistreifen durchführen. Jeder Eintrag ist als Klartext mit seinem Zweck angegeben, damit Einkaufs- und Qualitätssicherungsteams die Daten präzise zitieren und die Nachweise in unserem Vertriebsbüro anfordern können.",
    thTest: "Prüfung", thMethod: "Kurzbeschreibung der Methode", thCriterion: "Kriterium / veröffentlichtes Ergebnis", thProves: "Was es beweist",
    testRows: [
      { test: "Dauerhaftigkeitsprüfung des Wischens", method: "Kontinuierlicher Wischzyklus-Test an Serienblättern", criterion: "1.500.000 Wischzyklen (1.5M)", purpose: "Bestätigt die langfristige Wischleistung und die Verschleißfestigkeit der Gummilippe und der Blattstruktur." },
      { test: "Salznebelprüfung", method: "Metallkomponenten in einer geregelten Salznebelkammer", criterion: "Prüfung der Korrosionsbeständigkeit", purpose: "Stellt sicher, dass Rahmen, Federn und Adapter in Küstenregionen und auf winterlichen Salzsalen korrosionsbeständig sind." },
      { test: "Ozonprüfung", method: "Gummistreifen in ozonangereicherter Atmosphäre", criterion: "Prüfung der Ozonbeständigkeit", purpose: "Prüft, ob der Gummi unter atmosphärischer Ozoneinwirkung nicht vorzeitig Risse bildet oder abbaut." },
      { test: "Tieftemperatur-Flexibilitätsprüfung", method: "Blätter bei niedrigen Temperaturen konditioniert und gebogen", criterion: "Prüfung der Tieftemperatur-Flexibilität", purpose: "Sicherstellt, dass die Gummilippe auch im Winter flexibel bleibt und den Kontakt zur Scheibe hält." },
    ],
    testFootnote: "Prüfprotokolle und Musterberichte können von unserem Export-Vertriebsbüro bereitgestellt werden. Die Dauerhaftigkeit wird mit 1.500.000 Wischzyklen (1.5M) angegeben – der verifizierten Zahl, die wir in unserer gesamten Produktdokumentation verwenden.",
    qcTitle: "Qualitätskontrolle vom Rohstoff bis zum Versand",
    qcIntro: "Qualität wird in jeder Phase geprüft, nicht nur am Ende der Linie. Diese Schritte gelten für Lagerartikel, Private-Label-Aufträge und Aufträge mit Sonderwerkzeug aus unseren beiden Werken.",
    qcSteps: [
      { title: "1. Eingangskontrolle der Materialien", text: "Naturkautschuk der Klasse AAA, Federstahl, Adapter und Verpackungsmaterialien werden vor Produktionsbeginn geprüft. Materialchargen werden erfasst, damit jedes spätere Problem bis zur Quelle zurückverfolgt werden kann." },
      { title: "2. Kontrollen im Prozess", text: "Linienbediener und QC-Inspektoren entnehmen beim Schneiden, Formen und Montieren Blattproben. Passgenauigkeit, Abmessungen, Adaptersspannung und Aussehen werden anhand der freigegebenen Muster und Spezifikation geprüft." },
      { title: "3. Laborverifizierung", text: "Proben aus jeder Produktionscharge werden Laborprüfungen unterzogen, darunter der 1.5M-Wischzyklen-Dauerhaftigkeitstest, Salznebel, Ozon und Tieftemperatur-Flexibilität, wie in der Tabelle oben beschrieben." },
      { title: "4. Abschließende Stichprobe", text: "Vor der Verpackung durchlaufen fertige Blätter eine stichprobenartige Sicht- und Funktionsprüfung. Nur freigegebene Chargen gelangen in unser 8.000 m² großes Lager im Hafen von Ningbo zum Versand." },
      { title: "5. Nachweise für Käufer vor dem Versand", text: "Wir unterstützen Live-Videoinspektionen aus der Ferne und können über Ihren eigenen Vertriebsmitarbeiter aufgezeichnete Prüfvideos bereitstellen. Käufer mit Werksaudit können dieselben Unterlagen vor Ort einsehen." },
    ],
    traceTitle: "Rückverfolgbarkeit und für Käufer zugängliche Nachweise",
    traceIntro: "Rückverfolgbarkeit bedeutet, dass Sie ein Blatt im Karton mit der Materialcharge und der Produktionscharge verknüpfen können. Eingangschargen werden erfasst, Prozess- und Laborprüfungen pro Charge dokumentiert und Exportkartons für die Sendungsidentifikation gekennzeichnet. Bei einer Qualitätsfrage kann unser Team diese Kette zurückverfolgen und eine Korrekturmaßnahme einleiten.",
    evidenceCards: [
      { title: "Videoinspektion aus der Ferne", text: "Vor dem Versand unterstützen wir Live-Videoinspektionen aus der Ferne oder stellen über Ihren Vertriebsmitarbeiter aufgezeichnete Produktprüfvideos bereit." },
      { title: "Werksaudits willkommen", text: "Qualitätsunterlagen, Laborausrüstung und Produktionslinien können bei einem geplanten Audit in unserem Werk in Ningbo oder Pingxiang besichtigt werden." },
      { title: "Zertifiziertes Managementsystem", text: "ISO 9001:2015 No. 134956 (NQA) regelt die dokumentierten Verfahren hinter Inspektion, Prüfung und Rückverfolgbarkeit." },
    ],
    relatedCertsText: "ISO- und CE-Zertifikatsnummern",
    relatedFactoryText: "Werke mit 20.000+ m² und 50.000 Stk./Tag Ausstoß",
    faqTitle: "Qualitäts-FAQ",
    faqIntro: "Direkte Antworten auf Prüf- und Inspektionsfragen, die B2B-Käufer stellen.",
    faqs: [
      { q: "Auf wie viele Wischzyklen werden LELION-Wischblätter geprüft?", a: "LELION-Wischblätter werden in unserem Dauerhaftigkeitstest auf 1.500.000 Wischzyklen (1.5M) geprüft. Diese Zahl wird auf dieser Seite als überprüfbare Produktangabe veröffentlicht und durch Laborprüfprotokolle gestützt, die unser Export-Vertriebsbüro auf Anfrage bereitstellt." },
      { q: "Welche Qualitätsprüfungen führt LELION neben der Dauerhaftigkeit durch?", a: "Zusätzlich zum 1.500.000-Wischzyklen-Dauerhaftigkeitstest führt unser Labor Salznebelprüfungen für Korrosionsbeständigkeit, Ozontests für Gummi-Alterung und Tieftemperatur-Flexibilitätstests für Wintereigenschaften durch. Diese Prüfungen werden im Rahmen unseres dokumentierten Qualitätskontrollprozesses auf Produktionschargen angewendet." },
      { q: "Kann ich die Ware vor dem Versand prüfen?", a: "Ja. Vor dem Versand unterstützen wir Live-Videoinspektionen aus der Ferne oder stellen über Ihren Vertriebsmitarbeiter aufgezeichnete Prüfvideos bereit. Werksaudits in unseren Werken Ningbo und Pingxiang können ebenfalls über das Exportbüro organisiert werden." },
      { q: "Ist das Qualitätssystem von LELION zertifiziert?", a: "Ja. Die Fertigungsstätte arbeitet nach dem Qualitätsmanagementsystem ISO 9001:2015, Zertifikat No. 134956 ausgestellt von NQA. Nach Europa gelieferte Wischblätter tragen die CE-Zertifizierung No. M.2022.206.C79712 ausgestellt von UDEM. Die Zertifikatsnummern sind auf unserer Zertifizierungsseite veröffentlicht." },
      { q: "Wie führt LELION ein Qualitätsproblem auf eine Produktionscharge zurück?", a: "Eingehende Materialchargen werden bei Produktionsbeginn erfasst, Prozess- und Laborprüfungen werden pro Charge dokumentiert und Fertigwaren mit Exportkarton-Kennzeichnung verpackt. Diese Kette erlaubt unserem QA-Team, ein gemeldetes Problem mit einer Materialcharge, einem Produktionsdatum und einer Sendung zu verknüpfen und korrektiv zu reagieren." },
    ],
    ctaTitle: "Fordern Sie Prüfprotokolle vor Ihrer nächsten Bestellung an",
    ctaText: "Standardbedingungen: MOQ 500 Stück (100 Stück pro Größe bei den meisten Modellen), Lagerartikel gehen in 7 Tagen raus, Sonderaufträge in 15–35 Tagen, neue Werkzeuge in 30–50 Tagen, T/T mit 30 % Anzahlung und 70 % vor Versand. Zwei Werke mit über 20.000+ m² produzieren 50.000 Stück/Tag und exportieren in über 60 Länder; das 8.000-m²-Lager im Hafen von Ningbo sichert den Versand. Gegründet 2007, mit über 18 Jahren QC-Erfahrung. Werk: No.399 Minhe Road, Zhenhai District, Ningbo, Zhejiang 315202, China. bwb@bwwiper.com · +8618867886795.",
    ctaBtn: "Kontaktieren Sie unser Export-Vertriebsbüro",
    navLabels: { home: "Startseite", quality: "Qualität", factory: "Fabrik", certifications: "Zertifizierungen" },
  },

  zh: {
    heroTitle: "LELION 质量控制：1,500,000 次刮擦测试与可追溯的批次检验",
    heroSub: "每一支 LELION 雨刮片都有完整记录的质量流程作为支撑。我们的实验室按 1,500,000 次刮擦（1.5M）标准测试雨刮片，并额外开展盐雾、臭氧与低温柔韧性测试。制造体系持有 NQA 颁发的 ISO 9001:2015 证书 No. 134956，买家可在发货前通过实时视频验货。",
    heroBtn1: "查看测试表",
    heroBtn2: "索取检验资料",
    kpi1Label: "刮擦循环耐久测试",
    kpi2Label: "记录在案的检测类别",
    kpi3Label: "成立于 2007 年 · 18+ 年质控经验",
    kpi4Label: "ISO 9001:2015 颁发机构",
    testTableTitle: "我们的实验室测试项目",
    testTableIntro: "下表列出我们对雨刮片和胶条执行的测试。每项均以纯文本说明其目的，便于采购与质量团队准确引用数据，并向我们的销售部门索取支持性记录。",
    thTest: "测试项目", thMethod: "方法概要", thCriterion: "公开标准 / 结果", thProves: "证明什么",
    testRows: [
      { test: "刮擦耐久测试", method: "对量产雨刮片进行连续刮擦循环测试", criterion: "1,500,000 次刮擦（1.5M）", purpose: "验证长期刮擦性能，以及橡胶胶条与雨刮片结构的耐磨性。" },
      { test: "盐雾测试", method: "金属部件置于受控盐雾试验箱中", criterion: "耐腐蚀性检验", purpose: "验证骨架、弹簧与接头在沿海环境及冬季撒盐道路上的抗腐蚀能力。" },
      { test: "臭氧测试", method: "胶条暴露于富臭氧环境中", criterion: "抗臭氧性检验", purpose: "检验橡胶在大气臭氧作用下不会过早开裂或劣化。" },
      { test: "低温柔韧性测试", method: "雨刮片在低温下调理并弯折", criterion: "低温柔韧性检验", purpose: "确保橡胶胶条在冬季条件下保持柔韧并维持与玻璃的贴合。" },
    ],
    testFootnote: "测试记录与样本报告可由我们的出口销售部门提供。耐久性按 1,500,000 次刮擦（1.5M）标注，这是我们全部产品文件中使用的经核实数据。",
    qcTitle: "从原材料到发货的质量控制",
    qcIntro: "质量在每个环节都接受检验，而非仅在线尾把关。以下步骤适用于我们两座厂区生产的现货、贴牌及开模订单。",
    qcSteps: [
      { title: "1. 来料检验", text: "AAA 级天然橡胶、弹簧钢、接头与包装材料在投入生产前均经过检查。物料批次均予以记录，以便后续任何问题都可追溯到来源。" },
      { title: "2. 过程检验", text: "产线操作员与 QC 检验员在裁切、成型与装配环节抽样检查雨刮片，依据批准的样品与规格核对适配性、尺寸、接头张力及外观。" },
      { title: "3. 实验室验证", text: "每批产品的样品均接受实验室测试，包括上表所述的 1.5M 次刮擦耐久测试、盐雾、臭氧与低温柔韧性测试。" },
      { title: "4. 最终抽检", text: "包装前，成品雨刮片接受外观与功能的随机抽检。仅合格批次放行至宁波港 8,000㎡ 仓库待发运。" },
      { title: "5. 面向买家的发货前证据", text: "我们支持实时远程视频验厂，并可通过您的专属销售代表提供录制的检验视频。安排到厂验厂的买家可在现场查阅同样记录。" },
    ],
    traceTitle: "可追溯性与买家可获取的证据",
    traceIntro: "可追溯性意味着您能把纸箱中的一支雨刮片与其背后的物料批次和生产批次对应起来。来料批次有记录，过程与实验室检验按批次归档，出口纸箱亦标注发运信息。一旦出现质量问题，我们的团队可沿此链条回溯并给出纠正措施。",
    evidenceCards: [
      { title: "远程视频验货", text: "发货前，我们支持实时远程视频验货，或通过您的专属销售代表提供录制的产品检验视频。" },
      { title: "欢迎到厂验厂", text: "在预约的宁波或萍乡厂区验厂中，可查阅质量记录、实验室设备与生产线。" },
      { title: "认证管理体系", text: "ISO 9001:2015 No. 134956（NQA）规范了检验、测试与可追溯活动背后的文件化程序。" },
    ],
    relatedCertsText: "ISO 与 CE 证书编号",
    relatedFactoryText: "20,000+㎡ 厂区与 50,000 支/天产能",
    faqTitle: "质量常见问题",
    faqIntro: "直接回答 B2B 买家关于测试与验货的常见问题。",
    faqs: [
      { q: "LELION 雨刮片经过多少次刮擦测试？", a: "LELION 雨刮片在我们的耐久测试中接受 1,500,000 次刮擦（1.5M）测试。该数字作为可验证的产品声明在本页公布，并由出口销售部门可按需提供的实验室测试记录支持。" },
      { q: "除耐久性外，LELION 还进行哪些质量测试？", a: "除 1,500,000 次刮擦耐久测试外，我们的实验室还进行盐雾测试以检验耐腐蚀性、臭氧测试以检验橡胶老化，以及低温柔韧性测试以检验冬季性能。这些测试作为文件化质量控制流程的一部分应用于生产批次。" },
      { q: "我可以在发货前验货吗？", a: "可以。发货前我们支持实时远程视频验货，或通过您的专属销售代表提供录制的验货视频。宁波与萍乡厂区的验厂也可通过出口部门安排。" },
      { q: "LELION 的质量体系是否经过认证？", a: "是的。制造工厂运行 ISO 9001:2015 质量管理体系，持有 NQA 颁发的证书 No. 134956。供应欧洲的雨刮片持有 UDEM 颁发的 CE 认证 No. M.2022.206.C79712。证书编号已公布在我们的认证页面。" },
      { q: "LELION 如何将质量问题追溯到生产批次？", a: "来料批次在进入生产时即记录，过程与实验室检验按批次归档，成品装箱时标注出口箱标识。这条链条使我们的 QA 团队能将反馈问题与物料批次、生产日期及发运关联，并及时采取纠正措施。" },
    ],
    ctaTitle: "下一单前请先索取测试记录",
    ctaText: "标准条款：MOQ 500 支（多数型号每种尺寸 100 支），现货 7 天发货，定制订单 15–35 天，新开模 30–50 天，T/T 30% 定金 + 70% 发货前付清。两座厂区合计 20,000+㎡，日产 50,000 支，出口 60+ 个国家；宁波港 8,000㎡ 仓库保障发运。公司成立于 2007 年，拥有 18+ 年质控经验。工厂地址：No.399 Minhe Road, Zhenhai District, Ningbo, Zhejiang 315202, China。bwb@bwwiper.com · +8618867886795。",
    ctaBtn: "联系我们的出口销售部门",
    navLabels: { home: "首页", quality: "质量控制", factory: "工厂实力", certifications: "认证资质" },
  },
};
