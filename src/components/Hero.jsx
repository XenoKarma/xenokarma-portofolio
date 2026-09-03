import { motion } from 'motion/react'
import cv from '../assets/cv/AndikaPurnama_CV_Academy.pdf'

const stats = [
  { value: '05+', label: 'PROJECTS' },
  { value: '03+', label: 'YEARS' },
  { value: '08+', label: 'TECH' },
  { value: '01', label: 'FOCUS' },
]

function StatItem({ value, label, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.8 + index * 0.15, duration: 0.5 }}
      className="py-4 md:py-5 md:border-b border-b border-ink/15 md:border-r-0 md:last:border-b-0"
    >
      <p className="text-2xl md:text-4xl font-bold text-ink tracking-tight">{value}</p>
      <p className="text-[10px] md:text-[11px] font-semibold tracking-[0.15em] text-ink-light mt-1">{label}</p>
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex flex-col border-b-2 border-ink pt-20 md:pt-24"
    >
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-12 my-auto md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0 items-center">

          {/* Left: Typography */}
          <div className="md:col-span-8 md:pr-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-block px-3 py-1 text-[10px] font-semibold tracking-[0.2em] uppercase text-ink-light border border-ink/20">
                Fullstack Developer
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h1 className="text-[clamp(2.75rem,12vw,7rem)] font-bold text-ink leading-[0.95] tracking-tighter">
                BUILD
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h1 className="text-[clamp(2.75rem,12vw,7rem)] font-bold leading-[0.95] tracking-tighter">
                <span className="text-accent-blue">BETTER</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <h1 className="text-[clamp(2.75rem,12vw,7rem)] font-bold text-ink leading-[0.95] tracking-tighter break-words">
                SOFTWARE<span className="text-ink">.</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="mt-6 max-w-md"
            >
              <p className="text-sm md:text-base text-ink-light leading-relaxed">
                I build scalable web applications with React, Laravel,
                and modern technologies. Focused on creating fast,
                responsive, and user-friendly digital experiences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="#project"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('project')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
                className="inline-flex items-center justify-center px-6 py-3 bg-ink text-cream text-sm font-semibold border-2 border-ink hover:bg-accent-blue hover:border-accent-blue transition-colors"
              >
                VIEW PROJECTS
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
                className="inline-flex items-center justify-center px-6 py-3 text-ink text-sm font-semibold border-2 border-ink hover:bg-ink hover:text-cream transition-colors"
              >
                CONTACT ME
              </a>
              <a
                href={cv}
                download="AndikaPurnama_CV_Academy.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-ink-light text-sm font-medium border-2 border-ink/20 hover:border-ink hover:text-ink transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Download CV
              </a>
            </motion.div>
          </div>

          {/* Right: Stats Panel */}
          <div className="md:col-span-4 md:border-l-2 md:border-ink md:pl-8">
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 md:flex md:flex-col md:gap-0">
              {stats.map((s, i) => (
                <StatItem key={s.label} value={s.value} label={s.label} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
