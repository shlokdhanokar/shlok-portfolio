import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiTrendingUp } from 'react-icons/fi';

interface ProjectData {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  metrics: { label: string; value: string }[];
  github: string;
  gradient: string;
  iconImg?: string;
}

const projects: ProjectData[] = [
  {
    title: 'SafeStep',
    subtitle: 'AI Assistive Navigation',
    description:
      'An AI-based assistive navigation system that uses computer vision and deep learning to help visually impaired individuals navigate safely through dynamic environments.',
    tech: ['Python', 'OpenCV', 'TensorFlow', 'Deep Learning'],
    metrics: [
      { label: 'Accuracy', value: '95%' },
      { label: 'Error Reduction', value: '40%' },
    ],
    github: 'https://github.com/shlokdhanokar/safestep',
    gradient: 'from-blue-500 to-cyan-500',
    iconImg: '/logo-safestep.png',
  },
  {
    title: 'Bank KYC Platform',
    subtitle: 'Agentic AI Document Verification',
    description:
      'A production-grade agentic AI pipeline for automated bank KYC document verification using Azure cloud services, LangChain orchestration, and intelligent data extraction.',
    tech: ['Azure', 'LangChain', 'Flask', 'React', 'MongoDB'],
    metrics: [
      { label: 'Docs Processed', value: '500+' },
      { label: 'Accuracy', value: '98%' },
    ],
    github: 'https://github.com/shlokdhanokar/bank-kyc',
    gradient: 'from-violet-500 to-purple-500',
    iconImg: '/logo-kyc.png',
  },
  {
    title: 'MailFlow',
    subtitle: 'AI Email Automation',
    description:
      'An intelligent email classification and automation system powered by BERT and Gemini models. Automatically categorizes, prioritizes, and generates contextual responses.',
    tech: ['BERT', 'Gemini', 'Flask', 'NLP', 'Python'],
    metrics: [
      { label: 'Classification', value: '92%' },
      { label: 'Response Time ↓', value: '70%' },
    ],
    github: 'https://github.com/shlokdhanokar/mailflow',
    gradient: 'from-emerald-500 to-teal-500',
    iconImg: '/logo-mailflow.png',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary-600/5 rounded-full blur-[150px]" />
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-accent-500/5 rounded-full blur-[150px]" />

      <div className="w-full max-w-[1600px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="tag mb-4">Featured Work</span>
          <h2 className="section-title text-white mt-4">
            Projects That <span className="gradient-text">Matter</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Real-world systems built with measurable impact — not just demos
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className="group relative"
            >
              <div className="absolute -inset-[1px] bg-gradient-to-r from-transparent via-primary-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative glass-card rounded-2xl overflow-hidden">
                <div className="grid md:grid-cols-5 gap-0">
                  {/* Project visual - Full image */}
                  <div className="md:col-span-2 relative overflow-hidden bg-white flex items-center justify-center">
                    <img 
                      src={project.iconImg} 
                      alt={project.title} 
                      className="w-full h-full object-contain p-4" 
                    />
                  </div>

                  {/* Project info */}
                  <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-between">
                    <div>
                      <h3 className="text-white font-bold text-2xl lg:text-3xl mb-1">{project.title}</h3>
                      <p className="text-primary-400 font-medium text-sm mb-6">{project.subtitle}</p>

                      <p className="text-dark-300 leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Tech tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1 rounded-lg text-xs font-medium bg-white/5 text-dark-300 border border-white/5"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Metrics */}
                      <div className="flex gap-6 mb-8">
                        {project.metrics.map((m) => (
                          <div key={m.label} className="flex items-center gap-2">
                            <FiTrendingUp className="text-primary-400 text-sm" />
                            <div>
                              <p className="text-white font-bold text-lg">{m.value}</p>
                              <p className="text-dark-400 text-xs">{m.label}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-dark-300 hover:text-white hover:bg-white/10 hover:border-primary-500/30 transition-all duration-300 font-medium"
                      >
                        <FiGithub size={15} />
                        Source Code
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-dark-300 hover:text-white hover:bg-white/10 hover:border-primary-500/30 transition-all duration-300 font-medium"
                      >
                        <FiExternalLink size={15} />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
