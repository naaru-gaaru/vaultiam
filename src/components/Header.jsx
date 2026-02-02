import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between py-3">

          {/* Logo + tagline (CENTERED AS A UNIT) */}
          <Link
            to="/"
            className="flex flex-col items-start md:items-start"
          >
            <img
              src="/vaultiam-logo-no-tag.svg"
              alt="VaultIAM"
              className="h-12 w-auto"
            />
            <span className="mt-1 text-xs text-slate-500">
              Identity-first security
            </span>
          </Link>

          {/* Navigation */}
          <nav className="mt-3 md:mt-0 flex items-center gap-6 text-sm font-medium">
            <NavLink
              to="/capabilities"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600"
                  : "text-slate-700 hover:text-blue-600"
              }
            >
              Capabilities
            </NavLink>

            <NavLink
              to="/customer-stories"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600"
                  : "text-slate-700 hover:text-blue-600"
              }
            >
              Customer Stories
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600"
                  : "text-slate-700 hover:text-blue-600"
              }
            >
              Contact
            </NavLink>

            {/* CTA */}
            <Link
              to="/contact"
              className="ml-4 hidden md:inline-flex rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition"
            >
              Book Risk Review
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
