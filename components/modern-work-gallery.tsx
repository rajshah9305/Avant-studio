"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, ExternalLink } from 'lucide-react'
import Image from "next/image"
import { useRef, useState } from "react"

const projects = [
  {
    id: 1,
    title: "EcoCommerce Platform",
    category: "E-commerce",
    description: "Sustainable shopping experience with modern design and seamless checkout flow.",
    image: "/images/case-1.png",
    tags: ["React", "Node.js", "Stripe"],
    color: "from-green-400 to-blue-500"
  },
  {
    id: 2,
    title: "FinTech Dashboard",
    category: "Financial",
    description: "Comprehensive financial management platform with real-time analytics.",
    image: "/images/case-2.png",
    tags: ["Vue.js", "Python", "D3.js"],
    color: "from-blue-400 to-purple-500"
  },
  {
    id: 3,
    title: "Creative Portfolio",
    category: "Portfolio",
    description: "Stunning portfolio website for a creative agency with interactive elements.",
    image: "/images/case-3.png",
    tags: ["Next.js", "Framer Motion", "GSAP"],
    color: "from-purple-400 to-pink-500"
  },
  {
    id: 4,
    title: "Health & Wellness App",
    category: "Mobile App",
    description: "Comprehensive wellness tracking with personalized recommendations.",
    image: "/images/case-4.png",
    tags: ["React Native", "Firebase", "ML"],
    color: "from-pink-400 to-red-500"
  },
  {
    id: 5,
    title: "SaaS Analytics Tool",
    category: "SaaS",
    description: "Powerful analytics platform with customizable dashboards and reports.",
    image: "/images/case-5.png",
    tags: ["Angular", "PostgreSQL", "Docker"],
    color: "from-indigo-400 to-blue-500"
  },
  {
    id: 6,
    title: "Educational Platform",
    category: "Education",
    description: "Interactive learning platform with gamification and progress tracking.",
    image: "/images/case-6.png",
    tags: ["React", "GraphQL", "MongoDB"],
    color: "from-teal-400 to-green-500"
  }
]

export default function ModernWorkGallery() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const headerY = useTransform(scrollYProgress, [0, 0.3], [100, 0])
  const headerOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])

  return (
    <section id="work" ref={containerRef} className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          style={{ y: headerY, opacity: headerOpacity }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/60 rounded-full px-4 py-2 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-medium text-blue-700">Our Portfolio</span>
          </motion.div>
          
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          
          <motion.p
            className="text-lg text-slate-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore our latest work showcasing innovative design solutions and cutting-edge technology implementations.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isHovered={hoveredProject === project.id}
              onHover={() => setHoveredProject(project.id)}
              onLeave={() => setHoveredProject(null)}
            />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.button
            className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 mx-auto hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCard({ 
  project, 
  index, 
  isHovered, 
  onHover, 
  onLeave 
}: { 
  project: any
  index: number
  isHovered: boolean
  onHover: () => void
  onLeave: () => void
}) {
  return (
    <motion.div
      className="group relative bg-white/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-lg border border-white/60 hover:shadow-2xl transition-all duration-500"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Project Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
        
        {/* Hover Overlay */}
        <motion.div
          className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
          animate={{ opacity: isHovered ? 1 : 0 }}
        >
          <motion.button
            className="bg-white/90 backdrop-blur-sm text-slate-900 p-3 rounded-full hover:bg-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ExternalLink className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            {project.category}
          </span>
          <motion.div
            className="opacity-0 group-hover:opacity-100 transition-opacity"
            animate={{ x: isHovered ? 5 : 0 }}
          >
            <ArrowRight className="w-4 h-4 text-slate-400" />
          </motion.div>
        </div>
        
        <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-slate-600 mb-4 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag: string, tagIndex: number) => (
            <span
              key={tagIndex}
              className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
