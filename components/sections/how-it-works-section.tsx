"use client"

import { motion } from 'framer-motion'
import { GlassCard } from '../glass-card'
import { RevealSection } from '../reveal-section'
import { Keyboard, Cpu, DoorOpen } from 'lucide-react'

const steps = [
  {
    icon: Keyboard,
    title: 'Type a Moment',
    description: 'Describe any historical moment you want to explore. From ancient civilizations to pivotal scientific discoveries.',
    color: '#7C3AED',
  },
  {
    icon: Cpu,
    title: 'AI Builds the World',
    description: 'Our AI constructs an immersive environment, complete with historical figures, accurate settings, and learning objectives.',
    color: '#06B6D4',
  },
  {
    icon: DoorOpen,
    title: 'You Step In',
    description: 'Enter the simulation, interact with AI characters, complete missions, and build your knowledge graph in real-time.',
    color: '#A78BFA',
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-[#E2E8F0]">How It </span>
            <span className="gradient-text">Works</span>
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
            Three simple steps to transform how you learn history
          </p>
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <RevealSection key={step.title} delay={index * 0.15}>
              <GlassCard className="h-full text-center group">
                <motion.div
                  className="relative mx-auto w-16 h-16 mb-6 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: `${step.color}20` }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <step.icon 
                    className="w-8 h-8 transition-transform group-hover:scale-110" 
                    style={{ color: step.color }} 
                  />
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    style={{ backgroundColor: step.color }}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.2 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
                
                <div className="text-xs font-mono text-[#06B6D4] mb-2">
                  STEP {String(index + 1).padStart(2, '0')}
                </div>
                
                <h3 className="text-xl font-bold text-[#E2E8F0] mb-3">
                  {step.title}
                </h3>
                
                <p className="text-[#94A3B8] leading-relaxed">
                  {step.description}
                </p>
              </GlassCard>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  )
}
