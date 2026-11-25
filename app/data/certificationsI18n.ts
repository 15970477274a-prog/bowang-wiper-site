// Shared six-language copy for app/[lang]/certifications/page.tsx.
// Certificate names, numbers, issuing bodies, standard titles and every
// company figure (2007, 18+ years, 60+ countries, 1,500,000 cycles, address,
// email, phone) are identical across locales. Only surrounding prose changes.

export type CertificationsLang = "en" | "es" | "ru" | "fr" | "de" | "zh";

export interface CertificationsCopy {
  heroTitle: string;
  heroSub: string;
  heroBtn1: string;
  heroBtn2: string;
  kpi1Label: string;
  kpi2Label: string;
  kpi3Label: string;
  kpi4Label: string;
  certTableTitle: string;
  certTableIntro: string;
  thCertificate: string;
  thNumber: string;
  thIssuer: string;
  thScope: string;
  thVerify: string;
  certificates: { name: string; number: string; issuer: string; scope: string; verification: string }[];
  certNote: string;
  buyersTitle: string;
  buyersIntro: string;
  benefitCards: { title: string; text: string }[];
  relatedTitle: string;
  relatedFactory: string;
  relatedQuality: string;
  faqTitle: string;
  faqIntro: string;
  faqs: { q: string; a: string }[];
  ctaTitle: string;
  ctaText: string;
  ctaBtn: string;
  navLabels: { home: string; certifications: string; quality: string; factory: string };
}

