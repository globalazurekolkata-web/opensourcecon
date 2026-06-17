import { useState, useEffect } from 'react';
import { 
  RiLoginBoxLine, 
  RiArrowRightLine, 
  RiMenu4Line, 
  RiCloseLine, 
  RiGithubFill, 
  RiTwitterXFill, 
  RiLinkedinBoxFill, 
  RiInstagramFill 
} from 'react-icons/ri';
import Button from './Button';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Speakers', href: '#speakers' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Communities', href: '#community' },
  { label: 'Venue', href: '#venue' },
  { label: 'Sponsors', href: '#sponsors' },
];

const socialLinks = [
  { Icon: RiGithubFill, href: 'https://github.com/globalazurekolkata-web/opensourcecon', label: 'GitHub', size: 20 },
  { Icon: RiTwitterXFill, href: 'https://www.x.com/OpenSourceConIN', label: 'Twitter', size: 18 },
  { Icon: RiLinkedinBoxFill, href: 'https://www.linkedin.com/company/opensource-con-india', label: 'LinkedIn', size: 20 },
  { Icon: RiInstagramFill, href: 'https://www.instagram.com/opensourceconindia', label: 'Instagram', size: 20 },
];

function openKonfHub(e) {
  e.preventDefault();
  const kBtn = document.querySelector('#konfhub-widget-trigger button, #konfhub-widget-trigger a');
  if (kBtn) kBtn.click();
}

export default function Navbar({ currentUser, onOpenAuth, onOpenProfile }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 py-1 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-dark/80 backdrop-blur-xl border-b border-gray-100 dark:border-white/5 shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-container mx-auto px-6 xl:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 flex-shrink-0">
            <img
              src="/logoWord.png"
              alt="OpenSourceCon"
              className="h-10 object-contain dark:invert"
            />
          </a>

          {/* Desktop Nav Links — center */}
          <div className="hidden xl:flex items-center gap-1">
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
            {currentUser ? (
              <button
                onClick={onOpenProfile}
                className={`flex items-center gap-2.5 px-4 py-2 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-dark dark:hover:text-white transition-all duration-200 hover:bg-gray-50/80 dark:hover:bg-white/5 rounded-xl border border-gray-150 dark:border-white/5 shadow-soft ${mobileOpen ? 'hidden' : 'hidden sm:flex'}`}
              >
                <div className="w-6 h-6 rounded-full bg-brand-green/20 text-brand-green-dark dark:text-brand-green flex items-center justify-center font-heading font-extrabold text-[10px] border border-brand-green/30 overflow-hidden">
                  {currentUser.avatarUrl ? (
                    <img src={currentUser.avatarUrl} alt={currentUser.name} className="w-full h-full object-cover" />
                  ) : (
                    currentUser.name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2)
                  )}
                </div>
                <span>My Pass</span>
              </button>
            ) : (
              <Button
                onClick={(e) => { e.preventDefault(); onOpenAuth(); }}
                variant="text"
                className={`${mobileOpen ? 'hidden' : 'hidden sm:inline-flex'}`}
                icon={RiLoginBoxLine}
                iconPosition="left"
              >
                Login
              </Button>
            )}
            <Button
              onClick={openKonfHub}
              variant="primary"
              className={`${mobileOpen ? 'hidden' : 'hidden md:inline-flex'} py-2.5 px-6`}
              icon={RiArrowRightLine}
              iconPosition="right"
            >
              Register Now
            </Button>
            <button
              className="xl:hidden w-12 h-12 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <RiCloseLine size={20} /> : <RiMenu4Line size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`xl:hidden absolute top-full left-0 right-0 h-[calc(100dvh-72px)] overflow-y-auto border-b border-gray-100 dark:border-white/5 bg-white/95 dark:bg-dark/95 backdrop-blur-xl transition-all duration-300 ease-in-out origin-top ${
          mobileOpen
            ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
            : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'
        }`}
      >
        <div className="px-6 py-10 flex flex-col min-h-full justify-between border-t border-gray-100 dark:border-white/5">
          {/* Navigation Links */}
          <div className="space-y-1.5 max-w-md mx-auto w-full">
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between px-5 py-3.5 rounded-xl hover:bg-brand-green/8 dark:hover:bg-brand-green/5 transition-all duration-300 group border border-transparent hover:border-brand-green/10 dark:hover:border-brand-green/10"
              >
                <div className="flex items-center gap-4 group-hover:translate-x-1.5 transition-transform duration-300">
                  <span className="text-xs font-mono text-brand-green-dark dark:text-brand-green-dark/45">
                    0{idx + 1}
                  </span>
                  <span className="text-lg font-medium text-gray-800 dark:text-gray-200 group-hover:text-brand-green-dark transition-colors">
                    {link.label}
                  </span>
                </div>
                <RiArrowRightLine className="text-brand-green-dark opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-lg" />
              </a>
            ))}
          </div>

          {/* Action Buttons & Social Footer */}
          <div className="border-t border-gray-100 dark:border-white/5 space-y-8 max-w-md mx-auto w-full">
            <div className="flex flex-col gap-3 items-center">
              {currentUser ? (
                <button
                  onClick={() => { setMobileOpen(false); onOpenProfile(); }}
                  className="flex items-center justify-center gap-3 w-full max-w-[300px] py-3.5 bg-gray-50 dark:bg-white/5 border border-gray-150 dark:border-white/5 rounded-xl text-dark dark:text-white font-semibold text-sm hover:bg-gray-100 dark:hover:bg-white/10 transition-all mt-6"
                >
                  <div className="w-6 h-6 rounded-full bg-brand-green/20 text-brand-green-dark dark:text-brand-green flex items-center justify-center font-heading font-extrabold text-[10px] border border-brand-green/30 overflow-hidden">
                    {currentUser.avatarUrl ? (
                      <img src={currentUser.avatarUrl} alt={currentUser.name} className="w-full h-full object-cover" />
                    ) : (
                      currentUser.name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2)
                    )}
                  </div>
                  <span>View My Pass</span>
                </button>
              ) : (
                <Button
                  onClick={(e) => { e.preventDefault(); setMobileOpen(false); onOpenAuth(); }}
                  variant="text"
                  className="flex w-full max-w-[300px] justify-center pb-4 pt-6"
                  icon={RiLoginBoxLine}
                  iconPosition="left"
                >
                  Login
                </Button>
              )}
              <Button
                onClick={(e) => { setMobileOpen(false); openKonfHub(e); }}
                variant="primary"
                className="flex w-full max-w-[300px] justify-center py-4"
                icon={RiArrowRightLine}
                iconPosition="right"
              >
                Register Now
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center gap-5">
              {socialLinks.map(({ Icon, href, label, size }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-gray-50 dark:bg-white/5 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-brand-green hover:text-white transition-all duration-300 border border-gray-100 dark:border-white/5"
                >
                  <Icon size={size} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
