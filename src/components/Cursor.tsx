'use client'

import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dot  = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)
  const mp   = useRef({ x: -200, y: -200 })
  const rp   = useRef({ x: -200, y: -200 })

  useEffect(() => {
    const mv  = (e: MouseEvent) => { mp.current = { x: e.clientX, y: e.clientY } }
    const mdn = () => dot.current?.classList.add('clicking')
    const mup = () => dot.current?.classList.remove('clicking')

    window.addEventListener('mousemove', mv, { passive: true })
    window.addEventListener('mousedown', mdn)
    window.addEventListener('mouseup',   mup)

    const onOver = (e: MouseEvent) => {
      const hoverable = (e.target as Element).closest?.('a,button,[data-hover]') !== null
      ring.current?.classList.toggle('hovering', hoverable)
    }
    document.addEventListener('mouseover', onOver)

    let raf: number
    const loop = () => {
      rp.current.x += (mp.current.x - rp.current.x) * 0.1
      rp.current.y += (mp.current.y - rp.current.y) * 0.1
      if (dot.current)
        dot.current.style.transform = `translate(${mp.current.x}px,${mp.current.y}px) translate(-50%,-50%)`
      if (ring.current)
        ring.current.style.transform = `translate(${rp.current.x}px,${rp.current.y}px) translate(-50%,-50%)`
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', mv)
      window.removeEventListener('mousedown', mdn)
      window.removeEventListener('mouseup',   mup)
      cancelAnimationFrame(raf)
      document.removeEventListener('mouseover', onOver)
    }
  }, [])

  return (
    <>
      <div ref={dot}  className="cursor-dot" />
      <div ref={ring} className="cursor-ring" />
    </>
  )
}
