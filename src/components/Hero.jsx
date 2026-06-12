import { ArrowRight, CalendarDays, MapPin, Clock, Users } from 'lucide-react';
import CountUp from './CountUp';
import { openKonfHub } from '../utils/konfhub';
import CountdownTimer from './CountdownTimer';

const floatingBadges = [
  { text: '#OpenSource', left: '8%', top: '30%', duration: '12s', delay: '0s' },
  { text: 'Linux', left: '80%', top: '45%', duration: '9s', delay: '2s' },
  { text: 'Kubernetes', left: '20%', top: '65%', duration: '14s', delay: '4s' },
  { text: 'FOSS', left: '70%', top: '20%', duration: '11s', delay: '1s' },
  { text: 'Kolkata', left: '50%', top: '75%', duration: '10s', delay: '3s' },
  { text: 'Git', left: '5%', top: '55%', duration: '13s', delay: '5s' },
];

export default function Hero() {
  return (
    <section id="home" className="relative pt-40 pb-20 md:pt-44 lg:pt-48 lg:pb-28 overflow-hidden min-h-screen flex items-center">
      {/* Animated gradient orbs */}
      <div className="hero-orb hero-orb-1" aria-hidden="true" />
      <div className="hero-orb hero-orb-2" aria-hidden="true" />

      <div className="max-w-container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">

            {/* Logo & Heading */}
            <div className="space-y-4">
              <h1 className="font-heading text-5xl md:text-6xl lg:text-[68px] font-extrabold leading-[1.05] tracking-tight text-dark dark:text-white">
                Where Kolkata
                <br />
                Meets
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green via-[#86EF4D] to-[#3DB82A] bg-200% animate-gradient-shift">
                  Open Source
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-gray-secondary dark:text-gray-400 text-lg leading-relaxed max-w-md">
              Bengal's first dedicated open source conference. A full-day celebration of community, code, and collaboration — built by the people, for the people.
            </p>

            {/* Event meta grid */}
            <div className="grid grid-cols-3 gap-3 md:gap-4 max-w-md">
              <div className="flex flex-col gap-1 p-3.5 rounded-2xl bg-white/50 dark:bg-white/[0.02] backdrop-blur-md border border-gray-100 dark:border-white/5 hover:border-brand-green/20 hover:shadow-md hover:shadow-brand-green/2 transition-all duration-300 group">
                <CalendarDays size={16} className="text-brand-green group-hover:scale-110 transition-transform duration-300" />
                <span className="text-[10px] text-gray-secondary dark:text-gray-400 font-semibold uppercase tracking-wider mt-1.5">Date</span>
                <span className="text-xs font-extrabold text-dark dark:text-white mt-0.5">5th Dec 2026</span>
              </div>
              <div className="flex flex-col gap-1 p-3.5 rounded-2xl bg-white/50 dark:bg-white/[0.02] backdrop-blur-md border border-gray-100 dark:border-white/5 hover:border-brand-green/20 hover:shadow-md hover:shadow-brand-green/2 transition-all duration-300 group">
                <Clock size={16} className="text-brand-green group-hover:scale-110 transition-transform duration-300" />
                <span className="text-[10px] text-gray-secondary dark:text-gray-400 font-semibold uppercase tracking-wider mt-1.5">Duration</span>
                <span className="text-xs font-extrabold text-dark dark:text-white mt-0.5">Full Day</span>
              </div>
              <div className="flex flex-col gap-1 p-3.5 rounded-2xl bg-white/50 dark:bg-white/[0.02] backdrop-blur-md border border-gray-100 dark:border-white/5 hover:border-brand-green/20 hover:shadow-md hover:shadow-brand-green/2 transition-all duration-300 group">
                <MapPin size={16} className="text-brand-green group-hover:scale-110 transition-transform duration-300" />
                <span className="text-[10px] text-gray-secondary dark:text-gray-400 font-semibold uppercase tracking-wider mt-1.5">Venue</span>
                <span className="text-xs font-extrabold text-dark dark:text-white mt-0.5">Kolkata</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button onClick={openKonfHub} className="btn-primary text-base py-3.5 px-7">
                Register Now <ArrowRight size={18} />
              </button>
              <a
                href="https://forms.fillout.com/t/2sKNq3RM68us"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-base py-3.5 px-7"
              >
                Become a Sponsor
              </a>
            </div>
          </div>

          {/* Right Visual - Redesigned Network Orbit & Floating Previews */}
          <div className="hidden lg:flex relative items-center justify-end">
            {/* Glowing background aura */}
            <div className="absolute w-[300px] h-[300px] rounded-full bg-brand-green/10 dark:bg-brand-green/5 blur-3xl pointer-events-none z-0" />

            <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px] z-10">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border border-gray-200 dark:border-white/5 hero-ring-spin" />
              {/* Middle ring */}
              <div className="absolute inset-8 rounded-full border border-gray-200/70 dark:border-white/5 hero-ring-spin-reverse" />
              {/* Inner ring */}
              <div className="absolute inset-16 rounded-full border border-gray-200/50 dark:border-white/5" />

              {/* Center pulsing cyber-core */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-white dark:bg-[#131C31] flex items-center justify-center shadow-xl border border-gray-100/50 dark:border-white/10">
                  <div className="w-18 h-18 md:w-20 md:h-20 rounded-full bg-brand-green flex items-center justify-center shadow-lg hover:rotate-180 transition-transform duration-700">
                    <span className="text-white text-2xl md:text-3xl font-mono font-extrabold">&lt;/&gt;</span>
                  </div>
                </div>
              </div>

              {/* Orbital nodes */}
              {/* Top */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 hover:scale-110 transition-transform cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-white dark:bg-[#131C31] border border-gray-200 dark:border-white/10 shadow-md flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#52D237" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
                </div>
              </div>
              {/* Right */}
              <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1 hover:scale-110 transition-transform cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-white dark:bg-[#131C31] border border-gray-200 dark:border-white/10 shadow-md flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#52D237" strokeWidth="2"><circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" /></svg>
                </div>
              </div>
              {/* Bottom */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 hover:scale-110 transition-transform cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-white dark:bg-[#131C31] border border-gray-200 dark:border-white/10 shadow-md flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#52D237" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 016.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" /></svg>
                </div>
              </div>
              {/* Left */}
              <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1 hover:scale-110 transition-transform cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-white dark:bg-[#131C31] border border-gray-200 dark:border-white/10 shadow-md flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#52D237" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg>
                </div>
              </div>

              {/* Accent dots */}
              <div className="absolute top-[12%] right-[12%]">
                <div className="w-8 h-8 rounded-full bg-brand-green/10 border border-brand-green/30 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-green animate-ping" />
                </div>
              </div>
              <div className="absolute bottom-[12%] left-[12%]">
                <div className="w-8 h-8 rounded-full bg-brand-green/10 border border-brand-green/30 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-green animate-ping" />
                </div>
              </div>

              {/* Connecting lines */}
              <svg className="absolute inset-0 w-full h-full text-gray-200 dark:text-white/5" viewBox="0 0 400 400" fill="none">
                <line x1="200" y1="55" x2="200" y2="150" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="345" y1="200" x2="250" y2="200" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="200" y1="345" x2="200" y2="250" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="55" y1="200" x2="150" y2="200" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              </svg>

              {/* 3D Floating Glass Cards */}
              {/* Speaker CFP Badge */}
              <a 
                href="https://forms.fillout.com/t/2sKNq3RM68us"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute -top-[5%] -left-[10%] p-3 rounded-2xl bg-white/70 dark:bg-[#131C31]/70 backdrop-blur-md border border-gray-200/50 dark:border-white/10 shadow-xl flex items-center gap-2.5 animate-float-slow max-w-[170px] pointer-events-auto hover:border-brand-green/40 transition-all duration-300"
              >
                <div className="w-7 h-7 rounded-xl bg-brand-green/10 flex items-center justify-center font-bold text-xs text-brand-green">
                  🤝
                </div>
                <div className="min-w-0">
                  <p className="text-[9px] text-gray-secondary dark:text-gray-400 font-semibold uppercase tracking-wider leading-none">Sponsors</p>
                  <p className="text-xs font-extrabold text-dark dark:text-white truncate mt-1">Sponsor OSCI</p>
                </div>
              </a>

              {/* Attendee Registrations Badge */}
              <div className="absolute -bottom-[5%] -right-[5%] p-3 rounded-2xl bg-white/70 dark:bg-[#131C31]/70 backdrop-blur-md border border-gray-200/50 dark:border-white/10 shadow-xl flex items-center gap-2.5 animate-float-reverse max-w-[170px] pointer-events-auto hover:border-brand-green/40 transition-all duration-300">
                <div className="w-7 h-7 rounded-xl bg-brand-green/10 flex items-center justify-center font-bold text-xs text-brand-green">
                  🚀
                </div>
                <div className="min-w-0">
                  <p className="text-[9px] text-gray-secondary dark:text-gray-400 font-semibold uppercase tracking-wider leading-none">Attendees</p>
                  <p className="text-xs font-extrabold text-dark dark:text-white truncate mt-1">800+ Expected</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
