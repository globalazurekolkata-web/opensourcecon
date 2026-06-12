import { X, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { openKonfHub } from '../utils/konfhub';

export default function PromoBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative z-[60] w-full bg-dark text-white border-b border-brand-green/15">
      <div className="max-w-full mx-auto px-6 md:px-12 lg:px-16 py-2.5 flex items-center justify-center gap-3 text-xs md:text-sm">
        {/* Launch Pill */}
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-extrabold tracking-wider uppercase bg-brand-green/10 text-brand-green border border-brand-green/20 flex-shrink-0">
          Discount
        </span>
        
        {/* Message */}
        <div className="flex items-center gap-2 flex-wrap justify-center text-center text-white/90 font-medium">
          <span>Kolkata's pilot launch offer is active.</span>
          <button
            onClick={openKonfHub}
            className="inline-flex items-center gap-1 font-bold text-brand-green hover:text-[#5EE043] transition-colors group/banner-btn"
          >
            <span>Register with Community Discount</span>
            <ArrowRight size={14} className="transition-transform duration-200 group-hover/banner-btn:translate-x-1" />
          </button>
        </div>

        {/* Close Button */}
        <button
          onClick={() => setVisible(false)}
          className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 p-1.5 rounded-lg text-white/40 hover:text-white hover:bg-white/10 transition-colors flex-shrink-0"
          aria-label="Dismiss"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
}
