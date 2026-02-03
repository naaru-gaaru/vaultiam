export default function Contact() {
  return (
    <main className="max-w-7xl mx-auto px-6 pt-10 md:pt-16 pb-24">
      <section className="max-w-2xl">
        <h1 className="text-4xl font-semibold tracking-tight mb-4">
          Contact
        </h1>

        <p className="text-lg text-slate-600 mb-8">
          A focused conversation about identity risk, architecture, and
          operations. No sales pressure.
        </p>

        <a
          href="mailto:contact@vaultiam.com"
          className="inline-block rounded-md bg-blue-600 px-8 py-3 text-sm font-medium text-white hover:bg-blue-700 transition"
        >
          Book an Identity Risk Review
        </a>
      </section>
    </main>
  );
}
