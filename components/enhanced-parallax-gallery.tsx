"use client"

import { motion, useMotionValue, useSpring, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"

const projects = [
  { id: 1, title: "Nebula Grid", tag: "WebGL Lab", img: "/images/case-4.png", color: "from-purple-500/30 to-blue-500/30" },
  { id: 2, title: "Prism Atelier", tag: "Brand + System", img: "/images/case-5.png", color: "from-pink-500/30 to-purple-500/30" },
  { id: 3, title: "Ion Flow", tag: "E-comm Concept", img: "/images/case-6.png", color: "from-cyan-500/30 to-teal-500/30" },
  { id: 4, title: "Lumen Type", tag: "Typography", img: "/images/case-2.png", color: "from-orange-500/30 to-red-500/30" },
  { id: 5, title: "Kaleido OS", tag: "Product UI", img: "/images/case-3.png", color: "from-green-500/30 to-emerald-500/30" },
  { id: 6, title: "Aurora Lab", tag: "R&D", img: "/images/case-1.png", color: "from-indigo-500/30 to-purple-500/30" },
]

export default function EnhancedParallaxGallery() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const headerY = useTransform(scrollYProgress, [0, 0.3], [100, 0])
  const headerOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])

  return (
    <section ref={containerRef} id="work" className="relative py-32 md:py-40">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-transparent"></div>
      
      <div className="container px-6 md:px-10">
        <motion.div 
          className="flex items-end justify-between mb-16"
          style={{ y: headerY, opacity: headerOpacity }}
        >
          <div>
            <motion.div 
              className="text-sm uppercase tracking-[0.3em] text-cyan-400 mb-4 font-bold"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Selected Works
            </motion.div>
            <motion.h2 
              className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Work that bends<br />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                the grid
              </span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link 
              href="#" 
              className="text-sm text-white/80 hover:text-cyan-400 underline underline-offset-4 transition-all duration-300 font-medium group"
            >
              All projects
              <span className="inline-block ml-1 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <EnhancedParallaxCard key={project.id} index={i} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

function EnhancedParallaxCard({
  index = 0,
  project,
}: {
  index?: number
  project: { id: number; title: string; tag: string; img: string; color: string }
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  })

  const rx = useSpring(0, { stiffness: 100, damping: 15 })
  const ry = useSpring(0, { stiffness: 100, damping: 15 })
  const dx = useMotionValue(0)
  const dy = useMotionValue(0)

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9])

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    rx.set(y * -8)
    ry.set(x * 10)
    dx.set(x * 12)
    dy.set(y * 12)
  }

  const onLeave = () => {
    rx.set(0)
    ry.set(0)
    dx.set(0)
    dy.set(0)
  }

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="group relative rounded-3xl overflow-hidden border border-white/15 bg-white/8 backdrop-blur-2xl hover:border-cyan-400/30 transition-all duration-500"
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
        y,
        scale,
      }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.320, 1], delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      <motion.div
        style={{
          rotateX: rx,
          rotateY: ry,
        }}
        className="relative h-[350px] sm:h-[400px]"
      >
        <Image 
          src={project.img || "/placeholder.svg"} 
          alt={project.title} 
          fill 
          className="object-cover transition-all duration-700 group-hover:scale-110" 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/50" />
        
        <motion.div
          className="absolute bottom-6 left-6 right-6"
          style={{ x: dx, y: dy }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
        >
          <div className="text-xs uppercase tracking-[0.2em] text-cyan-400 mb-2 font-bold">{project.tag}</div>
          <div className="text-2xl font-black text-white leading-tight">{project.title}</div>
        </motion.div>
        
        <div className="absolute top-6 right-6 rounded-full bg-white/20 backdrop-blur-xl px-4 py-2 text-xs font-semibold border border-white/20 group-hover:bg-cyan-400/30 group-hover:border-cyan-400/50 transition-all duration-300">
          Case Study
        </div>
      </motion.div>
      
      <div className="p-6 flex items-center justify-between relative">
        <p className="text-sm text-white/70 max-w-[75%] leading-relaxed">
          Asymmetric layout, motion-first interactions, accessible by design.
        </p>
        <Link 
          href="#" 
          className="text-sm text-white hover:text-cyan-400 underline underline-offset-4 transition-all duration-300 font-medium group-hover:translate-x-1 transform"
        >
          View
        </Link>
      </div>
      
      {/* Enhanced hover effects */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 via-transparent to-purple-500/10" />
      </div>
    </motion.article>
  )
}
