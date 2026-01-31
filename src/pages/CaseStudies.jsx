export default function CaseStudies() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-12 pb-24">
      <header className="mb-14">
        <h1 className="text-4xl font-semibold tracking-tight mb-4">
          Customer Stories
        </h1>

        <p className="text-lg text-slate-600 max-w-3xl">
          Real-world identity security engagements across FinTech and
          Healthcare—focused on modern threats, regulatory pressure, and
          measurable outcomes.
        </p>
      </header>

      <section className="space-y-8 max-w-3xl">
        <div>
          <h3 className="text-xl font-semibold mb-2">
            Modern IAM & Identity Threat Detection
          </h3>
          <p className="text-slate-600">
            Securing workforce and non-human identities against lateral
            movement, privilege escalation, and AI-driven abuse paths.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">
            CIAM & Fraud Prevention in FinTech
          </h3>
          <p className="text-slate-600">
            Preventing synthetic identity fraud, deepfake onboarding attacks,
            and account takeover in high-scale customer environments.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">
            Privileged Access & Cloud-Native PAM
          </h3>
          <p className="text-slate-600">
            Just-in-time access, zero standing privilege, and audit-ready PAM
            for human and AI-driven workloads.
          </p>
        </div>
      </section>

      <section className="mt-20 text-center">
        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
        >
          Discuss a relevant use case
        </a>
      </section>
    </section>
  );
}
