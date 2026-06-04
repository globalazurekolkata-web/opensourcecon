import { ArrowRight } from 'lucide-react';

const titleSponsor = {
  name: 'GitHub',
  tagline: 'Where developers build the future.',
  logo: '/images/image 5.png',
};

const poweredBy = [
  { name: 'Google Cloud', logo: '/images/image 6.png' },
  { name: 'AWS', logo: null },
  { name: 'Microsoft', logo: null },
  { name: 'JetBrains', logo: null },
];

const otherSponsors = [
  { name: 'FOSS United', logo: null },
  { name: 'Open Source India', logo: null },
  { name: 'GDG Kolkata', logo: null },
];

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-20 lg:py-28 relative">
      <div className="max-w-container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <div className="section-tag mb-6">
            <span className="green-dot" />
            OUR SPONSORS
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.1] tracking-tight mb-6 text-dark dark:text-white">
            Together, we power
            <br />
            <span className="text-brand-green">open source.</span>
          </h2>
          <p className="text-gray-secondary dark:text-gray-400 text-lg leading-relaxed">
            We're grateful to our amazing sponsors and partners who help make this incredible gathering possible.
          </p>
        </div>

        {/* Title Sponsor */}
        <div className="mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-6">
            TITLE SPONSOR
          </p>
          <div className="card max-w-sm p-8 hover:shadow-md transition-shadow">
            <div className="flex mb-4">
              {titleSponsor.logo ? (
                <img src={titleSponsor.logo} alt={titleSponsor.name} className="h-8 object-contain dark:invert" />
              ) : null}
            </div>
            <h3 className="font-heading font-extrabold text-3xl mb-2 text-dark dark:text-white">{titleSponsor.name}</h3>
            <p className="text-gray-secondary dark:text-gray-400 text-sm">{titleSponsor.tagline}</p>
          </div>
        </div>

        {/* Powered By */}
        <div className="mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-6">
            POWERED BY
          </p>
          <div className="flex flex-wrap gap-4">
            {poweredBy.map((sponsor) => (
              <div
                key={sponsor.name}
                className="card py-4 px-6 min-w-[150px] flex items-center gap-3 hover:shadow-md transition-shadow"
              >
                {sponsor.logo ? (
                  <img src={sponsor.logo} alt={sponsor.name} className="h-5 object-contain dark:invert" />
                ) : (
                  <div className="w-5 h-5 rounded bg-gray-200 dark:bg-white/10 flex-shrink-0" />
                )}
                <span className="font-heading font-bold text-sm text-dark dark:text-white">{sponsor.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Other Sponsors */}
        <div className="mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-6">
            SUPPORTED BY
          </p>
          <div className="flex flex-wrap gap-4">
            {otherSponsors.map((sponsor) => (
              <div
                key={sponsor.name}
                className="card py-4 px-6 min-w-[150px] flex items-center gap-3 hover:shadow-md transition-shadow"
              >
                <div className="w-5 h-5 rounded bg-gray-200 dark:bg-white/10 flex-shrink-0" />
                <span className="font-heading font-bold text-sm text-dark dark:text-white">{sponsor.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Strip */}
        <div className="card p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-gray-50 to-white dark:from-[#131C31] dark:to-[#131C31]/40">
          <div>
            <h3 className="font-heading font-bold text-lg md:text-xl mb-1 text-dark dark:text-white">
              Want to be a part of our journey?
            </h3>
            <p className="text-gray-secondary dark:text-gray-400 text-sm">
              Partner with us and reach thousands of passionate developers.
            </p>
          </div>
          <a href="#register" className="btn-primary text-sm py-2.5 px-5 flex-shrink-0">
            Become a Sponsor <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
