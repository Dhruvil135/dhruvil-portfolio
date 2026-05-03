import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi'
import { portfolioData } from '../data/portfolioData'

const Projects = () => {
  const [active, setActive] = useState('All')

  const filtered =
    active === 'All'
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category === active)

  return (
    <section id="projects" className="py-28 px-4 sm:px-6 lg:px-8 bg-[#070707]">
      <div className="max-w-7xl mx-auto">

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 text-center"
        >
          <span className="section-label">What I've Built</span>
          <h2 className="section-title">Projects</h2>
          <div className="section-divider" />
        </motion.div>

        {/* ── Filter Buttons ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {portfolioData.projectFilters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-[13px] font-body font-medium transition-all duration-200 ${
                active === f
                  ? 'bg-accent text-dark shadow-[0_2px_16px_rgba(201,168,76,0.3)]'
                  : 'border border-white/[0.09] text-gray-500 hover:border-accent/30 hover:text-accent bg-white/[0.02]'
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* ── Cards Grid ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.article
                key={project.name}
                layout
                initial={{ opacity: 0, y: 36, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="group relative flex flex-col p-6 rounded-xl border border-white/[0.07] bg-white/[0.02]
                           hover:border-accent/40 hover:-translate-y-1.5
                           hover:shadow-[0_12px_40px_rgba(201,168,76,0.1)]
                           transition-all duration-300"
              >
                {/* Subtle top border glow on hover */}
                <div
                  className="absolute inset-x-0 top-0 h-px rounded-t-xl
                              bg-gradient-to-r from-transparent via-accent/0 to-transparent
                              group-hover:via-accent/40 transition-all duration-500"
                />

                {/* Card Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/[0.09] border border-accent/15 flex items-center justify-center text-accent">
                    <FiCode size={18} />
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.name} source code`}
                      className="text-gray-600 hover:text-accent transition-colors duration-150 p-1"
                    >
                      <FiGithub size={17} />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.name} live demo`}
                        className="text-gray-600 hover:text-accent transition-colors duration-150 p-1"
                      >
                        <FiExternalLink size={17} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Name */}
                <h3 className="font-heading text-[17px] font-bold text-white mb-2 group-hover:text-accent transition-colors duration-200">
                  {project.name}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-[13px] font-body leading-[1.75] flex-1 mb-5">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-accent/[0.08] border border-accent/15 text-accent text-[11px] font-body font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2.5 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg
                               border border-white/[0.09] text-gray-400 text-[12px] font-body font-medium
                               hover:border-accent/35 hover:text-accent
                               transition-all duration-200"
                  >
                    <FiGithub size={13} />
                    Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg
                                 bg-accent/[0.08] border border-accent/20 text-accent text-[12px] font-body font-medium
                                 hover:bg-accent/[0.16]
                                 transition-all duration-200"
                    >
                      <FiExternalLink size={13} />
                      Demo
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 text-gray-700 font-body text-sm"
          >
            No projects in this category yet — check back soon!
          </motion.div>
        )}

      </div>
    </section>
  )
}

export default Projects