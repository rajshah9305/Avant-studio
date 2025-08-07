"use client"

import { useEffect, useRef } from "react"

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      color: string
      pulse: number
    }> = []

    const colors = ["rgba(0,246,255,", "rgba(255,0,199,", "rgba(147,51,234,", "rgba(255,255,255,"]

    // Create more particles for enhanced effect
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.6 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulse: Math.random() * Math.PI * 2
      })
    }

    let animationFrame = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      animationFrame++

      particles.forEach((particle, i) => {
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy
        particle.pulse += 0.02

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Pulsing effect
        const pulsedSize = particle.size + Math.sin(particle.pulse) * 0.5
        const pulsedOpacity = particle.opacity + Math.sin(particle.pulse) * 0.2

        // Draw particle with glow effect
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, pulsedSize, 0, Math.PI * 2)
        ctx.fillStyle = `${particle.color}${pulsedOpacity})`
        ctx.fill()

        // Add glow
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, pulsedSize * 2, 0, Math.PI * 2)
        ctx.fillStyle = `${particle.color}${pulsedOpacity * 0.3})`
        ctx.fill()

        // Draw enhanced connections
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            const connectionOpacity = 0.15 * (1 - distance / 120)
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.strokeStyle = `rgba(255,255,255,${connectionOpacity})`
            ctx.lineWidth = 1
            ctx.stroke()

            // Add gradient to connection lines
            const gradient = ctx.createLinearGradient(particle.x, particle.y, otherParticle.x, otherParticle.y)
            gradient.addColorStop(0, `${particle.color}${connectionOpacity})`)
            gradient.addColorStop(1, `${otherParticle.color}${connectionOpacity})`)
            ctx.strokeStyle = gradient
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-70"
    />
  )
}
