'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe, Smartphone, Palette, Cloud, Brain, ShoppingCart, GitBranch, Shield, ArrowUpRight } from 'lucide-react'

const services = [
  {
    id: 'web',
    icon: Globe,
    title: 'Web App Development',
    description: 'Scalable, high-performance web applications built with modern frameworks. From SaaS platforms to enterprise portals, we craft experiences users love.',
    tags: ['React', 'Next.js', 'Node.js', 'TypeScript'],
    points: ['Custom SaaS platforms', 'Real-time dashboards', 'API-first architecture', 'Progressive Web Apps'],
    color: '#6c63ff',
  },
  {
    id: 'mobile',
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile apps for iOS & Android that deliver premium user experiences with flawless performance.',
    tags: ['Flutter', 'React Native', 'Swift', 'Kotlin'],
    points: ['iOS & Android native apps', 'Cross-platform with Flutter', 'Offline-first design', 'App Store optimization'],
    color: '#00e5b0',
  },
  {
    id: 'design',
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Research-driven design that converts. We create intuitive interfaces, robust design systems, and delightful experiences that align with business goals.',
    tags: ['Figma', 'Design Systems', 'Prototyping', 'User Research'],
    points: ['UX research & audits', 'Wireframing & prototypes', 'Design system creation', 'Usability testing'],
    color: '#ff5e62',
  },
  {
    id: 'cloud',
    icon: Cloud,
    title: 'Cloud & DevOps',
    description: 'Infrastructure that scales with you. We architect, migrate, and manage cloud environments for reliability, speed, and cost efficiency.',
    tags: ['AWS', 'GCP', 'Docker', 'Kubernetes'],
    points: ['Cloud architecture & migration', 'CI/CD pipelines', 'Auto-scaling infrastructure', '24/7 monitoring & support'],
    color: '#6c63ff',
  },
  {
    id: 'ai',
    icon: Brain,
    title: 'AI & ML Integration',
    description: 'Embed intelligence into your products. From recommendation engines to LLM-powered features, we make AI practical and impactful.',
    tags: ['Python', 'TensorFlow', 'LangChain', 'OpenAI'],
    points: ['AI chatbots & assistants', 'Predictive analytics', 'Computer vision', 'NLP & LLM integration'],
    color: '#00e5b0',
  },
  {
    id: 'ecom',
    icon: ShoppingCart,
    title: 'E-Commerce Solutions',
    description: 'End-to-end commerce platforms built to convert and scale. Custom storefronts, headless commerce, and seamless payment integrations.',
    tags: ['Next.js', 'Shopify', 'Stripe', 'Headless'],
    points: ['Custom storefronts', 'Headless commerce', 'Payment gateway integration', 'Inventory management'],
    color: '#ff5e62',
  },
  {
    id: 'devops',
    icon: GitBranch,
    title: 'Digital Transformation',
    description: 'Modernise legacy systems and reimagine your business processes with technology-first strategies that deliver measurable ROI.',
    tags: ['Strategy', 'Architecture', 'Migration', 'Training'],
    points: ['Legacy system modernisation', 'Process automation', 'Technology roadmapping', 'Team enablement'],
    color: '#6c63ff',
  },
  {
    id: 'security',
    icon: Shield,
    title: 'Cybersecurity & Compliance',
    description: 'Protect your digital assets. We implement security-first development practices and help you achieve GDPR, ISO 27001, and SOC2 compliance.',
    tags: ['Security Audit', 'GDPR', 'Penetration Testing', 'SOC2'],
    points: ['Security architecture review', 'VAPT assessments', 'Compliance consulting', 'Data privacy implementation'],
    color: '#00e5b0',
  },
]

export default function Services() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <section id="services" className="py-32 bg-[#050508]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[#6c63ff] text-sm font-dm uppercase tracking-widest mb-4"
            >
              What We Do
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-syne font-bold text-[clamp(36px,5vw,64px)] leading-tight max-w-lg"
            >
              Services Built for Scale
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/50 max-w-sm text-[15px] leading-relaxed"
          >
            We offer a full spectrum of digital services — so you can get everything you need under one roof, with one team that truly understands your vision.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((svc, i) => {
            const Icon = svc.icon
            const isActive = active === svc.id
            return (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                onMouseEnter={() => setActive(svc.id)}
                onMouseLeave={() => setActive(null)}
                className="group relative p-6 rounded-2xl border border-white/[0.07] bg-[#0d0d14] hover:border-white/15 hover:bg-[#13131e] transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{ background: `radial-gradient(ellipse at top left, ${svc.color}0d 0%, transparent 70%)` }}
                />

                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 transition-all duration-300"
                  style={{ backgroundColor: `${svc.color}18` }}
                >
                  <Icon size={18} style={{ color: svc.color }} />
                </div>

                <h3 className="font-syne font-bold text-[17px] mb-3 text-white">{svc.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed mb-4">{svc.description}</p>

                {/* Points */}
                <ul className="space-y-1.5 mb-5">
                  {svc.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2 text-xs text-white/40">
                      <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: svc.color }} />
                      {pt}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {svc.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded-full border border-white/[0.07] text-[11px] text-white/35">
                      {tag}
                    </span>
                  ))}
                </div>

                <ArrowUpRight
                  size={16}
                  className="absolute top-6 right-6 text-white/20 group-hover:text-white/60 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </motion.div>
            )
          })}
        </div>

        {/* CTA Row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-between p-8 rounded-2xl border border-white/[0.07] bg-[#0d0d14]"
        >
          <div>
            <h3 className="font-syne font-bold text-xl mb-1">Not sure what you need?</h3>
            <p className="text-white/50 text-sm">Tell us your challenge — we'll figure out the best solution together.</p>
          </div>
          <a
            href="#contact"
            className="mt-4 sm:mt-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#6c63ff] text-white font-medium text-sm hover:bg-[#5a52e0] transition-all whitespace-nowrap"
          >
            Let's Talk <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
