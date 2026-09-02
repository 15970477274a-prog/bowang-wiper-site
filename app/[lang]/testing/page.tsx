"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Locale } from "../../translations";

type Dict = Record<string, string>;

const content: Record<string, Dict> = {
  en: {
    title: "Wiper Blade Rubber Refill — Physical Performance Test Data",
    subtitle: "Sample lab test data for Lelion wiper rubber refill material, measured under controlled conditions.",
    quickTitle: "Quick Answer",
    quickAnswer: "Lelion wiper rubber refill reaches 500,000 wiping cycles, 18.9 MPa tensile strength, 482.5% elongation at break, 60% resilience, and no cracks after ozone aging.",
    condTitle: "Test Conditions",
    resTitle: "Measured Results",
    complianceTitle: "Compliance Note",
    compliance: "Data shown above is based on one tested batch and is provided for technical reference. Final specifications can be confirmed by approved samples and agreed quality standards before mass production.",
    ctaTitle: "Need the full test report?",
    ctaText: "Request complete material test reports or pre-production samples from our engineering team.",
    ctaBtn: "Request Test Report",
    cond_date: "Test date",
    cond_room: "Room condition",
    cond_vulcanization: "Vulcanization condition",
    cond_thermal: "Thermal aging condition",
    cond_ozone: "Ozone condition",
    res_durability: "Durability (surface treatment)",
    res_hardness: "Hardness (Shore A)",
    res_tensile: "Tensile strength",
    res_elongation: "Elongation at break",
    res_modulus: "100% modulus",
    res_hardnessChange: "Hardness change after thermal aging",
    res_tensileChange: "Tensile property change after thermal aging",
    res_elongationChange: "Elongation change after thermal aging",
    res_resilience: "Resilience",
    res_lowTemp: "Low-temperature brittleness",
    res_ozone: "Ozone resistance"
  },
  zh: {
    title: "雨刮片胶条物理性能测试数据",
    subtitle: "Lelion 雨刮胶条材料在受控条件下的实验室样品测试数据。",
    quickTitle: "结论速览",
    quickAnswer: "Lelion 雨刮胶条达到 500,000 次刮拭循环、18.9 MPa 拉伸强度、482.5% 断裂伸长率、60% 回弹性，臭氧老化后无裂纹。",
    condTitle: "测试条件",
    resTitle: "实测结果",
    complianceTitle: "合规说明",
    compliance: "以上数据基于单个测试批次，仅供参考。量产前最终规格以确认样品及双方约定的质量标准为准。",
    ctaTitle: "需要完整测试报告？",
    ctaText: "向我们的工程团队索取完整材料测试报告或产前样品。",
    ctaBtn: "索取测试报告",
    cond_date: "测试日期",
    cond_room: "环境条件",
    cond_vulcanization: "硫化条件",
    cond_thermal: "热老化条件",
    cond_ozone: "臭氧条件",
    res_durability: "耐久性（表面处理）",
    res_hardness: "硬度（邵氏A）",
    res_tensile: "拉伸强度",
    res_elongation: "断裂伸长率",
    res_modulus: "100%定伸应力",
    res_hardnessChange: "热老化后硬度变化",
    res_tensileChange: "热老化后拉伸性能变化",
    res_elongationChange: "热老化后伸长率变化",
    res_resilience: "回弹性",
    res_lowTemp: "低温脆性",
    res_ozone: "耐臭氧性"
  },
  es: {
    title: "Datos de Prueba del Caucho de Escobillas",
    subtitle: "Datos de prueba de laboratorio del material de caucho de repuesto Lelion, medidos en condiciones controladas.",
    quickTitle: "Respuesta Rápida",
    quickAnswer: "El caucho de repuesto Lelion alcanza 500.000 ciclos, 18,9 MPa de resistencia a la tracción, 482,5% de alargamiento a la rotura, 60% de resiliencia y sin grietas tras el envejecimiento por ozono.",
    condTitle: "Condiciones de Prueba",
    resTitle: "Resultados Medidos",
    complianceTitle: "Nota de Cumplimiento",
    compliance: "Los datos mostrados se basan en un lote probado y se proporcionan como referencia técnica. Las especificaciones finales se confirman con muestras aprobadas y estándares de calidad acordados antes de la producción en masa.",
    ctaTitle: "¿Necesita el informe de prueba completo?",
    ctaText: "Solicite informes completos de pruebas de materiales o muestras de preproducción a nuestro equipo de ingeniería.",
    ctaBtn: "Solicitar Informe",
    cond_date: "Fecha de prueba",
    cond_room: "Condición ambiente",
    cond_vulcanization: "Condición de vulcanización",
    cond_thermal: "Condición de envejecimiento térmico",
    cond_ozone: "Condición de ozono",
    res_durability: "Durabilidad (tratamiento superficial)",
    res_hardness: "Dureza (Shore A)",
    res_tensile: "Resistencia a la tracción",
    res_elongation: "Alargamiento a la rotura",
    res_modulus: "Módulo al 100%",
    res_hardnessChange: "Cambio de dureza tras envejecimiento térmico",
    res_tensileChange: "Cambio de tracción tras envejecimiento térmico",
    res_elongationChange: "Cambio de alargamiento tras envejecimiento térmico",
    res_resilience: "Resiliencia",
    res_lowTemp: "Fragilidad a baja temperatura",
    res_ozone: "Resistencia al ozono"
  },
  ru: {
    title: "Данные испытаний резины стеклоочистителей",
    subtitle: "Лабораторные данные испытаний резинового профиля Lelion, полученные в контролируемых условиях.",
    quickTitle: "Краткий вывод",
    quickAnswer: "Резиновый профиль Lelion выдерживает 500 000 циклов, прочность на разрыв 18,9 МПа, удлинение при разрыве 482,5%, эластичность 60%, без трещин после озонового старения.",
    condTitle: "Условия испытаний",
    resTitle: "Измеренные результаты",
    complianceTitle: "Примечание о соответствии",
    compliance: "Данные основаны на одном испытанном образце и приведены для справки. Окончательные характеристики подтверждаются утверждёнными образцами и согласованными стандартами качества перед серийным производством.",
    ctaTitle: "Нужен полный отчёт об испытаниях?",
    ctaText: "Запросите полные отчёты об испытаниях материалов или предсерийные образцы у нашей инженерной команды.",
    ctaBtn: "Запросить отчёт",
    cond_date: "Дата испытания",
    cond_room: "Условия в помещении",
    cond_vulcanization: "Условия вулканизации",
    cond_thermal: "Условия термического старения",
    cond_ozone: "Условия озонового старения",
    res_durability: "Долговечность (обработка поверхности)",
    res_hardness: "Твёрдость (по Шору A)",
    res_tensile: "Предел прочности при растяжении",
    res_elongation: "Относительное удлинение при разрыве",
    res_modulus: "Модуль 100%",
    res_hardnessChange: "Изменение твёрдости после термостарения",
    res_tensileChange: "Изменение прочности после термостарения",
    res_elongationChange: "Изменение удлинения после термостарения",
    res_resilience: "Эластичность",
    res_lowTemp: "Хрупкость при низкой температуре",
    res_ozone: "Озоностойкость"
  },
  fr: {
    title: "Données d'Essai du Caoutchouc des Balais",
    subtitle: "Données d'essai en laboratoire du matériau de rechange en caoutchouc Lelion, mesurées dans des conditions contrôlées.",
    quickTitle: "Réponse Rapide",
    quickAnswer: "Le caoutchouc de rechange Lelion atteint 500 000 cycles, 18,9 MPa de résistance à la traction, 482,5% d'allongement à la rupture, 60% de résilience et aucune fissure après vieillissement à l'ozone.",
    condTitle: "Conditions d'Essai",
    resTitle: "Résultats Mesurés",
    complianceTitle: "Note de Conformité",
    compliance: "Les données ci-dessus sont basées sur un lot testé et fournies à titre de référence technique. Les spécifications finales peuvent être confirmées par des échantillons approuvés et des normes de qualité convenues avant la production en série.",
    ctaTitle: "Besoin du rapport d'essai complet ?",
    ctaText: "Demandez les rapports d'essai matériaux complets ou des échantillons de pré-production à notre équipe d'ingénierie.",
    ctaBtn: "Demander le Rapport",
    cond_date: "Date d'essai",
    cond_room: "Conditions ambiantes",
    cond_vulcanization: "Conditions de vulcanisation",
    cond_thermal: "Conditions de vieillissement thermique",
    cond_ozone: "Conditions d'ozone",
    res_durability: "Durabilité (traitement de surface)",
    res_hardness: "Dureté (Shore A)",
    res_tensile: "Résistance à la traction",
    res_elongation: "Allongement à la rupture",
    res_modulus: "Module à 100%",
    res_hardnessChange: "Variation de dureté après vieillissement thermique",
    res_tensileChange: "Variation de traction après vieillissement thermique",
    res_elongationChange: "Variation d'allongement après vieillissement thermique",
    res_resilience: "Résilience",
    res_lowTemp: "Fragilité à basse température",
    res_ozone: "Résistance à l'ozone"
  },
  de: {
    title: "Gummi-Testdaten für Wischerblätter",
    subtitle: "Labortestdaten des Lelion-Wischergummi-Ersatzmaterials, gemessen unter kontrollierten Bedingungen.",
    quickTitle: "Kurzantwort",
    quickAnswer: "Das Lelion-Wischergummi erreicht 500.000 Zyklen, 18,9 MPa Zugfestigkeit, 482,5% Bruchdehnung, 60% Rückprallelastizität und keine Risse nach Ozon-Alterung.",
    condTitle: "Testbedingungen",
    resTitle: "Gemessene Ergebnisse",
    complianceTitle: "Konformitätshinweis",
    compliance: "Die oben genannten Daten basieren auf einer geprüften Charge und dienen als technische Referenz. Endgültige Spezifikationen werden vor der Serienproduktion durch freigegebene Muster und vereinbarte Qualitätsstandards bestätigt.",
    ctaTitle: "Vollständigen Testbericht benötigt?",
    ctaText: "Fordern Sie vollständige Materialtestberichte oder Vorserienmuster bei unserem Engineering-Team an.",
    ctaBtn: "Testbericht anfordern",
    cond_date: "Testdatum",
    cond_room: "Raumbedingungen",
    cond_vulcanization: "Vulkanisationsbedingungen",
    cond_thermal: "Wärmealterungsbedingungen",
    cond_ozone: "Ozonbedingungen",
    res_durability: "Haltbarkeit (Oberflächenbehandlung)",
    res_hardness: "Härte (Shore A)",
    res_tensile: "Zugfestigkeit",
    res_elongation: "Bruchdehnung",
    res_modulus: "100%-Modul",
    res_hardnessChange: "Härteänderung nach Wärmealterung",
    res_tensileChange: "Zugeigenschaftsänderung nach Wärmealterung",
    res_elongationChange: "Dehnungsänderung nach Wärmealterung",
    res_resilience: "Rückprallelastizität",
    res_lowTemp: "Kälteversprödung",
    res_ozone: "Ozonbeständigkeit"
  }
};

