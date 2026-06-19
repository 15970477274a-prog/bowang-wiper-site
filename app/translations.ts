export type Locale = "en" | "es" | "ru" | "fr" | "de";

export interface TranslationDict {
  navHome: string;
  navProducts: string;
  navAdvantages: string;
  navAboutUs: string;
  navGetQuote: string;
  navCatalog: string;
  
  heroTag: string;
  heroTitle: string;
  heroSubtitle: string;
  heroInquireBtn: string;
  heroProductsBtn: string;

  productsTitle: string;
  productsSubtitle: string;
  
  bestSeller: string;
  premiumChoice: string;
  multiCompatible: string;

  universalTitle: string;
  universalDesc: string;
  universalSpec1: string;
  universalSpec2: string;
  universalSpec3: string;
  universalSpec4: string;

  specificTitle: string;
  specificDesc: string;
  specificSpec1: string;
  specificSpec2: string;
  specificSpec3: string;
  specificSpec4: string;

  multifunctionTitle: string;
  multifunctionDesc: string;
  multifunctionSpec1: string;
  multifunctionSpec2: string;
  multifunctionSpec3: string;
  multifunctionSpec4: string;

  getCatalogBtn: string;

  whyTitle: string;
  whySubtitle: string;
  whyAdv1Title: string;
  whyAdv1Desc: string;
  whyAdv2Title: string;
  whyAdv2Desc: string;
  whyAdv3Title: string;
  whyAdv3Desc: string;
  whyAdv4Title: string;
  whyAdv4Desc: string;

  aboutTag: string;
  aboutTitle: string;
  aboutDesc1: string;
  aboutDesc2: string;
  aboutStat1Title: string;
  aboutStat1Desc: string;
  aboutStat2Title: string;
  aboutStat2Desc: string;
  aboutStat3Title: string;
  aboutStat3Desc: string;
  aboutPledgeTitle: string;
  aboutPledgeQuote: string;
  aboutPledgeAuthor: string;

  contactTitle: string;
  contactSubtitle: string;
  contactNameLabel: string;
  contactEmailLabel: string;
  contactCompanyLabel: string;
  contactProductLabel: string;
  contactMessageLabel: string;
  contactWhatsappLabel: string;
  contactWhatsappPlaceholder: string;
  contactQuantityLabel: string;
  contactQuantityPlaceholder: string;
  contactNamePlaceholder: string;
  contactEmailPlaceholder: string;
  contactCompanyPlaceholder: string;
  contactMessagePlaceholder: string;
  contactSuccessMsg: string;
  contactErrorMsg: string;
  contactSubmitBtn: string;
  contactSubmittingBtn: string;

  contactPageTitle: string;
  contactPageDesc: string;
  contactInfoTitle: string;
  contactAddressTitle: string;
  contactPhoneTitle: string;
  contactSocialTitle: string;

  faqTitle: string;
  faqSubtitle: string;
  faqQ1: string;
  faqA1: string;
  faqQ2: string;
  faqA2: string;
  faqQ3: string;
  faqA3: string;
  faqQ4: string;
  faqA4: string;
  faqQ5: string;
  faqA5: string;
  faqQ6: string;
  faqA6: string;

  footerDesc: string;
  footerQuickLinks: string;
  footerContactInfo: string;
  footerAddress: string;
}

