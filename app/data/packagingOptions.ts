// Packaging options shown on the home page.
// Content supplied by the factory (2026-11). Sizes, carton quantities and the
// 2,000 pc logo-printing threshold are real production facts, not marketing copy.
// Descriptions are deliberately short: the tiles render five-across in two rows,
// so each one has to read cleanly in a ~200 px column.

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
  es: "La impresión de logo personalizado requiere un pedido total de 2.000 unidades o más. Por debajo de esa cantidad, o sin arte final, se aplica un cargo adicional.",
  fr: "L'impression de logo personnalisé nécessite une commande totale de 2 000 pièces minimum. En dessous, ou sans fichier prêt à imprimer, un frais de calage s'applique.",
  de: "Der Aufdruck eines eigenen Logos erfordert eine Gesamtbestellung von mindestens 2.000 Stück. Darunter oder ohne druckfertige Datei fällt eine Einrichtungsgebühr an.",
  ru: "Печать собственного логотипа требует общего заказа от 2000 шт. При меньшем количестве или без готового макета взимается дополнительная плата.",
  zh: "以上任一包装的定制 logo 印刷，需整单达到 2000 件以上；不足 2000 件，或客户无法提供包装设计稿，需另收费用。",
};

export const packagingOptions: PackagingOption[] = [
  {
    id: "pp-clear-window",
    img: "/packaging/pp-clear-window.jpg",
    spec: "14–28\" · 50 / 100 pcs",
    name: {
      en: "PP Box with Clear Window",
      es: "Caja PP con ventana central",
      fr: "Boîte PP à fenêtre centrale",
      de: "PP-Box mit Sichtfenster",
      ru: "Коробка PP с окном",
      zh: "PP 中间开窗盒",
    },
    desc: {
      en: "Moulded PP box, clear window down the centre, hang hole for pegboard display.",
      es: "Caja de PP moldeado, ventana transparente al centro y ojal para exposición.",
      fr: "Boîte PP moulée, fenêtre transparente au centre, trou de suspension pour présentoir.",
      de: "PP-Formteil, Sichtfenster in der Mitte, Aufhängebohrung für Regalaufhängung.",
      ru: "Литая коробка PP, прозрачное окно по центру, отверстие для подвеса.",
      zh: "PP 注塑盒，正面中间整条开窗，顶部挂孔适合货架挂列。",
    },
  },
  {
    id: "pp-frosted-bw866",
    img: "/packaging/pp-frosted-bw866.jpg",
    spec: "14–28\" · 50 / 100 pcs",
    name: {
      en: "PP Frosted Box (BW866)",
      es: "Caja PP mate (BW866)",
      fr: "Boîte PP mate (BW866)",
      de: "PP-Mattbox (BW866)",
      ru: "Матовая коробка PP (BW866)",
      zh: "PP 磨砂盒（BW866）",
    },
    desc: {
      en: "Frosted PP body, translucent all over rather than a cut-out window.",
      es: "Cuerpo de PP mate, translúcido en su totalidad, no una ventana recortada.",
      fr: "Corps en PP mate, translucide sur toute la surface, pas une fenêtre découpée.",
      de: "Mattes PP-Gehäuse, durchgehend transluzent statt ausgeschnittenem Fenster.",
      ru: "Матированный корпус PP, полупрозрачный целиком, а не вырезанное окно.",
      zh: "整体盒身为半透明磨砂质感，不是割出的一块透明窗。",
    },
  },
  {
    id: "pp-hex-bw857",
    img: "/packaging/pp-hex-bw857.jpg",
    spec: "14–28\" · 50 / 100 pcs",
    name: {
      en: "PP Hexagonal Box (BW857)",
      es: "Caja PP hexagonal (BW857)",
      fr: "Boîte PP hexagonale (BW857)",
      de: "PP-Sechskantbox (BW857)",
      ru: "Шестигранная коробка PP (BW857)",
      zh: "PP 六角盒（BW857）",
    },
    desc: {
      en: "Hexagonal PP box with clip-on end caps and a clear centre window.",
      es: "Caja de PP hexagonal con tapas de clip y ventana transparente central.",
      fr: "Boîte PP hexagonale, bouchons à clipser et fenêtre centrale transparente.",
      de: "Sechskant-PP-Box mit Clipkappen und zentralem Sichtfenster.",
      ru: "Шестигранная коробка PP с защёлкивающимися крышками и окном по центру.",
      zh: "六角形 PP 盒，头尾为卡扣式端盖，中部透明开窗。",
    },
  },
  {
    id: "paper-box-truck",
    img: "/packaging/paper-box-truck.jpg",
    spec: "26\" · 28\" · 50 pcs",
    name: {
      en: "Paper Box for Truck Blades",
      es: "Caja de papel para camión",
      fr: "Boîte papier pour poids lourds",
      de: "Papierbox für LKW-Wischer",
      ru: "Картонная коробка для грузовиков",
      zh: "卡车雨刮纸盒",
    },
    desc: {
      en: "Printed paper box for bus and truck blades in 26 and 28 inch.",
      es: "Caja de papel impresa para escobillas de autobús y camión de 26 y 28 pulgadas.",
      fr: "Boîte papier imprimée pour essuie-glaces de bus et poids lourds 26 et 28 pouces.",
      de: "Bedruckte Papierbox für Bus- und LKW-Wischer in 26 und 28 Zoll.",
      ru: "Картонная коробка для автобусных и грузовых щёток 26 и 28 дюймов.",
      zh: "商用车雨刷专用纸盒，常规 26 寸与 28 寸两种。",
    },
  },
  {
    id: "paper-box-hook-line",
    img: "/packaging/paper-box-hook-line.jpg",
    spec: "14–28\" · adaptor guide",
    name: {
      en: "Line-Art Box with Adaptor Guide",
      es: "Caja lineal con guía de adaptadores",
      fr: "Boîte line-art avec guide d'adaptateurs",
      de: "Line-Art-Box mit Adapterübersicht",
      ru: "Коробка с рисунком адаптеров",
      zh: "线稿盒（接头图示）",
    },
    desc: {
      en: "Grey line-art box showing the hook adaptors the blade ships with.",
      es: "Caja con line-art gris que muestra los adaptadores de gancho incluidos.",
      fr: "Boîte en line-art gris montrant les adaptateurs à crochet fournis.",
      de: "Graue Line-Art-Box mit Darstellung der mitgelieferten Hakenadapter.",
      ru: "Серая коробка с линейной схемой крючковых адаптеров в комплекте.",
      zh: "灰白线稿纸盒，盒面表现随附的挂钩接头。",
    },
  },
  {
    id: "paper-box-blue",
    img: "/packaging/paper-box-blue.jpg",
    spec: "14–28\" · 50 pcs",
    name: {
      en: "Blue Colour Box",
      es: "Caja a color azul",
      fr: "Boîte couleur bleue",
      de: "Blaue Farbbox",
      ru: "Синяя цветная коробка",
      zh: "蓝白彩盒",
    },
    desc: {
      en: "Blue and white colour box for universal soft blades, size badge included.",
      es: "Caja azul y blanca para escobillas blandas universales, con placa de talla.",
      fr: "Boîte bleu et blanc pour essuie-glaces souples universels, plaquette de taille.",
      de: "Blau-weiße Farbbox für universelle Weichwischer, mit Größenplakette.",
      ru: "Сине-белая коробка для универсальных мягких щёток, с плашкой размера.",
      zh: "通用软骨雨刷的彩盒，蓝白配色，盒面带尺寸标牌。",
    },
  },
  {
    id: "blister-yellow-red",
    img: "/packaging/blister-yellow-red.jpg",
    spec: "14–28\" · 50 packs",
    name: {
      en: "Single-Face Blister (Yellow/Red)",
      es: "Blíster de una cara (amarillo/rojo)",
      fr: "Blister une face (jaune/rouge)",
      de: "Einseitig-Blister (gelb/rot)",
      ru: "Односторонний блистер (жёлтый/красный)",
      zh: "黄红单面吸塑",
    },
    desc: {
      en: "Single-face blister over a printed card that carries the fitment list.",
      es: "Blíster de una cara sobre cartulina impresa con la lista de aplicaciones.",
      fr: "Blister une face sur carton imprimé portant la liste d'applications.",
      de: "Einseitig-Blister auf bedruckter Karte mit Anwendungsliste.",
      ru: "Односторонний блистер на печатной карточке со списком применяемости.",
      zh: "单面吸塑，背面卡纸印有按品牌与年份列出的适配清单。",
    },
  },
  {
    id: "blister-green-classic",
    img: "/packaging/blister-green-classic.jpg",
    spec: "14–28\" · 50 packs",
    name: {
      en: "Single-Face Blister (LELION Green)",
      es: "Blíster de una cara (verde LELION)",
      fr: "Blister une face (vert LELION)",
      de: "Einseitig-Blister (LELION-Grün)",
      ru: "Односторонний блистер (зелёный LELION)",
      zh: "绿色单面吸塑",
    },
    desc: {
      en: "LELION green single-face blister for the Classic series frame blade.",
      es: "Blíster verde LELION de una cara para la escobilla de armazón Classic.",
      fr: "Blister vert LELION une face pour l'essuie-glace à armature Classic.",
      de: "LELION-grüner Einseitig-Blister für den Bügelwischer der Classic-Serie.",
      ru: "Зелёный односторонний блистер LELION для каркасной щётки Classic.",
      zh: "LELION 绿色单面吸塑卡，用于 Classic 系列有骨雨刷。",
    },
  },
  {
    id: "paper-box-neutral",
    img: "/packaging/paper-box-neutral.jpg",
    spec: "16\" rear · 50 pcs",
    name: {
      en: "Neutral White Box",
      es: "Caja blanca neutra",
      fr: "Boîte blanche neutre",
      de: "Neutrale weiße Box",
      ru: "Нейтральная белая коробка",
      zh: "中性白盒",
    },
    desc: {
      en: "Plain white neutral box, no brand marks, for buyers applying own label.",
      es: "Caja blanca neutra sin marcas, para compradores que aplican su etiqueta.",
      fr: "Boîte blanche neutre sans marque, pour acheteurs apposant leur étiquette.",
      de: "Neutrale weiße Box ohne Markenkennzeichnung, für Kunden mit eigenem Etikett.",
      ru: "Нейтральная белая коробка без бренда — для своей этикетки.",
      zh: "纯白中性盒，无任何品牌标识，供客户贴自有标签。",
    },
  },
  {
    id: "blister-teflon-double",
    img: "/packaging/blister-teflon-double.jpg",
    spec: "14–28\" · 50 pcs",
    name: {
      en: "Double-Face Blister (Premium)",
      es: "Blíster de dos caras (premium)",
      fr: "Blister deux faces (premium)",
      de: "Doppelseitig-Blister (Premium)",
      ru: "Двусторонний блистер (премиум)",
      zh: "双面透明高频吸塑",
    },
    desc: {
      en: "Double-face high-frequency blister with a printed card sandwiched between.",
      es: "Blíster de dos caras de alta frecuencia con cartulina impresa en medio.",
      fr: "Blister deux faces haute fréquence avec carton imprimé intercalé.",
      de: "Doppelseitig-HF-Blister mit eingelegter bedruckter Karte.",
      ru: "Двусторонний высокочастотный блистер с печатной карточкой внутри.",
      zh: "双面高频吸塑，正面背面都是透明泡壳，印刷纸卡夹在中间。",
    },
  },
];
