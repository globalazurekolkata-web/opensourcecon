import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, User } from 'lucide-react';
import Button from './Button';
import { RiArrowRightLine } from 'react-icons/ri';

const speakerSlots = [
  {
    slot: 'SPEAKER SLOT 1',
    name: 'To Be Announced',
    role: 'Open Source Maintainer',
    company: 'Leading Tech Org',
    bio: 'Specialist in building distributed systems, developer experience, and cloud-native frameworks.',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com'
  },
  {
    slot: 'SPEAKER SLOT 2',
    name: 'To Be Announced',
    role: 'Core Contributor',
    company: 'OSS Foundation',
    bio: 'Expert in frontend architectures, design systems, and building accessible UI frameworks.',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com'
  },
  {
    slot: 'SPEAKER SLOT 3',
    name: 'To Be Announced',
    role: 'DevOps Architect',
    company: 'Global Scale Inc',
    bio: 'Deep expertise in Kubernetes automation, secure supply chain, and continuous deployment.',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com'
  },
  {
    slot: 'SPEAKER SLOT 4',
    name: 'To Be Announced',
    role: 'Web3 Lead Developer',
    company: 'Decentralized protocol',
    bio: 'Leading researcher in decentralized infrastructure, blockchain scaling, and smart contracts.',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com'
  }
];

