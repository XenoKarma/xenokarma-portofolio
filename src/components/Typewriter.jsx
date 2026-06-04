import { motion } from 'motion/react'
import { useEffect, useState } from 'react'

export default function Typewriter({ text, speed = 30, className = '' }) {
  const [displayed, setDisplayed] = useState('')
  const [complete, setComplete] = useState(false)

  useEffect(() => {
    setDisplayed('')
    setComplete(false)
    let i = 0
    const timer = setInterval(() => {
      i++
      setDisplayed(text.slice(0, i))
      if (i >= text.length) {
        clearInterval(timer)
        setComplete(true)
      }
    }, speed)
    return () => clearInterval(timer)
  }, [text, speed])

  return (
    <span className={className}>
      {displayed}
      {!complete && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
          className="inline-block ml-0.5 text-zinc-500"
        >
          |
        </motion.span>
      )}
    </span>
  )
}
