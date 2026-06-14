import { motion } from 'motion/react'
import dummy1 from '../assets/project/dummy1.png'
import dummy2 from '../assets/project/dummy2.png'
import dummy3 from '../assets/project/dummy3.png'
import fullstack1 from '../assets/project/fullstack1.png'
import fullstack2 from '../assets/project/fullstack2.png'
import fullstack3 from '../assets/project/fullstack3.png'
import comingSoon from '../assets/project/coming-soon.png'


const projects = {
  frontend: [
    {
      title: 'Midnight Waves - My Musik App',
      desc: 'A Spotify-inspired music streaming platform featuring playlist management, album discovery, responsive layouts, and smooth interactive animations.',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Shadcn UI', 'Framer Motion'],
      link: 'https://midnight-waves-my-musik-app.vercel.app/',
      image: dummy1,
    },
    {
      title: 'Crypto Dashboard - Learn API',
      desc: 'A modern cryptocurrency dashboard featuring real-time market tracking, trending assets, and dynamic data visualization powered by external APIs.',
      tech: ['ReactJS', 'Vite', 'Shadcn UI', 'Chart.js', 'Tailwind CSS', 'REST API'],
      link: 'https://crypto-dashboard-v1-pxsh.vercel.app/',
      image: dummy2,
    },
    {
      title: 'Landing Page - Le Mans 24H',
      desc: 'A modern product landing page crafted with responsive design, interactive elements, and clean visual storytelling to deliver an engaging user experience.',
      tech: ['Next.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS', 'Shadcn UI'],
      link: 'https://lemans-landingpage.vercel.app/',
      image: dummy3,
    },
  ],
  fullstack: [
    {
      title: 'Sistem Pakar Diagnosa Printer',
      desc: 'Project Learning: A printer diagnostic expert system that helps users identify hardware and software issues through structured consultations and automated solution recommendations.',
      tech: ['Laravel', 'Blade', 'MySQL', 'Bootstrap'],
      link: null,
      image: fullstack1,
    },
    {
      title: 'CashFlow - Personal Finance Management System',
      desc: 'Project Learning: Building this project helped me understand more about API design, authentication, and structuring a fullstack application.',
      tech: ['Laravel', 'ReactJS + Vite', 'MySQL' , 'Tailwind CSS', 'Shadcn UI', 'Chart.js'],
      link: null,
      image: fullstack2,
    },
    {
      title: 'TickTrack',
      desc: 'Project Learning: A full-stack help desk application featuring ticket creation, status tracking, user authentication, and API-driven communication between frontend and backend services.',
      tech: ['Laravel', 'Vue.js', 'MySQL', 'Chart.js', 'Tailwind CSS'],
      link: null,
      image: fullstack3,
    },
  ],
  comingsoon: [
    {
      title: 'IT Asset Management System',
      desc: 'Learn Project: A web-based asset management system designed to help educational institutions track, monitor, and manage IT equipment such as computers, laptops, printers, and networking devices. Features include asset registration, maintenance tracking, inventory monitoring, and reporting dashboards.',
      tech: ['Laravel', 'Reactjs', 'MySQL', 'Tailwind CSS', 'Shadcn UI', 'REST API'],
      link: null,
      image: comingSoon,
    },
    {
      title: 'Alumni Information Management System',
      desc: 'my tesis: re build, A web-based alumni management platform that enables institutions to collect, manage, and analyze alumni data efficiently. The system includes profile management, graduate tracking, questionnaire forms, and administrative reporting features.',
      tech: ['Laravel', 'Blade', 'MySQL', 'BootStrap', 'Sweetalert2'],
      link: null,
      image: comingSoon,
    },
    {
      title: 'StockFlow - POS & Inventory Management',
      desc: 'Learn Project: A modern inventory management and point-of-sale (POS) platform built for retail stores and small businesses. Features include product management, stock tracking, sales transactions, purchase orders, customer management, and real-time business reporting.',
      tech: ['Laravel', 'Reactjs', 'MySQL', 'Tailwind CSS', 'Shadcn UI', 'REST API'],
      link: null,
      image: comingSoon,
    },

  ]
}

function ProjectCard({ project, index, isFrontend }) {
  const CardWrapper = isFrontend && project.link ? 'a' : 'div'
  const wrapperProps = isFrontend && project.link
    ? { href: project.link, target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <CardWrapper
        {...wrapperProps}
        className={`group block bg-white/4 border border-white/8 rounded-2xl overflow-hidden hover:border-violet-500/30 transition-all duration-300 ${isFrontend && project.link ? 'cursor-pointer hover:-translate-y-1' : ''}`}
      >
        {/* Image */}
        <div className="aspect-video bg-linear-to-br from-violet-500/10 via-fuchsia-500/10 to-cyan-500/10 flex items-center justify-center overflow-hidden">
          {project.image ? (
            <img src={project.image} alt={project.title} className="w-full h-full object-contain" />
          ) : (
            <div className="text-center">
              <svg className="w-10 h-10 text-zinc-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.41a2.25 2.25 0 013.182 0l2.909 2.91m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              <p className="text-xs text-zinc-600 mt-2">Add image</p>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-center gap-2">
            <h3 className="text-base font-semibold text-white group-hover:text-violet-200 transition-colors">
              {project.title}
            </h3>
            {isFrontend && project.link && (
              <svg className="w-3.5 h-3.5 text-zinc-500 group-hover:text-cyan-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            )}
          </div>
          <p className="mt-2 text-xs text-zinc-500 leading-relaxed">{project.desc}</p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tech.map(t => (
              <span key={t} className="px-2 py-0.5 bg-white/5 border border-white/8 rounded-md text-[10px] text-zinc-400">
                {t}
              </span>
            ))}
          </div>
        </div>
      </CardWrapper>
    </motion.div>
  )
}

export default function Project() {
  return (
    <section id="project" className="relative py-20 md:py-32 px-4 bg-[#030712]/60">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-xs text-zinc-500 tracking-widest uppercase">Project</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">My Projects</h2>
          <p className="mt-4 text-sm md:text-base text-zinc-400 max-w-lg mx-auto leading-relaxed">
            A collection of projects I have built, from frontend to full-stack applications.
          </p>
          <div className="mt-4 mx-auto w-12 h-0.5 bg-violet-500/50" />
        </motion.div>

        {/* Frontend */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-cyan-400" />
            <h3 className="text-sm font-semibold text-zinc-300 tracking-wider uppercase">Frontend</h3>
            <div className="h-px flex-1 bg-linear-to-r from-white/8 to-transparent" />
          </div>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {projects.frontend.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} isFrontend={true} />
            ))}
          </div>
        </div>

        {/* Fullstack */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-violet-400" />
            <h3 className="text-sm font-semibold text-zinc-300 tracking-wider uppercase">Fullstack</h3>
            <div className="h-px flex-1 bg-linear-to-r from-white/8 to-transparent" />
          </div>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {projects.fullstack.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} isFrontend={false} />
            ))}
          </div>
        </div>

        {/* Coming Soon */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-violet-400" />
            <h3 className="text-sm font-semibold text-zinc-300 tracking-wider uppercase">Coming Soon</h3>
            <div className="h-px flex-1 bg-linear-to-r from-white/8 to-transparent" />
          </div>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {projects.comingsoon.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} isFrontend={false} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
