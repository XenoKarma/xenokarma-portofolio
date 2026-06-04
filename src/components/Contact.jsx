import { motion } from 'motion/react'

const contacts = [
  {
    label: 'Email',
    value: 'andikapurnama1803@gmail.com',
    href: 'mailto:andikapurnama1803@gmail.com',
    icon: 'M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75',
    color: 'from-cyan-500/20 to-cyan-600/10',
    border: 'border-cyan-500/20 group-hover:border-cyan-400/40',
    iconColor: 'text-cyan-400',
  },
  {
    label: 'WhatsApp',
    value: '0897-9732-548',
    href: 'https://wa.me/628979732548',
    icon: 'M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z',
    color: 'from-emerald-500/20 to-emerald-600/10',
    border: 'border-emerald-500/20 group-hover:border-emerald-400/40',
    iconColor: 'text-emerald-400',
  },
  {
    label: 'Instagram',
    value: '@andika_purnama1803',
    href: 'https://www.instagram.com/andika_purnama1803',
    icon: 'M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.41a2.25 2.25 0 013.182 0l2.909 2.91m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z',
    color: 'from-fuchsia-500/20 to-fuchsia-600/10',
    border: 'border-fuchsia-500/20 group-hover:border-fuchsia-400/40',
    iconColor: 'text-fuchsia-400',
  },
  {
    label: 'LinkedIn',
    value: 'Andika Purnama',
    href: 'www.linkedin.com/in/andika-purnama-94315b34b',
    icon: 'M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z',
    color: 'from-blue-500/20 to-blue-600/10',
    border: 'border-blue-500/20 group-hover:border-blue-400/40',
    iconColor: 'text-blue-400',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 md:py-32 px-4 bg-[#030712]/60 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-violet-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs text-zinc-500 tracking-widest uppercase">Contact</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white leading-tight">
              Let&apos;s create something{' '}
              <span className="bg-linear-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                amazing
              </span>
            </h2>
            <p className="mt-4 text-sm md:text-base text-zinc-400 leading-relaxed max-w-md">
              I&apos;m currently open for new projects, collaborations, and creative opportunities.
              Whether you have a project in mind or just want to say hello, I&apos;d love to hear from you.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              <span className="text-xs text-zinc-500">Available for freelance & collaboration</span>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="mailto:witnestysarumaha@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-violet-500/10 border border-violet-500/25 rounded-xl text-sm font-medium text-violet-300 hover:bg-violet-500/20 hover:text-violet-200 transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                Send Email
              </a>
              <a
                href="https://wa.me/628979732548"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/4 border border-white/8 rounded-xl text-sm font-medium text-zinc-300 hover:text-zinc-200 hover:border-zinc-600/30 transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                </svg>
                WhatsApp Me
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid gap-4"
          >
            {contacts.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }}
                className={`group flex items-center gap-4 bg-white/4 border ${item.border} rounded-2xl p-5 hover:bg-white/[0.06] transition-all duration-300`}
              >
                <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${item.color} flex items-center justify-center shrink-0`}>
                  <svg className={`w-5 h-5 ${item.iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-zinc-600">{item.label}</p>
                  <p className="text-sm text-zinc-300 group-hover:text-white transition-colors truncate font-medium">
                    {item.value}
                  </p>
                </div>
                <svg className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400 shrink-0 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
