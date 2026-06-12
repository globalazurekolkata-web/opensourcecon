import { ExternalLink } from 'lucide-react';
import { LinkedinIcon } from './icons/SocialIcons';
import { teamMembers } from '../data/team';

export default function Team() {
  return (
    <section id="team" className="py-20 lg:py-28 relative">
      <div className="max-w-container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <div className="section-tag mb-6">
            <span className="green-dot" />
            THE TEAM
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.1] tracking-tight mb-6 text-dark dark:text-white">
            Meet our{' '}
            <span className="text-brand-green">organizers</span>
          </h2>
          <p className="text-gray-secondary dark:text-gray-400 text-lg leading-relaxed">
            A passionate group of engineers and community builders making Bengal's biggest open source event a reality.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className={`card overflow-hidden hover:shadow-lg transition-all duration-300 group ${
                index === 4 ? 'sm:col-span-2 lg:col-span-1 max-w-sm mx-auto w-full' : ''
              }`}
            >
              {/* Photo */}
              <div className="relative overflow-hidden aspect-[4/5] bg-gray-100 dark:bg-[#1B253B]">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-lg hover:bg-white/30 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <LinkedinIcon size={14} />
                    LinkedIn
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <h4 className="font-heading font-bold text-sm text-dark dark:text-white mb-0.5">
                  {member.name}
                </h4>
                <p className="text-xs text-gray-secondary dark:text-gray-400 mb-0.5 leading-snug">
                  {member.role}
                </p>
                <p className="text-xs text-gray-secondary dark:text-gray-400 mb-2">
                  {member.org}
                </p>
                <span className="inline-block text-[10px] font-semibold px-2.5 py-1 rounded-full bg-brand-green/10 text-brand-green">
                  {member.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
