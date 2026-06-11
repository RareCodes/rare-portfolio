import { useEffect, useState } from "react";

export default function Nav({ currentPage, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const isHome = currentPage === "home";

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [currentPage]);

  const scrollToSection = (id) => {
    setMenuOpen(false);
    if (!isHome) {
      onNavigate("home");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: isMobile ? "20px 24px" : "26px 48px",
        background: (!isHome || scrolled || menuOpen) ? "rgba(242,237,230,0.97)" : "transparent",
        backdropFilter: (!isHome || scrolled) ? "blur(8px)" : "none",
        borderBottom: (!isHome || scrolled) ? "1px solid rgba(10,10,10,0.07)" : "none",
        transition: "background 0.3s",
        overflow: "hidden"
      }}>

        {/* LOGO */}
        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate("home"); setMenuOpen(false); }}
          style={{ fontFamily: "var(--display)", fontSize: "22px", letterSpacing: "0.08em", color: "var(--ink)", textDecoration: "none", zIndex: 201 }}>
          RARE
        </a>

        {/* DESKTOP LINKS */}
        {!isMobile && isHome && (
          <ul style={{ display: "flex", gap: "36px", listStyle: "none" }}>
            {["about", "work", "contact"].map((id) => (
              <li key={id}>
                <a href={`#${id}`} onClick={(e) => { e.preventDefault(); scrollToSection(id); }}
                  style={{ fontFamily: "var(--mono)", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink)", textDecoration: "none" }}>
                  {id}
                </a>
              </li>
            ))}
          </ul>
        )}

        {/* DESKTOP BACK */}
        {!isMobile && !isHome && (
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate("home"); }}
            style={{ fontFamily: "var(--mono)", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--mid)", textDecoration: "none" }}>
            ← Back to Work
          </a>
        )}

        {/* MOBILE BACK */}
        {isMobile && !isHome && (
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate("home"); }}
            style={{ fontFamily: "var(--mono)", fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--mid)", textDecoration: "none" }}>
            ← Back
          </a>
        )}

        {/* HAMBURGER */}
        {isMobile && isHome && (
          <button onClick={() => setMenuOpen((p) => !p)}
            style={{ background: "none", border: "none", padding: "4px", display: "flex", flexDirection: "column", gap: "5px", zIndex: 201, cursor: "pointer" }}>
            <span style={{ display: "block", width: "24px", height: "2px", background: "var(--ink)", borderRadius: "2px", transition: "transform 0.3s", transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none" }} />
            <span style={{ display: "block", width: "24px", height: "2px", background: "var(--ink)", borderRadius: "2px", transition: "opacity 0.3s", opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: "block", width: "24px", height: "2px", background: "var(--ink)", borderRadius: "2px", transition: "transform 0.3s", transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none" }} />
          </button>
        )}
      </nav>

      {/* MOBILE FULLSCREEN MENU */}
      {isMobile && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 199,
          background: "var(--paper)",
          display: "flex", flexDirection: "column",
          justifyContent: "flex-start", alignItems: "flex-start",
          padding: "64px 32px",
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.4s cubic-bezier(.16,1,.3,1)",
        }}>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "4px", width: "100%" }}>
            {["about", "work", "contact"].map((id) => (
              <li key={id}>
                <a href={`#${id}`} onClick={(e) => { e.preventDefault(); scrollToSection(id); }}
                  style={{ fontFamily: "var(--display)", fontSize: "clamp(48px, 14vw, 80px)", color: "var(--ink)", textDecoration: "none", display: "block", lineHeight: "1.1" }}>
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
          </ul>
          <div style={{ marginTop: "48px", fontFamily: "var(--mono)", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--mid)" }}>
            Based in Abuja, Nigeria
          </div>
        </div>
      )}
    </>
  );
}