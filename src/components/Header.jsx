import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navLinkClass =
    "relative text-sm font-medium text-slate-700 transition-colors duration-200 hover:text-blue-600";

  const navLinkActive =
    "text-blue-600 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-blue-600 after:rounded-full";

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top bar */}
        <div className="flex items-center justify-between h-16">
          {/* Logo + tagline */}
          <Link
            to="/"
            className="flex flex-col items-start leading-tight"
          >
            {/* 
              Slight negative translateX visually centers the logo
              above the tagline (logos often have optical imbalance)
            */}
            <img
              src="/vaultiam-logo-no-tag.svg"
              alt="VaultIAM"
              className="h-12 w-auto -translate-x-1"
            />
            <span className="text-xs text-slate-500 mt-0.5">
              Identity-first security
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/capabilities"
              className={({ isActive }) =>
                `${navLinkClass} ${isActive ? navLinkActive : ""}`
              }
            >
              Capabilities
            </NavLink>

            <NavLink
              to="/customer-stories"
              className={({ isActive }) =>
                `${navLinkClass} ${isActive ? navLinkActive : ""}`
              }
            >
              Customer Stories
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${navLinkClass} ${isActive ? navLinkActive : ""}`
              }
            >
              Contact
            </NavLink>

            <Link
              to="/contact"
              className="ml-4 inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition"
            >
              Book Risk Review
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100"
            aria-label="Toggle navigation"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-6 py-4 space-y-4">
            <NavLink
              to="/capabilities"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block text-sm font-medium ${
                  isActive ? "text-blue-600" : "text-slate-700"
                }`
              }
            >
              Capabilities
            </NavLink>

            <NavLink
              to="/customer-stories"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block text-sm font-medium ${
                  isActive ? "text-blue-600" : "text-slate-700"
                }`
              }
            >
              Customer Stories
            </NavLink>

            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block text-sm font-medium ${
                  isActive ? "text-blue-600" : "text-slate-700"
                }`
              }
            >
              Contact
            </NavLink>

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="block w-full rounded-md bg-blue-600 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-700"
            >
              Book Risk Review
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
