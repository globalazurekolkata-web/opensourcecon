import { ArrowRight, Newspaper, Megaphone } from 'lucide-react';
import Button from '../components/ui/Button';

const mediaPartners = [
  {
    name: 'Prospera X',
    type: 'Official Media Partner',
    logo: '/images/community-partners/media-partners/Prospera X.png',
    tag: 'Media Partner',
  },
  {
    name: 'Kube Events',
    type: 'Ecosystem & Media Partner',
    logo: '/images/community-partners/media-partners/kube events.png',
    tag: 'Ecosystem',
  },
];

export default function MediaPartners() {
  return (
    <section id="media" className="py-20 lg:py-28 relative bg-white dark:bg-[#0B1020] overflow-hidden border-t border-gray-100 dark:border-white/5">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-bg pointer-events-none z-0" />
      
      <div className="max-w-container mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-16">
          <div className="section-tag inline-flex items-center gap-1.5 mx-auto">
            <span className="green-dot animate-pulse" />
            MEDIA PARTNERS
          </div>
          
          <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] leading-[1.2]! tracking-tight text-dark dark:text-white">
            <span className="font-medium">Voices Amplifying</span>
            <br />
            <span className="text-gradient uppercase font-bold">OUR REACH</span>
          </h2>
          
          <p className="text-gray-secondary dark:text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            We collaborate with leading tech publications, podcasts, and media creators to broadcast the impact of Bengal's flagship open source convention.
          </p>
        </div>

        {/* Media Partners Grid */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 justify-center">
            {mediaPartners.map((partner, i) => (
              <div 
                key={i} 
                className="card flex flex-col items-center justify-between p-6 aspect-[4/3] hover:border-brand-green/30 hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Category Badge */}
                <div className="w-full flex justify-between items-center mb-2">
                  <span className="text-[9.5px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-brand-green/10 text-brand-green border border-brand-green/20">
                    {partner.tag}
                  </span>
                </div>

                {/* Logo Frame */}
                <div className="h-[65%] w-full flex flex-col items-center justify-center rounded-xl overflow-hidden p-2">
                  {partner.logo ? (
                    <div className="w-full h-full flex items-center justify-center rounded-xl overflow-hidden p-1">
                      <img 
                        src={partner.logo} 
                        alt={partner.name} 
                        className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-full border border-dashed border-brand-green/40 flex items-center justify-center text-brand-green bg-brand-green/5 group-hover:scale-110 transition-transform">
                      <Newspaper size={22} />
                    </div>
                  )}
                </div>
                
                {/* Partner Name and Subtitle Label */}
                <div className="text-center w-full mt-2">
                  <span className="font-heading font-extrabold text-sm text-dark dark:text-white group-hover:text-brand-green transition-colors block truncate w-full select-none">
                    {partner.name}
                  </span>
                  <span className="text-[10.5px] font-medium text-gray-400 dark:text-gray-500 block truncate w-full mt-0.5">
                    {partner.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
