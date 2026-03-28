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

const phases = [
  { name: 'Discovery', speed: 'hours, not weeks', desc: 'AI agents scan 22 competitors daily, synthesizing market intelligence that would take a team of analysts weeks to compile.' },
  { name: 'Definition', speed: 'decisions, not documents', desc: 'AI-powered feature prioritisation across five strategic dimensions. No 40-page PRDs — just clear, data-backed decisions.' },
  { name: 'Design', speed: 'explorations, not iterations', desc: 'A Design Council of AI agents generates 20+ visual directions overnight. By morning, the best ideas are ready for human judgment.' },
  { name: 'Development', speed: 'streams, not sprints', desc: 'Claude Code builds from natural language specifications. 14,600 lines in an afternoon. Continuous development, not two-week cycles.' },
  { name: 'Delivery', speed: 'continuous, not quarterly', desc: 'The Creative Agent Council ships every night. New tools, updated analyses, fresh prototypes — all deployed autonomously.' },
]

const principles = [
  { name: 'Think, Don\'t Manage', desc: 'Strategic judgment is the scarce resource. Everything else can be automated.' },
  { name: 'Demos Not Memos', desc: 'Ship working prototypes, not PowerPoints. Show, don\'t tell.' },
  { name: 'Amplify, Don\'t Replace', desc: 'AI makes humans more effective, not obsolete. The human stays in the loop.' },
  { name: 'Compound Daily', desc: 'Every night the system learns and builds. Progress compounds while you sleep.' },
]

const capabilities = [
  { category: 'Strategy', items: ['Competitive Intelligence', 'Market Analysis', 'Feature Prioritisation', 'Audience Insights'] },
  { category: 'Design', items: ['Vibe Design', 'Rapid Prototyping', 'Visual Identity', 'UI Generation'] },
  { category: 'Technology', items: ['Agentic Workflows', 'Claude Code', 'Full-Stack Deployment', 'API Integration'] },
  { category: 'Intelligence', items: ['Daily CI Scans', 'Weekly Strategy Briefs', 'Ad Intelligence', 'Research Synthesis'] },
]

export default function Approach() {
  return (
    <div className="bg-navy text-white">
      {/* Section Number */}
      <div className="px-6 sm:px-10 lg:px-16 pt-16 pb-8">
        <span className="display-xl text-[clamp(4rem,12vw,10rem)] opacity-20">02</span>
      </div>

      {/* Title */}
      <div className="px-6 sm:px-10 lg:px-16 pb-16">
        <FadeIn>
          <h2 className="display-xl text-[clamp(2.5rem,7vw,6rem)] mb-6">
            The Agentic<br />PDLC
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-xl sm:text-2xl font-light opacity-70 max-w-3xl">
            A reimagined product development lifecycle where AI agents handle execution and humans focus on what matters: thinking.
          </p>
        </FadeIn>
      </div>

      {/* Phases */}
      <div className="border-t border-white/10">
        {phases.map((phase, i) => (
          <FadeIn key={i} delay={i * 0.05}>
            <div className="border-b border-white/10 px-6 sm:px-10 lg:px-16 py-10 sm:py-14 grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-4">
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl lg:text-4xl font-bold">{phase.name}</h3>
                <span className="text-accent text-sm uppercase tracking-widest mt-2 block">{phase.speed}</span>
              </div>
              <div className="lg:col-span-8">
                <p className="text-lg sm:text-xl opacity-80 leading-relaxed">{phase.desc}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Principles */}
      <div className="px-6 sm:px-10 lg:px-16 py-16 sm:py-24">
        <FadeIn>
          <h3 className="text-sm uppercase tracking-widest opacity-50 mb-12">Principles</h3>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
          {principles.map((p, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="border-l-2 border-accent pl-6">
                <h4 className="font-[family-name:var(--font-playfair)] text-xl sm:text-2xl font-bold mb-3">{p.name}</h4>
                <p className="opacity-70 text-lg">{p.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Capabilities Grid */}
      <div className="px-6 sm:px-10 lg:px-16 pb-16 sm:pb-24">
        <FadeIn>
          <h3 className="text-sm uppercase tracking-widest opacity-50 mb-12">Capabilities</h3>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((cap, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div>
                <h4 className="text-accent font-bold text-lg uppercase tracking-wide mb-4">{cap.category}</h4>
                <ul className="space-y-2">
                  {cap.items.map((item, j) => (
                    <li key={j} className="opacity-70 text-base">{item}</li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  )
}
