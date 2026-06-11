export default function Contact() {
  const links = [
    { label: "Email", value: "missrayy8@gmail.com", href: "mailto:missrayy8@gmail.com", arrow: "↗" },
    { label: "GitHub", value: "RareCodes", href: "https://github.com/RareCodes", arrow: "↗" },
    // { label: "Resume", value: "Download CV", href: "#", arrow: "↓" },
  ];

  return (
    <section id="contact" style={{ padding:"120px 48px 96px", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"72px", alignItems:"center" }}>

      {/* LEFT */}
      <div>
        <h2 style={{ fontFamily:"var(--display)", fontSize:"clamp(60px, 8vw, 110px)", lineHeight:"0.9", marginBottom:"28px" }}>
          LET'S<br />
          <em style={{ fontFamily:"var(--serif)", fontStyle:"italic", color:"var(--accent)" }}>TALK.</em>
        </h2>
        <p style={{ fontSize:"15px", lineHeight:"1.72", color:"var(--mid)", maxWidth:"360px" }}>
          Open to product design roles and interesting collaborations.
        </p>
      </div>

      {/* RIGHT */}
      <div>
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"22px 0", borderBottom:"1px solid rgba(10,10,10,0.1)", textDecoration:"none", color:"var(--ink)", transition:"padding-left 0.3s", cursor:"none" }}
            onMouseEnter={(e) => e.currentTarget.style.paddingLeft = "14px"}
            onMouseLeave={(e) => e.currentTarget.style.paddingLeft = "0px"}
          >
            <div>
              <div style={{ fontFamily:"var(--mono)", fontSize:"9px", letterSpacing:"0.2em", textTransform:"uppercase", color:"var(--mid)" }}>{link.label}</div>
              <div style={{ fontFamily:"var(--serif)", fontSize:"21px", fontStyle:"italic" }}>{link.value}</div>
            </div>
            <span style={{ fontSize:"20px", color:"var(--accent)" }}>{link.arrow}</span>
          </a>
        ))}
      </div>

    </section>
  );
}