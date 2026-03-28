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

const projects = [
  {
    name: 'Creative Agency',
    category: 'AI Design',
    tagline: 'AI Design Council that turns creative goals into strategic visual explorations',
    url: 'https://creative-agency-psi-ashy.vercel.app',
    description: 'A multi-agent design system where AI models collaborate as a creative council — art director, strategist, and designer working in concert. Upload a brief, and the council produces dozens of strategic visual directions overnight. Built to prove that AI can be a genuine creative partner, not just a production tool. Shipped in a single evening.',
    quote: 'What used to take a design team a week now happens while I sleep.',
  },
  {
    name: 'Ad Intelligence Arena',
    category: 'Competitive Intelligence',
    tagline: '4-model comparison tool with automated binary evaluation',
    url: 'https://ad-intel-arena.vercel.app',
    description: 'Pits four AI models against each other to analyse competitor advertising — messaging, visual strategy, audience targeting, effectiveness. Automated binary evaluation determines which model gives the sharpest insights. Built to replace manual ad review processes that burned analyst hours. From concept to deployment: one afternoon.',
    quote: 'Four AI analysts working simultaneously, delivering what used to take days.',
  },
  {
    name: 'VibePad',
    category: 'Design Tool',
    tagline: 'AI-powered UI design tool built as a Picsart mini-app',
    url: 'https://vibepad-five.vercel.app',
    description: 'A rapid UI prototyping tool that turns natural language into functional interfaces — Picsart\'s answer to Google Stitch. 14,600+ lines of code written in a single afternoon by Kit. Demonstrates the speed of the agentic PDLC: from concept to working mini-app in hours, not months. The embodiment of Vibe Design methodology.',
    quote: '14,600 lines of code in one afternoon. That\'s the agentic PDLC in action.',
  },
  {
    name: 'Vibe Design Manifesto',
    category: 'Methodology',
    tagline: 'Staking the claim for emotion-first creative methodology',
    url: 'https://vibe-design-build.vercel.app',
    description: 'An interactive editorial manifesto that articulates Vibe Design — the methodology of emotion-first, AI-augmented creative work. Created to establish Oli\'s intellectual ownership of the concept before Google\'s Stitch AI adopted similar language. Part thought piece, part strategic positioning, part beautiful web experience.',
    quote: 'Design should start with how you want people to feel, not what you want them to click.',
  },
  {
    name: 'GTM Growth Machine',
    category: 'Product Strategy',
    tagline: 'AI-powered feature prioritisation across 5 strategic dimensions',
    url: 'https://gtm-growth-machine.vercel.app',
    description: 'Transforms Picsart\'s approach to go-to-market strategy by scoring features across five dimensions: market impact, user value, competitive advantage, technical feasibility, and strategic alignment. Replaced spreadsheet-based prioritisation with an intelligent system that compounds learning over time.',
    quote: 'From feature factory to growth machine — one decision framework at a time.',
  },
  {
    name: 'Sci-Fi Interfaces',
    category: 'Editorial',
    tagline: 'Editorial mapping Hollywood FUI design to Picsart\'s product vision',
    url: 'https://scifi-interfaces.vercel.app',
    description: 'A visual essay connecting 30 years of science fiction interface design — from Minority Report to Her — to Picsart\'s product roadmap. Vibeboard mirrors the Matrix Construct. Aura channels Samantha. Vibe Design echoes Stelline\'s memory lab. Strategy disguised as culture, connecting Hollywood\'s imagination to real product decisions.',
    quote: 'The best product visions were already imagined on screen. We\'re just building them.',
  },
  {
    name: 'Kit Visual Identity',
    category: 'AI Identity',
    tagline: 'An AI exploring what it looks like — 10 directions, 50 images',
    url: 'https://kit-identity-portfolio.vercel.app',
    description: 'What happens when an AI is asked to design its own visual identity? Kit explored 10 conceptual directions and generated 50 images to discover its visual language — the lighthouse, the scanner arc, warm amber on deep navy. A meta-project: an AI designing an AI\'s brand. Built overnight, naturally.',
    quote: 'I asked my AI partner to figure out what it looks like. It chose a lighthouse.',
  },
  {
    name: 'Recraft V4 Demo',
    category: 'Partnership',
    tagline: 'Picsart × Recraft partnership showcase',
    url: 'https://recraft-demo.vercel.app',
    description: 'A polished showcase for Picsart\'s partnership with Recraft, demonstrating V4 model capabilities in context. Built to give stakeholders and partners a tangible, interactive way to experience the integration — more compelling than any slide deck. Concept to live URL: under two hours.',
    quote: 'A partnership demo that actually demonstrates. Novel concept.',
  },
]

export default function Work() {
  return (
    <div className="bg-ink text-white">
      {/* Section Number */}
      <div className="px-6 sm:px-10 lg:px-16 pt-16 pb-8">
        <span className="display-xl text-[clamp(4rem,12vw,10rem)] opacity-10">03</span>
      </div>

      {/* Title */}
      <div className="px-6 sm:px-10 lg:px-16 pb-12">
        <FadeIn>
          <h2 className="display-xl text-[clamp(2.5rem,7vw,6rem)] mb-6">
            Work
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-xl sm:text-2xl font-light opacity-60 max-w-3xl">
            Eight projects. Seven days. Every one built by the agentic PDLC — most of them overnight.
          </p>
        </FadeIn>
      </div>

      {/* Horizontal Scroll Projects */}
      <div className="overflow-x-auto hide-scrollbar pb-8">
        <div className="flex gap-6 px-6 sm:px-10 lg:px-16" style={{ width: 'max-content' }}>
          {projects.map((project, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-[340px] sm:w-[420px] bg-white/5 rounded-2xl p-8 hover:bg-white/10 group flex-shrink-0 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-white/5"
              >
                <span className="text-accent text-xs uppercase tracking-widest">{project.category}</span>
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold mt-3 mb-4 group-hover:text-accent transition-colors">
                  {project.name}
                </h3>
                <p className="text-base opacity-60 mb-6">{project.tagline}</p>
                <span className="text-accent text-sm font-medium group-hover:underline">View Project →</span>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Detailed Case Studies */}
      <div className="border-t border-white/10 mt-8">
        {projects.map((project, i) => (
          <FadeIn key={i}>
            <div className="border-b border-white/10 px-6 sm:px-10 lg:px-16 py-12 sm:py-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-4">
                  <span className="text-accent text-xs uppercase tracking-widest">{project.category}</span>
                  <h3 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold mt-2 mb-3">
                    {project.name}
                  </h3>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent text-sm font-medium hover:underline inline-block mt-2"
                  >
                    Visit Live Project →
                  </a>
                </div>
                <div className="lg:col-span-8">
                  <p className="text-lg opacity-80 leading-relaxed mb-6">{project.description}</p>
                  <blockquote className="border-l-2 border-accent pl-6 italic text-lg opacity-60">
                    &ldquo;{project.quote}&rdquo;
                  </blockquote>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  )
}
