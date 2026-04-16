'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Users, Trophy, Clock, Zap } from 'lucide-react'

const reasons = [
  {
    icon: Users,
    title: 'Senior-Only Teams',
    description: 'Every project is staffed with senior engineers and designers. No juniors on your critical work — ever.',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'We\'ve delivered 94% of projects on-schedule. We use realistic estimates, not optimistic ones.',
  },
  {
    icon: Trophy,
    title: 'Quality Obsessed',
    description: 'We don\'t ship until it\'s right. Rigorous QA, code reviews, and performance benchmarks on every build.',
  },
  {
    icon: Zap,
    title: 'Agile & Transparent',
    description: 'Bi-weekly demos, daily standups, and a Slack channel directly with your team. You\'re never in the dark.',
  },
]

const differentiators = [
  'Full-stack capability — design, development, cloud, and AI under one roof',
  'Flexible engagement models — project-based, retainer, or team augmentation',
  'IP ownership guaranteed — all code and assets are 100% yours',
  'Post-launch support included in every engagement',
  'NDA-first approach — your ideas are always protected',
  'Dedicated project manager from day one',
]

export default function About() {
  return (
    <section id="about" className="py-32 bg-[#0a0a10]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[#6c63ff] text-sm font-dm uppercase tracking-widest mb-4"
            >
              Why SmartX
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-syne font-bold text-[clamp(36px,5vw,56px)] leading-tight mb-6"
            >
              We Don't Just
              <br />
              Build — We Partner.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/55 leading-relaxed mb-8"
            >
              Founded in 2016, SmartX Solutions has grown from a 3-person studio into a full-service 40+ member digital innovation agency. We've worked with funded startups, Fortune 500 companies, and everything in between.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/55 leading-relaxed mb-10"
            >
              What sets us apart isn't just technical skill — it's how deeply we integrate with your team. We act as a true extension of your organisation, not a vendor.
            </motion.p>
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-3"
            >
              {differentiators.map((d) => (
                <li key={d} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-[#00e5b0] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-white/60">{d}</span>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Right — cards */}
          <div className="grid grid-cols-2 gap-4">
            {reasons.map((r, i) => {
              const Icon = r.icon
              return (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl border border-white/[0.07] bg-[#0d0d14] hover:border-white/15 transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#6c63ff]/15 flex items-center justify-center mb-4">
                    <Icon size={18} className="text-[#6c63ff]" />
                  </div>
                  <h4 className="font-syne font-bold text-base mb-2">{r.title}</h4>
                  <p className="text-white/45 text-sm leading-relaxed">{r.description}</p>
                </motion.div>
              )
            })}

            {/* Team stat */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="col-span-2 p-6 rounded-2xl border border-white/[0.07] bg-gradient-to-br from-[#6c63ff]/10 to-[#0d0d14] flex items-center gap-6"
            >
              <div>
                <p className="font-syne font-bold text-5xl text-white mb-1">40<span className="text-[#6c63ff]">+</span></p>
                <p className="text-white/50 text-sm">Expert team members across engineering, design, cloud, and product</p>
              </div>
              <div className="flex -space-x-3 ml-auto">
                {['#6c63ff', '#00e5b0', '#ff5e62', '#a89eff', '#6c63ff'].map((c, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-[#0d0d14] flex items-center justify-center text-[10px] font-bold"
                    style={{ background: c + '30', color: c }}
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
                <div className="w-9 h-9 rounded-full border-2 border-[#0d0d14] bg-white/5 flex items-center justify-center text-[10px] text-white/40">
                  +35
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
