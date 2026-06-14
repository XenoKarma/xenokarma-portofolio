import { motion } from 'motion/react'

const footerLinks = [
  {
    title: 'Navigation',
    links: [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Experience', href: '#experience' },
      { label: 'Project', href: '#project' },
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
    title: 'Tech Partners',
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
      const el = document.getElementById(href.slice(1))
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <footer className="relative border-t border-white/4 bg-black">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-linear-to-r from-transparent via-violet-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 pt-12 md:pt-16 pb-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 pb-10 md:pb-12 border-b border-white/4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-2 md:col-span-1"
          >
            <h3 className="text-xl font-bold text-white">
              XENO<span className="text-cyan-400">KARMA</span>
            </h3>
            <p className="mt-3 text-sm text-zinc-500 leading-relaxed max-w-xs">
              Building modern digital experiences with passion and precision. Open for collaborations and new opportunities.
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
              <h4 className="text-xs text-zinc-600 tracking-widest uppercase mb-3 md:mb-4">{group.title}</h4>
              <ul className="space-y-2 md:space-y-3">
                {group.links.map(link => (
                  <li key={link.label}>
                    {link.href.startsWith('#') ? (
                      <a
                        href={link.href}
                        onClick={(e) => handleClick(e, link.href)}
                        className="block py-1 text-sm text-zinc-500 hover:text-violet-300 transition-colors duration-300"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block py-1 text-sm text-zinc-500 hover:text-violet-300 transition-colors duration-300"
                      >
                        {link.label}
                      </a>
                    )}
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
          <p className="text-xs text-zinc-700">
            &copy; {new Date().getFullYear()} Andika Purnama | Xenokarma. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1.5">
            <span className="text-[10px] text-zinc-700">Built with</span>
            {['opencode', 'antigravity', 'ChatGPT'].map((name) => (
              <span key={name} className="px-2 py-0.5 bg-white/3 border border-white/6 rounded text-[10px] text-zinc-600 hover:text-violet-400 hover:border-violet-500/30 transition-colors duration-300">
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
