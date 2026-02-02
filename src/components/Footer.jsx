export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <img
            src="/vaultiam-logo-footer.svg"
            alt="VaultIAM"
            className="h-8 mb-3"
          />
          <p className="text-sm">
            Identity-first security services for regulated FinTech and Healthcare
            environments.
          </p>

          {/* Social */}
          <div className="flex gap-4 mt-4">
            <a href="https://www.linkedin.com/company/vaultiam" aria-label="LinkedIn">
              in
            </a>
            <a href="#" aria-label="X">X</a>
            <a href="#" aria-label="YouTube">▶</a>
          </div>
        </div>

        {/* Navigate */}
        <div>
          <h4 className="text-white text-sm mb-3">Navigate</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/capabilities">Capabilities</a></li>
            <li><a href="/customer-stories">Customer Stories</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Learn */}
        <div>
          <h4 className="text-white text-sm mb-3">Learn</h4>
          <ul className="space-y-2 text-sm">
            <li>Blog (coming soon)</li>
            <li>The VaultIAM Way</li>
          </ul>
        </div>

        {/* Focus */}
        <div>
          <h4 className="text-white text-sm mb-3">Focus</h4>
          <p className="text-sm">
            FinTech & Healthcare<br />
            SOC 2 · PCI-DSS · HIPAA · ISO 27001<br />
            IAM · CIAM · PAM · ITDR
          </p>
        </div>
      </div>

      <div className="border-t border-slate-800 text-center text-xs py-4">
        © 2026 VaultIAM. All rights reserved.
      </div>
    </footer>
  );
}
