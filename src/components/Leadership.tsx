import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiUsers, FiHeart, FiCalendar, FiAward, FiX, FiMaximize2 } from 'react-icons/fi';

interface LeadershipItem {
  title: string;
  organization: string;
  iconImg: string;
  stats: { label: string; value: string; icon: React.ReactNode }[];
  description: string;
  gradient: string;
}

interface AchievementItem {
  icon: string;
  badge: string;
  badgeColor: string;
  title: string;
  description: string;
  file?: string; // path in /achievements/
  fileType?: 'pdf' | 'image';
}

interface CertItem {
  icon: string;
  title: string;
  issuer: string;
  color: string;
  borderColor: string;
  file: string;
  fileType: 'pdf' | 'image';
}

const leadership: LeadershipItem[] = [
  {
    title: 'Event Lead',
    organization: 'Google Developer Groups on Campus (GDGC)',
    iconImg: '/gdgc-logo.jpg',
    stats: [
      { label: 'Participants', value: '800+', icon: <FiUsers /> },
      { label: 'Events Organized', value: '10+', icon: <FiCalendar /> },
    ],
    description: 'Led large-scale technical events, workshops, and hackathons. Coordinated teams, managed logistics, and ensured impactful learning experiences for the developer community.',
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'President',
    organization: 'Marathi Language & Culture Club',
    iconImg: '/marathi-club-logo.png',
    stats: [
      { label: 'Student Reach', value: '11,000+', icon: <FiUsers /> },
      { label: 'Funds Raised', value: '₹5L+', icon: <FiHeart /> },
    ],
    description: 'Spearheaded cultural initiatives, organized fundraising events with ₹5L+ donations, and managed a team serving 11,000+ students. Built a strong sense of community and cultural awareness.',
    gradient: 'from-orange-500/20 to-amber-500/20',
  },
];

const achievements: AchievementItem[] = [
  {
    icon: '🏆',
    badge: '1st Place',
    badgeColor: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
    title: 'IEEE Hackathon Winner',
    description: 'Won first place at the IEEE Hackathon for building an AI-based assistive navigation solution. Recognized for technical excellence, real-world applicability, and impactful problem-solving.',
    file: '/achievements/IEEE HACKATHON CERTIFICATE.pdf',
    fileType: 'pdf',
  },
  {
    icon: '🎖️',
    badge: 'Finalist',
    badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    title: 'MERN AI Hackathon Finalist',
    description: 'Selected as a finalist in a competitive MERN + AI hackathon, building a full-stack AI-powered application under time constraints.',
    file: '/achievements/MERN AI Hackathon Certificate.png',
    fileType: 'image',
  },
  {
    icon: '♟️',
    badge: 'Certified',
    badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    title: 'FIDE Chess Certification — Amravati',
    description: 'Certified by FIDE (International Chess Federation) in Amravati, demonstrating strategic thinking, analytical reasoning, and competitive discipline.',
    file: '/achievements/FIDE certificate amravati.pdf',
    fileType: 'pdf',
  },
  {
    icon: '⭐',
    badge: 'Rating Milestone',
    badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    title: 'CodeChef 500→1000 Rating',
    description: 'Doubled competitive programming rating on CodeChef from 500 to 1000+ through consistent problem-solving and algorithmic practice.',
    file: '/achievements/CODECHEF 500 to 1000 Rating Certificate.pdf',
    fileType: 'pdf',
  },
  {
    icon: '🎓',
    badge: 'VIT Bhopal',
    badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    title: 'Solvit Annual Fest Winner',
    description: 'Recognized at VIT Bhopal\'s tech fest Solvit for outstanding technical performance and innovative project presentation.',
    file: '/achievements/Solvit certificate.pdf',
    fileType: 'pdf',
  },
  {
    icon: '🔥',
    badge: '50 Days',
    badgeColor: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    title: '50-Day LeetCode Badge',
    description: 'Earned the 50-day consistency badge on LeetCode by solving problems daily without breaks — building strong algorithmic fundamentals.',
    file: '/achievements/50 day badge.png',
    fileType: 'image',
  },
  {
    icon: '💯',
    badge: '100 Days',
    badgeColor: 'bg-[#FFA116]/10 text-[#FFA116] border-[#FFA116]/20',
    title: '100-Day LeetCode Badge',
    description: 'Reached the elite 100-day streak on LeetCode — consistently solving competitive problems daily across data structures, algorithms, and dynamic programming.',
    file: '/achievements/100 days leetcode badge.png',
    fileType: 'image',
  },
  {
    icon: '🦉',
    badge: '100 Days',
    badgeColor: 'bg-[#58CC02]/10 text-[#58CC02] border-[#58CC02]/20',
    title: '100-Day Duolingo Streak — Japanese',
    description: 'Achieved a 100-day streak learning Japanese on Duolingo, demonstrating discipline and consistency in language acquisition alongside technical skills.',
    file: '/achievements/100 days Duolingo.jpeg',
    fileType: 'image',
  },
];

