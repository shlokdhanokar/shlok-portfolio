import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiDownload, FiExternalLink } from 'react-icons/fi';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Set up the worker for react-pdf (Vite compatible)
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

interface ResumeViewerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeViewer({ isOpen, onClose }: ResumeViewerProps) {
  const [numPages, setNumPages] = useState<number>();
  const [width, setWidth] = useState(800);

  useEffect(() => {
    // Lock body scroll when modal is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Responsive width for the PDF
    const updateWidth = () => {
      const modalWidth = Math.min(window.innerWidth - 64, 1000);
      setWidth(modalWidth);
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    
    return () => {
      window.removeEventListener('resize', updateWidth);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

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

            {/* PDF Embed using react-pdf (allows custom cursor to work) */}
            <div 
              className="flex-1 bg-[#1a1a2e] overflow-y-auto flex justify-center py-8"
              data-lenis-prevent="true"
              onWheel={(e) => e.stopPropagation()}
            >
              <Document
                file="/Shlok_Resume.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
                loading={
                  <div className="flex flex-col items-center justify-center h-64 gap-4">
                    <div className="w-8 h-8 border-2 border-primary-500/30 border-t-primary-500 rounded-full animate-spin" />
                    <span className="text-dark-400 text-sm">Loading PDF...</span>
                  </div>
                }
              >
                {Array.from(new Array(numPages), (el, index) => (
                  <div key={`page_${index + 1}`} className="mb-8 rounded-xl overflow-hidden shadow-2xl">
                    <Page 
                      pageNumber={index + 1} 
                      width={width}
                      renderTextLayer={true}
                      renderAnnotationLayer={true}
                    />
                  </div>
                ))}
              </Document>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
