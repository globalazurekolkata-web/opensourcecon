import { useState } from 'react';
import { Menu, X, Moon } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Speakers', href: '#speakers' },
  { label: 'Topics', href: '#topics' },
  { label: 'Team', href: '#team' },
  { label: 'Sponsors', href: '#sponsors' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
      <div className="max-w-container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 flex-shrink-0">
            <div className="flex items-center gap-0.5">
              <span className="font-heading text-xl font-extrabold text-dark tracking-tight">
                OpenSource
              </span>
              <span className="font-heading text-xl font-extrabold text-brand-green tracking-tight">
                Con
              </span>
            </div>
            <span className="text-[10px] text-gray-secondary font-medium leading-tight hidden sm:block">
              Kolkata '25
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-dark transition-colors rounded-lg hover:bg-gray-50"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <button
              className="w-9 h-9 rounded-xl border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors"
              aria-label="Toggle theme"
            >
              <Moon size={16} />
            </button>
            <a
              href="#register"
              className="hidden sm:inline-flex btn-primary text-sm py-2.5 px-5"
            >
              Register Now →
            </a>
            <button
              className="lg:hidden w-9 h-9 rounded-xl border border-gray-200 flex items-center justify-center text-gray-500"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-gray-600 hover:text-dark hover:bg-gray-50 rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#register"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center btn-primary mt-3 py-3"
            >
              Register Now →
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
