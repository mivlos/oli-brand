'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import SectionBar from '@/components/SectionBar'
import About from '@/components/About'
import Approach from '@/components/Approach'
import Work from '@/components/Work'
import Kit from '@/components/Kit'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      
      <div className="lg:ml-[200px]">
        <section id="home">
          <Hero />
        </section>

        <SectionBar label="About" section="01" total="06" />
        
        <section id="about">
          <About />
        </section>

        <SectionBar label="Approach" section="02" total="06" />
        
        <section id="approach">
          <Approach />
        </section>

        <SectionBar label="Work" section="03" total="06" />
        
        <section id="work">
          <Work />
        </section>

        <SectionBar label="AI Partner" section="04" total="06" />
        
        <section id="kit">
          <Kit />
        </section>

        <SectionBar label="Contact" section="05" total="06" />
        
        <section id="contact">
          <Contact />
        </section>
      </div>
    </main>
  )
}
