import { createFileRoute, Link } from '@tanstack/react-router'
import { useSuspenseQuery } from '@tanstack/react-query'
import { convexQuery } from '@convex-dev/react-query'
import { useMutation } from 'convex/react'
import { api } from '../../convex/_generated/api'
import { motion } from 'framer-motion'
import { CheckCircle2, Phone, Menu, X, Calculator, ShieldCheck, BookOpen, Users, Star, Mail, Globe, Clock, Shield, ArrowRight, MessageSquare, Headphones, DollarSign, Award } from 'lucide-react'
import { useState, type FormEvent } from 'react'

export const Route = createFileRoute('/')({
  component: HomePage,
})

const iconMap: Record<string, any> = {
  Calculator,
  ShieldCheck,
  BookOpen,
  Users,
}

function HomePage() {
  const { data: services } = useSuspenseQuery(convexQuery(api.queries.listServices, {}))
  const createLead = useMutation(api.leads.create)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    revenue: '',
    message: '',
    phone: '',
    serviceNeeded: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    await createLead({
      name: formState.name,
      email: formState.email,
      businessName: formState.company,
      revenueRange: formState.revenue || 'Not specified',
      serviceNeeded: formState.serviceNeeded || 'General Inquiry',
      phone: formState.phone,
      message: formState.message,
    })
    setIsSubmitted(true)
    setFormState({ name: '', email: '', company: '', revenue: '', message: '', phone: '', serviceNeeded: '' })
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-[#0a1128] text-slate-200 selection:bg-[#d4af37]/30 font-sans overflow-x-hidden">
      {/* Premium Header */}
      <nav className="fixed w-full z-50 bg-[#0a1128]/95 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img 
                src="https://cpa-landing-seven.vercel.app/assets/logo-CQmzYzbC.jpeg" 
                alt="NEXUS CPA Logo" 
                className="w-10 h-10 rounded-lg object-cover"
              />
              <span className="text-xl font-bold tracking-tight text-white uppercase">
                Nexus CPA <span className="text-[#d4af37] font-light">Outsourcing</span>
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {[
                { name: 'Services', id: 'services' },
                { name: 'Vision', id: 'vision' },
                { name: 'About', id: 'about' },
                { name: 'Pricing', id: 'pricing' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400 hover:text-[#d4af37] transition-colors"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-[#d4af37] hover:bg-[#aa8e2e] text-[#0a1128] px-6 py-2.5 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all shadow-lg shadow-[#d4af37]/20"
              >
                Inquire Now
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#d4af37]">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#0a1128] border-b border-white/5 px-4 pt-2 pb-6 space-y-1">
            {['Services', 'Vision', 'About', 'Pricing', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left px-3 py-4 text-[10px] font-bold tracking-widest uppercase text-slate-300 hover:text-[#d4af37]"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0a1128]">
        {/* Full Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ duration: 3, ease: "easeOut" }}
            className="w-full h-full"
          >
            <img 
              src="https://plus.unsplash.com/premium_photo-1672423154405-5fd922c11af2?fm=jpg&q=60&w=3000&auto=format&fit=crop" 
              alt="Background" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          {/* Layered Overlays for Depth & Readability */}
          <div className="absolute inset-0 bg-[#0a1128]/60 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1128] via-[#0a1128]/90 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128] via-transparent to-transparent"></div>
          
          {/* Subtle Golden Glow Accent */}
          <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-[#d4af37]/10 blur-[150px] rounded-full opacity-50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 w-full pt-12">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 mb-10 px-5 py-2 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/5 backdrop-blur-md">
                <div className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse shadow-[0_0_10px_#d4af37]"></div>
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#d4af37]">
                  Trusted by CPA Firms Nationwide
                </span>
              </div>
              
              <h1 className="text-6xl md:text-9xl font-bold text-white leading-[0.95] mb-10 tracking-tighter">
                Strategic <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#f3d984] to-[#aa8e2e] italic font-serif">Outsourcing</span> <br />
                <span className="font-light">for Modern Firms</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-300 mb-14 max-w-2xl leading-relaxed font-light">
                Empowering CPA firms to scale with elite, white-label execution. 
                Seamlessly integrate a high-performance extension of your team.
              </p>
              
              <div className="flex items-center gap-6 mb-16">
                <div className="flex -space-x-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-[#0a1128] bg-[#1a243e] flex items-center justify-center text-[10px] font-bold text-[#d4af37] shadow-xl">
                      {i === 4 ? "50+" : ""}
                    </div>
                  ))}
                </div>
                <div className="text-sm text-slate-400 font-light tracking-wide border-l border-white/10 pl-6">
                  Elite partners for <span className="text-white font-medium">50+ Top-Tier CPA Firms</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-8 items-start">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="group relative overflow-hidden bg-[#d4af37] text-[#0a1128] px-12 py-6 rounded-full font-bold text-sm tracking-widest uppercase transition-all shadow-2xl shadow-[#d4af37]/40 hover:scale-105"
                >
                  <span className="relative z-10">Request Consultation</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="group inline-flex items-center gap-4 text-white px-8 py-6 rounded-full font-bold text-sm tracking-widest uppercase hover:text-[#d4af37] transition-all"
                >
                  Explore Expertise 
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform text-[#d4af37]" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 cursor-pointer"
          onClick={() => scrollToSection('services')}
        >
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-slate-500">Discover</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#d4af37] to-transparent"></div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="relative z-20 -mt-10 px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { num: "60%", label: "Average Cost Savings", icon: DollarSign },
              { num: "99%", label: "Quality Accuracy", icon: ShieldCheck },
              { num: "100%", label: "White-Label Partner", icon: Award },
              { num: "24/7", label: "Priority Support", icon: Headphones }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#1a243e]/50 backdrop-blur-md border border-white/5 rounded-2xl p-8 text-center flex flex-col items-center justify-center min-h-[200px] relative overflow-hidden group hover:bg-[#1a243e] hover:border-[#d4af37]/30 transition-all duration-500"
              >
                <div className="w-10 h-10 rounded-full bg-[#d4af37]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                  <stat.icon size={20} className="text-[#d4af37]" />
                </div>
                <div className="text-5xl font-bold text-white mb-2 tracking-tighter group-hover:text-[#d4af37] transition-colors">{stat.num}</div>
                <div className="text-xs font-bold tracking-[0.2em] uppercase text-slate-500">{stat.label}</div>
                
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#d4af37]/0 group-hover:border-[#d4af37]/40 transition-all duration-500 rounded-tr-2xl"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-32 px-4 bg-white/[0.02] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-[#d4af37] mb-6">Our Vision</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
                Empowering Growth through <span className="font-light italic text-[#d4af37]">Precision</span>
              </h3>
              <p className="text-xl text-slate-400 font-light leading-relaxed">
                To be the most trusted global partner for CPA firms, redefining outsourcing as a personal, reliable, and high-impact extension of every client we serve.
              </p>
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: 'Quality', desc: 'Uncompromising accuracy in every return.' },
                { title: 'Security', desc: 'Bank-grade data protection protocols.' },
                { title: 'Speed', desc: 'Rapid turnaround even during peak season.' },
                { title: 'Service', desc: 'Relationship-driven personal support.' }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-[#1a243e] rounded-2xl border border-white/5">
                  <div className="text-[#d4af37] font-bold mb-2 uppercase tracking-widest text-[10px]">{item.title}</div>
                  <p className="text-slate-400 text-xs font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-32 px-4 relative overflow-hidden bg-[#121212]/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden border border-white/5 shadow-2xl aspect-[4/5] bg-slate-900">
                <img 
                  src="https://cpa-landing-seven.vercel.app/assets/founder-CBaKH-bK.png" 
                  alt="Kanisha - Founder" 
                  className="w-full h-full object-cover transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#d4af37]/10 rounded-2xl -z-0"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-[#d4af37] mb-6">About Me</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
                Meet the <span className="font-light italic">Founder</span>
              </h3>
              <div className="space-y-6 text-slate-400 font-light text-lg leading-relaxed">
                <p className="text-white font-medium italic">Hi, I'm Kanisha — your trusted outsourcing partner for CPA firms.</p>
                <p>
                  I started this firm with a simple intention: to support CPA professionals with dependable work and a relationship-driven approach. I believe outsourcing should feel seamless, personal, and trustworthy — not transactional.
                </p>
                <p>
                  What defines my work is consistency, clarity, and commitment. I stay closely involved in every assignment, maintain open communication, and make sure clients always feel supported. I understand how demanding accounting timelines can be, so I prioritize reliability, confidentiality, and quick problem-solving.
                </p>
                <p>
                  My goal is to make your workflow lighter and your firm stronger — by being an extension of your team, someone you can count on every single time.
                </p>
                <p>
                  If you prefer working with someone who is accessible, detail-driven, and genuinely invested in your success, I'd be glad to connect.
                </p>
              </div>
              <div className="mt-12">
                 <button 
                  onClick={() => scrollToSection('contact')}
                  className="inline-flex items-center gap-3 text-[#d4af37] font-bold text-xs tracking-widest uppercase group"
                >
                  Let's Connect <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-4 border-y border-white/5 bg-[#0a1128]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#d4af37]/5 blur-[80px] -z-10"></div>
            <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-[#d4af37] mb-6">Expertise</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tight">Our Strategic <span className="font-light italic font-serif">Services</span></h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => {
              const Icon = iconMap[service.icon] || CheckCircle2
              return (
                <motion.div
                  key={service._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-10 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-[#d4af37]/30 hover:bg-white/[0.04] transition-all group"
                >
                  <div className="w-12 h-12 bg-[#d4af37]/10 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-[#d4af37]" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-4 uppercase tracking-wider">{service.title}</h4>
                  <p className="text-slate-400 font-light mb-8 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-3 text-[10px] font-bold tracking-widest text-slate-500 uppercase">
                        <div className="w-1 h-1 bg-[#d4af37] rounded-full"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Software & Tools Section */}
      <section className="py-32 px-4 bg-[#121212]/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-[#d4af37] mb-6">Technology</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">Software <span className="font-light italic">& Tools</span></h3>
            <p className="text-slate-500 mt-6 max-w-2xl mx-auto font-light">Trained and experienced in all major industry-leading accounting and tax software packages.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Tax Software", tools: ["Drake", "CCH Axcess", "UltraTax", "ProSeries", "Lacerte"] },
              { title: "Bookkeeping Tools", tools: ["QuickBooks Online", "QuickBooks Desktop", "Xero", "Wave", "Zoho", "NetSuite"] },
              { title: "Audit Support", tools: ["CaseWare", "AdvanceFlow", "Excel Workpapers"] },
              { title: "Project Management", tools: ["Jetpack", "Karbon", "Trello", "Asana", "ShareFile", "Dropbox", "Google Drive"] }
            ].map((cat) => (
              <motion.div 
                key={cat.title}
                whileHover={{ y: -5 }}
                className="p-8 bg-[#1a243e] border border-white/5 rounded-2xl shadow-xl transition-all hover:border-[#d4af37]/20"
              >
                <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-[#d4af37] mb-8 border-b border-white/5 pb-4">{cat.title}</h4>
                <div className="space-y-4">
                  {cat.tools.map((tool) => (
                    <div key={tool} className="text-slate-400 font-light text-sm flex justify-between items-center group cursor-default">
                      <span className="group-hover:text-white transition-colors">{tool}</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-[#d4af37] transition-colors shadow-sm"></div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* USPs Section */}
      <section id="usps" className="py-32 px-4 bg-[#0a1128]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-[#d4af37] mb-6">Advantages</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white">Our <span className="font-light italic text-[#d4af37]">USPs</span></h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Senior Supervision & Two-Level Review", desc: "Every engagement guided by seniors and reviewed twice for accuracy", icon: Shield },
              { title: "Risk-Free Trial", desc: "One-month trial period before you commit", icon: Clock },
              { title: "U.S. Accounting Expertise", desc: "Team trained in GAAP compliance, U.S. tax codes, and IRS notices", icon: Award },
              { title: "Direct & Transparent Communication", desc: "No unnecessary middle layers—build strong partnerships", icon: MessageSquare },
              { title: "Flexible Pricing", desc: "Choose between hourly or fixed models to fit your needs", icon: DollarSign },
              { title: "24/7 Support", desc: "Round-the-clock assistance for your team", icon: Headphones }
            ].map((usp, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-[#d4af37]/20 transition-all flex flex-col h-full"
              >
                <div className="w-12 h-12 bg-[#d4af37]/10 rounded-full flex items-center justify-center mb-8">
                  <usp.icon size={24} className="text-[#d4af37]" />
                </div>
                <h4 className="text-lg font-bold text-white mb-4 uppercase tracking-widest leading-snug">{usp.title}</h4>
                <p className="text-slate-400 font-light leading-relaxed text-sm mt-auto">{usp.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

       {/* Pricing Section */}
       <section id="pricing" className="py-32 px-4 relative bg-[#121212]/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-[#d4af37] mb-6">Investment</h2>
              <h3 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-8">
                How Our <br /><span className="font-light italic text-[#d4af37]">Pricing</span> Works
              </h3>
              <p className="text-xl text-slate-300 font-light leading-relaxed mb-10">
                Transparent, Flexible, and Tailored to Your Needs
              </p>
              <div className="space-y-6 text-slate-400 font-light text-lg mb-12">
                <p>
                  Every firm operates differently, so we create a quote that aligns with your specific goals and the level of support you're looking for.
                </p>
                <p>
                  Instead of fixed numbers, we take a consultative approach — understanding what you need and building a pricing structure that feels comfortable, fair, and scalable for you.
                </p>
              </div>

              <div className="space-y-6">
                <h4 className="text-xs font-bold tracking-widest uppercase text-white mb-8 border-l-2 border-[#d4af37] pl-4">What You Can Expect</h4>
                {[
                  "A quote that reflects the exact scope of your requirement",
                  "Simple, transparent terms without any hidden components",
                  "Options to adjust your plan as your needs evolve",
                  "A clear breakdown of what your quote includes"
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="mt-1.5"><CheckCircle2 size={16} className="text-[#d4af37]" /></div>
                    <p className="text-slate-300 font-light">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-[#1a243e] border border-white/5 p-12 rounded-3xl shadow-2xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[#d4af37]/5 pointer-events-none opacity-20"></div>
              <div className="absolute -top-4 -right-4 bg-[#d4af37] text-[#0a1128] px-4 py-2 rounded-lg font-bold text-[10px] tracking-widest uppercase shadow-xl">Quote-Ready</div>
              <h4 className="text-2xl font-bold text-white mb-12 relative z-10">Getting Your Quote Is Easy</h4>
              
              <div className="space-y-12 relative z-10">
                {[
                  { step: "1", title: "Share Your Requirements", desc: "Provide a brief outline of what you're looking for, and we'll understand your scope." },
                  { step: "2", title: "Quick Consultation", desc: "A brief conversation to understand your expectations and timelines." },
                  { step: "3", title: "Personalized Estimate", desc: "Receive a detailed, transparent quote tailored to your needs." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#d4af37]/10 border border-[#d4af37]/20 flex items-center justify-center text-xl font-bold text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-[#0a1128] transition-all duration-500">
                      {item.step}
                    </div>
                    <div>
                      <h5 className="text-lg font-bold text-white mb-2">{item.title}</h5>
                      <p className="text-slate-400 font-light text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 relative z-10">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-[#d4af37] hover:bg-[#aa8e2e] text-[#0a1128] py-5 rounded-2xl font-bold text-xs tracking-[0.3em] uppercase transition-all shadow-xl shadow-[#d4af37]/20"
                >
                  Request Your Quote
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Real Results / Case Studies */}
      <section className="py-32 px-4 border-t border-white/5 bg-[#0a1128]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-[#d4af37] mb-6">Real Results</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">Client <span className="font-light italic">Success</span> Stories</h3>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "Mid-sized Firm, Texas",
                challenge: "1040 filings backlog during peak tax season.",
                solution: "Deployed 3 tax preparers with 48-hour onboarding.",
                results: "Cleared 35 returns/week with 100% accuracy rate."
              },
              {
                title: "Mid-sized Firm, California",
                challenge: "Overload in monthly bookkeeping and payroll processing.",
                solution: "Assigned 2 dedicated full-time bookkeepers.",
                results: "Zero penalties, on-time payroll, and real-time books."
              }
            ].map((caseStudy, i) => (
              <div key={i} className="bg-white/[0.02] border-l-4 border-[#d4af37] p-12 rounded-r-2xl hover:bg-white/[0.04] transition-all">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} size={14} className="text-[#d4af37] fill-[#d4af37]" />)}
                </div>
                <h4 className="text-2xl font-bold text-white mb-8">{caseStudy.title}</h4>
                <div className="space-y-6">
                  <div>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-slate-500 block mb-2">Challenge</span>
                    <p className="text-slate-300 font-light">{caseStudy.challenge}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-slate-500 block mb-2">Solution</span>
                    <p className="text-slate-300 font-light">{caseStudy.solution}</p>
                  </div>
                  <div className="pt-6 border-t border-white/5">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-[#d4af37] block mb-2">Result</span>
                    <p className="text-white font-medium">{caseStudy.results}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0a1128]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-[#d4af37] mb-6">Inquiry</h2>
              <h3 className="text-4xl md:text-7xl font-bold text-white leading-tight mb-8">
                Let's <span className="font-light italic text-[#d4af37]">Start</span> <br /> 
                A <span className="text-white underline decoration-[#d4af37]/30">Partnership</span>
              </h3>
              <p className="text-xl text-slate-400 font-light leading-relaxed mb-12 max-w-md">
                Reduce your load and increase firm capacity without adding local headcount. Request your custom quote today.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6 group cursor-pointer" onClick={() => window.location.href = 'mailto:info@nexuscpaoutsourcing.com'}>
                  <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:border-[#d4af37]/50 group-hover:bg-[#d4af37]/10 transition-all">
                    <Mail size={20} className="text-[#d4af37]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-slate-500">Email us</span>
                    <p className="text-white font-medium group-hover:text-[#d4af37] transition-colors text-sm">info@nexuscpaoutsourcing.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group cursor-pointer" onClick={() => window.location.href = 'tel:+13109289229'}>
                  <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:border-[#d4af37]/50 group-hover:bg-[#d4af37]/10 transition-all">
                    <Phone size={20} className="text-[#d4af37]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-slate-500">Call us</span>
                    <p className="text-white font-medium group-hover:text-[#d4af37] transition-colors text-sm">+1 (310) 928-9229</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#1a243e] border border-white/5 p-10 md:p-16 rounded-3xl backdrop-blur-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 z-0 opacity-5" 
                style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)', backgroundSize: '30px 30px' }}>
              </div>
              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold tracking-widest uppercase text-slate-500">Full Name</label>
                    <input 
                      type="text" 
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-4 focus:border-[#d4af37] outline-none text-white transition-all"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold tracking-widest uppercase text-slate-500">Email Address</label>
                    <input 
                      type="email" 
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-4 focus:border-[#d4af37] outline-none text-white transition-all"
                      placeholder="jane@firm.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-widest uppercase text-slate-500">Firm Name</label>
                  <input 
                    type="text" 
                    value={formState.company}
                    onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-4 focus:border-[#d4af37] outline-none text-white transition-all"
                    placeholder="Your CPA Firm LLC"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-widest uppercase text-slate-500">How can we help?</label>
                  <select 
                    value={formState.serviceNeeded}
                    onChange={(e) => setFormState({ ...formState, serviceNeeded: e.target.value })}
                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-4 focus:border-[#d4af37] outline-none text-white transition-all appearance-none"
                  >
                    <option value="" className="bg-[#0a1128]">Select Area of Interest</option>
                    <option value="Tax Preparation" className="bg-[#0a1128]">Tax Preparation</option>
                    <option value="Bookkeeping" className="bg-[#0a1128]">Bookkeeping</option>
                    <option value="Audit Support" className="bg-[#0a1128]">Audit Support</option>
                    <option value="Payroll Services" className="bg-[#0a1128]">Payroll Services</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-widest uppercase text-slate-500">Message</label>
                  <textarea 
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl p-4 focus:border-[#d4af37] outline-none text-white transition-all resize-none"
                    placeholder="Tell us about your current workload and goals..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  disabled={isSubmitted}
                  className="w-full bg-[#d4af37] hover:bg-[#aa8e2e] text-[#0a1128] py-6 rounded-xl font-bold text-xs tracking-[0.3em] uppercase transition-all shadow-xl shadow-[#d4af37]/20 disabled:opacity-50"
                >
                  {isSubmitted ? 'Sent Successfully' : 'Send Inquiry'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Footer */}
      <footer className="bg-black text-white py-24 px-4 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-8">
                <img 
                  src="https://cpa-landing-seven.vercel.app/assets/logo-CQmzYzbC.jpeg" 
                  alt="NEXUS CPA Logo" 
                  className="w-10 h-10 rounded-lg object-cover"
                />
                <span className="text-xl font-bold tracking-tight text-white uppercase">
                  Nexus CPA <span className="text-[#d4af37]">Outsourcing</span>
                </span>
              </div>
              <p className="text-slate-400 font-light leading-relaxed text-sm">
                Empowering CPA firms with reliable offshore staffing solutions
              </p>
            </div>

            <div>
              <h5 className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#d4af37] mb-8">Services</h5>
              <ul className="space-y-4">
                {['Tax Preparation', 'Bookkeeping', 'Audit Support', 'Payroll Services'].map(service => (
                  <li key={service}>
                    <button onClick={() => scrollToSection('services')} className="text-[10px] font-bold tracking-widest uppercase text-slate-500 hover:text-white transition-colors text-left">
                      {service}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#d4af37] mb-8">Company</h5>
              <ul className="space-y-4">
                {[
                  { name: 'Our Vision', id: 'vision' },
                  { name: 'About us', id: 'about' },
                  { name: 'Contact', id: 'contact' }
                ].map(link => (
                  <li key={link.id}>
                    <button onClick={() => scrollToSection(link.id)} className="text-[10px] font-bold tracking-widest uppercase text-slate-500 hover:text-white transition-colors text-left">
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#d4af37] mb-8">Legal</h5>
              <ul className="space-y-4">
                {[
                  { name: 'Privacy Policy', path: '/privacy-policy' },
                  { name: 'Terms of Service', path: '/terms-of-service' },
                  { name: 'Security', path: '/security' },
                  { name: 'Compliance', path: '/compliance' }
                ].map(link => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-[10px] font-bold tracking-widest uppercase text-slate-500 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-[10px] font-bold tracking-widest uppercase text-slate-700">© 2025 NEXUS CPA OUTSOURCING. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              <a href="https://www.linkedin.com/in/nexus-cpa-outsourcing-a1408b397/" target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold tracking-widest uppercase text-slate-500 hover:text-[#d4af37] transition-colors flex items-center gap-2">
                <Globe size={14} /> LinkedIn
              </a>
              <a href="tel:+13109289229" className="text-[10px] font-bold tracking-widest uppercase text-slate-500 hover:text-[#d4af37] transition-colors flex items-center gap-2">
                <Phone size={14} /> +1 (310) 928-9229
              </a>
              <a href="mailto:info@nexuscpaoutsourcing.com" className="text-[10px] font-bold tracking-widest uppercase text-slate-500 hover:text-[#d4af37] transition-colors flex items-center gap-2">
                <Mail size={14} /> info@nexuscpaoutsourcing.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
