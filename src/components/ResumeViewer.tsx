import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiDownload, FiExternalLink } from 'react-icons/fi';

interface ResumeViewerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeViewer({ isOpen, onClose }: ResumeViewerProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[200] bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-4 md:inset-8 lg:inset-12 z-[201] flex flex-col rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50"
            style={{ background: '#0b0b14' }}
          >
            {/* Header bar */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-white/[0.02]">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer hover:bg-red-400 transition-colors" onClick={onClose} />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-dark-300 text-sm font-medium ml-2">Shlok_Dhanokar_Resume.pdf</span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="/Shlok_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-dark-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all"
                >
                  <FiExternalLink size={12} />
                  Open
                </a>
                <a
                  href="/Shlok_Resume.pdf"
                  download="Shlok_Dhanokar_Resume.pdf"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-white bg-primary-600 hover:bg-primary-500 transition-all"
                >
                  <FiDownload size={12} />
                  Download
                </a>
                <button
                  onClick={onClose}
                  className="ml-1 p-1.5 rounded-lg text-dark-400 hover:text-white hover:bg-white/10 transition-all"
                >
                  <FiX size={18} />
                </button>
              </div>
            </div>

            {/* PDF Embed */}
            <div className="flex-1 bg-[#1a1a2e]">
              <iframe
                src="/Shlok_Resume.pdf"
                title="Shlok Dhanokar Resume"
                className="w-full h-full border-0"
                style={{ minHeight: '100%' }}
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
