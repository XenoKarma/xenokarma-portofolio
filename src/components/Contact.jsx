import { motion } from 'motion/react'

const contacts = [
  {
    label: 'EMAIL',
    value: 'andikapurnama1803@gmail.com',
    href: 'mailto:andikapurnama1803@gmail.com',
  },
  {
    label: 'GITHUB',
    value: 'github.com/XenoKarma',
    href: 'https://github.com/XenoKarma',
  },
  {
    label: 'LINKEDIN',
    value: 'linkedin.com/in/andika-purnama',
    href: 'https://www.linkedin.com/in/andika-purnama-94315b34b',
  },
  {
    label: 'WHATSAPP',
    value: '0897-9732-548',
    href: 'https://wa.me/628979732548',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-14 md:py-24 px-4 md:px-6 border-b-2 border-ink">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">

          {/* Left: CTA Typography */}
          <div className="md:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-ink-light">
                06 / Contact
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mt-6"
            >
              <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-bold text-ink leading-[0.9] tracking-tighter">
                LET'S
              </h2>
              <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.9] tracking-tighter">
                BUILD
              </h2>
              <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.9] tracking-tighter">
                SOMETHING
              </h2>
              <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-bold text-accent-blue leading-[0.9] tracking-tighter">
                USEFUL<span className="text-ink">.</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="mailto:andikapurnama1803@gmail.com"
                className="inline-flex items-center gap-2 px-7 py-3 bg-ink text-cream text-sm font-semibold border-2 border-ink hover:bg-accent-blue hover:border-accent-blue transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                CONTACT ME
              </a>
              <a
                href="https://wa.me/628979732548"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 text-ink text-sm font-semibold border-2 border-ink hover:bg-ink hover:text-cream transition-colors"
              >
                WHATSAPP
              </a>
            </motion.div>
          </div>

          {/* Right: Contact Links */}
          <div className="md:col-span-4 md:border-l-2 md:border-ink md:pl-8">
            <div className="flex flex-col">
              {contacts.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                  className="group py-5 border-b border-ink/15 last:border-b-0 hover:pl-2 transition-all duration-300"
                >
                  <p className="text-[10px] font-bold tracking-[0.2em] text-ink-light">{item.label}</p>
                  <p className="mt-1 text-sm font-semibold text-ink group-hover:text-accent-blue transition-colors">
                    {item.value}
                  </p>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex items-center gap-2"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-lime opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent-lime" />
              </span>
              <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-ink-light">
                Available for freelance
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
