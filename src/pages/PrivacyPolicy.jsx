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

/* ────────────────────────────────────────────
   EFFECTIVE DATE — update when policy changes
   ──────────────────────────────────────────── */
const EFFECTIVE_DATE = "February 11, 2025";
const ENTITY_NAME = "VaultIAM"; // Update to legal entity name once incorporated

const SECTIONS = [
  {
    id: "overview",
    title: "1. Overview",
    content: (
      <>
        <p>{ENTITY_NAME} ("{ENTITY_NAME}," "we," "us," or "our") operates the website located at <strong>www.vaultiam.com</strong> (the "Website"). This Privacy Policy describes how we collect, use, disclose, and protect personal information when you visit our Website or interact with us.</p>
        <p>We are committed to protecting your privacy in accordance with applicable Canadian and United States privacy legislation, including the <em>Personal Information Protection and Electronic Documents Act</em> (PIPEDA), the <em>California Consumer Privacy Act</em> as amended by the <em>California Privacy Rights Act</em> (CCPA/CPRA), and other applicable federal, provincial, and state privacy laws.</p>
        <p>By using our Website, you acknowledge that you have read and understood this Privacy Policy. If you do not agree with our practices, please do not use our Website.</p>
      </>
    ),
  },
  {
    id: "information-collected",
    title: "2. Information We Collect",
    content: (
      <>
        <p>We collect minimal personal information, limited to what you voluntarily provide through our Website contact form. Specifically:</p>
        <p><strong>Information you provide directly:</strong> When you submit our contact form, we collect your name, business email address, company name, and the contents of your message. Our contact form restricts submissions to business email addresses; consumer email providers (such as Gmail, Yahoo, and Outlook personal accounts) are not accepted.</p>
        <p><strong>Information we do not collect:</strong> We do not use cookies, web analytics tools, tracking pixels, or any other automated data collection technologies. We do not collect IP addresses, device information, browsing behavior, or location data through our Website. We do not use advertising technologies or participate in behavioral advertising.</p>
        <p>Our contact form is processed through Web3Forms, a third-party form submission service. Web3Forms acts as a data processor on our behalf and transmits your form submission to us via email. We encourage you to review <a href="https://web3forms.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Web3Forms' privacy policy</a> for details on their data handling practices.</p>
      </>
    ),
  },
  {
    id: "use-of-information",
    title: "3. How We Use Your Information",
    content: (
      <>
        <p>We use the personal information collected through our contact form for the following purposes:</p>
        <p><strong>Responding to your inquiry:</strong> To reply to your message and provide information about our services as requested.</p>
        <p><strong>Business communication:</strong> To follow up on your inquiry and, where appropriate, discuss how our identity security services may address your organization's needs.</p>
        <p><strong>Record keeping:</strong> To maintain records of business communications for operational and legal compliance purposes.</p>
        <p>We do not use your personal information for automated decision-making, profiling, or any purpose unrelated to the inquiry you submitted.</p>
      </>
    ),
  },
  {
    id: "legal-basis",
    title: "4. Legal Basis for Processing",
    content: (
      <>
        <p><strong>Under PIPEDA (Canada):</strong> We collect and use your personal information based on your express consent, which you provide when you voluntarily submit the contact form. You may withdraw your consent at any time by contacting us at <a href="mailto:hello@vaultiam.com" className="text-blue-600 hover:text-blue-700 underline">hello@vaultiam.com</a>.</p>
        <p><strong>Under CCPA/CPRA (California, United States):</strong> We collect personal information for the business purposes described in Section 3 above. We do not sell or share your personal information as those terms are defined under the CCPA/CPRA. We do not use or disclose sensitive personal information for purposes beyond what is necessary to provide our services.</p>
        <p><strong>Under other applicable US state privacy laws:</strong> Our collection and use of personal information is limited to the purposes described in this Privacy Policy and is consistent with the requirements of applicable state privacy legislation, including the laws of Virginia (VCDPA), Colorado (CPA), Connecticut (CTDPA), Utah (UCPA), Texas (TDPSA), Oregon (OCPA), Montana (MCDPA), and other states with comprehensive privacy legislation.</p>
      </>
    ),
  },
  {
    id: "disclosure",
    title: "5. Disclosure of Information",
    content: (
      <>
        <p>We do not sell, rent, trade, or otherwise disclose your personal information to third parties for their own purposes. We may disclose your information in the following limited circumstances:</p>
        <p><strong>Service providers:</strong> We use Web3Forms to process contact form submissions. Web3Forms processes your data solely to transmit your form submission to us and does not use your data for any other purpose.</p>
        <p><strong>Legal obligations:</strong> We may disclose your personal information where required to do so by applicable law, regulation, legal process, or governmental request, or where disclosure is necessary to protect our rights, safety, or property, or the rights, safety, or property of others.</p>
        <p><strong>Business transactions:</strong> In the event of a merger, acquisition, reorganization, or sale of assets, your personal information may be transferred as part of that transaction. We will notify you via prominent notice on our Website of any change in ownership or uses of your personal information.</p>
      </>
    ),
  },
  {
    id: "data-retention",
    title: "6. Data Retention",
    content: (
      <>
        <p>We retain personal information collected through our contact form only for as long as necessary to fulfill the purposes for which it was collected, including to respond to your inquiry and maintain business records. We retain contact form submissions for a maximum of twenty-four (24) months from the date of submission, after which they are securely deleted unless a longer retention period is required by law or for the establishment, exercise, or defense of legal claims.</p>
        <p>You may request deletion of your personal information at any time by contacting us at <a href="mailto:hello@vaultiam.com" className="text-blue-600 hover:text-blue-700 underline">hello@vaultiam.com</a>.</p>
      </>
    ),
  },
  {
    id: "data-security",
    title: "7. Data Security",
    content: (
      <>
        <p>We implement reasonable administrative, technical, and organizational safeguards to protect personal information against unauthorized access, alteration, disclosure, or destruction. Our Website uses Transport Layer Security (TLS) encryption for all data transmissions.</p>
        <p>While we take reasonable measures to protect your personal information, no method of electronic transmission or storage is completely secure. We cannot guarantee absolute security of your data.</p>
      </>
    ),
  },
  {
    id: "your-rights",
    title: "8. Your Privacy Rights",
    content: (
      <>
        <p>Depending on your jurisdiction, you may have the following rights regarding your personal information:</p>
        <p><strong>Canadian residents (PIPEDA and provincial legislation):</strong> You have the right to access your personal information held by us, request correction of inaccurate information, withdraw your consent to the collection, use, or disclosure of your personal information, and file a complaint with the Office of the Privacy Commissioner of Canada or the applicable provincial privacy commissioner.</p>
        <p><strong>California residents (CCPA/CPRA):</strong> You have the right to know what personal information we collect, use, and disclose; request deletion of your personal information; opt out of the sale or sharing of your personal information (note: we do not sell or share personal information); limit the use of sensitive personal information; and not be discriminated against for exercising your privacy rights. California residents may submit a verifiable consumer request by contacting us at the email address below.</p>
        <p><strong>Residents of other US states with comprehensive privacy laws:</strong> You may have similar rights to access, correct, delete, and obtain a portable copy of your personal information, and to opt out of targeted advertising, the sale of personal data, and profiling. We honor all such rights as required by applicable law. You may exercise your rights by contacting us at <a href="mailto:hello@vaultiam.com" className="text-blue-600 hover:text-blue-700 underline">hello@vaultiam.com</a>.</p>
        <p>We will respond to all verifiable privacy requests within the timeframes required by applicable law (generally within 30 days under PIPEDA or 45 days under the CCPA/CPRA). We will not charge a fee for processing your request unless permitted by law.</p>
      </>
    ),
  },
  {
    id: "international-transfers",
    title: "9. International Data Transfers",
    content: (
      <>
        <p>Our Website is operated from Canada. If you are submitting personal information from outside Canada, your information may be transferred to, stored, and processed in Canada and the United States, where our service providers may be located. By submitting information through our contact form, you consent to such transfer, storage, and processing.</p>
        <p>We ensure that any international transfers of personal information are carried out in compliance with applicable privacy legislation, including PIPEDA and applicable US state laws.</p>
      </>
    ),
  },
  {
    id: "children",
    title: "10. Children's Privacy",
    content: (
      <>
        <p>Our Website and services are intended for business professionals and are not directed at individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child under 18, we will promptly delete that information. If you believe we have collected information from a child, please contact us immediately at <a href="mailto:hello@vaultiam.com" className="text-blue-600 hover:text-blue-700 underline">hello@vaultiam.com</a>.</p>
      </>
    ),
  },
  {
    id: "casl",
    title: "11. Canadian Anti-Spam Legislation (CASL)",
    content: (
      <>
        <p>We comply with Canada's Anti-Spam Legislation (CASL). We will only send you commercial electronic messages if we have your express or implied consent as defined under CASL. Submitting a contact form inquiry constitutes implied consent for us to respond to your inquiry and communicate with you about the subject matter of your request for a reasonable period.</p>
        <p>We will not add you to marketing email lists based on a contact form submission. If we wish to send you commercial electronic messages beyond responding to your inquiry, we will seek your express consent. You may withdraw your consent to receive electronic messages at any time by contacting us at <a href="mailto:hello@vaultiam.com" className="text-blue-600 hover:text-blue-700 underline">hello@vaultiam.com</a> or by using the unsubscribe mechanism provided in any commercial electronic message.</p>
      </>
    ),
  },
  {
    id: "do-not-track",
    title: "12. Do Not Track Signals",
    content: (
      <>
        <p>Our Website does not use cookies or tracking technologies. As such, our Website naturally honors "Do Not Track" browser signals — there is no tracking behavior to disable. We do not track users across third-party websites and do not respond differently to "Do Not Track" signals because no tracking occurs in the first place.</p>
      </>
    ),
  },
  {
    id: "changes",
    title: "13. Changes to This Privacy Policy",
    content: (
      <>
        <p>We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. When we make material changes, we will update the "Effective Date" at the top of this page and post the revised Privacy Policy on our Website. We encourage you to review this Privacy Policy periodically. Your continued use of the Website after any changes constitutes your acceptance of the updated Privacy Policy.</p>
      </>
    ),
  },
  {
    id: "contact",
    title: "14. Contact Us",
    content: (
      <>
        <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our handling of your personal information, please contact us at:</p>
        <div className="bg-slate-50 rounded-lg p-5 border border-slate-200 mt-3">
          <p className="mb-1"><strong>{ENTITY_NAME}</strong></p>
          <p className="mb-1">460 Adelaide St. E, Suite 905</p>
          <p className="mb-1">Toronto, ON M5A 0E7</p>
          <p className="mb-1">Canada</p>
          <p className="mt-3">Email: <a href="mailto:hello@vaultiam.com" className="text-blue-600 hover:text-blue-700 underline">hello@vaultiam.com</a></p>
        </div>
        <p className="mt-4">If you are not satisfied with our response to a privacy concern, you may contact the <a href="https://www.priv.gc.ca/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Office of the Privacy Commissioner of Canada</a> or the applicable regulatory authority in your jurisdiction.</p>
      </>
    ),
  },
];

