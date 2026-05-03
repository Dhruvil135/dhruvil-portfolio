import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'

// Skill metadata — emoji icon + level label
const SKILL_META: Record<string, { icon: string; level: string; color: string }> = {
  C: {
    icon: '🇨',
    level: 'Practiced',
    color: 'rgba(59,130,246,0.12)',
  },
  Java: {
    icon: '☕',
    level: 'Project Experience',
    color: 'rgba(234,88,12,0.12)',
  },
  'Java Swing': {
    icon: '🖥️',
    level: 'Project Experience',
    color: 'rgba(168,85,247,0.12)',
  },
  JDBC: {
    icon: '�',
    level: 'Working Knowledge',
    color: 'rgba(16,185,129,0.12)',
  },
  NetBeans: {
    icon: '🛠️',
    level: 'Familiar',
    color: 'rgba(245,158,11,0.12)',
  },
  Git: {
    icon: '🔧',
    level: 'Beginner',
    color: 'rgba(239,68,68,0.12)',
  },
  GitHub: {
    icon: '🐙',
    level: 'Beginner',
    color: 'rgba(107,114,128,0.12)',
  },
  MySQL: {
    icon: '🗄️',
    level: 'Beginner',
    color: 'rgba(59,130,246,0.12)',
  },
}

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.09,
    },
  },
}

const pill = {
  hidden: { opacity: 0, scale: 0.75, y: 16 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
}

const Skills = () => (
  <section id="skills" className="py-28 px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto">

      {/* ── Section Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="mb-16 text-center"
      >
        <span className="section-label">What I Work With</span>
        <h2 className="section-title">Skills</h2>
        <div className="section-divider" />
      </motion.div>

      {/* ── Pill Cloud ── */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-5"
      >
        {portfolioData.skills.map((skill) => {
          const meta = SKILL_META[skill] ?? { icon: '⚡', level: 'Learning', color: 'rgba(201,168,76,0.1)' }

          return (
            <motion.div
              key={skill}
              variants={pill}
              whileHover={{ scale: 1.07, y: -4 }}
              className="group relative flex flex-col items-center gap-2 px-8 py-5 rounded-2xl
                         border border-white/[0.08] bg-white/[0.03]
                         hover:border-accent/45 hover:shadow-[0_0_28px_rgba(201,168,76,0.14)]
                         transition-all duration-200 cursor-default select-none"
              style={{ '--skill-bg': meta.color } as React.CSSProperties}
            >
              {/* Coloured inner glow on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: meta.color }}
              />

              {/* Icon */}
              <span className="relative text-3xl" role="img" aria-label={skill}>
                {meta.icon}
              </span>

              {/* Skill name */}
              <span className="relative font-body font-semibold text-sm text-gray-200 group-hover:text-accent transition-colors duration-200">
                {skill}
              </span>

              {/* Level badge */}
              <span className="relative text-[10px] font-body text-gray-600 group-hover:text-accent/60 transition-colors uppercase tracking-widest">
                {meta.level}
              </span>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Decorative note */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-gray-700 text-xs font-body mt-12 tracking-wide"
      >
        Always learning · Always building
      </motion.p>

    </div>
  </section>
)

export default Skills