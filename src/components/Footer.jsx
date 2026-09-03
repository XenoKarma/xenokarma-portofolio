import { motion } from 'motion/react'

const footerLinks = [
  {
    title: 'Navigation',
    links: [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Experience', href: '#experience' },
      { label: 'Projects', href: '#project' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Social',
    links: [
      { label: 'Instagram', href: 'https://www.instagram.com/andika_purnama1803' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/andika-purnama-94315b34b' },
      { label: 'Email', href: 'mailto:andikapurnama1803@gmail.com' },
      { label: 'WhatsApp', href: 'https://wa.me/628979732548' },
    ],
  },
  {
    title: 'Built With',
    links: [
      { label: 'opencode', href: 'https://opencode.ai' },
      { label: 'antigravity', href: 'https://antigravity.dev' },
      { label: 'ChatGPT', href: 'https://chatgpt.com' },
    ],
  },
]

export default function Footer() {
  const handleClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      if (href === '#home') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        const el = document.getElementById(href.slice(1))
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  return (
    <footer className="bg-ink text-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-12 md:pt-16 pb-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 pb-10 md:pb-12 border-b border-cream/15">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-2 md:col-span-1"
          >
            <h3 className="text-xl font-bold text-cream">
              XENO<span className="text-accent-blue">KARMA</span>
            </h3>
            <p className="mt-3 text-sm text-cream/40 leading-relaxed max-w-xs">
              Building modern digital experiences with passion and precision.
            </p>
          </motion.div>

          {footerLinks.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + gi * 0.1 }}
            >
              <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-cream/30 mb-4">
                {group.title}
              </h4>
              <ul className="space-y-2.5">
                {group.links.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleClick(e, link.href)}
                      target={link.href.startsWith('#') ? undefined : '_blank'}
                      rel={link.href.startsWith('#') ? undefined : 'noopener noreferrer'}
                      className="block py-0.5 text-sm text-cream/50 hover:text-accent-blue transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-xs text-cream/30">
            &copy; {new Date().getFullYear()} Andika Purnama | Xenokarma. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
