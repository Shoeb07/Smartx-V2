"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowUpRight,
  Globe,
  Smartphone,
  Clock,
  ExternalLink,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AG Traders",
    category: "Manufacturing · Web App",
    year: "2026",
    description:
      "A full-featured business website for AG Traders — a Palghar-based manufacturer of fencing wire, chain link, barbed wire, and galvanized iron products. Built to showcase product range, drive enquiries, and establish digital presence.",
    tags: ["Next.js", "Tailwind CSS", "Responsive Design", "SEO"],
    highlights: [
      "Complete product catalogue with categories",
      "WhatsApp & direct enquiry integration",
      "Mobile-first, SEO-optimised build",
      "Fast-loading static generation",
    ],
    result: "Live & generating leads",
    resultColor: "#00e5b0",
    accent: "#6c63ff",
    bg: "from-[#6c63ff]/12 via-transparent to-transparent",
    type: "web",
    status: "live",
    link: "https://agtraders.info",
  },
  {
    id: 2,
    title: "Scholarship Management App",
    category: "EdTech · Web Application",
    year: "2026",
    description:
      "A comprehensive scholarship portal enabling students to discover, apply, and track scholarship opportunities — and administrators to manage applications, review submissions, and communicate outcomes efficiently.",
    tags: ["React", "Node.js", "MongoDB", "Firebase Auth"],
    highlights: [
      "Student application & tracking dashboard",
      "Admin panel for review & approval workflow",
      "Document upload & verification system",
      "Real-time status notifications",
    ],
    result: "In active development",
    resultColor: "#f59e0b",
    accent: "#00e5b0",
    bg: "from-[#00e5b0]/10 via-transparent to-transparent",
    type: "web",
    status: "dev",
    link: "#",
  },
  {
    id: 3,
    title: "FurneXo",
    category: "India's First Furniture Exchnage Platform ",
    year: "2025",
    description:
      "FurneXo is India’s first furniture exchange platform, enabling users to buy, sell, or swap furniture seamlessly. It promotes affordability and sustainability by giving pre-owned furniture a second life.",
    tags: ["React", "Node.js", "MongoDB", "Firebase Auth"],
    highlights: [],
    result: "In active development",
    resultColor: "#f59e0b",
    accent: "#00e5b0",
    bg: "from-[#00e5b0]/10 via-transparent to-transparent",
    type: "web",
    status: "dev",
    link: "#",
  },
  {
    id: 4,
    title: "Attractions Mens Studio",
    category: "Mens Fashion Platform ",
    year: "2024",
    description:
      "Attraction Men’s Studio is a modern grooming destination offering premium haircuts, styling, and skincare services for men.It blends style and comfort to help you look sharp and feel confident every day.",
    tags: ["React", "Node.js", "MongoDB", "Firebase Auth"],
    highlights: [],
    result: "In active development",
    resultColor: "#f59e0b",
    accent: "#00e5b0",
    bg: "from-[#00e5b0]/10 via-transparent to-transparent",
    type: "web",
    status: "dev",
    link: "#",
  },
  {
    id: 5,
    title: "One Stop Dashboard",
    category: "ERP Application",
    year: "2024",
    description:
      "One Stop Dashboard is a powerful ERP application that centralizes all business operations into a single, easy-to-manage platform. It streamlines workflows, improves efficiency, and provides real-time insights for smarter decision-making.",
    tags: ["React", "Node.js", "MongoDB", "Firebase Auth"],
    highlights: [],
    result: "In active development",
    resultColor: "#f59e0b",
    accent: "#00e5b0",
    bg: "from-[#00e5b0]/10 via-transparent to-transparent",
    type: "web",
    status: "dev",
    link: "#",
  },
  {
    id: 6,
    title: "SmartX Solutions Website",
    category: "Agency · Marketing Site",
    year: "2023",
    description:
      "Our own agency website — designed and built in-house to Phenomenon Studio standards. Cinematic animations, full SEO, particle canvas, magnetic interactions, and a contact system that converts.",
    tags: ["Next.js 15", "Framer Motion", "Tailwind CSS", "TypeScript"],
    highlights: [
      "Cinematic preloader & word-reveal animations",
      "Custom cursor with magnetic buttons",
      "Full SEO — sitemap, schema, OG tags",
      "Vercel deployment with CI/CD",
    ],
    result: "You're looking at it",
    resultColor: "#6c63ff",
    accent: "#ff5e62",
    bg: "from-[#ff5e62]/10 via-transparent to-transparent",
    type: "web",
    status: "live",
    link: "#",
  },
  {
    id: 4,
    title: "More Projects Coming",
    category: "Various · In Pipeline",
    year: "",
    description:
      "We're currently taking on new projects across web apps, mobile applications, e-commerce, and SaaS platforms. Every project we take on gets the same cinematic quality treatment.",
    tags: ["Your Stack Here", "Your Vision Here"],
    highlights: [
      "Custom web & mobile applications",
      "SaaS product design & development",
      "E-commerce & marketplace platforms",
      "AI-powered product features",
    ],
    result: "Let's build together",
    resultColor: "#00e5b0",
    accent: "#6c63ff",
    bg: "from-[#6c63ff]/08 via-transparent to-transparent",
    type: "both",
    status: "open",
    link: "#contact",
    cta: true,
  },
];

