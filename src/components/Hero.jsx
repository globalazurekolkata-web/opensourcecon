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
    <section id="home" className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden min-h-[90vh] flex items-center">
      {/* Animated gradient orbs */}
      <div className="hero-orb hero-orb-1" aria-hidden="true" />
      <div className="hero-orb hero-orb-2" aria-hidden="true" />

      {/* Floating tech badges */}
      {floatingBadges.map((badge) => (
        <div
          key={badge.text}
          className="floating-badge hidden lg:block"
          aria-hidden="true"
          style={{
            left: badge.left,
            top: badge.top,
            animationDuration: badge.duration,
            animationDelay: badge.delay,
          }}
        >
          {badge.text}
        </div>
      ))}

      <div className="max-w-container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full border border-brand-green/30 bg-brand-green/5 text-brand-green">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              🇮🇳 Kolkata, India · 2026
            </div>

            {/* Logo & Heading */}
            <div className="space-y-4">
              <img
                src="/images/logo.png"
                alt="OpenSourceCon"
                className="w-20 h-20 md:w-24 md:h-24 dark:invert"
              />
              <h1 className="font-heading text-5xl md:text-6xl lg:text-[68px] font-extrabold leading-[1.05] tracking-tight text-dark dark:text-white">
                Where Kolkata
                <br />
                Meets
                <br />
                <span className="text-brand-green">Open Source</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-gray-secondary dark:text-gray-400 text-lg leading-relaxed max-w-md">
              Bengal's first dedicated open source conference. A full-day celebration of community, code, and collaboration — built by the people, for the people.
            </p>

            {/* Event meta */}
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
                <CalendarDays size={14} className="text-brand-green" />
                <span className="font-semibold text-dark dark:text-white">5th Dec 2026</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
                <Clock size={14} className="text-brand-green" />
                <span className="font-semibold text-dark dark:text-white">Full Day</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5">
                <MapPin size={14} className="text-brand-green" />
                <span className="font-semibold text-dark dark:text-white">Kolkata, WB</span>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="pt-2">
              <CountdownTimer />
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button onClick={openKonfHub} className="btn-primary text-base py-3.5 px-7">
                Register Now <ArrowRight size={18} />
              </button>
              <a
                href="https://forms.gle/tFUzkFuCyb1heshu9"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-base py-3.5 px-7"
              >
                Submit Talk
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="flex items-center gap-2 text-dark dark:text-white">
                <Users size={18} className="text-brand-green" />
                <CountUp target={800} suffix="+" className="font-heading font-bold text-lg" />
                <span className="text-gray-secondary dark:text-gray-400 text-sm">Attendees</span>
              </div>
              <div className="flex items-center gap-2 text-dark dark:text-white">
                <CalendarDays size={18} className="text-brand-green" />
                <span className="font-heading font-bold text-lg">1</span>
                <span className="text-gray-secondary dark:text-gray-400 text-sm">Full Day</span>
              </div>
              <div className="flex items-center gap-2 text-dark dark:text-white">
                <MapPin size={18} className="text-brand-green" />
                <span className="font-heading font-bold text-lg">In-Person</span>
              </div>
            </div>
          </div>

          {/* Right Visual - Network Orbit */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px]">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border border-gray-200 dark:border-white/5 hero-ring-spin" />
              {/* Middle ring */}
              <div className="absolute inset-8 rounded-full border border-gray-200/70 dark:border-white/5 hero-ring-spin-reverse" />
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
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#52D237" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
                </div>
              </div>
              {/* Right */}
              <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1">
                <div className="w-10 h-10 rounded-full bg-white dark:bg-[#131C31] border border-gray-200 dark:border-white/10 shadow-md flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#52D237" strokeWidth="2"><circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" /></svg>
                </div>
              </div>
              {/* Bottom */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1">
                <div className="w-10 h-10 rounded-full bg-white dark:bg-[#131C31] border border-gray-200 dark:border-white/10 shadow-md flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#52D237" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 016.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" /></svg>
                </div>
              </div>
              {/* Left */}
              <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1">
                <div className="w-10 h-10 rounded-full bg-white dark:bg-[#131C31] border border-gray-200 dark:border-white/10 shadow-md flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#52D237" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg>
                </div>
              </div>
              {/* Accent dots */}
              <div className="absolute top-[12%] right-[12%]">
                <div className="w-8 h-8 rounded-full bg-brand-green/10 border border-brand-green/30 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-green" />
                </div>
              </div>
              <div className="absolute bottom-[12%] left-[12%]">
                <div className="w-8 h-8 rounded-full bg-brand-green/10 border border-brand-green/30 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-green" />
                </div>
              </div>
              <div className="absolute top-[20%] left-[8%]">
                <div className="w-6 h-6 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-gray-400" />
                </div>
              </div>
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

      {/* Scroll indicator */}
      <div className="scroll-indicator-container hidden md:flex" aria-hidden="true">
        <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-gray-secondary dark:text-gray-400">
          Explore
        </span>
        <div className="scroll-line-indicator" />
      </div>
    </section>
  );
}