export const translations: Record<Locale, TranslationDict> = {
  en: {
    navHome: "Home",
    navProducts: "Products",
    navAdvantages: "Advantages",
    navAboutUs: "About Us",
    navGetQuote: "Contact Us",
    navCatalog: "E-Catalog (PDF)",
    heroTag: "ISO9001 Certified Factory",
    heroTitle: "Professional Wiper Blade Manufacturer From China",
    heroSubtitle: "Ningbo Zhenhai Bowang Autoparts Co., Ltd. specializes in OEM & ODM production of high-performance wiper blades. We deliver premium durability, perfect wiping, and global export logistics.",
    heroInquireBtn: "Inquire Now",
    heroProductsBtn: "Our Products",
    productsTitle: "Our Featured Products",
    productsSubtitle: "Engineered for all-weather performance. Manufactured with premium natural rubber, high-carbon spring steel, and durable aerodynamics shell.",
    bestSeller: "Best Seller",
    premiumChoice: "Premium Choice",
    multiCompatible: "Multi-Compatible",
    universalTitle: "Universal Wiper Blades",
    universalDesc: "Designed to fit 99% of vehicles with pre-installed hooks. Exceptional aerodynamic frame ensures uniform pressure and streak-free wiping even at highway speeds.",
    universalSpec1: "AAA-Grade Natural Rubber",
    universalSpec2: '12" to 28"',
    universalSpec3: "> 1,000,000 times",
    universalSpec4: "Pre-installed U-Hook",
    specificTitle: "Specific Fit Wiper Blades",
    specificDesc: "OEM replacement wiper blades matching luxury and European vehicle models (BMW, Benz, Audi, Porsche, etc.) with original connection arms.",
    specificSpec1: "Teflon Coated Natural Rubber",
    specificSpec2: '14" to 28"',
    specificSpec3: "Match original specifications",
    specificSpec4: "Direct fit without adapters",
    multifunctionTitle: "Multifunction Wiper Blades",
    multifunctionDesc: "Equipped with interchangeable adapters. Solves inventory problems by fitting 15+ different wiper arms with only a few SKU models.",
    multifunctionSpec1: "Silicone / Natural Rubber",
    multifunctionSpec2: '12" to 30"',
    multifunctionSpec3: "22 adapters included",
    multifunctionSpec4: "Drastically reduce inventory cost",
    getCatalogBtn: "Get Catalog & Price",
    whyTitle: "Factory Manufacturing Advantages",
    whySubtitle: "Direct factory sourcing guarantees high quality, competitive pricing, and secure supply chains.",
    whyAdv1Title: "Factory-Direct Price",
    whyAdv1Desc: "Buy directly from our Ningbo-based manufacturing facility. Cut out middle trading companies and maximize your profit margins.",
    whyAdv2Title: "Strict Quality Control",
    whyAdv2Desc: "Each batch undergoes extensive testing, including salt spray tests, ozone resistance, and low-temperature durability.",
    whyAdv3Title: "OEM & ODM Customization",
    whyAdv3Desc: "Support custom laser-printed logos, exclusive color designs, and bespoke packaging boxes tailored to your brand.",
    whyAdv4Title: "Global Shipping & Support",
    whyAdv4Desc: "Decades of experience exporting to North America, Europe, Southeast Asia, and South America. Safe customs clearance and prompt service.",
    aboutTag: "Corporate Profile",
    aboutTitle: "Ningbo Zhenhai Bowang Autoparts Co., Ltd.",
    aboutDesc1: "Located in the coastal industrial hub of Ningbo, China, Bowang Autoparts is a modern manufacturer specializing in automotive wiper blades. Spanning over 8,000 square meters of production workshop, our facility integrates independent R&D, structural design, manufacturing, and distribution under one roof.",
    aboutDesc2: "Equipped with multiple automated assembly lines, high-precision rubber strip cutting machines, and state-of-the-art laboratory testing equipment, our annual output exceeds 12 million units.",
    aboutStat1Title: "15+",
    aboutStat1Desc: "Years Experience",
    aboutStat2Title: "8,000㎡",
    aboutStat2Desc: "Factory Area",
    aboutStat3Title: "50+",
    aboutStat3Desc: "Exporting Countries",
    aboutPledgeTitle: "Our Quality Pledge",
    aboutPledgeQuote: `\"Quality is the core driver of Bowang. We utilize strictly imported AAA-grade raw rubber materials, high-tension spring steels, and execute full-inspection QC procedures. We assure a streak-free, quiet, and lasting wipe for all our global buyers.\"`,
    aboutPledgeAuthor: "— Production Director, Bowang Autoparts",
    contactTitle: "Inquiry Form",
    contactSubtitle: "Send us a message and our team will get back to you within 12 hours.",
    contactNameLabel: "Your Name *",
    contactEmailLabel: "Business Email *",
    contactCompanyLabel: "Company Name",
    contactProductLabel: "Product of Interest *",
    contactMessageLabel: "Detailed Requirements / Message *",
    contactWhatsappLabel: "WhatsApp / Phone",
    contactWhatsappPlaceholder: "+86 188 6788 6795",
    contactQuantityLabel: "Estimated Quantity",
    contactQuantityPlaceholder: "e.g., 500 pcs / trial order",
    contactNamePlaceholder: "John Doe",
    contactEmailPlaceholder: "john@yourcompany.com",
    contactCompanyPlaceholder: "Autoparts Import LLC",
    contactMessagePlaceholder: "Please describe your interest, required sizes, quantity estimation, or custom logo requests...",
    contactSuccessMsg: "Thank you! Your inquiry has been sent successfully. Our export sales team will reach out with pricing and catalog within 12 hours.",
    contactErrorMsg: "Error: ",
    contactSubmitBtn: "Submit Inquiry",
    contactSubmittingBtn: "Sending Inquiry...",
    contactPageTitle: "Get in Touch with Lelion",
    contactPageDesc: "Partner with a leading China wiper blade manufacturer. We welcome wholesalers, distributors, and OEM brand owners worldwide.",
    contactInfoTitle: "Contact Information",
    contactAddressTitle: "Factory Address",
    contactPhoneTitle: "WhatsApp / Phone",
    contactSocialTitle: "Follow Us",
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Find quick answers to common B2B procurement queries for Bowang Wipers.",
    faqQ1: "What is your Minimum Order Quantity (MOQ)?",
    faqA1: "Our standard MOQ is 500-1000 PCS per model. However, we are flexible and open to discussing lower quantities for initial trial orders to help you test your local market.",
    faqQ2: "Do you provide free samples?",
    faqA2: "Yes, we provide free physical samples of our wiper blades. You only need to cover the international shipping cost, which can be credited back to your first bulk order.",
    faqQ3: "Can you provide OEM/ODM services with my brand?",
    faqA3: "Absolutely. We offer full OEM support including laser-printing your logo on the wiper arms and creating custom high-quality retail packaging tailored to your brand identity.",
    faqQ4: "What is the standard production lead time?",
    faqA4: "Typically, the production lead time is 15 to 25 days depending on the order volume and customization requirements. We ensure safe and prompt loading from Ningbo Port.",
    faqQ5: "Are your products certified?",
    faqA5: "Yes, our manufacturing facility is ISO 9001 and IATF 16949 certified. Our wiper blades are tested for 1.5 million cycles to meet global OE automotive standards.",
    faqQ6: "Which payment terms do you accept?",
    faqA6: "We generally accept T/T (30% deposit, 70% balance against B/L copy), L/C at sight, and Western Union for smaller sample transactions.",
    footerDesc: "Ningbo Zhenhai Bowang Autoparts Co., Ltd. is dedicated to manufacturing high-quality wiper blades with global standards, exporting worldwide.",
    footerQuickLinks: "Quick Links",
    footerContactInfo: "Contact Info",
    footerAddress: "Zhenhai District, Ningbo City, Zhejiang Province, China",
  },
  es: {
    navHome: "Inicio",
    navProducts: "Productos",
    navAdvantages: "Ventajas",
    navAboutUs: "Nosotros",
    navGetQuote: "Contacto",
    navCatalog: "Catálogo (PDF)",
    heroTag: "Fábrica Certificada ISO9001",
    heroTitle: "Fabricante Profesional de Escobillas Limpiaparabrisas en China",
    heroSubtitle: "Ningbo Zhenhai Bowang Autoparts Co., Ltd. se especializa en la producción OEM y ODM de escobillas limpiaparabrisas de alto rendimiento. Ofrecemos durabilidad superior, limpieza perfecta y logística de exportación global.",
    heroInquireBtn: "Consulte Ahora",
    heroProductsBtn: "Nuestros Productos",
    productsTitle: "Nuestros Productos Destacados",
    productsSubtitle: "Diseñados para un rendimiento óptimo en todo clima. Fabricados con caucho natural de primera calidad, acero de resorte con alto contenido de carbono y carcasa aerodinámica duradera.",
    bestSeller: "Más Vendido",
    premiumChoice: "Opción Premium",
    multiCompatible: "Multi-Compatible",
    universalTitle: "Escobillas Universales",
    universalDesc: "Diseñadas para adaptarse al 99% de los vehículos con ganchos preinstalados. Excepcional marco aerodinámico que asegura una presión uniforme y una limpieza sin marcas incluso a altas velocidades.",
    universalSpec1: "Caucho Natural de Grado AAA",
    universalSpec2: '12" a 28"',
    universalSpec3: "> 1,000,000 de ciclos",
    universalSpec4: "Gancho en U preinstalado",
    specificTitle: "Escobillas de Ajust体 Específico",
    specificDesc: "Escobillas de repuesto OEM que se adaptan a modelos de vehículos de lujo y europeos (BMW, Benz, Audi, Porsche, etc.) con brazos de conexión originales.",
    specificSpec1: "Caucho Natural con Recubrimiento de Teflón",
    specificSpec2: '14" a 28"',
    specificSpec3: "Cumple con especificaciones originales",
    specificSpec4: "Ajuste directo sin adaptadores",
    multifunctionTitle: "Escobillas Multifuncionales",
    multifunctionDesc: "Equipadas con adaptadores intercambiables. Resuelven problemas de inventario adaptándose a más de 15 brazos de limpiaparabrisas diferentes con solo unos pocos modelos SKU.",
    multifunctionSpec1: "Silicona / Caucho Natural",
    multifunctionSpec2: '12" a 30"',
    multifunctionSpec3: "Más de 10 adaptadores incluidos",
    multifunctionSpec4: "Reducción drástica del costo de inventario",
    getCatalogBtn: "Obtener Catálogo y Precios",
    whyTitle: "Ventajas de Fabricación Directa",
    whySubtitle: "El abastecimiento directo de fábrica garantiza alta calidad, precios competitivos y cadenas de suministro seguras.",
    whyAdv1Title: "Precios de Fábrica",
    whyAdv1Desc: "Compre directamente desde nuestra planta de fabricación en Ningbo. Elimine intermediarios y maximice sus márgenes de ganancia.",
    whyAdv2Title: "Estricto Control de Calidad",
    whyAdv2Desc: "Cada lote se somete a pruebas exhaustivas, incluyendo pruebas de niebla salina, resistencia al ozono y durabilidad a bajas temperaturas.",
    whyAdv3Title: "Personalización OEM y ODM",
    whyAdv3Desc: "Soporte para logotipos personalizados impresos con láser, diseños de color exclusivos y cajas de embalaje hechas a medida de su marca.",
    whyAdv4Title: "Envíos Globales y Soporte",
    whyAdv4Desc: "Décadas de experiencia exportando a América del Norte, Europa, el Sudeste Asiático y América del Sur. Despacho de aduanas seguro y servicio rápido.",
    aboutTag: "Perfil Corporativo",
    aboutTitle: "Ningbo Zhenhai Bowang Autoparts Co., Ltd.",
    aboutDesc1: "Ubicado en el centro industrial costero de Ningbo, China, Bowang Autoparts es un fabricante moderno especializado en escobillas limpiaparabrisas para automóviles. Con un taller de producción de más de 8,000 metros cuadrados, nuestras instalaciones integran I+D independiente, diseño estructural, fabricación y distribución bajo un mismo techo.",
    aboutDesc2: "Equipados con múltiples líneas de montage automatizadas, máquinas de corte de tiras de caucho de alta precisión y equipos de prueba de laboratorio de última generación, nuestra producción anual supera los 12 millones de unidades.",
    aboutStat1Title: "15+",
    aboutStat1Desc: "Años de Experiencia",
    aboutStat2Title: "8,000㎡",
    aboutStat2Desc: "Área de la Fábrica",
    aboutStat3Title: "50+",
    aboutStat3Desc: "Países de Exportación",
    aboutPledgeTitle: "Our Commitment of Quality",
    aboutPledgeQuote: `\"La calidad es el motor principal de Bowang. Utilizamos materias primas de caucho natural de grado AAA estrictamente importadas, aceros de resorte de alta tensión y ejecutamos procedimientos de control de calidad de inspección completa. Aseguramos una limpieza silenciosa, sin marcas y duradera para todos nuestros compradores globales.\"`,
    aboutPledgeAuthor: "— Director de Producción, Bowang Autoparts",
    contactTitle: "Formulario de Consulta",
    contactSubtitle: "Envíenos un mensaje y nuestro equipo se pondrá en contacto con usted en un plazo de 12 horas.",
    contactNameLabel: "Su Nombre *",
    contactEmailLabel: "Correo Electrónico *",
    contactCompanyLabel: "Nombre de la Empresa",
    contactProductLabel: "Producto de Interés *",
    contactMessageLabel: "Requisitos / Mensaje *",
    contactWhatsappLabel: "WhatsApp / Teléfono",
    contactWhatsappPlaceholder: "+86 188 6788 6795",
    contactQuantityLabel: "Cantidad estimada",
    contactQuantityPlaceholder: "ej., 500 unidades / pedido de prueba",    contactNamePlaceholder: "Juan Pérez",
    contactEmailPlaceholder: "juan@suempresa.com",
    contactCompanyPlaceholder: "Importadora Autopartes",
    contactMessagePlaceholder: "Describa su interés, tamaños, cantidad...",
    contactSuccessMsg: "¡Gracias! Su consulta ha sido enviada con éxito.",
    contactErrorMsg: "Error: ",
    contactSubmitBtn: "Enviar Consulta",
    contactSubmittingBtn: "Enviando...",
    contactPageTitle: "Póngase en contacto con Lelion",
    contactPageDesc: "Asóciese con un fabricante líder de escobillas limpiaparabrisas en China.",
    contactInfoTitle: "Información de Contacto",
    contactAddressTitle: "Dirección de Fábrica",
    contactPhoneTitle: "WhatsApp / Teléfono",
    contactSocialTitle: "Síganos",
    faqTitle: "Preguntas Frecuentes",
    faqSubtitle: "Encuentre respuestas rápidas a consultas comunes sobre adquisiciones B2B para Bowang.",
    faqQ1: "¿Cuál es su cantidad mínima de pedido (MOQ)?",
    faqA1: "Nuestro MOQ estándar es de 500 a 1000 piezas por modelo. Sin embargo, somos flexibles y estamos abiertos a discutir cantidades menores para pedidos de prueba iniciales.",
    faqQ2: "¿Proporcionan muestras gratuitas?",
    faqA2: "Sí, proporcionamos muestras físicas gratuitas. Solo necesita cubrir el costo del envío internacional, que puede acreditarse en su primer pedido al por mayor.",
    faqQ3: "¿Pueden ofrecer servicios OEM/ODM con mi marca?",
    faqA3: "Absolutamente. Ofrecemos soporte OEM completo, incluyendo la impresión láser de su logotipo y la creación de embalajes personalizados adaptados a su marca.",
    faqQ4: "¿Cuál es el tiempo de entrega estándar?",
    faqA4: "Normalmente, el tiempo de entrega es de 15 a 25 días. Garantizamos una carga segura y rápida desde el puerto de Ningbo.",
    faqQ5: "¿Están certificados sus productos?",
    faqA5: "Sí, nuestra fábrica tiene las certificaciones ISO 9001 e IATF 16949. Nuestras escobillas están probadas para 1.5 millones de ciclos.",
    faqQ6: "¿Qué condiciones de pago aceptan?",
    faqA6: "Generalmente aceptamos T/T (30% de depósito, 70% contra copia de B/L), L/C a la vista y Western Union para muestras.",
    footerDesc: "Ningbo Zhenhai Bowang Autoparts Co., Ltd. se dedica a la fabricación de escobillas limpiaparabrisas de alta calidad con estándares globales, exportando a todo el mundo.",
    footerQuickLinks: "Enlaces Rápidos",
    footerContactInfo: "Información de Contacto",
    footerAddress: "Distrito de Zhenhai, Ciudad de Ningbo, Provincia de Zhejiang, China",
  },
  ru: {
    navHome: "Главная",
    navProducts: "Продукция",
    navAdvantages: "Преимущества",
    navAboutUs: "О нас",
    navGetQuote: "Контакты",
    navCatalog: "Каталог (PDF)",
    heroTag: "Завод сертифицирован по ISO9001",
    heroTitle: "Профессиональный производитель щеток стеклоочистителя из Китая",
    heroSubtitle: "Ningbo Zhenhai Bowang Autoparts Co., Ltd. специализируется на OEM и ODM производстве высококачественных щеток стеклоочистителя. Мы гарантируем превосходную долговечность, идеальную очистку и глобальную экспортную логистику.",
    heroInquireBtn: "Узнать цену",
    heroProductsBtn: "Наша продукция",
    productsTitle: "Наша популярная продукция",
    productsSubtitle: "Разработаны для работы в любых погодных условиях. Изготовлены из натурального каучука высшего качества, высокоуглеродистой пружинной стали и прочного аэродинамического корпуса.",
    bestSeller: "Хит продаж",
    premiumChoice: "Премиум выбор",
    multiCompatible: "Мультисовместимые",
    universalTitle: "Универсальные щетки",
    universalDesc: "Подходят для 99% автомобилей благодаря предустановленным креплениям. Уникальный аэродинамический каркас обеспечивает равномерное прижатие и очистку без разводов даже на высоких скоростях.",
    universalSpec1: "Натуральный каучук класса AAA",
    universalSpec2: 'от 12" до 28"',
    universalSpec3: "> 1000 000 циклов",
    universalSpec4: "Предустановленный U-Hook (крючок)",
    specificTitle: "Специальные щетки (Direct Fit)",
    specificDesc: "Оригинальные сменные щетки стеклоочистителя, соответствующие люксовым и европейским моделям автомобилей (BMW, Benz, Audi, Porsche и др.) с оригинальными типами поводков.",
    specificSpec1: "Натуральный каучук с тефлоновым покрытием",
    specificSpec2: 'от 14" до 28"',
    specificSpec3: "Соответствие оригинальным спецификациям",
    specificSpec4: "Прямая установка без переходников",
    multifunctionTitle: "Мультифункциональные щетки",
    multifunctionDesc: "Оснащены сменными адаптерами. Решают проблему складских запасов, позволяя закрыть более 15 типов поводков всего несколькими моделями SKU.",
    multifunctionSpec1: "Силикон / Натуральный каучук",
    multifunctionSpec2: 'от 12" до 30"',
    multifunctionSpec3: "Более 10 адаптеров в комплекте",
    multifunctionSpec4: "Радикальное снижение затрат на склад",
    getCatalogBtn: "Получить каталог и цены",
    whyTitle: "Преимущества прямого производства",
    whySubtitle: "Прямые поставки с завода гарантируют высокое качество, конкурентоспособные цены и надежность поставок.",
    whyAdv1Title: "Цена напрямую от завода",
    whyAdv1Desc: "Покупайте напрямую на нашем производстве в Нинбо. Исключите посредников и максимизируйте свою прибыль.",
    whyAdv2Title: "Строгий контроль качества",
    whyAdv2Desc: "Каждая партия проходит тщательные испытания, включая тесты в соляном тумане, проверку на озоностойкость и морозоустойчивость.",
    whyAdv3Title: "OEM и ODM кастомизация",
    whyAdv3Desc: "Поддержка лазерной гравировки логотипов, индивидуального дизайна цвета и разработки упаковки под ваш бренд.",
    whyAdv4Title: "Глобальная доставка и поддержка",
    whyAdv4Desc: "Десятилетия опыта экспорта в Северную Америку, Европу, Юго-Восточную Азию и Южную Америку. Быстрое таможенное оформление.",
    aboutTag: "О компании",
    aboutTitle: "Ningbo Zhenhai Bowang Autoparts Co., Ltd.",
    aboutDesc1: "Расположенный в приморском промышленном центре Нинбо (Китай), завод Bowang Autoparts является современным предприятием по производству автомобильных щеток стеклоочистителя. На площади более 8 000 кв. метров расположены цеха разработки, конструирования, производства и дистрибуции.",
    aboutDesc2: "Завод оснащен автоматизированными сборочными линиями, высокоточными станками для резки каучуковой ленты и передовой испытательной лабораторией. Годовой объем выпуска превышает 12 млн единиц.",
    aboutStat1Title: "15+",
    aboutStat1Desc: "Лет опыта",
    aboutStat2Title: "8 000㎡",
    aboutStat2Desc: "Площадь завода",
    aboutStat3Title: "50+",
    aboutStat3Desc: "Экспортирующих стран",
    aboutPledgeTitle: "Наше обещание качества",
    aboutPledgeQuote: `\"Качество — это основа Bowang. Мы импортируем только высококлассный каучук класса ААА, используем прочную пружинную сталь и проводим 100% контроль качества. Мы гарантируем бесшумную очистку без полос на долгий срок для всех клиентов по всему миру.\"`,
    aboutPledgeAuthor: "— Директор по производству, Bowang Autoparts",
    contactTitle: "Форма запроса",
    contactSubtitle: "Отправьте нам сообщение, и наша команда свяжется с вами в течение 12 часов.",
    contactNameLabel: "Ваше имя *",
    contactEmailLabel: "Email *",
    contactCompanyLabel: "Название компании",
    contactProductLabel: "Интересующий продукт *",
    contactMessageLabel: "Детали / Сообщение *",
    contactWhatsappLabel: "WhatsApp / Телефон",
    contactWhatsappPlaceholder: "+86 188 6788 6795",
    contactQuantityLabel: "Предполагаемое количество",
    contactQuantityPlaceholder: "например, 500 шт. / пробный заказ",    contactNamePlaceholder: "Иван Иванов",
    contactEmailPlaceholder: "ivan@company.com",
    contactCompanyPlaceholder: "Импортер запчастей",
    contactMessagePlaceholder: "Укажите интересующие размеры, количество...",
    contactSuccessMsg: "Спасибо! Ваш запрос успешно отправлен.",
    contactErrorMsg: "Ошибка: ",
    contactSubmitBtn: "Отправить запрос",
    contactSubmittingBtn: "Отправка...",
    contactPageTitle: "Свяжитесь с Lelion",
    contactPageDesc: "Станьте партнером ведущего китайского производителя щеток стеклоочистителя.",
    contactInfoTitle: "Контактная информация",
    contactAddressTitle: "Адрес завода",
    contactPhoneTitle: "WhatsApp / Телефон",
    contactSocialTitle: "Мы в соцсетях",
    faqTitle: "Часто задаваемые вопросы",
    faqSubtitle: "Быстрые ответы на типичные вопросы по B2B закупкам для Bowang.",
    faqQ1: "Каков ваш минимальный объем заказа (MOQ)?",
    faqA1: "Стандартный MOQ составляет 500-1000 шт. на модель. Однако мы готовы обсуждать меньшие объемы для пробных партий.",
    faqQ2: "Предоставляете ли вы бесплатные образцы?",
    faqA2: "Да, образцы бесплатны. Вам нужно оплатить только международную доставку, стоимость которой будет вычтена из вашего первого оптового заказа.",
    faqQ3: "Можете ли вы производить продукцию под моим брендом (OEM)?",
    faqA3: "Да, мы поддерживаем OEM, включая лазерную гравировку логотипа и разработку упаковки под ваш фирменный стиль.",
    faqQ4: "Каковы сроки производства?",
    faqA4: "Сроки составляют 15-25 дней. Мы гарантируем быструю отгрузку из порта Нинбо.",
    faqQ5: "Сертифицирована ли ваша продукция?",
    faqA5: "Да, завод сертифицирован по ISO 9001 и IATF 16949. Щетки протестированы на 1,5 млн циклов.",
    faqQ6: "Какие условия оплаты вы принимаете?",
    faqA6: "Мы принимаем T/T (30% депозит, 70% против копии B/L), L/C и Western Union для образцов.",
    footerDesc: "Ningbo Zhenhai Bowang Autoparts Co., Ltd. занимается производством высококачественных щеток стеклоочистителя по мировым стандартам и поставляет их по всему миру.",
    footerQuickLinks: "Быстрые ссылки",
    footerContactInfo: "Контакты",
    footerAddress: "Район Чжэньхай, город Нинбо, провинция Чжэцзян, Китай",
  },
  fr: {
    navHome: "Accueil",
    navProducts: "Produits",
    navAdvantages: "Avantages",
    navAboutUs: "À Propos",
    navGetQuote: "Contact",
    navCatalog: "Catalogue (PDF)",
    heroTag: "Usine Certifiée ISO9001",
    heroTitle: "Fabricant Professionnel d'Essuie-Glaces en Chine",
    heroSubtitle: "Ningbo Zhenhai Bowang Autoparts Co., Ltd. est spécialisé dans la fabrication OEM & ODM de balais d'essuie-glace haute performance. Nous offrons une durabilité supérieure, un essuyage parfait et une logistique d'exportation mondiale.",
    heroInquireBtn: "Demander un Tarif",
    heroProductsBtn: "Nos Produits",
    productsTitle: "Nos Produits Phares",
    productsSubtitle: "Conçus pour des performances optimales par tous les temps. Fabriqués en caoutchouc naturel de qualité supérieure, acier à ressort à haute teneur en carbone et structure aérodynamique durable.",
    bestSeller: "Meilleure Vente",
    premiumChoice: "Choix Premium",
    multiCompatible: "Multi-Compatible",
    universalTitle: "Balais d'Essuie-Glace Universels",
    universalDesc: "Conçus pour s'adapter à 99% des véhicules avec crochets pré-installés. Structure aérodynamique exceptionnelle garantissant une pression uniforme et un essuyage sans traces, même à grande vitesse sur autoroute.",
    universalSpec1: "Caoutchouc Naturel de Qualité AAA",
    universalSpec2: '12" à 28"',
    universalSpec3: "> 1 000 000 de cycles",
    universalSpec4: "Crochet en U pré-installé",
    specificTitle: "Balais d'Essuie-Glace Spécifiques",
    specificDesc: "Balais de rechange OEM adaptés aux modèles de véhicules de luxe et européens (BMW, Benz, Audi, Porsche, etc.) avec bras de connexion d'origine.",
    specificSpec1: "Caoutchouc Naturel avec Revêtement en Téflon",
    specificSpec2: '14" à 28"',
    specificSpec3: "Conforme aux spécifications d'origine",
    specificSpec4: "Installation directe sans adaptateurs",
    multifunctionTitle: "Balais d'Essuie-Glace Multifonctions",
    multifunctionDesc: "Équipés d'adaptateurs interchangeables. Résolvent les problèmes de stock en s'adaptant à plus de 15 bras d'essuie-glace différents avec seulement quelques modèles de SKU.",
    multifunctionSpec1: "Silicone / Caoutchouc Naturel",
    multifunctionSpec2: '12" à 30"',
    multifunctionSpec3: "Plus de 10 adaptateurs inclus",
    multifunctionSpec4: "Réduction drastique des coûts de stockage",
    getCatalogBtn: "Obtenir le Catalogue & Tarifs",
    whyTitle: "Avantages de la Fabrication en Direct d'Usine",
    whySubtitle: "L'approvisionnement direct d'usine garantit une qualité élevée, des prix compétitifs et des chaînes d'approvisionnement sécurisées.",
    whyAdv1Title: "Prix Direct Usine",
    whyAdv1Desc: "Achetez directement auprès de notre usine de fabrication basée à Ningbo. Éliminez les intermédiaires et maximisez vos marges bénéficiaires.",
    whyAdv2Title: "Contrôle de Qualité Strict",
    whyAdv2Desc: "Chaque lot subit des tests approfondis, notamment des tests de brouillard salin, de résistance à l'ozone et de durabilité à basse température.",
    whyAdv3Title: "Personnalisation OEM & ODM",
    whyAdv3Desc: "Prise en charge des logos personnalisés gravés au laser, des couleurs exclusives et des boîtes d'emballage sur mesure adaptées à votre marque.",
    whyAdv4Title: "Expédition Mondiale & Support",
    whyAdv4Desc: "Des décennies d'expérience dans l'exportation vers l'Amérique du Nord, l'Europe, l'Asie du Sud-Est et l'Amérique du Sud. Dédouanement sécurisé et service rapide.",
    aboutTag: "Profil de l'Entreprise",
    aboutTitle: "Ningbo Zhenhai Bowang Autoparts Co., Ltd.",
    aboutDesc1: "Situé dans le pôle industriel côtier de Ningbo, en Chine, Bowang Autoparts is a modern manufacturer spécialisé dans les balais d'essuie-glace automobiles. S'étendant sur plus de 8 000 mètres carrés d'ateliers de production, notre usine intègre la R&D indépendante, la conception structurelle, la fabrication et la distribution sous un même toit.",
    aboutDesc2: "Équipé de multiples lignes d'assemblage automatisées, de machines de découpe de bandes de caoutchouc de haute précision et d'équipements de test en laboratoire de pointe, notre production annuelle dépasse 12 millions d'unités.",
    aboutStat1Title: "15+",
    aboutStat1Desc: "Ans d'Expérience",
    aboutStat2Title: "8 000㎡",
    aboutStat2Desc: "Superficie de l'Usine",
    aboutStat3Title: "50+",
    aboutStat3Desc: "Pays d'Exportation",
    aboutPledgeTitle: "Notre Engagement de Qualité",
    aboutPledgeQuote: `\"La qualité est le moteur central de Bowang. Nous utilisons strictement des matières premières de caoutchouc naturel importées de qualité AAA, des aciers à ressort à haute tension et appliquons des procédures de contrôle qualité d'inspection complète. Nous garantissons un essuyage silencieux, sans traces et durable pour tous nos acheteurs mondiaux.\"`,
    aboutPledgeAuthor: "— Directeur de Production, Bowang Autoparts",
    contactTitle: "Formulaire de Demande",
    contactSubtitle: "Envoyez-nous un message et notre équipe vous répondra dans les 12 heures.",
    contactNameLabel: "Votre Nom *",
    contactEmailLabel: "E-mail Professionnel *",
    contactCompanyLabel: "Nom de l'Entreprise",
    contactProductLabel: "Produit d'Intérêt *",
    contactMessageLabel: "Détails / Message *",
    contactWhatsappLabel: "WhatsApp / Téléphone",
    contactWhatsappPlaceholder: "+86 188 6788 6795",
    contactQuantityLabel: "Quantité estimée",
    contactQuantityPlaceholder: "ex., 500 pièces / commande d'essai",    contactNamePlaceholder: "Jean Dupont",
    contactEmailPlaceholder: "jean@entreprise.com",
    contactCompanyPlaceholder: "Importateur Pièces Auto",
    contactMessagePlaceholder: "Veuillez décrire vos besoins, dimensions, quantité...",
    contactSuccessMsg: "Merci ! Votre demande a été envoyée avec succès.",
    contactErrorMsg: "Erreur : ",
    contactSubmitBtn: "Envoyer la Demande",
    contactSubmittingBtn: "Envoi en cours...",
    contactPageTitle: "Contactez Lelion",
    contactPageDesc: "Devenez partenaire d'un fabricant leader d'essuie-glaces en Chine.",
    contactInfoTitle: "Coordonnées",
    contactAddressTitle: "Adresse de l'Usine",
    contactPhoneTitle: "WhatsApp / Téléphone",
    contactSocialTitle: "Suivez-nous",
    faqTitle: "Foire Aux Questions",
    faqSubtitle: "Réponses rapides aux questions courantes sur l'approvisionnement B2B pour Bowang.",
    faqQ1: "Quelle est votre quantité minimale de commande (MOQ) ?",
    faqA1: "Notre MOQ standard est de 500 à 1000 PCS par modèle. Nous sommes flexibles pour les commandes d'essai initiales.",
    faqQ2: "Fournissez-vous des échantillons gratuits ?",
    faqA2: "Oui, les échantillons sont gratuits. Vous ne payez que les frais d'expédition internationale, remboursables sur votre première commande groupée.",
    faqQ3: "Proposez-vous des services OEM/ODM ?",
    faqA3: "Absolument. Nous gérons l'impression laser de votre logo et la création d'emballages personnalisés selon votre marque.",
    faqQ4: "Quel est le délai de production standard ?",
    faqA4: "Généralement de 15 à 25 jours. Nous garantissons un chargement rapide depuis le port de Ningbo.",
    faqQ5: "Vos produits sont-ils certifiés ?",
    faqA5: "Oui, notre usine est certifiée ISO 9001 et IATF 16949. Nos balais sont testés pour 1,5 million de cycles.",
    faqQ6: "Quelles conditions de paiement acceptez-vous ?",
    faqA6: "Nous acceptons le T/T (30% d'acompte, 70% contre copie B/L), le L/C et Western Union pour les échantillons.",
    footerDesc: "Ningbo Zhenhai Bowang Autoparts Co., Ltd. se consacre à la fabrication de balais d'essuie-glace de haute qualité selon les normes mondiales, avec des exportations dans le monde entier.",
    footerQuickLinks: "Liens Rapides",
    footerContactInfo: "Coordonnées",
    footerAddress: "District de Zhenhai, Ville de Ningbo, Province du Zhejiang, Chine",
  },
  de: {
    navHome: "Startseite",
    navProducts: "Produkte",
    navAdvantages: "Vorteile",
    navAboutUs: "Über Uns",
    navGetQuote: "Kontakt",
    navCatalog: "Katalog (PDF)",
    heroTag: "ISO9001-Zertifizierte Fabrik",
    heroTitle: "Professioneller Scheibenwischer-Hersteller aus China",
    heroSubtitle: "Ningbo Zhenhai Bowang Autoparts Co., Ltd. ist auf die OEM- und ODM-Produktion von Hochleistungs-Scheibenwischerblättern spezialisiert. Wir liefern erstklassige Haltbarkeit, perfektes Wischen und globale Exportlogistik.",
    heroInquireBtn: "Jetzt Anfragen",
    heroProductsBtn: "Unsere Produkte",
    productsTitle: "Unsere Ausgewählten Produkte",
    productsSubtitle: "Entwickelt für Allwetter-Performance. Hergestellt aus erstklassigem Naturkautschuk, kohlenstoffreichem Federstahl und einer langlebigen aerodynamischen Schale.",
    bestSeller: "Bestseller",
    premiumChoice: "Premium-Auswahl",
    multiCompatible: "Multi-Kompatibel",
    universalTitle: "Universelle Scheibenwischer",
    universalDesc: "Passend für 99% aller Fahrzeuge with vorinstallierten Haken. Der außergewöhnliche aerodynamische Rahmen sorgt für gleichmäßigen Druck und streifenfreies Wischen auch bei Autobahngeschwindigkeiten.",
    universalSpec1: "AAA-Naturkautschuk",
    universalSpec2: '12" bis 28"',
    universalSpec3: "> 1.000.000 Wischzyklen",
    universalSpec4: "Vorinstallierter U-Haken",
    specificTitle: "Spezifische Flachbalkenwischer",
    specificDesc: "OEM-Ersatzwischerblätter, passend für Luxus- und europäische Fahrzeugmodelle (BMW, Benz, Audi, Porsche usw.) mit Original-Anschlussarmen.",
    specificSpec1: "Teflonbeschichteter Naturkautschuk",
    specificSpec2: '14" bis 28"',
    specificSpec3: "Entspricht Originalspezifikationen",
    specificSpec4: "Direkte Passform ohne Adapter",
    multifunctionTitle: "Multifunktions-Scheibenwischer",
    multifunctionDesc: "Ausgestattet mit austauschbaren Adaptern. Löst Lagerprobleme, indem es mit nur wenigen SKU-Modellen auf über 15 verschiedene Wischerarme passt.",
    multifunctionSpec1: "Silikon / Naturkautschuk",
    multifunctionSpec2: '12" bis 30"',
    multifunctionSpec3: "Über 10 Adapter im Lieferumfang enthalten",
    multifunctionSpec4: "Drastische Reduzierung der Lagerkosten",
    getCatalogBtn: "Katalog & Preise anfordern",
    whyTitle: "Vorteile der Direktbeschaffung ab Werk",
    whySubtitle: "Die direkte Beschaffung ab Werk garantiert hohe Qualität, wettbewerbsfähige Preise und sichere Lieferketten.",
    whyAdv1Title: "Preise Direkt ab Werk",
    whyAdv1Desc: "Kaufen Sie direkt in unserer Produktionsstätte in Ningbo. Schalten Sie Zwischenhändler aus und maximieren Sie Ihre Gewinnspannen.",
    whyAdv2Title: "Strenge Qualitätskontrolle",
    whyAdv2Desc: "Jede Charge wird umfangreichen Tests unterzogen, darunter Salzsprühtests, Ozonbeständigkeit und Kältebeständigkeit.",
    whyAdv3Title: "OEM- & ODM-Anpassung",
    whyAdv3Desc: "Unterstützung für individuell lasergravierte Logos, exklusive Farbdesigns und maßgeschneiderte, auf Ihre Marke zugeschnittene Verpackungsboxen.",
    whyAdv4Title: "Weltweiter Versand & Support",
    whyAdv4Desc: "Jahrzehntelange Erfahrung im Export nach Nordamerika, Europa, Südostasien und Südamerika. Sichere Zollabwicklung und prompter Service.",
    aboutTag: "Unternehmensprofil",
    aboutTitle: "Ningbo Zhenhai Bowang Autoparts Co., Ltd.",
    aboutDesc1: "Das in der Küstenindustriestadt Ningbo (China) gelegene Unternehmen Bowang Autoparts ist ein moderner Hersteller, der sich auf Scheibenwischerblätter für Automobile spezialisiert hat. Auf einer Produktionsfläche von über 8.000 Quadratmetern vereint unser Werk eigene Forschung und Entwicklung, Konstruktion, Fertigung und Vertrieb unter einem Dach.",
    aboutDesc2: "Ausgestattet mit mehreren automatisierten Montagelinien, hochpräzisen Kautschuk-Schneidemaschinen und modernsten Laborprüfgeräten übersteigt unsere Jahresproduktion 12 Millionen Einheiten.",
    aboutStat1Title: "15+",
    aboutStat1Desc: "Jahre Erfahrung",
    aboutStat2Title: "8.000㎡",
    aboutStat2Desc: "Fabrikfläche",
    aboutStat3Title: "50+",
    aboutStat3Desc: "Exportländer",
    aboutPledgeTitle: "Unser Qualitätsversprechen",
    aboutPledgeQuote: `\"Qualität ist der Kern von Bowang. Wir verwenden ausschließlich importierten AAA-Naturkautschuk, hochfesten Federstahl und führen lückenlose Qualitätsprüfungen durch. Wir garantieren ein streifenfreies, leises und dauerhaftes Wischen für alle unsere weltweiten Kunden.\"`,
    aboutPledgeAuthor: "— Produktionsleiter, Bowang Autoparts",
    contactTitle: "Anfrageformular",
    contactSubtitle: "Senden Sie uns eine Nachricht. Unser Team meldet sich innerhalb von 12 Stunden bei Ihnen.",
    contactNameLabel: "Ihr Name *",
    contactEmailLabel: "Geschäftliche E-Mail *",
    contactCompanyLabel: "Firmenname",
    contactProductLabel: "Gewünschtes Produkt *",
    contactMessageLabel: "Anforderungen / Nachricht *",
    contactWhatsappLabel: "WhatsApp / Telefon",
    contactWhatsappPlaceholder: "+86 188 6788 6795",
    contactQuantityLabel: "Geschätzte Menge",
    contactQuantityPlaceholder: "z.B. 500 Stück / Probebestellung",
    contactNamePlaceholder: "Max Mustermann",
    contactEmailPlaceholder: "max@firma.de",
    contactCompanyPlaceholder: "Autoteile Import GmbH",
    contactMessagePlaceholder: "Beschreiben Sie Ihr Interesse, Größen, Menge...",
    contactSuccessMsg: "Vielen Dank! Ihre Anfrage wurde erfolgreich gesendet.",
    contactErrorMsg: "Fehler: ",
    contactSubmitBtn: "Anfrage Absenden",
    contactSubmittingBtn: "Wird gesendet...",
    contactPageTitle: "Kontaktieren Sie Lelion",
    contactPageDesc: "Partner werden eines führenden chinesischen Scheibenwischer-Herstellers.",
    contactInfoTitle: "Kontaktinformationen",
    contactAddressTitle: "Fabrikadresse",
    contactPhoneTitle: "WhatsApp / Telefon",
    contactSocialTitle: "Folgen Sie uns",
    faqTitle: "Häufig Gestellte Fragen",
    faqSubtitle: "Finden Sie schnelle Antworten auf gängige B2B-Beschaffungsfragen für Bowang.",
    faqQ1: "Was ist Ihre Mindestbestellmenge (MOQ)?",
    faqA1: "Unser Standard-MOQ beträgt 500-1000 Stück pro Modell. Für Erstaufträge sind wir jedoch flexibel.",
    faqQ2: "Bieten Sie kostenlose Muster an?",
    faqA2: "Ja, wir bieten kostenlose Muster an. Sie müssen nur die internationalen Versandkosten tragen, die bei Ihrer ersten Großbestellung gutgeschrieben werden können.",
    faqQ3: "Können Sie OEM/ODM-Dienstleistungen mit meiner Marke anbieten?",
    faqA3: "Absolut. Wir bieten vollen OEM-Support, einschließlich Laserdruck Ihres Logos und Erstellung maßgeschneiderter Einzelhandelsverpackungen.",
    faqQ4: "Was ist die Standard-Produktionszeit?",
    faqA4: "Normalerweise beträgt die Lieferzeit 15 bis 25 Tage. Wir garantieren eine sichere Verladung ab dem Hafen von Ningbo.",
    faqQ5: "Sind Ihre Produkte zertifiziert?",
    faqA5: "Ja, unser Werk ist ISO 9001 und IATF 16949 zertifiziert. Unsere Scheibenwischer sind für 1,5 Millionen Zyklen getestet.",
    faqQ6: "Welche Zahlungsbedingungen akzeptieren Sie?",
    faqA6: "Wir akzeptieren T/T (30% Anzahlung, 70% gegen B/L-Kopie), L/C und Western Union für Muster.",
    footerDesc: "Ningbo Zhenhai Bowang Autoparts Co., Ltd. widmet sich der Herstellung hochwertiger Scheibenwischerblätter nach weltweiten Standards und exportiert weltweit.",
    footerQuickLinks: "Schnelllinks",
    footerContactInfo: "Kontakt-Info",
    footerAddress: "Bezirk Zhenhai, Stadt Ningbo, Provinz Zhejiang, Chine",
  },
};


