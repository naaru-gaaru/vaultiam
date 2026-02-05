import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

/* ─── BRAND TOKENS ─── */
const B = {
  navy: "#0f172a",
  navyMid: "#1e293b",
  white: "#ffffff",
  slate50: "#f8fafc",
  slate100: "#f1f5f9",
  slate200: "#e2e8f0",
  slate400: "#94a3b8",
  slate500: "#64748b",
  slate600: "#475569",
  slate700: "#334155",
  accent: "#38bdf8",
  accentDark: "#0284c7",
  accentBg: "#e0f2fe",
};

/* ─── Scroll-reveal hook ─── */
function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setOn(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, on];
}

/* ─── CUSTOMER STORIES DATA ─── */
const STORIES = [
  {
    slug: "ai-workload-identities-healthcare",
    title: "Securing AI Workload Identities in Healthcare R&D",
    sector: "HealthTech",
    challenge: "Unmanaged machine identities and LLM agents accessing sensitive patient research data",
    outcome: "100% visibility into non-human identities with automated lifecycle governance",
    focusAreas: ["Non-Human Identity", "AI Governance", "HIPAA Compliance"],
    tools: ["CyberArk", "Wiz CIEM", "HashiCorp Vault"],
    metrics: { before: "0% NHI visibility", after: "100% coverage" },
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
  },
  {
    slug: "synthetic-identity-fraud-fintech",
    title: "Preventing Synthetic Identity Fraud in FinTech CIAM",
    sector: "FinTech",
    challenge: "Deepfake-driven synthetic identity onboarding bypassing basic KYC",
    outcome: "85% reduction in synthetic fraud while accelerating legitimate onboarding",
    focusAreas: ["CIAM", "Fraud Prevention", "Identity Verification"],
    tools: ["Okta CIC", "Socure", "Auth0 Actions"],
    metrics: { before: "12% fraud rate", after: "1.8% fraud rate" },
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>
      </svg>
    ),
  },
  {
    slug: "jit-privileged-access-fintech",
    title: "Just-in-Time Privileged Access for AI & DevOps Workloads",
    sector: "FinTech",
    challenge: "Long-lived credentials and overprivileged service accounts in cloud environments",
    outcome: "Credentials auto-expire in <5 minutes, all sessions fully auditable",
    focusAreas: ["PAM", "Non-Human Identity", "Cloud Security"],
    tools: ["HashiCorp Vault", "HashiCorp Boundary", "AWS IAM"],
    metrics: { before: "90-day credentials", after: "<5 min TTL" },
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
  },
  {
    slug: "shadow-ai-api-keys-healthtech",
    title: "Governing Shadow AI and API Keys in HealthTech R&D",
    sector: "HealthTech",
    challenge: "Unmanaged API keys and shadow AI agents in LLM-based research workflows",
    outcome: "Full visibility into non-human identities with automated secret rotation",
    focusAreas: ["Non-Human Identity", "Secrets Management", "AI Governance"],
    tools: ["CyberArk Privilege Cloud", "CyberArk Secrets Manager", "Wiz"],
    metrics: { before: "342 unmanaged keys", after: "0 unmanaged keys" },
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
];

