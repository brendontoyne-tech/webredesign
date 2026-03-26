import { motion } from "motion/react";
import { Check, Instagram, Facebook, ArrowRight } from "lucide-react";
import { SEO } from "../components/SEO";

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#F8ABAC]/30 text-[#033852]">
      <SEO 
        title="Thank You | CoastalVille Exteriors"
        description="Thanks for reaching out! We'll be in touch soon."
        noIndex={true}
      />
      
      {/* SECTION 1 — HERO / THANK YOU */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
            src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=2000" 
            alt="CoastalVille Thank You" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-[#033852]/80 backdrop-blur-[2px]" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
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
                MESSAGE RECEIVED · WE'LL BE IN TOUCH
              </span>
              <div className="hidden md:block h-[1px] w-24 bg-white/30" />
            </div>

            {/* Main Headline */}
            <h1 className="flex flex-col items-center mb-10">
              <span className="font-sans font-bold text-6xl md:text-[110px] text-white leading-none uppercase tracking-tight mb-2">
                Thank
              </span>
              <span className="font-sans font-black text-5xl md:text-[90px] text-[#F8ABAC] leading-none uppercase tracking-tight">
                You
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="max-w-xl text-white/80 text-sm md:text-base font-medium leading-relaxed mb-12">
              We respond to every enquiry within 24 hours — usually much faster.
            </p>

            {/* Confirmation Box (Guarantee Style) */}
            <div className="bg-white/5 backdrop-blur-md rounded-[2.5rem] p-8 md:p-12 mb-12 border border-white/10 max-w-xl mx-auto text-left relative overflow-hidden shadow-2xl">
              <div className="relative z-10 space-y-6">
                {[
                  "We've received your message",
                  "Someone from our team will reach out within 24 hours",
                  "We'll confirm the details and get you booked in"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-white">
                    <div className="w-6 h-6 bg-[#F8ABAC] rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-[#033852]" />
                    </div>
                    <span className="font-bold text-sm md:text-base uppercase tracking-tight">{item}</span>
                  </div>
                ))}
              </div>
              
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#F8ABAC]/10 blur-[60px] rounded-full translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#F8ABAC]/10 blur-[80px] rounded-full -translate-x-1/2 translate-y-1/2" />
            </div>

            {/* Next Steps */}
            <div className="mb-12">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px w-8 bg-[#F8ABAC]/30" />
                <span className="text-[#F8ABAC] font-bold text-[10px] uppercase tracking-[0.4em]">While You Wait</span>
                <div className="h-px w-8 bg-[#F8ABAC]/30" />
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-10 max-w-lg mx-auto">
                Take a look at some of our recent work — or follow us on Instagram and Facebook for project updates and seasonal tips.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <a 
                  href="https://instagram.com/coastalville_exteriors" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-10 py-4 bg-[#F8ABAC] text-[#033852] rounded-md text-xs font-black uppercase tracking-widest hover:bg-[#f59496] transition-all shadow-xl shadow-[#F8ABAC]/20 flex items-center justify-center gap-2"
                >
                  <Instagram className="w-4 h-4" /> Instagram
                </a>
                <a 
                  href="https://facebook.com/coastalvilleexteriors" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-10 py-4 bg-transparent text-white border border-white/40 rounded-md text-xs font-black uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                >
                  <Facebook className="w-4 h-4" /> Facebook
                </a>
              </div>

              <a 
                href="/our-work" 
                className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest"
              >
                See Our Recent Work <ArrowRight className="w-3 h-3 text-[#F8ABAC]" />
              </a>
            </div>

            {/* Back to Home */}
            <a 
              href="/" 
              className="text-white/60 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest border-b border-white/20 pb-1"
            >
              Back to Homepage
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
