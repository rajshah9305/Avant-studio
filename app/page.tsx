import ModernHeader from "@/components/modern-header"
import ContemporaryHero from "@/components/contemporary-hero"
import ModernWorkGallery from "@/components/modern-work-gallery"
import InteractiveProcess from "@/components/interactive-process"
import ModernContact from "@/components/modern-contact"
import FloatingNav from "@/components/floating-nav"

export default function Page() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 text-slate-900 overflow-x-hidden">
      {/* Subtle background pattern */}
      <div 
        className="fixed inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Skip link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-blue-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg transition-all"
      >
        Skip to main content
      </a>

      <ModernHeader />
      <FloatingNav />
      
      <main id="main-content" className="relative">
        <ContemporaryHero />
        <ModernWorkGallery />
        <InteractiveProcess />
        <ModernContact />
      </main>

      {/* Modern footer */}
      <footer className="relative bg-white/80 backdrop-blur-xl border-t border-slate-200/60 py-12">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <span className="text-xl font-bold text-slate-900">Avant Studio</span>
              </div>
              <p className="text-slate-600 leading-relaxed max-w-md">
                Creating exceptional digital experiences through innovative design and cutting-edge technology.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-4">Services</h3>
              <ul className="space-y-2 text-slate-600">
                <li><a href="#" className="hover:text-blue-600 transition-colors">Web Design</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Brand Identity</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Digital Strategy</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Development</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-4">Connect</h3>
              <ul className="space-y-2 text-slate-600">
                <li><a href="#" className="hover:text-blue-600 transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Dribbble</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-200/60 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Avant Studio. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-slate-500">
              <a href="#" className="hover:text-slate-700 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-slate-700 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
