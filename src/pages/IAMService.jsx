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
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>),
    title: "Orphaned accounts persist for months after offboarding",
    detail: "When employees leave, their access doesn't. Most enterprises take 45+ days to fully deprovision a departing user — leaving active credentials in SaaS apps, cloud consoles, and VPNs that attackers discover faster than IT does. This isn't a policy problem. It's an automation gap in your Joiner-Mover-Leaver lifecycle.",
    stat: "45+ days",
    statLabel: "avg. deprovision delay",
  },
  {
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>),
    title: "Directory sprawl across hybrid environments",
    detail: "You've got Active Directory on-prem, Entra ID for Microsoft 365, Okta for SaaS, and AWS IAM for cloud workloads. Each has its own role model, group schema, and access policies. When audit asks 'who has access to what?' — nobody can answer in under a week. Fragmented directories make zero trust architecturally impossible.",
    stat: "3-5",
    statLabel: "identity silos per enterprise",
  },
  {
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>),
    title: "Role explosion makes RBAC unmanageable",
    detail: "What started as 50 roles became 3,000. Every access request spawns a new role because existing ones don't quite fit. Auditors flag over-permissioned roles, so teams create narrower ones — which proliferate further. The result: nobody trusts the role model, rubber-stamp approvals become the norm, and least-privilege becomes a fiction.",
    stat: "60x",
    statLabel: "typical role growth in 3 years",
  },
  {
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>),
    title: "MFA fatigue and push-bombing attacks",
    detail: "You rolled out MFA. Attackers adapted. Push-bombing — flooding users with approval prompts until they accept one — now accounts for a growing share of credential compromises. Basic MFA is no longer sufficient. You need number matching, phishing-resistant FIDO2, and conditional access policies that evaluate device posture and location risk — not just a second factor.",
    stat: "80%",
    statLabel: "of breaches involve credentials",
  },
];

const PLATFORMS = [
  { name: "Okta", logo: "/tools/okta.svg" },
  { name: "Microsoft Entra", logo: "/tools/entra.svg" },
  { name: "SailPoint", logo: "/tools/sailpoint.svg" },
  { name: "Ping Identity", logo: "/tools/ping.svg" },
  { name: "AWS IAM", logo: "/tools/aws.svg" },
  { name: "Azure AD", logo: "/tools/azure.svg" },
];

const VALUE_ADDS = [
  { title: "Zero Trust Architecture Design", desc: "We map your identity flows across every environment and design conditional access policies that verify identity, device, location, and risk — before granting any access." },
  { title: "JML Lifecycle Automation", desc: "Automated provisioning and deprovisioning tied to your HR system of record. When someone joins, moves, or leaves — access changes in minutes, not months." },
  { title: "Directory Consolidation & Federation", desc: "We unify fragmented identity silos into a single authoritative source with federated SSO, eliminating shadow directories and reducing your attack surface." },
  { title: "Role Mining & RBAC Rationalization", desc: "We analyze actual usage patterns to collapse thousands of roles into a clean, auditable model — then automate certification reviews so roles stay lean." },
  { title: "Phishing-Resistant MFA Deployment", desc: "FIDO2 security keys, passkeys, and certificate-based auth that eliminates push-bombing and SIM-swap attacks. Not just MFA — the right MFA." },
  { title: "Compliance-Ready Access Governance", desc: "Automated access reviews, separation-of-duties enforcement, and audit-ready reporting for SOC 2, HIPAA, PCI-DSS, and ISO 27001." },
];

