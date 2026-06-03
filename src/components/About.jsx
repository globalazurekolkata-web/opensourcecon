import { BookOpen, Share2, Link2, Zap } from 'lucide-react';

const features = [
  { icon: BookOpen, label: 'Learn', desc: 'Gain insights from maintainers & industry leaders' },
  { icon: Share2, label: 'Share', desc: 'Tell your story and inspire the community' },
  { icon: Link2, label: 'Connect', desc: 'Build connections that outlast the event' },
  { icon: Zap, label: 'Impact', desc: 'Contribute to projects that matter globally' },
];

const stats = [
  { value: '500+', label: 'Attendees' },
  { value: '40+', label: 'Speakers' },
  { value: '10+', label: 'Communities' },
  { value: '1 Day', label: 'Of Learning' },
  { value: '∞', label: 'Opportunities' },
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 relative">
      <div className="max-w-container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.1] tracking-tight">
              A Community.
              <br />
              An Idea.
              <br />
              <span className="text-brand-green">Infinite Impact.</span>
            </h2>

            <p className="text-gray-secondary text-lg leading-relaxed max-w-lg">
              Open source is more than code — it's people, collaboration, and the power to create a better future together.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map(({ icon: Icon, label, desc }) => (
                <div
                  key={label}
                  className="card p-5 hover:shadow-md transition-shadow group"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-green/10 flex items-center justify-center mb-3 group-hover:bg-brand-green/20 transition-colors">
                    <Icon size={20} className="text-brand-green" />
                  </div>
                  <h4 className="font-heading font-bold text-sm mb-1">{label}</h4>
                  <p className="text-gray-secondary text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-card overflow-hidden shadow-lg">
              <img
                src="/images/Right Image Area.png"
                alt="Victoria Memorial, Kolkata"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="stats-strip mt-16">
          {stats.map((stat, i) => (
            <div key={i} className="text-center px-4 py-2 flex-1 min-w-[120px]">
              <div className="font-heading font-extrabold text-2xl md:text-3xl text-dark">
                {stat.value}
              </div>
              <div className="text-gray-secondary text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
