import React, { useState } from "react";
import { motion } from "motion/react";
import { CheckCircle2, Mountain, Users, Calendar, Send, ArrowRight } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { SEO } from "../components/SEO";

export default function Careers() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: document.getElementById('interest-form')?.offsetTop ? document.getElementById('interest-form')!.offsetTop - 100 : 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#F8ABAC]/30 text-[#033852]">
      <SEO 
        title="Careers | CoastalVille Exteriors Parksville"
        description="Interested in joining the CoastalVille Exteriors team? We're a growing locally owned exterior company in Parksville, BC. Send us your details and we'll be in touch."
      />
      <Navbar />

      {/* SECTION 1 — HERO */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
            src="https://i.ibb.co/YTtKv6NN/Brendon-Toyne-The-guy-carrying-the-ladder-should-have-a-short-moustache-and-a-s-d10c3291-4fb1-467d-8.png" 
            alt="CoastalVille Careers" 
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
                JOIN OUR TEAM · GROW WITH US · LOCAL PRIDE
              </span>
              <div className="hidden md:block h-[1px] w-24 bg-white/30" />
            </div>

            {/* Main Headline */}
            <h1 className="flex flex-col items-center mb-10">
              <span className="font-sans font-bold text-6xl md:text-[110px] text-white leading-none uppercase tracking-tight mb-2">
                Join The
              </span>
              <span className="font-sans font-black text-5xl md:text-[90px] text-[#F8ABAC] leading-none uppercase tracking-tight">
                Coastal Crew
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="max-w-xl text-white/80 text-sm md:text-base font-medium leading-relaxed mb-12">
              We're always interested in hearing from people who take pride in their work and show up for their team.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a 
                href="#interest-form" 
                className="w-full sm:w-auto px-10 py-4 bg-[#F8ABAC] text-[#033852] rounded-md text-xs font-black uppercase tracking-widest hover:bg-[#f59496] transition-all shadow-xl shadow-[#F8ABAC]/20"
              >
                Apply Now
              </a>
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

      {/* Section 1: What We Look For */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-4 text-center">
            <div className="h-px w-12 bg-[#F8ABAC]/30" />
            <span className="text-[#F8ABAC] font-bold text-sm uppercase tracking-widest block">Our Standards</span>
            <div className="h-px w-12 bg-[#F8ABAC]/30" />
          </div>
          <h2 className="text-4xl font-bold text-[#033852] mb-12 text-center tracking-tight uppercase">What We Look For</h2>
          <div className="space-y-8 text-lg text-zinc-600 leading-relaxed">
            <p>
              CoastalVille Exteriors is a growing exterior company based in Parksville, BC. We specialise in gutters, gutter guards, permanent LED lighting, and seasonal holiday lights, and we're building a team that reflects the same standards we bring to every job.
            </p>
            <p>
              We're not looking for the most experienced person in the room. We're looking for the right person, someone who shows up on time, takes pride in the finished product, communicates well, and treats every customer's home like it matters.
            </p>
            <p className="font-bold text-[#033852] text-xl">
              Trades experience is an asset. Attitude and reliability are non-negotiable.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: What to Expect (Guarantee Style) */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#033852] rounded-[2.5rem] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-12">
                <div className="h-px w-12 bg-[#F8ABAC]/30" />
                <span className="text-[#F8ABAC] font-bold text-sm uppercase tracking-[0.3em]">
                  THE COASTALVILLE EXPERIENCE
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <div className="w-12 h-12 bg-[#F8ABAC]/10 text-[#F8ABAC] rounded-xl flex items-center justify-center mb-6">
                    <Mountain className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#F8ABAC] mb-4 uppercase tracking-tight">Outdoor Work</h3>
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    Most of what we do happens outside, on rooftops, ladders, and job sites across Parksville, Qualicum Beach, and the Oceanside area. If you're comfortable working at height and don't mind getting your hands dirty, you'll fit right in.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <div className="w-12 h-12 bg-[#F8ABAC]/10 text-[#F8ABAC] rounded-xl flex items-center justify-center mb-6">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#F8ABAC] mb-4 uppercase tracking-tight">Small Team</h3>
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    Right now we're a small, tight crew. That means you're not a number, you're part of how the work gets done. Every person on a CoastalVille job has an impact on the finished product and the customer's experience.
                  </p>
                </div>

                {/* Card 3 */}
                <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <div className="w-12 h-12 bg-[#F8ABAC]/10 text-[#F8ABAC] rounded-xl flex items-center justify-center mb-6">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#F8ABAC] mb-4 uppercase tracking-tight">Seasonal Opportunity</h3>
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    Our busiest season runs October through December with holiday and permanent lighting installs. If you're looking for seasonal work in the fall, this is a great place to start.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#F8ABAC]/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F8ABAC]/10 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2" />
          </div>
        </div>
      </section>

      {/* Section 3: Expression of Interest Form */}
      <section id="interest-form" className="py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-12 bg-[#F8ABAC]/30" />
              <span className="text-[#F8ABAC] font-bold text-sm uppercase tracking-widest block">Get In Touch</span>
              <div className="h-px w-12 bg-[#F8ABAC]/30" />
            </div>
            <h2 className="text-4xl font-bold text-[#033852] mb-6 tracking-tight uppercase">Interested? Let's Talk.</h2>
            <p className="text-zinc-600 text-lg leading-relaxed">
              We're not always actively hiring, but we're always open to meeting the right people. Fill out the form below and tell us a bit about yourself.
            </p>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-zinc-100">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white shadow-lg shadow-emerald-200">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold text-[#033852] mb-4 uppercase tracking-tight">Details Received!</h3>
                <p className="text-zinc-600 text-lg mb-8">Thanks for your interest in CoastalVille. We'll be in touch if there's a fit.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-[#F8ABAC] font-bold hover:underline uppercase tracking-widest text-xs"
                >
                  Send another submission
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 ml-1">First Name</label>
                    <input required type="text" className="w-full px-6 py-4 bg-zinc-50 border border-zinc-200 rounded-md focus:ring-2 focus:ring-[#F8ABAC] focus:border-transparent outline-none transition-all text-[#033852]" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 ml-1">Last Name</label>
                    <input required type="text" className="w-full px-6 py-4 bg-zinc-50 border border-zinc-200 rounded-md focus:ring-2 focus:ring-[#F8ABAC] focus:border-transparent outline-none transition-all text-[#033852]" placeholder="Doe" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 ml-1">Phone Number</label>
                    <input required type="tel" className="w-full px-6 py-4 bg-zinc-50 border border-zinc-200 rounded-md focus:ring-2 focus:ring-[#F8ABAC] focus:border-transparent outline-none transition-all text-[#033852]" placeholder="(250) 000-0000" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 ml-1">Email</label>
                    <input required type="email" className="w-full px-6 py-4 bg-zinc-50 border border-zinc-200 rounded-md focus:ring-2 focus:ring-[#F8ABAC] focus:border-transparent outline-none transition-all text-[#033852]" placeholder="john@example.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 ml-1">Availability</label>
                  <select required className="w-full px-6 py-4 bg-zinc-50 border border-zinc-200 rounded-md focus:ring-2 focus:ring-[#F8ABAC] focus:border-transparent outline-none transition-all appearance-none cursor-pointer text-[#033852]">
                    <option value="">Select Availability</option>
                    <option value="full-time">Full Time</option>
                    <option value="part-time">Part Time</option>
                    <option value="seasonal">Seasonal</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 ml-1">Tell us a bit about yourself</label>
                  <textarea required className="w-full px-6 py-4 bg-zinc-50 border border-zinc-200 rounded-md focus:ring-2 focus:ring-[#F8ABAC] focus:border-transparent outline-none transition-all min-h-[120px] text-[#033852]" placeholder="Your experience, why you're interested, etc..."></textarea>
                </div>

                <button type="submit" className="w-full py-5 bg-[#F8ABAC] text-[#033852] rounded-md text-xs font-black uppercase tracking-widest hover:bg-[#f59496] transition-all shadow-xl shadow-[#F8ABAC]/20 mt-4 flex items-center justify-center gap-2">
                  <Send className="w-5 h-5" /> Send My Details
                </button>

                <p className="text-center text-zinc-400 text-[10px] font-bold uppercase tracking-widest mt-6">
                  We read every submission. We won't leave you hanging.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Section 4: Final CTA */}
      <section className="bg-white py-32 px-6 text-center overflow-hidden relative border-t border-zinc-100">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-8 bg-[#F8ABAC]/30" />
            <span className="text-[#F8ABAC] font-bold text-xs uppercase tracking-[0.4em]">Next Steps</span>
            <div className="h-px w-8 bg-[#F8ABAC]/30" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-[#033852] mb-8 leading-tight tracking-tight uppercase">
            Not Looking <br /> <span className="text-[#F8ABAC]">for Work?</span>
          </h2>
          <p className="text-zinc-500 text-xl mb-12">If you're a homeowner looking for a free quote on gutters, guards, or permanent lighting, we've got you covered.</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/contact" 
              className="px-10 py-5 bg-[#F8ABAC] text-[#033852] rounded-md text-xs font-black uppercase tracking-widest hover:bg-[#f59496] transition-all shadow-xl shadow-[#F8ABAC]/20 flex items-center justify-center gap-2"
            >
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="tel:2502701010" 
              className="px-10 py-5 border border-[#033852]/20 text-[#033852] rounded-md text-xs font-black uppercase tracking-widest hover:bg-zinc-50 transition-all flex items-center justify-center gap-2"
            >
              Call (250) 270-1010
            </a>
          </div>
          <p className="text-zinc-400 text-sm mt-6">We respond within 24 hours, usually much faster.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
