import { Helmet } from "react-helmet-async";

export default function CustomerStories() {
  return (
    <>
      <Helmet>
        <title>Customer Stories | VaultIAM</title>
        <meta
          name="description"
          content="Real-world customer stories demonstrating how VaultIAM secures identity for FinTech and Healthcare organizations."
        />
        <link
          rel="canonical"
          href="https://www.vaultiam.com/customer-stories"
        />
      </Helmet>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-semibold mb-6">
          Customer Stories
        </h1>

        <p className="text-lg text-slate-600 max-w-3xl">
          How organizations partner with VaultIAM to reduce identity risk,
          strengthen compliance, and secure modern identity architectures.
        </p>
      </section>
    </>
  );
}
