"use client"

import { motion } from "framer-motion"
import { Sparkles } from 'lucide-react'

const steps = [
  { title: "Discover", desc: "We audit, learn, define the edge." },
  { title: "Design", desc: "Bold type, asymmetric composition, clarity." },
  { title: "Prototype", desc: "Interaction-first explorations in the browser." },
  { title: "Polish", desc: "Micro-motion, performance budgets, a11y." },
  { title: "Launch", desc: "Zero friction handover, observability, iteration." },
]

export default function DiagonalTimeline() {
  return (
    <section id="process" className="relative py-24 md:py-32">
      <div className="container px-6 md:px-10">
        <div className="mb-12 flex items-center gap-3">
          <Sparkles className="size-5 text-white/80" />
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Process, reimagined</h3>
        </div>

        <div className="relative">
          {/* Diagonal connector */}
          <div
            aria-hidden="true"
            className="absolute left-6 sm:left-10 top-10 right-6 sm:right-10 h-0.5 bg-gradient-to-r from-transparent via-white/25 to-transparent"
            style={{ transform: "skewY(-8deg)" }}
          />
          <ul className="relative grid gap-10 sm:gap-14">
            {steps.map((s, i) => (
              <motion.li
                key={i}
                className="relative grid sm:grid-cols-[200px_1fr] gap-4 sm:gap-8 items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.03 }}
              >
                <div className="sm:text-right">
                  <div className="text-xs opacity-60">Step {i + 1}</div>
                  <div className="text-lg font-semibold">{s.title}</div>
                </div>
                <div className="relative">
                  <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4 sm:p-6">
                    <p className="opacity-80">{s.desc}</p>
                  </div>
                  <div
                    aria-hidden="true"
                    className="absolute -left-2 -top-2 size-3 rounded-full bg-white"
                    style={{ boxShadow: "0 0 0 6px rgba(255,255,255,0.08)" }}
                  />
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
