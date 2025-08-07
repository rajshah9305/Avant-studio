"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Search, Palette, Code, Rocket, CheckCircle } from 'lucide-react'
import { useRef, useState } from "react"

const processSteps = [
  {
    id: 1,
    icon: Search,
    title: "Discovery & Research",
    description: "We dive deep into understanding your business goals, target audience, and market landscape to create a solid foundation.",
    details: [
      "Stakeholder interviews",
      "Market analysis",
      "User research",
      "Competitive audit"
    ],
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-50 to-cyan-50"
  },
  {
    id: 2,
    icon: Palette,
    title: "Design & Prototyping",
    description: "Our creative team crafts beautiful, intuitive designs that align with your brand and provide exceptional user experiences.",
    details: [
      "Wireframing",
      "Visual design",
      "Interactive prototypes",
      "Design systems"
    ],
    color: "from-purple-500 to-pink-500",
    bgColor: "from-purple-50 to-pink-50"
  },
  {
    id: 3,
    icon: Code,
    title: "Development & Testing",
    description: "We bring designs to life with clean, scalable code and rigorous testing to ensure optimal performance across all devices.",
    details: [
      "Frontend development",
      "Backend integration",
      "Quality assurance",
      "Performance optimization"
    ],
    color: "from-green-500 to-teal-500",
    bgColor: "from-green-50 to-teal-50"
  },
  {
    id: 4,
    icon: Rocket,
    title: "Launch & Support",
    description: "We ensure a smooth launch and provide ongoing support to help your digital product succeed in the market.",
    details: [
      "Deployment strategy",
      "Launch coordination",
      "Performance monitoring",
      "Ongoing maintenance"
    ],
    color: "from-orange-500 to-red-500",
    bgColor: "from-orange-50 to-red-50"
  }
]

export default function InteractiveProcess() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeStep, setActiveStep] = useState(1)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const headerY = useTransform(scrollYProgress, [0, 0.3], [100, 0])
  const headerOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])

  return (
    <section id="process" ref={containerRef} className="py-20 lg:py-32 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/4 -right-32 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
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
            <span className="text-sm font-medium text-blue-700">Our Process</span>
          </motion.div>
          
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            How We <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Work</span>
          </motion.h2>
          
          <motion.p
            className="text-lg text-slate-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our proven methodology ensures every project is delivered with precision, creativity, and exceptional results.
          </motion.p>
        </motion.div>

        {/* Interactive Process Steps */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Step Navigation */}
          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <ProcessStepCard
                key={step.id}
                step={step}
                index={index}
                isActive={activeStep === step.id}
                onClick={() => setActiveStep(step.id)}
              />
            ))}
          </div>

          {/* Right Side - Active Step Details */}
          <div className="relative">
            <motion.div
              key={activeStep}
              className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/60"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {(() => {
                const step = processSteps.find(s => s.id === activeStep)!
                const Icon = step.icon
                return (
                  <>
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${step.bgColor} mb-6`}>
                      <Icon className={`w-8 h-8 bg-gradient-to-r ${step.color} bg-clip-text text-transparent`} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      {step.title}
                    </h3>
                    
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {step.description}
                    </p>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-900 mb-3">Key Activities:</h4>
                      {step.details.map((detail, detailIndex) => (
                        <motion.div
                          key={detailIndex}
                          className="flex items-center gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: detailIndex * 0.1 }}
                        >
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-slate-600">{detail}</span>
                        </motion.div>
                      ))}
                    </div>
                  </>
                )
              })()}
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function ProcessStepCard({ 
  step, 
  index, 
  isActive, 
  onClick 
}: { 
  step: any
  index: number
  isActive: boolean
  onClick: () => void
}) {
  const Icon = step.icon

  return (
    <motion.div
      className={`relative cursor-pointer transition-all duration-300 ${
        isActive 
          ? "bg-white/90 backdrop-blur-xl shadow-xl border border-white/80" 
          : "bg-white/60 backdrop-blur-sm hover:bg-white/80 border border-white/40"
      } rounded-2xl p-6`}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onClick={onClick}
      whileHover={{ scale: 1.02, x: 5 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center gap-4">
        <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${step.bgColor} flex items-center justify-center ${
          isActive ? "scale-110" : ""
        } transition-transform duration-300`}>
          <Icon className={`w-6 h-6 bg-gradient-to-r ${step.color} bg-clip-text text-transparent`} />
        </div>
        
        <div className="flex-1">
          <h3 className={`font-semibold mb-1 transition-colors ${
            isActive ? "text-slate-900" : "text-slate-700"
          }`}>
            {step.title}
          </h3>
          <p className={`text-sm leading-relaxed transition-colors ${
            isActive ? "text-slate-600" : "text-slate-500"
          }`}>
            {step.description}
          </p>
        </div>
        
        <div className={`w-6 h-6 rounded-full border-2 transition-all duration-300 ${
          isActive 
            ? "border-blue-500 bg-blue-500" 
            : "border-slate-300 hover:border-blue-400"
        }`}>
          {isActive && (
            <motion.div
              className="w-full h-full rounded-full bg-white scale-50"
              initial={{ scale: 0 }}
              animate={{ scale: 0.5 }}
              transition={{ duration: 0.2 }}
            />
          )}
        </div>
      </div>
      
      {/* Step Number */}
      <div className={`absolute -left-3 -top-3 w-8 h-8 rounded-full bg-gradient-to-r ${step.color} text-white text-sm font-bold flex items-center justify-center shadow-lg ${
        isActive ? "scale-110" : ""
      } transition-transform duration-300`}>
        {step.id}
      </div>
    </motion.div>
  )
}
