export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <img
              src="/vaultiam-logo-footer.svg"
              alt="VaultIAM"
              className="h-9 mb-4"
            />
            <p className="text-sm text-slate-400 max-w-xs">
              Identity-first security services for regulated FinTech and
              Healthcare environments.
            </p>

            {/* Social icons */}
            <div className="flex gap-4 mt-5">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/vaultiam"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-70 hover:opacity-100 transition"
                aria-label="LinkedIn"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.8v2.1h.05c.53-1 1.83-2.1 3.77-2.1 4.03 0 4.78 2.65 4.78 6.1V24h-4v-7.7c0-1.83-.03-4.2-2.56-4.2-2.56 0-2.95 2-2.95 4.07V24h-4V8.5z" />
                </svg>
              </a>

              {/* X */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-70 hover:opacity-100 transition"
                aria-label="X"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2H21l-6.52 7.455L22 22h-6.828l-5.35-7.002L3.95 22H1.19l6.98-7.98L2 2h7l4.835 6.353L18.244 2z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-70 hover:opacity-100 transition"
                aria-label="YouTube"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M23.5 6.2s-.23-1.64-.94-2.36c-.9-.94-1.9-.95-2.36-1C16.87 2.5 12 2.5 12 2.5h-.02s-4.87 0-8.2.34c-.46.05-1.46.06-2.36 1C.73 4.56.5 6.2.5 6.2S0 8.12 0 10.04v1.92c0 1.92.5 3.84.5 3.84s.23 1.64.94 2.36c.9.94 2.08.91 2.6 1.01 1.88.18 7.96.34 7.96.34s4.88-.01 8.2-.35c.46-.05 1.46-.06 2.36-1 .71-.72.94-2.36.94-2.36s.5-1.92.5-3.84v-1.92c0-1.92-.5-3.84-.5-3.84zM9.75 14.5v-7l6 3.5-6 3.5z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">
              Navigate
            </h4>
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
              <li className="text-slate-500">Blog (coming soon)</li>
              <li className="text-slate-500">The VaultIAM Way</li>
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

        <div className="border-t border-slate-800 mt-10 pt-6 text-xs text-slate-500">
          © 2026 VaultIAM. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
