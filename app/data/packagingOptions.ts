// Packaging options shown on the home page.
// Content supplied by the factory (2026-11); sizes, carton quantities and the
// 2,000 pc logo-printing threshold are real production facts, not marketing copy.

export type PackagingLocale = "en" | "es" | "ru" | "fr" | "de" | "zh";
type L = Record<PackagingLocale, string>;

export type PackagingOption = {
  id: string;
  img: string;
  spec: string;
  name: L;
  desc: L;
};

export const packagingNote: L = {
  en: "Custom logo printing on any of these packs requires a total order of 2,000 pcs or more. Below that quantity, or without print-ready artwork, an additional setup charge applies.",
  es: "La impresión de logo personalizado en cualquiera de estos embalajes requiere un pedido total de 2.000 unidades o más. Por debajo de esa cantidad, o sin arte final, se aplica un cargo adicional.",
  fr: "L'impression de logo personnalisé sur l'un de ces emballages nécessite une commande totale de 2 000 pièces minimum. En dessous, ou sans fichier prêt à imprimer, un frais de calage s'applique.",
  de: "Der Aufdruck eines eigenen Logos auf einer dieser Verpackungen erfordert eine Gesamtbestellung von mindestens 2.000 Stück. Darunter oder ohne druckfertige Datei fällt eine zusätzliche Einrichtungsgebühr an.",
  ru: "Печать собственного логотипа на любой из этих упаковок требует общего заказа от 2000 шт. При меньшем количестве или без готового макета взимается дополнительная плата за подготовку.",
  zh: "以上任一包装的定制 logo 印刷，需整单达到 2000 件以上；不足 2000 件，或客户无法提供包装设计稿，需另收费用。",
};

