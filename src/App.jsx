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
import LiquidEther from './components/LiquidEther'
import GithubActivity from './components/GithubActivity'

function LoadingScreen({ onComplete }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, v => Math.round(v))
  const progress = useTransform(count, [0, 100], [0, 1])
  const [exiting, setExiting] = useState(false)
  const doneRef = useRef(false)

  useEffect(() => {
    const controls = animate(count, 100, {
      duration: 2.8,
      ease: [0.25, 0.1, 0.25, 1],
      onComplete: () => {
        if (doneRef.current) return
        doneRef.current = true
        setExiting(true)
        setTimeout(onComplete, 700)
      },
    })
    return () => controls.stop()
  }, [])

  return (
    <motion.div
      className="fixed inset-0 z-100 bg-[#030712] flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      animate={exiting ? { opacity: 0, scale: 1.08, filter: 'blur(10px)' } : { opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
    >
      <div className="text-8xl md:text-9xl font-bold text-white tracking-tighter tabular-nums flex items-baseline">
        <motion.span>{rounded}</motion.span>
        <span className="text-5xl md:text-6xl text-violet-500 ml-1">%</span>
      </div>

      <div className="mt-8 w-40 h-0.5px bg-white/6 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-linear-to-r from-violet-500 via-fuchsia-500 to-violet-500 rounded-full"
          style={{ scaleX: progress, transformOrigin: 'left' }}
        />
      </div>

      <p className="mt-6 text-xs text-zinc-600 tracking-[0.2em] uppercase">Preparing Experience</p>
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
        transition={{ duration: 0.8, delay: 0.15 }}
      >
        <div className="fixed inset-0 z-0 bg-[#030712]">
          <LiquidEther
            colors={['#6366f1', '#a855f7', '#ec4899']}
            resolution={0.4}
            mouseForce={15}
            cursorSize={80}
            autoSpeed={0.4}
            autoIntensity={1.8}
          />
        </div>
        <main className="relative z-10">
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Project />
          <Certificate />
          <GithubActivity />
          <Contact />
          <Footer />
        </main>
      </motion.div>
    </>
  )
}

export default App
