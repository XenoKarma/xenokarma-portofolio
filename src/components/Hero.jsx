import { motion } from 'motion/react'
import BlurText from './BlurText'
import TextType from './TextType'

const floatingOrbs = [
  { size: 300, color: 'rgba(99,102,241,0.12)', x: '10%', y: '20%', delay: 0, duration: 8 },
  { size: 200, color: 'rgba(168,85,247,0.1)', x: '80%', y: '15%', delay: 2, duration: 10 },
  { size: 250, color: 'rgba(34,211,238,0.08)', x: '70%', y: '60%', delay: 1, duration: 7 },
  { size: 180, color: 'rgba(236,72,153,0.08)', x: '20%', y: '70%', delay: 3, duration: 9 },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Floating Orbs */}
      {floatingOrbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl pointer-events-none"
          style={{
            width: orb.size,
            height: orb.size,
            background: orb.color,
            left: orb.x,
            top: orb.y,
          }}
          animate={{
            y: [0, -30, 0, 20, 0],
            x: [0, 15, -10, 5, 0],
            scale: [1, 1.1, 0.95, 1.05, 1],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div
        className="
          relative z-10
          flex flex-col md:flex-row
          items-center
          gap-6 md:gap-12
          px-6 lg:px-8
          max-w-6xl
          mx-auto
        "
      >
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.9 }}
          className="shrink-0"
        >
          <div className="relative">
            {/* Animated ring */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, #6366f1, #a855f7, #ec4899, #22d3ee, #6366f1)',
                padding: 3,
                WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px))',
                mask: 'radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px))',
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            />
            {/* Glow behind */}
            <motion.div
              className="absolute inset-0 rounded-full blur-xl"
              style={{
                background: 'conic-gradient(from 0deg, #6366f1, #a855f7, #ec4899, #22d3ee, #6366f1)',
                opacity: 0.2,
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            />
            <div
              className="
                relative
                w-40 h-40
                sm:w-52 sm:h-52
                md:w-60 md:h-60
                lg:w-72 lg:h-72
                rounded-full
                overflow-hidden
                border border-white/10
              "
            >
              <img
                src="/profile/andika.jpg"
                alt="Andika Purnama"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <div className="text-center md:text-left max-w-2xl">
          <BlurText
            text="Andika Purnama"
            delay={100}
            animateBy="words"
            direction="top"
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              font-bold
              text-white
              tracking-tight
              leading-[1.1]
              justify-center
              md:justify-start
            "
          />

          <div className="flex flex-wrap items-center gap-2 mt-2 justify-center md:justify-start">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-cyan-300 bg-cyan-500/10 rounded-full border border-cyan-400/20">
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-cyan-400 opacity-75 animate-ping" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-cyan-400" />
              </span>
              XENOKARMA
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="
              mt-4
              text-base
              sm:text-lg
              md:text-xl
              text-zinc-300
              max-w-xl
              min-h-10
            "
          >
            <TextType
              text={[
                'Junior Web Developer',
                'Frontend Developer',
                'Backend Developer',
                'Fullstack Developer',
                'IT Support',
              ]}
              typingSpeed={60}
              deletingSpeed={40}
              pauseDuration={2000}
              loop={true}
              showCursor={true}
              cursorCharacter="|"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="
              mt-4
              text-sm
              sm:text-base
              text-zinc-400
              max-w-md
              leading-relaxed
              mx-auto md:mx-0
            "
          >
            Building digital experiences with modern technologies,
            clean code, and creative design.
          </motion.p>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="flex items-center gap-4 mt-5 justify-center md:justify-start"
          >
            {[
              ['GitHub', 'https://github.com'],
              ['LinkedIn', 'https://linkedin.com'],
              ['Twitter', 'https://x.com'],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-cyan-400 transition-colors duration-300"
              >
                <span className="sr-only">{label}</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  {label === 'GitHub' && (
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  )}
                  {label === 'LinkedIn' && (
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  )}
                  {label === 'Twitter' && (
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  )}
                </svg>
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="
              mt-6
              flex
              flex-wrap
              gap-3
              justify-center
              md:justify-start
            "
          >
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault()
                document
                  .getElementById('about')
                  ?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  })
              }}
              className="
                group relative
                px-7 py-3
                bg-cyan-400
                text-slate-950
                rounded-full
                text-sm
                font-semibold
                overflow-hidden
                transition-all
                duration-300
                hover:scale-105
                active:scale-95
              "
            >
              <span className="relative z-10">Scroll Down</span>
              <span className="absolute inset-0 bg-linear-to-r from-cyan-300 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document
                  .getElementById('contact')
                  ?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  })
              }}
              className="
                group relative
                px-7 py-3
                border border-cyan-400/30
                text-white
                rounded-full
                text-sm
                font-medium
                transition-all
                duration-300
                hover:scale-105
                active:scale-95
                hover:bg-cyan-500/10
                hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
              "
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="
            w-6 h-10
            border-2
            border-cyan-400/30
            rounded-full
            flex
            justify-center
          "
        >
          <motion.div
            animate={{
              opacity: [1, 0.3, 1],
              y: [0, 6, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="
              w-1.5 h-3
              bg-cyan-400
              rounded-full
              mt-2
            "
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
