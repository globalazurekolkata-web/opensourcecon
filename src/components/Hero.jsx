import Button from './Button';
import { RiArrowRightLine } from 'react-icons/ri';

function openKonfHub(e) {
  e.preventDefault();
  const kBtn = document.querySelector('#konfhub-widget-trigger button, #konfhub-widget-trigger a');
  if (kBtn) kBtn.click();
}

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 lg:pt-36 min-h-[84dvh] sm:min-h-[100dvh] flex flex-col justify-start overflow-hidden bg-white">
      {/* Grid overlay for the white part */}
      <div className="absolute inset-0 grid-bg pointer-events-none z-0" />

      {/* Main Content */}
      <div className="max-w-container mx-auto px-6 lg:px-8 relative z-10 mt-4 w-full mb-10">
        <div className="max-w-4xl space-y-6">
          <div className='flex flex-col gap-3'>
            <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-[72px] leading-[1.1] lg:leading-[1.1] tracking-tight text-dark flex flex-wrap items-center gap-x-6 gap-y-2">
              Where Kolkata Meets
              <span className="text-gradient uppercase font-bold">OPEN SOURCE</span>
            </h1>

            <p className="text-gray-secondary text-sm sm:text-sm md:text-lg leading-relaxed max-w-lg">
              Join developers, maintainers, students, and innovators for a day of talks, workshops, networking, and collaboration.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              onClick={openKonfHub}
              variant="primary"
              className="w-full sm:w-auto text-base py-4 px-8 shadow-lg"
              icon={RiArrowRightLine}
              iconPosition="right"
            >
              Register Now
            </Button>
            <Button
              href="#sponsors"
              variant="secondary"
              className="w-full sm:w-auto text-base py-4 px-8 border-gray-200 shadow-sm bg-white"
            >
              Become a Sponsor
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-0 pointer-events-none">
        <img
          src="/images/hero section image.png"
          alt="Kolkata Skyline with Howrah Bridge and Victoria Memorial"
          className="w-full h-auto block origin-bottom-right scale-[2] sm:scale-[1.4] md:scale-[1.5] lg:scale-[1.2] xl:scale-[1] transition-transform duration-350"
        />
      </div>
    </section>
  );
}
