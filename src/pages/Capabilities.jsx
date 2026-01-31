import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Capabilities() {
  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto px-6 pt-12 pb-20">
        {/* Intro */}
        <section className="max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight">
            Capabilities
          </h1>

          <p className="mt-4 text-lg text-slate-600">
            VaultIAM delivers identity-first security outcomes across IAM, CIAM,
            privileged access, and identity threat detection — designed for
            regulated, high-risk environments.
          </p>
        </section>

        {/* Core capabilities */}
        <section className="mt-16 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-xl font-semibold">
              Identity & Access Management (IAM)
            </h2>
            <p className="mt-2 text-slate-600">
              Architecture, modernization, and operational support for workforce
              IAM, non-human identities, and cloud-native access models.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">
              Customer Identity (CIAM)
            </h2>
            <p className="mt-2 text-slate-600">
              Secure onboarding, authentication, and fraud-aware identity flows
              for FinTech and digital health platforms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">
              Privileged Access (PAM)
            </h2>
            <p className="mt-2 text-slate-600">
              Zero standing privilege, just-in-time access, and session controls
              for human and AI-driven workloads.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">
              ITDR & Identity Security
            </h2>
            <p className="mt-2 text-slate-600">
              Detection and response for identity-based attacks, abuse paths,
              lateral movement, and anomalous behavior.
            </p>
          </div>
        </section>

        {/* VaultIAM Model */}
        <section className="mt-24">
          <h2 className="text-2xl font-semibold">
            The VaultIAM Model
          </h2>

          <div className="mt-10 grid md:grid-cols-3 gap-10">
            <div>
              <h3 className="font-semibold text-lg">Assess</h3>
              <p className="mt-2 text-slate-600">
                Risk-led reviews of identity posture, threat exposure, and
                compliance gaps across human and non-human identities.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Build</h3>
              <p className="mt-2 text-slate-600">
                Hands-on implementation, integrations, and secure-by-design
                architecture aligned to regulatory requirements.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Operate</h3>
              <p className="mt-2 text-slate-600">
                Ongoing optimization, identity operations, and threat response
                support in production environments.
              </p>
            </div>
          </div>
        </section>

        {/* Engagement model */}
        <section className="mt-24 max-w-4xl">
          <h2 className="text-2xl font-semibold">
            Engagement model
          </h2>

          <p className="mt-4 text-slate-600">
            VaultIAM engagements are structured to meet organizations where
            identity risk intersects with regulatory pressure.
          </p>

          <ul className="mt-6 space-y-3 text-slate-600 list-disc pl-5">
            <li>
              Short-term advisory engagements to address specific identity or
              audit risks
            </li>
            <li>
              Build-focused delivery for IAM, CIAM, and PAM initiatives
            </li>
            <li>
              Ongoing identity operations and ITDR support for regulated
              environments
            </li>
          </ul>
        </section>

        {/* CTA */}
        <section className="mt-24 text-center">
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition"
          >
            Talk to an identity specialist
          </a>
        </section>
      </main>

      <Footer />
    </>
  );
}
