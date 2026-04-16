'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Clock } from 'lucide-react'

const posts = [
  {
    slug: 'next-js-vs-remix-2024',
    category: 'Engineering',
    title: 'Next.js vs Remix in 2024: Which Should You Choose?',
    excerpt: 'A practical comparison of two dominant React frameworks — performance, DX, routing, and when to pick each one for your next project.',
    readTime: '8 min read',
    date: 'Mar 2024',
    color: '#6c63ff',
  },
  {
    slug: 'ai-product-integration',
    category: 'Product',
    title: 'How to Integrate AI Without Breaking Your Product',
    excerpt: 'Lessons from integrating LLMs, recommendation engines, and computer vision into real products — and what to avoid.',
    readTime: '6 min read',
    date: 'Feb 2024',
    color: '#00e5b0',
  },
  {
    slug: 'design-system-at-scale',
    category: 'Design',
    title: 'Building a Design System That Scales With Your Team',
    excerpt: 'A step-by-step guide to creating a robust, developer-friendly design system using Figma and Storybook.',
    readTime: '10 min read',
    date: 'Jan 2024',
    color: '#ff5e62',
  },
]

export default function Insights() {
  return (
    <section id="insights" className="py-32 bg-[#0a0a10]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[#6c63ff] text-sm font-dm uppercase tracking-widest mb-4"
            >
              Insights
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-syne font-bold text-[clamp(36px,5vw,56px)] leading-tight"
            >
              From Our Team
            </motion.h2>
          </div>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            href="#"
            className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors group"
          >
            All Articles <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-6 rounded-2xl border border-white/[0.07] bg-[#0d0d14] hover:border-white/15 transition-all duration-200 cursor-pointer"
            >
              <div className="flex items-center justify-between mb-5">
                <span
                  className="text-xs px-3 py-1 rounded-full font-medium"
                  style={{ background: `${post.color}18`, color: post.color }}
                >
                  {post.category}
                </span>
                <div className="flex items-center gap-1.5 text-white/30 text-xs">
                  <Clock size={11} />
                  {post.readTime}
                </div>
              </div>

              <h3 className="font-syne font-bold text-base mb-3 group-hover:text-[#a89eff] transition-colors">
                {post.title}
              </h3>
              <p className="text-white/45 text-sm leading-relaxed mb-5">{post.excerpt}</p>

              <div className="flex items-center justify-between">
                <span className="text-xs text-white/25">{post.date}</span>
                <ArrowUpRight
                  size={14}
                  className="text-white/25 group-hover:text-white/60 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
