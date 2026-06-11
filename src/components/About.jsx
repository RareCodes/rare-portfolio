import useWindowSize from "../hooks/useWindowSize";

export default function About() {
  const { isMobile, isTablet } = useWindowSize();

  const skills = [
    "Figma", "User Research", "Design Systems", "Prototyping",
    "Information Architecture", "AI Design", "UX Writing", "Interaction Design",
  ];

  return (
    <div id="about" style={{
      background: "var(--ink)",
      color: "var(--paper)",
      padding: isMobile ? "72px 24px" : isTablet ? "96px 36px" : "120px 48px",
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1fr" : "220px 380px 1fr",
      gap: isMobile ? "48px" : "64px",
      alignItems: "start",
    }}>

      {/* STATS */}
      <div style={{
        display: "flex",
        flexDirection: isMobile ? "row" : "column",
        gap: isMobile ? "40px" : "36px",
        flexWrap: "wrap",
      }}>
        {[
          { num: "6", label: "Design Projects" },
          { num: "4", label: "Industries" },
        ].map((s) => (
          <div key={s.label}>
            <div style={{
              fontFamily: "var(--display)",
              fontSize: isMobile ? "52px" : "68px",
              lineHeight: "1",
              color: "var(--accent)",
            }}>
              {s.num}
            </div>
            <div style={{
              fontFamily: "var(--mono)",
              fontSize: "9px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "rgba(242,237,230,0.4)",
              marginTop: "2px",
            }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* PHOTO */}
      {/* <div style={{ position: "relative", display: isTablet && !isMobile ? "none" : isMobile ? "none" : "block" }}>
        <div style={{
          width: "100%",
          aspectRatio: "3/4",
          overflow: "hidden",
          boxShadow: "12px 12px 0 var(--accent)",
        }}>
          <img
            src="/hero-pics.png"
            alt="Rare — Product Designer"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
          />
        </div>
        <div style={{
          position: "absolute",
          bottom: "-12px",
          left: "12px",
          fontFamily: "var(--mono)",
          fontSize: "9px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--accent)",
        }}>
          Rare ✦ Product Designer
        </div>
      </div> 

      {/* COPY */}
      <div style={{ paddingTop: isMobile ? "0" : "8px", gridColumn: isMobile ? "1" : isTablet ? "2" : "3" }}>

        {/* PHOTO ON MOBILE — shown inline above copy */}
        
        <h2 style={{
          fontFamily: "var(--serif)",
          fontStyle: "italic",
          fontSize: isMobile ? "36px" : "48px",
          lineHeight: "1.15",
          color: "var(--paper)",
          marginBottom: "24px",
        }}>
          About me
        </h2>
        <p style={{
          fontSize: isMobile ? "15px" : "16px",
          lineHeight: "1.78",
          color: "rgba(242,237,230,0.6)",
          maxWidth: "480px",
          marginBottom: "16px",
        }}>
          I work across the full product design lifecycle, from discovery and user research to information architecture, interaction design, and high-fidelity prototyping. My work spans bio-tech, edtech, construction, and e-commerce.
        </p>
        <p style={{
          fontSize: isMobile ? "15px" : "16px",
          lineHeight: "1.78",
          color: "rgba(242,237,230,0.6)",
          maxWidth: "480px",
          marginBottom: "32px",
        }}>
          My process is deliberate. I use AI as a thinking partner and research accelerator, so the insights stay sharp and the decisions stay mine.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {skills.map((skill) => (
            <span key={skill} style={{
              fontFamily: "var(--mono)",
              fontSize: "9px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              border: "1px solid rgba(242,237,230,0.18)",
              padding: "6px 12px",
              color: "rgba(242,237,230,0.45)",
            }}>
              {skill}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}