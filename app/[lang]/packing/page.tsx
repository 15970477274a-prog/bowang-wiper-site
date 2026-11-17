import { translations, Locale } from "../../translations";
import { cartonRows } from "../../data/cartonReference";

export default async function PackingPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = translations[(lang as Locale)] || translations.en;
  const innerBoxLabel = (key: string) => (key === "ppGreen" ? t.packingBoxPpGreen : key);

  return (
    <main>
      <section className="banner-dark">
        <div className="container">
          <h1 className="banner-title">{t.packingPageTitle}</h1>
          <p className="banner-subtitle">{t.packingSubtitle}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="packing-scroll">
            <table className="packing-table">
              <thead>
                <tr>
                  <th>{t.packingColSize}</th>
                  <th>{t.packingColPcs}</th>
                  <th>{t.packingColCarton}</th>
                  <th>{t.packingColCbm}</th>
                  <th>{t.packingColInner}</th>
                </tr>
              </thead>
              <tbody>
                {cartonRows.map((row) => (
                  <tr key={row.size}>
                    <td>{row.size}&quot;</td>
                    <td>{row.pcsPerCarton}</td>
                    <td>{row.cartonCm}</td>
                    <td>{row.cbm.toFixed(5)}</td>
                    <td>{innerBoxLabel(row.innerBox)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ maxWidth: "900px", margin: "18px auto 0" }}>
            <p className="packing-note">{t.packingNote}</p>
            <p className="packing-note">{t.packingNoteCoverage}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
