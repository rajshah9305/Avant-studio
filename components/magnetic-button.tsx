"use client"

import * as React from "react"
import { Button, type ButtonProps } from "@/components/ui/button"

type MagneticButtonProps = ButtonProps & {
  strength?: number
}

const MagneticButton = React.forwardRef<HTMLButtonElement, MagneticButtonProps>(function MagneticButton(
  { children, className, strength = 0.35, ...props },
  ref
) {
  const wrapperRef = React.useRef<HTMLDivElement>(null)

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = wrapperRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const mx = e.clientX - (rect.left + rect.width / 2)
    const my = e.clientY - (rect.top + rect.height / 2)
    el.style.setProperty("--tx", `${mx * strength}px`)
    el.style.setProperty("--ty", `${my * strength}px`)
    el.style.setProperty("--sx", `${1 + Math.min(Math.abs(mx), 60) / 600}`)
    el.style.setProperty("--sy", `${1 + Math.min(Math.abs(my), 60) / 600}`)
  }

  const onLeave = () => {
    const el = wrapperRef.current
    if (!el) return
    el.style.setProperty("--tx", "0px")
    el.style.setProperty("--ty", "0px")
    el.style.setProperty("--sx", "1")
    el.style.setProperty("--sy", "1")
  }

  return (
    <div
      ref={wrapperRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="inline-block [transform:translate3d(var(--tx,0),var(--ty,0),0)_scale(var(--sx,1),var(--sy,1))] transition-transform duration-100 will-change-transform"
    >
      <Button
        ref={ref}
        className={
          "relative overflow-hidden rounded-full px-6 py-6 text-base font-medium bg-gradient-to-tr from-white to-white/70 text-black shadow-[0_8px_40px_-12px_rgba(255,255,255,0.5)] " +
          (className ?? "")
        }
        {...props}
      >
        <span className="relative z-10">{children ?? "Explore the Work"}</span>
        <span className="absolute inset-0 -z-0 [mask-image:radial-gradient(80%_80%_at_50%_50%,black,transparent)] bg-[radial-gradient(120px_120px_at_var(--mx,50%)_var(--my,50%),rgba(0,0,0,0.2),transparent)]" />
      </Button>
    </div>
  )
})

export default MagneticButton
