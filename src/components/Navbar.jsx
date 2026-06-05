import { motion, AnimatePresence } from 'motion/react'
import { useState, useEffect, useRef } from 'react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Tech Stack', href: '#tech-stack' },
  { label: 'Experience', href: '#experience' },
  { label: 'Project', href: '#project' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      const sections = links.map(l => l.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.getBoundingClientRect().top <= 200) {
          setActive(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [open])

  const handleClick = (e, href) => {
    e.preventDefault()
    const id = href.slice(1)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setOpen(false)
  }

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2.5rem)] max-w-3xl">
      <div className="relative">
        <div className="absolute -inset-1 bg-linear-to-r from-violet-500/20 via-fuchsia-500/10 to-violet-500/20 rounded-full blur-lg opacity-60" />

        <div className="relative flex items-center justify-between bg-white/4 backdrop-blur-xl border border-white/8 rounded-full px-5 md:px-8 h-14 transition-colors">
          <a href="#home" onClick={(e) => handleClick(e, '#home')} className="text-base font-semibold text-white tracking-tight">
            XENO<span className="text-cyan-400">KARMA</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {links.map(l => {
              const isActive = active === l.href.slice(1)
              return (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => handleClick(e, l.href)}
                  className="relative px-4 py-2 text-sm font-medium transition-colors group"
                >
                  <span
                    className={`relative z-10 transition-colors duration-300 ${
                      isActive ? 'text-white' : 'text-zinc-500 group-hover:text-violet-300'
                    }`}
                  >
                    {l.label}
                  </span>

                  <span className="absolute bottom-1 left-4 right-4 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-300 bg-linear-to-r from-violet-400/80 to-fuchsia-400/80 rounded-full" />

                  {isActive && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute inset-0 bg-white/6 rounded-full border border-white/6"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              )
            })}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden relative z-10 w-9 h-9 flex flex-col items-center justify-center gap-1 rounded-lg active:bg-white/5 transition-colors"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <motion.span
              animate={open ? { rotate: 45, y: 4.5 } : { rotate: 0, y: 0 }}
              className="w-5 h-px bg-zinc-300"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="w-5 h-px bg-zinc-300"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -4.5 } : { rotate: 0, y: 0 }}
              className="w-5 h-px bg-zinc-300"
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="relative md:hidden mt-3 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-2 shadow-2xl shadow-black/40"
            >
              {links.map(l => {
                const isActive = active === l.href.slice(1)
                return (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={(e) => handleClick(e, l.href)}
                    className={`flex items-center gap-3 px-4 py-3 text-sm rounded-xl transition-all duration-200 ${
                      isActive
                        ? 'text-white bg-violet-500/10 border border-violet-500/20'
                        : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-violet-400' : 'bg-zinc-600'}`} />
                    {l.label}
                  </a>
                )
              })}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}
