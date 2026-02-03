export default function CustomerStories() {
  return (
    <main className="max-w-7xl mx-auto px-6 pt-10 md:pt-16 pb-24">
      <section className="max-w-3xl mb-16">
        <h1 className="text-4xl font-semibold tracking-tight mb-4">
          Customer Stories
        </h1>
        <p className="text-lg text-slate-600">
          Real-world identity security engagements across FinTech and Healthcare
          environments.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="border border-slate-200 rounded-lg p-6">
          <h3 className="font-semibold mb-2">
            Securing AI Agents with Microsoft Entra
          </h3>
          <p className="text-sm text-slate-600">
            Identity Threat Detection & Response for healthtech diagnostic AI
            workloads using Entra ID Protection and Purview.
          </p>
        </div>

        <div className="border border-slate-200 rounded-lg p-6">
          <h3 className="font-semibold mb-2">
            Preventing Synthetic Identity Fraud
          </h3>
          <p className="text-sm text-slate-600">
            CIAM and AI-liveness integration using Okta Customer Identity and
            fraud detection platforms.
          </p>
        </div>
      </section>
    </main>
  );
}
