import useWindowSize from "../hooks/useWindowSize";

export default function Footer() {
  const { isMobile } = useWindowSize();

  return (
    <footer style={{
      background: "var(--ink)",
      padding: isMobile ? "32px 24px" : "36px 48px",
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      justifyContent: "space-between",
      alignItems: isMobile ? "flex-start" : "center",
      gap: isMobile ? "12px" : "0",
    }}>
      <span style={{
        fontFamily: "var(--display)",
        fontSize: isMobile ? "18px" : "20px",
        letterSpacing: "0.08em",
        color: "var(--paper)",
      }}>
        RARE VICTOR
      </span>
      <span style={{
        fontFamily: "var(--mono)",
        fontSize: isMobile ? "10px" : "12px",
        letterSpacing: "0.12em",
        color: "rgba(242,237,230,0.28)",
      }}>
        © 2026 · All Rights Reserved
      </span>
    </footer>
  );
}