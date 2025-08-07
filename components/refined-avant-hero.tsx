"use client"

import { motion, useAnimation, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion"
import EnhancedMagneticButton from "./enhanced-magnetic-button"
import Image from "next/image"
import { useRef, useEffect } from "react"

export default function RefinedAvantHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Enhanced mouse reactive system
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)
  const smx = useSpring(mx, { stiffness: 100, damping: 25, mass: 0.8 })
  const smy = useSpring(my, { stiffness: 100, damping: 25, mass: 0.8 })

  const bgPos = useTransform([smx, smy], ([x, y]) => `${x * 100}% ${y * 100}%`)
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -100])

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - rect.left) / rect.width)
    my.set((e.clientY - rect.top) / rect.height)
  }

  return (
    <section ref={containerRef} className="relative pt-32 md:pt-40 pb-32 md:pb-40 min-h-screen flex items-center">
      {/* Enhanced animated background blobs */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-40 h-[60vh] w-[60vh] rounded-full blur-[100px]"
        initial={{ opacity: 0, scale: 0.8, x: -120, y: -100 }}
        animate={{ opacity: 0.8, scale: 1.2, x: 0, y: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        style={{
          background: "radial-gradient(closest-side, rgba(0,246,255,0.7), rgba(0,246,255,0.0) 70%)",
          y: parallaxY,
        }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute top-20 right-10 h-[70vh] w-[70vh] rounded-full blur-[120px]"
        initial={{ opacity: 0, scale: 0.8, x: 120, y: -60 }}
        animate={{ opacity: 0.7, scale: 1.1, x: 0, y: 0 }}
        transition={{ duration: 2.2, ease: "easeOut", delay: 0.2 }}
        style={{
          background: "radial-gradient(closest-side, rgba(255,0,199,0.6), rgba(255,0,199,0.0) 70%)",
          y: useTransform(parallaxY, (y) => y * 0.8),
        }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-15vh] left-1/2 -translate-x-1/2 h-[80vh] w-[80vh] rounded-full blur-[140px]"
        initial={{ opacity: 0, scale: 0.8, y: 100 }}
        animate={{ opacity: 0.6, scale: 1, y: 0 }}
        transition={{ duration: 2.4, ease: "easeOut", delay: 0.4 }}
        style={{
          background: "radial-gradient(closest-side, rgba(147,51,234,0.5), rgba(147,51,234,0.0) 70%)",
          y: useTransform(parallaxY, (y) => y * 0.6),
        }}
      />

      <div
        className="relative z-10 container px-6 md:px-10 w-full"
        onMouseMove={onMouseMove}
        style={{
          background: "radial-gradient(800px 800px at var(--x,50%) var(--y,35%), rgba(255,255,255,0.08), rgba(0,0,0,0))",
          backgroundPosition: bgPos as any,
        }}
      >
        <div className="grid lg:grid-cols-[1.3fr_0.7fr] items-center gap-16">
          {/* Enhanced left content */}
          <div>
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-400/20 border border-cyan-400/30 text-xs font-semibold text-cyan-400 mb-8">
                ✨ Award-winning Design Studio
              </span>
            </motion.div>

            <motion.h1
              className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.9] tracking-tight mb-8"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
              <motion.span 
                className="block text-transparent mb-3" 
                style={{ 
                  WebkitTextStroke: "2px rgba(255,255,255,0.8)",
                  textShadow: "0 0 40px rgba(0,246,255,0.3)"
                }}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                Design beyond
              </motion.span>
              <motion.span 
                className="block bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                convention.
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-white/80 leading-relaxed mb-12 max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
            >
              We craft asymmetric interfaces, kinetic typography, and immersive interactions that still feel effortless to use.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
            >
              <EnhancedMagneticButton>
                Explore the Work
              </EnhancedMagneticButton>
              <span className="text-sm text-white/60 font-medium">
                Awwwards-level experience — built for speed and clarity.
              </span>
            </motion.div>
          </div>

          {/* Enhanced floating cards */}
          <motion.div 
            className="relative h-[500px] sm:h-[600px] md:h-[700px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
          >
            <EnhancedFloatingCard
              className="absolute top-8 left-0 w-[65%] aspect-[4/5] z-30"
              img="/images/case-1.png"
              title="Sonic Bloom"
              subtitle="Motion + Sound"
              delay={0}
            />
            <EnhancedFloatingCard
              className="absolute bottom-8 right-4 w-[60%] aspect-[4/5] z-20"
              img="/images/case-2.png"
              title="Chromatic Drift"
              subtitle="Brand System"
              delay={0.2}
            />
            <EnhancedFloatingCard
              className="absolute top-32 right-[-8%] w-[45%] aspect-[4/5] z-10"
              img="/images/case-3.png"
              title="Arcadia"
              subtitle="3D Experiments"
              delay={0.4}
            />
          </motion.div>
        </div>

        {/* Enhanced feature tags */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-sm mt-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1.4 }}
        >
          {["Asymmetry", "Kinetic Type", "Parallax", "Glassmorphism", "Motion-first", "A11y"].map((tag, i) => (
            <motion.div 
              key={i} 
              className="rounded-2xl border border-white/15 px-4 py-3 text-center bg-white/8 backdrop-blur-xl font-medium hover:bg-white/12 hover:border-cyan-400/30 transition-all duration-300 cursor-pointer group"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.6 + i * 0.1 }}
              whileHover={{ y: -2, scale: 1.02 }}
            >
              <span className="group-hover:text-cyan-400 transition-colors duration-300">{tag}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function EnhancedFloatingCard({
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
      className={`${className} group rounded-3xl overflow-hidden border border-white/20 bg-white/10 backdrop-blur-2xl shadow-2xl hover:shadow-cyan-500/20 will-change-transform`}
      initial={{ y: 50, opacity: 0, rotate: -4, scale: 0.9 }}
      animate={{ y: 0, opacity: 1, rotate: 0, scale: 1 }}
      transition={{ 
        duration: 1.2, 
        ease: [0.23, 1, 0.320, 1], 
        delay,
        scale: { duration: 1.2 },
        rotate: { duration: 1.2 }
      }}
      whileHover={{ 
        y: -12, 
        rotate: 2, 
        scale: 1.05,
        transition: { duration: 0.4, ease: "easeOut" }
      }}
    >
      <div className="relative h-full w-full">
        <Image
          src={img || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 35vw, 30vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/40" />
        
        {/* Enhanced content overlay */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="text-[11px] uppercase tracking-[0.2em] text-white/90 mb-2 font-bold">{subtitle}</div>
          <div className="text-lg font-black text-white leading-tight">{title}</div>
        </div>
        
        <div className="absolute top-6 right-6 text-[11px] rounded-full bg-white/25 backdrop-blur-xl px-3 py-2 font-semibold border border-white/20 group-hover:bg-cyan-400/30 group-hover:border-cyan-400/50 transition-all duration-300">
          View
        </div>
        
        {/* Enhanced hover overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-cyan-500/10 via-transparent to-purple-500/10" />
      </div>
    </motion.div>
  )
}
