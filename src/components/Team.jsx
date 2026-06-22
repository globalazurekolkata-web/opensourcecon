import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const organizers = [
  {
    name: 'Kunal Kushwaha',
    role: 'Community Advisor',
    image: '/images/team/KunalD.png',
    socials: { twitter: 'https://twitter.com', linkedin: 'https://linkedin.com' }
  },
  {
    name: 'Sayantan Bhattacharyya',
    role: 'Lead Organizer',
    image: '/images/team/SayantanK.jpeg',
    socials: { twitter: 'https://twitter.com', linkedin: 'https://linkedin.com' }
  },
  {
    name: 'Sohom Roy',
    role: 'Design & Frontend Lead',
    image: '/images/team/SohomC.jpeg',
    socials: { twitter: 'https://twitter.com', linkedin: 'https://linkedin.com' }
  },
  {
    name: 'Kazi Haque',
    role: 'Technical Architect',
    image: '/images/team/KaziH.jpeg',
    socials: { twitter: 'https://twitter.com', linkedin: 'https://linkedin.com' }
  },
  {
    name: 'Shivam Nandi',
    role: 'DevOps & Community Manager',
    image: '/images/team/ShivamN.jpeg',
    socials: { twitter: 'https://twitter.com', linkedin: 'https://linkedin.com' }
  }
];

export default function Team() {
  const [startIndex, setStartIndex] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => {
    if (startIndex + 3 < organizers.length) {
      setStartIndex(startIndex + 1);
    } else {
      setStartIndex(0);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    } else {
      setStartIndex(organizers.length - 3);
    }
  };

  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      setMobileIndex((prev) => (prev + 1) % organizers.length);
    }
    if (touchStart - touchEnd < -50) {
      setMobileIndex((prev) => (prev - 1 + organizers.length) % organizers.length);
    }
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setStartIndex((prev) => (prev + 3 < organizers.length ? prev + 1 : 0));
      setMobileIndex((prev) => (prev + 1) % organizers.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [startIndex, mobileIndex, isPaused]);

  const TeamCard = ({ person }) => (
    <div className="w-full h-full group relative flex flex-col overflow-hidden rounded-2xl sm:rounded-3xl bg-white border border-gray-150 transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-xl">
      {/* Photo Area */}
      <div className="aspect-square relative overflow-hidden bg-gray-50 p-2 pb-0 flex-shrink-0">
        <div className="w-full h-full rounded-[14px] sm:rounded-2xl overflow-hidden relative bg-gray-100 flex items-center justify-center">
          {person.image ? (
            <img 
              src={person.image} 
              alt={person.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="text-gray-300 font-bold text-3xl">?</div>
          )}
        </div>
      </div>

      {/* Bottom Info Block (Green Segment) */}
      <div className="bg-brand-green p-4 sm:p-6 flex flex-col items-center justify-center text-center space-y-0.5 sm:space-y-1 relative flex-1">
        <h3 className="font-heading font-extrabold text-base sm:text-lg text-dark tracking-tight leading-tight">
          {person.name}
        </h3>
        <p className="text-dark/85 text-[10px] sm:text-xs font-semibold uppercase tracking-wider">
          {person.role}
        </p>

        {/* Social links */}
        <div className="flex items-center justify-center gap-3 pt-2 sm:pt-3 pb-1">
          {person.socials.twitter && (
            <a 
              href={person.socials.twitter} 
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-dark text-brand-green flex items-center justify-center transition-all duration-300 hover:bg-black hover:scale-110 hover:-translate-y-1 active:scale-95 shadow-sm hover:shadow-md"
              aria-label={`${person.name} Twitter`}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          )}
          {person.socials.linkedin && (
            <a 
              href={person.socials.linkedin} 
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-dark text-brand-green flex items-center justify-center transition-all duration-300 hover:bg-black hover:scale-110 hover:-translate-y-1 active:scale-95 shadow-sm hover:shadow-md"
              aria-label={`${person.name} LinkedIn`}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section id="team" className="relative bg-gradient-to-b from-[#0a1208] via-[#142611] to-black py-16 sm:py-20 lg:py-28 overflow-hidden">
      {/* Dark grid pattern */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none z-0" 
        style={{
          backgroundImage: 'linear-gradient(rgba(86, 214, 75, 0.2) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(86, 214, 75, 0.2) 1.5px, transparent 1.5px)',
          backgroundSize: '72px 72px'
        }}
      />
      
      <div className="max-w-container mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="space-y-4 max-w-xl text-center md:text-left mx-auto md:mx-0">
            <div className="section-tag inline-flex items-center gap-1.5 border-brand-green/30 bg-brand-green/5 text-brand-green">
              <span className="green-dot" />
              THE TEAM
            </div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.1] tracking-tight text-white">
              Meet Our <span className="text-brand-green uppercase">ORGANIZERS</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-sm sm:max-w-md mx-auto md:mx-0">
              A passionate group of engineers and community builders working behind the scenes to make this event possible.
            </p>
          </div>

          {/* Desktop Slider controls */}
          <div className="hidden sm:flex items-center gap-3 self-end">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border border-gray-800 bg-black/40 text-white flex items-center justify-center hover:bg-black/60 transition-colors shadow-lg"
              aria-label="Previous organizer"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border border-gray-800 bg-black/40 text-white flex items-center justify-center hover:bg-black/60 transition-colors shadow-lg"
              aria-label="Next organizer"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Desktop Carousel Grid */}
        <div 
          className="hidden sm:grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto transition-all duration-300"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {organizers.slice(startIndex, startIndex + 3).map((person, idx) => (
            <div key={idx} className="min-h-[340px]">
              <TeamCard person={person} />
            </div>
          ))}
        </div>

        {/* Mobile Swipeable 3D Carousel */}
        <div 
          className="sm:hidden relative h-[380px] w-full max-w-[260px] mx-auto perspective-1000 overflow-visible mt-2 mb-6"
          onTouchStart={(e) => {
            handleTouchStart(e);
            setIsPaused(true);
          }}
          onTouchMove={handleTouchMove}
          onTouchEnd={() => {
            handleTouchEnd();
            setIsPaused(false);
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {organizers.map((person, i) => {
            const offset = (i - mobileIndex + organizers.length) % organizers.length;
            let style = {};
            
            if (offset === 0) {
              style = { transform: 'translateX(0) scale(1)', opacity: 1, zIndex: 10 };
            } else if (offset === 1) {
              style = { transform: 'translateX(25%) scale(0.85)', opacity: 0.4, zIndex: 5 };
            } else if (offset === organizers.length - 1) {
              style = { transform: 'translateX(-25%) scale(0.85)', opacity: 0.4, zIndex: 5 };
            } else {
              style = { transform: 'translateX(0) scale(0.7)', opacity: 0, zIndex: 0, pointerEvents: 'none' };
            }

            return (
              <div 
                key={i} 
                className="absolute inset-0 transition-all duration-500 ease-out flex items-center justify-center" 
                style={style}
              >
                <div className="w-full h-full shadow-2xl">
                  <TeamCard person={person} />
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Mobile Swipe Indicator Dots */}
        <div className="flex sm:hidden justify-center items-center gap-2">
           {organizers.map((_, i) => (
             <div 
               key={i} 
               className={`h-1.5 rounded-full transition-all duration-300 ${
                 i === mobileIndex ? 'w-4 bg-brand-green' : 'w-1.5 bg-gray-600'
               }`}
             />
           ))}
        </div>

      </div>
    </section>
  );
}
