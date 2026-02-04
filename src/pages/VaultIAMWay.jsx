import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// Reveal on scroll hook
function useReveal(threshold = 0.1) {
  const [ref, setRef] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold }
    );
    obs.observe(ref);
    return () => obs.disconnect();
  }, [ref, threshold]);

  return [setRef, visible];
}

// Identity Mesh Visual Component
function IdentityMeshDiagram() {
  return (
    <svg width="100%" height="280" viewBox="0 0 400 280" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Central core */}
      <circle cx="200" cy="140" r="12" fill="#1e40af" opacity="0.9">
        <animate attributeName="r" values="12;14;12" dur="3s" repeatCount="indefinite"/>
      </circle>
      
      {/* Inner ring - 6 nodes */}
      {[0, 60, 120, 180, 240, 300].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const x = 200 + Math.cos(rad) * 60;
        const y = 140 + Math.sin(rad) * 60;
        return (
          <g key={`inner-${i}`}>
            <line x1="200" y1="140" x2={x} y2={y} stroke="#3b82f6" strokeWidth="1.5" opacity="0.4"/>
            <circle cx={x} cy={y} r="7" fill="#2563eb" opacity="0.7"/>
          </g>
        );
      })}
      
      {/* Outer ring - 12 nodes */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const x = 200 + Math.cos(rad) * 110;
        const y = 140 + Math.sin(rad) * 110;
        return (
          <g key={`outer-${i}`}>
            <circle cx={x} cy={y} r="4" fill="#60a5fa" opacity="0.5"/>
          </g>
        );
      })}
      
      {/* Glow rings */}
      <circle cx="200" cy="140" r="80" stroke="#60a5fa" strokeWidth="0.5" opacity="0.15" fill="none"/>
      <circle cx="200" cy="140" r="125" stroke="#60a5fa" strokeWidth="0.5" opacity="0.08" fill="none"/>
      
      {/* Labels */}
      <text x="200" y="35" textAnchor="middle" fill="#64748b" fontSize="11" fontWeight="600">Human</text>
      <text x="200" y="250" textAnchor="middle" fill="#64748b" fontSize="11" fontWeight="600">Machine</text>
      <text x="320" y="145" textAnchor="middle" fill="#64748b" fontSize="11" fontWeight="600">AI Agents</text>
      <text x="80" y="145" textAnchor="middle" fill="#64748b" fontSize="11" fontWeight="600">IoT/APIs</text>
    </svg>
  );
}

