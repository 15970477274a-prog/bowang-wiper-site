"use client";

import Image from "next/image";
import { packagingOptions, packagingNote } from "../app/data/packagingOptions";
import type { PackagingLocale } from "../app/data/packagingOptions";

interface PackagingProps {
  title: string;
  desc: string;
  locale: string;
}

const LOCALES: PackagingLocale[] = ["en", "es", "ru", "fr", "de", "zh"];

function pick(map: Record<PackagingLocale, string>, locale: string): string {
  const key = (LOCALES as string[]).includes(locale) ? (locale as PackagingLocale) : "en";
  return map[key] || map.en;
}

/**
 * Home-page packaging section.
 *
 * Layout: a five-across grid, so the ten packaging options sit in two rows and
 * the section stays short. Each tile is portrait — square image on top, then
 * name, specification badge and a one-sentence description underneath.
 *
 * The previous "image-left / text-right" cards stacked into five tall rows and
 * pushed the rest of the page too far down, which is why this is five columns.
 *
 * Names and descriptions live in app/data/packagingOptions.ts and are localised
 * into the six site locales; other locales fall back to English.
 *
 * The tiles are not links, so they render no pointer cursor and no hover lift.
 */
export default function PackagingSection({ title, desc, locale }: PackagingProps) {
  const note = pick(packagingNote, locale);

  return (
    <section className="pack-sec">
      <div className="pack-wrap">
        <div className="pack-head">
          <h2 className="pack-title">{title}</h2>
          <div className="pack-rule" />
          <p className="pack-desc">{desc}</p>
        </div>

        <div className="pack-grid">
          {packagingOptions.map((item, i) => {
            const name = pick(item.name, locale);
            const text = pick(item.desc, locale);
            return (
              <div className="pack-tile" key={item.id}>
                <div className="pack-img">
                  <span aria-hidden="true" className="pack-num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Image
                    src={item.img}
                    alt={name}
                    width={400}
                    height={400}
                    sizes="(max-width: 560px) 45vw, (max-width: 900px) 30vw, 220px"
                    className="pack-photo"
                  />
                </div>
                <h3 className="pack-name">{name}</h3>
                <span className="pack-spec">{item.spec}</span>
                <p className="pack-text">{text}</p>
              </div>
            );
          })}
        </div>

        <p className="pack-note">{note}</p>
      </div>

      <style>{`
        .pack-sec {
          padding: 90px 20px;
          background: #ffffff;
        }
        .pack-wrap {
          max-width: 1440px;
          margin: 0 auto;
        }
        .pack-head {
          text-align: center;
          margin-bottom: 48px;
        }
        .pack-title {
          font-size: 36px;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 12px;
        }
        .pack-rule {
          height: 4px;
          width: 60px;
          background: #0284c7;
          margin: 15px auto;
        }
        .pack-desc {
          color: #64748b;
          font-size: 16px;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.7;
        }
        .pack-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 18px;
        }
        .pack-tile {
          display: flex;
          flex-direction: column;
          padding: 14px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
        }
        .pack-img {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          background: #ffffff;
          border: 1px solid #eef2f7;
          border-radius: 10px;
          margin-bottom: 12px;
          overflow: hidden;
        }
        .pack-num {
          position: absolute;
          top: 6px;
          left: 9px;
          font-size: 12px;
          font-weight: 800;
          color: #cbd5e1;
          letter-spacing: 0.5px;
          z-index: 1;
        }
        .pack-photo {
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 8px;
          box-sizing: border-box;
        }
        .pack-name {
          font-size: 15px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 8px;
          line-height: 1.35;
        }
        .pack-spec {
          align-self: flex-start;
          font-size: 11.5px;
          font-weight: 600;
          color: #0369a1;
          background: #e0f2fe;
          border-radius: 4px;
          padding: 2px 7px;
          margin-bottom: 9px;
          white-space: nowrap;
        }
        .pack-text {
          font-size: 13px;
          color: #475569;
          line-height: 1.6;
          margin: 0;
        }
        .pack-note {
          margin: 26px 0 0;
          padding: 16px 18px;
          border-left: 3px solid #0284c7;
          background: #f8fafc;
          border-radius: 0 8px 8px 0;
          font-size: 14px;
          line-height: 1.7;
          color: #475569;
        }
        @media (max-width: 1080px) {
          .pack-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
        }
        @media (max-width: 900px) {
          .pack-sec { padding: 64px 16px; }
          .pack-title { font-size: 28px; }
          .pack-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 14px; }
        }
        @media (max-width: 560px) {
          .pack-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
          .pack-tile { padding: 10px; }
          .pack-name { font-size: 14px; }
          .pack-text { font-size: 12.5px; }
        }
      `}</style>
    </section>
  );
}
