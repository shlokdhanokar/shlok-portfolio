import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import NeuralNetworkCanvas from './components/canvas/NeuralNetworkCanvas';
import AudioFeedback from './components/AudioFeedback';
import SplashScreen from './components/SplashScreen';
import { motion, AnimatePresence } from 'framer-motion';

function AppContent() {
  const { theme } = useTheme();
  const [showSplash, setShowSplash] = useState(true);

  // Check if splash has already been shown in this session
  useEffect(() => {
    const hasSeenSplash = sessionStorage.getItem('hasSeenSplash');
    if (hasSeenSplash) {
      setShowSplash(false);
    }
  }, []);

  useEffect(() => {
    // Prevent browser from restoring previous scroll position
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    // Force scroll to top
    window.scrollTo(0, 0);
  }, []);

  // Lock scrolling when splash is active
  useEffect(() => {
    if (showSplash) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showSplash]);

  const handleSplashComplete = () => {
    setShowSplash(false);
    sessionStorage.setItem('hasSeenSplash', 'true');
  };

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}

      <AnimatePresence>
        {!showSplash && (
          <motion.div
            key="main-app"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={`relative min-h-screen overflow-x-hidden transition-colors duration-500 ${
              theme === 'dark' ? 'bg-dark-950 text-white' : 'bg-[#f8fafc] text-slate-900'
            }`}
          >
      {/* Global noise overlay */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.015]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />

      {/* Global 3D Background */}
      <NeuralNetworkCanvas />

      <AudioFeedback />
      <CustomCursor />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Leadership />
        <Contact />
      </main>

      <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
