import { motion } from 'framer-motion';
import { FiMapPin, FiBookOpen, FiCode, FiCalendar } from 'react-icons/fi';

const highlights = [
  { icon: <FiCode />, label: 'Focus', value: 'AI/ML & Backend' },
  { icon: <FiBookOpen />, label: 'Education', value: 'B.Tech CSE (AI & ML)' },
  { icon: <FiMapPin />, label: 'University', value: 'VIT Bhopal' },
  { icon: <FiCalendar />, label: 'Year', value: 'Pre-Final Year' },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-500/5 rounded-full blur-[150px]" />

      <div className="w-full max-w-[1600px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          <span className="tag mb-4">About Me</span>
          <h2 className="section-title text-white mt-4">
            Crafting Intelligent <span className="gradient-text">Solutions</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 mt-16 items-start">
          {/* Profile image area - Expanded to decouple badges */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="flex flex-col items-center sm:items-start md:flex-row lg:flex-col gap-6">
              {/* Photo Box without overlap */}
              <div className="relative group w-full max-w-sm mx-auto sm:mx-0">
                <div className="absolute -inset-1 bg-gradient-to-br from-primary-600 to-accent-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-35 transition-opacity duration-500" />
                <div className="relative glass-card p-1.5 rounded-2xl overflow-hidden w-full aspect-[4/5]">
                  <div className="w-full h-full rounded-xl overflow-hidden bg-dark-900">
                    <img
                      src="/shlok-photo.png"
                      alt="Shlok R. Dhanokar"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>

              {/* Badges placed beside or below safely */}
              <div className="flex flex-row md:flex-col lg:flex-row w-full max-w-sm gap-4 justify-center sm:justify-start">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', delay: 0.4 }}
                  className="glass-card flex-1 px-5 py-3 rounded-xl border border-primary-500/20 shadow-xl"
                >
                  <p className="text-[10px] text-dark-400 uppercase tracking-wider mb-0.5">CGPA</p>
                  <p className="text-xl font-bold text-primary-400">8.20</p>
                </motion.div>

                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', delay: 0.5 }}
                  className="glass-card flex-1 px-5 py-3 rounded-xl border border-accent-500/20 shadow-xl flex flex-col justify-center"
                >
                  <p className="text-[10px] text-dark-400 uppercase tracking-wider mb-0.5">Status</p>
                  <p className="text-sm font-semibold text-accent-400 leading-tight">Pre-Final Year</p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3 space-y-6"
          >
            <p className="text-dark-300 text-lg leading-relaxed">
              I'm a <span className="text-white font-medium">pre-final year</span> Computer Science student at{' '}
              <span className="text-white font-medium">VIT Bhopal</span>, specializing in{' '}
              <span className="text-primary-400 font-medium">Artificial Intelligence & Machine Learning</span>.
              I build real-world, scalable systems that bridge the gap between cutting-edge AI
              research and production-grade applications.
            </p>
            <p className="text-dark-300 text-lg leading-relaxed">
              From designing{' '}
              <span className="text-white font-medium">agentic AI pipelines</span> to architecting{' '}
              <span className="text-white font-medium">cloud-native backends</span>, I'm driven by the
              challenge of solving complex problems with elegant, efficient solutions. My work spans
              computer vision, NLP, generative AI, and full-stack development — always with a focus on
              measurable impact.
            </p>

            {/* Info cards */}
            <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 pt-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.08 }}
                  className="flex items-center gap-4 glass-card glass-card-hover p-4 rounded-xl"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary-600/10 flex items-center justify-center text-primary-400 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] text-dark-500 uppercase tracking-wider">{item.label}</p>
                    <p className="text-white font-medium text-sm truncate">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Currently working on */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="glass-card p-6 rounded-xl border-l-2 border-primary-500 mt-6"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-400" />
                </span>
                <span className="text-xs text-primary-400 font-semibold uppercase tracking-wider">Currently Working On</span>
              </div>
              <p className="text-dark-300 text-base leading-relaxed">
                Exploring agentic AI workflows with LangChain & LangGraph, building production-grade
                GenAI applications, and contributing to open-source AI projects.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
