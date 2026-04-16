'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function CinematicLoader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    let current = 0
    const target = 100
    const tick = () => {
      const step = Math.random() * 14 + 4
      current = Math.min(current + step, target)
      setProgress(Math.round(current))
      if (current < target) {
        setTimeout(tick, 55 + Math.random() * 40)
      } else {
        setTimeout(() => {
          setLeaving(true)
          setTimeout(onComplete, 700)
        }, 250)
      }
    }
    const t = setTimeout(tick, 100)
    return () => clearTimeout(t)
  }, [onComplete])

  return (
    <AnimatePresence>
      {!leaving ? (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.06 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] bg-[#050508] flex flex-col items-center justify-center"
        >
          {/* Grid lines */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="absolute top-0 bottom-0 w-px bg-white/[0.025]"
                style={{ left: `${(i + 1) * 12.5}%` }} />
            ))}
            {[...Array(6)].map((_, i) => (
              <div key={i} className="absolute left-0 right-0 h-px bg-white/[0.025]"
                style={{ top: `${(i + 1) * 16.66}%` }} />
            ))}
          </div>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mb-10 text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#6c63ff] to-[#00e5b0] flex items-center justify-center font-bold text-white text-sm">
                SX
              </div>
              <span className="font-syne font-bold text-2xl tracking-tight">
                SmartX<span className="text-[#00e5b0]">.</span>
              </span>
            </div>
            <p className="text-white/20 text-[11px] tracking-[0.2em] uppercase">Digital Innovation Agency</p>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-48"
          >
            <div className="h-[1px] bg-white/[0.07] rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#6c63ff] to-[#00e5b0] rounded-full transition-all duration-75 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-[10px] text-white/15 tracking-[0.15em] uppercase">Loading</span>
              <span className="text-[10px] text-white/25 font-mono">{progress}%</span>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
