import { motion } from 'framer-motion';
import { FiUsers, FiHeart, FiStar, FiCalendar } from 'react-icons/fi';

interface LeadershipItem {
  title: string;
  organization: string;
  iconImg: string;
  stats: { label: string; value: string; icon: React.ReactNode }[];
  description: string;
  gradient: string;
}

const leadership: LeadershipItem[] = [
  {
    title: 'Event Lead',
    organization: 'Google Developer Groups on Campus (GDGC)',
    iconImg: '/gdgc-logo.jpg',
    stats: [
      { label: 'Participants', value: '800+', icon: <FiUsers /> },
      { label: 'Events Organized', value: '10+', icon: <FiCalendar /> },
    ],
    description: 'Led large-scale technical events, workshops, and hackathons. Coordinated teams, managed logistics, and ensured impactful learning experiences for the developer community.',
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'President',
    organization: 'Marathi Language & Culture Club',
    iconImg: '/marathi-club-logo.png',
    stats: [
      { label: 'Student Reach', value: '11,000+', icon: <FiUsers /> },
      { label: 'Funds Raised', value: '₹5L+', icon: <FiHeart /> },
    ],
    description: 'Spearheaded cultural initiatives, organized fundraising events with ₹5L+ donations, and managed a team serving 11,000+ students. Built a strong sense of community and cultural awareness.',
    gradient: 'from-orange-500/20 to-amber-500/20',
  },
];

export default function Leadership() {
  return (
    <section id="leadership" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-1/2 w-[400px] h-[400px] bg-primary-600/5 rounded-full blur-[150px]" />

      <div className="w-full max-w-[1600px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="tag mb-4">Leadership</span>
          <h2 className="section-title text-white mt-4">
            Beyond <span className="gradient-text">Code</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Building communities and driving impact beyond the keyboard
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {leadership.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="glass-card glass-card-hover rounded-2xl p-8 h-full relative overflow-hidden">
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden shrink-0">
                      <img src={item.iconImg} alt={item.organization} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">{item.title}</h3>
                      <p className="text-dark-400 text-sm">{item.organization}</p>
                    </div>
                  </div>

                  <p className="text-dark-300 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Stats */}
                  <div className="flex gap-4">
                    {item.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="flex-1 p-4 rounded-xl bg-white/[0.03] border border-white/[0.05] text-center"
                      >
                        <div className="flex items-center justify-center gap-1.5 text-primary-400 mb-1">
                          {stat.icon}
                          <span className="font-bold text-xl">{stat.value}</span>
                        </div>
                        <p className="text-dark-400 text-[10px] uppercase tracking-wider font-medium">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements section inline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <span className="tag mb-4">Recognition</span>
            <h2 className="section-title text-white mt-4 !text-3xl md:!text-4xl">
              Achievements & <span className="gradient-text">Awards</span>
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <div className="glass-card rounded-2xl p-8 relative overflow-hidden group glass-card-hover">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-amber-500/20 border border-yellow-500/20 flex items-center justify-center">
                    <span className="text-3xl">🏆</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-md bg-yellow-500/10 text-yellow-400 text-xs font-bold border border-yellow-500/20">
                      1st Place
                    </span>
                    <FiStar className="text-yellow-400" size={14} />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">IEEE Hackathon Winner</h3>
                  <p className="text-dark-300 text-sm leading-relaxed">
                    Won first place at the IEEE Hackathon for building an innovative AI-based
                    assistive solution. Recognized for technical excellence, real-world applicability,
                    and impactful problem-solving in the accessibility space.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
