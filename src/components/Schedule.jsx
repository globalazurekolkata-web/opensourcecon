import { useState } from 'react';
import { Calendar, Users, Clock, Info, Download, Plus } from 'lucide-react';
import Button from './Button';

const GoogleCalendarIcon = () => (
  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="18" height="18" rx="4" fill="#fff" stroke="#e5e7eb" strokeWidth="1" />
    <path d="M3 6.5C3 4.567 4.567 3 6.5 3h11C19.433 3 21 4.567 21 6.5V8H3V6.5Z" fill="#4285F4" />
    <text x="12" y="16" dominantBaseline="middle" textAnchor="middle" fill="#4285F4" fontSize="9.5" fontWeight="900" fontFamily="sans-serif">31</text>
  </svg>
);

const scheduleTabs = [
  { id: 'morning', name: 'Morning', time: '09:00 AM - 12:30 PM' },
  { id: 'afternoon', name: 'Afternoon', time: '01:30 PM - 05:00 PM' },
  { id: 'evening', name: 'Evening', time: '05:00 PM - 08:30 PM' }
];

const scheduleData = {
  morning: {
    track1: [
      {
        title: 'Registration & Welcome Tea',
        time: '09:00 AM',
        speakers: []
      },
      {
        title: 'Opening Keynote',
        time: '09:30 AM',
        speakers: [
          {
            name: 'Speaker Name',
            desc: 'Description',
            image: '/images/team/SayantanK.jpeg'
          }
        ]
      },
      {
        title: 'Panel Discussion Topic Name',
        time: '11:00 AM',
        speakers: [
          { name: 'Speaker Name', desc: 'Description', image: '/images/team/SayantanK.jpeg' },
          { name: 'Speaker Name', desc: 'Description', image: '/images/team/SayantanK.jpeg' },
          { name: 'Speaker Name', desc: 'Description', image: '/images/team/SayantanK.jpeg' }
        ]
      }
    ],
    track2: [
      {
        title: 'Lightning Talks Talk Name',
        time: '12:00 PM',
        speakers: [
          { name: 'Speaker Name', desc: 'Description', image: '/images/team/SayantanK.jpeg' },
          { name: 'Speaker Name', desc: 'Description', image: '/images/team/SayantanK.jpeg' }
        ]
      },
      {
        title: 'Lunch Break',
        time: '12:30 PM',
        speakers: []
      }
    ]
  },
  afternoon: {
    track1: [
      {
        title: 'Hands-on Workshops Intro & Setup',
        time: '01:30 PM',
        speakers: []
      },
      {
        title: 'Deep Dive: DevOps & Cloud Architecture Lab',
        time: '02:00 PM',
        speakers: [
          { name: 'Speaker Name', desc: 'Description', image: '/images/team/SayantanK.jpeg' },
          { name: 'Speaker Name', desc: 'Description', image: '/images/team/SayantanK.jpeg' }
        ]
      },
      {
        title: 'Premium Frontend UI/UX Design Workshop',
        time: '03:30 PM',
        speakers: [
          { name: 'Speaker Name', desc: 'Description', image: '/images/team/SayantanK.jpeg' },
          { name: 'Speaker Name', desc: 'Description', image: '/images/team/SayantanK.jpeg' },
          { name: 'Speaker Name', desc: 'Description', image: '/images/team/SayantanK.jpeg' }
        ]
      }
    ],
    track2: [
      {
        title: 'Cloud Native Application Scaling Lab',
        time: '02:00 PM',
        speakers: [
          { name: 'Speaker Name', desc: 'Description', image: '/images/team/SayantanK.jpeg' },
          { name: 'Speaker Name', desc: 'Description', image: '/images/team/SayantanK.jpeg' }
        ]
      },
      {
        title: 'High Tea & Networking Break',
        time: '04:30 PM',
        speakers: []
      }
    ]
  },
  evening: {
    track1: [
      {
        title: 'Fireside Chat: The Future of Open Source',
        time: '05:00 PM',
        speakers: [
          { name: 'Speaker Name', desc: 'Description', image: '/images/team/SayantanK.jpeg' },
          { name: 'Speaker Name', desc: 'Description', image: '/images/team/SayantanK.jpeg' }
        ]
      },
      {
        title: 'Closing Keynote & Special Announcements',
        time: '06:30 PM',
        speakers: [
          { name: 'Speaker Name', desc: 'Description', image: '/images/team/SayantanK.jpeg' }
        ]
      },
      {
        title: 'Networking Dinner & Mixer',
        time: '07:30 PM',
        speakers: []
      }
    ],
    track2: [
      {
        title: 'Community Lightning Talks Round 2',
        time: '05:15 PM',
        speakers: [
          { name: 'Speaker Name', desc: 'Description', image: '/images/team/SayantanK.jpeg' },
          { name: 'Speaker Name', desc: 'Description', image: '/images/team/SayantanK.jpeg' },
          { name: 'Speaker Name', desc: 'Description', image: '/images/team/SayantanK.jpeg' }
        ]
      },
      {
        title: 'After Party & Live DJ Performance',
        time: '07:00 PM',
        speakers: []
      }
    ]
  }
};

