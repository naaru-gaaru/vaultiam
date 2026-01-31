export default function Contact() {
  return (
    <main className="max-w-7xl mx-auto px-6 pt-12 pb-24">
      {/* Page header */}
      <section className="mb-12">
        <h1 className="text-4xl font-semibold tracking-tight mb-4">
          Contact
        </h1>

        <p className="text-lg text-slate-600 max-w-3xl">
          A focused conversation about identity risk, architecture decisions,
          and security outcomes — no sales pressure.
        </p>
      </section>

      {/* Content */}
      <section className="max-w-3xl">
        <p className="text-slate-600">
          VaultIAM works with security, identity, and platform teams in
          FinTech and Healthcare to assess identity exposure, modernize
          access controls, and operate identity securely at scale.
        </p>

        <p className="mt-4 text-slate-600">
          Typical conversations include identity threat detection, AI and
          non-human identity governance, CIAM fraud controls, privileged
          access strategy, and regulatory readiness.
        </p>
      </section>

      {/* CTA */}
      <section className="mt-12">
        <a
          href="mailto:contact@vaultiam.com"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
        >
          Book an identity risk review
        </a>
      </section>
    </main>
  );
}
