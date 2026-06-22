import { Calendar, BellRing, Sparkles } from 'lucide-react';

export default function Venue() {
  return (
    <section id="venue" className="py-12 sm:py-20 lg:py-28 relative bg-white overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none z-0" />
      
      <div className="max-w-container mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header (Shared) */}
        <div className="mb-8 sm:mb-14 max-w-2xl text-center sm:text-left mx-auto sm:mx-0">
          <div className="section-tag mb-4 sm:mb-6 mx-auto sm:mx-0">
            <span className="green-dot" />
            VENUE
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.3]! sm:leading-[1.4]! tracking-tight text-dark">
            <span className="font-medium">The next destination
            <br />
            for our</span> <span className="text-gradient uppercase font-bold">STAGE.</span>
          </h2>
        </div>

        {/* ====================================================
            MOBILE VIEW: TBD LAYOUT
            ==================================================== */}
        <div className="sm:hidden relative w-full h-[380px] rounded-[28px] overflow-hidden shadow-2xl border border-gray-200 flex flex-col justify-end bg-[#0a1208] group">
          
          {/* Abstract Background instead of Map */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-green/20 via-[#0a1208] to-black" />
          
          {/* Dark grid pattern overlay */}
          <div className="absolute inset-0 opacity-20 pointer-events-none z-0" style={{
            backgroundImage: 'linear-gradient(rgba(86, 214, 75, 0.2) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(86, 214, 75, 0.2) 1.5px, transparent 1.5px)',
            backgroundSize: '40px 40px'
          }} />

          {/* Top Badge */}
          <div className="absolute top-5 left-5 z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-brand-green/20 text-brand-green text-[10px] font-bold uppercase tracking-wider shadow-sm animate-pulse">
              <Sparkles size={12} />
              To Be Decided
            </span>
          </div>

          {/* Glowing Pin Placeholder */}
          <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="venue-pin-bounce flex flex-col items-center">
               <div className="w-14 h-14 rounded-full bg-brand-green flex items-center justify-center shadow-[0_0_40px_rgba(86,214,75,0.4)] border-4 border-black/50">
                  <span className="text-dark font-heading font-extrabold text-2xl">?</span>
               </div>
            </div>
            <div className="w-4 h-4 rounded-full bg-brand-green/30 mt-1 mx-auto venue-pin-shadow blur-[2px]" />
          </div>

          {/* Bottom Details Container */}
          <div className="relative z-20 p-6 w-full mt-auto text-center">
            <h3 className="font-heading text-2xl font-extrabold text-white leading-tight mb-1">
              ANNOUNCING SOON
            </h3>
            <p className="text-[11px] font-medium text-gray-400 mb-5">
              A premium location in Kolkata, West Bengal
            </p>

            {/* Date/Time Glass Box */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-3 mb-5 flex items-center justify-center gap-3 shadow-inner">
              <div className="w-9 h-9 rounded-lg bg-brand-green/20 flex items-center justify-center text-brand-green">
                <Calendar size={16} />
              </div>
              <div className="text-white text-xs font-bold leading-tight text-left">
                5th December 2026<br/>
                <span className="text-[10px] font-medium text-gray-400">Save the date</span>
              </div>
            </div>

            <button
              className="w-full py-3.5 bg-white/5 text-white border border-white/10 rounded-xl flex items-center justify-center gap-2 text-xs font-extrabold cursor-default backdrop-blur-sm"
            >
              Updates Coming Soon
            </button>
          </div>
        </div>

        {/* ====================================================
            DESKTOP VIEW: TBD SPLIT LAYOUT
            ==================================================== */}
        <div className="hidden sm:grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Floating Venue Details Card */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="card p-8 md:p-10 bg-white border border-gray-150 rounded-[28px] shadow-sm flex-1 flex flex-col justify-between space-y-8 relative overflow-hidden">
              
              <div className="space-y-6 relative z-10">
                <span className="inline-flex items-center gap-2 text-[10px] font-bold px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 uppercase tracking-wider">
                  <Sparkles size={10} className="animate-pulse" />
                  Venue TBD
                </span>

                <div className="space-y-2">
                  <h3 className="font-heading text-3xl md:text-4xl font-extrabold text-dark leading-tight">
                    ANNOUNCING <br/> SOON
                  </h3>
                  <p className="text-sm font-semibold text-brand-green">
                    Kolkata, West Bengal
                  </p>
                </div>

                <p className="text-sm text-gray-secondary leading-relaxed">
                  We are currently securing a premium venue that will provide the perfect atmosphere for Bengal's biggest open source gathering. We're looking at state-of-the-art auditoriums with ample space for networking and hacking.
                </p>
                <p className="text-sm text-gray-secondary font-medium">
                  Stay tuned to our social channels for the big reveal!
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-gray-100 relative z-10">
                <div className="flex items-center gap-3 text-sm font-bold text-dark">
                  <div className="w-9 h-9 rounded-xl bg-brand-green/10 flex items-center justify-center text-brand-green flex-shrink-0">
                    <Calendar size={16} />
                  </div>
                  5th December 2026 (Save the Date)
                </div>
                
                <button
                  className="btn-outline opacity-50 cursor-not-allowed text-sm py-3 px-6 rounded-full flex items-center justify-center gap-2 w-full mt-4"
                >
                  <BellRing size={16} /> Notifications On
                </button>
              </div>
              
              {/* Subtle background decoration */}
              <div className="absolute -bottom-10 -right-10 text-[160px] font-heading font-extrabold text-gray-50 opacity-50 select-none pointer-events-none rotate-12">
                ?
              </div>

            </div>
          </div>

          {/* Right: Abstract Visual Block */}
          <div className="lg:col-span-7 min-h-[350px] lg:min-h-auto rounded-[28px] border border-gray-800 overflow-hidden relative shadow-xl flex items-center justify-center bg-gradient-to-br from-[#0a1208] to-black">
            
            {/* Abstract Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-green/10 via-transparent to-transparent" />

            {/* Faint Grid accent overlay */}
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
              backgroundImage: 'linear-gradient(rgba(86,214,75,0.2) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(86,214,75,0.2) 1.5px, transparent 1.5px)',
              backgroundSize: '50px 50px',
            }} />

            {/* Interactive/Animated Bouncing Placeholder */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="venue-pin-bounce">
                <div className="w-24 h-24 rounded-full bg-brand-green/10 flex items-center justify-center backdrop-blur-sm border border-brand-green/20">
                  <div className="w-14 h-14 rounded-full bg-brand-green flex items-center justify-center shadow-lg" style={{ boxShadow: '0 4px 40px rgba(86, 214, 75, 0.6)' }}>
                    <span className="text-dark font-heading font-extrabold text-3xl">?</span>
                  </div>
                </div>
              </div>
              <div className="w-5 h-5 rounded-full bg-brand-green/40 mt-3 venue-pin-shadow blur-[2px]" />
            </div>

            {/* Pulse rings */}
            <div className="absolute w-64 h-64 rounded-full border border-brand-green/30 animate-pulse" />
            <div className="absolute w-[400px] h-[400px] rounded-full border border-brand-green/10 animate-ping" style={{ animationDuration: '3s' }} />
          </div>

        </div>

      </div>
    </section>
  );
}