export default function Speakers() {
  const [startIndex, setStartIndex] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => {
    if (startIndex + 3 < speakerSlots.length) {
      setStartIndex(startIndex + 1);
    } else {
      setStartIndex(0); // Loop back
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    } else {
      setStartIndex(speakerSlots.length - 3); // Loop to end
    }
  };

  // Mobile 3D Carousel swipe handlers
  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left -> next
      setMobileIndex((prev) => (prev + 1) % speakerSlots.length);
    }
    if (touchStart - touchEnd < -50) {
      // Swipe right -> prev
      setMobileIndex((prev) => (prev - 1 + speakerSlots.length) % speakerSlots.length);
    }
  };

  // Auto-scroll effect for both mobile and desktop
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setStartIndex((prev) => (prev + 3 < speakerSlots.length ? prev + 1 : 0));
      setMobileIndex((prev) => (prev + 1) % speakerSlots.length);
    }, 4000); // 4 seconds interval

    // Cleanup interval on unmount or when indices change (to reset timer on manual interaction)
    return () => clearInterval(timer);
  }, [startIndex, mobileIndex, isPaused]);

  // Shared card component for both views
  const SpeakerCard = ({ slot }) => (
    <div className="w-full h-full bg-white border border-gray-150 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between group hover:-translate-y-1 transition-transform duration-300">
      <div className="p-4 sm:p-6 space-y-3 sm:space-y-4 text-center">
        <span className="inline-block px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-gray-100 border border-gray-150 text-gray-500 text-[8px] sm:text-[9px] font-bold tracking-wider uppercase">
          {slot.slot}
        </span>

        {/* Avatar Placeholder */}
        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-dashed border-gray-200 bg-gray-50 flex items-center justify-center mx-auto group-hover:border-brand-green/40 group-hover:bg-brand-green/5 transition-colors">
          <div className="text-gray-300">
            <User className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
        </div>

        <div className="space-y-1">
          <h4 className="font-heading font-extrabold text-sm sm:text-base text-dark">
            {slot.name}
          </h4>
          <p className="text-[10px] sm:text-xs font-semibold text-brand-green">
            {slot.role}
          </p>
          <p className="text-[9px] sm:text-[10px] text-gray-secondary font-medium">
            {slot.company}
          </p>
        </div>

        <p className="text-[10px] sm:text-[11px] text-gray-secondary leading-relaxed pt-1 sm:pt-2">
          {slot.bio}
        </p>
      </div>

      {/* Card Social Footer */}
      <div className="bg-brand-green py-2.5 sm:py-3 px-4 flex items-center justify-center gap-3">
        <a
          href={slot.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-dark text-brand-green flex items-center justify-center hover:bg-black transition-colors"
          aria-label="Twitter profile"
        >
          <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
        <a
          href={slot.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-dark text-brand-green flex items-center justify-center hover:bg-black transition-colors"
          aria-label="LinkedIn profile"
        >
          <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
          </svg>
        </a>
      </div>
    </div>
  );

  return (
    <section id="speakers" className="py-14 sm:py-20 lg:py-28 relative bg-gradient-to-b from-[#0a1208] via-[#142611] to-black border-t border-gray-900 overflow-hidden">
      {/* Dark grid pattern */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none z-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(86, 214, 75, 0.2) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(86, 214, 75, 0.2) 1.5px, transparent 1.5px)',
          backgroundSize: '72px 72px'
        }}
      />

      <div className="max-w-container mx-auto px-6 lg:px-8 relative z-10">

        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 sm:space-y-6 mb-10 sm:mb-16">
          <div className="section-tag inline-flex items-center gap-1.5 mx-auto px-3 py-1.5 border-brand-green/30 bg-brand-green/5 text-brand-green">
            <span className="green-dot" />
            SPEAKERS
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.3]! sm:leading-[1.4]! tracking-tight text-white">
            <span className="font-medium">Voices of the</span>
            <br />
            <span className="text-gradient uppercase font-bold">OPEN SOURCE WORLD</span>
          </h2>

          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Learn from industry experts, core maintainers, and community leaders who are building the future of open source technologies.
          </p>

          <div className="flex justify-center gap-3 sm:gap-4 pt-2">
            <Button
              href="https://forms.gle/tFUzkFuCyb1heshu9"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              className="text-xs sm:text-sm py-2.5 px-5 sm:py-3 sm:px-6"
              icon={RiArrowRightLine}
              iconPosition="right"
            >
              Apply to Speak
            </Button>
            <Button
              href="#schedule"
              variant="secondary"
              className="text-xs sm:text-sm py-2.5 px-5 sm:py-3 sm:px-6 border-transparent text-dark hover:bg-gray-100"
            >
              View Schedule
            </Button>
          </div>
        </div>

        {/* 2-Column Split Layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">

          {/* Left: Speaker Collage Graphic (Hidden on Mobile) */}
          <div className="hidden lg:flex lg:col-span-5 relative items-center justify-center">
            {/* Soft decorative background orb */}
            <div className="absolute w-[300px] h-[300px] rounded-full bg-brand-green/5 blur-3xl -z-10" />

            <div className="relative w-full max-w-[500px] xl:max-w-[560px] aspect-square rounded-[2rem] transform lg:scale-110">
              <img
                src="/images/Collage Image Area.png"
                alt="Speakers Collage"
                className="w-full h-full object-contain filter drop-shadow-lg opacity-90"
              />

              {/* Floating micro indicators/badges */}
              <div className="absolute -top-3 -right-3 px-3.5 py-1.5 rounded-full bg-dark border border-gray-800 shadow-xl text-[10px] font-bold text-brand-green flex items-center gap-1.5 animate-bounce">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-ping" />
                Lineup Unveiling Soon
              </div>
            </div>
          </div>

          {/* Right: Speaker Cards Slider */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-center sm:justify-between border-b border-gray-800 pb-3">
              <span className="text-xs font-mono font-bold text-gray-400 tracking-widest uppercase">
                SPEAKER SLOTS
              </span>

              {/* Slider Controls (Desktop Only) */}
              <div className="hidden sm:flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  className="w-9 h-9 rounded-full border border-gray-800 bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-colors shadow-sm"
                  aria-label="Previous speaker"
                >
                  <ArrowLeft size={16} />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-9 h-9 rounded-full border border-gray-800 bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-colors shadow-sm"
                  aria-label="Next speaker"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Desktop: Paginated Grid Content */}
            <div
              className="hidden sm:grid sm:grid-cols-3 gap-6 transition-all duration-300"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {speakerSlots.slice(startIndex, startIndex + 3).map((slot, i) => (
                <div key={i} className="min-h-[380px]">
                  <SpeakerCard slot={slot} />
                </div>
              ))}
            </div>

            {/* Mobile: Swipeable 3D Carousel */}
            <div
              className="sm:hidden relative h-[310px] w-full max-w-[240px] mx-auto perspective-1000 overflow-visible mt-2 mb-4"
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
              {speakerSlots.map((slot, i) => {
                const offset = (i - mobileIndex + speakerSlots.length) % speakerSlots.length;
                let style = {};

                if (offset === 0) {
                  style = { transform: 'translateX(0) scale(1)', opacity: 1, zIndex: 10 };
                } else if (offset === 1) {
                  style = { transform: 'translateX(25%) scale(0.85)', opacity: 0.5, zIndex: 5 };
                } else if (offset === speakerSlots.length - 1) {
                  style = { transform: 'translateX(-25%) scale(0.85)', opacity: 0.5, zIndex: 5 };
                } else {
                  style = { transform: 'translateX(0) scale(0.7)', opacity: 0, zIndex: 0, pointerEvents: 'none' };
                }

                return (
                  <div
                    key={i}
                    className="absolute inset-0 transition-all duration-500 ease-out flex items-center justify-center"
                    style={style}
                  >
                    <div className="w-full h-full shadow-xl">
                      <SpeakerCard slot={slot} />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile Swipe Indicator Dots */}
            <div className="flex sm:hidden justify-center items-center gap-2 mt-4">
              {speakerSlots.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === mobileIndex ? 'w-4 bg-brand-green' : 'w-1.5 bg-gray-200'
                    }`}
                />
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
