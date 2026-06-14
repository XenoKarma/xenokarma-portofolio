import { motion, AnimatePresence } from 'motion/react'
import { useState, useEffect, useCallback } from 'react'
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

const highlights = [
  {
    title: 'Continuous Learning',
    desc: 'Always exploring new technologies and improving my development skills through hands-on projects.',
    icon: 'M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25',
  },
  {
    title: 'Problem Solving',
    desc: 'Enjoy analyzing challenges and building practical, efficient software solutions.',
    icon: 'M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z',
  },
  {
    title: 'Self-Driven',
    desc: 'Motivated to learn independently and continuously expand my technical expertise.',
    icon: 'M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z',
  },
  {
    title: 'Team Collaboration',
    desc: 'Able to communicate ideas clearly and work effectively within development teams.',
    icon: 'M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z',
  },
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

function Carousel({ items }) {
  const [[index, direction], setIndex] = useState([0, 0])
  const len = items.length

  const goTo = useCallback((next, dir) => {
    setIndex([((next % len) + len) % len, dir])
  }, [len])

  useEffect(() => {
    const timer = setInterval(() => goTo(index + 1, 1), 3000)
    return () => clearInterval(timer)
  }, [index, goTo])

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 120 : -120, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -120 : 120, opacity: 0 }),
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.6, duration: 0.4 }}
      className="mt-12"
    >
      <div className="flex items-center gap-2 mb-5">
        <h3 className="text-sm text-zinc-400 font-medium">Highlights</h3>
        <div className="h-px flex-1 bg-linear-to-r from-white/8 to-transparent" />
      </div>

      <div className="relative overflow-hidden rounded-xl bg-white/4 border border-white/8 min-h-40">
        <AnimatePresence mode="popLayout" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="p-5"
          >
            <div className="w-9 h-9 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-3">
              <svg className="w-4.5 h-4.5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d={items[index].icon} />
              </svg>
            </div>
            <h4 className="text-sm font-semibold text-white">{items[index].title}</h4>
            <p className="mt-1.5 text-xs text-zinc-500 leading-relaxed">{items[index].desc}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-center gap-2 mt-4">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > index ? 1 : -1)}
            className={`rounded-full transition-all duration-300 ${
              i === index ? 'w-6 h-1.5 bg-violet-400' : 'w-1.5 h-1.5 bg-white/20 hover:bg-white/40'
            }`}
          />
        ))}
      </div>
    </motion.div>
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

        <Carousel items={highlights} />

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
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}
