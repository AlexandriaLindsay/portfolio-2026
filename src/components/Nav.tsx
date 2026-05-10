'use client'

import { useEffect, useState } from 'react'

const LINKS = ['work', 'about', 'services', 'contact']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[800] transition-all duration-500 ${
        scrolled
          ? 'py-3.5 bg-white/95 backdrop-blur-xl border-b border-accent/10 shadow-purple-sm'
          : 'py-7 border-b border-transparent'
      }`}
    >
      <div className="w-full max-w-[1400px] mx-auto px-[52px] flex items-center justify-between">
      {/* Logo */}
      <button
        onClick={() => go('home')}
        data-hover
        className={`font-display text-[20px] tracking-[0.35em] cursor-none transition-colors duration-500 ${scrolled ? 'text-fg' : 'text-white'}`}
      >
        ALEX<span className="text-accent">.</span>DEV
      </button>

      {/* Links */}
      <ul className="hidden md:flex gap-12 list-none">
        {LINKS.map(l => (
          <li key={l}>
            <button
              onClick={() => go(l)}
              data-hover
              className={`nav-link ${scrolled ? 'nav-link--dark' : ''} font-mono text-[10px] tracking-[0.3em] uppercase cursor-none transition-colors duration-500 ${scrolled ? 'text-fg/70 hover:text-fg' : 'text-white hover:text-white/60'}`}
            >
              {l}
            </button>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button
        onClick={() => go('contact')}
        data-hover
        className="font-mono text-[10px] tracking-[0.3em] uppercase px-7 py-3 bg-accent border border-accent text-white hover:bg-fg hover:border-fg transition-colors duration-300 cursor-none"
      >
        Let's Talk
      </button>
      </div>
    </nav>
  )
}
