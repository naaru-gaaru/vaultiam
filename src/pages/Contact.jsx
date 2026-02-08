import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";

// Consumer email domains to block
const CONSUMER_EMAIL_DOMAINS = [
  'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com',
  'icloud.com', 'mail.com', 'protonmail.com', 'proton.me', 'tutanota.com',
  'zoho.com', 'yandex.com', 'gmx.com', 'mail.ru', 'live.com', 'msn.com',
  'yahoo.co.uk', 'yahoo.ca', 'googlemail.com', 'me.com', 'mac.com'
];

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

    // Validate email on change
    if (name === "email") {
      setEmailError(validateEmail(value));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Final email validation
    const emailValidationError = validateEmail(formState.email);
    if (emailValidationError) {
      setEmailError(emailValidationError);
      return;
    }

    setStatus({ submitting: true, submitted: false, error: false });

    try {
      const token = await window.grecaptcha.execute(
        "6LdXY2MsAAAAAMx1UObm96eFcd6X5QP8GJfqOYf2",
        { action: "submit" }
      );

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "f81c581f-feae-4ac7-b456-b4b4e0041597",
          name: formState.name,
          email: formState.email,
          company: formState.company,
          industry: formState.industry,
          inquiry: formState.inquiry,
          message: formState.message,
          "g-recaptcha-response": token,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({ submitting: false, submitted: true, error: false });
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
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus({ submitting: false, submitted: false, error: true });
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js?render=6LdXY2MsAAAAAMx1UObm96eFcd6X5QP8GJfqOYf2";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Contact Us | VaultIAM - Identity Security for FinTech & Healthcare</title>
        <meta
          name="description"
          content="Get in touch with VaultIAM for a free identity security assessment. Serving FinTech and Healthcare enterprises across North America. No sales pressure, just expertise."
        />
      </Helmet>

      {/* Hero Section - Title Only */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(155deg, #1e293b 0%, #334155 60%, #1e3a5f 100%)",
          paddingTop: "clamp(70px, 15vw, 104px)",
          paddingBottom: "clamp(40px, 10vw, 64px)",
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

      {/* Form & Contact Info Section - White Background */}
      <section className="py-16 sm:py-20" style={{ background: "#ffffff" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* LEFT: Contact Form */}
            <div>
              <div
                className="rounded-2xl p-6 sm:p-8"
                style={{
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0",
                }}
              >
                <h2
                  className="font-semibold mb-6"
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
                    <p style={{ fontSize: 14, color: "#64748b" }}>
                      We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block mb-2"
                        style={{ fontSize: 14, color: "#475569", fontWeight: 500 }}
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
                        className="w-full px-4 py-3 rounded-lg"
                        style={{
                          background: "#ffffff",
                          border: "1px solid #e2e8f0",
                          color: "#0f172a",
                          fontSize: 15,
                        }}
                        placeholder="John Smith"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2"
                        style={{ fontSize: 14, color: "#475569", fontWeight: 500 }}
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
                        className="w-full px-4 py-3 rounded-lg"
                        style={{
                          background: "#ffffff",
                          border: emailError ? "1px solid #ef4444" : "1px solid #e2e8f0",
                          color: "#0f172a",
                          fontSize: 15,
                        }}
                        placeholder="john@company.com"
                      />
                      {emailError && (
                        <p style={{ fontSize: 13, color: "#ef4444", marginTop: 4 }}>
                          {emailError}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block mb-2"
                        style={{ fontSize: 14, color: "#475569", fontWeight: 500 }}
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
                        className="w-full px-4 py-3 rounded-lg"
                        style={{
                          background: "#ffffff",
                          border: "1px solid #e2e8f0",
                          color: "#0f172a",
                          fontSize: 15,
                        }}
                        placeholder="Acme Financial"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="industry"
                        className="block mb-2"
                        style={{ fontSize: 14, color: "#475569", fontWeight: 500 }}
                      >
                        Industry
                      </label>
                      <select
                        id="industry"
                        name="industry"
                        value={formState.industry}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg"
                        style={{
                          background: "#ffffff",
                          border: "1px solid #e2e8f0",
                          color: formState.industry ? "#0f172a" : "#94a3b8",
                          fontSize: 15,
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
                        className="block mb-2"
                        style={{ fontSize: 14, color: "#475569", fontWeight: 500 }}
                      >
                        I'm Interested In
                      </label>
                      <select
                        id="inquiry"
                        name="inquiry"
                        value={formState.inquiry}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg"
                        style={{
                          background: "#ffffff",
                          border: "1px solid #e2e8f0",
                          color: formState.inquiry ? "#0f172a" : "#94a3b8",
                          fontSize: 15,
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
                        className="block mb-2"
                        style={{ fontSize: 14, color: "#475569", fontWeight: 500 }}
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows="4"
                        value={formState.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg resize-none"
                        style={{
                          background: "#ffffff",
                          border: "1px solid #e2e8f0",
                          color: "#0f172a",
                          fontSize: 15,
                        }}
                        placeholder="Tell us about your identity security challenges..."
                      />
                    </div>

                    {status.error && (
                      <div
                        className="rounded-lg p-3"
                        style={{
                          background: "rgba(239,68,68,0.1)",
                          border: "1px solid rgba(239,68,68,0.3)",
                          color: "#dc2626",
                          fontSize: 14,
                        }}
                      >
                        Something went wrong. Please try again or email us directly.
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status.submitting || emailError}
                      className="w-full px-6 py-3.5 rounded-xl text-white font-semibold transition-all duration-200"
                      style={{
                        background: (status.submitting || emailError)
                          ? "#94a3b8"
                          : "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
                        boxShadow: (status.submitting || emailError)
                          ? "none"
                          : "0 4px 20px rgba(37,99,235,0.4)",
                        fontSize: 15,
                        cursor: (status.submitting || emailError) ? "not-allowed" : "pointer",
                      }}
                    >
                      {status.submitting ? "Sending..." : "Send Message"}
                    </button>

                    <p
                      className="text-center"
                      style={{ fontSize: 13, color: "#64748b", lineHeight: 1.5 }}
                    >
                      Your data is protected with enterprise-grade security. Never shared.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* RIGHT: Contact Info */}
            <div>
              <div
                className="rounded-2xl p-6 sm:p-8 mb-6"
                style={{
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0",
                }}
              >
                <h3
                  className="font-semibold mb-6"
                  style={{
                    fontSize: "clamp(18px, 2.5vw, 22px)",
                    color: "#0f172a",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Get in Touch Directly
                </h3>

                <div className="space-y-4">
                  {/* Email */}
                  <a
                    href="mailto:hello@vaultiam.com"
                    className="flex items-start gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-blue-50 hover:border-blue-200"
                    style={{
                      background: "#ffffff",
                      border: "1px solid #e2e8f0",
                    }}
                  >
                    <svg
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
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
                    <div>
                      <div style={{ fontSize: 13, color: "#64748b", marginBottom: 2 }}>
                        Email
                      </div>
                      <div style={{ fontSize: 15, color: "#2563eb", fontWeight: 500 }}>
                        hello@vaultiam.com
                      </div>
                    </div>
                  </a>

                  {/* Phone */}
                  <a
                    href="tel:+12093155453"
                    className="flex items-start gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-blue-50 hover:border-blue-200"
                    style={{
                      background: "#ffffff",
                      border: "1px solid #e2e8f0",
                    }}
                  >
                    <svg
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
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
                    <div>
                      <div style={{ fontSize: 13, color: "#64748b", marginBottom: 2 }}>
                        Phone
                      </div>
                      <div style={{ fontSize: 15, color: "#2563eb", fontWeight: 500 }}>
                        (209) 315-5453
                      </div>
                    </div>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/company/vaultiam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-blue-50 hover:border-blue-200"
                    style={{
                      background: "#ffffff",
                      border: "1px solid #e2e8f0",
                    }}
                  >
                    <svg
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      fill="#3b82f6"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    <div>
                      <div style={{ fontSize: 13, color: "#64748b", marginBottom: 2 }}>
                        LinkedIn
                      </div>
                      <div style={{ fontSize: 15, color: "#2563eb", fontWeight: 500 }}>
                        Follow VaultIAM
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Calendly Placeholder */}
              <div
                className="rounded-2xl p-6 sm:p-8 text-center"
                style={{
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0",
                }}
              >
                <p style={{ color: "#64748b", fontSize: 16 }}>Calendly Widget - Coming in Step 4</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust Section Placeholder */}
      <section className="py-16 sm:py-20" style={{ background: "#f8fafc" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p style={{ color: "#64748b", fontSize: 16 }}>Trust Section with Animated Stats - Coming in Step 5</p>
        </div>
      </section>
    </>
  );
}
