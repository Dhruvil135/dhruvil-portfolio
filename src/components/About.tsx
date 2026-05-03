import { motion } from 'framer-motion'
import { SiGithub, SiLinkedin } from 'react-icons/si'
import { FiExternalLink } from 'react-icons/fi'
import { portfolioData } from '../data/portfolioData'
import type { IconType } from 'react-icons'

// Map profile label → React Icon component
const PROFILE_ICONS: Record<string, IconType> = {
  GitHub: SiGithub,
  LinkedIn: SiLinkedin,
}

const STAT_ITEMS = [
  { label: 'CGPA', value: portfolioData.stats.cgpa },
  { label: 'Internships', value: String(portfolioData.stats.internships) },
  { label: 'Projects', value: String(portfolioData.stats.projects) },
  { label: 'Skills', value: String(portfolioData.stats.skills) },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 } as { opacity: number; y: number },
  viewport: { once: true } as { once: boolean },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as number[] },
})

const About = () => (
  <section id="about" className="py-28 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">

      {/* ── Section Header ── */}
      <motion.div {...fadeUp()} className="mb-16 text-center">
        <span className="section-label">Get to know me</span>
        <h2 className="section-title">About Me</h2>
        <div className="section-divider" />
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

        {/* ── Left: Bio + Stats ── */}
        <motion.div {...fadeUp(0.1)}>
          {/* Profile Photo */}
          {portfolioData.photoUrl && (
            <div className="mb-8 flex justify-center lg:justify-start">
              <div className="relative w-40 h-40 rounded-2xl overflow-hidden border-2 border-accent/30 shadow-[0_8px_32px_rgba(201,168,76,0.15)]">
                <img
                  src={portfolioData.photoUrl}
                  alt={portfolioData.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
              </div>
            </div>
          )}

          {/* Institution badge */}
          <div className="mb-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-accent/[0.07] border border-accent/20">
            <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
            <span className="text-accent text-xs font-body font-medium">{portfolioData.institution}</span>
          </div>

          {/* Bio paragraphs */}
          <div className="space-y-4 mb-10">
            {portfolioData.bio.map((para, i) => (
              <p key={i} className="text-gray-400 font-body text-[15px] leading-[1.8]">
                {para}
              </p>
            ))}
          </div>

          {/* 2×2 Stats Grid */}
          <div className="grid grid-cols-2 gap-3">
            {STAT_ITEMS.map(({ label, value }) => (
              <motion.div
                key={label}
                whileHover={{ y: -3, borderColor: 'rgba(201,168,76,0.35)' }}
                className="p-5 rounded-xl border border-white/[0.07] bg-white/[0.025] transition-all duration-300
                           hover:shadow-[0_4px_24px_rgba(201,168,76,0.09)]"
              >
                <p className="font-heading text-3xl font-bold text-accent leading-none mb-1.5">
                  {value}
                </p>
                <p className="text-gray-600 text-[10px] font-body uppercase tracking-[0.18em]">
                  {label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Right: Profile Cards ── */}
        <motion.div {...fadeUp(0.2)} className="flex flex-col gap-4">
          <p className="text-gray-600 text-[11px] font-body uppercase tracking-[0.18em] mb-2">
            My Profiles
          </p>

          {portfolioData.profiles.map(({ label, username, description, href }) => {
            const Icon = PROFILE_ICONS[label] ?? FiExternalLink
            return (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-start gap-4 p-5 rounded-xl border border-white/[0.07] bg-white/[0.025]
                           hover:border-accent/40 hover:-translate-y-1
                           hover:shadow-[0_8px_32px_rgba(201,168,76,0.1)]
                           transition-all duration-300"
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-accent flex-shrink-0
                              bg-accent/[0.08] border border-accent/15
                              group-hover:bg-accent/[0.14] transition-colors duration-200"
                >
                  <Icon size={22} />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-0.5">
                    <p className="font-body font-semibold text-white text-sm">{label}</p>
                    <FiExternalLink
                      size={13}
                      className="text-gray-700 group-hover:text-accent flex-shrink-0 transition-colors duration-200"
                    />
                  </div>
                  <p className="text-accent/70 text-xs font-body mb-2">{username}</p>
                  <p className="text-gray-500 text-xs font-body leading-relaxed">{description}</p>
                </div>
              </a>
            )
          })}

          {/* Decorative quote */}
          <div className="mt-4 p-5 rounded-xl border border-white/[0.05] bg-accent/[0.03]">
            <p className="text-gray-600 font-heading italic text-sm leading-relaxed">
              "The best way to predict the future is to invent it."
            </p>
            <p className="text-gray-700 text-xs font-body mt-2">— Alan Kay</p>
          </div>
        </motion.div>

      </div>
    </div>
  </section>
)

export default About