import { motion } from 'framer-motion'
import { Link as ScrollLink } from 'react-scroll'
import { SiGithub, SiLinkedin } from 'react-icons/si'
import { FiDownload, FiUser, FiArrowDown } from 'react-icons/fi'
import { portfolioData } from '../data/portfolioData'

const SOCIAL = [
  { Icon: SiGithub, href: portfolioData.social.github, label: 'GitHub' },
  { Icon: SiLinkedin, href: portfolioData.social.linkedin, label: 'LinkedIn' },
]

const STAT_CARDS = [
  { label: 'CGPA', value: portfolioData.stats.cgpa, suffix: '/10' },
  { label: 'Projects', value: portfolioData.stats.projects, suffix: '+' },
]

const Hero = () => {
  const [first, ...rest] = portfolioData.name.split(' ')
  const last = rest.join(' ')

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* ── Background Effects ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Radial glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% 45%, rgba(201,168,76,0.11) 0%, rgba(201,168,76,0.03) 45%, transparent 70%)',
          }}
        />
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(201,168,76,0.8) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        {/* Edge vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 100% 100% at 50% 50%, transparent 60%, rgba(10,10,10,0.9) 100%)',
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 flex flex-col items-center text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/[0.06] text-accent text-[11px] font-body font-medium tracking-[0.18em] uppercase"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse flex-shrink-0" />
          Available for Opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-bold leading-[1.05] tracking-tight mb-5"
        >
          <span className="text-white">{first} </span>
          <span
            className="text-accent"
            style={{ textShadow: '0 0 60px rgba(201,168,76,0.25)' }}
          >
            {last}
          </span>
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300 text-lg sm:text-xl md:text-2xl font-body font-light tracking-wide mb-4"
        >
          {portfolioData.title}
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-gray-600 text-sm sm:text-base max-w-lg font-body leading-relaxed mb-10"
        >
          {portfolioData.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-3 mb-10"
        >
          <a
            href={portfolioData.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            <FiDownload size={15} />
            Download Resume
          </a>
          <ScrollLink
            to="about"
            smooth={true}
            duration={600}
            offset={-64}
            className="btn-outline cursor-pointer"
          >
            <FiUser size={15} />
            My Profiles
          </ScrollLink>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center gap-3 mb-16"
        >
          {SOCIAL.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-lg border border-white/[0.09] bg-white/[0.04] flex items-center justify-center
                         text-gray-500 hover:text-accent hover:border-accent/40 hover:bg-accent/[0.07]
                         transition-all duration-200 hover:-translate-y-0.5"
            >
              <Icon size={17} />
            </a>
          ))}
        </motion.div>

        {/* Floating Stat Cards */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center gap-3"
        >
          {STAT_CARDS.map(({ label, value, suffix }) => (
            <div
              key={label}
              className="flex items-center gap-4 px-7 py-4 rounded-2xl border border-white/[0.07]
                         bg-white/[0.025] backdrop-blur-sm
                         hover:border-accent/30 hover:bg-accent/[0.04]
                         hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(201,168,76,0.1)]
                         transition-all duration-300"
            >
              <div>
                <p className="font-heading text-2xl font-bold text-accent leading-none">
                  {value}
                  <span className="text-base text-accent/50 ml-0.5">{suffix}</span>
                </p>
                <p className="text-gray-600 text-[10px] font-body uppercase tracking-[0.18em] mt-1.5">
                  {label}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FiArrowDown size={16} className="text-gray-700" />
        </motion.div>
        <div className="w-px h-10 bg-gradient-to-b from-accent/30 to-transparent" />
      </motion.div>
    </section>
  )
}

export default Hero