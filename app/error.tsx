'use client'

import { useEffect } from 'react'

interface ErrorProps {
  error: Error
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="min-h-screen bg-[#050510] text-[#E2E8F0] flex items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-[#94A3B8] mb-4">Something went wrong</p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">A time anomaly occurred.</h1>
        <p className="text-[#94A3B8] leading-relaxed mb-8">We hit an unexpected error while loading the page. Try refreshing or return to the landing page.</p>
        <button
          onClick={reset}
          className="inline-flex items-center justify-center rounded-full bg-[#7C3AED] px-6 py-3 text-white font-semibold hover:bg-[#6D28D9] transition"
        >
          Reload
        </button>
      </div>
    </main>
  )
}
