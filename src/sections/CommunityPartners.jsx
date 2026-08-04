import { ArrowRight, Users, Award, Ticket } from 'lucide-react';
import Button from '../components/ui/Button';
import { openKonfHub } from '../utils/konfhub';

const partners = [
  { name: 'CNCG Delhi', logo: '/images/community-partners/cncg-delhi.jpg' },
  { name: 'CNCG Kolkata', logo: '/images/community-partners/CNCG Kolkata.png' },
  { name: 'CNCG Lucknow', logo: '/images/community-partners/CNCG Lucknow.png' },
  { name: 'CNCG Hyderabad', logo: '/images/community-partners/CNCG Hyderabad.png' },
  { name: 'Women in Cloud Native', logo: '/images/community-partners/Women in Cloud Native.jpeg' },
  { name: 'Kolkata IT Hub', logo: '/images/community-partners/Kolkata IT Hub.jpeg' },
  { name: 'From Dev to Ops', logo: '/images/community-partners/from dev to ops.png' },
  { name: 'Kolkata Calling', logo: '/images/community-partners/Kolkata Calling.png' },
  { name: 'DevConf India', logo: '/images/community-partners/devconf-in-inverse.png', darkBg: true },
  { name: 'Flutter Kolkata', logo: '/images/community-partners/flutter_kolkata.png' },
  { name: 'Global Azure Kolkata', logo: '/images/community-partners/global-azure-kolkata.jpeg' },
  { name: 'React Kolkata', logo: '/images/community-partners/React Kolkata.png' },
  { name: 'Litmus', logo: '/images/community-partners/litmus.png' },
  { name: 'Kolkata WordPress', logo: '/images/community-partners/kolkata wordpress.png' },
  { name: 'Developers Kolkata', logo: '/images/community-partners/developers kolkata.png' },
  { name: 'CodeRush X', logo: '/images/community-partners/CodeRush X.png' },
  { name: 'GDGOC TMSL', logo: '/images/community-partners/GDGOC TMSL.jpg' },
  { name: 'GDGOC AOT', logo: '/images/community-partners/GDGOC AOT.png' },
  { name: 'GDGOC MSIT', logo: '/images/community-partners/GDGOC MSIT.png' },
  { name: 'FIEM ACM Student Chapter', logo: '/images/community-partners/FIEM ACM Student Chapter.jpg' },
  { name: 'RightSignal', logo: '/images/community-partners/RightSignal.jpeg' },
  { name: 'Bug Busters', logo: '/images/community-partners/bug busters.png' },
];

