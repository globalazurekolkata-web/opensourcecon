import { MapPin, CalendarDays, Clock, Train } from 'lucide-react';

export default function Venue() {
  return (
    <section id="venue" className="py-20 lg:py-28 relative">
      <div className="max-w-container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <div className="section-tag mb-6">
            <span className="green-dot" />
            VENUE
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.1] tracking-tight mb-6 text-dark dark:text-white">
            The heart of Bengal
            <br />
            is our <span className="text-brand-green">stage</span>
          </h2>
        </div>

        {/* Venue Card */}
        <div className="card overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Map Visual */}
            <div className="relative min-h-[340px] md:min-h-[440px] bg-gradient-to-br from-[#FAFCF9] to-[#F3FBF0] dark:from-[#080D08] dark:to-[#0B1020] flex items-center justify-center overflow-hidden border-b md:border-b-0 md:border-r border-gray-100 dark:border-white/5">
              {/* Subtle ambient light glow */}
              <div className="absolute w-[200px] h-[200px] rounded-full bg-brand-green/10 dark:bg-brand-green/5 blur-[50px] pointer-events-none top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2" />

              {/* Minimalist Grid overlay */}
              <div className="absolute inset-0 opacity-25 dark:opacity-10" style={{
                backgroundImage: 'linear-gradient(rgba(82,210,55,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(82,210,55,0.08) 1px, transparent 1px)',
                backgroundSize: '32px 32px',
              }} />

              {/* Custom Vector Map Illustration (SVG) */}
              <svg className="absolute inset-0 w-full h-full text-brand-green/[0.06] dark:text-brand-green/[0.03] pointer-events-none" viewBox="0 0 400 400" preserveAspectRatio="none">
                {/* Stylized Hooghly River */}
                <path
                  d="M 120,-10 C 140,90 70,180 150,280 C 190,340 130,400 160,460"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="20"
                  strokeLinecap="round"
                />
                <path
                  d="M 120,-10 C 140,90 70,180 150,280 C 190,340 130,400 160,460"
                  fill="none"
                  stroke="#52D237"
                  strokeWidth="1.5"
                  className="opacity-10 dark:opacity-5"
                />

                {/* Stylized Road Network */}
                <path d="M 0,80 L 400,100" stroke="currentColor" strokeWidth="1.5" />
                <path d="M 0,220 C 120,240 240,190 400,240" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <path d="M 0,330 L 400,310" stroke="currentColor" strokeWidth="1.5" />
                
                <path d="M 280,-10 L 240,410" stroke="currentColor" strokeWidth="1.5" />
                <path d="M 330,-10 L 360,410" stroke="currentColor" strokeWidth="1.5" />
                <path d="M 190,-10 C 210,140 160,280 230,410" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>

              {/* Map Markers & Labels */}
              {/* Sector V Marker */}
              <div className="absolute top-[28%] left-[72%] flex items-center gap-1.5 select-none">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-green/60" />
                <span className="text-[10px] font-mono font-medium tracking-wide text-gray-400 dark:text-gray-500">Sector V</span>
              </div>

              {/* New Town Marker */}
              <div className="absolute bottom-[32%] left-[48%] flex items-center gap-1.5 select-none">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-green/60" />
                <span className="text-[10px] font-mono font-medium tracking-wide text-gray-400 dark:text-gray-500">New Town</span>
              </div>

              {/* Central Scouting Pulsing Ring & Bouncing Pin */}
              <div className="absolute top-[42%] left-[62%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center z-10">
                <div className="absolute w-24 h-24 rounded-full bg-brand-green/10 border border-brand-green/20 animate-ping pointer-events-none" style={{ animationDuration: '3s' }} />
                <div className="absolute w-12 h-12 rounded-full bg-brand-green/20 border border-brand-green/30 animate-ping pointer-events-none" style={{ animationDuration: '2s' }} />
                
                <div className="venue-pin-bounce relative z-10">
                  <div className="w-16 h-16 rounded-full bg-brand-green/20 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-brand-green flex items-center justify-center shadow-lg shadow-brand-green/30">
                      <MapPin size={22} className="text-white" />
                    </div>
                  </div>
                </div>
                <div className="w-3 h-3 rounded-full bg-brand-green/30 mt-2 venue-pin-shadow" />
              </div>
            </div>

            {/* Info */}
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400 border border-amber-200 dark:border-amber-500/20 mb-6 w-fit">
                <MapPin size={12} />
                Venue to be announced
              </div>

              <h3 className="font-heading text-3xl md:text-4xl font-extrabold text-dark dark:text-white mb-4 leading-tight">
                Kolkata,
                <br />
                West Bengal
              </h3>

              <p className="text-gray-secondary dark:text-gray-400 text-sm leading-relaxed mb-8 max-w-md">
                We're scouting the perfect venue for 800+ open source enthusiasts in the City of Joy. An announcement will be made soon — a location that's accessible, spacious, and befitting Bengal's tech community.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-brand-green/10 flex items-center justify-center flex-shrink-0">
                    <CalendarDays size={16} className="text-brand-green" />
                  </div>
                  <span className="text-sm font-medium text-dark dark:text-white">5th December 2026</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-brand-green/10 flex items-center justify-center flex-shrink-0">
                    <Clock size={16} className="text-brand-green" />
                  </div>
                  <span className="text-sm font-medium text-dark dark:text-white">All-day event</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-brand-green/10 flex items-center justify-center flex-shrink-0">
                    <Train size={16} className="text-brand-green" />
                  </div>
                  <span className="text-sm font-medium text-dark dark:text-white">Metro accessible location</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
