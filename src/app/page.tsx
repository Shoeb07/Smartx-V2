'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import TrustedBy from '@/components/sections/TrustedBy'
import Services from '@/components/sections/Services'
import Work from '@/components/sections/Work'
import Industries from '@/components/sections/Industries'
import Process from '@/components/sections/Process'
import About from '@/components/sections/About'
import Testimonials from '@/components/sections/Testimonials'
import Insights from '@/components/sections/Insights'
import CTABanner from '@/components/sections/CTABanner'
import Contact from '@/components/sections/Contact'

// Dynamic imports — these need browser APIs (canvas, mousemove)
const CinematicLoader = dynamic(() => import('@/components/ui/CinematicLoader'), { ssr: false })
const CustomCursor = dynamic(() => import('@/components/ui/CustomCursor'), { ssr: false })
const ParticleCanvas = dynamic(() => import('@/components/ui/ParticleCanvas'), { ssr: false })

export default function HomePage() {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      {/* Cinematic preloader — exits with scale animation */}
      {!loaded && <CinematicLoader onComplete={() => setLoaded(true)} />}

      {/* Custom cursor (desktop only) */}
      <CustomCursor />

      {/* Particle mesh background — fixed, behind everything */}
      <ParticleCanvas />

      <Navbar />

      <main className={`transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <Hero />
        <TrustedBy />
        <Services />
        <Work />
        <Industries />
        <Process />
        <About />
        <Testimonials />
        <Insights />
        <CTABanner />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
