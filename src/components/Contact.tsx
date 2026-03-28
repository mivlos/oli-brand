'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0, 1] }} className={className}>
      {children}
    </motion.div>
  )
}

export default function Contact() {
  return (
    <div className="bg-accent text-white min-h-screen flex flex-col justify-between">
      {/* Section Number */}
      <div className="px-6 sm:px-10 lg:px-16 pt-16 pb-8">
        <span className="display-xl text-[clamp(4rem,12vw,10rem)] opacity-20">05</span>
      </div>

      {/* Main Content */}
      <div className="px-6 sm:px-10 lg:px-16 flex-1 flex flex-col justify-center pb-16">
        <FadeIn>
          <h2 className="display-xl text-[clamp(2.5rem,8vw,7rem)] mb-12 leading-[0.9]">
            Let&apos;s Talk<br />Product<br />Thinking
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="space-y-6 max-w-xl">
            <a
              href="mailto:oli.mival@picsart.com"
              className="block text-xl sm:text-2xl hover:opacity-70 transition-opacity underline underline-offset-4"
            >
              oli.mival@picsart.com
            </a>
            <a
              href="https://www.linkedin.com/in/olimival/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-xl sm:text-2xl hover:opacity-70 transition-opacity underline underline-offset-4"
            >
              LinkedIn
            </a>
            <p className="text-lg opacity-70 pt-4">
              Edinburgh, Scotland
            </p>
          </div>
        </FadeIn>
      </div>

      {/* Footer */}
      <div className="border-t border-white/20 px-6 sm:px-10 lg:px-16 py-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <p className="text-sm opacity-60">
          © {new Date().getFullYear()} Oli Mival
        </p>
        <p className="text-sm opacity-60">
          Built by Kit — overnight, naturally.
        </p>
      </div>
    </div>
  )
}
