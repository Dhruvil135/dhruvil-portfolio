import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiHeart } from 'react-icons/fi'
import { portfolioData } from '../data/portfolioData'

const Footer = () => {
  const [pageViews, setPageViews] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch real page views from CountAPI
    // Replace 'dhruvil-portfolio' with your unique namespace
    const namespace = 'dhruvil-portfolio'
    const key = 'page-views'
    
    fetch(`https://api.countapi.xyz/hit/${namespace}/${key}`)
      .then((res) => res.json())
      .then((data) => {
        setPageViews(data.value)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Failed to fetch page views:', err)
        setPageViews(0)
        setLoading(false)
      })
  }, [])

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-3 text-center"
        >
          {/* Copyright */}
          <p className="text-gray-600 text-sm font-body">
            © {new Date().getFullYear()}{' '}
            <span className="text-accent font-medium">{portfolioData.name}</span>. All
            rights reserved.
          </p>

          {/* Made with love */}
          <p className="flex items-center gap-1.5 text-gray-700 text-xs font-body">
            Made with{' '}
            <FiHeart size={12} className="text-accent animate-pulse" /> using React,
            TypeScript & Tailwind CSS
          </p>

          {/* Page views counter */}
          <div className="mt-2 px-4 py-1.5 rounded-full bg-white/[0.02] border border-white/[0.05]">
            <p className="text-gray-700 text-[11px] font-body tracking-wide">
              {loading ? (
                <span className="text-gray-600">Loading views...</span>
              ) : (
                <>
                  <span className="text-accent font-medium">
                    {pageViews?.toLocaleString() || '0'}
                  </span>{' '}
                  page views
                </>
              )}
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
