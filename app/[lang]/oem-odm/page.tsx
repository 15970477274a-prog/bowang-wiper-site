"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

type Block = { t: string; d: string };
type Row = { k: string; v: string };
type QA = { q: string; a: string };

type Copy = {
  h1: string;
  sub: string;
  intro: string;
  whyTitle: string;
  features: Block[];
  termsTitle: string;
  terms: Row[];
  stepsTitle: string;
  steps: Block[];
  faqTitle: string;
  faq: QA[];
  ctaTitle: string;
  ctaText: string;
  btnQuote: string;
  btnCatalog: string;
  blogLead: string;
  blogLink: string;
};

const oem: Record<string, Copy> = {
  en: {
    h1: "OEM & ODM Windshield Wiper Blades — Custom Manufacturing by LELION",
    sub: "Private-label and custom-developed wiper blades, manufactured in Ningbo, China.",
    intro:
      "LELION is a wiper blade manufacturer in Ningbo, China, producing for wholesalers, distributors and private-label brand owners since 2011. Our factory is certified to ISO 9001:2015 (No. 134956, NQA) and holds the CE certificate (No. M.2022.206.C79712, UDEM). We develop and produce under your brand — from a low trial quantity up to full container loads.",
    whyTitle: "Why work with LELION",
    features: [
      {
        t: "Low MOQ, built for trial orders",
        d: "From 500 pcs per order — and most models from just 100 pcs per size. We would rather start small with you than ask you to gamble on a container.",
      },
      { t: "Fast dispatch on stock items", d: "In-stock items ship in 7 working days." },
      { t: "Your brand, not ours", d: "Logo engraving on connectors, printed packaging, custom cartons." },
      {
        t: "Certified quality",
        d: "ISO 9001:2015 · CE. Rubber strip physical-property and durability test data published on site.",
      },
    ],
    termsTitle: "OEM / ODM Terms at a Glance",
    terms: [
      {
        k: "Minimum order quantity",
        v: "From 500 pcs per order · most models from 100 pcs per size · a higher minimum applies to certain special items",
      },
      { k: "Sampling time", v: "7–15 days" },
      {
        k: "Lead time",
        v: "7 working days for in-stock items · 15–35 working days for out-of-stock and custom production",
      },
      { k: "Payment methods", v: "T/T · Credit / Debit Card · Apple Pay · Google Pay · Afterpay · Alipay" },
      {
        k: "Sample policy",
        v: "Free samples — 2 pcs per item, freight at buyer's cost. Any custom sampling or tooling fee is credited against your first production order.",
      },
      { k: "Customisation", v: "OEM private label · ODM development · custom colours, packaging and connectors" },
    ],
    stepsTitle: "How to Start — 5 Steps",
    steps: [
      {
        t: "Step 1 · Requirement discussion",
        d: "Tell us your target quantity, product type, target market and packaging idea. We confirm feasibility and quote.",
      },
      {
        t: "Step 2 · Drawing & material confirmation",
        d: "We prepare technical drawings and confirm rubber grade, frame style and connector type.",
      },
      {
        t: "Step 3 · Prototyping & samples",
        d: "Samples are produced and tested for fit, wipe performance and appearance. Sampling: 7–15 days.",
      },
      {
        t: "Step 4 · Order confirmation & production",
        d: "On approval we schedule production. In-stock 7 working days; custom 15–35 working days.",
      },
      {
        t: "Step 5 · Inspection, packaging & shipment",
        d: "Pre-shipment inspection, your branded packaging, and shipping documentation.",
      },
    ],
    faqTitle: "Frequently Asked Questions",
    faq: [
      {
        q: "What is your minimum order quantity?",
        a: "Orders start from 500 pcs. For most models you can order from 100 pcs per size, so you can test a single size before committing to a full order. Certain special items carry a higher minimum.",
      },
      { q: "How long does sampling take?", a: "7–15 days." },
      {
        q: "What is your lead time?",
        a: "7 working days for in-stock items; 15–35 working days for out-of-stock and custom production. The exact schedule is confirmed with your order.",
      },
      {
        q: "Can you produce under our own brand?",
        a: "Yes. Logo engraving on connectors, printed packaging and custom cartons are all available as OEM private label. For full ODM we develop to your specification.",
      },
      {
        q: "Can I get samples?",
        a: "Yes. We provide free samples (2 pcs per item), with freight at your cost. If your project needs custom sampling or tooling, that fee is credited against your first production order.",
      },
      {
        q: "What payment methods do you accept?",
        a: "T/T, credit and debit cards, Apple Pay, Google Pay, Afterpay and Alipay.",
      },
      { q: "Which markets do you serve?", a: "We currently export to 50+ countries. Our team replies within 12 hours on working days." },
    ],
    ctaTitle: "Start your private-label project",
    ctaText: "Tell us your target quantity, product type and packaging idea — we reply within 12 hours on working days.",
    btnQuote: "Request a quotation",
    btnCatalog: "Download E-Catalog (PDF)",
    blogLead: "Read more about private-label programmes in our guide:",
    blogLink: "OEM & private label wiper blades: a complete guide",
  },
  es: {
    h1: "Escobillas limpiaparabrisas OEM y ODM — Fabricación personalizada por LELION",
    sub: "Escobillas limpiaparabrisas de marca blanca y desarrollo personalizado, fabricadas en Ningbo, China.",
    intro:
      "LELION es un fabricante de escobillas limpiaparabrisas en Ningbo, China, que produce para mayoristas, distribuidores y propietarios de marcas blancas desde 2011. Nuestra fábrica está certificada según ISO 9001:2015 (n.º 134956, NQA) y cuenta con el certificado CE (n.º M.2022.206.C79712, UDEM). Desarrollamos y producimos bajo su marca — desde una cantidad de prueba reducida hasta contenedores completos.",
    whyTitle: "Por qué trabajar con LELION",
    features: [
      {
        t: "MOQ bajo, pensado para pedidos de prueba",
        d: "Desde 500 unidades por pedido — y la mayoría de los modelos desde solo 100 unidades por talla. Preferimos empezar con poco que pedirle que arriesgue un contenedor.",
      },
      { t: "Envío rápido de artículos en stock", d: "Los artículos en stock se envían en 7 días laborables." },
      { t: "Su marca, no la nuestra", d: "Grabado de logotipo en conectores, embalaje impreso y cajas personalizadas." },
      {
        t: "Calidad certificada",
        d: "ISO 9001:2015 · CE. Datos de ensayo de propiedades físicas y durabilidad de la goma publicados en el sitio.",
      },
    ],
    termsTitle: "Condiciones OEM / ODM de un vistazo",
    terms: [
      {
        k: "Cantidad mínima de pedido",
        v: "Desde 500 unidades por pedido · la mayoría de los modelos desde 100 unidades por talla · algunos artículos especiales tienen un mínimo superior",
      },
      { k: "Plazo de muestras", v: "7–15 días" },
      {
        k: "Plazo de entrega",
        v: "7 días laborables para artículos en stock · 15–35 días laborables para producción sin stock y personalizada",
      },
      { k: "Formas de pago", v: "T/T · Tarjeta de crédito / débito · Apple Pay · Google Pay · Afterpay · Alipay" },
      {
        k: "Política de muestras",
        v: "Muestras gratuitas — 2 unidades por artículo, con el transporte a cargo del comprador. Cualquier coste de muestreo o utillaje personalizado se abona en su primer pedido de producción.",
      },
      { k: "Personalización", v: "Marca blanca OEM · desarrollo ODM · colores, embalaje y conectores personalizados" },
    ],
    stepsTitle: "Cómo empezar — 5 pasos",
    steps: [
      {
        t: "Paso 1 · Análisis de requisitos",
        d: "Indíquenos su cantidad objetivo, tipo de producto, mercado de destino e idea de embalaje. Confirmamos la viabilidad y presupuesto.",
      },
      {
        t: "Paso 2 · Planos y confirmación de materiales",
        d: "Preparamos los planos técnicos y confirmamos la calidad de la goma, el tipo de armazón y el tipo de conector.",
      },
      {
        t: "Paso 3 · Prototipos y muestras",
        d: "Se producen y ensayan muestras de ajuste, rendimiento de barrido y aspecto. Muestreo: 7–15 días.",
      },
      {
        t: "Paso 4 · Confirmación del pedido y producción",
        d: "Tras la aprobación programamos la producción. En stock 7 días laborables; personalizado 15–35 días laborables.",
      },
      {
        t: "Paso 5 · Inspección, embalaje y envío",
        d: "Inspección previa al envío, su embalaje de marca y la documentación de transporte.",
      },
    ],
    faqTitle: "Preguntas frecuentes",
    faq: [
      {
        q: "¿Cuál es su cantidad mínima de pedido?",
        a: "Los pedidos empiezan en 500 unidades. En la mayoría de los modelos puede pedir desde 100 unidades por talla, de modo que puede probar una sola talla antes de comprometerse con un pedido completo. Algunos artículos especiales tienen un mínimo superior.",
      },
      { q: "¿Cuánto tarda el muestreo?", a: "7–15 días." },
      {
        q: "¿Cuál es su plazo de entrega?",
        a: "7 días laborables para artículos en stock; 15–35 días laborables para producción sin stock y personalizada. El calendario exacto se confirma con su pedido.",
      },
      {
        q: "¿Pueden producir bajo nuestra propia marca?",
        a: "Sí. El grabado de logotipo en conectores, el embalaje impreso y las cajas personalizadas están disponibles como marca blanca OEM. Para ODM completo desarrollamos según su especificación.",
      },
      {
        q: "¿Puedo recibir muestras?",
        a: "Sí. Ofrecemos muestras gratuitas (2 unidades por artículo), con el transporte a su cargo. Si su proyecto requiere muestreo o utillaje personalizado, ese coste se abona en su primer pedido de producción.",
      },
      {
        q: "¿Qué formas de pago aceptan?",
        a: "T/T, tarjetas de crédito y débito, Apple Pay, Google Pay, Afterpay y Alipay.",
      },
      { q: "¿Qué mercados atienden?", a: "Actualmente exportamos a más de 50 países. Nuestro equipo responde en menos de 12 horas en días laborables." },
    ],
    ctaTitle: "Comience su proyecto de marca blanca",
    ctaText: "Indíquenos su cantidad objetivo, tipo de producto e idea de embalaje — respondemos en menos de 12 horas en días laborables.",
    btnQuote: "Solicitar presupuesto",
    btnCatalog: "Descargar E-Catálogo (PDF)",
    blogLead: "Lea más sobre los programas de marca blanca en nuestra guía:",
    blogLink: "Escobillas limpiaparabrisas OEM y de marca blanca: guía completa",
  },
  ru: {
    h1: "Щётки стеклоочистителя OEM и ODM — изготовление на заказ от LELION",
    sub: "Щётки стеклоочистителя под собственной торговой маркой и по индивидуальной разработке, произведённые в Нинбо, Китай.",
    intro:
      "LELION — производитель щёток стеклоочистителя в Нинбо, Китай, работающий для оптовиков, дистрибьюторов и владельцев собственных марок с 2011 года. Наша фабрика сертифицирована по ISO 9001:2015 (№ 134956, NQA) и имеет сертификат CE (№ M.2022.206.C79712, UDEM). Мы разрабатываем и производим под вашим брендом — от небольшой пробной партии до полных контейнеров.",
    whyTitle: "Почему стоит работать с LELION",
    features: [
      {
        t: "Низкий MOQ — для пробных заказов",
        d: "От 500 шт. за заказ — а большинство моделей всего от 100 шт. на размер. Мы предпочитаем начать с малого, чем просить вас рисковать контейнером.",
      },
      { t: "Быстрая отгрузка со склада", d: "Позиции со склада отгружаются за 7 рабочих дней." },
      { t: "Ваш бренд, а не наш", d: "Гравировка логотипа на адаптерах, печатная упаковка, индивидуальные коробки." },
      {
        t: "Сертифицированное качество",
        d: "ISO 9001:2015 · CE. Данные испытаний резиновой ленты на физические свойства и износостойкость опубликованы на сайте.",
      },
    ],
    termsTitle: "Условия OEM / ODM кратко",
    terms: [
      {
        k: "Минимальный объём заказа",
        v: "От 500 шт. за заказ · большинство моделей от 100 шт. на размер · для отдельных специальных позиций минимум выше",
      },
      { k: "Срок изготовления образцов", v: "7–15 дней" },
      {
        k: "Срок производства",
        v: "7 рабочих дней для позиций со склада · 15–35 рабочих дней при отсутствии на складе и для индивидуального производства",
      },
      { k: "Способы оплаты", v: "T/T · Кредитная / дебетовая карта · Apple Pay · Google Pay · Afterpay · Alipay" },
      {
        k: "Условия по образцам",
        v: "Бесплатные образцы — 2 шт. на позицию, доставка за счёт покупателя. Стоимость индивидуальных образцов или оснастки засчитывается в первый производственный заказ.",
      },
      { k: "Кастомизация", v: "OEM под собственной маркой · разработка ODM · индивидуальные цвета, упаковка и адаптеры" },
    ],
    stepsTitle: "Как начать — 5 шагов",
    steps: [
      {
        t: "Шаг 1 · Обсуждение требований",
        d: "Сообщите нам желаемый объём, тип продукта, целевой рынок и идею упаковки. Мы подтверждаем возможность и даём цену.",
      },
      {
        t: "Шаг 2 · Чертёж и подтверждение материалов",
        d: "Мы готовим технические чертежи и подтверждаем класс резины, тип каркаса и тип адаптера.",
      },
      {
        t: "Шаг 3 · Опытные образцы",
        d: "Образцы изготавливаются и проверяются на посадку, качество очистки и внешний вид. Изготовление образцов: 7–15 дней.",
      },
      {
        t: "Шаг 4 · Подтверждение заказа и производство",
        d: "После утверждения мы планируем производство. Со склада — 7 рабочих дней; индивидуально — 15–35 рабочих дней.",
      },
      { t: "Шаг 5 · Инспекция, упаковка и отгрузка", d: "Инспекция перед отгрузкой, ваша брендированная упаковка и транспортные документы." },
    ],
    faqTitle: "Частые вопросы",
    faq: [
      {
        q: "Какой у вас минимальный объём заказа?",
        a: "Заказы начинаются от 500 шт. Для большинства моделей можно заказать от 100 шт. на размер, так что вы можете протестировать один размер, прежде чем оформлять полный заказ. Для некоторых специальных позиций минимум выше.",
      },
      { q: "Сколько времени занимает изготовление образцов?", a: "7–15 дней." },
      {
        q: "Каков срок производства?",
        a: "7 рабочих дней для позиций со склада; 15–35 рабочих дней при отсутствии на складе и для индивидуального производства. Точный график подтверждается вместе с заказом.",
      },
      {
        q: "Можете ли вы производить под нашим брендом?",
        a: "Да. Гравировка логотипа на адаптерах, печатная упаковка и индивидуальные коробки доступны как OEM под собственной маркой. Для полного ODM мы разрабатываем по вашему техническому заданию.",
      },
      {
        q: "Можно ли получить образцы?",
        a: "Да. Мы предоставляем бесплатные образцы (2 шт. на позицию), доставка за ваш счёт. Если проекту нужны индивидуальные образцы или оснастка, эта стоимость засчитывается в первый производственный заказ.",
      },
      { q: "Какие способы оплаты вы принимаете?", a: "T/T, кредитные и дебетовые карты, Apple Pay, Google Pay, Afterpay и Alipay." },
      { q: "Какие рынки вы обслуживаете?", a: "Сейчас мы экспортируем более чем в 50 стран. Наша команда отвечает в течение 12 часов в рабочие дни." },
    ],
    ctaTitle: "Начните проект под собственной маркой",
    ctaText: "Сообщите желаемый объём, тип продукта и идею упаковки — мы отвечаем в течение 12 часов в рабочие дни.",
    btnQuote: "Запросить цену",
    btnCatalog: "Скачать электронный каталог (PDF)",
    blogLead: "Подробнее о программах собственных марок — в нашем руководстве:",
    blogLink: "Щётки стеклоочистителя OEM и под собственной маркой: полное руководство",
  },
  fr: {
    h1: "Balais d'essuie-glace OEM et ODM — fabrication sur mesure par LELION",
    sub: "Balais d'essuie-glace en marque blanche et développement sur mesure, fabriqués à Ningbo, en Chine.",
    intro:
      "LELION est un fabricant de balais d'essuie-glace basé à Ningbo, en Chine, qui produit pour des grossistes, des distributeurs et des propriétaires de marques propres depuis 2011. Notre usine est certifiée ISO 9001:2015 (n° 134956, NQA) et détient le certificat CE (n° M.2022.206.C79712, UDEM). Nous développons et produisons sous votre marque — d'une petite quantité d'essai jusqu'à des conteneurs complets.",
    whyTitle: "Pourquoi travailler avec LELION",
    features: [
      {
        t: "MOQ bas, pensé pour les commandes d'essai",
        d: "À partir de 500 pièces par commande — et la plupart des modèles à partir de 100 pièces par taille. Nous préférons commencer petit avec vous plutôt que de vous faire risquer un conteneur.",
      },
      { t: "Expédition rapide des articles en stock", d: "Les articles en stock sont expédiés en 7 jours ouvrés." },
      { t: "Votre marque, pas la nôtre", d: "Gravure du logo sur les connecteurs, emballage imprimé, cartons personnalisés." },
      {
        t: "Qualité certifiée",
        d: "ISO 9001:2015 · CE. Données d'essai de propriétés physiques et de durabilité du caoutchouc publiées sur le site.",
      },
    ],
    termsTitle: "Conditions OEM / ODM en un coup d'œil",
    terms: [
      {
        k: "Quantité minimale de commande",
        v: "À partir de 500 pièces par commande · la plupart des modèles à partir de 100 pièces par taille · un minimum plus élevé s'applique à certains articles spéciaux",
      },
      { k: "Délai d'échantillonnage", v: "7–15 jours" },
      {
        k: "Délai de livraison",
        v: "7 jours ouvrés pour les articles en stock · 15–35 jours ouvrés pour la production hors stock et sur mesure",
      },
      { k: "Moyens de paiement", v: "T/T · Carte de crédit / débit · Apple Pay · Google Pay · Afterpay · Alipay" },
      {
        k: "Politique d'échantillons",
        v: "Échantillons gratuits — 2 pièces par article, transport à la charge de l'acheteur. Tout frais d'échantillonnage ou d'outillage sur mesure est déduit de votre première commande de production.",
      },
      { k: "Personnalisation", v: "Marque blanche OEM · développement ODM · couleurs, emballage et connecteurs personnalisés" },
    ],
    stepsTitle: "Comment démarrer — 5 étapes",
    steps: [
      {
        t: "Étape 1 · Analyse du besoin",
        d: "Indiquez-nous votre quantité cible, le type de produit, le marché visé et votre idée d'emballage. Nous confirmons la faisabilité et chiffrons.",
      },
      {
        t: "Étape 2 · Plans et confirmation des matériaux",
        d: "Nous préparons les plans techniques et confirmons la qualité de caoutchouc, le type d'armature et le type de connecteur.",
      },
      {
        t: "Étape 3 · Prototypes et échantillons",
        d: "Les échantillons sont produits et testés pour l'ajustement, la performance d'essuyage et l'aspect. Échantillonnage : 7–15 jours.",
      },
      {
        t: "Étape 4 · Confirmation de commande et production",
        d: "Après validation, nous planifions la production. En stock 7 jours ouvrés ; sur mesure 15–35 jours ouvrés.",
      },
      { t: "Étape 5 · Contrôle, emballage et expédition", d: "Contrôle avant expédition, votre emballage de marque et les documents d'expédition." },
    ],
    faqTitle: "Questions fréquentes",
    faq: [
      {
        q: "Quelle est votre quantité minimale de commande ?",
        a: "Les commandes démarrent à 500 pièces. Pour la plupart des modèles, vous pouvez commander à partir de 100 pièces par taille, ce qui vous permet de tester une seule taille avant de vous engager sur une commande complète. Certains articles spéciaux ont un minimum plus élevé.",
      },
      { q: "Combien de temps prend l'échantillonnage ?", a: "7–15 jours." },
      {
        q: "Quel est votre délai de livraison ?",
        a: "7 jours ouvrés pour les articles en stock ; 15–35 jours ouvrés pour la production hors stock et sur mesure. Le calendrier exact est confirmé avec votre commande.",
      },
      {
        q: "Pouvez-vous produire sous notre propre marque ?",
        a: "Oui. La gravure du logo sur les connecteurs, l'emballage imprimé et les cartons personnalisés sont disponibles en marque blanche OEM. Pour un ODM complet, nous développons selon votre cahier des charges.",
      },
      {
        q: "Puis-je obtenir des échantillons ?",
        a: "Oui. Nous fournissons des échantillons gratuits (2 pièces par article), le transport étant à votre charge. Si votre projet nécessite un échantillonnage ou un outillage sur mesure, ces frais sont déduits de votre première commande de production.",
      },
      { q: "Quels moyens de paiement acceptez-vous ?", a: "T/T, cartes de crédit et de débit, Apple Pay, Google Pay, Afterpay et Alipay." },
      { q: "Quels marchés servez-vous ?", a: "Nous exportons actuellement vers plus de 50 pays. Notre équipe répond en moins de 12 heures les jours ouvrés." },
    ],
    ctaTitle: "Lancez votre projet de marque blanche",
    ctaText: "Indiquez-nous votre quantité cible, le type de produit et votre idée d'emballage — nous répondons en moins de 12 heures les jours ouvrés.",
    btnQuote: "Demander un devis",
    btnCatalog: "Télécharger l'E-Catalogue (PDF)",
    blogLead: "Pour en savoir plus sur les programmes de marque blanche, lisez notre guide :",
    blogLink: "Balais d'essuie-glace OEM et en marque blanche : le guide complet",
  },
  de: {
    h1: "OEM- und ODM-Scheibenwischerblätter — Sonderanfertigung von LELION",
    sub: "Wischerblätter als Private Label und nach kundenspezifischer Entwicklung, gefertigt in Ningbo, China.",
    intro:
      "LELION ist ein Hersteller von Wischerblättern in Ningbo, China, der seit 2011 für Großhändler, Distributoren und Inhaber von Private-Label-Marken produziert. Unser Werk ist nach ISO 9001:2015 zertifiziert (Nr. 134956, NQA) und besitzt das CE-Zertifikat (Nr. M.2022.206.C79712, UDEM). Wir entwickeln und produzieren unter Ihrer Marke — von einer kleinen Testmenge bis zu vollen Containern.",
    whyTitle: "Warum mit LELION arbeiten",
    features: [
      {
        t: "Niedrige MOQ, gemacht für Testbestellungen",
        d: "Ab 500 Stück pro Bestellung — und die meisten Modelle ab nur 100 Stück pro Größe. Wir beginnen lieber klein mit Ihnen, als Sie auf einen Container setzen zu lassen.",
      },
      { t: "Schneller Versand bei Lagerware", d: "Artikel ab Lager werden in 7 Werktagen versandt." },
      { t: "Ihre Marke, nicht unsere", d: "Logogravur auf Adaptern, bedruckte Verpackung, individuelle Kartons." },
      {
        t: "Zertifizierte Qualität",
        d: "ISO 9001:2015 · CE. Prüfdaten zu physikalischen Eigenschaften und Haltbarkeit der Gummileiste sind auf der Website veröffentlicht.",
      },
    ],
    termsTitle: "OEM-/ODM-Konditionen auf einen Blick",
    terms: [
      {
        k: "Mindestbestellmenge",
        v: "Ab 500 Stück pro Bestellung · die meisten Modelle ab 100 Stück pro Größe · für bestimmte Sonderartikel gilt eine höhere Mindestmenge",
      },
      { k: "Musterzeit", v: "7–15 Tage" },
      {
        k: "Lieferzeit",
        v: "7 Werktage für Artikel ab Lager · 15–35 Werktage für Produktion ohne Lagerbestand und Sonderanfertigungen",
      },
      { k: "Zahlungsmethoden", v: "T/T · Kredit-/Debitkarte · Apple Pay · Google Pay · Afterpay · Alipay" },
      {
        k: "Musterregelung",
        v: "Kostenlose Muster — 2 Stück pro Artikel, Fracht zu Lasten des Käufers. Anfallende Kosten für Sondermuster oder Werkzeuge werden mit Ihrer ersten Produktionsbestellung verrechnet.",
      },
      { k: "Individualisierung", v: "OEM Private Label · ODM-Entwicklung · individuelle Farben, Verpackung und Adapter" },
    ],
    stepsTitle: "So starten Sie — 5 Schritte",
    steps: [
      {
        t: "Schritt 1 · Anforderungsgespräch",
        d: "Nennen Sie uns Ihre Zielmenge, Produktart, Zielmarkt und Verpackungsidee. Wir prüfen die Machbarkeit und kalkulieren.",
      },
      {
        t: "Schritt 2 · Zeichnung und Materialbestätigung",
        d: "Wir erstellen technische Zeichnungen und bestätigen Gummiqualität, Rahmenart und Anschlusstyp.",
      },
      {
        t: "Schritt 3 · Prototypen und Muster",
        d: "Muster werden gefertigt und auf Passform, Wischleistung und Aussehen geprüft. Musterzeit: 7–15 Tage.",
      },
      {
        t: "Schritt 4 · Auftragsbestätigung und Produktion",
        d: "Nach Freigabe planen wir die Produktion. Ab Lager 7 Werktage; Sonderanfertigung 15–35 Werktage.",
      },
      { t: "Schritt 5 · Prüfung, Verpackung und Versand", d: "Prüfung vor Versand, Ihre Markenverpackung und die Versanddokumente." },
    ],
    faqTitle: "Häufige Fragen",
    faq: [
      {
        q: "Wie hoch ist Ihre Mindestbestellmenge?",
        a: "Bestellungen beginnen bei 500 Stück. Bei den meisten Modellen können Sie ab 100 Stück pro Größe bestellen, sodass Sie eine einzelne Größe testen können, bevor Sie eine vollständige Bestellung aufgeben. Bei bestimmten Sonderartikeln gilt eine höhere Mindestmenge.",
      },
      { q: "Wie lange dauert die Bemusterung?", a: "7–15 Tage." },
      {
        q: "Wie lang ist Ihre Lieferzeit?",
        a: "7 Werktage für Artikel ab Lager; 15–35 Werktage für Produktion ohne Lagerbestand und Sonderanfertigungen. Der genaue Zeitplan wird mit Ihrer Bestellung bestätigt.",
      },
      {
        q: "Können Sie unter unserer eigenen Marke produzieren?",
        a: "Ja. Logogravur auf Adaptern, bedruckte Verpackung und individuelle Kartons sind als OEM Private Label verfügbar. Für vollständiges ODM entwickeln wir nach Ihrer Spezifikation.",
      },
      {
        q: "Kann ich Muster erhalten?",
        a: "Ja. Wir stellen kostenlose Muster (2 Stück pro Artikel) bereit, die Fracht geht zu Ihren Lasten. Benötigt Ihr Projekt Sondermuster oder Werkzeuge, werden diese Kosten mit Ihrer ersten Produktionsbestellung verrechnet.",
      },
      { q: "Welche Zahlungsmethoden akzeptieren Sie?", a: "T/T, Kredit- und Debitkarten, Apple Pay, Google Pay, Afterpay und Alipay." },
      { q: "Welche Märkte bedienen Sie?", a: "Wir exportieren derzeit in über 50 Länder. Unser Team antwortet an Werktagen innerhalb von 12 Stunden." },
    ],
    ctaTitle: "Starten Sie Ihr Private-Label-Projekt",
    ctaText: "Nennen Sie uns Ihre Zielmenge, Produktart und Verpackungsidee — wir antworten an Werktagen innerhalb von 12 Stunden.",
    btnQuote: "Angebot anfordern",
    btnCatalog: "E-Katalog herunterladen (PDF)",
    blogLead: "Mehr über Private-Label-Programme in unserem Leitfaden:",
    blogLink: "OEM- und Private-Label-Wischerblätter: ein vollständiger Leitfaden",
  },
  zh: {
    h1: "OEM / ODM 雨刮片 — LELION 定制制造",
    sub: "以您的品牌生产与定制开发的雨刮片，产地中国宁波。",
    intro:
      "LELION 是一家位于中国宁波的雨刮片制造商，自 2011 年起为批发商、经销商与自有品牌客户生产。工厂通过 ISO 9001:2015 认证（证书号 134956，NQA），并持有 CE 证书（编号 M.2022.206.C79712，UDEM）。我们可按您的品牌开发与生产 —— 从少量试单到整柜。",
    whyTitle: "为什么选择 LELION",
    features: [
      {
        t: "起订量低，专为试单设计",
        d: "整单 500 pcs 起 —— 多数型号单尺寸仅需 100 pcs 起。我们更愿意与您从小量开始，而不是让您押一整个柜。",
      },
      { t: "现货快速发货", d: "现货产品 7 个工作日内发货。" },
      { t: "打您的品牌，不是我们的", d: "接口处雕刻 logo、印刷包装、定制纸箱。" },
      { t: "认证质量", d: "ISO 9001:2015 · CE。胶条物理性能与耐久性测试数据已在网站公开。" },
    ],
    termsTitle: "OEM / ODM 条款一览",
    terms: [
      { k: "最小起订量", v: "整单 500 pcs 起 · 多数型号单尺寸 100 pcs 起 · 部分特殊产品起订量更高" },
      { k: "打样时间", v: "7–15 天" },
      { k: "交期", v: "现货 7 个工作日 · 非现货与定制生产 15–35 个工作日" },
      { k: "付款方式", v: "T/T · 信用卡 / 借记卡 · Apple Pay · Google Pay · Afterpay · Alipay" },
      {
        k: "样品政策",
        v: "免费样品 —— 每项 2 pcs，运费由买方承担。定制打样或开模费用可在首个生产订单中抵扣。",
      },
      { k: "定制范围", v: "OEM 贴牌 · ODM 开发 · 定制颜色、包装与接口" },
    ],
    stepsTitle: "合作流程 —— 5 步",
    steps: [
      { t: "第 1 步 · 需求沟通", d: "告知目标数量、产品类型、目标市场与包装构想。我们确认可行性并报价。" },
      { t: "第 2 步 · 图纸与材料确认", d: "我们制作技术图纸，并确认胶料等级、骨架结构与接口类型。" },
      { t: "第 3 步 · 打样与样品", d: "制作样品并测试贴合度、刮拭表现与外观。打样时间：7–15 天。" },
      { t: "第 4 步 · 确认订单与生产", d: "确认后安排生产。现货 7 个工作日；定制 15–35 个工作日。" },
      { t: "第 5 步 · 验货、包装与出货", d: "出货前验货、您的品牌包装与运输单据。" },
    ],
    faqTitle: "常见问题",
    faq: [
      {
        q: "最小起订量是多少？",
        a: "订单 500 pcs 起。多数型号可按单尺寸 100 pcs 起订，因此您可以先试一个尺寸，再决定整单。部分特殊产品起订量更高。",
      },
      { q: "打样需要多久？", a: "7–15 天。" },
      { q: "交期是多久？", a: "现货 7 个工作日；非现货与定制生产 15–35 个工作日。具体排期以订单确认为准。" },
      {
        q: "可以按我们自己的品牌生产吗？",
        a: "可以。接口处雕刻 logo、印刷包装与定制纸箱均属 OEM 贴牌范畴。完整 ODM 则按您的规格开发。",
      },
      {
        q: "可以拿样品吗？",
        a: "可以。我们提供免费样品（每项 2 pcs），运费由您承担。若项目需要定制打样或开模，该费用可在首个生产订单中抵扣。",
      },
      { q: "接受哪些付款方式？", a: "T/T、信用卡与借记卡、Apple Pay、Google Pay、Afterpay 与 Alipay。" },
      { q: "服务哪些市场？", a: "目前出口 50 多个国家。我们的团队在工作日 12 小时内回复。" },
    ],
    ctaTitle: "开启您的自有品牌项目",
    ctaText: "告诉我们目标数量、产品类型与包装构想 —— 我们在工作日 12 小时内回复。",
    btnQuote: "获取报价",
    btnCatalog: "下载电子目录（PDF）",
    blogLead: "关于贴牌项目的更多内容，见我们的指南：",
    blogLink: "OEM 与贴牌雨刮片：完整指南",
  },
};

