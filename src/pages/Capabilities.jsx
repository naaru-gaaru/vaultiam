import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

/* ─── scroll-reveal hook ─── */
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

/* ──────────────────────────────────
   INLINE LOGO SVGs — these map to the
   SVG files that live in public/logos/
   in the repo. Inline here so the ticker
   renders without <img> path issues in
   any deploy context.
   ────────────────────────────────── */
const LogoSVGs = {
  Okta: () => (
    <svg viewBox="0 0 60 24" width="60" height="24" fill="none">
      <circle cx="12" cy="12" r="7" stroke="#007DC1" strokeWidth="2.2" fill="none"/>
      <circle cx="12" cy="12" r="3" fill="#007DC1"/>
      <text x="22" y="17" fontSize="13" fontWeight="600" fill="#1a1a1a" fontFamily="Inter,sans-serif">okta</text>
    </svg>
  ),
  MicrosoftEntra: () => (
    <svg viewBox="0 0 88 24" width="88" height="24" fill="none">
      <rect x="1" y="4" width="16" height="16" rx="3" fill="#0078D4"/>
      <path d="M4 18V8l4 5 4-5v10" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <text x="22" y="17" fontSize="12" fontWeight="600" fill="#1a1a1a" fontFamily="Inter,sans-serif">Microsoft Entra</text>
    </svg>
  ),
  SailPoint: () => (
    <svg viewBox="0 0 84 24" width="84" height="24" fill="none">
      <polygon points="2,20 10,4 18,20" fill="#003865"/>
      <polygon points="10,20 16,8 22,20" fill="#00A3E0" opacity="0.7"/>
      <text x="27" y="17" fontSize="12" fontWeight="600" fill="#1a1a1a" fontFamily="Inter,sans-serif">SailPoint</text>
    </svg>
  ),
  CyberArk: () => (
    <svg viewBox="0 0 82 24" width="82" height="24" fill="none">
      <circle cx="10" cy="12" r="6" stroke="#C8102E" strokeWidth="2" fill="none"/>
      <circle cx="10" cy="12" r="2.5" fill="#C8102E"/>
      <line x1="15" y1="12" x2="21" y2="12" stroke="#C8102E" strokeWidth="2" strokeLinecap="round"/>
      <line x1="19" y1="12" x2="19" y2="15" stroke="#C8102E" strokeWidth="2" strokeLinecap="round"/>
      <text x="25" y="17" fontSize="12" fontWeight="600" fill="#1a1a1a" fontFamily="Inter,sans-serif">CyberArk</text>
    </svg>
  ),
  PingIdentity: () => (
    <svg viewBox="0 0 90 24" width="90" height="24" fill="none">
      <circle cx="10" cy="12" r="7" fill="#E8263D"/>
      <circle cx="10" cy="12" r="3.5" fill="#fff"/>
      <text x="22" y="17" fontSize="12" fontWeight="600" fill="#1a1a1a" fontFamily="Inter,sans-serif">Ping Identity</text>
    </svg>
  ),
  AWSIAM: () => (
    <svg viewBox="0 0 72 24" width="72" height="24" fill="none">
      <rect x="1" y="5" width="18" height="14" rx="2" fill="#232F3E"/>
      <text x="4" y="16" fontSize="9" fontWeight="700" fill="#FF9900" fontFamily="Inter,sans-serif">AWS</text>
      <text x="23" y="17" fontSize="12" fontWeight="600" fill="#1a1a1a" fontFamily="Inter,sans-serif">IAM</text>
    </svg>
  ),
  GoogleCloudIAM: () => (
    <svg viewBox="0 0 104 24" width="104" height="24" fill="none">
      <circle cx="10" cy="12" r="7" fill="#fff" stroke="#dadce0" strokeWidth="1"/>
      <path d="M10 6a6 6 0 1 1-3.46 10.9" fill="none" stroke="#4285F4" strokeWidth="2.2" strokeLinecap="round"/>
      <path d="M6.54 16.9a6 6 0 0 1 0-9.8" fill="none" stroke="#34A853" strokeWidth="2.2" strokeLinecap="round"/>
      <path d="M6.54 7.1a6 6 0 0 1 6.92 0" fill="none" stroke="#FBBC05" strokeWidth="2.2" strokeLinecap="round"/>
      <path d="M13.46 16.9a6 6 0 0 1-6.92 0" fill="none" stroke="#EA4335" strokeWidth="2.2" strokeLinecap="round"/>
      <text x="21" y="17" fontSize="12" fontWeight="600" fill="#1a1a1a" fontFamily="Inter,sans-serif">Google Cloud IAM</text>
    </svg>
  ),
  ForgeRock: () => (
    <svg viewBox="0 0 82 24" width="82" height="24" fill="none">
      <rect x="2" y="6" width="12" height="12" rx="3" fill="#E8263D"/>
      <rect x="8" y="6" width="12" height="12" rx="3" fill="#2563EB" opacity="0.85"/>
      <text x="24" y="17" fontSize="12" fontWeight="600" fill="#1a1a1a" fontFamily="Inter,sans-serif">ForgeRock</text>
    </svg>
  ),
  IBMVerify: () => (
    <svg viewBox="0 0 78 24" width="78" height="24" fill="none">
      {[0,1,2,3,4,5,6,7].map((i) => (
        <rect key={i} x="2" y={5 + i * 1.7} width="14" height="1.1" rx="0.5" fill="#052BA9"/>
      ))}
      <text x="20" y="17" fontSize="12" fontWeight="600" fill="#1a1a1a" fontFamily="Inter,sans-serif">IBM Verify</text>
    </svg>
  ),
};

