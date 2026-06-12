import { useState, useEffect, useRef } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { openKonfHub } from '../utils/konfhub';
import { navLinks } from '../data/navLinks';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setDark(isDark);
  }, []);

  // Track page scroll to apply transparency/translucency
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
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
    <nav
      className={`relative w-full transition-all duration-300 ${
        scrolled || mobileOpen
          ? 'bg-white/80 dark:bg-dark/80 backdrop-blur-xl border-b border-gray-100 dark:border-white/5 shadow-sm'
          : 'bg-transparent border-b border-transparent dark:border-transparent'
      }`}
    >
      <div className="max-w-full mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-1 flex-shrink-0">
            <div className="relative flex items-center justify-center">
              <img
                src="/images/logo.png"
                alt="OpenSourceCon Logo"
                className="h-14 w-auto object-contain"
              />
            </div>
            <img
              src="/images/logo text.png"
              alt="OpenSourceCon"
              className="h-[38px] -ml-2 w-auto object-contain dark:hidden"
            />
            <img
              src="/images/logo text dark.png"
              alt="OpenSourceCon"
              className="h-[38px] -ml-2 w-auto object-contain hidden dark:block"
            />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 h-full">
            {navLinks.map((link) => {
              const linkId = link.href.replace('#', '');
              const isActive = activeSection === linkId;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`relative h-full flex items-center px-4 text-sm font-medium transition-colors duration-300 group ${
                    isActive
                      ? 'text-brand-green font-semibold'
                      : 'text-gray-600 dark:text-gray-400 hover:text-dark dark:hover:text-white'
                  }`}
                >
                  <span className="relative py-1.5">
                    {link.label}
                    {/* Underline indicator */}
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-[3px] rounded-full transition-all duration-300 ease-out origin-center ${
                        isActive
                          ? 'bg-brand-green scale-x-100 opacity-100'
                          : 'bg-brand-green/30 scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
                      }`}
                    />
                  </span>
                </a>
              );
            })}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-xl border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
              aria-label="Toggle theme"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={openKonfHub}
              className="hidden sm:inline-flex btn-primary text-sm py-2.5 px-5"
            >
              Register Now →
            </button>
            <button
              className="lg:hidden w-10 h-10 rounded-xl border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
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
                  className={`relative block py-3 text-sm font-medium rounded-xl transition-all duration-300 ${
                    isActive
                      ? 'text-brand-green font-bold bg-brand-green/5 pl-7 pr-4'
                      : 'text-gray-600 dark:text-gray-400 hover:text-dark dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5 pl-4 pr-4'
                  }`}
                >
                  {isActive && (
                    <span className="absolute left-2.5 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-brand-green rounded-full" />
                  )}
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
