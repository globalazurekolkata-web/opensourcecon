import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const organizers = [
  {
    name: 'Kunal Kushwaha',
    role: 'Community Advisor',
    company: 'Civo',
    badge: 'CNCF Ambassador',
    image: '/images/team/KunalD.png',
    socials: { twitter: 'https://twitter.com', linkedin: 'https://linkedin.com' }
  },
  {
    name: 'Sayantan Karmakar',
    role: 'Platform DevOps Engineer (Kubernetes)',
    company: 'Motorola Solutions',
    badge: 'Golden Kubestronaut',
    image: '/images/team/SayantanK.jpeg',
    socials: { twitter: 'https://twitter.com', linkedin: 'https://linkedin.com' }
  },
  {
    name: 'Sohom Roy',
    role: 'Design & Frontend Lead',
    company: 'Devfolio',
    badge: 'Frontend Wizard',
    image: '/images/team/SohomC.jpeg',
    socials: { twitter: 'https://twitter.com', linkedin: 'https://linkedin.com' }
  },
  {
    name: 'Kazi Haque',
    role: 'Technical Architect',
    company: 'Red Hat',
    badge: 'Cloud Native Elite',
    image: '/images/team/KaziH.jpeg',
    socials: { twitter: 'https://twitter.com', linkedin: 'https://linkedin.com' }
  },
  {
    name: 'Shivam Nandi',
    role: 'DevOps & Community Manager',
    company: 'Google',
    badge: 'Community Builder',
    image: '/images/team/ShivamN.jpeg',
    socials: { twitter: 'https://twitter.com', linkedin: 'https://linkedin.com' }
  }
];

export default function Team() {
  const [startIndex, setStartIndex] = useState(0);

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

  return (
    <section id="team" className="relative bg-gradient-to-b from-[#0a1208] via-[#142611] to-black py-20 lg:py-28 overflow-hidden">
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
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-xl">
            <div className="section-tag inline-flex items-center gap-1.5 border-brand-green/30 bg-brand-green/5 text-white/90">
              <span className="green-dot" />
              THE TEAM
            </div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] font-medium leading-[1.1] tracking-tight text-white">
              Meet Our <span className="text-brand-green uppercase font-bold">ORGANIZERS</span>
            </h2>
            <p className="text-gray-400 text-base md:text-base leading-relaxed">
              A passionate group of engineers and community builders working behind the scenes to make this event possible.
            </p>
          </div>

          {/* Slider controls */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              onClick={prevSlide}
              className="w-11 h-11 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-100 transition-colors shadow-md"
              aria-label="Previous organizer"
            >
              <ChevronLeft size={24} strokeWidth={2.5} />
            </button>
            <button
              onClick={nextSlide}
              className="w-11 h-11 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-100 transition-colors shadow-md"
              aria-label="Next organizer"
            >
              <ChevronRight size={24} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Carousel Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-container mx-auto">
          {organizers.slice(startIndex, startIndex + 3).map((person, idx) => (
            <div 
              key={idx} 
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-white border border-gray-150 transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-xl"
            >
              {/* Top Info Block (White Segment) */}
              <div className="px-6 pt-6 pb-5 bg-white relative z-10 flex justify-between items-start gap-4">
                <div className="space-y-1">
                  <h3 className="font-heading font-bold text-[22px] text-black tracking-tight leading-tight">
                    {person.name}
                  </h3>
                  <p className="text-gray-800 text-[15px]">
                    {person.role}
                  </p>
                  {person.company && (
                    <p className="text-black text-[15px] font-medium">
                      {person.company}
                    </p>
                  )}
                </div>
                {/* LinkedIn Icon */}
                {person.socials.linkedin && (
                  <a 
                    href={person.socials.linkedin} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 shrink-0 rounded bg-[#00823B] text-white flex items-center justify-center hover:bg-[#006629] transition-colors"
                    aria-label={`${person.name} LinkedIn`}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>
                    </svg>
                  </a>
                )}
              </div>

              {/* Middle Photo Area */}
              <div className="relative px-6 z-10 pb-6">
                <div className="aspect-square relative overflow-hidden rounded-[28px] border-[3px] border-white bg-gray-100">
                  <img 
                    src={person.image} 
                    alt={person.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Top Left White Dot */}
                  <div className="absolute top-4 left-4 w-3.5 h-3.5 bg-white rounded-full z-20 shadow-sm" />
                  
                  {/* Top Right Black Icon inside White Cutout */}
                  <div className="absolute -top-6 -right-6 w-[88px] h-[88px] bg-white rounded-full flex items-end justify-start p-3.5 z-20">
                     <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm overflow-hidden p-1.5">
                        <img src="/images/logo.png" alt="Logo" className="w-full h-full object-contain" />
                     </div>
                  </div>
                </div>

                {/* Bottom Badge Area */}
                <div className="mt-5 flex justify-center relative z-10">
                  <div className="bg-white/15 border border-white/20 text-white text-[13px] font-semibold px-5 py-2 rounded-full flex items-center gap-2 backdrop-blur-md shadow-sm">
                    <span className="w-1.5 h-1.5 bg-white rounded-full" />
                    {person.badge || 'Organizer'}
                  </div>
                </div>
              </div>

              {/* Absolute Green Background for Bottom Half */}
              <div className="absolute bottom-0 left-0 right-0 h-[45%] custom-gradient z-0" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
