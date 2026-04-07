"use client"

import { motion } from 'framer-motion'
import { RevealSection } from '../reveal-section'
import { Quote } from 'lucide-react'

export function QuoteSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Grid texture overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(124, 58, 237, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(124, 58, 237, 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <RevealSection>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Quote className="w-16 h-16 text-[#7C3AED] mx-auto mb-8 opacity-50" />
          </motion.div>
        </RevealSection>

        <RevealSection delay={0.2}>
          <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#E2E8F0] leading-relaxed mb-8 italic">
            &quot;I used to dread history class. Now I can&apos;t wait to step into a new simulation. 
            Having a conversation with Einstein about his thought experiments changed how I understand physics forever.&quot;
          </blockquote>
        </RevealSection>

        <RevealSection delay={0.4}>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#06B6D4] flex items-center justify-center text-white font-bold">
              SK
            </div>
            <div className="text-left">
              <div className="font-semibold text-[#E2E8F0]">Sarah K.</div>
              <div className="text-sm text-[#94A3B8]">High School Student, Grade 11</div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  )
}
