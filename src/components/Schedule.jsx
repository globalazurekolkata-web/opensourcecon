import { useState } from 'react';
import { Calendar, Users, Cpu, Clock, MapPin } from 'lucide-react';

const conferenceSchedule = {
  DevOps: [
    {
      time: '09:30 AM - 10:15 AM',
      speaker: 'Kunal Kushwaha',
      role: 'Founder, WeMakeDevs',
      image: '/images/team/KunalD.png',
      title: 'Scaling Open Source Communities',
      hall: 'Hall A'
    },
    {
      time: '10:30 AM - 11:15 AM',
      speaker: 'Sayantan Bhattacharyya',
      role: 'Lead Developer @ Atlassian',
      image: '/images/team/SayantanK.jpeg',
      title: 'GitOps in Enterprise Infrastructure',
      hall: 'Hall A'
    },
    {
      time: '11:30 AM - 12:15 PM',
      speaker: 'Kazi Haque',
      role: 'DevOps Architect',
      image: '/images/team/KaziH.jpeg',
      title: 'CI/CD Automation & Security at Scale',
      hall: 'Hall A'
    }
  ],
  'Web & App': [
    {
      time: '09:30 AM - 10:15 AM',
      speaker: 'Sohom Roy',
      role: 'Frontend Engineer @ Razorpay',
      image: '/images/team/SohomC.jpeg',
      title: 'The Future of Web with React Server Components',
      hall: 'Hall B'
    },
    {
      time: '10:30 AM - 11:15 AM',
      speaker: 'Shivam Nandi',
      role: 'UX Developer @ Tink',
      image: '/images/team/ShivamN.jpeg',
      title: 'Designing Accessible & Interactive User Interfaces',
      hall: 'Hall B'
    },
    {
      time: '11:30 AM - 12:15 PM',
      speaker: 'Anubhav Ghosh',
      role: 'UI Architect',
      image: '/images/1715421516599.jpeg',
      title: 'Modern CSS Architectures & Tailwind v4',
      hall: 'Hall B'
    }
  ],
  Web3: [
    {
      time: '09:30 AM - 10:15 AM',
      speaker: 'Pabitra Banerjee',
      role: 'Web3 Core Developer',
      image: '/images/1706691741517.jpeg',
      title: 'Smart Contract Security & Auditing Patterns',
      hall: 'Hall C'
    },
    {
      time: '10:30 AM - 11:15 AM',
      speaker: 'Siddharth Roy',
      role: 'Ethereum Researcher',
      image: '',
      title: 'Scaling Ethereum Layer-2 Solutions',
      hall: 'Hall C'
    },
    {
      time: '11:30 AM - 12:15 PM',
      speaker: 'Ritika Sen',
      role: 'DeFi Protocol Developer',
      image: '',
      title: 'Building Decentralized Autonomous Organizations',
      hall: 'Hall C'
    }
  ]
};

const workshopsSchedule = {
  DevOps: [
    {
      time: '02:00 PM - 03:30 PM',
      speaker: 'Kunal Kushwaha',
      role: 'Founder, WeMakeDevs',
      image: '/images/team/KunalD.png',
      title: 'Hands-on Kubernetes for Beginners',
      hall: 'Lab 1'
    }
  ],
  'Web & App': [
    {
      time: '02:00 PM - 03:30 PM',
      speaker: 'Sohom Roy',
      role: 'Frontend Engineer @ Razorpay',
      image: '/images/team/SohomC.jpeg',
      title: 'Building Premium UIs with Tailwind',
      hall: 'Lab 2'
    }
  ],
  Web3: [
    {
      time: '02:00 PM - 03:30 PM',
      speaker: 'Pabitra Banerjee',
      role: 'Web3 Core Developer',
      image: '/images/1706691741517.jpeg',
      title: 'Writing and Deploying Smart Contracts',
      hall: 'Lab 3'
    }
  ]
};

