'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Play } from 'lucide-react'
import { useMagneticButton } from '@/lib/useMagneticButton'

const stats = [
  { value: 5, suffix: '+', label: 'Projects Delivered' },
  { value: 100, suffix: '%', label: 'Client Satisfaction' },
  { value: 2, suffix: '+', label: 'Years Building' },
  { value: 3, suffix: '+', label: 'Happy Clients' },
]

const techStack = [
  'React','Next.js','Node.js','Python','AWS','Flutter',
  'TypeScript','PostgreSQL','Docker','Figma','React Native','GraphQL','Tailwind','Firebase',
]

function WordReveal({ text, delay = 0, gradient = false }: {
  text: string; delay?: number; gradient?: boolean
}) {
  return (
    <>
      {text.split(' ').map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.22em]">
          <motion.span
            className={`inline-block ${gradient ? 'text-gradient-accent' : ''}`}
            initial={{ y: '110%', rotate: 2, opacity: 0 }}
            animate={{ y: 0, rotate: 0, opacity: 1 }}
            transition={{ delay: delay + i * 0.1, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </>
  )
}

function Counter({ value, suffix, delay }: { value: number; suffix: string; delay: number }) {
  const [count, setCount] = useState(0)
  const started = useRef(false)
  useEffect(() => {
    if (started.current) return
    const timer = setTimeout(() => {
      started.current = true
      const dur = 1600, start = performance.now()
      const tick = (now: number) => {
        const t = Math.min((now - start) / dur, 1)
        setCount(Math.round(value * (1 - Math.pow(1 - t, 4))))
        if (t < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }, delay)
    return () => clearTimeout(timer)
  }, [value, delay])
  return <span className="font-syne font-bold text-[40px] leading-none tabular-nums">{count}{suffix}</span>
}

export default function Hero() {
  const btn1 = useMagneticButton(0.3)
  const btn2 = useMagneticButton(0.3)
  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-28 pb-20">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#6c63ff]/25 bg-[#6c63ff]/10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#00e5b0] animate-pulse" />
          <span className="text-[11px] text-[#a89eff] tracking-[0.07em] uppercase">Digital Innovation Agency · Hyderabad, India</span>
        </motion.div>

        {/* Headline */}
        <h1 className="font-syne font-bold text-[clamp(48px,7.5vw,100px)] leading-[1.01] tracking-[-0.03em] mb-7 max-w-5xl">
          <div className="block"><WordReveal text="We Build" delay={0.18} /></div>
          <div className="block"><WordReveal text="Digital Products" delay={0.30} gradient /></div>
          <div className="block"><WordReveal text="That Drive" delay={0.46} /></div>
          <div className="block"><WordReveal text="Growth." delay={0.58} /></div>
        </h1>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-white/50 text-[17px] max-w-[480px] mb-11 leading-[1.75]"
        >
          From concept to launch and beyond — we design, engineer, and scale world-class web apps, mobile apps, and digital experiences for ambitious businesses.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.7 }}
          className="flex flex-wrap items-center gap-4 mb-20"
        >
          <button
            ref={btn1.ref as React.RefObject<HTMLButtonElement>}
            onMouseMove={btn1.onMouseMove}
            onMouseLeave={btn1.onMouseLeave}
            onClick={() => scrollTo('#contact')}
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#6c63ff] text-white font-medium text-[15px] hover:bg-[#5a52e0] transition-colors"
          >
            Start a Project
            <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
          <button
            ref={btn2.ref as React.RefObject<HTMLButtonElement>}
            onMouseMove={btn2.onMouseMove}
            onMouseLeave={btn2.onMouseLeave}
            onClick={() => scrollTo('#work')}
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full border border-white/10 text-white/70 font-medium text-[15px] hover:border-white/25 hover:text-white transition-all"
          >
            <Play size={13} className="fill-current" /> View Our Work
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.7 }}
          className="grid grid-cols-2 sm:grid-cols-4 border-t border-white/[0.06] pt-10"
        >
          {stats.map((s, i) => (
            <div key={s.label} className={`flex flex-col gap-1.5 pr-6 ${i !== 0 ? 'pl-6 border-l border-white/[0.06]' : ''}`}>
              <Counter value={s.value} suffix={s.suffix} delay={1200 + i * 100} />
              <span className="text-[13px] text-white/35">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute right-10 bottom-12 flex flex-col items-center gap-2 z-10"
      >
        <div className="h-10 w-px bg-white/[0.08] relative overflow-hidden rounded-full">
          <motion.div
            className="absolute inset-x-0 top-0 h-5 bg-gradient-to-b from-transparent to-[#6c63ff]"
            animate={{ y: ['0%', '200%'] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
        <span className="text-[9px] text-white/20 tracking-[0.18em] uppercase [writing-mode:vertical-rl]">Scroll</span>
      </motion.div>

      {/* Tech marquee */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden whitespace-nowrap z-10 pb-3 pointer-events-none">
        <div className="inline-flex animate-marquee">
          {[...techStack, ...techStack].map((tech, i) => (
            <span key={i} className="inline-flex items-center gap-2.5 mx-7 text-[10px] text-white/[0.18] uppercase tracking-[0.14em]">
              <span className="w-[3px] h-[3px] rounded-full bg-[#6c63ff]/40 flex-shrink-0" />
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
