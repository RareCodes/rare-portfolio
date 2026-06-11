import { useState } from "react";
import { projects } from "../data/projects";

function SectionLabel({ text }) {
  return (
    <div style={{ fontFamily: "var(--mono)", fontSize: "9px", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--mid)", marginBottom: "28px", display: "flex", alignItems: "center", gap: "14px" }}>
      {text}
      <span style={{ flex: 1, height: "1px", background: "rgba(10,10,10,0.09)", display: "block" }} />
    </div>
  );
}

function InsightCard({ num, title, body }) {
  return (
    <div style={{ background: "var(--cream)", padding: "32px 28px", borderLeft: "3px solid var(--accent)" }}>
      <div style={{ fontFamily: "var(--display)", fontSize: "44px", color: "var(--accent)", lineHeight: "1", marginBottom: "6px" }}>{num}</div>
      <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.05em", textTransform: "uppercase", color: "var(--ink)", marginBottom: "8px" }}>{title}</div>
      <div style={{ fontSize: "13px", lineHeight: "1.68", color: "var(--mid)" }}>{body}</div>
    </div>
  );
}

function Visual({ label, heading, description, slides }) {
  const [current, setCurrent] = useState(0);
  const isCarousel = slides && slides.length > 1;

  return (
    <div style={{ width: "100%", margin: "48px 0" }}>
      {(heading || description) && (
        <div style={{ marginBottom: "16px" }}>
          {heading && (
            <h4 style={{ fontFamily: "var(--body)", fontSize: "15px", fontWeight: "600", color: "var(--ink)", marginBottom: "6px" }}>
              {heading}
            </h4>
          )}
          {description && (
            <p style={{ fontFamily: "var(--body)", fontSize: "14px", lineHeight: "1.72", color: "var(--mid)", maxWidth: "640px" }}>
              {description}
            </p>
          )}
        </div>
      )}

      <div style={{ width: "100%", background: "var(--cream)", position: "relative", overflow: "hidden" }}>
        {slides && slides.length > 0 ? (
          <>
            {slides[current].src ? (
              <img
                src={slides[current].src}
                alt={slides[current].caption || label}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            ) : (
              <div style={{ aspectRatio: "16/9", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(45deg, transparent, transparent 18px, rgba(10,10,10,0.025) 18px, rgba(10,10,10,0.025) 19px)" }} />
                <span style={{ fontFamily: "var(--display)", fontSize: "20px", color: "var(--mid)", opacity: "0.22", letterSpacing: "0.1em", position: "relative", zIndex: 1 }}>
                  {slides[current].caption || label}
                </span>
              </div>
            )}

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 20px", borderTop: "1px solid rgba(10,10,10,0.08)", background: "var(--cream)" }}>
              <button
                onClick={() => setCurrent((p) => Math.max(p - 1, 0))}
                disabled={current === 0}
                style={{ fontFamily: "var(--mono)", fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: current === 0 ? "rgba(10,10,10,0.2)" : "var(--ink)", background: "none", border: "none", cursor: current === 0 ? "default" : "none", padding: 0 }}
              >
                ← Prev
              </button>

              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                {slides[current].caption && (
                  <span style={{ fontFamily: "var(--mono)", fontSize: "9px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--mid)" }}>
                    {slides[current].caption}
                  </span>
                )}
                <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                  {slides.map((_, i) => (
                    <div
                      key={i}
                      onClick={() => setCurrent(i)}
                      style={{ width: i === current ? "20px" : "6px", height: "6px", borderRadius: "3px", background: i === current ? "var(--accent)" : "rgba(10,10,10,0.15)", transition: "all 0.3s", cursor: "none" }}
                    />
                  ))}
                </div>
                <span style={{ fontFamily: "var(--mono)", fontSize: "9px", color: "rgba(10,10,10,0.3)", letterSpacing: "0.1em" }}>
                  {current + 1} / {slides.length}
                </span>
              </div>

              <button
                onClick={() => setCurrent((p) => Math.min(p + 1, slides.length - 1))}
                disabled={current === slides.length - 1}
                style={{ fontFamily: "var(--mono)", fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: current === slides.length - 1 ? "rgba(10,10,10,0.2)" : "var(--ink)", background: "none", border: "none", cursor: current === slides.length - 1 ? "default" : "none", padding: 0 }}
              >
                Next →
              </button>
            </div>
          </>
        ) : (
          <div style={{ aspectRatio: "16/9", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
            <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(45deg, transparent, transparent 18px, rgba(10,10,10,0.025) 18px, rgba(10,10,10,0.025) 19px)" }} />
            <span style={{ fontFamily: "var(--display)", fontSize: "20px", color: "var(--mid)", opacity: "0.22", letterSpacing: "0.1em", position: "relative", zIndex: 1 }}>{label}</span>
          </div>
        )}
      </div>
    </div>
  );
}

function Outcomes({ items }) {
  return (
    <div style={{ background: "var(--ink)", padding: "56px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "28px", margin: "56px 0" }}>
      {items.map((item) => (
        <div key={item.label}>
          <div style={{ fontFamily: "var(--display)", fontSize: "52px", color: "var(--accent)", lineHeight: "1" }}>{item.num}</div>
          <div style={{ fontFamily: "var(--mono)", fontSize: "9px", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(242,237,230,0.38)", marginTop: "6px" }}>{item.label}</div>
          <div style={{ fontSize: "12px", lineHeight: "1.55", color: "rgba(242,237,230,0.48)", marginTop: "4px" }}>{item.desc}</div>
        </div>
      ))}
    </div>
  );
}

const caseStudyContent = {
  fortis: {
    dark: false,
    sections: [
      {
        type: "overview", label: "01 — Overview", heading: "THE PROBLEM",
        body: ["Clinical trials in Nigeria and across Africa generate life-critical safety data every day. But the infrastructure for capturing and reporting that data hasn't kept pace. Most research teams are still tracking adverse events in Excel files, logging incidents over WhatsApp, and submitting paper-based reports weeks after the fact.", "The stakes are real. Delayed reporting can compromise patient safety, invalidate trials, and block regulatory approvals. FORTIS was designed to close that gap — a dedicated SaaS platform purpose-built for the realities of Nigerian clinical research."],
      },
      {
        type: "visual", label: "Landing Page", heading: "Landing Page",
        description: "The first impression of FORTIS, designed to communicate authority, trust, and clarity to research teams evaluating the platform.",
        slides: [
          { src: "/fortis-landing.png", caption: "01 — Hero & Value Proposition" },
          { src: "/howitworks.png", caption: "02 — How It Works" },
          { src: "/features.png", caption: "03 — Features Overview" },
          { src: "/pricing.png", caption: "04 — Pricing" },
           { src: "/testimonial.png", caption: "05 — Testimonials" },
            { src: "/faq.png", caption: "06 — FAQ" },
          { src: "/cta.png", caption: "07 — CTA" },
        ],
      },
      {
        type: "insights", label: "02 — Research", heading: "UNDERSTANDING THE SPACE",
        body: ["Before touching Figma, I mapped the clinical research ecosystem in Nigeria - key players, regulatory bodies, existing workflows. I used AI to accelerate secondary research, synthesising literature on GCP compliance, NAFDAC reporting requirements, and tools like MedWatch and Veeva Vault."],
        cards: [
          { num: "01", title: "Reporting Delays", body: "Most teams took 2–4 weeks to file adverse event reports. The bottleneck wasn't information, it was a fragmented, manual process with no single source of truth." },
          { num: "02", title: "Tool Mismatch", body: "Existing solutions like Oracle Argus were priced and built for large pharma. Nigerian research teams with leaner, resource-constrained pockets found them unusable." },
          { num: "03", title: "Trust & Compliance Gap", body: "Researchers feared under-reporting because manual processes made it hard to know what needed escalating. The system didn't help them think, it just received inputs." },
        ],
      },
      {
        type: "users", label: "03 — Users", heading: "WHO WE DESIGNED FOR",
        users: [
          { name: "Dr. Amaka - Principal Investigator", body: "A Lagos-based physician running a Phase II trial. She's responsible for safety oversight but splits her time between clinical duties and admin. She needs a system that surfaces what matters without demanding her full attention.", needs: "Real-time adverse event overview, audit trail, fast regulatory submission." },
          { name: "Emeka - Clinical Research Coordinator", body: "He's the one entering the data, often on-site, sometimes with intermittent connectivity. Used Excel and WhatsApp for years. Sceptical of tools that add friction rather than remove it.", needs: "Simple guided data entry. Clear confirmation his report was received." },
        ],
      },
      {
        type: "quote",
        quote: "The form had 40 fields. Half of them I didn't understand. I just left them blank and hoped for the best.",
        cite: "— CRC, paraphrased from research synthesis",
      },
      {
        type: "steps", label: "04 — Design Process", heading: "HOW IT CAME TOGETHER",
        steps: [
          { num: "01", title: "Information Architecture", body: "Mapped the full reporting workflow from event onset to regulatory submission. Six core modules: Dashboard, Event Reporting, Case Management, Notifications, Regulatory Submissions, Settings." },
          { num: "02", title: "Wireframes & Flow Validation", body: "Built low-fidelity wireframes for the critical path. Used AI to stress-test the flow against GCP reporting timelines, catching escalation routing gaps early." },
          { num: "03", title: "Design System & Brand", body: "Deep navy and teal as primaries — chosen to signal trust and medical precision without generic health-tech coldness. Every component documented and reusable from the start." },
          { num: "04", title: "High-Fidelity Prototyping", body: "Full interactive prototype covering the PI dashboard, CRC event entry flow, case timeline, and submission review. Figma prototypes built for investor demos." },
        ],
      },
      {
        type: "visual", label: "Dashboard Flow", heading: "The PI Dashboard",
        description: "At a glance, the Principal Investigator sees active trials, open adverse events, and compliance status, without having to dig through menus or reports. PI can also log an adverse event directly from the dashboard",
        slides: [
          { src: "/Dashboard.png", caption: "01 — Dashboard Overview" },
        ],
      },
      {
        type: "visual", label: "Event Entry Flow", heading: "Adverse Event Entry",
        description: "The CRC data entry flow that is guided, broken into simpler steps, and designed to reduce cognitive load. Every field is contextual and every action is confirmed.",
        slides: [
          { src: "/Dashboard-1.png", caption: "02 — Log adverse event flow - User selects trial and patient" },
          { src: "/Dashboard-2.png", caption: "03 — Log adverse event flow - User fills trial and patient information" },
          { src: "/Dashboard-3.png", caption: "04 — Log adverse event flow -User fills event information" },
          { src: "/Dashboard-4.png", caption: "05 — Log adverse event flow -User classifies event severity" },
          { src: "/Dashboard-5.png", caption: "06 — Log adverse event flow -User enters event details" },
          { src: "/Dashboard-6.png", caption: "07 — Log adverse event flow -User selects causality" },
          { src: "/Dashboard-7.png", caption: "04 — Log adverse event flow -User reviews information supplied and submits" },
          { src: "/Dashboard-8.png", caption: "04 — Log adverse event flow -Adverse event successfully logged" },
        ],
      },
      {
        type: "visual", label: "Event Management Flow", heading: "Event Management & Timeline",
        description: "A chronological view of each adverse event case, from first report to regulatory submission. Designed to give investigators full visibility without overwhelming detail.",
        slides: [
          { src: "/Events.png", caption: "01 — Events Timeline Overview" },
          { src: "/Events-Accepted.png", caption: "01 — Event report accepted" },
          { src: "/Events-Regulatory-forms.png", caption: "01 — Event regulatory form auto populated and ready for submission" },
          { src: "/Events-Causality.png", caption: "01 — Ascertaining correct Causality Assessment " },
          { src: "/Events-timeline.png", caption: "01 — Event timeline mapped" },
          { src: "/Events-audit.png", caption: "01 — Event audit trail visible" }
        ],
      },

       {
            type: "visual",
            label: "Clinical Trials Flow",
            heading: "Clinical Trials Overview",
            description: "The trial coordinator and PI get a structured view of every active and completed trial — stages, timelines, participant counts, and compliance status all visible without drilling into individual records. Designed so a PI managing multiple trials can orient themselves in seconds.",
            slides: [
                { src: "/Clinical-trials.png", caption: "01 — Trials List Overview" },
                { src: "/trials-overlay.png", caption: "02 — Add Clinical Trial Form" },
                { src: "/trials-subscribe.png", caption: "03 — Subscribe to professional tier" },
                    ],
      },


                {
            type: "visual",
            label: "Portfolio Flow",
            heading: "Portfolio View",
            description: "A consolidated view of all studies and adverse event records associated with a site or investigator with trends and metrics. Think of it as the researcher's professional record, everything they've worked on, organised and ready to reference for regulatory purposes.",
            slides: [
                { src: "/Portfolio.png", caption: "01 — Portfolio Overview" },
            ],
            },

                        {
            type: "visual",
            label: "Audit Trail Flow",
            heading: "Audit Trail",
            description: "Every action taken on a case is logged — who entered what, when it was changed, and what it was changed from. Designed primarily for regulatory reviews and ethics committee submissions, where an unbroken chain of evidence is non-negotiable. The UI makes it easy to read chronologically or filter by user, action type, or date.",
            slides: [
                { src: "/Audit-trials.png", caption: "01 — Full Audit Log" },
            ],
            },

                        {
            type: "visual",
            label: "Settings Flow",
            heading: "Settings & Configuration",
            description: "Site-level and user-level settings that let administrators configure the platform to match their trial protocol — notification preferences, user roles and permissions, notifications,profile, security and subscription upgrade. Designed to be set once and stay out of the way.",
            slides: [
                { src: "/Settings-plans and billings.png", caption: "01 — Account Settings" },
                { src: "/Settings-teams.png", caption: "02 — User Roles & Permissions" },
                { src: "/Settings-profile.png", caption: "03 — Notification Preferences" },
                { src: "/Settings-notifications.png", caption: "04 — Regulatory Configuration" },
                { src: "/Settings-security.png", caption: "04 — Security Configuration" },
            ],
            },
    //   {
    //     type: "outcomes",
    //     items: [
    //       { num: "6", label: "Core Modules", desc: "End-to-end, from reporting through regulatory submission." },
    //       { num: "40+", label: "Screens Designed", desc: "All key user journeys shown." },
    //       { num: "2", label: "User Archetypes", desc: "PI and CRC flows designed separately." },
    //       { num: "1", label: "Pitch Deck", desc: "Investor-ready narrative built alongside the product." },
    //     ],
    //   },
      {
        type: "reflection", label: "05 — Reflection", heading: "WHAT I LEARNED",
        body: [
    "FORTIS pushed me to empathise in a way I hadn't before. I wasn't designing for a persona I could easily relate to, I was designing for clinicians and research coordinators carrying real responsibility for patient safety. That gap forced me to slow down and actually understand the problem before I touched a frame. I read, I mapped, I asked questions. By the time I opened Figma, I wasn't guessing at what users needed, I had reasoned my way there.",
    "The research process changed how I approach problems. I used AI to help me move faster through unfamiliar territory, synthesising guidelines, stress-testing flows, generating scenarios I hadn't thought of. But the empathy had to be human. No tool can tell you what it feels like to be a CRC on a field site, trying to file a report on a form that wasn't built for you. That understanding came from sitting with the problem long enough to feel its edges.",
    "I finished designing FORTIS with a stronger conviction that good design isn't just about making things look clean. It's about making the right thing feel obvious, even when the subject matter is anything but simple."
  ],
        tags: ["Bio-tech", "SaaS", "UX Research", "Design Systems", "Prototyping"],
      },
    ],
  },






  meridian: {
    dark: false,
    sections: [
      {
        type: "overview", label: "01 — Overview", heading: "THE PROBLEM",
        body: ["Principal Investigators and CRCs manage complex, multi-site studies with timelines spanning years. But the tools available are either built for institutional administrators or so generic that teams default back to spreadsheets and email chains.", "Meridian was designed around one deceptively simple question: what does the person actually running a clinical trial need to see first thing in the morning?"],
      },
      {
        type: "visual", label: "Dashboard Flow", heading: "Main Dashboard",
        description: "The central view — designed around the PI's morning mental model. What's urgent, what's pending, what needs a decision today.",
        slides: [
          { src: null, caption: "01 — Dashboard Overview" },
          { src: null, caption: "02 — Study Health Summary" },
          { src: null, caption: "03 — Open Action Items" },
        ],
      },
      {
        type: "users", label: "02 — Research", heading: "DEFINING THE USER",
        users: [
          { name: "The Principal Investigator", body: "A clinician carrying both medical and administrative responsibility. Their mental model is shaped by patient safety and protocol compliance. I used AI to model the cognitive load of a PI managing three concurrent studies — mapping what they need proactively versus on demand.", needs: "Oversight dashboard, alert surface, regulatory status." },
          { name: "The CRC — Underserved Power User", body: "CRCs are the operational backbone of most trials. Data-heavy, time-poor, and often the last people considered in software design. Meridian treats them as primary users — their task flows are optimised first.", needs: "Task-focused view, guided data entry, clear progress." },
        ],
      },
      {
        type: "steps", label: "03 — Design Decisions", heading: "WHAT MADE IT WORK",
        steps: [
          { num: "01", title: "Role-Aware Navigation", body: "PI and CRC see fundamentally different interfaces — same platform, different IA. The PI view surfaces alerts and study health. The CRC view is task-focused: what needs to be done today." },
          { num: "02", title: "Brand System — Navy & Teal", body: "Deep navy (#0E2040) and teal (#0D9488) — grounded and precise, without the sterile coldness of a generic healthcare palette." },
          { num: "03", title: "Progressive Disclosure", body: "Clinical data is dense. Meridian layers information — summaries first, detail on demand. Particularly important for the protocol deviation log and participant status screens." },
        ],
      },
      {
        type: "visual", label: "PI Flow", heading: "Principal Investigator View",
        description: "The PI sees study health, compliance alerts, and open action items — all surfaced without requiring active search.",
        slides: [
          { src: null, caption: "01 — PI Dashboard" },
          { src: null, caption: "02 — Study Overview" },
          { src: null, caption: "03 — Compliance Alerts" },
          { src: null, caption: "04 — Regulatory Status" },
        ],
      },
      {
        type: "visual", label: "CRC Flow", heading: "Clinical Research Coordinator View",
        description: "Task-focused and time-aware. The CRC sees exactly what needs to be done today, in priority order, with clear next steps.",
        slides: [
          { src: null, caption: "01 — CRC Task View" },
          { src: null, caption: "02 — Participant Record" },
          { src: null, caption: "03 — Data Entry Form" },
          { src: null, caption: "04 — Protocol Deviation Log" },
        ],
      },
      {
        type: "outcomes",
        items: [
          { num: "10", label: "/ 10 Score", desc: "Perfect score at the Sabi Design Challenge Stage 2." },
          { num: "2", label: "User Roles", desc: "Separate IA and task flows for PI and CRC personas." },
          { num: "Full", label: "Brand System", desc: "Colour, typography, component library — documented." },
          { num: "React", label: "App Prototype", desc: "Interactive React prototype for demo." },
        ],
      },
      {
        type: "reflection", label: "04 — Reflection", heading: "WHAT I LEARNED",
        body: ["Meridian taught me that domain expertise isn't a prerequisite for good design — structured curiosity is. I came in knowing very little about clinical research operations. I left with a product that scored perfectly.", "The 10/10 score validated something I'd been working towards — that when you take the time to understand the work before designing for it, the result speaks for itself."],
        tags: ["Health-tech", "Role-based UX", "Design Systems", "Information Architecture"],
      },
    ],
  },
  skillswap: {
    dark: false,
    sections: [
      {
        type: "overview", label: "01 — Overview", heading: "THE PROBLEM",
        body: ["Skill exchange as a concept isn't new. But most platforms built around it assume a level of institutional trust that many African users don't have access to or faith in.", "SkillSwap asked: what would a peer exchange platform look like if trust was designed into the product from the ground up?"],
      },
      {
        type: "visual", label: "Discovery Flow", heading: "Home & Discovery",
        description: "The discovery feed — designed to surface relevant skill matches quickly, with enough context to evaluate a potential exchange before committing.",
        slides: [
          { src: null, caption: "01 — Home Feed" },
          { src: null, caption: "02 — Search & Filter" },
          { src: null, caption: "03 — Skill Profile Preview" },
        ],
      },
      {
        type: "insights", label: "02 — Research", heading: "THE TRUST PROBLEM",
        body: ["I mapped how trust breaks down in peer-to-peer platforms across the African market. Primary persona: Amara Osei — a 26-year-old Lagos creative who wants to trade her graphic design skills for video editing help. Digitally fluent, but burned by unverified strangers online before."],
        cards: [
          { num: "01", title: "Identity First", body: "Trust doesn't start at a review score. It starts at 'who is this person?' Identity verification had to feel natural — triggered at the right moment, not as a punitive upfront gate." },
          { num: "02", title: "Proposal as Contract", body: "Formalising the exchange before any session — what each party gives and receives — dramatically reduced the ambiguity that leads to disputes." },
          { num: "03", title: "In-App Sessions Only", body: "Keeping video and audio sessions inside the platform protected both parties and removed pressure to share personal contact details prematurely." },
        ],
      },
      {
        type: "quote",
        quote: "I don't mind paying — I just need to know the person is real before I hand over anything.",
        cite: "— Amara Osei, primary persona",
      },
      {
        type: "visual", label: "Proposal Flow", heading: "Proposal & Trust Flow",
        description: "The exchange is formalised before any session begins. Identity verification appears naturally at the proposal moment — not as an upfront gate.",
        slides: [
          { src: null, caption: "01 — Skill Profile Full View" },
          { src: null, caption: "02 — Send Proposal" },
          { src: null, caption: "03 — Identity Verification Trigger" },
          { src: null, caption: "04 — Proposal Review" },
          { src: null, caption: "05 — Proposal Accepted" },
        ],
      },
      {
        type: "visual", label: "Session Flow", heading: "In-App Session",
        description: "Video and audio sessions happen entirely within the platform — protecting both parties and keeping the exchange on the record.",
        slides: [
          { src: null, caption: "01 — Session Lobby" },
          { src: null, caption: "02 — Active Session" },
          { src: null, caption: "03 — Session End & Review" },
        ],
      },
      {
        type: "outcomes",
        items: [
          { num: "49", label: "Screens", desc: "Full interactive prototype covering all user journeys." },
          { num: "3", label: "Trust Layers", desc: "Identity, proposal contract, and in-app sessions." },
          { num: "1", label: "Core Persona", desc: "Every decision pressure-tested against Amara Osei." },
          { num: "Mobile", label: "First", desc: "African mobile-primary users from the first wireframe." },
        ],
      },
      {
        type: "reflection", label: "04 — Reflection", heading: "WHAT I LEARNED",
        body: ["SkillSwap taught me that designing for trust means designing for anxiety — understanding the specific moments where users hesitate and building the product to meet them there.", "AI helped me prototype and evaluate different trigger points quickly — generating scenario walkthroughs to stress-test timing decisions without needing a full usability study."],
        tags: ["Marketplace", "Mobile UX", "Trust Design", "African Market", "Peer-to-Peer"],
      },
    ],
  },
  skillbridge: {
    dark: false,
    sections: [
      {
        type: "overview", label: "01 — Overview", heading: "THE PROBLEM",
        body: ["Early-career professionals in Africa face a structural disadvantage: a skills gap that formal education doesn't close, and a job market that rewards credentials over demonstrated capability.", "SkillBridge was designed as a career launchpad: build skills, prove what you know, connect with opportunities — in that order, as a deliberate progression."],
      },
      {
        type: "visual", label: "Dashboard Flow", heading: "Main Dashboard",
        description: "The home base — showing progress across all three modules, active skill tracks, and upcoming opportunities at a glance.",
        slides: [
          { src: null, caption: "01 — Dashboard Overview" },
          { src: null, caption: "02 — Progress Summary" },
          { src: null, caption: "03 — Recommended Next Steps" },
        ],
      },
      {
        type: "insights", label: "02 — Leading the Design", heading: "TEAM LEAD — 6 DESIGNERS",
        body: ["As design team lead, I was responsible for aligning six designers across three modules while maintaining visual and structural coherence across the full product. I used AI to accelerate design critique cycles — generating structured feedback frameworks that helped the team evaluate their own work before reviews."],
        cards: [
          { num: "GROW", title: "Learning Module", body: "Curated skill tracks with progress visualisation. Designed to feel motivating, not overwhelming — short modules, clear milestones, visible path forward." },
          { num: "PROVE", title: "Assessment Module", body: "Skill verification through project submissions and peer assessment. Output: an Employability Score and Trust Score — portable, shareable proof of capability." },
          { num: "CONNECT", title: "Opportunities Module", body: "Matching users with jobs, projects, and mentors based on their verified profile. Not a job board — a context-aware connector." },
        ],
      },
      {
        type: "visual", label: "Grow Flow", heading: "Grow — Skill Tracks",
        description: "Short, focused modules with visible milestones. Designed to feel like progress, not homework.",
        slides: [
          { src: null, caption: "01 — Skill Track Home" },
          { src: null, caption: "02 — Module Detail" },
          { src: null, caption: "03 — Lesson View" },
          { src: null, caption: "04 — Milestone Achieved" },
        ],
      },
      {
        type: "visual", label: "Prove Flow", heading: "Prove — Score & Assessment",
        description: "The score card — transparent, earned, and always explained. Users know exactly what moved their score and what to do next.",
        slides: [
          { src: null, caption: "01 — Employability Score Card" },
          { src: null, caption: "02 — Submit Project" },
          { src: null, caption: "03 — Peer Review" },
          { src: null, caption: "04 — Score Updated" },
        ],
      },
      {
        type: "visual", label: "Connect Flow", heading: "Connect — Opportunities",
        description: "Matching users with jobs, projects, and mentors based on their verified profile. Context-aware, not generic.",
        slides: [
          { src: null, caption: "01 — Opportunities Feed" },
          { src: null, caption: "02 — Opportunity Detail" },
          { src: null, caption: "03 — Apply with Profile" },
        ],
      },
      {
        type: "outcomes",
        items: [
          { num: "3", label: "Modules", desc: "Grow, Prove, Connect — a deliberate career progression." },
          { num: "6", label: "Designers Led", desc: "Cross-module team aligned on one design system." },
          { num: "2", label: "Score Systems", desc: "Trust Score and Employability Score — transparent, earned." },
          { num: "Mobile", label: "First", desc: "Full mobile redesign as a core deliverable." },
        ],
      },
      {
        type: "reflection", label: "04 — Reflection", heading: "WHAT I LEARNED",
        body: ["Leading a six-person design team taught me that clarity is a design skill too. The decisions that mattered most were about alignment — making sure six people understood the product vision clearly enough to make good calls independently.", "Gamification is a trap I was conscious of throughout. The scoring system walked a careful line between motivating and manipulative."],
        tags: ["EdTech", "Team Lead", "Gamification", "Mobile First", "African Market"],
      },
    ],
  },
  lore: {
    dark: true,
    sections: [
      {
        type: "overview", label: "01 — Overview", heading: "THE PROBLEM",
        body: ["Writers and RPG game masters live in sprawling, self-constructed worlds — tracking characters, timelines, locations, factions, and mythology across a tangle of notebooks, Google Docs, and Notion databases.", "Lore was designed to be a dedicated platform where fictional universes have the same structural rigour as product databases — organised, interconnected, and always at hand when the story demands it."],
      },
      {
        type: "visual", label: "World Overview Flow", heading: "World Overview",
        description: "The main canvas — a bird's eye view of the entire world. Characters, locations, factions, and timelines all connected and navigable from one place.",
        slides: [
          { src: null, caption: "01 — World Canvas" },
          { src: null, caption: "02 — Entity Map" },
          { src: null, caption: "03 — Timeline View" },
        ],
      },
      {
        type: "insights", label: "02 — Design System", heading: "BUILDING FOR THE DARK",
        body: ["Lore's dark mode design system wasn't an afterthought — it was the primary design direction. Writers work at odd hours, in low light, in flow states they don't want interrupted. I developed the full token system: five background layers, text hierarchy, interactive states, and a colour palette anchored in deep slate and amber."],
        cards: [
          { num: "01", title: "Depth Through Layers", body: "Five distinct background levels created visual hierarchy without relying on colour contrast alone — content, panels, modals, and overlays each had their own spatial register." },
          { num: "02", title: "Amber as Anchor", body: "A single warm accent colour served as the interactive anchor across the system. In a dark-dominant palette, one warm accent goes a long way." },
        ],
      },
      {
        type: "quote",
        quote: "Writers don't need more tools. They need one tool that disappears when they're creating and reappears when they need it.",
        cite: "— Design principle, Lore",
      },
      {
        type: "visual", label: "Onboarding Flow", heading: "Onboarding — World Setup",
        description: "A guided scaffolding flow that walks new users through naming their world, setting its genre, and populating three foundational elements before the blank canvas appears.",
        slides: [
          { src: null, caption: "01 — Welcome Screen" },
          { src: null, caption: "02 — Name Your World" },
          { src: null, caption: "03 — Set Genre & Tone" },
          { src: null, caption: "04 — Add First Character" },
          { src: null, caption: "05 — Add First Location" },
          { src: null, caption: "06 — World Ready" },
        ],
      },
      {
        type: "visual", label: "Character Flow", heading: "Character Entry",
        description: "Rich character profiles with structured fields for backstory, relationships, and traits — designed to feel like a writer's notebook, not a database form.",
        slides: [
          { src: null, caption: "01 — Character List" },
          { src: null, caption: "02 — New Character Form" },
          { src: null, caption: "03 — Backstory Entry" },
          { src: null, caption: "04 — Relationship Map" },
        ],
      },
      {
        type: "outcomes",
        items: [
          { num: "Full", label: "Design System", desc: "Dark mode token system — backgrounds, type, colour, states." },
          { num: "5", label: "Surface Layers", desc: "Spatial hierarchy built through background depth alone." },
          { num: "HTML", label: "Prototypes", desc: "Interactive HTML prototypes for stakeholder walkthroughs." },
          { num: "Stage 7", label: "Submission", desc: "HNG14 Stage 6→7 challenge submission." },
        ],
      },
      {
        type: "reflection", label: "04 — Reflection", heading: "WHAT I LEARNED",
        body: ["Lore was the most creatively unconstrained project I worked on. That freedom was harder than it sounds — without external constraints, every design decision had to be justified entirely by the user's creative experience.", "I learned to design for emotional states, not just tasks. A writer in flow is a different user than a writer planning."],
        tags: ["Entertainment", "Dark Mode", "Design Systems", "Onboarding", "Creative Tools"],
      },
    ],
  },
  fitcall: {
    dark: false,
    sections: [
      {
        type: "overview", label: "01 — Overview", heading: "THE OPPORTUNITY",
        body: ["Nigeria has a large, talented pool of fitness professionals priced out of premium international markets — not because of capability, but because of access. FitCall.me was designed to connect Nigerian trainers with US and UK clients, and make both sides of the transaction feel confident."],
      },
      {
        type: "visual", label: "Discovery Flow", heading: "Trainer Discovery",
        description: "The client-side discovery screen — warm, premium, and designed to make Nigerian trainers feel aspirational rather than unfamiliar to international clients.",
        slides: [
          { src: null, caption: "01 — Home & Discovery" },
          { src: null, caption: "02 — Search & Filter" },
          { src: null, caption: "03 — Trainer Card Preview" },
        ],
      },
      {
        type: "insights", label: "02 — Visual Direction", heading: "SAVANNA GOLD",
        body: ["Visual direction is a strategic decision. For FitCall.me, I chose Savanna Gold — warm cream (#FFFBF3), deep forest primary (#1C2B1A), and burnt amber accent (#E07020). Most fitness apps skew either clinical-white or aggressive-dark. Savanna Gold positioned FitCall.me as premium but approachable."],
        cards: [
          { num: "01", title: "The Trainer Profile", body: "The most important screen in the product. Had to communicate professionalism, specialisation, social proof, and availability in a single view — without feeling like a résumé or a storefront." },
          { num: "02", title: "Cross-Border Trust", body: "For a US client booking a Nigerian trainer, trust signals had to be explicit: verified credentials, session recording policy, cancellation terms, payment protection — at the moment of decision." },
        ],
      },
      {
        type: "visual", label: "Booking Flow", heading: "Trainer Profile & Booking",
        description: "Professionalism, specialisation, social proof, and availability — all in one view. Designed to convert a browsing client into a booked session.",
        slides: [
          { src: null, caption: "01 — Trainer Profile" },
          { src: null, caption: "02 — Select Session Type" },
          { src: null, caption: "03 — Pick Date & Time" },
          { src: null, caption: "04 — Review & Confirm" },
          { src: null, caption: "05 — Booking Confirmed" },
        ],
      },
      {
        type: "visual", label: "Client Flow", heading: "Client Home & Progress",
        description: "The returning client's home — showing their next session, active streak, and a progress view that makes the value of ongoing sessions visible.",
        slides: [
          { src: null, caption: "01 — Client Home" },
          { src: null, caption: "02 — Upcoming Session" },
          { src: null, caption: "03 — Session Streak" },
          { src: null, caption: "04 — Progress View" },
        ],
      },
      {
        type: "outcomes",
        items: [
          { num: "14", label: "Screens", desc: "Full mobile prototype across trainer and client journeys." },
          { num: "2", label: "Sides", desc: "Trainer and client designed as distinct but connected products." },
          { num: "1", label: "Visual Direction", desc: "Savanna Gold — a named, justified aesthetic decision." },
          { num: "NG→UK", label: "Market Bridge", desc: "Designed for cross-border trust dynamics." },
        ],
      },
      {
        type: "reflection", label: "04 — Reflection", heading: "WHAT I LEARNED",
        body: ["FitCall.me taught me to make visual direction explicit and argue for it. 'Savanna Gold' wasn't just a mood board — it was a positioning statement.", "Designing a two-sided marketplace sharpened my thinking about competing incentives. What the trainer needs from a profile page and what the client needs from the same page are different."],
        tags: ["Fitness", "Marketplace", "Mobile UX", "Two-sided Platform", "Brand Direction"],
      },
    ],
  },
  billit: {
    dark: false,
    sections: [
      {
        type: "overview", label: "01 — Overview", heading: "THE PROBLEM",
        body: ["African freelancers lose time and money to invoicing tools built for Western markets — wrong currencies, clunky templates, no email delivery. Billit was designed and built from scratch to fix that: a clean, professional invoice and receipt management app that works for how African freelancers actually operate.", "This was a rare project where I wore both hats — product designer and developer. I designed the system, then built it."],
      },
      {
        type: "visual", label: "Dashboard Flow", heading: "Dashboard",
        description: "The freelancer's home base — recent invoices, outstanding payments, and quick-send actions all visible at a glance.",
        slides: [
          { src: null, caption: "01 — Dashboard Overview" },
          { src: null, caption: "02 — Invoice List" },
          { src: null, caption: "03 — Payment Status" },
        ],
      },
      {
        type: "insights", label: "02 — Research", heading: "WHAT FREELANCERS ACTUALLY NEED",
        body: ["The insight was simple: most freelancers don't need accounting software. They need something that makes them look professional, gets the invoice out fast, and follows up when needed."],
        cards: [
          { num: "01", title: "Speed Over Features", body: "The fastest path from 'job done' to 'invoice sent' wins. Every extra step is a reason to procrastinate or use WhatsApp instead." },
          { num: "02", title: "Template as Brand", body: "The invoice is often the last thing a client sees. Four distinct templates let freelancers choose a look that matches their personal brand." },
          { num: "03", title: "Email Built In", body: "Copy-pasting a PDF into Gmail is a broken workflow. Resend-powered email delivery sends invoices directly from inside the app." },
        ],
      },
      {
        type: "steps", label: "03 — Design & Build", heading: "DESIGNED AND BUILT",
        steps: [
          { num: "01", title: "Design System First", body: "Built a clean component library before writing a single line of app code. Consistent spacing, a restrained colour system, and clear typography made the UI feel professional without being corporate." },
          { num: "02", title: "Four Invoice Templates", body: "Each template was designed as a standalone document — balanced layouts, clear hierarchy, and print-ready formatting. Users pick the one that fits their brand." },
          { num: "03", title: "Supabase Backend", body: "Auth, database, and storage all on Supabase. Fast to build, easy to scale. Invoice data persists across sessions with real-time sync." },
          { num: "04", title: "PDF Generation & Email", body: "jsPDF handles in-browser PDF generation. Resend powers transactional email delivery — clients receive a professional email with the invoice attached." },
        ],
      },
      {
        type: "visual", label: "Invoice Creation Flow", heading: "Invoice Builder",
        description: "A fast, guided invoice creation flow — client details, line items, and totals. Designed to get from zero to sent in under two minutes.",
        slides: [
          { src: null, caption: "01 — New Invoice" },
          { src: null, caption: "02 — Client Details" },
          { src: null, caption: "03 — Line Items" },
          { src: null, caption: "04 — Select Template" },
          { src: null, caption: "05 — Preview & Send" },
        ],
      },
      {
        type: "visual", label: "Templates Flow", heading: "Invoice Templates",
        description: "Four invoice templates — each designed as a standalone document. Users pick the one that fits their brand and it carries through to the PDF.",
        slides: [
          { src: null, caption: "01 — Template A — Minimal" },
          { src: null, caption: "02 — Template B — Bold" },
          { src: null, caption: "03 — Template C — Classic" },
          { src: null, caption: "04 — Template D — Modern" },
        ],
      },
      {
        type: "outcomes",
        items: [
          { num: "4", label: "Templates", desc: "Four invoice designs — each a standalone document." },
          { num: "Live", label: "Product", desc: "Deployed on Vercel at billit.vercel.app." },
          { num: "Full", label: "Stack", desc: "React + Supabase + Resend + jsPDF." },
          { num: "1", label: "Designer & Dev", desc: "Sole designer and developer — start to finish." },
        ],
      },
      {
        type: "reflection", label: "04 — Reflection", heading: "WHAT I LEARNED",
        body: ["Billit taught me that designing something you're also building creates a productive tension. Every design decision had an immediate implementation cost — which made me more deliberate about complexity and more ruthless about cutting features that didn't earn their place.", "Shipping a live product is a different standard than shipping a prototype. The bar is higher and the feedback is real."],
        tags: ["Fintech", "Full-stack", "Product Design", "React", "African Market"],
      },
    ],
  },
};

function renderSection(section, i) {
  switch (section.type) {
    case "overview":
    case "reflection":
      return (
        <div key={i} style={{ marginBottom: "88px" }}>
          <SectionLabel text={section.label} />
          <h2 style={{ fontFamily: "var(--display)", fontSize: "48px", lineHeight: "1", marginBottom: "22px" }}>{section.heading}</h2>
          {section.body.map((p, j) => (
            <p key={j} style={{ fontSize: "15px", lineHeight: "1.82", color: "#3A3632", marginBottom: "15px", maxWidth: "700px" }}>{p}</p>
          ))}
          {section.tags && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "22px" }}>
              {section.tags.map((tag) => (
                <span key={tag} style={{ fontFamily: "var(--mono)", fontSize: "9px", letterSpacing: "0.12em", textTransform: "uppercase", border: "1px solid rgba(10,10,10,0.18)", padding: "5px 12px", color: "var(--mid)" }}>{tag}</span>
              ))}
            </div>
          )}
        </div>
      );
    case "visual":
      return <Visual key={i} label={section.label} heading={section.heading} description={section.description} slides={section.slides} />;
    case "insights":
      return (
        <div key={i} style={{ marginBottom: "88px" }}>
          <SectionLabel text={section.label} />
          <h2 style={{ fontFamily: "var(--display)", fontSize: "48px", lineHeight: "1", marginBottom: "22px" }}>{section.heading}</h2>
          {section.body.map((p, j) => <p key={j} style={{ fontSize: "15px", lineHeight: "1.82", color: "#3A3632", marginBottom: "15px", maxWidth: "700px" }}>{p}</p>)}
          <div style={{ display: "grid", gridTemplateColumns: `repeat(${section.cards.length}, 1fr)`, gap: "28px", marginTop: "36px" }}>
            {section.cards.map((card) => <InsightCard key={card.num} {...card} />)}
          </div>
        </div>
      );
    case "users":
      return (
        <div key={i} style={{ marginBottom: "88px" }}>
          <SectionLabel text={section.label} />
          <h2 style={{ fontFamily: "var(--display)", fontSize: "48px", lineHeight: "1", marginBottom: "40px" }}>{section.heading}</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "44px" }}>
            {section.users.map((user) => (
              <div key={user.name}>
                <h3 style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: "26px", color: "var(--accent)", marginBottom: "16px" }}>{user.name}</h3>
                <p style={{ fontSize: "15px", lineHeight: "1.82", color: "#3A3632", marginBottom: "12px" }}>{user.body}</p>
                <p style={{ fontSize: "14px", color: "var(--mid)" }}><strong style={{ color: "var(--ink)" }}>Needs:</strong> {user.needs}</p>
              </div>
            ))}
          </div>
        </div>
      );
    case "quote":
      return (
        <div key={i} style={{ background: "var(--ink)", color: "var(--paper)", padding: "52px 60px", margin: "56px 0" }}>
          <blockquote style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: "24px", lineHeight: "1.55", color: "var(--paper)", maxWidth: "680px", marginBottom: "18px" }}>{section.quote}</blockquote>
          <cite style={{ fontFamily: "var(--mono)", fontSize: "9px", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(242,237,230,0.38)" }}>{section.cite}</cite>
        </div>
      );
    case "steps":
      return (
        <div key={i} style={{ marginBottom: "88px" }}>
          <SectionLabel text={section.label} />
          <h2 style={{ fontFamily: "var(--display)", fontSize: "48px", lineHeight: "1", marginBottom: "32px" }}>{section.heading}</h2>
          {section.steps.map((step) => (
            <div key={step.num} style={{ display: "grid", gridTemplateColumns: "72px 1fr", gap: "28px", padding: "28px 0", borderBottom: "1px solid rgba(10,10,10,0.07)" }}>
              <div style={{ fontFamily: "var(--display)", fontSize: "48px", color: "var(--accent)", opacity: "0.35", lineHeight: "1" }}>{step.num}</div>
              <div>
                <h4 style={{ fontSize: "15px", fontWeight: "600", color: "var(--ink)", marginBottom: "8px" }}>{step.title}</h4>
                <p style={{ fontSize: "14px", lineHeight: "1.72", color: "var(--mid)", maxWidth: "580px" }}>{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      );
    case "outcomes":
      return <Outcomes key={i} items={section.items} />;
    default:
      return null;
  }
}

export default function CaseStudy({ projectId, onNavigate }) {
  const project = projects.find((p) => p.id === projectId);
  const content = caseStudyContent[projectId];
  const nextProject = projects.find((p) => p.id === project?.next);

  if (!project || !content) return null;

  return (
    <div>
      <section style={{ minHeight: "68vh", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "128px 64px 64px", borderBottom: "1px solid rgba(10,10,10,0.1)", background: content.dark ? "var(--ink)" : "var(--paper)" }}>
        <div style={{ fontFamily: "var(--mono)", fontSize: "9px", letterSpacing: "0.25em", textTransform: "uppercase", color: content.dark ? "rgba(242,237,230,0.38)" : "var(--mid)", marginBottom: "18px", display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{ width: "28px", height: "1px", background: "var(--accent)", display: "block" }} />
          {project.label}
        </div>
        <div style={{ fontFamily: "var(--display)", fontSize: "clamp(72px, 11vw, 148px)", lineHeight: "0.88", marginBottom: "28px", color: content.dark ? "var(--paper)" : "var(--ink)" }}>
          {project.name}
        </div>
        <div style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: "26px", color: "var(--accent)", maxWidth: "620px", lineHeight: "1.35", marginBottom: "44px" }}>
          {project.tagline}
        </div>
        <div style={{ display: "flex", gap: "56px", paddingTop: "36px", borderTop: `1px solid ${content.dark ? "rgba(242,237,230,0.1)" : "rgba(10,10,10,0.1)"}` }}>
          {Object.entries(project.meta || {}).map(([key, val]) => (
            <div key={key}>
              <div style={{ fontFamily: "var(--mono)", fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: content.dark ? "rgba(242,237,230,0.38)" : "var(--mid)", marginBottom: "5px" }}>{key}</div>
              <div style={{ fontSize: "14px", fontWeight: "500", color: content.dark ? "var(--paper)" : "var(--ink)" }}>{val}</div>
            </div>
          ))}
        </div>
      </section>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "72px 64px" }}>
        {content.sections.map((section, i) => renderSection(section, i))}
      </div>

      <div
        onClick={() => onNavigate(project.next)}
        style={{ borderTop: "1px solid rgba(10,10,10,0.1)", padding: "72px 64px", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "none", transition: "background 0.3s" }}
        onMouseEnter={(e) => e.currentTarget.style.background = "var(--cream)"}
        onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
      >
        <div>
          <div style={{ fontFamily: "var(--mono)", fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--mid)", marginBottom: "10px" }}>Next Project</div>
          <div style={{ fontFamily: "var(--display)", fontSize: "52px", color: "var(--ink)", lineHeight: "1" }}>{nextProject?.name}</div>
        </div>
        <div style={{ fontSize: "44px", color: "var(--accent)" }}>→</div>
      </div>
    </div>
  );
}