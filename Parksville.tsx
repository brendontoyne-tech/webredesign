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

export default function Parksville() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#F8ABAC]/30 text-[#033852]">
      <SEO 
        title="Gutter Cleaning Parksville BC | CoastalVille Exteriors"
        description="Professional gutter cleaning in Parksville BC. We remove debris, flush downspouts, and inspect every visit. Local company, already working in your neighbourhood. From $150. Call (250) 270-1010."
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
            alt="Gutter Cleaning Parksville" 
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
                PARKSVILLE · QUALICUM · OCEANSIDE
              </span>
              <div className="hidden md:block h-[1px] w-24 bg-white/30" />
            </div>

            {/* Main Headline */}
            <h1 className="flex flex-col items-center mb-10">
              <span className="font-sans font-bold text-6xl md:text-[110px] text-white leading-none uppercase tracking-tight mb-2">
                Parksville
              </span>
              <span className="font-sans font-black text-5xl md:text-[90px] text-[#F8ABAC] leading-none uppercase tracking-tight">
                Gutter Care
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="max-w-xl text-white/80 text-sm md:text-base font-medium leading-relaxed mb-12">
              Professional gutter cleaning. Debris removal, downspout flushing, and full system inspection on every visit. Starting from $150.
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

      {/* SECTION 3 — LOCAL INTRO */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-[#F8ABAC]/30" />
                <span className="text-[#F8ABAC] font-bold text-sm uppercase tracking-widest block">Locally Owned</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#033852] mb-8 leading-tight">Gutter Cleaning in Parksville</h2>
              <div className="space-y-6 text-xl text-zinc-600 leading-relaxed">
                <p>
                  CoastalVille Exteriors is a Parksville-based exterior company cleaning gutters on homes right here in your community. We're not driving up from Nanaimo.
                </p>
                <p>
                  We live and work in Parksville, and we're active across the community year-round on streets like Lowry's Road, Lodgepole Drive, and throughout the surrounding neighbourhoods.
                </p>
                <p className="font-bold text-[#033852]">
                  If your gutters need attention, we're already in your neighbourhood.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://i.ibb.co/qMbqfPdZ/IMG-4711.jpg" 
                alt="Parksville Gutter Cleaning" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -right-10 bg-[#033852] p-10 rounded-3xl shadow-xl hidden md:block">
                <div className="text-4xl font-black text-[#F8ABAC] mb-2">100%</div>
                <div className="text-white font-bold text-xs uppercase tracking-widest">Local Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — WHAT'S INCLUDED (GUARANTEE STYLE) */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#033852] rounded-[2.5rem] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10 max-w-4xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-12 bg-[#F8ABAC]/30" />
                <span className="text-[#F8ABAC] font-bold text-sm uppercase tracking-[0.3em]">
                  COMPREHENSIVE CLEAN
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What's Included in <span className="text-[#F8ABAC]">Every Visit</span></h2>
              <div className="space-y-6 text-zinc-300 text-lg leading-relaxed">
                <p>
                  A gutter clean isn't just scooping out leaves and calling it done. Here's exactly what we do on every Parksville visit:
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-12">
                  {[
                    { title: "Debris Removal", desc: "Leaves, pine needles, and buildup removed by hand." },
                    { title: "Downspout Flush", desc: "We confirm every downspout is flowing freely." },
                    { title: "Full Inspection", desc: "We check hangers, seals, pitch, and connections." },
                    { title: "Written Report", desc: "We tell you exactly what condition your gutters are in." }
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

      {/* SECTION 5 — PRICING */}
      <section className="py-24 md:py-32 px-6 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[#F8ABAC] font-bold text-[10px] md:text-[11px] uppercase tracking-[0.4em] mb-4 block">Transparent Pricing</span>
            <h2 className="text-4xl font-bold text-[#033852]">Parksville Prices</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-[#033852] p-12 rounded-[2rem] text-center text-white shadow-2xl relative overflow-hidden group">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2 uppercase tracking-tight">Single Storey Home</h3>
                <p className="text-zinc-400 mb-8 text-sm">Straightforward access, standard roofline</p>
                <div className="text-6xl font-black text-[#F8ABAC] tracking-tighter">From $150</div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
            </div>
            <div className="bg-white p-12 rounded-[2rem] text-center text-[#033852] shadow-xl border border-zinc-100 relative overflow-hidden group">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2 uppercase tracking-tight">Two Storey Home</h3>
                <p className="text-[#033852]/40 mb-8 text-sm">More linear footage, higher access</p>
                <div className="text-6xl font-black text-[#033852] tracking-tighter">From $200+</div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#F8ABAC]/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
            </div>
          </div>

          <div className="text-center">
            <p className="text-zinc-500 italic mb-12 max-w-2xl mx-auto">Price confirmed at booking. Get a free quote for your specific Parksville property.</p>
            <a 
              href="/contact" 
              className="inline-flex items-center gap-4 px-12 py-5 bg-[#F8ABAC] text-[#033852] rounded-md font-black text-xs uppercase tracking-widest hover:bg-[#f59496] transition-all shadow-xl shadow-[#F8ABAC]/20"
            >
              Get a Free Quote <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 6 — REVIEWS */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[#F8ABAC] font-bold text-[10px] md:text-[11px] uppercase tracking-[0.4em] mb-4 block">Local Feedback</span>
            <h2 className="text-4xl font-bold text-[#033852]">What Parksville Says</h2>
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
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-zinc-600 text-sm leading-relaxed mb-6 italic flex-grow">"{review.text}"</p>
                <div className="mt-auto pt-4 border-t border-zinc-50 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-zinc-900 text-sm">{review.name}</div>
                    <div className="text-xs font-medium text-zinc-400 bg-zinc-50 px-2 py-1 rounded mt-1">[{review.meta}]</div>
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
            <h2 className="text-4xl font-bold text-[#033852]">Parksville FAQ</h2>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm border border-zinc-100 overflow-hidden">
            <FAQItem 
              question="How often should Parksville homeowners clean their gutters?" 
              answer="At least once a year in late fall. Properties with Douglas fir or pine coverage benefit from twice a year."
            />
            <FAQItem 
              question="Do I need to be home during the cleaning?" 
              answer="No. We message you on arrival and completion with inspection notes."
            />
            <FAQItem 
              question="How quickly can you get to a Parksville job?" 
              answer="Typically one to two weeks. Locally based, no travel delay. Urgent situations call (250) 270-1010."
            />
            <FAQItem 
              question="Do you serve areas surrounding Parksville?" 
              answer="Yes. Qualicum Beach, Lantzville, Nanoose Bay, Coombs, Errington. No travel surcharges."
            />
          </div>
        </div>
      </section>

      {/* SECTION 8 — SERVICE AREA */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-12 bg-[#F8ABAC]/30" />
                <span className="text-[#F8ABAC] font-bold text-sm uppercase tracking-widest block">Service Area</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#033852] mb-8 leading-tight tracking-tight uppercase">
                Serving the <br /> <span className="text-[#F8ABAC]">Oceanside Area</span>
              </h2>
              <p className="text-zinc-600 text-lg mb-8 leading-relaxed max-w-xl">
                We're based in Parksville and serve the entire Oceanside community. No travel surcharges, no hidden fees, just reliable local service.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
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
                    className="px-4 py-2 bg-zinc-50 border border-zinc-100 rounded-full text-zinc-600 text-xs font-bold uppercase tracking-wider hover:bg-[#F8ABAC]/10 hover:border-[#F8ABAC]/20 hover:text-[#033852] transition-all"
                  >
                    {city.name}
                  </a>
                ))}
              </div>

              <a 
                href="https://share.google/LBOBGmIoU0Qrwufca" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#033852] text-white rounded-xl font-bold hover:bg-[#044a6b] transition-all shadow-lg mb-8"
              >
                View on Google Maps →
              </a>


            </div>
            <div className="h-[400px] bg-zinc-100 rounded-[2.5rem] overflow-hidden shadow-2xl border border-zinc-200 relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d82845.81665410317!2d-124.38466605!3d49.3149554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54889396f6346915%3A0x86134649709d1d1!2sParksville%2C%20BC!5e0!3m2!1sen!2sca!4v1711210000000!5m2!1sen!2sca"
                className="w-full h-full transition-all duration-700"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
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
          <h2 className="text-4xl md:text-6xl font-bold text-[#033852] mb-8 leading-tight">
            Ready to <span className="text-[#F8ABAC]">Protect Your Home</span> <br /> from the Elements?
          </h2>
          <p className="text-zinc-500 text-xl mb-12">From $150. Already working in your neighbourhood.</p>
          
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
