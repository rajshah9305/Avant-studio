"use client"

import * as React from "react"
import { Button, type ButtonProps } from "@/components/ui/button"
import { motion } from "framer-motion"

type EnhancedMagneticButtonProps = ButtonProps & {
  strength?: number
}

const EnhancedMagneticButton = React.forwardRef<HTMLButtonElement, EnhancedMagneticButtonProps>(function EnhancedMagneticButton(
  { children, className, strength = 0.4, ...props },
  ref
) {
  const wrapperRef = React.useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = React.useState(false)

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = wrapperRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const mx = e.clientX - (rect.left + rect.width / 2)
    const my = e.clientY - (rect.top + rect.height / 2)
    el.style.setProperty("--tx", `${mx * strength}px`)
    el.style.setProperty("--ty", `${my * strength}px`)
    el.style.setProperty("--sx", `${1 + Math.min(Math.abs(mx), 80) / 800}`)
    el.style.setProperty("--sy", `${1 + Math.min(Math.abs(my), 80) / 800}`)
  }

  const onEnter = () => {
    setIsHovered(true)
  }

  const onLeave = () => {
    const el = wrapperRef.current
    if (!el) return
    el.style.setProperty("--tx", "0px")
    el.style.setProperty("--ty", "0px")
    el.style.setProperty("--sx", "1")
    el.style.setProperty("--sy", "1")
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={wrapperRef}
      onMouseMove={onMove}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="inline-block [transform:translate3d(var(--tx,0),var(--ty,0),0)_scale(var(--sx,1),var(--sy,1))] transition-transform duration-200 will-change-transform"
      whileTap={{ scale: 0.95 }}
    >
      <Button
        ref={ref}
        className={
          "relative overflow-hidden rounded-full px-8 py-7 text-lg font-bold bg-gradient-to-tr from-white via-gray-100 to-white text-black shadow-2xl hover:shadow-cyan-500/25 border-2 border-transparent hover:border-cyan-400/30 transition-all duration-300 " +
          (className ?? "")
        }
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">
          {children ?? "Explore the Work"}
          <motion.span
            animate={{ x: isHovered ? 4 : 0 }}
            transition={{ duration: 0.2 }}
          >
            →
          </motion.span>
        </span>
        
        {/* Enhanced background effects */}
        <span className="absolute inset-0 -z-0 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
        <span className="absolute inset-0 -z-10 [mask-image:radial-gradient(100%_100%_at_50%_50%,black,transparent)] bg-[radial-gradient(150px_150px_at_var(--mx,50%)_var(--my,50%),rgba(0,246,255,0.3),transparent)]" />
        
        {/* Animated border */}
        <motion.span
          className="absolute inset-0 rounded-full border-2 border-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 opacity-0"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </Button>
    </motion.div>
  )
})

export default EnhancedMagneticButton
