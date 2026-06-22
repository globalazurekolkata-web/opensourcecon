import { ArrowRight, Users, ExternalLink } from 'lucide-react';
import Button from './Button';

// Placeholder partner slots until confirmed
const placeholders = [
  { label: 'Partner Slot', sub: 'Join Kolkata \'26' },
  { label: 'Your Community Here', sub: 'Apply to participate' },
  { label: 'Partner Slot', sub: 'Empower developers' },
  { label: 'Your Community Here', sub: 'Collaborate with us' },
  { label: 'Partner Slot', sub: 'Share knowledge' },
  { label: 'Your Community Here', sub: 'Represent your college' }
];

export default function CommunityPartners() {
  const openPartnerForm = (e) => {
    // Scroll to the registration card at the bottom
    const ctaCard = document.getElementById('partner-cta');
    if (ctaCard) {
      e.preventDefault();
      ctaCard.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="community" className="py-20 lg:py-28 relative bg-white dark:bg-[#0B1020] overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none z-0" />
      
      <div className="max-w-container mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-end mb-16">
          <div className="md:col-span-7 space-y-6 text-left">
            <div className="section-tag w-fit">
              <span className="green-dot" />
              OUR PARTNERS
            </div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] leading-[1.4]! tracking-tight text-dark dark:text-white">
              <span className="font-medium">Communities that</span>
              <br />
              <span className="text-gradient uppercase font-bold">POWER Us</span>
            </h2>
          </div>
          <div className="md:col-span-5 text-left">
            <p className="text-gray-secondary dark:text-gray-400 text-base md:text-lg leading-relaxed max-w-md">
              Open Source Con India is built on the shoulders of amazing developer communities. Meet the partners helping us grow.
            </p>
          </div>
        </div>

        {/* Placeholder Partner Marquee */}
        <div className="relative w-full overflow-hidden flex py-4 mb-8"
             style={{ 
               WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
               maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)' 
             }}>
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-5">
            {[...placeholders, ...placeholders, ...placeholders].map((partner, i) => (
              <a 
                href="#partner-cta"
                onClick={openPartnerForm}
                key={i} 
                className="w-[260px] sm:w-[285px] shrink-0 card p-5 bg-white dark:bg-[#131C31] border-2 border-dashed border-gray-200 dark:border-white/10 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-center items-center hover:border-brand-green/45 dark:hover:border-brand-green/45 hover:bg-gray-50/50 dark:hover:bg-white/5 cursor-pointer relative overflow-hidden h-[120px] text-decoration-none group"
              >
                {/* Visual Accent Hover highlight */}
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-brand-green/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="flex flex-col items-center justify-center text-center space-y-2">
                  {/* Plus Icon container */}
                  <div className="w-8 h-8 rounded-full border border-dashed border-gray-300 dark:border-white/20 flex items-center justify-center text-gray-405 group-hover:border-brand-green group-hover:bg-brand-green/10 group-hover:text-brand-green transition-all duration-300">
                    <span className="font-mono text-sm font-bold">+</span>
                  </div>
                  
                  {/* Slot labels */}
                  <div className="leading-tight">
                    <span className="font-heading font-extrabold text-[12px] text-gray-500 dark:text-gray-450 group-hover:text-dark dark:group-hover:text-white transition-colors block">
                      {partner.label}
                    </span>
                    <span className="text-[9px] font-semibold text-gray-400 dark:text-gray-500 block mt-0.5">
                      {partner.sub}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Featured Card and Partner CTA layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-8 text-left">
          
          {/* Featured Community Card (Col span 7) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="card p-0 bg-white dark:bg-[#131C31] border border-gray-150 dark:border-white/5 rounded-[28px] overflow-hidden shadow-sm flex flex-col sm:flex-row h-full hover:shadow-md transition-all duration-300">
              {/* Image Area */}
              <div className="aspect-[4/3] sm:w-1/2 overflow-hidden bg-gray-150 relative">
                <img 
                  src="/images/Left_ Stylized Team Photo.png" 
                  alt="Kolkata Geeks Group" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-green text-dark text-[10px] font-extrabold tracking-wider uppercase shadow-md">
                    Featured Partner
                  </span>
                </div>
              </div>

              {/* Info Area */}
              <div className="p-8 sm:w-1/2 flex flex-col justify-between space-y-6 text-left">
                <div className="space-y-2">
                  <h3 className="font-heading text-2xl font-extrabold text-dark dark:text-white">
                    Kolkata Geeks
                  </h3>
                  <p className="text-xs font-semibold text-brand-green flex items-center gap-1">
                    <Users size={12} />
                    3.5K+ Active Members
                  </p>
                  <p className="text-sm text-gray-secondary dark:text-gray-400 leading-relaxed pt-2">
                    Kolkata Geeks is one of Bengal's oldest developer communities, promoting technology sharing, web development standards, and open source participation through regular meetups and hackathons.
                  </p>
                </div>

                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm py-3 px-6 rounded-full flex items-center justify-center gap-2 w-full"
                >
                  Join Community <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Partner Registration CTA Box (Col span 5) */}
          <div id="partner-cta" className="lg:col-span-5 flex flex-col justify-between">
            <div className="card p-8 bg-gray-50 dark:bg-[#131C31] border border-gray-150 dark:border-white/5 rounded-[28px] shadow-sm flex flex-col justify-between h-full hover:shadow-md transition-shadow duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-green/10 flex items-center justify-center text-brand-green flex-shrink-0">
                  <Users size={22} />
                </div>
                
                <h3 className="font-heading text-xl font-extrabold text-dark dark:text-white leading-snug">
                  Interested in partnering with us?
                </h3>
                <p className="text-sm text-gray-secondary dark:text-gray-400 leading-relaxed">
                  Collaborate with India's largest community-led developer conference. Provide outreach support, register your campus group, or host local satellite meetups.
                </p>
              </div>

              <div className="pt-6">
                <Button
                  href="https://forms.gle/opensourcecon-partner-register"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  className="w-full py-4 text-xs font-bold"
                  icon={ArrowRight}
                  iconPosition="right"
                >
                  Register Your Community
                </Button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
