import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { label: "Capabilities", href: "/capabilities" },
  { label: "The VaultIAM Way", href: "/the-vaultiam-way" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
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

  // close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [location]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.92)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        boxShadow: scrolled ? "0 1px 0 #e2e8f0" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          {/* shield mark */}
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path
              d="M14 2L4 7v7c0 6.5 4.3 12.4 10 14 5.7-1.6 10-7.5 10-14V7L14 2z"
              fill="#1e293b"
              stroke="none"
            />
            <path
              d="M14 2L4 7v7c0 6.5 4.3 12.4 10 14 5.7-1.6 10-7.5 10-14V7L14 2z"
              fill="url(#logoGrad)"
              opacity="0.85"
            />
            <path d="M10 14.5l3 3 5-6" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            <defs>
              <linearGradient id="logoGrad" x1="4" y1="2" x2="24" y2="28" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#1e40af" />
              </linearGradient>
            </defs>
          </svg>
          <span className="text-[17px] font-700 tracking-[-0.02em] text-slate-900" style={{ fontWeight: 700 }}>
            Vault<span className="text-blue-600">IAM</span>
          </span>
        </Link>

        {/* Desktop nav */}
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

          {/* CTA */}
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

        {/* Mobile hamburger */}
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

      {/* Mobile dropdown */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300 ease-out"
        style={{
          maxHeight: menuOpen ? "320px" : "0",
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
