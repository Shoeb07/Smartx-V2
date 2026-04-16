'use client'

import { useInView } from 'framer-motion'
import { useRef } from 'react'

export function useScrollReveal(options = { once: true, amount: 0.15 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, options)
  return { ref, isInView }
}

// Cinematic variants for framer-motion
export const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  }),
}

export const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    transition: { delay: i * 0.06, duration: 0.7, ease: 'easeOut' },
  }),
}

export const clipRevealVariant = {
  hidden: { clipPath: 'inset(0 100% 0 0)' },
  visible: {
    clipPath: 'inset(0 0% 0 0)',
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
}

export const scaleUpVariant = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
}

export const staggerContainerVariant = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
}
