'use client'

import { useState } from 'react'
import Reveal from './Reveal'
import { SERVICES, PROCESS, TESTIMONIALS } from '@/lib/data'

/* ── Services ── */
export function Services() {
  return (
    <section id="services" className="py-[120px] bg-white">
      <div className="w-full max-w-[1400px] mx-auto px-[52px]">
      <Reveal>
        <div className="flex items-center gap-3.5 mb-12 font-mono text-[9px] tracking-[0.4em] text-accent uppercase">
          <span className="w-6 h-px bg-accent inline-block" />
          What I Do
        </div>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="font-display text-fg leading-none tracking-wide mb-16" style={{ fontSize: 'clamp(48px,7vw,106px)', lineHeight: '.88' }}>
          SERVICES
        </h2>
      </Reveal>

      <div className="border-t border-accent/12">
        {SERVICES.map(({ num, name, tag }, i) => (
          <Reveal key={num} delay={i * 0.06}>
            <div className="svc-row flex items-center justify-between py-9 border-b border-accent/12 cursor-none group">
              <span className="font-mono text-[10px] tracking-[0.3em] text-muted w-14 flex-shrink-0">{num}</span>
              <span
                className="font-display text-fg flex-1 px-8 tracking-wide group-hover:text-accent group-hover:translate-x-2 transition-all duration-300"
                style={{ fontSize: 'clamp(26px, 3.8vw, 54px)' }}
              >
                {name}
              </span>
              <span className="font-mono text-[9px] tracking-[0.2em] text-muted uppercase flex-shrink-0 hidden sm:block">{tag}</span>
              <span className="ml-6 text-lg text-muted group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent transition-all duration-300 flex-shrink-0">↗</span>
            </div>
          </Reveal>
        ))}
      </div>
      </div>
    </section>
  )
}

/* ── Process ── */
export function Process() {
  return (
    <section id="process" className="py-[120px] bg-bg-2">
      <div className="w-full max-w-[1400px] mx-auto px-[52px]">
      <Reveal>
        <div className="flex items-center gap-3.5 mb-12 font-mono text-[9px] tracking-[0.4em] text-accent uppercase">
          <span className="w-6 h-px bg-accent inline-block" />
          How I Work
        </div>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="font-display text-fg leading-none tracking-wide mb-16" style={{ fontSize: 'clamp(48px,7vw,106px)', lineHeight: '.88' }}>
          THE<br /><span className="text-accent">PROCESS</span>
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0.5">
        {PROCESS.map(({ n, t, d }, i) => (
          <Reveal key={n} delay={i * 0.08}>
            <div
              data-hover
              className="bg-white px-7 py-11 border border-accent/12 transition-all duration-400 hover:border-accent hover:bg-bg-3 hover:shadow-purple-sm cursor-none"
            >
              <div className="font-display leading-none mb-6 text-accent/20 transition-colors duration-400 group-hover:text-accent/25"
                style={{ fontSize: 58 }}>
                {n}
              </div>
              <div className="font-display text-fg tracking-wide mb-3" style={{ fontSize: 23 }}>{t}</div>
              <p className="font-serif text-[13px] text-muted leading-[1.8]">{d}</p>
            </div>
          </Reveal>
        ))}
      </div>
      </div>
    </section>
  )
}

/* ── Testimonials ── */
export function Testimonials() {
  return (
    <section className="py-[120px] bg-white">
      <div className="w-full max-w-[1400px] mx-auto px-[52px]">
      <Reveal>
        <div className="flex items-center gap-3.5 mb-12 font-mono text-[9px] tracking-[0.4em] text-accent uppercase">
          <span className="w-6 h-px bg-accent inline-block" />
          Social Proof
        </div>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="font-display text-fg leading-none tracking-wide mb-16" style={{ fontSize: 'clamp(48px,7vw,106px)', lineHeight: '.88' }}>
          CLIENTS<br /><span className="text-accent">LOVE IT</span>
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <div className="relative bg-bg-2 px-10 py-12 border border-accent/12 transition-shadow duration-400 hover:shadow-purple-sm">
              <span className="absolute top-6 right-8 font-serif text-[72px] text-accent/10 leading-none">"</span>
              <p className="relative z-10 font-serif italic text-fg-2 leading-[1.9] mb-8"
                style={{ fontSize: 'clamp(14px,1.2vw,16px)' }}>
                {t.text}
              </p>
              <div className="flex items-center gap-3.5">
                <div className="w-[42px] h-[42px] rounded-full border-2 border-accent flex items-center justify-center font-display text-[15px] text-accent bg-accent-light flex-shrink-0">
                  {t.init}
                </div>
                <div>
                  <div className="font-mono text-[10px] tracking-[0.2em] text-fg uppercase">{t.name}</div>
                  <div className="font-mono text-[9px] tracking-[0.1em] text-muted mt-0.5">{t.role}</div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      </div>
    </section>
  )
}

