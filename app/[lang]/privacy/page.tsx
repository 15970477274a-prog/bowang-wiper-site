import { translations, Locale } from "../../translations";

/**
 * Privacy policy.
 *
 * Content reflects decisions confirmed by the business owner on 2026-11-24:
 * the data controller is Ningbo Zhenhai Bowang Autoparts Co., Ltd., inquiry
 * data is retained for 24 months, and non-essential cookies (Google Analytics,
 * Ahrefs) are gated behind an opt-in consent banner. This is still an
 * engineering draft — legal counsel should review before relying on it.
 */

type PrivacyStrings = {
  updated: string;
  s1t: string; s1b: string;
  s2t: string; s2b: string;
  s3t: string; s3b: string;
  s4t: string; s4b: string;
  s5t: string; s5b: string;
  s6t: string; s6b: string;
  s7t: string; s7b: string;
};

const STRINGS: Record<string, PrivacyStrings> = {
  en: {
    updated: "Last updated: 24 November 2026",
    s1t: "1. Who we are",
    s1b: "Ningbo Zhenhai Bowang Autoparts Co., Ltd., Zhenhai District, Ningbo, Zhejiang, China (email bwb@bwwiper.com), is the data controller for inquiries submitted through this site.",
    s2t: "2. What data we collect",
    s2b: "When you submit an inquiry we collect the details you provide: name, business email, company, WhatsApp/phone, product, estimated quantity, required sizes, destination port/country, packaging preference and your message. We also receive standard server logs (including IP address) for security and abuse prevention.",
    s3t: "3. Why we use it",
    s3b: "We use your details to respond to your quote request, send samples and manage the potential business relationship. We only send marketing emails if you explicitly opted in via the checkbox on the inquiry form.",
    s4t: "4. Legal bases (GDPR)",
    s4b: "Responding to your inquiry: performance of a contract or our legitimate interests in answering business enquiries. Marketing emails: your consent (Art. 6(1)(a) GDPR), which you may withdraw at any time using the unsubscribe link in each email. Essential cookies: our legitimate interest in running a secure, working website.",
    s5t: "5. Retention and your rights",
    s5b: "We keep inquiry records for 24 months from the date of last contact, after which they are deleted. You may request access, correction, deletion or portability of your personal data, or object to processing, by contacting bwb@bwwiper.com. You also have the right to lodge a complaint with your local data protection supervisory authority.",
    s6t: "6. Cookies and analytics",
    s6b: "Essential cookies keep the site working (for example, remembering your language) and cannot be switched off. Analytics cookies from Google Analytics and Ahrefs are used to understand how the site is used; they are set only after you click \"Accept analytics\" in the cookie banner. You can change your choice at any time using the \"Cookie settings\" link in the footer.",
    s7t: "7. Contact",
    s7b: "For data protection questions: bwb@bwwiper.com — Ningbo Zhenhai Bowang Autoparts Co., Ltd., Zhenhai District, Ningbo, Zhejiang, China.",
  },
  es: {
    updated: "Última actualización: 24 de noviembre de 2026",
    s1t: "1. Quiénes somos",
    s1b: "Ningbo Zhenhai Bowang Autoparts Co., Ltd., distrito de Zhenhai, Ningbo, Zhejiang, China (correo bwb@bwwiper.com), es el responsable del tratamiento de las consultas enviadas a través de este sitio.",
    s2t: "2. Qué datos recogemos",
    s2b: "Al enviar una consulta recogemos los datos que nos facilitas: nombre, correo de empresa, empresa, WhatsApp/teléfono, producto, cantidad estimada, medidas requeridas, puerto/país de destino, preferencia de embalaje y tu mensaje. También recibimos registros de servidor estándar (incluida la dirección IP) por seguridad y prevención de abusos.",
    s3t: "3. Para qué los usamos",
    s3b: "Usamos tus datos para responder a tu solicitud de cotización, enviar muestras y gestionar la posible relación comercial. Solo enviamos correos de marketing si lo aceptaste explícitamente mediante la casilla del formulario.",
    s4t: "4. Bases legales (RGPD)",
    s4b: "Responder a tu consulta: ejecución de un contrato o nuestro interés legítimo en atender consultas comerciales. Correos de marketing: tu consentimiento (art. 6.1.a RGPD), que puedes retirar en cualquier momento mediante el enlace de baja. Cookies esenciales: nuestro interés legítimo en mantener un sitio seguro y funcional.",
    s5t: "5. Conservación y tus derechos",
    s5b: "Conservamos los registros de consultas durante 24 meses desde el último contacto, tras lo cual se eliminan. Puedes solicitar acceso, rectificación, supresión o portabilidad de tus datos, u oponerte al tratamiento, escribiendo a bwb@bwwiper.com. También tienes derecho a presentar una reclamación ante tu autoridad de control.",
    s6t: "6. Cookies y analítica",
    s6b: "Las cookies esenciales mantienen el sitio en funcionamiento (por ejemplo, recordar tu idioma) y no se pueden desactivar. Las cookies analíticas de Google Analytics y Ahrefs se usan para entender cómo se utiliza el sitio; solo se instalan después de que pulses «Aceptar analíticas» en el aviso de cookies. Puedes cambiar tu elección en cualquier momento mediante el enlace «Configuración de cookies» del pie de página.",
    s7t: "7. Contacto",
    s7b: "Para cuestiones de protección de datos: bwb@bwwiper.com — Ningbo Zhenhai Bowang Autoparts Co., Ltd., distrito de Zhenhai, Ningbo, Zhejiang, China.",
  },
  ru: {
    updated: "Последнее обновление: 24 ноября 2026 г.",
    s1t: "1. Кто мы",
    s1b: "Ningbo Zhenhai Bowang Autoparts Co., Ltd., район Чжэньхай, Нинбо, Чжэцзян, Китай (эл. почта bwb@bwwiper.com), является оператором персональных данных для запросов, отправленных через этот сайт.",
    s2t: "2. Какие данные мы собираем",
    s2b: "При отправке запроса мы собираем предоставленные вами данные: имя, рабочий адрес эл. почты, компанию, WhatsApp/телефон, товар, предполагаемый объём, требуемые размеры, порт/страну назначения, предпочтения по упаковке и ваше сообщение. Мы также получаем стандартные серверные журналы (включая IP-адрес) для безопасности и предотвращения злоупотреблений.",
    s3t: "3. Зачем мы их используем",
    s3b: "Мы используем ваши данные, чтобы ответить на запрос коммерческого предложения, отправить образцы и управлять возможными деловыми отношениями. Маркетинговые письма мы отправляем только при вашем явном согласии, отмеченном в форме запроса.",
    s4t: "4. Правовые основания (GDPR)",
    s4b: "Ответ на ваш запрос: исполнение договора или наши законные интересы в обработке деловых запросов. Маркетинговые письма: ваше согласие (ст. 6(1)(a) GDPR), которое можно отозвать в любое время по ссылке в письме. Необходимые cookie: наш законный интерес в обеспечении безопасной работы сайта.",
    s5t: "5. Срок хранения и ваши права",
    s5b: "Мы храним записи о запросах 24 месяца с даты последнего контакта, после чего удаляем их. Вы можете запросить доступ, исправление, удаление или перенос ваших данных либо возразить против обработки, написав на bwb@bwwiper.com. Вы также вправе подать жалобу в местный надзорный орган.",
    s6t: "6. Cookie и аналитика",
    s6b: "Необходимые cookie обеспечивают работу сайта (например, запоминают язык) и не могут быть отключены. Аналитические cookie Google Analytics и Ahrefs используются для понимания того, как используется сайт; они устанавливаются только после нажатия «Принять аналитику» в баннере cookie. Изменить выбор можно в любое время по ссылке «Настройки cookie» в подвале сайта.",
    s7t: "7. Контакты",
    s7b: "По вопросам защиты данных: bwb@bwwiper.com — Ningbo Zhenhai Bowang Autoparts Co., Ltd., район Чжэньхай, Нинбо, Чжэцзян, Китай.",
  },
  fr: {
    updated: "Dernière mise à jour : 24 novembre 2026",
    s1t: "1. Qui nous sommes",
    s1b: "Ningbo Zhenhai Bowang Autoparts Co., Ltd., district de Zhenhai, Ningbo, Zhejiang, Chine (e-mail bwb@bwwiper.com), est le responsable du traitement des demandes envoyées via ce site.",
    s2t: "2. Quelles données nous collectons",
    s2b: "Lorsque vous envoyez une demande, nous collectons les informations que vous fournissez : nom, e-mail professionnel, société, WhatsApp/téléphone, produit, quantité estimée, tailles requises, port/pays de destination, préférence d'emballage et votre message. Nous recevons également des journaux serveur standards (y compris l'adresse IP) à des fins de sécurité et de prévention des abus.",
    s3t: "3. Pourquoi nous les utilisons",
    s3b: "Nous utilisons vos données pour répondre à votre demande de devis, envoyer des échantillons et gérer la relation commerciale potentielle. Nous n'envoyons des e-mails marketing que si vous y avez explicitement consenti via la case du formulaire.",
    s4t: "4. Bases légales (RGPD)",
    s4b: "Répondre à votre demande : exécution d'un contrat ou notre intérêt légitime à traiter les demandes commerciales. E-mails marketing : votre consentement (art. 6.1.a RGPD), que vous pouvez retirer à tout moment via le lien de désinscription. Cookies essentiels : notre intérêt légitime à maintenir un site sûr et fonctionnel.",
    s5t: "5. Conservation et vos droits",
    s5b: "Nous conservons les demandes pendant 24 mois à compter du dernier contact, puis les supprimons. Vous pouvez demander l'accès, la rectification, l'effacement ou la portabilité de vos données, ou vous opposer au traitement, en écrivant à bwb@bwwiper.com. Vous avez également le droit d'introduire une réclamation auprès de votre autorité de contrôle.",
    s6t: "6. Cookies et mesure d'audience",
    s6b: "Les cookies essentiels assurent le fonctionnement du site (par exemple, mémoriser votre langue) et ne peuvent pas être désactivés. Les cookies de mesure d'audience de Google Analytics et Ahrefs servent à comprendre l'usage du site ; ils ne sont déposés qu'après votre clic sur « Accepter les analyses » dans la bannière cookies. Vous pouvez modifier votre choix à tout moment via le lien « Paramètres des cookies » en pied de page.",
    s7t: "7. Contact",
    s7b: "Pour toute question relative à la protection des données : bwb@bwwiper.com — Ningbo Zhenhai Bowang Autoparts Co., Ltd., district de Zhenhai, Ningbo, Zhejiang, Chine.",
  },
  de: {
    updated: "Zuletzt aktualisiert: 24. November 2026",
    s1t: "1. Wer wir sind",
    s1b: "Ningbo Zhenhai Bowang Autoparts Co., Ltd., Bezirk Zhenhai, Ningbo, Zhejiang, China (E-Mail bwb@bwwiper.com), ist der Verantwortliche für Anfragen, die über diese Website übermittelt werden.",
    s2t: "2. Welche Daten wir erheben",
    s2b: "Bei einer Anfrage erheben wir die von Ihnen angegebenen Daten: Name, geschäftliche E-Mail, Unternehmen, WhatsApp/Telefon, Produkt, geschätzte Menge, benötigte Größen, Bestimmungshafen/-land, Verpackungswunsch und Ihre Nachricht. Außerdem erhalten wir Standard-Serverprotokolle (einschließlich IP-Adresse) zu Sicherheits- und Missbrauchsschutzzwecken.",
    s3t: "3. Wofür wir sie verwenden",
    s3b: "Wir verwenden Ihre Daten, um Ihre Angebotsanfrage zu beantworten, Muster zu versenden und die mögliche Geschäftsbeziehung zu verwalten. Marketing-E-Mails senden wir nur, wenn Sie dem über das Kästchen im Anfrageformular ausdrücklich zugestimmt haben.",
    s4t: "4. Rechtsgrundlagen (DSGVO)",
    s4b: "Beantwortung Ihrer Anfrage: Vertragserfüllung oder unser berechtigtes Interesse an der Bearbeitung geschäftlicher Anfragen. Marketing-E-Mails: Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), die Sie jederzeit über den Abmeldelink widerrufen können. Notwendige Cookies: unser berechtigtes Interesse an einer sicheren, funktionsfähigen Website.",
    s5t: "5. Speicherdauer und Ihre Rechte",
    s5b: "Wir speichern Anfragen 24 Monate ab dem letzten Kontakt und löschen sie danach. Sie können Auskunft, Berichtigung, Löschung oder Übertragbarkeit Ihrer Daten verlangen oder der Verarbeitung widersprechen – schreiben Sie an bwb@bwwiper.com. Sie haben zudem das Recht, sich bei Ihrer Aufsichtsbehörde zu beschweren.",
    s6t: "6. Cookies und Analyse",
    s6b: "Notwendige Cookies halten die Website funktionsfähig (z. B. Sprachauswahl) und können nicht deaktiviert werden. Analyse-Cookies von Google Analytics und Ahrefs dienen dem Verständnis der Nutzung; sie werden erst gesetzt, nachdem Sie im Cookie-Banner auf „Analyse akzeptieren“ geklickt haben. Ihre Wahl können Sie jederzeit über den Link „Cookie-Einstellungen“ in der Fußzeile ändern.",
    s7t: "7. Kontakt",
    s7b: "Bei Fragen zum Datenschutz: bwb@bwwiper.com — Ningbo Zhenhai Bowang Autoparts Co., Ltd., Bezirk Zhenhai, Ningbo, Zhejiang, China.",
  },
  zh: {
    updated: "最后更新：2026 年 11 月 24 日",
    s1t: "一、我们是谁",
    s1b: "宁波镇海博王汽车配件有限公司（中国浙江省宁波市镇海区，邮箱 bwb@bwwiper.com）是通过本网站提交询盘的个人信息处理者。",
    s2t: "二、我们收集哪些信息",
    s2b: "当你提交询盘时，我们会收集你填写的信息：姓名、企业邮箱、公司名称、WhatsApp/电话、产品、预计数量、所需尺寸、目的港/国家、包装偏好以及留言内容。出于安全与防止滥用，我们也会记录标准服务器日志（含 IP 地址）。",
    s3t: "三、我们如何使用",
    s3b: "我们使用你的信息回复报价请求、寄送样品并管理潜在业务关系。只有在你在询盘表单中明确勾选同意后，我们才会发送营销邮件。",
    s4t: "四、法律依据（GDPR）",
    s4b: "回复你的询盘：履行合同或我们在处理商务询盘方面的合法利益。营销邮件：你的同意（GDPR 第 6(1)(a) 条），你可随时通过邮件中的退订链接撤回。必要 Cookie：我们维持网站安全运行的合法利益。",
    s5t: "五、保存期限与你的权利",
    s5b: "询盘记录自最后一次联系起保存 24 个月，到期后删除。你可以通过 bwb@bwwiper.com 请求查阅、更正、删除或转移你的个人信息，或反对处理。你也有权向当地数据保护监管机构投诉。",
    s6t: "六、Cookie 与分析",
    s6b: "必要 Cookie 用于维持网站基本功能（例如记住你的语言偏好），无法关闭。Google Analytics 与 Ahrefs 的分析 Cookie 用于了解网站使用情况，仅在你于 Cookie 横幅中点击「接受分析 Cookie」后才会设置。你可随时通过页脚的「Cookie 设置」链接更改选择。",
    s7t: "七、联系方式",
    s7b: "数据保护相关咨询：bwb@bwwiper.com — 宁波镇海博王汽车配件有限公司，中国浙江省宁波市镇海区。",
  },
};

export default async function PrivacyPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = translations[(lang as Locale) || "en"] || translations.en;
  const s = STRINGS[lang] || STRINGS.en;

  const sections = [
    { title: s.s1t, body: s.s1b },
    { title: s.s2t, body: s.s2b },
    { title: s.s3t, body: s.s3b },
    { title: s.s4t, body: s.s4b },
    { title: s.s5t, body: s.s5b },
    { title: s.s6t, body: s.s6b },
    { title: s.s7t, body: s.s7b },
  ];

  return (
    <main style={{ maxWidth: "860px", margin: "0 auto", padding: "80px 20px", color: "#1e293b", lineHeight: 1.8 }}>
      <h1 style={{ fontSize: "36px", fontWeight: 800, marginBottom: "24px" }}>{t.footerPrivacy}</h1>
      <p style={{ color: "#64748b", fontSize: "14px", marginBottom: "40px" }}>{s.updated}</p>

      {sections.map((sec) => (
        <section key={sec.title} style={{ marginBottom: "32px" }}>
          <h2 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "12px" }}>{sec.title}</h2>
          <p style={{ fontSize: "15px", color: "#334155" }}>{sec.body}</p>
        </section>
      ))}
    </main>
  );
}
