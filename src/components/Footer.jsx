import { Link } from 'react-router-dom';
import Contact from './Contact';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Links Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold">
              Growvi
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <Link
              to="/about"
              className="text-slate-400 hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              to="/privacy"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
            <Contact />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          {/* Copyright */}
          <p className="text-center text-slate-400 text-sm mb-4">
            © {currentYear} Growvi. All rights reserved.
          </p>

          {/* Disclaimer */}
          <p className="text-center text-slate-500 text-xs max-w-2xl mx-auto">
            Growvi is not affiliated with Google LLC. Google, Google
            Business Profile, and Google Reviews are trademarks of Google LLC.
            Our service uses the Google Business Profile API to help businesses
            manage their online reputation.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
