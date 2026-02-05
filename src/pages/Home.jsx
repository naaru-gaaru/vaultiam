import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

/* ═══════════════════════════════════════════════════════
   SCROLL REVEAL HOOK
   ═══════════════════════════════════════════════════════ */
function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  
  return [ref, visible];
}

/* ═══════════════════════════════════════════════════════
   ANIMATED COUNTER COMPONENT
   ═══════════════════════════════════════════════════════ */
function AnimatedCounter({ end, suffix = "", prefix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [ref, visible] = useReveal(0.3);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!visible || hasAnimated.current) return;
    hasAnimated.current = true;
    
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    requestAnimationFrame(animate);
  }, [visible, end, duration]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

/* ═══════════════════════════════════════════════════════
   IDENTITY THREAT VISUALIZATION
   ═══════════════════════════════════════════════════════ */
function ThreatVisualization() {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <svg viewBox="0 0 400 300" className="w-full h-auto">
        {/* Central Identity Node */}
        <circle cx="200" cy="150" r="35" fill="#1e40af" opacity="0.9">
          <animate attributeName="r" values="35;38;35" dur="3s" repeatCount="indefinite" />
        </circle>
        <text x="200" y="145" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="700">YOUR</text>
        <text x="200" y="158" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="700">IDENTITY</text>
        
        {/* Threat vectors - pulsing red nodes */}
        {[
          { x: 80, y: 60, label: "Credential Theft", delay: "0s" },
          { x: 320, y: 60, label: "Privilege Abuse", delay: "0.5s" },
          { x: 50, y: 180, label: "Shadow Access", delay: "1s" },
          { x: 350, y: 180, label: "Orphaned Accounts", delay: "1.5s" },
          { x: 120, y: 260, label: "Compliance Gaps", delay: "2s" },
          { x: 280, y: 260, label: "Vendor Risk", delay: "2.5s" },
        ].map((threat, i) => (
          <g key={i}>
            {/* Attack line */}
            <line 
              x1={threat.x} y1={threat.y} 
              x2="200" y2="150" 
              stroke="#ef4444" 
              strokeWidth="1.5" 
              strokeDasharray="4 4"
              opacity="0.4"
            >
              <animate 
                attributeName="stroke-dashoffset" 
                values="0;8" 
                dur="1s" 
                repeatCount="indefinite"
              />
            </line>
            
            {/* Threat node */}
            <circle cx={threat.x} cy={threat.y} r="8" fill="#ef4444" opacity="0.8">
              <animate 
                attributeName="r" 
                values="8;10;8" 
                dur="2s" 
                begin={threat.delay}
                repeatCount="indefinite"
              />
            </circle>
            
            {/* Label */}
            <text 
              x={threat.x} 
              y={threat.y + 22} 
              textAnchor="middle" 
              fill="#64748b" 
              fontSize="9"
              fontWeight="500"
            >
              {threat.label}
            </text>
          </g>
        ))}
        
        {/* Shield/protection ring */}
        <circle 
          cx="200" cy="150" r="55" 
          fill="none" 
          stroke="#3b82f6" 
          strokeWidth="2"
          strokeDasharray="8 4"
          opacity="0.5"
        >
          <animate attributeName="stroke-dashoffset" values="0;24" dur="3s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   CUSTOMER STORY CARD
   ═══════════════════════════════════════════════════════ */
function StoryCard({ story, index, isActive, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`relative rounded-2xl p-5 sm:p-6 cursor-pointer transition-all duration-300 ${
        isActive 
          ? "bg-white border-2 border-blue-600 shadow-xl" 
          : "bg-slate-50 border border-slate-200 hover:border-blue-300"
      }`}
      style={{
        transform: isActive ? "scale(1.02)" : "scale(1)",
      }}
    >
      {/* Industry badge */}
      <div className="flex items-center justify-between mb-4">
        <span 
          className="px-2.5 py-1 rounded-full text-xs font-semibold"
          style={{
            background: story.industry === "FinTech" ? "#dbeafe" : "#dcfce7",
            color: story.industry === "FinTech" ? "#1d4ed8" : "#166534",
          }}
        >
          {story.industry}
        </span>
        {isActive && (
          <span className="text-blue-600 text-xs font-semibold">FEATURED</span>
        )}
      </div>
      
      {/* Metric highlight */}
      <div className="mb-4">
        <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-1">
          {story.metric}
        </div>
        <div className="text-sm text-slate-600">{story.metricLabel}</div>
      </div>
      
      {/* Challenge */}
      <p className="text-slate-700 text-sm leading-relaxed mb-4">
        <span className="font-semibold text-slate-900">Challenge:</span> {story.challenge}
      </p>
      
      {/* Result */}
      <p className="text-slate-700 text-sm leading-relaxed mb-4">
        <span className="font-semibold text-green-700">Result:</span> {story.result}
      </p>
      
      {/* CTA */}
      <Link
        to={story.link}
        onClick={(e) => e.stopPropagation()}
        className="inline-flex items-center gap-1.5 text-blue-600 text-sm font-semibold hover:gap-2.5 transition-all"
      >
        Read full story
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
        </svg>
      </Link>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   METHODOLOGY STEP
   ═══════════════════════════════════════════════════════ */
function MethodStep({ step, index, isVisible }) {
  const icons = [
    <><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></>,
    <><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></>,
    <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></>,
    <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>,
  ];
  
  return (
    <div 
      className="relative"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: `all 0.5s ease ${index * 150}ms`,
      }}
    >
      {/* Connection line (except last) */}
      {index < 3 && (
        <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-transparent z-0" />
      )}
      
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Number + Icon */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 flex flex-col items-center justify-center mb-4 shadow-lg shadow-blue-200">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {icons[index]}
          </svg>
          <span className="text-white text-xs font-bold mt-1">0{index + 1}</span>
        </div>
        
        {/* Label */}
        <h4 className="text-slate-900 font-bold text-lg mb-2">{step.title}</h4>
        <p className="text-slate-600 text-sm leading-relaxed max-w-[200px]">{step.desc}</p>
        <span className="text-blue-600 text-xs font-semibold mt-2">{step.timeline}</span>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   MAIN HOME COMPONENT
   ═══════════════════════════════════════════════════════ */
export default function Home() {
  const [heroRef, heroVis] = useReveal(0.1);
  const [problemRef, problemVis] = useReveal(0.1);
  const [storiesRef, storiesVis] = useReveal(0.1);
  const [methodRef, methodVis] = useReveal(0.1);
  const [statsRef, statsVis] = useReveal(0.1);
  const [ctaRef, ctaVis] = useReveal(0.1);
  
  const [activeStory, setActiveStory] = useState(0);
  const [activeIndustry, setActiveIndustry] = useState("all");

  const stories = [
    {
      industry: "HealthTech",
      metric: "100%",
      metricLabel: "NHI visibility achieved",
      challenge: "Unmanaged AI agents and machine identities accessing sensitive patient research data with zero oversight.",
      result: "Full non-human identity governance with automated lifecycle management and HIPAA-aligned controls.",
      link: "/customer-stories/ai-workload-identities-healthcare",
    },
    {
      industry: "FinTech",
      metric: "85%",
      metricLabel: "fraud reduction",
      challenge: "Deepfake-driven synthetic identities bypassing KYC, causing significant onboarding fraud.",
      result: "Multi-layered identity verification with real-time fraud signals, accelerating legitimate user onboarding.",
      link: "/customer-stories/synthetic-identity-fraud-fintech",
    },
    {
      industry: "FinTech",
      metric: "<5 min",
      metricLabel: "credential TTL",
      challenge: "Long-lived credentials and overprivileged service accounts creating massive blast radius risk.",
      result: "Zero standing privilege with just-in-time access, all sessions fully auditable and auto-expired.",
      link: "/customer-stories/jit-privileged-access-fintech",
    },
  ];

  const filteredStories = activeIndustry === "all" 
    ? stories 
    : stories.filter(s => s.industry === activeIndustry);

  const methodSteps = [
    { title: "Discover", desc: "Map every identity—human, machine, and AI—across your environment", timeline: "Week 1-2" },
    { title: "Assess", desc: "Identify risk exposure, compliance gaps, and quick wins", timeline: "Week 2-3" },
    { title: "Architect", desc: "Design zero-trust flows and least-privilege policies", timeline: "Week 3-6" },
    { title: "Operate", desc: "Deploy, transfer knowledge, and ensure operational autonomy", timeline: "Week 6-10" },
  ];

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      
      {/* ═══ HERO SECTION ═══ */}
      <section
        ref={heroRef}
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(155deg, #0f172a 0%, #1e293b 50%, #1e3a5f 100%)",
          paddingTop: "clamp(80px, 15vw, 120px)",
          paddingBottom: "clamp(60px, 12vw, 100px)",
        }}
      >
        {/* Background effects */}
        <div className="absolute top-0 right-0 w-96 h-96 opacity-30 pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)", transform: "translate(20%, -30%)" }} 
        />
        <div className="absolute bottom-0 left-0 w-64 h-64 opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)", transform: "translate(-30%, 30%)" }} 
        />
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            
            {/* Left: Messaging */}
            <div
              style={{
                opacity: heroVis ? 1 : 0,
                transform: heroVis ? "translateY(0)" : "translateY(30px)",
                transition: "all 0.8s ease",
              }}
            >
              {/* Problem statement badge */}
              <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 text-red-300 px-3 py-1.5 rounded-full mb-6 text-xs font-semibold">
                <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
                80% of breaches involve compromised credentials
              </div>
              
              <h1 
                className="text-white mb-6"
                style={{ 
                  fontSize: "clamp(32px, 6vw, 56px)", 
                  fontWeight: 700, 
                  letterSpacing: "-0.03em", 
                  lineHeight: 1.1 
                }}
              >
                Your identity infrastructure is your{" "}
                <span className="relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                    biggest security gap
                  </span>
                  <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 200 6" preserveAspectRatio="none">
                    <path d="M0 3 Q50 0, 100 3 T200 3" stroke="#3b82f6" strokeWidth="2" fill="none" opacity="0.5" />
                  </svg>
                </span>
              </h1>
              
              <p className="text-slate-300 mb-8 leading-relaxed" style={{ fontSize: "clamp(16px, 3vw, 18px)", maxWidth: 540 }}>
                VaultIAM helps FinTech and Healthcare security teams eliminate access sprawl, 
                govern non-human identities, and achieve continuous compliance—
                <span className="text-white font-semibold"> in weeks, not years.</span>
              </p>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link
                  to="/customer-stories"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-white font-semibold transition-all duration-200"
                  style={{
                    background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
                    boxShadow: "0 4px 20px rgba(37,99,235,0.4)",
                    fontSize: 15,
                  }}
                >
                  See Customer Results
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "#e2e8f0",
                    fontSize: 15,
                  }}
                >
                  Book Free Assessment
                </Link>
              </div>
              
              {/* Trust bar */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-5 pt-6 border-t border-slate-600/50">
                {["SOC 2 Type II", "HIPAA", "ISO 27001"].map((badge) => (
                  <div key={badge} className="flex items-center gap-1.5 text-slate-400 text-xs font-medium">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                    {badge}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right: Threat visualization */}
            <div
              className="hidden lg:block"
              style={{
                opacity: heroVis ? 1 : 0,
                transform: heroVis ? "translateX(0)" : "translateX(30px)",
                transition: "all 0.8s ease 0.2s",
              }}
            >
              <ThreatVisualization />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROBLEM VALIDATION SECTION ═══ */}
      <section
        ref={problemRef}
        className="py-16 sm:py-20 lg:py-24 bg-slate-50"
        style={{
          opacity: problemVis ? 1 : 0,
          transform: problemVis ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s ease",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-5">
          <div className="text-center mb-12">
            <h2 
              className="text-slate-900 mb-4"
              style={{ fontSize: "clamp(26px, 5vw, 40px)", fontWeight: 700, letterSpacing: "-0.02em" }}
            >
              The identity crisis is real
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto" style={{ fontSize: 16, lineHeight: 1.7 }}>
              While organizations focused on perimeter security, identity became the #1 attack vector. The numbers tell a stark story.
            </p>
          </div>
          
          {/* Stats grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
            {[
              { value: 97, suffix: "%", label: "of NHIs are over-privileged", color: "#ef4444" },
              { value: 144, suffix: ":1", label: "machine to human identity ratio", color: "#f59e0b" },
              { value: 51, suffix: "%", label: "suffered financial losses from identity breaches", color: "#8b5cf6" },
              { value: 40, suffix: "hrs", label: "average manual access review time", color: "#06b6d4" },
            ].map((stat, i) => (
              <div 
                key={i} 
                className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 text-center"
                style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}
              >
                <div className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: stat.color }}>
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-slate-600 text-sm leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
          
          {/* Contrarian statement */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 sm:p-8 text-center">
            <blockquote className="text-white text-lg sm:text-xl font-medium leading-relaxed max-w-3xl mx-auto">
              "Most IAM implementations fail because they focus on <span className="text-blue-200">technology</span>, not <span className="text-cyan-300 font-bold">identity lifecycle</span>. 
              Zero-trust isn't a product you buy—it's an architecture we build with you."
            </blockquote>
            <p className="text-blue-200 text-sm mt-4 font-medium">— The VaultIAM Philosophy</p>
          </div>
        </div>
      </section>

      {/* ═══ CUSTOMER STORIES SECTION ═══ */}
      <section
        ref={storiesRef}
        className="py-16 sm:py-20 lg:py-24 bg-white"
        style={{
          opacity: storiesVis ? 1 : 0,
          transform: storiesVis ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s ease",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-5">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1.5 rounded-full mb-4 text-xs font-bold tracking-wide">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              PROVEN OUTCOMES
            </div>
            <h2 
              className="text-slate-900 mb-4"
              style={{ fontSize: "clamp(26px, 5vw, 40px)", fontWeight: 700, letterSpacing: "-0.02em" }}
            >
              Real results for regulated enterprises
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto mb-8" style={{ fontSize: 16, lineHeight: 1.7 }}>
              Our customers don't just pass audits—they transform how identity security operates in their organizations.
            </p>
            
            {/* Industry filter */}
            <div className="inline-flex items-center gap-2 p-1 bg-slate-100 rounded-xl">
              {[
                { id: "all", label: "All" },
                { id: "FinTech", label: "FinTech" },
                { id: "HealthTech", label: "HealthTech" },
              ].map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => { setActiveIndustry(filter.id); setActiveStory(0); }}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    activeIndustry === filter.id
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
          
          {/* Stories grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-10">
            {filteredStories.map((story, i) => (
              <StoryCard
                key={i}
                story={story}
                index={i}
                isActive={activeStory === i}
                onClick={() => setActiveStory(i)}
              />
            ))}
          </div>
          
          {/* CTA to all stories */}
          <div className="text-center">
            <Link
              to="/customer-stories"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all duration-200"
              style={{ fontSize: 15 }}
            >
              View all customer stories
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ METHODOLOGY PREVIEW ═══ */}
      <section
        ref={methodRef}
        className="py-16 sm:py-20 lg:py-24 bg-slate-50"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-5">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full mb-4 text-xs font-bold tracking-wide">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
              6-10 WEEK ENGAGEMENTS
            </div>
            <h2 
              className="text-slate-900 mb-4"
              style={{ fontSize: "clamp(26px, 5vw, 40px)", fontWeight: 700, letterSpacing: "-0.02em" }}
            >
              Outcomes in weeks, not years
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto" style={{ fontSize: 16, lineHeight: 1.7 }}>
              Sprint-based delivery with full knowledge transfer. We leave you with operational autonomy, not ongoing dependencies.
            </p>
          </div>
          
          {/* Methodology steps */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-4">
            {methodSteps.map((step, i) => (
              <MethodStep key={i} step={step} index={i} isVisible={methodVis} />
            ))}
          </div>
          
          {/* CTA to methodology page */}
          <div className="text-center mt-12">
            <Link
              to="/the-vaultiam-way"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-200 text-slate-700 font-semibold hover:border-blue-300 hover:text-blue-600 transition-all duration-200 shadow-sm"
              style={{ fontSize: 14 }}
            >
              Learn the full methodology
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ STATS / TRUST SECTION ═══ */}
      <section
        ref={statsRef}
        className="py-16 sm:py-20 bg-white border-y border-slate-100"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center">
            {[
              { value: "50+", label: "Regulated enterprises secured" },
              { value: "2M+", label: "Identities under governance" },
              { value: "0", label: "Compliance fines for clients" },
              { value: "100%", label: "Knowledge transfer guarantee" },
            ].map((stat, i) => (
              <div 
                key={i}
                style={{
                  opacity: statsVis ? 1 : 0,
                  transform: statsVis ? "translateY(0)" : "translateY(20px)",
                  transition: `all 0.5s ease ${i * 100}ms`,
                }}
              >
                <div className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <p className="text-slate-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA SECTION ═══ */}
      <section
        ref={ctaRef}
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(155deg, #1e293b 0%, #334155 60%, #1e3a5f 100%)",
          paddingTop: "clamp(60px, 10vw, 80px)",
          paddingBottom: "clamp(60px, 10vw, 80px)",
        }}
      >
        <div className="absolute top-0 right-0 w-96 h-96 opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)", transform: "translate(30%, -30%)" }} 
        />
        
        <div 
          className="relative z-10 max-w-3xl mx-auto px-4 sm:px-5 text-center"
          style={{
            opacity: ctaVis ? 1 : 0,
            transform: ctaVis ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease",
          }}
        >
          <h2 
            className="text-white mb-4"
            style={{ fontSize: "clamp(26px, 5vw, 40px)", fontWeight: 700, letterSpacing: "-0.02em" }}
          >
            See how your identity security compares
          </h2>
          <p className="text-slate-300 mb-8 leading-relaxed" style={{ fontSize: "clamp(15px, 3vw, 17px)" }}>
            In 30 minutes, our security architects will review your current IAM setup and identify your three biggest access risks—with specific remediation recommendations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-semibold transition-all duration-200"
              style={{
                background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
                boxShadow: "0 4px 20px rgba(37,99,235,0.4)",
                fontSize: 16,
              }}
            >
              Book Your Free Assessment
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </Link>
          </div>
          
          {/* Social proof quote */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 max-w-lg mx-auto">
            <p className="text-slate-300 text-sm italic mb-3">
              "The assessment uncovered risks we'd missed for 2 years. Their clarity on prioritization was exactly what we needed."
            </p>
            <p className="text-slate-400 text-xs font-medium">— CISO, Series C FinTech</p>
          </div>
        </div>
      </section>
    </div>
  );
}
