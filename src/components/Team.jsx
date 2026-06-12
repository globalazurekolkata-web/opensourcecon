import { ExternalLink } from 'lucide-react';

const teamMembers = [
  {
    name: 'Sayantan Karmakar',
    role: 'Platform DevOps Engineer (Kubernetes)',
    org: 'Motorola Solutions',
    tag: 'Golden Kubestronaut',
    photo: '/images/team/SayantanK.jpeg',
    linkedin: 'https://www.linkedin.com/in/sayantan-karmakar-a87091144/',
  },
  {
    name: 'Soham Chakraborty',
    role: 'Site Reliability Engineer',
    org: 'Sematext Group',
    tag: 'Cloud-native',
    photo: '/images/team/SohomC.jpeg',
    linkedin: 'https://www.linkedin.com/in/soham-chakraborty-31136514/',
  },
  {
    name: 'Kunal Das',
    role: 'Developer Advocate APAC',
    org: 'CastAI',
    tag: 'Data platforms',
    photo: '/images/team/KunalD.png',
    linkedin: 'https://www.linkedin.com/in/kunaldaskd/',
  },
  {
    name: 'Kazi Haque',
    role: 'Founder',
    org: 'Callchimp.ai',
    tag: 'Zero Trust',
    photo: '/images/team/KaziH.jpeg',
    linkedin: 'https://www.linkedin.com/in/haquekazi/',
  },
  {
    name: 'Shivam Nandy',
    role: 'Co-Founder & CEO',
    org: 'Chapter',
    tag: 'Distributed sys.',
    photo: '/images/team/ShivamN.jpeg',
    linkedin: 'https://www.linkedin.com/in/shivam-nandy-hyphen/',
  },
];

const LinkedinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
);

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
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="card overflow-hidden hover:shadow-lg transition-all duration-300 group"
            >
              {/* Photo */}
              <div className="relative overflow-hidden aspect-[4/5] bg-gray-100 dark:bg-[#1B253B]">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
                    <LinkedinIcon />
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
