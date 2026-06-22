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

export default function Navbar({ currentUser, onOpenAuth, onOpenProfile, showLogin = false }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [localShowLogin, setLocalShowLogin] = useState(showLogin);

  useEffect(() => {
    setLocalShowLogin(showLogin);
  }, [showLogin]);

  useEffect(() => {
    // Expose a global function on window so it can be made visible when needed
    window.showNavbarLogin = (visible = true) => {
      setLocalShowLogin(visible);
      localStorage.setItem('showLogin', visible ? 'true' : 'false');
      return `Navbar login button visibility set to: ${visible}`;
    };

    // Check URL parameters or localStorage on mount
    const params = new URLSearchParams(window.location.search);
    const paramVal = params.get('showLogin');
    if (paramVal === 'true') {
      setLocalShowLogin(true);
      localStorage.setItem('showLogin', 'true');
    } else if (paramVal === 'false') {
      setLocalShowLogin(false);
      localStorage.setItem('showLogin', 'false');
    } else {
      const storedVal = localStorage.getItem('showLogin');
      if (storedVal === 'true') {
        setLocalShowLogin(true);
      } else if (storedVal === 'false') {
        setLocalShowLogin(false);
      }
    }
  }, []);

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
              localShowLogin && (
                <Button
                  onClick={(e) => { e.preventDefault(); onOpenAuth(); }}
                  variant="text"
                  className={`${mobileOpen ? 'hidden' : 'hidden sm:inline-flex'}`}
                  icon={RiLoginBoxLine}
                  iconPosition="left"
                >
                  Login
                </Button>
              )
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
        className={`xl:hidden absolute top-full left-0 right-0 max-h-[calc(100dvh-72px)] overflow-y-auto bg-gradient-to-b from-[#0a1208] via-[#142611] to-black transition-all duration-300 ease-in-out origin-top border-t border-b border-white/10 shadow-2xl rounded-b-[2rem] ${
          mobileOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        {/* Dark grid pattern */}
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none z-0" 
          style={{
            backgroundImage: 'linear-gradient(rgba(86, 214, 75, 0.2) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(86, 214, 75, 0.2) 1.5px, transparent 1.5px)',
            backgroundSize: '72px 72px'
          }}
        />

        {/* Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-64 h-64 bg-brand-green/20 rounded-full blur-[100px] pointer-events-none z-0" />

        <div className="px-6 py-6 flex flex-col relative z-10">
          
          {/* Navigation Links - Centered Typography */}
          <div className="space-y-2 max-w-md mx-auto w-full pt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-center group py-2"
              >
                <span className="font-heading text-xl font-medium text-white group-hover:text-brand-green transition-colors duration-300">
                  {link.label}
                </span>
              </a>
            ))}
          </div>

          {/* Action Buttons & Social Footer */}
          <div className="mt-8 space-y-6 max-w-md mx-auto w-full">
            <div className="flex flex-col gap-4">
              {currentUser ? (
                <button
                  onClick={() => { setMobileOpen(false); onOpenProfile(); }}
                  className="flex items-center justify-center gap-3 w-full py-3.5 bg-white/5 border border-white/10 rounded-xl text-white font-semibold text-sm hover:bg-white/10 backdrop-blur-sm transition-all"
                >
                  <div className="w-6 h-6 rounded-full bg-brand-green/20 text-brand-green flex items-center justify-center font-heading font-extrabold text-[10px] border border-brand-green/30 overflow-hidden">
                    {currentUser.avatarUrl ? (
                      <img src={currentUser.avatarUrl} alt={currentUser.name} className="w-full h-full object-cover" />
                    ) : (
                      currentUser.name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2)
                    )}
                  </div>
                  <span>View My Pass</span>
                </button>
              ) : (
                localShowLogin && (
                  <Button
                    onClick={(e) => { e.preventDefault(); setMobileOpen(false); onOpenAuth(); }}
                    variant="secondary"
                    className="flex w-full justify-center py-3 bg-white/5 border border-white/10 text-white hover:bg-white/10 backdrop-blur-sm text-sm"
                    icon={RiLoginBoxLine}
                    iconPosition="left"
                  >
                    Login
                  </Button>
                )
              )}
              <Button
                onClick={(e) => { setMobileOpen(false); openKonfHub(e); }}
                variant="primary"
                className="flex w-full justify-center py-3 text-dark font-extrabold shadow-[0_0_20px_rgba(86,214,75,0.2)] text-sm"
                icon={RiArrowRightLine}
                iconPosition="right"
              >
                Register Now
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center gap-3 pt-2">
              {socialLinks.map(({ Icon, href, label, size }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-green hover:text-dark transition-all duration-300 border border-white/10 backdrop-blur-sm shadow-xl"
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
