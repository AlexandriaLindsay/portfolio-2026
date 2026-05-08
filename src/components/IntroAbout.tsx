import Reveal from './Reveal'

export default function IntroAbout() {
  const go = (id: string) =>
    typeof window !== 'undefined' &&
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="relative overflow-hidden bg-bg-2 border-b border-accent/10 py-[100px]">
      {/* Glow orb */}
      <div
        className="pointer-events-none absolute -top-52 -right-52 w-[600px] h-[600px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(139,53,192,.07) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-[52px] grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

        {/* Photo */}
        <Reveal>
          <div className="relative photo-frame-offset max-w-[400px]">
            <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
              {/*
                ── REPLACE THE DIV BELOW WITH YOUR PHOTO ──
                <img src="/images/you.jpg" alt="Your Name" className="w-full h-full object-cover block relative z-10" />
              */}
              <div className="w-full h-full bg-photo-placeholder flex flex-col items-center justify-center gap-4 relative z-10">
                <span className="text-[52px] opacity-35">🧑‍💻</span>
                <p className="font-mono text-[9px] tracking-[0.2em] text-muted uppercase text-center leading-loose px-6">
                  Your photo here<br />
                  <span className="text-accent text-[8px]">Replace with &lt;img className="photo-img"&gt;</span>
                </p>
              </div>
            </div>

            {/* Floating tag */}
            <div className="absolute top-7 -left-7 z-10 bg-white border border-accent/15 px-4 py-2.5 shadow-purple-sm">
              <span className="font-mono text-[9px] tracking-[0.2em] text-accent uppercase">Available for work ✦</span>
            </div>

            {/* Badge */}
            <div className="absolute -bottom-5 -right-5 z-10 w-[90px] h-[90px] rounded-full bg-accent flex flex-col items-center justify-center shadow-badge">
              <span className="font-display text-[26px] text-white leading-none">8+</span>
              <span className="font-mono text-[7px] tracking-[0.2em] text-white/85 uppercase mt-0.5 text-center">Years Exp.</span>
            </div>
          </div>
        </Reveal>

        {/* Text */}
        <div>
          <Reveal>
            <div className="flex items-center gap-3.5 mb-6 font-mono text-[9px] tracking-[0.4em] text-accent uppercase">
              <span className="w-6 h-px bg-accent inline-block" />
              Who I Am
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div
              className="font-display text-fg leading-none tracking-wide mb-5"
              style={{ fontSize: 'clamp(44px, 5.5vw, 80px)' }}
            >
              HI, I'M<br />
              <span className="text-accent">YOUR NAME</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex items-center gap-2.5 mb-8 flex-wrap">
              {['Full-Stack Developer', 'CRO Specialist', 'WebGL Engineer'].map((r, i) => (
                <span key={r} className="flex items-center gap-2.5">
                  <span className="w-1 h-1 rounded-full bg-accent/60 flex-shrink-0" />
                  <span className="font-mono text-[10px] tracking-[0.3em] text-muted uppercase">{r}</span>
                </span>
              ))}
            </div>

            <p className="font-serif text-muted leading-[1.95] mb-5" style={{ fontSize: 'clamp(15px,1.3vw,17px)' }}>
              I'm a full-stack developer who believes the best websites{' '}
              <strong className="text-fg italic font-normal">earn their keep.</strong>{' '}
              Not just beautiful — but measurably, provably effective at driving revenue.
            </p>
            <p className="font-serif text-muted leading-[1.95]" style={{ fontSize: 'clamp(15px,1.3vw,17px)' }}>
              With <strong className="text-fg italic font-normal">8+ years of real-world client work</strong>, I've built
              everything from real-time fintech dashboards to Awwwards-winning WebGL experiences — always asking:{' '}
              <em>will this move the needle?</em>
            </p>

            <div className="flex gap-3.5 flex-wrap mt-9">
              <button
                onClick={() => go('work')}
                data-hover
                className="font-mono text-[10px] tracking-[0.3em] uppercase px-7 py-3.5 bg-accent border-[1.5px] border-accent text-white hover:bg-fg hover:border-fg transition-colors duration-300 cursor-none"
              >
                See My Work
              </button>
              <button
                onClick={() => go('contact')}
                data-hover
                className="font-mono text-[10px] tracking-[0.3em] uppercase px-7 py-3.5 bg-transparent border-[1.5px] border-accent/20 text-muted hover:border-accent hover:text-accent hover:bg-accent-light transition-all duration-300 cursor-none"
              >
                Start a Project
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
