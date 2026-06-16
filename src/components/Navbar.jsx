import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Speakers', href: '#speakers' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Communities', href: '#community' },
  { label: 'Venue', href: '#venue' },
  { label: 'Sponsors', href: '#sponsors' },
];

function openKonfHub(e) {
  e.preventDefault();
  const kBtn = document.querySelector('#konfhub-widget-trigger button, #konfhub-widget-trigger a');
  if (kBtn) kBtn.click();
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-dark/80 backdrop-blur-xl border-b border-gray-100 dark:border-white/5 shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 flex-shrink-0">
            <img
              src="/images/logo text.png"
              alt="OpenSourceCon India"
              className="h-7 object-contain dark:invert"
            />
            <span className="text-[10px] text-gray-secondary dark:text-gray-400 font-semibold leading-none border-l border-gray-200 dark:border-white/10 pl-2.5 self-center py-1 hidden sm:block">
              India '26
            </span>
          </a>

          {/* Desktop Nav Links — center */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-dark dark:hover:text-white transition-colors rounded-xl hover:bg-gray-50/80 dark:hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <a
              href="#login"
              className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-dark dark:hover:text-white transition-colors rounded-xl"
            >
              Login
            </a>
            <button
              onClick={openKonfHub}
              className="hidden sm:inline-flex btn-primary text-sm py-2.5 px-6"
            >
              Register Now
            </button>
            <button
              className="lg:hidden w-10 h-10 rounded-xl border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white dark:bg-dark border-t border-gray-100 dark:border-white/5 shadow-lg">
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-dark dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5 rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#login"
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-dark dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5 rounded-xl transition-colors"
            >
              Login
            </a>
            <button
              onClick={(e) => { setMobileOpen(false); openKonfHub(e); }}
              className="block w-full text-center btn-primary mt-3 py-3"
            >
              Register Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
