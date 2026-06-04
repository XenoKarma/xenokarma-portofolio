import { motion } from 'motion/react'
import ScrollReveal from './ScrollReveal'

const techStack = [
  'PHP', 'Laravel', 'React', 'TypeScript', 'MySQL', 'Tailwind CSS',
]

const projects = [
  'Inventory Management System',
  'Point of Sale (POS)',
  'Ticketing System',
  'Alumni Information System',
]

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-32 px-4 bg-[#030712]/60">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-xs text-zinc-500 tracking-widest uppercase">About Me</span>
          <ScrollReveal
            enableBlur={true}
            baseOpacity={0}
            baseRotation={2}
            blurStrength={6}
            containerClassName="my-0"
            textClassName="!text-3xl !md:text-4xl !font-bold !text-white mt-3"
            rotationEnd="center center"
            wordAnimationEnd="center center"
          >
            Get to Know Me
          </ScrollReveal>
          <div className="mt-4 mx-auto w-12 h-0.5 bg-violet-500/50" />
        </div>

        <div className="space-y-5">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0, duration: 0.6 }}
            className="text-lg md:text-xl text-white font-semibold leading-[1.8]"
          >
            Hi, I'm Andika.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-sm md:text-base text-zinc-400 leading-[1.8]"
          >
            A passionate Web Developer who enjoys building modern, scalable, and user-friendly web applications.
            I have experience working with{' '}
            {techStack.map((tech, i) => (
              <span key={tech}>
                <span className="text-cyan-400 font-medium">{tech}</span>
                {i < techStack.length - 1 ? ', ' : ''}
              </span>
            ))}
            .
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-sm md:text-base text-zinc-400 leading-[1.8]"
          >
            Currently, I am focused on improving my full-stack development skills by building real-world projects
            such as{' '}
            {projects.map((proj, i) => (
              <span key={proj}>
                <span className="text-zinc-300 font-medium">{proj}</span>
                {i < projects.length - 1 ? ', ' : ''}
              </span>
            ))}
            .
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="text-sm md:text-base text-zinc-400 leading-[1.8]"
          >
            I enjoy learning new technologies, solving problems, and turning ideas into digital products
            that provide real value to users.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-10 flex flex-wrap gap-2 justify-center"
        >
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 bg-white/[0.04] border border-white/[0.08] rounded-full text-xs text-zinc-400 hover:bg-cyan-500/10 hover:text-cyan-300 hover:border-cyan-400/30 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
