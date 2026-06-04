const topics = [
  {
    title: 'AI & Open Source',
    subtitle: 'Models, datasets & ethics',
    img: '/images/AI & Open Source (HOT)_margin.png',
    rotation: 'topic-card-1',
    color: '#FF6B6B',
  },
  {
    title: 'DevOps & Automation',
    subtitle: 'CI/CD, GitOps & IaC',
    img: '/images/DevOps & Automation_margin.png',
    rotation: 'topic-card-2',
    color: '#4ECDC4',
  },
  {
    title: 'Linux & Systems',
    subtitle: 'Kernel, distros & more',
    img: '/images/Linux & Systems_margin.png',
    rotation: 'topic-card-3',
    color: '#FFB347',
  },
  {
    title: 'Security & Privacy',
    subtitle: 'CVEs, SBOM & trust',
    img: '/images/Security & Privacy_margin.png',
    rotation: 'topic-card-4',
    color: '#9B59B6',
  },
  {
    title: 'Cloud Native',
    subtitle: 'K8s, containers & mesh',
    img: '/images/Cloud Native.png',
    rotation: 'topic-card-5',
    color: '#3498DB',
  },
  {
    title: 'Observability',
    subtitle: 'Logs, metrics & traces',
    img: '/images/Observability_margin.png',
    rotation: 'topic-card-6',
    color: '#1ABC9C',
  },
  {
    title: 'Open Source Careers',
    subtitle: 'Jobs, growth & paths',
    img: '/images/Open Source Careers.png',
    rotation: 'topic-card-7',
    color: '#E74C3C',
  },
  {
    title: 'Sustainability in Tech',
    subtitle: 'Green computing & ethics',
    img: '/images/Sustainability in Tech_margin.png',
    rotation: 'topic-card-8',
    color: '#27AE60',
  },
  {
    title: 'Community Building',
    subtitle: 'Governance & inclusion',
    img: '/images/Community Building_margin.png',
    rotation: 'topic-card-9',
    color: '#F39C12',
  },
  {
    title: 'Web Performance',
    subtitle: 'Core web vitals & edge',
    img: '/images/Web Performance_margin.png',
    rotation: 'topic-card-10',
    color: '#2ECC71',
  },
  {
    title: 'AI Agents & LLMs',
    subtitle: 'RAG, fine-tuning & agents',
    img: '/images/AI Agents & LLMs_margin.png',
    rotation: 'topic-card-11',
    color: '#8E44AD',
  },
];

export default function Topics() {
  return (
    <section id="topics" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 max-w-xl">
          <div className="section-tag mb-6">
            <span className="green-dot" />
            TOPICS
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.1] tracking-tight mb-6 text-dark dark:text-white">
            Let's talk about
            <br />
            what <span className="text-brand-green">matters.</span>
          </h2>
          <p className="text-gray-secondary dark:text-gray-400 text-lg leading-relaxed">
            From cutting-edge tech to community stories, explore the topics shaping the future of open source.
          </p>
        </div>

        {/* Doodle text */}
        <div className="relative">
          <div className="absolute -top-4 right-0 lg:right-12 hidden md:block">
            <p className="text-sm font-medium text-gray-400 italic rotate-[-3deg]">
              So many ideas.
              <br />
              So many conversations!
            </p>
            <svg className="w-8 h-8 text-brand-green ml-16 mt-1 rotate-[15deg]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>

          {/* Topic Cards - Scattered Layout */}
          <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
            {topics.map((topic) => (
              <div
                key={topic.title}
                className={`cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 ${topic.rotation} w-[165px] md:w-[185px] rounded-2xl overflow-hidden`}
              >
                <img
                  src={topic.img}
                  alt={topic.title}
                  className="w-full h-auto object-contain pointer-events-none"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