export default function Page() {
  const params = useParams();
  const lang = (params?.lang as string) || "en";
  const c = oem[lang] || oem.en;
  const l = (p: string) => "/" + lang + p;

  const h2: React.CSSProperties = { fontSize: "32px", fontWeight: 800, color: "var(--primary)", margin: "0 0 15px 0", textAlign: "center" };
  const h3: React.CSSProperties = { fontSize: "19px", fontWeight: 700, margin: "0 0 10px", color: "var(--text-primary)" };
  const body: React.CSSProperties = { margin: 0, color: "var(--text-secondary)", fontSize: "14px", lineHeight: 1.7 };

  return (
    <main>
      <section className="banner-dark">
        <div className="container">
          <h1 className="banner-title">{c.h1}</h1>
          <p className="banner-subtitle">{c.sub}</p>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow">
          <p style={{ margin: 0, fontSize: "16px", lineHeight: 1.8, color: "var(--text-secondary)" }}>{c.intro}</p>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <h2 style={h2}>{c.whyTitle}</h2>
          <div className="grid-2col" style={{ marginTop: "45px" }}>
            {c.features.map((f, i) => (
              <div className="card" key={i}>
                <div className="card-body">
                  <h3 style={h3}>{f.t}</h3>
                  <p style={body}>{f.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow">
          <h2 style={h2}>{c.termsTitle}</h2>
          <table className="spec-table" style={{ marginTop: "35px" }}>
            <tbody>
              {c.terms.map((r, i) => (
                <tr key={i}>
                  <td>{r.k}</td>
                  <td>{r.v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section-alt">
        <div className="container-narrow">
          <h2 style={h2}>{c.stepsTitle}</h2>
          <div style={{ marginTop: "40px" }}>
            {c.steps.map((s, i) => (
              <div key={i} style={{ display: "flex", gap: "20px", marginBottom: "28px" }}>
                <div
                  style={{
                    flex: "0 0 40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "var(--accent-light)",
                    color: "var(--accent)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    fontSize: "16px",
                  }}
                >
                  {i + 1}
                </div>
                <div style={{ flex: "1 1 auto", minWidth: 0 }}>
                  <h3 style={h3}>{s.t}</h3>
                  <p style={body}>{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow">
          <h2 style={h2}>{c.faqTitle}</h2>
          <div style={{ marginTop: "35px" }}>
            {c.faq.map((f, i) => (
              <div className="faq-item" key={i}>
                <h3 className="faq-question" style={{ cursor: "default", margin: 0 }}>
                  {f.q}
                </h3>
                <div className="faq-answer">
                  <div className="faq-answer-inner">{f.a}</div>
                </div>
              </div>
            ))}
          </div>
          <p style={{ margin: "30px 0 0", fontSize: "15px", lineHeight: 1.7, color: "var(--text-secondary)" }}>
            {c.blogLead}{" "}
            <Link href={l("/blog/oem-private-label-wiper-blades-guide")} style={{ color: "var(--accent)", fontWeight: 600 }}>
              {c.blogLink}
            </Link>
          </p>
        </div>
      </section>

      <section className="section-dark">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ ...h2, color: "#fff" }}>{c.ctaTitle}</h2>
          <p style={{ margin: "0 auto 30px", maxWidth: "640px", color: "var(--text-muted)", fontSize: "15px", lineHeight: 1.7 }}>
            {c.ctaText}
          </p>
          <div style={{ display: "flex", gap: "15px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href={l("/contact")} className="btn-primary-lg" style={{ textDecoration: "none" }}>
              {c.btnQuote}
            </Link>
            <a
              href="/Catalog.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-lg btn-outline"
              style={{ textDecoration: "none" }}
            >
              {c.btnCatalog}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
