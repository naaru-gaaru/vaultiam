import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { label: "Capabilities", href: "/capabilities" },
  { label: "Customer Stories", href: "/customer-stories" },
  { label: "The VaultIAM Way", href: "/the-vaultiam-way" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.92)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          boxShadow: scrolled ? "0 1px 0 #e2e8f0" : "none",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-5 h-14 sm:h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img
              src="/vaultiam-logo-tagline.svg"
              alt="VaultIAM"
              className="h-7 sm:h-8 w-auto"
              style={{ maxWidth: "160px" }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ label, href }) => {
              const active = location.pathname === href || location.pathname.startsWith(href + "/");
              return (
                <Link
                  key={label}
                  to={href}
                  className="relative px-3 lg:px-4 py-2 text-[13px] lg:text-[13.5px] transition-colors duration-200"
                  style={{
                    fontWeight: 500,
                    color: active ? "#0f172a" : "#64748b",
                  }}
                >
                  {label}
                  {active && (
                    <span
                      className="absolute bottom-0 left-3 lg:left-4 right-3 lg:right-4 h-[2px] rounded-full"
                      style={{ background: "#38bdf8" }}
                    />
                  )}
                </Link>
              );
            })}

            <Link
              to="/contact"
              className="ml-2 lg:ml-4 px-4 lg:px-5 py-2 rounded-lg text-[13px] lg:text-[13.5px] text-white transition-all duration-200"
              style={{
                fontWeight: 600,
                background: "linear-gradient(135deg, #38bdf8 0%, #0284c7 100%)",
                boxShadow: "0 2px 8px rgba(56,189,248,0.25)",
              }}
            >
              Get in touch
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 -mr-2 touch-manipulation"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            style={{ minWidth: 44, minHeight: 44 }}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className="block h-[2px] bg-slate-700 rounded-full transition-all duration-300 origin-center"
                style={{
                  transform: menuOpen ? "translateY(9px) rotate(45deg)" : "none",
                }}
              />
              <span
                className="block h-[2px] bg-slate-700 rounded-full transition-all duration-300"
                style={{
                  opacity: menuOpen ? 0 : 1,
                  transform: menuOpen ? "translateX(-8px)" : "none",
                }}
              />
              <span
                className="block h-[2px] bg-slate-700 rounded-full transition-all duration-300 origin-center"
                style={{
                  transform: menuOpen ? "translateY(-9px) rotate(-45deg)" : "none",
                }}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className="fixed inset-0 z-40 md:hidden transition-all duration-300"
        style={{
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          background: "rgba(15,23,42,0.5)",
          backdropFilter: menuOpen ? "blur(4px)" : "none",
        }}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <nav
        className="fixed top-14 left-0 right-0 z-40 md:hidden transition-all duration-300"
        style={{
          transform: menuOpen ? "translateY(0)" : "translateY(-100%)",
          opacity: menuOpen ? 1 : 0,
          background: "#fff",
          boxShadow: menuOpen ? "0 4px 20px rgba(0,0,0,0.15)" : "none",
          borderBottomLeftRadius: 16,
          borderBottomRightRadius: 16,
        }}
      >
        <div className="px-4 py-4 space-y-1">
          {NAV_LINKS.map(({ label, href }, idx) => {
            const active = location.pathname === href || location.pathname.startsWith(href + "/");
            return (
              <Link
                key={label}
                to={href}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 rounded-lg transition-all duration-200 touch-manipulation"
                style={{
                  fontWeight: 500,
                  fontSize: 15,
                  color: active ? "#0f172a" : "#64748b",
                  background: active ? "#f1f5f9" : "transparent",
                  animationDelay: `${idx * 50}ms`,
                }}
              >
                {label}
              </Link>
            );
          })}

          <div className="pt-3 mt-3 border-t border-slate-100">
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-3 rounded-lg text-center text-white transition-all duration-200 touch-manipulation"
              style={{
                fontWeight: 600,
                fontSize: 15,
                background: "linear-gradient(135deg, #38bdf8 0%, #0284c7 100%)",
              }}
            >
              Get in touch
            </Link>
          </div>
        </div>
      </nav>

      {/* Spacer for fixed header */}
      <div className="h-14 sm:h-16" />
    </>
  );
}
