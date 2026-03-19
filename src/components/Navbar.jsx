import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  // Don't show full navbar on legal pages, just a simple one
  const isLegalPage = location.pathname === '/privacy' || location.pathname === '/terms';

  if (isLegalPage) {
    return (
      <nav className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <div className="text-2xl font-bold text-slate-800">
                Growvi
              </div>
            </Link>

            {/* Back to Home */}
            <Link
              to="/"
              className="text-slate-600 hover:text-slate-900 font-medium transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Placeholder */}
          <div className="flex-shrink-0">
            <Link to="/">
              <div className="text-2xl font-bold text-slate-800">
                Growvi
              </div>
            </Link>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-slate-600 hover:text-slate-900 font-medium transition-colors"
            >
              Features
            </a>
            <a
              href="#faq"
              className="text-slate-600 hover:text-slate-900 font-medium transition-colors"
            >
              FAQ
            </a>
            <a
              href="#pricing"
              className="text-slate-600 hover:text-slate-900 font-medium transition-colors"
            >
              Pricing
            </a>
            <Link
              to="/about"
              className="text-slate-600 hover:text-slate-900 font-medium transition-colors"
            >
              About
            </Link>
            <a
              href="#dashboard-preview"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-slate-600 hover:text-slate-900 p-2"
              aria-label="Open menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
