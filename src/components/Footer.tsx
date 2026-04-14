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

          {/* Copyright */}
          <p className="text-dark-500 text-xs flex items-center gap-1">
            Built with <FiHeart size={10} className="text-red-400" /> © {new Date().getFullYear()} Shlok Dhanokar
          </p>
        </div>
      </div>
    </footer>
  );
}
