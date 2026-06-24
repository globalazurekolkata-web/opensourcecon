import { ArrowRight, Users, Sparkles } from 'lucide-react';
import Button from '../components/ui/Button';

// Placeholder partner slots until confirmed
const placeholders = [
  { label: 'Partner Slot', sub: 'Join Kolkata \'26' },
  { label: 'Your Community Here', sub: 'Apply to participate' },
  { label: 'Partner Slot', sub: 'Empower developers' },
  { label: 'Your Community Here', sub: 'Collaborate with us' },
  { label: 'Partner Slot', sub: 'Share knowledge' },
  { label: 'Your Community Here', sub: 'Represent your college' },
  { label: 'Partner Slot', sub: 'Open Source' },
  { label: 'Your Community Here', sub: 'Grow together' }
];

export default function CommunityPartners() {
  return (
    <section id="community" className="py-20 lg:py-28 relative bg-gray-50 dark:bg-[#0B1020] overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none z-0" />
      
      <div className="max-w-container mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header - Centered and elegant */}
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-16">
          <div className="section-tag inline-flex items-center gap-1.5 mx-auto">
            <span className="green-dot" />
            OUR PARTNERS
          </div>
          
          <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] leading-[1.2]! tracking-tight text-dark dark:text-white">
            <span className="font-medium">Communities that</span>
            <br />
            <span className="text-gradient uppercase font-bold">POWER Us</span>
          </h2>
          
          <p className="text-gray-secondary dark:text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Open Source Con India is built on the shoulders of amazing developer communities. Meet the partners helping us grow the ecosystem in Kolkata and beyond.
          </p>
        </div>

        {/* Clean Grid Layout for Communities */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {placeholders.map((partner, i) => (
              <div 
                key={i} 
                onClick={() => document.getElementById('partner-cta')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full aspect-[4/3] rounded-2xl border border-gray-200 dark:border-white/5 bg-white dark:bg-[#131C31] flex flex-col items-center justify-center gap-2.5 transition-all duration-300 hover:border-brand-green/30 hover:shadow-md cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-full bg-gray-50 dark:bg-[#1C2640] border border-gray-100 dark:border-white/5 flex items-center justify-center text-gray-400 group-hover:bg-brand-green/10 group-hover:text-brand-green transition-colors">
                  <span className="font-mono text-lg font-bold">+</span>
                </div>
                <div className="leading-tight text-center px-2">
                  <span className="font-heading font-extrabold text-[12px] md:text-[13px] text-gray-500 dark:text-gray-400 group-hover:text-dark dark:group-hover:text-white transition-colors block">
                    {partner.label}
                  </span>
                  <span className="text-[10px] font-semibold text-gray-400 dark:text-gray-500 block mt-0.5">
                    {partner.sub}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership CTA - Integrated (No separate card) */}
        <div id="partner-cta" className="mt-24 mb-8 text-center max-w-3xl mx-auto border-t border-gray-200 dark:border-white/10 pt-16">
          <div className="w-16 h-16 mx-auto rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green mb-6">
            <Users size={32} strokeWidth={1.5} />
          </div>
          <h4 className="font-heading font-bold text-3xl md:text-4xl text-dark dark:text-white mb-4">
            Interested in partnering with us?
          </h4>
          <p className="text-gray-500 dark:text-gray-400 text-base md:text-lg leading-relaxed mb-8">
            Collaborate with India's largest community-led developer conference. Provide outreach support, register your campus group, or host local satellite meetups.
          </p>
          <Button
            href="https://forms.gle/opensourcecon-partner-register"
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            className="w-full sm:w-auto py-4 px-8 text-[15px] font-bold rounded-full transition-all flex items-center justify-center gap-2 mx-auto shadow-md hover:shadow-lg active:scale-95"
            icon={ArrowRight}
            iconPosition="right"
          >
            Register Community
          </Button>
        </div>

      </div>
    </section>
  );
}
