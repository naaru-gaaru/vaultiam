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

function IdentityMeshGraphic() {
  return (
    <svg width="260" height="260" viewBox="0 0 260 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-25">
      {/* Central hub node */}
      <circle cx="130" cy="130" r="8" fill="#1e40af" opacity="0.8" />
      
      {/* Inner ring nodes (6 nodes) */}
      <circle cx="130" cy="70" r="5" fill="#2563eb" opacity="0.6" />
      <circle cx="182" cy="98" r="5" fill="#2563eb" opacity="0.6" />
      <circle cx="182" cy="162" r="5" fill="#2563eb" opacity="0.6" />
      <circle cx="130" cy="190" r="5" fill="#2563eb" opacity="0.6" />
      <circle cx="78" cy="162" r="5" fill="#2563eb" opacity="0.6" />
      <circle cx="78" cy="98" r="5" fill="#2563eb" opacity="0.6" />
      
      {/* Outer ring nodes (12 nodes) */}
      <circle cx="130" cy="30" r="3" fill="#3b82f6" opacity="0.4" />
      <circle cx="165" cy="42" r="3" fill="#3b82f6" opacity="0.4" />
      <circle cx="195" cy="65" r="3" fill="#3b82f6" opacity="0.4" />
      <circle cx="218" cy="95" r="3" fill="#3b82f6" opacity="0.4" />
      <circle cx="230" cy="130" r="3" fill="#3b82f6" opacity="0.4" />
      <circle cx="218" cy="165" r="3" fill="#3b82f6" opacity="0.4" />
      <circle cx="195" cy="195" r="3" fill="#3b82f6" opacity="0.4" />
      <circle cx="165" cy="218" r="3" fill="#3b82f6" opacity="0.4" />
      <circle cx="130" cy="230" r="3" fill="#3b82f6" opacity="0.4" />
      <circle cx="95" cy="218" r="3" fill="#3b82f6" opacity="0.4" />
      <circle cx="65" cy="195" r="3" fill="#3b82f6" opacity="0.4" />
      <circle cx="42" cy="165" r="3" fill="#3b82f6" opacity="0.4" />
      <circle cx="30" cy="130" r="3" fill="#3b82f6" opacity="0.4" />
      <circle cx="42" cy="95" r="3" fill="#3b82f6" opacity="0.4" />
      <circle cx="65" cy="65" r="3" fill="#3b82f6" opacity="0.4" />
      <circle cx="95" cy="42" r="3" fill="#3b82f6" opacity="0.4" />
      
      {/* Central to inner ring connections */}
      <line x1="130" y1="130" x2="130" y2="70" stroke="#3b82f6" strokeWidth="1" opacity="0.3" />
      <line x1="130" y1="130" x2="182" y2="98" stroke="#3b82f6" strokeWidth="1" opacity="0.3" />
      <line x1="130" y1="130" x2="182" y2="162" stroke="#3b82f6" strokeWidth="1" opacity="0.3" />
      <line x1="130" y1="130" x2="130" y2="190" stroke="#3b82f6" strokeWidth="1" opacity="0.3" />
      <line x1="130" y1="130" x2="78" y2="162" stroke="#3b82f6" strokeWidth="1" opacity="0.3" />
      <line x1="130" y1="130" x2="78" y2="98" stroke="#3b82f6" strokeWidth="1" opacity="0.3" />
      
      {/* Inner ring to outer ring connections (select connections for cleaner look) */}
      <line x1="130" y1="70" x2="130" y2="30" stroke="#3b82f6" strokeWidth="0.5" opacity="0.2" />
      <line x1="130" y1="70" x2="165" y2="42" stroke="#3b82f6" strokeWidth="0.5" opacity="0.2" />
      <line x1="130" y1="70" x2="95" y2="42" stroke="#3b82f6" strokeWidth="0.5" opacity="0.2" />
      
      <line x1="182" y1="98" x2="218" y2="95" stroke="#3b82f6" strokeWidth="0.5" opacity="0.2" />
      <line x1="182" y1="98" x2="195" y2="65" stroke="#3b82f6" strokeWidth="0.5" opacity="0.2" />
      
      <line x1="182" y1="162" x2="218" y2="165" stroke="#3b82f6" strokeWidth="0.5" opacity="0.2" />
      <line x1="182" y1="162" x2="230" y2="130" stroke="#3b82f6" strokeWidth="0.5" opacity="0.2" />
      
      <line x1="130" y1="190" x2="130" y2="230" stroke="#3b82f6" strokeWidth="0.5" opacity="0.2" />
      <line x1="130" y1="190" x2="165" y2="218" stroke="#3b82f6" strokeWidth="0.5" opacity="0.2" />
      <line x1="130" y1="190" x2="95" y2="218" stroke="#3b82f6" strokeWidth="0.5" opacity="0.2" />
      
      <line x1="78" y1="162" x2="42" y2="165" stroke="#3b82f6" strokeWidth="0.5" opacity="0.2" />
      <line x1="78" y1="162" x2="65" y2="195" stroke="#3b82f6" strokeWidth="0.5" opacity="0.2" />
      
      <line x1="78" y1="98" x2="42" y2="95" stroke="#3b82f6" strokeWidth="0.5" opacity="0.2" />
      <line x1="78" y1="98" x2="30" y2="130" stroke="#3b82f6" strokeWidth="0.5" opacity="0.2" />
      
      {/* Cross connections for network effect */}
      <line x1="182" y1="98" x2="182" y2="162" stroke="#3b82f6" strokeWidth="0.5" opacity="0.15" />
      <line x1="78" y1="98" x2="78" y2="162" stroke="#3b82f6" strokeWidth="0.5" opacity="0.15" />
      <line x1="130" y1="70" x2="182" y2="98" stroke="#3b82f6" strokeWidth="0.5" opacity="0.15" />
      <line x1="182" y1="98" x2="130" y2="70" stroke="#3b82f6" strokeWidth="0.5" opacity="0.15" />
      
      {/* Subtle glow circles */}
      <circle cx="130" cy="130" r="30" stroke="#3b82f6" strokeWidth="0.5" opacity="0.1" fill="none" />
      <circle cx="130" cy="130" r="45" stroke="#3b82f6" strokeWidth="0.5" opacity="0.05" fill="none" />
    </svg>
  );
}

