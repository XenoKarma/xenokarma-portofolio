import { motion } from 'motion/react'
import dummy1 from '../assets/project/dummy1.png'
import dummy2 from '../assets/project/dummy2.png'
import dummy3 from '../assets/project/dummy3.png'
import fullstack1 from '../assets/project/fullstack1.png'
import fullstack2 from '../assets/project/fullstack2.png'
import fullstack3 from '../assets/project/fullstack3.png'
import comingSoon from '../assets/project/coming-soon.png'

const featuredProject = {
  title: 'Midnight Waves — My Musik App',
  desc: 'A Spotify-inspired music streaming platform featuring playlist management, album discovery, responsive layouts, and smooth interactive animations.',
  tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Shadcn UI', 'Framer Motion'],
  link: 'https://midnight-waves-my-musik-app.vercel.app/',
  image: dummy1,
  number: '01',
}

const gridProjects = [
  {
    title: 'Crypto Dashboard',
    desc: 'A modern cryptocurrency dashboard featuring real-time market tracking, trending assets, and dynamic data visualization.',
    tech: ['ReactJS', 'Vite', 'Chart.js', 'Tailwind CSS', 'REST API'],
    link: 'https://crypto-dashboard-v1-pxsh.vercel.app/',
    image: dummy2,
    number: '02',
  },
  {
    title: 'Le Mans 24H Landing',
    desc: 'A modern product landing page with responsive design, interactive elements, and clean visual storytelling.',
    tech: ['Next.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
    link: 'https://lemans-landingpage.vercel.app/',
    image: dummy3,
    number: '03',
  },
  {
    title: 'CashFlow',
    desc: 'A personal finance management system with API design, authentication, and fullstack architecture.',
    tech: ['Laravel', 'ReactJS', 'MySQL', 'Chart.js'],
    image: fullstack2,
    number: '04',
  },
  {
    title: 'TickTrack',
    desc: 'A full-stack help desk application featuring ticket creation, status tracking, and API-driven communication.',
    tech: ['Laravel', 'Vue.js', 'MySQL', 'Chart.js'],
    image: fullstack3,
    number: '05',
  },
  {
    title: 'Sistem Pakar Diagnosa',
    desc: 'A printer diagnostic expert system helping users identify issues through structured consultations.',
    tech: ['Laravel', 'Blade', 'MySQL', 'Bootstrap'],
    image: fullstack1,
    number: '06',
  },
  {
    title: 'StockFlow — POS & Inventory',
    desc: 'A modern inventory management and POS platform for retail stores and small businesses.',
    tech: ['Laravel', 'ReactJS', 'MySQL', 'Tailwind CSS', 'REST API'],
    image: comingSoon,
    number: '07',
    badge: 'Coming Soon',
  },
  {
    title: 'Alumni Information System',
    desc: 'A web-based alumni management platform for profile management, graduate tracking, and reporting.',
    tech: ['Laravel', 'Blade', 'MySQL', 'Bootstrap'],
    image: comingSoon,
    number: '08',
    badge: 'Coming Soon',
  },
  {
    title: 'IT Asset Management',
    desc: 'A web-based asset management system for educational institutions to track and manage IT equipment.',
    tech: ['Laravel', 'ReactJS', 'MySQL', 'Tailwind CSS', 'REST API'],
    image: comingSoon,
    number: '09',
    badge: 'Coming Soon',
  },
]

function FeaturedCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border-2 border-ink group"
    >
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="aspect-video md:aspect-auto bg-ink/5 flex items-center justify-center overflow-hidden border-b-2 md:border-b-0 md:border-r-2 border-ink">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-6 md:p-8 flex flex-col justify-center">
            <span className="text-[10px] font-bold tracking-[0.2em] text-accent-blue">
              PROJECT {project.number}
            </span>
            <h3 className="mt-3 text-xl md:text-2xl font-bold text-ink group-hover:text-accent-blue transition-colors">
              {project.title}
            </h3>
            <p className="mt-3 text-sm text-ink-light leading-relaxed">{project.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map(t => (
                <span key={t} className="px-2 py-1 text-[10px] font-semibold tracking-wider uppercase border border-ink/15 text-ink-light">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-5">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-ink group-hover:text-accent-blue transition-colors">
                View Project
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  )
}

function ProjectCard({ project, index }) {
  const Wrapper = project.link ? 'a' : 'div'
  const wrapperProps = project.link
    ? { href: project.link, target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
    >
      <Wrapper
        {...wrapperProps}
        className={`group block border-2 border-ink/15 hover:border-ink transition-colors ${
          project.link ? 'cursor-pointer' : ''
        }`}
      >
        <div className="aspect-video bg-ink/5 flex items-center justify-center overflow-hidden border-b-2 border-ink/15">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-4 md:p-5">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold tracking-[0.2em] text-ink/30">
              {project.number}
            </span>
            {project.badge && (
              <span className="px-2 py-0.5 text-[9px] font-bold tracking-wider uppercase bg-accent-lime/20 text-accent-lime border border-accent-lime/30">
                {project.badge}
              </span>
            )}
          </div>
          <h3 className="mt-2 text-sm font-bold text-ink group-hover:text-accent-blue transition-colors">
            {project.title}
          </h3>
          <p className="mt-1.5 text-xs text-ink-light leading-relaxed line-clamp-2">{project.desc}</p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.tech.map(t => (
              <span key={t} className="px-1.5 py-0.5 text-[9px] font-semibold tracking-wider uppercase border border-ink/10 text-ink-light">
                {t}
              </span>
            ))}
          </div>
        </div>
      </Wrapper>
    </motion.div>
  )
}

export default function Project() {
  return (
    <section id="project" className="py-14 md:py-24 px-4 md:px-6 border-b-2 border-ink">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-ink-light">
            04 / Projects
          </span>
          <h2 className="mt-4 text-[clamp(2.5rem,5vw,4.5rem)] font-bold text-ink leading-[0.9] tracking-tighter">
            SELECTED
          </h2>
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[0.9] tracking-tighter">
            PROJECTS<span className="text-accent-blue">.</span>
          </h2>
        </motion.div>

        {/* Featured Project */}
        <div className="mb-6">
          <FeaturedCard project={featuredProject} />
        </div>

        {/* Grid Projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {gridProjects.map((project, i) => (
            <ProjectCard key={project.number} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
