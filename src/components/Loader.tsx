'use client'

import { useEffect, useState } from 'react'

export default function Loader({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0)
  const [out, setOut]           = useState(false)

  useEffect(() => {
    let val = 0
    const id = setInterval(() => {
      val += Math.random() * 16 + 5
      if (val >= 100) {
        val = 100
        clearInterval(id)
        setTimeout(() => { setOut(true); setTimeout(onDone, 900) }, 300)
      }
      setProgress(Math.min(val, 100))
    }, 75)
    return () => clearInterval(id)
  }, [onDone])

  return (
    <div
      className={`fixed inset-0 z-[9000] bg-accent flex flex-col items-center justify-center transition-opacity duration-700 ${out ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
    >
      <div className="font-display text-white tracking-[0.7em]" style={{ fontSize: 'clamp(40px,7vw,80px)' }}>
        DEV<span className="text-white/60">.</span>FOLIO
      </div>

      <div className="mt-12 w-64 h-px bg-white/20 overflow-hidden">
        <div
          className="h-full bg-white loader-bar-transition"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="mt-4 font-mono text-[10px] tracking-[0.35em] text-white/60">
        {Math.round(progress).toString().padStart(3, '0')} %
      </div>
    </div>
  )
}
