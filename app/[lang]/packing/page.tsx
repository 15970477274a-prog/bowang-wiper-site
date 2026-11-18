import { translations, Locale } from "../../translations";
import { busTruckRows, cartonRows } from "../../data/cartonReference";

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
          <p className="packing-note">{t.packingNote}</p>
          <p className="packing-note" style={{ marginTop: "10px" }}>{t.packingNoteShared1213}</p>
        </div>
      </section>

      {/* Bus / truck blades are outside the range above. They are linked here by
          product pages in the Bus Truck Wiper category, which used to send those
          buyers to a table whose largest size is 28 inches. */}
      <section className="section section-alt" id="above-28-inches" style={{ scrollMarginTop: "90px" }}>
        <div className="container">
          <h2 className="section-title">{t.packingBusTitle}</h2>
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
                {busTruckRows.map((row) => (
                  <tr key={row.size}>
                    <td>{row.size}&quot;</td>
                    <td>{row.pcsPerCarton}</td>
                    <td>{row.cartonCm}</td>
                    <td>{row.cbm.toFixed(6)}</td>
                    <td>&mdash;</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="packing-note">{t.packingBusNote}</p>
        </div>
      </section>
    </main>
  );
}
