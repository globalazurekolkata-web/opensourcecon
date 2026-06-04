import { ArrowRight, Mic2, Presentation, Award, ExternalLink } from 'lucide-react';
import TiltCard from './TiltCard';

const speakers = [
  {
    name: 'Ankan Saha',
    role: 'Core Maintainer',
    org: 'Open Source India',
    topic: 'OSS Governance',
    color: 'bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400',
  },
  {
    name: 'Priya Raj',
    role: 'DevRel Lead',
    org: 'GitHub India',
    topic: 'Community Growth',
    color: 'bg-purple-100 text-purple-700 dark:bg-purple-500/10 dark:text-purple-400',
  },
  {
    name: 'Sagar Upaity',
    role: 'Platform Engineer',
    org: 'Google Cloud',
    topic: 'Cloud Native',
    color: 'bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400',
  },
  {
    name: 'Ritu Sharma',
    role: 'ML Engineer',
    org: 'Hugging Face',
    topic: 'AI & Open Source',
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
              Learn from the
              <br />
              best in
              <br />
              <span className="text-brand-green">open source.</span>
            </h2>

            <p className="text-gray-secondary dark:text-gray-400 text-lg leading-relaxed max-w-md">
              We bring together amazing speakers — developers, researchers, creators, and community leaders who are building the future of open source.
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

        {/* Featured Speakers */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-dark dark:text-white">— Featured Speakers</span>
            </div>
            <a
              href="#speakers"
              className="text-sm font-semibold text-brand-green hover:text-brand-green-dark flex items-center gap-1 transition-colors"
            >
              View all speakers <ArrowRight size={14} />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {speakers.map((speaker) => (
              <TiltCard
                key={speaker.name}
                className="card p-5 text-center hover:shadow-md transition-all group"
              >
                {/* Avatar */}
                <div className={`w-16 h-16 rounded-full ${speaker.color} mx-auto mb-4 flex items-center justify-center`}>
                  <span className="text-2xl font-bold">
                    {speaker.name.charAt(0)}
                  </span>
                </div>
                <h4 className="font-heading font-bold text-sm mb-0.5 text-dark dark:text-white">{speaker.name}</h4>
                <p className="text-gray-secondary dark:text-gray-400 text-xs mb-1">{speaker.role}</p>
                <p className="text-gray-secondary dark:text-gray-400 text-xs mb-3">{speaker.org}</p>
                <span className="inline-block text-[10px] font-semibold px-2.5 py-1 rounded-full bg-brand-green/10 text-brand-green">
                  {speaker.topic}
                </span>
                <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink size={14} className="text-gray-400 mx-auto" />
                </div>
              </TiltCard>
            ))}
          </div>
        </div>

        {/* Speaker CTA Strip */}
        <div className="card bg-gradient-to-r from-gray-50 to-white dark:from-[#131C31] dark:to-[#131C31]/40 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading font-bold text-lg md:text-xl mb-1 text-dark dark:text-white">
              Share your ideas. Inspire thousands.
            </h3>
            <p className="text-gray-secondary dark:text-gray-400 text-sm">
              We're looking for passionate speakers to share their knowledge at OpenSourceCon.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <a href="#register" className="btn-primary text-sm py-2.5 px-5">
              Become a Speaker <ArrowRight size={14} />
            </a>
            <a href="#" className="text-sm font-semibold text-gray-secondary dark:text-gray-400 hover:text-dark dark:hover:text-white transition-colors">
              Speaker Guidelines
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
