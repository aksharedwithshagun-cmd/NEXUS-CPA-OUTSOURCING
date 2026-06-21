import { createFileRoute, Link, Outlet } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'

export const Route = createFileRoute('/_legal')({
  component: LegalLayout,
})

function LegalLayout() {
  return (
    <div className="min-h-screen bg-[#0a1128] text-slate-200 font-sans">
      {/* Simple Header */}
      <nav className="fixed w-full z-50 bg-[#0a1128]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="https://cpa-landing-seven.vercel.app/assets/logo-CQmzYzbC.jpeg" 
                alt="NEXUS CPA" 
                className="w-10 h-10 rounded-lg object-cover"
              />
              <span className="text-xl font-bold tracking-tight text-white uppercase">
                Nexus CPA <span className="text-[#d4af37]">Outsourcing</span>
              </span>
            </Link>
            <Link to="/" className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-slate-400 hover:text-[#d4af37] transition-colors">
              <ArrowLeft size={16} /> Back to Home
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-40 pb-24 px-4">
        <div className="max-w-4xl mx-auto">
          <Outlet />
        </div>
      </main>

      {/* Simplified Footer */}
      <footer className="bg-black text-white py-12 px-4 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[10px] font-bold tracking-widest uppercase text-slate-700">
            © 2025 NEXUS CPA OUTSOURCING. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
