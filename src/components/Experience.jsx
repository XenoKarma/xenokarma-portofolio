import { motion } from 'motion/react'

const experiences = [
  {
    title: 'IT Support',
    company: 'ISTEK Widuri',
    date: 'Nov 2023 - Okt 2025',
    side: 'right',
  },
  {
    title: 'Part Timer - Binus University Syahdan Campus',
    company: 'Bina Nusantara University',
    date: 'Aug 2022 - Jan 2023',
    side: 'left',
  },
    {
    title: 'Part Timer - Binus University JWC',
    company: 'Bina Nusantara University',
    date: 'Apr 2025 - Des 2025',
    side: 'right',
  },
  {
    title: 'Trainee Technical Support',
    company: 'PT. Kampoeng Gadget Multi Media',
    date: 'Apr 2026 - Mei 2026',
    side: 'left',
  }
]

const ArrowIcon = () => (
  <svg className="w-5 h-5 text-violet-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 md:py-32 px-4 bg-[#030712]/60">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <span className="text-xs text-zinc-500 tracking-widest uppercase">Experience</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">Work Journey</h2>
          <div className="mt-4 mx-auto w-12 h-0.5 bg-violet-500/50" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-violet-500/20 to-transparent md:-translate-x-1/2" />

          <div className="space-y-8 md:space-y-0">
            {experiences.map((item, i) => (
              <div key={i} className="relative md:flex md:items-start">
                <div className="absolute left-[7px] md:left-1/2 z-10 md:-translate-x-1/2">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2, type: 'spring', stiffness: 200 }}
                    className="w-[17px] h-[17px] rounded-full bg-violet-500 border-[3px] border-[#030712] shadow-lg shadow-violet-500/30"
                  />
                </div>

                {item.side === 'right' ? (
                  <>
                    <div className="hidden md:block w-1/2 pr-12" />
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.2, duration: 0.5 }}
                      className="md:w-1/2 md:pl-12 pl-10"
                    >
                      <div className="relative bg-white/[0.03] border border-white/[0.06] rounded-xl p-5 md:p-6 hover:bg-white/[0.06] transition-colors">
                        <span className="text-xs text-violet-400/60 font-mono">{String(i + 1).padStart(2, '0')}</span>
                        <h3 className="mt-2 text-base md:text-lg font-semibold text-white">{item.title}</h3>
                        <p className="mt-1 text-sm text-zinc-400">{item.company}</p>
                        <p className="mt-2 text-xs text-zinc-600">{item.date}</p>
                      </div>
                      {i < experiences.length - 1 && (
                        <div className="hidden md:flex justify-center py-4">
                          <ArrowIcon />
                        </div>
                      )}
                    </motion.div>
                  </>
                ) : (
                  <>
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.2, duration: 0.5 }}
                      className="md:w-1/2 md:pr-12 md:text-right pl-10 md:pl-0"
                    >
                      <div className="relative bg-white/[0.03] border border-white/[0.06] rounded-xl p-5 md:p-6 hover:bg-white/[0.06] transition-colors">
                        <span className="text-xs text-violet-400/60 font-mono">{String(i + 1).padStart(2, '0')}</span>
                        <h3 className="mt-2 text-base md:text-lg font-semibold text-white">{item.title}</h3>
                        <p className="mt-1 text-sm text-zinc-400">{item.company}</p>
                        <p className="mt-2 text-xs text-zinc-600">{item.date}</p>
                      </div>
                      {i < experiences.length - 1 && (
                        <div className="hidden md:flex justify-center py-4">
                          <ArrowIcon />
                        </div>
                      )}
                    </motion.div>
                    <div className="hidden md:block w-1/2 pl-12" />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
