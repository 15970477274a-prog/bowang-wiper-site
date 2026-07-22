"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useLanguage } from "../../../../components/LanguageContext";
import { translations } from "../../../translations";
import { blogPosts } from "../../../data/blog";
import { getBlogTranslation } from "../../../data/blogTranslations";

export default function BlogDetail() {
  const params = useParams();
  const id = params.id as string;
  const { lang } = useLanguage();
  const l = (p: string) => "/" + lang + p;
  const post = blogPosts.find(p => p.id === id);

  if (!post) return (<main><div style={{padding:"100px 20px",textAlign:"center"}}><h1>Not Found</h1><Link href={l("/blog")} style={{color:"#0284c7"}}>Back</Link></div></main>);

  const t = translations[lang];
  const blogTrans = getBlogTranslation(id, lang);
  const postTitle = blogTrans?.title || post.title;
  const postExcerpt = blogTrans?.excerpt || post.excerpt;

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
    "mainEntityOfPage": {"@type":"WebPage","@id":"https://www.lelionautopart.com/blog/" + post.id},
    "keywords": post.tags.join(", "),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type":"ListItem","position":1,"name":"Home","item":"https://www.lelionautopart.com/"},
      {"@type":"ListItem","position":2,"name":"Blog","item":"https://www.lelionautopart.com/blog"},
      {"@type":"ListItem","position":3,"name":postTitle,"item":"https://www.lelionautopart.com/blog/" + post.id}
    ]
  };

  const renderContent = (c: string) => c.split("\n").map((line,i) => {
    if (line.startsWith("## ")) return <h2 key={i} style={{fontSize:"24px",fontWeight:700,margin:"40px 0 15px",color:"#0f172a"}}>{line.slice(3)}</h2>;
    if (line.startsWith("### ")) return <h3 key={i} style={{fontSize:"18px",fontWeight:700,margin:"30px 0 10px",color:"#0f172a"}}>{line.slice(4)}</h3>;
    if (line.startsWith("- ")) return <li key={i} style={{color:"#475569",margin:"6px 0",fontSize:"15px"}}>{line.slice(2)}</li>;
    if (line.trim() === "") return <div key={i} style={{height:"10px"}}/>;
    return <p key={i} style={{color:"#475569",lineHeight:1.8,fontSize:"15px",margin:"0 0 5px"}}>{line}</p>;
  });

  const related = blogPosts.filter(p => p.category === post.category && p.id !== post.id).slice(0, 2);

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
        <img src={post.image} alt={postTitle} width={800} height={450} style={{ width: "100%", height: "auto", borderRadius: "12px" }} loading="lazy" />
      </section>

      {/* Article Content */}
      <section style={{ maxWidth: "720px", margin: "0 auto", padding: "20px 20px 60px" }}>
        <div style={{ fontSize: "16px", lineHeight: 1.9, color: "#334155" }}>
          {renderContent(post.content)}
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
            <h2 style={{ fontSize: "24px", fontWeight: 800, textAlign: "center", marginBottom: "30px", color: "#0f172a" }}>Related Articles</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
              {related.map(rp => (
                <Link key={rp.id} href={l("/blog/" + rp.id)} style={{ textDecoration: "none", color: "inherit" }}>
                  <div style={{ backgroundColor: "white", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 12px rgba(0,0,0,0.06)" }}>
                    <img src={rp.image} alt={rp.title} width={400} height={225} style={{ width: "100%", height: "200px", objectFit: "cover" }} loading="lazy" />
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

      {/* CTA */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "24px", fontWeight: 800, marginBottom: "10px", color: "#0f172a" }}>Ready to Source Premium Wiper Blades?</h2>
        <p style={{ color: "#64748b", marginBottom: "25px" }}>Contact our export team for bulk pricing and OEM solutions.</p>
        <Link href={l("/contact")} className="btn-primary" style={{ padding: "14px 32px", display: "inline-block" }}>Inquire Now</Link>
      </section>
    </main>
  );
}
