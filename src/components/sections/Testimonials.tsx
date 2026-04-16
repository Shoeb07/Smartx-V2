'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Arjun Mehta',
    role: 'Founder & CEO, FinEdge',
    company: 'FinEdge',
    review: "SmartX transformed our vision into a world-class banking app. Their technical depth, design sensibility, and communication were exceptional. We launched on time, under budget, and our users love it.",
    rating: 5,
    avatar: 'AM',
    color: '#6c63ff',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'CPO, MediSync Health',
    company: 'MediSync',
    review: "The team at SmartX truly understood the complexity of healthcare software. They navigated HIPAA compliance, complex workflows, and tight deadlines without breaking a sweat. Phenomenal partners.",
    rating: 5,
    avatar: 'PS',
    color: '#ff5e62',
  },
  {
    id: 3,
    name: 'Rahul Nair',
    role: 'Co-Founder, EduCore',
    company: 'EduCore',
    review: "From wireframes to launch in 14 weeks — an incredible achievement. SmartX's agile process gave us full visibility at every step. Our platform now serves 80,000 students and growing.",
    rating: 5,
    avatar: 'RN',
    color: '#00e5b0',
  },
  {
    id: 4,
    name: 'Kavita Reddy',
    role: 'Director of Technology, TradeFlow',
    company: 'TradeFlow',
    review: "SmartX didn't just build our marketplace — they helped us think through the product strategy. Their input on the architecture saved us months of rework. A team that truly cares about your success.",
    rating: 5,
    avatar: 'KR',
    color: '#6c63ff',
  },
]

const ratingPlatforms = [
  { name: 'Google', rating: '4.9', count: '38 reviews' },
  { name: 'Clutch', rating: '5.0', count: '24 reviews' },
  { name: 'GoodFirms', rating: '4.8', count: '17 reviews' },
]

export default function Testimonials() {
  const [idx, setIdx] = useState(0)
  const t = testimonials[idx]

  const prev = () => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setIdx((i) => (i + 1) % testimonials.length)

  return (
    <section className="py-32 bg-[#050508]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Rating badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-4 mb-20"
        >
          {ratingPlatforms.map(({ name, rating, count }) => (
            <div key={name} className="flex items-center gap-3 px-5 py-3 rounded-full border border-white/[0.07] bg-[#0d0d14]">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="font-syne font-bold text-white text-sm">{rating}</span>
              <span className="text-white/30 text-xs">on {name} · {count}</span>
            </div>
          ))}
        </motion.div>

        {/* Main review */}
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-[#6c63ff] text-sm font-dm uppercase tracking-widest mb-12"
          >
            Client Stories
          </motion.p>

          <AnimatePresence mode="wait">
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <Quote size={40} className="mx-auto mb-8 text-white/10" />
              <p className="text-[clamp(20px,3vw,30px)] font-syne leading-relaxed text-white/85 mb-10">
                "{t.review}"
              </p>
              <div className="flex items-center justify-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-syne font-bold text-sm"
                  style={{ background: `${t.color}25`, color: t.color }}
                >
                  {t.avatar}
                </div>
                <div className="text-left">
                  <p className="font-syne font-bold text-white">{t.name}</p>
                  <p className="text-white/40 text-sm">{t.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/25 transition-all"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`transition-all duration-200 rounded-full ${
                    i === idx ? 'w-6 h-2 bg-[#6c63ff]' : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/25 transition-all"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
