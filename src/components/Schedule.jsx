import { Calendar, Users, Cpu } from 'lucide-react';

const scheduleData = [
  {
    time: '08:00',
    title: 'Registration & Welcome Coffee',
    description: 'Check in, grab your badge, connect with fellow attendees',
    tag: 'OPENING',
    isDarkDot: false,
  },
  {
    time: '09:00',
    title: 'Opening Keynote',
    description: 'The state of open source in India and the road ahead',
    tag: 'KEYNOTE',
    isDarkDot: true,
  },
  {
    time: '10:00',
    title: 'Technical Talks — Track A & B',
    description: 'Concurrent sessions on cloud native, Linux, developer tools, and more',
    tag: 'TALKS',
    isDarkDot: false,
  },
  {
    time: '12:30',
    title: 'Lunch & Community Networking',
    description: 'Break, refuel, and make connections that last beyond the event',
    tag: 'BREAK',
    isDarkDot: false,
  },
  {
    time: '14:00',
    title: 'Workshops & Hands-on Labs',
    description: 'Deep-dive practical sessions — bring your laptop',
    tag: 'WORKSHOPS',
    isDarkDot: false,
  },
  {
    time: '16:30',
    title: 'Closing Keynote & Community Awards',
    description: 'Celebrating contributors, projects, and communities from Bengal',
    tag: 'KEYNOTE',
    isDarkDot: false,
  },
  {
    time: '17:30',
    title: 'Open Networking & After-party',
    description: 'The talks end, the conversations don\'t',
    tag: 'SOCIAL',
    isDarkDot: false,
  }
];

export default function Schedule() {
  function openKonfHub(e) {
    e.preventDefault();
    const kBtn = document.querySelector('#konfhub-widget-trigger button, #konfhub-widget-trigger a');
    if (kBtn) kBtn.click();
  }

  return (
    <section id="schedule" className="py-10 sm:py-16 lg:py-20 relative bg-white overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none z-0" />

      <div className="max-w-container mx-auto px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-8 sm:mb-12">
          <div className="section-tag inline-flex items-center gap-1.5 mx-auto px-3 py-1.5">
            <span className="green-dot" />
            TIMELINE
          </div>

          <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] leading-[1.4]! tracking-tight text-dark">
            <span className="font-medium">A full day of</span>
            <br />
            <span className="text-gradient uppercase font-bold">OPEN EVERYTHING.</span>
          </h2>

          <p className="text-gray-secondary text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Our full schedule is currently being finalized. Here is a sneak peek at the general flow of the day.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-[33px] sm:left-[55px] top-6 bottom-6 w-px bg-brand-green/30" />

            {/* Items */}
            <div className="space-y-3 sm:space-y-5">
              {scheduleData.map((item, i) => (
                <div key={i} className="flex gap-3 sm:gap-6 items-start relative group">
                  {/* Time */}
                  <div className="w-11 sm:w-16 pt-3.5 sm:pt-4 flex-shrink-0 text-right">
                    <span className="text-[11px] sm:text-sm font-mono font-bold text-brand-green">
                      {item.time}
                    </span>
                  </div>

                  {/* Dot */}
                  <div className="relative pt-[16px] sm:pt-[18px] flex-shrink-0 z-10">
                    <div className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 ${item.isDarkDot ? 'bg-dark border-dark' : 'bg-brand-green border-brand-green'} ring-4 ring-white transition-transform group-hover:scale-125`} />
                  </div>

                  {/* Card */}
                  <div className="flex-1 min-w-0 pb-1">
                    <div className="bg-gray-50/50 hover:bg-gray-50 border border-gray-100 rounded-xl sm:rounded-2xl p-3.5 sm:p-5 transition-colors duration-300">
                      <h4 className="font-heading font-bold text-sm sm:text-lg text-dark mb-0.5 sm:mb-1">
                        {item.title}
                      </h4>
                      <p className="text-[11px] sm:text-sm text-gray-500 mb-2 sm:mb-3 leading-relaxed">
                        {item.description}
                      </p>
                      <span className="inline-flex items-center px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-brand-green/10 text-brand-green text-[9px] sm:text-[10px] font-bold tracking-widest uppercase">
                        {item.tag}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Schedule Bottom Banner */}
        <div className="text-center py-6 sm:py-8 px-5 sm:px-6 bg-gray-50 border border-gray-100 rounded-2xl sm:rounded-3xl max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 mb-10 sm:mb-16">
          <div className="text-left">
            <h4 className="font-heading font-extrabold text-lg text-dark">
              Want to attend?
            </h4>
            <p className="text-sm text-gray-secondary mt-1">
              Secure your spot before tickets run out.
            </p>
          </div>
          <button
            onClick={openKonfHub}
            className="btn-primary text-sm py-3 px-6 rounded-full flex items-center gap-2 bg-dark text-white hover:bg-dark/95"
            style={{ background: '#111827', color: '#FFFFFF' }}
          >
            Get Tickets
          </button>
        </div>

      </div>
    </section>
  );
}
