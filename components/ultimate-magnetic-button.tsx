"use client"

import * as React from "react"
import { Button, type ButtonProps } from "@/components/ui/button"
import { motion } from "framer-motion"

type UltimateMagneticButtonProps = ButtonProps & {
  strength?: number
}

const UltimateMagneticButton = React.forwardRef<HTMLButtonElement, UltimateMagneticButtonProps>(function UltimateMagneticButton(
  { children, className, strength = 0.5, ...props },
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
    el.style.setProperty("--sx", `${1 + Math.min(Math.abs(mx), 100) / 1000}`)
    el.style.setProperty("--sy", `${1 + Math.min(Math.abs(my), 100) / 1000}`)
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
      className="inline-block [transform:translate3d(var(--tx,0),var(--ty,0),0)_scale(var(--sx,1),var(--sy,1))] transition-transform duration-300 will-change-transform"
      whileTap={{ scale: 0.95 }}
    >
      <Button
        ref={ref}
        className={
          "relative overflow-hidden rounded-full px-10 py-8 text-xl font-bold bg-gradient-to-tr from-white via-gray-100 to-white text-black shadow-2xl hover:shadow-cyan-500/30 border-3 border-transparent hover:border-cyan-400/40 transition-all duration-500 group " +
          (className ?? "")
        }
        {...props}
      >
        <span className="relative z-10 flex items-center gap-3 group-hover:gap-4 transition-all duration-300">
          {children ?? "Explore the Work"}
          <motion.span
            animate={{ x: isHovered ? 6 : 0, rotate: isHovered ? 45 : 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="text-2xl"
          >
            →
          </motion.span>
        </span>
        
        {/* Multiple layered background effects */}
        <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 via-purple-400/30 to-pink-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <span className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className="absolute inset-0 [mask-image:radial-gradient(120%_120%_at_50%_50%,black,transparent)] bg-[radial-gradient(200px_200px_at_var(--mx,50%)_var(--my,50%),rgba(0,246,255,0.4),transparent)]" />
        
        {/* Animated shimmer effect */}
        <motion.span
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
          animate={{ x: isHovered ? "100%" : "-100%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
        
        {/* Pulsing border */}
        <motion.span
          className="absolute inset-0 rounded-full border-2 border-cyan-400/60 opacity-0"
          animate={{ 
            opacity: isHovered ? [0, 1, 0] : 0,
            scale: isHovered ? [1, 1.05, 1] : 1
          }}
          transition={{ duration: 1, repeat: isHovered ? Infinity : 0 }}
        />
      </Button>
    </motion.div>
  )
})

export default UltimateMagneticButton
