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

const row1Topics = [
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
  }
];

const row2Topics = [
  {
    title: 'Web Performance',
    desc: 'Fast experiences for everyone.',
    icon: Zap,
  },
  {
    title: 'Observability',
    desc: 'See more. Understand better.',
    icon: BarChart3,
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
    <section id="topics" className="py-14 lg:py-28 relative overflow-hidden bg-white dark:bg-[#0B1020]">
      <div className="absolute inset-0 grid-bg pointer-events-none z-0" />
      
      <div className="max-w-container mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Two-Column Header */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start mb-16">
          <div className="md:col-span-7 space-y-4 text-left">
            <div className="section-tag w-fit">
              <span className="green-dot" />
              TOPICS
            </div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] leading-[1.2]! tracking-tight text-dark dark:text-white">
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
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-[#0B1020] object-cover"
                  src="/images/team/SayantanK.jpeg"
                  alt="Attendee 1"
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-[#0B1020] object-cover"
                  src="/images/team/SohomC.jpeg"
                  alt="Attendee 2"
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-[#0B1020] object-cover"
                  src="/images/team/ShivamN.jpeg"
                  alt="Attendee 3"
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-[#0B1020] object-cover"
                  src="/images/team/KunalD.png"
                  alt="Attendee 4"
                />
              </div>
              <div className="text-left text-[12px] leading-tight font-semibold text-gray-500 dark:text-gray-400">
                <span className="text-dark dark:text-white font-extrabold">500+</span> Attendees
                <br />
                Community.
              </div>
            </div>
          </div>
          <div className="md:col-span-5 text-left md:pt-14">
            <p className="text-gray-secondary dark:text-gray-400 text-sm md:text-base leading-relaxed max-w-md">
              Sponsorship opportunities are open. Join us in making Bengal's biggest open source event a reality.
            </p>
          </div>
        </div>

        {/* Scrolling Topic Cards Container */}
        <div className="relative mt-20 mb-16 px-4">
          
          {/* Top Decorative handwritten note & arrow */}
          <div className="absolute right-[12%] top-[-80px] hidden md:flex items-center gap-2 select-none z-20">
                        {/* Arrow pointing down-left */}
            <svg className="w-10 h-10 text-brand-green/70 transform rotate-[10deg] translate-y-2" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M40,10 C30,12 15,18 12,32" />
              <path d="M8,26 L12,32 L18,28" />
            </svg>
            <div className="text-right">
              <p className="font-mono text-xs md:text-sm font-semibold text-gray-400/90 italic leading-tight rotate-[-4deg]">
                Open Source
                <br />
                Talks & Solutions
              </p>
            </div>

          </div>

          {/* Bottom Decorative handwritten note & arrow */}
          <div className="absolute left-[8%] bottom-[-75px] hidden md:flex items-center gap-2 select-none z-20">

            <div className="text-left">
              <p className="font-mono text-xs md:text-sm font-semibold text-gray-400/90 italic leading-tight rotate-[-4deg]">
                So many ideas.
                <br />
                So many conversations!
              </p>
            </div>
                        {/* Arrow pointing up-right */}
            <svg className="w-10 h-10 text-brand-green/70 transform rotate-[-10deg] -translate-y-2" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10,38 C20,36 35,30 38,16" />
              <path d="M32,20 L38,16 L40,24" />
            </svg>
          </div>

          <div className="space-y-2">
            {/* Row 1 Marquee (Scrolls Left) */}
            <div className="relative w-full overflow-hidden flex py-2"
                 style={{ 
                   WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
                   maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)' 
                 }}>
              <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-4">
                {[...row1Topics, ...row1Topics, ...row1Topics].map((topic, i) => {
                  const Icon = topic.icon;
                  return (
                    <div 
                      key={i}
                      className="w-[300px] shrink-0 p-4 bg-white dark:bg-[#131C31] border border-brand-green/20 dark:border-white/10 rounded-[12px] hover:border-brand-green/45 transition-all duration-300 flex items-center gap-3 cursor-pointer group"
                    >
                      <div className="w-12 h-12 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center flex-shrink-0 group-hover:bg-brand-green group-hover:text-white transition-colors duration-300">
                        <Icon size={24} />
                      </div>
                      <div className="text-left">
                        <h4 className="font-heading font-semibold text-[16px] text-dark dark:text-white leading-tight">
                          {topic.title}
                        </h4>
                        <p className="text-[12px] font-normal text-dark/70 dark:text-gray-500 mt-1 leading-tight">
                          {topic.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Row 2 Marquee (Scrolls Right) */}
            <div className="relative w-full overflow-hidden flex py-2"
                 style={{ 
                   WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
                   maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)' 
                 }}>
              <div 
                className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-4"
                style={{ animationDirection: 'reverse' }}
              >
                {[...row2Topics, ...row2Topics, ...row2Topics].map((topic, i) => {
                  const Icon = topic.icon;
                  return (
                    <div 
                      key={i}
                     className="w-[300px] shrink-0 p-4 bg-white dark:bg-[#131C31] border border-brand-green/20 dark:border-white/10 rounded-[12px] hover:border-brand-green/45 transition-all duration-300 flex items-center gap-3 cursor-pointer group"
                    >
                            <div className="w-12 h-12 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center flex-shrink-0 group-hover:bg-brand-green group-hover:text-white transition-colors duration-300">
                        <Icon size={24} />
                      </div>
                           <div className="text-left">
                        <h4 className="font-heading font-semibold text-[16px] text-dark dark:text-white leading-tight">
                          {topic.title}
                        </h4>
                        <p className="text-[12px] font-normal text-dark/70 dark:text-gray-500 mt-1 leading-tight">
                          {topic.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
}
