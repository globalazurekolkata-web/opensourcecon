import { Users, Mic2, Network, Calendar, Sparkles } from 'lucide-react';
import CountUp from './CountUp';

const features = [
  { label: 'Learn', desc: 'Gain insights from maintainers & industry leaders' },
  { label: 'Learn', desc: 'Gain insights from maintainers & industry leaders' }, // Duplicated in design
  { label: 'Share', desc: 'Tell your story and inspire the community' },
  { label: 'Impact', desc: 'Contribute to projects that matter globally' },
];

const stats = [
  { icon: Users, target: 500, suffix: '+', label: 'Attendees' },
  { icon: Mic2, target: 50, suffix: '+', label: 'Speakers' },
  { icon: Network, target: 10, suffix: '+', label: 'Communities' },
  { icon: Calendar, target: 1, suffix: ' Day', label: 'of learning' },
  { icon: Sparkles, target: 100, suffix: '+', label: 'Opportunities' },
];

export default function About() {
  return (
    <section id="about" className="relative flex flex-col pt-0 mt-[-1px]">
      {/* Dark background top half */}
      <div className="w-full bg-gradient-to-b from-[#142611] to-black pt-20 pb-40 px-6 lg:px-8 relative z-0">
        
        {/* Stats Strip - positioned to overlap the top edge */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl px-4">
          <div className="bg-white rounded-[2rem] shadow-2xl flex flex-wrap items-center justify-between gap-4 py-8 px-10 border border-gray-100/50">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="text-center px-2 flex-1 min-w-[120px] flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-brand-green/20 flex items-center justify-center mb-3 text-brand-green">
                    <Icon size={18} />
                  </div>
                  <CountUp target={stat.target} suffix={stat.suffix} className="font-heading font-extrabold text-2xl lg:text-3xl text-dark" />
                  <div className="text-gray-500 text-xs mt-1 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* About Heading (Centered, White text) */}
        <div className="text-center max-w-3xl mx-auto mt-16 space-y-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-1.5 rounded-full border border-brand-green/40 text-white bg-transparent">
            About the Event
          </div>

          <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.1] tracking-tight text-white">
            A Community. An Idea.
            <br />
            <span className="text-brand-green uppercase tracking-wide">INFINITE IMPACT.</span>
          </h2>
          
          <div className="w-16 h-1 bg-brand-green mx-auto rounded-full mt-6 opacity-80" />

          <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mt-6">
            The Open Source Conference Kolkata is more than an event — it's a celebration of collaboration, knowledge sharing, and building a stronger open source ecosystem together.
          </p>
        </div>
      </div>

      {/* Feature Cards Grid overlapping the dark/light boundary */}
      <div className="relative z-10 w-full bg-white">
        <div className="absolute inset-0 grid-bg pointer-events-none z-0" />
        
        <div className="max-w-container mx-auto px-6 lg:px-8 -mt-20 pb-20 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 flex flex-col items-start transition-transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-green/10 flex items-center justify-center mb-6">
                  <div className="w-5 h-5 bg-brand-green text-white rounded-full flex items-center justify-center text-xs font-bold font-serif italic">i</div>
                </div>
                <h4 className="font-heading font-bold text-lg mb-2 text-dark">{feature.label}</h4>
                <p className="text-gray-secondary text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
