import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo block */}
          <Link to="/" className="flex flex-col justify-center -ml-1">
            <img
              src="/vaultiam-logo-no-tag.svg"
              alt="VaultIAM"
              className="h-12 w-auto"
            />
            <span className="text-xs text-slate-500 mt-0.5 text-center">
              Identity-first security
            </span>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-8 text-sm font-medium">
            <NavLink
              to="/capabilities"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600"
                  : "text-slate-700 hover:text-slate-900"
              }
            >
              Capabilities
            </NavLink>

            <NavLink
              to="/customer-stories"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600"
                  : "text-slate-700 hover:text-slate-900"
              }
            >
              Customer Stories
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600"
                  : "text-slate-700 hover:text-slate-900"
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* CTA */}
          <Link
            to="/contact"
            className="bg-blue-600 text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition"
          >
            Book Risk Review
          </Link>
        </div>
      </div>
    </header>
  );
}



