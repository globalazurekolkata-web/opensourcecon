const topics = [
  {
    title: 'AI & Open Source',
    img: '/images/AI & Open Source (HOT)_margin.png',
    rotation: 'topic-card-1',
  },
  {
    title: 'DevOps & Automation',
    img: '/images/DevOps & Automation_margin.png',
    rotation: 'topic-card-2',
  },
  {
    title: 'Linux & Systems',
    img: '/images/Linux & Systems_margin.png',
    rotation: 'topic-card-3',
  },
  {
    title: 'Security & Privacy',
    img: '/images/Security & Privacy_margin.png',
    rotation: 'topic-card-4',
  },
  {
    title: 'Cloud Native',
    img: '/images/Cloud Native.png',
    rotation: 'topic-card-5',
  },
  {
    title: 'Observability',
    img: '/images/Observability_margin.png',
    rotation: 'topic-card-6',
  },
  {
    title: 'Open Source Careers',
    img: '/images/Open Source Careers.png',
    rotation: 'topic-card-7',
  },
  {
    title: 'Sustainability in Tech',
    img: '/images/Sustainability in Tech_margin.png',
    rotation: 'topic-card-8',
  },
  {
    title: 'Community Building',
    img: '/images/Community Building_margin.png',
    rotation: 'topic-card-9',
  },
  {
    title: 'Web Performance',
    img: '/images/Web Performance_margin.png',
    rotation: 'topic-card-10',
  },
  {
    title: 'AI Agents & LLMs',
    img: '/images/AI Agents & LLMs_margin.png',
    rotation: 'topic-card-11',
  },
];

export default function Topics() {
  return (
    <section id="topics" className="py-20 lg:py-28 relative overflow-hidden bg-white">
      <div className="absolute inset-0 grid-bg pointer-events-none z-0" />
      
      <div className="max-w-container mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Two-Column Header */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-end mb-16">
          <div className="md:col-span-7 space-y-6">
            <div className="section-tag w-fit">
              <span className="green-dot" />
              THE TOPICS
            </div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.1] tracking-tight text-dark">
              Let's talk about what
              <br />
              <span className="text-brand-green uppercase">MATTERS</span>
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-gray-secondary text-base md:text-lg leading-relaxed max-w-md">
              Explore a wide range of topics spanning across different domains of open-source technology.
            </p>
          </div>
        </div>

        {/* Topic Cards - Scattered Layout */}
        <div className="relative mt-12">
          {/* Decorative floating note */}
          <div className="absolute -top-12 right-0 hidden lg:block">
            <p className="text-xs font-bold text-gray-400 italic rotate-[-4deg] tracking-wide">
              * So many ideas. So many conversations!
            </p>
          </div>

          <div className="flex flex-wrap gap-6 justify-center md:justify-start">
            {topics.map((topic) => (
              <div
                key={topic.title}
                className={`cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 ${topic.rotation} w-[160px] md:w-[180px] rounded-3xl overflow-hidden shadow-sm hover:shadow-md border border-gray-100/50 bg-white`}
              >
                <img
                  src={topic.img}
                  alt={topic.title}
                  className="w-full h-auto object-contain pointer-events-none block"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
