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
 * Layout: two columns of "image-left / text-right" cards, with every image in a
 * square frame (the supplied product shots are all square). Each card carries a
 * real specification line — blade length range and carton quantity — because the
 * previous version of this block was eight bare labels and contributed almost
 * nothing to the page's text.
 *
 * Names and descriptions live in app/data/packagingOptions.ts and are localised
 * into the six site locales; other locales fall back to English.
 *
 * The cards are not links, so they no longer render a pointer cursor or a hover
 * lift — that affordance was misleading.
 */
export default function PackagingSection({ title, desc, locale }: PackagingProps) {
  const note = pick(packagingNote, locale);

  return (
    <section style={{ padding: "100px 20px", backgroundColor: "#ffffff" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <h2 style={{ fontSize: "36px", fontWeight: 800, color: "#0f172a", marginBottom: "12px" }}>
            {title}
          </h2>
          <div style={{ height: "4px", width: "60px", backgroundColor: "#0284c7", margin: "15px auto" }}></div>
          <p style={{ color: "#64748b", fontSize: "16px", maxWidth: "700px", margin: "0 auto", lineHeight: "1.7" }}>
            {desc}
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(500px, 100%), 1fr))",
            gap: "20px",
          }}
        >
          {packagingOptions.map((item, i) => {
            const name = pick(item.name, locale);
            const text = pick(item.desc, locale);
            return (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "18px",
                  padding: "18px",
                  backgroundColor: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  borderRadius: "12px",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "170px",
                    height: "170px",
                    flexShrink: 0,
                    backgroundColor: "#ffffff",
                    border: "1px solid #eef2f7",
                    borderRadius: "10px",
                    padding: "8px",
                    boxSizing: "border-box",
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      top: "6px",
                      left: "9px",
                      fontSize: "12px",
                      fontWeight: 800,
                      color: "#cbd5e1",
                      letterSpacing: "0.5px",
                      zIndex: 1,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Image
                    src={item.img}
                    alt={name}
                    width={400}
                    height={400}
                    sizes="170px"
                    style={{ width: "100%", height: "100%", objectFit: "contain" }}
                  />
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3 style={{ fontSize: "17px", fontWeight: 700, color: "#0f172a", margin: "0 0 8px" }}>
                    {name}
                  </h3>
                  <span
                    style={{
                      display: "inline-block",
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#0369a1",
                      backgroundColor: "#e0f2fe",
                      borderRadius: "4px",
                      padding: "2px 8px",
                      marginBottom: "10px",
                    }}
                  >
                    {item.spec}
                  </span>
                  <p style={{ fontSize: "13.5px", color: "#475569", lineHeight: 1.65, margin: 0 }}>
                    {text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <p
          style={{
            marginTop: "28px",
            padding: "16px 18px",
            borderLeft: "3px solid #0284c7",
            backgroundColor: "#f8fafc",
            borderRadius: "0 8px 8px 0",
            fontSize: "14px",
            lineHeight: 1.7,
            color: "#475569",
          }}
        >
          {note}
        </p>
      </div>
    </section>
  );
}