export const packagingOptions: PackagingOption[] = [
  {
    id: "pp-clear-window",
    img: "/packaging/pp-clear-window.jpg",
    spec: "14–28\" · 50 / 100 pcs per carton",
    name: {
      en: "PP Box with Clear Window",
      es: "Caja PP con ventana central",
      fr: "Boîte PP à fenêtre centrale",
      de: "PP-Box mit Sichtfenster",
      ru: "Коробка PP с окном",
      zh: "PP 中间开窗盒",
    },
    desc: {
      en: "Moulded PP box with a clear window running down the centre, so the blade is visible before the box is opened. Hang hole for pegboard display.",
      es: "Caja de PP moldeado con ventana transparente en el centro, para ver la escobilla antes de abrirla. Ojal superior para exposición en estantería.",
      fr: "Boîte en PP moulé avec fenêtre transparente au centre, l'essuie-glace est visible avant ouverture. Trou de suspension pour présentoir.",
      de: "Formteil aus PP mit durchgehendem Sichtfenster in der Mitte, der Wischer ist vor dem Öffnen sichtbar. Aufhängebohrung für Regalaufhängung.",
      ru: "Литая коробка из PP с прозрачным окном по центру: дворник виден до вскрытия упаковки. Отверстие для подвеса на витрине.",
      zh: "PP 注塑盒，正面中间为整条透明开窗，不开盒即可看到雨刷本体；顶部挂孔，适合货架挂列。",
    },
  },
  {
    id: "pp-frosted-bw866",
    img: "/packaging/pp-frosted-bw866.jpg",
    spec: "14–28\" · 50 / 100 pcs per carton",
    name: {
      en: "PP Frosted Box (BW866)",
      es: "Caja PP mate (BW866)",
      fr: "Boîte PP mate (BW866)",
      de: "PP-Mattbox (BW866)",
      ru: "Матовая коробка PP (BW866)",
      zh: "PP 磨砂盒（BW866）",
    },
    desc: {
      en: "Frosted PP box: the whole body is translucent matte plastic rather than a cut-out window. Printed in LELION silver and green for the BW866 multifunction blade.",
      es: "Caja de PP mate: todo el cuerpo es plástico translúcido, no una ventana recortada. Impresa en plata y verde LELION para la escobilla multifunción BW866.",
      fr: "Boîte en PP mate : le corps entier est en plastique translucide, pas une fenêtre découpée. Imprimée argent et vert LELION pour l'essuie-glace multifonction BW866.",
      de: "PP-Mattbox: der gesamte Korpus ist transluzenter Matte-Kunststoff, kein ausgeschnittenes Fenster. In LELION-Silber/Grün für den Multifunktionswischer BW866.",
      ru: "Матовая коробка PP: весь корпус из полупрозрачного матового пластика, а не вырезанное окно. Печать в серебристо-зелёной гамме LELION для щётки BW866.",
      zh: "PP 磨砂盒：整体盒身是半透明磨砂质感，不是割出的一块透明窗。银绿配色印刷，对应 BW866 多功能雨刷。",
    },
  },
  {
    id: "pp-hex-bw857",
    img: "/packaging/pp-hex-bw857.jpg",
    spec: "14–28\" · 50 / 100 pcs per carton",
    name: {
      en: "PP Hexagonal Box (BW857)",
      es: "Caja PP hexagonal (BW857)",
      fr: "Boîte PP hexagonale (BW857)",
      de: "PP-Sechskantbox (BW857)",
      ru: "Шестигранная коробка PP (BW857)",
      zh: "PP 六角盒（BW857）",
    },
    desc: {
      en: "Hexagonal PP box with clip-on end caps instead of the usual tuck-in ends, plus a clear centre window. Used for the BW857 multifunction blade.",
      es: "Caja de PP hexagonal con tapas de clip en los extremos en lugar de las habituales de plegado, y ventana transparente central. Para la escobilla BW857.",
      fr: "Boîte PP hexagonale avec bouchons à clipser aux extrémités au lieu des rabats habituels, et fenêtre centrale transparente. Pour l'essuie-glace BW857.",
      de: "Sechskant-PP-Box mit aufclipsbaren Endkappen statt der üblichen Stecklaschen, dazu ein zentrales Sichtfenster. Für den Wischer BW857.",
      ru: "Шестигранная коробка PP с защёлкивающимися торцевыми крышками вместо обычных клапанов и прозрачным окном по центру. Для щётки BW857.",
      zh: "六角形 PP 盒，头尾为卡扣式端盖，不是常规的折入式；中部透明开窗。用于 BW857 多功能雨刷。",
    },
  },
  {
    id: "paper-box-truck",
    img: "/packaging/paper-box-truck.jpg",
    spec: "26\" · 28\" · 50 pcs per carton",
    name: {
      en: "Paper Box for Truck Blades",
      es: "Caja de papel para camión",
      fr: "Boîte papier pour poids lourds",
      de: "Papierbox für LKW-Wischer",
      ru: "Картонная коробка для грузовиков",
      zh: "卡车雨刮纸盒",
    },
    desc: {
      en: "Printed paper box for bus and truck blades in 26 and 28 inch. The lower panel lists the commercial vehicle makes the blade fits.",
      es: "Caja de papel impresa para escobillas de autobús y camión de 26 y 28 pulgadas. El panel inferior lista las marcas de vehículos industriales compatibles.",
      fr: "Boîte papier imprimée pour essuie-glaces de bus et poids lourds en 26 et 28 pouces. Le panneau inférieur liste les marques de véhicules industriels compatibles.",
      de: "Bepackte Papierbox für Bus- und LKW-Wischer in 26 und 28 Zoll. Das untere Feld listet die passenden Nutzfahrzeugmarken.",
      ru: "Картонная коробка для автобусных и грузовых щёток 26 и 28 дюймов. На нижней панели перечислены подходящие марки коммерческой техники.",
      zh: "商用车雨刷专用纸盒，常规 26 寸与 28 寸两种。下半版面印有适配的卡车 / 客车品牌清单。",
    },
  },
  {
    id: "paper-box-hook-line",
    img: "/packaging/paper-box-hook-line.jpg",
    spec: "14–28\" · adaptor illustration",
    name: {
      en: "Line-Art Box with Adaptor Guide",
      es: "Caja lineal con guía de adaptadores",
      fr: "Boîte line-art avec guide d'adaptateurs",
      de: "Line-Art-Box mit Adapterübersicht",
      ru: "Коробка с рисунком адаптеров",
      zh: "线稿盒（接头图示）",
    },
    desc: {
      en: "Grey line-art paper box printed with a technical outline of the hook adaptors the blade ships with, so a buyer can match the fitting before opening the pack.",
      es: "Caja de papel con line-art gris que muestra en esquema técnico los adaptadores de gancho incluidos, para comprobar el montaje antes de abrir.",
      fr: "Boîte papier en line-art gris montrant en schéma technique les adaptateurs à crochet fournis, pour vérifier le montage avant ouverture.",
      de: "Graue Line-Art-Papierbox mit technischer Prinzipskizze der mitgelieferten Hakenadapter, damit der Käufer die Befestigung vor dem Öffnen prüfen kann.",
      ru: "Серая коробка с технической линейной схемой крючковых адаптеров в комплекте: способ крепления можно проверить до вскрытия.",
      zh: "灰白线稿纸盒，盒面以技术线稿形式表现随附的挂钩接头，买家不必开盒即可核对适配方式。",
    },
  },
  {
    id: "paper-box-blue",
    img: "/packaging/paper-box-blue.jpg",
    spec: "14–28\" · 50 pcs per carton",
    name: {
      en: "Blue Colour Box",
      es: "Caja a color azul",
      fr: "Boîte couleur bleue",
      de: "Blaue Farbbox",
      ru: "Синяя цветная коробка",
      zh: "蓝白彩盒",
    },
    desc: {
      en: "Blue and white colour box for the universal soft blade, with silver chevron bands, a size badge and all-season pictograms.",
      es: "Caja a color azul y blanco para la escobilla blanda universal, con bandas plateadas en chevrón, placa de talla y pictogramas para todo clima.",
      fr: "Boîte couleur bleu et blanc pour l'essuie-glace souple universel, avec bandes argentées en chevron, plaquette de taille et pictogrammes toutes saisons.",
      de: "Blau-weiße Farbbox für den universellen Weichwischer, mit silbernen Winkelbändern, Größenplakette und Ganzjahres-Piktogrammen.",
      ru: "Сине-белая коробка для универсальной мягкой щётки: серебристые шевронные полосы, табличка размера и всесезонные пиктограммы.",
      zh: "通用型软骨雨刷的彩盒，蓝白配色，上下银色 V 形斜切带，盒面有尺寸标牌与全天候图标。",
    },
  },
  {
    id: "blister-yellow-red",
    img: "/packaging/blister-yellow-red.jpg",
    spec: "14–28\" · 50 packs per carton",
    name: {
      en: "Single-Face Blister (Yellow/Red)",
      es: "Blíster de una cara (amarillo/rojo)",
      fr: "Blister une face (jaune/rouge)",
      de: "Einseitig-Blister (gelb/rot)",
      ru: "Односторонний блистер (жёлтый/красный)",
      zh: "黄红单面吸塑",
    },
    desc: {
      en: "Single-face blister: a clear bubble over a printed card. Used for frame blades; the card carries a fitment list by make and year. Can be packed as a pair.",
      es: "Blíster de una cara: burbuja transparente sobre cartulina impresa. Para escobillas de armazón; la cartulina lleva lista de aplicaciones por marca y año. Puede embalarse por pares.",
      fr: "Blister une face : coque transparente sur carton imprimé. Pour essuie-glaces à armature ; le carton porte une liste d'applications par marque et année. Emballage par paire possible.",
      de: "Einseitig-Blister: Klarsichtblase auf bedruckter Karte. Für Bügelwischer; die Karte trägt eine Anwendungsliste nach Marke und Baujahr. Als Paar verpackbar.",
      ru: "Односторонний блистер: прозрачный купол на печатной карточке. Для каркасных щёток; на карточке список применяемости по маркам и годам. Возможна упаковка парой.",
      zh: "单面吸塑：背面卡纸、正面透明泡壳。用于有骨雨刷，卡纸上印有按品牌与年份列出的适配清单；可做双支装。",
    },
  },
  {
    id: "blister-green-classic",
    img: "/packaging/blister-green-classic.jpg",
    spec: "14–28\" · 50 packs per carton",
    name: {
      en: "Single-Face Blister (LELION Green)",
      es: "Blíster de una cara (verde LELION)",
      fr: "Blister une face (vert LELION)",
      de: "Einseitig-Blister (LELION-Grün)",
      ru: "Односторонний блистер (зелёный LELION)",
      zh: "绿色单面吸塑",
    },
    desc: {
      en: "Single-face blister in LELION green for the Classic series frame blade, with the size marked in a round badge.",
      es: "Blíster de una cara en verde LELION para la escobilla de armazón serie Classic, con la talla en una placa circular.",
      fr: "Blister une face vert LELION pour l'essuie-glace à armature série Classic, taille indiquée dans une plaquette ronde.",
      de: "Einseitig-Blister in LELION-Grün für den Bügelwischer der Classic-Serie, Größe in runder Plakette.",
      ru: "Односторонний блистер в зелёном цвете LELION для каркасной щётки серии Classic, размер в круглой плашке.",
      zh: "LELION 绿色的单面吸塑卡，用于 Classic 系列有骨雨刷；尺寸以圆形标牌标示。",
    },
  },
  {
    id: "paper-box-neutral",
    img: "/packaging/paper-box-neutral.jpg",
    spec: "16\" rear · 50 pcs per carton",
    name: {
      en: "Neutral White Box",
      es: "Caja blanca neutra",
      fr: "Boîte blanche neutre",
      de: "Neutrale weiße Box",
      ru: "Нейтральная белая коробка",
      zh: "中性白盒",
    },
    desc: {
      en: "Plain white neutral box with grey line art and no brand marks, for buyers who apply their own label. Used for rear blades.",
      es: "Caja blanca neutra con ilustraciones lineales grises y sin marcas, para compradores que aplican su propia etiqueta. Para escobillas traseras.",
      fr: "Boîte blanche neutre avec illustrations line-art grises et sans marque, pour les acheteurs qui apposent leur propre étiquette. Pour essuie-glaces arrière.",
      de: "Neutrale weiße Box mit grauer Line-Art und ohne Markenkennzeichnung, für Kunden mit eigenem Etikett. Für Heckscheibenwischer.",
      ru: "Нейтральная белая коробка с серой линейной графикой и без бренда — для наклейки собственной этикетки. Для задних щёток.",
      zh: "纯白中性盒，灰线稿满版，无任何品牌标识，供客户贴自有标签。用于后雨刮片。",
    },
  },
  {
    id: "blister-teflon-double",
    img: "/packaging/blister-teflon-double.jpg",
    spec: "14–28\" · 50 pcs per carton",
    name: {
      en: "Double-Face Blister (Premium)",
      es: "Blíster de dos caras (premium)",
      fr: "Blister deux faces (premium)",
      de: "Doppelseitig-Blister (Premium)",
      ru: "Двусторонний блистер (премиум)",
      zh: "双面透明高频吸塑",
    },
    desc: {
      en: "Double-face high-frequency blister: a clear shell front and back with a printed card sandwiched between. Used for premium blades with Teflon-coated natural rubber.",
      es: "Blíster de dos caras de alta frecuencia: coque transparente por delante y por detrás con una cartulina impresa en medio. Para escobillas premium con caucho natural con teflón.",
      fr: "Blister deux faces haute fréquence : coque transparente recto verso avec un carton imprimé pris en sandwich. Pour essuie-glaces premium à caoutchouc naturel téfloné.",
      de: "Doppelseitig-HF-Blister: Klarsichthülle vorn und hinten mit eingelegter bedruckter Karte. Für Premium-Wischer mit Teflon-beschichtetem Naturkautschuk.",
      ru: "Двусторонний высокочастотный блистер: прозрачная оболочка спереди и сзади, между ними печатная карточка. Для премиальных щёток с натуральным каучуком с тефлоном.",
      zh: "双面高频吸塑：正面与背面都是透明泡壳，印刷纸卡夹在中间。用于高端雨刷，配特氟龙涂层天然胶条。",
    },
  },
];
