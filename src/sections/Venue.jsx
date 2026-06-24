import { Calendar, MapPin, Bell } from 'lucide-react';

export default function Venue() {
  return (
    <section id="venue" className="py-20 lg:py-28 relative bg-white dark:bg-[#0B1020] overflow-hidden border-t border-gray-100 dark:border-white/5">
      <div className="absolute inset-0 grid-bg pointer-events-none z-0" />

      <div className="max-w-container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Content Box */}
          <div className="relative bg-[#0d170a] border border-brand-green/20 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl">
            
            {/* Top decorative bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-brand-green via-[#22c55e] to-brand-green/30" />

            <div className="p-8 md:p-12 lg:p-16">
              <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
                
                {/* Left side: Typography */}
                <div className="space-y-8 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/10 border border-brand-green/20 text-brand-green text-sm font-bold tracking-wide">
                    <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
                    VENUE DETAILS
                  </div>

                  <div className="space-y-5">
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-[1.15]">
                      Where the <span className="text-brand-green">Community</span> Unites
                    </h2>
                    <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
                      We're securing a premium venue in the heart of Kolkata. Exact coordinates will be shared with registered attendees soon.
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4">
                    <a 
                      href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=OpenSourceCon+India+2026&dates=20261205T090000/20261205T180000&details=Bengal%27s+biggest+open+source+gathering.&location=Kolkata"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-6 py-3.5 rounded-full bg-white text-black font-bold text-sm hover:bg-gray-100 transition-colors flex items-center gap-2 shadow-lg"
                    >
                      <img src="/images/google-calendar-icon.webp" alt="Google Calendar" className="w-5 h-5 flex-shrink-0 object-contain" />
                      Add to Calendar
                    </a>
                  </div>
                </div>

                {/* Right side: Information Cards */}
                <div className="flex flex-col gap-4">
                  {/* Location Card */}
                  <div className="bg-[#0a1208] border border-white/5 rounded-[1.5rem] p-6 sm:p-8 flex items-start gap-5 hover:border-brand-green/30 transition-colors group">
                    <div className="w-12 h-12 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-brand-green/20 transition-all">
                      <MapPin size={24} strokeWidth={1.5} />
                    </div>
                    <div className="text-left">
                      <h4 className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1.5">City</h4>
                      <p className="text-white font-heading text-2xl font-bold">Kolkata, India</p>
                      <p className="text-brand-green text-sm mt-2 font-semibold">Exact venue unlocking soon</p>
                    </div>
                  </div>

                  {/* Date Card */}
                  <div className="bg-[#0a1208] border border-white/5 rounded-[1.5rem] p-6 sm:p-8 flex items-start gap-5 hover:border-brand-green/30 transition-colors group">
                    <div className="w-12 h-12 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-brand-green/20 transition-all">
                      <Calendar size={24} strokeWidth={1.5} />
                    </div>
                    <div className="text-left">
                      <h4 className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1.5">Date</h4>
                      <p className="text-white font-heading text-2xl font-bold">Dec 05, 2026</p>
                      <p className="text-gray-400 text-sm mt-2 font-medium">Full Day Event • 9:00 AM onwards</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            
            {/* Abstract glow inside the card */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
          </div>
        </div>
      </div>
    </section>
  );
}
