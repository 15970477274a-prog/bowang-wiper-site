// Shared six-language copy for app/[lang]/exhibitions/page.tsx.
// Verified facts appear literally and identically in every locale:
// 2007, 60+, 20,000+㎡, 50,000 pcs/day, 8,000㎡, 1,500,000,
// The kpi1Label/kpi2Label lines below carry the literal "2007" and "60+"
// tokens so the JSON-LD facts are mirrored in every localized copy block.
// ISO 9001:2015 No. 134956 (NQA), CE No. M.2022.206.C79712 (UDEM),
// No.399 Minhe Road, Zhenhai District, Ningbo, Zhejiang 315202, China,
// bwb@bwwiper.com and all social handles.

export type ExhibitionsLang = "en" | "es" | "ru" | "fr" | "de" | "zh";

export interface ExhibitionsCopy {
  heroTitle: string;
  heroSub: string;
  heroBtn1: string;
  heroBtn2: string;
  kpi1Label: string;
  kpi2Label: string;
  kpi3Label: string;
  kpi4Label: string;
  meetingTitle: string;
  meetingIntro: string;
  visitOptions: { title: string; text: string }[];
  meetingNote: string;
  topicsTitle: string;
  topicsIntro: string;
  meetingTopics: { title: string; text: string }[];
  visitTitle: string;
  visitIntro: string;
  visitSteps: { title: string; text: string }[];
  factoryLinkTail: string;
  channelsTitle: string;
  channelsIntro: string;
  socialFacebook: string;
  socialInstagram: string;
  socialLinkedIn: string;
  socialYouTube: string;
  faqTitle: string;
  faqIntro: string;
  faqs: { q: string; a: string }[];
  ctaTitle: string;
  ctaText: string;
  navLabels: { home: string; exhibitions: string; factory: string; contact: string };
}

