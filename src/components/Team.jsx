import TiltCard from './TiltCard';

const teamMembers = [
  { name: 'Arjun Das', role: 'Lead Organizer' },
  { name: 'Sneha Roy', role: 'Design Lead' },
  { name: 'Rahul Dey', role: 'Technical Lead' },
  { name: 'Tanisha Sen', role: 'Community Manager' },
  { name: 'Vikram Ghosh', role: 'Marketing Lead' },
  { name: 'Ananya Pal', role: 'Logistics Head' },
  { name: 'Sourav Bose', role: 'Sponsorship Lead' },
  { name: 'Ishita Mukherjee', role: 'Content Lead' },
  { name: 'Arijit Sen', role: 'Operations Lead' },
  { name: 'Riya Dutta', role: 'Volunteer Lead' },
];

export default function Team() {
  return (
    <section id="team" className="py-20 lg:py-28 relative">
      <div className="max-w-container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <div className="section-tag mb-6">
            <span className="green-dot" />
            OUR TEAM
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.1] tracking-tight mb-6 dark:text-white">
            The people behind the{' '}
            <span className="text-brand-green">movement</span>
          </h2>
          <p className="text-gray-secondary dark:text-gray-400 text-lg leading-relaxed">
            We're a diverse group of builders, dreamers, and problem solvers who believe in the power of open source and community.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left - Team Photo */}
          <div className="lg:col-span-4 relative">
            <div className="rounded-card overflow-hidden ">
              <img
                src="/images/Left_ Stylized Team Photo.png"
                alt="OpenSourceCon team"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right - Team Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {teamMembers.map((member) => (
              <TiltCard
                key={member.name}
                className="card overflow-hidden hover:shadow-md transition-all group flex flex-col h-full border border-gray-100 dark:border-white/5"
                maxTilt={10}
              >
                {/* Avatar area */}
                <div className="flex-1 bg-gray-50 dark:bg-[#1B253B] flex items-center justify-center p-4 min-h-[100px] group-hover:bg-gray-100 dark:group-hover:bg-[#202B44] transition-colors">
                  <div className="w-12 h-12 rounded-full bg-brand-green/10 dark:bg-brand-green/20 flex items-center justify-center text-brand-green font-bold text-lg shadow-sm dark:shadow-none">
                    {member.name.charAt(0)}
                  </div>
                </div>
                {/* Green Bottom Text Area */}
                <div className="bg-brand-green text-white p-3 text-center">
                  <h4 className="font-heading font-bold text-xs truncate">
                    {member.name}
                  </h4>
                  <p className="text-[10px] text-white/80 mt-0.5 truncate">{member.role}</p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
