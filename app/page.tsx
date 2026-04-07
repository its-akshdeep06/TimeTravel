import { Navigation } from '@/components/navigation'
import { StarField } from '@/components/star-field'
import { HeroSection } from '@/components/sections/hero-section'
import { ExperiencesSection } from '@/components/sections/experiences-section'
import { FeaturesSection } from '@/components/sections/features-section'
import { HowItWorksSection } from '@/components/sections/how-it-works-section'
import { QuoteSection } from '@/components/sections/quote-section'
import { CTASection } from '@/components/sections/cta-section'

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050510] text-[#E2E8F0]">
      <StarField />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(124,58,237,0.18),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(6,182,212,0.14),_transparent_22%)]" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="cosmic-blob blob-1" />
        <div className="cosmic-blob blob-2" />
        <div className="cosmic-blob blob-3" />
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-90">
        <svg className="w-full h-full constellation-svg" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
          <g className="constellation-group" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <line className="constellation-line" x1="120" y1="180" x2="340" y2="120" />
            <line className="constellation-line" x1="340" y1="120" x2="420" y2="240" />
            <line className="constellation-line" x1="420" y1="240" x2="260" y2="340" />
            <line className="constellation-line" x1="260" y1="340" x2="120" y2="180" />

            <circle className="constellation-star" cx="120" cy="180" r="3" />
            <circle className="constellation-star" cx="340" cy="120" r="3" />
            <circle className="constellation-star" cx="420" cy="240" r="3" />
            <circle className="constellation-star" cx="260" cy="340" r="3" />

            <line className="constellation-line" x1="1020" y1="170" x2="1180" y2="260" />
            <line className="constellation-line" x1="1180" y1="260" x2="1320" y2="140" />
            <line className="constellation-line" x1="1320" y1="140" x2="1220" y2="60" />

            <circle className="constellation-star" cx="1020" cy="170" r="3" />
            <circle className="constellation-star" cx="1180" cy="260" r="3" />
            <circle className="constellation-star" cx="1320" cy="140" r="3" />
            <circle className="constellation-star" cx="1220" cy="60" r="3" />

            <line className="constellation-line" x1="660" y1="620" x2="790" y2="500" />
            <line className="constellation-line" x1="790" y1="500" x2="860" y2="650" />
            <line className="constellation-line" x1="860" y1="650" x2="720" y2="720" />

            <circle className="constellation-star" cx="660" cy="620" r="3" />
            <circle className="constellation-star" cx="790" cy="500" r="3" />
            <circle className="constellation-star" cx="860" cy="650" r="3" />
            <circle className="constellation-star" cx="720" cy="720" r="3" />
          </g>
        </svg>
      </div>

      <Navigation />
      <div className="relative pt-24">
        <HeroSection />
        <section className="relative">
          <ExperiencesSection />
          <FeaturesSection />
          <HowItWorksSection />
          <QuoteSection />
          <CTASection />
        </section>
      </div>
    </main>
  )
}
