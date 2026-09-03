import { motion } from 'motion/react'

const experiences = [
  {
    title: 'IT Support',
    company: 'ISTEK Widuri',
    date: 'Nov 2023 — Okt 2025',
  },
  {
    title: 'Part Timer — Binus University Syahdan Campus',
    company: 'Bina Nusantara University',
    date: 'Aug 2022 — Jan 2023',
  },
  {
    title: 'Part Timer — Binus University JWC',
    company: 'Bina Nusantara University',
    date: 'Apr 2025 — Des 2025',
  },
  {
    title: 'Trainee Technical Support',
    company: 'PT. Kampoeng Gadget Multi Media',
    date: 'Apr 2026 — Mei 2026',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-14 md:py-24 px-4 md:px-6 border-b-2 border-ink">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-ink-light">
            03 / Experience
          </span>
          <h2 className="mt-4 text-[clamp(2.5rem,5vw,4.5rem)] font-bold text-ink leading-[0.9] tracking-tighter">
            WORK
          </h2>
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[0.9] tracking-tighter">
            <span className="text-purple-600">JOURNEY</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="border-2 border-ink">
          {experiences.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`grid grid-cols-1 md:grid-cols-12 border-b-2 border-ink last:border-b-0 ${
                i % 2 === 0 ? '' : 'md:bg-ink/5'
              }`}
            >
              {/* Year / Index */}
              <div className="md:col-span-2 p-5 md:p-6 border-b md:border-b-0 md:border-r-2 border-ink flex items-start">
                <span className="text-2xl md:text-3xl font-bold text-purple-600 leading-tight">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Content */}
              <div className="md:col-span-7 p-5 md:p-6">
                <h3 className="text-base md:text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-1 text-sm text-ink-light">{item.company}</p>
              </div>

              {/* Date */}
              <div className="md:col-span-3 p-5 md:p-6 flex items-center md:justify-end">
                <span className="text-xs font-semibold tracking-wider uppercase text-ink-light">
                  {item.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
