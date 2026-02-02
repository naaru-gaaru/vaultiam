export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <img
              src="/vaultiam-logo-footer.svg"
              alt="VaultIAM"
              className="h-10 w-auto mb-3"
            />
            <p className="text-sm text-slate-400 max-w-xs">
              Identity-first security services for regulated FinTech and
              Healthcare environments.
            </p>

            {/* Social */}
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.linkedin.com/company/vaultiam"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="hover:text-white transition"
              >
                {/* LinkedIn SVG */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.22 8.98H4.78V24H.22zM8.98 8.98H13.3V11h.06c.6-1.14 2.06-2.34 4.24-2.34 4.54 0 5.38 2.98 5.38 6.86V24h-4.56v-6.58c0-1.56-.02-3.56-2.18-3.56-2.18 0-2.52 1.7-2.52 3.46V24H8.98z" />
                </svg>
              </a>

              {/* X */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.36 2H21l-6.48 7.41L22 22h-6.54l-5.1-6.66L4.8 22H2l6.9-7.92L2 2h6.7l4.6 6.1L18.36 2z" />
              </svg>

              {/* YouTube */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.5 6.2s-.2-1.7-.8-2.4c-.8-.8-1.6-.8-2-0.9C17.8 2.6 12 2.6 12 2.6h0s-5.8 0-8.7.3c-.4.1-1.2.1-2 .9C.7 4.5.5 6.2.5 6.2S0 8.1 0 10v2c0 1.9.5 3.8.5 3.8s.2 1.7.8 2.4c.8.8 1.9.8 2.4.9 1.7.2 7.3.3 8.3.3 0 0 5.8 0 8.7-.3.4-.1 1.2-.1 2-.9.6-.7.8-2.4.8-2.4s.5-1.9.5-3.8v-2c0-1.9-.5-3.8-.5-3.8zM9.75 14.6V7.4L15.8 11z" />
              </svg>
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Navigate</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/capabilities" className="hover:text-white">Capabilities</a></li>
              <li><a href="/customer-stories" className="hover:text-white">Customer Stories</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Learn</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-slate-400">Blog (coming soon)</li>
              <li className="text-slate-400">The VaultIAM Way</li>
            </ul>
          </div>

          {/* Focus */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Focus</h4>
            <p className="text-sm text-slate-400">
              FinTech & Healthcare<br />
              SOC 2 · PCI-DSS · HIPAA · ISO 27001<br />
              IAM · CIAM · PAM · ITDR
            </p>
          </div>
        </div>

        <div className="mt-6 border-t border-slate-800 pt-3 text-xs text-slate-500">
          © 2026 VaultIAM. All rights reserved.
        </div>
      </div>
    </footer>
  );
}


