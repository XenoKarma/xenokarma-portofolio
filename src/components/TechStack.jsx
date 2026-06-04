import { motion } from 'motion/react'
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
        <img
          src={icon}
          alt={name}
          className="w-8 h-8 rounded-lg object-cover shrink-0"
        />
      ) : (
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold shrink-0"
          style={{ backgroundColor: `${color}20`, color }}
        >
          {name[0]}{name[1]?.toLowerCase() || ''}
        </div>
      )}
      <span className="text-sm text-zinc-300 whitespace-nowrap font-medium">{name}</span>
    </div>
  )
}

function MarqueeRow({ items, direction = 'left'}) {
  const duplicated = [...items, ...items]

  return (
    <div className="relative overflow-hidden mask-fade">
      <motion.div
        className="flex gap-4 w-max"
        animate={{
          x: direction === 'left' ? [0, -50 * items.length] : [-50 * items.length, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
        }}
      >
        {duplicated.map((item, i) => (
          <TechCard key={`${item.name}-${i}`} {...item} />
        ))}
      </motion.div>
    </div>
  )
}

export default function TechStack() {
  return (
    <section id="tech-stack" className="relative py-20 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs text-zinc-500 tracking-widest uppercase">Tech Stack</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
            My Tech Stack
          </h2>
          <p className="mt-3 text-sm text-zinc-400 max-w-md mx-auto">
            Technologies I'm currently working with
          </p>
          <div className="mt-4 mx-auto w-12 h-0.5 bg-violet-500/50" />
        </div>

        <div className="space-y-6">
          <MarqueeRow items={techItems} direction="left" />
          <MarqueeRow items={[...techItems].reverse()} direction="right"/>
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
