import { motion } from 'framer-motion'
import { FiBriefcase, FiCalendar } from 'react-icons/fi'
import { portfolioData } from '../data/portfolioData'

const Experience = () => (
  <section id="experience" className="py-28 px-4 sm:px-6 lg:px-8 bg-[#070707]">
    <div className="max-w-4xl mx-auto">

      {/* ── Section Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="mb-16 text-center"
      >
        <span className="section-label">Work History</span>
        <h2 className="section-title">Experience</h2>
        <div className="section-divider" />
      </motion.div>

      {/* ── Timeline ── */}
      <div className="relative">

        {/* Vertical line */}
        <div
          className="absolute left-5 sm:left-7 top-3 bottom-3 w-px"
          style={{
            background:
              'linear-gradient(to bottom, rgba(201,168,76,0.5) 0%, rgba(201,168,76,0.15) 60%, transparent 100%)',
          }}
        />

        <div className="space-y-8">
          {portfolioData.experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="relative pl-14 sm:pl-20"
            >
              {/* Timeline dot */}
              <div
                className="absolute left-[14px] sm:left-[22px] top-5 w-5 h-5 rounded-full
                            bg-dark border-2 border-accent flex items-center justify-center
                            shadow-[0_0_12px_rgba(201,168,76,0.35)]"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              </div>

              {/* Card */}
              <div
                className="group p-6 rounded-xl border border-white/[0.07] bg-white/[0.02]
                           hover:border-accent/30 hover:-translate-y-1
                           hover:shadow-[0_8px_32px_rgba(201,168,76,0.09)]
                           transition-all duration-300"
              >
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2.5">
                    <FiBriefcase
                      size={15}
                      className="text-accent flex-shrink-0 mt-0.5"
                    />
                    <h3 className="font-heading text-[17px] font-bold text-white leading-snug">
                      {exp.title}
                    </h3>
                  </div>
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full
                               bg-accent/[0.08] border border-accent/20 text-accent
                               text-[11px] font-body font-medium whitespace-nowrap self-start sm:self-auto flex-shrink-0"
                  >
                    <FiCalendar size={11} />
                    {exp.period}
                  </span>
                </div>

                {/* Company */}
                <p className="text-accent/65 font-body text-sm font-medium mb-3">
                  {exp.company}
                </p>

                {/* Description */}
                <p className="text-gray-500 font-body text-sm leading-[1.75]">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  </section>
)

export default Experience