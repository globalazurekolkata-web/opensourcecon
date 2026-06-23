import { ArrowRight, Plus, Calendar, MapPin } from 'lucide-react';

const GoogleCalendarIcon = () => (
  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="18" height="18" rx="4" fill="#fff" stroke="#e5e7eb" strokeWidth="1" />
    {/* Blue top bar */}
    <path d="M3 6.5C3 4.567 4.567 3 6.5 3h11C19.433 3 21 4.567 21 6.5V8H3V6.5Z" fill="#4285F4" />
    {/* Number 31 */}
    <text x="12" y="16" dominantBaseline="middle" textAnchor="middle" fill="#4285F4" fontSize="9.5" fontWeight="900" fontFamily="sans-serif">31</text>
  </svg>
);

export default function Venue() {
  return (
    <section id="venue" className="py-20 lg:py-28 relative bg-white dark:bg-[#0B1020] overflow-hidden border-t border-gray-100 dark:border-white/5">
      <div className="absolute inset-0 grid-bg pointer-events-none z-0" />
      
      <div className="max-w-container mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-12">
          <div className="section-tag inline-flex items-center gap-1.5 mx-auto">
            <span className="green-dot" />
            VENUE
          </div>
          
          <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] leading-[1.2]! tracking-tight text-dark dark:text-white">
            <span className="font-medium">The heart of Bengal</span>
            <br />
            <span className="font-medium">is our </span>
            <span className="text-gradient uppercase font-bold relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-full after:h-[3px] after:bg-brand-green">
              STAGE
            </span>
          </h2>
        </div>

        {/* Buttons Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a 
            href="https://maps.google.com/?q=Kolkata" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-full btn-primary bg-dark dark:bg-white text-white dark:text-dark hover:bg-dark/90 dark:hover:bg-gray-100 font-bold text-xs md:text-sm flex items-center gap-2 transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 whitespace-nowrap cursor-pointer select-none"
          >
            <span>View Map Location</span>
            <ArrowRight size={16} />
          </a>
          
          <a 
            href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=OpenSourceCon+India+2026&dates=20261205T090000/20261205T180000&details=Bengal%27s+biggest+open+source+gathering.&location=Kolkata"
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-full bg-white dark:bg-[#131C31] border border-gray-200 dark:border-white/5 text-dark dark:text-white hover:bg-gray-50 dark:hover:bg-[#1C2640] font-bold text-xs md:text-sm flex items-center gap-2 transition-all duration-200 shadow-sm hover:shadow-md active:scale-95 whitespace-nowrap cursor-pointer select-none"
          >
            <GoogleCalendarIcon />
            <span>Add to Calendar</span>
            <Plus size={16} className="text-gray-400 dark:text-gray-500" />
          </a>
        </div>

        {/* Map Card Visual Block */}
        <div className="max-w-5xl mx-auto relative">
          
          {/* Overlapping Badge on Top-Left */}
          <div className="absolute -top-5 -left-5 z-20 w-16 h-16 rounded-full bg-white border-[1px] border-[#56D64B] flex items-center justify-center shadow-lg overflow-hidden p-2">
            <img src="/images/logo.png" alt="OpenSourceCon Logo" className="w-full h-full object-contain" />
          </div>

          {/* Map Container Card */}
          <div className="relative rounded-[28px] border border-gray-150 dark:border-white/5 overflow-hidden shadow-lg bg-white dark:bg-[#131C31]">
            
            {/* Custom Vector Map Illustration (SVG) */}
            <div className="w-full h-[350px] md:h-[450px] bg-gradient-to-br from-[#FAFCF9] to-[#F3FBF0] dark:from-[#080D08] dark:to-[#0B1020] flex items-center justify-center overflow-hidden relative border-b border-gray-100 dark:border-white/5">
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

            {/* Bottom Bar Info Area */}
            <div className="relative z-10 border-t border-gray-100 dark:border-white/5 bg-white dark:bg-[#131C31] px-8 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              {/* Left Info */}
              <div className="space-y-1 text-left">
                <h4 className="font-heading text-lg md:text-xl font-bold text-dark dark:text-white">Kolkata, West Bengal</h4>
                <p className="text-xs md:text-sm text-gray-secondary">Venue Location</p>
              </div>
              
              {/* Right Info */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green flex-shrink-0">
                  <Calendar size={18} />
                </div>
                <div className="text-left space-y-0.5">
                  <h4 className="font-heading text-sm md:text-base font-bold text-dark dark:text-white">05th December 2026</h4>
                  <p className="text-[10px] md:text-xs text-gray-secondary">Full Day Event</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
