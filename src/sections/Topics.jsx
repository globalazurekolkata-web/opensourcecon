import { 
  Cloud, 
  Terminal, 
  Lightbulb, 
  Heart, 
  Zap, 
  BarChart3, 
  Cpu, 
  Lock, 
  GitBranch, 
  Briefcase, 
  Users 
} from 'lucide-react';

const allTopics = [
  {
    title: 'Cloud Native',
    desc: 'Scalable. Resilient. Open.',
    icon: Cloud,
  },
  {
    title: 'Linux & Systems',
    desc: 'The backbone of open.',
    icon: Terminal,
  },
  {
    title: 'AI & Open Source',
    desc: 'Building the future, together.',
    icon: Lightbulb,
  },
  {
    title: 'Sustainability in Tech',
    desc: 'Build sustainably. Impact globally.',
    icon: Heart,
  },
  {
    title: 'Security & Privacy',
    desc: 'Secure code. Protected users.',
    icon: Lock,
  },
  {
    title: 'Web Performance',
    desc: 'Fast experiences for everyone.',
    icon: Zap,
  },
  {
    title: 'AI Agents & LLMs',
    desc: 'Intelligent. Open. Responsible.',
    icon: Cpu,
  },
  {
    title: 'DevOps & Automation',
    desc: 'Automate everything.',
    icon: GitBranch,
  },
  {
    title: 'Open Source Careers',
    desc: 'Grow your skills & career.',
    icon: Briefcase,
  },
  {
    title: 'Community Building',
    desc: 'Grow together as one.',
    icon: Users,
  }
];

export default function Topics() {
  return (
    <section id="topics" className="py-14 lg:py-28 relative overflow-hidden bg-[#FAFCF9]">
      <div className="absolute inset-0 grid-bg pointer-events-none z-0 opacity-50" />
      
      <div className="max-w-container mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Two-Column Header */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start mb-16">
          <div className="md:col-span-7 space-y-4 text-left">
            <div className="section-tag w-fit">
              <span className="green-dot" />
              TOPICS
            </div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] leading-[1.2]! tracking-tight text-dark">
              <span className="font-medium">Let's talk about what</span>
              <br />
              <span className="text-gradient uppercase font-bold relative inline-block">
                MATTERS
                <span className="absolute bottom-[-4px] left-[15%] right-[25%] h-[3px] bg-brand-green rounded-full"></span>
              </span>
            </h2>
            
            {/* Attendees Avatar Stack */}
            <div className="flex items-center gap-3 pt-4">
              <div className="flex -space-x-2.5 overflow-hidden">
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-[#FAFCF9] object-cover"
                  src="/images/team/SayantanK.jpeg"
                  alt="Attendee 1"
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-[#FAFCF9] object-cover"
                  src="/images/team/SohomC.jpeg"
                  alt="Attendee 2"
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-[#FAFCF9] object-cover"
                  src="/images/team/ShivamN.jpeg"
                  alt="Attendee 3"
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-[#FAFCF9] object-cover"
                  src="/images/team/KunalD.png"
                  alt="Attendee 4"
                />
              </div>
              <div className="text-left text-[12px] leading-tight font-semibold text-gray-500">
                <span className="text-dark font-extrabold">500+</span> Attendees
                <br />
                Community.
              </div>
            </div>
          </div>
          <div className="md:col-span-5 text-left md:pt-14">
            <p className="text-gray-secondary text-sm md:text-base leading-relaxed max-w-md">
              Sponsorship opportunities are open. Join us in making Bengal's biggest open source event a reality.
            </p>
          </div>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-5 mt-16">
          {allTopics.map((topic, i) => {
            const Icon = topic.icon;
            return (
              <div 
                key={i}
                className="group p-4 md:p-6 bg-[#131C31] border border-[#1e293b] rounded-[20px] hover:border-brand-green/50 hover:shadow-xl hover:shadow-brand-green/10 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 cursor-pointer"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 mb-4 md:mb-6 rounded-xl bg-[#1C2640] border border-white/5 text-brand-green flex items-center justify-center group-hover:bg-brand-green group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:-rotate-3">
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <div className="text-left">
                  <h4 className="font-heading font-extrabold text-[14px] md:text-[16px] text-white leading-tight mb-1.5">
                    {topic.title}
                  </h4>
                  <p className="text-[12px] md:text-[13px] text-gray-400 leading-snug font-medium line-clamp-2">
                    {topic.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