// Attack Surface Infographic
function AttackSurfaceInfographic() {
  const threats = [
    { name: "Non-Human ID", value: 97, color: "#ef4444", stat: "97% over-privileged" },
    { name: "Shadow AI", value: 80, color: "#f59e0b", stat: "80% have unapproved AI" },
    { name: "Synthetic Fraud", value: 75, color: "#8b5cf6", stat: "75% AI-driven fraud" },
    { name: "Identity Breaches", value: 51, color: "#ec4899", stat: "51% lost money" },
  ];

  return (
    <div className="space-y-4">
      {threats.map((threat, i) => (
        <div key={threat.name} className="relative">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-slate-700" style={{ fontSize: 13, fontWeight: 600 }}>{threat.name}</span>
            <span className="text-slate-600" style={{ fontSize: 12, fontWeight: 600 }}>{threat.stat}</span>
          </div>
          <div className="relative h-7 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full transition-all duration-1000 ease-out rounded-full"
              style={{
                width: `${threat.value}%`,
                background: `linear-gradient(90deg, ${threat.color}, ${threat.color}dd)`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

// Methodology Visual
function MethodologyFlow() {
  const phases = [
    { 
      num: "01", 
      label: "Assess", 
      desc: "Comprehensive identity risk mapping & gap analysis",
      icon: <><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></>
    },
    { 
      num: "02", 
      label: "Architect", 
      desc: "Modern Zero Trust identity flows & policy design",
      icon: <><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></>
    },
    { 
      num: "03", 
      label: "Operate", 
      desc: "Implementation, transfer & operational handoff",
      icon: <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>
    },
  ];

  return (
    <div className="relative flex items-center justify-center py-8">
      {/* Connection line */}
      <svg className="absolute top-1/2 left-0 right-0 h-16" style={{ transform: "translateY(-50%)" }}>
        <path
          d="M 20 32 Q 160 8, 200 32 T 380 32"
          stroke="#3b82f6"
          strokeWidth="2"
          fill="none"
          opacity="0.4"
        />
        <polygon points="375,27 385,32 375,37" fill="#3b82f6" opacity="0.4"/>
      </svg>

      <div className="relative z-10 flex items-center justify-between w-full max-w-3xl gap-8">
        {phases.map((phase, i) => (
          <div key={phase.num} className="flex-1 flex flex-col items-center">
            <div
              className="w-24 h-24 rounded-2xl bg-white border-2 border-blue-600 flex flex-col items-center justify-center mb-3 transition-all duration-200 hover:shadow-xl"
              style={{ boxShadow: "0 4px 16px rgba(37,99,235,0.2)" }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-1">
                {phase.icon}
              </svg>
              <span className="text-blue-600 text-xs font-bold">{phase.num}</span>
            </div>
            <div className="text-slate-900 mb-1 text-center" style={{ fontSize: 16, fontWeight: 700 }}>{phase.label}</div>
            <div className="text-slate-600 text-center" style={{ fontSize: 12, lineHeight: 1.5, maxWidth: 180 }}>{phase.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Differentiation Matrix
function DifferentiationMatrix() {
  const comparison = [
    { feature: "Industry Focus", vaultiam: "FinTech & Healthcare Only", others: "Generalist / All Industries" },
    { feature: "Engagement Model", vaultiam: "6-10 Week Sprints", others: "6-18 Month Projects" },
    { feature: "Outcome", vaultiam: "Transfer Control + Training", others: "Managed Services / Lock-in" },
    { feature: "Expertise Depth", vaultiam: "100% IAM/CIAM/PAM/NHI", others: "Broad Security Portfolio" },
    { feature: "Team Structure", vaultiam: "Dedicated Identity Architects", others: "Rotational Consultants" },
  ];

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200">
      <table className="w-full">
        <thead>
          <tr className="bg-slate-50">
            <th className="text-left py-3 px-4 text-slate-600" style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.05em" }}>CAPABILITY</th>
            <th className="text-center py-3 px-4 text-blue-600" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.05em" }}>VAULTIAM</th>
            <th className="text-center py-3 px-4 text-slate-500" style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.05em" }}>TYPICAL PROVIDERS</th>
          </tr>
        </thead>
        <tbody>
          {comparison.map((row, i) => (
            <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-slate-25"}>
              <td className="py-3 px-4 text-slate-700 font-semibold" style={{ fontSize: 13 }}>{row.feature}</td>
              <td className="py-3 px-4 text-center">
                <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-md" style={{ fontSize: 12, fontWeight: 600 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  {row.vaultiam}
                </div>
              </td>
              <td className="py-3 px-4 text-center text-slate-500" style={{ fontSize: 12 }}>{row.others}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Main Component
export default function VaultIAMWay() {
  const [heroRef, heroVis] = useReveal(0.1);
  const [attackRef, attackVis] = useReveal(0.1);
  const [meshRef, meshVis] = useReveal(0.1);
  const [methodRef, methodVis] = useReveal(0.1);
  const [diffRef, diffVis] = useReveal(0.1);
  const [whyRef, whyVis] = useReveal(0.1);
  const [activePhase, setActivePhase] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(155deg, #1e293b 0%, #334155 60%, #1e3a4a 100%)",
          paddingTop: 104,
          paddingBottom: 64,
          opacity: heroVis ? 1 : 0,
          transform: heroVis ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        <div className="absolute" style={{ top: -100, right: -140, width: 460, height: 460, borderRadius: "50%", background: "radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 68%)", pointerEvents: "none" }} />
        <div className="absolute" style={{ bottom: -70, left: -60, width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />

        {/* Striking visual - Identity Shield graphic on right */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block">
          <svg width="320" height="260" viewBox="0 0 320 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-25">
            {/* Shield outline */}
            <path d="M 160 20 L 280 80 L 280 160 Q 280 220, 160 240 Q 40 220, 40 160 L 40 80 Z" stroke="#60a5fa" strokeWidth="2" fill="none" opacity="0.3"/>
            
            {/* Inner shield layers */}
            <path d="M 160 40 L 260 90 L 260 150 Q 260 200, 160 220 Q 60 200, 60 150 L 60 90 Z" stroke="#3b82f6" strokeWidth="1.5" fill="none" opacity="0.4"/>
            <path d="M 160 60 L 240 100 L 240 140 Q 240 180, 160 200 Q 80 180, 80 140 L 80 100 Z" stroke="#2563eb" strokeWidth="1" fill="none" opacity="0.5"/>
            
            {/* Lock symbol in center */}
            <circle cx="160" cy="130" r="25" fill="#1e40af" opacity="0.6"/>
            <rect x="150" y="135" width="20" height="25" rx="2" fill="#60a5fa" opacity="0.7"/>
            <path d="M 155 135 L 155 125 A 5 5 0 0 1 165 125 L 165 135" stroke="#60a5fa" strokeWidth="2" fill="none" opacity="0.7"/>
            
            {/* Node connections - identity mesh within shield */}
            <circle cx="160" cy="90" r="4" fill="#60a5fa" opacity="0.5"/>
            <circle cx="200" cy="110" r="4" fill="#60a5fa" opacity="0.5"/>
            <circle cx="210" cy="150" r="4" fill="#60a5fa" opacity="0.5"/>
            <circle cx="160" cy="180" r="4" fill="#60a5fa" opacity="0.5"/>
            <circle cx="110" cy="150" r="4" fill="#60a5fa" opacity="0.5"/>
            <circle cx="120" cy="110" r="4" fill="#60a5fa" opacity="0.5"/>
            
            {/* Connection lines */}
            <line x1="160" y1="130" x2="160" y2="90" stroke="#3b82f6" strokeWidth="0.5" opacity="0.3"/>
            <line x1="160" y1="130" x2="200" y2="110" stroke="#3b82f6" strokeWidth="0.5" opacity="0.3"/>
            <line x1="160" y1="130" x2="210" y2="150" stroke="#3b82f6" strokeWidth="0.5" opacity="0.3"/>
            <line x1="160" y1="130" x2="160" y2="180" stroke="#3b82f6" strokeWidth="0.5" opacity="0.3"/>
            <line x1="160" y1="130" x2="110" y2="150" stroke="#3b82f6" strokeWidth="0.5" opacity="0.3"/>
            <line x1="160" y1="130" x2="120" y2="110" stroke="#3b82f6" strokeWidth="0.5" opacity="0.3"/>
            
            {/* Pulse effect */}
            <circle cx="160" cy="130" r="40" stroke="#60a5fa" strokeWidth="0.5" opacity="0.2" fill="none">
              <animate attributeName="r" values="40;50;40" dur="3s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.2;0.05;0.2" dur="3s" repeatCount="indefinite"/>
            </circle>
          </svg>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-5">
          <div className="max-w-3xl">
            <h1 className="text-white mb-6" style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              The Vault<span style={{ color: "#3b82f6" }}>IAM</span> Way
            </h1>
            <p className="text-slate-300 mb-8" style={{ fontSize: 18, lineHeight: 1.7, maxWidth: 640 }}>
              Identity security specialists who turn the fastest-growing attack surface into your strongest defense. No fluff, no lock-in — just measurable outcomes in 6-10 weeks.
            </p>
            
            {/* Key stats */}
            <div className="flex flex-wrap gap-8 pt-6 border-t border-slate-600">
              <div>
                <div className="text-white mb-1" style={{ fontSize: 32, fontWeight: 700, letterSpacing: "-0.02em" }}>$42B</div>
                <div className="text-slate-400" style={{ fontSize: 13 }}>IAM market by 2030</div>
              </div>
              <div>
                <div className="text-white mb-1" style={{ fontSize: 32, fontWeight: 700, letterSpacing: "-0.02em" }}>144:1</div>
                <div className="text-slate-400" style={{ fontSize: 13 }}>Machine to human ratio</div>
              </div>
              <div>
                <div className="text-white mb-1" style={{ fontSize: 32, fontWeight: 700, letterSpacing: "-0.02em" }}>97%</div>
                <div className="text-slate-400" style={{ fontSize: 13 }}>NHIs over-privileged</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Crisis: Expanding Attack Surface */}
      <section
        ref={attackRef}
        className="py-12 bg-slate-50"
        style={{
          opacity: attackVis ? 1 : 0,
          transform: attackVis ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-3 py-1.5 rounded-full mb-4" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
              THE CRISIS
            </div>
            <h2 className="text-slate-900 mb-4" style={{ fontSize: "clamp(28px, 4vw, 38px)", fontWeight: 700, letterSpacing: "-0.02em" }}>
              The Identity Attack Surface is Exploding
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto" style={{ fontSize: 16, lineHeight: 1.7 }}>
              While most organizations focused on network security, identity became the new battleground. The numbers tell a stark story.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-slate-900 mb-6" style={{ fontSize: 20, fontWeight: 700 }}>Critical Threat Landscape (2025)</h3>
              <AttackSurfaceInfographic />
              
              <div className="mt-8 p-4 bg-white rounded-lg border border-slate-200">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-slate-900 mb-1" style={{ fontSize: 14, fontWeight: 600 }}>The Hidden Reality</div>
                    <p className="text-slate-600" style={{ fontSize: 13, lineHeight: 1.6 }}>
                      51% of organizations suffered financial losses from identity breaches. 82% are now increasing IAM investments. Yet 94% admit complexity undermines their security.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-2xl p-8 border border-slate-200" style={{ boxShadow: "0 4px 20px rgba(15,23,42,0.08)" }}>
                <h3 className="text-slate-900 mb-6" style={{ fontSize: 18, fontWeight: 700 }}>Five Attack Vectors We Address</h3>
                
                <div className="space-y-5">
                  {[
                    { 
                      title: "Non-Human Identity Sprawl", 
                      desc: "Machine identities outnumber humans 144:1. Most are over-privileged and never audited.",
                      icon: <><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/></>
                    },
                    { 
                      title: "AI-Powered Synthetic Fraud", 
                      desc: "Deepfakes and generative AI create identities that bypass traditional KYC in real-time.",
                      icon: <><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"/><path d="M12 6v6l4 2"/></>
                    },
                    { 
                      title: "Privileged Access Abuse", 
                      desc: "Static credentials with 90+ day lifetimes = ticking time bombs for lateral movement.",
                      icon: <><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></>
                    },
                    { 
                      title: "Shadow AI & Secret Sprawl", 
                      desc: "80% have unauthorized AI tools. Exposed API keys lurk in repos, wikis, and Slack.",
                      icon: <><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></>
                    },
                    { 
                      title: "Inadequate ITDR Coverage", 
                      desc: "Perimeter tools miss identity-based attacks. 87% say real-time detection is now critical.",
                      icon: <><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></>
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          {item.icon}
                        </svg>
                      </div>
                      <div>
                        <div className="text-slate-900 mb-0.5" style={{ fontSize: 14, fontWeight: 600 }}>{item.title}</div>
                        <p className="text-slate-600" style={{ fontSize: 12, lineHeight: 1.5 }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution: Identity Mesh */}
      <section
        ref={meshRef}
        className="py-12 bg-white"
        style={{
          opacity: meshVis ? 1 : 0,
          transform: meshVis ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1.5 rounded-full mb-4" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
              </svg>
              THE SOLUTION
            </div>
            <h2 className="text-slate-900 mb-4" style={{ fontSize: "clamp(28px, 4vw, 38px)", fontWeight: 700, letterSpacing: "-0.02em" }}>
              The <span style={{ color: "#2563eb" }}>Identity Mesh</span> Approach
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto" style={{ fontSize: 16, lineHeight: 1.7 }}>
              We unify every identity — human, machine, AI agent — into a single governed layer. No blind spots. Continuous verification. Real-time threat detection.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="bg-slate-50 rounded-2xl p-8">
              <h3 className="text-slate-900 mb-4" style={{ fontSize: 18, fontWeight: 700 }}>Distributed Identity Fabric</h3>
              <IdentityMeshDiagram />
              <p className="text-slate-600 text-center mt-4" style={{ fontSize: 12 }}>
                Context, behavior, and risk signals flow from all systems into a unified security layer
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "Zero Trust by Default",
                  desc: "Every access request verified in real-time based on identity, device posture, behavior, and risk context.",
                  icon: <><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></>
                },
                {
                  title: "Just-in-Time Privilege",
                  desc: "Dynamic credential issuance with < 15-minute lifetimes. No standing access. Automated rotation.",
                  icon: <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>
                },
                {
                  title: "Continuous Monitoring (ITDR)",
                  desc: "Aggregate telemetry from identity providers, endpoints, and cloud environments. Real-time anomaly detection.",
                  icon: <><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></>
                },
                {
                  title: "AI Workload Protection",
                  desc: "Secure AI agents, service accounts, and automation workflows with the same rigor as human identities.",
                  icon: <><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></>
                },
              ].map((feature, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {feature.icon}
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-slate-900 mb-1" style={{ fontSize: 16, fontWeight: 700 }}>{feature.title}</h4>
                    <p className="text-slate-600" style={{ fontSize: 14, lineHeight: 1.6 }}>{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Methodology */}
      <section
        ref={methodRef}
        className="py-12 bg-slate-50"
        style={{
          opacity: methodVis ? 1 : 0,
          transform: methodVis ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-600 px-3 py-1.5 rounded-full mb-4" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              THE METHOD
            </div>
            <h2 className="text-slate-900 mb-4" style={{ fontSize: "clamp(28px, 4vw, 38px)", fontWeight: 700, letterSpacing: "-0.02em" }}>
              Proven Three-Phase Methodology
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto" style={{ fontSize: 16, lineHeight: 1.7 }}>
              Outcomes in 6-10 weeks. Not months. Not years. Sprint-based delivery with full knowledge transfer.
            </p>
          </div>

          <div className="flex items-center justify-center gap-6 mb-12">
            {[
              { num: "01", label: "Assess", icon: <><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></> },
              { num: "02", label: "Architect", icon: <><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></> },
              { num: "03", label: "Operate", icon: <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></> },
            ].map((phase, i) => (
              <button
                key={phase.num}
                onClick={() => setActivePhase(i)}
                className={`flex-1 max-w-xs rounded-xl p-6 transition-all duration-300 ${
                  activePhase === i
                    ? "bg-white border-2 border-blue-600 shadow-lg"
                    : "bg-white border border-slate-200 hover:border-blue-300"
                }`}
                style={{
                  opacity: activePhase === i ? 1 : 0.6,
                  transform: activePhase === i ? "scale(1.02)" : "scale(1)",
                }}
              >
                <div className="flex flex-col items-center">
                  <div
                    className={`w-16 h-16 rounded-xl flex flex-col items-center justify-center mb-3 transition-all duration-200 ${
                      activePhase === i ? "bg-blue-600" : "bg-slate-100"
                    }`}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={activePhase === i ? "#fff" : "#64748b"}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mb-1"
                    >
                      {phase.icon}
                    </svg>
                    <span className={`text-xs font-bold ${activePhase === i ? "text-white" : "text-slate-600"}`}>
                      {phase.num}
                    </span>
                  </div>
                  <div
                    className={`font-bold ${activePhase === i ? "text-slate-900" : "text-slate-600"}`}
                    style={{ fontSize: 18 }}
                  >
                    {phase.label}
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              {
                phase: "01 — Assess",
                title: "Comprehensive Identity Risk Audit",
                items: [
                  "Map every identity (human, machine, AI)",
                  "Inventory orphaned credentials",
                  "Evaluate IAM/CIAM/PAM maturity",
                  "Identify compliance gaps",
                  "Prioritize quick wins vs. long-term fixes"
                ]
              },
              {
                phase: "02 — Architect",
                title: "Modern Zero Trust Design",
                items: [
                  "Design frictionless MFA & passwordless flows",
                  "Define least-privilege policies",
                  "Architect JIT access workflows",
                  "Integrate ITDR telemetry",
                  "Platform-agnostic implementation plan"
                ]
              },
              {
                phase: "03 — Operate",
                title: "Deploy & Transfer Control",
                items: [
                  "Rapid deployment with minimal disruption",
                  "Configure monitoring & automated response",
                  "Train your team hands-on",
                  "Document processes & runbooks",
                  "Leave you with operational autonomy"
                ]
              }
            ].map((phase, i) => (
              <div
                key={i}
                className={`bg-white rounded-xl p-6 border-2 transition-all duration-300 ${
                  activePhase === i ? "border-blue-600 shadow-lg" : "border-slate-200"
                }`}
                style={{
                  opacity: activePhase === i ? 1 : 0.4,
                  transform: activePhase === i ? "scale(1)" : "scale(0.98)",
                }}
              >
                <div className="text-blue-600 mb-2" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em" }}>{phase.phase}</div>
                <h3 className="text-slate-900 mb-4" style={{ fontSize: 17, fontWeight: 700 }}>{phase.title}</h3>
                <ul className="space-y-2">
                  {phase.items.map((item, j) => (
                    <li key={j} className="flex gap-2 items-start">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0" style={{ marginTop: 2 }}>
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      <span className="text-slate-700" style={{ fontSize: 13, lineHeight: 1.6 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Differentiation */}
      <section
        ref={diffRef}
        className="py-12 bg-white"
        style={{
          opacity: diffVis ? 1 : 0,
          transform: diffVis ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-600 px-3 py-1.5 rounded-full mb-4" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
              THE DIFFERENCE
            </div>
            <h2 className="text-slate-900 mb-4" style={{ fontSize: "clamp(28px, 4vw, 38px)", fontWeight: 700, letterSpacing: "-0.02em" }}>
              The <span style={{ color: "#2563eb" }}>Vault<span style={{ color: "#2563eb" }}>IAM</span></span> Difference
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto mb-12" style={{ fontSize: 16, lineHeight: 1.7 }}>
              We're not generalists dabbling in identity. We're identity-only specialists who live and breathe IAM, CIAM, PAM, and NHI security.
            </p>
          </div>

          <DifferentiationMatrix />

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6">
              <h3 className="text-slate-900 mb-5" style={{ fontSize: 20, fontWeight: 700 }}>What Sets Us Apart</h3>
              <div className="space-y-3.5">
                {[
                  { text: "100% dedicated to identity security (not a service line)", icon: <><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></> },
                  { text: "FinTech & Healthcare sector expertise (not all industries)", icon: <><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></> },
                  { text: "Hands-on architects who've solved these problems before", icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></> },
                  { text: "Technology-agnostic (Okta, Entra, CyberArk, etc.)", icon: <><path d="M12 2L2 7l10 5 10-5-10-5z"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></> },
                  { text: "Outcomes-first, not billable hours", icon: <><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></> },
                  { text: "You own the solution, not us", icon: <><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/></> }
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        {item.icon}
                      </svg>
                    </div>
                    <span className="text-slate-700" style={{ fontSize: 14, lineHeight: 1.5, fontWeight: 500 }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-xl p-5 border-2 border-blue-200">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-slate-900 mb-1" style={{ fontSize: 15, fontWeight: 700 }}>No Vendor Lock-In</h4>
                    <p className="text-slate-600" style={{ fontSize: 13, lineHeight: 1.6 }}>
                      We empower you with knowledge and operational controls. You're not dependent on us after engagement ends.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 border-2 border-green-200">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-slate-900 mb-1" style={{ fontSize: 15, fontWeight: 700 }}>Tangible Outcomes</h4>
                    <p className="text-slate-600" style={{ fontSize: 13, lineHeight: 1.6 }}>
                      Near-zero standing privileges. Full NHI visibility. SOC2/PCI/HIPAA alignment. Quantifiable risk reduction.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 border-2 border-purple-200">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><polyline points="16 12 12 8 8 12"/><line x1="12" y1="16" x2="12" y2="8"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-slate-900 mb-1" style={{ fontSize: 15, fontWeight: 700 }}>Future-Ready</h4>
                    <p className="text-slate-600" style={{ fontSize: 13, lineHeight: 1.6 }}>
                      We track emerging threats: post-quantum crypto, decentralized identity, agentic AI. You'll be ready.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section
        ref={whyRef}
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(155deg, #1e293b 0%, #334155 60%, #1e3a4a 100%)",
          paddingTop: 80,
          paddingBottom: 50,
          opacity: whyVis ? 1 : 0,
          transform: whyVis ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        <div className="absolute" style={{ top: -100, right: -140, width: 460, height: 460, borderRadius: "50%", background: "radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 68%)", pointerEvents: "none" }} />
        
        <div className="relative z-10 max-w-4xl mx-auto px-5 text-center">
          <h2 className="text-white mb-4" style={{ fontSize: "clamp(28px, 4.5vw, 42px)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.15 }}>
            Identity is the New Perimeter
          </h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto" style={{ fontSize: 15, lineHeight: 1.7 }}>
            The IAM market is projected to grow from <strong>$26B in 2025 to $42B by 2030</strong>. Organizations are scrambling to secure identities before the next breach. The question isn't if you'll invest in identity security — it's whether you'll do it proactively or after an incident.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
              style={{ fontSize: 14, fontWeight: 600 }}
            >
              Start a Conversation
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </Link>
            <Link
              to="/customer-stories"
              className="inline-flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg transition-colors"
              style={{ fontSize: 14, fontWeight: 600 }}
            >
              See Client Results
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
