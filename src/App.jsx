import { useState, useEffect } from 'react';
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
import AuthModal from './components/AuthModal';
import ProfileModal from './components/ProfileModal';
import { AuthService } from './services/auth';

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [authOpen, setAuthOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  useEffect(() => {
    // Check if user is logged in on mount
    const session = AuthService.getCurrentUser();
    if (session) {
      setCurrentUser(session);
    }
  }, []);

  return (
    <div className="grid-bg min-h-screen relative bg-white dark:bg-[#0B1020]">
      {/* Decorative grid accent dots */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute w-1.5 h-1.5 rounded-full bg-brand-green/12 top-[128px] left-[192px]" />
        <div className="absolute w-1 h-1 rounded-full bg-brand-green/15 top-[320px] right-[256px]" />
        <div className="absolute w-1 h-1 rounded-full bg-brand-green/12 top-[576px] left-[384px]" />
        <div className="absolute w-1.5 h-1.5 rounded-full bg-brand-green/10 top-[768px] right-[128px]" />
        <div className="absolute w-1 h-1 rounded-full bg-brand-green/12 top-[960px] left-[64px]" />
        <div className="absolute w-1 h-1 rounded-full bg-brand-green/10 top-[1200px] right-[320px]" />
        <div className="absolute w-1.5 h-1.5 rounded-full bg-brand-green/8 top-[1500px] left-[200px]" />
      </div>

      <Navbar 
        currentUser={currentUser} 
        onOpenAuth={() => setAuthOpen(true)} 
        onOpenProfile={() => setProfileOpen(true)} 
      />

      <main className="relative z-10">
        <Hero />
        <RevealOnScroll><About /></RevealOnScroll>
        <RevealOnScroll><Schedule /></RevealOnScroll>
        <RevealOnScroll><Speakers /></RevealOnScroll>
        <RevealOnScroll><Topics /></RevealOnScroll>
        <RevealOnScroll><Team /></RevealOnScroll>
        <RevealOnScroll><Sponsors /></RevealOnScroll>
        <RevealOnScroll><Venue /></RevealOnScroll>
        <RevealOnScroll><CommunityPartners /></RevealOnScroll>
        <RevealOnScroll><AnnouncementCTA /></RevealOnScroll>
        <RevealOnScroll><FAQ /></RevealOnScroll>
      </main>

      <Footer />

      {/* Login & Signup Modals */}
      <AuthModal 
        isOpen={authOpen} 
        onClose={() => setAuthOpen(false)} 
        onLoginSuccess={(user) => setCurrentUser(user)} 
      />

      <ProfileModal 
        isOpen={profileOpen} 
        onClose={() => setProfileOpen(false)} 
        user={currentUser} 
        onLogout={() => setCurrentUser(null)} 
      />
    </div>
  );
}
