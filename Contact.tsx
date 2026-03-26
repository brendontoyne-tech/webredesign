import React from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { 
  Phone, 
  Mail, 
  Clock, 
  MapPin, 
  Instagram, 
  Facebook, 
  Check, 
  Star,
  ArrowRight
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { SEO } from "../components/SEO";

export default function Contact() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/thank-you");
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#F8ABAC]/30 text-[#033852]">
      <SEO 
        title="Contact & Free Quote | CoastalVille Exteriors Parksville"
        description="Get in touch with CoastalVille Exteriors or request a free quote. Gutters, gutter guards, permanent lighting and holiday lights in Parksville, Qualicum Beach and the Oceanside area. Call, text, or fill out the form."
      />
      <Navbar />

      {/* SECTION 1 — HERO */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
            src="https://i.ibb.co/c7K6ZK3/IMG-4583.jpg" 
            alt="CoastalVille Contact" 
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
                FREE QUOTES · FAST RESPONSES · NO RUNAROUND
              </span>
              <div className="hidden md:block h-[1px] w-24 bg-white/30" />
            </div>

            {/* Main Headline */}
            <h1 className="flex flex-col items-center mb-10">
              <span className="font-sans font-bold text-6xl md:text-[110px] text-white leading-none uppercase tracking-tight mb-2">
                Get In
              </span>
              <span className="font-sans font-black text-5xl md:text-[90px] text-[#F8ABAC] leading-none uppercase tracking-tight">
                Touch
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="max-w-xl text-white/80 text-sm md:text-base font-medium leading-relaxed mb-12">
              We're here Monday to Saturday, 8am – 6pm. Reach out for a free, no-obligation quote on any of our exterior services.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button 
                onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-10 py-4 bg-[#F8ABAC] text-[#033852] rounded-md text-xs font-black uppercase tracking-widest hover:bg-[#f59496] transition-all shadow-xl shadow-[#F8ABAC]/20"
              >
                Request a Quote
              </button>
              <a 
                href="tel:2502701010" 
                className="w-full sm:w-auto px-10 py-4 bg-transparent text-white border border-white/40 rounded-md text-xs font-black uppercase tracking-widest hover:bg-white/10 transition-all"
              >
                Call (250) 270-1010
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — FORM + CONTACT DETAILS */}
      <section id="quote-form" className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column — Form */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#F5F5F5] p-8 md:p-12 rounded-2xl border border-zinc-100 shadow-sm"
            >
              <div className="mb-12">
                <span className="text-[#F8ABAC] font-bold text-[10px] md:text-[11px] uppercase tracking-[0.4em] mb-4 block">Request a Quote</span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#033852]">Send Us a Message</h2>
              </div>

              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#033852]/60 ml-1">First Name</label>
                    <input type="text" className="w-full px-6 py-4 rounded-xl border border-zinc-200 focus:border-[#F8ABAC] focus:ring-2 focus:ring-[#F8ABAC]/20 outline-none transition-all bg-white font-medium" required />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#033852]/60 ml-1">Last Name</label>
                    <input type="text" className="w-full px-6 py-4 rounded-xl border border-zinc-200 focus:border-[#F8ABAC] focus:ring-2 focus:ring-[#F8ABAC]/20 outline-none transition-all bg-white font-medium" required />
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#033852]/60 ml-1">Phone Number</label>
                    <input type="tel" className="w-full px-6 py-4 rounded-xl border border-zinc-200 focus:border-[#F8ABAC] focus:ring-2 focus:ring-[#F8ABAC]/20 outline-none transition-all bg-white font-medium" required />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#033852]/60 ml-1">Email</label>
                    <input type="email" className="w-full px-6 py-4 rounded-xl border border-zinc-200 focus:border-[#F8ABAC] focus:ring-2 focus:ring-[#F8ABAC]/20 outline-none transition-all bg-white font-medium" required />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#033852]/60 ml-1">City</label>
                    <select className="w-full px-6 py-4 rounded-xl border border-zinc-200 focus:border-[#F8ABAC] focus:ring-2 focus:ring-[#F8ABAC]/20 outline-none transition-all bg-white font-medium appearance-none" required>
                      <option value="">Select City</option>
                      <option value="Parksville">Parksville</option>
                      <option value="Qualicum Beach">Qualicum Beach</option>
                      <option value="Lantzville">Lantzville</option>
                      <option value="Nanoose Bay">Nanoose Bay</option>
                      <option value="Coombs">Coombs</option>
                      <option value="Errington">Errington</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#033852]/60 ml-1">Service Needed</label>
                    <select className="w-full px-6 py-4 rounded-xl border border-zinc-200 focus:border-[#F8ABAC] focus:ring-2 focus:ring-[#F8ABAC]/20 outline-none transition-all bg-white font-medium appearance-none" required>
                      <option value="">Select Service</option>
                      <option value="Gutter Cleaning">Gutter Cleaning</option>
                      <option value="Gutter Repair">Gutter Repair</option>
                      <option value="Gutter Guards">Gutter Guards</option>
                      <option value="Downspouts">Downspouts</option>
                      <option value="Soffits">Soffits</option>
                      <option value="Permanent Lighting">Permanent Lighting</option>
                      <option value="Holiday Lighting">Holiday Lighting</option>
                      <option value="Not Sure / Other">Not Sure / Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#033852]/60 ml-1">Tell us a bit more (optional)</label>
                  <textarea rows={4} className="w-full px-6 py-4 rounded-xl border border-zinc-200 focus:border-[#F8ABAC] focus:ring-2 focus:ring-[#F8ABAC]/20 outline-none transition-all bg-white font-medium resize-none" placeholder="Address, anything helpful..."></textarea>
                </div>

                <div className="pt-6">
                  <button type="submit" className="w-full py-4 bg-[#F8ABAC] text-[#033852] rounded-md text-xs font-black uppercase tracking-widest hover:bg-[#f59496] transition-all shadow-xl shadow-[#F8ABAC]/20">
                    Send My Request
                  </button>
                  <p className="text-center text-[#033852]/40 text-[10px] font-bold uppercase tracking-widest mt-6">
                    No spam. No obligation. Just a straight answer.
                  </p>
                </div>
              </form>
            </motion.div>

            {/* Right Column — Contact Details */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center space-y-16 lg:pl-12"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-[#F8ABAC]">
                  <div className="w-12 h-12 bg-[#F8ABAC]/10 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#033852]">Call or Text</h3>
                </div>
                <div className="pl-16">
                  <a href="tel:2502701010" className="text-4xl md:text-5xl font-bold text-[#033852] hover:text-[#F8ABAC] transition-colors tracking-tight">(250) 270-1010</a>
                  <p className="text-[#033852]/60 mt-2 font-medium">We respond fast.</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 text-[#F8ABAC]">
                  <div className="w-12 h-12 bg-[#F8ABAC]/10 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#033852]">Email</h3>
                </div>
                <div className="pl-16">
                  <a href="mailto:hello@coastalville.ca" className="text-2xl md:text-3xl font-bold text-[#033852] hover:text-[#F8ABAC] transition-colors tracking-tight">hello@coastalville.ca</a>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 text-[#F8ABAC]">
                  <div className="w-12 h-12 bg-[#F8ABAC]/10 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6" />
                  </div>
                  <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#033852]">Hours</h3>
                </div>
                <div className="pl-16 text-lg text-[#033852]/60 font-medium">
                  <p><span className="font-bold text-[#033852]">Monday – Saturday:</span> 8am – 6pm</p>
                  <p><span className="font-bold text-[#033852]">Sunday:</span> Closed</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 text-[#F8ABAC]">
                  <div className="w-12 h-12 bg-[#F8ABAC]/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#033852]">Service Area</h3>
                </div>
                <div className="pl-16 text-lg text-[#033852]/60 font-medium">
                  <p>Parksville · Qualicum Beach · Lantzville</p>
                  <p>Nanoose Bay · Coombs · Errington</p>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#033852] pl-16">Follow Us</h3>
                <div className="pl-16 flex gap-4">
                  <a 
                    href="https://instagram.com/coastalville_exteriors" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white border border-zinc-100 rounded-xl text-[#033852] hover:text-[#F8ABAC] hover:border-[#F8ABAC] transition-all flex items-center justify-center shadow-sm"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a 
                    href="https://facebook.com/CoastalVilleExteriors" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white border border-zinc-100 rounded-xl text-[#033852] hover:text-[#F8ABAC] hover:border-[#F8ABAC] transition-all flex items-center justify-center shadow-sm"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — TRUST BAR */}
      <section className="bg-[#033852] py-6 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-y-6 gap-x-8 text-white">
            {[
              { icon: <Check className="w-5 h-5 text-[#F8ABAC]" />, text: "Licensed & Insured" },
              { icon: <MapPin className="w-5 h-5 text-[#F8ABAC]" />, text: "Parksville Based" },
              { icon: <Check className="w-5 h-5 text-[#F8ABAC]" />, text: "24hr Response" },
              { icon: <Clock className="w-5 h-5 text-[#F8ABAC]" />, text: "Free Quotes" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 group">
                {item.icon}
                <span className="text-sm font-semibold tracking-wide uppercase">{item.text}</span>
                {i < 3 && <div className="hidden lg:block h-4 w-px bg-white/20 ml-8" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — REVIEWS */}
      <section className="py-24 md:py-32 px-6 bg-[#033852]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[#F8ABAC] font-bold text-[10px] md:text-[11px] uppercase tracking-[0.4em] mb-4 block">Testimonials</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">Don't just take our word for it.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 flex flex-col h-full group hover:translate-y-[-4px] transition-all duration-300"
            >
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-zinc-600 text-sm leading-relaxed mb-10 italic flex-grow">
                "The team was professional, on time, and walked us through every step of the process. We've already had neighbours stop and ask who did the work! Highly recommend CoastalVille for anyone considering permanent lighting."
              </p>
              <div className="mt-auto pt-4 border-t border-zinc-50 flex items-center justify-between">
                <div>
                  <div className="font-bold text-zinc-900 text-sm tracking-tight">Katharine Carling</div>
                  <div className="text-xs font-medium text-zinc-400 bg-zinc-50 px-2 py-1 rounded mt-1 inline-block">[Google Review]</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 flex flex-col h-full group hover:translate-y-[-4px] transition-all duration-300"
            >
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-zinc-600 text-sm leading-relaxed mb-10 italic flex-grow">
                "So happy we decided to get Gutter Guards installed on our Parksville home. CoastalVille Exteriors made everything simple and the work was done professionally and on time. We've already recommended them to friends and neighbours."
              </p>
              <div className="mt-auto pt-4 border-t border-zinc-50 flex items-center justify-between">
                <div>
                  <div className="font-bold text-zinc-900 text-sm tracking-tight">Keanna Mullen</div>
                  <div className="text-xs font-medium text-zinc-400 bg-zinc-50 px-2 py-1 rounded mt-1 inline-block">[Google Review]</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-white py-32 px-6 text-center overflow-hidden relative border-t border-zinc-100">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-8 bg-[#F8ABAC]/30" />
              <span className="text-[#F8ABAC] font-bold text-xs uppercase tracking-[0.4em]">Ready to Start?</span>
              <div className="h-px w-8 bg-[#F8ABAC]/30" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-[#033852] mb-8 leading-tight">
              Ready to <span className="text-[#F8ABAC]">Get Started?</span> <br /> Let's Talk.
            </h2>
            <p className="text-zinc-500 text-xl mb-12 max-w-xl mx-auto">
              Join hundreds of happy homeowners in the Oceanside area. Get your free quote today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="tel:2502701010"
                className="w-full sm:w-auto px-10 py-5 bg-[#033852] text-white rounded-xl font-bold text-lg hover:bg-[#044a6d] transition-all shadow-xl shadow-[#033852]/20"
              >
                Call (250) 270-1010
              </a>
              <a 
                href="/our-work"
                className="w-full sm:w-auto px-10 py-5 border border-[#033852]/20 text-[#033852] rounded-xl font-bold text-lg hover:bg-zinc-50 transition-all flex items-center justify-center gap-2"
              >
                See Our Work <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            <p className="text-zinc-400 text-sm mt-6">We respond within 24 hours, usually much faster.</p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