export default function PrivacyPolicy() {
  const [heroRef, heroVis] = useReveal(0.05);
  const [contentRef, contentVis] = useReveal(0.05);

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(155deg, #1e293b 0%, #334155 60%, #1e3a5f 100%)",
          padding: "clamp(100px, 15vw, 140px) 0 clamp(40px, 8vw, 64px)",
        }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 75% 30%, rgba(37,99,235,0.1) 0%, transparent 68%)" }} />
        <div
          className="max-w-4xl mx-auto px-5 relative z-10"
          style={{
            opacity: heroVis ? 1 : 0,
            transform: heroVis ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <h1 className="text-white mb-3" style={{ fontSize: "clamp(30px, 5vw, 44px)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.15 }}>
            Privacy Policy
          </h1>
          <p className="text-slate-400" style={{ fontSize: 14 }}>Effective date: {EFFECTIVE_DATE}</p>
        </div>
      </section>

      {/* Content */}
      <section ref={contentRef} className="py-12 sm:py-16 bg-white">
        <div
          className="max-w-4xl mx-auto px-5"
          style={{
            opacity: contentVis ? 1 : 0,
            transform: contentVis ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          {/* Table of Contents */}
          <nav className="mb-10 p-5 rounded-xl bg-slate-50 border border-slate-200">
            <p className="text-slate-900 mb-3" style={{ fontSize: 14, fontWeight: 700 }}>Contents</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {SECTIONS.map(s => (
                <a key={s.id} href={`#${s.id}`} className="text-blue-600 hover:text-blue-700 transition-colors" style={{ fontSize: 13, fontWeight: 500 }}>
                  {s.title}
                </a>
              ))}
            </div>
          </nav>

          {/* Sections */}
          <div className="space-y-10">
            {SECTIONS.map(s => (
              <div key={s.id} id={s.id} className="scroll-mt-24">
                <h2 className="text-slate-900 mb-4 pb-2 border-b border-slate-200" style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.01em" }}>
                  {s.title}
                </h2>
                <div className="text-slate-600 space-y-3" style={{ fontSize: 14.5, lineHeight: 1.75 }}>
                  {s.content}
                </div>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <div className="mt-12 pt-6 border-t border-slate-200 text-center">
            <p className="text-slate-500" style={{ fontSize: 12 }}>
              This Privacy Policy was last updated on {EFFECTIVE_DATE}. See also our <Link to="/terms" className="text-blue-600 hover:text-blue-700 underline">Terms of Service</Link>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
