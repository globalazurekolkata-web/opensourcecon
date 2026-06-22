import { Cloud, Terminal, Bot, Lock, Globe, Handshake, GraduationCap, MapPin } from 'lucide-react';

const topicsData = [
  {
    title: 'Cloud Native & DevOps',
    desc: 'Kubernetes, containers, CI/CD, and infrastructure as code',
    icon: Cloud,
  },
  {
    title: 'Linux & Systems',
    desc: 'Kernel, embedded, distros, and system programming',
    icon: Terminal,
  },
  {
    title: 'AI & Open Models',
    desc: 'Open source AI, LLMs, ML frameworks and ethics',
    icon: Bot,
  },
  {
    title: 'Security & Privacy',
    desc: 'OSS security, supply chain, cryptography, and compliance',
    icon: Lock,
  },
  {
    title: 'Web & Developer Tools',
    desc: 'Frontend, backend, APIs, databases, and tooling',
    icon: Globe,
  },
  {
    title: 'Community & Governance',
    desc: 'How to build, sustain, and grow open source communities',
    icon: Handshake,
  },
  {
    title: 'Student & Beginner Track',
    desc: 'Getting started with open source contributions and GSoC',
    icon: GraduationCap,
  },
  {
    title: 'Open Source in India',
    desc: 'Local ecosystem, government initiatives, and FOSS adoption',
    icon: MapPin,
  },
];

export default function Topics() {
  return (
    <section id="topics" className="py-20 lg:py-28 relative overflow-hidden bg-white">
      <div className="absolute inset-0 grid-bg pointer-events-none z-0" />
      
      <div className="max-w-container mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Two-Column Header */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-12 lg:mb-16">
          <div className="lg:col-span-7 space-y-4 lg:space-y-6">
            <div className="section-tag w-fit">
              <span className="green-dot" />
              THE TOPICS
            </div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] leading-[1.3]! lg:leading-[1.4]! tracking-tight text-dark">
              <span className="font-medium">Let's talk about what</span>
              <br />
              <span className="text-gradient uppercase font-bold">MATTERS</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-gray-secondary text-base md:text-lg leading-relaxed max-w-md">
              Explore a wide range of topics spanning across different domains of open-source technology.
            </p>
          </div>
        </div>

        {/* Uniform 4x2 / 2x4 Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {topicsData.map((item, i) => {
            const Icon = item.icon;
            return (
              <div 
                key={i} 
                className="group rounded-2xl sm:rounded-3xl p-4 sm:p-6 flex flex-col justify-start transition-all duration-300 bg-[#0A0F1A] border border-gray-800/60 hover:border-brand-green/40 shadow-sm hover:shadow-lg hover:-translate-y-1 min-h-[150px] sm:min-h-[220px]"
              >
                <div className="text-brand-green mb-3 sm:mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:text-[#6ae05e]">
                  <Icon size={28} strokeWidth={1.5} className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                
                <h3 className="font-heading font-bold text-[13px] sm:text-lg mb-1 sm:mb-2 text-white leading-tight">
                  {item.title}
                </h3>
                <p className="text-[10px] sm:text-sm leading-relaxed text-gray-400">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
