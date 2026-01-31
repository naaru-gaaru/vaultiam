export default function Contact() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-12 pb-24">
      <header className="mb-14 max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight mb-4">
          Contact
        </h1>

        <p className="text-lg text-slate-600">
          A focused conversation about identity risk, architecture, or
          operational gaps—no sales pressure.
        </p>
      </header>

      <section className="max-w-xl">
        <div className="rounded-lg border border-slate-200 p-8 bg-white">
          <p className="text-slate-700 mb-4">
            Reach out to discuss:
          </p>

          <ul className="list-disc list-inside text-slate-600 space-y-2 mb-6">
            <li>Identity threat exposure and ITDR readiness</li>
            <li>IAM / CIAM architecture or modernization</li>
            <li>PAM, non-human identities, and AI workloads</li>
            <li>Audit, compliance, and regulator expectations</li>
          </ul>

          <a
            href="mailto:contact@vaultiam.com"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
          >
            Email VaultIAM
          </a>
        </div>
      </section>
    </section>
  );
}
