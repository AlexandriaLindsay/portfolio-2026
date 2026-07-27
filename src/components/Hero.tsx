'use client'

import { useEffect, useRef, useState } from 'react'

function CountUp({ to, active, duration = 1600 }: { to: number; active: boolean; duration?: number }) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!active) return
    let start: number | null = null
    let raf: number
    const step = (ts: number) => {
      if (start === null) start = ts
      const p = Math.min((ts - start) / duration, 1)
      setVal(Math.round((1 - Math.pow(1 - p, 3)) * to))
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [active, to, duration])
  return <>{val}</>
}
import * as THREE from 'three'
import { STATS } from '@/lib/data'

interface HeroProps { loaded: boolean }

export default function Hero({ loaded }: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  useEffect(() => {
    if (!loaded) return
    const canvas = canvasRef.current
    if (!canvas) return

    const W = () => canvas.parentElement?.clientWidth  ?? window.innerWidth
    const H = () => canvas.parentElement?.clientHeight ?? window.innerHeight

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: true, powerPreference: 'high-performance' })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    renderer.setSize(W(), H(), false)
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.1

    const scene = new THREE.Scene()
    const cam   = new THREE.PerspectiveCamera(60, W() / H(), 0.1, 100)
    cam.position.z = 6

    // Particles
    const N  = 1000
    const pg = new THREE.BufferGeometry()
    const pp = new Float32Array(N * 3)
    const ps = new Float32Array(N)
    const pr = new Float32Array(N)
    for (let i = 0; i < N; i++) {
      pp[i*3]   = (Math.random() - .5) * 26
      pp[i*3+1] = (Math.random() - .5) * 15
      pp[i*3+2] = (Math.random() - .5) * 10
      ps[i] = Math.random()
      pr[i] = Math.random()
    }
    pg.setAttribute('position', new THREE.BufferAttribute(pp, 3))
    pg.setAttribute('aS', new THREE.BufferAttribute(ps, 1))
    pg.setAttribute('aR', new THREE.BufferAttribute(pr, 1))

    const pm = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false,
      uniforms: { uT: { value: 0 } },
      vertexShader: `
        attribute float aS; attribute float aR; uniform float uT; varying float vR;
        void main(){
          vR=aR; vec3 p=position;
          p.y+=sin(uT*.4+aR*6.28)*.28*aR;
          p.x+=cos(uT*.3+aR*3.14)*.16*aR;
          vec4 mv=modelViewMatrix*vec4(p,1.);
          gl_Position=projectionMatrix*mv;
          gl_PointSize=(aS*2.8+.4)*(180./-mv.z);
        }`,
      fragmentShader: `
        varying float vR;
        void main(){
          vec2 uv=gl_PointCoord-.5; float d=length(uv);
          if(d>.5)discard;
          float a=smoothstep(.5,.08,d);
          vec3 c=vR>.82?vec3(.67,.33,.94):vec3(.55,.21,.75);
          gl_FragColor=vec4(c,a*.72);
        }`,
    })
    const pts = new THREE.Points(pg, pm)
    scene.add(pts)

    // Torus knot
    const kg = new THREE.TorusKnotGeometry(1.7, .4, 120, 16, 2, 3)
    const km = new THREE.ShaderMaterial({
      uniforms: { uT: { value: 0 } },
      vertexShader: `
        uniform float uT; varying vec3 vN;
        void main(){
          vN=normalize(normalMatrix*normal);
          vec3 p=position+normal*sin(uT*.8+length(position)*1.6)*.07;
          gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);
        }`,
      fragmentShader: `
        varying vec3 vN;
        void main(){
          float t=vN.y*.5+.5;
          vec3 a=vec3(.78,.38,.99);
          vec3 b=vec3(.36,.10,.82);
          gl_FragColor=vec4(mix(b,a,t),1.);
        }`,
    })
    const knot = new THREE.Mesh(kg, km)
    knot.position.set(3.8, .6, -1.5)
    scene.add(knot)

    // Icosahedron
    const ico = new THREE.Mesh(
      new THREE.IcosahedronGeometry(.95, 1),
      new THREE.MeshStandardMaterial({ color: 0x2a0a4a, emissive: new THREE.Color('#9b45cc'), emissiveIntensity: .25, roughness: .15, metalness: .9 })
    )
    ico.position.set(-4.2, 1.4, .5)
    scene.add(ico)

    // Ring
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(1.1, .018, 16, 120),
      new THREE.MeshBasicMaterial({ color: 0xc062f0, transparent: true, opacity: .3 })
    )
    ring.position.set(-1.5, -1.8, 1)
    scene.add(ring)

    const l1 = new THREE.PointLight(0x9b45cc, 5, 14); l1.position.set(2, 2, 4); scene.add(l1)
    const l2 = new THREE.PointLight(0xc062f0, 3, 10); l2.position.set(-3, -1, 3); scene.add(l2)
    scene.add(new THREE.AmbientLight(0xffffff, .05))

    const mouse = new THREE.Vector2()
    let mouseTick = false
    const onM = (e: MouseEvent) => {
      if (mouseTick) return; mouseTick = true
      requestAnimationFrame(() => {
        mouse.x = (e.clientX / window.innerWidth  - .5) * 14
        mouse.y = -(e.clientY / window.innerHeight - .5) * 9
        mouseTick = false
      })
    }
    window.addEventListener('mousemove', onM, { passive: true })

    const onR = () => {
      cam.aspect = W() / H()
      cam.updateProjectionMatrix()
      renderer.setSize(W(), H(), false)
    }
    window.addEventListener('resize', onR)

    let raf: number
    let running = true
    const clock = new THREE.Clock()
    const tick = () => {
      if (!running) return
      raf = requestAnimationFrame(tick)
      const t = clock.getElapsedTime()
      pm.uniforms.uT.value = t
      km.uniforms.uT.value = t
      knot.rotation.x = t * .11;  knot.rotation.y = t * .18
      ico.rotation.x  = t * .28;  ico.rotation.y  = t * .19
      ico.position.y  = 1.4 + Math.sin(t * .5) * .4
      ring.rotation.x = t * .22;  ring.rotation.z = t * .14
      l1.position.x   = Math.sin(t * .55) * 3.5
      l1.position.y   = Math.cos(t * .38) * 2.2
      cam.position.x += (mouse.x * .028 - cam.position.x) * .04
      cam.position.y += (mouse.y * .028 - cam.position.y) * .04
      cam.lookAt(scene.position)
      renderer.render(scene, cam)
    }
    tick()

    const sectionEl = canvas.parentElement
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !running) {
        running = true
        tick()
      } else if (!entry.isIntersecting && running) {
        running = false
        cancelAnimationFrame(raf)
      }
    }, { threshold: 0 })
    if (sectionEl) io.observe(sectionEl)

    return () => {
      running = false
      cancelAnimationFrame(raf)
      io.disconnect()
      window.removeEventListener('mousemove', onM)
      window.removeEventListener('resize', onR)
      renderer.dispose()
    }
  }, [loaded])

  return (
    <section
      id="home"
      className="relative h-[117vh] overflow-hidden flex flex-col justify-start pt-[130px] md:pt-[96px]"
      style={{ background: '#1a0a2e' }}
    >
      {/* 3D Canvas */}
      <canvas ref={canvasRef} id="hero-canvas" />

      {/* Text content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-[52px]">
        {/* Eyebrow */}
        <div className="hero-anim-1 font-mono text-[10px] tracking-[0.4em] text-accent-2 uppercase flex items-center gap-4 mb-6">
          <span className="w-10 h-px bg-accent-2 inline-block flex-shrink-0" />
          Fast, Reliable Business Solutions        
        </div>

        {/* H1 */}
        <h1
          className="hero-anim-2 font-display text-white leading-none tracking-tight"
          style={{ fontSize: 'clamp(52px, 11vw, 175px)', lineHeight: '0.88' }}
        >
          BUILDING SITES<br />
          THAT{' '}
          <em className="not-italic" style={{ color: '#a855f7' }}>CONVERT</em>
          <br />
          &amp;{' '}
          <em className="not-italic" style={{ color: '#a855f7' }}>CAPTIVATE</em>
        </h1>

        {/* Sub */}
        <p className="hero-anim-3 font-serif text-white/60 mt-7 max-w-[440px] leading-[1.95]"
          style={{ fontSize: 'clamp(14px, 1.3vw, 18px)' }}>
          I build high-performance websites that combine thoughtful design, fast performance, and seamless user experiences, helping businesses turn visitors into customers.
        </p>

        {/* Stats */}
        {/* <div className="hero-anim-4 flex gap-12 mt-12 flex-wrap">
          {STATS.map(({ n, s, l }) => {
            const m = n.match(/^(\D*)(\d+)(\D*)$/)
            const pre = m?.[1] ?? ''
            const num = parseInt(m?.[2] ?? '0')
            const suf = m?.[3] ?? ''
            return (
              <div key={l}>
                <div className="font-display text-white leading-none" style={{ fontSize: 42 }}>
                  {pre}<CountUp to={num} active={loaded} />{suf}<span style={{ color: '#a855f7' }}>{s}</span>
                </div>
                <div className="font-mono text-[9px] tracking-[0.3em] text-white/45 uppercase mt-1.5">{l}</div>
              </div>
            )
          })}
        </div> */}

        {/* CTAs */}
        <div className="hero-anim-5 flex gap-3 sm:gap-4 mt-11">
          <button
            onClick={() => go('work')}
            data-hover
            className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] uppercase px-5 sm:px-8 py-3.5 bg-accent border border-accent text-white hover:bg-white hover:text-accent hover:border-white transition-colors duration-300 cursor-none"
          >
            View Work →
          </button>
          <button
            onClick={() => go('contact')}
            data-hover
            className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] uppercase px-5 sm:px-8 py-3.5 bg-transparent border border-white/25 text-white/70 hover:border-white/70 hover:text-white transition-colors duration-300 cursor-none"
          >
            Start a Project
          </button>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hero-anim-scroll absolute right-5 sm:right-[52px] bottom-20 z-10 hidden sm:flex flex-col items-center gap-3">
        <div className="scroll-pulse w-px h-[60px]" style={{ background: 'linear-gradient(#a855f7, transparent)' }} />
        <span className="font-mono text-[9px] tracking-[0.3em] text-white/40 [writing-mode:vertical-rl]">Scroll</span>
      </div>
    </section>
  )
}
