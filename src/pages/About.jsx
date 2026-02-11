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

const BELIEFS = [
  {
    title: "Identity is the new perimeter",
    desc: "Firewalls protected networks. But your people, applications, and data aren't inside a network anymore — they're everywhere. The only control plane that spans cloud, on-prem, SaaS, and remote work is identity. We build security around that reality.",
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>),
  },
  {
    title: "Non-human identities can't be ignored",
    desc: "Machine identities — service accounts, API keys, automation credentials, AI agents — outnumber human users 144:1. Most are over-privileged, unmonitored, and never rotated. We treat NHIs with the same rigor as human identities, because attackers already do.",
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>),
  },
  {
    title: "Outcomes in weeks, not years",
    desc: "Multi-year transformation programs fail because environments change faster than plans. We deliver in 6-10 week sprints with measurable outcomes at each checkpoint. You see results before the first quarterly review.",
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>),
  },
  {
    title: "We leave you in control",
    desc: "Consultancies that create dependency aren't solving your problem — they're becoming your problem. Every engagement ends with full knowledge transfer, documented runbooks, and your team trained to operate independently. We're not building recurring revenue from your gaps.",
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>),
  },
];

const FACTS = [
  { stat: "50+", label: "Enterprises served" },
  { stat: "2M+", label: "Identities secured" },
  { stat: "0", label: "Compliance fines" },
  { stat: "100%", label: "Knowledge transfer" },
];

const SECTORS = [
  {
    title: "FinTech & Financial Services",
    desc: "Digital banks, payment processors, lending platforms, and insurance tech. We understand PCI-DSS, SOC 2, AML/KYC requirements, and the specific identity challenges of companies handling financial data at scale.",
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>),
  },
  {
    title: "Healthcare & HealthTech",
    desc: "Health systems, EHR platforms, digital health startups, and clinical research organizations. We design identity controls that satisfy HIPAA and protect PHI — without slowing down clinicians or researchers.",
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>),
  },
];

