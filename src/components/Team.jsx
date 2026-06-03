const teamMembers = [
  { name: 'Arjun Das', role: 'Lead Organizer' },
  { name: 'Sneha Roy', role: 'Design Lead' },
  { name: 'Rahul Dey', role: 'Technical Lead' },
  { name: 'Tanisha Sen', role: 'Community Manager' },
  { name: 'Vikram Ghosh', role: 'Marketing Lead' },
  { name: 'Ananya Pal', role: 'Logistics Head' },
  { name: 'Sourav Bose', role: 'Sponsorship Lead' },
  { name: 'Ishita Mukherjee', role: 'Content Lead' },
];

export default function Team() {
  return (
    <section id="team" className="py-20 lg:py-28 relative">
      <div className="max-w-container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-tag mx-auto mb-6">
            <span className="green-dot" />
            OUR TEAM
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.1] tracking-tight mb-6">
            The people behind the{' '}
            <span className="text-brand-green">movement</span>
          </h2>
          <p className="text-gray-secondary text-lg leading-relaxed max-w-2xl mx-auto">
            We're a diverse group of builders, dreamers, and problem solvers who believe in the power of open source and community.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left - Team Photo */}
          <div className="relative">
            <div className="rounded-card overflow-hidden">
              <img
                src="/images/Left_ Stylized Team Photo.png"
                alt="OpenSourceCon team"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right - Team Grid */}
          <div className="grid grid-cols-2 gap-4">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="card overflow-hidden hover:shadow-md transition-all group"
              >
                <div className="p-4 pb-3">
                  {/* Avatar placeholder */}
                  <div className="w-12 h-12 rounded-full bg-gray-100 mb-3 flex items-center justify-center">
                    <span className="text-lg font-bold text-gray-400">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <h4 className="font-heading font-bold text-sm mb-0.5">
                    {member.name}
                  </h4>
                  <p className="text-gray-secondary text-xs">{member.role}</p>
                </div>
                <div className="h-1 bg-brand-green/30 group-hover:bg-brand-green transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