export default function IAMService() {
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
          <Link
            to="/capabilities"
            className="inline-flex items-center gap-1.5 text-blue-400 mb-6 hover:text-blue-300 transition-colors"
            style={{ fontSize: 13, fontWeight: 500 }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
            All Capabilities
          </Link>
          <div className="inline-flex items-center gap-2 bg-blue-600/20 text-blue-300 px-3 py-1.5 rounded-full mb-5" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v6m0 6v6m-7-7h6m6 0h6"/></svg>
            CORE CAPABILITY
          </div>
          <h1 className="text-white mb-5" style={{ fontSize: "clamp(32px, 6vw, 52px)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            Identity & Access<br />Management <span style={{ color: "#60a5fa" }}>(IAM)</span>
          </h1>
          <p className="text-slate-300 max-w-2xl mb-8" style={{ fontSize: "clamp(15px, 2vw, 17px)", lineHeight: 1.7 }}>
            Your workforce identity infrastructure is the single largest attack surface in your organization. We design, deploy, and harden IAM systems that actually enforce least-privilege — across hybrid environments, regulated industries, and complex org structures.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-lg transition-all"
              style={{ background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)", fontSize: 14, fontWeight: 600 }}
            >
              Book a free IAM assessment
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
            <Link
              to="/customer-stories"
              className="inline-flex items-center gap-2 text-blue-300 px-6 py-3 rounded-lg border border-blue-400/30 hover:bg-blue-400/10 transition-all"
              style={{ fontSize: 14, fontWeight: 500 }}
            >
              See IAM results
            </Link>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section ref={painRef} className="py-16 sm:py-20 bg-white">
        <div
          className="max-w-5xl mx-auto px-5"
          style={{
            opacity: painVis ? 1 : 0,
            transform: painVis ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-3 py-1.5 rounded-full mb-4" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em" }}>
              THE REAL PROBLEMS
            </div>
            <h2 className="text-slate-900 mb-3" style={{ fontSize: "clamp(26px, 4vw, 36px)", fontWeight: 700, letterSpacing: "-0.02em" }}>
              What's actually breaking in enterprise IAM
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto" style={{ fontSize: 15, lineHeight: 1.7 }}>
              These aren't hypothetical risks. They're the gaps we find in every assessment — and the reason 80% of breaches still trace back to compromised credentials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PAIN_POINTS.map((p, i) => (
              <PainCard key={i} pain={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* VaultIAM Value */}
      <section
        ref={valueRef}
        className="py-16 sm:py-20"
        style={{ background: "#f8fafc" }}
      >
        <div
          className="max-w-5xl mx-auto px-5"
          style={{
            opacity: valueVis ? 1 : 0,
            transform: valueVis ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1.5 rounded-full mb-4" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em" }}>
              WHAT WE DELIVER
            </div>
            <h2 className="text-slate-900 mb-3" style={{ fontSize: "clamp(26px, 4vw, 36px)", fontWeight: 700, letterSpacing: "-0.02em" }}>
              How VaultIAM fixes workforce identity
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto" style={{ fontSize: 15, lineHeight: 1.7 }}>
              We don't sell you a platform and leave. We architect the identity controls your environment actually needs — then transfer operational ownership back to your team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {VALUE_ADDS.map((v, i) => (
              <ValueCard key={i} item={v} index={i} />
            ))}
          </div>

          {/* Platforms */}
          <div className="mt-14 text-center">
            <p className="text-slate-500 mb-5" style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.05em" }}>PLATFORMS WE WORK WITH</p>
            <div className="flex flex-wrap justify-center gap-6 items-center">
              {PLATFORMS.map(p => (
                <img key={p.name} src={p.logo} alt={p.name} className="h-7 sm:h-8 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        ref={ctaRef}
        className="py-16 sm:py-20 text-center"
        style={{ background: "linear-gradient(155deg, #1e293b 0%, #334155 60%, #1e3a5f 100%)" }}
      >
        <div
          className="max-w-3xl mx-auto px-5"
          style={{
            opacity: ctaVis ? 1 : 0,
            transform: ctaVis ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <h2 className="text-white mb-4" style={{ fontSize: "clamp(24px, 4vw, 34px)", fontWeight: 700, letterSpacing: "-0.02em" }}>
            How long since your last IAM architecture review?
          </h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto" style={{ fontSize: 15, lineHeight: 1.7 }}>
            We'll assess your identity posture, map your gaps, and show you exactly what needs to change. No pitch decks. No sales pressure. Just identity expertise.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-white px-7 py-3.5 rounded-lg transition-all"
            style={{ background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)", fontSize: 15, fontWeight: 600 }}
          >
            Book a free assessment
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </Link>
          <p className="text-slate-500 mt-4" style={{ fontSize: 12 }}>Typical engagement: 6-10 weeks · No vendor lock-in · Full knowledge transfer</p>
        </div>
      </section>
    </div>
  );
}

function PainCard({ pain, index }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="rounded-xl p-6 flex flex-col"
      style={{
        background: hov ? "#fff" : "#f8fafc",
        border: `1.5px solid ${hov ? "#2563eb" : "#e2e8f0"}`,
        boxShadow: hov ? "0 8px 24px rgba(37,99,235,0.12)" : "0 1px 3px rgba(15,23,42,0.04)",
        transform: hov ? "translateY(-2px)" : "translateY(0)",
        transition: "all 0.3s ease",
      }}
    >
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

function ValueCard({ item, index }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="rounded-xl p-5 flex flex-col"
      style={{
        background: "#fff",
        border: `1.5px solid ${hov ? "#2563eb" : "#e2e8f0"}`,
        boxShadow: hov ? "0 8px 24px rgba(37,99,235,0.1)" : "0 1px 2px rgba(15,23,42,0.04)",
        transform: hov ? "translateY(-2px)" : "translateY(0)",
        transition: "all 0.3s ease",
      }}
    >
      <div className="w-8 h-8 rounded-md flex items-center justify-center mb-3" style={{ background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)" }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <h3 className="text-slate-900 mb-1.5" style={{ fontSize: 15, fontWeight: 700 }}>{item.title}</h3>
      <p className="text-slate-600" style={{ fontSize: 13, lineHeight: 1.6 }}>{item.desc}</p>
    </div>
  );
}
