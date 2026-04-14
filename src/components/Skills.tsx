import { motion } from 'framer-motion';
import {
  SiPython, SiCplusplus, SiJavascript, SiTypescript, SiReact, SiFlask,
  SiNodedotjs, SiTensorflow, SiOpencv, SiMongodb, SiMysql, SiGit,
  SiPandas, SiNumpy, SiExpress, SiDocker, SiPostman, SiScikitlearn,
  SiFastapi, SiStreamlit, SiJupyter, SiGooglecloud,
} from 'react-icons/si';
import { TbBrandAzure, TbApi, TbBrain, TbRobot } from 'react-icons/tb';
import { FiDatabase } from 'react-icons/fi';

interface SkillItem {
  name: string;
  icon: React.ReactNode;
  color: string;
}

interface SkillCategory {
  title: string;
  icon: string;
  skills: SkillItem[];
}

const categories: SkillCategory[] = [
  {
    title: 'Languages',
    icon: '⌨️',
    skills: [
      { name: 'Python', icon: <SiPython />, color: '#3776AB' },
      { name: 'C/C++', icon: <SiCplusplus />, color: '#00599C' },
      { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
      { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
      { name: 'SQL', icon: <FiDatabase />, color: '#336791' },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    icon: '🏗️',
    skills: [
      { name: 'React.js', icon: <SiReact />, color: '#61DAFB' },
      { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933' },
      { name: 'Express.js', icon: <SiExpress />, color: '#FFFFFF' },
      { name: 'Flask', icon: <SiFlask />, color: '#FFFFFF' },
      { name: 'FastAPI', icon: <SiFastapi />, color: '#009688' },
      { name: 'LangChain', icon: <TbBrain />, color: '#1C3C3C' },
      { name: 'LangFlow', icon: <TbRobot />, color: '#FF6F00' },
      { name: 'Streamlit', icon: <SiStreamlit />, color: '#FF4B4B' },
    ],
  },
  {
    title: 'AI / ML / DL',
    icon: '🧠',
    skills: [
      { name: 'TensorFlow', icon: <SiTensorflow />, color: '#FF6F00' },
      { name: 'scikit-learn', icon: <SiScikitlearn />, color: '#F7931E' },
      { name: 'OpenCV', icon: <SiOpencv />, color: '#5C3EE8' },
      { name: 'NLP', icon: <TbBrain />, color: '#10B981' },
      { name: 'Pandas', icon: <SiPandas />, color: '#150458' },
      { name: 'NumPy', icon: <SiNumpy />, color: '#013243' },
    ],
  },
  {
    title: 'Cloud & Databases',
    icon: '☁️',
    skills: [
      { name: 'Azure', icon: <TbBrandAzure />, color: '#0078D4' },
      { name: 'Google Cloud', icon: <SiGooglecloud />, color: '#4285F4' },
      { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
      { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
    ],
  },
  {
    title: 'Developer Tools',
    icon: '🔧',
    skills: [
      { name: 'Git', icon: <SiGit />, color: '#F05032' },
      { name: 'Docker', icon: <SiDocker />, color: '#2496ED' },
      { name: 'REST APIs', icon: <TbApi />, color: '#3B82F6' },
      { name: 'Postman', icon: <SiPostman />, color: '#FF6C37' },
      { name: 'Jupyter', icon: <SiJupyter />, color: '#F37626' },
    ],
  },
];

// Flat list for the marquee
const allSkills = categories.flatMap((c) => c.skills);
const marqueeRow1 = allSkills.slice(0, Math.ceil(allSkills.length / 2));
const marqueeRow2 = allSkills.slice(Math.ceil(allSkills.length / 2));

function SkillPill({ skill }: { skill: SkillItem }) {
  return (
    <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.06] transition-all duration-300 group cursor-default flex-shrink-0">
      <span
        className="text-base transition-colors duration-300"
        style={{ color: skill.color }}
      >
        {skill.icon}
      </span>
      <span className="text-dark-300 text-sm font-medium group-hover:text-white transition-colors whitespace-nowrap">
        {skill.name}
      </span>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary-600/5 rounded-full blur-[150px]" />

      <div className="w-full max-w-[1600px] mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="tag mb-4">Technical Skills</span>
          <h2 className="section-title text-white mt-4">
            My Tech <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Technologies I use to build intelligent, scalable systems
          </p>
        </motion.div>

        {/* Scrolling marquee */}
        <div className="mb-16 space-y-4 overflow-hidden">
          <div className="marquee-container">
            <div className="marquee-track animate-marquee">
              {[...marqueeRow1, ...marqueeRow1].map((skill, i) => (
                <SkillPill key={`r1-${i}`} skill={skill} />
              ))}
            </div>
          </div>
          <div className="marquee-container">
            <div className="marquee-track animate-marquee-reverse">
              {[...marqueeRow2, ...marqueeRow2].map((skill, i) => (
                <SkillPill key={`r2-${i}`} skill={skill} />
              ))}
            </div>
          </div>
        </div>

        {/* Categorized breakdown */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, catIndex) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: catIndex * 0.08 }}
              className="glass-card glass-card-hover rounded-2xl p-6 group"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xl">{cat.icon}</span>
                <h3 className="text-white font-semibold text-sm uppercase tracking-wider">{cat.title}</h3>
                <div className="flex-1 h-px bg-white/5" />
                <span className="text-dark-500 text-xs">{cat.skills.length}</span>
              </div>

              {/* Skills list */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.06] hover:border-white/[0.1] transition-all duration-300 group/skill cursor-default"
                  >
                    <span
                      className="text-sm transition-all duration-300 group-hover/skill:scale-110"
                      style={{ color: skill.color }}
                    >
                      {skill.icon}
                    </span>
                    <span className="text-dark-300 text-xs font-medium group-hover/skill:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Total skills count */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-10"
        >
          <p className="text-dark-500 text-sm">
            <span className="text-primary-400 font-semibold">{allSkills.length}+</span> technologies & tools in my toolkit
          </p>
        </motion.div>
      </div>
    </section>
  );
}