const certifications: CertItem[] = [
  {
    icon: '☁️',
    title: 'AWS Technical Essentials',
    issuer: 'Amazon Web Services',
    color: 'from-orange-500/20 to-amber-500/20',
    borderColor: 'border-orange-500/20',
    file: '/achievements/AWS technical essentials Certificate.pdf',
    fileType: 'pdf',
  },
  {
    icon: '☁️',
    title: 'AWS Cloud Practitioner (Practice)',
    issuer: 'Amazon Web Services',
    color: 'from-orange-500/20 to-amber-500/20',
    borderColor: 'border-orange-500/20',
    file: '/achievements/AWS practice question certificate.pdf',
    fileType: 'pdf',
  },
  {
    icon: '☁️',
    title: 'AWS Cloud Computing — Intellipaat',
    issuer: 'Intellipaat',
    color: 'from-orange-400/20 to-yellow-500/20',
    borderColor: 'border-orange-400/20',
    file: '/achievements/AWS Intellipaat certificate.pdf',
    fileType: 'pdf',
  },
  {
    icon: '🐍',
    title: 'Python + Machine Learning',
    issuer: 'Coursera',
    color: 'from-blue-500/20 to-indigo-500/20',
    borderColor: 'border-blue-500/20',
    file: '/achievements/PYTHON-MACHINE-LEARNING-COURSERA-CERTIFICATE.pdf',
    fileType: 'pdf',
  },
  {
    icon: '☕',
    title: 'Java Achievement',
    issuer: 'HackerRank',
    color: 'from-red-500/20 to-orange-500/20',
    borderColor: 'border-red-500/20',
    file: '/achievements/JAVA CERTIFICATE HACKERRANK.pdf',
    fileType: 'pdf',
  },
  {
    icon: '👁️',
    title: 'Computer Vision',
    issuer: 'Vityarthi',
    color: 'from-cyan-500/20 to-blue-500/20',
    borderColor: 'border-cyan-500/20',
    file: '/achievements/Computer Vision Vityarthi Certificate.png',
    fileType: 'image',
  },
  {
    icon: '🗄️',
    title: 'Database Management Systems',
    issuer: 'VIT Bhopal',
    color: 'from-teal-500/20 to-green-500/20',
    borderColor: 'border-teal-500/20',
    file: '/achievements/SHLOK DBMS CERTIFICATE.pdf',
    fileType: 'pdf',
  },
  {
    icon: '🌐',
    title: 'NPTEL Cloud Computing',
    issuer: 'NPTEL — IIT',
    color: 'from-indigo-500/20 to-purple-500/20',
    borderColor: 'border-indigo-500/20',
    file: '/achievements/NPTEL cloud computing certificate.pdf',
    fileType: 'pdf',
  },
];

