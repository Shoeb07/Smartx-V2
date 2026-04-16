'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, CalendarDays } from 'lucide-react'

export default function CTABanner() {
  return (
    <section className="py-20 bg-[#050508]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl p-12 lg:p-20 text-center"
          style={{
            background: 'linear-gradient(135deg, #0d0b1f 0%, #0a1a14 50%, #0d0b1f 100%)',
            border: '1px solid rgba(108,99,255,0.2)',
          }}
        >
          {/* Orbs */}
          <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-[#6c63ff]/10 blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-[#00e5b0]/08 blur-[80px] pointer-events-none" />

          <div className="relative z-10">
            <p className="text-[#6c63ff] text-sm font-dm uppercase tracking-widest mb-6">Ready to Build?</p>
            <h2 className="font-syne font-bold text-[clamp(32px,5vw,64px)] leading-tight mb-6 max-w-3xl mx-auto">
              Let's Turn Your Idea Into a
              <span className="text-gradient-accent"> Digital Reality.</span>
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Whether you're a startup with an idea or an enterprise needing to modernise — we have the team and the process to make it happen.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="px-8 py-4 rounded-full bg-[#6c63ff] text-white font-medium text-[15px] hover:bg-[#5a52e0] transition-all flex items-center gap-2 group"
              >
                Start a Project
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full border border-white/15 text-white/75 font-medium text-[15px] hover:border-white/30 hover:text-white transition-all flex items-center gap-2"
              >
                <CalendarDays size={16} />
                Book a Free Call
              </a>
            </div>

            {/* Trust signals */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
              {[
                '✓ Free discovery consultation',
                '✓ Response within 24 hours',
                '✓ No commitment required',
              ].map((item) => (
                <span key={item} className="text-sm text-white/35">{item}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
