import { useState } from 'react';
import { Download, ArrowRight, CalendarDays } from 'lucide-react';

const tabs = [
  { name: 'Morning', time: '09:00 AM - 12:30 PM' },
  { name: 'Afternoon', time: '01:30 PM - 05:00 PM' },
  { name: 'Evening', time: '05:00 PM - 08:30 PM' },
];

const scheduleData = {
  Morning: [
    { time: '09:00 AM', title: 'Registration & Welcome Tea', type: 'break' },
    { time: '10:00 AM', title: 'Opening Keynote', type: 'talk' },
    { time: '11:00 AM', title: 'Panel Discussion', type: 'panel' },
    { time: '12:00 PM', title: 'Lightning Talks', type: 'talk' },
    { time: '12:30 PM', title: 'Lunch Break', type: 'break' },
  ],
  Afternoon: [
    { time: '01:30 PM', title: 'Workshop Track A: Kubernetes 101', type: 'workshop' },
    { time: '01:30 PM', title: 'Workshop Track B: Contributing to OSS', type: 'workshop' },
    { time: '03:00 PM', title: 'Tech Talks', type: 'talk' },
    { time: '04:00 PM', title: 'Community Showcase', type: 'panel' },
    { time: '04:45 PM', title: 'Tea Break', type: 'break' },
  ],
  Evening: [
    { time: '05:00 PM', title: 'Closing Keynote', type: 'talk' },
    { time: '06:00 PM', title: 'Awards & Recognition', type: 'panel' },
    { time: '06:30 PM', title: 'Networking & After Party', type: 'break' },
  ],
};

const highlights = [
  {
    num: '01',
    title: 'Keynotes & Panels',
    desc: 'Hear from industry leaders and learn about the future of open source.'
  },
  {
    num: '02',
    title: 'Hands-on Workshops',
    desc: 'Dive deep into technical sessions led by core maintainers.'
  },
  {
    num: '03',
    title: 'Networking',
    desc: 'Connect with community members and build relationships.'
  },
  {
    num: '04',
    title: 'After Party',
    desc: 'Celebrate the day with music, food, and like-minded developers.'
  }
];

export default function Schedule() {
  const [activeTab, setActiveTab] = useState('Morning');

  return (
    <section id="schedule" className="py-20 lg:py-28 relative">
      <div className="max-w-container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-8 lg:col-span-5">
            <div className="section-tag">
              <span className="green-dot" />
              SCHEDULE
            </div>

            <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.1] tracking-tight text-dark dark:text-white">
              A full day of
              <br />
              <span className="text-brand-green">open</span>
              <br />
              everything.
            </h2>

            <p className="text-gray-secondary dark:text-gray-400 text-lg leading-relaxed max-w-md">
              From inspiring keynotes to hands-on workshops and everything in between, there's something for everyone throughout the day.
            </p>

            {/* Highlights */}
            <div className="space-y-6">
              {highlights.map(({ num, title, desc }) => (
                <div key={num} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full border border-brand-green/30 text-brand-green flex items-center justify-center font-mono font-bold text-sm flex-shrink-0 bg-brand-green/5">
                    {num}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-heading font-bold text-base text-dark dark:text-white">{title}</h4>
                    <p className="text-gray-secondary dark:text-gray-400 text-sm leading-relaxed max-w-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="btn-secondary text-sm">
              <Download size={16} />
              Download Full Schedule
            </button>
          </div>

          {/* Right - Schedule Card */}
          <div className="lg:col-span-7 lg:mt-[180px]">
            <div className="card p-0 overflow-hidden">
              {/* Tabs */}
              <div className="flex border-b border-gray-100">
                {tabs.map((tab) => (
                  <button
                    key={tab.name}
                    onClick={() => setActiveTab(tab.name)}
                    className={`flex-1 py-4 px-2 text-center transition-colors relative flex flex-col items-center gap-1 ${
                      activeTab === tab.name
                        ? 'text-brand-green'
                        : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
                    }`}
                  >
                    <span className="text-sm font-semibold">{tab.name}</span>
                    <span className="text-[10px] font-mono text-gray-secondary dark:text-gray-400">{tab.time}</span>
                    {activeTab === tab.name && (
                      <span className="absolute bottom-0 left-1/6 right-1/6 h-0.5 bg-brand-green rounded-full w-2/3 mx-auto" />
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
                        <span className="text-sm font-mono font-semibold text-gray-secondary dark:text-gray-400 w-20 flex-shrink-0">
                          {item.time}
                        </span>
                        <span className="text-sm font-medium text-dark dark:text-white truncate">
                          {item.title}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Banner */}
              <div className="bg-brand-green/5 dark:bg-brand-green/10 border-t border-brand-green/10 dark:border-brand-green/20 px-6 py-4 flex items-center justify-between flex-wrap gap-3">
                <div>
                  <p className="text-sm font-semibold text-dark dark:text-white">More sessions, more learning.</p>
                </div>
                <a
                  href="#schedule"
                  className="text-sm font-semibold text-brand-green hover:text-brand-green-dark flex items-center gap-1 transition-colors"
                >
                  View Full Schedule <ArrowRight size={14} />
                </a>
              </div>
            </div>

            {/* Standalone FAQ/Calendar Banner */}
            <div className="card mt-6 p-6 flex flex-col sm:flex-row items-center justify-between gap-6 bg-white dark:bg-[#131C31] hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center flex-shrink-0">
                  <CalendarDays className="text-brand-green" size={24} />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-heading font-bold text-base text-dark dark:text-white">Plan your day, learn together.</h4>
                  <p className="text-gray-secondary dark:text-gray-400 text-sm">Check out our FAQs if you have questions about the schedule.</p>
                </div>
              </div>
              <a href="#faq" className="btn-secondary text-sm py-2.5 px-5 flex-shrink-0 text-brand-green border-brand-green/20 hover:border-brand-green/50">
                Go to FAQs <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
