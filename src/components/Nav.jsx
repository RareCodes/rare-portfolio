import { useEffect, useState } from "react";

export default function Nav({ currentPage, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const isHome = currentPage === "home";
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const scrollToSection = (id) => {
    if (!isHome) { onNavigate("home"); setTimeout(() => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); }, 100); }
    else { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); }
  };
  return (
    <nav style={{ position:"fixed", top:0, left:0, right:0, zIndex:200, display:"flex", justifyContent:"space-between", alignItems:"center", padding:"26px 48px", background:(!isHome||scrolled)?"rgba(242,237,230,0.95)":"transparent", transition:"background 0.3s" }}>
      <a href="#" onClick={(e)=>{e.preventDefault();onNavigate("home");}} style={{ fontFamily:"var(--display)", fontSize:"22px", letterSpacing:"0.08em", color:"var(--ink)", textDecoration:"none", cursor:"none" }}>RARE</a>
      {isHome && (
        <ul style={{ display:"flex", gap:"36px", listStyle:"none" }}>
          {["about","work","contact"].map((id)=>(
            <li key={id}><a href={`#${id}`} onClick={(e)=>{e.preventDefault();scrollToSection(id);}} style={{ fontFamily:"var(--mono)", fontSize:"11px", letterSpacing:"0.12em", textTransform:"uppercase", color:"var(--ink)", textDecoration:"none", cursor:"none" }}>{id}</a></li>
          ))}
        </ul>
      )}
      {!isHome && (
        <a href="#" onClick={(e)=>{e.preventDefault();onNavigate("home");}} style={{ fontFamily:"var(--mono)", fontSize:"11px", letterSpacing:"0.12em", textTransform:"uppercase", color:"var(--mid)", textDecoration:"none", cursor:"none" }}>← Back to Work</a>
      )}
    </nav>
  )}