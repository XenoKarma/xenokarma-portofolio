import { motion } from 'motion/react'
import htmlIcon from '../assets/icon/html.png'
import cssIcon from '../assets/icon/css.png'
import jsIcon from '../assets/icon/js.jpg'
import tsIcon from '../assets/icon/Typescript.jpg'
import phpIcon from '../assets/icon/php.jpg'
import gitIcon from '../assets/icon/git.jpg'
import tailwindIcon from '../assets/icon/tailwindcss.jpg'
import laravelIcon from '../assets/icon/laravel.jpg'
import reactIcon from '../assets/icon/reactjs.jpg'
import shadcnIcon from '../assets/icon/shadcn.png'
import mysqlIcon from '../assets/icon/mysql.jpg'
import goIcon from '../assets/icon/go.jpg'
import vscodeIcon from '../assets/icon/vscode.jpg'
import githubIcon from '../assets/icon/github.jpg'
import antigravityIcon from '../assets/icon/antigravity.jpg'
import opencodeIcon from '../assets/icon/opencode.png'
import figmaIcon from '../assets/icon/figma.jpg'
import postmanIcon from '../assets/icon/postman.jpg'

const techItems = [
  { name: 'HTML', icon: htmlIcon },
  { name: 'CSS', icon: cssIcon },
  { name: 'JavaScript', icon: jsIcon },
  { name: 'TypeScript', icon: tsIcon },
  { name: 'PHP', icon: phpIcon },
  { name: 'Git', icon: gitIcon },
  { name: 'Tailwind CSS', icon: tailwindIcon },
  { name: 'Laravel', icon: laravelIcon },
  { name: 'React', icon: reactIcon },
  { name: 'Shadcn/UI', icon: shadcnIcon },
  { name: 'MySQL', icon: mysqlIcon },
  { name: 'Go Lang', icon: goIcon },
]

const tools = [
  { name: 'VSCode', icon: vscodeIcon },
  { name: 'GitHub', icon: githubIcon },
  { name: 'Figma', icon: figmaIcon },
  { name: 'Postman', icon: postmanIcon },
  { name: 'Antigravity', icon: antigravityIcon },
  { name: 'OpenCode', icon: opencodeIcon },
]

export default function TechStack() {
  return (
    <section id="techstack" className="py-14 md:py-24 px-4 md:px-6 border-b-2 border-ink bg-ink text-cream">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-cream/40">
            02 / Tech Stack
          </span>
          <h2 className="mt-4 text-[clamp(2.5rem,5vw,4.5rem)] font-bold text-cream leading-[0.9] tracking-tighter">
            TECHNOLOGIES
          </h2>
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[0.9] tracking-tighter">
            I <span className="text-cream">WORK</span>{' '}
            <span className="text-accent-blue">WITH</span>
          </h2>
        </motion.div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-0 border-2 border-cream/20">
          {techItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03, duration: 0.3 }}
              className="p-4 md:p-5 border-b border-r border-cream/10 last:border-r-0 hover:bg-cream/5 transition-colors group cursor-default flex flex-col items-start gap-3"
            >
              <div className="w-9 h-9 md:w-10 md:h-10 overflow-hidden flex items-center justify-center bg-cream rounded">
                {item.icon ? (
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <span className="text-sm md:text-base font-bold text-ink">
                    {item.name.slice(0, 1)}
                  </span>
                )}
              </div>
              <span className="text-sm md:text-base font-bold text-cream group-hover:text-accent-blue transition-colors">
                {item.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-10"
        >
          <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-cream/40 mb-4">
            Tools & Editors
          </p>
          <div className="flex flex-wrap gap-3">
            {tools.map(tool => (
              <span
                key={tool.name}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-cream/70 border border-cream/20 hover:border-accent-blue hover:text-accent-blue transition-colors"
              >
                {tool.icon ? (
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    className="w-5 h-5 object-contain"
                  />
                ) : (
                  <span className="w-5 h-5 flex items-center justify-center rounded bg-cream text-[10px] font-bold text-ink">
                    {tool.name.slice(0, 1)}
                  </span>
                )}
                {tool.name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
