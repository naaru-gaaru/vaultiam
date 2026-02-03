import { Link } from "react-router-dom";

export default function SyntheticIdentityFraudCase() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Inter', system-ui, sans-serif", background: "#fff" }}>

      <div className="bg-slate-50 border-b border-slate-200" style={{ paddingTop: 96, paddingBottom: 48 }}>
        <div className="max-w-4xl mx-auto px-5">
          <div className="flex items-center gap-2 text-[13px] text-slate-500 mb-6">
            <Link to="/customer-stories" className="hover:text-blue-600 transition-colors">Customer Stories</Link>
            <span>/</span>
            <span className="text-slate-900">Synthetic Identity Fraud</span>
          </div>

          <div className="inline-block text-[11px] font-600 text-blue-600 uppercase tracking-wider bg-blue-50 px-3 py-1.5 rounded-md mb-4" style={{ fontWeight: 600 }}>
            FinTech / Neobank
          </div>

          <h1 className="text-slate-900 mb-4" style={{ fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.15 }}>
            Preventing Synthetic Identity Fraud in FinTech CIAM
          </h1>

          <p className="text-slate-600" style={{ fontSize: 16, lineHeight: 1.65, maxWidth: 640 }}>
            How a digital bank integrated AI-based identity verification to stop deepfake-driven fraud while preserving customer experience.
          </p>

          <div className="flex flex-wrap gap-6 mt-8 pt-6 border-t border-slate-200">
            <div>
              <div className="text-[11px] font-600 text-slate-400 uppercase tracking-wider mb-1" style={{ fontWeight: 600 }}>Focus Areas</div>
              <div className="flex gap-2">
                {["CIAM", "Fraud Prevention", "Identity Verification"].map(area => (
                  <span key={area} className="text-[12px] font-600 text-slate-700 bg-slate-100 px-2.5 py-1 rounded" style={{ fontWeight: 600 }}>{area}</span>
                ))}
              </div>
            </div>
            <div>
              <div className="text-[11px] font-600 text-slate-400 uppercase tracking-wider mb-1" style={{ fontWeight: 600 }}>Primary Risk</div>
              <div className="text-[13px] text-slate-700" style={{ fontWeight: 500 }}>Deepfake-driven synthetic identity onboarding</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-b border-slate-100" style={{ padding: "48px 20px" }}>
        <div className="max-w-4xl mx-auto px-5">
          <div className="relative flex items-start justify-between max-w-3xl mx-auto">
            <div className="absolute left-0 right-0 top-[32px] h-[2px] bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600" style={{ zIndex: 0 }} />

            {[
              { 
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>,
                label: "Challenge",
                desc: "Deepfake fraud bypass"
              },
              { 
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z"/><path d="m9 12 2 2 4-4"/></svg>,
                label: "Solution",
                desc: "Socure + Okta integration"
              },
              { 
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
                label: "Outcome",
                desc: "Fraud reduction + UX"
              },
            ].map((phase, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center" style={{ flex: "0 0 auto", maxWidth: 140 }}>
                <div
                  className="w-16 h-16 rounded-full bg-white border-2 border-blue-600 flex items-center justify-center mb-3 text-blue-600"
                  style={{ boxShadow: "0 2px 12px rgba(37,99,235,0.2)" }}
                >
                  {phase.icon}
                </div>
                <div className="text-slate-900 mb-1 text-center" style={{ fontSize: 15, fontWeight: 600 }}>{phase.label}</div>
                <div className="text-slate-500 text-center" style={{ fontSize: 12 }}>{phase.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-5 py-16">

        <section className="mb-16">
          <h2 className="text-slate-900 mb-4" style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em" }}>The Challenge</h2>
          <div className="prose prose-slate max-w-none" style={{ fontSize: 15, lineHeight: 1.75, color: "#475569" }}>
            <p>
              A digital bank using Okta Customer Identity Cloud experienced increased account fraud driven by:
            </p>
            <ul style={{ paddingLeft: 24, marginTop: 12 }}>
              <li><strong>AI-generated deepfake videos</strong> passing liveness checks</li>
              <li><strong>Synthetic identities</strong> bypassing basic KYC verification</li>
              <li><strong>High false positives</strong> impacting legitimate customer experience</li>
            </ul>
            <p>
              Okta handled authentication well but lacked advanced liveness detection and fraud intelligence.
            </p>
          </div>
        </section>

        <section className="mb-16 bg-blue-50 rounded-xl p-6 border border-blue-100">
          <div className="flex items-start gap-3 mb-3">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600" style={{ marginTop: 2 }}>
              <path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
            </svg>
            <div>
              <h3 className="text-slate-900 mb-1" style={{ fontSize: 16, fontWeight: 600 }}>VaultIAM Engagement Model</h3>
              <p className="text-slate-600" style={{ fontSize: 14 }}>Targeted integration engagement with knowledge transfer to internal teams.</p>
            </div>
          </div>
          <div className="text-slate-700" style={{ fontSize: 14, lineHeight: 1.6 }}>
            VaultIAM was engaged to:
            <ul style={{ paddingLeft: 20, marginTop: 8 }}>
              <li>Strengthen onboarding security without replacing Okta</li>
              <li>Introduce fraud intelligence selectively</li>
              <li>Preserve user experience</li>
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-slate-900 mb-4" style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em" }}>What VaultIAM Did</h2>
          <div className="grid gap-4">
            {[
              { num: "01", text: "Integrated Socure as a dedicated identity verification and liveness layer" },
              { num: "02", text: "Orchestrated decisions using Okta Actions for conditional fraud checks" },
              { num: "03", text: "Designed conditional flows where high-risk users triggered enhanced verification" },
            ].map(step => (
              <div key={step.num} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center" style={{ fontSize: 13, fontWeight: 600 }}>
                  {step.num}
                </div>
                <p className="text-slate-700 flex-1" style={{ fontSize: 14.5, lineHeight: 1.6, paddingTop: 8 }}>{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-slate-900 mb-4" style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em" }}>The Stack</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { name: "Okta Customer Identity", desc: "Auth0 CIAM", logo: "/tools/okta.svg" },
              { name: "Socure", desc: "Identity verification", logo: "/tools/okta.svg" },
              { name: "Okta Actions", desc: "Orchestration", logo: "/tools/okta.svg" },
            ].map(tool => (
              <div key={tool.name} className="bg-slate-50 rounded-lg p-4 border border-slate-200 flex flex-col items-center text-center">
                <img src={tool.logo} alt={tool.name} className="h-8 w-auto mb-3 opacity-70" style={{ mixBlendMode: "darken" }} />
                <div className="text-slate-900 mb-1" style={{ fontSize: 14, fontWeight: 600 }}>{tool.name}</div>
                <div className="text-slate-500" style={{ fontSize: 12 }}>{tool.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-600">
          <div className="flex items-start gap-3 mb-4">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 flex-shrink-0" style={{ marginTop: 2 }}>
              <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
            </svg>
            <h3 className="text-slate-900" style={{ fontSize: 18, fontWeight: 700 }}>Key Outcomes</h3>
          </div>
          <div className="space-y-3">
            {[
              "Significant reduction in synthetic identity fraud",
              "Faster onboarding for legitimate users",
              "Modular CIAM architecture aligned with FinTech realities",
            ].map(outcome => (
              <div key={outcome} className="flex gap-3 items-start">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 flex-shrink-0" style={{ marginTop: 2 }}>
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span className="text-slate-700" style={{ fontSize: 14.5, lineHeight: 1.6, fontWeight: 500 }}>{outcome}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-50 rounded-xl p-8 border border-slate-200">
          <h2 className="text-slate-900 mb-4" style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.02em" }}>Compliance Value</h2>
          <div className="space-y-3">
            {[
              { title: "KYC / AML Alignment", text: "Improved compliance with Know Your Customer and Anti-Money Laundering requirements" },
              { title: "SOC 2 Evidence", text: "Stronger audit trails for identity verification and fraud prevention controls" },
              { title: "Risk-Based Authentication", text: "Reduced fraud risk without degrading user experience" },
            ].map(item => (
              <div key={item.title}>
                <div className="text-slate-900 mb-1" style={{ fontSize: 14, fontWeight: 600 }}>{item.title}</div>
                <div className="text-slate-600" style={{ fontSize: 13.5, lineHeight: 1.6 }}>{item.text}</div>
              </div>
            ))}
          </div>
        </section>

      </div>

      <div className="relative overflow-hidden" style={{ background: "linear-gradient(155deg, #1e293b 0%, #334155 100%)", padding: "48px 20px" }}>
        <div className="absolute" style={{ top: -60, right: -100, width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle, rgba(37,99,235,0.13) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h3 className="text-white mb-3" style={{ fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em" }}>Strengthen your CIAM defenses?</h3>
          <p className="text-slate-400 mb-6" style={{ fontSize: 14.5, maxWidth: 480, margin: "0 auto 24px" }}>
            Book a free identity risk assessment to discuss your fraud prevention strategy.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-white rounded-lg"
              style={{ fontSize: 14, fontWeight: 600, padding: "11px 24px", background: "linear-gradient(135deg, #2563eb, #1d4ed8)", transition: "box-shadow 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = "0 4px 18px rgba(37,99,235,0.4)"}
              onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}
            >
              Book assessment
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
            <Link
              to="/customer-stories"
              className="inline-flex items-center gap-2 rounded-lg"
              style={{ fontSize: 14, fontWeight: 600, padding: "11px 24px", border: "1px solid rgba(148,163,184,0.3)", color: "#cbd5e1", background: "rgba(255,255,255,0.05)", transition: "border-color 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "#2563eb"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(148,163,184,0.3)"}
            >
              View all stories
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}
