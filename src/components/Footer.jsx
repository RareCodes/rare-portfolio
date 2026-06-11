export default function Footer() {
//   const links = ["Twitter", "GitHub", "LinkedIn", "Dribbble"];

  return (
    <footer style={{ background:"var(--ink)", padding:"36px 48px", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
      <span style={{ fontFamily:"var(--display)", fontSize:"20px", letterSpacing:"0.08em", color:"var(--paper)" }}>
        RARE VICTOR
      </span>
      <span style={{ fontFamily:"var(--mono)", fontSize:"12px", letterSpacing:"0.12em", color:"rgba(242,237,230,0.28)"}}>
        © 2026 · All Rights Reserved
      </span>
      {/* <div style={{ display:"flex", gap:"22px" }}>
        {links.map((link) => (
          <a key={link} href="#" style={{ fontFamily:"var(--mono)", fontSize:"9px", letterSpacing:"0.12em", textTransform:"uppercase", color:"rgba(242,237,230,0.38)", textDecoration:"none", cursor:"none" }}>
            {link}
          </a>
        ))}
      </div> */}
    </footer>
  );
}