'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

export default function FadeIn({ 
  children, 
  delay = 0,
  direction = 'up' 
}: FadeInProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const shouldReduceMotion = useReducedMotion()

  const directions = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 }
  }

  // Initial ist IMMER needed - animate nur wenn Motion nicht reduziert
  return (
    <motion.div
      ref={ref}
      suppressHydrationWarning
      style={{ willChange: 'transform, opacity' }}
      initial={{
        opacity: 0,
        ...directions[direction]
      }}
      animate={shouldReduceMotion ? {
        // Sofort zur finalen State wenn Motion reduziert
        opacity: 1,
        x: 0,
        y: 0
      } : (isInView ? {
        opacity: 1,
        x: 0,
        y: 0
      } : {})}
      transition={shouldReduceMotion ? { duration: 0 } : {
        duration: 0.7,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
    >
      {children}
    </motion.div>
  )
}
