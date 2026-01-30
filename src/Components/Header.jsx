import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            src="/vaultiam-logo.svg"
            alt="VaultIAM"
            className="h-10 w-auto"
          />
        </Link>

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
