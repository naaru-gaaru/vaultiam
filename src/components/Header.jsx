import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const baseLink =
    "relative text-sm font-medium text-slate-700 transition-colors duration-200 hover:text-blue-600";

  const activeLink =
    "text-blue-600 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-blue-600 after:rounded-full after:transition-all";

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex h-16 items-left justify-between">
          {/* Logo */}
          <Link to="/" className="flex flex-col leading-tight">
            <img
              src="/vaultiam-logo-no-tag.svg"
              alt="VaultIAM"
              className="h-12 w-auto -translate-x-1"
            />
            <span className="text-xs text-slate-500 mt-0.5">
              Identity-first security
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              ["Capabilities", "/capabilities"],
              ["Customer Stories", "/customer-stories"],
              ["Contact", "/contact"],
            ].map(([label, path]) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `${baseLink} ${isActive ? activeLink : ""}`
                }
              >
                {label}
              </NavLink>
            ))}

            <Link
              to="/contact"
              className="ml-4 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition"
            >
              Book Risk Review
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-md hover:bg-slate-100"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6 text-slate-700"
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

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-6 py-4 space-y-4">
            {[
              ["Capabilities", "/capabilities"],
              ["Customer Stories", "/customer-stories"],
              ["Contact", "/contact"],
            ].map(([label, path]) => (
              <NavLink
                key={path}
                to={path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block text-sm font-medium ${
                    isActive ? "text-blue-600" : "text-slate-700"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="block rounded-md bg-blue-600 px-4 py-2 text-center text-sm font-medium text-white"
            >
              Book Risk Review
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

