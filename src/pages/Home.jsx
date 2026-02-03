export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-6 pt-10 md:pt-16 pb-20">
      <section className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Identity is the primary attack surface.
        </h1>

        <p className="mt-6 text-lg text-slate-600">
          VaultIAM operates identity, privileged access, and customer
          authentication for FinTech and Healthcare organizations where identity
          risk is business risk.
        </p>

        <p className="mt-3 text-sm text-slate-500">
          Focused exclusively on IAM, CIAM, and privileged access.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700 transition"
          >
            Book an Identity Risk Review
          </a>

          <a
            href="/capabilities"
            className="inline-flex items-center justify-center text-sm font-medium text-slate-700 hover:text-blue-600"
          >
            View capabilities →
          </a>
        </div>
      </section>
    </main>
  );
}
