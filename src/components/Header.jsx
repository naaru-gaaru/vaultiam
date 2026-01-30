import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex flex-col leading-tight">
          <span className="text-xl font-semibold text-slate-900">
            Vault
            <span className="bg-blue-600 text-white px-2 py-1 rounded-md ml-1">
              IAM
            </span>
          </span>
          <span className="text-xs text-slate-500">
            Identity-first security
          </span>
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-sm">
          <Link to="/capabilities" className="hover:text-blue-600">
            Capabilities
          </Link>
          <Link to="/case-studies" className="hover:text-blue-600">
            Case Studies
          </Link>
          <Link to="/contact" className="hover:text-blue-600">
            Contact
          </Link>
        </nav>

        {/* CTA */}
        <Link
          to="/contact"
          className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors"
        >
          Book Risk Review
        </Link>
      </div>
    </header>
  );
}
