"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronUp } from 'lucide-react'

export default function FloatingNav() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
      
      // Determine active section
      const sections = ["hero", "work", "process", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "work", label: "Work" },
    { id: "process", label: "Process" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed right-6 bottom-6 z-40 flex flex-col gap-3"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          {/* Navigation dots */}
          <div className="bg-white/90 backdrop-blur-xl rounded-full p-3 shadow-lg border border-slate-200/60">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    const element = document.getElementById(item.id)
                    element?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-blue-600 scale-125"
                      : "bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to ${item.label} section`}
                />
              ))}
            </div>
          </div>

          {/* Scroll to top button */}
          <motion.button
            onClick={scrollToTop}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <ChevronUp size={20} />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
