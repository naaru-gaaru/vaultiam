import VaultIAMModel from "../components/VaultIAMModel";
import ToolStack from "../components/ToolStack";

export default function Capabilities() {
  return (
    <main className="max-w-7xl mx-auto px-6 pt-10 md:pt-16 pb-24">
      {/* Page intro */}
      <section className="max-w-3xl mb-14">
        <h1 className="text-4xl font-semibold tracking-tight mb-4">
          Capabilities
        </h1>

        <p className="text-lg text-slate-600">
          VaultIAM delivers identity-first security outcomes across IAM, CIAM,
          privileged access, and identity threat detection—designed for
          regulated, high-risk environments.
        </p>
      </section>

      {/* Core capabilities */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">
        {[
          {
            title: "Identity & Access Management",
            desc:
              "Architecture, modernization, and operational support for workforce IAM, non-human identities, and cloud-native access models.",
          },
          {
            title: "Customer Identity (CIAM)",
            desc:
              "Secure onboarding, authentication, and fraud-aware identity flows for FinTech and digital health platforms.",
          },
          {
            title: "Privileged Access (PAM)",
            desc:
              "Zero standing privilege, just-in-time access, and session controls for human and AI-driven workloads.",
          },
          {
            title: "ITDR & Identity Security",
            desc:
              "Detection and response for identity-based attacks, abuse paths, lateral movement, and anomalous behavior.",
          },
        ].map(({ title, desc }) => (
          <div
            key={title}
            className="rounded-xl border border-slate-200 bg-white p-6"
          >
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-slate-600">{desc}</p>
          </div>
        ))}
      </section>

      {/* Divider */}
      <div className="border-t border-slate-200 mb-24" />

      {/* VaultIAM Model */}
      <section className="mb-24">
        <VaultIAMModel />
      </section>

      {/* CTA */}
      <section className="text-center mb-24">
        <a
          href="/contact"
          className="inline-block rounded-md bg-blue-600 px-8 py-3 text-sm font-medium text-white hover:bg-blue-700 transition"
        >
          Talk to an identity specialist
        </a>
      </section>

      {/* Tool stack */}
      <ToolStack />
    </main>
  );
}
