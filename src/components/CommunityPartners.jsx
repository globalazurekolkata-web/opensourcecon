import { ArrowRight, Users, ExternalLink, Sparkles } from 'lucide-react';
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
        <div className="relative w-full overflow-hidden flex py-4 mb-10"
             style={{ 
               WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
               maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)' 
             }}>
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-5">
            {[...placeholders, ...placeholders, ...placeholders].map((partner, i) => (
              <div 
                key={i} 
                onClick={() => document.getElementById('partner-cta')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-[260px] sm:w-[285px] shrink-0 card p-5 bg-white dark:bg-[#131C31] border-2 border-dashed border-gray-200 dark:border-white/10 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-center items-center hover:border-brand-green/45 dark:hover:border-brand-green/45 hover:bg-gray-50/50 dark:hover:bg-white/5 cursor-pointer relative overflow-hidden h-[120px] group"
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
                    <span className="font-heading font-extrabold text-[12px] text-gray-500 dark:text-gray-450 group-hover:text-dark group-hover:text-white transition-colors block">
                      {partner.label}
                    </span>
                    <span className="text-[9px] font-semibold text-gray-400 dark:text-gray-500 block mt-0.5">
                      {partner.sub}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Full-width Featured Section (Clean row layout directly on page background) */}
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start gap-8 my-8">
          
          {/* Enlarged Stylized Image Container */}
          <div className="relative w-full md:w-[320px] flex-shrink-0 select-none">
            <img 
              src="/images/Left_ Stylized Team Photo.png" 
              alt="Community Networking at OpenSourceCon" 
              className="w-full h-auto block object-contain" 
            />
          </div>

          {/* Note & Description Area (Right side) - Flowing items naturally with items-start gap-4 */}
          <div className="flex-grow flex flex-col items-start gap-4 text-left min-w-0">
            <div className="space-y-1.5">
              <h3 className="font-heading text-2xl font-black text-dark dark:text-white leading-tight">
                The Spirit of Open Source in Kolkata
              </h3>
              <div className="flex items-center gap-1.5 text-xs text-brand-green font-bold">
                <Sparkles size={13} />
                <span>Building Together, Open for All</span>
              </div>
            </div>
            
            <p className="text-sm text-gray-secondary dark:text-gray-400 leading-relaxed">
              Open source thrives on diverse backgrounds coming together with one mission. In Kolkata, we are fostering a welcoming ecosystem where students, developers, and industry leaders connect, share knowledge, and build the future of software collaboratively through local networking and global contributions.
            </p>

            <div className="pt-2">
              <Button
                href="#about"
                variant="primary"
                className="py-3.5 px-8 text-xs font-bold rounded-full !bg-brand-green hover:!bg-brand-green-dark text-dark border-0 transition-all flex items-center justify-center gap-2"
                icon={ArrowRight}
                iconPosition="right"
              >
                Join the Movement
              </Button>
            </div>
          </div>

        </div>

        {/* Partnership CTA Banner (Brought below, full width) */}
        <div id="partner-cta" className="mt-12 py-8 px-8 bg-gray-50 dark:bg-[#131C31] border border-gray-150 dark:border-white/5 rounded-[28px] max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-left min-w-0">
            <div className="w-12 h-12 rounded-2xl bg-brand-green/10 text-brand-green flex items-center justify-center flex-shrink-0">
              <Users size={22} />
            </div>
            <div className="min-w-0">
              <h4 className="font-heading font-extrabold text-base text-dark dark:text-white">
                Interested in partnering with us?
              </h4>
              <p className="text-xs text-gray-secondary dark:text-gray-405 mt-1 leading-relaxed max-w-xl">
                Collaborate with India's largest community-led developer conference. Provide outreach support, register your campus group, or host local satellite meetups.
              </p>
            </div>
          </div>

          <div className="flex-shrink-0 w-full sm:w-auto">
            <Button
              href="https://forms.gle/opensourcecon-partner-register"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              className="w-full sm:w-auto py-3.5 px-6 text-xs font-bold rounded-full !bg-brand-green hover:!bg-brand-green-dark text-dark border-0 transition-all flex items-center justify-center gap-2"
              icon={ArrowRight}
              iconPosition="right"
            >
              Register Your Community
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}
