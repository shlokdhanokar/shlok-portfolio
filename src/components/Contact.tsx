import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiMail, FiGithub, FiLinkedin, FiArrowUpRight, FiPhone } from 'react-icons/fi';
import { SiCodechef, SiLeetcode } from 'react-icons/si';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple mailto fallback
    const mailtoLink = `mailto:shlokdhanokar@gmail.com?subject=Portfolio%20Contact%20from%20${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}%0A%0AFrom:%20${encodeURIComponent(formData.email)}`;
    window.open(mailtoLink, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const socials = [
    { name: 'GitHub', icon: <FiGithub />, href: 'https://github.com/shlokdhanokar', color: 'hover:border-white/20' },
    { name: 'LinkedIn', icon: <FiLinkedin />, href: 'https://linkedin.com/in/shlokdhanokar', color: 'hover:border-blue-500/30' },
    { name: 'Email', icon: <FiMail />, href: 'mailto:shlokdhanokar@gmail.com', color: 'hover:border-primary-500/30' },
    { name: '+91 91681 35674', icon: <FiPhone />, href: 'tel:+919168135674', color: 'hover:border-green-500/30' },
    { name: 'CodeChef', icon: <SiCodechef />, href: 'https://www.codechef.com/users/shlok_dhanokar', color: 'hover:border-amber-500/30' },
    { name: 'LeetCode', icon: <SiLeetcode />, href: 'https://leetcode.com/u/shlok_dhanokar/', color: 'hover:border-yellow-500/30' },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-primary-600/5 rounded-full blur-[150px]" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-accent-500/5 rounded-full blur-[150px]" />

      <div className="w-full max-w-[1600px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="tag mb-4">Get in Touch</span>
          <h2 className="section-title text-white mt-4">
            Let's Build Something <span className="gradient-text">Impactful</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Have a project idea, internship opportunity, or just want to connect? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 space-y-6"
          >
            <div>
              <h3 className="text-white font-semibold text-xl mb-3">Let's connect</h3>
              <p className="text-dark-300 text-sm leading-relaxed">
                I'm always open to discussing new projects, innovative ideas, or opportunities to be part of your vision.
              </p>
            </div>

            {/* Social links */}
            <div className="space-y-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between p-4 rounded-xl glass-card border border-white/5 ${social.color} hover:bg-white/5 transition-all duration-300 group`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-dark-400 group-hover:text-primary-400 transition-colors">
                      {social.icon}
                    </span>
                    <span className="text-dark-300 group-hover:text-white text-sm font-medium transition-colors">
                      {social.name}
                    </span>
                  </div>
                  <FiArrowUpRight className="text-dark-500 group-hover:text-primary-400 transition-colors" size={14} />
                </a>
              ))}
            </div>


          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-dark-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm placeholder-dark-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-dark-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm placeholder-dark-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm placeholder-dark-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-all resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>
              <button
                type="submit"
                disabled={submitted}
                className="btn-primary text-white w-full justify-center group disabled:opacity-60"
              >
                {submitted ? (
                  <>✓ Opening Email Client</>
                ) : (
                  <>
                    Send Message
                    <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" size={14} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
