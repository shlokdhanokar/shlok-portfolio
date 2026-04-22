import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SplashScreenProps {
  onComplete: () => void;
}

const firstName = 'Shlok';
const lastName = 'Dhanokar';
const subtitle = 'AI/ML Engineer • GenAI Builder';

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [phase, setPhase] = useState<'entering' | 'name' | 'subtitle' | 'hold' | 'exiting' | 'done'>('entering');
  const [subtitleText, setSubtitleText] = useState('');
  const [progress, setProgress] = useState(0);

  const totalDuration = 3200; // ms

  // Progress bar
  useEffect(() => {
    const start = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min((elapsed / totalDuration) * 100, 100);
      setProgress(pct);
      if (pct >= 100) clearInterval(interval);
    }, 16);
    return () => clearInterval(interval);
  }, []);

  // Phase sequencing
  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    timers.push(setTimeout(() => setPhase('name'), 300));
    timers.push(setTimeout(() => setPhase('subtitle'), 1200));
    timers.push(setTimeout(() => setPhase('hold'), 2200));
    timers.push(setTimeout(() => setPhase('exiting'), 2500));
    timers.push(setTimeout(() => setPhase('done'), 3200));
    return () => timers.forEach(clearTimeout);
  }, []);

  // Typewriter effect for subtitle
  useEffect(() => {
    if (phase !== 'subtitle' && phase !== 'hold' && phase !== 'exiting') return;
    if (subtitleText.length >= subtitle.length) return;

    if (phase === 'subtitle') {
      const timer = setTimeout(() => {
        setSubtitleText(subtitle.slice(0, subtitleText.length + 1));
      }, 35);
      return () => clearTimeout(timer);
    }
  }, [phase, subtitleText]);

  // When fully done
  useEffect(() => {
    if (phase === 'done') onComplete();
  }, [phase, onComplete]);

  const handleSkip = useCallback(() => {
    setPhase('done');
    onComplete();
  }, [onComplete]);

  const isExiting = phase === 'exiting' || phase === 'done';

  // Stagger delays for each letter
  const nameLetters = [...firstName, ' ', ...lastName];

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{ background: '#030712' }}
        >
          {/* Animated gradient background */}
          <div className="absolute inset-0 splash-gradient-bg" />

          {/* Orbital rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: isExiting ? 0 : [0, 0.6, 0.4],
                scale: isExiting ? 2.5 : 1,
              }}
              transition={{ duration: isExiting ? 0.7 : 1, ease: 'easeOut' }}
              className="absolute w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full splash-orbit-ring"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{
                opacity: isExiting ? 0 : [0, 0.3, 0.2],
                scale: isExiting ? 3 : 1,
              }}
              transition={{ duration: isExiting ? 0.7 : 1.2, delay: 0.15, ease: 'easeOut' }}
              className="absolute w-[360px] h-[360px] md:w-[520px] md:h-[520px] rounded-full splash-orbit-ring-reverse"
            />
          </div>

          {/* Glow orbs */}
          <div className="absolute top-1/3 -left-32 w-[300px] h-[300px] bg-primary-600/20 rounded-full blur-[120px] splash-glow-pulse" />
          <div className="absolute bottom-1/3 -right-32 w-[250px] h-[250px] bg-violet-500/15 rounded-full blur-[100px] splash-glow-pulse-delayed" />

          {/* Center content */}
          <div className="relative z-10 flex flex-col items-center text-center px-6">
            {/* Name - letter by letter */}
            <div className="flex flex-wrap justify-center mb-4" aria-label="Shlok Dhanokar">
              {nameLetters.map((letter, i) => (
                <motion.span
                  key={`${letter}-${i}`}
                  initial={{ opacity: 0, y: 40, rotateX: -90 }}
                  animate={{
                    opacity: phase !== 'entering' ? (isExiting ? 0 : 1) : 0,
                    y: phase !== 'entering' ? (isExiting ? -60 : 0) : 40,
                    rotateX: phase !== 'entering' ? 0 : -90,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: phase !== 'entering' && !isExiting
                      ? 0.02 * i + Math.random() * 0.05
                      : isExiting
                        ? 0.01 * i
                        : 0,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`inline-block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight ${
                    letter === ' ' ? 'w-4 md:w-6' : ''
                  } ${i < firstName.length ? 'text-white' : 'splash-name-gradient'}`}
                  style={{ perspective: '800px' }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </div>

            {/* Decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{
                scaleX: phase !== 'entering' ? (isExiting ? 0 : 1) : 0,
                opacity: isExiting ? 0 : 1,
              }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="w-24 md:w-32 h-[2px] mb-5 origin-center"
              style={{
                background: 'linear-gradient(90deg, transparent, #3b8fff, #8b5cf6, transparent)',
              }}
            />

            {/* Subtitle typewriter */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: phase === 'subtitle' || phase === 'hold' || phase === 'exiting' ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="font-mono text-sm sm:text-base md:text-lg text-dark-300 tracking-wide"
            >
              {subtitleText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
                className="text-primary-400 ml-0.5"
              >
                |
              </motion.span>
            </motion.p>
          </div>

          {/* Progress bar at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/5">
            <motion.div
              className="h-full origin-left"
              style={{
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #3b8fff, #8b5cf6, #06b6d4)',
              }}
            />
          </div>

          {/* Skip button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            whileHover={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.4 }}
            onClick={handleSkip}
            className="absolute bottom-8 right-8 text-xs text-dark-400 hover:text-white border border-white/10 hover:border-white/20 px-3 py-1.5 rounded-lg transition-colors z-20"
          >
            Skip →
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
