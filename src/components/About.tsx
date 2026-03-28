'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const manifesto = [
  'Product leadership needs to be a creative endeavor.',
  'Roadmaps and sprints are leading to the death of innovation.',
  'When everyone manages products the same way, thinking differently is the greatest opportunity.',
]

export default function About() {
  return (
    <div className="bg-accent text-white">
      {/* Section Number */}
      <div className="px-6 sm:px-10 lg:px-16 pt-16 pb-8">
        <span className="display-xl text-[clamp(4rem,12vw,10rem)] opacity-30">01</span>
      </div>

      {/* I Am Oli */}
      <div className="px-6 sm:px-10 lg:px-16 pb-16">
        <FadeIn>
          <h2 className="display-xl text-[clamp(2.5rem,7vw,6rem)] mb-12">
            I Am Oli
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="max-w-4xl space-y-6 text-lg sm:text-xl leading-relaxed opacity-90">
            <p>
              VP of Product Strategy, Innovation &amp; Experience at Picsart — the creative platform used by 150 million people every month. I hold a PhD in Human-Computer Interaction from Edinburgh Napier, and I&apos;ve spent nearly 30 years bridging AI with human behavior.
            </p>
            <p>
              Before Picsart, I led user research at Skyscanner, shaping the experience for millions of travellers. Today, I orchestrate human creativity and AI execution to deliver product value at unprecedented pace.
            </p>
          </div>
        </FadeIn>
      </div>

      {/* Manifesto Statements */}
      <div className="border-t border-white/20">
        {manifesto.map((statement, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="border-b border-white/20 px-6 sm:px-10 lg:px-16 py-12 sm:py-16 relative">
              <span className="manifesto-num text-white">{String(i + 1).padStart(2, '0')}</span>
              <p className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight max-w-5xl relative z-10">
                &ldquo;{statement}&rdquo;
              </p>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Mission */}
      <div className="px-6 sm:px-10 lg:px-16 py-16 sm:py-24 grid grid-cols-1 md:grid-cols-2 gap-12">
        <FadeIn>
          <div>
            <span className="text-sm uppercase tracking-widest opacity-60 mb-4 block">01 Challenge</span>
            <p className="text-xl sm:text-2xl lg:text-3xl font-medium leading-snug">
              Help product organisations escape the culture of conformity.
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div>
            <span className="text-sm uppercase tracking-widest opacity-60 mb-4 block">02 Goal</span>
            <p className="text-xl sm:text-2xl lg:text-3xl font-medium leading-snug">
              Orchestrate human creativity and AI execution to deliver value at unprecedented pace.
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
