import { motion } from 'motion/react'

const cards = [
  {
    title: 'Strategy First',
    desc: 'Every campaign starts with understanding the audience, platform behavior, and brand positioning.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
      </svg>
    ),
  },
  {
    title: 'Content That Connects',
    desc: 'Creating engaging content that builds interaction, trust, and audience loyalty across social platforms.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3l9 7-9 7-9-7 9-7z" />
        <path d="M3 12l9 7 9-7" />
        <path d="M3 17l9 7 9-7" />
      </svg>
    ),
  },
  {
    title: 'Social Commerce Focus',
    desc: 'Optimizing marketplace and live commerce strategies to improve visibility, engagement, and conversions.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 01-8 0" />
      </svg>
    ),
  },
  {
    title: 'Growth & Optimization',
    desc: 'Tracking analytics, evaluating performance, and continuously improving campaign results.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
]

export default function Approach() {
  return (
    <section id="approach" className="relative py-20 md:py-32 px-4 bg-[#030712]/60">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-xs text-zinc-500 tracking-widest uppercase">Approach</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">My Approach</h2>
          <p className="mt-4 text-sm md:text-base text-zinc-400 max-w-lg mx-auto leading-relaxed">
            Helping brands grow through strategic content, social engagement, and marketplace optimization.
          </p>
          <div className="mt-4 mx-auto w-12 h-0.5 bg-violet-500/50" />
        </motion.div>

        <div className="grid md:grid-cols-4 gap-4 md:gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="group relative bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-6 hover:bg-white/[0.08] hover:border-violet-500/30 transition-all"
            >
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400 group-hover:bg-violet-500/20 group-hover:shadow-lg group-hover:shadow-violet-500/20 transition-all">
                  {card.icon}
                </div>

                <h3 className="mt-5 text-base font-semibold text-white group-hover:text-violet-200 transition-colors">
                  {card.title}
                </h3>

                <p className="mt-3 text-xs text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
