import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiCode, FiGitCommit, FiZap, FiTrendingUp } from 'react-icons/fi';

interface StatItem {
  label: string;
  value: number;
  suffix: string;
  icon: React.ReactNode;
  color: string;
  gradient: string;
}

const stats: StatItem[] = [
  {
    label: 'Projects Built',
    value: 12,
    suffix: '+',
    icon: <FiCode size={22} />,
    color: '#3b8fff',
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    label: 'LeetCode Streak',
    value: 320,
    suffix: '+',
    icon: <FiTrendingUp size={22} />,
    color: '#FFA116',
    gradient: 'from-orange-500/20 to-yellow-500/20',
  },
  {
    label: 'GitHub Contributions',
    value: 500,
    suffix: '+',
    icon: <FiGitCommit size={22} />,
    color: '#8b5cf6',
    gradient: 'from-violet-500/20 to-purple-500/20',
  },
  {
    label: 'Technologies',
    value: 28,
    suffix: '+',
    icon: <FiZap size={22} />,
    color: '#06b6d4',
    gradient: 'from-cyan-500/20 to-teal-500/20',
  },
];

function AnimatedCounter({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      // Ease-out cubic
      const progress = 1 - Math.pow(1 - step / steps, 3);
      current = Math.round(target * progress);
      setCount(current);

      if (step >= steps) {
        setCount(target);
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

export default function StatsCounter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-600/[0.03] to-transparent" />

      {/* Top/bottom borders */}
      <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div ref={ref} className="w-full max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16 xl:px-20 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative"
            >
              {/* Hover glow */}
              <div
                className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
                style={{ background: `linear-gradient(135deg, ${stat.color}20, transparent)` }}
              />

              <div className="relative glass-card glass-card-hover rounded-2xl p-5 md:p-6 text-center">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                    delay: 0.3 + index * 0.12,
                  }}
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mx-auto mb-4`}
                  style={{ color: stat.color }}
                >
                  {stat.icon}
                </motion.div>

                {/* Counter */}
                <p
                  className="text-3xl md:text-4xl font-extrabold mb-1.5 tracking-tight"
                  style={{ color: stat.color }}
                >
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} inView={isInView} />
                </p>

                {/* Label */}
                <p className="text-dark-400 text-xs md:text-sm font-medium uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