export default function CommunityPartners() {
  return (
    <section id="community" className="py-20 lg:py-28 relative bg-gray-50 dark:bg-[#0B1020] overflow-hidden border-t border-gray-100 dark:border-white/5">
      <div className="absolute inset-0 grid-bg pointer-events-none z-0" />
      
      <div className="max-w-container mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-16">
          <div className="section-tag inline-flex items-center gap-1.5 mx-auto">
            <span className="green-dot animate-pulse" />
            OUR PARTNERS
          </div>
          
          <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] leading-[1.2]! tracking-tight text-dark dark:text-white">
            <span className="font-medium">Communities that</span>
            <br />
            <span className="text-gradient uppercase font-bold">POWER US</span>
          </h2>
          
          <p className="text-gray-secondary dark:text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Open Source Con India is built on the shoulders of amazing developer communities. Meet the partners helping us grow the ecosystem in Kolkata and beyond.
          </p>
        </div>

        {/* Layout for Partners */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {partners.map((partner, i) => (
              <div 
                key={i} 
                className="card flex flex-col items-center justify-center p-5 aspect-[4/3] w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-1rem)] md:w-[calc(25%-1.125rem)] hover:border-brand-green/30 hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Logo Frame */}
                <div className={`h-[65%] w-full flex items-center justify-center rounded-xl overflow-hidden p-3 transition-all duration-300 ${
                  partner.darkBg 
                    ? 'bg-[#0a1208]/90 dark:bg-black/40 border border-brand-green/15 shadow-inner' 
                    : 'bg-transparent border border-transparent'
                }`}>
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Partner Name Label */}
                <span className="font-heading font-extrabold text-[11px] sm:text-xs text-gray-secondary dark:text-gray-400 group-hover:text-dark dark:group-hover:text-white transition-colors mt-3 text-center px-1 truncate w-full select-none">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Special Featured Partners Showcase */}
        <div className="max-w-4xl mx-auto mb-16 space-y-12">
          {/* Official Ticketing Partner Showcase */}
          <div>
            <div className="flex items-center justify-center gap-3 sm:gap-6 w-full mb-8">
              <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-brand-green/30 to-brand-green/15" />
              <div className="inline-flex items-center gap-2 sm:gap-2.5 px-4 sm:px-6 py-2 rounded-full bg-white dark:bg-[#070c06] border border-brand-green/30 shadow-[0_0_20px_rgba(86,214,75,0.12)] backdrop-blur-md transition-all duration-300">
                <Ticket size={18} className="text-brand-green shrink-0" />
                <h3 className="font-heading font-extrabold text-xs sm:text-sm tracking-[0.15em] text-dark dark:text-white uppercase select-none whitespace-nowrap">
                  Official Ticketing Partner
                </h3>
              </div>
              <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-brand-green/30 to-brand-green/15" />
            </div>

            <div 
              onClick={openKonfHub}
              className="card p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 sm:gap-8 border border-brand-green/30 bg-gradient-to-r from-brand-green/[0.05] via-transparent to-brand-green/[0.05] dark:bg-black/30 hover:border-brand-green/50 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer group"
            >
              <div className="w-48 h-28 flex items-center justify-center p-4 bg-white dark:bg-black/60 rounded-2xl border border-gray-150 dark:border-white/10 shadow-inner flex-shrink-0">
                <img 
                  src="/images/community-partners/Konfhub.png" 
                  alt="KonfHub - Official Ticketing Partner" 
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="text-center sm:text-left flex-1 space-y-2">
                <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-2">
                  <h4 className="font-heading font-extrabold text-2xl text-dark dark:text-white group-hover:text-brand-green transition-colors">
                    KonfHub
                  </h4>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-green group-hover:translate-x-0.5 transition-transform">
                    Register Now <ArrowRight size={14} />
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">
                  Powering seamless event registration, ticketing, and check-ins for Open Source Con India 2026.
                </p>
              </div>
            </div>
          </div>

          {/* Digital Credentials Partner Showcase */}
          <div>
            <div className="flex items-center justify-center gap-3 sm:gap-6 w-full mb-8">
              <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-brand-green/30 to-brand-green/15" />
              <div className="inline-flex items-center gap-2 sm:gap-2.5 px-4 sm:px-6 py-2 rounded-full bg-white dark:bg-[#070c06] border border-brand-green/30 shadow-[0_0_20px_rgba(86,214,75,0.12)] backdrop-blur-md transition-all duration-300">
                <Award size={18} className="text-brand-green shrink-0" />
                <h3 className="font-heading font-extrabold text-xs sm:text-sm tracking-[0.15em] text-dark dark:text-white uppercase select-none whitespace-nowrap">
                  Digital Credentials Partner
                </h3>
              </div>
              <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-brand-green/30 to-brand-green/15" />
            </div>

            <div className="card p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 sm:gap-8 border border-brand-green/30 bg-gradient-to-r from-brand-green/[0.05] via-transparent to-brand-green/[0.05] dark:bg-black/30 hover:border-brand-green/50 transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="w-48 h-28 flex items-center justify-center p-4 bg-white dark:bg-black/60 rounded-2xl border border-gray-150 dark:border-white/10 shadow-inner flex-shrink-0">
                <img 
                  src="/images/community-partners/CertDirectory Credentials.png" 
                  alt="CertDirectory - Digital Credentials Partner" 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              
              <div className="text-center sm:text-left flex-1 space-y-2">
                <h4 className="font-heading font-extrabold text-2xl text-dark dark:text-white">
                  CertDirectory
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">
                  Powering verifiable, tamper-proof digital certificates & achievement badges for all Open Source Con India 2026 attendees, speakers, and volunteers.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Partnership CTA */}
        <div id="partner-cta" className="mt-16 mb-8 text-center max-w-3xl mx-auto pt-6">
          <div className="w-16 h-16 mx-auto rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green mb-6">
            <Users size={32} strokeWidth={1.5} />
          </div>
          <h4 className="font-heading font-bold text-3xl md:text-4xl text-dark dark:text-white mb-4">
            Interested in partnering with us?
          </h4>
          <p className="text-gray-500 dark:text-gray-400 text-base md:text-lg leading-relaxed mb-8">
            Collaborate with India's largest community-led developer conference. Provide outreach support, register your campus group, or host local satellite meetups.
          </p>
          <Button
            href="https://docs.google.com/forms/d/e/1FAIpQLSe50iD7K4mf6JYTSou4sRreWsWXl1wGxV4Dsz-Ga9HoU7d5fg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            className="w-full sm:w-auto py-4 px-8 text-[15px] font-bold rounded-full transition-all flex items-center justify-center gap-2 mx-auto shadow-md hover:shadow-lg active:scale-95"
            icon={ArrowRight}
            iconPosition="right"
          >
            Register Community
          </Button>
        </div>

      </div>
    </section>
  );
}
