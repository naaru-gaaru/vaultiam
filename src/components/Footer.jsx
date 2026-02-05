import { Link } from "react-router-dom";

const FOOTER_COLS = [
  {
    heading: "Company",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Customer Stories", to: "/customer-stories" },
      { label: "The VaultIAM Way", to: "/the-vaultiam-way" },
      { label: "Blog", to: "/blog" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Capabilities", to: "/capabilities" },
      { label: "IAM", to: "/capabilities/iam" },
      { label: "CIAM", to: "/capabilities/ciam" },
      { label: "PAM", to: "/capabilities/pam" },
      { label: "ITDR", to: "/capabilities/itdr" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Contact Us", to: "/contact" },
      { label: "IAM Assessment Guide", to: "/assessment-guide" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-5 pt-5 pb-3 grid grid-cols-1 sm:grid-cols-12 gap-6">

        <div className="col-span-1 sm:col-span-12 md:col-span-5">
          <div className="flex items-center mb-1.5">
            <img 
              src="/vaultiam-logo-no-tag.svg" 
              alt="VaultIAM" 
              className="h-9 w-auto"
            />
          </div>

          <p className="text-[13.5px] text-slate-500 leading-snug max-w-xs">
            Identity-first IAM security services for FinTech, healthcare, and regulated enterprises across North America. We architect, deploy, and operate the identity controls that keep your business secure.
          </p>
        </div>

        {FOOTER_COLS.map(col => (
          <div key={col.heading} className="col-span-1 sm:col-span-4 md:col-span-2">
            <h4 className="text-[11px] font-600 text-slate-500 uppercase tracking-wider mb-1.5" style={{ fontWeight: 600 }}>
              {col.heading}
            </h4>
            <ul className="flex flex-col gap-1">
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

      <div className="max-w-6xl mx-auto px-4 sm:px-5 pb-2.5">
        {/* Trademark disclaimer */}
        <div className="border-t border-slate-200 pt-4 pb-3">
          <p className="text-[10px] text-slate-400 text-center leading-relaxed max-w-4xl mx-auto">
            Company logos are trademarks or registered trademarks of their respective holders. Use of them does not imply any affiliation with or endorsement by them.
          </p>
        </div>
        
        {/* Copyright line */}
        <div className="border-t border-slate-200 pt-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
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