const statusBadge = {
  live: {
    label: "● Live",
    color: "#00e5b0",
    bg: "rgba(0,229,176,0.1)",
    border: "rgba(0,229,176,0.2)",
  },
  dev: {
    label: "◐ In Dev",
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.1)",
    border: "rgba(245,158,11,0.2)",
  },
  open: {
    label: "✦ Open Slot",
    color: "#6c63ff",
    bg: "rgba(108,99,255,0.1)",
    border: "rgba(108,99,255,0.2)",
  },
};

export default function Work() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="work" className="py-32 bg-[#0a0a10]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="text-[#6c63ff] text-[11px] uppercase tracking-[0.14em] mb-4"
            >
              Our Work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.1,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-syne font-bold text-[clamp(36px,5vw,64px)] leading-tight"
            >
              Real Projects.
              <br />
              <span className="text-gradient-accent">Real Results.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-white/40 text-sm max-w-xs leading-relaxed"
          >
            Every project we take on gets our full cinematic treatment — no
            templates, no shortcuts.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {projects.map((proj, i) => {
            const badge = statusBadge[proj.status as keyof typeof statusBadge];
            return (
              <motion.article
                key={proj.id}
                initial={{ opacity: 0, y: 44 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: 0.1 + i * 0.11,
                  duration: 0.75,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative p-8 rounded-3xl border border-white/[0.07] bg-[#0d0d14] hover:border-white/[0.12] transition-all duration-400 overflow-hidden cursor-pointer"
              >
                {/* Gradient sweep */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${proj.bg} opacity-70 pointer-events-none`}
                />
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                  style={{
                    background: `radial-gradient(ellipse at 20% 20%, ${proj.accent}0d 0%, transparent 65%)`,
                  }}
                />

                <div className="relative z-10">
                  {/* Top row */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] text-white/35 border border-white/[0.07] px-3 py-1 rounded-full">
                        {proj.category}
                      </span>
                      <span className="text-[11px] text-white/20 flex items-center gap-1">
                        <Clock size={9} /> {proj.year}
                      </span>
                    </div>
                    <span
                      className="text-[11px] px-3 py-1 rounded-full font-medium"
                      style={{
                        color: badge.color,
                        background: badge.bg,
                        border: `1px solid ${badge.border}`,
                      }}
                    >
                      {badge.label}
                    </span>
                  </div>

                  {/* Project mockup area */}
                  <div
                    className="w-full h-44 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden"
                    style={{
                      background: `${proj.accent}0a`,
                      border: `1px solid ${proj.accent}18`,
                    }}
                  >
                    {/* Subtle grid inside card */}
                    <div
                      className="absolute inset-0 opacity-30"
                      style={{
                        backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 24px, ${proj.accent}08 24px, ${proj.accent}08 25px), repeating-linear-gradient(90deg, transparent, transparent 24px, ${proj.accent}08 24px, ${proj.accent}08 25px)`,
                      }}
                    />
                    <div className="relative text-center">
                      <div
                        className="w-14 h-14 rounded-2xl mx-auto mb-3 flex items-center justify-center text-lg font-syne font-bold"
                        style={{
                          background: `${proj.accent}20`,
                          color: proj.accent,
                        }}
                      >
                        {proj.title.charAt(0)}
                      </div>
                      <p className="text-[11px] text-white/20 tracking-wider uppercase">
                        {proj.title}
                      </p>
                    </div>
                    {/* Type icons */}
                    <div className="absolute top-3 right-3 flex gap-1.5">
                      {(proj.type === "web" || proj.type === "both") && (
                        <Globe size={11} className="text-white/20" />
                      )}
                      {(proj.type === "mobile" || proj.type === "both") && (
                        <Smartphone size={11} className="text-white/20" />
                      )}
                    </div>
                  </div>

                  {/* Title & desc */}
                  <h3 className="font-syne font-bold text-xl mb-2 group-hover:text-white transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-white/45 text-[14px] leading-relaxed mb-5">
                    {proj.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-1.5 mb-5">
                    {proj.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-[12px] text-white/35"
                      >
                        <span
                          className="w-1 h-1 rounded-full flex-shrink-0 mt-1.5"
                          style={{ background: proj.accent }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Result + tags */}
                  <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                    <span
                      className="text-[12px] font-medium"
                      style={{ color: proj.resultColor }}
                    >
                      {proj.result}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {proj.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] text-white/25 border border-white/[0.06] px-2 py-0.5 rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA for open slot */}
                  {proj.cta && (
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 mt-2 px-5 py-2.5 rounded-full bg-[#6c63ff] text-white text-[13px] font-medium hover:bg-[#5a52e0] transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .querySelector("#contact")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      Let's Build Together <ArrowUpRight size={13} />
                    </a>
                  )}
                </div>

                {/* Arrow */}
                {!proj.cta && (
                  <ArrowUpRight
                    size={16}
                    className="absolute top-8 right-8 text-white/15 group-hover:text-white/50 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 z-10"
                  />
                )}
              </motion.article>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center text-white/20 text-[13px] mt-12"
        >
          More case studies coming soon as projects go live. Every story we
          build is worth telling.
        </motion.p>
      </div>
    </section>
  );
}
