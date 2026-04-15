"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NeonButton } from '../neon-button'
import { RevealSection } from '../reveal-section'
import { Sparkles, Play } from 'lucide-react'

const experiences = [
  "Einstein's Office",
  "Apollo 11 Mission",
  "Marie Curie's Lab",
  "Da Vinci's Workshop",
  "Ancient Alexandria"
]

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % experiences.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050510] via-transparent to-[#050510] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050510] to-transparent pointer-events-none" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <RevealSection delay={0.2}>
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A1A4E]/50 border border-[#7C3AED]/30 mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Sparkles className="w-4 h-4 text-[#06B6D4]" />
            <span className="text-sm text-[#94A3B8]">AI-Powered Experiential Learning</span>
          </motion.div>
        </RevealSection>

        <RevealSection delay={0.3}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-[#E2E8F0]">Step Into</span>
            <br />
            <span className="relative inline-block min-h-[1.2em] min-w-[280px] sm:min-w-[400px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentIndex}
                  className="gradient-text neon-text absolute left-1/2 -translate-x-1/2 whitespace-nowrap"
                  initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -30, filter: 'blur(10px)' }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                  {experiences[currentIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>
        </RevealSection>

        <RevealSection delay={0.5}>
          <p className="text-lg sm:text-xl text-[#94A3B8] max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
            Experience learning like never before. Converse with AI-powered historical figures, 
            solve missions in pivotal moments, and build your knowledge through immersive role-play.
          </p>
        </RevealSection>

        <RevealSection delay={0.7}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <NeonButton 
              variant="primary" 
              size="lg"
              icon={<Sparkles className="w-5 h-5" />}
            >
              Start Exploring
            </NeonButton>
            <NeonButton 
              variant="secondary" 
              size="lg"
              icon={<Play className="w-5 h-5" />}
            >
              Watch Demo
            </NeonButton>
          </div>
        </RevealSection>

        {/* Scroll indicator */}
        <RevealSection delay={1}>
          <motion.div 
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="w-6 h-10 rounded-full border-2 border-[#7C3AED]/50 flex items-start justify-center p-2">
              <motion.div 
                className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]"
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        </RevealSection>
      </div>
    </section>
  )
}
