"use client"

import { motion, useAnimation, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion"
import UltimateMagneticButton from "./ultimate-magnetic-button"
import Image from "next/image"
import { useRef, useEffect, useState } from "react"
import { Play, ArrowRight, Sparkles, Zap } from 'lucide-react'

export default function StunningAvantHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Enhanced mouse reactive system
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)
  const smx = useSpring(mx, { stiffness: 80, damping: 20, mass: 1 })
  const smy = useSpring(my, { stiffness: 80, damping: 20, mass: 1 })

  const bgPos = useTransform([smx, smy], ([x, y]) => `${x * 100}% ${y * 100}%`)
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -200])

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    mx.set(x)
    my.set(y)
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Massive enhanced background blobs */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -top-1/2 -left-1/2 h-[120vh] w-[120vh] rounded-full blur-[150px]"
        initial={{ opacity: 0, scale: 0.6, x: -200, y: -150 }}
        animate={{ opacity: 0.9, scale: 1.4, x: 0, y: 0 }}
        transition={{ duration: 3, ease: [0.23, 1, 0.320, 1] }}
        style={{
          background: "radial-gradient(closest-side, rgba(0,246,255,0.8), rgba(0,246,255,0.0) 60%)",
          y: parallaxY,
        }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 h-[100vh] w-[100vh] rounded-full blur-[140px]"
        initial={{ opacity: 0, scale: 0.6, x: 200, y: -100 }}
        animate={{ opacity: 0.8, scale: 1.3, x: 0, y: 0 }}
        transition={{ duration: 3.2, ease: [0.23, 1, 0.320, 1], delay: 0.3 }}
        style={{
          background: "radial-gradient(closest-side, rgba(255,0,199,0.7), rgba(255,0,199,0.0) 60%)",
          y: useTransform(parallaxY, (y) => y * 0.7),
        }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-[110vh] w-[110vh] rounded-full blur-[160px]"
        initial={{ opacity: 0, scale: 0.6, y: 200 }}
        animate={{ opacity: 0.7, scale: 1.2, y: 0 }}
        transition={{ duration: 3.4, ease: [0.23, 1, 0.320, 1], delay: 0.6 }}
        style={{
          background: "radial-gradient(closest-side, rgba(147,51,234,0.6), rgba(147,51,234,0.0) 60%)",
          y: useTransform(parallaxY, (y) => y * 0.5),
        }}
      />

      {/* Interactive light following cursor */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px 600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.15), transparent 70%)`,
        }}
      />

      <div
        className="relative z-10 container px-6 md:px-10 w-full text-center"
        onMouseMove={onMouseMove}
      >
        {/* Hero Badge */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: [0.23, 1, 0.320, 1] }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 border border-cyan-400/40 backdrop-blur-xl">
            <Sparkles className="size-4 text-cyan-400" />
            <span className="text-sm font-bold text-cyan-400 tracking-wide">Award-winning Design Studio</span>
            <div className="size-2 rounded-full bg-cyan-400 animate-pulse"></div>
          </div>
        </motion.div>

        {/* Massive Hero Title */}
        <motion.h1
          className="text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem] font-black leading-[0.85] tracking-tighter mb-8"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.23, 1, 0.320, 1], delay: 0.2 }}
        >
          <motion.div 
            className="block mb-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
          >
            <span 
              className="text-transparent block" 
              style={{ 
                WebkitTextStroke: "3px rgba(255,255,255,0.9)",
                textShadow: "0 0 60px rgba(0,246,255,0.4), 0 0 120px rgba(0,246,255,0.2)"
              }}
            >
              DESIGN
            </span>
          </motion.div>
          <motion.div 
            className="block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
          >
            <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent drop-shadow-2xl">
              BEYOND
            </span>
          </motion.div>
        </motion.h1>

        {/* Subtitle with enhanced typography */}
        <motion.p
          className="text-xl md:text-2xl lg:text-3xl text-white/90 leading-relaxed mb-12 max-w-4xl mx-auto font-light"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.23, 1, 0.320, 1], delay: 0.8 }}
        >
          We craft{" "}
          <span className="font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            asymmetric interfaces
          </span>
          , kinetic typography, and immersive interactions that feel{" "}
          <span className="font-semibold text-white">effortless to use</span>.
        </motion.p>

        {/* Enhanced CTA Section */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.23, 1, 0.320, 1], delay: 1 }}
        >
          <UltimateMagneticButton>
            <Zap className="size-5 mr-2" />
            Explore the Work
          </UltimateMagneticButton>
          
          <motion.button
            className="group flex items-center gap-3 px-6 py-4 rounded-full border-2 border-white/30 hover:border-cyan-400/60 bg-white/5 hover:bg-white/10 backdrop-blur-xl transition-all duration-300 text-white hover:text-cyan-400"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play className="size-5 group-hover:scale-110 transition-transform" />
            <span className="font-semibold">Watch Showreel</span>
          </motion.button>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.23, 1, 0.320, 1], delay: 1.2 }}
        >
          {[
            { number: "50+", label: "Projects Delivered" },
            { number: "15+", label: "Awwwards Won" },
            { number: "100%", label: "Client Satisfaction" },
            { number: "24/7", label: "Creative Support" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="text-center group"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.4 + i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                {stat.number}
              </div>
              <div className="text-sm text-white/70 font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced floating showcase cards */}
        <motion.div 
          className="relative h-[400px] sm:h-[500px] md:h-[600px] max-w-6xl mx-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.23, 1, 0.320, 1], delay: 0.8 }}
        >
          <ShowcaseCard
            className="absolute top-0 left-[5%] w-[35%] aspect-[3/4] z-30"
            img="/images/case-1.png"
            title="Sonic Bloom"
            subtitle="Motion + Sound"
            accent="cyan"
            delay={0}
          />
          <ShowcaseCard
            className="absolute top-[15%] right-[8%] w-[32%] aspect-[3/4] z-20"
            img="/images/case-2.png"
            title="Chromatic Drift"
            subtitle="Brand System"
            accent="purple"
            delay={0.2}
          />
          <ShowcaseCard
            className="absolute bottom-[5%] left-[25%] w-[28%] aspect-[3/4] z-40"
            img="/images/case-3.png"
            title="Arcadia"
            subtitle="3D Experiments"
            accent="pink"
            delay={0.4}
          />
          <ShowcaseCard
            className="absolute top-[25%] left-[45%] w-[25%] aspect-[3/4] z-10"
            img="/images/case-4.png"
            title="Nexus"
            subtitle="Web Experience"
            accent="blue"
            delay={0.6}
          />
        </motion.div>

        {/* Enhanced feature tags */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-sm mt-24 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.23, 1, 0.320, 1], delay: 1.6 }}
        >
          {[
            { tag: "Asymmetry", icon: "⚡" },
            { tag: "Kinetic Type", icon: "✨" },
            { tag: "Parallax", icon: "🌊" },
            { tag: "Glassmorphism", icon: "💎" },
            { tag: "Motion-first", icon: "🚀" },
            { tag: "A11y", icon: "♿" }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              className="rounded-2xl border border-white/20 px-4 py-4 text-center bg-white/10 backdrop-blur-xl font-semibold hover:bg-white/15 hover:border-cyan-400/40 transition-all duration-300 cursor-pointer group"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 + i * 0.1 }}
              whileHover={{ y: -4, scale: 1.05 }}
            >
              <div className="text-xl mb-2 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <span className="group-hover:text-cyan-400 transition-colors duration-300 text-sm">
                {item.tag}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <span className="text-xs text-white/60 font-medium uppercase tracking-wider">Scroll to explore</span>
          <motion.div
            className="w-0.5 h-8 bg-gradient-to-b from-cyan-400 to-transparent rounded-full"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  )
}

function ShowcaseCard({
  className = "",
  img = "/images/case-1.png",
  title = "Project",
  subtitle = "Category",
  accent = "cyan",
  delay = 0,
}: {
  className?: string
  img?: string
  title?: string
  subtitle?: string
  accent?: "cyan" | "purple" | "pink" | "blue"
  delay?: number
}) {
  const accentColors = {
    cyan: "from-cyan-400/30 to-blue-500/30",
    purple: "from-purple-400/30 to-pink-500/30",
    pink: "from-pink-400/30 to-red-500/30",
    blue: "from-blue-400/30 to-indigo-500/30"
  }

  const borderColors = {
    cyan: "border-cyan-400/50",
    purple: "border-purple-400/50",
    pink: "border-pink-400/50",
    blue: "border-blue-400/50"
  }

  return (
    <motion.div
      className={`${className} group rounded-3xl overflow-hidden border-2 border-white/20 bg-white/10 backdrop-blur-2xl shadow-2xl hover:shadow-cyan-500/20 will-change-transform hover:${borderColors[accent]}`}
      initial={{ y: 80, opacity: 0, rotate: -6, scale: 0.8 }}
      animate={{ y: 0, opacity: 1, rotate: 0, scale: 1 }}
      transition={{ 
        duration: 1.5, 
        ease: [0.23, 1, 0.320, 1], 
        delay,
      }}
      whileHover={{ 
        y: -20, 
        rotate: 3, 
        scale: 1.08,
        transition: { duration: 0.4, ease: "easeOut" }
      }}
    >
      <div className="relative h-full w-full">
        <Image
          src={img || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-115"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 35vw, 30vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className={`absolute inset-0 bg-gradient-to-br ${accentColors[accent]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        
        {/* Enhanced content overlay */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="text-[10px] uppercase tracking-[0.3em] text-white/90 mb-2 font-bold">{subtitle}</div>
          <div className="text-lg font-black text-white leading-tight">{title}</div>
        </div>
        
        <div className="absolute top-6 right-6 flex items-center gap-2">
          <div className="text-[10px] rounded-full bg-white/25 backdrop-blur-xl px-3 py-2 font-bold border border-white/30 group-hover:bg-cyan-400/40 group-hover:border-cyan-400/60 transition-all duration-300">
            View
          </div>
        </div>
        
        {/* Enhanced hover overlay with arrow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
          <motion.div
            className="rounded-full bg-white/20 backdrop-blur-xl p-4 border border-white/30"
            initial={{ scale: 0 }}
            whileHover={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowRight className="size-6 text-white" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
