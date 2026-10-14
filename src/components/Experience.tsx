import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiBriefcase, FiArrowRight, FiCalendar, FiExternalLink } from 'react-icons/fi';

const techLogos: Record<string, string> = {
  Azure: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
  LangChain: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/langchain/langchain-original.svg',
  Flask: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg',
  React: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  MongoDB: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  'MongoDB Atlas': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  Python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  FastAPI: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
  PHP: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
  HTML: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  CSS: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  JavaScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  Pandas: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
  'Scikit-learn': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg',
  TensorFlow: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
  'Agentic AI': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
};

interface Metric {
  value: string;
  label: string;
}

interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  dateRange: string;
  type: string;
  points: string[];
  tech: string[];
  metrics?: Metric[];
  link?: { label: string; url: string };
}

const metricColors = ['text-primary-400', 'text-accent-400', 'text-cyan-400'];

const experiences: ExperienceItem[] = [
  {
    role: 'Data Science & AI Content Specialist Intern',
    company: 'Accredian (FullStack Education Pvt. Ltd.)',
    duration: 'Current',
    dateRange: 'Sep 2026 – Mar 2027',
    type: 'Internship · Remote',
    points: [
      "Working on data science and AI learning content for Accredian's professional education programs",
    ],
    tech: ['Python', 'Pandas', 'Generative AI', 'Machine Learning'],
  },
  {
    role: 'Web Development & SEO Optimisation Intern',
    company: 'The CarePal (Carepalz Internet Pvt. Ltd.)',
    duration: 'Ongoing',
    dateRange: 'Jul 2026 – Present',
    type: 'Internship · Remote',
    points: [
      'Built and optimised responsive web pages to improve usability, performance and overall user experience',
      'Developed CRM and user login interfaces connecting the CarePal mobile app and website',
      'Implemented SEO strategies — on-page optimisation, keyword targeting, meta tags and content improvements',
      'Analysed website performance and SEO metrics to support organic traffic growth',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'SEO', 'CRM'],
    link: { label: 'thecarepal.com', url: 'https://thecarepal.com/' },
  },
  {
    role: 'AI/ML Intern · Advanced Software Engineering & Development Intern',
    company: 'MPOnline Limited (Govt. of MP & TCS joint venture)',
    duration: '2 internships',
    dateRange: 'May 2026 – Jul 2026',
    type: 'Internship',
    points: [
      'Completed two internship tracks in parallel: AI/ML, and Advanced Software Engineering & Development',
      'Built 10 machine learning projects: regression, logistic regression, KNN, SVM, decision trees and random forests, K-Means with PCA, an ANN and a CNN',
      'Deployed a heart-disease prediction model as a Flask REST API on Render — 78.69% accuracy, 0.89 ROC-AUC, 19/19 API tests passing',
    ],
    tech: ['Python', 'Scikit-learn', 'TensorFlow', 'Pandas', 'Flask'],
    metrics: [
      { value: '10', label: 'ML Projects' },
      { value: '78.7%', label: 'Model Accuracy' },
      { value: '19/19', label: 'API Tests Pass' },
    ],
  },
  {
    role: 'PHP Web Developer Intern',
    company: 'DivyaSangam',
    duration: '5 months',
    dateRange: 'May 2026 – Sep 2026',
    type: 'Internship',
    points: [
      'Developed and maintained an online pooja booking, astrology booking and spiritual e-commerce platform',
      'Built customer-facing features and internal systems — order and inventory management, WhatsApp integration and payment gateway',
      'Improved user experience and operational efficiency across the platform',
    ],
    tech: ['PHP', 'Full Stack', 'WhatsApp Integration', 'Payment Gateway', 'Order Management'],
    link: { label: 'divyasangam.com', url: 'https://divyasangam.com/' },
  },
  {
    role: 'AI Intern (AI Model Fine-tuning)',
    company: 'SortMyPrep (ZKAP EdTech Services Pvt. Ltd.)',
    duration: '3 months',
    dateRange: 'May 2026 – Jul 2026',
    type: 'Internship · Remote',
    points: [
      'Audited 10,000+ pages of educational content for a generative learning platform, removing 95% of symbol-transcription and maths-syntax errors',
      'Built Python data pipelines turning raw unstructured data into 500+ standardised training files for LLM fine-tuning and retrieval',
      'Validated OCR outputs, cleaned and structured extracted data, and checked AI-processed outputs against source files',
      'Received a letter of recommendation from the Co-Founder & Director',
    ],
    tech: ['Python', 'OCR', 'Data Validation', 'Data Preprocessing', 'Data Annotation'],
    metrics: [
      { value: '10K+', label: 'Pages Audited' },
      { value: '95%', label: 'Errors Removed' },
      { value: '500+', label: 'Training Files' },
    ],
  },
  {
    role: 'Backend Intern',
    company: 'Infoware India (The Infowarehouse)',
    duration: '5 months',
    dateRange: 'Apr 2026 – Sep 2026',
    type: 'Internship · Remote',
    points: [
      'Built a multi-tenant Retrieval-Augmented Generation (RAG) engine so multiple organisations can run secure AI knowledge assistants on shared infrastructure',
      'Implemented tenant-aware architecture with workspace isolation, role-based access control (RBAC) and secure document management',
      'Worked on workflow automation, CRM software and integration architecture',
    ],
    tech: ['Python', 'FastAPI', 'Flask', 'MongoDB Atlas', 'RAG', 'RBAC'],
    link: { label: 'RAG Engine live demo', url: 'https://multi-tenant-rag-engine.vercel.app/' },
  },
  {
    role: 'AI/ML Intern',
    company: 'Coforge BPS',
    duration: '2 months',
    dateRange: 'May 2025 – Jul 2025',
    type: 'Internship · Pune, On-site',
    points: [
      'Built an end-to-end KYC verification pipeline on Microsoft Azure (Form Recognizer, Blob Storage, OpenAI) for 500+ documents with 98% extraction accuracy',
      'Designed agentic AI workflows with LangChain and LangFlow, cutting manual processing time by 60% and verification turnaround from 48 hours to under 8',
      'Delivered a React front end on Flask REST APIs and Azure Communication Services for real-time upload, status tracking and notifications',
      'Reduced inference latency by 30% through batched API calls, caching and efficient Azure resource use',
    ],
    tech: ['Azure', 'LangChain', 'Agentic AI', 'Flask', 'React', 'Python'],
    metrics: [
      { value: '60%', label: 'Less Manual Work' },
      { value: '6x', label: 'Faster Processing' },
      { value: '30%', label: 'Lower Latency' },
    ],
    link: { label: 'KYC demo', url: 'https://agentic-ai-kyc-automation.vercel.app/' },
  },
];

