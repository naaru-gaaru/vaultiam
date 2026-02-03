import { Link } from "react-router-dom";

const FOOTER_COLS = [
  {
    heading: "Company",
    links: [
      { label: "About Us",            to: "/about" },
      { label: "The VaultIAM Way",    to: "/the-vaultiam-way" },
      { label: "Blog",                to: "/blog" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Capabilities",        to: "/capabilities" },
      { label: "IAM",                 to: "/capabilities/iam" },
      { label: "CIAM",                to: "/capabilities/ciam" },
      { label: "PAM",                 to: "/capabilities/pam" },
      { label: "ITDR",                to: "/capabilities/itdr" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Contact Us",          to: "/contact" },
      { label: "IAM Assessment Guide",to: "/assessment-guide" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200">
      {/* main grid */}
      <div className="max-w-6xl mx-auto px-5 pt-12 pb-8 grid grid-cols-12 gap-8">

        {/* brand column — wider */}
        <div className="col-span-12 md:col-span-5">
          {/* logo repeat */}
          <div className="flex items-center gap-2.5 mb-4">
            <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
              <path d="M14 2L4 7v7c0 6.5 4.3 12.4 10 14 5.7-1.6 10-7.5 10-14V7L14 2z" fill="#1e293b"/>
              <path d="M14 2L4 7v7c0 6.5 4.3 12.4 10 14 5.7-1.6 10-7.5 10-14V7L14 2z" fill="url(#fLogoGrad)" opacity="0.85"/>
              <path d="M10 14.5l3 3 5-6" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <defs>
                <linearGradient id="fLogoGrad" x1="4" y1="2" x2="24" y2="28" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#2563eb"/>
                  <stop offset="100%" stopColor="#1e40af"/>
                </linearGradient>
              </defs>
            </svg>
            <span className="text-[16px] font-700 text-slate-900" style={{ fontWeight: 700 }}>
              Vault<span className="text-blue-600">IAM</span>
            </span>
          </div>

          <p className="text-[13.5px] text-slate-500 leading-relaxed max-w-xs">
            Identity-first IAM security services for FinTech, healthcare, and regulated enterprises across North America. We architect, deploy, and operate the identity controls that keep your business secure.
          </p>
        </div>

        {/* link columns */}
        {FOOTER_COLS.map(col => (
          <div key={col.heading} className="col-span-12 md:col-span-2">
            <h4 className="text-[11px] font-600 text-slate-500 uppercase tracking-wider mb-4" style={{ fontWeight: 600 }}>
              {col.heading}
            </h4>
            <ul className="flex flex-col gap-2.5">
              {col.links.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-[13.5px] text-slate-600 transition-colors duration-150"
                    style={{ fontWeight: 500 }}
                    onMouseEnter={e => e.currentTarget.style.color = "#2563eb"}
                    onMouseLeave={e => e.currentTarget.style.color = "#475569"}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* bottom bar */}
      <div className="max-w-6xl mx-auto px-5 pb-6">
        <div className="border-t border-slate-200 pt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <span className="text-[12px] text-slate-400">
            © {year} VaultIAM. All rights reserved.
          </span>
          <div className="flex items-center gap-5">
            {["Privacy Policy", "Terms of Service"].map(label => (
              <Link
                key={label}
                to={label === "Privacy Policy" ? "/privacy" : "/terms"}
                className="text-[12px] text-slate-400 transition-colors duration-150"
                onMouseEnter={e => e.currentTarget.style.color = "#2563eb"}
                onMouseLeave={e => e.currentTarget.style.color = "#94a3b8"}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
