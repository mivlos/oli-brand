'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <div className="min-h-screen border border-ink/10 rounded-3xl m-4 mb-0 flex flex-col justify-between p-6 sm:p-10 lg:p-16 relative overflow-hidden bg-cream">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-[0.07] bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: 'url(/hero-bg.webp)' }}
      />
      {/* Top row */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl sm:text-3xl font-medium leading-tight">
            Oli<br />Mival
          </h1>
        </div>
        <div className="text-right">
          <p className="text-xl sm:text-2xl font-medium leading-tight">
            Product<br />Thinker
          </p>
        </div>
      </div>

      {/* Giant Letters */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0, 1] }}
        className="flex-1 flex items-center justify-center my-8 sm:my-12"
      >
        <h2 className="display-xl text-[clamp(5rem,20vw,18rem)] text-center tracking-tighter select-none">
          OLI
        </h2>
      </motion.div>

      {/* Subtitle */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0, 1] }}
        className="max-w-2xl"
      >
        <p className="text-lg sm:text-xl lg:text-2xl font-light leading-relaxed text-ink/70">
          I don&apos;t manage products. I think about them.<br className="hidden sm:block" />
          My agentic team handles the rest.
        </p>
      </motion.div>
    </div>
  )
}
