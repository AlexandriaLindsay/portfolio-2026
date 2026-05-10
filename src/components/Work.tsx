'use client'

import { useEffect, useState } from 'react'
import NextImage from 'next/image'
import Reveal from './Reveal'
import { PROJECTS, SECTIONS } from '@/lib/data'

type Project = typeof PROJECTS[0] & { image?: string; disclaimer?: boolean }

const DOT_COLORS = ['#ff5f57', '#febc2e', '#28c840']

/* ── Card ── */
function ProjectCard({ project, onOpen }: { project: Project; onOpen: (p: Project) => void }) {
  return (
    <Reveal>
      <div
        className="relative cursor-none group bg-white border border-accent/15 overflow-hidden transition-all duration-400 hover:-translate-y-1 hover:shadow-purple hover:border-accent"
        onClick={() => onOpen(project)}
        data-hover
      >
        {/* Browser chrome */}
        {project.url ? (
          <div className="bg-bg-2 border-b border-accent/10 px-3.5 py-2.5 flex items-center gap-2.5">
            <div className="flex gap-1.5">
              {DOT_COLORS.map((c, i) => (
                <div key={i} className="w-[11px] h-[11px] rounded-full" style={{ background: c }} />
              ))}
            </div>
            <div className="flex-1 bg-[#e8e1f5] h-[22px] flex items-center px-2.5 font-mono text-[9px] text-muted overflow-hidden whitespace-nowrap text-ellipsis">
              {project.url}
            </div>
            <div className="font-mono text-[8px] tracking-[0.1em] text-accent px-2 py-1 border border-accent/20 hover:bg-accent hover:text-white transition-colors">
              ↗ Open
            </div>
          </div>
        ) : (
          <div className="bg-bg-2 border-b border-accent/10 px-3.5 py-2.5 flex items-center gap-2.5">
            <div className="flex gap-1.5">
              {DOT_COLORS.map((c, i) => (
                <div key={i} className="w-[11px] h-[11px] rounded-full" style={{ background: c }} />
              ))}
            </div>
            <div className="flex-1 bg-[#e8e1f5] h-[22px] flex items-center px-2.5 font-mono text-[9px] text-muted overflow-hidden whitespace-nowrap text-ellipsis italic">
              Private / NDA
            </div>
            <div className="font-mono text-[8px] tracking-[0.1em] text-muted px-2 py-1 border border-accent/10">
              🔒 Locked
            </div>
          </div>
        )}

        {/* Image area */}
        <div className="relative overflow-hidden" style={{ aspectRatio: '16/10' }}>
          {project.image ? (
            <>
              <NextImage
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={100}
                className="object-cover object-top transition-transform duration-[600ms] ease-spring group-hover:scale-[1.03]"
              />
              {project.disclaimer && (
                <div className="absolute bottom-2 left-2 bg-fg/70 px-2 py-1 backdrop-blur-sm">
                  <span className="font-mono text-[8px] tracking-[0.15em] text-white/80 uppercase italic">
                    * Image edited to protect the company
                  </span>
                </div>
              )}
            </>
          ) : project.url ? (
            <>
              <img
                src={`https://api.microlink.io/?url=${encodeURIComponent(project.url)}&screenshot=true&meta=false&embed=screenshot.url`}
                alt={project.title}
                className="w-full h-full object-cover block transition-transform duration-[600ms] ease-spring group-hover:scale-[1.03]"
                onError={(e) => {
                  const img = e.currentTarget
                  img.style.display = 'none'
                  const fb = img.nextElementSibling as HTMLElement | null
                  if (fb) fb.style.display = 'flex'
                }}
              />
              <div className="hidden w-full h-full bg-photo-placeholder items-center justify-center flex-col gap-3 absolute inset-0">
                <span className="font-display text-accent tracking-widest" style={{ fontSize: 'clamp(32px,4vw,52px)' }}>{project.title}</span>
                <span className="font-mono text-[9px] tracking-[0.25em] text-muted uppercase">{project.url}</span>
              </div>
            </>
          ) : (
            <div className="w-full h-full bg-photo-placeholder flex items-center justify-center flex-col gap-3">
              <span className="font-display text-accent tracking-widest" style={{ fontSize: 'clamp(32px,4vw,52px)' }}>
                {project.title}
              </span>
              <span className="font-mono text-[9px] tracking-[0.25em] text-muted uppercase">Gallery coming soon</span>
            </div>
          )}

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-fg/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-6">
            <span className="font-mono text-[9px] tracking-[0.2em] text-white uppercase flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-green-400 before:flex-shrink-0 before:animate-[pulseDot_2s_ease-in-out_infinite]">
              Click to explore
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="p-5 pb-6">
          <div className="font-mono text-[9px] tracking-[0.3em] text-accent uppercase mb-1.5">{project.cat}</div>
          <div className="font-display text-fg tracking-wide leading-none mb-2" style={{ fontSize: 'clamp(22px, 2.4vw, 32px)' }}>
            {project.title}
          </div>
          <p className="font-serif text-[13px] text-muted leading-[1.75]">{project.desc}</p>
          <div className="flex gap-1.5 flex-wrap mt-3">
            {project.tags.map(t => (
              <span key={t} className="font-mono text-[8px] tracking-[0.1em] text-muted px-2 py-1 bg-bg-2 border border-accent/12 uppercase">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  )
}

/* ── Modal ── */
function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const esc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', esc)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', esc)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[3000] bg-fg/60 backdrop-blur-[8px] flex items-center justify-center p-6"
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
      style={{ animation: 'fadeIn .35s ease forwards' }}
    >
      <style>{`@keyframes fadeIn{from{opacity:0}to{opacity:1}} @keyframes slideUp{from{transform:translateY(32px) scale(.97)}to{transform:translateY(0) scale(1)}}`}</style>

      <div
        className="bg-white w-full max-w-[960px] max-h-[90vh] overflow-y-auto relative shadow-modal"
        style={{ animation: 'slideUp .4s cubic-bezier(.16,1,.3,1) forwards' }}
      >
        {/* Sticky browser bar */}
        <div className="sticky top-0 z-10 bg-bg-2 border-b border-accent/10 px-4.5 py-3 flex items-center gap-3">
          <div className="flex gap-[7px]">
            {DOT_COLORS.map((c, i) => (
              <div key={i} className="w-[13px] h-[13px] rounded-full" style={{ background: c }} />
            ))}
          </div>
          <div className="flex-1 bg-[#e8e1f5] h-6 flex items-center px-3 font-mono text-[9px] text-muted">
            🔒 {project.url ?? 'Private / NDA'}
          </div>
          <button
            onClick={onClose}
            data-hover
            className="w-8 h-8 border-[1.5px] border-accent/15 bg-transparent flex items-center justify-center text-[14px] text-muted hover:bg-accent hover:border-accent hover:text-white transition-all duration-200 cursor-none flex-shrink-0"
          >
            ✕
          </button>
        </div>

        <div className="px-10 py-10 pb-12">
          <div className="flex items-center gap-2.5 mb-1 font-mono text-[9px] tracking-[0.3em] text-accent uppercase">
            <span className="w-5 h-px bg-accent inline-block" />
            {project.cat}
          </div>
          <div
            className="font-display text-fg leading-none tracking-wide mb-6"
            style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
          >
            <span className="text-accent">{project.title.split(' ')[0]} </span>
            {project.title.split(' ').slice(1).join(' ')}
          </div>

          {/* Live iframe or gallery image */}
          <div className="border border-accent/12 overflow-hidden mb-8">
            <div className="bg-bg-2 px-3.5 py-2 flex items-center gap-2 border-b border-accent/10">
              <div className="flex gap-1.5">
                {DOT_COLORS.map((c, i) => <div key={i} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />)}
              </div>
              <div className="flex-1 bg-[#e8e1f5] h-5 flex items-center px-2.5 font-mono text-[9px] text-muted">
                {project.url ?? 'Private / NDA'}
              </div>
            </div>
            {project.url ? (
              <div className="relative" style={{ paddingTop: '56.25%', background: '#f1ebff' }}>
                <iframe
                  src={project.url}
                  className="absolute inset-0 w-full h-full border-none"
                  title={project.title}
                  sandbox="allow-scripts allow-same-origin allow-forms"
                  loading="lazy"
                />
              </div>
            ) : project.image ? (
              <div className="overflow-y-auto" style={{ maxHeight: '520px' }}>
                <img src={project.image} alt={project.title} className="w-full h-auto block" />
              </div>
            ) : (
              <div style={{ paddingTop: '56.25%', position: 'relative' }} className="bg-photo-placeholder">
                <div className="absolute inset-0 flex items-center justify-center flex-col gap-3">
                  <span className="font-display text-accent tracking-widest" style={{ fontSize: 'clamp(32px,4vw,52px)' }}>{project.title}</span>
                  <span className="font-mono text-[9px] tracking-[0.25em] text-muted uppercase">Gallery coming soon</span>
                </div>
              </div>
            )}
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 gap-10 mb-8">
            {project.metrics.map((m, i) => (
              <div key={i}>
                <div className="font-display text-accent leading-none" style={{ fontSize: 52 }}>{m.n}</div>
                <div className="font-mono text-[9px] tracking-[0.3em] text-muted uppercase mt-1">{m.l}</div>
              </div>
            ))}
          </div>

          <p className="font-serif text-muted leading-[1.9] mb-4" style={{ fontSize: 'clamp(14px,1.2vw,16px)' }}>
            {project.desc}
          </p>
          <p className="font-serif text-muted leading-[1.9]" style={{ fontSize: 'clamp(14px,1.2vw,16px)' }}>
            {project.body}
          </p>

          <div className="flex flex-wrap gap-2 mt-6">
            {project.tags.map(t => (
              <span key={t} className="font-mono text-[9px] tracking-[0.2em] text-accent px-3 py-1.5 border border-accent/15 bg-bg-2 uppercase">
                {t}
              </span>
            ))}
          </div>

          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              data-hover
              className="inline-flex items-center gap-2.5 font-mono text-[10px] tracking-[0.3em] uppercase text-white bg-accent px-7 py-3.5 mt-8 hover:bg-fg transition-colors duration-300 cursor-none no-underline"
            >
              Visit Live Site ↗
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

/* ── Work Section ── */
export default function Work() {
  const [active, setActive] = useState<Project | null>(null)

  return (
    <section id="work" className="py-[120px] bg-white">
      <div className="w-full max-w-[1400px] mx-auto px-[52px]">
        <Reveal>
          <div className="flex items-center gap-3.5 mb-12 font-mono text-[9px] tracking-[0.4em] text-accent uppercase">
            <span className="w-6 h-px bg-accent inline-block" />
            Selected Work
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-fg leading-none tracking-wide mb-5" style={{ fontSize: 'clamp(48px,7vw,106px)', lineHeight: '.88' }}>
            PROJECTS THAT<br /><span className="text-accent">PERFORM</span>
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="flex items-center gap-2.5 font-serif text-[15px] text-muted mb-20 -mt-12">
            <span className="w-5 h-px bg-accent inline-block flex-shrink-0" />
            Click any project to explore it live inside a browser
          </p>
        </Reveal>

        {SECTIONS.map((sec, si) => {
          const projects = PROJECTS.filter(p => p.section === sec.key)
          if (!projects.length) return null
          return (
            <div key={sec.key} className={si > 0 ? 'mt-24' : ''}>
              <Reveal>
                <div className="flex items-end justify-between gap-4 mb-8 border-b border-accent/10 pb-5">
                  <div>
                    <div className="font-mono text-[9px] tracking-[0.35em] text-accent uppercase mb-1.5">
                      0{si + 1}
                    </div>
                    <h3 className="font-display text-fg leading-none tracking-wide" style={{ fontSize: 'clamp(28px,3.5vw,48px)' }}>
                      {sec.label}
                    </h3>
                  </div>
                  <p className="font-serif text-[13px] text-muted leading-[1.7] max-w-[320px] text-right hidden md:block">
                    {sec.sub}
                  </p>
                </div>
              </Reveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                {projects.map(p => (
                  <ProjectCard key={p.id} project={p as Project} onOpen={setActive} />
                ))}
              </div>
            </div>
          )
        })}
      </div>

      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </section>
  )
}
