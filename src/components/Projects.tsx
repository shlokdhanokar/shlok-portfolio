import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FiGithub, FiTrendingUp, FiX, FiTarget, FiTool, FiBox, FiCheckCircle, FiExternalLink } from 'react-icons/fi';

const techLogos: Record<string, string> = {
  Python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  OpenCV: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg',
  TensorFlow: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
  Azure: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
  LangChain: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/langchain/langchain-original.svg',
  Flask: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg',
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
  Vercel: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original-wordmark.svg',
  JavaScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  Selenium: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg',
  'Scikit-learn': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg',
  Matplotlib: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg',
  BeautifulSoup: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'Twitter API': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg',
  'Raspberry Pi': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg',
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
  caseStudy?: {
    overview: string;
    challenge: string;
    solution: string;
    architecture: string;
    keyFeatures: string[];
  };
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
    caseStudy: {
      overview: 'SafeStep was designed to give visually impaired individuals a reliable, real-time sense of their surroundings without requiring expensive specialized hardware.',
      challenge: 'Deploying deep learning models (YOLO, Depth Estimation) on resource-constrained portable devices while maintaining a high frame rate and low latency. The feedback mechanism also needed to be intuitive and non-overwhelming for the user.',
      solution: 'I optimized a custom TensorFlow Lite model for edge deployment and paired it with OpenCV for efficient frame processing. For feedback, I implemented a prioritized haptic/audio alert system that only triggers for immediate collision threats.',
      architecture: 'Camera Input -> Frame Resizing -> TensorFlow Lite Object Detection & Depth Estimation -> Risk Assessment Logic -> Text-to-Speech / Haptic Engine.',
      keyFeatures: [
        'Real-time object detection and classification',
        'Monocular depth estimation to calculate distance to obstacles',
        'Low-latency haptic and audio feedback system',
        'Optimized for battery-powered edge devices',
      ],
    },
  },
  {
    title: 'Bank KYC Platform',
    subtitle: 'Agentic AI Document Verification',
    description:
      'A production-grade agentic AI pipeline for automated bank KYC document verification using Azure cloud services, LangChain orchestration, and intelligent data extraction.',
    tech: ['Azure', 'LangChain', 'Flask', 'React', 'Azure Blob Storage'],
    metrics: [
      { label: 'Docs Processed', value: '500+' },
      { label: 'Accuracy', value: '98%' },
    ],
    github: 'https://github.com/shlokdhanokar/Agentic-AI---KYC-Automation',
    gradient: 'from-violet-500 to-purple-500',
    iconImg: '/logo-kyc.png',
    caseStudy: {
      overview: 'A massive pain point in modern banking is the manual verification of KYC (Know Your Customer) documents. This project aimed to automate the entire extraction and validation pipeline using Agentic AI workflows.',
      challenge: 'Traditional OCR fails when documents are rotated, smudged, or use different formats (e.g., old vs. new passports). We needed a system capable of semantic understanding, not just blind text extraction.',
      solution: 'I built an orchestration pipeline using LangChain. First, Azure Document Intelligence extracts raw text and layout. Then, an LLM agent analyzes the text contextually to map entities (Name, DoB, ID Number) and flag inconsistencies or signs of tampering.',
      architecture: 'React Frontend -> Flask REST API -> LangChain Orchestrator -> Azure Document Intelligence + OpenAI LLMs -> Azure Blob Storage for secure storage.',
      keyFeatures: [
        'Multi-agent workflow for extraction, validation, and anomaly detection',
        'Secure API built with Flask and deployed on Azure',
        '98% accuracy in entity extraction across diverse document formats',
        'Scalable microservice architecture',
      ],
    },
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
    github: 'https://github.com/shlokdhanokar/MAILFLOW',
    gradient: 'from-emerald-500 to-teal-500',
    iconImg: '/logo-mailflow.png',
    caseStudy: {
      overview: 'Customer support teams spend countless hours sorting incoming emails. MailFlow automates triage by classifying emails into actionable categories and generating contextual draft responses.',
      challenge: 'General-purpose LLMs were too slow and expensive for simple classification routing. We needed a fast, domain-specific classifier combined with a generative model for the actual response drafting.',
      solution: 'I fine-tuned a BERT model specifically for intent classification (fast, cheap inference). Once an email is categorized (e.g., "Refund Request"), it is passed to the Gemini API along with specific prompt templates to generate a polite, accurate response draft.',
      architecture: 'IMAP Integration -> BERT Classifier -> Priority Queue -> Gemini Generative Layer -> SMTP Reply Queue.',
      keyFeatures: [
        'Custom fine-tuned BERT model for 92% accurate intent classification',
        'Context-aware response generation using Google Gemini',
        'Asynchronous processing pipeline via Flask and Celery',
        'Reduced manual triage time by 70%',
      ],
    },
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
  {
    name: 'Sober Steps',
    description: 'Premium sobriety tracker with a "Year in Pixels" progress grid, savings tracker, SOS breathing tool, and health milestones. Private & local-first.',
    url: 'https://github.com/shlokdhanokar/sober-steps',
    tech: ['JavaScript', 'React', 'LocalStorage'],
    language: 'JavaScript',
    langColor: 'bg-yellow-300',
    gradient: 'from-teal-600 to-green-600',
    icon: '🌿',
  },
  {
    name: 'Selenium Twitter Bot',
    description: 'Automated Twitter bot that scrapes and posts news articles using Selenium browser automation and web scraping techniques.',
    url: 'https://github.com/shlokdhanokar/Selenium-Twitter-bot',
    tech: ['Python', 'Selenium', 'BeautifulSoup'],
    language: 'Python',
    langColor: 'bg-yellow-400',
    gradient: 'from-slate-600 to-gray-600',
    icon: '🐦',
  },
  {
    name: 'GenAI Twitter Bot',
    description: 'AI-powered Twitter bot that autonomously generates and posts AI/tech news content using Generative AI models and the Twitter API.',
    url: 'https://github.com/shlokdhanokar/genai-twitter-bot',
    tech: ['JavaScript', 'GenAI', 'Twitter API'],
    language: 'JavaScript',
    langColor: 'bg-yellow-300',
    gradient: 'from-sky-600 to-blue-600',
    icon: '🐦',
  },
  {
    name: 'EduNexus',
    description: 'An educational platform connecting students and educators via collaborative tools, resource sharing, and structured learning pathways.',
    url: 'https://github.com/shlokdhanokar/EduNexus-1',
    tech: ['JavaScript', 'React', 'MongoDB'],
    language: 'JavaScript',
    langColor: 'bg-yellow-300',
    gradient: 'from-indigo-600 to-blue-600',
    icon: '🎓',
  },
  {
    name: 'Smart Research Browser Extension',
    description: 'Chrome extension that enhances research workflows by summarizing web pages, extracting key insights, and saving highlights using AI.',
    url: 'https://github.com/shlokdhanokar/Smart-Research-Browser-Extension',
    tech: ['JavaScript', 'Chrome API', 'GenAI'],
    language: 'JavaScript',
    langColor: 'bg-yellow-300',
    gradient: 'from-purple-600 to-fuchsia-600',
    icon: '🔍',
  },
];
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: (i: number) => ({ opacity: 0, x: i % 2 === 0 ? -60 : 60, y: 30 }),
  visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

