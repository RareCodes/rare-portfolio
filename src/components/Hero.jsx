import useWindowSize from "../hooks/useWindowSize";

export default function Hero({ onNavigate }) {
  const { isMobile, isTablet } = useWindowSize();

  const marqueeItems = [
    "Product Design", "UX Research", "Design Systems",
    "Interaction Design", "Prototyping", "UI Design",
    "Figma", "AI Design", "React JS", "HTML + CSS", "Tailwind CSS",
  ];

  return (
    <section style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      padding: isMobile ? "0 24px 80px" : isTablet ? "0 36px 72px" : "0 48px 64px",
      position: "relative",
      overflow: "hidden",
    }}>

      {/* MARQUEE */}
      <div style={{
        position: "absolute",
        bottom: "0",
        left: 0,
        right: 0,
        overflow: "hidden",
        borderTop: "1px solid var(--ink)",
        borderBottom: "1px solid var(--ink)",
        padding: "10px 0",
        whiteSpace: "nowrap",
      }}>
        <div style={{ display: "inline-flex", animation: "marquee 20s linear infinite" }}>
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} style={{
              fontFamily: "var(--mono)",
              fontSize: isMobile ? "9px" : "11px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--mid)",
              padding: isMobile ? "0 16px" : "0 28px",
            }}>
              {i % 1 === 0 && i !== 0 ? (
                <><span style={{ color: "var(--accent)", padding: "0 6px" }}>✦</span>{item}</>
              ) : item}
            </span>
          ))}
        </div>
      </div>

      {/* SCROLL HINT — hidden on mobile */}
      {!isMobile && (
        <div style={{
          fontFamily: "var(--mono)",
          fontSize: "10px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--mid)",
          writingMode: "vertical-rl",
          position: "absolute",
          right: isTablet ? "36px" : "48px",
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}>
          Scroll
          <span style={{ width: "1px", height: "56px", background: "var(--mid)", display: "block" }} />
        </div>
      )}

      {/* EYEBROW */}
      <div style={{
        fontFamily: "var(--mono)",
        fontSize: isMobile ? "9px" : "11px",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: "var(--mid)",
        marginBottom: isMobile ? "16px" : "20px",
        display: "flex",
        alignItems: "center",
        gap: "12px",
      }}>
        <span style={{ width: "32px", height: "1px", background: "var(--accent)", display: "block" }} />
        Product Designer
      </div>

      {/* HEADLINE */}
      <h1 style={{
        fontFamily: "var(--display)",
        fontSize: isMobile ? "clamp(72px, 20vw, 120px)" : "clamp(88px, 13vw, 190px)",
        lineHeight: "0.88",
        color: "var(--ink)",
        marginBottom: "0",
      }}>
        Rare
        <span style={{
          fontFamily: "var(--serif)",
          fontStyle: "italic",
          fontSize: isMobile ? "clamp(60px, 17vw, 100px)" : "clamp(72px, 10vw, 150px)",
          color: "var(--accent)",
          display: "block",
        }}>
          Victor
        </span>
      </h1>

      {/* BOTTOM ROW */}
      <div style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "column",
        justifyContent: "space-between",
        alignItems: isMobile ? "flex-start" : "flex-start",
        gap: isMobile ? "24px" : "0",
        marginTop: isMobile ? "32px" : "44px",
        paddingTop: isMobile ? "24px" : "28px",
        borderTop: "1px solid rgba(10,10,10,0.14)",
      }}>
        <p style={{
          maxWidth: isMobile ? "100%" : "600px",
          fontSize: isMobile ? "14px" : "15px",
          lineHeight: "1.68",
          color: "var(--mid)",
        }}>
          I design and build modern websites, landing pages, and digital products using Figma, UX strategy, and AI-assisted workflows - so you don’t have to manage multiple teams.
        </p>

         <p style={{
          maxWidth: isMobile ? "100%" : "600px",
          fontSize: isMobile ? "14px" : "15px",
          lineHeight: "1.68",
          color: "var(--mid)",
  
        }}>
          Outside of work I'm usually experimenting with AI tools, buried in a good book, or teaching myself something I probably don't need to know yet, but will.
        </p>
        <a
          href="#work"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
          }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            marginTop: isMobile ? "" : "24px",
            background: "var(--ink)",
            color: "var(--paper)",
            fontFamily: "var(--mono)",
            fontSize: "11px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            textDecoration: "none",
            padding: isMobile ? "14px 24px" : "15px 28px",
            cursor: "none",
            whiteSpace: "nowrap",
          }}
        >
          View Work <span>→</span>
        </a>
      </div>

      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </section>
  );
}