import { useState, useEffect } from 'react';
import { Calendar, MapPin, Compass, Train, Plane, ExternalLink, Building } from 'lucide-react';
import Button from '../components/ui/Button';

export default function Venue() {
  const [cardView, setCardView] = useState('photo'); // 'photo' or 'map'
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCardView((prev) => (prev === 'photo' ? 'map' : 'photo'));
    }, 20000); // 20 seconds

    return () => clearInterval(interval);
  }, [isHovered, cardView]);

  return (
    <section id="venue" className="py-20 lg:py-28 relative bg-white dark:bg-[#0B1020] overflow-hidden border-t border-gray-100 dark:border-white/5">
      {/* Grid background pattern */}
      <div className="absolute inset-0 grid-bg pointer-events-none z-0 opacity-40 dark:opacity-[0.03]" />
      
      {/* Glowing abstract circles */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-green/5 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-1/3 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] bg-brand-green/5 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="max-w-container mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-16">
          <div className="section-tag inline-flex items-center gap-1.5 mx-auto">
            <span className="green-dot animate-pulse" />
            VENUE
          </div>

          <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] leading-[1.2]! tracking-tight text-dark dark:text-white">
            <span className="font-medium">The Heart of Bengal</span>
            <br />
            <span className="font-medium">is our </span>
            <span className="text-gradient uppercase font-bold">
              <span className="underline decoration-brand-green decoration-[3px] underline-offset-[8px]">
                STAGE
              </span>
            </span>
          </h2>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <Button 
            href="https://www.google.com/maps/place/Dhono+Dhanyo+Auditorium/@22.530292,88.337091,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="!bg-black hover:!bg-black/90 !text-white font-bold text-sm px-8 py-3.5 shadow-lg border border-transparent transition-all flex items-center gap-2"
          >
            View Map Location <span className="text-base font-normal">→</span>
          </Button>
          
          <Button 
            href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=OpenSourceCon+India+2026&dates=20261205T090000/20261205T180000&details=Bengal%27s+biggest+open+source+gathering.&location=Dhono+Dhanyo+Auditorium%2C+Alipore%2C+Kolkata"
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            className="px-8 py-3.5 border-gray-200 dark:border-white/10 shadow-sm bg-white dark:bg-white/5 hover:bg-gray-50 dark:hover:bg-white/10 text-dark dark:text-white font-bold text-sm flex items-center gap-2 transition-all"
          >
            <img src="/images/google-calendar-icon.webp" alt="Google Calendar" className="w-5 h-5 flex-shrink-0 object-contain" />
            Add to Calendar <span className="text-lg font-light text-gray-400 dark:text-gray-500">+</span>
          </Button>
        </div>

        {/* Card Layout */}
        <div className="max-w-4xl mx-auto relative mb-12">
          {/* Overlapping top-left badge - responsive positioning to prevent off-screen clipping */}
          <div className="absolute -top-7 -left-3 lg:-left-7 w-14 h-14 rounded-full bg-white border-[5px] border-dark dark:border-white/10 flex items-center justify-center z-20 shadow-md">
            <img src="/images/logo.png" alt="OSC Logo" className="w-8 h-8 object-contain" />
          </div>

          {/* Card Container using base .card style */}
          <div 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="card relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
          >

            {/* View Switcher inside the card - responsive scale & position, no focus outlines */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 flex bg-white/85 dark:bg-black/40 p-1 rounded-full border border-gray-200/50 dark:border-white/10 backdrop-blur-md">
              <button 
                onClick={() => setCardView('map')}
                className={`px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/70 ${
                  cardView === 'map' 
                    ? 'bg-black dark:bg-[#56D64B] text-white dark:text-black shadow-sm' 
                    : 'text-gray-secondary hover:text-dark dark:hover:text-white'
                }`}
              >
                Map View
              </button>
              <button 
                onClick={() => setCardView('photo')}
                className={`px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/70 ${
                  cardView === 'photo' 
                    ? 'bg-black dark:bg-[#56D64B] text-white dark:text-black shadow-sm' 
                    : 'text-gray-secondary hover:text-dark dark:hover:text-white'
                }`}
              >
                Venue Photo
              </button>
            </div>

            {/* Main Content Area: Map or Photo */}
            <div className="relative w-full h-[320px] sm:h-[440px] overflow-hidden">
              {/* Map View Panel */}
              <div 
                className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${
                  cardView === 'map' 
                    ? 'opacity-100 z-10 pointer-events-auto scale-100' 
                    : 'opacity-0 z-0 pointer-events-none scale-[0.98]'
                }`}
              >
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.974416174677!2d88.3370905752157!3d22.530292079471927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027746475abbcd%3A0x97ab4cf0c716e313!2sDhono%20Dhanyo%20Auditorium!5e0!3m2!1sen!2sin!4v1721034660000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map of Dhono Dhanyo Auditorium"
                  className="opacity-90 dark:opacity-85 hover:opacity-100 transition-opacity"
                />
              </div>

              {/* Photo View Panel */}
              <div 
                className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${
                  cardView === 'photo' 
                    ? 'opacity-100 z-10 pointer-events-auto scale-100' 
                    : 'opacity-0 z-0 pointer-events-none scale-[1.02]'
                }`}
              >
                <div className="relative w-full h-full group/image">
                  <img 
                    src="/images/venue.jpg" 
                    alt="Dhono Dhanyo Auditorium shell structure" 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out scale-100 group-hover/image:scale-102"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/25" />
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-left">
                    <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-brand-green/10 border border-brand-green/20 text-brand-green text-[10px] font-bold uppercase tracking-wider">
                      Conch-Shell Architecture
                    </span>
                    <h4 className="text-white font-heading font-extrabold text-xl sm:text-2xl mt-0 sm:mt-2 leading-tight">
                      Dhono Dhanyo Auditorium
                    </h4>
                    <p className="text-gray-300 text-xs sm:text-sm mt-1 max-w-xl">
                      Spanning 4.5 acres with a seating capacity of 2,000+, featuring structural steel design and advanced acoustics.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Divider & Details - aligned symmetrically with matching icon badges */}
            <div className="border-t border-gray-200 dark:border-white/5 px-5 sm:px-8 py-6 sm:py-8 bg-gray-50/30 dark:bg-black/10">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-8">
                
                {/* Left Side: Venue Address with MapPin Icon */}
                <div className="flex items-center text-left">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center shrink-0 mr-3 sm:mr-4">
                    <MapPin size={18} strokeWidth={2} className="sm:hidden" />
                    <MapPin size={20} strokeWidth={2} className="hidden sm:block" />
                  </div>
                  <div>
                    <h5 className="text-dark dark:text-white font-heading text-base sm:text-lg font-extrabold leading-tight">
                      Dhono Dhanyo Auditorium
                    </h5>
                    <p className="text-gray-secondary dark:text-gray-400 text-xs font-semibold mt-0.5">
                      Alipore, Kolkata, West Bengal
                    </p>
                  </div>
                </div>

                {/* Right Side: Date details with Calendar Icon */}
                <div className="flex items-center text-left">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center shrink-0 mr-3 sm:mr-4">
                    <Calendar size={18} strokeWidth={2} className="sm:hidden" />
                    <Calendar size={20} strokeWidth={2} className="hidden sm:block" />
                  </div>
                  <div>
                    <h5 className="text-dark dark:text-white font-heading text-base sm:text-lg font-extrabold leading-tight">
                      05th December 2026
                    </h5>
                    <p className="text-gray-secondary dark:text-gray-400 text-[10px] sm:text-xs font-semibold uppercase tracking-wider mt-0.5">
                      Full Day Event
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Transit details below the card */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-12">
          {/* Metro */}
          <div className="group relative bg-white dark:bg-[#131C31] rounded-2xl p-5 sm:p-6 flex flex-col items-start text-left border border-gray-150 dark:border-white/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden shadow-soft">
            {/* Top green gradient accent line */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-green via-[#22c55e] to-brand-green/20" />
            
            {/* Icon */}
            <div className="w-10 h-10 rounded-xl bg-brand-green/10 text-brand-green flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-brand-green/10">
              <Train size={20} strokeWidth={2} />
            </div>
            
            <h5 className="font-heading font-bold text-sm sm:text-base text-dark dark:text-white mb-1.5 uppercase tracking-wide">Metro Link</h5>
            <p className="text-gray-secondary dark:text-gray-400 text-xs sm:text-sm leading-relaxed">
              Netaji Bhavan / Kalighat (~2.5 km)
            </p>
          </div>

          {/* Railway */}
          <div className="group relative bg-white dark:bg-[#131C31] rounded-2xl p-5 sm:p-6 flex flex-col items-start text-left border border-gray-150 dark:border-white/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden shadow-soft">
            {/* Top green gradient accent line */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-green via-[#22c55e] to-brand-green/20" />
            
            {/* Icon */}
            <div className="w-10 h-10 rounded-xl bg-brand-green/10 text-brand-green flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-brand-green/10">
              <Train size={20} strokeWidth={2} />
            </div>
            
            <h5 className="font-heading font-bold text-sm sm:text-base text-dark dark:text-white mb-1.5 uppercase tracking-wide">Railway</h5>
            <p className="text-gray-secondary dark:text-gray-400 text-xs sm:text-sm leading-relaxed">
              Sealdah (~7 km) / Howrah (~8.5 km)
            </p>
          </div>

          {/* Airport */}
          <div className="group relative bg-white dark:bg-[#131C31] rounded-2xl p-5 sm:p-6 flex flex-col items-start text-left border border-gray-150 dark:border-white/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden shadow-soft">
            {/* Top green gradient accent line */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-green via-[#22c55e] to-brand-green/20" />
            
            {/* Icon */}
            <div className="w-10 h-10 rounded-xl bg-brand-green/10 text-brand-green flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-brand-green/10">
              <Plane size={20} strokeWidth={2} />
            </div>
            
            <h5 className="font-heading font-bold text-sm sm:text-base text-dark dark:text-white mb-1.5 uppercase tracking-wide">Airport</h5>
            <p className="text-gray-secondary dark:text-gray-400 text-xs sm:text-sm leading-relaxed">
              Kolkata Airport (CCU) (~22 km)
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
