import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex flex-col leading-none">
          <img
            src="/vaultiam-logo-no-tag.svg"
            alt="VaultIAM"
            className="h-12 w-auto"
          />
          <span className="text-xs text-slate-500 mt-1">
            Identity-first security
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <NavLink to="/capabilities" className="hover:text-blue-600">
            Capabilities
          </NavLink>
          <NavLink to="/customer-stories" className="hover:text-blue-600">
            Customer Stories
          </NavLink>
          <NavLink to="/contact" className="hover:text-blue-600">
            Contact
          </NavLink>
        </nav>

        {/* CTA */}
        <a
          href="/contact"
          className="hidden md:inline-flex bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
        >
          Book Risk Review
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-700"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t bg-white px-6 py-4 space-y-3">
          <Link to="/capabilities" onClick={() => setOpen(false)}>
            Capabilities
          </Link>
          <Link to="/customer-stories" onClick={() => setOpen(false)}>
            Customer Stories
          </Link>
          <Link to="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
