import { X, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { openKonfHub } from '../utils/konfhub';

export default function PromoBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="promo-banner relative z-[60] bg-gradient-to-r from-brand-green via-[#5EE043] to-[#3DB82A] text-dark">
      <div className="max-w-container mx-auto px-6 lg:px-8 py-2.5 flex items-center justify-center gap-3 text-sm font-semibold">
        <Sparkles size={16} className="flex-shrink-0 animate-pulse" />
        <span>
          🎉 Community Discount is Live!{' '}
          <button
            onClick={openKonfHub}
            className="underline underline-offset-2 hover:no-underline font-bold bg-transparent border-none p-0 inline cursor-pointer text-dark hover:text-dark/80"
          >
            Register Now With Discount →
          </button>
        </span>
        <button
          onClick={() => setVisible(false)}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-lg hover:bg-dark/10 transition-colors"
          aria-label="Dismiss"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
}
