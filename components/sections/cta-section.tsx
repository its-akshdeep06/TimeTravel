"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { RevealSection } from '../reveal-section'
import { NeonButton } from '../neon-button'
import { Sparkles, ArrowRight, CheckCircle } from 'lucide-react'

export function CTASection() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setTimeout(() => {
        setEmail('')
        setIsSubmitted(false)
      }, 3000)
    }
  }

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/20 via-[#050510] to-[#06B6D4]/20" />
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#7C3AED]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <RevealSection>
          <motion.div
            className="inline-flex items-center gap-2 mb-6"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Sparkles className="w-8 h-8 text-[#06B6D4]" />
          </motion.div>
        </RevealSection>

        <RevealSection delay={0.1}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-[#E2E8F0]">Step into </span>
            <span className="gradient-text">history.</span>
          </h2>
        </RevealSection>

        <RevealSection delay={0.2}>
          <p className="text-xl text-[#94A3B8] mb-10 max-w-2xl mx-auto">
            Join the waitlist and be among the first to experience learning that transcends time.
          </p>
        </RevealSection>

        <RevealSection delay={0.3}>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-6 py-4 bg-[#0A0A2E]/80 border border-[#1A1A4E] rounded-full text-[#E2E8F0] placeholder-[#94A3B8] focus:outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20 transition-all"
                  required
                  disabled={isSubmitted}
                />
              </div>
              <NeonButton
                type="submit"
                variant="primary"
                size="lg"
                className="whitespace-nowrap"
                disabled={isSubmitted}
                icon={isSubmitted ? <CheckCircle className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
              >
                {isSubmitted ? 'Joined!' : 'Get Early Access'}
              </NeonButton>
            </div>
          </form>
        </RevealSection>

        <RevealSection delay={0.4}>
          <p className="text-sm text-[#94A3B8] mt-6">
            No spam, ever. We&apos;ll only send updates about our launch.
          </p>
        </RevealSection>
      </div>
    </section>
  )
}
