import { ArrowRight, CalendarDays, Users, Mic2, LayoutGrid } from 'lucide-react';
import CountUp from './CountUp';

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
      {/* Decorative elements */}
      <div className="connector-dot top-32 left-[10%] hidden lg:block" />
      <div className="connector-dot top-48 right-[15%] hidden lg:block" />
      <div className="connector-dot bottom-24 left-[20%] hidden lg:block" />
      <div className="connector-line w-px h-16 top-24 left-[30%] hidden lg:block" />
      <div className="connector-line w-px h-12 bottom-16 right-[25%] hidden lg:block" />

      <div className="max-w-container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Small Tag */}
            <div className="section-tag">
              <span className="green-dot" />
              OPEN MINDS. OPEN CODE.
            </div>

            {/* Main Heading */}
            <h1 className="font-heading text-5xl md:text-6xl lg:text-[68px] font-extrabold leading-[1.05] tracking-tight text-dark dark:text-white">
              Where Kolkata
              <br />
              Meets
              <br />
              <span className="text-brand-green">Open Source</span>
            </h1>

            {/* Description */}
            <p className="text-gray-secondary dark:text-gray-400 text-lg leading-relaxed max-w-md">
              Join developers, maintainers, students, and innovators for a day of talks, workshops, networking, and collaboration.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <a href="#register" className="btn-primary text-base py-3.5 px-7">
                Register Now <ArrowRight size={18} />
              </a>
              <a href="#schedule" className="btn-secondary text-base py-3.5 px-7">
                <CalendarDays size={18} />
                View Schedule
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="flex items-center gap-2 text-dark dark:text-white">
                <Users size={18} className="text-brand-green" />
                <CountUp target={500} suffix="+" className="font-heading font-bold text-lg" />
                <span className="text-gray-secondary dark:text-gray-400 text-sm">Attendees</span>
              </div>
              <div className="flex items-center gap-2 text-dark dark:text-white">
                <Mic2 size={18} className="text-brand-green" />
                <CountUp target={40} suffix="+" className="font-heading font-bold text-lg" />
                <span className="text-gray-secondary dark:text-gray-400 text-sm">Speakers</span>
              </div>
              <div className="flex items-center gap-2 text-dark dark:text-white">
                <LayoutGrid size={18} className="text-brand-green" />
                <CountUp target={10} suffix="+" className="font-heading font-bold text-lg" />
                <span className="text-gray-secondary dark:text-gray-400 text-sm">Tracks</span>
              </div>
            </div>
          </div>

          {/* Right Visual - Network Orbit */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px]">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border border-gray-200 dark:border-white/5" />
              {/* Middle ring */}
              <div className="absolute inset-8 rounded-full border border-gray-200/70 dark:border-white/5" />
              {/* Inner ring */}
              <div className="absolute inset-16 rounded-full border border-gray-200/50 dark:border-white/5" />

              {/* Center circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-white dark:bg-[#131C31] flex items-center justify-center shadow-lg border border-gray-100/50 dark:border-white/10">
                  <div className="w-18 h-18 md:w-20 md:h-20 rounded-full bg-brand-green flex items-center justify-center shadow-inner">
                    <span className="text-white text-2xl md:text-3xl font-mono font-extrabold">&lt;/&gt;</span>
                  </div>
                </div>
              </div>

              {/* Orbital nodes */}
              {/* Top */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1">
                <div className="w-10 h-10 rounded-full bg-white dark:bg-[#131C31] border border-gray-200 dark:border-white/10 shadow-md flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#52D237" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
                </div>
              </div>
              {/* Right */}
              <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1">
                <div className="w-10 h-10 rounded-full bg-white dark:bg-[#131C31] border border-gray-200 dark:border-white/10 shadow-md flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#52D237" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>
                </div>
              </div>
              {/* Bottom */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1">
                <div className="w-10 h-10 rounded-full bg-white dark:bg-[#131C31] border border-gray-200 dark:border-white/10 shadow-md flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#52D237" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>
                </div>
              </div>
              {/* Left */}
              <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1">
                <div className="w-10 h-10 rounded-full bg-white dark:bg-[#131C31] border border-gray-200 dark:border-white/10 shadow-md flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#52D237" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
                </div>
              </div>
              {/* Top Right */}
              <div className="absolute top-[12%] right-[12%]">
                <div className="w-8 h-8 rounded-full bg-brand-green/10 border border-brand-green/30 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-green" />
                </div>
              </div>
              {/* Bottom Left */}
              <div className="absolute bottom-[12%] left-[12%]">
                <div className="w-8 h-8 rounded-full bg-brand-green/10 border border-brand-green/30 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-green" />
                </div>
              </div>
              {/* Top Left */}
              <div className="absolute top-[20%] left-[8%]">
                <div className="w-6 h-6 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-gray-400" />
                </div>
              </div>
              {/* Bottom Right */}
              <div className="absolute bottom-[20%] right-[8%]">
                <div className="w-6 h-6 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-gray-400" />
                </div>
              </div>

              {/* Connecting lines */}
              <svg className="absolute inset-0 w-full h-full text-gray-200 dark:text-white/5" viewBox="0 0 400 400" fill="none">
                <line x1="200" y1="55" x2="200" y2="150" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="345" y1="200" x2="250" y2="200" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="200" y1="345" x2="200" y2="250" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="55" y1="200" x2="150" y2="200" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
