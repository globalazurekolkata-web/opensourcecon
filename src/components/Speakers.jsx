import { ArrowRight, Mic2, Presentation, Award } from 'lucide-react';
import TiltCard from './TiltCard';

const speakerSlots = [
  {
    role: 'Keynote Speaker',
    color: 'bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400',
  },
  {
    role: 'Technical Talk',
    color: 'bg-purple-100 text-purple-700 dark:bg-purple-500/10 dark:text-purple-400',
  },
  {
    role: 'Workshop Lead',
    color: 'bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400',
  },
  {
    role: 'Lightning Talk',
    color: 'bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-brand-green',
  },
];

export default function Speakers() {
  return (
    <section id="speakers" className="py-20 lg:py-28 relative">
      <div className="max-w-container mx-auto px-6 lg:px-8">
        {/* Top Content */}
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start mb-16">
          {/* Left */}
          <div className="space-y-6">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.1] tracking-tight text-dark dark:text-white">
              Voices of the
              <br />
              <span className="text-brand-green">open source</span>
              <br />
              world
            </h2>

            <p className="text-gray-secondary dark:text-gray-400 text-lg leading-relaxed max-w-md">
              We're curating an exceptional lineup of maintainers, engineers, and community leaders. Speaker announcements coming soon.
            </p>

            {/* Stats */}
            <div className="flex gap-8 pt-2">
              <div>
                <div className="flex items-center gap-2">
                  <Mic2 size={18} className="text-brand-green" />
                  <span className="font-heading font-bold text-xl text-dark dark:text-white">40+</span>
                </div>
                <span className="text-gray-secondary dark:text-gray-400 text-sm">Speakers</span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <Presentation size={18} className="text-brand-green" />
                  <span className="font-heading font-bold text-xl text-dark dark:text-white">15+</span>
                </div>
                <span className="text-gray-secondary dark:text-gray-400 text-sm">Sessions</span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <Award size={18} className="text-brand-green" />
                  <span className="font-heading font-bold text-xl text-dark dark:text-white">Industry</span>
                </div>
                <span className="text-gray-secondary dark:text-gray-400 text-sm">Experts</span>
              </div>
            </div>
          </div>

          {/* Right - Speaker Collage */}
          <div className="relative">
            <div className="rounded-card overflow-hidden">
              <img
                src="/images/Collage Image Area.png"
                alt="Speaker collage"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* TBA Speaker Slots */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-dark dark:text-white">— Speaker Slots</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {speakerSlots.map((slot, i) => (
              <TiltCard
                key={i}
                className="card p-5 text-center hover:shadow-md transition-all group"
              >
                {/* Avatar placeholder */}
                <div className={`w-16 h-16 rounded-full ${slot.color} mx-auto mb-4 flex items-center justify-center`}>
                  <span className="text-3xl font-bold">?</span>
                </div>
                <h4 className="font-heading font-bold text-sm mb-0.5 text-dark dark:text-white">TBA</h4>
                <p className="text-gray-secondary dark:text-gray-400 text-xs mb-1">{slot.role}</p>
                <p className="text-gray-secondary dark:text-gray-400 text-xs mb-3">Announcement Soon</p>
                <span className="inline-block text-[10px] font-semibold px-2.5 py-1 rounded-full bg-brand-green/10 text-brand-green">
                  Coming Soon
                </span>
              </TiltCard>
            ))}
          </div>
        </div>

        {/* CFP CTA Banner */}
        <div className="card bg-gradient-to-r from-gray-50 to-white dark:from-[#131C31] dark:to-[#131C31]/40 p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
            <div>
              <h3 className="font-heading font-bold text-lg md:text-xl mb-1 text-dark dark:text-white">
                🎤 CFP is Open!
              </h3>
              <p className="text-gray-secondary dark:text-gray-400 text-sm">
                Are you an open source contributor, maintainer, or enthusiast with something to share?
                <br />
                We'd love to have you speak at Open Source Con Kolkata.
              </p>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <a
                href="https://forms.gle/tFUzkFuCyb1heshu9"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm py-2.5 px-5"
              >
                Submit Your Talk Proposal <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
