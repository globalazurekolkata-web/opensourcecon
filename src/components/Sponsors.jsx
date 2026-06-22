import Button from './Button';
import { RiArrowRightLine } from 'react-icons/ri';

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-14 sm:py-20 lg:py-28 relative bg-white border-t border-gray-100 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none z-0 opacity-50" />

      <div className="max-w-container mx-auto px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 sm:space-y-6 mb-10 sm:mb-16">
          <div className="section-tag inline-flex items-center gap-1.5 mx-auto">
            <span className="green-dot" />
            SPONSORS
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.3]! sm:leading-[1.4]! tracking-tight text-dark">
            <span className="font-medium">Backed by those who believe in</span>
            <br />
            <span className="text-gradient uppercase font-bold">OPEN SOURCE.</span>
          </h2>

          <p className="text-gray-secondary text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Our sponsors help us keep the event accessible to everyone. Join us in supporting Bengal's largest community-driven developer conference.
          </p>
        </div>

        {/* Tiers Container */}
        <div className="space-y-8 sm:space-y-12 max-w-5xl mx-auto">

          {/* Diamond Tier */}
          <div className="space-y-4">
            <h3 className="text-[10px] sm:text-xs font-bold font-mono tracking-widest text-gray-400 uppercase text-center">
              💎 DIAMOND SPONSOR
            </h3>
            <div className="max-w-xl mx-auto">
              <div className="w-full aspect-[21/9] rounded-2xl sm:rounded-[24px] border border-gray-200 bg-white flex flex-col items-center justify-center gap-2.5 transition-all duration-300 hover:border-brand-green/30 hover:shadow-md cursor-pointer group">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-dashed border-gray-200 flex items-center justify-center text-gray-300 group-hover:border-brand-green/30 group-hover:bg-brand-green/5 transition-colors">
                  <span className="font-mono text-sm sm:text-lg font-bold">+</span>
                </div>
                <span className="text-[10px] sm:text-xs font-semibold text-gray-400 tracking-wide uppercase">
                  Sponsor Slot
                </span>
              </div>
            </div>
          </div>

          {/* Gold Tier */}
          <div className="space-y-4">
            <h3 className="text-[10px] sm:text-xs font-bold font-mono tracking-widest text-gray-400 uppercase text-center">
              🥇 GOLD SPONSORS
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {Array(4).fill(null).map((_, i) => (
                <div
                  key={i}
                  className="w-full aspect-[4/3] rounded-xl sm:rounded-[20px] border border-gray-200 bg-white flex flex-col items-center justify-center gap-2 transition-all duration-300 hover:border-brand-green/30 hover:shadow-sm cursor-pointer group"
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-dashed border-gray-200 flex items-center justify-center text-gray-300 group-hover:border-brand-green/30 group-hover:bg-brand-green/5 transition-colors">
                    <span className="font-mono text-sm font-bold">+</span>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-wider text-center">
                    Sponsor Slot
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Silver Tier */}
          <div className="space-y-4">
            <h3 className="text-[10px] sm:text-xs font-bold font-mono tracking-widest text-gray-400 uppercase text-center">
              🥈 SILVER SPONSORS
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-4">
              {Array(6).fill(null).map((_, i) => (
                <div
                  key={i}
                  className="w-full aspect-square rounded-lg sm:rounded-2xl border border-gray-200 bg-white flex flex-col items-center justify-center gap-1.5 transition-all duration-300 hover:border-brand-green/30 hover:shadow-sm cursor-pointer group"
                >
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-dashed border-gray-200 flex items-center justify-center text-gray-300 group-hover:border-brand-green/20 group-hover:bg-brand-green/5 transition-colors">
                    <span className="font-mono text-[10px] sm:text-xs font-bold">+</span>
                  </div>
                  <span className="text-[8px] sm:text-[9px] font-bold text-gray-400 uppercase tracking-wider">
                    Sponsor
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bronze Tier */}
          <div className="space-y-4">
            <h3 className="text-[10px] sm:text-xs font-bold font-mono tracking-widest text-gray-400 uppercase text-center">
              🥉 BRONZE SPONSORS
            </h3>
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 sm:gap-3">
              {Array(8).fill(null).map((_, i) => (
                <div
                  key={i}
                  className="w-full aspect-square rounded-md sm:rounded-xl border border-gray-200 bg-white flex flex-col items-center justify-center gap-1 transition-all duration-300 hover:border-brand-green/25 hover:shadow-sm cursor-pointer group"
                >
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-dashed border-gray-200 flex items-center justify-center text-gray-300 group-hover:border-brand-green/20 group-hover:bg-brand-green/5 transition-colors">
                    <span className="font-mono text-[10px] font-bold">+</span>
                  </div>
                  <span className="text-[7px] sm:text-[8px] font-bold text-gray-300 uppercase tracking-wider">
                    Slot
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Sponsor Us CTA - Minimal Typographic Card */}
        <div className="mt-12 sm:mt-24 relative overflow-hidden rounded-[2rem] max-w-4xl mx-auto shadow-2xl group transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(86,214,75,0.2)]">
          {/* Background layers */}
          <div className="absolute inset-0 bg-dark" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-green/20 via-dark to-dark opacity-80" />
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-brand-green/10 blur-[80px] rounded-full pointer-events-none" />
          
          <div className="relative p-8 md:p-12 flex flex-col sm:flex-row items-center justify-between gap-8 border border-white/10 rounded-[2rem]">
            
            {/* Clean Typographic Content Without Generic Icon */}
            <div className="flex flex-col text-center sm:text-left flex-1">
              <div className="inline-flex items-center justify-center sm:justify-start gap-2 px-3 py-1.5 rounded-full bg-brand-green/10 text-brand-green text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-4 mx-auto sm:mx-0 w-fit border border-brand-green/20">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
                Partnership Opportunities
              </div>
              <h4 className="font-heading font-extrabold text-3xl md:text-4xl text-white mb-3">
                Become a <span className="text-brand-green">Sponsor</span>
              </h4>
              <p className="text-sm md:text-base text-gray-400 max-w-[420px] leading-relaxed mx-auto sm:mx-0">
                Help us keep the event accessible to everyone. Download our prospectus to view the available tiers and exclusive perks.
              </p>
            </div>
            
            {/* Action Button */}
            <div className="flex-shrink-0 w-full sm:w-auto mt-2 sm:mt-0">
              <Button
                href="https://drive.google.com/file/d/1RVrIZV0d6UskRM9k62cOlUU1A3J2pBg4/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                className="w-full sm:w-auto text-sm py-4 px-8 whitespace-nowrap shadow-[0_0_20px_rgba(86,214,75,0.2)] hover:shadow-[0_0_30px_rgba(86,214,75,0.4)] transition-all font-bold"
                icon={RiArrowRightLine}
                iconPosition="right"
              >
                Download Prospectus
              </Button>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
}
