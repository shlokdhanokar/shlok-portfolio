import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FiDownload, FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map((l) => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 200) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          theme === 'dark' ? 'border-white/5' : 'border-black/5'
        } ${
          scrolled
            ? theme === 'dark'
              ? 'bg-[#030712]/80 backdrop-blur-xl shadow-lg shadow-black/20'
              : 'bg-white/80 backdrop-blur-xl shadow-lg shadow-black/5'
            : theme === 'dark'
              ? 'bg-[#030712]/50 backdrop-blur-sm'
              : 'bg-white/50 backdrop-blur-sm'
        }`}
      >
        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16 xl:px-20">
          <div className="flex items-center justify-between h-20">
            {/* Logo with photo — BIGGER */}
            <a href="#" className="relative group flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden ring-2 ring-white/10 group-hover:ring-primary-500/40 transition-all duration-300 shadow-lg">
                <img
                  src="/shlok-photo.png"
                  alt="Shlok Dhanokar"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="hidden sm:block">
                <span className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Shlok</span>
                <span className="text-xl font-bold text-primary-500">.</span>
                <span className={`text-sm font-normal ml-1 hidden lg:inline ${theme === 'dark' ? 'text-dark-400' : 'text-slate-500'}`}>dev</span>
              </div>
            </a>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-white bg-white/5'
                      : 'text-dark-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                  {activeSection === link.href.replace('#', '') && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-[2px] bg-primary-500 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              ))}
              <button
                onClick={toggleTheme}
                className="ml-3 p-2.5 rounded-xl bg-white/5 border border-white/10 text-dark-300 hover:text-white hover:bg-white/10 hover:border-primary-500/30 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <FiSun size={16} /> : <FiMoon size={16} />}
              </button>
              <a
                href="/Shlok_Resume.pdf"
                download="Shlok_Dhanokar_Resume.pdf"
                className="ml-2 btn-primary text-white text-sm !py-2.5 !px-5 group"
              >
                <FiDownload size={14} className="group-hover:animate-bounce" />
                Resume
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              {mobileOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-72 bg-[#0b0b14]/95 backdrop-blur-xl border-l border-white/5 p-6 pt-24"
            >
              <div className="flex items-center gap-3 mb-8 pb-6 border-b border-white/5">
                <div className="w-12 h-12 rounded-xl overflow-hidden ring-2 ring-primary-500/30">
                  <img src="/shlok-photo.png" alt="Shlok" className="w-full h-full object-cover object-top" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Shlok Dhanokar</p>
                  <p className="text-dark-400 text-xs">AI/ML Engineer</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => setMobileOpen(false)}
                    className="text-dark-300 hover:text-white py-3 px-4 rounded-xl hover:bg-white/5 text-base font-medium transition-all"
                  >
                    {link.name}
                  </motion.a>
                ))}
                <a
                  href="/Shlok_Resume.pdf"
                  download="Shlok_Dhanokar_Resume.pdf"
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary text-white text-sm mt-4 justify-center"
                >
                  <FiDownload size={14} />
                  Download Resume
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