export default function Schedule() {
  const [activeTab, setActiveTab] = useState('morning');
  const currentTabSchedule = scheduleData[activeTab];

  function openKonfHub(e) {
    e.preventDefault();
    const kBtn = document.querySelector('#konfhub-widget-trigger button, #konfhub-widget-trigger a');
    if (kBtn) kBtn.click();
  }

  return (
    <section id="schedule" className="py-20 lg:py-28 relative bg-white dark:bg-[#0B1020] overflow-hidden border-t border-gray-100 dark:border-white/5">
      <div className="absolute inset-0 grid-bg pointer-events-none z-0" />
      
      <div className="max-w-container mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-12">
          <div className="section-tag inline-flex items-center gap-1.5 mx-auto">
            <span className="green-dot" />
            SCHEDULE
          </div>
          
          <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] leading-[1.2]! tracking-tight text-dark dark:text-white">
            A full day of
            <br />
            <span className="text-gradient uppercase font-bold">
              <span className="underline decoration-brand-green decoration-[3px] underline-offset-[8px]">
                OPEN
              </span>
            </span>{" "}
            Everything
          </h2>
          
          <p className="text-gray-secondary dark:text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            From inspiring keynotes to hands-on workshops and everything in between, there's something for everyone throughout the day.
          </p>
        </div>

        {/* Buttons Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <Button
            href="https://drive.google.com/file/d/1RVrIZV0d6UskRM9k62cOlUU1A3J2pBg4/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            className="px-6 py-3.5 rounded-full !bg-dark dark:!bg-white text-white dark:text-dark hover:!bg-dark/90 dark:hover:!bg-gray-100 font-bold text-xs md:text-sm flex items-center gap-2 transition-all duration-200 shadow-md"
            icon={Download}
            iconPosition="left"
          >
            <span>Download Full Schedule</span>
          </Button>
          
          <a 
            href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=OpenSourceCon+India+2026&dates=20261205T090000/20261205T180000&details=Bengal%27s+biggest+open+source+gathering.&location=Kolkata"
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-full bg-white dark:bg-[#131C31] border border-gray-200 dark:border-white/5 text-dark dark:text-white hover:bg-gray-50 dark:hover:bg-[#1C2640] font-bold text-xs md:text-sm flex items-center gap-2 transition-all duration-200 shadow-sm hover:shadow-md active:scale-95 whitespace-nowrap cursor-pointer select-none"
          >
            <GoogleCalendarIcon />
            <span>Add to Calendar</span>
            <Plus size={16} className="text-gray-400 dark:text-gray-555" />
          </a>
        </div>

        {/* Main Timeline Card Container */}
        <div className="max-w-5xl mx-auto bg-white dark:bg-[#131C31] border border-gray-150 dark:border-white/5 rounded-[32px] shadow-lg overflow-hidden">
          
          {/* Day Navigation Tabs (Sharp & Fully Interactive) */}
          <div className="flex w-full border-b border-gray-100 dark:border-white/5 bg-gray-50/20 dark:bg-[#1C2640]/5">
            {scheduleTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="flex-grow flex-1 py-5 text-center relative transition-all duration-200 hover:bg-gray-50/50 dark:hover:bg-white/5 border-0 focus:outline-none"
              >
                <div className={`font-heading font-extrabold text-sm md:text-base ${activeTab === tab.id ? 'text-dark dark:text-white font-black' : 'text-gray-400 dark:text-gray-555'}`}>
                  {tab.name}
                </div>
                <div className="text-[10px] md:text-xs text-gray-secondary dark:text-gray-400 mt-1 font-semibold font-mono">
                  {tab.time}
                </div>
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 inset-x-0 h-[3px] bg-[#52D237] rounded-full mx-auto w-[65%]" />
                )}
              </button>
            ))}
          </div>

          {/* Timeline Wrapper - Covers only the Grid area */}
          <div className="relative min-h-[300px]">
            {/* Timeline Columns (Blurred) */}
            <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 filter blur-[4px] pointer-events-none select-none">
              
              {/* Left Column (Track 1) */}
              <div className="space-y-8">
                {currentTabSchedule.track1.map((session, idx) => (
                  <div key={idx} className="relative pl-12 text-left group">
                    {idx < currentTabSchedule.track1.length - 1 && (
                      <div className="absolute left-[15px] top-8 bottom-[-32px] w-[1.5px] bg-gray-100 dark:bg-white/5" />
                    )}
                    <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center shadow-sm">
                      <Clock size={15} />
                    </div>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-heading font-extrabold text-[15px] md:text-[17px] text-dark dark:text-white leading-tight">
                          {session.title}
                        </h4>
                        <span className="text-[10px] md:text-xs font-semibold text-gray-secondary dark:text-gray-400 mt-1 block font-mono">
                          {session.time}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Column (Track 2) */}
              <div className="space-y-8">
                {currentTabSchedule.track2.map((session, idx) => (
                  <div key={idx} className="relative pl-12 text-left group">
                    {idx < currentTabSchedule.track2.length - 1 && (
                      <div className="absolute left-[15px] top-8 bottom-[-32px] w-[1.5px] bg-gray-100 dark:bg-white/5" />
                    )}
                    <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center shadow-sm">
                      <Clock size={15} />
                    </div>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-heading font-extrabold text-[15px] md:text-[17px] text-dark dark:text-white leading-tight">
                          {session.title}
                        </h4>
                        <span className="text-[10px] md:text-xs font-semibold text-gray-secondary dark:text-gray-400 mt-1 block font-mono">
                          {session.time}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Glassmorphic Blur Overlay Cover */}
            <div className="absolute inset-0 bg-white/40 dark:bg-[#0B1020]/45 backdrop-blur-md flex flex-col items-center justify-center p-8 z-20">
              <div className="max-w-md text-center space-y-6">
                {/* Pulsing neon icon */}
                <div className="w-16 h-16 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center mx-auto shadow-glow animate-pulse">
                  <Calendar size={32} />
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-heading font-black text-2xl md:text-3xl text-dark dark:text-white leading-tight">
                    Schedule Unveiling Soon
                  </h3>
                  <p className="text-xs md:text-sm text-gray-secondary dark:text-gray-400 leading-relaxed font-semibold">
                    We are finalising our tracks and technical session slots with our core maintainers. Check back soon for the full day agenda!
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    onClick={openKonfHub}
                    className="px-8 py-3.5 rounded-full text-xs md:text-sm font-extrabold bg-[#52D237] text-white hover:bg-brand-green-dark transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 cursor-pointer border-0"
                  >
                    Book Your Tickets Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Banner (Sharp & Fully Interactive) */}
          <div className="border-t border-gray-100 dark:border-white/5 px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gray-50/50 dark:bg-[#1C2640]/20 rounded-b-[32px] text-left">
            <div>
              <h4 className="font-heading font-extrabold text-base text-dark dark:text-white">
                More sessions, more learning.
              </h4>
              <p className="text-xs text-gray-secondary dark:text-gray-505 font-semibold mt-0.5">
                05 Dec, 2026
              </p>
            </div>
            <button
              onClick={openKonfHub}
              className="px-6 py-3 rounded-full text-xs font-bold bg-black dark:bg-white text-white dark:text-dark hover:bg-black/90 dark:hover:bg-gray-100 transition-colors shadow-md active:scale-95 cursor-pointer border-0"
            >
              View All Schedule
            </button>
          </div>
          
        </div>

        {/* Triple Stat Badges Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
          
          {/* Badge 1: Hands-on Workshops */}
          <div className="card p-6 bg-white dark:bg-[#131C31] border border-gray-150 dark:border-white/5 rounded-[24px] flex items-start gap-4 text-left shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-10 h-10 rounded-full bg-[#52D237]/10 text-[#52D237] flex items-center justify-center flex-shrink-0 shadow-sm">
              <Info size={18} />
            </div>
            <div>
              <h4 className="font-heading font-extrabold text-sm md:text-base text-dark dark:text-white leading-tight">
                Hands-on Workshops
              </h4>
              <p className="text-[11px] leading-relaxed text-gray-secondary dark:text-gray-400 mt-1 font-semibold">
                Dive deep into technical sessions led by core maintainers.
              </p>
            </div>
          </div>

          {/* Badge 2: Networking */}
          <div className="card p-6 bg-white dark:bg-[#131C31] border border-gray-150 dark:border-white/5 rounded-[24px] flex items-start gap-4 text-left shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-10 h-10 rounded-full bg-[#52D237]/10 text-[#52D237] flex items-center justify-center flex-shrink-0 shadow-sm">
              <Info size={18} />
            </div>
            <div>
              <h4 className="font-heading font-extrabold text-sm md:text-base text-dark dark:text-white leading-tight">
                Networking
              </h4>
              <p className="text-[11px] leading-relaxed text-gray-secondary dark:text-gray-400 mt-1 font-semibold">
                Connect with community members and build relationships.
              </p>
            </div>
          </div>

          {/* Badge 3: After Party */}
          <div className="card p-6 bg-white dark:bg-[#131C31] border border-gray-150 dark:border-white/5 rounded-[24px] flex items-start gap-4 text-left shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-10 h-10 rounded-full bg-[#52D237]/10 text-[#52D237] flex items-center justify-center flex-shrink-0 shadow-sm">
              <Info size={18} />
            </div>
            <div>
              <h4 className="font-heading font-extrabold text-sm md:text-base text-dark dark:text-white leading-tight">
                After Party
              </h4>
              <p className="text-[11px] leading-relaxed text-gray-secondary dark:text-gray-400 mt-1 font-semibold">
                Celebrate the day with music, food, and like-minded developers.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
