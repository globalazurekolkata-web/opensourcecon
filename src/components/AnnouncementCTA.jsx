import { Mail } from 'lucide-react';

export default function AnnouncementCTA() {
  return (
    <section className="py-10 bg-white relative overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none z-0" />
      
      <div className="max-w-container mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Main CTA Card */}
        <div 
          className="relative rounded-[32px] overflow-hidden diagonal-pattern border border-brand-green/20 max-w-5xl mx-auto shadow-lg"
          style={{ background: 'linear-gradient(135deg, #63D940 0%, #56D64B 50%, #3DBF2E 100%)' }}
        >
          {/* Inner glassmorphism glow overlay */}
          <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-[1px] pointer-events-none z-0" />

          {/* Card Content */}
          <div className="relative z-10 py-16 md:py-20 px-8 text-center max-w-2xl mx-auto space-y-6">
            
            <div className="inline-flex items-center gap-1.5 text-[10px] font-extrabold px-3 py-1 rounded-full border border-dark/20 text-dark bg-white/10 uppercase tracking-widest mx-auto">
              Partner Program
            </div>

            <h2 className="font-heading text-3xl md:text-4xl lg:text-[44px] leading-[1.1] tracking-tight text-dark">
              <span className="font-medium">BUILD WITH US</span>
              <br />
              <span className="text-white font-bold">JOIN AS REPRESENTATIVE</span>
            </h2>
            
            <p className="text-dark/80 text-sm md:text-base max-w-md mx-auto leading-relaxed">
              Interested in bringing your community? Join our community partner program and collaborate with developers across Bengal.
            </p>

            {/* Application / Email Form */}
            <form 
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-4"
            >
              <div className="flex-1 relative">
                <input
                  type="email"
                  placeholder="Enter community email"
                  required
                  className="w-full px-5 py-3.5 pl-11 rounded-2xl bg-white/95 text-sm text-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-dark/20 border-0"
                />
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <Mail size={16} />
                </span>
              </div>
              <button 
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-dark text-white font-bold text-sm hover:bg-black transition-colors shadow-md whitespace-nowrap"
                style={{ background: '#111827', color: '#FFFFFF' }}
              >
                Apply Now
              </button>
            </form>

          </div>

          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/4 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/4 pointer-events-none" />
        </div>

        {/* Four Statistics Pills Underneath */}
        <div className="flex flex-wrap justify-center gap-4 mt-10 max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-4.5 py-2 rounded-full border border-brand-green/30 bg-brand-green/6 text-brand-green font-bold text-xs tracking-wide uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-ping" />
            20+ Communities
          </span>
          <span className="inline-flex items-center gap-1.5 px-4.5 py-2 rounded-full border border-brand-green/30 bg-brand-green/6 text-brand-green font-bold text-xs tracking-wide uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
            1000+ Members
          </span>
          <span className="inline-flex items-center gap-1.5 px-4.5 py-2 rounded-full border border-brand-green/30 bg-brand-green/6 text-brand-green font-bold text-xs tracking-wide uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
            5+ Cities
          </span>
          <span className="inline-flex items-center gap-1.5 px-4.5 py-2 rounded-full border border-brand-green/30 bg-brand-green/6 text-brand-green font-bold text-xs tracking-wide uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
            1+ Vision
          </span>
        </div>

      </div>
    </section>
  );
}
