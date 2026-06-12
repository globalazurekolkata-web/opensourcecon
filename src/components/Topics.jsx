import { topics } from '../data/topics';

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
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
