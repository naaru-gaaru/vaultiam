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
  Search: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
  ),
  Blueprint: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
    </svg>
  ),
  Settings: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
    </svg>
  ),
  Check: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  ),
  Arrow: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
    </svg>
  ),
  Layers: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
    </svg>
  ),
  Unlock: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/>
    </svg>
  ),
  Zap: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  ),
};

/* ─── METHOD STEPS ─── */
const METHOD_STEPS = [
  {
    id: "assess",
    label: "01 Assess",
    icon: Icon.Search,
    title: "Assess",
    desc: "We conduct a deep-dive into your identity landscape—current tools, policies, integrations, risk posture, and compliance gaps. The output is a prioritized roadmap with quick wins and strategic milestones.",
    deliverables: ["Identity maturity assessment", "Risk & gap analysis", "Prioritized roadmap", "Business case documentation"],
  },
  {
    id: "architect",
    label: "02 Architect",
    icon: Icon.Blueprint,
    title: "Architect",
    desc: "We design your target-state architecture: integration patterns, access policies, automation workflows, and governance frameworks. Everything is documented, reviewed, and signed off before implementation begins.",
    deliverables: ["Target-state architecture", "Integration blueprints", "Policy frameworks", "Implementation plan"],
  },
  {
    id: "operate",
    label: "03 Operate",
    icon: Icon.Settings,
    title: "Operate",
    desc: "We implement, integrate, and optimize. Post go-live, we provide ongoing support—monitoring, tuning, training, and continuous improvement—so your identity security evolves with your business.",
    deliverables: ["Production deployment", "Runbooks & documentation", "Team enablement", "Ongoing optimization"],
  },
];

/* ─── DIFFERENTIATORS ─── */
const DIFFERENTIATORS = [
  {
    icon: Icon.Layers,
    title: "Tech Agnostic",
    desc: "We work across Okta, Microsoft, CyberArk, etc.—recommending what fits your environment, not our partnerships.",
  },
  {
    icon: Icon.Unlock,
    title: "No Vendor Lock-in",
    desc: "Our architectures are portable. You own the design, documentation, and knowledge transfer.",
  },
  {
    icon: Icon.Zap,
    title: "Outcomes in Weeks",
    desc: "6-10 week engagements with measurable results. No multi-year contracts or endless discovery phases.",
  },
];

/* ═══════════════════════════════════════════════════════
   METHOD SECTION WITH INTERACTIVE TABS
   ═══════════════════════════════════════════════════════ */
