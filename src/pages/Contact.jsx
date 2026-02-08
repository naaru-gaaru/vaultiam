import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";

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

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div
              className="rounded-2xl p-6 sm:p-8"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(10px)",
              }}
            >
              <h2
                className="font-semibold mb-6"
                style={{
                  fontSize: "clamp(20px, 3vw, 24px)",
                  color: "#ffffff",
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
                  <p style={{ fontSize: 14, color: "#cbd5e1" }}>
                    We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2"
                      style={{ fontSize: 14, color: "#e2e8f0", fontWeight: 500 }}
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
                        background: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.15)",
                        color: "#ffffff",
                        fontSize: 15,
                      }}
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2"
                      style={{ fontSize: 14, color: "#e2e8f0", fontWeight: 500 }}
                    >
                      Email Address *
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
                        background: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.15)",
                        color: "#ffffff",
                        fontSize: 15,
                      }}
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block mb-2"
                      style={{ fontSize: 14, color: "#e2e8f0", fontWeight: 500 }}
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
                        background: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.15)",
                        color: "#ffffff",
                        fontSize: 15,
                      }}
                      placeholder="Acme Financial"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="industry"
                      className="block mb-2"
                      style={{ fontSize: 14, color: "#e2e8f0", fontWeight: 500 }}
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
                        background: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.15)",
                        color: formState.industry ? "#ffffff" : "#94a3b8",
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
                      style={{ fontSize: 14, color: "#e2e8f0", fontWeight: 500 }}
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
                        background: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.15)",
                        color: formState.inquiry ? "#ffffff" : "#94a3b8",
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
                      style={{ fontSize: 14, color: "#e2e8f0", fontWeight: 500 }}
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
                        background: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.15)",
                        color: "#ffffff",
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
                        color: "#fca5a5",
                        fontSize: 14,
                      }}
                    >
                      Something went wrong. Please try again or email us directly.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status.submitting}
                    className="w-full px-6 py-3.5 rounded-xl text-white font-semibold transition-all duration-200"
                    style={{
                      background: status.submitting
                        ? "#475569"
                        : "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
                      boxShadow: status.submitting
                        ? "none"
                        : "0 4px 20px rgba(37,99,235,0.4)",
                      fontSize: 15,
                      cursor: status.submitting ? "not-allowed" : "pointer",
                    }}
                  >
                    {status.submitting ? "Sending..." : "Send Message"}
                  </button>

                  <p
                    className="text-center"
                    style={{ fontSize: 13, color: "#94a3b8", lineHeight: 1.5 }}
                  >
                    By submitting this form, you agree to our privacy practices. We never
                    share your information. As a security company, we take data protection
                    seriously.
                  </p>
                </form>
              )}
            </div>

            <div
              className="rounded-2xl p-6 sm:p-8"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <p style={{ color: "#ffffff", fontSize: 18 }}>Contact Info - Coming Next</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20" style={{ background: "#f8fafc" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p style={{ color: "#64748b", fontSize: 16 }}>Trust Section - Coming Next</p>
        </div>
      </section>
    </>
  );
}
