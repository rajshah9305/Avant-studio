"use client"

import { motion, useAnimation, useMotionValue, useSpring, useTransform } from "framer-motion"
import MagneticButton from "./magnetic-button"
import Image from "next/image"

export default function AvantHero() {
  // Background blob animation positions
  const controls = useAnimation()

  // Mouse reactive light for the hero
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)
  const smx = useSpring(mx, { stiffness: 120, damping: 30, mass: 0.6 })
  const smy = useSpring(my, { stiffness: 120, damping: 30, mass: 0.6 })

  const bgPos = useTransform([smx, smy], ([x, y]) => `${x * 100}% ${y * 100}%`)

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - rect.left) / rect.width)
    my.set((e.clientY - rect.top) / rect.height)
  }

  return (
    <section className="relative pt-28 md:pt-36 pb-24 md:pb-36">
      {/* Animated blurred blobs */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-40 h-[55vh] w-[55vh] rounded-full blur-[80px]"
        initial={{ opacity: 0, scale: 0.9, x: -100, y: -80 }}
        animate={{ opacity: 0.7, scale: 1, x: 0, y: 0 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        style={{
          background:
            "radial-gradient(closest-side, rgba(0,246,255,0.6), rgba(0,246,255,0.0) 70%)",
        }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute top-20 right-10 h-[60vh] w-[60vh] rounded-full blur-[100px]"
        initial={{ opacity: 0, scale: 0.9, x: 100, y: -50 }}
        animate={{ opacity: 0.6, scale: 1, x: 0, y: 0 }}
        transition={{ duration: 1.6, ease: "easeOut", delay: 0.1 }}
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,0,199,0.5), rgba(255,0,199,0.0) 70%)",
        }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-10vh] left-1/2 -translate-x-1/2 h-[70vh] w-[70vh] rounded-full blur-[120px]"
        initial={{ opacity: 0, scale: 0.9, y: 80 }}
        animate={{ opacity: 0.5, scale: 1, y: 0 }}
        transition={{ duration: 1.7, ease: "easeOut", delay: 0.2 }}
        style={{
          background:
            "radial-gradient(closest-side, rgba(147,51,234,0.45), rgba(147,51,234,0.0) 70%)",
        }}
      />

      <div
        className="relative z-10 container px-6 md:px-10"
        onMouseMove={onMouseMove}
        style={{
          background: "radial-gradient(600px 600px at var(--x,50%) var(--y,35%), rgba(255,255,255,0.06), rgba(0,0,0,0))",
          backgroundPosition: bgPos as any,
        }}
      >
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] items-end gap-10">
          {/* Left: Headline */}
          <div>
            <motion.h1
              className="text-5xl sm:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="block text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.7)" }}>
                Design beyond
              </span>
              <span className="block bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                convention.
              </span>
            </motion.h1>
            <motion.p
              className="mt-6 max-w-xl text-sm sm:text-base md:text-lg text-white/70"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            >
              We craft asymmetric interfaces, kinetic typography, and immersive interactions that still feel effortless to use.
            </motion.p>
            <motion.div
              className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <MagneticButton>
                Explore the Work
              </MagneticButton>
              <span className="text-xs text-white/60">
                Awwwards-level experience — built for speed and clarity.
              </span>
            </motion.div>
          </div>

          {/* Right: Floating glass cards (asymmetric) */}
          <motion.div
            className="relative h-[420px] sm:h-[480px] md:h-[520px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          >
            <FloatingCard
              className="absolute top-6 left-0 w-[62%] aspect-[4/5]"
              img="/images/case-1.png"
              title="Sonic Bloom"
              subtitle="Motion + Sound"
              delay={0}
            />
            <FloatingCard
              className="absolute bottom-0 right-2 w-[58%] aspect-[4/5]"
              img="/images/case-2.png"
              title="Chromatic Drift"
              subtitle="Brand System"
              delay={0.12}
            />
            <FloatingCard
              className="absolute top-24 right-[-4%] w-[42%] aspect-[4/5]"
              img="/images/case-3.png"
              title="Arcadia"
              subtitle="3D Experiments"
              delay={0.2}
            />
          </motion.div>
        </div>

        {/* Meta row */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-xs opacity-70">
          {["Asymmetry", "Kinetic Type", "Parallax", "Glassmorphism", "Motion-first", "A11y"].map((t, i) => (
            <div key={i} className="rounded-full border border-white/10 px-3 py-2 text-center bg-white/5 backdrop-blur">
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FloatingCard({
  className = "",
  img = "/images/case-1.png",
  title = "Project",
  subtitle = "Category",
  delay = 0,
}: {
  className?: string
  img?: string
  title?: string
  subtitle?: string
  delay?: number
}) {
  return (
    <motion.div
      className={className + " group rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_20px_80px_-20px_rgba(0,0,0,0.5)] will-change-transform"}
      initial={{ y: 30, opacity: 0, rotate: -2 }}
      animate={{ y: 0, opacity: 1, rotate: 0 }}
      transition={{ duration: 0.9, ease: "easeOut", delay }}
      whileHover={{ y: -6, rotate: 0.6 }}
    >
      <div className="relative h-full w-full">
        <Image
          src={img || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 40vw, (max-width: 1200px) 30vw, 24vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
          <div>
            <div className="text-sm font-semibold">{title}</div>
            <div className="text-[10px] uppercase tracking-widest text-white/70">{subtitle}</div>
          </div>
          <div className="text-[10px] rounded-full bg-white/15 px-2 py-1">View</div>
        </div>
      </div>
    </motion.div>
  )
}
