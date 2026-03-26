import { motion } from "motion/react";
import { 
  CheckCircle2, 
  ArrowRight,
  ChevronDown,
  Star,
  Droplets,
  Wrench,
  Maximize2,
  Move,
  ShieldCheck,
  Clock,
  MapPin,
  Users
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { SEO } from "../components/SEO";
import { useState } from "react";

const AccordionItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-zinc-100 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group px-4 hover:bg-zinc-50/50 transition-all"
      >
        <div className="flex gap-4">
          <div className={`w-1 h-full bg-[#F8ABAC] self-stretch rounded-full transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
          <span className="text-lg font-bold text-[#033852] pl-2">{question}</span>
        </div>
        <ChevronDown className={`w-5 h-5 text-[#033852] transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-8 px-12' : 'max-h-0'}`}>
        <p className="text-zinc-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

export default function Downspouts() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#F8ABAC]/30 text-[#033852]">
      <SEO 
        title="Downspout Installation & Repair | CoastalVille Exteriors Parksville"
        description="Professional downspout installation, replacement, repositioning and extensions on Vancouver Island. Free quote. Call (250) 270-1010."
      />
      <Navbar />

      {/* SECTION 1 — HERO */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
            src="https://i.ibb.co/chCV424b/Adobe-Stock-1931619919.jpg" 
            alt="Downspout Installation & Repair" 
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
                INSTALLATION · REPAIR · EXTENSIONS
              </span>
              <div className="hidden md:block h-[1px] w-24 bg-white/30" />
            </div>

            {/* Main Headline */}
            <h1 className="flex flex-col items-center mb-10">
              <span className="font-sans font-bold text-6xl md:text-[110px] text-white leading-none uppercase tracking-tight mb-2">
                Downspout
              </span>
              <span className="font-sans font-black text-5xl md:text-[90px] text-[#F8ABAC] leading-none uppercase tracking-tight">
                Solutions
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="max-w-xl text-white/80 text-sm md:text-base font-medium leading-relaxed mb-12">
              Installation, replacement, repositioning, and extensions. We make sure water leaves your roofline and goes where it should.
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
                href="tel:2502701010" 
                className="w-full sm:w-auto px-10 py-4 bg-transparent text-white border border-white/40 rounded-md text-xs font-black uppercase tracking-widest hover:bg-white/10 transition-all"
              >
                Call (250) 270-1010
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — TRUST BAR */}
      <section className="bg-[#033852] py-6 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-y-6 gap-x-8 text-white">
            {[
              { icon: <ShieldCheck className="w-5 h-5 text-[#F8ABAC]" />, text: "Licensed & Insured" },
              { icon: <MapPin className="w-5 h-5 text-[#F8ABAC]" />, text: "Parksville Based" },
              { icon: <CheckCircle2 className="w-5 h-5 text-[#F8ABAC]" />, text: "24hr Response" },
              { icon: <Star className="w-5 h-5 text-[#F8ABAC]" />, text: "5-Star Service" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 group">
                {item.icon}
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase">{item.text}</span>
                {i < 3 && <div className="hidden lg:block h-4 w-px bg-white/20 ml-8" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — DOWNSPOUT SERVICES */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-12 bg-[#F8ABAC]/30" />
              <span className="text-[#F8ABAC] font-bold text-sm uppercase tracking-widest block">Our Expertise</span>
              <div className="h-px w-12 bg-[#F8ABAC]/30" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#033852] uppercase">Downspout Services</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: Droplets, 
                title: "Installation", 
                desc: "Adding downspouts to an existing gutter system or installing as part of a new gutter run. We position them correctly for your roofline and direct flow away from your foundation." 
              },
              { 
                icon: Wrench, 
                title: "Replacement", 
                desc: "Damaged, crushed, or deteriorated downspouts replaced cleanly, matching your existing profile and colour as closely as possible." 
              },
              { 
                icon: Move, 
                title: "Repositioning", 
                desc: "Downspouts in the wrong position drain water toward your foundation, garden beds, or walkways. We reposition them to direct water where it won't cause damage." 
              },
              { 
                icon: Maximize2, 
                title: "Extensions", 
                desc: "Short downspouts that terminate too close to your foundation are one of the most common causes of basement moisture issues. We add extensions to move the discharge point safely away." 
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#033852] p-10 rounded-2xl shadow-xl group hover:translate-y-[-4px] transition-all duration-300"
              >
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#F8ABAC]/20 transition-colors">
                  <item.icon className="w-6 h-6 text-[#F8ABAC]" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#F8ABAC] uppercase tracking-tight">{item.title}</h3>
                <p className="text-zinc-300 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — WHY DOWNSPOUTS MATTER (GUARANTEE STYLE) */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#033852] rounded-[2.5rem] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10 max-w-4xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-12 bg-[#F8ABAC]/30" />
                <span className="text-[#F8ABAC] font-bold text-sm uppercase tracking-[0.3em]">
                  FOUNDATION PROTECTION
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight uppercase">The Last Step in Your <span className="text-[#F8ABAC]">Gutter System</span></h2>
              <div className="space-y-6 text-zinc-300 text-lg leading-relaxed">
                <p>
                  Your gutters collect water from the roof. Your downspouts are responsible for getting that water safely away from your home. If they're missing, damaged, too short, or positioned wrong, all the water your gutters collect ends up exactly where you don't want it.
                </p>
                <p>
                  Water pooling at the base of your foundation is one of the leading causes of basement moisture problems, foundation cracking, and landscape erosion.
                </p>
                <p className="text-white font-bold">
                  A downspout extension that costs a fraction of what foundation repairs do is often the simplest fix ,and one of the most effective.
                </p>
              </div>
            </div>
            
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#F8ABAC]/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F8ABAC]/10 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2" />
          </div>
        </div>
      </section>

      {/* SECTION 5 — THE PROCESS */}
      <section className="py-24 md:py-32 px-6 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[#F8ABAC] font-bold text-[10px] md:text-[11px] uppercase tracking-[0.4em] mb-4 block">Our Workflow</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#033852] uppercase">How It Works</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { step: "01", title: "Assessment & Quote", desc: "We assess your existing downspout setup, identify any issues, and give you a clear written quote before any work starts. Free, no obligation." },
              { step: "02", title: "Professional Install", desc: "We install, replace, reposition, or extend your downspouts properly. Clean work, right materials, done right the first time." },
              { step: "03", title: "Full Gutter Check", desc: "While we're on site we check your full gutter system. If we spot anything else worth your attention we'll let you know before we leave." }
            ].map((step, i) => (
              <div key={i} className="relative group">
                <div className="text-8xl font-black text-[#033852]/5 absolute -top-10 left-0 z-0 group-hover:text-[#F8ABAC]/10 transition-colors">{step.step}</div>
                <div className="relative z-10 pt-4">
                  <h3 className="text-xl font-bold mb-4 text-[#033852] uppercase tracking-tight">{step.title}</h3>
                  <p className="text-[#033852]/60 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — REVIEWS */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[#F8ABAC] font-bold text-[10px] md:text-[11px] uppercase tracking-[0.4em] mb-4 block">Testimonials</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#033852] uppercase">What Our Customers Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                stars: 5, 
                name: "Maria P.", 
                platform: "Google Review", 
                content: "Very happy with the new downspouts they put in. Left my home cleaner than when they arrived. I will be recommending them to my friends & family. Love supporting new local businesses."
              },
              { 
                stars: 5, 
                name: "Keith", 
                platform: "Google Review", 
                isLocalGuide: true,
                content: "Really happy with CoastalVille Exteriors. They came by to clean our gutters, did a thorough job, and even tested the downspouts to make sure everything was flowing properly. Super friendly and easy to deal with too. I'd definitely use them again."
              },
              { 
                stars: 5, 
                name: "Mary K.", 
                platform: "Google Review", 
                content: "Brendon and Jordan were extremely knowledgeable and professional. They cleaned our gutters in no time at all — practically sparkling afterwards. We will definitely be using them from here on out."
              }
            ].map((review, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-2xl shadow-sm border border-zinc-100 flex flex-col h-full group hover:translate-y-[-4px] transition-all duration-300"
              >
                <div className="flex gap-1 mb-8">
                  {[...Array(review.stars)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#F8ABAC] text-[#F8ABAC]" />)}
                </div>
                <p className="text-[#033852]/70 text-sm leading-relaxed mb-10 italic font-medium flex-grow">"{review.content}"</p>
                <div className="mt-auto pt-8 border-t border-zinc-100 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-[#033852] text-lg tracking-tight">{review.name}</div>
                    <div className="text-[#033852]/40 text-[10px] font-bold uppercase tracking-widest mt-1">{review.platform} {review.isLocalGuide && "· Local Guide"}</div>
                  </div>
                  <div className="w-10 h-10 bg-[#F5F5F5] rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-[#F8ABAC]" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — FAQ */}
      <section className="py-24 md:py-32 px-6 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#F8ABAC] font-bold text-[10px] md:text-[11px] uppercase tracking-[0.4em] mb-4 block">Common Questions</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#033852] uppercase">Got Questions?</h2>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm border border-zinc-100 overflow-hidden">
            <AccordionItem 
              question="How do I know if my downspouts need attention?"
              answer="Common signs include water pooling at your foundation after rain, downspouts that are visibly crushed, disconnected, or missing entirely, water overflowing from gutter ends instead of flowing through the downspout, or basement moisture that appears after heavy rain. If you're not sure, we're happy to take a look."
            />
            <AccordionItem 
              question="How many downspouts does my home need?"
              answer="As a general rule, one downspout per 30–40 linear feet of gutter. Homes with complex rooflines or high rainfall exposure may need more. We'll assess your specific setup and give you an honest recommendation."
            />
            <AccordionItem 
              question="Do downspout extensions really make a difference?"
              answer="Yes, significantly. A downspout that terminates within a foot or two of your foundation is directing thousands of litres of water toward it every year. Extensions are one of the cheapest and most effective things you can do to protect your foundation."
            />
            <AccordionItem 
              question="Do you do underground drainage connections?"
              answer="Not currently, we focus on above-ground downspout work including installation, replacement, repositioning, and extensions."
            />
            <AccordionItem 
              question="Can you combine downspout work with a gutter clean or repair?"
              answer="Yes, and we recommend it. Combining services on one visit saves time and often reduces the overall cost. Let us know what you're looking for when you book."
            />
          </div>
        </div>
      </section>

      {/* SECTION 8 — SERVICE AREAS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-12 bg-[#F8ABAC]/30" />
                <span className="text-[#F8ABAC] font-bold text-sm uppercase tracking-widest block">Service Area</span>
              </div>
              <h2 className="text-4xl font-bold text-[#033852] mb-6">Serving the Oceanside Area</h2>
              <p className="text-zinc-600 text-lg mb-10 leading-relaxed">
                We are a local team based in Parksville, providing professional downspout services to homeowners across the region.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-10">
                {[
                  { name: "Parksville", href: "/services/downspouts" },
                  { name: "Qualicum Beach", href: "/services/downspouts" },
                  { name: "Lantzville", href: "/services/downspouts" },
                  { name: "Nanoose Bay", href: "/services/downspouts" },
                  { name: "Coombs", href: "/services/downspouts" },
                  { name: "Errington", href: "/services/downspouts" }
                ].map((city) => (
                  <a 
                    key={city.name} 
                    href={city.href}
                    className="px-4 py-2 bg-zinc-50 border border-zinc-100 rounded-full text-zinc-600 text-sm font-medium hover:text-[#F8ABAC] hover:border-[#F8ABAC]/30 transition-colors"
                  >
                    {city.name}
                  </a>
                ))}
              </div>

              <a 
                href="https://share.google/LBOBGmIoU0Qrwufca" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#033852] text-white rounded-md text-xs font-black uppercase tracking-widest hover:bg-[#044a6b] transition-all shadow-lg"
              >
                View on Google Maps →
              </a>
            </div>

            <div className="aspect-square bg-zinc-100 rounded-3xl overflow-hidden border border-zinc-200 shadow-xl relative">
              <iframe 
                src="https://maps.google.com/maps?q=CoastalVille%20Exteriors%20Parksville%20BC&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-white py-32 px-6 text-center overflow-hidden relative border-t border-zinc-100">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-8 bg-[#F8ABAC]/30" />
            <span className="text-[#F8ABAC] font-bold text-xs uppercase tracking-[0.4em]">Get In Touch</span>
            <div className="h-px w-8 bg-[#F8ABAC]/30" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-[#033852] mb-8 leading-tight tracking-tight uppercase">
            Water Going <br /> <span className="text-[#F8ABAC]">Where It Shouldn't?</span>
          </h2>
          <p className="text-zinc-500 text-xl mb-12">Free quote. We'll assess your downspouts and tell you exactly what's needed.</p>
          
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
