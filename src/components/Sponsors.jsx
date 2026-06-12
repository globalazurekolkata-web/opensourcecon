import { ArrowRight, FileText, Plus } from 'lucide-react';

const tiers = [
  {
    name: 'Diamond Sponsor',
    label: 'DIAMOND',
    size: 'large',
    color: 'from-blue-50 to-purple-50 dark:from-blue-500/5 dark:to-purple-500/5',
    borderColor: 'border-blue-200 dark:border-blue-500/20',
  },
  {
    name: 'Gold Sponsor',
    label: 'GOLD',
    size: 'medium',
    color: 'from-amber-50 to-yellow-50 dark:from-amber-500/5 dark:to-yellow-500/5',
    borderColor: 'border-amber-200 dark:border-amber-500/20',
  },
  {
    name: 'Gold Sponsor',
    label: 'GOLD',
    size: 'medium',
    color: 'from-amber-50 to-yellow-50 dark:from-amber-500/5 dark:to-yellow-500/5',
    borderColor: 'border-amber-200 dark:border-amber-500/20',
  },
  {
    name: 'Gold Sponsor',
    label: 'GOLD',
    size: 'medium',
    color: 'from-amber-50 to-yellow-50 dark:from-amber-500/5 dark:to-yellow-500/5',
    borderColor: 'border-amber-200 dark:border-amber-500/20',
  },
];

const smallTiers = [
  { name: 'Silver', label: 'SILVER', color: 'border-gray-300 dark:border-gray-500/20' },
  { name: 'Silver', label: 'SILVER', color: 'border-gray-300 dark:border-gray-500/20' },
  { name: 'Silver', label: 'SILVER', color: 'border-gray-300 dark:border-gray-500/20' },
  { name: 'Bronze', label: 'BRONZE', color: 'border-orange-200 dark:border-orange-500/20' },
  { name: 'Bronze', label: 'BRONZE', color: 'border-orange-200 dark:border-orange-500/20' },
  { name: 'Bronze', label: 'BRONZE', color: 'border-orange-200 dark:border-orange-500/20' },
];

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-20 lg:py-28 relative">
      <div className="max-w-container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <div className="section-tag mb-6">
            <span className="green-dot" />
            SPONSORS
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.1] tracking-tight mb-6 text-dark dark:text-white">
            Backed by those who
            <br />
            believe in{' '}
            <span className="text-brand-green">open source</span>
          </h2>
          <p className="text-gray-secondary dark:text-gray-400 text-lg leading-relaxed">
            Sponsorship opportunities are open. Join us in making Bengal's biggest open source event a reality.
          </p>
        </div>

        {/* Diamond Tier */}
        <div className="mb-8">
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">DIAMOND</p>
          <div className="sponsor-slot-card bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-500/5 dark:to-purple-500/5 border border-blue-200 dark:border-blue-500/20 rounded-2xl p-10 flex flex-col items-center justify-center text-center min-h-[140px] hover:shadow-md transition-all group cursor-pointer">
            <div className="w-12 h-12 rounded-full border-2 border-dashed border-blue-300 dark:border-blue-500/30 flex items-center justify-center mb-3 group-hover:border-brand-green group-hover:bg-brand-green/10 transition-colors">
              <Plus size={20} className="text-blue-300 dark:text-blue-500/50 group-hover:text-brand-green transition-colors" />
            </div>
            <span className="text-sm font-semibold text-gray-400 group-hover:text-dark dark:group-hover:text-white transition-colors">
              Your Company Here
            </span>
          </div>
        </div>

        {/* Gold Tier */}
        <div className="mb-8">
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">GOLD</p>
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="sponsor-slot-card bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-500/5 dark:to-yellow-500/5 border border-amber-200 dark:border-amber-500/20 rounded-2xl p-8 flex flex-col items-center justify-center text-center min-h-[100px] hover:shadow-md transition-all group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full border-2 border-dashed border-amber-300 dark:border-amber-500/30 flex items-center justify-center mb-2 group-hover:border-brand-green group-hover:bg-brand-green/10 transition-colors">
                  <Plus size={16} className="text-amber-300 dark:text-amber-500/50 group-hover:text-brand-green transition-colors" />
                </div>
                <span className="text-xs font-semibold text-gray-400 group-hover:text-dark dark:group-hover:text-white transition-colors">Gold Sponsor</span>
              </div>
            ))}
          </div>
        </div>

        {/* Silver + Bronze Tier */}
        <div className="mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">SILVER & BRONZE</p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {smallTiers.map((tier, i) => (
              <div
                key={i}
                className={`sponsor-slot-card border ${tier.color} rounded-xl p-4 flex flex-col items-center justify-center text-center min-h-[80px] hover:shadow-sm transition-all group cursor-pointer bg-gray-50/50 dark:bg-white/[0.02]`}
              >
                <div className="w-8 h-8 rounded-full border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center mb-1.5 group-hover:border-brand-green transition-colors">
                  <Plus size={12} className="text-gray-300 dark:text-gray-600 group-hover:text-brand-green transition-colors" />
                </div>
                <span className="text-[10px] font-semibold text-gray-400">{tier.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Strip */}
        <div className="card p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-gray-50 to-white dark:from-[#131C31] dark:to-[#131C31]/40">
          <div>
            <h3 className="font-heading font-bold text-lg md:text-xl mb-1 text-dark dark:text-white">
              Become a Sponsor
            </h3>
            <p className="text-gray-secondary dark:text-gray-400 text-sm">
              Reach 800+ developers, CTOs, businesses and tech leaders in Bengal. Multiple tiers starting from ₹25,000.
            </p>
          </div>
          <a
            href="https://drive.google.com/file/d/1RVrIZV0d6UskRM9k62cOlUU1A3J2pBg4/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm py-2.5 px-5 flex-shrink-0"
          >
            <FileText size={16} />
            Sponsorship Deck Is Live <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
