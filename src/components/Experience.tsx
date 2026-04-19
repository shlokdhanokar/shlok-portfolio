import { motion } from 'framer-motion';
import { FiBriefcase, FiArrowRight, FiCalendar } from 'react-icons/fi';

const techLogos: Record<string, string> = {
  Azure: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
  LangChain: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/langchain/langchain-original.svg',
  Flask: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg',
  React: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  MongoDB: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  Python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'Agentic AI': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
};

interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  dateRange: string;
  type: string;
  points: string[];
  tech: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: 'AI Intern',
    company: 'Coforge BPS',
    duration: 'Recent',
    dateRange: 'May 2025 – Jul 2025',
    type: 'Internship',
    points: [
      'Built an end-to-end KYC verification pipeline on Azure cloud infrastructure',
      'Reduced manual verification effort by 60% through intelligent automation',
      'Compressed document processing time from 48 hours to just 8 hours',
      'Optimized API response latency by 30% via caching and async processing',
    ],
    tech: ['Azure', 'LangChain', 'Agentic AI', 'Flask', 'React', 'MongoDB', 'Python'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-accent-500/5 rounded-full blur-[150px]" />

      <div className="w-full max-w-[1600px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="tag mb-4">Experience</span>
          <h2 className="section-title text-white mt-4">
            Where I've <span className="gradient-text">Worked</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Gaining real-world experience building production AI systems
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary-500/50 via-accent-500/30 to-transparent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative flex flex-row gap-0 mb-12"
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 -translate-x-1/2 top-8 z-10">
                <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-primary-500 border-[3px] md:border-4 border-dark-950 shadow-lg shadow-primary-500/30" />
              </div>

              {/* Duration - left side */}
              <div className="w-1/2 text-right pr-5 md:pr-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="mt-6"
                >
                  <span className="inline-flex items-center gap-1.5 md:gap-2 px-2 py-1 md:px-3 md:py-1 rounded-lg bg-primary-600/10 text-primary-400 text-[10px] md:text-sm font-medium border border-primary-500/15">
                    <FiBriefcase size={12} className="hidden md:block" />
                    {exp.duration}
                  </span>
                  <div className="flex items-center gap-1 md:gap-2 mt-2 md:mt-3 justify-end">
                    <FiCalendar className="text-dark-400 hidden md:block" size={13} />
                    <p className="text-dark-300 text-[10px] md:text-sm font-medium">{exp.dateRange}</p>
                  </div>
                  <p className="text-dark-400 text-[10px] md:text-sm mt-1">{exp.type}</p>
                </motion.div>
              </div>

              {/* Content - right side */}
              <div className="w-1/2 pl-5 md:pl-12">
                <div className="glass-card glass-card-hover p-4 md:p-6 rounded-2xl">
                  <h3 className="text-white font-bold text-sm md:text-xl mb-1">{exp.role}</h3>
                  <p className="text-primary-400 font-medium text-xs md:text-sm mb-3 md:mb-5">{exp.company}</p>

                  <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-dark-300 text-[10px] md:text-sm leading-relaxed">
                        <FiArrowRight className="text-primary-400 mt-1 flex-shrink-0" size={10} />
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* Impact metrics */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-3 mb-4 md:mb-5">
                    <div className="text-center p-2 md:p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                      <p className="text-primary-400 font-bold text-sm md:text-lg">60%</p>
                      <p className="text-dark-400 text-[8px] md:text-[10px] uppercase tracking-wider">Less Manual Work</p>
                    </div>
                    <div className="text-center p-2 md:p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                      <p className="text-accent-400 font-bold text-sm md:text-lg">6x</p>
                      <p className="text-dark-400 text-[8px] md:text-[10px] uppercase tracking-wider">Faster Processing</p>
                    </div>
                    <div className="text-center p-2 md:p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                      <p className="text-cyan-400 font-bold text-sm md:text-lg">30%</p>
                      <p className="text-dark-400 text-[8px] md:text-[10px] uppercase tracking-wider">Lower Latency</p>
                    </div>
                  </div>

                  {/* Tech stack with logos */}
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="inline-flex items-center gap-1 md:gap-1.5 px-2 py-1 md:px-3 md:py-1.5 rounded-lg text-[9px] md:text-xs font-medium bg-white/5 text-dark-300 border border-white/5 hover:border-primary-500/30 hover:bg-white/10 transition-all duration-300">
                        {techLogos[t] && (
                          <img
                            src={techLogos[t]}
                            alt={t}
                            className="w-3 h-3 md:w-4 md:h-4 object-contain"
                            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                          />
                        )}
                        <span className="hidden sm:inline">{t}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
