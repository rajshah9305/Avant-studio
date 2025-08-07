"use client"

import Link from "next/link"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Home, Grid3X3, Beaker, Phone, Github } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"

export default function NavRail() {
  const [open, setOpen] = useState(false)

  const items = [
    { href: "#", label: "Home", icon: Home },
    { href: "#work", label: "Work", icon: Grid3X3 },
    { href: "#process", label: "Process", icon: Beaker },
    { href: "#contact", label: "Contact", icon: Phone },
    { href: "https://github.com", label: "GitHub", icon: Github },
  ]

  return (
    <>
      {/* Mobile top menu */}
      <div className="fixed z-40 top-4 right-4 md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="secondary" className="bg-white/10 backdrop-blur hover:bg-white/20">
              Menu
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-black/90 text-white border-white/10">
            <nav className="mt-10 grid gap-4">
              {items.map((it) => (
                <Link key={it.label} href={it.href} onClick={() => setOpen(false)} className="text-lg opacity-90">
                  {it.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop rail */}
      <TooltipProvider>
        <aside className="hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 z-30">
          <nav className="flex flex-col items-center gap-4 p-2 rounded-full bg-white/5 border border-white/10 backdrop-blur">
            {items.map((it) => {
              const Icon = it.icon
              return (
                <Tooltip key={it.label}>
                  <TooltipTrigger asChild>
                    <Link
                      href={it.href}
                      className="p-2 rounded-full hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                    >
                      <Icon className="size-5 opacity-80" />
                      <span className="sr-only">{it.label}</span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right" className="bg-white text-black">
                    {it.label}
                  </TooltipContent>
                </Tooltip>
              )
            })}
          </nav>
        </aside>
      </TooltipProvider>
    </>
  )
}
