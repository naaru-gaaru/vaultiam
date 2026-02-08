import { Helmet } from "react-helmet-async";
import { useState, useEffect, useRef } from "react";

// Consumer email domains to block
const CONSUMER_EMAIL_DOMAINS = [
  'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com',
  'icloud.com', 'mail.com', 'protonmail.com', 'proton.me', 'tutanota.com',
  'zoho.com', 'yandex.com', 'gmx.com', 'mail.ru', 'live.com', 'msn.com',
  'yahoo.co.uk', 'yahoo.ca', 'googlemail.com', 'me.com', 'mac.com'
];

// Scroll reveal hook
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

// Animated counter component
function AnimatedCounter({ end, suffix = "", duration = 2000 }) {
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
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(end);
    };
    requestAnimationFrame(animate);
  }, [visible, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    industry: "",
    inquiry: "",
    message: "",
  });
  
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
    errorMessage: "",
  });

  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    if (!email) return "";
    
    const domain = email.split('@')[1]?.toLowerCase();
    if (!domain) return "";
    
    if (CONSUMER_EMAIL_DOMAINS.includes(domain)) {
      return "Please use your company email address, not a personal email.";
    }
    
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });

    if (name === "email") {
      setEmailError(validateEmail(value));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const emailValidationError = validateEmail(formState.email);
    if (emailValidationError) {
      setEmailError(emailValidationError);
      return;
    }

    setStatus({ submitting: true, submitted: false, error: false, errorMessage: "" });

    try {
      const payload = {
        access_key: "f81c581f-feae-4ac7-b456-b4b4e0041597",
        name: formState.name,
        email: formState.email,
        company: formState.company,
        industry: formState.industry || "Not specified",
        inquiry: formState.inquiry || "General Inquiry",
        message: formState.message,
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      
      const result = await response.json();

      if (result.success) {
        setStatus({ submitting: false, submitted: true, error: false, errorMessage: "" });
        setFormState({
          name: "",
          email: "",
          company: "",
          industry: "",
          inquiry: "",
          message: "",
        });
        setEmailError("");
      } else {
        throw new Error(result.message || "Submission failed");
      }
    } catch (error) {
      setStatus({ 
        submitting: false, 
        submitted: false, 
        error: true,
        errorMessage: error.message || "Something went wrong. Please try again."
      });
    }
  };

  // Load Calendly widget
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const [trustRef, trustVisible] = useReveal(0.1);

  return (
    <>
      <Helmet>
        <title>Contact Us | VaultIAM - Identity Security for FinTech & Healthcare</title>
        <meta
          name="description"
          content="Get in touch with VaultIAM for a free identity security assessment. Serving FinTech and Healthcare enterprises across North America. No sales pressure, just expertise."
        />
      </Helmet>

      {/* Hero Section */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(155deg, #1e293b 0%, #334155 60%, #1e3a5f 100%)",
          paddingTop: "clamp(70px, 15vw, 104px)",
          paddingBottom: "clamp(28px, 7vw, 48px)",
        }}
      >
        <div
          className="absolute top-0 right-0 w-96 h-96 opacity-20 pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(37,99,235,0.3) 0%, transparent 70%)",
            transform: "translate(30%, -30%)",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h1
            className="font-bold mb-4 sm:mb-5"
            style={{
              fontSize: "clamp(32px, 7vw, 52px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#ffffff",
            }}
          >
            Let's Talk{" "}
            <span style={{ color: "#3b82f6" }}>Identity</span>{" "}
            Security
          </h1>
          <p
            className="max-w-2xl mx-auto"
            style={{
              fontSize: "clamp(16px, 2.5vw, 19px)",
              lineHeight: 1.6,
              color: "#cbd5e1",
            }}
          >
            No sales pressure. No pitch decks. Just identity expertise.
            <br />
            We respond to all inquiries within 24 business hours.
          </p>
        </div>
      </section>

      {/* Form & Contact Info Section */}
      <section className="py-8 sm:py-12" style={{ background: "#ffffff" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            
            {/* LEFT: Contact Form */}
            <div>
              <div
                className="rounded-2xl p-6 sm:p-7"
                style={{
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0",
                }}
              >
                <h2
                  className="font-semibold mb-5"
                  style={{
                    fontSize: "clamp(20px, 3vw, 24px)",
                    color: "#0f172a",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Send Us a Message
                </h2>

                {status.submitted ? (
                  <div
                    className="rounded-xl p-6 text-center"
                    style={{
                      background: "rgba(34,197,94,0.1)",
                      border: "1px solid rgba(34,197,94,0.3)",
                    }}
                  >
                    <svg
                      className="w-12 h-12 mx-auto mb-3"
                      fill="none"
                      stroke="#22c55e"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <h3
                      className="font-semibold mb-2"
                      style={{ fontSize: 18, color: "#22c55e" }}
                    >
                      Message Sent Successfully!
                    </h3>
                    <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.4 }}>
                      We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block mb-1.5"
                        style={{ fontSize: 13, color: "#475569", fontWeight: 500 }}
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg"
                        style={{
                          background: "#ffffff",
                          border: "1px solid #e2e8f0",
                          color: "#0f172a",
                          fontSize: 14,
                          lineHeight: 1.3,
                        }}
                        placeholder="John Smith"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-1.5"
                        style={{ fontSize: 13, color: "#475569", fontWeight: 500 }}
                      >
                        Work Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg"
                        style={{
                          background: "#ffffff",
                          border: emailError ? "1px solid #ef4444" : "1px solid #e2e8f0",
                          color: "#0f172a",
                          fontSize: 14,
                          lineHeight: 1.3,
                        }}
                        placeholder="john@company.com"
                      />
                      {emailError && (
                        <p style={{ fontSize: 12, color: "#ef4444", marginTop: 3, lineHeight: 1.3 }}>
                          {emailError}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block mb-1.5"
                        style={{ fontSize: 13, color: "#475569", fontWeight: 500 }}
                      >
                        Company Name *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formState.company}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg"
                        style={{
                          background: "#ffffff",
                          border: "1px solid #e2e8f0",
                          color: "#0f172a",
                          fontSize: 14,
                          lineHeight: 1.3,
                        }}
                        placeholder="Acme Financial"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="industry"
                        className="block mb-1.5"
                        style={{ fontSize: 13, color: "#475569", fontWeight: 500 }}
                      >
                        Industry
                      </label>
                      <select
                        id="industry"
                        name="industry"
                        value={formState.industry}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg"
                        style={{
                          background: "#ffffff",
                          border: "1px solid #e2e8f0",
                          color: formState.industry ? "#0f172a" : "#94a3b8",
                          fontSize: 14,
                          lineHeight: 1.3,
                        }}
                      >
                        <option value="">Select industry</option>
                        <option value="FinTech">FinTech</option>
                        <option value="Healthcare">Healthcare / HealthTech</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="inquiry"
                        className="block mb-1.5"
                        style={{ fontSize: 13, color: "#475569", fontWeight: 500 }}
                      >
                        I'm Interested In
                      </label>
                      <select
                        id="inquiry"
                        name="inquiry"
                        value={formState.inquiry}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg"
                        style={{
                          background: "#ffffff",
                          border: "1px solid #e2e8f0",
                          color: formState.inquiry ? "#0f172a" : "#94a3b8",
                          fontSize: 14,
                          lineHeight: 1.3,
                        }}
                      >
                        <option value="">Select inquiry type</option>
                        <option value="Free Assessment">Free Identity Security Assessment</option>
                        <option value="IAM Services">IAM Implementation Services</option>
                        <option value="CIAM Services">CIAM / Customer Identity</option>
                        <option value="PAM Services">Privileged Access Management</option>
                        <option value="Partnership">Partnership Opportunities</option>
                        <option value="General">General Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block mb-1.5"
                        style={{ fontSize: 13, color: "#475569", fontWeight: 500 }}
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows="5"
                        value={formState.message}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg resize-none"
                        style={{
                          background: "#ffffff",
                          border: "1px solid #e2e8f0",
                          color: "#0f172a",
                          fontSize: 14,
                          lineHeight: 1.4,
                        }}
                        placeholder="Tell us about your identity security challenges..."
                      />
                    </div>

                    {status.error && (
                      <div
                        className="rounded-lg p-2.5"
                        style={{
                          background: "rgba(239,68,68,0.1)",
                          border: "1px solid rgba(239,68,68,0.3)",
                          color: "#dc2626",
                          fontSize: 13,
                          lineHeight: 1.4,
                        }}
                      >
                        {status.errorMessage || "Something went wrong. Please email us directly at hello@vaultiam.com"}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status.submitting || emailError}
                      className="w-full px-5 py-3 rounded-xl text-white font-semibold transition-all duration-200"
                      style={{
                        background: (status.submitting || emailError)
                          ? "#94a3b8"
                          : "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
                        boxShadow: (status.submitting || emailError)
                          ? "none"
                          : "0 4px 20px rgba(37,99,235,0.4)",
                        fontSize: 14,
                        cursor: (status.submitting || emailError) ? "not-allowed" : "pointer",
                      }}
                    >
                      {status.submitting ? "Sending..." : "Send Message"}
                    </button>

                    <p
                      className="text-center"
                      style={{ fontSize: 12, color: "#64748b", lineHeight: 1.4 }}
                    >
                      Your data is protected with enterprise-grade security. Never shared.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* RIGHT: Contact Info & Calendly */}
            <div className="flex flex-col gap-5">
              {/* Contact Info - Compact version */}
              <div
                className="rounded-2xl p-5 sm:p-6"
                style={{
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0",
                }}
              >
                <div className="space-y-2.5">
                  {/* Email */}
                  <a
                    href="mailto:hello@vaultiam.com"
                    className="flex items-center gap-2.5 p-2.5 rounded-lg transition-all duration-200 hover:bg-blue-50 hover:border-blue-200"
                    style={{
                      background: "#ffffff",
                      border: "1px solid #e2e8f0",
                    }}
                  >
                    <svg
                      className="w-5 h-5 flex-shrink-0"
                      fill="none"
                      stroke="#3b82f6"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <div style={{ fontSize: 14, color: "#2563eb", fontWeight: 500, lineHeight: 1.3 }}>
                      hello@vaultiam.com
                    </div>
                  </a>

                  {/* Phone */}
                  <a
                    href="tel:+12093155453"
                    className="flex items-center gap-2.5 p-2.5 rounded-lg transition-all duration-200 hover:bg-blue-50 hover:border-blue-200"
                    style={{
                      background: "#ffffff",
                      border: "1px solid #e2e8f0",
                    }}
                  >
                    <svg
                      className="w-5 h-5 flex-shrink-0"
                      fill="none"
                      stroke="#3b82f6"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <div style={{ fontSize: 14, color: "#2563eb", fontWeight: 500, lineHeight: 1.3 }}>
                      (209) 315-5453
                    </div>
                  </a>
                </div>
              </div>

              {/* Calendly Widget */}
              <div
                className="rounded-2xl overflow-hidden flex-1"
                style={{
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0",
                }}
              >
                <div className="p-5 sm:p-6 pb-3">
                  <h3
                    className="font-semibold mb-1"
                    style={{
                      fontSize: "clamp(18px, 2.5vw, 21px)",
                      color: "#0f172a",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    Book a Discovery Call
                  </h3>
                  <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.3 }}>
                    30-minute consultation
                  </p>
                </div>
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/hello-vaultiam/vaultiam-discovery-call?hide_event_type_details=1&hide_gdpr_banner=1&background_color=f8fafc&text_color=0f172a&primary_color=2563eb"
                  style={{ minWidth: "320px", height: "480px" }}
                ></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust Section with Animated Stats - Dark gradient background */}
      <section
        ref={trustRef}
        className="relative overflow-hidden py-10 sm:py-14"
        style={{
          background: "linear-gradient(155deg, #1e293b 0%, #334155 60%, #1e3a5f 100%)",
          opacity: trustVisible ? 1 : 0,
          transform: trustVisible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s ease",
        }}
      >
        {/* Radial glow */}
        <div
          className="absolute top-0 right-0 w-96 h-96 opacity-20 pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(37,99,235,0.3) 0%, transparent 70%)",
            transform: "translate(30%, -30%)",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6">
            {/* Stat 1 - 6-10 Week Engagements */}
            <div className="text-center">
              <div
                className="font-bold mb-1"
                style={{
                  fontSize: "clamp(32px, 5vw, 44px)",
                  color: "#60a5fa",
                  lineHeight: 1.1,
                }}
              >
                <AnimatedCounter end={6} suffix="-10" />
              </div>
              <div style={{ fontSize: 14, color: "#cbd5e1", fontWeight: 500 }}>
                Week Engagements
              </div>
            </div>

            {/* Stat 2 */}
            <div className="text-center">
              <div
                className="font-bold mb-1"
                style={{
                  fontSize: "clamp(32px, 5vw, 44px)",
                  color: "#60a5fa",
                  lineHeight: 1.1,
                }}
              >
                <AnimatedCounter end={2} suffix="M+" />
              </div>
              <div style={{ fontSize: 14, color: "#cbd5e1", fontWeight: 500 }}>
                Identities Secured
              </div>
            </div>

            {/* Stat 3 */}
            <div className="text-center">
              <div
                className="font-bold mb-1"
                style={{
                  fontSize: "clamp(32px, 5vw, 44px)",
                  color: "#60a5fa",
                  lineHeight: 1.1,
                }}
              >
                <AnimatedCounter end={0} />
              </div>
              <div style={{ fontSize: 14, color: "#cbd5e1", fontWeight: 500 }}>
                Compliance Fines
              </div>
            </div>

            {/* Stat 4 */}
            <div className="text-center">
              <div
                className="font-bold mb-1"
                style={{
                  fontSize: "clamp(32px, 5vw, 44px)",
                  color: "#60a5fa",
                  lineHeight: 1.1,
                }}
              >
                <AnimatedCounter end={100} suffix="%" />
              </div>
              <div style={{ fontSize: 14, color: "#cbd5e1", fontWeight: 500 }}>
                Knowledge Transfer
              </div>
            </div>
          </div>

          {/* Privacy Commitment */}
          <div className="text-center max-w-2xl mx-auto">
            <p style={{ fontSize: 13, color: "#94a3b8", lineHeight: 1.5 }}>
              Enterprise-grade security. Your data is never sold or shared.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
