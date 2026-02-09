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
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>),
    title: "Your SIEM sees network events — not identity-layer attacks",
    detail: "Traditional SIEMs correlate firewall logs, endpoint alerts, and network anomalies. But identity-based attacks — password spraying from residential proxies, token theft via AiTM phishing, OAuth consent grant abuse — don't trigger network signatures. Attackers authenticate with valid credentials, move laterally using legitimate access, and exfiltrate data through authorized channels. Your SOC doesn't see it because the tools aren't watching the identity plane.",
    stat: "204 days",
    statLabel: "avg. dwell time for credential theft",
  },
  {
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>),
    title: "Non-human identities are your largest blind spot",
    detail: "You monitor your 5,000 employees' logins. But what about the 720,000 service accounts, API keys, OAuth tokens, and automation credentials? NHIs outnumber human identities 144:1 and 97% are over-privileged. When a compromised API key starts making anomalous calls at 3am, nobody gets an alert because nobody built detection rules for machine identity behavior. This is where supply chain attacks enter.",
    stat: "144:1",
    statLabel: "NHI to human identity ratio",
  },
  {
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>),
    title: "Lateral movement goes undetected for months",
    detail: "An attacker compromises one credential through phishing. Then they enumerate group memberships, discover shared mailboxes, access cloud storage with inherited permissions, and escalate to admin roles — all using legitimate identity features. Each hop looks like normal user activity. Without behavioral baselines per identity, your detection tools can't distinguish a compromised account from a busy employee.",
    stat: "80%",
    statLabel: "of breaches involve lateral movement",
  },
  {
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>),
    title: "Incident response can't answer 'what did they access?'",
    detail: "When a credential is confirmed compromised, the clock starts. But your identity logs are fragmented across Okta, Entra ID, AWS CloudTrail, and SaaS audit logs. Building a timeline of what the attacker accessed, what data they reached, and what persistence mechanisms they planted takes days — if you can reconstruct it at all. By then, the attacker has pivoted to credentials you haven't discovered yet.",
    stat: "72 hrs",
    statLabel: "avg. IR timeline reconstruction",
  },
];

const PLATFORMS = [
  { name: "Microsoft Entra", logo: "/tools/entra.svg" },
  { name: "CyberArk", logo: "/tools/cyberark.svg" },
  { name: "Okta", logo: "/tools/okta.svg" },
  { name: "Wiz", logo: "/tools/wiz.svg" },
  { name: "AWS IAM", logo: "/tools/aws.svg" },
];

const VALUE_ADDS = [
  { title: "Identity Telemetry Aggregation", desc: "We unify authentication logs, authorization events, and privilege changes from every identity provider into a single correlation engine — giving your SOC full visibility across the identity plane." },
  { title: "Behavioral Baseline Detection", desc: "Per-identity behavioral models that detect anomalies in login patterns, resource access, privilege usage, and session behavior. Not rule-based alerts — adaptive baselines that evolve with actual usage." },
  { title: "NHI Threat Monitoring", desc: "Purpose-built detection for non-human identities: anomalous API call patterns, service account privilege escalation, OAuth token abuse, and automation credential misuse that traditional tools miss entirely." },
  { title: "Automated Threat Response", desc: "When a compromised identity is detected, automated containment kicks in: session revocation, credential rotation, access scope reduction, and SOC notification — in seconds, not hours." },
  { title: "Identity Forensics Toolkit", desc: "Pre-built investigation workflows that reconstruct attacker timelines across all identity providers. See exactly what a compromised credential accessed, modified, and attempted — across every connected system." },
  { title: "Compromise Assessment", desc: "We proactively hunt for indicators of identity compromise in your environment: token theft artifacts, consent grant backdoors, shadow admin accounts, and dormant persistence mechanisms." },
];

export default function ITDRService() {
  const [heroRef, heroVis] = useReveal(0.05);
  const [painRef, painVis] = useReveal(0.1);
  const [valueRef, valueVis] = useReveal(0.1);
  const [ctaRef, ctaVis] = useReveal(0.1);

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* Hero */}
      <section ref={heroRef} className="relative overflow-hidden" style={{ background: "linear-gradient(155deg, #1e293b 0%, #334155 60%, #1e3a5f 100%)", padding: "clamp(100px, 15vw, 160px) 0 clamp(60px, 10vw, 96px)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 75% 30%, rgba(37,99,235,0.15) 0%, transparent 68%)" }} />
        <div className="max-w-5xl mx-auto px-5 relative z-10" style={{ opacity: heroVis ? 1 : 0, transform: heroVis ? "translateY(0)" : "translateY(30px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}>
          <Link to="/capabilities" className="inline-flex items-center gap-1.5 text-blue-400 mb-6 hover:text-blue-300 transition-colors" style={{ fontSize: 13, fontWeight: 500 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
            All Capabilities
          </Link>
          <div className="inline-flex items-center gap-2 bg-blue-600/20 text-blue-300 px-3 py-1.5 rounded-full mb-5" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            CORE CAPABILITY
          </div>
          <h1 className="text-white mb-5" style={{ fontSize: "clamp(32px, 6vw, 52px)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            Identity Threat Detection<br />& Response <span style={{ color: "#60a5fa" }}>(ITDR)</span>
          </h1>
          <p className="text-slate-300 max-w-2xl mb-8" style={{ fontSize: "clamp(15px, 2vw, 17px)", lineHeight: 1.7 }}>
            Attackers don't hack in anymore — they log in. ITDR is the missing detection layer between your identity providers and your SOC. We build the behavioral baselines, telemetry pipelines, and automated response capabilities that catch identity-based attacks your SIEM never sees.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-lg transition-all" style={{ background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)", fontSize: 14, fontWeight: 600 }}>
              Book a free ITDR assessment
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
            <Link to="/customer-stories/shadow-ai-api-keys" className="inline-flex items-center gap-2 text-blue-300 px-6 py-3 rounded-lg border border-blue-400/30 hover:bg-blue-400/10 transition-all" style={{ fontSize: 14, fontWeight: 500 }}>
              See ITDR case study
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
              Why identity attacks bypass your current defenses
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto" style={{ fontSize: 15, lineHeight: 1.7 }}>
              Your SIEM watches the network. Your EDR watches endpoints. Nobody is watching the identity plane — and that's exactly where modern attacks live.
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
              How VaultIAM detects identity-layer threats
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto" style={{ fontSize: 15, lineHeight: 1.7 }}>
              We build the detection and response capabilities your security stack is missing — purpose-built for the identity plane, covering both human and non-human identities.
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
            Would you know if a credential was compromised right now?
          </h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto" style={{ fontSize: 15, lineHeight: 1.7 }}>
            We'll assess your identity detection coverage, find blind spots in your telemetry, and show you exactly which attack paths are invisible to your current stack.
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