// ─── Preview Modal ────────────────────────────────────────────────────────────
function PreviewModal({
  title,
  file,
  fileType,
  onClose,
}: {
  title: string;
  file: string;
  fileType: 'pdf' | 'image';
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      <motion.div
        key="modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Backdrop blur */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />

        {/* Modal */}
        <motion.div
          key="modal-content"
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 w-full max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden glass-card border border-white/10 shadow-2xl shadow-black/50 flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary-500/20 border border-primary-500/30 flex items-center justify-center">
                <FiMaximize2 size={14} className="text-primary-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm">{title}</h3>
                <p className="text-dark-400 text-xs">Click outside to close</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 hover:bg-red-500/20 hover:border-red-500/30 flex items-center justify-center text-dark-400 hover:text-red-400 transition-all duration-300"
            >
              <FiX size={16} />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-auto bg-dark-950/50 min-h-0">
            {fileType === 'image' ? (
              <div className="flex items-center justify-center p-6 min-h-[60vh]">
                <img
                  src={file}
                  alt={title}
                  className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-xl"
                />
              </div>
            ) : (
              <iframe
                src={`${file}#toolbar=0&navpanes=0`}
                title={title}
                className="w-full"
                style={{ height: '75vh', minHeight: '500px', border: 'none' }}
              />
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function Leadership() {
  const [preview, setPreview] = useState<{ title: string; file: string; fileType: 'pdf' | 'image' } | null>(null);

  const openPreview = (title: string, file: string, fileType: 'pdf' | 'image') => {
    setPreview({ title, file, fileType });
  };

  return (
    <section id="leadership" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-1/2 w-[400px] h-[400px] bg-primary-600/5 rounded-full blur-[150px]" />

      {/* Modal */}
      {preview && (
        <PreviewModal
          title={preview.title}
          file={preview.file}
          fileType={preview.fileType}
          onClose={() => setPreview(null)}
        />
      )}

      <div className="w-full max-w-[1600px] mx-auto relative z-10">

        {/* ── Leadership ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="tag mb-4">Leadership</span>
          <h2 className="section-title text-white mt-4">
            Beyond <span className="gradient-text">Code</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Building communities and driving impact beyond the keyboard
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {leadership.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="glass-card glass-card-hover rounded-2xl p-8 h-full relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden shrink-0">
                      <img src={item.iconImg} alt={item.organization} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">{item.title}</h3>
                      <p className="text-dark-400 text-sm">{item.organization}</p>
                    </div>
                  </div>
                  <p className="text-dark-300 text-sm leading-relaxed mb-6">{item.description}</p>
                  <div className="flex gap-4">
                    {item.stats.map((stat) => (
                      <div key={stat.label} className="flex-1 p-4 rounded-xl bg-white/[0.03] border border-white/[0.05] text-center">
                        <div className="flex items-center justify-center gap-1.5 text-primary-400 mb-1">
                          {stat.icon}
                          <span className="font-bold text-xl">{stat.value}</span>
                        </div>
                        <p className="text-dark-400 text-[10px] uppercase tracking-wider font-medium">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Achievements ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="mt-24"
        >
          <div className="text-center mb-12">
            <span className="tag mb-4">Recognition</span>
            <h2 className="section-title text-white mt-4 !text-3xl md:!text-4xl">
              Achievements <span className="gradient-text">& Awards</span>
            </h2>
            <p className="text-dark-400 text-sm mt-2">Click any card to view the certificate</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {achievements.map((ach, index) => (
              <motion.button
                key={ach.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => ach.file && openPreview(ach.title, ach.file, ach.fileType!)}
                className={`group text-left w-full ${ach.file ? 'cursor-pointer' : 'cursor-default'}`}
                whileHover={ach.file ? { y: -3 } : {}}
              >
                <div className="glass-card glass-card-hover rounded-2xl p-6 h-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {ach.file && (
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-6 h-6 rounded-md bg-primary-500/20 border border-primary-500/30 flex items-center justify-center">
                        <FiMaximize2 size={10} className="text-primary-400" />
                      </div>
                    </div>
                  )}
                  <div className="relative z-10">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl shrink-0">
                        {ach.icon}
                      </div>
                      <div>
                        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-bold border ${ach.badgeColor} mb-2`}>
                          <FiAward size={10} />
                          {ach.badge}
                        </span>
                        <h3 className="text-white font-bold text-base leading-snug mb-2">{ach.title}</h3>
                        <p className="text-dark-400 text-xs leading-relaxed">{ach.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* ── Certifications ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="mt-24"
        >
          <div className="text-center mb-12">
            <span className="tag mb-4">Learning</span>
            <h2 className="section-title text-white mt-4 !text-3xl md:!text-4xl">
              Certifications <span className="gradient-text">& Courses</span>
            </h2>
            <p className="section-subtitle mx-auto mt-2">
              Click any card to view the certificate
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <motion.button
                key={cert.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                onClick={() => openPreview(cert.title, cert.file, cert.fileType)}
                className="group text-left w-full cursor-pointer"
                whileHover={{ y: -3 }}
              >
                <div className={`glass-card glass-card-hover rounded-xl p-5 h-full relative overflow-hidden border ${cert.borderColor}`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-30 group-hover:opacity-60 transition-opacity duration-500`} />
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-5 h-5 rounded-md bg-white/10 border border-white/10 flex items-center justify-center">
                      <FiMaximize2 size={9} className="text-white/60" />
                    </div>
                  </div>
                  <div className="relative z-10 flex flex-col items-start gap-3">
                    <span className="text-2xl">{cert.icon}</span>
                    <div>
                      <h3 className="text-white font-semibold text-sm leading-snug mb-1">{cert.title}</h3>
                      <p className="text-dark-400 text-[10px] uppercase tracking-wider">{cert.issuer}</p>
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
