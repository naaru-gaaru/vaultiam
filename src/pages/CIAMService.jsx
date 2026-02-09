import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

const PAIN_POINTS = [
  {
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="17" y1="11" x2="23" y2="11"/></svg>),
    title: "Synthetic identity fraud is costing you millions — and you can't see it",
    detail: "Fraudsters stitch together real SSNs, fake names, and generated documents to create identities that pass your KYC checks. These synthetic profiles build credit history for months before executing bust-out fraud. Traditional identity proofing catches real people using stolen data — it misses fabricated people entirely. FinTechs lose an estimated $6B+ annually to synthetic ID fraud.",
    stat: "$6B+",
    statLabel: "annual synthetic fraud losses",
  },
  {
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>),
    title: "Customer drop-off at onboarding kills your conversion funnel",
    detail: "Every friction point in your identity verification flow costs you real customers. Multi-step KYC with manual document uploads, excessive MFA prompts, and slow verification creates 40-60% abandonment rates. Your compliance team wants more checks. Your product team wants fewer steps. Neither side can prove what the right balance is because you're not measuring identity friction at the step level.",
    stat: "40-60%",
    statLabel: "onboarding abandonment rate",
  },
  {
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>),
    title: "Account takeover attacks bypass your MFA",
    detail: "ATO attacks have evolved past basic credential stuffing. Adversary-in-the-middle (AiTM) proxies now intercept session tokens in real-time, making SMS and even push-based MFA ineffective. Your customers' accounts get compromised while 'MFA-protected.' You need adaptive, risk-based authentication that evaluates device fingerprints, behavioral biometrics, and session anomalies — not just a second factor.",
    stat: "54%",
    statLabel: "of firms hit by ATO in 2024",
  },
  {
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>),
    title: "Privacy regulations are multiplying — and your CIAM wasn't built for them",
    detail: "CCPA, GDPR, state-level privacy laws, HIPAA for health data — each requires different consent flows, data residency, and deletion capabilities. Your customer identity platform was configured once and hasn't kept pace. Consent records are inconsistent, data subject requests take weeks, and your legal team can't confirm whether a 'delete my data' request actually purges identity records from all downstream systems.",
    stat: "12+",
    statLabel: "active US state privacy laws",
  },
];

const PLATFORMS = [
  { name: "Okta CIC (Auth0)", logo: "/tools/auth0.jpg" },
  { name: "Socure", logo: "/tools/socure.svg" },
  { name: "Microsoft Entra", logo: "/tools/entra.svg" },
  { name: "Ping Identity", logo: "/tools/ping.svg" },
  { name: "Okta", logo: "/tools/okta.svg" },
];

const VALUE_ADDS = [
  { title: "Synthetic Identity Defense", desc: "We integrate document verification, device intelligence, and behavioral signals into your onboarding flow to detect fabricated identities before they pass KYC — without adding customer friction." },
  { title: "Adaptive Risk-Based Authentication", desc: "Move beyond static MFA rules. We implement continuous risk scoring that evaluates device posture, behavioral patterns, and session context to step up or step down authentication dynamically." },
  { title: "Frictionless Onboarding Design", desc: "We redesign your identity verification flow to minimize drop-off: progressive profiling, document-free verification where possible, and step-level analytics so you can measure exactly where customers abandon." },
  { title: "ATO Detection & Session Protection", desc: "Real-time session anomaly detection, token binding, and impossible-travel analysis that catches account takeover attempts — even when attackers have valid credentials and MFA tokens." },
  { title: "Privacy-by-Design Consent Architecture", desc: "Centralized consent management with automated data subject request fulfillment across all downstream systems. Built for CCPA, GDPR, HIPAA, and the patchwork of state laws." },
  { title: "Customer Identity Consolidation", desc: "Merge fragmented customer profiles across acquisitions, product lines, and legacy systems into a unified identity graph — giving customers one login and giving you one view." },
];

