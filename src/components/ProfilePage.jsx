import { LogOut, Printer, Ticket, Calendar, MapPin, Building, Briefcase, Mail, CheckCircle, ArrowLeft } from 'lucide-react';
import { AuthService } from '../services/auth';
import Button from './Button';

export default function ProfilePage({ user, onLogout }) {
  if (!user) {
    // If no session exists, redirect to login
    window.location.hash = '#login';
    return null;
  }

  const handleLogoutClick = () => {
    AuthService.logout();
    onLogout();
    window.location.hash = '#home';
  };

  const handlePrint = () => {
    window.print();
  };

  const handleGoBackHome = () => {
    window.location.hash = '#home';
  };

  // Helper to get initials
  const getInitials = (name) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center py-24 md:py-32 overflow-hidden bg-white dark:bg-[#0B1020] print:bg-white print:p-0 print:absolute print:inset-0 print:z-[200]">
      {/* Background decorations (hidden during print) */}
      <div className="absolute inset-0 grid-bg pointer-events-none z-0 print:hidden" />
      <div className="absolute w-[300px] h-[300px] rounded-full bg-brand-green/10 dark:bg-brand-green/5 blur-[80px] pointer-events-none top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 print:hidden" />
      <div className="absolute w-[250px] h-[250px] rounded-full bg-brand-green/10 dark:bg-brand-green/5 blur-[80px] pointer-events-none bottom-1/4 right-1/4 print:hidden" />

      {/* Main Container */}
      <div className="max-w-2xl w-full px-6 relative z-10 print:p-0 print:w-auto">
        
        {/* Back Button (hidden during print) */}
        <button 
          onClick={handleGoBackHome}
          className="inline-flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-dark dark:text-gray-400 dark:hover:text-white transition-colors mb-6 group bg-transparent border-0 cursor-pointer p-0 print:hidden"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>

        {/* Card wrapper */}
        <div className="bg-white dark:bg-[#0f172a]/40 border border-gray-150 dark:border-white/10 rounded-[28px] shadow-xl p-8 md:p-10 backdrop-blur-xl relative overflow-hidden print:shadow-none print:border-0 print:p-0">
          {/* Subtle line glow */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-green/30 to-transparent print:hidden" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center print:block">
            
            {/* Column 1: Premium Digital Pass (Col span 5) */}
            <div className="md:col-span-5 flex justify-center print:block">
              {/* Ticket Card container */}
              <div 
                className="w-full max-w-[250px] aspect-[5/8] rounded-[24px] bg-[#0A0E1A] border border-brand-green/20 p-5 flex flex-col justify-between text-white relative shadow-xl overflow-hidden print:border-gray-300 print:text-black print:bg-white"
                style={{
                  boxShadow: '0 10px 30px rgba(82, 210, 55, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
                }}
              >
                {/* Tech elements */}
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-brand-green/5 blur-xl pointer-events-none print:hidden" />
                <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white dark:bg-[#0b1020] border-r border-brand-green/20 print:hidden" />
                <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white dark:bg-[#0b1020] border-l border-brand-green/20 print:hidden" />

                {/* Ticket Header */}
                <div className="flex items-start justify-between border-b border-white/10 pb-3 print:border-gray-200">
                  <div className="space-y-0.5 text-left">
                    <span className="text-[7px] font-mono font-bold tracking-widest text-brand-green uppercase">
                      OpenSourceCon
                    </span>
                    <span className="text-[10px] font-heading font-extrabold text-white block leading-none print:text-black">
                      KOLKATA '26
                    </span>
                  </div>
                  <span className="text-[7px] font-mono px-2 py-0.5 rounded-full border border-brand-green/30 text-brand-green bg-brand-green/5 select-none print:border-gray-400 print:text-black">
                    {user.tier}
                  </span>
                </div>

                {/* Ticket Body / QR Code */}
                <div className="flex flex-col items-center py-4 my-auto">
                  {/* Stylized QR Code Mock */}
                  <div className="w-26 h-26 bg-white border-2 border-brand-green/30 rounded-xl p-2 flex items-center justify-center shadow-lg relative print:border-gray-400">
                    <svg className="w-full h-full text-[#0B1020]" viewBox="0 0 100 100" fill="currentColor">
                      <rect x="5" y="5" width="25" height="25" fill="black" />
                      <rect x="9" y="9" width="17" height="17" fill="white" />
                      <rect x="13" y="13" width="9" height="9" fill="black" />
                      
                      <rect x="70" y="5" width="25" height="25" fill="black" />
                      <rect x="74" y="9" width="17" height="17" fill="white" />
                      <rect x="78" y="13" width="9" height="9" fill="black" />
                      
                      <rect x="5" y="70" width="25" height="25" fill="black" />
                      <rect x="9" y="74" width="17" height="17" fill="white" />
                      <rect x="13" y="78" width="9" height="9" fill="black" />
                      
                      <rect x="40" y="40" width="20" height="20" fill="black" />
                      <rect x="44" y="44" width="12" height="12" fill="white" />
                      
                      <rect x="40" y="10" width="10" height="5" />
                      <rect x="55" y="20" width="5" height="15" />
                      <rect x="15" y="45" width="10" height="10" />
                      <rect x="10" y="60" width="5" height="5" />
                      <rect x="45" y="75" width="15" height="10" />
                      <rect x="75" y="45" width="10" height="5" />
                      <rect x="85" y="60" width="10" height="20" />
                      <rect x="70" y="85" width="20" height="5" />
                    </svg>
                  </div>
                  <span className="text-[9px] font-mono tracking-widest text-gray-500 mt-3.5 block select-none">
                    {user.ticketNo}
                  </span>
                </div>

                {/* Ticket Footer */}
                <div className="border-t border-white/10 pt-3 flex flex-col items-start gap-1 text-left print:border-gray-200">
                  <span className="text-[7px] font-mono text-gray-500 uppercase leading-none">
                    ATTENDEE PASS
                  </span>
                  <span className="text-sm font-extrabold text-white truncate max-w-full leading-tight print:text-black">
                    {user.name}
                  </span>
                  <span className="text-[7px] text-gray-405 font-medium truncate max-w-full leading-none print:text-gray-600">
                    {user.company}
                  </span>
                </div>

              </div>
            </div>

            {/* Column 2: Account Details & Actions (Col span 7) */}
            <div className="md:col-span-7 space-y-6 text-left print:hidden">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-brand-green/10 text-brand-green-dark dark:text-brand-green flex items-center justify-center font-heading font-extrabold text-lg border border-brand-green/20">
                    {getInitials(user.name)}
                  </div>
                  <div>
                    <h4 className="font-heading font-extrabold text-xl text-dark dark:text-white leading-tight">
                      {user.name}
                    </h4>
                    <div className="flex items-center gap-1.5 mt-0.5 text-xs text-brand-green font-semibold">
                      <CheckCircle size={13} />
                      <span>Ticket Validated</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Detail list */}
              <div className="p-5 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 rounded-2xl space-y-3.5">
                <div className="flex items-center gap-3 text-sm">
                  <Mail size={16} className="text-gray-400 flex-shrink-0" />
                  <div className="min-w-0">
                    <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide block leading-none">Email Address</span>
                    <span className="text-dark dark:text-white font-medium block mt-1 truncate">{user.email}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Building size={16} className="text-gray-400 flex-shrink-0" />
                  <div>
                    <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide block leading-none">Organization</span>
                    <span className="text-dark dark:text-white font-medium block mt-1">{user.company}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Briefcase size={16} className="text-gray-400 flex-shrink-0" />
                  <div>
                    <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide block leading-none">Role / Designation</span>
                    <span className="text-dark dark:text-white font-medium block mt-1">{user.role}</span>
                  </div>
                </div>
              </div>

              {/* Event details summary */}
              <div className="flex items-center justify-between p-4 bg-brand-green/5 dark:bg-brand-green/5 rounded-2xl border border-brand-green/10">
                <div className="flex items-center gap-3 text-left">
                  <Calendar size={18} className="text-brand-green-dark dark:text-brand-green" />
                  <div>
                    <span className="text-xs font-bold text-dark dark:text-white leading-none block">5th December 2026</span>
                    <span className="text-[10px] font-medium text-gray-400 block mt-1">09:00 AM onwards</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-left">
                  <MapPin size={18} className="text-brand-green-dark dark:text-brand-green" />
                  <div>
                    <span className="text-xs font-bold text-dark dark:text-white leading-none block">Newtown, Kolkata</span>
                    <span className="text-[10px] font-medium text-gray-400 block mt-1">Venue TBA</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-2">
                <Button
                  onClick={handlePrint}
                  variant="outline"
                  className="flex-1 py-3 text-xs font-semibold bg-transparent dark:text-white border-gray-250 dark:border-white/10"
                  icon={Printer}
                  iconPosition="left"
                >
                  Print Pass
                </Button>
                <Button
                  onClick={handleLogoutClick}
                  variant="secondary"
                  className="flex-1 py-3 text-xs font-semibold bg-gray-150 dark:bg-white/10 border-0 text-dark dark:text-white hover:bg-gray-200 dark:hover:bg-white/15"
                  icon={LogOut}
                  iconPosition="left"
                >
                  Log Out
                </Button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
