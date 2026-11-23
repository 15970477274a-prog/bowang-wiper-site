import { translations, Locale } from "../../translations";

// NOTE: Legal copy below is a SKELETON drafted for review, not legal advice.
// Before going live, legal counsel should confirm the data controller identity,
// retention period, cookie policy and EDM processor (items marked [待确认]).
export default async function PrivacyPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = translations[(lang as Locale) || "en"] || translations.en;

  const sections: { title: string; body: string }[] = [
    {
      title: "1. Who we are",
      body: "Ningbo Zhenhai Bowang Autoparts Co., Ltd. (Zhenhai District, Ningbo, Zhejiang, China), email bwb@bwwiper.com, is the data controller for inquiries submitted on this site. [待确认: verify the GDPR data controller entity and contact address]",
    },
    {
      title: "2. What data we collect",
      body: "When you submit an inquiry we collect the details you provide: name, business email, company, WhatsApp/phone, product, estimated quantity, required sizes, destination port/country, packaging preference and your message. [待确认: confirm whether IP addresses or non-essential cookies are also collected]",
    },
    {
      title: "3. Why we use it",
      body: "We use your details to respond to your quote request, send samples and manage the potential business relationship. We only send marketing emails if you explicitly opted in via the checkbox on the inquiry form.",
    },
    {
      title: "4. Legal bases (GDPR)",
      body: "Responding to your inquiry: performance of a contract or our legitimate interests in answering business enquiries. Marketing emails: your consent (Art. 6(1)(a) GDPR), which you may withdraw at any time using the unsubscribe link in each email.",
    },
    {
      title: "5. Retention and your rights",
      body: "[待确认: state the retention period]. You may request access, correction, deletion or portability of your personal data, or object to processing, by contacting bwb@bwwiper.com. You also have the right to lodge a complaint with your local data protection supervisory authority.",
    },
    {
      title: "6. Cookies and analytics",
      body: "This site uses Google Analytics and Ahrefs Analytics to understand site usage. [待确认: decide whether a consent banner for non-essential cookies is required and implement it accordingly].",
    },
    {
      title: "7. Contact",
      body: "For data protection questions: bwb@bwwiper.com — Ningbo Zhenhai Bowang Autoparts Co., Ltd., Zhenhai District, Ningbo, Zhejiang, China.",
    },
  ];

  return (
    <main style={{ maxWidth: "860px", margin: "0 auto", padding: "80px 20px", color: "#1e293b", lineHeight: 1.8 }}>
      <h1 style={{ fontSize: "36px", fontWeight: 800, marginBottom: "24px" }}>{t.footerPrivacy}</h1>
      <p style={{ color: "#64748b", fontSize: "14px", marginBottom: "40px" }}>Last updated: 2026-11-23</p>

      {sections.map((s) => (
        <section key={s.title} style={{ marginBottom: "32px" }}>
          <h2 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "12px" }}>{s.title}</h2>
          <p style={{ fontSize: "15px", color: "#334155" }}>{s.body}</p>
        </section>
      ))}
    </main>
  );
}
