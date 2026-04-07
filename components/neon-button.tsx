"use client"

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import type { ReactNode, ButtonHTMLAttributes } from 'react'

interface NeonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  icon?: ReactNode
}

export function NeonButton({ 
  children, 
  className, 
  variant = 'primary',
  size = 'md',
  icon,
  ...props 
}: NeonButtonProps) {
  const baseStyles = 'relative inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/50 focus:ring-offset-2 focus:ring-offset-[#050510]'
  
  const variants = {
    primary: 'bg-[#7C3AED] text-white hover:bg-[#6D28D9] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] border border-[#A78BFA]/30',
    secondary: 'bg-transparent text-[#A78BFA] border-2 border-[#7C3AED] hover:bg-[#7C3AED]/10 hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]',
    ghost: 'bg-transparent text-[#E2E8F0] hover:text-[#A78BFA] hover:bg-white/5'
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  return (
    <motion.button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {/* Glow effect for primary button */}
      {variant === 'primary' && (
        <motion.span
          className="absolute inset-0 rounded-full bg-[#7C3AED] blur-xl opacity-0 -z-10"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.5 }}
          transition={{ duration: 0.3 }}
        />
      )}
      {icon}
      {children}
    </motion.button>
  )
}
