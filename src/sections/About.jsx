import { RiGroupLine, RiMicLine, RiGlobalLine, RiCalendarLine, RiSparklingLine, RiBookOpenLine, RiCodeSSlashLine, RiShareForwardLine, RiHandHeartLine } from 'react-icons/ri';
import CountUp from '../components/ui/CountUp';

const features = [
  { label: 'Learn', desc: 'Gain insights from maintainers & industry leaders', icon: RiBookOpenLine },
  { label: 'Build', desc: 'Create projects and collaborate in hands-on workshops', icon: RiCodeSSlashLine },
  { label: 'Share', desc: 'Tell your story and inspire the community', icon: RiShareForwardLine },
  { label: 'Impact', desc: 'Contribute to projects that matter globally', icon: RiHandHeartLine },
];

const stats = [
  { icon: RiGroupLine, target: 500, suffix: '+', label: 'Attendees' },
  { icon: RiMicLine, target: 50, suffix: '+', label: 'Speakers' },
  { icon: RiGlobalLine, target: 10, suffix: '+', label: 'Communities' },
  { icon: RiCalendarLine, target: 1, suffix: ' Day', label: 'of learning' },
  { icon: RiSparklingLine, target: 100, suffix: '+', label: 'Opportunities' },
];

export default function About() {
  return (
    <section id="about" className="relative flex flex-col pt-0 mt-[-1px]">
      {/* Dark background top half */}
      <div className="w-full bg-gradient-to-b from-[#0a1208] via-[#142611] to-black pt-16 pb-32 md:pt-20 md:pb-40 px-4 sm:px-6 lg:px-8 relative z-0">
        
        {/* Dark grid pattern */}
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none z-0" 
          style={{
            backgroundImage: 'linear-gradient(rgba(86, 214, 75, 0.2) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(86, 214, 75, 0.2) 1.5px, transparent 1.5px)',
            backgroundSize: '72px 72px'
          }}
        />
        
        {/* Stats Strip - positioned to overlap the top edge responsively */}
        <div className="relative -mt-24 sm:-mt-28 md:-mt-32 mb-10 md:mb-16 w-full max-w-container mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="bg-white rounded-xl md:rounded-[2rem] shadow-2xl flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-between gap-y-8 gap-x-4 py-8 px-6 md:py-12 md:px-10 border border-gray-100/50">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className={`text-center px-4 flex-1 min-w-[130px] sm:min-w-[160px] lg:min-w-0 flex flex-col items-center ${
                    i < stats.length - 1 ? 'lg:border-r border-gray-100 lg:border-gray-500/20 dark:border-white/10' : ''
                  }`}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full custom-gradient flex items-center justify-center mb-3 sm:mb-4 text-white">
                    <Icon size={18} className="sm:hidden" />
                    <Icon size={20} className="hidden sm:block" />
                  </div>
                  <CountUp target={stat.target} suffix={stat.suffix} className="font-heading font-bold text-xl sm:text-2xl lg:text-3xl text-dark" />
                  <div className="text-gray-400 text-[10px] sm:text-xs md:text-sm mt-1 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* About Heading (Centered, White text) */}
        <div className="text-center max-w-3xl mx-auto mt-24 md:mt-16 mb-14 md:mb-12 space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium px-5 py-1.5 sm:px-6 sm:py-2 rounded-full border border-brand-green/40 text-white bg-transparent">
            About the Event
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.3]! md:leading-[1.4]! tracking-tight text-white">
            <span className="font-medium">A Community. An Idea.</span>
            <br />
            <span className="text-gradient uppercase tracking-wide font-bold">INFINITE IMPACT.</span>
          </h2>
          
          <div className="w-12 h-1 md:w-16 bg-brand-green mx-auto rounded-full mt-4 md:mt-6 opacity-80" />

          <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto mt-4 md:mt-6 px-4">
            The Open Source Conference Kolkata is more than an event — it's a celebration of collaboration, knowledge sharing, and building a stronger open source ecosystem together.
          </p>
        </div>
      </div>

      {/* Feature Cards — overlapping the dark/light boundary */}
      <div className="relative z-10 w-full bg-white">
        <div className="absolute inset-0 grid-bg pointer-events-none z-0" />

        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 -mt-20 md:-mt-20 pb-16 md:pb-20 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
            {features.map((feature, idx) => {
              const CardIcon = feature.icon;
              return (
                <div
                  key={idx}
                  className="group relative bg-white rounded-xl sm:rounded-2xl p-5 sm:p-7 flex flex-col items-start text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden"
                  style={{
                    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.03)',
                  }}
                >
                  {/* Green top border */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-xl sm:rounded-t-2xl custom-gradient" />

                  {/* Icon */}
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-green-50 flex items-center justify-center mb-4 sm:mb-5 text-green-600">
                    <CardIcon size={18} className="sm:hidden" />
                    <CardIcon size={20} className="hidden sm:block" />
                  </div>

                  <h4 className="font-heading font-bold text-sm sm:text-base lg:text-lg mb-1 sm:mb-1.5 text-dark">{feature.label}</h4>
                  <p className="text-gray-400 text-[11px] sm:text-xs lg:text-sm leading-relaxed">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
