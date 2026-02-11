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

const EFFECTIVE_DATE = "February 11, 2025";
const ENTITY_NAME = "VaultIAM"; // Update to legal entity name once incorporated

const SECTIONS = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    content: (
      <>
        <p>These Terms of Service ("Terms") constitute a legally binding agreement between you ("you" or "your") and {ENTITY_NAME} ("{ENTITY_NAME}," "we," "us," or "our") governing your access to and use of the website located at <strong>www.vaultiam.com</strong> (the "Website").</p>
        <p>By accessing or using our Website, you agree to be bound by these Terms and our <Link to="/privacy" className="text-blue-600 hover:text-blue-700 underline">Privacy Policy</Link>, which is incorporated herein by reference. If you do not agree to these Terms, you must not access or use the Website.</p>
        <p>If you are accessing or using the Website on behalf of a company, organization, or other entity, you represent and warrant that you have the authority to bind that entity to these Terms, and "you" shall refer to both you individually and such entity.</p>
      </>
    ),
  },
  {
    id: "description",
    title: "2. Description of Website",
    content: (
      <>
        <p>The Website is an informational resource for {ENTITY_NAME}'s identity security consulting services, including Identity & Access Management (IAM), Customer Identity & Access Management (CIAM), Privileged Access Management (PAM), and Identity Threat Detection & Response (ITDR) for organizations in the FinTech and Healthcare sectors across the United States and Canada.</p>
        <p>The Website provides general information about our services, methodology, and expertise. The content on the Website does not constitute professional advice, a security assessment, or a guarantee of any particular security outcome.</p>
      </>
    ),
  },
  {
    id: "services",
    title: "3. Professional Services",
    content: (
      <>
        <p>Consulting engagements and professional services are governed by separate service agreements executed between {ENTITY_NAME} and the client organization. These Terms govern only your use of the Website and do not create any obligation for {ENTITY_NAME} to provide professional services.</p>
        <p>Information presented on the Website, including case studies, methodologies, timelines, and outcomes, is provided for illustrative purposes. Actual engagement scope, deliverables, timelines, and outcomes are defined in individual service agreements and may vary based on the specific requirements and circumstances of each client.</p>
      </>
    ),
  },
  {
    id: "use-of-website",
    title: "4. Permitted Use",
    content: (
      <>
        <p>You may access and use the Website for lawful purposes consistent with these Terms. You agree not to:</p>
        <p>(a) use the Website in any manner that could disable, overburden, damage, or impair the Website or interfere with any other party's use of the Website;</p>
        <p>(b) use any automated means, including robots, crawlers, scrapers, or data mining tools, to access the Website for any purpose without our prior written consent;</p>
        <p>(c) attempt to gain unauthorized access to any portion of the Website, or any systems or networks connected to the Website;</p>
        <p>(d) use the Website to transmit any malicious code, viruses, or other harmful software;</p>
        <p>(e) use the Website in violation of any applicable federal, provincial, state, or local law or regulation; or</p>
        <p>(f) impersonate or misrepresent your affiliation with any person or entity.</p>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "5. Intellectual Property",
    content: (
      <>
        <p>All content on the Website — including text, graphics, logos, icons, images, data compilations, software, and the overall design and arrangement thereof — is the property of {ENTITY_NAME} or its content suppliers and is protected by Canadian and international copyright, trademark, and other intellectual property laws.</p>
        <p>The {ENTITY_NAME} name, logo, and all related marks are trademarks of {ENTITY_NAME}. You may not use any of our trademarks without our prior written permission.</p>
        <p>All third-party company names, product names, and logos appearing on the Website are trademarks or registered trademarks of their respective holders. Their appearance on our Website does not imply endorsement, affiliation, or sponsorship by those companies.</p>
        <p>You may view and print content from the Website for your personal, non-commercial use, provided that you do not modify the content and you retain all copyright and proprietary notices. Any other use, reproduction, modification, distribution, or republication of Website content without our prior written consent is prohibited.</p>
      </>
    ),
  },
  {
    id: "contact-form",
    title: "6. Contact Form Submissions",
    content: (
      <>
        <p>When you submit information through our contact form, you represent that the information you provide is accurate and that you have the authority to provide it. Our contact form restricts submissions to business email addresses; consumer email addresses are not accepted.</p>
        <p>Information submitted through the contact form is processed in accordance with our <Link to="/privacy" className="text-blue-600 hover:text-blue-700 underline">Privacy Policy</Link>. By submitting the contact form, you consent to our collection, use, and processing of the information you provide for the purposes described in our Privacy Policy.</p>
        <p>Submitting the contact form does not create a client-consultant relationship, a contractual obligation, or any duty on the part of {ENTITY_NAME} to respond to or act upon your inquiry.</p>
      </>
    ),
  },
  {
    id: "disclaimer",
    title: "7. Disclaimer of Warranties",
    content: (
      <>
        <p>THE WEBSITE AND ALL CONTENT, INFORMATION, AND MATERIALS PROVIDED THEREON ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.</p>
        <p>TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, {ENTITY_NAME} DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.</p>
        <p>{ENTITY_NAME} does not warrant that: (a) the Website will be available at all times or operate without interruption or errors; (b) defects will be corrected; (c) the Website or the server that makes it available are free of viruses or other harmful components; or (d) the content on the Website is accurate, complete, current, or reliable for any particular purpose.</p>
        <p>The information on this Website, including statistics, case studies, methodologies, and service descriptions, is provided for general informational purposes only and should not be relied upon as professional security advice. Security outcomes depend on many factors specific to each organization's environment, and past results described on this Website do not guarantee future outcomes.</p>
      </>
    ),
  },
  {
    id: "limitation",
    title: "8. Limitation of Liability",
    content: (
      <>
        <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL {ENTITY_NAME}, ITS DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, PARTNERS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, OR USE, WHETHER IN AN ACTION IN CONTRACT, TORT (INCLUDING NEGLIGENCE), OR OTHERWISE, ARISING OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO USE THE WEBSITE OR ANY CONTENT THEREON, EVEN IF {ENTITY_NAME} HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>
        <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE TOTAL AGGREGATE LIABILITY OF {ENTITY_NAME} FOR ALL CLAIMS ARISING OUT OF OR RELATED TO THE WEBSITE SHALL NOT EXCEED ONE HUNDRED CANADIAN DOLLARS (CAD $100.00).</p>
        <p>SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF CERTAIN WARRANTIES OR LIABILITY. IN SUCH JURISDICTIONS, OUR LIABILITY SHALL BE LIMITED TO THE GREATEST EXTENT PERMITTED BY APPLICABLE LAW. NOTHING IN THESE TERMS EXCLUDES OR LIMITS LIABILITY THAT CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.</p>
      </>
    ),
  },
  {
    id: "indemnification",
    title: "9. Indemnification",
    content: (
      <>
        <p>You agree to indemnify, defend, and hold harmless {ENTITY_NAME} and its directors, officers, employees, agents, and affiliates from and against any and all claims, damages, losses, liabilities, costs, and expenses (including reasonable legal fees) arising out of or related to: (a) your use of the Website; (b) your violation of these Terms; (c) your violation of any applicable law or regulation; or (d) your violation of any third-party rights.</p>
      </>
    ),
  },
  {
    id: "third-party",
    title: "10. Third-Party Links and Services",
    content: (
      <>
        <p>The Website may contain links to third-party websites, services, or resources, including but not limited to scheduling tools (such as Calendly) and social media platforms. These links are provided for your convenience only and do not constitute endorsement by {ENTITY_NAME} of any third-party content, products, or services.</p>
        <p>{ENTITY_NAME} has no control over and assumes no responsibility for the content, privacy policies, or practices of any third-party websites or services. You access third-party websites at your own risk and are subject to the terms and conditions of those websites.</p>
      </>
    ),
  },
  {
    id: "governing-law",
    title: "11. Governing Law and Dispute Resolution",
    content: (
      <>
        <p>These Terms and any dispute arising out of or in connection with them shall be governed by and construed in accordance with the laws of the Province of Ontario and the federal laws of Canada applicable therein, without regard to conflict of law principles.</p>
        <p>Any dispute, controversy, or claim arising out of or relating to these Terms, or the breach, termination, or validity thereof, shall be resolved through good-faith negotiation between the parties. If the dispute cannot be resolved through negotiation within thirty (30) days, either party may submit the dispute to binding arbitration administered in accordance with the Arbitration Act, 1991 (Ontario) in the City of Toronto, Ontario. The language of the arbitration shall be English.</p>
        <p>Notwithstanding the foregoing, either party may seek injunctive or other equitable relief in any court of competent jurisdiction in Ontario, Canada, to protect its intellectual property rights or confidential information.</p>
        <p>If you are a resident of the United States, you agree that the laws of Ontario, Canada shall still apply, but you retain any non-waivable rights provided by your state of residence. Nothing in these Terms is intended to deprive you of any mandatory consumer protections afforded under the laws of your jurisdiction.</p>
      </>
    ),
  },
  {
    id: "modifications",
    title: "12. Modifications to Terms",
    content: (
      <>
        <p>{ENTITY_NAME} reserves the right to modify these Terms at any time at our sole discretion. When we make material changes, we will update the "Effective Date" at the top of this page and post the revised Terms on the Website. Your continued use of the Website after any changes constitutes your acceptance of the modified Terms.</p>
        <p>We encourage you to review these Terms periodically to stay informed of any updates. If you do not agree to the modified Terms, you must discontinue use of the Website.</p>
      </>
    ),
  },
  {
    id: "severability",
    title: "13. Severability and Waiver",
    content: (
      <>
        <p>If any provision of these Terms is held to be invalid, illegal, or unenforceable by a court of competent jurisdiction, that provision shall be modified to the minimum extent necessary to make it enforceable, or if modification is not possible, severed from these Terms. The remaining provisions shall continue in full force and effect.</p>
        <p>The failure of {ENTITY_NAME} to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision. No waiver shall be effective unless in writing and signed by an authorized representative of {ENTITY_NAME}.</p>
      </>
    ),
  },
  {
    id: "entire-agreement",
    title: "14. Entire Agreement",
    content: (
      <>
        <p>These Terms, together with our <Link to="/privacy" className="text-blue-600 hover:text-blue-700 underline">Privacy Policy</Link>, constitute the entire agreement between you and {ENTITY_NAME} with respect to your use of the Website and supersede all prior or contemporaneous communications, whether oral or written, with respect to such subject matter.</p>
        <p>For clarity, these Terms do not govern any professional services engagement. Professional services are governed by separate service agreements entered into between {ENTITY_NAME} and the client organization.</p>
      </>
    ),
  },
  {
    id: "contact",
    title: "15. Contact Information",
    content: (
      <>
        <p>If you have any questions about these Terms of Service, please contact us at:</p>
        <div className="bg-slate-50 rounded-lg p-5 border border-slate-200 mt-3">
          <p className="mb-1"><strong>{ENTITY_NAME}</strong></p>
          <p className="mb-1">460 Adelaide St. E, Suite 905</p>
          <p className="mb-1">Toronto, ON M5A 0E7</p>
          <p className="mb-1">Canada</p>
          <p className="mt-3">Email: <a href="mailto:hello@vaultiam.com" className="text-blue-600 hover:text-blue-700 underline">hello@vaultiam.com</a></p>
        </div>
      </>
    ),
  },
];

export default function TermsOfService() {
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
            Terms of Service
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
              These Terms of Service were last updated on {EFFECTIVE_DATE}. See also our <Link to="/privacy" className="text-blue-600 hover:text-blue-700 underline">Privacy Policy</Link>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
