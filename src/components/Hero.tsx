import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';
import { SiLeetcode, SiCodechef, SiDuolingo } from 'react-icons/si';

const roles = [
  'AI/ML Engineer',
  'Backend Developer',
  'GenAI Builder',
  'Cloud Architect',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? currentRole.substring(0, displayText.length - 1)
              : currentRole.substring(0, displayText.length + 1)
          );
        },
        isDeleting ? 40 : 80
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 grid-bg" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-48 w-[500px] h-[500px] bg-primary-600/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/3 -right-48 w-[400px] h-[400px] bg-accent-500/8 rounded-full blur-[150px]" />

      {/* Full-width container */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16 xl:px-20 pt-28">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-20 items-center">
          {/* Left: Text content — takes 3 cols for more room */}
          <div className="lg:col-span-3">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-sm text-dark-300 font-medium">Open to Opportunities</span>
            </motion.div>

            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-dark-300 text-xl mb-4"
            >
              Hi, I'm <span className="text-white font-semibold">Shlok Dhanokar</span> 👋
            </motion.p>

            {/* Main heading — BIGGER */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6"
            >
              <span className="text-white">Building Scalable</span>
              <br />
              <span className="gradient-text">AI Systems</span>
              <span className="text-white"> &</span>
              <br />
              <span className="text-white">Intelligent </span>
              <span className="gradient-text">Apps</span>
            </motion.h1>

            {/* Typing effect role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-[1px] w-8 bg-gradient-to-r from-primary-500 to-transparent" />
              <span className="font-mono text-lg md:text-xl text-primary-400 font-medium">
                {displayText}
                <span className="animate-pulse text-primary-400">|</span>
              </span>
            </motion.div>

            {/* Short description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-dark-400 text-lg leading-relaxed mb-10 max-w-xl"
            >
              Pre-final year CSE student at VIT Bhopal, crafting production-grade AI solutions
              — from computer vision to agentic workflows.
            </motion.p>

            {/* CTA buttons — spread out */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <a href="#projects" className="btn-primary text-white group text-base !px-8 !py-4">
                View Projects
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </a>
              <a href="#contact" className="btn-secondary text-white text-base !px-8 !py-4">
                Contact Me
              </a>
              <a
                href="/Shlok_Resume.pdf"
                download="Shlok_Dhanokar_Resume.pdf"
                className="btn-secondary text-white group text-base !px-8 !py-4"
              >
                <FiDownload size={16} className="group-hover:animate-bounce" />
                Resume
              </a>
            </motion.div>

            {/* Social links — HIGHLIGHTED */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex items-center gap-4"
            >
              <span className="text-dark-500 text-xs uppercase tracking-widest mr-1">Find me</span>
              <a
                href="https://github.com/shlokdhanokar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-dark-300 hover:text-white hover:bg-white/[0.12] hover:border-primary-500/30 hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-300"
              >
                <FiGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/shlokdhanokar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-dark-300 hover:text-white hover:bg-[#0077B5]/20 hover:border-[#0077B5]/40 hover:shadow-lg hover:shadow-[#0077B5]/10 transition-all duration-300"
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href="mailto:shlokdhanokar@gmail.com"
                aria-label="Email"
                className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-dark-300 hover:text-white hover:bg-red-500/15 hover:border-red-500/30 hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300"
              >
                <FiMail size={20} />
              </a>
            </motion.div>
          </div>

          {/* Right: Profile image — 2 cols, CLEAN without overlapping */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex lg:col-span-2 justify-center"
          >
            <div className="relative flex flex-col items-center">
              {/* Decorative outer ring */}
              <div className="absolute -inset-6 rounded-full border border-dashed border-white/[0.04] animate-spin-slow" />

              {/* Main photo — clean, no overlapping elements on it */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden ring-2 ring-white/10 shadow-2xl shadow-primary-600/10">
                <img
                  src="/shlok-photo.png"
                  alt="Shlok R. Dhanokar"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/30 via-transparent to-transparent" />
              </div>

              {/* Badges BELOW the photo, nicely spaced — no overlap */}
              <div className="flex items-center gap-4 mt-8">
                <div className="glass-card px-5 py-3 rounded-xl border border-white/[0.08] shadow-lg text-center">
                  <p className="text-[10px] text-dark-400 uppercase tracking-wider mb-0.5">CGPA</p>
                  <p className="text-lg font-bold text-primary-400">8.20</p>
                </div>
                <div className="glass-card px-5 py-3 rounded-xl border border-white/[0.08] shadow-lg text-center">
                  <p className="text-[10px] text-dark-400 uppercase tracking-wider mb-0.5">University</p>
                  <p className="text-sm font-semibold text-white">VIT Bhopal</p>
                </div>
                <div className="glass-card px-5 py-3 rounded-xl border border-white/[0.08] shadow-lg text-center">
                  <p className="text-[10px] text-dark-400 uppercase tracking-wider mb-0.5">Year</p>
                  <p className="text-sm font-semibold text-accent-400">Pre-Final</p>
                </div>
              </div>

              {/* Coding Streak badges — below stat cards */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.9 }}
                className="flex items-center gap-3 mt-4"
              >
                {/* LeetCode streak */}
                <a
                  href="https://leetcode.com/u/shlok_dhanokar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group glass-card px-4 py-2.5 rounded-xl border border-[#FFA116]/20 hover:border-[#FFA116]/50 hover:bg-[#FFA116]/5 transition-all duration-500 flex items-center gap-2.5 shadow-lg"
                >
                  <motion.div
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  >
                    <SiLeetcode size={20} className="text-[#FFA116]" />
                  </motion.div>
                  <div>
                    <p className="text-[#FFA116] font-bold text-sm leading-tight">300+ days</p>
                    <p className="text-dark-400 text-[10px] uppercase tracking-wider">LeetCode Streak</p>
                  </div>
                  <FiArrowRight size={14} className="text-[#FFA116]/40 group-hover:text-[#FFA116] group-hover:translate-x-0.5 transition-all duration-300 ml-1" />
                </a>

                {/* CodeChef streak */}
                <a
                  href="https://www.codechef.com/users/shlok_dhanokar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group glass-card px-4 py-2.5 rounded-xl border border-[#56C5C5]/20 hover:border-[#56C5C5]/50 hover:bg-[#56C5C5]/5 transition-all duration-500 flex items-center gap-2.5 shadow-lg"
                >
                  <motion.div
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1.4 }}
                  >
                    <SiCodechef size={20} className="text-[#56C5C5]" />
                  </motion.div>
                  <div>
                    <p className="text-[#56C5C5] font-bold text-sm leading-tight">248+ days</p>
                    <p className="text-dark-400 text-[10px] uppercase tracking-wider">CodeChef Streak</p>
                  </div>
                  <FiArrowRight size={14} className="text-[#56C5C5]/40 group-hover:text-[#56C5C5] group-hover:translate-x-0.5 transition-all duration-300 ml-1" />
                </a>

                {/* Duolingo streak */}
                <a
                  href="https://www.duolingo.com/profile/SHLOKDHANO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group glass-card px-4 py-2.5 rounded-xl border border-[#58CC02]/20 hover:border-[#58CC02]/50 hover:bg-[#58CC02]/5 transition-all duration-500 flex items-center gap-2.5 shadow-lg"
                >
                  <motion.div
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1.8 }}
                  >
                    <SiDuolingo size={20} className="text-[#58CC02]" />
                  </motion.div>
                  <div>
                    <p className="text-[#58CC02] font-bold text-sm leading-tight">136+ days</p>
                    <p className="text-dark-400 text-[10px] uppercase tracking-wider">Duolingo 🇯🇵 Japanese</p>
                  </div>
                  <FiArrowRight size={14} className="text-[#58CC02]/40 group-hover:text-[#58CC02] group-hover:translate-x-0.5 transition-all duration-300 ml-1" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-white/10 flex items-start justify-center p-1.5"
        >
          <div className="w-1 h-1 rounded-full bg-primary-400/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
