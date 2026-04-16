'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number; y: number
  vx: number; vy: number
  r: number; alpha: number
}

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const animRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!

    let W = (canvas.width = window.innerWidth)
    let H = (canvas.height = window.innerHeight)
    let particles: Particle[] = []

    const init = () => {
      particles = []
      const N = Math.min(Math.floor((W * H) / 18000), 70)
      for (let i = 0; i < N; i++) {
        particles.push({
          x: Math.random() * W, y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          r: Math.random() * 1.4 + 0.3,
          alpha: Math.random() * 0.35 + 0.05,
        })
      }
    }
    init()

    const onResize = () => {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
      init()
    }
    const onMouse = (e: MouseEvent) => { mouseRef.current = { x: e.clientX, y: e.clientY } }
    window.addEventListener('resize', onResize)
    window.addEventListener('mousemove', onMouse)

    const t0 = performance.now()
    const draw = (now: number) => {
      const t = (now - t0) * 0.001
      ctx.clearRect(0, 0, W, H)

      // Subtle grid
      ctx.strokeStyle = 'rgba(255,255,255,0.013)'
      ctx.lineWidth = 1
      for (let x = 0; x < W; x += 90) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke() }
      for (let y = 0; y < H; y += 90) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke() }

      // Ambient orbs
      const orbs = [
        { fx: 0.18, fy: 0.22, fr: 0.38, c: '108,99,255', amp: 0.08 },
        { fx: 0.82, fy: 0.78, fr: 0.30, c: '0,229,176', amp: 0.06 },
        { fx: 0.55, fy: 0.08, fr: 0.20, c: '255,94,98', amp: 0.04 },
      ]
      orbs.forEach(o => {
        const gx = o.fx * W + Math.sin(t * 0.3) * 40
        const gy = o.fy * H + Math.cos(t * 0.25) * 30
        const radius = o.fr * Math.min(W, H)
        const g = ctx.createRadialGradient(gx, gy, 0, gx, gy, radius)
        g.addColorStop(0, `rgba(${o.c},${o.amp})`)
        g.addColorStop(1, `rgba(${o.c},0)`)
        ctx.fillStyle = g
        ctx.beginPath(); ctx.arc(gx, gy, radius, 0, Math.PI * 2); ctx.fill()
      })

      // Mouse glow
      const { x: mx, y: my } = mouseRef.current
      const mg = ctx.createRadialGradient(mx, my, 0, mx, my, 300)
      mg.addColorStop(0, 'rgba(108,99,255,0.06)')
      mg.addColorStop(1, 'rgba(108,99,255,0)')
      ctx.fillStyle = mg
      ctx.beginPath(); ctx.arc(mx, my, 300, 0, Math.PI * 2); ctx.fill()

      // Particles
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(108,99,255,${p.alpha})`; ctx.fill()
      })

      // Connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j]
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < 110) {
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(108,99,255,${0.09 * (1 - d / 110)})`
            ctx.lineWidth = 0.5; ctx.stroke()
          }
        }
      }

      animRef.current = requestAnimationFrame(draw)
    }
    animRef.current = requestAnimationFrame(draw)

    return () => {
      window.removeEventListener('resize', onResize)
      window.removeEventListener('mousemove', onMouse)
      cancelAnimationFrame(animRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  )
}