/* ─── STORY CARD COMPONENT ─── */
function StoryCard({ story, index, selected, onSelect }) {
  const [ref, vis] = useReveal(0.1);
  const isSelected = selected === index;

  return (
    <div
      ref={ref}
      onClick={() => onSelect(isSelected ? null : index)}
      className="rounded-2xl p-5 sm:p-6 cursor-pointer transition-all duration-300 touch-manipulation"
      style={{
        background: isSelected ? B.white : B.slate50,
        border: `1.5px solid ${isSelected ? B.accent : B.slate200}`,
        boxShadow: isSelected
          ? `0 8px 32px rgba(56,189,248,0.15), 0 0 0 3px ${B.accentBg}`
          : "0 1px 3px rgba(0,0,0,0.04)",
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0) scale(1)" : "translateY(20px) scale(0.98)",
        transitionDelay: `${index * 80}ms`,
      }}
    >
      {/* Header: Sector badge + Icon */}
      <div className="flex items-start justify-between mb-4">
        <span
          className="px-2.5 py-1 rounded-full text-xs"
          style={{
            background: story.sector === "FinTech" ? "#dbeafe" : "#dcfce7",
            color: story.sector === "FinTech" ? "#1d4ed8" : "#166534",
            fontWeight: 600,
          }}
        >
          {story.sector}
        </span>
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center"
          style={{
            background: isSelected ? `linear-gradient(135deg, ${B.accent}, ${B.accentDark})` : B.accentBg,
            color: isSelected ? B.white : B.accentDark,
          }}
        >
          {story.icon}
        </div>
      </div>

      {/* Title */}
      <h3
        className="mb-3"
        style={{
          fontSize: "clamp(15px, 4vw, 17px)",
          fontWeight: 700,
          color: B.navy,
          lineHeight: 1.35,
        }}
      >
        {story.title}
      </h3>

      {/* Challenge */}
      <p
        className="mb-4"
        style={{ fontSize: "clamp(13px, 3.5vw, 14px)", color: B.slate600, lineHeight: 1.6 }}
      >
        <span style={{ fontWeight: 600, color: B.slate700 }}>Challenge:</span> {story.challenge}
      </p>

      {/* Metrics - Before/After */}
      <div
        className="flex gap-4 mb-4 p-3 rounded-lg"
        style={{ background: isSelected ? B.accentBg : B.slate100 }}
      >
        <div className="flex-1">
          <div className="text-xs text-slate-500 mb-1" style={{ fontWeight: 500 }}>Before</div>
          <div style={{ fontSize: 13, fontWeight: 600, color: B.slate700 }}>{story.metrics.before}</div>
        </div>
        <div className="w-px" style={{ background: B.slate300 }} />
        <div className="flex-1">
          <div className="text-xs mb-1" style={{ fontWeight: 500, color: B.accentDark }}>After</div>
          <div style={{ fontSize: 13, fontWeight: 700, color: B.accentDark }}>{story.metrics.after}</div>
        </div>
      </div>

      {/* Focus Areas */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {story.focusAreas.map((area) => (
          <span
            key={area}
            className="px-2 py-0.5 rounded text-xs"
            style={{
              background: B.slate100,
              color: B.slate600,
              fontWeight: 500,
            }}
          >
            {area}
          </span>
        ))}
      </div>

      {/* Tools */}
      <div className="pt-3 border-t" style={{ borderColor: B.slate200 }}>
        <div className="text-xs text-slate-400 mb-2" style={{ fontWeight: 600, letterSpacing: "0.05em" }}>
          STACK
        </div>
        <div className="text-xs text-slate-500" style={{ fontWeight: 500 }}>
          {story.tools.join(" • ")}
        </div>
      </div>

      {/* CTA Link */}
      <Link
        to={`/customer-stories/${story.slug}`}
        onClick={(e) => e.stopPropagation()}
        className="inline-flex items-center gap-1.5 mt-4 transition-all duration-200 hover:gap-2.5 touch-manipulation"
        style={{ fontSize: 13, fontWeight: 600, color: B.accentDark }}
      >
        View client spotlight
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
        </svg>
      </Link>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   MAIN PAGE COMPONENT
   ═══════════════════════════════════════════════════════ */
export default function CustomerStories() {
  const [selectedStory, setSelectedStory] = useState(null);
  const [heroRef, heroVis] = useReveal(0.1);

  return (
    <div
      className="min-h-screen"
      style={{ fontFamily: "'Inter', system-ui, sans-serif", background: B.white }}
    >
      {/* ═══ HERO SECTION ═══ */}
      <section
        ref={heroRef}
        className="relative overflow-hidden"
        style={{
          background: `linear-gradient(155deg, ${B.navy} 0%, ${B.navyMid} 50%, #1e3a5f 100%)`,
          paddingTop: "clamp(60px, 12vw, 104px)",
          paddingBottom: "clamp(48px, 10vw, 64px)",
        }}
      >
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 opacity-20 pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${B.accent}40 0%, transparent 70%)`,
            transform: "translate(30%, -30%)",
          }}
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-5 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Content */}
            <div
              style={{
                opacity: heroVis ? 1 : 0,
                transform: heroVis ? "translateY(0)" : "translateY(30px)",
                transition: "all 0.7s ease",
              }}
            >
              <h1
                className="text-white mb-4 sm:mb-6"
                style={{
                  fontSize: "clamp(28px, 6vw, 48px)",
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.1,
                }}
              >
                Customer <span style={{ color: B.accent }}>stories</span>
              </h1>
              <p
                className="text-slate-300 mb-6 sm:mb-8"
                style={{
                  fontSize: "clamp(14px, 4vw, 16px)",
                  lineHeight: 1.7,
                  maxWidth: 520,
                }}
              >
                Real-world identity security outcomes for{" "}
                <span style={{ color: B.accent, fontWeight: 600 }}>regulated enterprises</span>.
                Each engagement demonstrates how we architect, deploy, and operate IAM
                controls that measurably reduce risk while enabling business velocity.
              </p>

              {/* Stats row */}
              <div className="flex gap-6 sm:gap-8 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:overflow-visible">
                {[
                  { value: "4", label: "Industry sectors" },
                  { value: "100%", label: "Compliance achieved" },
                  { value: "6-10 wks", label: "Time to value" },
                ].map((stat) => (
                  <div key={stat.label} className="shrink-0">
                    <div
                      className="text-white"
                      style={{ fontSize: "clamp(24px, 5vw, 32px)", fontWeight: 700, letterSpacing: "-0.02em" }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-slate-400 whitespace-nowrap" style={{ fontSize: 12 }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Success network graphic - hidden on mobile */}
            <div
              className="hidden lg:flex justify-center items-center"
              style={{
                opacity: heroVis ? 1 : 0,
                transform: heroVis ? "translateX(0)" : "translateX(30px)",
                transition: "all 0.7s ease 0.2s",
              }}
            >
              <svg viewBox="0 0 320 260" width="100%" style={{ maxWidth: 300 }}>
                {/* Central VaultIAM node */}
                <circle cx="160" cy="130" r="30" fill={B.accent} opacity="0.2" />
                <circle cx="160" cy="130" r="20" fill={B.accent} />
                <text x="160" y="134" textAnchor="middle" fill={B.white} fontSize="8" fontWeight="700">VAULT</text>

                {/* Customer nodes */}
                {[
                  { cx: 70, cy: 70, label: "FT" },
                  { cx: 250, cy: 70, label: "FT" },
                  { cx: 70, cy: 190, label: "HC" },
                  { cx: 250, cy: 190, label: "HC" },
                ].map((node, i) => (
                  <g key={i}>
                    <line x1="160" y1="130" x2={node.cx} y2={node.cy} stroke={B.accent} strokeWidth="1.5" opacity="0.4" />
                    <circle cx={node.cx} cy={node.cy} r="22" fill={B.navyMid} stroke={B.accent} strokeWidth="1.5" />
                    <text x={node.cx} y={node.cy + 4} textAnchor="middle" fill={B.white} fontSize="10" fontWeight="600">
                      {node.label}
                    </text>
                    {/* Checkmark */}
                    <circle cx={node.cx + 14} cy={node.cy - 14} r="8" fill="#22c55e" />
                    <path
                      d={`M${node.cx + 10} ${node.cy - 14} l3 3 6-6`}
                      stroke={B.white}
                      strokeWidth="1.5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                ))}

                {/* Pulse effect */}
                <circle cx="160" cy="130" r="45" stroke={B.accent} strokeWidth="1" fill="none" opacity="0.3">
                  <animate attributeName="r" values="45;60;45" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.3;0.1;0.3" dur="3s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ STORIES GRID ═══ */}
      <section className="py-12 sm:py-16 lg:py-20" style={{ background: B.white }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {STORIES.map((story, i) => (
              <StoryCard
                key={story.slug}
                story={story}
                index={i}
                selected={selectedStory}
                onSelect={setSelectedStory}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ DARK CTA SECTION ═══ */}
      <section
        className="py-12 sm:py-16 lg:py-20"
        style={{ background: `linear-gradient(155deg, ${B.navy} 0%, ${B.navyMid} 100%)` }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-5 text-center">
          <h2
            className="text-white mb-4"
            style={{
              fontSize: "clamp(24px, 5vw, 36px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            Facing similar challenges?
          </h2>
          <p
            className="text-slate-400 mb-8"
            style={{ fontSize: "clamp(14px, 4vw, 16px)", lineHeight: 1.7 }}
          >
            Let's discuss how VaultIAM can deliver measurable identity security
            outcomes for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-white transition-all duration-200 touch-manipulation"
              style={{
                fontSize: 15,
                fontWeight: 600,
                background: `linear-gradient(135deg, ${B.accent}, ${B.accentDark})`,
                boxShadow: `0 4px 16px rgba(56,189,248,0.3)`,
              }}
            >
              Book Free Assessment
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </Link>
            <Link
              to="/capabilities"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-white transition-all duration-200 touch-manipulation"
              style={{
                fontSize: 15,
                fontWeight: 600,
                background: B.slate700,
                border: `1px solid ${B.slate600}`,
              }}
            >
              View Capabilities
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
