"use client"

import { motion } from "framer-motion"
import MagneticButton from "./magnetic-button"
import { Input } from "@/components/ui/input"

export default function FooterCta() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      {/* Gradient field */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_100%,rgba(255,255,255,0.08),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),transparent_30%,transparent_70%,rgba(255,255,255,0.04))]" />
      </motion.div>

      <div className="relative container px-6 md:px-10">
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h4 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">
                Let’s craft something exceptional
              </h4>
              <p className="mt-3 text-sm md:text-base text-white/70">
                Share your vision. We’ll bring the irregular, the kinetic, and the refined — with an intuitive UX at the core.
              </p>
              <form
                className="mt-8 flex flex-col sm:flex-row gap-3"
                onSubmit={(e) => {
                  e.preventDefault()
                  alert("Thanks! We'll be in touch.")
                }}
              >
                <Input
                  type="email"
                  placeholder="you@studio.com"
                  className="bg-white/10 border-white/15 text-white placeholder:text-white/50"
                  required
                />
                <MagneticButton type="submit" className="whitespace-nowrap">
                  Request a session
                </MagneticButton>
              </form>
              <p className="mt-3 text-xs opacity-70">
                We reply within 1–2 business days. No spam. Ever.
              </p>
            </div>
            <div className="relative min-h-[300px] md:min-h-[420px]">
              {/* Decorative blobs */}
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <div className="absolute -right-10 -top-10 h-[50%] w-[70%] rounded-full blur-2xl"
                  style={{ background: "radial-gradient(closest-side, rgba(0,246,255,0.35), rgba(0,246,255,0))" }}
                />
                <div className="absolute left-10 bottom-10 h-[60%] w-[60%] rounded-full blur-2xl"
                  style={{ background: "radial-gradient(closest-side, rgba(255,0,199,0.28), rgba(255,0,199,0))" }}
                />
              </motion.div>
              <div className="absolute inset-0 grid place-items-center">
                <div className="rounded-2xl border border-white/10 bg-black/30 px-6 py-5 text-center">
                  <div className="text-sm opacity-70">Available for</div>
                  <div className="text-2xl font-bold">Q4 / Q1</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </section>
  )
}