const PLATFORMS = [
  { key: "Okta",             Logo: LogoSVGs.Okta,            site: "https://www.okta.com" },
  { key: "Microsoft Entra", Logo: LogoSVGs.MicrosoftEntra,  site: "https://entra.microsoft.com" },
  { key: "SailPoint",        Logo: LogoSVGs.SailPoint,       site: "https://www.sailpoint.com" },
  { key: "CyberArk",         Logo: LogoSVGs.CyberArk,        site: "https://www.cyberark.com" },
  { key: "Ping Identity",    Logo: LogoSVGs.PingIdentity,    site: "https://www.pingidentity.com" },
  { key: "AWS IAM",          Logo: LogoSVGs.AWSIAM,          site: "https://aws.amazon.com/iam/" },
  { key: "Google Cloud IAM", Logo: LogoSVGs.GoogleCloudIAM,  site: "https://cloud.google.com/iam" },
  { key: "ForgeRock",        Logo: LogoSVGs.ForgeRock,       site: "https://www.thales.com" },
  { key: "IBM Verify",       Logo: LogoSVGs.IBMVerify,       site: "https://www.ibm.com/products/verify" },
];

/* ─── data ─── */
const STATS = [
  { value: "$42.6B",  label: "IAM market by 2030",                  src: "MarketsandMarkets" },
  { value: "93%",     label: "of breaches involve identity",       src: "Verizon DBIR 2024" },
  { value: "67%",     label: "of B2B buyers research online first",src: "Forrester" },
];

const PILLARS = [
  { title: "Identity as the perimeter",  copy: "Controls built around the identity — not the network edge — so security follows users everywhere." },
  { title: "Regulated-industry depth",  copy: "FinTech and healthcare compliance baked into every architecture conversation from day one." },
  { title: "AI-augmented detection",    copy: "ML-driven anomaly detection and automated policy enforcement cut noise and mean time to respond." },
];

const CAPABILITIES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
    title: "Identity & Access Management",
    slug: "iam",
    desc: "Full-lifecycle workforce IAM — architecture, cloud-native modernisation, non-human identity governance, and ongoing operational support.",
    outcome: "Unified identity across hybrid & multi-cloud",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "Customer Identity & Access (CIAM)",
    slug: "ciam",
    desc: "Fraud-aware onboarding, adaptive authentication, and consent-driven identity flows purpose-built for regulated digital platforms.",
    outcome: "Seamless, compliant customer trust at scale",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
    title: "Privileged Access Management",
    slug: "pam",
    desc: "Zero standing privilege with just-in-time access, session recording, and granular controls for both human and machine workloads.",
    outcome: "Eliminate privilege sprawl and lateral risk",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    title: "Identity Threat Detection & Response",
    slug: "itdr",
    desc: "Real-time detection and automated response for identity-based attacks, anomalous behaviour, and lateral movement across your environment.",
    outcome: "Proactive threat hunting — not just alerts",
  },
];

