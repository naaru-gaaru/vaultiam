import React from "react";

export default function VaultIAM() {
  return (
    <div className="font-sans text-slate-900">
    {/* Header */}
<header className="sticky top-0 z-50 bg-white border-b border-slate-200">
  <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
    
    {/* Logo */}
    <div className="flex flex-col leading-tight">
      <div className="flex items-center">
        <span className="text-2xl font-semibold text-slate-900">
          Vault
        </span>
        <span className="ml-1 px-2 py-1 bg-blue-600 text-white text-2xl font-semibold rounded-md">
          IAM
        </span>
      </div>
      <span className="text-xs text-slate-500 mt-1">
        Identity-first security
      </span>
    </div>

    {/* Navigation */}
    <nav className="hidden md:flex items-center space-x-8 text-sm">
      <a href="#services" className="hover:text-blue-600">Services</a>
      <a href="#case-studies" className="hover:text-blue-600">Case Studies</a>
      <a href="#contact" className="hover:text-blue-600">Contact</a>
    </nav>

    {/* CTA */}
    <a
      href="#contact"
      className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors"
    >
      Book Risk Review
    </a>

  </div>
</header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12">
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight">
            Identity is the primary attack surface.
          </h1>

          <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-600 max-w-xl">
            VaultIAM operates identity, privileged access, and customer
            authentication for FinTech and Healthcare organizations where
            identity risk is business risk.
          </p>

          <p className="mt-4 text-sm text-slate-500">
            Focused exclusively on IAM, CIAM, and privileged access.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6">
            <a
              href="#contact"
              className="bg-blue-600 text-white px-6 py-2.5 rounded-md font-medium hover:bg-blue-700 transition-colors"
            >
              Book an Identity Risk Review
            </a>

            <a
              href="#services"
              className="text-sm font-medium hover:text-blue-600"
            >
              View services →
            </a>
          </div>
        </div>
      </section>

      {/* Proof Strip */}
      <section className="bg-slate-50/70 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center sm:text-left text-sm text-slate-600">
          <div>Identity-first operations</div>
          <div>Built for regulated environments</div>
          <div>FinTech & Healthcare focus</div>
          <div>Outcome-driven delivery</div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
            If identity is a top risk, we should talk.
          </h2>

          <p className="mt-4 text-slate-300">
            A focused conversation. No sales pressure.
          </p>

          <a
            href="mailto:contact@vaultiam.com"
            className="inline-block mt-8 bg-blue-600 px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
          >
            Book an Identity Risk Review
          </a>
        </div>
      </section>
    </div>
  );
}
