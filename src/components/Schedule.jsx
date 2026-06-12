import { useState } from 'react';
import { Download, ArrowRight, CalendarDays } from 'lucide-react';
import { scheduleTabs, scheduleData, scheduleHighlights } from '../data/schedule';
import { openKonfHub } from '../utils/konfhub';

export default function Schedule() {
  const [activeTab, setActiveTab] = useState('Morning');
  const [showNotice, setShowNotice] = useState(false);

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
              {scheduleHighlights.map(({ num, title, desc }) => (
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

            <button onClick={() => setShowNotice(true)} className="btn-secondary text-sm">
              <Download size={16} />
              Download Full Schedule
            </button>
          </div>

          {/* Right - Schedule Card */}
          <div className="lg:col-span-7 lg:mt-[180px]">
            <div className="card p-0 overflow-hidden relative">
              {/* Tabs */}
              <div className="flex border-b border-gray-100">
                {scheduleTabs.map((tab) => (
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
                <button
                  onClick={() => setShowNotice(true)}
                  className="text-sm font-semibold text-brand-green hover:text-brand-green-dark flex items-center gap-1 transition-colors bg-transparent border-none cursor-pointer"
                >
                  View Full Schedule <ArrowRight size={14} />
                </button>
              </div>

              {/* Sleek Overlay Notice */}
              {showNotice && (
                <div className="absolute inset-0 bg-dark/95 backdrop-blur-sm z-20 flex items-center justify-center p-6 text-center animate-fade-up">
                  <div className="max-w-md space-y-5 p-4">
                    <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center mx-auto text-brand-green">
                      <CalendarDays size={24} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-heading text-xl font-bold text-white">Full Schedule Coming Soon!</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        We are putting the final touches on our speaker lineups and workshops. Register now on KonfHub to receive the complete schedule directly in your inbox.
                      </p>
                    </div>
                    <div className="flex justify-center gap-3">
                      <button
                        onClick={(e) => { setShowNotice(false); openKonfHub(e); }}
                        className="btn-primary text-xs py-2.5 px-4"
                      >
                        Register on KonfHub
                      </button>
                      <button
                        onClick={() => setShowNotice(false)}
                        className="btn-secondary text-xs py-2.5 px-4 text-white hover:text-brand-green border-white/10 bg-transparent"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              )}
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
