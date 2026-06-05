import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 xl:px-20 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & tagline */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg overflow-hidden ring-1 ring-white/10">
              <img src="/shlok-photo.png" alt="Shlok" className="w-full h-full object-cover object-top" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Shlok Dhanokar</p>
              <p className="text-dark-500 text-xs">Building the future with AI</p>
            </div>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {[
              { icon: <FiGithub size={16} />, href: 'https://github.com/shlokdhanokar' },
              { icon: <FiLinkedin size={16} />, href: 'https://linkedin.com/in/shlokdhanokar' },
              { icon: <FiMail size={16} />, href: 'mailto:shlokdhanokar@gmail.com' },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-dark-400 hover:text-white hover:bg-white/[0.08] transition-all duration-300"
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Copyright & Visitor Counter */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <p className="text-dark-500 text-xs flex items-center gap-1">
              Built with <FiHeart size={10} className="text-red-400" /> © {new Date().getFullYear()} Shlok Dhanokar
            </p>
            <a href="https://visitorbadge.io/status?path=shlokdhanokar.portfolio" target="_blank" rel="noreferrer" title="Visitor Count">
              <img 
                src="https://api.visitorbadge.io/api/visitors?path=shlokdhanokar.portfolio&countColor=%233b82f6" 
                alt="Visitor Count" 
                className="h-[18px] opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" 
              />
            </a>
            <span className="text-sm text-white mt-1">250</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
