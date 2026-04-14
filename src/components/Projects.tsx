import { motion } from 'framer-motion';
import { FiGithub, FiTrendingUp } from 'react-icons/fi';

const techLogos: Record<string, string> = {
  Python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  OpenCV: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg',
  TensorFlow: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
  Azure: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
  LangChain: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/langchain.svg',
  Flask: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
  React: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  MongoDB: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  BERT: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
  Gemini: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg',
  NLP: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'Deep Learning': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
  Whisper: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  Streamlit: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg',
  LangGraph: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  FAISS: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  YOLOv8: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  GenAI: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg',
  FFmpeg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
  MediaPipe: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg',
  TypeScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  Vercel: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg',
};

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

interface OtherProject {
  name: string;
  description: string;
  url: string;
  tech: string[];
  language: string;
  langColor: string;
  gradient: string;
  icon: string;
}

const otherProjects: OtherProject[] = [
  {
    name: 'Agentic Voice Sandbox',
    description: 'A local, voice-controlled AI agent that transcribes audio via Whisper, classifies intents using LLMs, and safely executes sandboxed code or file operations.',
    url: 'https://github.com/shlokdhanokar/Agentic-Voice-Sandbox',
    tech: ['Python', 'Whisper', 'Streamlit'],
    language: 'Python',
    langColor: 'bg-yellow-400',
    gradient: 'from-violet-600 to-indigo-600',
    icon: '🎙️',
  },
  {
    name: 'LangGraph Sales Agent',
    description: 'Production-grade GenAI agent built with LangGraph and Gemini. State-machine architecture with FAISS-powered RAG and multi-turn memory for lead capture.',
    url: 'https://github.com/shlokdhanokar/langgraph-sales-agent',
    tech: ['LangGraph', 'Gemini', 'FAISS'],
    language: 'Python',
    langColor: 'bg-yellow-400',
    gradient: 'from-emerald-600 to-teal-600',
    icon: '🤖',
  },
  {
    name: 'SmartSafe Object Detection',
    description: 'Real-time safety compliance system powered by YOLOv8 and OpenCV. Streams live webcam video over Flask-WebSocket for instant helmet and package detection.',
    url: 'https://github.com/shlokdhanokar/SmartSafe-Object-Detection',
    tech: ['YOLOv8', 'OpenCV', 'Flask'],
    language: 'Python',
    langColor: 'bg-yellow-400',
    gradient: 'from-red-600 to-orange-600',
    icon: '🛡️',
  },
  {
    name: 'AutoShorts AI',
    description: 'Autonomous AI system for short-form video creation. Generates scripts, visuals, and edits automatically using generative AI pipelines.',
    url: 'https://github.com/shlokdhanokar/autoshorts-ai',
    tech: ['Python', 'GenAI', 'FFmpeg'],
    language: 'Python',
    langColor: 'bg-yellow-400',
    gradient: 'from-pink-600 to-rose-600',
    icon: '🎬',
  },
  {
    name: 'Gesture Brightness Control',
    description: 'Computer vision system that adjusts screen brightness using hand gestures detected via MediaPipe. Real-time finger distance tracking for intuitive control.',
    url: 'https://github.com/shlokdhanokar/Gesture-Based-Brightness-Control-System',
    tech: ['MediaPipe', 'OpenCV', 'Python'],
    language: 'Python',
    langColor: 'bg-yellow-400',
    gradient: 'from-cyan-600 to-blue-600',
    icon: '✋',
  },
  {
    name: 'Hospital Management System',
    description: 'Full-stack hospital bed management application with real-time availability tracking, patient admission workflows, and admin dashboard.',
    url: 'https://github.com/shlokdhanokar/Hospital-Management-System',
    tech: ['TypeScript', 'React', 'Vercel'],
    language: 'TypeScript',
    langColor: 'bg-blue-500',
    gradient: 'from-amber-600 to-yellow-600',
    icon: '🏥',
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
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 text-dark-300 border border-white/5"
                          >
                            {techLogos[t] && <img src={techLogos[t]} alt={t} className="w-3.5 h-3.5 object-contain" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />}
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
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mt-24 mb-12"
        >
          <span className="tag mb-4">Explore More</span>
          <h3 className="text-2xl md:text-3xl font-bold text-white mt-4">
            Other <span className="gradient-text">Projects</span>
          </h3>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {otherProjects.map((proj) => (
            <motion.a
              key={proj.name}
              variants={cardVariants}
              href={proj.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block"
            >
              <div className="absolute -inset-[1px] bg-gradient-to-r from-transparent via-primary-500/15 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative glass-card glass-card-hover rounded-2xl p-6 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${proj.gradient} flex items-center justify-center text-lg`}>
                    {proj.icon}
                  </div>
                  <FiGithub className="text-dark-400 group-hover:text-primary-400 transition-colors" size={18} />
                </div>

                {/* Title & Description */}
                <h4 className="text-white font-bold text-lg mb-2 group-hover:text-primary-400 transition-colors">{proj.name}</h4>
                <p className="text-dark-400 text-sm leading-relaxed mb-5 flex-grow">{proj.description}</p>

                {/* Tech & Language */}
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tech.slice(0, 3).map((t) => (
                      <span key={t} className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-medium bg-white/5 text-dark-400 border border-white/5">
                        {techLogos[t] && <img src={techLogos[t]} alt={t} className="w-3 h-3 object-contain" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />}
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className={`w-2.5 h-2.5 rounded-full ${proj.langColor}`} />
                    <span className="text-dark-400 text-xs">{proj.language}</span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
