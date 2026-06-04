import { motion } from 'motion/react'

const contacts = [
  {
    label: 'Email',
    value: 'witnestysarumaha@gmail.com',
    href: 'mailto:witnestysarumaha@gmail.com',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 4l-10 8L2 4" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    value: '0858-9171-3615',
    href: 'https://wa.me/6285891713615',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    value: '@witnesty184',
    href: 'https://www.instagram.com/witnesty184?igsh=MW5iZGxkNmNkcHZjcw==',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'Fresh Krist Wit Nesty Sarumaha',
    href: 'https://www.linkedin.com/in/fresh-krist-wit-nesty-sarumaha-b823b124b/',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
]

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 md:py-32 px-4 bg-[#030712]/60">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-12"
        >
          <span className="text-xs text-zinc-500 tracking-widest uppercase">Contact</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">Let&apos;s Collaborate Together</h2>
          <p className="mt-4 text-sm md:text-base text-zinc-400 max-w-lg mx-auto leading-relaxed">
            Open for collaboration, creative projects, digital marketing opportunities, and brand partnerships.
          </p>
          <div className="mt-4 mx-auto w-12 h-0.5 bg-violet-500/50" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 md:p-8 divide-y divide-white/[0.04]"
        >
          {contacts.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }}
              className="flex items-center gap-4 py-4 first:pt-0 last:pb-0 group hover:bg-white/[0.02] -mx-2 px-2 rounded-lg transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-400 group-hover:bg-violet-500/20 transition-colors shrink-0">
                {item.icon}
              </div>
              <div className="min-w-0">
                <p className="text-xs text-zinc-600">{item.label}</p>
                <p className="text-sm text-zinc-300 group-hover:text-white transition-colors truncate">
                  {item.value}
                </p>
              </div>
              <svg
                className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400 ml-auto shrink-0 transition-colors"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M7 17l9-9M7 7h10v10" />
              </svg>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
