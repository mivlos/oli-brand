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

const stats = [
  { value: '22', label: 'Competitors monitored daily' },
  { value: '8', label: 'Web apps deployed in 7 days' },
  { value: '14,600+', label: 'Lines of code in one afternoon' },
  { value: '∞', label: 'New tools shipped every night' },
]

export default function Kit() {
  return (
    <div className="bg-amber text-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-cover bg-center pointer-events-none" style={{ backgroundImage: 'url(/kit-bg.webp)' }} />
      {/* Section Number */}
      <div className="px-6 sm:px-10 lg:px-16 pt-16 pb-8">
        <span className="display-xl text-[clamp(4rem,12vw,10rem)] opacity-15">04</span>
      </div>

      {/* Title */}
      <div className="px-6 sm:px-10 lg:px-16 pb-16">
        <FadeIn>
          <h2 className="display-xl text-[clamp(2.5rem,7vw,6rem)] mb-6">
            My AI<br />Partner
          </h2>
        </FadeIn>
      </div>

      {/* Kit Introduction */}
      <div className="px-6 sm:px-10 lg:px-16 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl">
          <FadeIn>
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-xl sm:text-2xl font-medium">
                Kit is an AI that runs 24/7 on a dedicated Mac mini. It acts as a force multiplier across strategic intelligence, rapid prototyping, and operational glue.
              </p>
              <p className="opacity-80">
                Named after KITT from Knight Rider — a genuine partner, not just a tool. Kit built most of the projects on this site, overnight, autonomously. It&apos;s the technical chief of staff that never sleeps.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="space-y-6 text-lg leading-relaxed opacity-80">
              <p>
                Kit monitors 22 competitors daily, generates strategic intelligence briefs, designs visual identities, builds full-stack web applications, and ships them to production — all while I sleep.
              </p>
              <p>
                This isn&apos;t science fiction. This is the agentic PDLC in practice. A single product leader, amplified by an AI partner, delivering the output of an entire team.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Stats */}
      <div className="border-t border-navy/20 px-6 sm:px-10 lg:px-16 py-16 sm:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {stats.map((stat, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="text-center">
                <div className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl font-bold mb-3">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base uppercase tracking-widest opacity-60">
                  {stat.label}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Quote */}
      <FadeIn>
        <div className="px-6 sm:px-10 lg:px-16 pb-16 sm:pb-24">
          <blockquote className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug max-w-4xl">
            &ldquo;The future of product leadership isn&apos;t managing bigger teams. It&apos;s thinking better — and letting your AI partner handle the rest.&rdquo;
          </blockquote>
        </div>
      </FadeIn>
    </div>
  )
}
