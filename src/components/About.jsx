import { motion } from 'motion/react'
import ScrollReveal from './ScrollReveal'
import reactIcon from '../assets/icon/reactjs.jpg'
import tsIcon from '../assets/icon/Typescript.jpg'
import tailwindIcon from '../assets/icon/tailwindcss.jpg'
import shadcnIcon from '../assets/icon/shadcn.png'
import laravelIcon from '../assets/icon/laravel.jpg'
import phpIcon from '../assets/icon/php.jpg'
import jsIcon from '../assets/icon/js.jpg'
import mysqlIcon from '../assets/icon/mysql.jpg'
import gitIcon from '../assets/icon/git.jpg'
import githubIcon from '../assets/icon/github.jpg'
import vscodeIcon from '../assets/icon/vscode.jpg'
import antigravityIcon from '../assets/icon/antigravity.jpg'
import opencodeIcon from '../assets/icon/opencode.png'
import ReactBitsIcon from '../assets/icon/reactbits.png'
import openAiIcon from '../assets/icon/openai.jpg'
import htmlIcon from '../assets/icon/html.png'
import cssIcon from '../assets/icon/css.png'

const techStack = [
  'PHP', 'Laravel', 'JavaScript', 'React', 'TypeScript', 'MySQL', 'Tailwind CSS',
]

const projects = [
  'Inventory Management System',
  'Point of Sale (POS)',
  'Ticketing System',
  'Alumni Information System',
]

const iconMap = {
  React: reactIcon,
  TypeScript: tsIcon,
  TailwindCSS: tailwindIcon,
  ShadcnUI: shadcnIcon,
  Laravel: laravelIcon,
  PHP: phpIcon,
  JavaScript: jsIcon,
  MySQL: mysqlIcon,
  Git: gitIcon,
  GitHub: githubIcon,
  VSCode: vscodeIcon,
  Antigravity: antigravityIcon,
  OpenCode: opencodeIcon,
  ReactBits: ReactBitsIcon,
  OpenAI: openAiIcon,
  HTML: htmlIcon,
  CSS: cssIcon,
}

const techItems = [
  { name: 'React', color: '#61DAFB' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'TailwindCSS', color: '#06B6D4' },
  { name: 'ShadcnUI', color: '#FFFFFF' },
  { name: 'Laravel', color: '#FF2D20' },
  { name: 'PHP', color: '#777BB4' },
  { name: 'JavaScript', color: '#F7DF1E' },
  { name: 'MySQL', color: '#4479A1' },
  { name: 'Git', color: '#F05032' },
  { name: 'GitHub', color: '#FFFFFF' },
  { name: 'VSCode', color: '#007ACC' },
  { name: 'Antigravity', color: '#A855F7' },
  { name: 'OpenCode', color: '#22D3EE' },
  { name: 'ReactBits', color: '#d303fc' },
  { name: 'OpenAI', color: '#10A37F' },
  { name: 'HTML', color: '#E34F26' },
  { name: 'CSS', color: '#1572B6' },
]

function TechCard({ name, color }) {
  const icon = iconMap[name]

  return (
    <div className="group flex items-center gap-3 px-5 py-3 rounded-xl border border-white/6 bg-white/3 hover:bg-white/8 hover:border-white/12 transition-all duration-300 shrink-0">
      {icon ? (
        <img src={icon} alt={name} className="w-8 h-8 rounded-lg object-cover shrink-0" />
      ) : (
        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold shrink-0" style={{ backgroundColor: `${color}20`, color }}>
          {name[0]}{name[1]?.toLowerCase() || ''}
        </div>
      )}
      <span className="text-sm text-zinc-300 whitespace-nowrap font-medium">{name}</span>
    </div>
  )
}

function MarqueeRow({ items, direction = 'left' }) {
  const duplicated = [...items, ...items]

  return (
    <div className="relative overflow-hidden mask-fade">
      <motion.div
        className="flex gap-4 w-max"
        animate={{
          x: direction === 'left' ? [0, -50 * items.length] : [-50 * items.length, 0],
        }}
        transition={{ duration: 22, repeat: Infinity, repeatType: 'loop', ease: 'linear' }}
      >
        {duplicated.map((item, i) => (
          <TechCard key={`${item.name}-${i}`} {...item} />
        ))}
      </motion.div>
    </div>
  )
}

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
              className="px-3 py-1.5 bg-white/4 border border-white/8 rounded-full text-xs text-zinc-400 hover:bg-cyan-500/10 hover:text-cyan-300 hover:border-cyan-400/30 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        <div className="mt-16 md:mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h3 className="text-sm text-zinc-400 font-medium">Technologies I Work With</h3>
            <div className="mt-2 mx-auto w-8 h-0.5 bg-violet-500/40" />
          </motion.div>
          <div className="space-y-4">
            <MarqueeRow items={techItems} direction="left" />
            <MarqueeRow items={[...techItems].reverse()} direction="right" />
          </div>
        </div>
      </div>

      <style>{`
        .mask-fade::before,
        .mask-fade::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          width: 80px;
          z-index: 2;
          pointer-events: none;
        }
        .mask-fade::before {
          left: 0;
          background: linear-gradient(to right, #030712, transparent);
        }
        .mask-fade::after {
          right: 0;
          background: linear-gradient(to left, #030712, transparent);
        }
      `}</style>
    </section>
  )
}
