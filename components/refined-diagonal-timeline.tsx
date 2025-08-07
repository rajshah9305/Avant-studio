"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Sparkles } from 'lucide-react'
import { useRef } from "react"

const steps = [
  { 
    title: "Discover", 
    desc: "We audit, learn, define the edge.",
    icon: "🔍",
    color: "from-cyan-400/20 to-blue-500/20"
  },
  { 
    title: "Design", 
    desc: "Bold type, asymmetric composition, clarity.",
    icon: "✨",
    color: "from-pink-500/20 to-purple-500/20"
  },
  { 
    title: "Prototype", 
    desc: "Interaction-first explorations in the browser.",
    icon: "⚡",
    color: "from-purple-500/20 to-indigo-500/20"
  },
  { 
    title: "Polish", 
    desc: "Micro-motion, performance budgets, a11y.",
    icon: "💎",
    color: "from-green-500/20 to-teal-500/20"
  },
  { 
    title: "Launch", 
    desc: "Zero friction handover, observability, iteration.",
    icon: "🚀",
    color: "from-orange-500/20 to-red-500/20"
  },
]

export default function RefinedDiagonalTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const headerY = useTransform(scrollYProgress, [0, 0.3], [100, 0])
  const headerOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])

  return (
    <section ref={containerRef} id="process" className="relative py-32 md:py-40">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"></div>
      
      <div className="container px-6 md:px-10">
        <motion.div 
          className="mb-16"
          style={{ y: headerY, opacity: headerOpacity }}
        >
          <motion.div 
            className="flex items-center gap-4 mb-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-3 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-purple-400/20 border border-cyan-400/30">
              <Sparkles className="size-6 text-cyan-400" />
            </div>
            <div className="text-sm uppercase tracking-[0.3em] text-cyan-400 font-bold">
              Our Approach
            </div>
          </motion.div>
          <motion.h3 
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Process,{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              reimagined
            </span>
          </motion.h3>
        </motion.div>

        <div className="relative">
          {/* Enhanced diagonal connector */}
          <motion.div
            aria-hidden="true"
            className="absolute left-8 sm:left-12 top-16 right-8 sm:right-12 h-1 bg-gradient-to-r from-cyan-400/30 via-purple-400/50 to-pink-400/30 rounded-full"
            style={{ transform: "skewY(-4deg)" }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.5 }}
          />
          
          <div className="grid gap-16 sm:gap-20">
            {steps.map((step, i) => (
              <EnhancedTimelineStep key={i} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function EnhancedTimelineStep({
  step,
  index,
}: {
  step: {
    title: string
    desc: string
    icon: string
    color: string
  }
  index: number
}) {
  const stepRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: stepRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [30, -30])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9])

  return (
    <motion.div
      ref={stepRef}
      className="relative grid sm:grid-cols-[250px_1fr] gap-8 sm:gap-12 items-start"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.320, 1], delay: index * 0.2 }}
      style={{ y, scale }}
    >
      <div className="sm:text-right">
        <motion.div 
          className="text-sm text-cyan-400 font-bold mb-2"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
        >
          Step {index + 1}
        </motion.div>
        <motion.div 
          className="text-2xl font-black mb-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
        >
          {step.title}
        </motion.div>
        <motion.div 
          className="text-4xl mb-4"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 + index * 0.1, type: "spring", stiffness: 200 }}
        >
          {step.icon}
        </motion.div>
      </div>
      
      <div className="relative group">
        <motion.div 
          className="rounded-3xl border border-white/15 bg-white/8 backdrop-blur-2xl p-8 hover:border-cyan-400/30 transition-all duration-500 hover:bg-white/12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
          whileHover={{ y: -4 }}
        >
          {/* Background gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />
          
          <motion.p 
            className="text-white/80 text-lg leading-relaxed relative z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
          >
            {step.desc}
          </motion.p>
        </motion.div>
        
        {/* Enhanced step indicator */}
        <motion.div
          aria-hidden="true"
          className="absolute -left-4 -top-4 size-6 rounded-full bg-gradient-to-br from-cyan-400 to-purple-400 shadow-2xl"
          style={{ boxShadow: "0 0 0 12px rgba(0,246,255,0.1), 0 0 30px rgba(0,246,255,0.3)" }}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 + index * 0.1, type: "spring", stiffness: 200 }}
        />
      </div>
    </motion.div>
  )
}