// ─── Project Modal ────────────────────────────────────────────────────────────
function ProjectModal({
  project,
  onClose,
}: {
  project: ProjectData;
  onClose: () => void;
}) {
  useEffect(() => {
    // Lock body scroll when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        key="project-modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8"
        onClick={onClose}
      >
        {/* Backdrop blur */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

        {/* Modal Content */}
        <motion.div
          key="project-modal-content"
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 w-full max-w-5xl max-h-[90vh] rounded-2xl overflow-hidden glass-card border border-white/10 shadow-2xl flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] flex-shrink-0 bg-white/[0.02]">
            <div className="flex items-center gap-4">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer hover:bg-red-400 transition-colors" onClick={onClose} />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <h3 className="text-white font-bold text-lg hidden sm:block">{project.title} Case Study</h3>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
              >
                <FiGithub size={14} />
                Source
              </a>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-dark-400 hover:text-white hover:bg-white/10 transition-all"
              >
                <FiX size={18} />
              </button>
            </div>
          </div>

          {/* Scrollable Body */}
          <div 
            className="flex-1 overflow-y-auto bg-[#0b0b14]/50 custom-scrollbar p-6 md:p-10"
            data-lenis-prevent="true"
            onWheel={(e) => e.stopPropagation()}
          >
            <div className="max-w-3xl mx-auto space-y-12">
              
              {/* Header Image & Title */}
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-4 mb-6 shadow-xl">
                  <img src={project.iconImg} alt={project.title} className="w-full h-full object-contain" />
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{project.title}</h2>
                <p className="text-lg text-primary-400 font-medium mb-6">{project.subtitle}</p>
                <p className="text-dark-300 text-base md:text-lg leading-relaxed max-w-2xl">
                  {project.caseStudy?.overview}
                </p>
              </div>

              {/* Grid sections */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Challenge */}
                <div className="glass-card rounded-2xl p-6 border border-white/5">
                  <div className="flex items-center gap-3 mb-4 text-red-400">
                    <FiTarget size={20} />
                    <h3 className="text-white font-bold text-xl">The Challenge</h3>
                  </div>
                  <p className="text-dark-300 leading-relaxed text-sm">
                    {project.caseStudy?.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div className="glass-card rounded-2xl p-6 border border-white/5">
                  <div className="flex items-center gap-3 mb-4 text-emerald-400">
                    <FiTool size={20} />
                    <h3 className="text-white font-bold text-xl">The Solution</h3>
                  </div>
                  <p className="text-dark-300 leading-relaxed text-sm">
                    {project.caseStudy?.solution}
                  </p>
                </div>
              </div>

              {/* Architecture */}
              <div className="glass-card rounded-2xl p-6 md:p-8 border border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent">
                <div className="flex items-center gap-3 mb-6 text-blue-400">
                  <FiBox size={24} />
                  <h3 className="text-white font-bold text-2xl">Architecture</h3>
                </div>
                <div className="p-4 rounded-xl bg-black/40 border border-white/5 font-mono text-sm text-dark-300 leading-loose overflow-x-auto">
                  {project.caseStudy?.architecture.split('->').map((step, i, arr) => (
                    <span key={i}>
                      <span className="text-primary-400">{step.trim()}</span>
                      {i < arr.length - 1 && <span className="text-dark-500 mx-2">→</span>}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-white font-bold text-2xl mb-6 flex items-center gap-3">
                  <FiCheckCircle className="text-primary-500" />
                  Key Features
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.caseStudy?.keyFeatures.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 shrink-0" />
                      <p className="text-dark-300 text-sm leading-relaxed">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h3 className="text-white font-bold text-xl mb-4 text-center">Tech Stack Used</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {project.tech.map((t) => (
                    <div key={t} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                      {techLogos[t] && <img src={techLogos[t]} alt={t} className="w-5 h-5 object-contain" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />}
                      <span className="text-white font-medium text-sm">{t}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const orbY1 = useTransform(scrollYProgress, [0, 1], [-50, 80]);
  const orbY2 = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="projects" ref={sectionRef} className="section-padding relative overflow-hidden">
      {/* Background — parallax */}
      <motion.div style={{ y: orbY1 }} className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary-600/5 rounded-full blur-[150px]" />
      <motion.div style={{ y: orbY2 }} className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-accent-500/5 rounded-full blur-[150px]" />

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}

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
              custom={index}
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
                    <div className="flex flex-wrap gap-3 mt-auto">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-dark-300 hover:text-white hover:bg-white/10 hover:border-primary-500/30 transition-all duration-300 font-medium"
                      >
                        <FiGithub size={15} />
                        Source Code
                      </a>
                      
                      {project.caseStudy && (
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-primary-600 text-white text-sm font-medium hover:bg-primary-500 transition-all duration-300 shadow-lg shadow-primary-500/20"
                        >
                          <FiExternalLink size={15} />
                          View Case Study
                        </button>
                      )}
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
