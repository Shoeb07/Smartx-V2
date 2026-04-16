'use client'

import { motion } from 'framer-motion'

const clients = [
  'FinEdge', 'MediSync', 'EduCore', 'TradeFlow', 'BrightPay',
  'NexaHR', 'CloudVault', 'ShipSmart', 'GrowIQ', 'SafeNet',
]

const awards = [
  { label: 'Top Dev Company', platform: 'GoodFirms · 2023' },
  { label: 'Best IT Services', platform: 'Clutch · 2023' },
  { label: '4.9★ Rating', platform: 'Google Reviews' },
  { label: 'ISO 9001 Certified', platform: 'Quality Management' },
]

export default function TrustedBy() {
  return (
    <section className="py-24 bg-[#0a0a10] border-y border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-white/25 text-xs uppercase tracking-widest mb-10"
        >
          Trusted by 100+ companies worldwide
        </motion.p>

        {/* Logo marquee */}
        <div className="marquee-container mb-16">
          <div className="marquee-track">
            {[...clients, ...clients].map((name, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-3 mx-8 text-white/20 font-syne font-bold text-base tracking-tight"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#6c63ff]/30" />
                {name}
              </span>
            ))}
          </div>
        </div>

        {/* Award badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {awards.map((award, i) => (
            <motion.div
              key={award.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col items-center text-center p-5 rounded-2xl border border-white/[0.06] bg-[#0d0d14]"
            >
              <span className="font-syne font-bold text-white text-base mb-1">{award.label}</span>
              <span className="text-white/30 text-xs">{award.platform}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
