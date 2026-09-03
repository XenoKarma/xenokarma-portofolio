import { motion, AnimatePresence } from 'motion/react'
import { useState, useEffect, useRef } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#techstack' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#project' },
  { label: 'Certificates', href: '#certificate' },
]

export default function Navbar() {
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)
  const scrollLocked = useRef(false)

  useEffect(() => {
    const onScroll = () => {
      if (scrollLocked.current) return
      const sections = [...links.map(l => l.href.slice(1)), 'contact']
      let current = sections[0] || 'home'
      for (let i = 0; i < sections.length; i++) {
        const el = document.getElementById(sections[i])
        if (el && el.getBoundingClientRect().top <= 120) {
          current = sections[i]
        }
      }
      setActive(current)
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
      setActive(id)
      scrollLocked.current = true
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.setTimeout(() => {
        scrollLocked.current = false
        const rect = el.getBoundingClientRect()
        if (rect.top >= -1 && rect.top <= 140) {
          setActive(id)
        }
      }, 900)
    }
    setOpen(false)
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-sm border-b-2 border-ink" style={{ paddingTop: 'env(safe-area-inset-top)' }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-5 md:px-8">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
              setOpen(false)
            }}
            className="text-lg font-bold text-ink tracking-tight"
          >
            XENO<span className="text-accent-blue">KARMA</span>
          </a>

          <div className="hidden md:flex items-center">
            {links.map(l => {
              const isActive = active === l.href.slice(1)
              return (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => handleClick(e, l.href)}
                  className={`px-4 py-2 text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-ink text-cream'
                      : 'text-ink-light hover:bg-ink hover:text-cream'
                  }`}
                >
                  {l.label}
                </a>
              )
            })}
          </div>

          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => handleClick(e, '#contact')}
              className="inline-flex items-center px-5 py-2 bg-ink text-cream text-sm font-semibold border-2 border-ink hover:bg-accent-blue hover:border-accent-blue transition-colors"
            >
              Contact
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 border-2 border-ink"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <motion.span
              animate={open ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
              className="w-5 h-[2px] bg-ink block"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="w-5 h-[2px] bg-ink block"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
              className="w-5 h-[2px] bg-ink block"
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-ink/10 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="fixed left-0 right-0 z-50 bg-cream border-b-2 border-ink md:hidden overflow-y-auto"
              style={{ top: 'calc(4rem + env(safe-area-inset-top))', maxHeight: 'calc(100dvh - 4rem - env(safe-area-inset-top))' }}
            >
              <div className="flex flex-col">
                {links.map(l => {
                  const isActive = active === l.href.slice(1)
                  return (
                    <a
                      key={l.href}
                      href={l.href}
                      onClick={(e) => handleClick(e, l.href)}
                      className={`px-6 py-4 text-sm font-semibold border-b border-ink/10 transition-colors ${
                        isActive
                          ? 'bg-ink text-cream'
                          : 'text-ink-light hover:bg-ink hover:text-cream'
                      }`}
                    >
                      {l.label}
                    </a>
                  )
                })}
                <a
                  href="#contact"
                  onClick={(e) => handleClick(e, '#contact')}
                  className="mx-4 my-4 px-5 py-3 bg-ink text-cream text-sm font-semibold text-center border-2 border-ink"
                >
                  Contact
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
