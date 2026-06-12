import { useState } from 'react';
import { Bell, Loader2, Check } from 'lucide-react';

export default function AnnouncementCTA() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(''); // '', 'loading', 'success', 'error'
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('');

    if (!email) {
      setStatus('error');
      setMessage('Please enter your email.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    
    // Simulate API request
    setTimeout(() => {
      setStatus('success');
      setMessage('Success! We will keep you updated.');
      setEmail('');
    }, 1500);
  };

  return (
    <section className="py-4">
      <div className="max-w-container mx-auto px-6 lg:px-8">
        <div className="relative rounded-card overflow-hidden diagonal-pattern" style={{ background: 'linear-gradient(135deg, #63D940 0%, #52D237 50%, #3DB82A 100%)' }}>
          {/* Content */}
          <div className="relative z-10 py-16 md:py-20 px-8 text-center">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-dark leading-[1.1] mb-4">
              Don't miss
              <br />
              the announcement
            </h2>
            <p className="text-dark/77 text-base md:text-lg mb-8 max-w-md mx-auto">
              Be the first to know about the next big thing, keynote reveals, and exclusive early-bird announcements.
            </p>

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-3">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  disabled={status === 'loading'}
                  className="flex-1 px-5 py-3.5 rounded-xl bg-white/90 backdrop-blur-sm border-0 text-sm text-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-dark/20 disabled:opacity-50 transition-all"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-dark text-white font-semibold text-sm hover:bg-dark/90 transition-colors disabled:bg-dark/80"
                >
                  {status === 'loading' ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : status === 'success' ? (
                    <Check size={16} />
                  ) : (
                    <Bell size={16} />
                  )}
                  {status === 'loading' ? 'Notifying...' : status === 'success' ? 'Notified!' : 'Notify Me'}
                </button>
              </div>

              {/* Status Message */}
              {message && (
                <p
                  className={`text-xs font-semibold tracking-wide animate-fade-up ${
                    status === 'error' ? 'text-red-700' : 'text-dark'
                  }`}
                >
                  {message}
                </p>
              )}
            </form>
          </div>

          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/10 -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-white/10 translate-y-1/2 -translate-x-1/4" />
        </div>
      </div>
    </section>
  );
}

