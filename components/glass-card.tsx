"use client"

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        'glass-card rounded-xl p-6',
        'transition-all duration-300',
        hover && 'hover:border-[#7C3AED]/40 hover:shadow-[0_0_30px_rgba(124,58,237,0.2)]',
        className
      )}
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  )
}
