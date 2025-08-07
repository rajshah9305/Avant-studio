"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import EnhancedMagneticButton from "./enhanced-magnetic-button"
import { Input } from "@/components/ui/input"
import { useRef } from "react"

export default function EnhancedFooterCta() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section ref={containerRef} id="contact" className="relative py-32 md:py-40">
      {/* Enhanced gradient field */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_100%,rgba(0,246,255,0.15),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent_30%,transparent_70%,rgba(255,255,255,0.06))]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </motion.div>

      <div className="relative container px-6 md:px-10">
        <motion.div
          className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-2xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.23, 1, 0.320, 1] }}
          style={{ y }}
        >
          <div className="grid md:grid-cols-2">
            <div className="p-10 md:p-16">
              <motion.div 
                className="text-sm uppercase tracking-[0.3em] text-cyan-400 mb-4 font-bold"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Get in Touch
              </motion.div>
              
              <motion.h4 
                className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Let's craft something{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  exceptional
                </span>
              </motion.h4>
              
              <motion.p 
                className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Share your vision. We'll bring the irregular, the kinetic, and the refined — with an intuitive UX at the core.
              </motion.p>
              
              <motion.form
                className="flex flex-col sm:flex-row gap-4 mb-6"
                onSubmit={(e) => {
                  e.preventDefault()
                  alert("Thanks! We'll be in touch.")
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Input
                  type="email"
                  placeholder="you@studio.com"
                  className="bg-white/15 border-white/25 text-white placeholder:text-white/60 rounded-2xl py-4 px-6 text-lg backdrop-blur-xl hover:bg-white/20 focus:bg-white/20 focus:border-cyan-400/50 transition-all duration-300"
                  required
                />
                <EnhancedMagneticButton type="submit" className="whitespace-nowrap">
                  Request a session
                </EnhancedMagneticButton>
              </motion.form>
              
              <motion.p 
                className="text-sm text-white/60 font-medium"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                We reply within 1–2 business days. No spam. Ever.
              </motion.p>
            </div>
            
            <div className="relative min-h-[400px] md:min-h-[500px]">
              {/* Enhanced decorative elements */}
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                <div className="absolute -right-16 -top-16 h-[60%] w-[80%] rounded-full blur-3xl bg-gradient-to-br from-cyan-400/40 to-blue-500/30 animate-pulse" />
                <div className="absolute left-16 bottom-16 h-[70%] w-[70%] rounded-full blur-3xl bg-gradient-to-br from-pink-500/35 to-purple-500/25 animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[40%] w-[40%] rounded-full blur-2xl bg-gradient-to-br from-white/20 to-transparent animate-pulse" style={{ animationDelay: '2s' }} />
              </motion.div>
              
              <div className="absolute inset-0 grid place-items-center">
                <motion.div 
                  className="rounded-3xl border border-white/20 bg-black/40 backdrop-blur-2xl px-8 py-6 text-center shadow-2xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                >
                  <div className="text-lg text-cyan-400 mb-2 font-bold">Available for</div>
                  <div className="text-4xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Q4 / Q1
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div> 
    </section>
  )
}
