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
            <div className="relative min-h-[300px] md:min-h-[400px] bg-gradient-to-br from-[#F0FDE8] to-[#E8FBDE] dark:from-[#132A13]/30 dark:to-[#0B1020] flex items-center justify-center overflow-hidden">
              {/* Grid overlay */}
              <div className="absolute inset-0 opacity-30" style={{
                backgroundImage: 'linear-gradient(rgba(82,210,55,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(82,210,55,0.15) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }} />

              {/* Animated pin */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="venue-pin-bounce">
                  <div className="w-16 h-16 rounded-full bg-brand-green/20 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-brand-green flex items-center justify-center shadow-lg shadow-brand-green/30">
                      <MapPin size={22} className="text-white" />
                    </div>
                  </div>
                </div>
                <div className="w-3 h-3 rounded-full bg-brand-green/30 mt-2 venue-pin-shadow" />
              </div>

              {/* Decorative circles */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-brand-green/10" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-brand-green/5" />
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
                  <span className="text-sm font-medium text-dark dark:text-white">All-day event (09:00 – 18:00)</span>
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
