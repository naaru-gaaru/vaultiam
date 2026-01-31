export default function VaultIAMModel() {
  return (
    <section className="mt-20">
      <h2 className="text-2xl font-semibold mb-8">
        The VaultIAM Model
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Assess */}
        <div className="border border-slate-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2">Assess</h3>
          <p className="text-slate-600 text-sm">
            Risk-led reviews of identity posture, threat exposure, and
            regulatory compliance gaps across workforce, customer, and
            non-human identities.
          </p>
        </div>

        {/* Build */}
        <div className="border border-slate-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2">Build</h3>
          <p className="text-slate-600 text-sm">
            Hands-on implementation, secure-by-design architecture, and
            integration across IAM, CIAM, PAM, and ITDR platforms.
          </p>
        </div>

        {/* Operate */}
        <div className="border border-slate-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2">Operate</h3>
          <p className="text-slate-600 text-sm">
            Ongoing identity operations, threat detection, incident response,
            and continuous compliance support.
          </p>
        </div>
      </div>
    </section>
  );
}
