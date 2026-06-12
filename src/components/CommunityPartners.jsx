import { ArrowRight, Heart } from 'lucide-react';

export default function CommunityPartners() {
  return (
    <section id="community" className="py-20 lg:py-28 relative">
      <div className="max-w-container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <div className="section-tag mb-6">
            <span className="green-dot" />
            COMMUNITY PARTNERS
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.1] tracking-tight mb-6 text-dark dark:text-white">
            Communities that
            <br />
            <span className="text-brand-green">power us</span>
          </h2>
          <p className="text-gray-secondary dark:text-gray-400 text-lg leading-relaxed">
            Open Source Con Kolkata is built on the shoulders of amazing communities. Interested in partnering? Reach out!
          </p>
        </div>

        {/* CTA Card */}
        <div className="card p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-br from-[#F0FDE8] via-white to-white dark:from-[#132A13]/20 dark:via-[#131C31] dark:to-[#131C31]">
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 rounded-2xl bg-brand-green/10 flex items-center justify-center flex-shrink-0">
              <Heart className="text-brand-green" size={28} />
            </div>
            <div className="space-y-2">
              <h3 className="font-heading font-bold text-xl md:text-2xl text-dark dark:text-white">
                Become a Community Partner
              </h3>
              <p className="text-gray-secondary dark:text-gray-400 text-sm leading-relaxed max-w-lg">
                We love partnering with local and national tech communities. Community partners get co-promotion, booth space, and more. Join us in making Bengal's biggest open source event a reality.
              </p>
            </div>
          </div>
          <a
            href="https://forms.gle/Kr6y4FFjtyH1mxaW8"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm py-3 px-6 flex-shrink-0"
          >
            Apply For Partnership <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
