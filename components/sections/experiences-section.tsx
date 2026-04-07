"use client"

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { RevealSection } from '../reveal-section'
import { Clock, Users, Zap } from 'lucide-react'

const experiences = [
  {
    title: "Einstein's Thought Experiments",
    era: '1905',
    period: 'Early 20th Century',
    gradient: 'from-[#7C3AED] to-[#4C1D95]',
    difficulty: 'Intermediate',
    duration: '25 min',
    figures: ['Albert Einstein', 'Mileva Marić'],
  },
  {
    title: 'Apollo 11 Moon Landing',
    era: '1969',
    period: 'Space Age',
    gradient: 'from-[#0891B2] to-[#164E63]',
    difficulty: 'Beginner',
    duration: '20 min',
    figures: ['Neil Armstrong', 'Buzz Aldrin'],
  },
  {
    title: "Marie Curie's Laboratory",
    era: '1898',
    period: 'Belle Époque',
    gradient: 'from-[#059669] to-[#064E3B]',
    difficulty: 'Advanced',
    duration: '30 min',
    figures: ['Marie Curie', 'Pierre Curie'],
  },
  {
    title: "Da Vinci's Workshop",
    era: '1490',
    period: 'Renaissance',
    gradient: 'from-[#D97706] to-[#92400E]',
    difficulty: 'Intermediate',
    duration: '25 min',
    figures: ['Leonardo da Vinci'],
  },
  {
    title: 'Library of Alexandria',
    era: '280 BCE',
    period: 'Ancient World',
    gradient: 'from-[#DC2626] to-[#7F1D1D]',
    difficulty: 'Beginner',
    duration: '20 min',
    figures: ['Euclid', 'Eratosthenes'],
  },
]

function ExperienceCard({ experience, index }: { experience: typeof experiences[0]; index: number }) {
  return (
    <motion.div
      className="flex-shrink-0 w-[300px] sm:w-[340px] group cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8 }}
    >
      <div className="relative overflow-hidden rounded-2xl border border-[#1A1A4E]/50 bg-[#0A0A2E]/60 backdrop-blur-sm">
        {/* Gradient Header */}
        <div className={`relative h-40 bg-gradient-to-br ${experience.gradient} overflow-hidden`}>
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-4 right-4 w-20 h-20 border border-white/20 rounded-full" />
            <div className="absolute bottom-4 left-4 w-12 h-12 border border-white/20 rotate-45" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white/10 rounded-full" />
          </div>
          
          {/* Era badge */}
          <div className="absolute top-4 left-4 px-3 py-1 bg-black/30 backdrop-blur-sm rounded-full text-white text-sm font-mono">
            {experience.era}
          </div>
          
          {/* Hover overlay */}
          <motion.div 
            className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
              Enter Experience
            </span>
          </motion.div>
        </div>
        
        {/* Content */}
        <div className="p-5">
          <div className="text-xs text-[#06B6D4] font-mono mb-2">{experience.period}</div>
          <h3 className="text-lg font-bold text-[#E2E8F0] mb-3 group-hover:text-white transition-colors">
            {experience.title}
          </h3>
          
          {/* Meta info */}
          <div className="flex items-center gap-4 text-xs text-[#94A3B8] mb-4">
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {experience.duration}
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-3.5 h-3.5" />
              {experience.figures.length} figures
            </div>
            <div className="flex items-center gap-1">
              <Zap className="w-3.5 h-3.5" />
              {experience.difficulty}
            </div>
          </div>
          
          {/* Figure avatars */}
          <div className="flex -space-x-2">
            {experience.figures.map((figure, i) => (
              <div
                key={figure}
                className="w-8 h-8 rounded-full bg-[#1A1A4E] border-2 border-[#0A0A2E] flex items-center justify-center text-xs font-medium text-[#A78BFA]"
                title={figure}
              >
                {figure.split(' ').map(n => n[0]).join('')}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function ExperiencesSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollXProgress } = useScroll({ container: containerRef })
  const scale = useTransform(scrollXProgress, [0, 0.5, 1], [1, 1.02, 1])

  return (
    <section id="experiences" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealSection className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-[#E2E8F0]">Experience </span>
            <span className="gradient-text">Previews</span>
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
            Explore pivotal moments in history through immersive AI-powered simulations
          </p>
        </RevealSection>
      </div>

      {/* Horizontal scroll container */}
      <motion.div style={{ scale }}>
        <div 
          ref={containerRef}
          className="flex gap-6 overflow-x-auto pb-6 px-4 sm:px-6 lg:px-8 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex-shrink-0 w-4 sm:w-[calc((100vw-1280px)/2+1rem)] lg:w-[calc((100vw-1280px)/2+2rem)]" />
          {experiences.map((experience, index) => (
            <div key={experience.title} className="snap-start">
              <ExperienceCard experience={experience} index={index} />
            </div>
          ))}
          <div className="flex-shrink-0 w-4 sm:w-8" />
        </div>
      </motion.div>

      {/* Scroll hint */}
      <div className="text-center mt-6">
        <span className="text-xs text-[#94A3B8]">Scroll to explore more experiences</span>
      </div>
    </section>
  )
}