const FRAMEWORKS = ["SOC 2", "ISO 27001", "GDPR", "HIPAA", "PCI-DSS", "CCPA", "NIST CSF"];

const ENGAGE_STEPS = [
  {
    num: "01", title: "Assess",
    copy: "Map your identity posture, gaps, and regulatory obligations in a focused discovery sprint.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    ),
  },
  {
    num: "02", title: "Architect",
    copy: "Bespoke identity roadmap — zero-trust policies, tooling selection, migration sequencing.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>
      </svg>
    ),
  },
  {
    num: "03", title: "Operate",
    copy: "Managed monitoring, incident response, and continuous identity governance.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
      </svg>
    ),
  },
];

/* ──────────────────────────────────
   SUB-COMPONENTS
   ────────────────────────────────── */

function PillarCard({ title, copy, idx }) {
  const [ref, vis] = useReveal(0.18);
  return (
    <div
      ref={ref}
      className="flex flex-col"
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(18px)",
        transition: `opacity 0.5s ease ${idx * 0.12}s, transform 0.5s ease ${idx * 0.12}s`,
      }}
    >
      <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
        </svg>
      </div>
      <h3 className="text-slate-900 mb-1.5" style={{ fontSize: 15, fontWeight: 600 }}>{title}</h3>
      <p className="text-slate-500" style={{ fontSize: 13.5, lineHeight: 1.6 }}>{copy}</p>
    </div>
  );
}

