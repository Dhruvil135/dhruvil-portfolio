import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import { portfolioData } from '../data/portfolioData'

const NAV_LINKS = [
  { label: 'Home', to: 'home' },
  { label: 'About', to: 'about' },
  { label: 'Experience', to: 'experience' },
  { label: 'Skills', to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'Contact', to: 'contact' },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/[0.05] shadow-[0_1px_0_rgba(201,168,76,0.06)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* ── Logo ── */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <div className="w-9 h-9 bg-accent flex items-center justify-center rounded font-heading font-bold text-dark text-sm tracking-wider select-none">
            {portfolioData.initials}
          </div>
          <span className="font-heading font-semibold text-white text-[15px] hidden sm:block tracking-wide">
            {portfolioData.name}
          </span>
        </motion.div>

        {/* ── Desktop Nav ── */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link, i) => (
            <motion.div
              key={link.to}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 + 0.25 }}
            >
              <Link
                to={link.to}
                spy={true}
                smooth={true}
                duration={600}
                offset={-64}
                activeClass="!text-accent after:scale-x-100"
                className="relative text-gray-500 hover:text-gray-200 text-[13px] font-body font-medium cursor-pointer
                           transition-colors duration-200 pb-0.5
                           after:absolute after:bottom-0 after:left-0 after:h-px after:w-full
                           after:bg-accent after:scale-x-0 after:origin-left after:transition-transform after:duration-200"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* ── Mobile Toggle ── */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="md:hidden text-gray-400 hover:text-accent transition-colors p-1"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle mobile menu"
        >
          {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </motion.button>
      </div>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            key="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-[#0c0c0c] border-t border-white/[0.05]"
          >
            <div className="flex flex-col gap-1 px-4 py-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  duration={600}
                  offset={-64}
                  activeClass="!text-accent !bg-accent/[0.06]"
                  className="text-gray-500 hover:text-white hover:bg-white/[0.04] px-3 py-2.5 rounded-lg text-sm font-body cursor-pointer transition-all duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar