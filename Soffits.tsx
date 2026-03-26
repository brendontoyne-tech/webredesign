import { motion } from "motion/react";
import { 
  ShieldCheck, 
  MapPin, 
  CheckCircle2, 
  ArrowRight,
  ChevronDown,
  Star,
  Clock
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

export default function Soffits() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#F8ABAC]/30 text-[#033852]">
      <SEO 
        title="Soffit Installation & Repair | CoastalVille Exteriors Parksville"
        description="Professional soffit installation, replacement, repair, and venting on Vancouver Island. Vinyl and aluminum. Gentek and Kaycan materials. Free quote. Call (250) 270-1010."
      />
      
      <Navbar />

      {/* SECTION 1 — HERO */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
            src="https://i.ibb.co/vvMwBYJD/Adobe-Stock-520655781.jpg" 
            alt="Soffit Installation & Repair" 
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
                INSTALLATION · REPAIR · VENTING
              </span>
              <div className="hidden md:block h-[1px] w-24 bg-white/30" />
            </div>

            {/* Main Headline */}
            <h1 className="flex flex-col items-center mb-10">
              <span className="font-sans font-bold text-6xl md:text-[110px] text-white leading-none uppercase tracking-tight mb-2">
                Soffit
              </span>
              <span className="font-sans font-black text-5xl md:text-[90px] text-[#F8ABAC] leading-none uppercase tracking-tight">
                Solutions
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="max-w-xl text-white/80 text-sm md:text-base font-medium leading-relaxed mb-12">
              Protect your roofline and improve attic ventilation with professional vinyl and aluminum soffit installation.
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

      {/* SECTION 3 — SOFFIT SERVICES */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-12 bg-[#F8ABAC]/30" />
              <span className="text-[#F8ABAC] font-bold text-sm uppercase tracking-widest block">Our Expertise</span>
              <div className="h-px w-12 bg-[#F8ABAC]/30" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#033852] uppercase">Soffit Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Installation",
                desc: "New soffit installation on new builds or as part of an exterior upgrade. We work with vinyl and aluminum profiles from Gentek and Kaycan. Durable, low-maintenance materials built for coastal BC weather."
              },
              {
                title: "Replacement",
                desc: "Damaged, rotted, or deteriorating soffits replaced properly. We remove the old material cleanly, inspect the structure underneath, and install new soffit that matches your home's profile."
              },
              {
                title: "Repair",
                desc: "Loose panels, cracked sections, or damaged areas repaired before they become bigger problems. Small soffit repairs done right prevent moisture from getting into your roofline."
              },
              {
                title: "Venting",
                desc: "Proper soffit ventilation is critical for attic airflow and moisture control. We install and replace soffit vents to ensure your attic breathes the way it should, reducing heat buildup in summer and moisture damage in winter."
              }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#033852] p-10 rounded-2xl shadow-xl group hover:translate-y-[-4px] transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-4 text-[#F8ABAC] uppercase tracking-tight">{service.title}</h3>
                <p className="text-zinc-300 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — WHY SOFFITS MATTER (GUARANTEE STYLE) */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#033852] rounded-[2.5rem] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10 max-w-4xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-12 bg-[#F8ABAC]/30" />
                <span className="text-[#F8ABAC] font-bold text-sm uppercase tracking-[0.3em]">
                  PROTECTIVE BARRIER
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight uppercase">More Than Just a <span className="text-[#F8ABAC]">Finishing Detail</span></h2>
              <div className="space-y-6 text-zinc-300 text-lg leading-relaxed">
                <p>
                  Soffits close off the underside of your roofline, the gap between your exterior wall and the edge of your roof. Done right, they protect the rafters and roof structure from moisture, pests, and weather.
                </p>
                <p>
                  On the coast, moisture is the enemy. Soffits that are cracked, lifting, or improperly vented allow damp air to sit against your roof structure year-round. Over time that means rot, mold, and expensive structural repairs.
                </p>
                <p className="text-white font-bold">
                  We see soffit condition on every job we do. If yours need attention, we'll let you know, and we can handle the work properly.
                </p>
              </div>
            </div>
            
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#F8ABAC]/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F8ABAC]/10 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2" />
          </div>
        </div>
      </section>

      {/* SECTION 5 — MATERIALS */}
      <section className="py-24 md:py-32 px-6 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[#F8ABAC] font-bold text-[10px] md:text-[11px] uppercase tracking-[0.4em] mb-4 block">Premium Materials</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#033852] uppercase">What We Install</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 md:p-12 rounded-2xl shadow-sm border border-zinc-100"
            >
              <h3 className="text-2xl font-bold text-[#033852] mb-4 uppercase tracking-tight">Vinyl Soffit</h3>
              <p className="text-[#033852]/60 leading-relaxed font-medium">
                Low maintenance, moisture resistant, and available in a wide range of colours and profiles. Vinyl is the most common choice for Oceanside homes and holds up well in coastal conditions. We source vinyl soffit from Gentek and Kaycan.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 md:p-12 rounded-2xl shadow-sm border border-zinc-100"
            >
              <h3 className="text-2xl font-bold text-[#033852] mb-4 uppercase tracking-tight">Aluminum Soffit</h3>
              <p className="text-[#033852]/60 leading-relaxed font-medium">
                More rigid than vinyl and excellent for exposed rooflines or homes that need a more durable option. Aluminum is more resistant to impact and holds colour well over time. We source aluminum soffit from Gentek and Kaycan.
              </p>
            </motion.div>
          </div>
          <p className="text-center text-[#033852]/40 text-sm italic font-medium max-w-2xl mx-auto">
            Not sure which material is right for your home? We'll give you an honest recommendation based on your roofline, exposure, and budget.
          </p>
        </div>
      </section>

      {/* SECTION 6 — THE PROCESS */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[#F8ABAC] font-bold text-[10px] md:text-[11px] uppercase tracking-[0.4em] mb-4 block">Our Workflow</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#033852] uppercase">How It Works</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Assessment & Quote",
                desc: "We inspect your existing soffits, identify any damage or ventilation issues, and give you a clear written quote before any work starts. Free, no obligation."
              },
              {
                step: "02",
                title: "Professional Install",
                desc: "We install or repair your soffits properly. Clean removal of old material, proper preparation, and quality installation that's built to last on Vancouver Island."
              },
              {
                step: "03",
                title: "Full Roofline Check",
                desc: "While we're up there, we check your gutters, downspouts, and overall roofline condition too. If we spot anything worth your attention, we'll let you know."
              }
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

      {/* SECTION 7 — REVIEWS */}
      <section className="py-24 md:py-32 px-6 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[#F8ABAC] font-bold text-[10px] md:text-[11px] uppercase tracking-[0.4em] mb-4 block">Testimonials</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#033852] uppercase">What Our Customers Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                stars: 5, 
                name: "Jacquie P.", 
                platform: "Google Review", 
                content: "These guys easily earned 5 stars from us. They worked fast, efficient, clean and were super affordable — and as an added bonus were so polite! Booked them to do our Christmas lights this year we are so impressed with their work."
              },
              { 
                stars: 5, 
                name: "Mary K.", 
                platform: "Google Review", 
                content: "Brendon and Jordan were extremely knowledgeable and professional. They cleaned our gutters in no time at all — practically sparkling afterwards. We will definitely be using them from here on out."
              },
              { 
                stars: 5, 
                name: "Keith", 
                platform: "Google · Local Guide", 
                content: "Really happy with CoastalVille Exteriors. They came by to clean our gutters, did a thorough job, and even tested the downspouts to make sure everything was flowing properly. Super friendly and easy to deal with too. I'd definitely use them again."
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
                    <div className="text-[#033852]/40 text-[10px] font-bold uppercase tracking-widest mt-1">{review.platform}</div>
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

      {/* SECTION 8 — FAQ */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#F8ABAC] font-bold text-[10px] md:text-[11px] uppercase tracking-[0.4em] mb-4 block">Common Questions</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#033852] uppercase">Got Questions?</h2>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm border border-zinc-100 overflow-hidden">
            <AccordionItem 
              question="How do I know if my soffits need attention?"
              answer="Common signs include visible cracking, holes, or lifting panels, dark staining or moisture marks on the underside of your roofline, pest activity near the roofline, birds or wasps entering gaps, or inadequate attic ventilation. If you're not sure, we're happy to take a look during any visit."
            />
            <AccordionItem 
              question="What's the difference between vinyl and aluminum soffit?"
              answer="Vinyl is lighter, more affordable, and very low maintenance, it's the most common choice for residential homes in the Oceanside area. Aluminum is more rigid and durable, better suited for exposed rooflines or homes that need a more durable option. We'll give you an honest recommendation for your specific home."
            />
            <AccordionItem 
              question="Why does soffit venting matter?"
              answer="Proper soffit venting allows fresh air into your attic, which pushes out heat and moisture that would otherwise sit against your roof structure. In BC's coastal climate, inadequate attic ventilation is a common contributor to premature roof aging and mold. It's a small thing that makes a significant difference."
            />
            <AccordionItem 
              question="Do you match existing soffit profiles and colours?"
              answer="We do our best to match as closely as possible using materials from Gentek and Kaycan. In most cases we can get a very close match. We'll show you the options before we start."
            />
            <AccordionItem 
              question="Can you combine soffit work with gutters or downspouts?"
              answer="Yes, and it makes sense to. We're already working on your roofline, so combining services on one visit saves time and often reduces the overall cost. Let us know what you need when you book."
            />
          </div>
        </div>
      </section>

      {/* SECTION 9 — SERVICE AREAS */}
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
                We are a local team based in Parksville, providing professional soffit services to homeowners across the region.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-10">
                {[
                  { name: "Parksville", href: "/services/soffits" },
                  { name: "Qualicum Beach", href: "/services/soffits" },
                  { name: "Lantzville", href: "/services/soffits" },
                  { name: "Nanoose Bay", href: "/services/soffits" },
                  { name: "Coombs", href: "/services/soffits" },
                  { name: "Errington", href: "/services/soffits" }
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
            Noticed Lifting, <br /> <span className="text-[#F8ABAC]">Cracking, or Damaged Soffits?</span>
          </h2>
          <p className="text-zinc-500 text-xl mb-12">Free quote. We'll assess your roofline and tell you exactly what's needed.</p>
          
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