export const exhibitionsI18n: Record<ExhibitionsLang, ExhibitionsCopy> = {
  en: {
    heroTitle: "Meet Lelion: Industry Trade Shows, Factory Visits and Direct Buyer Meetings",
    heroSub: "Lelion Autoparts regularly attends automotive aftermarket trade shows and welcomes buyers who want to see the factory, inspect samples and review quality evidence in person. Whether you meet our team at an event, visit our Ningbo plant or join a live video walkthrough, the conversation starts with your product list, your market and your order requirements. Tell us what you need and we will arrange the right format.",
    heroBtn1: "Explore meeting options",
    heroBtn2: "Request a meeting",
    kpi1Label: "2007 · Founded, 18+ years of experience",
    kpi2Label: "60+ · Export countries served",
    kpi3Label: "Two manufacturing plants",
    kpi4Label: "Typical inquiry response time",
    meetingTitle: "Three ways to meet our team",
    meetingIntro: "Different buyers prefer different levels of contact. We support all three routes below, and each one can be paired with samples, certificates and test records before you commit to a bulk order.",
    visitOptions: [
      { title: "Meet us at an industry trade show", text: "Lelion regularly attends automotive aftermarket trade shows to meet distributors, wholesalers and private-label brand owners. Contact our export office to ask about our current schedule and to reserve a meeting slot; we will confirm details directly with you rather than publishing unverified dates." },
      { title: "Visit our factory in Ningbo", text: "Buyers are welcome to audit our operations at No.399 Minhe Road, Zhenhai District, Ningbo, Zhejiang 315202, China. A factory visit lets your team walk the lines, see the laboratory and review quality records with our staff." },
      { title: "Arrange a remote video meeting", text: "If travel is not practical, we can host a live video walkthrough of the production lines and a remote pre-shipment inspection. This gives your QA team the same visibility without the cost of a trip." },
    ],
    meetingNote: "We do not list named events, dates or customer references on this page because we only publish details we can verify. Ask our export office for the current trade show schedule and we will confirm the specifics with you directly.",
    topicsTitle: "What we can cover in a buyer meeting",
    topicsIntro: "A useful meeting is a working session, not a sales pitch. Bring your vehicle application list, target volumes and packaging ideas; our team will bring physical samples, certificate numbers and production data. The topics below are the ones buyers most often ask us to walk through.",
    meetingTopics: [
      { title: "Product fitment and range", text: "Compare universal, specific-fit, multifunction, hybrid, rear and bus/truck blades in person, check adapter fitment against your vehicle list, and identify the right SKUs for your market." },
      { title: "Quality evidence", text: "Review the certificate numbers — ISO 9001:2015 No. 134956 (NQA) and CE No. M.2022.206.C79712 (UDEM) — and discuss laboratory data such as 1,500,000 wipe cycles, salt spray, ozone and low-temperature flexibility testing face to face." },
      { title: "Private label and packaging", text: "See physical samples of laser-printed logos, color boxes, blister cards and export carton marking, and agree the packaging route for your retail or wholesale programme." },
      { title: "Commercial terms", text: "Discuss MOQ of 500 pcs (100 pcs per size), lead times of 7 days for stock, 15–35 days for custom orders and 30–50 days for new tooling, and T/T terms of 30% deposit plus 70% before shipment." },
      { title: "Logistics from Ningbo Port", text: "Plan shipment consolidation through our 8,000㎡ warehouse at Ningbo Port and review export documentation requirements for your destination market." },
    ],
    visitTitle: "Planning a factory visit",
    visitIntro: "Our registered address is No.399 Minhe Road, Zhenhai District, Ningbo, Zhejiang 315202, China. The company operates two plants — in Ningbo, Zhejiang and Pingxiang, Jiangxi — totaling 20,000+㎡, plus an 8,000㎡ warehouse at Ningbo Port. Tell us which sites and processes matter most to your audit and we will prepare the visit accordingly.",
    visitSteps: [
      { title: "Before you travel", text: "Send your company profile, target SKUs and proposed dates. We will prepare samples, certificate copies and quality records so your time on site is productive." },
      { title: "During the visit", text: "Walk the production lines, review the laboratory and see how incoming materials, batch testing and export packing are handled." },
      { title: "After the visit", text: "Receive a written follow-up with the agreed specifications, samples sent and commercial terms discussed, so both teams have the same record." },
    ],
    factoryLinkTail: "two plants, 20,000+㎡, 50,000 pcs/day",
    channelsTitle: "Follow our official channels",
    channelsIntro: "Our official accounts are the simplest way to see new products and ask about meeting opportunities. For a formal meeting request or a quotation, use the contact form or email bwb@bwwiper.com — our export team replies within 12 hours.",
    socialFacebook: "Facebook — facebook.com/lelionwiper168",
    socialInstagram: "Instagram — instagram.com/lelionwiper/",
    socialLinkedIn: "LinkedIn — /in/lelion-wiperblade/",
    socialYouTube: "YouTube — @Lelion-wiper",
    faqTitle: "Trade show and factory visit FAQ",
    faqIntro: "Direct answers to common questions about meeting Lelion in person or remotely.",
    faqs: [
      { q: "Does Lelion attend automotive aftermarket trade shows?", a: "Yes. We regularly attend industry trade shows to meet distributors, wholesalers and private-label brand owners. Because our schedule changes, we confirm upcoming events directly with buyers rather than listing unverified dates here. Contact our export sales office to ask about our current programme and to book a meeting." },
      { q: "Can I visit the Lelion factory before placing an order?", a: "Yes. Buyers are welcome to visit our plant in Ningbo at No.399 Minhe Road, Zhenhai District, Ningbo, Zhejiang 315202, China, and to review our second plant in Pingxiang, Jiangxi. Contact our export office in advance so we can prepare samples, quality records and a guided tour of the lines." },
      { q: "What can I discuss in a meeting with Lelion?", a: "Meetings typically cover product fitment and SKU selection, certification and laboratory evidence, private-label packaging, MOQ and lead times, and shipping from Ningbo Port. Bring your vehicle model list, target quantities and packaging requirements and our team will work through them with you." },
      { q: "Can I inspect my order without travelling to China?", a: "Yes. Before shipment we support live remote video inspection or provide recorded product inspection videos through your dedicated sales representative. This is the same evidence a buyer would see during an on-site pre-shipment check." },
      { q: "How do I arrange a meeting or request an invitation?", a: "Send your request through the contact page or email bwb@bwwiper.com with your company name, market, product interest and preferred dates. Our export sales office will respond within 12 hours with available options and the next steps." },
    ],
    ctaTitle: "Book a conversation with our export team",
    ctaText: "Include your company name, target market, product interest and preferred dates in your message. We will confirm a trade show meeting, a factory visit or a live video session, and send samples and documentation ahead of time.",
    navLabels: { home: "Home", exhibitions: "Exhibitions & Visits", factory: "Factory", contact: "Contact Us" },
  },

  es: {
    heroTitle: "Conozca a Lelion: ferias del sector, visitas a la fábrica y reuniones directas con compradores",
    heroSub: "Lelion Autoparts asiste con regularidad a ferias del sector de posventa automotriz y recibe con gusto a compradores que desean ver la fábrica, inspeccionar muestras y revisar pruebas de calidad en persona. Ya sea que nos encuentre en un evento, visite nuestra planta en Ningbo o participe en una visita guiada por videollamada en directo, la conversación comienza con su lista de productos, su mercado y sus requisitos de pedido. Díganos qué necesita y le organizaremos el formato adecuado.",
    heroBtn1: "Explorar opciones de reunión",
    heroBtn2: "Solicitar una reunión",
    kpi1Label: "2007 · Fundada, 18+ años de experiencia",
    kpi2Label: "60+ · Países de exportación atendidos",
    kpi3Label: "Dos plantas de fabricación",
    kpi4Label: "Tiempo de respuesta habitual a consultas",
    meetingTitle: "Tres formas de reunirse con nuestro equipo",
    meetingIntro: "Cada comprador prefiere un nivel de contacto distinto. Apoyamos las tres vías que se indican a continuación y cualquiera de ellas puede completarse con muestras, certificados y registros de pruebas antes de que se comprometa con un pedido al por mayor.",
    visitOptions: [
      { title: "Encuéntrenos en una feria del sector", text: "Lelion asiste con regularidad a ferias de posventa automotriz para conocer a distribuidores, mayoristas y propietarios de marcas de marca privada. Contacte con nuestra oficina de exportación para consultar nuestro calendario actual y reservar una cita; le confirmaremos los detalles directamente en lugar de publicar fechas sin verificar." },
      { title: "Visite nuestra fábrica en Ningbo", text: "Los compradores pueden auditar nuestras operaciones en No.399 Minhe Road, Zhenhai District, Ningbo, Zhejiang 315202, China. Una visita a la fábrica permite a su equipo recorrer las líneas, ver el laboratorio y revisar los registros de calidad con nuestro personal." },
      { title: "Organice una reunión por vídeo a distancia", text: "Si el desplazamiento no es posible, podemos ofrecer una visita guiada en directo por las líneas de producción y una inspección remota previa al envío. Así su equipo de garantía de calidad obtiene la misma visibilidad sin el coste del viaje." },
    ],
    meetingNote: "En esta página no publicamos eventos, fechas ni referencias de clientes con nombre, porque solo divulgamos información que podemos verificar. Pregunte a nuestra oficina de exportación por el calendario de ferias actual y le confirmaremos los detalles directamente.",
    topicsTitle: "Qué podemos tratar en una reunión con el comprador",
    topicsIntro: "Una reunión útil es una sesión de trabajo, no un argumento de venta. Traiga su lista de aplicaciones por vehículo, los volúmenes objetivo y sus ideas de embalaje; nuestro equipo llevará muestras físicas, números de certificado y datos de producción. Los temas siguientes son los que los compradores nos piden repasar con más frecuencia.",
    meetingTopics: [
      { title: "Ajuste de compatibilidad y gama de productos", text: "Compare en persona las escobillas universal, de ajuste específico, multifunción, híbridas, traseras y de autobús/camión; compruebe la compatibilidad de los adaptadores con su lista de vehículos e identifique los SKU adecuados para su mercado." },
      { title: "Pruebas y certificados", text: "Revise los números de certificado — ISO 9001:2015 No. 134956 (NQA) y CE No. M.2022.206.C79712 (UDEM) — y comente cara a cara los datos de laboratorio, como las 1,500,000 ciclos de limpieza, la niebla salina, el ozono y las pruebas de flexibilidad a baja temperatura." },
      { title: "Marca privada y embalaje", text: "Vea muestras físicas de logotipos impresos con láser, cajas de color, tarjetas blíster y marcado de cajas de exportación, y acuerde la solución de embalaje para su programa minorista o mayorista." },
      { title: "Condiciones comerciales", text: "Analice el MOQ de 500 pcs (100 pcs por tamaño), los plazos de entrega de 7 días para stock, 15–35 días para pedidos personalizados y 30–50 días para nuevos moldes, y las condiciones T/T con 30% de anticipo y 70% antes del envío." },
      { title: "Logística desde el puerto de Ningbo", text: "Planifique la consolidación del envío a través de nuestro almacén de 8,000㎡ en el puerto de Ningbo y revise los requisitos de documentación de exportación para su mercado de destino." },
    ],
    visitTitle: "Planificar una visita a la fábrica",
    visitIntro: "Nuestra dirección registrada es No.399 Minhe Road, Zhenhai District, Ningbo, Zhejiang 315202, China. La empresa opera dos plantas —en Ningbo, Zhejiang y Pingxiang, Jiangxi— con un total de 20,000+㎡, además de un almacén de 8,000㎡ en el puerto de Ningbo. Díganos qué instalaciones y procesos son más importantes para su auditoría y prepararemos la visita en consecuencia.",
    visitSteps: [
      { title: "Antes del viaje", text: "Envíe el perfil de su empresa, los SKU objetivo y las fechas propuestas. Prepararemos muestras, copias de certificados y registros de calidad para que su tiempo en instalaciones sea productivo." },
      { title: "Durante la visita", text: "Recorra las líneas de producción, revise el laboratorio y vea cómo se gestionan las materias primas, las pruebas por lote y el embalaje de exportación." },
      { title: "Después de la visita", text: "Reciba un seguimiento por escrito con las especificaciones acordadas, las muestras enviadas y las condiciones comerciales tratadas, para que ambos equipos tengan el mismo registro." },
    ],
    factoryLinkTail: "dos plantas, 20,000+㎡, 50,000 pcs/day",
    channelsTitle: "Siga nuestros canales oficiales",
    channelsIntro: "Nuestras cuentas oficiales son la forma más sencilla de ver nuevos productos y preguntar por oportunidades de reunión. Para una solicitud formal o una cotización, utilice el formulario de contacto o escriba a bwb@bwwiper.com: nuestro equipo de exportación responde en un plazo de 12 horas.",
    socialFacebook: "Facebook — facebook.com/lelionwiper168",
    socialInstagram: "Instagram — instagram.com/lelionwiper/",
    socialLinkedIn: "LinkedIn — /in/lelion-wiperblade/",
    socialYouTube: "YouTube — @Lelion-wiper",
    faqTitle: "Preguntas frecuentes sobre ferias y visitas a la fábrica",
    faqIntro: "Respuestas directas a las preguntas habituales sobre cómo reunirse con Lelion en persona o a distancia.",
    faqs: [
      { q: "¿Asiste Lelion a ferias del sector de posventa automotriz?", a: "Sí. Asistimos con regularidad a ferias del sector para conocer a distribuidores, mayoristas y propietarios de marcas de marca privada. Como nuestro calendario cambia, confirmamos los próximos eventos directamente con los compradores en lugar de publicar fechas sin verificar. Contacte con nuestra oficina de ventas de exportación para consultar el programa actual y reservar una reunión." },
      { q: "¿Puedo visitar la fábrica de Lelion antes de hacer un pedido?", a: "Sí. Los compradores pueden visitar nuestra planta en Ningbo, en No.399 Minhe Road, Zhenhai District, Ningbo, Zhejiang 315202, China, y revisar nuestra segunda planta en Pingxiang, Jiangxi. Contacte con antelación con nuestra oficina de exportación para que preparemos muestras, registros de calidad y una visita guiada por las líneas." },
      { q: "¿Qué puedo tratar en una reunión con Lelion?", a: "Las reuniones suelen cubrir la compatibilidad de productos y la selección de SKU, los certificados y datos de laboratorio, el embalaje de marca privada, el MOQ y los plazos de entrega, y el envío desde el puerto de Ningbo. Traiga su lista de modelos de vehículos, las cantidades objetivo y sus requisitos de embalaje; nuestro equipo los revisará con usted." },
      { q: "¿Puedo inspeccionar mi pedido sin viajar a China?", a: "Sí. Antes del envío ofrecemos una inspección por videollamada en directo o grabaciones de inspección de producto a través de su representante de ventas dedicado. Es la misma información que un comprador vería en una inspección presencial previa al envío." },
      { q: "¿Cómo organizo una reunión o solicito una invitación?", a: "Envíe su solicitud a través de la página de contacto o por correo a bwb@bwwiper.com con el nombre de su empresa, mercado, producto de interés y fechas preferidas. Nuestra oficina de ventas de exportación responderá en un plazo de 12 horas con las opciones disponibles y los siguientes pasos." },
    ],
    ctaTitle: "Reserve una conversación con nuestro equipo de exportación",
    ctaText: "Incluya en su mensaje el nombre de su empresa, el mercado objetivo, el producto que le interesa y sus fechas preferidas. Confirmaremos una reunión en feria, una visita a la fábrica o una sesión por vídeo en directo, y le enviaremos muestras y documentación con antelación.",
    navLabels: { home: "Inicio", exhibitions: "Ferias y visitas", factory: "Fábrica", contact: "Contáctanos" },
  },

  ru: {
    heroTitle: "Знакомьтесь с LELION: отраслевые выставки, визиты на завод и прямые встречи с покупателями",
    heroSub: "Lelion Autoparts регулярно участвует в выставках автомобильного послепродажного рынка и приглашает покупателей, которые хотят увидеть завод, осмотреть образцы и изучить доказательства качества лично. Встретьтесь ли вы с нашей командой на мероприятии, приедете на завод в Нинбо или присоединитесь к онлайн-экскурсии, разговор начинается с вашего перечня продуктов, рынка и требований к заказу. Расскажите, что вам нужно, и мы подберём подходящий формат.",
    heroBtn1: "Узнать о форматах встреч",
    heroBtn2: "Запросить встречу",
    kpi1Label: "2007 · Основана, 18+ лет опыта",
    kpi2Label: "60+ · Обслуженные страны экспорта",
    kpi3Label: "Два производственных завода",
    kpi4Label: "Обычное время ответа на запрос",
    meetingTitle: "Три способа встретиться с нашей командой",
    meetingIntro: "Разным покупателям удобны разные уровни контакта. Мы поддерживаем все три описанных ниже варианта, и любой из них можно дополнить образцами, сертификатами и протоколами испытаний до того, как вы решитесь на крупный заказ.",
    visitOptions: [
      { title: "Встречайтесь с нами на отраслевой выставке", text: "LELION регулярно участвует в выставках автомобильного послепродажного рынка, чтобы встречаться с дистрибьюторами, оптовиками и владельцами собственных марок. Обратитесь в наш экспортный отдел, чтобы узнать текущее расписание и забронировать время встречи; мы подтвердим детали напрямую, а не будем публиковать непроверенные даты." },
      { title: "Посетите наш завод в Нинбо", text: "Покупатели могут провести аудит наших операций по адресу No.399 Minhe Road, Zhenhai District, Ningbo, Zhejiang 315202, China. Во время визита ваша команда пройдёт по линиям, увидит лабораторию и вместе с нашими сотрудниками изучит записи по качеству." },
      { title: "Организуйте видеовстречу удалённо", text: "Если поездка невозможна, мы можем провести живую онлайн-экскурсию по производственным линиям и дистанционный предотгрузочный осмотр. Ваша служба качества получит тот же объём информации без затрат на поездку." },
    ],
    meetingNote: "Мы не указываем на этой странице названия мероприятий, даты и ссылки на клиентов, потому что публикуем только проверенную информацию. Узнайте текущее расписание выставок в нашем экспортном отделе, и мы подтвердим детали напрямую.",
    topicsTitle: "Что мы обсуждаем на встрече с покупателем",
    topicsIntro: "Полезная встреча — это рабочее совещание, а не презентация. Привезite перечень моделей автомобилей, целевые объёмы и идеи по упаковке; мы привезём физические образцы, номера сертификатов и данные по производству. Ниже — темы, которые покупатели просят разобрать чаще всего.",
    meetingTopics: [
      { title: "Подбор по совместимости и ассортимент", text: "Сравните лично универсальные, под конкретный автомобиль, многофункциональные, гибридные, задние и автобусные/грузовые щётки, проверьте совместимость адаптеров со списком ваших автомобилей и определите нужные SKU для вашего рынка." },
      { title: "Сертификаты и подтверждение качества", text: "Изучите номера сертификатов — ISO 9001:2015 No. 134956 (NQA) и CE No. M.2022.206.C79712 (UDEM) — и обсудите лицом к лицу лабораторные данные: 1,500,000 циклов очистки, соляной туман, озон и испытания на гибкость при низких температурах." },
      { title: "Собственная марка и упаковка", text: "Посмотрите образцы логотипов, нанесённых лазером, цветных коробок, блистерных карточек и маркировки экспортных коробок, и согласуйте вариант упаковки для вашей розничной или оптовой программы." },
      { title: "Коммерческие условия", text: "Обсудите MOQ 500 pcs (100 pcs на размер), сроки отгрузки 7 дней для товаров со склада, 15–35 дней для индивидуальных заказов и 30–50 дней для новой оснастки, а также условия T/T: 30% аванс и 70% перед отгрузкой." },
      { title: "Логистика из порта Нинбо", text: "Спланируйте консолидацию отправки через наш склад 8,000㎡ в порту Нинбо и уточните требования к экспортной документации для вашего рынка сбыта." },
    ],
    visitTitle: "Планирование визита на завод",
    visitIntro: "Наш юридический адрес: No.399 Minhe Road, Zhenhai District, Ningbo, Zhejiang 315202, China. Компания управляет двумя заводами — в Нинбо (Чжэцзян) и Пинсяне (Цзянси) — общей площадью 20,000+㎡, а также складом 8,000㎡ в порту Нинбо. Сообщите, какие площадки и процессы важнее всего для вашего аудита, и мы подготовим визит соответствующим образом.",
    visitSteps: [
      { title: "Перед поездкой", text: "Отправьте профиль компании, целевые SKU и предлагаемые даты. Мы подготовим образцы, копии сертификатов и записи по качеству, чтобы время на площадке прошло с пользой." },
      { title: "Во время визита", text: "Пройдите по производственным линиям, осмотрите лабораторию и узнайте, как контролируются входящие материалы, испытания партий и экспортная упаковка." },
      { title: "После визита", text: "Получите письменное резюме с согласованными спецификациями, отправленными образцами и обсуждёнными коммерческими условиями — у обеих сторон будет одна и та же информация." },
    ],
    factoryLinkTail: "два завода, 20,000+㎡, 50,000 pcs/day",
    channelsTitle: "Подписывайтесь на наши официальные каналы",
    channelsIntro: "Наши официальные аккаунты — самый простой способ узнать о новых продуктах и спросить о возможностях встречи. Для официального запроса или коммерческого предложения используйте форму обратной связи или напишите на bwb@bwwiper.com — наш экспортный отдел отвечает в течение 12 часов.",
    socialFacebook: "Facebook — facebook.com/lelionwiper168",
    socialInstagram: "Instagram — instagram.com/lelionwiper/",
    socialLinkedIn: "LinkedIn — /in/lelion-wiperblade/",
    socialYouTube: "YouTube — @Lelion-wiper",
    faqTitle: "FAQ по выставкам и визитам на завод",
    faqIntro: "Прямые ответы на частые вопросы о встречах с LELION лично или удалённо.",
    faqs: [
      { q: "Участвует ли LELION в выставках автомобильного послепродажного рынка?", a: "Да. Мы регулярно участвуем в отраслевых выставках, чтобы встречать дистрибьюторов, оптовиков и владельцев собственных марок. Поскольку расписание меняется, мы подтверждаем ближайшие события напрямую покупателям, а не указываем непроверенные даты. Обратитесь в наш экспортный отдел продаж, чтобы узнать текущую программу и забронировать встречу." },
      { q: "Можно ли посетить завод LELION до размещения заказа?", a: "Да. Покупатели могут посетить наш завод в Нинбо по адресу No.399 Minhe Road, Zhenhai District, Ningbo, Zhejiang 315202, China, а также осмотреть второй завод в Пинсяне (Цзянси). Свяжитесь с экспортным отделом заранее, чтобы мы подготовили образцы, записи по качеству и экскурсию по линиям." },
      { q: "Что можно обсудить на встрече с LELION?", a: "Встречи обычно охватывают подбор по совместимости и выбор SKU, сертификаты и лабораторные данные, упаковку под собственной маркой, MOQ и сроки отгрузки, а также отправку из порта Нинбо. Привезite список моделей автомобилей, целевые объёмы и требования к упаковке — наша команда разберёт их вместе с вами." },
      { q: "Можно ли проверить заказ без поездки в Китай?", a: "Да. Перед отгрузкой мы поддерживаем живую видеоинспекцию удалённо или предоставляем записанные видео проверки продукции через вашего персонального менеджера. Это тот же объём доказательств, что и при осмотре на месте перед отгрузкой." },
      { q: "Как договориться о встрече или запросить приглашение?", a: "Отправьте запрос через страницу контактов или по электронной почте bwb@bwwiper.com, указав название компании, рынок, интересующую продукцию и удобные даты. Наш экспортный отдел продаж ответит в течение 12 часов с доступными вариантами и следующими шагами." },
    ],
    ctaTitle: "Договоритесь о разговоре с нашим экспортным отделом",
    ctaText: "Укажите в сообщении название компании, целевой рынок, интересующий продукт и удобные даты. Мы подтвердим встречу на выставке, визит на завод или онлайн-сессию и заранее отправим образцы и документацию.",
    navLabels: { home: "Главная", exhibitions: "Выставки и визиты", factory: "Завод", contact: "Связаться" },
  },

  fr: {
    heroTitle: "Découvrez Lelion : salons professionnels, visites d'usine et rencontres directes avec les acheteurs",
    heroSub: "Lelion Autoparts participe régulièrement à des salons de l'après-vente automobile et accueille les acheteurs qui souhaitent voir l'usine, examiner des échantillons et consulter des preuves qualité en personne. Que vous rencontriez notre équipe lors d'un événement, que vous visitiez notre site de Ningbo ou que vous suiviez une visite guidée en direct par vidéo, la conversation commence par votre liste de produits, votre marché et vos exigences de commande. Dites-nous ce dont vous avez besoin et nous organiserons le format adapté.",
    heroBtn1: "Découvrir les options de rencontre",
    heroBtn2: "Demander un rendez-vous",
    kpi1Label: "2007 · Fondée, 18+ ans d'expérience",
    kpi2Label: "60+ · Pays d'exportation desservis",
    kpi3Label: "Deux sites de fabrication",
    kpi4Label: "Délai de réponse habituel aux demandes",
    meetingTitle: "Trois façons de rencontrer notre équipe",
    meetingIntro: "Selon les acheteurs, le niveau de contact souhaité varie. Nous proposons les trois voies ci-dessous, et chacune peut être complétée par des échantillons, des certificats et des rapports d'essais avant tout engagement sur une commande en gros.",
    visitOptions: [
      { title: "Rencontrez-nous sur un salon professionnel", text: "Lelion participe régulièrement à des salons de l'après-vente automobile pour rencontrer distributeurs, grossistes et propriétaires de marques sous marque propre. Contactez notre bureau export pour connaître notre programme actuel et réserver un créneau ; nous vous confirmerons les détails directement plutôt que de publier des dates non vérifiées." },
      { title: "Visitez notre usine à Ningbo", text: "Les acheteurs sont invités à auditer nos opérations à l'adresse No.399 Minhe Road, Zhenhai District, Ningbo, Zhejiang 315202, China. Une visite permet à votre équipe de parcourir les lignes, de voir le laboratoire et d'examiner les dossiers qualité avec nos collaborateurs." },
      { title: "Organisez une réunion vidéo à distance", text: "Si le déplacement n'est pas possible, nous pouvons organiser une visite guidée en direct des lignes de production et une inspection avant expédition à distance. Votre équipe qualité bénéficie ainsi de la même visibilité sans frais de déplacement." },
    ],
    meetingNote: "Nous ne publions pas sur cette page de noms d'événements, de dates ou de références clients, car nous ne diffusons que des informations vérifiables. Demandez à notre bureau export le calendrier des salons en cours ; nous vous confirmerons les détails directement.",
    topicsTitle: "Ce que nous pouvons aborder lors d'une rencontre acheteur",
    topicsIntro: "Une rencontre utile est une séance de travail, pas un argumentaire commercial. Apportez votre liste d'applications véhicules, vos volumes cibles et vos idées d'emballage ; notre équipe apportera des échantillons physiques, les numéros de certificat et les données de production. Les sujets ci-dessous sont ceux que les acheteurs nous demandent le plus souvent de détailler.",
    meetingTopics: [
      { title: "Compatibilité produits et gamme", text: "Comparez sur place les essuie-glaces universels, spécifiques, multifonctions, hybrides, arrière et bus/camion, vérifiez la compatibilité des adaptateurs avec votre liste de véhicules et identifiez les SKU adaptés à votre marché." },
      { title: "Preuves qualité et certificats", text: "Consultez les numéros de certificat — ISO 9001:2015 No. 134956 (NQA) et CE No. M.2022.206.C79712 (UDEM) — et discutez en face à face des données de laboratoire, notamment 1,500,000 cycles d'essuyage, le brouillard salin, l'ozone et les essais de flexibilité à basse température." },
      { title: "Marque propre et emballage", text: "Découvrez des échantillons physiques de logos gravés au laser, de boîtes colorées, de cartes blister et de marquage de cartons d'export, et définissez la solution d'emballage pour votre programme de vente au détail ou en gros." },
      { title: "Conditions commerciales", text: "Discutez du MOQ de 500 pcs (100 pcs par taille), des délais de 7 jours pour le stock, 15–35 jours pour les commandes personnalisées et 30–50 jours pour un nouvel outillage, ainsi que des conditions T/T avec 30% d'acompte et 70% avant expédition." },
      { title: "Logistique depuis le port de Ningbo", text: "Planifiez la consolidation de vos expéditions via notre entrepôt de 8,000㎡ au port de Ningbo et vérifiez les exigences documentaires à l'export pour votre marché de destination." },
    ],
    visitTitle: "Planifier une visite d'usine",
    visitIntro: "Notre adresse enregistrée est No.399 Minhe Road, Zhenhai District, Ningbo, Zhejiang 315202, China. L'entreprise exploite deux usines — à Ningbo (Zhejiang) et Pingxiang (Jiangxi) — totalisant 20,000+㎡, ainsi qu'un entrepôt de 8,000㎡ au port de Ningbo. Indiquez-nous quels sites et processus comptent le plus pour votre audit et nous préparerons la visite en conséquence.",
    visitSteps: [
      { title: "Avant le déplacement", text: "Envoyez le profil de votre entreprise, vos SKU cibles et les dates envisagées. Nous préparerons des échantillons, des copies de certificats et des dossiers qualité afin que votre temps sur site soit productif." },
      { title: "Pendant la visite", text: "Parcourez les lignes de production, visitez le laboratoire et voyez comment sont gérés le contrôle des matières entrantes, les essais par lot et l'emballage d'export." },
      { title: "Après la visite", text: "Recevez un compte rendu écrit avec les spécifications convenues, les échantillons envoyés et les conditions commerciales discutées, afin que les deux équipes disposent du même dossier." },
    ],
    factoryLinkTail: "deux usines, 20,000+㎡, 50,000 pcs/day",
    channelsTitle: "Suivez nos canaux officiels",
    channelsIntro: "Nos comptes officiels sont le moyen le plus simple de découvrir les nouveaux produits et de vous renseigner sur les possibilités de rencontre. Pour une demande formelle ou un devis, utilisez le formulaire de contact ou écrivez à bwb@bwwiper.com — notre équipe export répond dans les 12 heures.",
    socialFacebook: "Facebook — facebook.com/lelionwiper168",
    socialInstagram: "Instagram — instagram.com/lelionwiper/",
    socialLinkedIn: "LinkedIn — /in/lelion-wiperblade/",
    socialYouTube: "YouTube — @Lelion-wiper",
    faqTitle: "FAQ sur les salons et les visites d'usine",
    faqIntro: "Des réponses directes aux questions fréquentes sur les rencontres avec Lelion, en personne ou à distance.",
    faqs: [
      { q: "Lelion participe-t-elle à des salons de l'après-vente automobile ?", a: "Oui. Nous participons régulièrement à des salons professionnels pour rencontrer distributeurs, grossistes et propriétaires de marques sous marque propre. Notre programme évoluant, nous confirmons les prochains événements directement avec les acheteurs plutôt que d'afficher des dates non vérifiées. Contactez notre bureau commercial export pour connaître le programme actuel et réserver un rendez-vous." },
      { q: "Puis-je visiter l'usine Lelion avant de passer commande ?", a: "Oui. Les acheteurs sont invités à visiter notre usine de Ningbo à l'adresse No.399 Minhe Road, Zhenhai District, Ningbo, Zhejiang 315202, China, et à examiner notre seconde usine à Pingxiang (Jiangxi). Contactez notre bureau export à l'avance afin que nous préparions des échantillons, des dossiers qualité et une visite guidée des lignes." },
      { q: "Que puis-je aborder lors d'une réunion avec Lelion ?", a: "Les réunions portent généralement sur la compatibilité des produits et le choix des SKU, les certificats et données de laboratoire, l'emballage sous marque propre, le MOQ et les délais, ainsi que l'expédition depuis le port de Ningbo. Apportez votre liste de modèles de véhicules, vos quantités cibles et vos exigences d'emballage : notre équipe les étudiera avec vous." },
      { q: "Puis-je inspecter ma commande sans me rendre en Chine ?", a: "Oui. Avant l'expédition, nous proposons une inspection vidéo en direct ou des vidéos d'inspection enregistrées via votre représentant commercial dédié. C'est le même niveau de preuve qu'un contrôle avant expédition sur site." },
      { q: "Comment organiser une rencontre ou demander une invitation ?", a: "Envoyez votre demande via la page de contact ou par e-mail à bwb@bwwiper.com en indiquant le nom de votre société, votre marché, les produits qui vous intéressent et vos dates souhaitées. Notre bureau commercial export répondra dans les 12 heures avec les options disponibles et la suite des étapes." },
    ],
    ctaTitle: "Réservez un échange avec notre équipe export",
    ctaText: "Indiquez dans votre message le nom de votre entreprise, votre marché cible, les produits qui vous intéressent et vos dates préférées. Nous confirmerons un rendez-vous sur salon, une visite d'usine ou une session vidéo en direct, et nous enverrons échantillons et documents à l'avance.",
    navLabels: { home: "Accueil", exhibitions: "Salons et visites", factory: "Usine", contact: "Nous contacter" },
  },

  de: {
    heroTitle: "Lelion kennenlernen: Fachmessen, Werksbesuche und direkte Käufergespräche",
    heroSub: "Lelion Autoparts nimmt regelmäßig an Fachmessen des Kfz-Ersatzteilmarktes teil und heißt Käufer willkommen, die unsere Fabrik sehen, Muster prüfen und Qualitätsnachweise persönlich besprechen möchten. Ob Sie unser Team auf einer Veranstaltung treffen, unser Werk in Ningbo besuchen oder an einer Live-Videobesichtigung teilnehmen – das Gespräch beginnt mit Ihrer Produktliste, Ihrem Markt und Ihren Bestellanforderungen. Sagen Sie uns, was Sie brauchen, und wir organisieren das passende Format.",
    heroBtn1: "Gesprächsformate entdecken",
    heroBtn2: "Gespräch anfragen",
    kpi1Label: "2007 · Gegründet, 18+ Jahre Erfahrung",
    kpi2Label: "60+ · Bediente Exportländer",
    kpi3Label: "Zwei Produktionswerke",
    kpi4Label: "Übliche Antwortzeit auf Anfragen",
    meetingTitle: "Drei Möglichkeiten, unser Team zu treffen",
    meetingIntro: "Unterschiedliche Käufer bevorzugen unterschiedliche Kontaktstufen. Wir unterstützen alle drei unten genannten Wege, und jeder kann vor einer Großbestellung mit Mustern, Zertifikaten und Prüfprotokollen kombiniert werden.",
    visitOptions: [
      { title: "Treffen Sie uns auf einer Fachmesse", text: "LELION nimmt regelmäßig an Messen des Kfz-Ersatzteilmarktes teil, um Distributoren, Großhändler und Inhaber von Eigenmarken zu treffen. Wenden Sie sich an unser Exportbüro, um unser aktuelles Programm zu erfragen und einen Gesprächstermin zu reservieren; wir bestätigen die Details direkt mit Ihnen, statt ungeprüfte Termine zu veröffentlichen." },
      { title: "Besuchen Sie unser Werk in Ningbo", text: "Käufer können unseren Betrieb unter der Adresse No.399 Minhe Road, Zhenhai District, Ningbo, Zhejiang 315202, China auditieren. Ein Werksbesuch ermöglicht es Ihrem Team, die Linien zu begehen, das Labor zu sehen und Qualitätsunterlagen mit unseren Mitarbeitenden zu prüfen." },
      { title: "Vereinbaren Sie ein Video-Meeting", text: "Wenn eine Reise nicht möglich ist, können wir eine Live-Videobesichtigung der Produktionslinien und eine ferngesteuerte Vorversandprüfung anbieten. Ihr QA-Team erhält so dieselben Einblicke ohne Reisekosten." },
    ],
    meetingNote: "Wir listen auf dieser Seite keine Veranstaltungsnamen, Termine oder Kundenreferenzen auf, weil wir nur verifizierbare Informationen veröffentlichen. Fragen Sie unser Exportbüro nach dem aktuellen Messekalender – wir bestätigen Ihnen die Einzelheiten direkt.",
    topicsTitle: "Was wir in einem Käufergespräch besprechen können",
    topicsIntro: "Ein sinnvolles Meeting ist eine Arbeitssitzung, kein Vertriebs-pitch. Bringen Sie Ihre Fahrzeugapplikationsliste, Zielmengen und Verpackungsideen mit; unser Team bringt physische Muster, Zertifikatsnummern und Produktionsdaten mit. Die folgenden Themen werden von Käufern am häufigsten angefragt.",
    meetingTopics: [
      { title: "Passgenauigkeit und Sortiment", text: "Vergleichen Sie vor Ort Universal-, fahrzeugspezifische, Multifunktions-, Hybrid-, Heck- und Bus-/LKW-Wischer, prüfen Sie die Adapterpassgenauigkeit anhand Ihrer Fahrzeugliste und identifizieren Sie die passenden SKU für Ihren Markt." },
      { title: "Qualitätsnachweise und Zertifikate", text: "Prüfen Sie die Zertifikatsnummern — ISO 9001:2015 No. 134956 (NQA) und CE No. M.2022.206.C79712 (UDEM) — und besprechen Sie persönlich Laborwerte wie 1,500,000 Wischzyklen, Salznebel, Ozon und Tieftemperatur-Flexibilitätsprüfungen." },
      { title: "Private Label und Verpackung", text: "Sehen Sie physische Muster lasergravierter Logos, Farbkartons, Blisterkarten und Exportkarton-Kennzeichnung und legen Sie die Verpackungslösung für Ihr Einzelhandels- oder Großhandelsprogramm fest." },
      { title: "Kaufbedingungen", text: "Besprechen Sie das MOQ von 500 pcs (100 pcs pro Größe), Lieferzeiten von 7 Tagen für Lagerware, 15–35 Tagen für Sonderaufträge und 30–50 Tagen für neue Werkzeuge sowie T/T-Bedingungen mit 30% Anzahlung und 70% vor Versand." },
      { title: "Logistik ab Hafen Ningbo", text: "Planen Sie die Sendungskonsolidierung über unser 8,000㎡ Lager im Hafen von Ningbo und prüfen Sie die Exportpapier-Anforderungen für Ihren Zielmarkt." },
    ],
    visitTitle: "Werksbesuch planen",
    visitIntro: "Unsere registrierte Anschrift lautet No.399 Minhe Road, Zhenhai District, Ningbo, Zhejiang 315202, China. Das Unternehmen betreibt zwei Werke — in Ningbo (Zhejiang) und Pingxiang (Jiangxi) — mit insgesamt 20,000+㎡ sowie ein 8,000㎡ großes Lager im Hafen von Ningbo. Sagen Sie uns, welche Standorte und Prozesse für Ihr Audit am wichtigsten sind; wir bereiten den Besuch entsprechend vor.",
    visitSteps: [
      { title: "Vor der Reise", text: "Senden Sie Ihr Firmenprofil, die Ziel-SKU und geplante Termine. Wir bereiten Muster, Zertifikatskopien und Qualitätsunterlagen vor, damit Ihre Zeit vor Ort effizient genutzt wird." },
      { title: "Während des Besuchs", text: "Begehen Sie die Produktionslinien, besichtigen Sie das Labor und erfahren Sie, wie Eingangskontrollen, Chargenprüfungen und Exportverpackung gehandhabt werden." },
      { title: "Nach dem Besuch", text: "Erhalten Sie eine schriftliche Zusammenfassung mit vereinbarten Spezifikationen, versandten Mustern und besprochenen Kaufbedingungen, damit beide Teams auf demselben Stand sind." },
    ],
    factoryLinkTail: "zwei Werke, 20,000+㎡, 50,000 pcs/day",
    channelsTitle: "Folgen Sie unseren offiziellen Kanälen",
    channelsIntro: "Unsere offiziellen Konten sind der einfachste Weg, neue Produkte zu sehen und sich nach Gesprächsmöglichkeiten zu erkundigen. Für eine formelle Anfrage oder ein Angebot nutzen Sie das Kontaktformular oder schreiben Sie an bwb@bwwiper.com – unser Exportteam antwortet innerhalb von 12 Stunden.",
    socialFacebook: "Facebook — facebook.com/lelionwiper168",
    socialInstagram: "Instagram — instagram.com/lelionwiper/",
    socialLinkedIn: "LinkedIn — /in/lelion-wiperblade/",
    socialYouTube: "YouTube — @Lelion-wiper",
    faqTitle: "FAQ zu Messen und Werksbesuchen",
    faqIntro: "Direkte Antworten auf häufige Fragen zu persönlichen oder virtuellen Treffen mit LELION.",
    faqs: [
      { q: "Nimmt LELION an Messen des Kfz-Ersatzteilmarkts teil?", a: "Ja. Wir nehmen regelmäßig an Fachmessen teil, um Distributoren, Großhändler und Inhaber von Eigenmarken zu treffen. Da sich unser Kalender ändert, bestätigen wir kommende Termine direkt mit Käufern, statt ungeprüfte Daten aufzuführen. Wenden Sie sich an unser Export-Vertriebsbüro, um das aktuelle Programm zu erfragen und einen Termin zu buchen." },
      { q: "Kann ich vor einer Bestellung die Fabrik von LELION besuchen?", a: "Ja. Käufer können unser Werk in Ningbo unter No.399 Minhe Road, Zhenhai District, Ningbo, Zhejiang 315202, China besuchen und unser zweites Werk in Pingxiang (Jiangxi) besichtigen. Kontaktieren Sie unser Exportbüro rechtzeitig, damit wir Muster, Qualitätsunterlagen und eine geführte Besichtigung vorbereiten können." },
      { q: "Was kann ich in einem Gespräch mit LELION besprechen?", a: "Gespräche umfassen typischerweise Passgenauigkeit und SKU-Auswahl, Zertifikate und Laborwerte, Private-Label-Verpackung, MOQ und Lieferzeiten sowie den Versand ab Hafen Ningbo. Bringen Sie Ihre Fahrzeugmodellliste, Zielmengen und Verpackungsanforderungen mit – unser Team geht diese mit Ihnen durch." },
      { q: "Kann ich meine Bestellung ohne Reise nach China prüfen?", a: "Ja. Vor dem Versand unterstützen wir eine Live-Videofernbesichtigung oder stellen über Ihren festen Ansprechpartner aufgezeichnete Prüfvideos bereit. Das entspricht den Nachweisen eines Vor-Ort-Checks vor dem Versand." },
      { q: "Wie vereinbare ich ein Treffen oder bitte um eine Einladung?", a: "Senden Sie Ihre Anfrage über die Kontaktseite oder per E-Mail an bwb@bwwiper.com mit Firmenname, Markt, Produktinteresse und Wunschterminen. Unser Export-Vertriebsbüro antwortet innerhalb von 12 Stunden mit verfügbaren Optionen und den nächsten Schritten." },
    ],
    ctaTitle: "Vereinbaren Sie ein Gespräch mit unserem Exportteam",
    ctaText: "Nennen Sie in Ihrer Nachricht Firmenname, Zielmarkt, Produktinteresse und bevorzugte Termine. Wir bestätigen ein Messegespräch, einen Werksbesuch oder eine Live-Videosession und senden Muster sowie Unterlagen im Voraus.",
    navLabels: { home: "Startseite", exhibitions: "Messen & Besuche", factory: "Fabrik", contact: "Kontakt" },
  },

  zh: {
    heroTitle: "认识 LELION：行业展会、工厂参观与买家面对面洽谈",
    heroSub: "Lelion Autoparts 定期参加汽车后市场行业展会，欢迎希望实地看厂、查看样品并当面审核质量证明的买家。无论您是在展会上与团队会面、参观宁波工厂，还是参加实时视频巡检，交流都从您的产品清单、目标市场和订购要求开始。告诉我们您的需求，我们会安排合适的形式。",
    heroBtn1: "了解会面方式",
    heroBtn2: "预约会面",
    kpi1Label: "2007 · 创立于 2007 年，18+ 年经验",
    kpi2Label: "60+ · 出口覆盖国家",
    kpi3Label: "两座生产厂区",
    kpi4Label: "询盘常规响应时间",
    meetingTitle: "与我们会面的三种方式",
    meetingIntro: "不同买家偏好的沟通方式各不相同。以下三种途径我们都支持，并且在大批量下单前，每种方式都可以配合样品、证书与测试记录。",
    visitOptions: [
      { title: "在行业展会上与我们见面", text: "LELION 定期参加汽车后市场展会，与经销商、批发商及自有品牌商见面。请联系我们的出口部门了解当前日程并预留会面时段；我们会直接与您确认细节，不会公布未经核实的日期。" },
      { title: "参观我们在宁波的工厂", text: "欢迎买家前往 No.399 Minhe Road, Zhenhai District, Ningbo, Zhejiang 315202, China 审核我们的运营。实地参观可让您的团队走访产线、查看实验室，并与我们的员工一起审阅质量记录。" },
      { title: "安排远程视频会议", text: "如不便出行，我们可安排生产线实时视频导览与远程发货前验货，让您的 QA 团队在不出差的情况下获得同样的可视性。" },
    ],
    meetingNote: "本页不列出具体展会名称、日期或客户案例，因为我们只发布可核实的信息。请向出口部门询问当前展会安排，我们会直接向您确认具体细节。",
    topicsTitle: "买家会议中可以讨论的内容",
    topicsIntro: "一场有价值的会议是工作交流，而非推销。请带上您的车型应用清单、目标数量与包装想法；我们会带去实物样品、证书编号与生产数据。以下是买家最常要求我们详细讲解的主题。",
    meetingTopics: [
      { title: "产品适配与系列", text: "现场对比通用型、专车专用型、多功能型、混合型、后窗及客车/卡车雨刮片，按您的车型清单核对接头适配性，并确定适合您市场的 SKU。" },
      { title: "质量证明与证书", text: "查看证书编号 ISO 9001:2015 No. 134956 (NQA) 与 CE No. M.2022.206.C79712 (UDEM)，并当面讨论 1,500,000 次刮擦循环、盐雾、臭氧与低温柔韧性等实验室数据。" },
      { title: "贴牌与包装", text: "查看激光 logo、彩盒、吸塑卡与出口纸箱唛头的实物样品，并为您的零售或批发项目确定包装方案。" },
      { title: "商务条款", text: "讨论 MOQ 500 pcs（每种尺寸 100 pcs）、现货 7 天、定制订单 15–35 天、新开模 30–50 天的交期，以及 T/T 付款方式：30% 定金、发货前付清 70%。" },
      { title: "从宁波港发货的物流", text: "规划通过宁波港 8,000㎡ 仓库进行的发货集拼，并核对目的市场的出口单证要求。" },
    ],
    visitTitle: "工厂参观安排",
    visitIntro: "我们的注册地址为 No.399 Minhe Road, Zhenhai District, Ningbo, Zhejiang 315202, China。公司运营两座厂区——浙江宁波与江西萍乡——合计 20,000+㎡，另在宁波港设有 8,000㎡ 仓库。请告知您验厂最关注的厂区与工序，我们会相应安排参观。",
    visitSteps: [
      { title: "出行前", text: "发送贵公司资料、目标 SKU 与拟定日期。我们会准备样品、证书复印件与质量记录，让您的现场时间更高效。" },
      { title: "参观期间", text: "走访生产线、查看实验室，并了解来料检验、批次测试与出口包装的具体做法。" },
      { title: "参观之后", text: "收到书面跟进，列明商定的规格、寄送的样品与讨论过的商务条款，确保双方记录一致。" },
    ],
    factoryLinkTail: "两座厂区，20,000+㎡，50,000 pcs/day",
    channelsTitle: "关注我们的官方渠道",
    channelsIntro: "通过官方账号是了解新品与询问会面机会最便捷的方式。正式会面申请或报价请通过联系表单或发送邮件至 bwb@bwwiper.com —— 我们的出口团队在 12 小时内回复。",
    socialFacebook: "Facebook — facebook.com/lelionwiper168",
    socialInstagram: "Instagram — instagram.com/lelionwiper/",
    socialLinkedIn: "LinkedIn — /in/lelion-wiperblade/",
    socialYouTube: "YouTube — @Lelion-wiper",
    faqTitle: "展会与工厂参观常见问题",
    faqIntro: "关于与 LELION 线下或线上会面的常见问题，直接作答。",
    faqs: [
      { q: "LELION 会参加汽车后市场展会吗？", a: "会。我们定期参加行业展会，与经销商、批发商及自有品牌商见面。由于日程会变化，我们直接向买家确认近期活动，而不在此列出未经核实的日期。请联系出口销售部门了解当前安排并预约会面。" },
      { q: "下单前可以参观 LELION 工厂吗？", a: "可以。欢迎买家前往我们在宁波的厂区 No.399 Minhe Road, Zhenhai District, Ningbo, Zhejiang 315202, China，并查看江西萍乡的第二座厂区。请提前联系出口部门，以便我们准备样品、质量记录与产线导览。" },
      { q: "与 LELION 会面时可以讨论什么？", a: "会议通常涵盖产品适配与 SKU 选择、证书与实验室证据、贴牌包装、MOQ 与交期，以及从宁波港发货。请带上您的车型清单、目标数量与包装要求，我们的团队会与您逐项沟通。" },
      { q: "不来中国可以验货吗？", a: "可以。发货前我们支持实时远程视频验货，也可通过您的专属销售代表提供录制的验货视频，与现场发货前检查获得的信息一致。" },
      { q: "如何预约会面或索取邀请？", a: "请通过联系页面或发送邮件至 bwb@bwwiper.com，注明公司名称、市场、意向产品与期望日期。出口销售部门将在 12 小时内回复可选方案与后续步骤。" },
    ],
    ctaTitle: "与我们的出口团队预约交流",
    ctaText: "请在留言中写明公司名称、目标市场、意向产品与期望日期。我们将确认展会会面、工厂参观或实时视频会议，并提前寄送样品与资料。",
    navLabels: { home: "首页", exhibitions: "展会与客户拜访", factory: "工厂实力", contact: "联系我们" },
  },
};
