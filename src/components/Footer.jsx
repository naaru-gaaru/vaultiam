export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 mt-32">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-3">
        {/* Brand */}
        <div>
          <img
            src="/vaultiam-logo-no-tag.svg"
            alt="VaultIAM"
            className="h-7 w-auto"
          />
          <p className="mt-4 text-sm text-slate-400 max-w-xs">
            Identity-first security services for regulated FinTech and Healthcare
            environments.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-sm font-semibold text-white">Navigate</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="/capabilities" className="hover:text-white">Capabilities</a></li>
            <li><a href="/case-studies" className="hover:text-white">Case Studies</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Compliance / Trust */}
        <div>
          <h4 className="text-sm font-semibold text-white">Focus</h4>
          <ul className="mt-4 space-y-2 text-sm text-slate-400">
            <li>FinTech & Healthcare</li>
            <li>SOC 2, PCI-DSS, HIPAA, ISO 27001</li>
            <li>IAM · CIAM · PAM · ITDR</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 text-center text-xs text-slate-500 py-6">
        © {new Date().getFullYear()} VaultIAM. All rights reserved.
      </div>
    </footer>
  );
}
