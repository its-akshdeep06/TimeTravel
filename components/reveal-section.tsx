"use client"

import { motion } from 'framer-motion'
import { useReveal } from '@/hooks/use-reveal'
import { cn } from '@/lib/utils'
import type { ReactNode, RefObject } from 'react'

interface RevealSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

export function RevealSection({ 
  children, 
  className, 
  delay = 0,
  direction = 'up' 
}: RevealSectionProps) {
  const { ref, isVisible } = useReveal({ threshold: 0.1, rootMargin: '-50px' })

  const getInitialPosition = () => {
    switch (direction) {
      case 'up': return { y: 40, x: 0 }
      case 'down': return { y: -40, x: 0 }
      case 'left': return { y: 0, x: 40 }
      case 'right': return { y: 0, x: -40 }
      default: return { y: 40, x: 0 }
    }
  }

  const initial = getInitialPosition()

  return (
    <motion.div
      ref={ref as RefObject<HTMLDivElement>}
      initial={{ opacity: 0, ...initial }}
      animate={isVisible ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, ...initial }}
      transition={{ 
        duration: 0.6, 
        delay, 
        ease: [0.25, 0.46, 0.45, 0.94] 
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}

interface RevealTextProps {
  children: string
  className?: string
  delay?: number
  staggerDelay?: number
}

export function RevealText({ 
  children, 
  className, 
  delay = 0,
  staggerDelay = 0.03
}: RevealTextProps) {
  const { ref, isVisible } = useReveal({ threshold: 0.1 })
  const words = children.split(' ')

  return (
    <span 
      ref={ref as RefObject<HTMLSpanElement>} 
      className={cn('inline-flex flex-wrap', className)}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ 
            duration: 0.5, 
            delay: delay + index * staggerDelay,
            ease: 'easeOut'
          }}
          className="mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}
