import { MapPin, Calendar, Compass } from 'lucide-react';

export default function Venue() {
  return (
    <section id="venue" className="py-20 lg:py-28 relative bg-white overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none z-0" />
      
      <div className="max-w-container mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <div className="section-tag mb-6">
            <span className="green-dot" />
            VENUE
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] leading-[1.4]! tracking-tight text-dark">
            <span className="font-medium">The next destination
            <br />
            for our</span> <span className="text-gradient uppercase font-bold">STAGE.</span>
          </h2>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Floating Venue Details Card */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="card p-8 md:p-10 bg-white border border-gray-150 rounded-[28px] shadow-sm flex-1 flex flex-col justify-between space-y-8">
              
              <div className="space-y-6">
                <span className="inline-flex items-center gap-2 text-[10px] font-bold px-3 py-1.5 rounded-full bg-brand-green/8 border border-brand-green/20 text-brand-green uppercase tracking-wider">
                  <MapPin size={10} />
                  Official Venue
                </span>

                <div className="space-y-2">
                  <h3 className="font-heading text-3xl font-extrabold text-dark leading-tight">
                    NAZRUL TIRTHA
                  </h3>
                  <p className="text-sm font-semibold text-gray-secondary">
                    Action Area I, Newtown, Kolkata, West Bengal 700156
                  </p>
                </div>

                <p className="text-sm text-gray-secondary leading-relaxed">
                  Nazrul Tirtha is a premier cultural and educational center in Newtown, Kolkata. It features state-of-the-art auditoriums, spacious exhibition halls, and convenient transport links, making it the perfect setting for Bengal's biggest open source gathering.
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-3 text-sm font-bold text-dark">
                  <div className="w-9 h-9 rounded-xl bg-brand-green/10 flex items-center justify-center text-brand-green flex-shrink-0">
                    <Calendar size={16} />
                  </div>
                  5th December 2026 (09:00 AM - 06:00 PM)
                </div>
                
                <a
                  href="https://maps.google.com/?q=Nazrul+Tirtha+New+Town+Kolkata"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-sm py-3 px-6 rounded-full flex items-center justify-center gap-2 w-full mt-4"
                >
                  Get Directions <Compass size={16} />
                </a>
              </div>

            </div>
          </div>

          {/* Right: Map Visual Block */}
          <div className="lg:col-span-7 min-h-[350px] lg:min-h-auto rounded-[28px] border border-gray-150 overflow-hidden relative shadow-sm flex items-center justify-center bg-gray-50">
            {/* Map image overlay */}
            <img 
              src="/images/Right Image Area.png" 
              alt="Map Area" 
              className="absolute inset-0 w-full h-full object-cover opacity-80" 
            />

            {/* Faint Grid accent overlay */}
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
              backgroundImage: 'linear-gradient(rgba(86,214,75,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(86,214,75,0.1) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }} />

            {/* Interactive/Animated Bouncing Pin */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="venue-pin-bounce">
                <div className="w-16 h-16 rounded-full bg-brand-green/20 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-brand-green flex items-center justify-center shadow-lg" style={{ boxShadow: '0 4px 20px rgba(86, 214, 75, 0.4)' }}>
                    <MapPin size={20} className="text-white" />
                  </div>
                </div>
              </div>
              <div className="w-3 h-3 rounded-full bg-brand-green/30 mt-2 venue-pin-shadow" />
            </div>

            {/* Pulse rings */}
            <div className="absolute w-44 h-44 rounded-full border border-brand-green/10 animate-pulse" />
            <div className="absolute w-72 h-72 rounded-full border border-brand-green/5 animate-ping" />
          </div>

        </div>

      </div>
    </section>
  );
}
