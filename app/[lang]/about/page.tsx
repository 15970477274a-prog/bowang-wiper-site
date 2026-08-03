"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { translations, Locale } from "../../translations";

export default function AboutPage() {
  const params = useParams();
  const urlLang = (params.lang as Locale) || "en";
  const [lang, setLang] = useState<Locale>(urlLang);

  useEffect(() => {
    setLang(urlLang);
    localStorage.setItem("lelion_lang", urlLang);
  }, [urlLang]);

  const handleLangChange = (newLang: Locale) => {
    setLang(newLang);
    localStorage.setItem("lelion_lang", newLang);
  };

  const t = translations[lang];
  const a: Record<string, Record<string, string>> = {
    en: {
      bannerTitle: "Excellence in Manufacturing",
      bannerSub: "Leading the global wiper blade industry through continuous innovation and strict quality control standards.",
      missionTitle: "Our Mission",
      missionText: "To provide crystal clear vision and safety to every driver worldwide.",
      visionTitle: "Global Vision",
      visionText: "Becoming the #1 trusted OEM partner for the automotive aftermarket.",
      annualCapacity: "Annual Capacity",
      qualityTitle: "Quality & Certifications",
      qualitySub: "We strictly adhere to global automotive quality management standards. Every wiper blade undergoes rigorous testing.",
      milestonesTitle: "Our Development Milestones",
      milestone1: "Foundation of Bowang Autoparts in Ningbo.",
      milestone2: "Expanded manufacturing facility to 8,000sqm and introduced automated lines.",
      milestone3: "Obtained IATF 16949 international quality certification.",
      milestone4: "Reaching 50+ export countries and launching high-performance silicone series.",
      cert1Title: "ISO 9001:2015 Certificate",
      cert1Desc: "International Quality Management Standard",
      cert2Title: "CE Certificate",
      cert2Desc: "European Market Conformity",
      cert3Title: "Wiper Rubber Strip Test Report",
      cert3Desc: "Physical Property & Durability Analysis"
    },
    zh: {
      bannerTitle: "卓越制造",
      bannerSub: "通过持续创新和严格的质量控制标准引领全球雨刮片行业。",
      missionTitle: "我们的使命",
      missionText: "为全球每一位驾驶者提供清晰的视野和安全保障。",
      visionTitle: "全球愿景",
      visionText: "成为汽车售后市场首选的OEM合作伙伴。",
      annualCapacity: "年产能",
      qualityTitle: "质量与认证",
      qualitySub: "我们严格遵守全球汽车质量管理标准。每一支雨刮片都经过严格测试。",
      milestonesTitle: "发展里程碑",
      milestone1: "博旺汽配在宁波成立。",
      milestone2: "扩建至8,000平方米生产基地并引入自动化产线。",
      milestone3: "获得IATF 16949国际质量认证。",
      milestone4: "出口覆盖50多个国家，推出高性能硅胶系列。",
      cert1Title: "ISO 9001:2015 认证",
      cert1Desc: "国际质量管理标准",
      cert2Title: "CE 认证",
      cert2Desc: "欧洲市场合规",
      cert3Title: "雨刮胶条测试报告",
      cert3Desc: "物理性能与耐久性分析"
    },
    es: {
      bannerTitle: "Excelencia en Fabricación",
      bannerSub: "Liderando la industria global de escobillas limpiaparabrisas a través de la innovación continua y estándares estrictos de calidad.",
      missionTitle: "Nuestra Misión",
      missionText: "Proporcionar visión cristalina y seguridad a cada conductor en todo el mundo.",
      visionTitle: "Visión Global",
      visionText: "Convertirnos en el socio OEM #1 de confianza para el mercado de posventa automotriz.",
      annualCapacity: "Capacidad Anual",
      qualityTitle: "Calidad y Certificaciones",
      qualitySub: "Nos adherimos estrictamente a los estándares globales de gestión de calidad automotriz. Cada escobilla se somete a pruebas rigurosas.",
      milestonesTitle: "Hitos de Desarrollo",
      milestone1: "Fundación de Bowang Autoparts en Ningbo.",
      milestone2: "Ampliación a 8.000m² e introducción de líneas automatizadas.",
      milestone3: "Obtención de la certificación IATF 16949.",
      milestone4: "Exportación a más de 50 países y lanzamiento de serie de silicona de alto rendimiento.",
      cert1Title: "Certificado ISO 9001:2015",
      cert1Desc: "Estándar Internacional de Gestión de Calidad",
      cert2Title: "Certificado CE",
      cert2Desc: "Conformidad del Mercado Europeo",
      cert3Title: "Informe de Prueba de Caucho",
      cert3Desc: "Análisis de Propiedades Físicas y Durabilidad"
    },
    ru: {
      bannerTitle: "Превосходство в Производстве",
      bannerSub: "Лидерство в мировой индустрии щеток стеклоочистителя благодаря непрерывным инновациям и строгим стандартам качества.",
      missionTitle: "Наша Миссия",
      missionText: "Обеспечить кристально чистый обзор и безопасность каждому водителю в мире.",
      visionTitle: "Глобальное Видение",
      visionText: "Стать надежным OEM-партнером №1 для автомобильного послепродажного рынка.",
      annualCapacity: "Годовая Мощность",
      qualityTitle: "Качество и Сертификация",
      qualitySub: "Мы строго соблюдаем мировые стандарты управления качеством. Каждая щетка проходит тщательное тестирование.",
      milestonesTitle: "Вехи Развития",
      milestone1: "Основание Bowang Autoparts в Нинбо.",
      milestone2: "Расширение до 8 000 м² и внедрение автоматизированных линий.",
      milestone3: "Получение международной сертификации IATF 16949.",
      milestone4: "Экспорт в более 50 стран и запуск высокопроизводительной силиконовой серии.",
      cert1Title: "Сертификат ISO 9001:2015",
      cert1Desc: "Международный Стандарт Менеджмента Качества",
      cert2Title: "Сертификат CE",
      cert2Desc: "Соответствие Европейскому Рынку",
      cert3Title: "Отчет об Испытании Резины",
      cert3Desc: "Анализ Физических Свойств и Долговечности"
    },
    fr: {
      bannerTitle: "Excellence en Fabrication",
      bannerSub: "À la pointe de l'industrie mondiale des balais d'essuie-glace grâce à l'innovation continue et aux normes de qualité strictes.",
      missionTitle: "Notre Mission",
      missionText: "Offrir une vision cristalline et la sécurité à chaque conducteur dans le monde.",
      visionTitle: "Vision Globale",
      visionText: "Devenir le partenaire OEM de confiance n°1 pour le marché secondaire automobile.",
      annualCapacity: "Capacité Annuelle",
      qualityTitle: "Qualité et Certifications",
      qualitySub: "Nous respectons strictement les normes mondiales de gestion de la qualité automobile. Chaque balai est soumis à des tests rigoureux.",
      milestonesTitle: "Jalons de Développement",
      milestone1: "Création de Bowang Autoparts à Ningbo.",
      milestone2: "Extension à 8 000 m² et introduction de lignes automatisées.",
      milestone3: "Obtention de la certification IATF 16949.",
      milestone4: "Exportation vers plus de 50 pays et lancement de la série silicone haute performance.",
      cert1Title: "Certificat ISO 9001:2015",
      cert1Desc: "Norme Internationale de Gestion de la Qualité",
      cert2Title: "Certificat CE",
      cert2Desc: "Conformité au Marché Européen",
      cert3Title: "Rapport d'Essai du Caoutchouc",
      cert3Desc: "Analyse des Propriétés Physiques et de la Durabilité"
    },
    de: {
      bannerTitle: "Exzellenz in der Fertigung",
      bannerSub: "Führend in der globalen Wischerblattindustrie durch kontinuierliche Innovation und strenge Qualitätsstandards.",
      missionTitle: "Unsere Mission",
      missionText: "Jedem Fahrer weltweit kristallklare Sicht und Sicherheit bieten.",
      visionTitle: "Globale Vision",
      visionText: "Der vertrauenswürdige OEM-Partner Nr. 1 für den automobilen Aftermarket werden.",
      annualCapacity: "Jahreskapazität",
      qualityTitle: "Qualität und Zertifizierungen",
      qualitySub: "Wir halten uns strikt an globale automobile Qualitätsmanagement-Standards. Jedes Wischerblatt wird strengen Tests unterzogen.",
      milestonesTitle: "Entwicklungsmeilensteine",
      milestone1: "Gründung von Bowang Autoparts in Ningbo.",
      milestone2: "Erweiterung auf 8.000 m² und Einführung automatisierter Linien.",
      milestone3: "Erhalt der IATF 16949 Zertifizierung.",
      milestone4: "Export in über 50 Länder und Einführung der Hochleistungs-Silikonserie.",
      cert1Title: "ISO 9001:2015 Zertifikat",
      cert1Desc: "Internationaler Qualitätsmanagement-Standard",
      cert2Title: "CE Zertifikat",
      cert2Desc: "Europäische Marktkonformität",
      cert3Title: "Gummi-Testbericht",
      cert3Desc: "Analyse der Physikalischen Eigenschaften und Haltbarkeit"
    }
  };
  const aboutText = a[lang] || a.en;

  const certificates = [
    { titleKey: "cert1Title", descKey: "cert1Desc", url: "https://sc02.alicdn.com/kf/H1be823d630b64d1f853a7537099aab2bJ.jpg" },
    { titleKey: "cert2Title", descKey: "cert2Desc", url: "https://sc02.alicdn.com/kf/Hb31ab6aad6c947558d269b45b921199bz.png" },
    { titleKey: "cert3Title", descKey: "cert3Desc", url: "https://sc02.alicdn.com/kf/He68d042a711e42babef62c2ebea3ee2fN.png" }
  ];

  return (
    <main style={{ fontFamily: "system-ui, -apple-system, sans-serif", color: "#1e293b", backgroundColor: "#ffffff" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": aboutText.bannerTitle,
            "description": aboutText.bannerSub,
            "url": "https://www.lelionautopart.com/" + urlLang + "/about",
            "inLanguage": urlLang === "zh" ? "zh-Hans" : urlLang
          })
        }}
      />
{/* REPLACED WITH MODERN FACTORY PRODUCTION LINE BANNER */}
      <section style={{ 
        padding: "100px 20px", 
        background: "linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url('https://sc02.alicdn.com/kf/H2533c3c14bc74cd3afe116f60a8357f4U.jpg') center/cover no-repeat", 
        color: "white", 
        textAlign: "center" 
      }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "48px", fontWeight: 800, marginBottom: "20px" }}>{aboutText.bannerTitle}</h1>
          <p style={{ fontSize: "18px", color: "#cbd5e1", lineHeight: 1.6 }}>{aboutText.bannerSub}</p>
        </div>
      </section>

      <section style={{ padding: "80px 20px", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ display: "flex", gap: "60px", flexWrap: "wrap", alignItems: "center" }}>
          <div style={{ flex: "1 1 500px" }}>
             <h2 style={{ fontSize: "32px", fontWeight: 800, marginBottom: "25px", color: "#0f172a" }}>{t.aboutTitle}</h2>
             <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#475569", marginBottom: "20px" }}>{t.aboutDesc1}</p>
             <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#475569", marginBottom: "30px" }}>{t.aboutDesc2}</p>
             
             <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginTop: "40px" }}>
                <div style={{ backgroundColor: "#f8fafc", padding: "20px", borderRadius: "10px", borderLeft: "4px solid #0284c7" }}>
                   <h4 style={{ margin: "0 0 5px 0", color: "#0f172a" }}>{aboutText.missionTitle}</h4>
                   <p style={{ margin: 0, fontSize: "14px", color: "#64748b" }}>{aboutText.missionText}</p>
                </div>
                <div style={{ backgroundColor: "#f8fafc", padding: "20px", borderRadius: "10px", borderLeft: "4px solid #0284c7" }}>
                   <h4 style={{ margin: "0 0 5px 0", color: "#0f172a" }}>{aboutText.visionTitle}</h4>
                   <p style={{ margin: 0, fontSize: "14px", color: "#64748b" }}>{aboutText.visionText}</p>
                </div>
             </div>
          </div>
          <div style={{ flex: "1 1 400px", position: "relative", aspectRatio: "4 / 3" }}>
             <Image src="https://sc02.alicdn.com/kf/H2533c3c14bc74cd3afe116f60a8357f4U.jpg" alt="Bowang Autoparts Factory Front" fill sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: "cover", borderRadius: "16px", boxShadow: "0 20px 50px rgba(0,0,0,0.15)", border: "1px solid #e2e8f0" }} />
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#f1f5f9", padding: "60px 20px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "flex", justifyContent: "space-around", textAlign: "center", flexWrap: "wrap", gap: "30px" }}>
          <div><span style={{ fontSize: "42px", fontWeight: 800, color: "#0284c7" }}>{t.aboutStat1Title}</span><p style={{ fontSize: "14px", fontWeight: 600, color: "#64748b", textTransform: "uppercase" }}>{t.aboutStat1Desc}</p></div>
          <div><span style={{ fontSize: "42px", fontWeight: 800, color: "#0284c7" }}>{t.aboutStat2Title}</span><p style={{ fontSize: "14px", fontWeight: 600, color: "#64748b", textTransform: "uppercase" }}>{t.aboutStat2Desc}</p></div>
          <div><span style={{ fontSize: "42px", fontWeight: 800, color: "#0284c7" }}>{t.aboutStat3Title}</span><p style={{ fontSize: "14px", fontWeight: 600, color: "#64748b", textTransform: "uppercase" }}>{t.aboutStat3Desc}</p></div>
          <div><span style={{ fontSize: "42px", fontWeight: 800, color: "#0284c7" }}>12M+</span><p style={{ fontSize: "14px", fontWeight: 600, color: "#64748b", textTransform: "uppercase" }}>{aboutText.annualCapacity}</p></div>
        </div>
      </section>

      <section style={{ backgroundColor: "#0f172a", padding: "100px 20px", color: "white" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "36px", fontWeight: 800, marginBottom: "20px" }}>{aboutText.qualityTitle}</h2>
          <p style={{ color: "#94a3b8", marginBottom: "60px", maxWidth: "700px", margin: "0 auto" }}>{aboutText.qualitySub}</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px" }}>
             {certificates.map((cert, i) => (
               <div key={i} style={{ backgroundColor: "white", borderRadius: "16px", padding: "20px", textAlign: "center", boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}>
                 <div style={{ height: "400px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                   <Image src={cert.url} alt={aboutText[cert.titleKey]} width={300} height={400} style={{ maxWidth: "100%", maxHeight: "100%", width: "auto", height: "auto", objectFit: "contain", borderRadius: "4px" }} />
                 </div>
                 <h3 style={{ color: "#0f172a", fontSize: "18px", fontWeight: 800, marginBottom: "8px" }}>{aboutText[cert.titleKey]}</h3>
                 <p style={{ color: "#64748b", fontSize: "13px" }}>{aboutText[cert.descKey]}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "100px 20px", maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "32px", fontWeight: 800, textAlign: "center", marginBottom: "60px" }}>{aboutText.milestonesTitle}</h2>
        <div style={{ borderLeft: "2px solid #e2e8f0", paddingLeft: "30px", marginLeft: "20px" }}>
           {[
             { year: "2011", eventKey: "milestone1" },
             { year: "2015", eventKey: "milestone2" },
             { year: "2019", eventKey: "milestone3" },
             { year: "2024", eventKey: "milestone4" }
           ].map((item, i) => (
             <div key={i} style={{ marginBottom: "40px", position: "relative" }}>
               <div style={{ position: "absolute", width: "12px", height: "12px", backgroundColor: "#0284c7", borderRadius: "50%", left: "-37px", top: "8px" }}></div>
               <span style={{ fontWeight: 800, color: "#0284c7", fontSize: "20px" }}>{item.year}</span>
               <p style={{ margin: "10px 0 0 0", color: "#475569" }}>{aboutText[item.eventKey]}</p>
             </div>
           ))}
        </div>
      </section>
</main>
  );
}
