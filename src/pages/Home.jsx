export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-14 pb-24">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight">
          Identity is the primary
          <br />
          attack surface.
        </h1>

        <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl">
          VaultIAM operates identity, privileged access, and customer
          authentication for FinTech and Healthcare organizations where identity
          risk is business risk.
        </p>

        <p className="mt-4 text-sm text-slate-500">
          Focused exclusively on IAM, CIAM, PAM, and identity threat detection.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6">
          <a
            href="/contact"
            className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
          >
            Book an Identity Risk Review
          </a>

          <a
            href="/capabilities"
            className="text-sm font-medium hover:text-blue-600 self-center"
          >
            View capabilities →
          </a>
        </div>
      </section>

      {/* Proof strip */}
      <section className="border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm text-slate-600">
          <div>Identity-first operations</div>
          <div>Built for regulated environments</div>
          <div>FinTech & Healthcare focus</div>
          <div>Outcome-driven delivery</div>
        </div>
      </section>
    </main>
  );
}
