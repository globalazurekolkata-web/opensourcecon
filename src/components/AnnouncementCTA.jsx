import { RiGithubFill, RiTwitterXFill, RiLinkedinBoxFill, RiInstagramFill } from 'react-icons/ri';

const socials = [
  {
    handle: 'OpenSourceConIN',
    url: 'https://www.x.com/OpenSourceConIN',
    icon: RiTwitterXFill,
  },
  {
    handle: '@opensourceconindia',
    url: 'https://www.instagram.com/opensourceconindia',
    icon: RiInstagramFill,
  },
  {
    handle: 'OpenSourceCon India',
    url: 'https://www.linkedin.com/company/opensource-con-india',
    icon: RiLinkedinBoxFill,
  },
  {
    handle: 'opensourcecon',
    url: 'https://github.com/globalazurekolkata-web/opensourcecon',
    icon: RiGithubFill,
  },
];

const ArrowRightIcon = () => (
  <svg className="w-5 h-5 text-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export default function AnnouncementCTA() {
  const openKonfHub = (e) => {
    if (e) e.preventDefault();
    const kBtn = document.querySelector('#konfhub-widget-trigger button, #konfhub-widget-trigger a');
    if (kBtn) {
      kBtn.click();
    } else {
      // Fallback in case the widget isn't fully initialized
      window.open('https://konfhub.com/opensourcecon2026', '_blank');
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-[#0B1020] relative overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none z-0" />
      
      <div className="max-w-container mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Main CTA Card */}
        <div 
          className="relative rounded-[32px] overflow-hidden diagonal-pattern border border-brand-green/20 max-w-5xl mx-auto shadow-lg py-20 px-8 text-center flex flex-col items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, #63D940 0%, #56D64B 50%, #3DBF2E 100%)'
          }}
        >
          {/* Inner glassmorphism glow overlay */}
          <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-[1px] pointer-events-none z-0" />

          {/* Card Content */}
          <div className="relative z-10 max-w-2xl mx-auto space-y-5 flex flex-col items-center w-full">
            <span className="text-gray-800 text-xs md:text-sm font-bold tracking-widest uppercase opacity-95 bg-white/10 px-4 py-1.5 rounded-full border border-white/20">
              Registrations Open
            </span>
            
            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 uppercase tracking-wider leading-none">
              REGISTER & <span style={{color: "white"}}>CONNECT</span>
            </h2>
            
            <p className="text-white/95 text-sm md:text-base max-w-lg mx-auto leading-relaxed pt-1">
              Secure your pass today to join hands-on workshops, keynotes, and panels. Connect with our social handles below for live announcements and speaker releases!
            </p>

            {/* Registration CTA Button */}
            <div className="pt-4">
              <button 
                onClick={openKonfHub}
                className="px-8 py-4 rounded-full bg-white hover:bg-gray-50 text-dark font-black text-xs md:text-sm uppercase tracking-wider flex items-center justify-center gap-3 whitespace-nowrap transition-all duration-200 shadow-lg hover:shadow-xl active:scale-[0.98] cursor-pointer select-none border-0"
              >
                <span>Book Your Tickets Now</span>
                <ArrowRightIcon />
              </button>
            </div>
          </div>

          {/* Decorative background shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/4 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/4 pointer-events-none" />
        </div>

        {/* Social Links Pills Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 max-w-5xl mx-auto w-full">
          {socials.map((social) => (
            <a
              key={social.handle}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary hover:scale-[1.03] active:scale-98 shadow-md justify-center w-full !text-dark"
            >
              <social.icon size={19} />
              <span>{social.handle}</span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
