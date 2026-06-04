import { motion } from 'motion/react'

const categories = [
  {
    name: 'Social Commerce',
    skills: ['TikTok Shop', 'Shopee Live', 'Marketplace Growth', 'Product Campaign'],
  },
  {
    name: 'Digital Marketing',
    skills: ['Meta Ads', 'TikTok Ads', 'Content Strategy', 'Engagement Strategy'],
  },
  {
    name: 'Content Production',
    skills: ['Canva', 'CapCut', 'Content Planning'],
  },
  {
    name: 'Communication',
    skills: ['Team Leadership', 'Client Communication', 'Live Streaming', 'Customer Engagement'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 md:py-32 px-4 bg-[#030712]/60">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-xs text-zinc-500 tracking-widest uppercase">Expertise</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">Creative Capability</h2>
          <div className="mt-4 mx-auto w-12 h-0.5 bg-violet-500/50" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="group relative bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 hover:bg-white/[0.06] hover:border-violet-500/20 transition-all"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-violet-500/5 rounded-bl-[4rem] rounded-tr-2xl group-hover:bg-violet-500/10 transition-colors" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
                    <span className="text-xs font-bold text-violet-400">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">{cat.name}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3.5 py-1.5 bg-white/[0.04] border border-white/[0.06] rounded-lg text-xs text-zinc-400 group-hover:border-white/[0.1] group-hover:text-zinc-300 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
