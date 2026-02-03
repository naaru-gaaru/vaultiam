import { Link } from "react-router-dom";

export default function AIWorkloadIdentitiesCase() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Inter', system-ui, sans-serif", background: "#fff" }}>

      {/* hero */}
      <div className="bg-slate-50 border-b border-slate-200" style={{ paddingTop: 96, paddingBottom: 48 }}>
        <div className="max-w-4xl mx-auto px-5">
          {/* breadcrumb */}
          <div className="flex items-center gap-2 text-[13px] text-slate-500 mb-6">
            <Link to="/customer-stories" className="hover:text-blue-600 transition-colors">Customer Stories</Link>
            <span>/</span>
            <span className="text-slate-900">AI Workload Identities</span>
          </div>

          {/* sector badge */}
          <div className="inline-block text-[11px] font-600 text-blue-600 uppercase tracking-wider bg-blue-50 px-3 py-1.5 rounded-md mb-4" style={{ fontWeight: 600 }}>
            Healthcare / HealthTech
          </div>

          <h1 className="text-slate-900 mb-4" style={{ fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.15 }}>
            Securing AI Workload Identities in Healthcare Using Microsoft Entra
          </h1>

          <p className="text-slate-600" style={{ fontSize: 16, lineHeight: 1.65, maxWidth: 640 }}>
            How a healthcare provider deployed real-time identity threat detection for diagnostic AI agents — protecting patient data while meeting HIPAA requirements without introducing new tooling.
          </p>

          {/* meta row */}
          <div className="flex flex-wrap gap-6 mt-8 pt-6 border-t border-slate-200">
            <div>
              <div className="text-[11px] font-600 text-slate-400 uppercase tracking-wider mb-1" style={{ fontWeight: 600 }}>Focus Areas</div>
              <div className="flex gap-2">
                {["IAM", "ITDR", "Non-Human Identities"].map(area => (
                  <span key={area} className="text-[12px] font-600 text-slate-700 bg-slate-100 px-2.5 py-1 rounded" style={{ fontWeight: 600 }}>{area}</span>
                ))}
              </div>
            </div>
            <div>
              <div className="text-[11px] font-600 text-slate-400 uppercase tracking-wider mb-1" style={{ fontWeight: 600 }}>Primary Risk</div>
              <div className="text-[13px] text-slate-700" style={{ fontWeight: 500 }}>AI agent abuse, indirect prompt injection, lateral movement</div>
            </div>
          </div>
        </div>
      </div>

      {/* content */}
      <div className="max-w-4xl mx-auto px-5 py-16">

        {/* challenge */}
        <section className="mb-16">
          <h2 className="text-slate-900 mb-4" style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em" }}>The Challenge</h2>
          <div className="prose prose-slate max-w-none" style={{ fontSize: 15, lineHeight: 1.75, color: "#475569" }}>
            <p>
              A healthcare provider deployed diagnostic AI agents that queried patient and imaging databases. These agents were governed as workload identities in Microsoft Entra but lacked real-time identity threat detection.
            </p>
            <p>
              The security team was concerned about:
            </p>
            <ul style={{ paddingLeft: 24, marginTop: 12 }}>
              <li><strong>Indirect prompt injection</strong> causing agents to request unauthorized records</li>
              <li><strong>Lateral movement</strong> if an AI identity was manipulated</li>
              <li><strong>Audit exposure under HIPAA</strong> due to uncontrolled access paths</li>
            </ul>
          </div>
        </section>

        {/* engagement model */}
        <section className="mb-16 bg-blue-50 rounded-xl p-6 border border-blue-100">
          <div className="flex items-start gap-3 mb-3">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600" style={{ marginTop: 2 }}>
              <path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
            </svg>
            <div>
              <h3 className="text-slate-900 mb-1" style={{ fontSize: 16, fontWeight: 600 }}>VaultIAM Engagement Model</h3>
              <p className="text-slate-600" style={{ fontSize: 14 }}>Short-term, focused engagement with optional operational follow-on.</p>
            </div>
          </div>
          <div className="text-slate-700" style={{ fontSize: 14, lineHeight: 1.6 }}>
            VaultIAM was engaged to:
            <ul style={{ paddingLeft: 20, marginTop: 8 }}>
              <li>Threat-model AI agents as non-human identities</li>
              <li>Validate whether existing Microsoft E5 controls were sufficient</li>
              <li>Implement identity-level detection without introducing new tooling</li>
            </ul>
          </div>
        </section>

        {/* what we did */}
        <section className="mb-16">
          <h2 className="text-slate-900 mb-4" style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em" }}>What VaultIAM Did</h2>
          <div className="grid gap-4">
            {[
              { num: "01", text: "Classified AI agents as workload identities in Microsoft Entra" },
              { num: "02", text: "Enabled Microsoft Entra ID Protection policies tuned for non-human behavior" },
              { num: "03", text: "Defined "behavioral baselines" for agent access patterns" },
              { num: "04", text: "Integrated Microsoft Purview to enforce data-level access controls even if identity trust degraded" },
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

        {/* stack */}
        <section className="mb-16">
          <h2 className="text-slate-900 mb-4" style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em" }}>The Stack</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { name: "Microsoft Entra ID", desc: "Workload Identities" },
              { name: "Entra ID Protection", desc: "ITDR" },
              { name: "Microsoft Purview", desc: "Data governance" },
            ].map(tool => (
              <div key={tool.name} className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                <div className="text-slate-900 mb-1" style={{ fontSize: 14, fontWeight: 600 }}>{tool.name}</div>
                <div className="text-slate-500" style={{ fontSize: 12 }}>{tool.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* outcome */}
        <section className="mb-16">
          <h2 className="text-slate-900 mb-4" style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em" }}>Outcome & Impact</h2>
          <div className="space-y-3">
            {[
              "Real-time detection of anomalous AI behavior ("vibe-shift" events)",
              "Zero standing access to sensitive patient data",
              "Demonstrable HIPAA-aligned access controls for audits",
            ].map(outcome => (
              <div key={outcome} className="flex gap-3 items-start">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 flex-shrink-0" style={{ marginTop: 2 }}>
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span className="text-slate-700" style={{ fontSize: 14.5, lineHeight: 1.6 }}>{outcome}</span>
              </div>
            ))}
          </div>
        </section>

        {/* compliance value */}
        <section className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-8 border border-slate-200">
          <h2 className="text-slate-900 mb-4" style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.02em" }}>Compliance Value</h2>
          <div className="space-y-3">
            {[
              { title: "HIPAA Safeguards", text: "Strengthened access controls and audit trails for AI workloads accessing PHI" },
              { title: "Identity Governance Evidence", text: "Clear audit evidence of workload identity management for regulatory reviews" },
              { title: "Reduced Tooling Complexity", text: "Achieved ITDR capabilities without introducing new security products" },
            ].map(item => (
              <div key={item.title}>
                <div className="text-slate-900 mb-1" style={{ fontSize: 14, fontWeight: 600 }}>{item.title}</div>
                <div className="text-slate-600" style={{ fontSize: 13.5, lineHeight: 1.6 }}>{item.text}</div>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* CTA footer */}
      <div className="bg-slate-900 text-white" style={{ padding: "48px 20px" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="mb-3" style={{ fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em" }}>Ready to secure your AI workloads?</h3>
          <p className="text-slate-400 mb-6" style={{ fontSize: 14.5, maxWidth: 480, margin: "0 auto 24px" }}>
            Book a free identity risk assessment to discuss your non-human identity challenges.
          </p>
          <div className="flex gap-3 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg"
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
