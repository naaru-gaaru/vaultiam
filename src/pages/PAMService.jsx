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
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>),
    title: "Standing privileges are your biggest untracked risk",
    detail: "Your DBAs have permanent root access. Your DevOps team has standing admin on production Kubernetes clusters. Your cloud engineers have persistent write access to IAM policies. These credentials sit idle 95% of the time but are exploitable 100% of the time. Every standing privilege is a pre-positioned lateral movement path that attackers don't have to create — just discover.",
    stat: "74%",
    statLabel: "of breaches involve privilege abuse",
  },
  {
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>),
    title: "Shared service accounts have no accountability chain",
    detail: "Fifteen people know the password to 'svc-prod-deploy.' When something breaks at 2am, you can't tell who used that credential, what they changed, or whether the activity was authorized. Shared accounts aren't just an audit problem — they're a forensic dead end during incident response. And they're growing: CI/CD pipelines, Terraform runners, and monitoring tools all create service accounts that nobody owns.",
    stat: "5x",
    statLabel: "service accounts vs. human users",
  },
  {
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>),
    title: "Secrets sprawl across repos, configs, and Slack messages",
    detail: "API keys hardcoded in Dockerfiles. Database passwords in .env files committed to Git. Cloud credentials pasted in Slack threads for 'quick' troubleshooting. Your secrets management tool covers maybe 30% of actual secrets — the rest live in places you can't scan, can't rotate, and can't revoke. A single leaked key in a public repo can compromise your entire cloud environment in minutes.",
    stat: "10M+",
    statLabel: "secrets exposed on GitHub yearly",
  },
  {
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>),
    title: "Break-glass access has no glass to break",
    detail: "When production goes down, engineers bypass PAM entirely because your emergency access workflow takes too long. They use shared credentials, personal admin accounts, or 'temporary' access grants that never get revoked. You have no break-glass procedure that's both fast enough for real emergencies and auditable enough for compliance. The result: your most critical access events have the least oversight.",
    stat: "68%",
    statLabel: "of orgs lack formal break-glass",
  },
];

const PLATFORMS = [
  { name: "CyberArk", logo: "/tools/cyberark.svg" },
  { name: "HashiCorp Vault", logo: "/tools/hashicorp.svg" },
  { name: "AWS IAM", logo: "/tools/aws.svg" },
  { name: "Azure AD", logo: "/tools/azure.svg" },
  { name: "Microsoft Entra", logo: "/tools/entra.svg" },
];

const VALUE_ADDS = [
  { title: "Just-in-Time Privilege Provisioning", desc: "We replace standing admin access with dynamic, short-lived credentials issued on-demand. Engineers request access, get approval, and receive scoped privileges that automatically expire — typically within 15 minutes." },
  { title: "Secrets Centralization & Rotation", desc: "We discover secrets scattered across repos, configs, and cloud services — then migrate them to a centralized vault with automated rotation. No more hardcoded credentials in source code." },
  { title: "Service Account Governance", desc: "We inventory every service account and API key, assign ownership, implement credential rotation policies, and create audit trails that tie every action to an accountable identity." },
  { title: "Session Recording & Forensics", desc: "Full keystroke and command logging for privileged sessions. Every SSH session, RDP connection, and cloud console action is recorded, indexed, and searchable for incident response and compliance." },
  { title: "Break-Glass Protocol Design", desc: "Auditable emergency access that works in real incidents. We design fast-path workflows with multi-party approval, automatic time-boxing, and complete session recording so emergency access doesn't mean unmonitored access." },
  { title: "Zero Standing Privilege Architecture", desc: "We design your entire privileged access model around zero-trust: no persistent admin access anywhere. Every elevation is just-in-time, just-enough, and fully logged. Audit-ready from day one." },
];

export default function PAMService() {
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
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            CORE CAPABILITY
          </div>
          <h1 className="text-white mb-5" style={{ fontSize: "clamp(32px, 6vw, 52px)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            Privileged Access<br />Management <span style={{ color: "#60a5fa" }}>(PAM)</span>
          </h1>
          <p className="text-slate-300 max-w-2xl mb-8" style={{ fontSize: "clamp(15px, 2vw, 17px)", lineHeight: 1.7 }}>
            Privileged credentials are the master keys to your infrastructure. We eliminate standing privileges, vault every secret, and ensure that every admin action is just-in-time, scoped, recorded, and revocable — across cloud, on-prem, and DevOps pipelines.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-lg transition-all" style={{ background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)", fontSize: 14, fontWeight: 600 }}>
              Book a free PAM assessment
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
            <Link to="/customer-stories/jit-privileged-access" className="inline-flex items-center gap-2 text-blue-300 px-6 py-3 rounded-lg border border-blue-400/30 hover:bg-blue-400/10 transition-all" style={{ fontSize: 14, fontWeight: 500 }}>
              See PAM case study
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
              Why privileged access is still your weakest link
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto" style={{ fontSize: 15, lineHeight: 1.7 }}>
              You bought a PAM tool. But you didn't solve the PAM problem. These are the gaps we find in every engagement — and attackers exploit in every breach.
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
              How VaultIAM eliminates privileged risk
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto" style={{ fontSize: 15, lineHeight: 1.7 }}>
              We don't just configure your PAM tool. We redesign how privileged access works across your entire environment — from cloud consoles to database servers to CI/CD pipelines.
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
            How many standing admin accounts exist in your environment right now?
          </h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto" style={{ fontSize: 15, lineHeight: 1.7 }}>
            We'll discover every privileged credential, service account, and embedded secret — then show you the path to zero standing privilege. No pitch decks. Just expertise.
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
