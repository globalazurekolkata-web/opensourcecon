import { Award, Briefcase } from 'lucide-react';
import Button from '../components/ui/Button';
import { RiArrowRightLine } from 'react-icons/ri';

const diamondSlot = { label: 'Diamond Sponsor Slot', sub: 'Become our premier partner' };

const goldSlots = [
  { label: 'Gold Sponsor Slot', sub: 'Showcase your brand' },
  { label: 'Your Logo Here', sub: 'Support local talent' },
  { label: 'Gold Sponsor Slot', sub: 'Connect with developers' },
  { label: 'Your Logo Here', sub: 'Join Kolkata \'26' }
];

const silverSlots = [
  { label: 'Silver Sponsor Slot', sub: 'Empower developers' },
  { label: 'Your Logo Here', sub: 'Fuel innovation' },
  { label: 'Silver Sponsor Slot', sub: 'Promote open source' },
  { label: 'Your Logo Here', sub: 'Build tech community' },
  { label: 'Silver Sponsor Slot', sub: 'Share your vision' },
  { label: 'Your Logo Here', sub: 'Partner with us' }
];

const bronzeSlots = [
  { label: 'Bronze Slot', sub: 'Support us' },
  { label: 'Your Logo Here', sub: 'Back open source' },
  { label: 'Bronze Slot', sub: 'Empower community' },
  { label: 'Your Logo Here', sub: 'Join movement' },
  { label: 'Bronze Slot', sub: 'Fuel tech' },
  { label: 'Your Logo Here', sub: 'Connect here' },
  { label: 'Bronze Slot', sub: 'Kolkata \'26' },
  { label: 'Your Logo Here', sub: 'Your brand' }
];

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-20 lg:py-28 relative bg-white border-t border-gray-100 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none z-0" />
      
      <div className="max-w-container mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-16">
          <div className="section-tag inline-flex items-center gap-1.5 mx-auto">
            <span className="green-dot" />
            SPONSORS
          </div>
          
          <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] leading-[1.2]! tracking-tight text-dark dark:text-white">
            <span className="font-medium">Backed by those who believe</span>
            <br />
            <span className="font-medium">in </span>
            <span className="text-gradient uppercase font-bold">
              OPEN{" "}
              <span className="underline decoration-brand-green decoration-[3px] underline-offset-[8px]">
                SOURCE
              </span>
            </span>
          </h2>
          
          <p className="text-gray-secondary text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Our sponsors help us keep the event accessible to everyone. Join us in supporting Bengal's largest community-driven developer conference.
          </p>
        </div>

        {/* Tiers Container */}
        <div className="space-y-12 max-w-5xl mx-auto">
          
          {/* Diamond Tier */}
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-4 w-full mb-6">
              <div className="flex-1 h-[1px] bg-brand-green/20 dark:bg-brand-green/10" />
              <h3 className="text-xs md:text-sm font-bold font-mono tracking-widest text-brand-green uppercase select-none whitespace-nowrap">
                {"{ DIAMOND }"}
              </h3>
              <div className="flex-1 h-[1px] bg-brand-green/20 dark:bg-brand-green/10" />
            </div>
            <div className="max-w-xl mx-auto">
              <div 
                onClick={() => document.getElementById('sponsor-cta')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full aspect-[21/9] rounded-[24px] border border-gray-200 bg-white flex flex-col items-center justify-center gap-2.5 transition-all duration-300 hover:border-brand-green/30 hover:shadow-md cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-full border border-dashed border-gray-200 flex items-center justify-center text-gray-300 group-hover:border-brand-green/30 group-hover:bg-brand-green/5 transition-colors">
                  <span className="font-mono text-lg font-bold">+</span>
                </div>
                <div className="leading-tight text-center">
                  <span className="font-heading font-extrabold text-[13px] text-gray-500 dark:text-gray-400 group-hover:text-dark dark:group-hover:text-white transition-colors block">
                    {diamondSlot.label}
                  </span>
                  <span className="text-[10px] font-semibold text-gray-400 dark:text-gray-500 block mt-0.5">
                    {diamondSlot.sub}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Gold Tier */}
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-4 w-full mb-6">
              <div className="flex-1 h-[1px] bg-brand-green/20 dark:bg-brand-green/10" />
              <h3 className="text-xs md:text-sm font-bold font-mono tracking-widest text-brand-green uppercase select-none whitespace-nowrap">
                {"{ GOLD }"}
              </h3>
              <div className="flex-1 h-[1px] bg-brand-green/20 dark:bg-brand-green/10" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {goldSlots.map((slot, i) => (
                <div 
                  key={i} 
                  onClick={() => document.getElementById('sponsor-cta')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full aspect-[4/3] rounded-[20px] border border-gray-200 bg-white flex flex-col items-center justify-center gap-2 transition-all duration-300 hover:border-brand-green/30 hover:shadow-sm cursor-pointer group"
                >
                  <div className="w-8 h-8 rounded-full border border-dashed border-gray-200 flex items-center justify-center text-gray-300 group-hover:border-brand-green/30 group-hover:bg-brand-green/5 transition-colors">
                    <span className="font-mono text-sm font-bold">+</span>
                  </div>
                  <div className="leading-tight text-center">
                    <span className="font-heading font-extrabold text-[11px] text-gray-500 dark:text-gray-400 group-hover:text-dark dark:group-hover:text-white transition-colors block">
                      {slot.label}
                    </span>
                    <span className="text-[9px] font-semibold text-gray-400 dark:text-gray-500 block mt-0.5">
                      {slot.sub}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Silver Tier */}
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-4 w-full mb-6">
              <div className="flex-1 h-[1px] bg-brand-green/20 dark:bg-brand-green/10" />
              <h3 className="text-xs md:text-sm font-bold font-mono tracking-widest text-brand-green uppercase select-none whitespace-nowrap">
                {"{ SILVER }"}
              </h3>
              <div className="flex-1 h-[1px] bg-brand-green/20 dark:bg-brand-green/10" />
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {silverSlots.map((slot, i) => (
                <div 
                  key={i} 
                  onClick={() => document.getElementById('sponsor-cta')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full aspect-square rounded-2xl border border-gray-200 bg-white flex flex-col items-center justify-center gap-1.5 transition-all duration-300 hover:border-brand-green/30 hover:shadow-sm cursor-pointer group"
                >
                  <div className="w-7 h-7 rounded-full border border-dashed border-gray-200 flex items-center justify-center text-gray-300 group-hover:border-brand-green/20 group-hover:bg-brand-green/5 transition-colors">
                    <span className="font-mono text-xs font-bold">+</span>
                  </div>
                  <div className="leading-tight text-center px-1">
                    <span className="font-heading font-extrabold text-[10px] text-gray-500 dark:text-gray-400 group-hover:text-dark dark:group-hover:text-white transition-colors block">
                      {slot.label}
                    </span>
                    <span className="text-[8px] font-semibold text-gray-400 dark:text-gray-500 block mt-0.5">
                      {slot.sub}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bronze Tier */}
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-4 w-full mb-6">
              <div className="flex-1 h-[1px] bg-brand-green/20 dark:bg-brand-green/10" />
              <h3 className="text-xs md:text-sm font-bold font-mono tracking-widest text-brand-green uppercase select-none whitespace-nowrap">
                {"{ BRONZE }"}
              </h3>
              <div className="flex-1 h-[1px] bg-brand-green/20 dark:bg-brand-green/10" />
            </div>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
              {bronzeSlots.map((slot, i) => (
                <div 
                  key={i} 
                  onClick={() => document.getElementById('sponsor-cta')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full aspect-square rounded-xl border border-gray-200 bg-white flex flex-col items-center justify-center gap-1 transition-all duration-300 hover:border-brand-green/25 hover:shadow-sm cursor-pointer group p-1"
                >
                  <div className="w-6 h-6 rounded-full border border-dashed border-gray-200 flex items-center justify-center text-gray-300 group-hover:border-brand-green/20 group-hover:bg-brand-green/5 transition-colors">
                    <span className="font-mono text-[10px] font-bold">+</span>
                  </div>
                  <div className="leading-tight text-center px-0.5">
                    <span className="font-heading font-extrabold text-[9px] text-gray-500 dark:text-gray-400 group-hover:text-dark dark:group-hover:text-white transition-colors block">
                      {slot.label}
                    </span>
                    <span className="text-[7.5px] font-medium text-gray-400 dark:text-gray-550 block mt-0.5">
                      {slot.sub}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Sponsor Us CTA */}
        <div id="sponsor-cta" className="mt-24 pt-16 border-t border-gray-200 dark:border-white/10 flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
          <div className="w-16 h-16 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green mb-6">
            <Briefcase size={32} strokeWidth={1.5} />
          </div>
          <h4 className="font-heading font-bold text-3xl md:text-4xl text-dark dark:text-white mb-4">
            Interested in partnering with us?
          </h4>
          <p className="text-gray-500 dark:text-gray-400 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
            Join forces with Bengal's biggest open source gathering. Download our sponsorship prospectus to discover opportunities to showcase your brand to 500+ top developers.
          </p>
          <Button
            href="https://drive.google.com/file/d/1RVrIZV0d6UskRM9k62cOlUU1A3J2pBg4/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            className="w-full sm:w-auto py-4 px-8 text-[15px] font-bold rounded-full transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-95"
            icon={RiArrowRightLine}
            iconPosition="right"
          >
            Sponsor Us
          </Button>
        </div>

      </div>
    </section>
  );
}
