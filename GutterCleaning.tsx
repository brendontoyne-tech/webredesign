import { motion } from "motion/react";
import { 
  ShieldCheck, 
  MapPin, 
  Quote, 
  Clock, 
  Star, 
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Droplets,
  Users
} from "lucide-react";
import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { SEO } from "../components/SEO";

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
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

export default function GutterCleaning() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#F8ABAC]/30 text-[#033852]">
      <SEO 
        title="Gutter Cleaning Parksville & Qualicum Beach | CoastalVille"
        description="Professional gutter cleaning in Parksville, Qualicum Beach, and Oceanside. We remove debris, flush downspouts, and inspect your system. Starting at $150."
      />
      <Navbar />

      {/* SECTION 1 — HERO */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
            src="https://i.ibb.co/v6R4mJG0/5.png" 
            alt="Professional Gutter Cleaning" 
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
                DEBRIS REMOVAL · DOWNSPOUT FLUSH · INSPECTION
              </span>
              <div className="hidden md:block h-[1px] w-24 bg-white/30" />
            </div>

            {/* Main Headline */}
            <h1 className="flex flex-col items-center mb-10">
              <span className="font-sans font-bold text-6xl md:text-[110px] text-white leading-none uppercase tracking-tight mb-2">
                Clean
              </span>
              <span className="font-sans font-black text-5xl md:text-[90px] text-[#F8ABAC] leading-none uppercase tracking-tight">
                Gutters
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="max-w-xl text-white/80 text-sm md:text-base font-medium leading-relaxed mb-12">
              Professional gutter cleaning across the Oceanside area. We remove debris, flush downspouts, and inspect the full system on every visit.
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
              { icon: <Clock className="w-5 h-5 text-[#F8ABAC]" />, text: "Free Quotes" }
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

      {/* SECTION 3 — WHAT'S INCLUDED */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-[#F8ABAC]/30" />
                <span className="text-[#F8ABAC] font-bold text-sm uppercase tracking-widest block">Comprehensive Service</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#033852] mb-8 leading-tight">What's Included in Every Gutter Clean</h2>
              <p className="text-xl text-zinc-600 mb-12 leading-relaxed">
                A gutter clean isn't just scooping out leaves and calling it done. Here's exactly what we do on every visit:
              </p>
              
              <div className="space-y-6 mb-12">
                {[
                  "Full debris removal. Leaves, pine needles, and buildup removed by hand",
                  "Downspout flush. We confirm every downspout is flowing freely end to end",
                  "Full system inspection. We check hangers, seals, pitch, and connections",
                  "Written report. If we find anything that needs attention, we'll let you know immediately"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-1 bg-[#033852] rounded-full p-1">
                      <CheckCircle2 className="w-4 h-4 text-[#F8ABAC]" />
                    </div>
                    <p className="text-lg text-[#033852] font-medium">{item}</p>
                  </div>
                ))}
              </div>

              <div className="p-8 bg-[#F5F5F5] rounded-2xl border border-zinc-100">
                <p className="text-lg font-bold text-[#033852]">
                  You'll know exactly what condition your gutters are in when we drive away. That's our standard. Not an upgrade.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://i.ibb.co/qMbqfPdZ/IMG-4711.jpg" 
                alt="Clean Gutters" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -left-10 bg-[#F8ABAC] p-10 rounded-3xl shadow-xl hidden md:block">
                <div className="text-4xl font-black text-[#033852] mb-2">100%</div>
                <div className="text-[#033852] font-bold text-xs uppercase tracking-widest">Satisfaction Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — WHY IT MATTERS (GUARANTEE STYLE) */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#033852] rounded-[2.5rem] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10 max-w-4xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-12 bg-[#F8ABAC]/30" />
                <span className="text-[#F8ABAC] font-bold text-sm uppercase tracking-[0.3em]">
                  PREVENTATIVE MAINTENANCE
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">Why Gutter Cleaning <span className="text-[#F8ABAC]">Matters</span></h2>
              <div className="space-y-6 text-zinc-300 text-lg leading-relaxed">
                <p>
                  Vancouver Island's climate is hard on gutters. Heavy rainfall from October through April, Douglas fir and pine trees dropping needles year-round, and debris buildup that most people don't notice until water is backing up.
                </p>
                <p>
                  Blocked gutters cause rot, mold, water intrusion, and foundation damage, all of which cost significantly more to fix than a regular cleaning.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-12">
                  {[
                    { title: "Fascia Damage", desc: "Overflowing water backs up against your fascia, causing rot." },
                    { title: "Foundation", desc: "Water pooling around your foundation leads to cracks." },
                    { title: "Pest Entry", desc: "Debris-filled gutters become nesting sites for pests." }
                  ].map((card, i) => (
                    <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/10">
                      <h3 className="text-[#F8ABAC] font-bold mb-2 uppercase text-sm tracking-tight">{card.title}</h3>
                      <p className="text-xs text-zinc-400 leading-relaxed">{card.desc}</p>
                    </div>
                  ))}
                </div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-[#033852]">How It Works</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { step: "01", title: "Book Your Clean", desc: "Call, text, or fill out the form. We'll confirm your booking within 24 hours and give you a clear arrival window, no all-day waits." },
              { step: "02", title: "We Do the Job", desc: "We arrive on time, clean every section, flush every downspout, and inspect the full system. You don't need to be home." },
              { step: "03", title: "You Get the Report", desc: "Before we leave, we'll let you know what we found. If something needs attention, we'll explain what it is and what it would cost to fix." }
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

      {/* SECTION 6 — PRICING */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#033852]">What It Costs</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
            <div className="bg-[#033852] p-12 rounded-2xl text-center text-white shadow-2xl relative overflow-hidden group">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2 tracking-tight">Single Storey Home</h3>
                <p className="text-zinc-400 mb-8 text-sm">Straightforward access, standard roofline</p>
                <div className="text-6xl font-bold text-[#F8ABAC] tracking-tighter">From $150</div>
              </div>
            </div>
            <div className="bg-white p-12 rounded-2xl text-center text-[#033852] shadow-xl border border-zinc-100 relative overflow-hidden group">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2 tracking-tight">Two Storey Home</h3>
                <p className="text-[#033852]/40 mb-8 text-sm">More linear footage, higher access</p>
                <div className="text-6xl font-bold text-[#033852] tracking-tighter">From $200+</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-zinc-500 italic mb-12 max-w-2xl mx-auto">Price confirmed at booking. Get a free quote for your specific property.</p>
            <a 
              href="/contact" 
              className="inline-flex items-center gap-4 px-12 py-5 bg-[#F8ABAC] text-[#033852] rounded-xl font-black text-xs uppercase tracking-widest hover:bg-[#f59496] transition-all shadow-xl shadow-[#F8ABAC]/20"
            >
              Get a Free Quote <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 7 — REVIEWS */}
      <section className="py-24 md:py-32 px-6 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#033852]">What Our Customers Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Keith", meta: "Google · Local Guide", text: "Really happy with CoastalVille Exteriors. They came by to clean our gutters, did a thorough job, and even tested the downspouts to make sure everything was flowing properly. Super friendly and easy to deal with too." },
              { name: "Mary K.", meta: "Google", text: "Brendon and Jordan were extremely knowledgeable and professional. They cleaned our gutters in no time at all — practically sparkling afterwards. We will definitely be using them from here on out." },
              { name: "Sunrise Hosts", meta: "Google", text: "CoastalVille came out THE SAME DAY. They completely cleaned up our roof and cleared all the fallen debris on the ground. We are the only unit in our complex that looks like the storm completely missed it." }
            ].map((review, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-2xl shadow-sm border border-zinc-100 flex flex-col h-full group hover:translate-y-[-4px] transition-all duration-300"
              >
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#F8ABAC] text-[#F8ABAC]" />)}
                </div>
                <p className="text-[#033852]/70 text-sm leading-relaxed mb-10 italic font-medium flex-grow">"{review.text}"</p>
                <div className="mt-auto pt-8 border-t border-zinc-100 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-[#033852] text-lg tracking-tight">{review.name}</div>
                    <div className="text-[#033852]/40 text-[10px] font-bold uppercase tracking-widest mt-1">{review.meta}</div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-[#033852]">Got Questions?</h2>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm border border-zinc-100 overflow-hidden">
            <FAQItem 
              question="How often should I get my gutters cleaned?" 
              answer="At least once a year, ideally in late fall after the leaves have dropped. Homes with pine or fir trees close by benefit from twice a year. The coastal climate means debris builds up faster than most people expect."
            />
            <FAQItem 
              question="Do I need to be home during the cleaning?" 
              answer="No. We can complete the job whether you're home or not. We'll message you when we arrive and again when we're done, along with any notes from our inspection."
            />
            <FAQItem 
              question="What happens if you find something wrong?" 
              answer="We let you know before we leave, clearly and without pressure. We'll explain what we found, what it means for your gutters, and what it would cost to fix. You decide what happens next."
            />
            <FAQItem 
              question="How long does a gutter clean take?" 
              answer="Most residential homes take between 45 minutes and 2 hours depending on size and how much debris has built up."
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
                We are a local team based in Parksville, providing professional gutter cleaning to homeowners across the region.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-10">
                {[
                  { name: "Parksville", link: "/parksville" },
                  { name: "Qualicum Beach", link: "/qualicum-beach" },
                  { name: "Lantzville", link: "/services/gutter-cleaning" },
                  { name: "Nanoose Bay", link: "/services/gutter-cleaning" },
                  { name: "Coombs", link: "/services/gutter-cleaning" },
                  { name: "Errington", link: "/services/gutter-cleaning" }
                ].map((city) => (
                  <a 
                    key={city.name} 
                    href={city.link}
                    className="px-4 py-2 bg-zinc-50 border border-zinc-100 rounded-full text-zinc-600 text-sm font-medium hover:bg-[#F8ABAC]/10 hover:border-[#F8ABAC]/20 hover:text-[#033852] transition-all"
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
            Ready to Book Your <br /> <span className="text-[#F8ABAC]">Gutter Clean?</span>
          </h2>
          <p className="text-zinc-500 text-xl mb-12">From $150. Fast response. Locally owned.</p>
          
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