const conditions = [
  { k: "cond_date", v: "2023-06-23" },
  { k: "cond_room", v: "24°C, RH 60%" },
  { k: "cond_vulcanization", v: "170°C × 5 min" },
  { k: "cond_thermal", v: "70°C × 72 h" },
  { k: "cond_ozone", v: "15% strain, 5 pphr, RH 40%, 72 h" }
];

const results = [
  { k: "res_durability", v: "500,000 cycles" },
  { k: "res_hardness", v: "61" },
  { k: "res_tensile", v: "18.9 MPa" },
  { k: "res_elongation", v: "482.5%" },
  { k: "res_modulus", v: "2.8 N/mm²" },
  { k: "res_hardnessChange", v: "+2" },
  { k: "res_tensileChange", v: "-10" },
  { k: "res_elongationChange", v: "-16" },
  { k: "res_resilience", v: "60%" },
  { k: "res_lowTemp", v: "Pass" },
  { k: "res_ozone", v: "No crack" }
];

export default function TestingPage() {
  const params = useParams();
  const urlLang = (params.lang as Locale) || "en";
  const [lang, setLang] = useState<Locale>(urlLang);

  useEffect(() => {
    setLang(urlLang);
    localStorage.setItem("lelion_lang", urlLang);
  }, [urlLang]);

  const t = content[lang] || content.en;
  const l = (path: string) => "/" + lang + path;

  const tableRow = (label: string, value: string, bold = false) => (
    <div style={{ display: "flex", justifyContent: "space-between", gap: "20px", padding: "14px 0", borderBottom: "1px solid #e2e8f0", fontSize: "15px" }}>
      <span style={{ color: "#475569" }}>{label}</span>
      <span style={{ fontWeight: bold ? 800 : 600, color: "#0f172a", textAlign: "right" }}>{value}</span>
    </div>
  );

  return (
    <main style={{ fontFamily: "system-ui, -apple-system, sans-serif", color: "#1e293b", backgroundColor: "#ffffff" }}>
      <section style={{ padding: "90px 20px 60px", background: "linear-gradient(135deg, #0f172a 0%, #093D6A 100%)", color: "white", textAlign: "center" }}>
        <h1 style={{ fontSize: "38px", fontWeight: 800, margin: "0 auto 15px", maxWidth: "900px" }}>{t.title}</h1>
        <p style={{ color: "#cbd5e1", maxWidth: "720px", margin: "0 auto", fontSize: "16px" }}>{t.subtitle}</p>
      </section>

      <section style={{ padding: "70px 20px", maxWidth: "860px", margin: "0 auto" }}>
        <div style={{ backgroundColor: "#f0f9ff", border: "1px solid #bae6fd", borderRadius: "14px", padding: "24px", marginBottom: "40px" }}>
          <h2 style={{ fontSize: "15px", fontWeight: 800, color: "#0369a1", textTransform: "uppercase", letterSpacing: "0.04em", margin: "0 0 10px" }}>{t.quickTitle}</h2>
          <p style={{ margin: 0, fontSize: "17px", lineHeight: 1.7, color: "#0f172a", fontWeight: 600 }}>{t.quickAnswer}</p>
        </div>

        <h2 style={{ fontSize: "24px", fontWeight: 800, marginBottom: "12px" }}>{t.condTitle}</h2>
        <div style={{ backgroundColor: "#f8fafc", borderRadius: "14px", padding: "6px 24px", marginBottom: "50px" }}>
          {conditions.map((c) => tableRow(t[c.k], c.v))}
        </div>

        <h2 style={{ fontSize: "24px", fontWeight: 800, marginBottom: "12px" }}>{t.resTitle}</h2>
        <div style={{ backgroundColor: "#f8fafc", borderRadius: "14px", padding: "6px 24px", marginBottom: "50px" }}>
          {results.map((r, i) => tableRow(t[r.k], r.v, i === 0))}
        </div>

        <div style={{ borderLeft: "4px solid #0284c7", backgroundColor: "#f8fafc", borderRadius: "8px", padding: "20px 24px", marginBottom: "60px" }}>
          <h3 style={{ margin: "0 0 8px", fontSize: "16px", fontWeight: 800, color: "#0f172a" }}>{t.complianceTitle}</h3>
          <p style={{ margin: 0, fontSize: "14px", color: "#475569", lineHeight: 1.7 }}>{t.compliance}</p>
        </div>

        <div style={{ textAlign: "center", backgroundColor: "#0f172a", borderRadius: "20px", padding: "48px 24px", color: "white" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 800, margin: "0 0 12px" }}>{t.ctaTitle}</h2>
          <p style={{ color: "#94a3b8", margin: "0 auto 24px", maxWidth: "560px" }}>{t.ctaText}</p>
          <Link href={l("/contact")} style={{ display: "inline-block", backgroundColor: "#0284c7", color: "white", padding: "14px 30px", borderRadius: "8px", textDecoration: "none", fontWeight: 700 }}>{t.ctaBtn}</Link>
        </div>
      </section>
    </main>
  );
}