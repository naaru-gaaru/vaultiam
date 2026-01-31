import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo block */}
          <Link to="/" className="flex flex-col justify-center">
            <img
              src="/vaultiam-logo.svg"
              alt="VaultIAM"
              className="h-14 w-auto"
            />
            
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
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
            className="bg-blue-600 text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition"
          >
            Book Risk Review
          </Link>
        </div>
      </div>
    </header>
  );
}







