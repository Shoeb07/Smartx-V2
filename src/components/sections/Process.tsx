'use client'

import { motion } from 'framer-motion'
import { Lightbulb, PenTool, Code2, Rocket, LifeBuoy } from 'lucide-react'

const steps = [
  {
    n: '01',
    icon: Lightbulb,
    title: 'Discovery & Strategy',
    description: 'We deep-dive into your business goals, user needs, and technical landscape. Together we align on scope, timeline, and success metrics.',
    duration: '1–2 weeks',
    deliverables: ['Product roadmap', 'Technical feasibility report', 'Scope document'],
  },
  {
    n: '02',
    icon: PenTool,
    title: 'Design & Prototype',
    description: 'Our UX team crafts wireframes, design systems, and clickable prototypes — validated with real user feedback before a single line of code.',
    duration: '2–4 weeks',
    deliverables: ['UX wireframes', 'Hi-fi UI designs', 'Interactive prototype'],
  },
  {
    n: '03',
    icon: Code2,
    title: 'Agile Development',
    description: 'We build in 2-week sprints with continuous delivery. You get regular demos, transparent progress, and full access to our dev environment.',
    duration: '6–16 weeks',
    deliverables: ['Functional builds', 'Sprint demos', 'Test reports'],
  },
  {
    n: '04',
    icon: Rocket,
    title: 'Launch & Deploy',
    description: 'Zero-downtime deployments with automated CI/CD pipelines. We handle infrastructure, performance testing, and go-live coordination.',
    duration: '1–2 weeks',
    deliverables: ['Production deployment', 'Performance audit', 'Launch checklist'],
  },
  {
    n: '05',
    icon: LifeBuoy,
    title: 'Growth & Support',
    description: 'Post-launch, we stay by your side — monitoring performance, shipping updates, and helping you scale as your user base grows.',
    duration: 'Ongoing',
    deliverables: ['24/7 monitoring', 'Monthly updates', 'Growth consulting'],
  },
]

export default function Process() {
  return (
    <section className="py-32 bg-[#0a0a10]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="mb-20 text-center max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#6c63ff] text-sm font-dm uppercase tracking-widest mb-4"
          >
            How We Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-syne font-bold text-[clamp(36px,5vw,64px)] leading-tight"
          >
            From Idea to Impact
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-white/50 mt-4 leading-relaxed"
          >
            Our proven process eliminates uncertainty, reduces risk, and gets your product to market faster — without sacrificing quality.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent" />

          <div className="space-y-12">
            {steps.map((step, i) => {
              const Icon = step.icon
              const isEven = i % 2 === 0
              return (
                <motion.div
                  key={step.n}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className={`lg:grid lg:grid-cols-2 lg:gap-12 items-center ${isEven ? '' : 'lg:dir-rtl'}`}
                >
                  {/* Content */}
                  <div className={`${isEven ? 'lg:text-right lg:pl-0 lg:pr-16' : 'lg:order-2 lg:pl-16'} mb-6 lg:mb-0`}>
                    <div className={`flex items-center gap-3 mb-4 ${isEven ? 'lg:justify-end' : ''}`}>
                      <span className="font-syne font-bold text-[#6c63ff]/40 text-sm">{step.n}</span>
                      <div className="w-8 h-8 rounded-lg bg-[#6c63ff]/15 flex items-center justify-center">
                        <Icon size={15} className="text-[#6c63ff]" />
                      </div>
                      <span className="text-xs text-white/30 border border-white/[0.07] px-2 py-0.5 rounded-full">{step.duration}</span>
                    </div>
                    <h3 className="font-syne font-bold text-xl mb-2">{step.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed mb-4">{step.description}</p>
                    <div className={`flex flex-wrap gap-2 ${isEven ? 'lg:justify-end' : ''}`}>
                      {step.deliverables.map((d) => (
                        <span key={d} className="text-xs text-[#00e5b0]/70 bg-[#00e5b0]/[0.07] border border-[#00e5b0]/15 px-2.5 py-1 rounded-full">
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Center dot (desktop) */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#0a0a10] border-2 border-[#6c63ff]/40 items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#6c63ff]" />
                  </div>

                  {/* Empty cell for alternating */}
                  <div className={isEven ? 'lg:order-2' : 'lg:order-1'} />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
