"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { translations, Locale } from "../../translations";
import { blogPosts } from "../../data/blog";

export default function BlogDetail() {
  const params = useParams();
  const id = params.id as string;
  const [lang, setLang] = useState<Locale>("en");
  const post = blogPosts.find(p => p.id === id);

  useEffect(() => {
    const savedLang = localStorage.getItem("lelion_lang") as Locale;
    if (savedLang && ["en", "es", "ru", "fr", "de"].includes(savedLang)) setLang(savedLang);
  }, []);

  if (!post) return <div style={{padding:"100px",textAlign:"center"}}><h1>Not Found</h1><Link href="/blog" style={{color:"#0284c7"}}>← Back</Link></div>;

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
    "publisher": {"@type":"Organization","name":"Ningbo Zhenhai Bowang Autoparts Co., Ltd.","logo":{"@type":"ImageObject","url":"https://sc02.alicdn.com/kf/H2533c3c14bc74cd3afe116f60a8357f4U.jpg"}},
    "mainEntityOfPage": {"@type":"WebPage","@id":`https://www.lelionautopart.com/blog/${post.id}`},
    "about": post.tags.join(", "),
    "keywords": post.tags.join(", ")
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type":"ListItem","position":1,"name":"Home","item":"https://www.lelionautopart.com/"},
      {"@type":"ListItem","position":2,"name":"Blog","item":"https://www.lelionautopart.com/blog"},
      {"@type":"ListItem","position":3,"name":post.title,"item":`https://www.lelionautopart.com/blog/${post.id}`}
    ]
  };

  const renderContent = (c: string) => c.split("\n").map((line,i) => {
    if (line.startsWith("## ")) return <h2 key={i} style={{fontSize:"24px",fontWeight:700,margin:"40px 0 15px",color:"#0f172a"}}>{line.replace("## ","")}</h2>;
    if (line.startsWith("### ")) return <h3 key={i} style={{fontSize:"18px",fontWeight:700,margin:"30px 0 10px",color:"#0f172a"}}>{line.replace("### ","")}</h3>;
    if (line.startsWith("- ")) return <li key={i} style={{color:"#475569",margin:"6px 0",fontSize:"15px"}}>{line.replace("- ","")}</li>;
    if (line.trim()==="") return <div key={i} style={{height:"10px"}}/>;
    if (line.startsWith("**")&&line.endsWith("**")) return <h4 key={i} style={{fontSize:"16px",fontWeight:700,margin:"25px 0 10px",color:"#0f172a"}}>{line.replace(/\*\*/g,"")}</h4>;
    return <p key={i} style={{color:"#475569",lineHeight:1.8,fontSize:"15px",margin:"0 0 5px"}}>{line}</p>;
  });

  const related = blogPosts.filter(p => p.category===post.category && p.id!==post.id).slice(0,2);

  return (
    <main style={{fontFamily:"system-ui,-apple-system,sans-serif",color:"#1e293b",backgroundColor:"#ffffff"}}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(articleSchema)}}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(breadcrumbSchema)}}/>
      <header style={{backgroundColor:"#0f172a",padding:"15px 20px",position:"sticky",top:0,zIndex:100}}>
        <div style={{maxWidth:"900px",margin:"0 auto",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <Link href="/" style={{color:"white",textDecoration:"none",fontWeight:"bold",fontSize:"18px"}}>BOWANG WIPER</Link>
          <nav style={{display:"flex",gap:"25px",alignItems:"center"}}>
            <Link href="/" style={{color:"#f8fafc",textDecoration:"none",fontSize:"14px"}}>{t.navHome}</Link>
            <Link href="/blog" style={{color:"#38bdf8",textDecoration:"none",fontSize:"14px",fontWeight:"bold"}}>Blog</Link>
            <Link href="/products" style={{color:"#f8fafc",textDecoration:"none",fontSize:"14px"}}>{t.navProducts}</Link>
            <Link href="/contact" style={{backgroundColor:"#0284c7",color:"white",padding:"8px 16px",borderRadius:"4px",textDecoration:"none",fontSize:"14px",fontWeight:"bold"}}>{t.navGetQuote}</Link>
          </nav>
        </div>
      </header>
      <article style={{maxWidth:"850px",margin:"0 auto",padding:"60px 20px"}}>
        <Link href="/blog" style={{color:"#0284c7",textDecoration:"none",fontSize:"14px",fontWeight:600,display:"inline-block",marginBottom:"30px"}}>← Back to Blog</Link>
        <div style={{marginBottom:"30px"}}>
          <div style={{display:"flex",gap:"10px",alignItems:"center",marginBottom:"15px"}}>
            <span style={{backgroundColor:"#e0f2fe",color:"#0369a1",padding:"4px 12px",borderRadius:"12px",fontSize:"12px",fontWeight:600}}>{post.category}</span>
            <span style={{color:"#94a3b8",fontSize:"13px"}}>{post.date}</span>
            <span style={{color:"#94a3b8",fontSize:"13px"}}>| {post.author}</span>
          </div>
          <h1 style={{fontSize:"36px",fontWeight:800,lineHeight:1.3,margin:"0 0 20px",color:"#0f172a"}}>{post.title}</h1>
          <p style={{fontSize:"16px",color:"#64748b",lineHeight:1.6}}>{post.excerpt}</p>
        </div>
        <div style={{borderRadius:"12px",overflow:"hidden",marginBottom:"40px",height:"400px",backgroundColor:"#f1f5f9"}}>
          <img src={post.image} alt={post.title} style={{width:"100%",height:"100%",objectFit:"cover"}}/>
        </div>
        <div style={{maxWidth:"750px",margin:"0 auto"}}>{renderContent(post.content)}</div>
        <div style={{borderTop:"1px solid #e2e8f0",marginTop:"50px",paddingTop:"30px"}}>
          <div style={{display:"flex",gap:"8px",flexWrap:"wrap"}}>{post.tags.map(t=><span key={t} style={{backgroundColor:"#f1f5f9",color:"#475569",padding:"6px 14px",borderRadius:"16px",fontSize:"12px",fontWeight:500}}>{t}</span>)}</div>
        </div>
      </article>
      {related.length>0 && (
        <section style={{padding:"60px 20px 80px",backgroundColor:"#f8fafc"}}>
          <div style={{maxWidth:"850px",margin:"0 auto"}}>
            <h2 style={{fontSize:"28px",fontWeight:800,marginBottom:"35px",color:"#0f172a"}}>Related Articles</h2>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"25px"}}>{related.map(r=><Link key={r.id} href={`/blog/${r.id}`} style={{textDecoration:"none",color:"inherit"}}><div style={{backgroundColor:"#ffffff",borderRadius:"10px",overflow:"hidden",border:"1px solid #e2e8f0"}}><div style={{height:"180px",overflow:"hidden",backgroundColor:"#f1f5f9"}}><img src={r.image} alt={r.title} style={{width:"100%",height:"100%",objectFit:"cover"}} loading="lazy"/></div><div style={{padding:"20px"}}><h3 style={{fontSize:"16px",fontWeight:700,margin:"0 0 10px",lineHeight:1.4}}>{r.title}</h3><p style={{color:"#64748b",fontSize:"13px",margin:0,lineHeight:1.5}}>{r.excerpt.substring(0,100)}...</p></div></div></Link>)}</div>
          </div>
        </section>
      )}
      <section style={{padding:"60px 20px",textAlign:"center",backgroundColor:"#ffffff"}}>
        <div style={{maxWidth:"600px",margin:"0 auto"}}>
          <h2 style={{fontSize:"26px",fontWeight:800,marginBottom:"15px"}}>Interested in Our Products?</h2>
          <p style={{color:"#64748b",marginBottom:"25px"}}>Get in touch for pricing, samples, and technical specs.</p>
          <Link href="/contact" style={{backgroundColor:"#0284c7",color:"white",padding:"14px 40px",borderRadius:"8px",textDecoration:"none",fontWeight:"bold"}}>Contact Our Team</Link>
        </div>
      </section>
      <footer style={{backgroundColor:"#0f172a",color:"#94a3b8",padding:"40px 20px",textAlign:"center"}}><p style={{fontSize:"12px",margin:0}}>&copy; 2026 Bowang Autoparts. All rights reserved.</p></footer>
      <a href="https://wa.me/8618867886795" target="_blank" rel="noopener noreferrer" style={{position:"fixed",bottom:"30px",right:"30px",width:"60px",height:"60px",backgroundColor:"#25d366",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",boxShadow:"0 4px 12px rgba(0,0,0,0.2)",zIndex:9999}}><svg width="30" height="30" viewBox="0 0 448 512" fill="white"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.1 0-65.6-8.9-93.3-25.7l-6.7-4.1-69.5 18.3 18.7-67.7-4.5-7.1C51.3 322.2 42.1 289 42.1 254c0-100.1 81.3-181.5 181.6-181.5 48.5 0 94.1 18.9 128.4 53.3 34.3 34.4 53.2 80 53.2 128.4 0 100.2-81.4 181.5-181.4 181.5zm113.8-154.2c-6.2-3.1-36.8-18.1-42.5-20.1-5.7-2-9.8-3.1-13.9 3.1-4.1 6.2-15.8 20.1-19.4 24.1-3.6 4-7.2 4.5-13.4 1.5-6.2-3.1-26.2-9.6-49.9-27.5-18.4-16.4-30.8-36.7-34.4-42.8-3.6-6.2-.4-9.6 2.7-12.7 2.8-2.8 6.2-7.2 9.3-10.8 3.1-3.6 4.1-6.2 6.2-10.3 2-4.1 1-7.7-.5-10.8-1.5-3.1-13.9-33.5-19.1-45.8-5-12.2-10.2-10.5-13.9-10.6-3.6-.1-7.7-.1-11.8-.1-4.1 0-10.8 1.5-16.5 7.7-5.7 6.2-21.6 21.1-21.6 51.5 0 30.4 22.1 59.8 25.2 64 3.1 4.1 43.5 33.2 105.3 59.8 14.7 6.3 26.2 10.1 35.1 13 14.8 2.8 28.2 2.4 38.9 1c11.9-1.5 36.8-4.8 42-9.5 5.1-4.6 5.1-8.7 3.6-10.8-1.5-2.1-5.7-3.1-11.8-6.2z"/></svg></a>
    </main>
  );
}
