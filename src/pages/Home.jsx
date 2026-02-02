import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>VaultIAM — Identity-First Security for FinTech & Healthcare</title>
        <meta
          name="description"
          content="VaultIAM delivers identity-first security across IAM, CIAM, PAM, and ITDR for regulated FinTech and Healthcare organizations."
        />
        <link rel="canonical" href="https://www.vaultiam.com/" />
      </Helmet>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Identity is the primary attack surface.
        </h1>

        <p className="mt-6 text-lg text-slate-600 max-w-2xl">
          VaultIAM operates identity, privileged access, and customer
          authentication for organizations where identity risk is business risk.
        </p>
      </section>
    </>
  );
}
