import { Link } from "react-router-dom";

const FOOTER_LINKS = {
  Company: [
    { label: "About", href: "/about" },
    { label: "Customer Stories", href: "/customer-stories" },
    { label: "The VaultIAM Way", href: "/the-vaultiam-way" },
  ],
  Services: [
    { label: "Capabilities", href: "/capabilities" },
    { label: "IAM", href: "/capabilities#iam" },
    { label: "CIAM", href: "/capabilities#ciam" },
    { label: "PAM", href: "/capabilities#pam" },
  ],
  Resources: [
    { label: "Contact", href: "/contact" },
    { label: "Free Assessment", href: "/contact" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "linear-gradient(180deg, #0f172a 0%, #1e293b 100%)",
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-5 pt-10 sm:pt-12 pb-6 sm:pb-8">
        {/* Main footer grid - stacks on mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">
          {/* Brand column - full width on mobile */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1 mb-4 sm:mb-0">
            <Link to="/" className="inline-block mb-4">
              <img
                src="/vaultiam-logo-footer.svg"
                alt="VaultIAM"
                className="h-7 sm:h-8 w-auto"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </Link>
            <p
              className="text-slate-400 leading-relaxed max-w-xs"
              style={{ fontSize: 13 }}
            >
              Identity-first IAM security services for regulated enterprises in
              FinTech and HealthTech.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h4
                className="text-white mb-3 sm:mb-4"
                style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.05em" }}
              >
                {category.toUpperCase()}
              </h4>
              <ul className="space-y-2 sm:space-y-2.5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      to={href}
                      className="text-slate-400 hover:text-white transition-colors duration-200 touch-manipulation inline-block py-1"
                      style={{ fontSize: 13 }}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p
          className="text-slate-500 mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-slate-700/50 text-center sm:text-left"
          style={{ fontSize: 10, lineHeight: 1.6 }}
        >
          Company logos are trademarks or registered trademarks of their respective holders.
          Use of them does not imply any affiliation with or endorsement by them.
        </p>

        {/* Bottom row - stacks on mobile */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-slate-500 text-center sm:text-left" style={{ fontSize: 12 }}>
            © {currentYear} VaultIAM. All rights reserved.
          </span>
          <div className="flex items-center gap-4 sm:gap-5">
            {["Privacy Policy", "Terms of Service"].map((text) => (
              <Link
                key={text}
                to={`/${text.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-slate-400 hover:text-white transition-colors duration-200 touch-manipulation py-1"
                style={{ fontSize: 12 }}
              >
                {text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
