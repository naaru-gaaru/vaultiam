import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

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

const STORIES = [
  {
    slug: "ai-workload-identities-healthcare",
    title: "Securing AI Workload Identities in Healthcare Using Microsoft Entra",
    sector: "Healthcare / HealthTech",
    challenge: "AI agent abuse, indirect prompt injection, lateral movement",
    outcome: "Real-time detection of anomalous AI behavior with zero standing access to patient data",
    focusAreas: ["IAM", "ITDR", "Non-Human Identities"],
    tools: ["Microsoft Entra ID", "Entra ID Protection", "Microsoft Purview"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
  },
  {
    slug: "synthetic-identity-fraud-fintech",
    title: "Preventing Synthetic Identity Fraud in FinTech CIAM",
    sector: "FinTech / Neobank",
    challenge: "Deepfake-driven synthetic identity onboarding bypassing basic KYC",
    outcome: "Significant reduction in synthetic fraud while accelerating onboarding for legitimate users",
    focusAreas: ["CIAM", "Fraud Prevention", "Identity Verification"],
    tools: ["Okta Customer Identity Cloud", "Socure", "Okta Actions"],
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
    outcome: "Credentials expired automatically within minutes, all privileged sessions auditable",
    focusAreas: ["PAM", "Non-Human Identity Governance", "Cloud Security"],
    tools: ["HashiCorp Vault", "HashiCorp Boundary", "AWS IAM"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
  },
  {
    slug: "shadow-ai-api-keys-healthtech",
    title: "Governing Shadow AI and API Keys in HealthTech R&D",
    sector: "HealthTech R&D",
    challenge: "Unmanaged API keys and shadow AI agents in LLM-based research workflows",
    outcome: "Full visibility into non-human identities with automated secret rotation",
    focusAreas: ["Non-Human Identity", "Secrets Management", "AI Governance"],
    tools: ["CyberArk Privilege Cloud", "CyberArk Secrets Manager", "Wiz CIEM"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
];

function StoryCard({ story, idx }) {
  const [ref, vis] = useReveal(0.1);
  const [hov, setHov] = useState(false);

  return (
    <Link
      to={`/customer-stories/${story.slug}`}
      ref={ref}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="flex flex-col group"
      style={{
        background: "#f8fafc",
        borderRadius: 14,
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0) scale(1)" : "translateY(24px) scale(0.98)",
        transition: `opacity 0.5s ease ${idx * 0.12}s, transform 0.5s ease ${idx * 0.12}s, box-shadow 0.3s, border-color 0.3s`,
        border: `1px solid ${hov ? "#2563eb" : "#e2e8f0"}`,
        boxShadow: hov ? "0 12px 32px rgba(37,99,235,0.2)" : "0 1px 3px rgba(15,23,42,0.06)",
        overflow: "hidden",
      }}
    >
      <div className="h-[3px] bg-gradient-to-r from-blue-600 to-blue-500" />

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-start justify-between mb-4">
          <div
            className="w-11 h-11 rounded-lg flex items-center justify-center transition-all duration-200"
            style={{
              background: hov ? "#eff6ff" : "#fff",
              color: hov ? "#1d4ed8" : "#475569",
            }}
          >
            {story.icon}
          </div>
          <span className="text-[11px] font-600 text-blue-600 uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded-md" style={{ fontWeight: 600 }}>
            {story.sector.split(" / ")[0]}
          </span>
        </div>

        <h3 className="text-slate-900 mb-3" style={{ fontSize: 17, fontWeight: 600, lineHeight: 1.3 }}>
          {story.title}
        </h3>

        <div className="mb-4">
          <div className="text-[11px] font-600 text-slate-400 uppercase tracking-wider mb-1.5" style={{ fontWeight: 600 }}>Challenge</div>
          <p className="text-slate-600" style={{ fontSize: 13, lineHeight: 1.55 }}>{story.challenge}</p>
        </div>

        <div className="mb-5 flex-grow">
          <div className="text-[11px] font-600 text-slate-400 uppercase tracking-wider mb-1.5" style={{ fontWeight: 600 }}>Outcome</div>
          <p className="text-slate-700" style={{ fontSize: 13.5, lineHeight: 1.6, fontWeight: 500 }}>{story.outcome}</p>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {story.focusAreas.map(area => (
            <span key={area} className="text-[11px] font-600 text-slate-600 bg-white px-2 py-1 rounded" style={{ fontWeight: 600 }}>
              {area}
            </span>
          ))}
        </div>

        <div className="pt-4 border-t border-slate-200">
          <div className="text-[10px] font-600 text-slate-400 uppercase tracking-wider mb-2" style={{ fontWeight: 600 }}>Stack</div>
          <div className="flex flex-wrap gap-1.5">
            {story.tools.map(tool => (
              <span key={tool} className="text-[11.5px] text-slate-500" style={{ fontWeight: 500 }}>
                {tool}
              </span>
            )).reduce((prev, curr, i) => [
              prev,
              <span key={`sep-${i}`} className="text-slate-300">•</span>,
              curr
            ])}
          </div>
        </div>

        <div className="flex items-center gap-1.5 mt-5 text-blue-600" style={{ fontSize: 13, fontWeight: 600 }}>
          View client spotlight
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:translate-x-1">
            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
          </svg>
        </div>
      </div>
    </Link>
  );
}

export default function CustomerStories() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Inter', system-ui, sans-serif", background: "#fff" }}>

      {/* dark sub-header with blue highlight */}
      <div
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(155deg, #1e293b 0%, #334155 60%, #1e3a4a 100%)", paddingTop: 104, paddingBottom: 64 }}
      >
        <div className="absolute" style={{ top: -100, right: -140, width: 460, height: 460, borderRadius: "50%", background: "radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 68%)", pointerEvents: "none" }} />
        <div className="absolute" style={{ bottom: -70, left: -60, width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div className="max-w-5xl mx-auto px-5 relative z-10">
          <h1 className="text-white" style={{ fontSize: "clamp(28px, 4.5vw, 42px)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.15, maxWidth: 580, marginBottom: 16 }}>
            Proven outcomes for <span style={{ color: "#3b82f6" }}>regulated enterprises</span>
          </h1>
          <p className="text-slate-400" style={{ fontSize: 15, maxWidth: 540, lineHeight: 1.7 }}>
            Real-world identity security outcomes for FinTech, healthcare, and regulated enterprises. Each engagement demonstrates how we architect, deploy, and operate IAM controls that measurably reduce risk while enabling business velocity.
          </p>

          {/* updated metrics */}
          <div className="flex gap-10 flex-wrap mt-8 pt-6" style={{ borderTop: "1px solid rgba(148,163,184,0.2)" }}>
            <div className="text-center">
              <div className="text-white" style={{ fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em" }}>2 Sectors</div>
              <div className="text-slate-400" style={{ fontSize: 12, fontWeight: 500, marginTop: 3 }}>FinTech + Healthcare</div>
            </div>
            <div className="text-center">
              <div className="text-white" style={{ fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em" }}>100%</div>
              <div className="text-slate-400" style={{ fontSize: 12, fontWeight: 500, marginTop: 3 }}>Compliance-first</div>
            </div>
            <div className="text-center">
              <div className="text-white" style={{ fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em" }}>90-day</div>
              <div className="text-slate-400" style={{ fontSize: 12, fontWeight: 500, marginTop: 3 }}>Avg. delivery</div>
            </div>
          </div>
        </div>
      </div>

      {/* case study cards */}
      <section className="max-w-5xl mx-auto px-5" style={{ paddingTop: 64, paddingBottom: 80 }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {STORIES.map((story, i) => (
            <StoryCard key={story.slug} story={story} idx={i} />
          ))}
        </div>
      </section>

      {/* dark CTA */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(155deg, #1e293b 0%, #334155 100%)", padding: "64px 20px" }}>
        <div className="absolute" style={{ top: -60, right: -100, width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle, rgba(37,99,235,0.13) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <h2 className="text-white" style={{ fontSize: 27, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 10 }}>
            Facing similar identity security challenges?
          </h2>
          <p className="text-slate-400" style={{ fontSize: 14.5, marginBottom: 30, lineHeight: 1.65 }}>
            Start with a free identity risk assessment — we'll map your posture, identify gaps, and outline a clear path forward. No pitch deck, no pressure.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-white rounded-lg"
              style={{ fontSize: 14, fontWeight: 600, padding: "11px 24px", background: "linear-gradient(135deg, #2563eb, #1d4ed8)", boxShadow: "0 4px 16px rgba(37,99,235,0.35)", transition: "box-shadow 0.2s, transform 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 6px 22px rgba(37,99,235,0.45)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 4px 16px rgba(37,99,235,0.35)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              Book a free identity assessment
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
            <Link
              to="/capabilities"
              className="inline-flex items-center gap-2 rounded-lg"
              style={{ fontSize: 14, fontWeight: 600, padding: "11px 24px", border: "1px solid rgba(148,163,184,0.3)", color: "#cbd5e1", background: "rgba(255,255,255,0.05)", transition: "border-color 0.2s, background 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#2563eb"; e.currentTarget.style.background = "rgba(37,99,235,0.08)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(148,163,184,0.3)"; e.currentTarget.style.background = "rgba(255,255,255,0.05)"; }}
            >
              View all capabilities
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
