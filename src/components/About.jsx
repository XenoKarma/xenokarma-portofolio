import { motion } from 'motion/react'

const highlights = [
  {
    title: 'Continuous Learning',
    desc: 'Always exploring new technologies and improving my development skills through hands-on projects.',
  },
  {
    title: 'Problem Solving',
    desc: 'Enjoy analyzing challenges and building practical, efficient software solutions.',
  },
  {
    title: 'Self-Driven',
    desc: 'Motivated to learn independently and continuously expand my technical expertise.',
  },
  {
    title: 'Team Collaboration',
    desc: 'Able to communicate ideas clearly and work effectively within development teams.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-14 md:py-24 px-4 md:px-6 border-b-2 border-ink">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">

          {/* Left: Heading */}
          <div className="md:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-ink-light">
                01 / About
              </span>
              <h2 className="mt-4 text-[clamp(2.5rem,5vw,4.5rem)] font-bold text-ink leading-[0.9] tracking-tighter">
                WHO
              </h2>
              <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[0.9] tracking-tighter">
                <span className="text-accent-blue">AM</span>
              </h2>
              <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold text-ink leading-[0.9] tracking-tighter">
                I?
              </h2>
            </motion.div>
          </div>

          {/* Right: Bio */}
          <div className="md:col-span-8 md:border-l-2 md:border-ink md:pl-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="space-y-5"
            >
              <p className="text-lg md:text-xl text-ink font-semibold leading-relaxed">
                Hi, I'm Andika.
              </p>

              <p className="text-sm md:text-base text-ink-light leading-[1.8]">
                A passionate Web Developer who enjoys building modern, scalable, and user-friendly web applications.
                I have experience working with{' '}
                <span className="text-accent-blue font-semibold">PHP</span>,{' '}
                <span className="text-accent-blue font-semibold">Laravel</span>,{' '}
                <span className="text-accent-blue font-semibold">JavaScript</span>,{' '}
                <span className="text-accent-blue font-semibold">React</span>,{' '}
                <span className="text-accent-blue font-semibold">TypeScript</span>,{' '}
                <span className="text-accent-blue font-semibold">MySQL</span>, and{' '}
                <span className="text-accent-blue font-semibold">Tailwind CSS</span>.
              </p>

              <p className="text-sm md:text-base text-ink-light leading-[1.8]">
                Currently, I am focused on improving my full-stack development skills by building real-world projects
                such as{' '}
                <span className="text-ink font-medium underline decoration-2 underline-offset-4">Inventory Management System</span>,{' '}
                <span className="text-ink font-medium underline decoration-2 underline-offset-4">Point of Sale</span>,{' '}
                <span className="text-ink font-medium underline decoration-2 underline-offset-4">Ticketing System</span>, and{' '}
                <span className="text-ink font-medium underline decoration-2 underline-offset-4">Alumni Information System</span>.
              </p>

              <p className="text-sm md:text-base text-ink-light leading-[1.8]">
                I enjoy learning new technologies, solving problems, and turning ideas into digital products
                that provide real value to users.
              </p>
            </motion.div>

            {/* Highlights Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {highlights.map((h, i) => (
                <div
                  key={h.title}
                  className="p-5 border-2 border-ink/10 hover:border-ink transition-colors"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] font-bold text-accent-blue">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h4 className="text-sm font-bold text-ink">{h.title}</h4>
                  </div>
                  <p className="text-xs text-ink-light leading-relaxed">{h.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
