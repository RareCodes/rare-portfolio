import { useState } from "react";
import { projects } from "../data/projects";

const projectImages = {
  fortis: "/Fortis-cover.png",
   meridian: "/meridian-cover.png",
  skillswap: "/skillswap-cover.png",
  billit: "/billit-cover.png",
};

export default function WorkSection({ onNavigate }) {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="work" style={{ padding: "96px 0" }}>

      {/* HEADER */}
      <div style={{ padding: "0 48px", display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "1px solid rgba(10,10,10,0.12)", paddingBottom: "22px", marginBottom: "0" }}>
        <h2 style={{ fontFamily: "var(--display)", fontSize: "68px", lineHeight: "1" }}>
          SELECTED<br />WORK
        </h2>
        <span style={{ fontFamily: "var(--mono)", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--mid)" }}>
          2024 – 2025
        </span>
      </div>

      {/* PROJECT ROWS */}
      {projects.map((project, i) => (
        <div
          key={project.id}
          onClick={() => onNavigate(project.id)}
          onMouseEnter={() => setHoveredId(project.id)}
          onMouseLeave={() => setHoveredId(null)}
          style={{
            display: "grid",
            gridTemplateColumns: "80px 1fr 520px",
            borderBottom: "1px solid rgba(10,10,10,0.1)",
            cursor: "none",
            background: hoveredId === project.id ? "var(--cream)" : "transparent",
            transition: "background 0.3s",
          }}
        >
          {/* LEFT — INDEX */}
          <div style={{ padding: "48px 0 48px 48px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <span style={{ fontFamily: "var(--display)", fontSize: "52px", lineHeight: "1", color: "var(--accent)", opacity: hoveredId === project.id ? "1" : "0.25", transition: "opacity 0.3s" }}>
              {String(i + 1).padStart(2, "0")}
            </span>
          </div>

          {/* MIDDLE — NAME + INFO */}
          <div style={{ padding: "48px 48px 48px 32px", display: "flex", flexDirection: "column", justifyContent: "space-between", borderLeft: "1px solid rgba(10,10,10,0.08)" }}>
            <div>
              <div style={{ fontFamily: "var(--mono)", fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--mid)", marginBottom: "16px" }}>
                {project.label}
              </div>
              <div style={{
                fontFamily: hoveredId === project.id ? "var(--serif)" : "var(--display)",
                fontStyle: hoveredId === project.id ? "italic" : "normal",
                fontSize: "clamp(36px, 4vw, 56px)",
                lineHeight: "1",
                color: hoveredId === project.id ? "var(--accent)" : "var(--ink)",
                transition: "color 0.2s",
                marginBottom: "24px",
              }}>
                {project.name}
              </div>
              <p style={{ fontSize: "14px", lineHeight: "1.72", color: "var(--mid)", maxWidth: "420px", marginBottom: "32px" }}>
                {project.desc}
              </p>
            </div>

            {/* META ROW */}
            <div style={{ display: "flex", gap: "40px" }}>
              {Object.entries(project.meta || {}).slice(0, 3).map(([key, val]) => (
                <div key={key}>
                  <div style={{ fontFamily: "var(--mono)", fontSize: "8px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--mid)", marginBottom: "4px" }}>{key}</div>
                  <div style={{ fontSize: "13px", fontWeight: "500", color: "var(--ink)" }}>{val}</div>
                </div>
              ))}
            </div>

            {/* CHIPS */}
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "24px" }}>
              {project.chips.map((chip) => (
                <span key={chip} style={{ fontFamily: "var(--mono)", fontSize: "8px", letterSpacing: "0.1em", textTransform: "uppercase", border: "1px solid rgba(10,10,10,0.15)", padding: "4px 10px", color: "var(--mid)" }}>
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT — IMAGE */}
          <div style={{
            background: hoveredId === project.id ? "var(--ink)" : "var(--cream)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "360px",
            position: "relative",
            transition: "background 0.3s",
            padding: "64px",
          }}>
            {projectImages[project.id] ? (
              <img
                src={projectImages[project.id]}
                alt={project.name}
                style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "2px" }}
              />
            ) : (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
                <span style={{ fontFamily: "var(--display)", fontSize: "clamp(32px, 4vw, 56px)", color: hoveredId === project.id ? "var(--paper)" : "var(--mid)", opacity: "0.2", letterSpacing: "0.06em", transition: "color 0.3s" }}>
                  {project.name}
                </span>
                <span style={{ fontFamily: "var(--mono)", fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: hoveredId === project.id ? "rgba(242,237,230,0.3)" : "rgba(10,10,10,0.2)", transition: "color 0.3s" }}>
                  Add image →
                </span>
              </div>
            )}

            {/* Arrow on hover */}
            {hoveredId === project.id && (
              <div style={{ position: "absolute", bottom: "24px", right: "24px", fontFamily: "var(--mono)", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--accent)", display: "flex", alignItems: "center", gap: "8px" }}>
                View Case Study →
              </div>
            )}
          </div>

        </div>
      ))}

    </section>
  );
}