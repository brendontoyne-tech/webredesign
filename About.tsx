import { motion } from "motion/react";
import { 
  ShieldCheck, 
  Star, 
  Hammer,
  Users,
  MessageSquare,
  MapPin,
  CheckCircle2,
  Clock,
  ArrowRight
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { SEO } from "../components/SEO";

const ReviewCard = ({ stars, name, platform, content }: { stars: number; name: string; platform: string; content: string }) => (
  <div className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm flex flex-col h-full">
    <div className="flex gap-1 mb-4">
      {[...Array(stars)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
    <p className="text-zinc-600 text-sm leading-relaxed mb-6 italic flex-grow">"{content}"</p>
    <div className="flex items-center justify-between pt-4 border-t border-zinc-50">
      <span className="font-bold text-zinc-900 text-sm">{name}</span>
      <span className="text-xs font-medium text-zinc-400 bg-zinc-50 px-2 py-1 rounded">[{platform}]</span>
    </div>
  </div>
);

export default function About() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#F8ABAC]/30 text-[#033852]">
      <SEO 
        title="About CoastalVille Exteriors | Parksville & Qualicum Beach"
        description="CoastalVille Exteriors is a locally owned exterior company serving Parksville, Qualicum Beach, and the Oceanside area. Gutters, gutter guards, and permanent lighting done right."
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
            alt="CoastalVille job site" 
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
                GUTTERS · GUARDS · SOFFITS · PERMANENT LIGHTING
              </span>
              <div className="hidden md:block h-[1px] w-24 bg-white/30" />
            </div>

            {/* Main Headline */}
            <h1 className="flex flex-col items-center mb-10">
              <span className="font-sans font-bold text-6xl md:text-[110px] text-white leading-none uppercase tracking-tight mb-2">
                Built on Craft
              </span>
              <span className="font-sans font-black text-5xl md:text-[90px] text-[#F8ABAC] leading-none uppercase tracking-tight">
                Rooted in Community
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="max-w-xl text-white/80 text-sm md:text-base font-medium leading-relaxed mb-12">
              Parksville & Qualicum Beach's Dedicated Exterior Specialist
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

      {/* Section 1: Where CoastalVille Comes From */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-[#F8ABAC]/30" />
            <span className="text-[#F8ABAC] font-bold text-sm uppercase tracking-widest block">Our Origin</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#033852] mb-12 leading-tight">Where CoastalVille Comes From</h2>
          <div className="space-y-8 text-lg text-zinc-600 leading-relaxed">
            <p>
              CoastalVille Exteriors was formally established in 2025, but the work started long before that. We've been doing exterior work together for years, building the skills, the systems, and the reputation that CoastalVille is now built on.
            </p>
            <p>
              Both of us grew up in trades households. Dads who worked with their hands. Grandparents who built things properly and took pride in the finished product. That upbringing shaped how we approach every job: the attention to detail, the cleanup before we leave, and the follow-up call to make sure everything is right.
            </p>
            <p>
              CoastalVille is the company we built because we saw a gap in the Oceanside area: homeowners who wanted reliable, professional exterior work from someone local who actually gives a damn. So we built it.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: The People Behind the Work */}
      <section className="py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#033852]">The People Behind the Work</h2>
          </div>
          
          <div className="mb-16 aspect-video max-w-5xl mx-auto bg-zinc-200 rounded-3xl overflow-hidden shadow-2xl relative group">
            <img 
              src="https://i.ibb.co/YTtKv6NN/Brendon-Toyne-The-guy-carrying-the-ladder-should-have-a-short-moustache-and-a-s-d10c3291-4fb1-467d-8.png" 
              alt="Brendon and Jordan on site" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#033852]/80 to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#F8ABAC] mb-2">Our Team</p>
              <h3 className="text-3xl font-bold uppercase tracking-tight">CoastalVille Exteriors</h3>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-zinc-100 flex flex-col h-full group hover:translate-y-[-4px] transition-all duration-300">
              <div className="w-12 h-12 bg-[#033852] rounded-xl flex items-center justify-center mb-6 text-[#F8ABAC] shadow-lg shadow-[#033852]/10">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#033852] mb-1">Brendon</h3>
              <p className="text-[#F8ABAC] font-bold text-[10px] uppercase tracking-[0.3em] mb-6">Co-Founder</p>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Brendon handles the sales, customer communication, and the business side of CoastalVille. He's the first voice you'll hear when you call and the one making sure every job is followed up on properly. Detail-oriented, straight-talking, and genuinely invested in getting it right.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-sm border border-zinc-100 flex flex-col h-full group hover:translate-y-[-4px] transition-all duration-300">
              <div className="w-12 h-12 bg-[#033852] rounded-xl flex items-center justify-center mb-6 text-[#F8ABAC] shadow-lg shadow-[#033852]/10">
                <Hammer className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#033852] mb-1">Jordan</h3>
              <p className="text-[#F8ABAC] font-bold text-[10px] uppercase tracking-[0.3em] mb-6">Co-Founder</p>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Jordan leads on the tools. With a background as a linesman and a lifetime of trades experience behind him, he brings a level of precision and safety awareness to every install that you don't get from someone who learned on the job last year. When the work is done, it's done right.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-sm border border-zinc-100 flex flex-col h-full group hover:translate-y-[-4px] transition-all duration-300">
              <div className="w-12 h-12 bg-[#033852] rounded-xl flex items-center justify-center mb-6 text-[#F8ABAC] shadow-lg shadow-[#033852]/10">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#033852] mb-1">Our Crew</h3>
              <p className="text-[#F8ABAC] font-bold text-[10px] uppercase tracking-[0.3em] mb-6">The Team</p>
              <p className="text-zinc-600 text-sm leading-relaxed">
                As CoastalVille grows, so does our team. We work with a small crew of reliable, skilled people who share our standards. Every person on a CoastalVille job is someone we trust with our own reputation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: How We Work (Guarantee Style) */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#033852] rounded-[2.5rem] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">How We <span className="text-[#F8ABAC]">Work</span></h2>
                <p className="text-zinc-300 text-lg max-w-2xl mx-auto leading-relaxed">
                  Our reputation lives and dies right here in the Oceanside area. That's why we operate on three non-negotiable pillars.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-12">
                {[
                  { title: "Show Up", desc: "We schedule a job, we're there. No last-minute cancellations, no vague arrival windows. Your time matters, and we treat it that way." },
                  { title: "Do It Right", desc: "We're not looking for the fastest way through a job. We're looking for the right way. Clean cuts, proper seals, hidden wires, sites left cleaner than we found them." },
                  { title: "Stand Behind It", desc: "If something isn't right after we leave, we come back and make it right. No debate, no invoice. That's just how it works." }
                ].map((pillar, i) => (
                  <div key={i} className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                    <h3 className="text-xl font-bold mb-4 text-[#F8ABAC] uppercase tracking-tight">{pillar.title}</h3>
                    <p className="text-zinc-300 text-sm leading-relaxed">{pillar.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#F8ABAC]/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F8ABAC]/10 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2" />
          </div>
        </div>
      </section>

      {/* Section 4: Why Homeowners Choose Us */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-[#F8ABAC]/30" />
            <span className="text-[#F8ABAC] font-bold text-sm uppercase tracking-widest block">Local Advantage</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#033852] mb-12 leading-tight">Why Homeowners Choose Us</h2>
          <div className="space-y-8 text-lg text-zinc-600 leading-relaxed mb-16">
            <p>
              There's no shortage of people who can clean a gutter or hang some lights. What's harder to find is a company that communicates clearly, shows up when they say they will, and treats your home like it matters.
            </p>
            <p>
              We work with industry-leading suppliers—Alu-Rex, Gentek, and Kaycan—because the products we install matter as much as the workmanship. Quality materials, properly installed, by people who stand behind the result.
            </p>
            <p>
              We're not a franchise. We're not from out of town. We're your neighbours, and our reputation lives and dies right here in this community. That's not a marketing line. That's just reality.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Reviews Strip */}
      <section className="py-24 px-6 bg-[#033852]">
        <div className="max-w-7xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-16">Don't Just Take Our Word For It</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 text-left">
            <ReviewCard 
              stars={5} 
              name="Katharine Carling" 
              platform="Google" 
              content="CoastalVille Exteriors installed our permanent outdoor lights and we are so impressed! The team was professional, on time, and walked us through every step of the process. The lights look incredible and totally transformed our home."
            />
            <ReviewCard 
              stars={5} 
              name="Keanna Mullen" 
              platform="Google" 
              content="So happy we decided to get Gutter Guards installed on our Parksville home. CoastalVille Exteriors made everything simple and the work was done professionally and on time. We've already recommended them to friends and neighbours."
            />
            <ReviewCard 
              stars={5} 
              name="Adrianne & Jeff" 
              platform="Facebook" 
              content="We had an incredible experience with CoastalVille from start to finish. They were always on time, followed up regularly, and delivered exactly what they promised. It's rare to find such accountability these days."
            />
          </div>

          <a 
            href="https://share.google/LBOBGmIoU0Qrwufca" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#033852] rounded-md text-xs font-black uppercase tracking-widest hover:bg-zinc-100 transition-all shadow-lg"
          >
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /> See All Reviews on Google
          </a>
        </div>
      </section>

      {/* Section 6: Final CTA */}
      <section className="bg-white py-32 px-6 text-center overflow-hidden relative border-t border-zinc-100">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-8 bg-[#F8ABAC]/30" />
            <span className="text-[#F8ABAC] font-bold text-xs uppercase tracking-[0.4em]">Get In Touch</span>
            <div className="h-px w-8 bg-[#F8ABAC]/30" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-[#033852] mb-8 leading-tight tracking-tight uppercase">
            Ready to <span className="text-[#F8ABAC]">Work With Us?</span>
          </h2>
          <p className="text-zinc-500 text-xl mb-12">Free quotes. Fast response. No runaround.</p>
          
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
