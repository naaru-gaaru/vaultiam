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

/* ─── Icons ─── */
const Icon = {
  Shield: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  Users: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  Key: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/>
    </svg>
  ),
  Radar: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"/><path d="M4 6h.01"/><path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"/><path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"/><path d="M12 18h.01"/><path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"/><circle cx="12" cy="12" r="2"/><path d="m13.41 10.59 5.66-5.66"/>
    </svg>
  ),
  Arrow: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
    </svg>
  ),
  Search: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
  ),
  Blueprint: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
    </svg>
  ),
  Settings: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
    </svg>
  ),
};

/* ─── CAPABILITIES DATA ─── */
const CAPABILITIES = [
  {
    icon: Icon.Shield,
    title: "Identity & Access Management",
    desc: "Architecture, modernization, and operational support for workforce IAM, non-human identities, and cloud-native access models.",
    outcomes: ["SSO consolidation", "Lifecycle automation", "Zero Trust enablement"],
    slug: "iam",
  },
  {
    icon: Icon.Users,
    title: "Customer Identity (CIAM)",
    desc: "Secure onboarding, authentication, and fraud-aware identity flows for FinTech and digital health platforms.",
    outcomes: ["Passwordless auth", "Fraud detection", "Consent management"],
    slug: "ciam",
  },
  {
    icon: Icon.Key,
    title: "Privileged Access (PAM)",
    desc: "Zero standing privilege, just-in-time access, and session controls for human and AI-driven workloads.",
    outcomes: ["JIT elevation", "Session recording", "Secrets rotation"],
    slug: "pam",
  },
  {
    icon: Icon.Radar,
    title: "ITDR & Identity Security",
    desc: "Detection and response for identity-based attacks, abuse paths, lateral movement, and anomalous behavior.",
    outcomes: ["Real-time alerts", "Attack path analysis", "Posture scoring"],
    slug: "itdr",
  },
];

/* ─── PLATFORM LOGOS (simplified inline SVGs) ─── */
const PLATFORMS = [
  { name: "Okta", url: "https://okta.com", color: "#007dc1" },
  { name: "Microsoft Entra", url: "https://microsoft.com", color: "#00a4ef" },
  { name: "CyberArk", url: "https://cyberark.com", color: "#0f2b46" },
  { name: "HashiCorp Vault", url: "https://hashicorp.com", color: "#000" },
  { name: "Ping Identity", url: "https://pingidentity.com", color: "#b71234" },
  { name: "SailPoint", url: "https://sailpoint.com", color: "#0033a0" },
  { name: "Auth0", url: "https://auth0.com", color: "#eb5424" },
  { name: "AWS IAM", url: "https://aws.amazon.com", color: "#ff9900" },
  { name: "Google Cloud IAM", url: "https://cloud.google.com", color: "#4285f4" },
  { name: "Wiz", url: "https://wiz.io", color: "#00d4aa" },
  { name: "Socure", url: "https://socure.com", color: "#1a1a2e" },
  { name: "Saviynt", url: "https://saviynt.com", color: "#ff6b35" },
];

/* ─── ENGAGEMENT STEPS ─── */
const ENGAGEMENT = [
  { label: "Assess", icon: Icon.Search, copy: "Deep-dive into your identity landscape, risk posture, and compliance gaps." },
  { label: "Architect", icon: Icon.Blueprint, copy: "Design target-state architecture with clear milestones and measurable outcomes." },
  { label: "Operate", icon: Icon.Settings, copy: "Implement, integrate, and provide ongoing optimization and support." },
];

/* ─── IDENTITY PILLARS ─── */
const PILLARS = [
  { title: "Identity as the Perimeter", desc: "In a world without walls, identity IS your security boundary." },
  { title: "Non-Human Identities Matter", desc: "Machine identities now outnumber humans 144:1. Govern them accordingly." },
  { title: "Compliance as Code", desc: "Automate audit evidence and policy enforcement, not just documentation." },
];

/* ═══════════════════════════════════════════════════════
   CAPABILITY CARD COMPONENT
   ═══════════════════════════════════════════════════════ */
