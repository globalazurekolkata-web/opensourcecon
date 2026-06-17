import { useState } from 'react';
import { X, Mail, Lock, User, Briefcase, Compass, Ticket, CheckCircle, AlertCircle } from 'lucide-react';
import { AuthService } from '../services/auth';
import Button from './Button';
import { RiArrowRightLine } from 'react-icons/ri';

export default function AuthModal({ isOpen, onClose, onLoginSuccess }) {
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

  if (!isOpen) return null;

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

  const handleClose = () => {
    resetStates();
    onClose();
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
        handleClose();
      }, 1500);
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
      // Auto-fill activation email and switch tab
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
    <div 
      className="fixed inset-0 bg-black/60 dark:bg-black/85 backdrop-blur-md z-[100] flex items-center justify-center p-4 animate-fade-in"
      onClick={handleClose}
    >
      <div 
        className="bg-white dark:bg-[#0b1020] border border-gray-150 dark:border-white/10 rounded-2xl max-w-md w-full shadow-2xl relative overflow-hidden transform transition-all animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow decoration */}
        <div className="absolute w-[180px] h-[180px] rounded-full bg-brand-green/10 dark:bg-brand-green/5 blur-[50px] pointer-events-none -top-10 -left-10" />

        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-white/5 relative z-10">
          <h3 className="font-heading font-bold text-lg text-dark dark:text-white">
            {tab === 'login' && 'Attendee Login'}
            {tab === 'activate' && 'Activate Your Ticket'}
            {tab === 'register-demo' && 'Register Demo Ticket'}
          </h3>
          <button 
            onClick={handleClose}
            className="text-gray-400 hover:text-dark dark:hover:text-white transition-colors p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Tabs - Only show when not in demo registration */}
        {tab !== 'register-demo' && (
          <div className="flex border-b border-gray-100 dark:border-white/5 px-6 pt-2 relative z-10">
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

        {/* Form Body */}
        <div className="p-6 relative z-10">
          {/* Success / Error Alerts */}
          {error && (
            <div className="mb-4 p-3 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-red-600 dark:text-red-400 text-xs flex items-start gap-2 select-none">
              <AlertCircle size={15} className="flex-shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}
          {success && (
            <div className="mb-4 p-3 rounded-xl bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 text-green-600 dark:text-brand-green text-xs flex items-start gap-2 select-none">
              <CheckCircle size={15} className="flex-shrink-0 mt-0.5" />
              <span>{success}</span>
            </div>
          )}

          {/* Tab 1: SIGN IN */}
          {tab === 'login' && (
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-500 dark:text-gray-450 block">Ticket Email</label>
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 pl-10 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-sm text-dark dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-brand-green/30 focus:border-brand-green transition-all"
                  />
                  <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-500 dark:text-gray-450 block">Password</label>
                <div className="relative">
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full px-4 py-3 pl-10 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-sm text-dark dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-brand-green/30 focus:border-brand-green transition-all"
                  />
                  <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
                </div>
              </div>

              <Button
                type="submit"
                disabled={loading}
                variant="primary"
                className="w-full py-3 mt-6 text-sm font-semibold"
                icon={RiArrowRightLine}
              >
                {loading ? 'Signing In...' : 'Sign In to Profile'}
              </Button>

              <p className="text-[11px] text-gray-400 dark:text-gray-500 text-center mt-4">
                Haven't activated your ticket pass?{' '}
                <button
                  type="button"
                  onClick={() => { setTab('activate'); setError(''); }}
                  className="text-brand-green hover:underline font-semibold"
                >
                  Activate Pass
                </button>
              </p>
            </form>
          )}

          {/* Tab 2: ACTIVATE TICKET */}
          {tab === 'activate' && (
            <div className="space-y-4">
              {/* Step 1: Check Email */}
              {activationStep === 1 && (
                <form onSubmit={handleCheckEmail} className="space-y-4">
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-2">
                    Enter the email address you used to register for your OpenSourceCon ticket on KonfHub.
                  </p>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-500 dark:text-gray-450 block">Registered Email</label>
                    <div className="relative">
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@example.com"
                        className="w-full px-4 py-3 pl-10 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-sm text-dark dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-brand-green/30 focus:border-brand-green transition-all"
                      />
                      <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full py-3 mt-6 text-sm font-semibold"
                  >
                    Verify Registration
                  </Button>

                  <div className="relative flex py-2 items-center">
                    <div className="flex-grow border-t border-gray-100 dark:border-white/5"></div>
                    <span className="flex-shrink mx-4 text-[10px] text-gray-400 uppercase tracking-widest font-mono">Or test locally</span>
                    <div className="flex-grow border-t border-gray-100 dark:border-white/5"></div>
                  </div>

                  <Button
                    onClick={() => { setTab('register-demo'); setError(''); }}
                    variant="outline"
                    className="w-full py-3 text-sm font-semibold bg-transparent dark:text-white"
                  >
                    Register a Demo Ticket
                  </Button>
                </form>
              )}

              {/* Step 2: Set Password */}
              {activationStep === 2 && verifiedTicket && (
                <form onSubmit={handleActivateSubmit} className="space-y-4">
                  <div className="p-3 bg-gray-50 dark:bg-white/5 rounded-xl border border-gray-100 dark:border-white/5 mb-2 text-left">
                    <span className="text-[9px] font-bold font-mono text-brand-green uppercase tracking-wider block">Ticket Verified!</span>
                    <span className="text-sm font-extrabold text-dark dark:text-white block mt-0.5">{verifiedTicket.name}</span>
                    <span className="text-xs text-gray-400 dark:text-gray-400 block mt-0.5">{verifiedTicket.ticketNo} — {verifiedTicket.tier}</span>
                  </div>

                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-2">
                    Create a password to secure your digital pass credentials.
                  </p>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-500 dark:text-gray-45 block">Password</label>
                    <div className="relative">
                      <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Min. 6 characters"
                        className="w-full px-4 py-3 pl-10 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-sm text-dark dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-brand-green/30 focus:border-brand-green transition-all"
                      />
                      <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-500 dark:text-gray-45 block">Confirm Password</label>
                    <div className="relative">
                      <input
                        type="password"
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Re-enter password"
                        className="w-full px-4 py-3 pl-10 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-sm text-dark dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-brand-green/30 focus:border-brand-green transition-all"
                      />
                      <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    variant="primary"
                    className="w-full py-3 mt-6 text-sm font-semibold"
                  >
                    {loading ? 'Activating...' : 'Activate Attendee Pass'}
                  </Button>
                </form>
              )}
            </div>
          )}

          {/* Tab 3: REGISTER DEMO TICKET */}
          {tab === 'register-demo' && (
            <form onSubmit={handleDemoRegister} className="space-y-3">
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-2">
                Don't have a KonfHub ticket? Enter your details to generate a mock pass to test the login/ticket flow.
              </p>

              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-gray-500 dark:text-gray-45 block">Full Name</label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={regName}
                    onChange={(e) => setRegName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full px-3.5 py-2.5 pl-9 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-sm text-dark dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-brand-green/30 focus:border-brand-green transition-all"
                  />
                  <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-450" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-gray-500 dark:text-gray-45 block">Email Address</label>
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={regEmail}
                    onChange={(e) => setRegEmail(e.target.value)}
                    placeholder="john@example.com"
                    className="w-full px-3.5 py-2.5 pl-9 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-sm text-dark dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-brand-green/30 focus:border-brand-green transition-all"
                  />
                  <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-450" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-gray-500 dark:text-gray-45 block">Organization / College</label>
                <div className="relative">
                  <input
                    type="text"
                    value={regCompany}
                    onChange={(e) => setRegCompany(e.target.value)}
                    placeholder="e.g. CastAI / JU"
                    className="w-full px-3.5 py-2.5 pl-9 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-sm text-dark dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-brand-green/30 focus:border-brand-green transition-all"
                  />
                  <Briefcase size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-450" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-gray-500 dark:text-gray-45 block">Role / Designation</label>
                <div className="relative">
                  <input
                    type="text"
                    value={regRole}
                    onChange={(e) => setRegRole(e.target.value)}
                    placeholder="e.g. Developer / Student"
                    className="w-full px-3.5 py-2.5 pl-9 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-sm text-dark dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-brand-green/30 focus:border-brand-green transition-all"
                  />
                  <Compass size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-450" />
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
                  {loading ? 'Registering...' : 'Register Pass'}
                </Button>
              </div>
            </form>
          )}

        </div>
      </div>
    </div>
  );
}
