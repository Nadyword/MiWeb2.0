"use client"

import { useEffect, useRef, useCallback } from "react"

/* ───────────────────────────────────────────────
   1. Particle Network – floating dots with lines
   ─────────────────────────────────────────────── */
export function ParticleNetwork({
  particleCount = 60,
  color = "0,163,255",
  className = "",
}: {
  particleCount?: number
  color?: string
  className?: string
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -1000, y: -1000 })

  const draw = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      particles: { x: number; y: number; vx: number; vy: number; r: number }[],
      w: number,
      h: number,
    ) => {
      ctx.clearRect(0, 0, w, h)

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${color},0.5)`
        ctx.fill()
      }

      // Draw connections
      const maxDist = 140
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < maxDist) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(${color},${0.15 * (1 - dist / maxDist)})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
        // Mouse interaction
        const dxM = particles[i].x - mouseRef.current.x
        const dyM = particles[i].y - mouseRef.current.y
        const distM = Math.sqrt(dxM * dxM + dyM * dyM)
        if (distM < 180) {
          ctx.beginPath()
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(mouseRef.current.x, mouseRef.current.y)
          ctx.strokeStyle = `rgba(${color},${0.25 * (1 - distM / 180)})`
          ctx.lineWidth = 0.8
          ctx.stroke()
        }
      }
    },
    [color],
  )

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animId: number
    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()

    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      r: Math.random() * 1.5 + 0.5,
    }))

    const handleMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }

    canvas.addEventListener("mousemove", handleMouse)
    window.addEventListener("resize", resize)

    const loop = () => {
      draw(ctx, particles, canvas.width, canvas.height)
      animId = requestAnimationFrame(loop)
    }
    loop()

    return () => {
      cancelAnimationFrame(animId)
      canvas.removeEventListener("mousemove", handleMouse)
      window.removeEventListener("resize", resize)
    }
  }, [particleCount, draw])

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-auto absolute inset-0 h-full w-full ${className}`}
    />
  )
}

/* ───────────────────────────────────────────────
   2. Animated Grid – subtle moving grid pattern
   ─────────────────────────────────────────────── */
export function AnimatedGrid({
  color = "0,163,255",
  className = "",
}: {
  color?: string
  className?: string
}) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div
        className="animate-grid-scroll absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(${color},0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(${color},0.05) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Radial fade on edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,hsl(var(--background))_80%)]" />
    </div>
  )
}

/* ───────────────────────────────────────────────
   3. Floating Orbs – blurred gradient circles
   ─────────────────────────────────────────────── */
export function FloatingOrbs({
  count = 5,
  className = "",
}: {
  count?: number
  className?: string
}) {
  const orbs = Array.from({ length: count }, (_, i) => ({
    id: i,
    size: 180 + Math.random() * 260,
    x: 10 + Math.random() * 80,
    y: 10 + Math.random() * 80,
    delay: Math.random() * 4,
    duration: 12 + Math.random() * 10,
    isPrimary: i % 2 === 0,
  }))

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {orbs.map((orb) => (
        <div
          key={orb.id}
          className="animate-orb-drift absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            background: orb.isPrimary
              ? "radial-gradient(circle, hsl(var(--primary) / 0.12), transparent 70%)"
              : "radial-gradient(circle, hsl(var(--accent) / 0.08), transparent 70%)",
            filter: `blur(${60 + orb.size / 5}px)`,
            animationDelay: `${orb.delay}s`,
            animationDuration: `${orb.duration}s`,
          }}
        />
      ))}
    </div>
  )
}

/* ───────────────────────────────────────────────
   4. Meteor Shower – streaking lines
   ─────────────────────────────────────────────── */
export function MeteorShower({
  count = 12,
  className = "",
}: {
  count?: number
  className?: string
}) {
  const meteors = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${5 + Math.random() * 90}%`,
    delay: Math.random() * 8,
    duration: 2 + Math.random() * 3,
    size: 60 + Math.random() * 100,
  }))

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {meteors.map((m) => (
        <div
          key={m.id}
          className="animate-meteor absolute"
          style={{
            left: m.left,
            top: "-5%",
            width: "1px",
            height: m.size,
            background:
              "linear-gradient(to bottom, hsl(var(--primary) / 0.6), transparent)",
            animationDelay: `${m.delay}s`,
            animationDuration: `${m.duration}s`,
          }}
        />
      ))}
    </div>
  )
}

/* ───────────────────────────────────────────────
   5. Scan Line – horizontal sweep
   ─────────────────────────────────────────────── */
export function ScanLine({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className="animate-scan absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
    </div>
  )
}

/* ───────────────────────────────────────────────
   6. Aurora / Mesh Gradient – slow morphing blobs
   ─────────────────────────────────────────────── */
export function Aurora({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className="animate-aurora-1 absolute -left-1/4 -top-1/4 h-[60%] w-[60%] rounded-full bg-primary/8 blur-[120px]" />
      <div className="animate-aurora-2 absolute -bottom-1/4 -right-1/4 h-[50%] w-[50%] rounded-full bg-accent/6 blur-[100px]" />
      <div className="animate-aurora-3 absolute left-1/3 top-1/2 h-[40%] w-[40%] -translate-y-1/2 rounded-full bg-primary/5 blur-[80px]" />
    </div>
  )
}
