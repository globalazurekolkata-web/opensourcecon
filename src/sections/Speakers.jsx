import { useState, useEffect } from 'react';
import { Users, Award, Presentation, User, ArrowLeft, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';
import { RiArrowRightLine } from 'react-icons/ri';

const featuredSlots = [
  {
    name: 'To Be Announced',
    role: 'Open Source Maintainer',
    company: 'Leading Tech Org',
    tags: ['Speaker', 'Maintainer'],
    linkedin: 'https://linkedin.com'
  },
  {
    name: 'To Be Announced',
    role: 'Core Contributor',
    company: 'OSS Foundation',
    tags: ['Speaker', 'Contributor'],
    linkedin: 'https://linkedin.com'
  },
  {
    name: 'To Be Announced',
    role: 'DevOps Architect',
    company: 'Global Scale Inc',
    tags: ['Speaker', 'Architect'],
    linkedin: 'https://linkedin.com'
  },
  {
    name: 'To Be Announced',
    role: 'Web3 Lead Developer',
    company: 'Decentralized Protocol',
    tags: ['Speaker', 'Developer'],
    linkedin: 'https://linkedin.com'
  }
];

export default function Speakers() {
  const [startIndex, setStartIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileIndex, setMobileIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isPaused || !isMobile) return;
    const timer = setInterval(() => {
      setMobileIndex((prev) => (prev + 1) % featuredSlots.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [mobileIndex, isPaused, isMobile]);

  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      setMobileIndex((prev) => (prev + 1) % featuredSlots.length);
    }
    if (touchStart - touchEnd < -50) {
      setMobileIndex((prev) => (prev - 1 + featuredSlots.length) % featuredSlots.length);
    }
  };

  const nextSlide = () => {
    const maxIndex = isMobile ? featuredSlots.length - 1 : featuredSlots.length - 3;
    if (startIndex < maxIndex) {
      setStartIndex(startIndex + 1);
    } else {
      setStartIndex(0);
    }
  };

  const prevSlide = () => {
    const maxIndex = isMobile ? featuredSlots.length - 1 : featuredSlots.length - 3;
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    } else {
      setStartIndex(maxIndex);
    }
  };

  const SpeakerCard = ({ slot }) => (
    <div className="w-full h-full bg-white border border-gray-200 rounded-[32px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
      {/* Card Header Info */}
      <div className="p-6 pb-4 flex justify-between items-start text-left">
        <div>
          <h4 className="font-heading font-extrabold text-[18px] text-dark leading-tight">
            {slot.name}
          </h4>
          <p className="text-[12px] font-semibold text-gray-500 mt-1 leading-tight">
            {slot.role}
          </p>
          <p className="text-[10px] text-gray-400 font-bold mt-0.5">
            {slot.company}
          </p>
        </div>
        <a href={slot.linkedin} target="_blank" rel="noopener noreferrer" className="text-brand-green hover:opacity-80 flex-shrink-0">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
          </svg>
        </a>
      </div>

      {/* Card Portrait Placeholder */}
      <div className="px-6 pb-6 relative block">
        <div className="relative rounded-[24px] overflow-hidden aspect-[4/3] w-full bg-gray-50 border border-dashed border-gray-200 flex items-center justify-center group-hover:bg-brand-green/5 group-hover:border-brand-green/30 transition-all duration-300">
          <User size={48} className="text-gray-300 group-hover:text-brand-green transition-colors duration-300 stroke-[1.5]" />
          {/* Logo Badge */}
          <div className="absolute top-2 right-2 z-10 w-9 h-9 rounded-full bg-white border border-[#56D64B] flex items-center justify-center p-1.5 shadow-md">
            <img src="/images/logo.png" alt="logo" className="w-full h-full object-contain" />
          </div>
          {/* Top Left indicator dot */}
          <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full shadow-sm" />
        </div>
      </div>

      {/* Card Footer tags */}
      <div className="mt-4 p-4 bg-gradient-to-r from-[#22C55E] to-[#7ED956] flex items-center justify-center gap-2">
        {slot.tags.map((tag, idx) => (
          <span 
            key={idx} 
            className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/20 border border-white/10 text-white text-[10px] font-bold"
          >
            <span className="w-1 h-1 rounded-full bg-white" />
            {tag}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section id="speakers" className="py-20 lg:py-28 relative bg-gradient-to-b from-[#0a1208] via-[#142611] to-black border-t border-white/5 overflow-hidden">
      {/* Dark grid pattern exactly like Team.jsx */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none z-0" 
        style={{
          backgroundImage: 'linear-gradient(rgba(86, 214, 75, 0.2) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(86, 214, 75, 0.2) 1.5px, transparent 1.5px)',
          backgroundSize: '72px 72px'
        }}
      />

      <div className="max-w-container mx-auto px-6 lg:px-8 relative z-10">

        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-16">
          <div className="section-tag inline-flex items-center gap-1.5 mx-auto border-brand-green/30 bg-brand-green/5 text-green-300">
            <span className="green-dot" />
            SPEAKERS
          </div>

          <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] leading-[1.2]! tracking-tight text-white">
            Voices of the
            <br />
            <span className="text-gradient uppercase font-bold">
              OPEN{" "}
              <span className="underline decoration-brand-green decoration-[3px] underline-offset-[8px]">
                SOURCE
              </span>
            </span>{" "}
            World
          </h2>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            We're curating an exceptional lineup of maintainers, engineers, and community leaders. Speaker announcements coming soon.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Button
              href="https://forms.gle/tFUzkFuCyb1heshu9"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              className="text-sm py-3.5 px-8 font-bold flex items-center gap-2 !bg-brand-green hover:!bg-brand-green-dark text-white border-0 shadow-lg"
              icon={RiArrowRightLine}
              iconPosition="right"
            >
              <User size={16} className="text-white flex-shrink-0" />
              <span>Become a Speaker</span>
            </Button>
            <Button
              href="https://forms.gle/tFUzkFuCyb1heshu9"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              className="text-sm py-3.5 px-8 font-bold flex items-center gap-2 border border-white/10 bg-white/5 hover:bg-white/10 text-white"
              icon={RiArrowRightLine}
              iconPosition="right"
            >
              <span>Speaker Guidelines</span>
            </Button>
          </div>
        </div>

        {/* Collage Display Area */}
        <div className="relative mt-16 max-w-[620px] mx-auto hidden sm:block">
          {/* Main Collage Container */}
          <div className="relative flex items-center justify-center">
            <img 
              src="/images/Collage Image Area.png" 
              alt="Speakers Collage" 
              className="w-full h-auto block select-none brightness-90"
            />
          </div>
        </div>

        {/* Featured Speakers Section Header */}
        <div className="flex items-center justify-between mb-8 mt-24 border-t border-white/10 pt-16">
          <div className="flex items-center gap-3 text-left">
            <span className="w-6 h-[2px] bg-brand-green" />
            <h3 className="font-heading text-2xl font-extrabold text-white">
              Featured Speakers
            </h3>
          </div>
          <a href="#speakers" className="text-brand-green font-bold text-sm flex items-center gap-1.5 hover:text-brand-green-light transition-colors">
            <span>View all speakers</span>
            <RiArrowRightLine />
          </a>
        </div>

        {/* Desktop Slider Controls (Hidden on Mobile) */}
        <div className="hidden sm:flex items-center justify-end gap-3 mb-6">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full border border-gray-800 bg-white text-brand-green-dark flex items-center justify-center transition-colors shadow-lg"
            aria-label="Previous speaker"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full border border-gray-800 bg-white text-brand-green-dark flex items-center justify-center transition-colors shadow-lg"
            aria-label="Next speaker"
          >
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Desktop Carousel Grid (Hidden on Mobile) */}
        <div 
          className="hidden sm:grid sm:grid-cols-3 gap-6 transition-all duration-300"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {featuredSlots.slice(startIndex, startIndex + 3).map((slot, idx) => (
            <div key={idx} className="min-h-[440px]">
              <SpeakerCard slot={slot} />
            </div>
          ))}
        </div>

        {/* Mobile Swipeable 3D Carousel (Hidden on Desktop) */}
        <div 
          className="sm:hidden relative h-[440px] w-full max-w-[280px] mx-auto perspective-1000 overflow-visible mt-6 mb-6"
          onTouchStart={(e) => {
            handleTouchStart(e);
            setIsPaused(true);
          }}
          onTouchMove={handleTouchMove}
          onTouchEnd={() => {
            handleTouchEnd();
            setIsPaused(false);
          }}
        >
          {featuredSlots.map((slot, i) => {
            const offset = (i - mobileIndex + featuredSlots.length) % featuredSlots.length;
            let style = {};
            
            if (offset === 0) {
              style = { transform: 'translateX(0) scale(1)', opacity: 1, zIndex: 10 };
            } else if (offset === 1) {
              style = { transform: 'translateX(25%) scale(0.85)', opacity: 0.4, zIndex: 5 };
            } else if (offset === featuredSlots.length - 1) {
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
                  <SpeakerCard slot={slot} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Swipe Indicator Dots & Controls */}
        <div className="flex sm:hidden justify-center items-center gap-6 mt-4">
          <button 
            onClick={() => setMobileIndex((prev) => (prev - 1 + featuredSlots.length) % featuredSlots.length)}
            className="w-10 h-10 rounded-full border border-gray-800 bg-white/10 backdrop-blur-sm text-white flex items-center justify-center transition-colors active:bg-white/20"
            aria-label="Previous speaker"
          >
            <ArrowLeft size={18} />
          </button>

          <div className="flex items-center gap-2">
             {featuredSlots.map((_, i) => (
               <div 
                 key={i} 
                 className={`h-1.5 rounded-full transition-all duration-300 ${
                   i === mobileIndex ? 'w-4 bg-brand-green' : 'w-1.5 bg-gray-600'
                 }`}
               />
             ))}
          </div>

          <button 
            onClick={() => setMobileIndex((prev) => (prev + 1) % featuredSlots.length)}
            className="w-10 h-10 rounded-full border border-gray-800 bg-white/10 backdrop-blur-sm text-white flex items-center justify-center transition-colors active:bg-white/20"
            aria-label="Next speaker"
          >
            <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}
