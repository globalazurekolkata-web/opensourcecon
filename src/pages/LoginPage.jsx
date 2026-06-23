import { useState } from 'react';
import { Mail, Lock, User, Briefcase, Compass, CheckCircle, AlertCircle, ArrowLeft } from 'lucide-react';
import { AuthService } from '../services/auth';
import Button from '../components/ui/Button';
import { RiArrowRightLine } from 'react-icons/ri';

export default function LoginPage({ onLoginSuccess }) {
  const [tab, setTab] = useState('login'); // 'login', 'activate', 'register-demo'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  // Registration / Demo Form states
  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regCompany, setRegCompany] = useState('');
  const [regRole, setRegRole] = useState('');

  // Step-based states for activation
  const [activationStep, setActivationStep] = useState(1); // 1: Check Email, 2: Set Password
  const [verifiedTicket, setVerifiedTicket] = useState(null);

  // Status/Alert states
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const resetStates = () => {
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setRegName('');
    setRegEmail('');
    setRegCompany('');
    setRegRole('');
    setActivationStep(1);
    setVerifiedTicket(null);
    setError('');
    setSuccess('');
    setLoading(false);
  };

  const handleGoBackHome = () => {
    window.location.hash = '#home';
  };

  // Sign In submit
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const user = AuthService.login(email, password);
      setSuccess(`Welcome back, ${user.name}!`);
      setTimeout(() => {
        onLoginSuccess(user);
        window.location.hash = '#profile';
      }, 1200);
    } catch (err) {
      setError(err.message || 'Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  // Ticket Activation Step 1: Check Email
  const handleCheckEmail = (e) => {
    e.preventDefault();
    setError('');
    const ticket = AuthService.findTicketByEmail(email);
    if (ticket) {
      // Check if already activated
      try {
        AuthService.activateTicket(email, '');
      } catch (err) {
        if (err.message.includes('already been activated')) {
          setError('This ticket has already been activated. Please sign in.');
          return;
        }
      }
      setVerifiedTicket(ticket);
      setActivationStep(2);
    } else {
      setError('No ticket found for this Email ID. Try a demo registration!');
    }
  };

  // Ticket Activation Step 2: Set Password
  const handleActivateSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setLoading(true);
    try {
      AuthService.activateTicket(email, password);
      setSuccess('Ticket activated successfully! Redirecting to Sign In...');
      setTimeout(() => {
        setTab('login');
        setPassword('');
        setConfirmPassword('');
        setSuccess('');
      }, 2000);
    } catch (err) {
      setError(err.message || 'Activation failed.');
    } finally {
      setLoading(false);
    }
  };

  // Demo Registration Submit
  const handleDemoRegister = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const ticket = AuthService.createDemoTicket(regName, regEmail, regCompany, regRole);
      setSuccess('Demo ticket generated successfully! Now activate it.');
      setEmail(ticket.email);
      setTimeout(() => {
        setTab('activate');
        setActivationStep(2);
        setVerifiedTicket(ticket);
        setSuccess('');
      }, 2000);
    } catch (err) {
      setError(err.message || 'Registration failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center py-24 md:py-32 overflow-hidden bg-white dark:bg-[#0B1020]">
      {/* Background decorations */}
      <div className="absolute inset-0 grid-bg pointer-events-none z-0" />
      <div className="absolute w-[300px] h-[300px] rounded-full bg-brand-green/10 dark:bg-brand-green/5 blur-[80px] pointer-events-none top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute w-[250px] h-[250px] rounded-full bg-brand-green/10 dark:bg-brand-green/5 blur-[80px] pointer-events-none bottom-1/4 right-1/4" />

      {/* Main Container */}
      <div className="max-w-md w-full px-6 relative z-10">
        
        {/* Back Button */}
        <button 
          onClick={handleGoBackHome}
          className="inline-flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-dark dark:text-gray-400 dark:hover:text-white transition-colors mb-6 group bg-transparent border-0 cursor-pointer p-0"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>

        {/* Card */}
        <div className="bg-white dark:bg-[#0f172a]/40 border border-gray-150 dark:border-white/10 rounded-[28px] shadow-xl p-8 backdrop-blur-xl relative overflow-hidden">
          {/* Subtle line glow */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-green/30 to-transparent" />

          {/* Title */}
          <div className="mb-6 text-center">
            <h2 className="font-heading font-extrabold text-2xl text-dark dark:text-white leading-tight">
              {tab === 'login' && 'Welcome Back'}
              {tab === 'activate' && 'Activate Attendee Pass'}
              {tab === 'register-demo' && 'Generate Test Pass'}
            </h2>
            <p className="text-xs text-gray-secondary dark:text-gray-400 mt-1.5 leading-relaxed">
              {tab === 'login' && 'Enter your credentials to access your ticket dashboard.'}
              {tab === 'activate' && 'Unlock your digital ticket and access your profile.'}
              {tab === 'register-demo' && 'Create a simulated ticket to explore the ticket pass design.'}
            </p>
          </div>

          {/* Tabs - Only show when not in demo registration */}
          {tab !== 'register-demo' && (
            <div className="flex border-b border-gray-100 dark:border-white/5 mb-6">
              <button
                onClick={() => { setTab('login'); setError(''); setSuccess(''); }}
                className={`flex-1 pb-3 text-sm font-semibold border-b-2 transition-colors duration-200 ${
                  tab === 'login' 
                    ? 'border-brand-green text-brand-green-dark dark:text-brand-green' 
                    : 'border-transparent text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300'
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => { setTab('activate'); setError(''); setSuccess(''); setActivationStep(1); }}
                className={`flex-1 pb-3 text-sm font-semibold border-b-2 transition-colors duration-200 ${
                  tab === 'activate' 
                    ? 'border-brand-green text-brand-green-dark dark:text-brand-green' 
                    : 'border-transparent text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300'
                }`}
              >
                Activate Pass
              </button>
            </div>
          )}

          {/* Success / Error Alerts */}
          {error && (
            <div className="mb-5 p-3.5 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-red-600 dark:text-red-400 text-xs flex items-start gap-2 select-none text-left animate-fade-in">
              <AlertCircle size={15} className="flex-shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}
          {success && (
            <div className="mb-5 p-3.5 rounded-xl bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 text-green-600 dark:text-brand-green text-xs flex items-start gap-2 select-none text-left animate-fade-in">
              <CheckCircle size={15} className="flex-shrink-0 mt-0.5" />
              <span>{success}</span>
            </div>
          )}

          {/* Tab 1: SIGN IN */}
          {tab === 'login' && (
            <form onSubmit={handleLoginSubmit} className="space-y-4 text-left">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 block">Ticket Email</label>
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3.5 pl-10 rounded-xl bg-gray-50 dark:bg-[#0B1020]/40 border border-gray-200 dark:border-white/10 text-sm text-dark dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-brand-green/30 focus:border-brand-green focus:bg-white dark:focus:bg-dark transition-all"
                  />
                  <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 block">Password</label>
                <div className="relative">
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    className="w-full px-4 py-3.5 pl-10 rounded-xl bg-gray-50 dark:bg-[#0B1020]/40 border border-gray-200 dark:border-white/10 text-sm text-dark dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-brand-green/30 focus:border-brand-green focus:bg-white dark:focus:bg-dark transition-all"
                  />
                  <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
                </div>
              </div>

              <Button
                type="submit"
                disabled={loading}
                variant="primary"
                className="w-full py-3.5 mt-6 text-sm font-semibold"
                icon={RiArrowRightLine}
              >
                {loading ? 'Authenticating...' : 'Sign In'}
              </Button>

              <p className="text-[11px] text-gray-400 dark:text-gray-500 text-center mt-4">
                Need to setup your password?{' '}
                <button
                  type="button"
                  onClick={() => { setTab('activate'); setError(''); }}
                  className="text-brand-green hover:underline font-semibold bg-transparent border-0 cursor-pointer p-0"
                >
                  Activate Pass
                </button>
              </p>
            </form>
          )}

          {/* Tab 2: ACTIVATE PASS */}
          {tab === 'activate' && (
            <div className="space-y-4">
              {/* Step 1: Check Email */}
              {activationStep === 1 && (
                <form onSubmit={handleCheckEmail} className="space-y-4 text-left">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 block">Registration Email</label>
                    <div className="relative">
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@example.com"
                        className="w-full px-4 py-3.5 pl-10 rounded-xl bg-gray-50 dark:bg-[#0B1020]/40 border border-gray-200 dark:border-white/10 text-sm text-dark dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-brand-green/30 focus:border-brand-green focus:bg-white dark:focus:bg-dark transition-all"
                      />
                      <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full py-3.5 mt-6 text-sm font-semibold"
                  >
                    Verify Ticket
                  </Button>

                  <div className="relative flex py-2 items-center">
                    <div className="flex-grow border-t border-gray-100 dark:border-white/5"></div>
                    <span className="flex-shrink mx-4 text-[10px] text-gray-450 uppercase tracking-widest font-mono">Or test locally</span>
                    <div className="flex-grow border-t border-gray-100 dark:border-white/5"></div>
                  </div>

                  <Button
                    onClick={() => { setTab('register-demo'); setError(''); }}
                    variant="outline"
                    className="w-full py-3.5 text-sm font-semibold bg-transparent dark:text-white border-gray-200 dark:border-white/10"
                  >
                    Generate a Mock Ticket
                  </Button>
                </form>
              )}

              {/* Step 2: Set Password */}
              {activationStep === 2 && verifiedTicket && (
                <form onSubmit={handleActivateSubmit} className="space-y-4 text-left">
                  <div className="p-4 bg-gray-50 dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/5 mb-2">
                    <span className="text-[9px] font-extrabold font-mono text-brand-green uppercase tracking-wider block">Ticket Found</span>
                    <span className="text-base font-extrabold text-dark dark:text-white block mt-0.5">{verifiedTicket.name}</span>
                    <span className="text-xs text-gray-400 dark:text-gray-400 block mt-0.5">{verifiedTicket.ticketNo} • {verifiedTicket.tier}</span>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-500 dark:text-gray-405 block">Create Password</label>
                    <div className="relative">
                      <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Min. 6 characters"
                        className="w-full px-4 py-3.5 pl-10 rounded-xl bg-gray-50 dark:bg-[#0B1020]/40 border border-gray-200 dark:border-white/10 text-sm text-dark dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-brand-green/30 focus:border-brand-green focus:bg-white dark:focus:bg-dark transition-all"
                      />
                      <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-500 dark:text-gray-405 block">Confirm Password</label>
                    <div className="relative">
                      <input
                        type="password"
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Re-enter password"
                        className="w-full px-4 py-3.5 pl-10 rounded-xl bg-gray-50 dark:bg-[#0B1020]/40 border border-gray-200 dark:border-white/10 text-sm text-dark dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-brand-green/30 focus:border-brand-green focus:bg-white dark:focus:bg-dark transition-all"
                      />
                      <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    variant="primary"
                    className="w-full py-3.5 mt-6 text-sm font-semibold"
                  >
                    {loading ? 'Activating...' : 'Activate My Pass'}
                  </Button>
                </form>
              )}
            </div>
          )}

          {/* Tab 3: REGISTER DEMO TICKET */}
          {tab === 'register-demo' && (
            <form onSubmit={handleDemoRegister} className="space-y-3.5 text-left animate-fade-in">
              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-gray-500 dark:text-gray-400 block">Your Name</label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={regName}
                    onChange={(e) => setRegName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full px-3.5 py-2.5 pl-9 rounded-xl bg-gray-50 dark:bg-[#0B1020]/40 border border-gray-200 dark:border-white/10 text-sm text-dark dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-brand-green/30 focus:border-brand-green focus:bg-white dark:focus:bg-dark transition-all"
                  />
                  <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-gray-500 dark:text-gray-400 block">Email Address</label>
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={regEmail}
                    onChange={(e) => setRegEmail(e.target.value)}
                    placeholder="john@example.com"
                    className="w-full px-3.5 py-2.5 pl-9 rounded-xl bg-gray-50 dark:bg-[#0B1020]/40 border border-gray-200 dark:border-white/10 text-sm text-dark dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-brand-green/30 focus:border-brand-green focus:bg-white dark:focus:bg-dark transition-all"
                  />
                  <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-gray-500 dark:text-gray-400 block">Organization / College</label>
                <div className="relative">
                  <input
                    type="text"
                    value={regCompany}
                    onChange={(e) => setRegCompany(e.target.value)}
                    placeholder="e.g. Motorola / IIT"
                    className="w-full px-3.5 py-2.5 pl-9 rounded-xl bg-gray-50 dark:bg-[#0B1020]/40 border border-gray-200 dark:border-white/10 text-sm text-dark dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-brand-green/30 focus:border-brand-green focus:bg-white dark:focus:bg-dark transition-all"
                  />
                  <Briefcase size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-gray-500 dark:text-gray-400 block">Role / Designation</label>
                <div className="relative">
                  <input
                    type="text"
                    value={regRole}
                    onChange={(e) => setRegRole(e.target.value)}
                    placeholder="e.g. SRE / Student"
                    className="w-full px-3.5 py-2.5 pl-9 rounded-xl bg-gray-50 dark:bg-[#0B1020]/40 border border-gray-200 dark:border-white/10 text-sm text-dark dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-brand-green/30 focus:border-brand-green focus:bg-white dark:focus:bg-dark transition-all"
                  />
                  <Compass size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
                </div>
              </div>

              <div className="flex gap-3 pt-3">
                <Button
                  onClick={() => { setTab('activate'); setError(''); setActivationStep(1); }}
                  variant="outline"
                  className="flex-1 py-3 text-xs font-semibold bg-transparent dark:text-white border-gray-200 dark:border-white/10"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={loading}
                  variant="primary"
                  className="flex-1 py-3 text-xs font-semibold"
                >
                  {loading ? 'Generating...' : 'Generate Ticket'}
                </Button>
              </div>
            </form>
          )}

        </div>
      </div>
    </section>
  );
}
