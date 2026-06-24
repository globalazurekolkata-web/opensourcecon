import { useState, useEffect } from 'react';
import PromoBanner from './components/PromoBanner';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Schedule from './sections/Schedule';
import Speakers from './sections/Speakers';
import Topics from './sections/Topics';
import Team from './sections/Team';
import Sponsors from './sections/Sponsors';
import CommunityPartners from './sections/CommunityPartners';
import Venue from './sections/Venue';
import AnnouncementCTA from './sections/AnnouncementCTA';
import FAQ from './sections/FAQ';
import Footer from './components/Footer';
import RevealOnScroll from './components/ui/RevealOnScroll';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import { AuthService } from './services/auth';

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [view, setView] = useState('home'); // 'home', 'login', 'profile'

  useEffect(() => {
    // Check if user is logged in on mount
    const session = AuthService.getCurrentUser();
    if (session) {
      setCurrentUser(session);
    }

    // Basic hash routing listener
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#login') {
        setView('login');
      } else if (hash === '#profile') {
        setView('profile');
      } else {
        setView('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Trigger on initial mount
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleOpenAuth = () => {
    window.location.hash = '#login';
  };

  const handleOpenProfile = () => {
    window.location.hash = '#profile';
  };

  return (
    <div className="grid-bg min-h-screen relative bg-white dark:bg-[#0B1020]">
      {/* Decorative grid accent dots (hidden during print) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden print:hidden">
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
        onOpenAuth={handleOpenAuth} 
        onOpenProfile={handleOpenProfile} 
      />

      <main className="relative z-10 print:z-[200]">
        {view === 'home' && (
          <>
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
          </>
        )}

        {view === 'login' && (
          <LoginPage onLoginSuccess={(user) => setCurrentUser(user)} />
        )}

        {view === 'profile' && (
          <ProfilePage 
            user={currentUser} 
            onLogout={() => setCurrentUser(null)} 
            onUpdateUser={(updatedUser) => setCurrentUser(updatedUser)}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}