export default function CIAMService() {
  const [heroRef, heroVis] = useReveal(0.05);
  const [painRef, painVis] = useReveal(0.1);
  const [valueRef, valueVis] = useReveal(0.1);
  const [ctaRef, ctaVis] = useReveal(0.1);

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(155deg, #1e293b 0%, #334155 60%, #1e3a5f 100%)",
          padding: "clamp(100px, 15vw, 160px) 0 clamp(60px, 10vw, 96px)",
        }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 75% 30%, rgba(37,99,235,0.15) 0%, transparent 68%)" }} />
        <div
          className="max-w-5xl mx-auto px-5 relative z-10"
          style={{
            opacity: heroVis ? 1 : 0,
            transform: heroVis ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <Link to="/capabilities" className="inline-flex items-center gap-1.5 text-blue-400 mb-6 hover:text-blue-300 transition-colors" style={{ fontSize: 13, fontWeight: 500 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
            All Capabilities
          </Link>
          <div className="inline-flex items-center gap-2 bg-blue-600/20 text-blue-300 px-3 py-1.5 rounded-full mb-5" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            CORE CAPABILITY
          </div>
          <h1 className="text-white mb-5" style={{ fontSize: "clamp(32px, 6vw, 52px)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            Customer Identity &<br />Access Management <span style={{ color: "#60a5fa" }}>(CIAM)</span>
          </h1>
          <p className="text-slate-300 max-w-2xl mb-8" style={{ fontSize: "clamp(15px, 2vw, 17px)", lineHeight: 1.7 }}>
            Your customer-facing identity layer is simultaneously your fraud frontline and your first user experience. We build CIAM systems that stop synthetic identities and account takeovers — while keeping onboarding fast enough that real customers actually convert.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-lg transition-all" style={{ background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)", fontSize: 14, fontWeight: 600 }}>
              Book a free CIAM assessment
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
            <Link to="/customer-stories/synthetic-identity-fraud" className="inline-flex items-center gap-2 text-blue-300 px-6 py-3 rounded-lg border border-blue-400/30 hover:bg-blue-400/10 transition-all" style={{ fontSize: 14, fontWeight: 500 }}>
              See CIAM case study
            </Link>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section ref={painRef} className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-5" style={{ opacity: painVis ? 1 : 0, transform: painVis ? "translateY(0)" : "translateY(30px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-3 py-1.5 rounded-full mb-4" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em" }}>THE REAL PROBLEMS</div>
            <h2 className="text-slate-900 mb-3" style={{ fontSize: "clamp(26px, 4vw, 36px)", fontWeight: 700, letterSpacing: "-0.02em" }}>
              Where customer identity breaks down
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto" style={{ fontSize: 15, lineHeight: 1.7 }}>
              FinTech and healthcare orgs face a unique tension: aggressive fraud prevention vs. seamless customer experience. Most CIAM implementations sacrifice one for the other.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PAIN_POINTS.map((p, i) => (<PainCard key={i} pain={p} />))}
          </div>
        </div>
      </section>

      {/* Value */}
      <section ref={valueRef} className="py-16 sm:py-20" style={{ background: "#f8fafc" }}>
        <div className="max-w-5xl mx-auto px-5" style={{ opacity: valueVis ? 1 : 0, transform: valueVis ? "translateY(0)" : "translateY(30px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1.5 rounded-full mb-4" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em" }}>WHAT WE DELIVER</div>
            <h2 className="text-slate-900 mb-3" style={{ fontSize: "clamp(26px, 4vw, 36px)", fontWeight: 700, letterSpacing: "-0.02em" }}>
              How VaultIAM secures customer identity
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto" style={{ fontSize: 15, lineHeight: 1.7 }}>
              We architect CIAM systems where security and experience aren't tradeoffs — they're the same design objective.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {VALUE_ADDS.map((v, i) => (<ValueCard key={i} item={v} />))}
          </div>
          <div className="mt-14 text-center">
            <p className="text-slate-500 mb-5" style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.05em" }}>PLATFORMS WE WORK WITH</p>
            <div className="flex flex-wrap justify-center gap-6 items-center">
              {PLATFORMS.map(p => (<img key={p.name} src={p.logo} alt={p.name} className="h-7 sm:h-8 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef} className="py-16 sm:py-20 text-center" style={{ background: "linear-gradient(155deg, #1e293b 0%, #334155 60%, #1e3a5f 100%)" }}>
        <div className="max-w-3xl mx-auto px-5" style={{ opacity: ctaVis ? 1 : 0, transform: ctaVis ? "translateY(0)" : "translateY(30px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}>
          <h2 className="text-white mb-4" style={{ fontSize: "clamp(24px, 4vw, 34px)", fontWeight: 700, letterSpacing: "-0.02em" }}>
            How much fraud is slipping through your onboarding?
          </h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto" style={{ fontSize: 15, lineHeight: 1.7 }}>
            We'll assess your customer identity flows end-to-end — from onboarding to session management — and show you where fraud enters and where customers leave.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 text-white px-7 py-3.5 rounded-lg transition-all" style={{ background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)", fontSize: 15, fontWeight: 600 }}>
            Book a free assessment
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </Link>
          <p className="text-slate-500 mt-4" style={{ fontSize: 12 }}>Typical engagement: 6-10 weeks · No vendor lock-in · Full knowledge transfer</p>
        </div>
      </section>
    </div>
  );
}

function PainCard({ pain }) {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} className="rounded-xl p-6 flex flex-col" style={{ background: hov ? "#fff" : "#f8fafc", border: `1.5px solid ${hov ? "#2563eb" : "#e2e8f0"}`, boxShadow: hov ? "0 8px 24px rgba(37,99,235,0.12)" : "0 1px 3px rgba(15,23,42,0.04)", transform: hov ? "translateY(-2px)" : "translateY(0)", transition: "all 0.3s ease" }}>
      <div className="flex items-start justify-between mb-3">
        <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-red-500">{pain.icon}</div>
        <div className="text-right">
          <div className="text-slate-900" style={{ fontSize: 22, fontWeight: 700 }}>{pain.stat}</div>
          <div className="text-slate-500" style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.03em" }}>{pain.statLabel}</div>
        </div>
      </div>
      <h3 className="text-slate-900 mb-2" style={{ fontSize: 16, fontWeight: 700, lineHeight: 1.35 }}>{pain.title}</h3>
      <p className="text-slate-600" style={{ fontSize: 13.5, lineHeight: 1.65 }}>{pain.detail}</p>
    </div>
  );
}

function ValueCard({ item }) {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} className="rounded-xl p-5 flex flex-col" style={{ background: "#fff", border: `1.5px solid ${hov ? "#2563eb" : "#e2e8f0"}`, boxShadow: hov ? "0 8px 24px rgba(37,99,235,0.1)" : "0 1px 2px rgba(15,23,42,0.04)", transform: hov ? "translateY(-2px)" : "translateY(0)", transition: "all 0.3s ease" }}>
      <div className="w-8 h-8 rounded-md flex items-center justify-center mb-3" style={{ background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)" }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <h3 className="text-slate-900 mb-1.5" style={{ fontSize: 15, fontWeight: 700 }}>{item.title}</h3>
      <p className="text-slate-600" style={{ fontSize: 13, lineHeight: 1.6 }}>{item.desc}</p>
    </div>
  );
}
