import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* 
          Key fixes:
          - py-2 instead of py-4/6 (major height reduction)
          - mobile-first flex column
          - logo + tagline centered as one unit
        */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between py-2">

          {/* Logo + tagline */}
          <Link
            to="/"
            className="flex flex-col items-center md:items-start leading-none"
          >
            <img
              src="/vaultiam-logo.svg"
              alt="VaultIAM"
              className="h-10 w-auto"
            />
            <span className="mt-0.5 text-[11px] text-slate-500 text-center md:text-left">
              Identity-first security
            </span>
          </Link>

          {/* Navigation */}
          <nav className="mt-2 md:mt-0 flex flex-wrap justify-center md:justify-start items-center gap-4 text-sm font-medium">
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

            {/* CTA (desktop only) */}
            <Link
              to="/contact"
              className="hidden md:inline-flex ml-4 rounded-md bg-blue-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-blue-700 transition"
            >
              Book Risk Review
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
