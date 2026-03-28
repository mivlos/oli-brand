'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const sections = [
  { num: '00', label: 'Oli Mival', href: '#home', color: 'bg-white' },
  { num: '01', label: 'About', href: '#about', color: 'bg-accent' },
  { num: '02', label: 'Approach', href: '#approach', color: 'bg-navy' },
  { num: '03', label: 'Work', href: '#work', color: 'bg-ink' },
  { num: '04', label: 'AI Partner', href: '#kit', color: 'bg-amber' },
  { num: '05', label: 'Contact', href: '#contact', color: 'bg-accent' },
]

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* Desktop Navigation - Fixed Left Sidebar */}
      <nav className="hidden lg:flex fixed left-0 top-0 h-screen w-[200px] flex-col gap-3 p-4 z-50 overflow-y-auto">
        {sections.map((s, i) => (
          <motion.a
            key={s.num}
            href={s.href}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5, ease: [0.25, 0.1, 0, 1] }}
            className={`${s.color} rounded-2xl p-4 flex flex-col justify-between min-h-[90px] transition-transform hover:scale-[1.03] active:scale-[0.98]`}
            style={{ color: s.num === '00' ? '#1A1A1A' : 'white' }}
          >
            <span className="text-xs opacity-70">{s.num}</span>
            <span className="text-sm font-medium mt-2">{s.label}</span>
          </motion.a>
        ))}
      </nav>

      {/* Mobile Navigation Toggle */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:hidden fixed top-4 left-4 z-[60] bg-ink text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
        aria-label="Toggle navigation"
      >
        <span className="text-lg">{mobileOpen ? '✕' : '☰'}</span>
      </button>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="lg:hidden fixed inset-0 z-50 bg-cream p-4 pt-20 flex flex-col gap-3 overflow-y-auto"
          >
            {sections.map((s) => (
              <a
                key={s.num}
                href={s.href}
                onClick={() => setMobileOpen(false)}
                className={`${s.color} rounded-2xl p-5 flex flex-col min-h-[80px] transition-transform active:scale-[0.98]`}
                style={{ color: s.num === '00' ? '#1A1A1A' : 'white' }}
              >
                <span className="text-xs opacity-70">{s.num}</span>
                <span className="text-lg font-medium mt-1">{s.label}</span>
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