function MethodSection() {
  const [activeStep, setActiveStep] = useState("assess");
  const [ref, vis] = useReveal(0.1);

  const currentStep = METHOD_STEPS.find((s) => s.id === activeStep);

  return (
    <section
      ref={ref}
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
            The Method
          </h2>
          <p style={{ fontSize: "clamp(14px, 4vw, 16px)", color: B.slate500 }}>
            A proven three-phase approach delivering outcomes in 6-10 weeks.
          </p>
        </div>

        {/* Step selector buttons - scrollable on mobile */}
        <div
          className="flex gap-2 sm:gap-3 mb-8 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:overflow-visible sm:justify-center"
          style={{
            opacity: vis ? 1 : 0,
            transform: vis ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.5s ease",
          }}
        >
          {METHOD_STEPS.map((step) => {
            const isActive = activeStep === step.id;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className="flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg transition-all duration-300 whitespace-nowrap shrink-0 touch-manipulation"
                style={{
                  background: isActive ? `linear-gradient(135deg, ${B.accent}, ${B.accentDark})` : B.slate100,
                  color: isActive ? B.white : B.slate600,
                  fontWeight: 600,
                  fontSize: 14,
                  boxShadow: isActive ? `0 4px 16px rgba(56,189,248,0.3)` : "none",
                  minHeight: 44,
                }}
              >
                <step.icon />
                {step.label}
              </button>
            );
          })}
        </div>

        {/* Active step content */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10"
          style={{
            opacity: vis ? 1 : 0,
            transform: vis ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.5s ease 0.1s",
          }}
        >
          {/* Left: Description */}
          <div
            className="p-6 sm:p-8 rounded-2xl"
            style={{ background: B.slate50, border: `1px solid ${B.slate200}` }}
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
              style={{
                background: `linear-gradient(135deg, ${B.accent}, ${B.accentDark})`,
                color: B.white,
              }}
            >
              <currentStep.icon />
            </div>
            <h3
              className="mb-4"
              style={{ fontSize: "clamp(20px, 5vw, 24px)", fontWeight: 700, color: B.navy }}
            >
              {currentStep.title}
            </h3>
            <p style={{ fontSize: "clamp(14px, 4vw, 15px)", color: B.slate600, lineHeight: 1.7 }}>
              {currentStep.desc}
            </p>
          </div>

          {/* Right: Deliverables */}
          <div
            className="p-6 sm:p-8 rounded-2xl"
            style={{ background: B.accentBg, border: `1px solid ${B.accent}30` }}
          >
            <h4
              className="mb-5"
              style={{ fontSize: 14, fontWeight: 700, color: B.accentDark, letterSpacing: "0.05em" }}
            >
              DELIVERABLES
            </h4>
            <div className="space-y-4">
              {currentStep.deliverables.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: B.accent, color: B.white }}
                  >
                    <Icon.Check />
                  </div>
                  <span style={{ fontSize: 15, fontWeight: 500, color: B.navy }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   MAIN PAGE COMPONENT
   ═══════════════════════════════════════════════════════ */
export default function VaultIAMWay() {
  const [heroRef, heroVis] = useReveal(0.1);
  const [diffRef, diffVis] = useReveal(0.1);

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
          <div className="max-w-3xl">
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
                The Vault<span style={{ color: B.accent }}>IAM</span> Way
              </h1>
              <p
                className="text-slate-300 mb-6 sm:mb-8"
                style={{
                  fontSize: "clamp(14px, 4vw, 17px)",
                  lineHeight: 1.7,
                  maxWidth: 600,
                }}
              >
                Identity security specialists who turn the fastest-growing attack
                surface into your strongest defense. No fluff, no lock-in—just
                measurable outcomes in 6-10 weeks.
              </p>

              {/* Stats row */}
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
          </div>
        </div>
      </section>

      {/* ═══ METHOD SECTION ═══ */}
      <MethodSection />

      {/* ═══ THE VAULTIAM DIFFERENCE ═══ */}
      <section
        ref={diffRef}
        className="py-12 sm:py-16 lg:py-20"
        style={{ background: B.slate50 }}
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
              The VaultIAM Difference
            </h2>
            <p style={{ fontSize: "clamp(14px, 4vw, 16px)", color: B.slate500 }}>
              What sets us apart from traditional consultancies and system integrators.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
            {DIFFERENTIATORS.map((diff, i) => {
              const Ico = diff.icon;
              return (
                <div
                  key={diff.title}
                  className="p-5 sm:p-6 rounded-2xl"
                  style={{
                    background: B.white,
                    border: `1px solid ${B.slate200}`,
                    opacity: diffVis ? 1 : 0,
                    transform: diffVis ? "translateY(0)" : "translateY(20px)",
                    transition: `all 0.5s ease ${i * 100}ms`,
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: B.accentBg, color: B.accentDark }}
                  >
                    <Ico />
                  </div>
                  <h3
                    className="mb-2"
                    style={{ fontSize: "clamp(16px, 4vw, 18px)", fontWeight: 700, color: B.navy }}
                  >
                    {diff.title}
                  </h3>
                  <p style={{ fontSize: 14, color: B.slate600, lineHeight: 1.6 }}>
                    {diff.desc}
                  </p>
                </div>
              );
            })}
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
            Ready to start the conversation?
          </h2>
          <p
            className="text-slate-400 mb-8"
            style={{ fontSize: "clamp(14px, 4vw, 16px)", lineHeight: 1.7 }}
          >
            Organizations are scrambling to secure identities before the next breach.
            The question isn't if you'll invest in identity security—it's whether
            you'll do it proactively or after an incident.
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
              Start a Conversation
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
              See Client Results
            </Link>
          </div>
          <p className="text-slate-500 mt-6" style={{ fontSize: 13 }}>
            No sales pressure. No generic pitch decks. Just pure identity expertise.
          </p>
        </div>
      </section>
    </div>
  );
}
