import { useState } from 'react';
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
            <div className="section-tag inline-flex items-center gap-1.5 border-brand-green/30 bg-brand-green/5 text-brand-green">
              <span className="green-dot" />
              THE TEAM
            </div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.1] tracking-tight text-white">
              Meet Our <span className="text-brand-green uppercase">ORGANIZERS</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              A passionate group of engineers and community builders working behind the scenes to make this event possible.
            </p>
          </div>

          {/* Slider controls */}
          <div className="flex items-center gap-3 self-start md:self-end">
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

        {/* Carousel Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {organizers.slice(startIndex, startIndex + 3).map((person, idx) => (
            <div 
              key={idx} 
              className="group relative flex flex-col overflow-hidden rounded-3xl bg-white border border-gray-150 transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-xl"
            >
              {/* Photo Area */}
              <div className="aspect-square relative overflow-hidden bg-gray-50 p-2 pb-0">
                <div className="w-full h-full rounded-2xl overflow-hidden relative">
                  <img 
                    src={person.image} 
                    alt={person.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Bottom Info Block (Green Segment) */}
              <div className="bg-brand-green p-6 flex flex-col items-center justify-center text-center space-y-1 relative">
                <h3 className="font-heading font-extrabold text-lg text-dark tracking-tight leading-tight">
                  {person.name}
                </h3>
                <p className="text-dark/85 text-xs font-semibold uppercase tracking-wider">
                  {person.role}
                </p>

                {/* Social links (visible) */}
                <div className="flex items-center justify-center gap-2.5 pt-3">
                  {person.socials.twitter && (
                    <a 
                      href={person.socials.twitter} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-7.5 h-7.5 rounded-full bg-dark text-brand-green flex items-center justify-center hover:bg-black transition-colors"
                      aria-label={`${person.name} Twitter`}
                    >
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                  )}
                  {person.socials.linkedin && (
                    <a 
                      href={person.socials.linkedin} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-7.5 h-7.5 rounded-full bg-dark text-brand-green flex items-center justify-center hover:bg-black transition-colors"
                      aria-label={`${person.name} LinkedIn`}
                    >
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