export const certificationsI18n: Record<CertificationsLang, CertificationsCopy> = {
  en: {
    heroTitle: "Lelion Certifications: ISO 9001:2015 No. 134956 and CE No. M.2022.206.C79712",
    heroSub: "Ningbo Zhenhai Bowang Autoparts Co., Ltd. is an ISO 9001:2015 certified wiper blade manufacturer (certificate No. 134956, issued by NQA), and its wiper blades carry CE certification No. M.2022.206.C79712 issued by UDEM. Both certificate numbers are published below so procurement and QA teams can verify them before placing an order.",
    heroBtn1: "View the certificate table",
    heroBtn2: "Request certificate copies",
    kpi1Label: "Founded · 18+ years of experience",
    kpi2Label: "ISO 9001:2015 issuing body",
    kpi3Label: "CE issuing body",
    kpi4Label: "Export countries",
    certTableTitle: "Certificate register: names, numbers and issuing bodies",
    certTableIntro: "The table below lists every certification and reference standard we publish. Certificate numbers and issuing bodies are stated in full rather than hidden in images, so they can be read by buyers, QA auditors and AI answer engines. For traceable copies, contact our export sales office with the number you wish to check.",
    thCertificate: "Certificate / standard",
    thNumber: "Number",
    thIssuer: "Issuing body / source",
    thScope: "Scope of application",
    thVerify: "How to verify",
    certificates: [
      { name: "ISO 9001:2015", number: "No. 134956", issuer: "NQA", scope: "Company-wide quality management system covering the design, manufacture and export of windshield wiper blades and related components.", verification: "The certificate number and issuing body are published here for buyers and auditors. Copies of the certificate are available from our export sales office on request and can be cross-checked with NQA using the certificate number." },
      { name: "CE Certification", number: "No. M.2022.206.C79712", issuer: "UDEM", scope: "CE conformity of Lelion wiper blades supplied to the European market.", verification: "The CE certificate number and notified body appear in the table above so buyers can trace the document. Ask our sales team for the certificate scan and verify the number directly with UDEM before placing an order." },
      { name: "EN ISO 12100:2010", number: "Reference standard", issuer: "Applied in product safety assessment", scope: "Safety of machinery principles applied to wiper blade design and risk assessment (EN ISO 12100:2010, Safety of machinery — General principles for design — Risk assessment and risk reduction).", verification: "This standard is listed as a technical reference used in our product safety assessment. It is not a product certificate number; buyers may request the related technical documentation from our export team." },
    ],
    certNote: "Note: EN ISO 12100:2010 is a technical reference standard applied in product safety assessment, not a product certificate with its own serial number. All figures on this page are published as verifiable company facts; certificate scans and related technical documentation are supplied by our sales office on request.",
    buyersTitle: "Why these certificates matter to your purchase",
    buyersIntro: "A certificate number is only useful when it can be checked. We publish ours in plain text so your procurement team can confirm the issuing body, request the original document and record the number in your supplier file. Founded in 2007, our company has 18+ years of manufacturing experience, 128+ employees, 5+ R&D staff and exports to 60+ countries — the management system behind these certificates is applied across two plants totaling 20,000+㎡ and a warehouse at Ningbo Port.",
    benefitCards: [
      { title: "Audit-ready documentation", text: "ISO 9001:2015 No. 134956 (NQA) evidences a documented quality management system. Buyers can request the certificate scan and audit reports through our export office." },
      { title: "European market conformity", text: "CE certificate No. M.2022.206.C79712 (UDEM) supports compliance documentation for wiper blades supplied to European distributors and retailers." },
      { title: "Safety by design", text: "EN ISO 12100:2010 risk-assessment principles inform product design and safety review, alongside laboratory tests including 1,500,000 cycles of wipe durability, salt spray, ozone and low-temperature flexibility testing." },
    ],
    relatedTitle: "Related evidence pages",
    relatedFactory: "two plants, 20,000+㎡, 50,000 pcs/day",
    relatedQuality: "1,500,000 cycles of wipe durability testing",
    faqTitle: "Certification FAQ",
    faqIntro: "Direct answers to the questions procurement and QA teams ask before sourcing wiper blades.",
    faqs: [
      { q: "Is Lelion an ISO 9001:2015 certified wiper blade manufacturer?", a: "Yes. Ningbo Zhenhai Bowang Autoparts Co., Ltd. operates a quality management system certified to ISO 9001:2015 under certificate No. 134956, issued by NQA. The certificate covers the design, manufacture and export of our wiper blades and related components." },
      { q: "What is Lelion's CE certificate number and who issued it?", a: "Lelion's CE certificate number is No. M.2022.206.C79712 and it was issued by UDEM. It covers the conformity of our wiper blades supplied to the European market. The number is published above so buyers can verify the document with the issuing body." },
      { q: "Can I see copies of the certificates before placing an order?", a: "Yes. Send your request through the contact page or email bwb@bwwiper.com. Our export sales office will provide certificate scans, and we can arrange a video call to show the originals and walk through the certificate numbers with your QA team." },
      { q: "Does Lelion apply EN ISO 12100:2010 to its products?", a: "Yes. EN ISO 12100:2010 (Safety of machinery — General principles for design — Risk assessment and risk reduction) is a reference standard in our product safety assessment. It is a standard reference, not a separate certificate number; the related technical documentation is available on request." },
      { q: "How does Lelion's certification relate to product testing?", a: "ISO 9001:2015 governs the management system behind every production batch. Product-level evidence comes from our in-house laboratory, including a wipe durability test of 1,500,000 cycles, salt spray testing, ozone testing and low-temperature flexibility testing. See our Quality page for the full test list." },
    ],
    ctaTitle: "Verify our certifications with your own team",
    ctaText: "Standard terms: MOQ 500 pcs (100 pcs per size), stock ships in 7 days, custom orders in 15–35 days, new tooling in 30–50 days, T/T 30% deposit + 70% before shipment. Factory address: No.399 Minhe Road, Zhenhai District, Ningbo, Zhejiang 315202, China. Tel: +8618867886795.",
    ctaBtn: "Contact our export sales office",
    navLabels: { home: "Home", certifications: "Certifications", quality: "Quality", factory: "Factory" },
  },

  es: {
    heroTitle: "Certificaciones de Lelion: ISO 9001:2015 No. 134956 y CE No. M.2022.206.C79712",
    heroSub: "Ningbo Zhenhai Bowang Autoparts Co., Ltd. es un fabricante de limpiaparabrisas certificado según ISO 9001:2015 (certificado No. 134956, emitido por NQA), y sus limpiaparabrisas cuentan con la certificación CE No. M.2022.206.C79712 emitida por UDEM. Ambos números se publican a continuación para que los equipos de compras y de garantía de calidad puedan verificarlos antes de realizar un pedido.",
    heroBtn1: "Ver la tabla de certificados",
    heroBtn2: "Solicitar copias de los certificados",
    kpi1Label: "Fundada en 2007 · 18+ años de experiencia",
    kpi2Label: "Organismo emisor de ISO 9001:2015",
    kpi3Label: "Organismo emisor de CE",
    kpi4Label: "Países de exportación",
    certTableTitle: "Registro de certificados: nombres, números y organismos emisores",
    certTableIntro: "La tabla siguiente recoge todas las certificaciones y normas de referencia que publicamos. Los números de certificado y los organismos emisores se indican íntegramente, en lugar de quedar ocultos en imágenes, para que puedan leerlos los compradores, los auditores de calidad y los motores de respuesta con IA. Para obtener copias verificables, contacte con nuestra oficina de ventas de exportación e indique el número que desea comprobar.",
    thCertificate: "Certificado / norma",
    thNumber: "Número",
    thIssuer: "Organismo emisor / fuente",
    thScope: "Ámbito de aplicación",
    thVerify: "Cómo verificarlo",
    certificates: [
      { name: "ISO 9001:2015", number: "No. 134956", issuer: "NQA", scope: "Sistema de gestión de calidad de toda la empresa, que abarca el diseño, la fabricación y la exportación de limpiaparabrisas y componentes relacionados.", verification: "El número de certificado y el organismo emisor se publican aquí para compradores y auditores. Las copias del certificado están disponibles en nuestra oficina de ventas de exportación previa solicitud y pueden cotejarse con NQA utilizando el número de certificado." },
      { name: "CE Certification", number: "No. M.2022.206.C79712", issuer: "UDEM", scope: "Conformidad CE de los limpiaparabrisas Lelion suministrados al mercado europeo.", verification: "El número de certificado CE y el organismo notificado aparecen en la tabla anterior para que los compradores puedan localizar el documento. Solicite a nuestro equipo de ventas la copia del certificado y verifique el número directamente con UDEM antes de realizar un pedido." },
      { name: "EN ISO 12100:2010", number: "Norma de referencia", issuer: "Aplicada en la evaluación de seguridad del producto", scope: "Principios de seguridad de maquinaria aplicados al diseño de limpiaparabrisas y a la evaluación de riesgos (EN ISO 12100:2010, Safety of machinery — General principles for design — Risk assessment and risk reduction).", verification: "Esta norma aparece como referencia técnica utilizada en nuestra evaluación de seguridad del producto. No es un número de certificado de producto; los compradores pueden pedir la documentación técnica correspondiente a nuestro equipo de exportación." },
    ],
    certNote: "Nota: EN ISO 12100:2010 es una norma técnica de referencia utilizada en la evaluación de seguridad del producto, no un certificado de producto con número de serie propio. Todas las cifras de esta página se publican como datos verificables de la empresa; las copias de los certificados y la documentación técnica relacionada se entregan previa solicitud a través de nuestro departamento de ventas.",
    buyersTitle: "Por qué importan estos certificados para su compra",
    buyersIntro: "Un número de certificado solo resulta útil si se puede verificar. Publicamos los nuestros en texto plano para que su equipo de compras pueda confirmar el organismo emisor, pedir el documento original y anotar el número en su ficha de proveedor. Fundada en 2007, nuestra empresa suma 18+ años de experiencia (18+ years), cuenta con más de 128 empleados y más de 5 personas en I+D, y exporta a 60+ países (60+ countries); el sistema de gestión que respalda estos certificados se aplica en dos plantas de más de 20.000㎡ en total y en un almacén en el puerto de Ningbo.",
    benefitCards: [
      { title: "Documentación lista para auditorías", text: "ISO 9001:2015 No. 134956 (NQA) acredita un sistema de gestión de calidad documentado. Los compradores pueden pedir la copia del certificado y los informes de auditoría a través de nuestra oficina de exportación." },
      { title: "Conformidad con el mercado europeo", text: "El certificado CE No. M.2022.206.C79712 (UDEM) respalda la documentación de cumplimiento de los limpiaparabrisas destinados a distribuidores y minoristas europeos." },
      { title: "Seguridad desde el diseño", text: "Los principios de evaluación de riesgos de EN ISO 12100:2010 orientan el diseño y la revisión de seguridad del producto, junto con ensayos de laboratorio, incluido un ensayo de durabilidad de limpieza de 1,500,000 cycles, niebla salina, ozono y flexibilidad a baja temperatura." },
    ],
    relatedTitle: "Páginas de evidencia relacionadas",
    relatedFactory: "dos plantas, 20.000+㎡, 50.000 unidades/día",
    relatedQuality: "ensayos de durabilidad de 1,500,000 cycles",
    faqTitle: "Preguntas frecuentes sobre certificaciones",
    faqIntro: "Respuestas directas a las preguntas que hacen los equipos de compras y garantía de calidad antes de abastecerse de limpiaparabrisas.",
    faqs: [
      { q: "¿Es Lelion un fabricante de limpiaparabrisas certificado según ISO 9001:2015?", a: "Sí. Ningbo Zhenhai Bowang Autoparts Co., Ltd. opera un sistema de gestión de calidad certificado según ISO 9001:2015 con el certificado No. 134956, emitido por NQA. El certificado cubre el diseño, la fabricación y la exportación de nuestros limpiaparabrisas y componentes relacionados." },
      { q: "¿Cuál es el número de certificado CE de Lelion y quién lo emitió?", a: "El número de certificado CE de Lelion es No. M.2022.206.C79712 y fue emitido por UDEM. Cubre la conformidad de nuestros limpiaparabrisas suministrados al mercado europeo. El número se publica arriba para que los compradores puedan verificar el documento con el organismo emisor." },
      { q: "¿Puedo ver copias de los certificados antes de hacer un pedido?", a: "Sí. Envíe su solicitud a través de la página de contacto o al correo bwb@bwwiper.com. Nuestra oficina de ventas de exportación facilitará las copias y podemos organizar una videollamada para mostrar los originales y revisar los números con su equipo de garantía de calidad." },
      { q: "¿Aplica Lelion la norma EN ISO 12100:2010 a sus productos?", a: "Sí. EN ISO 12100:2010 (Safety of machinery — General principles for design — Risk assessment and risk reduction) es una norma de referencia en nuestra evaluación de seguridad del producto. Se trata de una referencia normativa, no de un número de certificado independiente; la documentación técnica correspondiente se facilita previa solicitud." },
      { q: "¿Cómo se relacionan las certificaciones de Lelion con las pruebas de producto?", a: "ISO 9001:2015 rige el sistema de gestión detrás de cada lote de producción. La evidencia a nivel de producto procede de nuestro laboratorio interno, que incluye un ensayo de durabilidad de limpieza de 1,500,000 cycles, ensayos de niebla salina, ozono y flexibilidad a baja temperatura. Consulte nuestra página de Calidad para ver la lista completa de ensayos." },
    ],
    ctaTitle: "Verifique nuestras certificaciones con su propio equipo",
    ctaText: "Condiciones estándar: MOQ 500 unidades (100 por tamaño), existencias en 7 días, pedidos personalizados en 15–35 días, nuevo utillaje en 30–50 días, T/T 30% de anticipo + 70% antes del envío. Dirección de fábrica: No.399 Minhe Road, Zhenhai District, Ningbo, Zhejiang 315202, China. Teléfono: +8618867886795.",
    ctaBtn: "Contacte con nuestra oficina de ventas de exportación",
    navLabels: { home: "Inicio", certifications: "Certificaciones", quality: "Calidad", factory: "Fábrica" },
  },

  ru: {
    heroTitle: "Сертификаты LELION: ISO 9001:2015 No. 134956 и CE No. M.2022.206.C79712",
    heroSub: "Компания Ningbo Zhenhai Bowang Autoparts Co., Ltd. — производитель щёток стеклоочистителей с сертификатом ISO 9001:2015 (No. 134956, выдан NQA), а её щётки имеют сертификат CE No. M.2022.206.C79712, выданный UDEM. Оба номера опубликованы ниже, чтобы отделы закупок и контроля качества могли проверить их перед размещением заказа.",
    heroBtn1: "Открыть таблицу сертификатов",
    heroBtn2: "Запросить копии сертификатов",
    kpi1Label: "Основана в 2007 году · опыт более 18 лет",
    kpi2Label: "Орган, выдавший ISO 9001:2015",
    kpi3Label: "Орган, выдавший CE",
    kpi4Label: "Страны экспорта",
    certTableTitle: "Реестр сертификатов: названия, номера и органы выдачи",
    certTableIntro: "В таблице ниже приведены все публикуемые нами сертификаты и нормативные стандарты. Номера сертификатов и органы выдачи указаны полностью, а не скрыты в изображениях, чтобы их могли прочитать покупатели, аудиторы по качеству и системы ответов с ИИ. Для получения заверенных копий обратитесь в наш экспортный отдел, указав номер, который нужно проверить.",
    thCertificate: "Сертификат / стандарт",
    thNumber: "Номер",
    thIssuer: "Орган выдачи / источник",
    thScope: "Область применения",
    thVerify: "Как проверить",
    certificates: [
      { name: "ISO 9001:2015", number: "No. 134956", issuer: "NQA", scope: "Общекорпоративная система менеджмента качества, охватывающая проектирование, производство и экспорт щёток стеклоочистителей и сопутствующих компонентов.", verification: "Номер сертификата и орган выдачи публикуются здесь для покупателей и аудиторов. Копии сертификата предоставляются нашим экспортным отделом по запросу и могут быть сверены с NQA по номеру сертификата." },
      { name: "CE Certification", number: "No. M.2022.206.C79712", issuer: "UDEM", scope: "Соответствие CE щёток LELION, поставляемых на европейский рынок.", verification: "Номер сертификата CE и уведомлённый орган указаны в таблице выше, чтобы покупатель мог найти документ. Запросите скан сертификата у нашего отдела продаж и проверьте номер напрямую в UDEM перед размещением заказа." },
      { name: "EN ISO 12100:2010", number: "Нормативный стандарт", issuer: "Применяется при оценке безопасности продукции", scope: "Принципы безопасности машин, применённые к проектированию щёток и оценке рисков (EN ISO 12100:2010, Safety of machinery — General principles for design — Risk assessment and risk reduction).", verification: "Этот стандарт указан как техническая ссылка, используемая при оценке безопасности нашей продукции. Это не номер сертификата на продукцию; покупатели могут запросить соответствующую техническую документацию у нашей экспортной команды." },
    ],
    certNote: "Примечание: EN ISO 12100:2010 — это технический нормативный стандарт, применяемый при оценке безопасности продукции, а не сертификат на продукцию с собственным серийным номером. Все цифры на странице опубликованы как проверенные факты компании; копии сертификатов и соответствующая техническая документация предоставляются нашим отделом продаж по запросу.",
    buyersTitle: "Почему эти сертификаты важны для вашей закупки",
    buyersIntro: "Номер сертификата полезен только тогда, когда его можно проверить. Мы публикуем свои номера в виде обычного текста, чтобы ваш отдел закупок мог подтвердить орган выдачи, запросить оригинал документа и занести номер в досье поставщика. Компания основана в 2007 году, имеет 18+ лет опыта (18+ years), более 128 сотрудников и более 5 специалистов в НИОКР и экспортирует в 60+ стран (60+ countries); система менеджмента, лежащая в основе этих сертификатов, применяется на двух заводах общей площадью более 20 000 м² и на складе в порту Нинбо.",
    benefitCards: [
      { title: "Документация, готовая к аудиту", text: "ISO 9001:2015 No. 134956 (NQA) подтверждает документированную систему менеджмента качества. Покупатели могут запросить скан сертификата и отчёты об аудитах через наш экспортный отдел." },
      { title: "Соответствие европейскому рынку", text: "Сертификат CE No. M.2022.206.C79712 (UDEM) подтверждает документацию по соответствию щёток, поставляемых европейским дистрибьюторам и розничным продавцам." },
      { title: "Безопасность на этапе проектирования", text: "Принципы оценки рисков EN ISO 12100:2010 лежат в основе проектирования и проверки безопасности продукции, наряду с лабораторными испытаниями, включая испытание на долговечность очистки 1,500,000 cycles, соляной туман, озон и гибкость при низких температурах." },
    ],
    relatedTitle: "Связанные страницы с доказательствами",
    relatedFactory: "два завода, 20 000+ м², 50 000 шт./день",
    relatedQuality: "испытания долговечности 1,500,000 cycles",
    faqTitle: "Частые вопросы о сертификации",
    faqIntro: "Прямые ответы на вопросы, которые задают отделы закупок и контроля качества перед выбором поставщика щёток стеклоочистителей.",
    faqs: [
      { q: "Имеет ли LELION сертификат ISO 9001:2015 на производство щёток?", a: "Да. Компания Ningbo Zhenhai Bowang Autoparts Co., Ltd. применяет систему менеджмента качества, сертифицированную по ISO 9001:2015, сертификат No. 134956, выданный NQA. Сертификат охватывает проектирование, производство и экспорт наших щёток и сопутствующих компонентов." },
      { q: "Каков номер сертификата CE LELION и кто его выдал?", a: "Номер сертификата CE LELION — No. M.2022.206.C79712, он выдан UDEM. Сертификат подтверждает соответствие щёток, поставляемых на европейский рынок. Номер опубликован выше, чтобы покупатели могли проверить документ у органа выдачи." },
      { q: "Можно ли посмотреть копии сертификатов до размещения заказа?", a: "Да. Отправьте запрос через страницу контактов или на адрес bwb@bwwiper.com. Наш экспортный отдел предоставит сканы сертификатов, и мы можем организовать видеозвонок, чтобы показать оригиналы и пройти по номерам сертификатов с вашей командой контроля качества." },
      { q: "Применяет ли LELION стандарт EN ISO 12100:2010 к своей продукции?", a: "Да. EN ISO 12100:2010 (Safety of machinery — General principles for design — Risk assessment and risk reduction) — нормативный стандарт, используемый при оценке безопасности нашей продукции. Это ссылка на стандарт, а не отдельный номер сертификата; соответствующая техническая документация предоставляется по запросу." },
      { q: "Как сертификация LELION связана с испытаниями продукции?", a: "ISO 9001:2015 регулирует систему менеджмента каждой производственной партии. Доказательства на уровне продукции предоставляет наша лаборатория, включая испытание на долговечность очистки 1,500,000 cycles, соляной туман, озон и гибкость при низких температурах. Полный перечень испытаний — на нашей странице «Качество»." },
    ],
    ctaTitle: "Проверьте наши сертификаты со своей командой",
    ctaText: "Стандартные условия: минимальный заказ 500 шт. (100 шт. на размер), товары со склада — 7 дней, индивидуальные заказы — 15–35 дней, новая оснастка — 30–50 дней, T/T: 30% аванс и 70% перед отгрузкой. Адрес завода: No.399 Minhe Road, Zhenhai District, Ningbo, Zhejiang 315202, China. Телефон: +8618867886795.",
    ctaBtn: "Связаться с нашим экспортным отделом продаж",
    navLabels: { home: "Главная", certifications: "Сертификаты", quality: "Качество", factory: "Завод" },
  },

  fr: {
    heroTitle: "Certifications Lelion : ISO 9001:2015 No. 134956 et CE No. M.2022.206.C79712",
    heroSub: "Ningbo Zhenhai Bowang Autoparts Co., Ltd. est un fabricant d'essuie-glaces certifié ISO 9001:2015 (certificat No. 134956, délivré par NQA) et ses essuie-glaces portent la certification CE No. M.2022.206.C79712 délivrée par UDEM. Les deux numéros de certificat sont publiés ci-dessous afin que les équipes achats et qualité puissent les vérifier avant de passer commande.",
    heroBtn1: "Voir le tableau des certificats",
    heroBtn2: "Demander des copies des certificats",
    kpi1Label: "Fondée en 2007 · 18+ ans d'expérience",
    kpi2Label: "Organisme émetteur de l'ISO 9001:2015",
    kpi3Label: "Organisme émetteur de la CE",
    kpi4Label: "Pays d'exportation",
    certTableTitle: "Registre des certificats : noms, numéros et organismes émetteurs",
    certTableIntro: "Le tableau ci-dessous répertorie toutes les certifications et normes de référence que nous publions. Les numéros de certificat et les organismes émetteurs sont indiqués en toutes lettres plutôt que dissimulés dans des images, afin d'être lisibles par les acheteurs, les auditeurs qualité et les moteurs de réponse IA. Pour obtenir des copies vérifiables, contactez notre bureau commercial export en indiquant le numéro à contrôler.",
    thCertificate: "Certificat / norme",
    thNumber: "Numéro",
    thIssuer: "Organisme émetteur / source",
    thScope: "Domaine d'application",
    thVerify: "Comment vérifier",
    certificates: [
      { name: "ISO 9001:2015", number: "No. 134956", issuer: "NQA", scope: "Système de management de la qualité à l'échelle de l'entreprise, couvrant la conception, la fabrication et l'exportation des essuie-glaces et composants associés.", verification: "Le numéro de certificat et l'organisme émetteur sont publiés ici à l'intention des acheteurs et des auditeurs. Les copies du certificat sont disponibles auprès de notre bureau commercial export sur demande et peuvent être recoupées auprès de NQA grâce au numéro de certificat." },
      { name: "CE Certification", number: "No. M.2022.206.C79712", issuer: "UDEM", scope: "Conformité CE des essuie-glaces Lelion fournis au marché européen.", verification: "Le numéro de certificat CE et l'organisme notifié figurent dans le tableau ci-dessus afin que les acheteurs puissent retrouver le document. Demandez le scan du certificat à notre équipe commerciale et vérifiez le numéro directement auprès d'UDEM avant de passer commande." },
      { name: "EN ISO 12100:2010", number: "Norme de référence", issuer: "Appliquée dans l'évaluation de la sécurité des produits", scope: "Principes de sécurité des machines appliqués à la conception des essuie-glaces et à l'analyse des risques (EN ISO 12100:2010, Safety of machinery — General principles for design — Risk assessment and risk reduction).", verification: "Cette norme est citée comme référence technique utilisée dans notre évaluation de la sécurité des produits. Ce n'est pas un numéro de certificat produit ; les acheteurs peuvent demander la documentation technique associée à notre équipe export." },
    ],
    certNote: "Remarque : EN ISO 12100:2010 est une norme technique de référence utilisée dans l'évaluation de la sécurité des produits, et non un certificat produit doté de son propre numéro de série. Toutes les valeurs de cette page sont publiées comme des faits vérifiables de l'entreprise ; les copies des certificats et la documentation technique correspondante sont fournies par notre bureau commercial sur demande.",
    buyersTitle: "Pourquoi ces certificats comptent pour votre achat",
    buyersIntro: "Un numéro de certificat n'est utile que s'il peut être vérifié. Nous publions les nôtres en texte brut afin que votre service achats puisse confirmer l'organisme émetteur, demander le document original et enregistrer le numéro dans votre dossier fournisseur. Fondée en 2007, notre entreprise totalise 18+ ans d'expérience (18+ years), plus de 128 salariés et plus de 5 personnes en R&D, et exporte vers 60+ pays (60+ countries) : le système de management à l'origine de ces certificats s'applique à deux usines de plus de 20 000 m² au total et à un entrepôt au port de Ningbo.",
    benefitCards: [
      { title: "Documentation prête pour un audit", text: "ISO 9001:2015 No. 134956 (NQA) atteste d'un système de management de la qualité documenté. Les acheteurs peuvent demander le scan du certificat et les rapports d'audit via notre bureau export." },
      { title: "Conformité au marché européen", text: "Le certificat CE No. M.2022.206.C79712 (UDEM) étaye les documents de conformité des essuie-glaces fournis aux distributeurs et détaillants européens." },
      { title: "La sécurité dès la conception", text: "Les principes d'analyse des risques de EN ISO 12100:2010 guident la conception et la revue de sécurité des produits, aux côtés d'essais en laboratoire dont 1,500,000 cycles de durabilité d'essuyage, le brouillard salin, l'ozone et la souplesse à basse température." },
    ],
    relatedTitle: "Pages de preuves connexes",
    relatedFactory: "deux usines, 20 000+ m², 50 000 pièces/jour",
    relatedQuality: "essais de durabilité sur 1,500,000 cycles",
    faqTitle: "FAQ certifications",
    faqIntro: "Réponses directes aux questions posées par les services achats et qualité avant de s'approvisionner en essuie-glaces.",
    faqs: [
      { q: "Lelion est-il un fabricant d'essuie-glaces certifié ISO 9001:2015 ?", a: "Oui. Ningbo Zhenhai Bowang Autoparts Co., Ltd. exploite un système de management de la qualité certifié ISO 9001:2015 sous le numéro No. 134956, délivré par NQA. Le certificat couvre la conception, la fabrication et l'exportation de nos essuie-glaces et composants associés." },
      { q: "Quel est le numéro de certificat CE de Lelion et qui l'a délivré ?", a: "Le numéro de certificat CE de Lelion est No. M.2022.206.C79712 et il a été délivré par UDEM. Il couvre la conformité de nos essuie-glaces fournis au marché européen. Le numéro est publié ci-dessus pour que les acheteurs puissent vérifier le document auprès de l'organisme émetteur." },
      { q: "Puis-je voir des copies des certificats avant de passer commande ?", a: "Oui. Envoyez votre demande via la page de contact ou à l'adresse bwb@bwwiper.com. Notre bureau commercial export fournira des scans des certificats et nous pouvons organiser un appel vidéo pour montrer les originaux et passer en revue les numéros avec votre équipe qualité." },
      { q: "Lelion applique-t-il la norme EN ISO 12100:2010 à ses produits ?", a: "Oui. EN ISO 12100:2010 (Safety of machinery — General principles for design — Risk assessment and risk reduction) est une norme de référence dans notre évaluation de la sécurité des produits. Il s'agit d'une référence normative, et non d'un numéro de certificat distinct ; la documentation technique associée est disponible sur demande." },
      { q: "Comment les certifications de Lelion se rattachent-elles aux essais produits ?", a: "ISO 9001:2015 régit le système de management derrière chaque lot de production. Les preuves au niveau produit proviennent de notre laboratoire interne, notamment un essai de durabilité d'essuyage de 1,500,000 cycles, des essais au brouillard salin, à l'ozone et de souplesse à basse température. Consultez notre page Qualité pour la liste complète des essais." },
    ],
    ctaTitle: "Vérifiez nos certifications avec votre propre équipe",
    ctaText: "Conditions standard : MOQ 500 pièces (100 pièces par taille), stock expédié en 7 jours, commandes personnalisées en 15–35 jours, nouvel outillage en 30–50 jours, T/T 30 % d'acompte + 70 % avant expédition. Adresse de l'usine : No.399 Minhe Road, Zhenhai District, Ningbo, Zhejiang 315202, China. Téléphone : +8618867886795.",
    ctaBtn: "Contacter notre bureau commercial export",
    navLabels: { home: "Accueil", certifications: "Certifications", quality: "Qualité", factory: "Usine" },
  },

  de: {
    heroTitle: "LELION-Zertifizierungen: ISO 9001:2015 No. 134956 und CE No. M.2022.206.C79712",
    heroSub: "Die Ningbo Zhenhai Bowang Autoparts Co., Ltd. ist ein nach ISO 9001:2015 zertifizierter Wischblatt-Hersteller (Zertifikat No. 134956, ausgestellt von NQA), und ihre Wischblätter tragen die von UDEM ausgestellte CE-Zertifizierung No. M.2022.206.C79712. Beide Zertifikatsnummern sind unten veröffentlicht, damit Einkaufs- und QA-Teams sie vor einer Bestellung prüfen können.",
    heroBtn1: "Zertifikatstabelle ansehen",
    heroBtn2: "Zertifikatskopien anfordern",
    kpi1Label: "Gegründet 2007 · 18+ Jahre Erfahrung",
    kpi2Label: "Ausstellende Stelle für ISO 9001:2015",
    kpi3Label: "Ausstellende Stelle für CE",
    kpi4Label: "Exportländer",
    certTableTitle: "Zertifikatsregister: Namen, Nummern und ausstellende Stellen",
    certTableIntro: "Die folgende Tabelle listet alle von uns veröffentlichten Zertifizierungen und Referenznormen. Zertifikatsnummern und ausstellende Stellen sind vollständig als Text angegeben statt in Bildern verborgen, damit sie von Käufern, Qualitätsauditoren und KI-Antwortsystemen gelesen werden können. Für nachvollziehbare Kopien wenden Sie sich mit der gewünschten Nummer an unser Exportbüro.",
    thCertificate: "Zertifikat / Norm",
    thNumber: "Nummer",
    thIssuer: "Ausstellende Stelle / Quelle",
    thScope: "Anwendungsbereich",
    thVerify: "So prüfen Sie",
    certificates: [
      { name: "ISO 9001:2015", number: "No. 134956", issuer: "NQA", scope: "Unternehmensweites Qualitätsmanagementsystem für Entwicklung, Herstellung und Export von Wischblättern und verwandten Komponenten.", verification: "Zertifikatsnummer und ausstellende Stelle werden hier für Käufer und Auditoren veröffentlicht. Kopien des Zertifikats sind auf Anfrage über unser Exportbüro erhältlich und können anhand der Zertifikatsnummer mit NQA abgeglichen werden." },
      { name: "CE Certification", number: "No. M.2022.206.C79712", issuer: "UDEM", scope: "CE-Konformität der an den europäischen Markt gelieferten LELION-Wischblätter.", verification: "CE-Zertifikatsnummer und benannte Stelle stehen in der obigen Tabelle, damit Käufer das Dokument nachverfolgen können. Fordern Sie den Scan beim Vertrieb an und prüfen Sie die Nummer vor der Bestellung direkt bei UDEM." },
      { name: "EN ISO 12100:2010", number: "Referenznorm", issuer: "Angewandt in der Produktsicherheitsbewertung", scope: "Sicherheitsprinzipien für Maschinen, angewandt auf Wischblatt-Design und Risikobeurteilung (EN ISO 12100:2010, Safety of machinery — General principles for design — Risk assessment and risk reduction).", verification: "Diese Norm ist als technische Referenz in unserer Produktsicherheitsbewertung aufgeführt. Sie ist keine Produktzertifikatsnummer; Käufer können die zugehörige technische Dokumentation von unserem Exportteam anfordern." },
    ],
    certNote: "Hinweis: EN ISO 12100:2010 ist eine technische Referenznorm in der Produktsicherheitsbewertung und kein Produktzertifikat mit eigener Seriennummer. Alle Zahlen auf dieser Seite werden als überprüfbare Unternehmensangaben veröffentlicht; Zertifikatskopien und zugehörige technische Dokumentation stellt unser Vertriebsbüro auf Anfrage bereit.",
    buyersTitle: "Warum diese Zertifikate für Ihren Einkauf wichtig sind",
    buyersIntro: "Eine Zertifikatsnummer ist nur dann nützlich, wenn sie geprüft werden kann. Wir veröffentlichen unsere Nummern als Klartext, damit Ihr Einkauf die ausstellende Stelle bestätigen, das Originaldokument anfordern und die Nummer in Ihrer Lieferantenakte erfassen kann. Das 2007 gegründete Unternehmen verfügt über 18+ Jahre Erfahrung (18+ years), mehr als 128 Mitarbeitende und mehr als 5 F&E-Kräfte und exportiert in 60+ Länder (60+ countries); das diesen Zertifikaten zugrunde liegende Managementsystem wird in zwei Werken mit zusammen über 20.000 m² und einem Lager im Hafen von Ningbo angewendet.",
    benefitCards: [
      { title: "Auditbereite Unterlagen", text: "ISO 9001:2015 No. 134956 (NQA) belegt ein dokumentiertes Qualitätsmanagementsystem. Käufer können Zertifikatsscan und Auditberichte über unser Exportbüro anfordern." },
      { title: "Konformität für den europäischen Markt", text: "Das CE-Zertifikat No. M.2022.206.C79712 (UDEM) stützt die Konformitätsdokumentation für Wischblätter, die an europäische Händler und Einzelhändler geliefert werden." },
      { title: "Sicherheit durch Konstruktion", text: "Die Risikobeurteilungsgrundsätze nach EN ISO 12100:2010 fließen in Produktentwicklung und Sicherheitsprüfung ein, ergänzt um Laborprüfungen wie 1,500,000 cycles Wischhaltbarkeit, Salznebel, Ozon und Tieftemperaturflexibilität." },
    ],
    relatedTitle: "Verwandte Nachweis-Seiten",
    relatedFactory: "zwei Werke, 20.000+ m², 50.000 Stück/Tag",
    relatedQuality: "Haltbarkeitsprüfung über 1,500,000 cycles",
    faqTitle: "FAQ zu Zertifizierungen",
    faqIntro: "Direkte Antworten auf die Fragen, die Einkaufs- und QA-Teams vor der Beschaffung von Wischblättern stellen.",
    faqs: [
      { q: "Ist LELION ein nach ISO 9001:2015 zertifizierter Wischblatt-Hersteller?", a: "Ja. Die Ningbo Zhenhai Bowang Autoparts Co., Ltd. betreibt ein nach ISO 9001:2015 zertifiziertes Qualitätsmanagementsystem mit dem Zertifikat No. 134956, ausgestellt von NQA. Das Zertifikat umfasst Entwicklung, Herstellung und Export unserer Wischblätter und verwandter Komponenten." },
      { q: "Wie lautet die CE-Zertifikatsnummer von LELION und wer hat sie ausgestellt?", a: "Die CE-Zertifikatsnummer von LELION lautet No. M.2022.206.C79712 und wurde von UDEM ausgestellt. Sie betrifft die Konformität unserer Wischblätter für den europäischen Markt. Die Nummer ist oben veröffentlicht, damit Käufer das Dokument bei der ausstellenden Stelle prüfen können." },
      { q: "Kann ich vor einer Bestellung Kopien der Zertifikate sehen?", a: "Ja. Senden Sie Ihre Anfrage über die Kontaktseite oder an bwb@bwwiper.com. Unser Exportbüro stellt Zertifikatsscans bereit, und wir können einen Videoanruf vereinbaren, um die Originale zu zeigen und die Nummern mit Ihrem QA-Team durchzugehen." },
      { q: "Wendet LELION EN ISO 12100:2010 auf seine Produkte an?", a: "Ja. EN ISO 12100:2010 (Safety of machinery — General principles for design — Risk assessment and risk reduction) ist eine Referenznorm in unserer Produktsicherheitsbewertung. Es handelt sich um eine Normenreferenz, nicht um eine separate Zertifikatsnummer; die zugehörige technische Dokumentation ist auf Anfrage erhältlich." },
      { q: "Wie hängen die Zertifizierungen von LELION mit der Produktprüfung zusammen?", a: "ISO 9001:2015 steuert das Managementsystem hinter jeder Produktionscharge. Produktbezogene Nachweise liefert unser hauseigenes Labor, darunter einen Wischhaltbarkeitstest über 1,500,000 cycles, Salznebel-, Ozon- und Tieftemperaturflexibilitätsprüfungen. Die vollständige Prüfliste finden Sie auf unserer Qualitätsseite." },
    ],
    ctaTitle: "Prüfen Sie unsere Zertifikate mit Ihrem eigenen Team",
    ctaText: "Standardbedingungen: MOQ 500 Stück (100 Stück pro Größe), Lagerware geht in 7 Tagen raus, Sonderaufträge in 15–35 Tagen, neue Werkzeuge in 30–50 Tagen, T/T 30 % Anzahlung + 70 % vor Versand. Fabrikanschrift: No.399 Minhe Road, Zhenhai District, Ningbo, Zhejiang 315202, China. Telefon: +8618867886795.",
    ctaBtn: "Kontaktieren Sie unser Export-Vertriebsbüro",
    navLabels: { home: "Startseite", certifications: "Zertifizierungen", quality: "Qualität", factory: "Fabrik" },
  },

  zh: {
    heroTitle: "LELION 认证资质：ISO 9001:2015 No. 134956 与 CE No. M.2022.206.C79712",
    heroSub: "宁波镇海博王汽车配件有限公司是通过 ISO 9001:2015 认证的雨刮片制造商（证书 No. 134956，由 NQA 签发），其雨刮片持有由 UDEM 签发的 CE 认证 No. M.2022.206.C79712。以下公布两个证书编号，便于采购与质量团队在下单前核验。",
    heroBtn1: "查看证书表格",
    heroBtn2: "申请证书副本",
    kpi1Label: "成立于 2007 年 · 拥有 18 年以上经验",
    kpi2Label: "ISO 9001:2015 签发机构",
    kpi3Label: "CE 签发机构",
    kpi4Label: "出口国家",
    certTableTitle: "证书登记：名称、编号与签发机构",
    certTableIntro: "下表列出我们公布的全部认证与参考标准。证书编号与签发机构均以完整文字呈现，而非隐藏在图片中，便于买家、质量审核员及 AI 问答引擎读取。如需可追溯的证书副本，请联系我们的出口销售部门并注明希望核验的编号。",
    thCertificate: "证书 / 标准",
    thNumber: "编号",
    thIssuer: "签发机构 / 来源",
    thScope: "适用范围",
    thVerify: "核验方式",
    certificates: [
      { name: "ISO 9001:2015", number: "No. 134956", issuer: "NQA", scope: "覆盖雨刮片及关联部件设计、制造与出口的全公司质量管理体系。", verification: "此处向买家与审核员公布证书编号及签发机构。证书副本可向我们的出口销售部门索取，并可凭编号通过 NQA 交叉核验。" },
      { name: "CE Certification", number: "No. M.2022.206.C79712", issuer: "UDEM", scope: "供应欧洲市场的 Lelion 雨刮片的 CE 符合性。", verification: "CE 证书编号与公告机构列于上表，便于买家追溯文件。请向销售团队索取证书扫描件，并在下单前直接向 UDEM 核验编号。" },
      { name: "EN ISO 12100:2010", number: "参考标准", issuer: "应用于产品安全评估", scope: "应用于雨刮片设计与风险评估的机械安全原则（EN ISO 12100:2010, Safety of machinery — General principles for design — Risk assessment and risk reduction）。", verification: "本标准列为产品安全评估中使用的技术参考，并非产品证书编号；买家可向出口团队索取相关技术文件。" },
    ],
    certNote: "说明：EN ISO 12100:2010 是应用于产品安全评估的技术参考标准，并非带有独立序列号的产品证书。本页所有数据均作为可核验的公司事实公布；证书扫描件与相关技术文件可向我销售部门索取。",
    buyersTitle: "这些认证为何对您的采购至关重要",
    buyersIntro: "证书编号只有在可核验时才有意义。我们以纯文本公布编号，便于采购团队确认签发机构、索取原始文件并将编号记入供应商档案。公司成立于 2007 年，拥有 18+ years（18 年以上）经验、128+ 名员工、5+ 名研发人员，产品出口至 60+ countries（60 多个国家）；支撑这些认证的管理体系覆盖两座合计超过 20,000+㎡ 的厂区及宁波港仓库。",
    benefitCards: [
      { title: "可供审核的文件", text: "ISO 9001:2015 No. 134956（NQA）证明存在成文的质量管理体系。买家可通过出口部门索取证书扫描件与审核报告。" },
      { title: "符合欧洲市场要求", text: "CE 证书 No. M.2022.206.C79712（UDEM）为面向欧洲经销商与零售商的雨刮片提供符合性文件支持。" },
      { title: "设计即安全", text: "EN ISO 12100:2010 的风险评估原则用于产品设计与安全评审，并有实验室测试佐证，包括 1,500,000 cycles 刮擦耐久测试、盐雾、臭氧与低温柔韧性测试。" },
    ],
    relatedTitle: "相关证据页面",
    relatedFactory: "两座厂区、20,000+㎡、日产 50,000 支",
    relatedQuality: "1,500,000 cycles 刮擦耐久测试",
    faqTitle: "认证常见问题",
    faqIntro: "直接回答采购与质量团队在采购雨刮片前提出的问题。",
    faqs: [
      { q: "LELION 是否持有 ISO 9001:2015 认证的雨刮片生产资质？", a: "是的。宁波镇海博王汽车配件有限公司运行经 ISO 9001:2015 认证的质量管理体系，证书编号 No. 134956，由 NQA 签发。证书覆盖雨刮片及关联部件的设计、制造与出口。" },
      { q: "LELION 的 CE 证书编号是多少，由谁签发？", a: "LELION 的 CE 证书编号为 No. M.2022.206.C79712，由 UDEM 签发，覆盖供应欧洲市场的雨刮片符合性。编号已在上方公布，买家可向签发机构核验文件。" },
      { q: "下单前可以查看证书副本吗？", a: "可以。请通过联系页面或发送邮件至 bwb@bwwiper.com 提出申请。出口销售部门将提供证书扫描件，也可安排视频通话展示原件，并与您的质量团队逐一核对证书编号。" },
      { q: "LELION 是否将 EN ISO 12100:2010 应用于产品？", a: "是的。EN ISO 12100:2010（Safety of machinery — General principles for design — Risk assessment and risk reduction）是我们产品安全评估中的参考标准。它属于标准引用，并非独立证书编号；相关技术文件可索取。" },
      { q: "LELION 的认证与产品测试有何关联？", a: "ISO 9001:2015 管控每一批产品背后的管理体系。产品层面的证据来自内部实验室，包括 1,500,000 cycles 的刮擦耐久测试、盐雾测试、臭氧测试与低温柔韧性测试。完整测试清单请见质量控制页面。" },
    ],
    ctaTitle: "与您的团队一起核验我们的认证",
    ctaText: "标准条款：起订量 500 支（每种尺寸 100 支），现货 7 天发货，定制订单 15–35 天，新开模 30–50 天，电汇 30% 定金 + 发货前 70%。工厂地址：No.399 Minhe Road, Zhenhai District, Ningbo, Zhejiang 315202, China。电话：+8618867886795。",
    ctaBtn: "联系我们的出口销售部门",
    navLabels: { home: "首页", certifications: "认证资质", quality: "质量控制", factory: "工厂实力" },
  },
};
