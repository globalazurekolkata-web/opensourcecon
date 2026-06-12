import { useState, useEffect, useRef } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { openKonfHub } from '../utils/konfhub';
import { navLinks } from '../data/navLinks';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setDark(isDark);
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const sections = ['home', 'about', 'schedule', 'speakers', 'topics', 'team', 'sponsors', 'venue', 'faq'];
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -50% 0px',
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  // Trap focus in mobile menu
  useEffect(() => {
    if (!mobileOpen) return;

    const focusable = mobileMenuRef.current?.querySelectorAll(
      'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );
    if (!focusable || focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    first.focus();

    const handleKeyDown = (e) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === first) {
          last.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === last) {
          first.focus();
          e.preventDefault();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  const toggleTheme = (e) => {
    const isDark = document.documentElement.classList.contains('dark');
    const x = e.clientX;
    const y = e.clientY;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const applyTheme = () => {
      if (isDark) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        setDark(false);
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        setDark(true);
      }
    };

    if (document.startViewTransition) {
      const transition = document.startViewTransition(applyTheme);
      transition.ready.then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${endRadius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 500,
            easing: 'ease-in-out',
            pseudoElement: '::view-transition-new(root)',
          }
        );
      });
    } else {
      applyTheme();
    }
  };

  return (
    <nav className="relative w-full bg-white dark:bg-dark/80 backdrop-blur-xl border-b border-gray-100 dark:border-white/5">
      <div className="max-w-container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 flex-shrink-0">
            <img
              src="/images/logo text.png"
              alt="OpenSourceCon"
              className="h-7 object-contain dark:invert"
            />
            <span className="text-[10px] text-gray-secondary dark:text-gray-400 font-semibold leading-none border-l border-gray-200 dark:border-white/10 pl-2.5 self-center py-1 hidden sm:block">
              Kolkata '26
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const linkId = link.href.replace('#', '');
              const isActive = activeSection === linkId;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium transition-all rounded-lg ${
                    isActive
                      ? 'text-brand-green font-semibold bg-brand-green/5'
                      : 'text-gray-600 dark:text-gray-400 hover:text-dark dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-xl border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
              aria-label="Toggle theme"
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={openKonfHub}
              className="hidden sm:inline-flex btn-primary text-sm py-2.5 px-5"
            >
              Register Now →
            </button>
            <button
              className="lg:hidden w-9 h-9 rounded-xl border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5"
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
        <div ref={mobileMenuRef} className="lg:hidden bg-white dark:bg-dark border-t border-gray-100 dark:border-white/5 shadow-lg">
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((link) => {
              const linkId = link.href.replace('#', '');
              const isActive = activeSection === linkId;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-3 text-sm font-medium rounded-xl transition-all ${
                    isActive
                      ? 'text-brand-green font-bold bg-brand-green/5'
                      : 'text-gray-600 dark:text-gray-400 hover:text-dark dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <button
              onClick={(e) => { setMobileOpen(false); openKonfHub(e); }}
              className="block w-full text-center btn-primary mt-3 py-3"
            >
              Register Now →
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
