import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react'
import { FaLinkedin, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa'

const services = [
  'Web App Development',
  'Mobile App Development',
  'UI/UX Design',
  'Cloud Solutions',
  'AI & ML Integration',
  'Digital Transformation',
  'E-Commerce Solutions',
  'DevOps & CI/CD',
]

const company = [
  { label: 'About Us', href: '#about' },
  { label: 'Our Work', href: '#work' },
  { label: 'Careers', href: '#careers' },
  { label: 'Blog', href: '#insights' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
  { icon: FaTwitter, href: '#', label: 'Twitter' },
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaGithub, href: '#', label: 'GitHub' },
]

export default function Footer() {
  return (
    <footer className="bg-[#050508] border-t border-white/[0.06] pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/[0.06]">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6c63ff] to-[#00e5b0] flex items-center justify-center text-white font-bold text-sm">
                SX
              </div>
              <span className="font-syne font-bold text-[18px] text-white">
                SmartX<span className="text-[#00e5b0]">.</span>
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              We design, build, and scale digital products for ambitious businesses — from early-stage startups to global enterprises.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/25 transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-syne font-bold text-sm text-white mb-5 uppercase tracking-widest">Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm text-white/50 hover:text-white transition-colors duration-150">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-syne font-bold text-sm text-white mb-5 uppercase tracking-widest">Company</h4>
            <ul className="space-y-3">
              {company.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-sm text-white/50 hover:text-white transition-colors duration-150">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-syne font-bold text-sm text-white mb-5 uppercase tracking-widest">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={15} className="text-[#6c63ff] mt-0.5 shrink-0" />
                <a href="mailto:hello@smartxsolutions.in" className="text-sm text-white/50 hover:text-white transition-colors">
                  business@smartxsolutions.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={15} className="text-[#6c63ff] mt-0.5 shrink-0" />
                <a href="tel:+91" className="text-sm text-white/50 hover:text-white transition-colors">
                  +91 9100590377
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-[#6c63ff] mt-0.5 shrink-0" />
                <span className="text-sm text-white/50">Hyderabad, India</span>
              </li>
            </ul>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#6c63ff] text-white text-sm font-medium hover:bg-[#6c63ff]/90 transition-all"
            >
              Start a Project <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} SmartX Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="/privacy-policy" className="text-xs text-white/30 hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="/terms" className="text-xs text-white/30 hover:text-white/60 transition-colors">Terms of Service</a>
            <a href="/sitemap.xml" className="text-xs text-white/30 hover:text-white/60 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
