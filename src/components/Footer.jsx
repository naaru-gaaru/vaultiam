export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand */}
          <div>
            <img
              src="/vaultiam-logo-footer.svg"
              alt="VaultIAM"
              className="h-10 w-auto mb-4"
            />
            <p className="text-sm text-slate-400 max-w-xs">
              Identity-first security services for regulated FinTech and
              Healthcare environments.
            </p>

            {/* Social */}
            <div className="flex items-center gap-4 mt-4">
              <a
                href="https://www.linkedin.com/company/vaultiam"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
                aria-label="LinkedIn"
              >
                {/* LinkedIn SVG */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.07c.67-1.27 2.3-2.6 4.73-2.6 5.05 0 6 3.32 6 7.64V24h-5v-7.92c0-1.89-.03-4.32-2.63-4.32-2.63 0-3.04 2.05-3.04 4.18V24h-5V8z"/>
                </svg>
              </a>

              <a
                href="#"
                className="hover:text-white"
                aria-label="X"
              >
                {/* X SVG */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.24 2.25h3.37l-7.36 8.41L23 21.75h-6.78l-5.3-6.48-5.67 6.48H1.88l7.88-9.01L1 2.25h6.94l4.8 5.86 5.5-5.86z"/>
                </svg>
              </a>

              <a
                href="#"
                className="hover:text-white"
                aria-label="YouTube"
              >
                {/* YouTube SVG */}
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.5 6.2s-.2-1.6-.8-2.3c-.8-.9-1.7-.9-2.1-1C16.9 2.5 12 2.5 12 2.5h-.1s-4.9 0-8.6.4c-.5.1-1.4.1-2.2 1-.6.7-.8 2.3-.8 2.3S0 8.1 0 10v1.9c0 1.9.2 3.8.2 3.8s.2 1.6.8 2.3c.8.9 1.9.9 2.4 1 1.7.2 7.6.4 7.6.4s4.9 0 8.6-.4c.5-.1 1.4-.1 2.2-1 .6-.7.8-2.3.8-2.3s.2-1.9.2-3.8V10c0-1.9-.2-3.8-.2-3.8zM9.75 14.5V7.5l6.5 3.5-6.5 3.5z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="text-white font-medium mb-3">Navigate</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/capabilities" className="hover:text-white">Capabilities</a></li>
              <li><a href="/customer-stories" className="hover:text-white">Customer Stories</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h4 className="text-white font-medium mb-3">Learn</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-slate-400">Blog (coming soon)</li>
              <li className="text-slate-400">The VaultIAM Way</li>
            </ul>
          </div>

          {/* Focus */}
          <div>
            <h4 className="text-white font-medium mb-3">Focus</h4>
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
