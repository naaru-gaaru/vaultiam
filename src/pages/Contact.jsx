import Header from "../components/Header";

export default function Capabilities() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-semibold">Capabilities</h1>
        <p className="mt-4 text-slate-600 max-w-2xl">
          Identity-first security across IAM, CIAM, PAM, ITDR, and Non-Human Identities.
        </p>
      </main>
    </>
  );
}
