import { useState } from 'react';
import { Download, ArrowRight, Sparkles, Wrench, Users, Music } from 'lucide-react';

const tabs = ['Morning', 'Afternoon', 'Evening'];

const scheduleData = {
  Morning: [
    { time: '09:00', title: 'Registration & Welcome Tea', type: 'break' },
    { time: '10:00', title: 'Opening Keynote', type: 'talk' },
    { time: '11:00', title: 'Panel Discussion', type: 'panel' },
    { time: '12:00', title: 'Lightning Talks', type: 'talk' },
    { time: '12:30', title: 'Lunch Break', type: 'break' },
  ],
  Afternoon: [
    { time: '13:30', title: 'Workshop Track A: Kubernetes 101', type: 'workshop' },
    { time: '13:30', title: 'Workshop Track B: Contributing to OSS', type: 'workshop' },
    { time: '15:00', title: 'Tech Talks', type: 'talk' },
    { time: '16:00', title: 'Community Showcase', type: 'panel' },
    { time: '16:45', title: 'Tea Break', type: 'break' },
  ],
  Evening: [
    { time: '17:00', title: 'Closing Keynote', type: 'talk' },
    { time: '18:00', title: 'Awards & Recognition', type: 'panel' },
    { time: '18:30', title: 'Networking & After Party', type: 'break' },
  ],
};

const highlights = [
  { icon: Sparkles, text: 'Inspiring Talks' },
  { icon: Wrench, text: 'Hands-on Workshops' },
  { icon: Users, text: 'Networking' },
  { icon: Music, text: 'Good Vibes' },
];

export default function Schedule() {
  const [activeTab, setActiveTab] = useState('Morning');

  return (
    <section id="schedule" className="py-20 lg:py-28 relative">
      <div className="max-w-container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="section-tag">
              <span className="green-dot" />
              SCHEDULE
            </div>

            <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.1] tracking-tight">
              A full day of
              <br />
              <span className="text-brand-green">open</span>
              <br />
              everything.
            </h2>

            <p className="text-gray-secondary text-lg leading-relaxed max-w-md">
              From inspiring keynotes to hands-on workshops and everything in between, there's something for everyone throughout the day.
            </p>

            {/* Highlights */}
            <div className="space-y-3">
              {highlights.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-green/10 flex items-center justify-center">
                    <Icon size={16} className="text-brand-green" />
                  </div>
                  <span className="text-sm font-medium text-dark">{text}</span>
                </div>
              ))}
            </div>

            <button className="btn-secondary text-sm">
              <Download size={16} />
              Download Full Schedule
            </button>
          </div>

          {/* Right - Schedule Card */}
          <div>
            <div className="card p-0 overflow-hidden">
              {/* Tabs */}
              <div className="flex border-b border-gray-100">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-4 text-sm font-semibold transition-colors relative ${
                      activeTab === tab
                        ? 'text-brand-green'
                        : 'text-gray-400 hover:text-gray-600'
                    }`}
                  >
                    {tab}
                    {activeTab === tab && (
                      <span className="absolute bottom-0 left-1/4 right-1/4 h-0.5 bg-brand-green rounded-full" />
                    )}
                  </button>
                ))}
              </div>

              {/* Timeline Items */}
              <div className="p-6 space-y-0">
                <div className="relative">
                  <div className="timeline-line" />
                  {scheduleData[activeTab].map((item, i) => (
                    <div key={i} className="flex gap-4 pb-6 last:pb-0 relative">
                      {item.type === 'break' ? (
                        <div className="timeline-dot" />
                      ) : (
                        <div className="timeline-dot-filled" />
                      )}
                      <div className="flex items-center gap-4 flex-1 min-w-0">
                        <span className="text-sm font-mono font-semibold text-gray-secondary w-12 flex-shrink-0">
                          {item.time}
                        </span>
                        <span className="text-sm font-medium text-dark truncate">
                          {item.title}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Banner */}
              <div className="bg-brand-green/5 border-t border-brand-green/10 px-6 py-4 flex items-center justify-between flex-wrap gap-3">
                <div>
                  <p className="text-sm font-semibold text-dark">More sessions, more learning.</p>
                </div>
                <a
                  href="#schedule"
                  className="text-sm font-semibold text-brand-green hover:text-brand-green-dark flex items-center gap-1 transition-colors"
                >
                  View Full Schedule <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
