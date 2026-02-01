import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <img
              src="/vaultiam-logo-no-tag.svg"
              alt="VaultIAM"
              className="h-10 w-auto mb-4 invert"
            />
            <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
              Identity-first security services for regulated FinTech and
              Healthcare environments.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-4 mt-5">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/vaultiam"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-70 hover:opacity-100 transition"
                aria-label="VaultIAM on LinkedIn"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-current"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.369-1.85 3.6 0 4.268 2.368 4.268 5.455v6.286zM5.337 7.433a2.062 2.062 0 110-4.124 2.062 2.062 0 010 4.124zM6.813 20.452H3.861V9h2.952v11.452z" />
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-70 hover:opacity-100 transition"
                aria-label="VaultIAM on X"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-current"
                >
                  <path d="M18.244 2H21l-6.518 7.455L22.5 22h-6.77l-5.3-6.735L4.5 22H1.744l6.96-7.96L1.5 2h6.93l4.78 6.084L18.244 2z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-70 hover:opacity-100 transition"
                aria-label="VaultIAM on YouTube"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-current"
                >
                  <path d="M23.498 6.186a2.987 2.987 0 00-2.104-2.112C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.394.574A2.987 2.987 0 00.502 6.186 31.02 31.02 0 000 12a31.02 31.02 0 00.502 5.814 2.987 2.987 0 002.104 2.112C4.5 20.5 12 20.5 12 20.5s7.5 0 9.394-.574a2.987 2.987 0 002.104-2.112A31.02 31.02 0 0024 12a31.02 31.02 0 00-.502-5.814zM9.75 15.5v-7l6 3.5-6 3.5z" />
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
                <Link to="/case-studies" className="hover:text-white">
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
              <li className="text-slate-400">Blog (coming soon)</li>
              <li className="text-slate-400">The VaultIAM Way</li>
            </ul>
          </div>

          {/* Focus */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              Focus
            </h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              FinTech & Healthcare<br />
              SOC 2 · PCI-DSS · HIPAA · ISO 27001<br />
              IAM · CIAM · PAM · ITDR
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-slate-800 text-sm text-slate-500">
          © 2026 VaultIAM. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
