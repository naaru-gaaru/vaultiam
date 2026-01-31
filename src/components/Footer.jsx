export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Brand */}
        <div>
          <img
            src="/vaultiam-invert-logo.svg"
            alt="VaultIAM"
            className="h-9 opacity-0"
          />

          <p className="mt-4 text-sm text-slate-400 max-w-sm">
            Identity-first security services for regulated FinTech and Healthcare environments.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-4">Navigate</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/capabilities" className="hover:text-white">Capabilities</a></li>
            <li><a href="/case-studies" className="hover:text-white">Case Studies</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Focus */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-4">Focus</h4>
          <p className="text-sm text-slate-400">
            FinTech & Healthcare<br />
            SOC 2 · PCI-DSS · HIPAA · ISO 27001<br />
            IAM · CIAM · PAM · ITDR
          </p>
        </div>
      </div>

      <div className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} VaultIAM. All rights reserved.
      </div>
    </footer>
  );
}






