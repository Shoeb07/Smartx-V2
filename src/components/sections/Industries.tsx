'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { HeartPulse, Landmark, GraduationCap, ShoppingBag, Factory, Building2 } from 'lucide-react'

const industries = [
  {
    id: 'fintech',
    icon: Landmark,
    name: 'FinTech',
    description: 'Secure, compliant, and scalable financial products — from digital banking to payment gateways and investment platforms.',
    challenges: ['KYC & AML compliance', 'Real-time payment processing', 'Fraud detection at scale'],
    solutions: ['Frictionless onboarding flows', 'Secure transaction UX', 'API-driven payment architecture'],
    color: '#6c63ff',
  },
  {
    id: 'health',
    icon: HeartPulse,
    name: 'HealthTech',
    description: 'HIPAA-compliant platforms that simplify patient care, telemedicine, and health data management.',
    challenges: ['Data privacy & HIPAA compliance', 'Complex clinical workflows', 'Multi-device accessibility'],
    solutions: ['Patient-first UX design', 'Secure health data architecture', 'Telehealth integrations'],
    color: '#ff5e62',
  },
  {
    id: 'edtech',
    icon: GraduationCap,
    name: 'EdTech',
    description: 'Engaging learning platforms built for scale — from K-12 to enterprise L&D, with AI-powered personalisation.',
    challenges: ['Low learner engagement', 'Accessibility & WCAG compliance', 'High concurrent user loads'],
    solutions: ['Gamified learning UX', 'Adaptive content delivery', 'Cloud-native scalable architecture'],
    color: '#00e5b0',
  },
  {
    id: 'ecom',
    icon: ShoppingBag,
    name: 'E-Commerce',
    description: 'Commerce experiences that convert. Headless storefronts, marketplace platforms, and omnichannel solutions.',
    challenges: ['Cart abandonment & low conversion', 'Inventory & supply chain complexity', 'Multi-channel consistency'],
    solutions: ['Conversion-optimised UX', 'Real-time inventory sync', 'Headless commerce architecture'],
    color: '#6c63ff',
  },
  {
    id: 'manufacturing',
    icon: Factory,
    name: 'Manufacturing',
    description: 'Smart industrial solutions with IoT dashboards, ERP integrations, and predictive maintenance systems.',
    challenges: ['Legacy system integration', 'Real-time shop floor visibility', 'Predictive maintenance'],
    solutions: ['IoT data dashboards', 'ERP/MES integrations', 'ML-powered anomaly detection'],
    color: '#ff5e62',
  },
  {
    id: 'realestate',
    icon: Building2,
    name: 'Real Estate',
    description: 'Property management platforms, virtual tour experiences, and CRM systems for modern real estate businesses.',
    challenges: ['Fragmented customer journeys', 'Document management complexity', 'Remote property evaluation'],
    solutions: ['Unified property portals', 'Digital contract workflows', 'Virtual tour integrations'],
    color: '#00e5b0',
  },
]

export default function Industries() {
  const [active, setActive] = useState(industries[0].id)
  const current = industries.find((i) => i.id === active)!

  return (
    <section id="industries" className="py-32 bg-[#050508]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#6c63ff] text-sm font-dm uppercase tracking-widest mb-4"
          >
            Industries
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-syne font-bold text-[clamp(36px,5vw,64px)] leading-tight max-w-xl"
          >
            Deep Domain Expertise
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Sidebar tabs */}
          <div className="lg:col-span-2 flex flex-row lg:flex-col gap-3 overflow-x-auto pb-4 lg:pb-0">
            {industries.map((ind) => {
              const Icon = ind.icon
              const isActive = active === ind.id
              return (
                <button
                  key={ind.id}
                  onClick={() => setActive(ind.id)}
                  className={`flex-shrink-0 flex items-center gap-3 px-5 py-4 rounded-2xl border text-left transition-all duration-200 ${
                    isActive
                      ? 'border-white/15 bg-[#0d0d14]'
                      : 'border-transparent hover:border-white/[0.07] hover:bg-[#0d0d14]/50'
                  }`}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all"
                    style={{ background: isActive ? `${ind.color}20` : 'rgba(255,255,255,0.04)' }}
                  >
                    <Icon size={16} style={{ color: isActive ? ind.color : 'rgba(255,255,255,0.4)' }} />
                  </div>
                  <span className={`font-syne font-bold text-[15px] whitespace-nowrap ${isActive ? 'text-white' : 'text-white/40'}`}>
                    {ind.name}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Detail panel */}
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35 }}
            className="lg:col-span-3 p-8 rounded-3xl border border-white/[0.07] bg-[#0d0d14]"
          >
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
              style={{ background: `${current.color}18` }}
            >
              <current.icon size={22} style={{ color: current.color }} />
            </div>

            <h3 className="font-syne font-bold text-2xl mb-3">{current.name}</h3>
            <p className="text-white/55 leading-relaxed mb-8">{current.description}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h4 className="font-syne font-bold text-sm uppercase tracking-wider text-white/40 mb-4">Challenges We Solve</h4>
                <ul className="space-y-3">
                  {current.challenges.map((c) => (
                    <li key={c} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff5e62] mt-1.5 flex-shrink-0" />
                      <span className="text-sm text-white/60">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-syne font-bold text-sm uppercase tracking-wider text-white/40 mb-4">How We Solve Them</h4>
                <ul className="space-y-3">
                  {current.solutions.map((s) => (
                    <li key={s} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: current.color }} />
                      <span className="text-sm text-white/60">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
