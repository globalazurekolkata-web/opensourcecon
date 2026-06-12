import PromoBanner from './components/PromoBanner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Schedule from './components/Schedule';
import Speakers from './components/Speakers';
import Topics from './components/Topics';
import Team from './components/Team';
import Sponsors from './components/Sponsors';
import CommunityPartners from './components/CommunityPartners';
import Venue from './components/Venue';
import AnnouncementCTA from './components/AnnouncementCTA';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import RevealOnScroll from './components/RevealOnScroll';

export default function App() {
  return (
    <div className="grid-bg min-h-screen relative">
      {/* Decorative grid dots */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute w-1 h-1 rounded-full bg-brand-green/20 top-[128px] left-[192px]" />
        <div className="absolute w-1 h-1 rounded-full bg-brand-green/20 top-[320px] right-[256px]" />
        <div className="absolute w-1 h-1 rounded-full bg-brand-green/20 top-[576px] left-[384px]" />
        <div className="absolute w-1.5 h-1.5 rounded-full bg-brand-green/15 top-[768px] right-[128px]" />
        <div className="absolute w-1 h-1 rounded-full bg-brand-green/20 top-[960px] left-[64px]" />
      </div>

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <RevealOnScroll><About /></RevealOnScroll>
        <RevealOnScroll><Schedule /></RevealOnScroll>
        <RevealOnScroll><Speakers /></RevealOnScroll>
        <RevealOnScroll><Topics /></RevealOnScroll>
        <RevealOnScroll><Team /></RevealOnScroll>
        <RevealOnScroll><Sponsors /></RevealOnScroll>
        <RevealOnScroll><CommunityPartners /></RevealOnScroll>
        <RevealOnScroll><Venue /></RevealOnScroll>
        <RevealOnScroll><AnnouncementCTA /></RevealOnScroll>
        <RevealOnScroll><FAQ /></RevealOnScroll>
      </main>

      <Footer />
    </div>
  );
}
