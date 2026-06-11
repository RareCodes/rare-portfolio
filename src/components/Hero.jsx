export default function Hero({ onNavigate }) {
  const marqueeItems = [
    "Product Design", "UX Research", "Design Systems",
    "Interaction Design", "Prototyping", "UI Design",
    "Figma", "AI Design" ,
  ];

  return (
    <section style={{ minHeight:"100vh", display:"flex", flexDirection:"column", justifyContent:"flex-end", padding:"0 48px 64px", position:"relative", overflow:"hidden" }}>

      {/* MARQUEE */}
      <div style={{ position:"absolute", bottom:"0", left:0, right:0, overflow:"hidden", borderTop:"1px solid var(--ink)", borderBottom:"1px solid var(--ink)", padding:"10px 0", whiteSpace:"nowrap" }}>
        <div style={{ display:"inline-flex", animation:"marquee 20s linear infinite" }}>
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} style={{ fontFamily:"var(--mono)", fontSize:"11px", letterSpacing:"0.15em", textTransform:"uppercase", color:"var(--mid)", padding:"0 28px" }}>
              {i % 1 === 0 && i !== 0 ? <><span style={{ color:"var(--accent)", padding:"0 6px" }}>✦</span>{item}</> : item}
            </span>
          ))}
        </div>
      </div>

      {/* SCROLL HINT */}
      <div style={{ fontFamily:"var(--mono)", fontSize:"10px", letterSpacing:"0.2em", textTransform:"uppercase", color:"var(--mid)", writingMode:"vertical-rl", position:"absolute", right:"48px", top:"50%", transform:"translateY(-50%)", display:"flex", alignItems:"center", gap:"10px" }}>
        Scroll
        <span style={{ width:"1px", height:"56px", background:"var(--mid)", display:"block" }} />
      </div>

      {/* EYEBROW */}
      <div style={{ fontFamily:"var(--mono)", fontSize:"11px", letterSpacing:"0.2em", textTransform:"uppercase", color:"var(--mid)", marginBottom:"20px", display:"flex", alignItems:"center", gap:"12px" }}>
        <span style={{ width:"32px", height:"1px", background:"var(--accent)", display:"block" }} />
        Product Designer
      </div>

      {/* HEADLINE */}
      <h1 style={{ fontFamily:"var(--display)", fontSize:"clamp(88px, 13vw, 190px)", lineHeight:"0.88", color:"var(--ink)", marginBottom:"0" }}>
        Rare
        <span style={{ fontFamily:"var(--serif)", fontStyle:"italic", fontSize:"clamp(72px, 10vw, 150px)", color:"var(--accent)", display:"block" }}>
          Victor
        </span>
      </h1>

      {/* BOTTOM ROW */}
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginTop:"44px", paddingTop:"28px", borderTop:"1px solid rgba(10,10,10,0.14)" }}>
        <p style={{ maxWidth:"360px", fontSize:"15px", lineHeight:"1.68", color:"var(--mid)" }}>
          I craft digital experiences that sit at the intersection of beauty and function, from pixel-perfect interfaces to illustrations that tell stories without words.
        </p>
        <a
          href="#work"
          onClick={(e) => { e.preventDefault(); document.getElementById("work")?.scrollIntoView({ behavior:"smooth" }); }}
          style={{ display:"inline-flex", alignItems:"center", gap:"12px", background:"var(--ink)", color:"var(--paper)", fontFamily:"var(--mono)", fontSize:"11px", letterSpacing:"0.15em", textTransform:"uppercase", textDecoration:"none", padding:"15px 28px", cursor:"none" }}
        >
          View Work <span>→</span>
        </a>
      </div>

      {/* MARQUEE KEYFRAME */}
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </section>
  );
}