'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import Reveal from './Reveal'
import { SKILLS } from '@/lib/data'

function DNAScene() {
  const cr = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = cr.current; if (!canvas) return
    const W = () => canvas.clientWidth, H = () => canvas.clientHeight
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(W(), H(), false)
    const scene = new THREE.Scene()
    const cam = new THREE.PerspectiveCamera(50, W() / H(), .1, 100)
    cam.position.z = 5

    const sg = new THREE.SphereGeometry(.09, 16, 16)
    const m1 = new THREE.MeshStandardMaterial({ color: 0x8b35c0, emissive: 0x8b35c0, emissiveIntensity: .5 })
    const m2 = new THREE.MeshStandardMaterial({ color: 0xa855f7, emissive: 0xa855f7, emissiveIntensity: .4 })
    const bm = new THREE.MeshStandardMaterial({ color: 0xd8c8f0 })
    const grp = new THREE.Group()
    for (let i = 0; i < 44; i++) {
      const t = (i / 44) * Math.PI * 4.4, y = (i / 44) * 4.4 - 2.2
      const s1 = new THREE.Mesh(sg, m1); s1.position.set(Math.cos(t) * 1.05, y, Math.sin(t) * 1.05)
      const s2 = new THREE.Mesh(sg, m2); s2.position.set(Math.cos(t + Math.PI) * 1.05, y, Math.sin(t + Math.PI) * 1.05)
      grp.add(s1, s2)
      if (i % 5 === 0) {
        const b = new THREE.Mesh(new THREE.CylinderGeometry(.018, .018, 2.1, 8), bm)
        b.position.set(0, y, 0)
        b.lookAt(new THREE.Vector3(Math.cos(t) * 1.05, y, Math.sin(t) * 1.05))
        b.rotateX(Math.PI / 2)
        grp.add(b)
      }
    }
    scene.add(grp)
    const pl1 = new THREE.PointLight(0x8b35c0, 6, 12); pl1.position.set(2, 1, 3); scene.add(pl1)
    const pl2 = new THREE.PointLight(0xa855f7, 3, 9);  pl2.position.set(-2, -1, 2); scene.add(pl2)
    scene.add(new THREE.AmbientLight(0xffffff, .2))

    const mouse = { x: 0, y: 0 }
    const onM = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth  - .5) * 2
      mouse.y = -(e.clientY / window.innerHeight - .5) * 2
    }
    window.addEventListener('mousemove', onM, { passive: true })
    const onR = () => { cam.aspect = W() / H(); cam.updateProjectionMatrix(); renderer.setSize(W(), H(), false) }
    window.addEventListener('resize', onR)

    let raf: number; const clk = new THREE.Clock()
    const tick = () => {
      raf = requestAnimationFrame(tick); const t = clk.getElapsedTime()
      grp.rotation.y = t * .42 + mouse.x * .3
      grp.rotation.x = mouse.y * .18
      renderer.render(scene, cam)
    }
    tick()
    return () => { cancelAnimationFrame(raf); window.removeEventListener('mousemove', onM); window.removeEventListener('resize', onR); renderer.dispose() }
  }, [])

  return <canvas ref={cr} className="w-full h-full block" />
}

export default function About() {
  return (
    <section id="about" className="py-[120px] bg-bg-2">
      <div className="w-full max-w-[1400px] mx-auto px-[52px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        <Reveal>
          <div className="w-full" style={{ aspectRatio: '1' }}>
            <DNAScene />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <div className="flex items-center gap-3.5 mb-12 font-mono text-[9px] tracking-[0.4em] text-accent uppercase">
              <span className="w-6 h-px bg-accent inline-block" />
              Skills & Craft
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h2
              className="font-display text-fg leading-none tracking-wide mb-8"
              style={{ fontSize: 'clamp(40px, 5vw, 76px)', lineHeight: '.88' }}
            >
              CODE MEETS<br /><span className="text-accent">CRAFT</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="font-serif text-muted leading-[1.95] mb-5" style={{ fontSize: 'clamp(15px,1.3vw,17px)' }}>
              I'm obsessed with the intersection of{' '}
              <strong className="text-fg italic font-normal">beautiful 3D motion</strong>{' '}
              and measurable performance. Every pixel and millisecond is intentional.
            </p>
            <p className="font-serif text-muted leading-[1.95]" style={{ fontSize: 'clamp(15px,1.3vw,17px)' }}>
              Specializing in{' '}
              <strong className="text-fg italic font-normal">conversion rate optimization</strong>{' '}
              — using data, psychology, and flawless UX to turn traffic into revenue.
            </p>

            <div className="flex flex-wrap gap-2.5 mt-8">
              {SKILLS.map(s => (
                <div
                  key={s}
                  data-hover
                  className="font-mono text-[9px] tracking-[0.2em] uppercase px-3.5 py-2 border border-accent/15 text-muted hover:border-accent hover:text-accent hover:bg-accent-light transition-all duration-300 cursor-none"
                >
                  {s}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
      </div>
    </section>
  )
}