const CAPABILITIES = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10H12V2z"/><path d="M12 12v10a10 10 0 0 0 10-10H12z"/>
      </svg>
    ),
    title: "Identity & Access Management (IAM)",
    summary: "Enterprise-grade identity governance, role-based access control, and workforce authentication designed for regulated industries.",
    outcomes: [
      { label: "Zero trust architecture design", url: "/capabilities/iam" },
      { label: "Directory integration & SSO deployment", url: "/capabilities/iam" },
      { label: "Lifecycle automation & JML processes", url: "/capabilities/iam" },
    ],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/>
      </svg>
    ),
    title: "Customer Identity & Access Management (CIAM)",
    summary: "Fraud-resistant authentication, secure onboarding, and customer identity platforms built for FinTech and digital banking.",
    outcomes: [
      { label: "Deepfake & synthetic identity defense", url: "/capabilities/ciam" },
      { label: "Adaptive MFA & risk-based auth", url: "/capabilities/ciam" },
      { label: "Identity verification & KYC integration", url: "/capabilities/ciam" },
    ],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
    title: "Privileged Access Management (PAM)",
    summary: "Just-in-time access, secrets management, and session monitoring for cloud workloads, DevOps pipelines, and critical infrastructure.",
    outcomes: [
      { label: "Dynamic credential issuance & rotation", url: "/capabilities/pam" },
      { label: "Session recording & audit trails", url: "/capabilities/pam" },
      { label: "Break-glass access & emergency protocols", url: "/capabilities/pam" },
    ],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "Identity Threat Detection & Response (ITDR)",
    summary: "Real-time detection of identity-based attacks, anomalous behavior monitoring, and automated threat response for workload and human identities.",
    outcomes: [
      { label: "Behavioral baselines & anomaly detection", url: "/capabilities/itdr" },
      { label: "AI agent & non-human identity monitoring", url: "/capabilities/itdr" },
      { label: "Compromised credential remediation", url: "/capabilities/itdr" },
    ],
  },
];