/* ── Contact ── */
export function Contact() {
  const [f, setF]       = useState({ name: '', email: '', budget: '', msg: '' })
  const [sent, setSent] = useState(false)
  const [busy, setBusy] = useState(false)

  const h   = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setF(x => ({ ...x, [e.target.name]: e.target.value }))
  const sub = async (e: React.FormEvent) => {
    e.preventDefault(); setBusy(true)
    await new Promise(r => setTimeout(r, 1400))
    setBusy(false); setSent(true)
  }

  return (
    <section id="contact" className="py-[120px] bg-bg-2">
      <div className="w-full max-w-[1400px] mx-auto px-[52px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        {/* Left */}
        <div>
          <Reveal>
            <div className="flex items-center gap-3.5 mb-12 font-mono text-[9px] tracking-[0.4em] text-accent uppercase">
              <span className="w-6 h-px bg-accent inline-block" />
              Get In Touch
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="font-display text-fg leading-none tracking-wide mb-11"
              style={{ fontSize: 'clamp(44px,6.5vw,88px)', lineHeight: '.88' }}>
              LET'S<br />BUILD<br /><span className="text-accent">SOMETHING</span><br />GREAT
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            {[
              ['✉', 'Email',    'hello@devfolio.io'],
              ['📍', 'Location', 'Remote · Worldwide'],
              ['⏱', 'Response', 'Within 24 hours'],
            ].map(([ic, l, v]) => (
              <div key={l} className="flex items-start gap-4 mb-5">
                <div className="w-8 h-8 border border-accent/15 bg-accent-light flex items-center justify-center text-[13px] text-accent flex-shrink-0">
                  {ic}
                </div>
                <div>
                  <div className="font-mono text-[9px] tracking-[0.2em] text-muted uppercase mb-1">{l}</div>
                  <div className="font-serif text-[14px] text-fg">{v}</div>
                </div>
              </div>
            ))}
          </Reveal>
        </div>

        {/* Form */}
        <Reveal delay={0.12}>
          {sent ? (
            <div className="flex flex-col items-center justify-center min-h-[320px] gap-5 text-center">
              <div className="font-display text-[60px] text-accent leading-none">✓</div>
              <div className="font-display text-[32px] text-fg tracking-widest">MESSAGE SENT</div>
              <div className="font-mono text-[10px] tracking-[0.3em] text-muted uppercase">I'll reply within 24 hours</div>
            </div>
          ) : (
            <form onSubmit={sub}>
              {[
                ['name',   'Full Name',       'text'],
                ['email',  'Email Address',    'email'],
                ['budget', 'Project Budget',   'text'],
              ].map(([n, l, t]) => (
                <div key={n} className="relative mb-6">
                  <input
                    type={t} name={n} placeholder={l} required
                    value={(f as Record<string, string>)[n]}
                    onChange={h}
                    className="w-full bg-transparent border-0 border-b-[1.5px] border-accent/20 text-fg font-serif text-base py-3.5 outline-none focus:border-accent transition-colors duration-300 caret-accent peer placeholder-transparent"
                  />
                  <label className="absolute top-3.5 left-0 font-mono text-[9px] tracking-[0.3em] text-muted uppercase pointer-events-none transition-all duration-300 peer-focus:-top-3 peer-focus:text-[8px] peer-focus:text-accent peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:text-[8px]">
                    {l}
                  </label>
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-accent transition-all duration-500 peer-focus:w-full" />
                </div>
              ))}

              <div className="relative mb-2">
                <textarea
                  name="msg" placeholder="Tell me about your project" rows={4} required
                  value={f.msg} onChange={h}
                  className="w-full bg-transparent border-0 border-b-[1.5px] border-accent/20 text-fg font-serif text-base py-3.5 outline-none focus:border-accent transition-colors duration-300 caret-accent resize-none peer placeholder-transparent"
                />
                <label className="absolute top-3.5 left-0 font-mono text-[9px] tracking-[0.3em] text-muted uppercase pointer-events-none transition-all duration-300 peer-focus:-top-3 peer-focus:text-[8px] peer-focus:text-accent peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:text-[8px]">
                  Your Message
                </label>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-accent transition-all duration-500 peer-focus:w-full" />
              </div>

              <button
                type="submit" disabled={busy} data-hover
                className="w-full mt-3 px-5 py-5 bg-accent text-white font-mono text-[11px] tracking-[0.35em] uppercase hover:bg-fg transition-colors duration-300 cursor-none disabled:opacity-60"
              >
                {busy ? 'SENDING ···' : 'SEND MESSAGE →'}
              </button>
            </form>
          )}
        </Reveal>
      </div>
      </div>
    </section>
  )
}

/* ── Footer ── */
export function Footer() {
  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="py-[52px] bg-fg border-t border-white/5">
      <div className="w-full max-w-[1400px] mx-auto px-[52px] flex items-center justify-between flex-wrap gap-6">
      <button onClick={() => go('home')} data-hover className="font-display text-[18px] tracking-[0.35em] text-white cursor-none">
        DEV<span className="text-accent-2">.</span>FOLIO
      </button>
      <span className="font-mono text-[9px] tracking-[0.2em] text-white/40">
        © 2026 — Crafted with precision &amp; obsession
      </span>
      <div className="flex gap-6">
        {['GitHub', 'Dribbble', 'LinkedIn', 'Twitter'].map(s => (
          <a
            key={s} href="#" onClick={e => e.preventDefault()} data-hover
            className="font-mono text-[9px] tracking-[0.2em] text-white/40 uppercase hover:text-accent-2 transition-colors duration-300 cursor-none no-underline"
          >
            {s}
          </a>
        ))}
      </div>
      </div>
    </footer>
  )
}
