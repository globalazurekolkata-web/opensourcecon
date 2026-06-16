import { ArrowRight } from 'lucide-react';

function openKonfHub(e) {
  e.preventDefault();
  const kBtn = document.querySelector('#konfhub-widget-trigger button, #konfhub-widget-trigger a');
  if (kBtn) kBtn.click();
}

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 lg:pt-36 min-h-[95vh] flex flex-col justify-start overflow-hidden bg-white">
      {/* Grid overlay for the white part */}
      <div className="absolute inset-0 grid-bg pointer-events-none z-0" />

      {/* Main Content */}
      <div className="max-w-container mx-auto px-6 lg:px-8 relative z-10 w-full mb-10">
        <div className="max-w-4xl space-y-6">
          <h1 className="font-heading text-5xl md:text-6xl lg:text-[72px] font-extrabold leading-[1.05] tracking-tight text-dark flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="w-full block">Where Kolkata Meets</span>
            <span className="text-brand-green uppercase">OPEN SOURCE</span>
            <div className="inline-flex items-center gap-2 text-sm md:text-base font-semibold px-4 py-2 rounded-full border-2 border-brand-green bg-white text-brand-green shadow-sm mt-2 md:mt-0">
              <span className="w-4 h-4 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              </span>
              Date : 5th Dec 2026
            </div>
          </h1>

          <p className="text-gray-secondary text-lg leading-relaxed max-w-lg mt-6">
            Join developers, maintainers, students, and innovators for a day of talks, workshops, networking, and collaboration.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button onClick={openKonfHub} className="btn-primary text-base py-3.5 px-8 rounded-full shadow-lg">
              Register Now <ArrowRight size={18} />
            </button>
            <a href="#sponsors" className="btn-secondary text-base py-3.5 px-8 rounded-full border-gray-200 shadow-sm bg-white">
              Become a Sponsor
            </a>
          </div>
        </div>
      </div>

      {/* Background Image at the bottom spanning full width */}
      <div className="absolute bottom-0 left-0 w-full z-0 pointer-events-none">
        <img 
          src="/images/hero section image.png" 
          alt="Kolkata Skyline with Howrah Bridge and Victoria Memorial" 
          className="w-full h-auto block opacity-95" 
        />
      </div>
    </section>
  );
}