const PLATFORMS = [
  { name: "Okta", logo: "/tools/okta.svg" },
  { name: "Microsoft Entra", logo: "/tools/entra.svg" },
  { name: "SailPoint", logo: "/tools/sailpoint.svg" },
  { name: "CyberArk", logo: "/tools/cyberark.svg" },
  { name: "Ping Identity", logo: "/tools/ping.svg" },
  { name: "AWS IAM", logo: "/tools/aws.svg" },
  { name: "Azure AD", logo: "/tools/azure.svg" },
  { name: "HashiCorp", logo: "/tools/hashicorp.svg" },
];

function CapabilityCard({ cap, idx }) {
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
        transform: vis ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.5s ease ${idx * 0.12}s, transform 0.5s ease ${idx * 0.12}s, box-shadow 0.3s, border-color 0.3s`,
        border: `1px solid ${hov ? "#2563eb" : "#e2e8f0"}`,
        boxShadow: hov ? "0 8px 28px rgba(37,99,235,0.18)" : "0 1px 3px rgba(15,23,42,0.06)",
        overflow: "hidden",
      }}
    >
      <div className="h-[3px] bg-gradient-to-r from-blue-600 to-blue-500" />
      
      <div className="p-6 flex flex-col flex-grow">
        <div
          className="w-11 h-11 rounded-lg flex items-center justify-center mb-4 transition-all duration-200"
          style={{
            background: hov ? "#eff6ff" : "#f1f5f9",
            color: hov ? "#1d4ed8" : "#475569",
          }}
        >
          {cap.icon}
        </div>

        <h3 className="text-slate-900 mb-2.5" style={{ fontSize: 17, fontWeight: 600, lineHeight: 1.3 }}>
          {cap.title}
        </h3>

        <p className="text-slate-600 mb-5" style={{ fontSize: 13.5, lineHeight: 1.6 }}>
          {cap.summary}
        </p>

        <div className="mt-auto">
          <div className="text-[11px] font-600 text-slate-400 uppercase tracking-wider mb-2.5" style={{ fontWeight: 600 }}>
            Key outcomes
          </div>
          <div className="flex flex-col gap-2">
            {cap.outcomes.map(outcome => (
              <Link
                key={outcome.label}
                to={outcome.url}
                className="flex items-center gap-2 text-slate-700 group/link"
                style={{ fontSize: 13, fontWeight: 500 }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 flex-shrink-0 transition-transform duration-200 group-hover/link:translate-x-0.5">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
                <span className="transition-colors duration-150 group-hover/link:text-blue-600">{outcome.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Capabilities() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Inter', system-ui, sans-serif", background: "#fff" }}>

      {/* hero sub-header with identity mesh */}
      <div
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(155deg, #1e293b 0%, #334155 60%, #1e3a4a 100%)", paddingTop: 104, paddingBottom: 64 }}
      >
        <div className="absolute" style={{ top: -100, right: -140, width: 460, height: 460, borderRadius: "50%", background: "radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 68%)", pointerEvents: "none" }} />
        <div className="absolute" style={{ bottom: -70, left: -60, width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
        
        {/* Identity mesh graphic - positioned right */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block">
          <IdentityMeshGraphic />
        </div>

        <div className="max-w-5xl mx-auto px-5 relative z-10">
          <h1 className="text-white" style={{ fontSize: "clamp(28px, 4.5vw, 42px)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.15, maxWidth: 580, marginBottom: 16 }}>
            IAM security services built for <span style={{ color: "#3b82f6" }}>identity-first</span> outcomes
          </h1>
          <p className="text-slate-400" style={{ fontSize: 15, maxWidth: 540, lineHeight: 1.7 }}>
            We architect, deploy, and operate the identity controls that protect FinTech and healthcare organizations across North America — without vendor lock-in or infrastructure bloat.
          </p>

          <div className="flex gap-10 flex-wrap mt-8 pt-6" style={{ borderTop: "1px solid rgba(148,163,184,0.2)" }}>
            <div className="text-center">
              <div className="text-white" style={{ fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em" }}>4</div>
              <div className="text-slate-400" style={{ fontSize: 12, fontWeight: 500, marginTop: 3 }}>Core services</div>
            </div>
            <div className="text-center">
              <div className="text-white" style={{ fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em" }}>15+ years</div>
              <div className="text-slate-400" style={{ fontSize: 12, fontWeight: 500, marginTop: 3 }}>Combined expertise</div>
            </div>
            <div className="text-center">
              <div className="text-white" style={{ fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em" }}>US & Canada</div>
              <div className="text-slate-400" style={{ fontSize: 12, fontWeight: 500, marginTop: 3 }}>Focus regions</div>
            </div>
          </div>
        </div>
      </div>

      {/* capabilities grid */}
      <section className="max-w-5xl mx-auto px-5" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {CAPABILITIES.map((cap, i) => (
            <CapabilityCard key={cap.title} cap={cap} idx={i} />
          ))}
        </div>
      </section>

      {/* compliance strip */}
      <section className="bg-slate-50 border-y border-slate-200" style={{ padding: "40px 20px" }}>
        <div className="max-w-5xl mx-auto px-5">
          <div className="text-center mb-6">
            <h3 className="text-slate-900 mb-2" style={{ fontSize: 20, fontWeight: 600 }}>
              Expertise across regulated frameworks
            </h3>
            <p className="text-slate-600" style={{ fontSize: 14, maxWidth: 560, margin: "0 auto" }}>
              Deep experience implementing identity controls that meet SOC 2, ISO 27001, HIPAA, PCI-DSS, GDPR, CCPA, and NIST CSF requirements
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {["SOC 2", "ISO 27001", "HIPAA", "PCI-DSS", "GDPR", "CCPA", "NIST CSF"].map(framework => (
              <span key={framework} className="text-[12px] font-600 text-white bg-slate-700 px-3.5 py-1.5 rounded-md" style={{ fontWeight: 600 }}>
                {framework}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* engagement model */}
      <section className="max-w-4xl mx-auto px-5" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="text-center mb-10">
          <h2 className="text-slate-900 mb-3" style={{ fontSize: 28, fontWeight: 700, letterSpacing: "-0.02em" }}>
            How we work
          </h2>
          <p className="text-slate-600" style={{ fontSize: 15, maxWidth: 560, margin: "0 auto", lineHeight: 1.65 }}>
            Short-term engagements focused on outcomes, not ongoing dependencies. We transfer knowledge and leave you with operational controls.
          </p>
        </div>

        <div className="relative flex items-center justify-center gap-6 max-w-3xl mx-auto" style={{ padding: "20px 0" }}>
          {[
            { num: "01", label: "Assess", desc: "Identity risk & gap analysis" },
            { num: "02", label: "Architect", desc: "Design & implementation" },
            { num: "03", label: "Operate", desc: "Transfer & optimization" },
          ].map((phase, i) => (
            <div key={phase.num} className="relative z-10 flex items-center" style={{ flex: "0 0 auto" }}>
              <div className="flex flex-col items-center">
                <div
                  className="w-16 h-16 rounded-lg bg-white border-2 border-blue-600 flex items-center justify-center mb-3"
                  style={{ boxShadow: "0 2px 12px rgba(37,99,235,0.2)" }}
                >
                  <span className="text-blue-600" style={{ fontSize: 15, fontWeight: 700 }}>{phase.num}</span>
                </div>
                <div className="text-slate-900 mb-1" style={{ fontSize: 15, fontWeight: 600 }}>{phase.label}</div>
                <div className="text-slate-500 text-center" style={{ fontSize: 12, maxWidth: 120 }}>{phase.desc}</div>
              </div>
              {i < 2 && (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mx-4" style={{ marginTop: -40 }}>
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/the-vaultiam-way"
            className="inline-flex items-center gap-2 text-blue-600 transition-colors duration-150"
            style={{ fontSize: 14, fontWeight: 600 }}
            onMouseEnter={e => e.currentTarget.style.color = "#1d4ed8"}
            onMouseLeave={e => e.currentTarget.style.color = "#2563eb"}
          >
            Learn the full methodology — The VaultIAM Way
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </Link>
        </div>
      </section>

      {/* platforms ticker with fade gradients */}
      <section className="bg-slate-50 border-y border-slate-200" style={{ padding: "56px 0" }}>
        <div className="max-w-5xl mx-auto px-5 mb-8 text-center">
          <h2 className="text-slate-900 mb-3" style={{ fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em" }}>
            Platform expertise
          </h2>
          <p className="text-slate-600" style={{ fontSize: 14.5, maxWidth: 520, margin: "0 auto", lineHeight: 1.65 }}>
            We design, deploy, and operate identity solutions across industry-leading platforms — selecting the right stack for your environment.
          </p>
        </div>

        <div
          className="relative overflow-hidden"
          style={{
            WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div
            className="flex items-center gap-12"
            style={{
              animation: "marquee 25s linear infinite",
              paddingLeft: "100%",
            }}
          >
            {[...PLATFORMS, ...PLATFORMS, ...PLATFORMS].map((platform, i) => (
              <div key={`${platform.name}-${i}`} className="flex-shrink-0">
                <img
                  src={platform.logo}
                  alt={platform.name}
                  className="h-10 w-auto opacity-60 hover:opacity-100 transition-opacity duration-200"
                  style={{ mixBlendMode: "darken" }}
                />
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-66.67%); }
          }
        `}</style>
      </section>

      {/* dark CTA footer */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(155deg, #1e293b 0%, #334155 100%)", padding: "64px 20px" }}>
        <div className="absolute" style={{ top: -60, right: -100, width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle, rgba(37,99,235,0.13) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <h2 className="text-white" style={{ fontSize: 27, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 10 }}>
            Start with a free identity risk assessment
          </h2>
          <p className="text-slate-400" style={{ fontSize: 14.5, marginBottom: 30, lineHeight: 1.65 }}>
            We'll map your current posture, identify gaps, and outline a clear path forward. No pitch deck, no pressure.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-white rounded-lg"
              style={{ fontSize: 14, fontWeight: 600, padding: "11px 24px", background: "linear-gradient(135deg, #2563eb, #1d4ed8)", boxShadow: "0 4px 16px rgba(37,99,235,0.35)", transition: "box-shadow 0.2s, transform 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 6px 22px rgba(37,99,235,0.45)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 4px 16px rgba(37,99,235,0.35)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              Book a free assessment
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
            <Link
              to="/assessment-guide"
              className="inline-flex items-center gap-2 rounded-lg"
              style={{ fontSize: 14, fontWeight: 600, padding: "11px 24px", border: "1px solid rgba(148,163,184,0.3)", color: "#cbd5e1", background: "rgba(255,255,255,0.05)", transition: "border-color 0.2s, background 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#2563eb"; e.currentTarget.style.background = "rgba(37,99,235,0.08)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(148,163,184,0.3)"; e.currentTarget.style.background = "rgba(255,255,255,0.05)"; }}
            >
              Download assessment guide
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
