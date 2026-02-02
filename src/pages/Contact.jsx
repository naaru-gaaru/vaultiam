import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Talk to an Identity Specialist | VaultIAM</title>
        <meta
          name="description"
          content="Talk to VaultIAM about identity risk, IAM, CIAM, PAM, and identity security for regulated environments."
        />
        <link
          rel="canonical"
          href="https://www.vaultiam.com/contact"
        />
      </Helmet>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-semibold mb-6">
          Talk to an Identity Specialist
        </h1>

        <p className="text-lg text-slate-600 max-w-2xl">
          A focused conversation about identity risk, architecture, and
          security—no sales pressure.
        </p>
      </section>
    </>
  );
}