function CapCard({ icon, title, slug, desc, outcome, idx }) {
  const [ref, vis] = useReveal(0.1);
  const [hov, setHov] = useState(false);
  return (
    <div
      ref={ref}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="bg-white rounded-[14px] flex flex-col"
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.5s ease ${idx * 0.1}s, transform 0.5s ease ${idx * 0.1}s, box-shadow 0.25s, border-color 0.25s`,
        border: `1px solid ${hov ? "#2563eb" : "#e2e8f0"}`,
        boxShadow: hov ? "0 6px 24px rgba(37,99,235,0.15)" : "0 1px 3px rgba(15,23,42,0.06)",
        overflow: "hidden",
      }}
    >
      <div className="h-[3px] bg-blue-600" />
      <div className="p-5 flex flex-col flex-grow">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
          style={{
            background: hov ? "#eff6ff" : "#f1f5f9",
            color: hov ? "#1d4ed8" : "#475569",
            transition: "background 0.2s, color 0.2s",
          }}
        >
          {icon}
        </div>
        <h3 className="text-slate-900 mb-2" style={{ fontSize: 16, fontWeight: 600, lineHeight: 1.3 }}>{title}</h3>
        <p className="text-slate-500 flex-grow" style={{ fontSize: 13.5, lineHeight: 1.65 }}>{desc}</p>

        <Link
          to={`/capabilities/${slug}`}
          className="flex items-center gap-1.5 mt-4 pt-4 border-t border-slate-100 text-blue-600 group"
          style={{ fontSize: 13, fontWeight: 600 }}
          onMouseEnter={e => e.currentTarget.style.color = "#1d4ed8"}
          onMouseLeave={e => e.currentTarget.style.color = "#2563eb"}
        >
          {outcome}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:translate-x-1">
            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
          </svg>
        </Link>
      </div>
    </div>
  );
}

function TickerItem({ Logo, site }) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={site}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="inline-flex items-center justify-center flex-shrink-0"
      style={{
        width: 148,
        height: 54,
        borderRadius: 10,
        border: `1px solid ${hov ? "#2563eb" : "#e2e8f0"}`,
        background: hov ? "#eff6ff" : "#fff",
        boxShadow: hov ? "0 2px 12px rgba(37,99,235,0.12)" : "none",
        opacity: hov ? 1 : 0.72,
        marginRight: 14,
        transition: "all 0.2s",
      }}
    >
      <Logo />
    </a>
  );
}

function EngageNode({ num, title, copy, icon, isLast, idx }) {
  const [ref, vis] = useReveal(0.15);
  return (
    <div
      ref={ref}
      className="flex items-start flex-grow"
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "translateX(0)" : "translateX(-18px)",
        transition: `opacity 0.5s ease ${idx * 0.14}s, transform 0.5s ease ${idx * 0.14}s`,
      }}
    >
      <div className="flex flex-col items-center" style={{ width: 180, flexShrink: 0 }}>
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center relative z-10"
          style={{ background: "linear-gradient(135deg, #2563eb, #1d4ed8)", boxShadow: "0 4px 14px rgba(37,99,235,0.35)", color: "#fff" }}
        >
          {icon}
        </div>
        <h4 className="text-slate-900 mt-3 mb-1.5" style={{ fontSize: 14, fontWeight: 600 }}>{title}</h4>
        <p className="text-slate-500 text-center" style={{ fontSize: 12.5, lineHeight: 1.55, maxWidth: 160 }}>{copy}</p>
      </div>
      {!isLast && (
        <div className="flex-grow mt-7 rounded-full" style={{ height: 2, background: "linear-gradient(90deg, #2563eb, #e2e8f0)", minWidth: 28 }} />
      )}
    </div>
  );
}

/* ──────────────────────────────────
   PAGE
   ────────────────────────────────── */
export default function Capabilities() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Inter', system-ui, sans-serif", background: "#f8fafc" }}>

      {/* ═══ DARK SUB-HEADER (page-specific, sits below global white Header) ═══ */}
      <div
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(155deg, #1e293b 0%, #334155 60%, #1e3a4a 100%)", paddingTop: 104, paddingBottom: 64 }}
      >
        <div className="absolute" style={{ top: -100, right: -140, width: 460, height: 460, borderRadius: "50%", background: "radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 68%)", pointerEvents: "none" }} />
        <div className="absolute" style={{ bottom: -70, left: -60, width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div className="max-w-5xl mx-auto px-5 relative z-10">
          <h1 className="text-white" style={{ fontSize: "clamp(28px, 4.5vw, 42px)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.15, maxWidth: 580, marginBottom: 16 }}>
            IAM security services<br />
            <span className="text-blue-400">built for identity-first</span> outcomes
          </h1>
          <p className="text-slate-400" style={{ fontSize: 15, maxWidth: 520, lineHeight: 1.7 }}>
            Workforce IAM, customer identity, privileged access, and identity threat detection — purpose-engineered for FinTech, healthcare, and regulated enterprises in North America.
          </p>
          <div className="flex gap-10 flex-wrap mt-8 pt-6" style={{ borderTop: "1px solid rgba(148,163,184,0.2)" }}>
            {STATS.map(s => (
              <div key={s.label} className="text-center">
                <div className="text-white" style={{ fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em" }}>{s.value}</div>
                <div className="text-slate-400" style={{ fontSize: 12, fontWeight: 500, marginTop: 3 }}>{s.label}</div>
                <div style={{ fontSize: 10.5, color: "rgba(148,163,184,0.55)", marginTop: 2 }}>{s.src}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══ THREE PILLARS — tight 3-col grid, no phantom gap ═══ */}
      <section className="max-w-5xl mx-auto px-5" style={{ paddingTop: 60, paddingBottom: 48 }}>
        <div className="grid grid-cols-3 gap-10">
          {PILLARS.map((p, i) => <PillarCard key={p.title} {...p} idx={i} />)}
        </div>
      </section>

      {/* ═══ CORE CAPABILITIES — no tags ═══ */}
      <section className="max-w-5xl mx-auto px-5" style={{ paddingBottom: 72 }}>
        <div style={{ marginBottom: 32 }}>
          <h2 className="text-slate-900" style={{ fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 4 }}>
            Core identity & access management capabilities
          </h2>
          <p className="text-slate-500" style={{ fontSize: 14 }}>Four disciplines. One unified identity posture.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CAPABILITIES.map((c, i) => <CapCard key={c.title} {...c} idx={i} />)}
        </div>
      </section>

      {/* ═══ COMPLIANCE EXPERTISE STRIP ═══ */}
      <section className="bg-white border-t border-b border-slate-200" style={{ padding: "26px 20px" }}>
        <div className="max-w-5xl mx-auto flex items-center justify-center gap-5 flex-wrap">
          <span className="text-slate-500 uppercase tracking-wider whitespace-nowrap" style={{ fontSize: 12, fontWeight: 600 }}>
            Expertise across regulated frameworks
          </span>
          <div className="flex gap-2 flex-wrap justify-center">
            {FRAMEWORKS.map(f => (
              <span key={f} className="border border-slate-200 rounded-md bg-white text-slate-700" style={{ fontSize: 12, fontWeight: 600, padding: "4px 12px" }}>
                {f}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ HOW WE ENGAGE ═══ */}
      <section className="max-w-5xl mx-auto px-5" style={{ paddingTop: 64, paddingBottom: 60 }}>
        <div className="text-center" style={{ marginBottom: 40 }}>
          <h2 className="text-slate-900" style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 5 }}>How we engage</h2>
          <p className="text-slate-500 mx-auto" style={{ fontSize: 13.5, maxWidth: 440 }}>
            A structured, repeatable process — from first identity audit to full managed operations.
          </p>
        </div>
        <div className="flex items-start justify-center">
          {ENGAGE_STEPS.map((s, i) => (
            <EngageNode key={s.title} {...s} isLast={i === ENGAGE_STEPS.length - 1} idx={i} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/the-vaultiam-way"
            className="inline-flex items-center gap-1.5 text-blue-600 group"
            style={{ fontSize: 13.5, fontWeight: 600 }}
            onMouseEnter={e => e.currentTarget.style.color = "#1d4ed8"}
            onMouseLeave={e => e.currentTarget.style.color = "#2563eb"}
          >
            Learn the full methodology — The VaultIAM Way
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:translate-x-1">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </Link>
        </div>
      </section>

      {/* ═══ PLATFORMS TICKER ═══ */}
      <section className="bg-white border-t border-b border-slate-200" style={{ padding: "48px 20px" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center" style={{ marginBottom: 28 }}>
            <h2 className="text-slate-900" style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 4 }}>
              Platforms we architect around
            </h2>
            <p className="text-slate-500" style={{ fontSize: 13 }}>
              Tool-agnostic expertise across the leading identity platforms used by FinTech and HealthTech in North America. Click any logo to visit.
            </p>
          </div>

          <style>{`
            @keyframes viam-ticker {
              0%   { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .viam-ticker-track {
              display: inline-flex;
              animation: viam-ticker 35s linear infinite;
            }
            .viam-ticker-track:hover {
              animation-play-state: paused;
            }
          `}</style>

          <div className="overflow-hidden rounded-xl border border-slate-200" style={{ background: "#f8fafc" }}>
            <div className="viam-ticker-track" style={{ padding: "12px 0" }}>
              {[...PLATFORMS, ...PLATFORMS].map((p, i) => (
                <TickerItem key={i} Logo={p.Logo} site={p.site} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ DARK PRE-FOOTER CTA ═══ */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(155deg, #1e293b 0%, #334155 100%)", padding: "64px 20px" }}>
        <div className="absolute" style={{ top: -60, right: -100, width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle, rgba(37,99,235,0.13) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <h2 className="text-white" style={{ fontSize: 27, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 10 }}>
            Ready to secure your identity posture?
          </h2>
          <p className="text-slate-400" style={{ fontSize: 14.5, marginBottom: 30, lineHeight: 1.65 }}>
            Start with a free identity assessment — no pitch, no pressure. An honest look at your gaps and a clear path forward.
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
              to="/assessment-guide"
              className="inline-flex items-center gap-2 rounded-lg"
              style={{ fontSize: 14, fontWeight: 600, padding: "11px 24px", border: "1px solid rgba(148,163,184,0.3)", color: "#cbd5e1", background: "rgba(255,255,255,0.05)", transition: "border-color 0.2s, background 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#2563eb"; e.currentTarget.style.background = "rgba(37,99,235,0.08)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(148,163,184,0.3)"; e.currentTarget.style.background = "rgba(255,255,255,0.05)"; }}
            >
              Download IAM Assessment Guide
            </Link>
          </div>
        </div>
      </section>

      {/* <Footer /> rendered by layout wrapper — not duplicated here */}
    </div>
  );
}
