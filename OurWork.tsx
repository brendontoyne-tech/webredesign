import { useEffect } from "react";
import { motion } from "motion/react";
import { Instagram, Facebook, Camera, ArrowRight } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { SEO } from "../components/SEO";

export default function OurWork() {
  useEffect(() => {
    const id = "EmbedSocialHashtagScript";
    if (!document.getElementById(id)) {
      const js = document.createElement('script');
      js.id = id;
      js.src = "https://embedsocial.com/cdn/ht.js";
      document.getElementsByTagName("head")[0].appendChild(js);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#F8ABAC]/30 text-[#033852]">
      <SEO 
        title="Our Work | Gutter Cleaning & Permanent Lighting Parksville | CoastalVille Exteriors"
        description="See real jobs completed by CoastalVille Exteriors across Parksville, Qualicum Beach and the Oceanside area. Gutters, gutter guards, permanent lighting and holiday lights."
      />
      <Navbar />

      {/* SECTION 1 — HERO */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
            src="https://i.ibb.co/xtLGd9hb/Adobe-Stock-1646374477.jpg" 
            alt="CoastalVille Work" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-[#033852]/70" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            {/* Service List with Lines */}
            <div className="mb-12 flex items-center gap-6">
              <div className="hidden md:block h-[1px] w-24 bg-white/30" />
              <span className="text-white/90 text-[10px] md:text-[11px] font-bold tracking-[0.4em] uppercase whitespace-nowrap">
                REAL JOBS · REAL RESULTS · NO STOCK PHOTOS
              </span>
              <div className="hidden md:block h-[1px] w-24 bg-white/30" />
            </div>

            {/* Main Headline */}
            <h1 className="flex flex-col items-center mb-10">
              <span className="font-sans font-bold text-6xl md:text-[110px] text-white leading-none uppercase tracking-tight mb-2">
                Real Work
              </span>
              <span className="font-sans font-black text-5xl md:text-[90px] text-[#F8ABAC] leading-none uppercase tracking-tight">
                Real Results
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="max-w-xl text-white/80 text-sm md:text-base font-medium leading-relaxed mb-12">
              Every photo on this page is a real job completed by CoastalVille Exteriors across Parksville, Qualicum Beach and the Oceanside area.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a 
                href="/contact" 
                className="w-full sm:w-auto px-10 py-4 bg-[#F8ABAC] text-[#033852] rounded-md text-xs font-black uppercase tracking-widest hover:bg-[#f59496] transition-all shadow-xl shadow-[#F8ABAC]/20"
              >
                Get a Free Quote
              </a>
              <a 
                href="https://instagram.com/coastalville_exteriors" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-4 bg-transparent text-white border border-white/40 rounded-md text-xs font-black uppercase tracking-widest hover:bg-white/10 transition-all"
              >
                Follow on Instagram
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 1: Instagram Feed Grid */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-12 bg-[#F8ABAC]/30" />
              <span className="text-[#F8ABAC] font-bold text-sm uppercase tracking-widest block">Live Feed</span>
              <div className="h-px w-12 bg-[#F8ABAC]/30" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#033852] mb-8 tracking-tight uppercase">Our Latest Work</h2>
            <p className="text-zinc-600 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
              Follow us on Instagram <span className="text-[#F8ABAC] font-bold">@coastalville_exteriors</span> to see our most recent projects across the Oceanside area.
            </p>
          </div>

          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-zinc-100 bg-white p-4 md:p-8">
            <div className="embedsocial-hashtag" data-ref="727987593f633d8f4a5fb49966647dc0871a5217">
              <a className="feed-powered-by-es feed-powered-by-es-feed-img es-widget-branding" href="https://embedsocial.com/instagram-widget/" target="_blank" rel="noopener noreferrer" title="Instagram widget">
                <img src="https://embedsocial.com/cdn/icon/embedsocial-logo.webp" alt="EmbedSocial" />
                <div className="es-widget-branding-text">Instagram widget</div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Follow Us on Social Media */}
      <section className="py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-[#F8ABAC]/30" />
            <span className="text-[#F8ABAC] font-bold text-sm uppercase tracking-widest block">Follow Along</span>
            <div className="h-px w-12 bg-[#F8ABAC]/30" />
          </div>
          <h2 className="text-4xl font-bold text-[#033852] mb-8 tracking-tight uppercase">Stay Updated</h2>
          <p className="text-zinc-600 text-lg mb-12 leading-relaxed">
            We post every job we're proud of, follow along for real work from real jobs across Parksville, Qualicum Beach and the Oceanside area.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href="https://instagram.com/coastalville_exteriors" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#033852] text-white rounded-md text-xs font-black uppercase tracking-widest hover:bg-[#044a6b] transition-all shadow-xl shadow-[#033852]/10"
            >
              <Instagram className="w-6 h-6 text-[#F8ABAC]" /> @coastalville_exteriors
            </a>
            <a 
              href="#" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#033852] text-white rounded-md text-xs font-black uppercase tracking-widest hover:bg-[#044a6b] transition-all shadow-xl shadow-[#033852]/10"
            >
              <Facebook className="w-6 h-6 text-[#F8ABAC]" /> CoastalVille Exteriors
            </a>
          </div>
        </div>
      </section>

      {/* Section 3: Final CTA */}
      <section className="bg-white py-32 px-6 text-center overflow-hidden relative border-t border-zinc-100">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-8 bg-[#F8ABAC]/30" />
            <span className="text-[#F8ABAC] font-bold text-xs uppercase tracking-[0.4em]">Get In Touch</span>
            <div className="h-px w-8 bg-[#F8ABAC]/30" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-[#033852] mb-8 leading-tight tracking-tight uppercase">
            Like What <br /> <span className="text-[#F8ABAC]">You See?</span>
          </h2>
          <p className="text-zinc-500 text-xl mb-12">Get a free quote and we'll show you what we can do for your home.</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" className="px-10 py-5 bg-[#F8ABAC] text-white rounded-xl font-bold text-lg hover:bg-[#f59496] transition-all shadow-xl shadow-[#F8ABAC]/20">Get a Free Quote <ArrowRight className="w-5 h-5 inline ml-2" /></a>
            <a href="tel:2502701010" className="px-10 py-5 border border-[#033852]/20 text-[#033852] rounded-xl font-bold text-lg hover:bg-zinc-50 transition-all">Call (250) 270-1010</a>
          </div>
          <p className="text-zinc-400 text-sm mt-6">We respond within 24 hours, usually much faster.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