export default function Experience() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const orbY = useTransform(scrollYProgress, [0, 1], [-50, 70]);

  return (
    <section id="experience" ref={sectionRef} className="section-padding relative overflow-hidden">
      {/* Background — parallax */}
      <motion.div style={{ y: orbY }} className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-accent-500/5 rounded-full blur-[150px]" />

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
            Eight internships across GenAI, RAG, machine learning, backend engineering and full-stack web development
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary-500/50 via-accent-500/30 to-transparent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 50, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
              className={`relative flex ${index % 2 === 1 ? 'flex-row-reverse' : 'flex-row'} gap-0 mb-12`}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 -translate-x-1/2 top-8 z-10">
                <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-primary-500 border-[3px] md:border-4 border-dark-950 shadow-lg shadow-primary-500/30" />
              </div>

              {/* Duration - opposite the card */}
              <div className={`w-1/2 ${index % 2 === 1 ? 'text-left pl-5 md:pl-12' : 'text-right pr-5 md:pr-12'}`}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 1 ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="mt-6"
                >
                  <span className="inline-flex items-center gap-1.5 md:gap-2 px-2 py-1 md:px-3 md:py-1 rounded-lg bg-primary-600/10 text-primary-400 text-[10px] md:text-sm font-medium border border-primary-500/15">
                    <FiBriefcase size={12} className="hidden md:block" />
                    {exp.duration}
                  </span>
                  <div className={`flex items-center gap-1 md:gap-2 mt-2 md:mt-3 ${index % 2 === 1 ? 'justify-start' : 'justify-end'}`}>
                    <FiCalendar className="text-dark-400 hidden md:block" size={13} />
                    <p className="text-dark-300 text-[10px] md:text-sm font-medium">{exp.dateRange}</p>
                  </div>
                  <p className="text-dark-400 text-[10px] md:text-sm mt-1">{exp.type}</p>
                </motion.div>
              </div>

              {/* Content - alternates right / left */}
              <div className={`w-1/2 ${index % 2 === 1 ? 'pr-5 md:pr-12' : 'pl-5 md:pl-12'}`}>
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
                  {exp.metrics && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-3 mb-4 md:mb-5">
                      {exp.metrics.map((m, i) => (
                        <div key={m.label} className="text-center p-2 md:p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                          <p className={`${metricColors[i % metricColors.length]} font-bold text-sm md:text-lg`}>{m.value}</p>
                          <p className="text-dark-400 text-[8px] md:text-[10px] uppercase tracking-wider">{m.label}</p>
                        </div>
                      ))}
                    </div>
                  )}

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

                  {exp.link && (
                    <a
                      href={exp.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-4 text-[10px] md:text-xs font-medium text-primary-400 hover:text-primary-300 transition-colors"
                    >
                      <FiExternalLink size={12} />
                      {exp.link.label}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
