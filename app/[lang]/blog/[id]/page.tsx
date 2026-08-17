"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useLanguage } from "../../../../components/LanguageContext";
import { translations } from "../../../translations";
import { blogPosts } from "../../../data/blog";
import { getBlogTranslation } from "../../../data/blogTranslations";
import { allProducts } from "../../../data/products";

export default function BlogDetail() {
  const params = useParams();
  const id = params.id as string;
  const { lang } = useLanguage();
  const l = (p: string) => "/" + lang + p;
  const post = blogPosts.find(p => p.id === id);
  const t = translations[lang];

  if (!post) return (<main><div style={{padding:"100px 20px",textAlign:"center"}}><h1>{t.notFoundGeneric}</h1><Link href={l("/blog")} style={{color:"#0284c7"}}>{t.back}</Link></div></main>);

  const blogTrans = getBlogTranslation(id, lang);
  const postTitle = blogTrans?.title || post.title;
  const postExcerpt = blogTrans?.excerpt || post.excerpt;
  const postContent = blogTrans?.content || post.content;

  const articleUrl = "https://www.lelionautopart.com/" + lang + "/blog/" + post.id;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": postTitle,
    "description": postExcerpt,
    "image": post.image,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {"@type":"Organization","name":post.author,"url":"https://www.lelionautopart.com"},
    "publisher": {"@type":"Organization","name":"Ningbo Zhenhai Bowang Autoparts Co., Ltd."},
    "mainEntityOfPage": {"@type":"WebPage","@id":articleUrl},
    "keywords": post.tags.join(", "),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type":"ListItem","position":1,"name":"Home","item":"https://www.lelionautopart.com/" + lang},
      {"@type":"ListItem","position":2,"name":"Blog","item":"https://www.lelionautopart.com/" + lang + "/blog"},
      {"@type":"ListItem","position":3,"name":postTitle,"item":articleUrl}
    ]
  };

  const renderInline = (text: string, key: string | number) => {
    // Render markdown links [label](/path) and **bold** segments
    const parts = text.split(/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g).filter(Boolean);
    return (
      <span key={key}>
        {parts.map((part, j) => {
          const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
          if (link) {
            const href = link[2];
            return href.startsWith("http") ? (
              <a key={j} href={href} target="_blank" rel="noopener noreferrer" style={{ color: "#0284c7", textDecoration: "underline" }}>{link[1]}</a>
            ) : (
              <Link key={j} href={l(href)} style={{ color: "#0284c7", textDecoration: "underline" }}>{link[1]}</Link>
            );
          }
          if (part.startsWith("**") && part.endsWith("**")) {
            return <strong key={j} style={{ fontWeight: 700 }}>{part.slice(2, -2)}</strong>;
          }
          return <span key={j}>{part}</span>;
        })}
      </span>
    );
  };

  const renderContent = (c: string) => {
    const lines = c.split("\n");
    const out: React.ReactNode[] = [];
    let i = 0;
    while (i < lines.length) {
      const line = lines[i];
      if (line.trim().startsWith("|")) {
        const rows: string[][] = [];
        while (i < lines.length && lines[i].trim().startsWith("|")) {
          rows.push(lines[i].trim().replace(/^\||\|$/g, "").split("|").map((cell) => cell.trim()));
          i++;
        }
        const isSep = (r: string[]) => r.length > 0 && r.every((cell) => /^:?-{2,}:?$/.test(cell.replace(/\*/g, "")));
        if (rows.length > 1 && isSep(rows[1])) rows.splice(1, 1);
        const header = rows[0] || [];
        const body = rows.slice(1);
        out.push(
          <div key={"t" + i} style={{ overflowX: "auto", margin: "20px 0" }}>
            <table style={{ borderCollapse: "collapse", width: "100%", minWidth: "480px", fontSize: "14px" }}>
              <thead>
                <tr>
                  {header.map((h, j) => (
                    <th key={j} style={{ border: "1px solid #e2e8f0", background: "#f1f5f9", color: "#0f172a", padding: "10px 12px", textAlign: "left", fontWeight: 700, fontSize: "13px" }}>{renderInline(h, "h" + j)}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {body.map((row, ri) => (
                  <tr key={ri} style={{ background: ri % 2 === 1 ? "#f8fafc" : "#ffffff" }}>
                    {row.map((cell, ci) => (
                      <td key={ci} style={{ border: "1px solid #e2e8f0", color: "#334155", padding: "10px 12px", lineHeight: 1.5 }}>{renderInline(cell, "c" + ri + "-" + ci)}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        continue;
      }
      if (line.startsWith("## ")) out.push(<h2 key={i} style={{ fontSize: "24px", fontWeight: 700, margin: "40px 0 15px", color: "#0f172a" }}>{renderInline(line.slice(3), i)}</h2>);
      else if (line.startsWith("### ")) out.push(<h3 key={i} style={{ fontSize: "18px", fontWeight: 700, margin: "30px 0 10px", color: "#0f172a" }}>{renderInline(line.slice(4), i)}</h3>);
      else if (line.startsWith("- ")) out.push(<li key={i} style={{ color: "#475569", margin: "6px 0", fontSize: "15px" }}>{renderInline(line.slice(2), i)}</li>);
      else if (line.trim() === "") out.push(<div key={i} style={{ height: "10px" }} />);
      else out.push(<p key={i} style={{ color: "#475569", lineHeight: 1.8, fontSize: "15px", margin: "0 0 5px" }}>{renderInline(line, i)}</p>);
      i++;
    }
    return out;
  };

  const related = blogPosts.filter(p => p.category === post.category && p.id !== post.id).slice(0, 2);

  const featuredProducts = ["bw-201-specific-fit-tesla-model-x", "bw-861-multifunction-wiper-blade", "bw-802-universal-wiper-blade"]
    .map(pid => allProducts.find(p => p.id === pid))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(articleSchema)}}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(breadcrumbSchema)}}/>

      {/* Hero Banner */}
      <section style={{ padding: "80px 20px 40px", background: "linear-gradient(rgba(15,23,42,0.85),rgba(15,23,42,0.85))", color: "white", textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <span style={{ display: "inline-block", backgroundColor: "#0284c7", color: "white", padding: "6px 16px", borderRadius: "20px", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", marginBottom: "20px" }}>{post.category}</span>
          <h1 style={{ fontSize: "36px", fontWeight: 800, lineHeight: 1.3, marginBottom: "20px" }}>{postTitle}</h1>
          <p style={{ color: "#94a3b8", fontSize: "16px", lineHeight: 1.6, marginBottom: "20px" }}>{postExcerpt}</p>
          <div style={{ display: "flex", justifyContent: "center", gap: "20px", fontSize: "13px", color: "#64748b" }}>
            <span>{post.author}</span>
            <span>{post.date}</span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
        <Image src={post.image} alt={postTitle} width={800} height={450} sizes="(max-width: 800px) 100vw, 800px" style={{ width: "100%", height: "auto", borderRadius: "12px" }} />
      </section>

      {/* Article Content */}
      <section style={{ maxWidth: "720px", margin: "0 auto", padding: "20px 20px 60px" }}>
        <div style={{ fontSize: "16px", lineHeight: 1.9, color: "#334155" }}>
          {renderContent(postContent)}
        </div>

        {/* Tags */}
        <div style={{ marginTop: "40px", paddingTop: "30px", borderTop: "1px solid #e2e8f0", display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {post.tags.map((tag, i) => (
            <span key={i} style={{ backgroundColor: "#f1f5f9", color: "#475569", padding: "6px 14px", borderRadius: "20px", fontSize: "12px", fontWeight: 500 }}>{tag}</span>
          ))}
        </div>
      </section>

      {/* Related Posts */}
      {related.length > 0 && (
        <section style={{ backgroundColor: "#f8fafc", padding: "60px 20px" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "24px", fontWeight: 800, textAlign: "center", marginBottom: "30px", color: "#0f172a" }}>{t.relatedArticles}</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
              {related.map(rp => (
                <Link key={rp.id} href={l("/blog/" + rp.id)} style={{ textDecoration: "none", color: "inherit" }}>
                  <div style={{ backgroundColor: "white", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 12px rgba(0,0,0,0.06)" }}>
                    <Image src={rp.image} alt={rp.title} width={400} height={225} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
                    <div style={{ padding: "20px" }}>
                      <span style={{ fontSize: "12px", color: "#0284c7", fontWeight: 700 }}>{rp.category}</span>
                      <h3 style={{ fontSize: "16px", fontWeight: 700, margin: "10px 0", color: "#0f172a", lineHeight: 1.4 }}>{rp.title}</h3>
                      <p style={{ fontSize: "14px", color: "#64748b", lineHeight: 1.5 }}>{rp.excerpt.substring(0, 100)}...</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Popular Products */}
      {featuredProducts.length > 0 && (
        <section style={{ padding: "60px 20px" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "24px", fontWeight: 800, textAlign: "center", marginBottom: "30px", color: "#0f172a" }}>{t.popularProducts}</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
              {featuredProducts.map((fp) => (
                <Link key={fp.id} href={l("/products/" + fp.id)} style={{ textDecoration: "none", color: "inherit" }}>
                  <div style={{ backgroundColor: "white", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 12px rgba(0,0,0,0.06)", transition: "box-shadow 0.2s" }}>
                    <Image src={fp.image} alt={fp.name} width={400} height={300} style={{ width: "100%", height: "220px", objectFit: "contain", background: "#f8fafc", padding: "12px" }} />
                    <div style={{ padding: "16px 20px 20px" }}>
                      <h3 style={{ fontSize: "15px", fontWeight: 700, margin: "0 0 6px", color: "#0f172a", lineHeight: 1.4 }}>{fp.name}</h3>
                      <span style={{ fontSize: "13px", color: "#0284c7", fontWeight: 600 }}>{t.viewProducts} &rarr;</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "24px", fontWeight: 800, marginBottom: "10px", color: "#0f172a" }}>{t.blogCtaTitle}</h2>
        <p style={{ color: "#64748b", marginBottom: "25px" }}>{t.blogCtaSub}</p>
        <Link href={l("/contact")} className="btn-primary" style={{ padding: "14px 32px", display: "inline-block" }}>{t.inquireNow}</Link>
      </section>
    </main>
  );
}
