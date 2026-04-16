'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react'
import { FaLinkedin, FaTwitter } from 'react-icons/fa'

const budgets = ['< ₹5 Lakhs', '₹5–15 Lakhs', '₹15–50 Lakhs', '₹50 Lakhs+', 'Let\'s discuss']

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '', budget: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSent(true)
  }

  return (
    <section id="contact" className="py-32 bg-[#050508]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#6c63ff] text-sm font-dm uppercase tracking-widest mb-4"
          >
            Contact
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-syne font-bold text-[clamp(36px,5vw,64px)] leading-tight"
          >
            Have a Project
            <br />
            <span className="text-gradient-accent">in Mind?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/50 mt-4 max-w-md mx-auto leading-relaxed"
          >
            Tell us about your challenge. We'll respond within 24 hours with a clear path forward.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center py-20 text-center p-8 rounded-3xl border border-[#00e5b0]/20 bg-[#00e5b0]/[0.04]">
                <div className="w-16 h-16 rounded-full bg-[#00e5b0]/15 flex items-center justify-center mb-6">
                  <span className="text-3xl">✓</span>
                </div>
                <h3 className="font-syne font-bold text-2xl mb-3 text-[#00e5b0]">Message Sent!</h3>
                <p className="text-white/55 max-w-sm">
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { key: 'name', label: 'Your Name', type: 'text', placeholder: 'Arjun Mehta' },
                    { key: 'email', label: 'Email Address', type: 'email', placeholder: 'arjun@company.com' },
                  ].map(({ key, label, type, placeholder }) => (
                    <div key={key}>
                      <label className="block text-xs text-white/40 mb-2 uppercase tracking-wider">{label}</label>
                      <input
                        type={type}
                        required
                        placeholder={placeholder}
                        value={(form as any)[key]}
                        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl border border-white/[0.08] bg-[#0d0d14] text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#6c63ff]/50 focus:ring-1 focus:ring-[#6c63ff]/20 transition-all"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-xs text-white/40 mb-2 uppercase tracking-wider">Company (optional)</label>
                  <input
                    type="text"
                    placeholder="Your company name"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-white/[0.08] bg-[#0d0d14] text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#6c63ff]/50 focus:ring-1 focus:ring-[#6c63ff]/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs text-white/40 mb-2 uppercase tracking-wider">Project Budget</label>
                  <div className="flex flex-wrap gap-2">
                    {budgets.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setForm({ ...form, budget: b })}
                        className={`px-4 py-2 rounded-full text-xs border transition-all ${
                          form.budget === b
                            ? 'border-[#6c63ff]/50 bg-[#6c63ff]/15 text-[#a89eff]'
                            : 'border-white/[0.07] text-white/40 hover:border-white/15'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-white/40 mb-2 uppercase tracking-wider">Tell Us About Your Project</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Describe your project, goals, and what you're looking to achieve..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-white/[0.08] bg-[#0d0d14] text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#6c63ff]/50 focus:ring-1 focus:ring-[#6c63ff]/20 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-[#6c63ff] text-white font-medium text-[15px] hover:bg-[#5a52e0] transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <>Send Message <ArrowUpRight size={16} /></>
                  )}
                </button>

                <p className="text-center text-xs text-white/25">
                  By submitting, you agree to our Privacy Policy. We never share your information.
                </p>
              </form>
            )}
          </motion.div>

          {/* Sidebar info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-5"
          >
            {/* Direct contacts */}
            <div className="p-6 rounded-2xl border border-white/[0.07] bg-[#0d0d14]">
              <h3 className="font-syne font-bold text-base mb-5">Get In Touch Directly</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#6c63ff]/15 flex items-center justify-center flex-shrink-0">
                    <Mail size={14} className="text-[#6c63ff]" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 mb-0.5">Email Us</p>
                    <a href="mailto:hello@smartxsolutions.in" className="text-sm text-white hover:text-[#6c63ff] transition-colors">
                      hello@smartxsolutions.in
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#6c63ff]/15 flex items-center justify-center flex-shrink-0">
                    <Phone size={14} className="text-[#6c63ff]" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 mb-0.5">Call Us</p>
                    <a href="tel:+91" className="text-sm text-white hover:text-[#6c63ff] transition-colors">
                      +91 000 000 0000
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#6c63ff]/15 flex items-center justify-center flex-shrink-0">
                    <MapPin size={14} className="text-[#6c63ff]" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 mb-0.5">Office</p>
                    <p className="text-sm text-white">Hyderabad, Telangana, India</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div className="p-6 rounded-2xl border border-white/[0.07] bg-[#0d0d14]">
              <h3 className="font-syne font-bold text-base mb-4">Connect With Us</h3>
              <div className="flex gap-3">
                {[
                  { Icon: FaLinkedin, label: 'LinkedIn', href: '#' },
                  { Icon: FaTwitter, label: 'Twitter', href: '#' },
                ].map(({ Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-white/[0.07] text-white/50 hover:text-white hover:border-white/15 transition-all text-sm"
                  >
                    <Icon size={14} />
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="p-6 rounded-2xl border border-[#00e5b0]/20 bg-[#00e5b0]/[0.04]">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-[#00e5b0] animate-pulse" />
                <span className="text-[#00e5b0] text-sm font-medium">Currently Taking New Projects</span>
              </div>
              <p className="text-white/50 text-xs leading-relaxed">
                We have capacity starting immediately. Reach out and we can schedule a discovery call within 48 hours.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