function CapabilityCard({ cap, index, selected, onSelect }) {
  const [ref, vis] = useReveal(0.1);
  const Ico = cap.icon;
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
        transform: vis ? "translateY(0)" : "translateY(20px)",
        transitionDelay: `${index * 80}ms`,
      }}
    >
      {/* Icon */}
      <div
        className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-4"
        style={{
          background: isSelected ? `linear-gradient(135deg, ${B.accent}, ${B.accentDark})` : B.accentBg,
          color: isSelected ? B.white : B.accentDark,
        }}
      >
        <Ico />
      </div>

      {/* Title */}
      <h3
        className="mb-2"
        style={{ fontSize: "clamp(16px, 4vw, 18px)", fontWeight: 700, color: B.navy, lineHeight: 1.3 }}
      >
        {cap.title}
      </h3>

      {/* Description */}
      <p
        className="mb-4"
        style={{ fontSize: "clamp(13px, 3.5vw, 14px)", color: B.slate600, lineHeight: 1.6 }}
      >
        {cap.desc}
      </p>

      {/* Outcomes */}
      <div className="flex flex-wrap gap-2">
        {cap.outcomes.map((outcome) => (
          <Link
            key={outcome}
            to={`/capabilities/${cap.slug}`}
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs transition-all duration-200 hover:gap-2"
            style={{
              background: isSelected ? B.accentBg : B.slate100,
              color: isSelected ? B.accentDark : B.slate600,
              fontWeight: 500,
            }}
          >
            {outcome}
            <Icon.Arrow />
          </Link>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   PLATFORM TICKER COMPONENT
   ═══════════════════════════════════════════════════════ */
function PlatformTicker() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div
      className="relative overflow-hidden py-6 sm:py-8"
      style={{ background: B.slate50 }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 z-10 pointer-events-none"
        style={{ background: `linear-gradient(90deg, ${B.slate50}, transparent)` }} />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 z-10 pointer-events-none"
        style={{ background: `linear-gradient(270deg, ${B.slate50}, transparent)` }} />

      {/* Ticker track */}
      <div
        className="flex gap-6 sm:gap-10"
        style={{
          animation: `ticker 40s linear infinite`,
          animationPlayState: isPaused ? "paused" : "running",
          width: "max-content",
        }}
      >
        {[...PLATFORMS, ...PLATFORMS].map((p, i) => (
          <a
            key={`${p.name}-${i}`}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg transition-all duration-200 hover:bg-white hover:shadow-md shrink-0 touch-manipulation"
            style={{ minHeight: 44 }}
          >
            <div
              className="w-6 h-6 sm:w-7 sm:h-7 rounded-md flex items-center justify-center text-white font-bold"
              style={{ background: p.color, fontSize: 10 }}
            >
              {p.name.charAt(0)}
            </div>
            <span
              className="text-slate-600 whitespace-nowrap hidden xs:inline"
              style={{ fontSize: 13, fontWeight: 500 }}
            >
              {p.name}
            </span>
          </a>
        ))}
      </div>

      {/* Ticker animation */}
      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   MAIN PAGE COMPONENT
   ═══════════════════════════════════════════════════════ */
export default function Capabilities() {
  const [selectedCap, setSelectedCap] = useState(null);
  const [heroRef, heroVis] = useReveal(0.1);
  const [pillarsRef, pillarsVis] = useReveal(0.1);
  const [engageRef, engageVis] = useReveal(0.1);

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
                <span style={{ color: B.accent }}>Identity-first</span> security
                <br className="hidden sm:block" /> services
              </h1>
              <p
                className="text-slate-300 mb-6 sm:mb-8"
                style={{
                  fontSize: "clamp(14px, 4vw, 16px)",
                  lineHeight: 1.7,
                  maxWidth: 520,
                }}
              >
                VaultIAM delivers IAM, CIAM, privileged access, and identity threat
                detection outcomes—designed for regulated, high-risk environments
                in FinTech and HealthTech.
              </p>

              {/* Stats row - scrollable on mobile */}
              <div className="flex gap-6 sm:gap-8 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:overflow-visible">
                {[
                  { value: "$42B", label: "IAM market by 2030" },
                  { value: "144:1", label: "Machine to human ratio" },
                  { value: "97%", label: "NHIs over-privileged" },
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

            {/* Right: Identity mesh graphic - hidden on mobile */}
            <div
              className="hidden lg:flex justify-center items-center"
              style={{
                opacity: heroVis ? 1 : 0,
                transform: heroVis ? "translateX(0)" : "translateX(30px)",
                transition: "all 0.7s ease 0.2s",
              }}
            >
              <svg viewBox="0 0 320 260" width="100%" style={{ maxWidth: 320 }}>
                {/* Nodes */}
                {[
                  { cx: 160, cy: 130, r: 24, label: "IAM" },
                  { cx: 80, cy: 70, r: 16, label: "SSO" },
                  { cx: 240, cy: 70, r: 16, label: "MFA" },
                  { cx: 60, cy: 180, r: 16, label: "PAM" },
                  { cx: 260, cy: 180, r: 16, label: "ITDR" },
                  { cx: 160, cy: 220, r: 16, label: "CIAM" },
                ].map((node, i) => (
                  <g key={i}>
                    <line x1="160" y1="130" x2={node.cx} y2={node.cy} stroke={B.accent} strokeWidth="1" opacity="0.4" />
                    <circle cx={node.cx} cy={node.cy} r={node.r} fill={i === 0 ? B.accent : B.navyMid} stroke={B.accent} strokeWidth="1.5" />
                    <text x={node.cx} y={node.cy + 4} textAnchor="middle" fill={B.white} fontSize={i === 0 ? 10 : 8} fontWeight="600">
                      {node.label}
                    </text>
                  </g>
                ))}
                {/* Pulse effect */}
                <circle cx="160" cy="130" r="40" stroke={B.accent} strokeWidth="1" fill="none" opacity="0.3">
                  <animate attributeName="r" values="40;55;40" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.3;0.1;0.3" dur="3s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ IDENTITY PILLARS ═══ */}
      <section
        ref={pillarsRef}
        className="py-12 sm:py-16 lg:py-20"
        style={{ background: B.white }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {PILLARS.map((pillar, i) => (
              <div
                key={pillar.title}
                className="p-5 sm:p-6 rounded-xl"
                style={{
                  background: B.slate50,
                  opacity: pillarsVis ? 1 : 0,
                  transform: pillarsVis ? "translateY(0)" : "translateY(20px)",
                  transition: `all 0.5s ease ${i * 100}ms`,
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: B.accentBg, color: B.accentDark }}
                >
                  <span style={{ fontSize: 16, fontWeight: 700 }}>{i + 1}</span>
                </div>
                <h3
                  className="mb-2"
                  style={{ fontSize: "clamp(15px, 4vw, 17px)", fontWeight: 700, color: B.navy }}
                >
                  {pillar.title}
                </h3>
                <p style={{ fontSize: 14, color: B.slate600, lineHeight: 1.6 }}>
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CORE CAPABILITIES ═══ */}
      <section className="py-12 sm:py-16 lg:py-20" style={{ background: B.white }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-5">
          <div className="text-center mb-10 sm:mb-12">
            <h2
              style={{
                fontSize: "clamp(24px, 5vw, 36px)",
                fontWeight: 700,
                color: B.navy,
                letterSpacing: "-0.02em",
                marginBottom: 12,
              }}
            >
              Core Identity Capabilities
            </h2>
            <p
              style={{ fontSize: "clamp(14px, 4vw, 16px)", color: B.slate500, maxWidth: 600, margin: "0 auto" }}
            >
              End-to-end identity security services across workforce, customer, privileged, and threat detection domains.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {CAPABILITIES.map((cap, i) => (
              <CapabilityCard
                key={cap.slug}
                cap={cap}
                index={i}
                selected={selectedCap}
                onSelect={setSelectedCap}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PLATFORM TICKER ═══ */}
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-5 mb-4">
          <p className="text-center text-slate-400" style={{ fontSize: 12, fontWeight: 500, letterSpacing: "0.05em" }}>
            PLATFORMS WE WORK WITH
          </p>
        </div>
        <PlatformTicker />
      </section>

      {/* ═══ HOW WE ENGAGE ═══ */}
      <section
        ref={engageRef}
        className="py-12 sm:py-16 lg:py-20"
        style={{ background: B.white }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-5">
          <div className="text-center mb-10 sm:mb-12">
            <h2
              style={{
                fontSize: "clamp(24px, 5vw, 36px)",
                fontWeight: 700,
                color: B.navy,
                letterSpacing: "-0.02em",
                marginBottom: 12,
              }}
            >
              How We Engage
            </h2>
            <p style={{ fontSize: "clamp(14px, 4vw, 16px)", color: B.slate500 }}>
              A proven methodology delivering outcomes in 6-10 weeks.
            </p>
          </div>

          {/* Engagement steps - horizontal on desktop, vertical on mobile */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-start justify-center gap-4 sm:gap-0">
            {ENGAGEMENT.map((step, i) => {
              const Ico = step.icon;
              const isLast = i === ENGAGEMENT.length - 1;
              return (
                <div
                  key={step.label}
                  className="flex flex-col sm:flex-row items-center"
                  style={{
                    opacity: engageVis ? 1 : 0,
                    transform: engageVis ? "translateY(0)" : "translateY(20px)",
                    transition: `all 0.5s ease ${i * 150}ms`,
                  }}
                >
                  {/* Step content */}
                  <div className="flex flex-col items-center text-center w-full sm:w-48 lg:w-56">
                    <div
                      className="w-14 h-14 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-3"
                      style={{
                        background: `linear-gradient(135deg, ${B.accent}, ${B.accentDark})`,
                        color: B.white,
                        boxShadow: `0 4px 16px rgba(56,189,248,0.3)`,
                      }}
                    >
                      <Ico />
                    </div>
                    <h4
                      className="mb-1"
                      style={{ fontSize: 15, fontWeight: 700, color: B.navy }}
                    >
                      {step.label}
                    </h4>
                    <p
                      style={{ fontSize: 13, color: B.slate500, lineHeight: 1.5, maxWidth: 180 }}
                    >
                      {step.copy}
                    </p>
                  </div>

                  {/* Connector - vertical on mobile, horizontal on desktop */}
                  {!isLast && (
                    <>
                      {/* Mobile connector (vertical) */}
                      <div
                        className="sm:hidden w-0.5 h-8 my-2"
                        style={{ background: `linear-gradient(180deg, ${B.accent}, ${B.slate200})` }}
                      />
                      {/* Desktop connector (horizontal) */}
                      <div
                        className="hidden sm:block h-0.5 flex-1 min-w-8 lg:min-w-12 mt-6"
                        style={{ background: `linear-gradient(90deg, ${B.accent}, ${B.slate200})` }}
                      />
                    </>
                  )}
                </div>
              );
            })}
          </div>

          {/* Link to methodology page */}
          <div className="text-center mt-8 sm:mt-10">
            <Link
              to="/the-vaultiam-way"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all duration-200 hover:gap-3 touch-manipulation"
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: B.accentDark,
                background: B.accentBg,
              }}
            >
              Learn the full methodology
              <Icon.Arrow />
            </Link>
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
            Ready to secure your identity perimeter?
          </h2>
          <p
            className="text-slate-400 mb-8"
            style={{ fontSize: "clamp(14px, 4vw, 16px)", lineHeight: 1.7 }}
          >
            Book a free 30-minute assessment with our identity security experts.
            No sales pressure—just clear, actionable insights.
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
              <Icon.Arrow />
            </Link>
            <Link
              to="/customer-stories"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-white transition-all duration-200 touch-manipulation"
              style={{
                fontSize: 15,
                fontWeight: 600,
                background: B.slate700,
                border: `1px solid ${B.slate600}`,
              }}
            >
              View Customer Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
