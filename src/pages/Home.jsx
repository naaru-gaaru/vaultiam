export default function Home() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-16 pb-28">
      {/* Hero */}
      <div className="max-w-3xl">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight">
          Identity is the primary attack surface.
        </h1>

        <p className="mt-6 text-lg text-slate-600">
          VaultIAM operates identity, privileged access, and customer
          authentication for FinTech and Healthcare organizations where
          identity risk is business risk.
        </p>

        <p className="mt-4 text-sm text-slate-500">
          Focused exclusively on IAM, CIAM, PAM, and identity threat detection.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
          >
            Book an Identity Risk Review
          </a>

          <a
            href="/capabilities"
            className="inline-flex items-center text-sm font-medium hover:text-blue-600"
          >
            View capabilities →
          </a>
        </div>
      </div>

      {/* Proof strip */}
      <section className="mt-24 border-t border-slate-200 pt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm text-slate-600">
        <div>Identity-first operations</div>
        <div>Built for regulated environments</div>
        <div>FinTech & Healthcare focus</div>
        <div>Outcome-driven delivery</div>
      </section>
    </section>
  );
}