export default function About() {
  const [heroRef, heroVis] = useReveal(0.05);
  const [storyRef, storyVis] = useReveal(0.1);
  const [beliefsRef, beliefsVis] = useReveal(0.1);
  const [sectorRef, sectorVis] = useReveal(0.1);
  const [contactRef, contactVis] = useReveal(0.1);

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
          <div className="inline-flex items-center gap-2 bg-blue-600/20 text-blue-300 px-3 py-1.5 rounded-full mb-5" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            ABOUT VAULTIAM
          </div>
          <h1 className="text-white mb-5" style={{ fontSize: "clamp(32px, 6vw, 52px)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            Identity security is all<br />we do. <span style={{ color: "#60a5fa" }}>It's enough.</span>
          </h1>
          <p className="text-slate-300 max-w-2xl" style={{ fontSize: "clamp(15px, 2vw, 17px)", lineHeight: 1.7 }}>
            VaultIAM is an identity security consultancy built for FinTech and Healthcare — the industries where a compromised credential doesn't just mean a breach, it means regulatory exposure, financial loss, and eroded patient or customer trust.
          </p>
        </div>
      </section>

      {/* Origin Story */}
      <section ref={storyRef} className="py-16 sm:py-20 bg-white">
        <div
          className="max-w-4xl mx-auto px-5"
          style={{
            opacity: storyVis ? 1 : 0,
            transform: storyVis ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <div className="text-center mb-10">
            <h2 className="text-slate-900 mb-4" style={{ fontSize: "clamp(26px, 4vw, 36px)", fontWeight: 700, letterSpacing: "-0.02em" }}>
              Why we exist
            </h2>
          </div>
          <div className="text-slate-600 space-y-5 max-w-3xl mx-auto" style={{ fontSize: 15.5, lineHeight: 1.75 }}>
            <p>
              We started VaultIAM because we kept seeing the same pattern: enterprises spending millions on security tools while their identity infrastructure — the one thing attackers actually exploit — remained fragmented, misconfigured, and under-resourced.
            </p>
            <p>
              The big consulting firms assign generalists who rotate across projects. The managed service providers create dependency by design. Neither approach solves the fundamental problem: most organizations don't have the specialized identity expertise to design, deploy, and operate modern IAM, CIAM, PAM, and ITDR systems at the level their threat environment demands.
            </p>
            <p>
              So we built something different. A team of identity architects who have spent their careers in this space — deploying Okta, Entra, CyberArk, HashiCorp, and SailPoint across regulated industries. We engage in focused 6-10 week sprints, solve the specific problem, transfer the knowledge, and move on. No retainers. No lock-in. Just identity security done right.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {FACTS.map((f, i) => (
              <div key={i} className="text-center p-5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-slate-900 mb-1" style={{ fontSize: 28, fontWeight: 700 }}>{f.stat}</div>
                <div className="text-slate-500" style={{ fontSize: 12, fontWeight: 500 }}>{f.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section ref={beliefsRef} className="py-16 sm:py-20" style={{ background: "#f8fafc" }}>
        <div
          className="max-w-5xl mx-auto px-5"
          style={{
            opacity: beliefsVis ? 1 : 0,
            transform: beliefsVis ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1.5 rounded-full mb-4" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em" }}>
              OUR PRINCIPLES
            </div>
            <h2 className="text-slate-900 mb-3" style={{ fontSize: "clamp(26px, 4vw, 36px)", fontWeight: 700, letterSpacing: "-0.02em" }}>
              What we believe
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BELIEFS.map((b, i) => (
              <BeliefCard key={i} belief={b} />
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section ref={sectorRef} className="py-16 sm:py-20 bg-white">
        <div
          className="max-w-5xl mx-auto px-5"
          style={{
            opacity: sectorVis ? 1 : 0,
            transform: sectorVis ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1.5 rounded-full mb-4" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em" }}>
              SECTORS WE SERVE
            </div>
            <h2 className="text-slate-900 mb-3" style={{ fontSize: "clamp(26px, 4vw, 36px)", fontWeight: 700, letterSpacing: "-0.02em" }}>
              Built for regulated industries
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto" style={{ fontSize: 15, lineHeight: 1.7 }}>
              We focus exclusively on industries where identity failures carry regulatory, financial, and patient-safety consequences — because generic approaches don't survive contact with compliance audits.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SECTORS.map((s, i) => (
              <SectorCard key={i} sector={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Office */}
      <section ref={contactRef} className="py-16 sm:py-20" style={{ background: "#f8fafc" }}>
        <div
          className="max-w-5xl mx-auto px-5"
          style={{
            opacity: contactVis ? 1 : 0,
            transform: contactVis ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-slate-900 mb-4" style={{ fontSize: "clamp(24px, 3.5vw, 32px)", fontWeight: 700, letterSpacing: "-0.02em" }}>
                Based in Toronto.<br />Serving North America.
              </h2>
              <p className="text-slate-600 mb-6" style={{ fontSize: 15, lineHeight: 1.7 }}>
                We work with FinTech and Healthcare organizations across the United States and Canada. Most engagements are delivered remotely with on-site workshops as needed.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  <div>
                    <div className="text-slate-900" style={{ fontSize: 14, fontWeight: 600 }}>Office</div>
                    <div className="text-slate-600" style={{ fontSize: 13.5 }}>460 Adelaide St. E, Suite 905<br />Toronto, ON M5A 0E7</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  <div>
                    <div className="text-slate-900" style={{ fontSize: 14, fontWeight: 600 }}>Email</div>
                    <a href="mailto:hello@vaultiam.com" className="text-blue-600 hover:text-blue-700 transition-colors" style={{ fontSize: 13.5 }}>hello@vaultiam.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                  <div>
                    <div className="text-slate-900" style={{ fontSize: 14, fontWeight: 600 }}>Service Area</div>
                    <div className="text-slate-600" style={{ fontSize: 13.5 }}>United States & Canada</div>
                  </div>
                </div>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-lg transition-all"
                style={{ background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)", fontSize: 14, fontWeight: 600 }}
              >
                Get in touch
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
              <iframe
                title="VaultIAM Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.0!2d-79.3558!3d43.6525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDM5JzA5LjAiTiA3OcKwMjEnMjAuOSJX!5e0!3m2!1sen!2sca!4v1700000000000"
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 text-center" style={{ background: "linear-gradient(155deg, #1e293b 0%, #334155 60%, #1e3a5f 100%)" }}>
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="text-white mb-4" style={{ fontSize: "clamp(24px, 4vw, 34px)", fontWeight: 700, letterSpacing: "-0.02em" }}>
            Ready to fix your identity security?
          </h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto" style={{ fontSize: 15, lineHeight: 1.7 }}>
            No sales pressure. No pitch decks. Just a conversation with identity architects who understand your industry.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 text-white px-7 py-3.5 rounded-lg" style={{ background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)", fontSize: 15, fontWeight: 600 }}>
              Book a free assessment
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
            <Link to="/customer-stories" className="inline-flex items-center gap-2 text-blue-300 px-7 py-3.5 rounded-lg border border-blue-400/30 hover:bg-blue-400/10 transition-all" style={{ fontSize: 15, fontWeight: 500 }}>
              See customer results
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function BeliefCard({ belief }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="rounded-xl p-6"
      style={{
        background: "#fff",
        border: `1.5px solid ${hov ? "#2563eb" : "#e2e8f0"}`,
        boxShadow: hov ? "0 8px 24px rgba(37,99,235,0.1)" : "0 1px 3px rgba(15,23,42,0.04)",
        transform: hov ? "translateY(-2px)" : "translateY(0)",
        transition: "all 0.3s ease",
      }}
    >
      <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-4">{belief.icon}</div>
      <h3 className="text-slate-900 mb-2" style={{ fontSize: 17, fontWeight: 700, lineHeight: 1.3 }}>{belief.title}</h3>
      <p className="text-slate-600" style={{ fontSize: 13.5, lineHeight: 1.65 }}>{belief.desc}</p>
    </div>
  );
}

function SectorCard({ sector }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="rounded-xl p-6"
      style={{
        background: hov ? "#fff" : "#f8fafc",
        border: `1.5px solid ${hov ? "#2563eb" : "#e2e8f0"}`,
        boxShadow: hov ? "0 8px 24px rgba(37,99,235,0.1)" : "0 1px 3px rgba(15,23,42,0.04)",
        transform: hov ? "translateY(-2px)" : "translateY(0)",
        transition: "all 0.3s ease",
      }}
    >
      <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-4">{sector.icon}</div>
      <h3 className="text-slate-900 mb-2" style={{ fontSize: 17, fontWeight: 700, lineHeight: 1.3 }}>{sector.title}</h3>
      <p className="text-slate-600" style={{ fontSize: 13.5, lineHeight: 1.65 }}>{sector.desc}</p>
    </div>
  );
}
