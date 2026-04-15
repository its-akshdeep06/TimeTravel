"use client"

import { motion } from 'framer-motion'
import { RevealSection } from '../reveal-section'
import { MessageSquare, Users, Target, GitBranch, Network } from 'lucide-react'

const features = [
  {
    icon: MessageSquare,
    title: 'Immersive Roleplay',
    description: 'Engage in a natural conversations with AI-powered historical figures. Ask questions, debate ideas, and learn through authentic dialogue.',
    visual: 'roleplay',
    color: '#7C3AED',
  },
  {
    icon: Users,
    title: 'Multi-Character Scenes',
    description: 'Witness & participate in conversations between multiple historical figures. Experience the clash of ideas that shaped history.',
    visual: 'multichar',
    color: '#06B6D4',
  },
  {
    icon: Target,
    title: 'Guided Missions',
    description: 'Complete learning objectives through interactive missions. Solve puzzles, make discoveries, & earn XP as you progress.',
    visual: 'missions',
    color: '#A78BFA',
  },
  {
    icon: GitBranch,
    title: 'Change History Mode',
    description: 'Explore alternate timelines. What if Edison invented AC current? See how changes ripple through history with the butterfly effect visualizer.',
    visual: 'alternate',
    color: '#F59E0B',
  },
  {
    icon: Network,
    title: 'Knowledge Graph',
    description: 'Build your personal knowledge map. Every concept you learn becomes a connected node, revealing relationships between ideas.',
    visual: 'graph',
    color: '#06B6D4',
  },
]

function FeatureVisual({ type, color }: { type: string; color: string }) {
  const getVisual = () => {
    switch (type) {
      case 'roleplay':
        return (
          <div className="space-y-3">
            <motion.div 
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="w-8 h-8 rounded-full bg-[#7C3AED] flex items-center justify-center text-xs font-bold text-white">AE</div>
              <div className="bg-[#1A1A4E] rounded-lg rounded-tl-none px-4 py-2 max-w-[200px]">
                <p className="text-sm text-[#E2E8F0]">&quot;Imagination is more important than knowledge...&quot;</p>
              </div>
            </motion.div>
            <motion.div 
              className="flex items-start gap-3 justify-end"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="bg-[#7C3AED]/20 border border-[#7C3AED]/30 rounded-lg rounded-tr-none px-4 py-2 max-w-[200px]">
                <p className="text-sm text-[#E2E8F0]">Can you explain relativity in simple terms?</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#06B6D4] flex items-center justify-center text-xs font-bold text-white">You</div>
            </motion.div>
          </div>
        )
      case 'multichar':
        return (
          <div className="flex items-center justify-center gap-4">
            {['MC', 'PC', 'AE'].map((initials, i) => (
              <motion.div
                key={initials}
                className="relative"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.15, type: 'spring' }}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-white ${
                  i === 1 ? 'bg-[#06B6D4] ring-2 ring-[#06B6D4]/50 ring-offset-2 ring-offset-[#0A0A2E]' : 'bg-[#1A1A4E]'
                }`}>
                  {initials}
                </div>
                {i === 1 && (
                  <motion.div 
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-green-400"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        )
      case 'missions':
        return (
          <div className="space-y-2">
            {['Understand time dilation', 'Speed of light constant', 'Derive E = mc²'].map((task, i) => (
              <motion.div
                key={task}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  i < 2 ? 'border-[#06B6D4] bg-[#06B6D4]' : 'border-[#94A3B8]'
                }`}>
                  {i < 2 && <span className="text-[10px] text-white">✓</span>}
                </div>
                <span className={`text-sm ${i < 2 ? 'text-[#94A3B8] line-through' : 'text-[#E2E8F0]'}`}>{task}</span>
              </motion.div>
            ))}
            <motion.div 
              className="mt-3 h-2 bg-[#1A1A4E] rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <motion.div 
                className="h-full bg-gradient-to-r from-[#7C3AED] to-[#06B6D4]"
                initial={{ width: 0 }}
                whileInView={{ width: '66%' }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.8 }}
              />
            </motion.div>
          </div>
        )
      case 'alternate':
        return (
          <div className="relative h-32">
            <motion.div 
              className="absolute left-4 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#F59E0B]"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            />
            <motion.svg 
              className="absolute left-7 top-0 h-full w-48" 
              viewBox="0 0 200 100"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
            >
              <motion.path
                d="M0 50 L40 50 L60 30 L100 30 L120 30 L160 30"
                stroke="#F59E0B"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
              />
              <motion.path
                d="M40 50 L60 70 L100 70 L120 70 L160 70"
                stroke="#94A3B8"
                strokeWidth="2"
                strokeDasharray="4"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </motion.svg>
            <motion.div 
              className="absolute right-4 top-4 px-2 py-1 bg-[#F59E0B]/20 border border-[#F59E0B]/30 rounded text-xs text-[#F59E0B]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
            >
              ALTERNATE
            </motion.div>
          </div>
        )
      case 'graph':
        return (
          <div className="relative h-32">
            {[
              { x: 20, y: 50, label: 'Physics', color: '#7C3AED' },
              { x: 60, y: 30, label: 'E=mc²', color: '#06B6D4' },
              { x: 60, y: 70, label: 'Light', color: '#06B6D4' },
              { x: 100, y: 50, label: 'Time', color: '#A78BFA' },
            ].map((node, i) => (
              <motion.div
                key={node.label}
                className="absolute flex items-center justify-center"
                style={{ left: `${node.x}%`, top: `${node.y}%`, transform: 'translate(-50%, -50%)' }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.15, type: 'spring' }}
              >
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center text-[10px] font-medium text-white"
                  style={{ backgroundColor: `${node.color}40`, border: `2px solid ${node.color}` }}
                >
                  {node.label.slice(0, 3)}
                </div>
              </motion.div>
            ))}
            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
              <motion.line x1="20%" y1="50%" x2="60%" y2="30%" stroke="#1A1A4E" strokeWidth="2"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
              />
              <motion.line x1="20%" y1="50%" x2="60%" y2="70%" stroke="#1A1A4E" strokeWidth="2"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }}
              />
              <motion.line x1="60%" y1="30%" x2="100%" y2="50%" stroke="#1A1A4E" strokeWidth="2"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 0.7 }}
              />
              <motion.line x1="60%" y1="70%" x2="100%" y2="50%" stroke="#1A1A4E" strokeWidth="2"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 0.8 }}
              />
            </svg>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="bg-[#0A0A2E]/50 rounded-xl p-6 border border-[#1A1A4E]/50">
      {getVisual()}
    </div>
  )
}

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-[#E2E8F0]">Powerful </span>
            <span className="gradient-text">Features</span>
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
            Every tool you need for immersive historical learning
          </p>
        </RevealSection>

        <div className="space-y-20">
          {features.map((feature, index) => (
            <RevealSection 
              key={feature.title} 
              delay={0.1}
              direction={index % 2 === 0 ? 'left' : 'right'}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div 
                    className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-6"
                    style={{ backgroundColor: `${feature.color}20` }}
                  >
                    <feature.icon className="w-6 h-6" style={{ color: feature.color }} />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#E2E8F0] mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-[#94A3B8] text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <FeatureVisual type={feature.visual} color={feature.color} />
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  )
}
