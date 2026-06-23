import { X, Sparkles } from 'lucide-react';
import { useState } from 'react';

export default function PromoBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="promo-banner relative z-[60] bg-gradient-to-r from-brand-green via-[#5EE043] to-[#3DBF2E] text-dark">
      <div className="max-w-container mx-auto px-6 lg:px-8 py-2.5 flex items-center justify-center gap-3 text-sm font-semibold">
        <Sparkles size={16} className="flex-shrink-0 animate-pulse" />
        <span>
          🎉 Community Discount is Live!{' '}
          <a
            href="https://opensourcecon.in/core.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:no-underline font-bold"
          >
            Register Now With Discount →
          </a>
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
