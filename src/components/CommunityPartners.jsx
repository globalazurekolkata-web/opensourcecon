import { ArrowRight, Users, ExternalLink } from 'lucide-react';

const partners = [
  { name: 'OSS Bengal', members: '1.2K+ Members' },
  { name: 'Newtown Devs', members: '800+ Members' },
  { name: 'Bengal Coders', members: '1.5K+ Members' },
  { name: 'JS Kolkata', members: '2K+ Members' },
  { name: 'K8s Bengal', members: '500+ Members' },
  { name: 'Python Kolkata', members: '1.8K+ Members' },
  { name: 'Rust Bengal', members: '400+ Members' },
  { name: 'Women In Tech', members: '900+ Members' }
];

export default function CommunityPartners() {
  return (
    <section id="community" className="py-20 lg:py-28 relative bg-white overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none z-0" />
      
      <div className="max-w-container mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Two-Column Header */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-end mb-16">
          <div className="md:col-span-7 space-y-6">
            <div className="section-tag w-fit">
              <span className="green-dot" />
              OUR PARTNERS
            </div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] leading-[1.4]! tracking-tight text-dark">
              <span className="font-medium">Communities that</span>
              <br />
              <span className="text-gradient uppercase font-bold">POWER Us</span>
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-gray-secondary text-base md:text-lg leading-relaxed max-w-md">
              Open Source Con India is built on the shoulders of amazing developer communities. Meet the partners helping us grow.
            </p>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 items-stretch">
          
          {/* Community Partners Carousel */}
          <div className="lg:col-span-12 relative w-full overflow-hidden flex py-4"
               style={{ 
                 WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
                 maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)' 
               }}>
            <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-5">
              {[...partners, ...partners].map((partner, i) => (
                <div 
                  key={i} 
                  className="w-[280px] sm:w-[320px] shrink-0 card p-6 bg-white border border-gray-150 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between hover:border-brand-green/40 cursor-pointer group/card relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-brand-green/10 to-transparent rounded-full -mr-16 -mt-16 transition-transform duration-500 group-hover/card:scale-150" />
                  
                  <div className="space-y-4 text-left relative z-10">
                    <div className="w-12 h-12 rounded-[14px] bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 group-hover/card:bg-brand-green/10 group-hover/card:text-brand-green group-hover/card:border-brand-green/20 transition-all duration-300 shadow-sm">
                      <Users size={20} strokeWidth={2.5} />
                    </div>
                    
                    <div>
                      <h4 className="font-heading font-extrabold text-[17px] text-dark group-hover/card:text-brand-green transition-colors">
                        {partner.name}
                      </h4>
                      <p className="text-sm text-gray-500 mt-1 font-medium">
                        {partner.members}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-5 mt-5 border-t border-gray-100 text-gray-400 group-hover/card:text-brand-green transition-colors relative z-10">
                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 group-hover/card:text-brand-green/80 transition-colors">View Community</span>
                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover/card:bg-brand-green group-hover/card:text-white transition-all duration-300 shadow-sm">
                      <ExternalLink size={14} strokeWidth={2.5} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Left: Featured Community Card */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="card p-0 bg-white border border-gray-150 rounded-[28px] overflow-hidden shadow-sm flex flex-col h-full hover:shadow-md transition-shadow duration-300">
              {/* Image Area */}
              <div className="aspect-[4/3] w-full overflow-hidden bg-gray-150 relative">
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
              <div className="p-8 flex flex-col justify-between flex-1 space-y-6 text-left">
                <div className="space-y-2">
                  <h3 className="font-heading text-2xl font-extrabold text-dark">
                    Kolkata Geeks
                  </h3>
                  <p className="text-xs font-semibold text-brand-green flex items-center gap-1">
                    <Users size={12} />
                    3.5K+ Active Members
                  </p>
                  <p className="text-sm text-gray-secondary leading-relaxed pt-2">
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

  

        </div>

      </div>
    </section>
  );
}
