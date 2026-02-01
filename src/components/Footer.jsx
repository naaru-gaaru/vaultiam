import { Link } from "react-router-dom";
import { FaLinkedin, FaXTwitter, FaYoutube } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 mt-32">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <img
              src="/vaultiam-logo-invert.svg"
              alt="VaultIAM"
              className="h-10 w-auto mb-4"
            />
            <p className="text-sm text-slate-400 leading-relaxed">
              Identity-first security services for regulated FinTech and
              Healthcare environments.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Navigate</h4>
            <ul className="space-y-3 text-sm">
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
            <h4 className="text-sm font-semibold text-white mb-4">Learn</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/about" className="hover:text-white">
                  About VaultIAM
                </Link>
              </li>
              <li>
                <Link to="/insights" className="hover:text-white">
                  Insights
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Connect</h4>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/vaultiam"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
                aria-label="VaultIAM on LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="https://x.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
                aria-label="VaultIAM on X"
              >
                <FaXTwitter size={20} />
              </a>

              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
                aria-label="VaultIAM on YouTube"
              >
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-slate-800 text-sm text-slate-500 text-center">
          © {new Date().getFullYear()} VaultIAM. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