export default function Schedule() {
  const [scheduleType, setScheduleType] = useState('conference'); // 'conference' or 'workshops'
  const currentSchedule = scheduleType === 'conference' ? conferenceSchedule : workshopsSchedule;

  function openKonfHub(e) {
    e.preventDefault();
    const kBtn = document.querySelector('#konfhub-widget-trigger button, #konfhub-widget-trigger a');
    if (kBtn) kBtn.click();
  }

  return (
    <section id="schedule" className="py-20 lg:py-28 relative bg-white overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none z-0" />
      
      <div className="max-w-container mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-16">
          <div className="section-tag inline-flex items-center gap-1.5 mx-auto">
            <span className="green-dot" />
            TIMELINE
          </div>
          
          <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.1] tracking-tight text-dark">
            A full day of
            <br />
            <span className="text-brand-green uppercase">OPEN EVERYTHING.</span>
          </h2>
          
          <p className="text-gray-secondary text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            The event is structured into multiple tracks to cater to different skill levels and domains. Choose the path that interests you.
          </p>

          {/* Toggle Switch */}
          <div className="inline-flex p-1.5 bg-gray-100 rounded-full border border-gray-200 mt-4">
            <button
              onClick={() => setScheduleType('conference')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                scheduleType === 'conference'
                  ? 'bg-dark text-white shadow-md'
                  : 'text-gray-500 hover:text-dark'
              }`}
            >
              Conference Schedule
            </button>
            <button
              onClick={() => setScheduleType('workshops')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                scheduleType === 'workshops'
                  ? 'bg-dark text-white shadow-md'
                  : 'text-gray-500 hover:text-dark'
              }`}
            >
              Workshops
            </button>
          </div>
        </div>

        {/* Tracks Timeline Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {Object.entries(currentSchedule).map(([trackName, sessions]) => (
            <div key={trackName} className="space-y-6">
              {/* Track Title */}
              <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-green" />
                <h3 className="font-heading font-extrabold text-xl text-dark uppercase tracking-wide">
                  {trackName}
                </h3>
              </div>

              {/* Sessions */}
              <div className="space-y-5">
                {sessions.map((session, i) => (
                  <div
                    key={i}
                    className="card p-6 bg-white border border-gray-150 rounded-[24px] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between min-h-[200px]"
                  >
                    <div className="space-y-4">
                      {/* Time */}
                      <div className="flex items-center gap-2 text-xs font-mono font-bold text-brand-green">
                        <Clock size={13} />
                        {session.time}
                      </div>

                      {/* Title */}
                      <h4 className="font-heading font-bold text-base text-dark leading-snug">
                        {session.title}
                      </h4>
                    </div>

                    {/* Speaker & Hall info */}
                    <div className="flex items-center justify-between gap-4 pt-4 border-t border-gray-50 mt-4">
                      <div className="flex items-center gap-2.5 min-w-0">
                        {session.image ? (
                          <img
                            src={session.image}
                            alt={session.speaker}
                            className="w-9 h-9 rounded-full object-cover border border-gray-100 flex-shrink-0"
                          />
                        ) : (
                          <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 flex-shrink-0 border border-gray-100">
                            <Users size={14} />
                          </div>
                        )}
                        <div className="min-w-0">
                          <p className="text-xs font-bold text-dark truncate leading-tight">
                            {session.speaker}
                          </p>
                          <p className="text-[10px] text-gray-secondary truncate mt-0.5 leading-none">
                            {session.role}
                          </p>
                        </div>
                      </div>

                      {/* Hall Badge */}
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-brand-green/8 border border-brand-green/20 text-brand-green text-[10px] font-bold font-mono">
                        <MapPin size={10} />
                        {session.hall}
                      </span>
                    </div>
                  </div>
                ))}
                {sessions.length === 0 && (
                  <div className="text-center py-10 text-gray-400 text-sm">
                    No sessions scheduled.
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Schedule Bottom Banner */}
        <div className="text-center py-8 px-6 bg-gray-50 border border-gray-100 rounded-3xl max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 mb-16">
          <div className="text-left">
            <h4 className="font-heading font-extrabold text-lg text-dark">
              Looking for more information?
            </h4>
            <p className="text-sm text-gray-secondary mt-1">
              Find complete lists of speakers, tracks, and details.
            </p>
          </div>
          <button
            onClick={openKonfHub}
            className="btn-primary text-sm py-3 px-6 rounded-xl flex items-center gap-2 bg-dark text-white hover:bg-dark/95"
            style={{ background: '#111827', color: '#FFFFFF' }}
          >
            Get Tickets
          </button>
        </div>

        {/* Floating Stats Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="card p-6 bg-white border border-gray-150 rounded-[20px] flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center text-brand-green flex-shrink-0">
              <Calendar size={20} />
            </div>
            <div>
              <h4 className="font-heading font-extrabold text-base text-dark">10+ Tracks & Sessions</h4>
              <p className="text-xs text-gray-secondary mt-0.5">Spanning DevOps, Web & Web3</p>
            </div>
          </div>
          <div className="card p-6 bg-white border border-gray-150 rounded-[20px] flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center text-brand-green flex-shrink-0">
              <Users size={20} />
            </div>
            <div>
              <h4 className="font-heading font-extrabold text-base text-dark">30+ Speakers & Panelists</h4>
              <p className="text-xs text-gray-secondary mt-0.5">Industry maintainers & founders</p>
            </div>
          </div>
          <div className="card p-6 bg-white border border-gray-150 rounded-[20px] flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center text-brand-green flex-shrink-0">
              <Cpu size={20} />
            </div>
            <div>
              <h4 className="font-heading font-extrabold text-base text-dark">3+ Interactive Workshops</h4>
              <p className="text-xs text-gray-secondary mt-0.5">Hands-on coding labs</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
