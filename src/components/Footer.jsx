import { motion } from 'motion/react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Journey', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/witnesty184?igsh=MW5iZGxkNmNkcHZjcw==',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/fresh-krist-wit-nesty-sarumaha-b823b124b/',
  },
  {
    label: 'Email',
    href: 'mailto:witnestysarumaha@gmail.com',
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/6285891713615',
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
    <footer className="relative border-t border-white/[0.04] bg-[#030712]/60">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

      <div className="max-w-5xl mx-auto px-4 pt-20 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center pb-14 border-b border-white/[0.04]"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            Witnes<span className="text-violet-400">.</span>
          </h3>
          <p className="mt-3 text-sm text-zinc-500 max-w-md mx-auto leading-relaxed">
            Digital marketing specialist passionate about helping brands grow through strategic content, social engagement, and marketplace optimization.
          </p>
          <a
            href="#contact"
            onClick={(e) => handleClick(e, '#contact')}
            className="inline-block mt-6 px-6 py-2.5 bg-white/[0.04] hover:bg-violet-500/10 border border-white/[0.08] hover:border-violet-500/30 text-sm text-zinc-400 hover:text-violet-300 rounded-full transition-all"
          >
            Let&apos;s Collaborate
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-center py-10"
        >
          <p className="text-sm md:text-base text-zinc-600 italic font-light tracking-wide">
            &ldquo;Creating meaningful digital experiences<br className="hidden md:block" /> through strategy and creativity.&rdquo;
          </p>
          <div className="mt-4 mx-auto w-8 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-center gap-10 py-12"
        >
          <div className="flex items-center gap-8">
            <span className="text-xs text-zinc-600 tracking-widest uppercase hidden md:block">Navigate</span>
            <div className="flex items-center gap-6">
              {navLinks.map(l => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={(e) => handleClick(e, l.href)}
                  className="text-sm text-zinc-500 hover:text-violet-300 transition-colors duration-300"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div className="w-px h-6 bg-white/[0.06] hidden md:block" />

          <div className="flex items-center gap-6">
            <span className="text-xs text-zinc-600 tracking-widest uppercase hidden md:block">Social</span>
            {socials.map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-500 hover:text-violet-300 transition-colors duration-300"
              >
                {s.label}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center pt-8 border-t border-white/[0.04]"
        >
          <p className="text-xs text-zinc-700">
            &copy; {new Date().getFullYear()} Fresh Krist Wit Nesty Sarumaha | Xenokarma. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
