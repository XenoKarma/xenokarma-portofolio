import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, animate, useMotionValue, useTransform } from 'motion/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Project from './components/Project'
import Certificate from './components/Certificate'
import Contact from './components/Contact'
import Footer from './components/Footer'
import TechStack from './components/TechStack'
import './App.css'

function LoadingScreen({ onComplete }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, v => Math.round(v))
  const progress = useTransform(count, [0, 100], [0, 1])
  const [exiting, setExiting] = useState(false)
  const doneRef = useRef(false)
  const onCompleteRef = useRef(onComplete)
  useEffect(() => {
    onCompleteRef.current = onComplete
  })

  useEffect(() => {
    const controls = animate(count, 100, {
      duration: 2.2,
      ease: [0.25, 0.1, 0.25, 1],
      onComplete: () => {
        if (doneRef.current) return
        doneRef.current = true
        setExiting(true)
        setTimeout(() => onCompleteRef.current(), 500)
      },
    })
    return () => controls.stop()
  }, [count])

  return (
    <motion.div
      className="fixed inset-0 z-100 bg-cream flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      animate={exiting ? { opacity: 0, y: -20 } : { opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <div className="text-8xl md:text-9xl font-bold text-ink tracking-tighter tabular-nums flex items-baseline">
        <motion.span>{rounded}</motion.span>
        <span className="text-4xl md:text-5xl text-accent-blue ml-1">%</span>
      </div>

      <div className="mt-8 w-40 h-[2px] bg-ink/10 overflow-hidden">
        <motion.div
          className="h-full bg-ink"
          style={{ scaleX: progress, transformOrigin: 'left' }}
        />
      </div>

      <p className="mt-6 text-xs text-ink-light tracking-[0.2em] uppercase">Loading</p>
    </motion.div>
  )
}

function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={loading ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <main className="relative bg-cream bg-grid-pattern min-h-screen">
          <Navbar />
          <Hero />
          <About />
          <TechStack />
          <Experience />
          <Project />
          <Certificate />
          <Contact />
          <Footer />
        </main>
      </motion.div>
    </>
  )
}

export default App
