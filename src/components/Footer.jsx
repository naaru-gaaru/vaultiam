import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-32">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <img
              src="/vaultiam-logo-no-tag.svg"
              alt="VaultIAM"
              className="h-10 w-auto mb-4"
            />
            <p className="text-sm text-slate-400 max-w-xs">
              Identity-first security services for regulated FinTech and
              Healthcare environments.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-4 mt-6">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/vaultiam"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="VaultIAM on LinkedIn"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-current"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.047c.476-.9 1.637-1.85 3.37-1.85 3.6 0 4.265 2.37 4.265 5.455v6.286zM5.337 7.433a2.062 2.062 0 110-4.124 2.062 2.062 0 010 4.124zM6.814 20.452H3.861V9h2.953v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.273V1.727C24 .774 23.2 0 22.222 0z" />
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="VaultIAM on X"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-current"
                >
                  <path d="M18.244 2H21.55l-7.227 8.26L22.828 22h-6.57l-5.144-6.77L5.44 22H2.132l7.73-8.835L1.172 2h6.736l4.653 6.165L18.244 2zm-1.161 18h1.833L6.93 3.937H4.964L17.083 20z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="VaultIAM on YouTube"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-current"
                >
                  <path d="M23.498 6.186a2.985 2.985 0 00-2.1-2.116C19.53 3.545 12 3.545 12 3.545s-7.53 0-9.398.525a2.985 2.985 0 00-2.1 2.116A31.07 31.07 0 000 12a31.07 31.07 0 00.502 5.814 2.985 2.985 0 002.1 2.116c1.868.525 9.398.525 9.398.525s7.53 0 9.398-.525a2.985 2.985 0 002.1-2.116A31.07 31.07 0 0024 12a31.07 31.07 0 00-.502-5.814zM9.75 15.568V8.432L15.818 12 9.75 15.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              Navigate
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/capabilities" className="hover:text-white">
                  Capabilities
                </Link>
              </li>
              <li>
                <Link to="/customer-stories" className="hover:text-white">
                  Customer Stories
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              Learn
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-slate-400">
                  Blog (coming soon)
                </span>
              </li>
              <li>
                <span className="text-slate-400">
                  The VaultIAM Way
                </span>
              </li>
            </ul>
          </div>

          {/* Focus */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              Focus
            </h4>
            <p className="text-sm text-slate-400">
              FinTech & Healthcare
              <br />
              SOC 2 · PCI-DSS · HIPAA · ISO 27001
              <br />
              IAM · CIAM · PAM · ITDR
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-6 text-xs text-slate-500">
          © {new Date().getFullYear()} VaultIAM. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
