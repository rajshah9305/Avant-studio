"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const projects = [
  { id: 1, title: "Nebula Grid", tag: "WebGL Lab", img: "/images/case-4.png" },
  { id: 2, title: "Prism Atelier", tag: "Brand + System", img: "/images/case-5.png" },
  { id: 3, title: "Ion Flow", tag: "E-comm Concept", img: "/images/case-6.png" },
  { id: 4, title: "Lumen Type", tag: "Typography", img: "/images/case-2.png" },
  { id: 5, title: "Kaleido OS", tag: "Product UI", img: "/images/case-3.png" },
  { id: 6, title: "Aurora Lab", tag: "R&D", img: "/images/case-1.png" },
]

export default function ParallaxGallery() {
  return (
    <section id="work" className="relative py-20 md:py-28">
      <div className="container px-6 md:px-10">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Work that bends the grid
          </h2>
          <Link href="#" className="text-sm opacity-80 hover:opacity-100 underline underline-offset-4">
            All projects
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ParallaxCard key={p.id} index={i} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ParallaxCard({
  index = 0,
  project = { title: "Project", tag: "Category", img: "/images/case-1.png" },
}: {
  index?: number
  project?: { title: string; tag: string; img: string }
}) {
  const rx = useSpring(0, { stiffness: 120, damping: 12 })
  const ry = useSpring(0, { stiffness: 120, damping: 12 })
  const dx = useMotionValue(0)
  const dy = useMotionValue(0)

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    rx.set(y * -6)
    ry.set(x * 8)
    dx.set(x * 8)
    dy.set(y * 8)
  }

  const onLeave = () => {
    rx.set(0)
    ry.set(0)
    dx.set(0)
    dy.set(0)
  }

  return (
    <motion.article
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl"
      style={{
        perspective: "800px",
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.02 }}
    >
      <motion.div
        style={{
          rotateX: rx,
          rotateY: ry,
        }}
        className="relative h-[300px] sm:h-[340px]"
      >
        <Image src={project.img || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <motion.div
          className="absolute bottom-4 left-4 right-4"
          style={{ x: dx, y: dy }}
          transition={{ type: "spring", stiffness: 120, damping: 12 }}
        >
          <div className="text-xs uppercase tracking-widest opacity-80">{project.tag}</div>
          <div className="text-xl font-semibold">{project.title}</div>
        </motion.div>
        <div className="absolute top-4 right-4 rounded-full bg-white/15 px-2 py-1 text-[10px]">
          Case Study
        </div>
      </motion.div>
      <div className="p-4 flex items-center justify-between">
        <p className="text-sm opacity-70 max-w-[75%]">
          Asymmetric layout, motion-first interactions, accessible by design.
        </p>
        <Link href="#" className="text-sm opacity-90 hover:opacity-100 underline underline-offset-4">
          View
        </Link>
      </div>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 [mask-image:radial-gradient(240px_240px_at_var(--mx,50%)_var(--my,50%),black,transparent)] bg-white/10" />
      </div>
    </motion.article>
  )
}
