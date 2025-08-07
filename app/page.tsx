import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import NavRail from "@/components/nav-rail"
import AvantHero from "@/components/avant-hero"
import ParallaxGallery from "@/components/parallax-gallery"
import DiagonalTimeline from "@/components/diagonal-timeline"
import FooterCta from "@/components/footer-cta"

export default function Page() {
  return (
    <div className="relative min-h-[100dvh] bg-black text-white overflow-hidden">
      {/* Background noise overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage: "url('/textures/noise.png')",
          backgroundSize: "300px 300px",
          backgroundRepeat: "repeat",
        }}
      />
      {/* Skip link for a11y */}
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:text-black focus:px-3 focus:py-2 focus:rounded-md"
      >
        Skip to content
      </a>

      <header className="fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-6 py-4 backdrop-blur-md/0 md:px-10">
        <Link href="/" className="font-semibold tracking-tight">
          <span className="inline-block rounded-full bg-white text-black px-2.5 py-1 text-xs mr-2">New</span>
          <span className="opacity-80">AVANT</span>
          <span className="opacity-40">.studio</span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <Link href="#work" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
            Work
          </Link>
          <Link href="#process" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
            Process
          </Link>
          <Link href="#contact" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
            Contact
          </Link>
        </div>
      </header>

      <NavRail />

      <main id="content" className="relative">
        <AvantHero />
        <ParallaxGallery />
        <DiagonalTimeline />
        <FooterCta />
      </main>

      <footer className="relative z-10 border-t border-white/10 px-6 md:px-10 py-6 flex flex-col sm:flex-row items-center gap-2 justify-between">
        <p className="text-xs opacity-70">
          © {new Date().getFullYear()} Avant Studio. Crafted with Next.js App Router.
        </p>
        <div className="flex items-center gap-4">
          <Link href="#" className="text-xs opacity-80 hover:opacity-100 underline-offset-4 hover:underline">
            Privacy
          </Link>
          <Link href="#" className="text-xs opacity-80 hover:opacity-100 underline-offset-4 hover:underline">
            Terms
          </Link>
        </div>
      </footer>
    </div>
  )
}
