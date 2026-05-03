import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiSend,
  FiCheck,
  FiExternalLink,
  FiAlertCircle,
} from 'react-icons/fi'
import { portfolioData } from '../data/portfolioData'

interface FormState {
  name: string
  email: string
  message: string
}

const CONTACT_INFO = [
  {
    Icon: FiMail,
    label: 'Email',
    value: portfolioData.email,
    href: `mailto:${portfolioData.email}`,
  },
  {
    Icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/dhruvilshah92',
    href: portfolioData.social.linkedin,
  },
  {
    Icon: FiGithub,
    label: 'GitHub',
    value: 'github.com/Dhruvil135',
    href: portfolioData.social.github,
  },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 } as { opacity: number; y: number },
  viewport: { once: true } as { once: boolean },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as number[] },
})

const Contact = () => {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setError('')
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Validation
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill in all fields.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('Please enter a valid email address.')
      return
    }

    setLoading(true)
    setError('')

    try {
      // EmailJS Configuration - Read from environment variables
      const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      // Check if credentials are configured
      if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        // Fallback: simulate success for demo purposes
        console.warn('⚠️ EmailJS not configured. Please add your credentials in .env file')
        await new Promise(resolve => setTimeout(resolve, 1500))
        setSent(true)
        setForm({ name: '', email: '', message: '' })
        setLoading(false)
        return
      }

      // Send email via EmailJS
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_name: portfolioData.name,
        },
        PUBLIC_KEY
      )

      setSent(true)
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      console.error('EmailJS Error:', err)
      setError('Failed to send message. Please try again or email me directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* ── Section Header ── */}
        <motion.div {...fadeUp()} className="mb-16 text-center">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Contact</h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

          {/* ── Left: Info ── */}
          <motion.div {...fadeUp(0.1)}>
            <p className="text-gray-400 font-body text-[15px] leading-[1.8] mb-10">
              I'm open to internship opportunities, freelance projects, or just a chat
              about technology and development. Feel free to reach out — I'll get back
              to you as soon as possible!
            </p>

            <div className="space-y-3">
              {CONTACT_INFO.map(({ Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-xl border border-white/[0.07] bg-white/[0.025]
                             hover:border-accent/35 hover:-translate-y-0.5
                             hover:shadow-[0_4px_24px_rgba(201,168,76,0.09)]
                             transition-all duration-300"
                >
                  <div
                    className="w-10 h-10 rounded-lg bg-accent/[0.08] border border-accent/15
                               flex items-center justify-center text-accent flex-shrink-0
                               group-hover:bg-accent/[0.14] transition-colors duration-200"
                  >
                    <Icon size={17} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-600 text-[10px] font-body uppercase tracking-[0.18em] mb-0.5">
                      {label}
                    </p>
                    <p className="text-gray-200 text-sm font-body font-medium truncate group-hover:text-accent transition-colors duration-200">
                      {value}
                    </p>
                  </div>
                  <FiExternalLink
                    size={13}
                    className="text-gray-700 group-hover:text-accent transition-colors flex-shrink-0"
                  />
                </a>
              ))}
            </div>
          </motion.div>

          {/* ── Right: Form ── */}
          <motion.div {...fadeUp(0.2)}>
            {sent ? (
              /* Success State */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center gap-5 p-10 rounded-xl border border-accent/20 bg-accent/[0.04] text-center"
              >
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                  <FiCheck size={30} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-500 font-body text-sm leading-relaxed">
                    Thank you for reaching out,{' '}
                    <span className="text-accent">{form.name || 'friend'}</span>. I'll
                    reply as soon as possible!
                  </p>
                </div>
                <button
                  onClick={() => setSent(false)}
                  className="mt-2 text-accent text-sm font-body font-medium hover:underline underline-offset-4 transition-all"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              /* Form */
              <form onSubmit={handleSubmit} noValidate className="space-y-5">

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-500 text-[11px] font-body uppercase tracking-[0.18em] mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="input-field"
                    autoComplete="name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-500 text-[11px] font-body uppercase tracking-[0.18em] mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="input-field"
                    autoComplete="email"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-500 text-[11px] font-body uppercase tracking-[0.18em] mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="What would you like to discuss?"
                    className="input-field resize-none"
                  />
                </div>

                {/* Validation error */}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/20"
                  >
                    <FiAlertCircle size={16} className="text-red-400 flex-shrink-0" />
                    <p className="text-red-400 text-xs font-body">{error}</p>
                  </motion.div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg
                             bg-accent text-dark font-body font-semibold text-sm
                             hover:bg-accent/90 hover:shadow-[0_4px_24px_rgba(201,168,76,0.3)]
                             active:scale-[0.98] transition-all duration-200
                             disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:shadow-none"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-dark/30 border-t-dark rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <FiSend size={14} />
                      Send Message
                    </>
                  )}
                </button>

              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Contact