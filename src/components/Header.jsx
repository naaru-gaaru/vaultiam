import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex flex-col leading-none">
          <img
            src="/vaultiam-logo.svg"
            alt="VaultIAM"
            className="h-10 w-auto"
          />
          <span className="mt-1 text-xs text-slate-500">
            Identity-first security
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <NavLink
            to="/capabilities"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "hover:text-blue-600"
            }
          >
            Capabilities
          </NavLink>
          <NavLink
            to="/case-studies"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "hover:text-blue-600"
            }
          >
            Case Studies
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "hover:text-blue-600"
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* CTA */}
        <Link
          to="/contact"
          className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          Book Risk Review
        </Link>
      </div>
    </header>
  );
}
