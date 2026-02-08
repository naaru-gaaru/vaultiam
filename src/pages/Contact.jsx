import { Helmet } from "react-helmet-async";

export default function Contact() {
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
          paddingTop: "clamp(80px, 15vw, 120px)",
          paddingBottom: "clamp(60px, 12vw, 100px)",
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
              Let's Talk Identity Security
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
              }}
            >
              <p style={{ color: "#ffffff", fontSize: 18 }}>Contact Form - Coming Next</p>
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
