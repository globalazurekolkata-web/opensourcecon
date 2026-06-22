import { Briefcase } from 'lucide-react';
import Button from './Button';
import { RiArrowRightLine } from 'react-icons/ri';

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
          
          <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] leading-[1.4]! tracking-tight text-dark">
            <span className="font-medium">Backed by those who believe in</span>
            <br />
            <span className="text-gradient uppercase font-bold">OPEN SOURCE.</span>
          </h2>
          
          <p className="text-gray-secondary text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Our sponsors help us keep the event accessible to everyone. Join us in supporting Bengal's largest community-driven developer conference.
          </p>
        </div>

        {/* Tiers Container */}
        <div className="space-y-12 max-w-5xl mx-auto">
          
          {/* Diamond Tier */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold font-mono tracking-widest text-gray-400 uppercase text-center">
              💎 DIAMOND SPONSOR
            </h3>
            <div className="max-w-xl mx-auto">
              <div className="w-full aspect-[21/9] rounded-[24px] border border-gray-200 bg-white flex flex-col items-center justify-center gap-2.5 transition-all duration-300 hover:border-brand-green/30 hover:shadow-md cursor-pointer group">
                <div className="w-10 h-10 rounded-full border border-dashed border-gray-200 flex items-center justify-center text-gray-300 group-hover:border-brand-green/30 group-hover:bg-brand-green/5 transition-colors">
                  <span className="font-mono text-lg font-bold">+</span>
                </div>
                <span className="text-xs font-semibold text-gray-400 tracking-wide uppercase">
                  Sponsor Slot
                </span>
              </div>
            </div>
          </div>

          {/* Gold Tier */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold font-mono tracking-widest text-gray-400 uppercase text-center">
              🥇 GOLD SPONSORS
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Array(4).fill(null).map((_, i) => (
                <div 
                  key={i} 
                  className="w-full aspect-[4/3] rounded-[20px] border border-gray-200 bg-white flex flex-col items-center justify-center gap-2 transition-all duration-300 hover:border-brand-green/30 hover:shadow-sm cursor-pointer group"
                >
                  <div className="w-8 h-8 rounded-full border border-dashed border-gray-200 flex items-center justify-center text-gray-300 group-hover:border-brand-green/30 group-hover:bg-brand-green/5 transition-colors">
                    <span className="font-mono text-sm font-bold">+</span>
                  </div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                    Sponsor Slot
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Silver Tier */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold font-mono tracking-widest text-gray-400 uppercase text-center">
              🥈 SILVER SPONSORS
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {Array(6).fill(null).map((_, i) => (
                <div 
                  key={i} 
                  className="w-full aspect-square rounded-2xl border border-gray-200 bg-white flex flex-col items-center justify-center gap-1.5 transition-all duration-300 hover:border-brand-green/30 hover:shadow-sm cursor-pointer group"
                >
                  <div className="w-7 h-7 rounded-full border border-dashed border-gray-200 flex items-center justify-center text-gray-300 group-hover:border-brand-green/20 group-hover:bg-brand-green/5 transition-colors">
                    <span className="font-mono text-xs font-bold">+</span>
                  </div>
                  <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">
                    Sponsor Slot
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bronze Tier */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold font-mono tracking-widest text-gray-400 uppercase text-center">
              🥉 BRONZE SPONSORS
            </h3>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
              {Array(8).fill(null).map((_, i) => (
                <div 
                  key={i} 
                  className="w-full aspect-square rounded-xl border border-gray-200 bg-white flex flex-col items-center justify-center gap-1 transition-all duration-300 hover:border-brand-green/25 hover:shadow-sm cursor-pointer group"
                >
                  <div className="w-6 h-6 rounded-full border border-dashed border-gray-200 flex items-center justify-center text-gray-300 group-hover:border-brand-green/20 group-hover:bg-brand-green/5 transition-colors">
                    <span className="font-mono text-[10px] font-bold">+</span>
                  </div>
                  <span className="text-[8px] font-bold text-gray-400 uppercase tracking-wider">
                    Slot
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Sponsor Us CTA */}
        <div className="mt-16 py-8 px-6 bg-gray-50 border border-gray-150 rounded-[28px] max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-brand-green/10 flex items-center justify-center text-brand-green flex-shrink-0">
              <Briefcase size={20} />
            </div>
            <div>
              <h4 className="font-heading font-extrabold text-base text-dark">
                Interested in partnering with us?
              </h4>
              <p className="text-xs text-gray-secondary mt-0.5">
                Download our sponsorship prospectus and get in touch with our team.
              </p>
            </div>
          </div>
          <Button
            href="https://drive.google.com/file/d/1RVrIZV0d6UskRM9k62cOlUU1A3J2pBg4/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            className="text-sm py-3 px-6 whitespace-nowrap"
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
