import VaultIAMModel from "../components/VaultIAMModel";
// import ToolStack from "../components/ToolStack"; // enable in Step 3

export default function Capabilities() {
  return (
    <main className="max-w-7xl mx-auto px-6 pt-10 pb-24">
      {/* Page header */}
      <section className="mb-16">
        <h1 className="text-4xl font-semibold tracking-tight mb-4">
          Capabilities
        </h1>

        <p className="text-lg text-slate-600 max-w-3xl">
          VaultIAM delivers identity-first security outcomes across IAM, CIAM,
          privileged access, and identity threat detection—designed for
          regulated, high-risk environments.
        </p>
      </section>

      {/* Core capability areas */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
        <div>
          <h3 className="text-xl font-semibold mb-2">
            Identity & Access Management
          </h3>
          <p className="text-slate-600">
            Architecture, modernization, and operational support for workforce
            IAM, non-human identities, and cloud-native access models.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">
            Customer Identity (CIAM)
          </h3>
          <p className="text-slate-600">
            Secure onboarding, authentication, and fraud-aware identity flows
            for FinTech and digital health platforms.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">
            Privileged Access (PAM)
          </h3>
          <p className="text-slate-600">
            Zero standing privilege, just-in-time access, and session controls
            for human and AI-driven workloads.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">
            ITDR & Identity Security
          </h3>
          <p className="text-slate-600">
            Detection and response for identity-based attacks, abuse paths,
            lateral movement, and anomalous behavior.
          </p>
        </div>
      </section>

      {/* VaultIAM engagement model */}
      <VaultIAMModel />

      {/* CTA */}
      <section className="mt-20 text-center">
        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
        >
          Talk to an identity specialist
        </a>
      </section>

      {/* Tool stack – enable in Step 3 */}
      {/*
      <ToolStack />
      */}
    </main>
  );
}
