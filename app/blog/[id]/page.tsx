"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useLanguage } from "../../../components/LanguageContext";
import { translations } from "../../translations";
import { blogPosts } from "../../data/blog";

export default function BlogDetail() {
  const params = useParams();
  const id = params.id as string;
  const { lang } = useLanguage();
  const post = blogPosts.find(p => p.id === id);

  if (!post) return (<main><div style={{padding:"100px 20px",textAlign:"center"}}><h1>Not Found</h1><Link href="/blog" style={{color:"#0284c7"}}>Back</Link></div></main>);

  const t = translations[lang];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {"@type":"Organization","name":post.author,"url":"https://www.lelionautopart.com"},
    "publisher": {"@type":"Organization","name":"Ningbo Zhenhai Bowang Autoparts Co., Ltd."},
    "mainEntityOfPage": {"@type":"WebPage","@id":"https://www.lelionautopart.com/blog/" + post.id},
    "keywords": post.tags.join(", ")
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type":"ListItem","position":1,"name":"Home","item":"https://www.lelionautopart.com/"},
      {"@type":"ListItem","position":2,"name":"Blog","item":"https://www.lelionautopart.com/blog"},
      {"@type":"ListItem","position":3,"name":post.title,"item":"https://www.lelionautopart.com/blog/" + post.id}
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

    </main>
  );
}
