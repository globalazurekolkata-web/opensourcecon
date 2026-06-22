import { Mail } from 'lucide-react';

export default function AnnouncementCTA() {
  return (
    <section className="py-12 sm:py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none z-0 opacity-50" />
      
      <div className="max-w-container mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Main CTA Card - Redesigned to Premium Dark Mode */}
        <div className="relative rounded-[2rem] sm:rounded-[3rem] overflow-hidden bg-gradient-to-b from-[#0a1208] via-[#142611] to-black max-w-6xl mx-auto shadow-2xl border border-gray-800">
           
           {/* Dark grid pattern */}
           <div 
             className="absolute inset-0 opacity-15 pointer-events-none z-0" 
             style={{
               backgroundImage: 'linear-gradient(rgba(86, 214, 75, 0.2) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(86, 214, 75, 0.2) 1.5px, transparent 1.5px)',
               backgroundSize: '72px 72px'
             }}
           />

           {/* Glowing animated background */}
           <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-green/15 via-transparent to-transparent opacity-80 blur-2xl pointer-events-none" />
           {/* Decorative elements */}
           <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-green/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

           <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 p-8 sm:p-12 md:p-16 relative z-10 items-center">
              
              {/* Left: Text Content & Stats */}
              <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
                 <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-green/10 text-brand-green text-[10px] sm:text-xs font-bold uppercase tracking-wider mx-auto lg:mx-0 border border-brand-green/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
                    Partner Program
                 </div>
                 
                 <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] leading-[1.2] text-white font-medium">
                    Build with us. <br className="hidden sm:block" />
                    <span className="text-brand-green font-bold">Join as a Representative.</span>
                 </h2>
                 
                 <p className="text-gray-400 text-sm sm:text-base max-w-md mx-auto lg:mx-0 leading-relaxed">
                    Interested in bringing your community? Join our community partner program and collaborate with developers across Bengal to shape the future of open source.
                 </p>

                 {/* Stats inline integrated into the card */}
                 <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-8 pt-4 sm:pt-6 border-t border-gray-800">
                     <div className="flex flex-col">
                       <span className="text-white font-heading font-extrabold text-2xl sm:text-3xl">20+</span>
                       <span className="text-[9px] sm:text-[10px] text-gray-500 uppercase tracking-widest font-semibold mt-1">Communities</span>
                     </div>
                     <div className="w-px h-10 bg-gray-800 hidden sm:block" />
                     <div className="flex flex-col">
                       <span className="text-white font-heading font-extrabold text-2xl sm:text-3xl">1000+</span>
                       <span className="text-[9px] sm:text-[10px] text-gray-500 uppercase tracking-widest font-semibold mt-1">Members</span>
                     </div>
                     <div className="w-px h-10 bg-gray-800 hidden sm:block" />
                     <div className="flex flex-col">
                       <span className="text-white font-heading font-extrabold text-2xl sm:text-3xl">5+</span>
                       <span className="text-[9px] sm:text-[10px] text-gray-500 uppercase tracking-widest font-semibold mt-1">Cities</span>
                     </div>
                 </div>
              </div>

              {/* Right: Glassmorphic Application Form */}
              <div className="bg-white/5 border border-white/10 rounded-[24px] p-6 sm:p-8 backdrop-blur-md shadow-2xl relative overflow-hidden group">
                 {/* Subtle hover glow on form */}
                 <div className="absolute inset-0 bg-gradient-to-br from-brand-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                 
                 <div className="relative z-10">
                   <h3 className="text-white font-bold text-lg sm:text-xl mb-6 text-center sm:text-left">
                     Apply for Partnership
                   </h3>
                   <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                      <div className="space-y-2">
                         <label className="text-[10px] sm:text-[11px] font-bold text-gray-400 uppercase tracking-widest ml-1">
                           Community Email
                         </label>
                         <div className="relative">
                           <input
                              type="email"
                              placeholder="hello@yourcommunity.com"
                              required
                              className="w-full px-5 py-4 pl-12 rounded-xl bg-dark/60 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-green/50 border border-white/10 transition-all shadow-inner"
                           />
                           <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                              <Mail size={18} />
                           </span>
                         </div>
                      </div>
                      
                      <button 
                         type="submit"
                         className="w-full py-4 rounded-xl bg-brand-green text-dark font-extrabold text-sm hover:bg-white transition-all shadow-[0_0_20px_rgba(86,214,75,0.15)] hover:shadow-[0_0_30px_rgba(86,214,75,0.3)] transform hover:-translate-y-0.5"
                      >
                         Submit Application
                      </button>
                      
                      <p className="text-[10px] text-center text-gray-500 pt-2 font-medium">
                         We usually respond within 48 hours.
                      </p>
                   </form>
                 </div>
              </div>

           </div>
        </div>

      </div>
    </section>
  );
}
