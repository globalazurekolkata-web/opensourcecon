import { Sparkles } from 'lucide-react';

export default function PromoBanner() {
  const openKonfHub = (e) => {
    e.preventDefault();
    const kBtn = document.querySelector('#konfhub-widget-trigger button, #konfhub-widget-trigger a');
    if (kBtn) {
      kBtn.click();
    } else {
      // Fallback url
      window.open('https://opensourcecon.in/core.html', '_blank');
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 min-h-[44px] h-auto py-2.5 sm:py-0 z-[60] bg-[#070c06] text-white shadow-lg flex items-center justify-center border-b border-brand-green/25 backdrop-blur-md">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-green/5 via-[#22c55e]/5 to-brand-green/5 pointer-events-none" />
      
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center text-xs sm:text-sm font-medium w-full relative">
        <div className="flex items-center justify-center gap-3 select-none">

          <span className="text-gray-300 leading-relaxed sm:leading-none text-center sm:text-left py-0.5 sm:py-0">
            {/* Desktop & Tablet Text */}
            <span className="hidden sm:inline">
              Join us at <strong className="text-white font-extrabold">Dhono Dhanyo Auditorium</strong>, Kolkata on Dec 05! <strong className="text-brand-green font-extrabold">Early Birds</strong> selling fast!{' '}
            </span>
            {/* Mobile Text */}
            <span className="sm:hidden">
              🏛️ <strong className="text-white font-extrabold">Dhono Dhanyo, Kolkata</strong>. <strong className="text-brand-green font-extrabold">Early Birds</strong> selling fast!{' '}
            </span>
            
            <a
              href="#register"
              onClick={openKonfHub}
              className="inline-flex items-center gap-1 ml-1.5 text-brand-green hover:text-brand-green-light font-bold underline underline-offset-2 hover:no-underline transition-colors cursor-pointer whitespace-nowrap"
            >
              Secure Your Spot <Sparkles size={12} className="inline text-brand-green" />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
