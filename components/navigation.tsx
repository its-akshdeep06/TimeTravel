"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NeonButton } from './neon-button'
import { cn } from '@/lib/utils'
import { Menu, X, Clock } from 'lucide-react'

const navLinks = [
  { href: '#experiences', label: 'Experiences' },
  { href: '#features', label: 'Features' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#about', label: 'About' },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled 
            ? 'bg-[#050510]/80 backdrop-blur-xl border-b border-[#1A1A4E]/50' 
            : 'bg-transparent'
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <div className="relative">
                <Clock className="w-8 h-8 text-[#7C3AED] transition-all duration-300 group-hover:text-[#A78BFA]" />
                <div className="absolute inset-0 bg-[#7C3AED] blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
              </div>
              <span className="text-xl font-bold text-[#E2E8F0] group-hover:text-white transition-colors">
                TTC
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[#94A3B8] hover:text-[#A78BFA] transition-colors duration-300 text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <NeonButton variant="ghost" size="sm">
                Sign In
              </NeonButton>
              <NeonButton variant="primary" size="sm">
                Try Now
              </NeonButton>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-[#E2E8F0] hover:text-[#A78BFA] transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div 
              className="absolute inset-0 bg-[#050510]/95 backdrop-blur-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              className="absolute top-20 left-4 right-4 bg-[#0A0A2E] border border-[#1A1A4E] rounded-2xl p-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-[#E2E8F0] hover:text-[#A78BFA] transition-colors py-2 text-lg font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="border-t border-[#1A1A4E] my-2" />
                <NeonButton variant="ghost" size="md" className="w-full">
                  Sign In
                </NeonButton>
                <NeonButton variant="primary" size="md" className="w-full">
                  Try Now
                </NeonButton>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
