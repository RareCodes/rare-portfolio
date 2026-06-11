import useWindowSize from "../hooks/useWindowSize";

export default function Contact() {
  const { isMobile, isTablet } = useWindowSize();

  const links = [
    { label: "Email", value: "missrayy8@gmail.com", href: "mailto:missrayy8@gmail.com", arrow: "↗" },
    { label: "GitHub", value: "RareCodes", href: "https://github.com/RareCodes", arrow: "↗" },
  ];

  return (
    <section id="contact" style={{
      padding: isMobile ? "72px 24px 64px" : isTablet ? "96px 36px 72px" : "120px 48px 96px",
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
      gap: isMobile ? "40px" : "72px",
      alignItems: "center",
    }}>

      {/* LEFT */}
      <div>
        <h2 style={{
          fontFamily: "var(--display)",
          fontSize: isMobile ? "clamp(64px, 18vw, 96px)" : "clamp(60px, 8vw, 110px)",
          lineHeight: "0.9",
          marginBottom: "24px",
        }}>
          LET'S<br />
          <em style={{ fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--accent)" }}>TALK.</em>
        </h2>
        <p style={{
          fontSize: isMobile ? "14px" : "15px",
          lineHeight: "1.72",
          color: "var(--mid)",
          maxWidth: "360px",
        }}>
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
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: isMobile ? "18px 0" : "22px 0",
              borderBottom: "1px solid rgba(10,10,10,0.1)",
              textDecoration: "none",
              color: "var(--ink)",
              transition: "padding-left 0.3s",
              cursor: isMobile ? "pointer" : "none",
            }}
            onMouseEnter={(e) => { if (!isMobile) e.currentTarget.style.paddingLeft = "14px"; }}
            onMouseLeave={(e) => { if (!isMobile) e.currentTarget.style.paddingLeft = "0px"; }}
          >
            <div>
              <div style={{
                fontFamily: "var(--mono)",
                fontSize: "9px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--mid)",
                marginBottom: "4px",
              }}>
                {link.label}
              </div>
              <div style={{
                fontFamily: "var(--serif)",
                fontSize: isMobile ? "18px" : "21px",
                fontStyle: "italic",
              }}>
                {link.value}
              </div>
            </div>
            <span style={{ fontSize: isMobile ? "18px" : "20px", color: "var(--accent)" }}>
              {link.arrow}
            </span>
          </a>
        ))}
      </div>

    </section>
  );
}