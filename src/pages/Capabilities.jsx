import { Helmet } from "react-helmet-async";

export default function Capabilities() {
  return (
    <>
      <Helmet>
        <title>Identity Security Capabilities | VaultIAM</title>
        <meta
          name="description"
          content="Explore VaultIAM’s identity security capabilities across IAM, CIAM, PAM, and Identity Threat Detection & Response."
        />
        <link
          rel="canonical"
          href="https://www.vaultiam.com/capabilities"
        />
      </Helmet>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-semibold mb-6">
          Identity Security Capabilities
        </h1>

        <p className="text-lg text-slate-600 max-w-3xl">
          VaultIAM delivers identity-first security outcomes across workforce,
          customer, and non-human identities in regulated environments.
        </p>

        {/* Existing capability sections stay below */}
      </section>
    </>
  );
}
