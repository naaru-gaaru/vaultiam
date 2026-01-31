export default function CaseStudies() {
  return (
    <main className="max-w-7xl mx-auto px-6 pt-12 pb-24">
      {/* Page header */}
      <section className="mb-12">
        <h1 className="text-4xl font-semibold tracking-tight mb-4">
          Case Studies
        </h1>

        <p className="text-lg text-slate-600 max-w-3xl">
          Real-world identity security engagements addressing modern IAM,
          CIAM, privileged access, and identity threat detection challenges
          in regulated environments.
        </p>
      </section>

      {/* Placeholder / intro */}
      <section className="max-w-3xl">
        <p className="text-slate-600">
          VaultIAM case studies demonstrate how identity-first security
          principles are applied to emerging threats such as AI agents,
          non-human identities, deepfake fraud, and cloud-native privilege
          escalation.
        </p>

        <p className="mt-4 text-slate-600">
          Each engagement highlights the threat scenario, the identity control
          gaps, the tools involved, and the measurable security and compliance
          outcomes delivered.
        </p>
      </section>

      {/* CTA */}
      <section className="mt-16">
        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
        >
          Discuss a similar challenge
        </a>
      </section>
    </main>
  );
}
