export default function Capabilities() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 space-y-20">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight">
          Capabilities
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          VaultIAM secures identity as a control plane across modern,
          regulated environments.
        </p>
      </div>

      <div className="max-w-3xl">
        <h2 className="text-xl font-semibold">How We Engage</h2>
        <p className="mt-3 text-slate-600">
          VaultIAM delivers time-bound, outcome-driven identity security
          engagements focused on specific, high-impact risks.
        </p>
      </div>

      <div className="max-w-3xl">
        <h2 className="text-xl font-semibold">The VaultIAM Way</h2>
        <ul className="mt-4 space-y-3 text-slate-600">
          <li>Identify identity risk</li>
          <li>Design platform-native controls</li>
          <li>Implement and operationalize</li>
          <li>Enable governance and audit readiness</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold">Focus Areas</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <h3 className="font-medium">IAM & ITDR</h3>
            <p className="mt-1 text-slate-600">
              Workforce and workload identity security.
            </p>
          </div>
          <div>
            <h3 className="font-medium">CIAM & Fraud</h3>
            <p className="mt-1 text-slate-600">
              Secure customer identity and onboarding.
            </p>
          </div>
          <div>
            <h3 className="font-medium">Privileged Access</h3>
            <p className="mt-1 text-slate-600">
              Zero standing privilege and JIT access.
            </p>
          </div>
          <div>
            <h3 className="font-medium">Non-Human Identity</h3>
            <p className="mt-1 text-slate-600">
              Governance for APIs, automation, and AI agents.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
