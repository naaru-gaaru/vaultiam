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

  useEffect(() => { setMenuOpen(false); }, [location]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: "#ffffff",
        boxShadow: scrolled ? "0 1px 0 #e2e8f0" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">

        <Link to="/" className="flex flex-col group">
          <img 
            src="/vaultiam-logo-no-tag.svg" 
            alt="VaultIAM" 
            className="h-8 w-auto mb-0.5"
          />
          <span className="text-[9px] text-slate-500 tracking-wide" style={{ fontWeight: 500, letterSpacing: "0.08em" }}>
            Identity-first security
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ label, href }) => {
            const active = location.pathname === href || location.pathname.startsWith(href + "/");
            return (
              <Link
                key={label}
                to={href}
                className="relative px-4 py-2 text-[13.5px] font-500 transition-colors duration-200"
                style={{
                  fontWeight: 500,
                  color: active ? "#1e40af" : "#475569",
                }}
                onMouseEnter={e => { if (!active) e.currentTarget.style.color = "#0f172a"; }}
                onMouseLeave={e => { if (!active) e.currentTarget.style.color = "#475569"; }}
              >
                {label}
                {active && (
                  <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-blue-600 rounded-full" />
                )}
              </Link>
            );
          })}

          <Link
            to="/contact"
            className="ml-4 px-5 py-2 rounded-lg text-[13px] font-600 text-white transition-all duration-200"
            style={{
              fontWeight: 600,
              background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
              boxShadow: "0 2px 10px rgba(37,99,235,0.3)",
            }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 4px 16px rgba(37,99,235,0.4)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 2px 10px rgba(37,99,235,0.3)"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            Get in touch
          </Link>
        </nav>

        <button
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px] group"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          <span className={`block h-[1.5px] bg-slate-700 rounded-full transition-all duration-300 ${menuOpen ? "w-5 rotate-45 translate-y-[6.5px]" : "w-5"}`} />
          <span className={`block h-[1.5px] bg-slate-700 rounded-full transition-all duration-300 ${menuOpen ? "opacity-0 w-5" : "w-4"}`} />
          <span className={`block h-[1.5px] bg-slate-700 rounded-full transition-all duration-300 ${menuOpen ? "w-5 -rotate-45 -translate-y-[6.5px]" : "w-5"}`} />
        </button>
      </div>

      <div
        className="md:hidden overflow-hidden transition-all duration-300 ease-out"
        style={{
          maxHeight: menuOpen ? "280px" : "0",
          opacity: menuOpen ? 1 : 0,
        }}
      >
        <div className="border-t border-slate-100 bg-white px-5 py-4 flex flex-col gap-1">
          {NAV_LINKS.map(({ label, href }) => {
            const active = location.pathname === href;
            return (
              <Link
                key={label}
                to={href}
                className="px-3 py-2.5 rounded-lg text-[14px] transition-colors"
                style={{
                  fontWeight: active ? 600 : 500,
                  color: active ? "#1e40af" : "#475569",
                  background: active ? "#eff6ff" : "transparent",
                }}
              >
                {label}
              </Link>
            );
          })}
          <Link
            to="/contact"
            className="mt-2 mx-1 px-4 py-2.5 rounded-lg text-center text-[14px] font-600 text-white"
            style={{ fontWeight: 600, background: "linear-gradient(135deg, #2563eb, #1d4ed8)" }}
          >
            Get in touch
          </Link>
        </div>
      </div>
    </header>
  );
}
