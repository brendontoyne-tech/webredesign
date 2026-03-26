import { motion } from "motion/react";
import { 
  ShieldCheck, 
  MapPin, 
  Quote, 
  Clock, 
  Star, 
  ChevronRight, 
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { SEO } from "../components/SEO";

const ServiceCard = ({ number, title, description, link }: { number: string; title: string; description: string; link: string }) => (
  <div className="bg-[#033852] p-8 rounded-2xl text-white flex flex-col h-full group hover:translate-y-[-4px] transition-all duration-300 shadow-xl shadow-[#033852]/10">
    <div className="text-[#F8ABAC] font-mono text-sm mb-4 opacity-60">{number}</div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-zinc-300 text-sm leading-relaxed mb-6 flex-grow">{description}</p>
    <div className="flex items-center justify-between mt-auto">
      <a href={link} className="text-[#F8ABAC] text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
        Learn More <ChevronRight className="w-4 h-4" />
      </a>
    </div>
  </div>
);

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

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#F8ABAC]/30">
      <SEO 
        title="CoastalVille Exteriors | Gutter & Lighting Specialists Parksville"
        description="CoastalVille Exteriors provides professional gutter cleaning, gutter guards, and permanent lighting in Parksville, Qualicum Beach and the Oceanside area."
      />
      <Navbar />

      {/* SECTION 1 — HERO */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
            src="https://i.ibb.co/FqfXmgpk/0-L5-A7260-1.jpg" 
            alt="Coastal Home Exterior" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />

          {/* Deep Navy Overlay — Now on top of the textured image */}
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
                Tough Exteriors
              </span>
              <span className="font-sans font-black text-5xl md:text-[90px] text-[#F8ABAC] leading-none uppercase tracking-tight">
                For Coastal Weather
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="max-w-xl text-white/80 text-sm md:text-base font-medium leading-relaxed mb-12">
              Serving Parksville, Qualicum Beach and the Surrounding Communities
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
              { icon: <MapPin className="w-5 h-5 text-[#F8ABAC]" />, text: "Locally Owned & Operated" },
              { icon: <Quote className="w-5 h-5 text-[#F8ABAC]" />, text: "Free Quotes" },
              { icon: <Clock className="w-5 h-5 text-[#F8ABAC]" />, text: "24hr Response" },
              { icon: <CheckCircle2 className="w-5 h-5 text-[#F8ABAC]" />, text: "Parksville Based" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 group">
                {item.icon}
                <span className="text-sm font-semibold tracking-wide uppercase">{item.text}</span>
                {i < 4 && <div className="hidden lg:block h-4 w-px bg-white/20 ml-8" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — SERVICES GRID */}
      <section id="services" className="py-24 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#033852]">What We Do</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              number="01" 
              title="Gutter Cleaning" 
              description="We remove debris, flush downspouts, and do a full inspection on every visit. Starting from $150."
              link="/services/gutter-cleaning"
            />
            <ServiceCard 
              number="02" 
              title="Gutter Repair" 
              description="Seam repairs, resealing, sagging rehang, section replacement and end cap repairs. Fixed right, first time."
              link="/services/gutter-repair"
            />
            <ServiceCard 
              number="03" 
              title="Gutter Guards" 
              description="Alu-Rex micro-mesh systems that keep debris out and water flowing. No more seasonal cleanings."
              link="/services/gutter-guards"
            />
            <ServiceCard 
              number="04" 
              title="Downspouts" 
              description="Blocked or damaged downspouts cause foundation damage. We repair, replace, and install."
              link="/services/downspouts"
            />
            <ServiceCard 
              number="05" 
              title="Soffits" 
              description="Installation, replacement, repair and venting. Vinyl and aluminum soffit solutions for Oceanside homes."
              link="/services/soffits"
            />
            <ServiceCard 
              number="06" 
              title="Permanent Lighting" 
              description="App-controlled LED lighting installed on your soffits and fascia. Any colour, any occasion, year-round."
              link="/services/permanent-lighting"
            />
          </div>
        </div>
      </section>

      {/* SECTION 4 — WHO WE ARE & GUARANTEE */}
      <section id="about" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* Original Who We Are Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative">
                <img 
                  src="https://i.ibb.co/yF41J9xC/att-FLXLADazxi8-Jgd8-Krq-Wo-IBPQ7-b-AEH5d-SJr-HV8-LXw-H0.jpg" 
                  alt="Brendon and Jordan on site" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#033852] p-8 rounded-2xl text-white hidden md:block shadow-xl">
                <div className="text-3xl font-bold text-[#F8ABAC] mb-1">Local</div>
                <div className="text-sm font-medium opacity-80 uppercase tracking-widest">Oceanside Experts</div>
              </div>
            </motion.div>

            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-12 bg-[#F8ABAC]/30" />
                <span className="text-[#F8ABAC] font-bold text-sm uppercase tracking-widest block">Our Story</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#033852] mb-8 leading-tight">We're Not Passing Through</h2>
              <div className="space-y-6 text-zinc-600 leading-relaxed text-lg">
                <p>Parksville and Qualicum Beach are where we live, where we work, and where our reputation means something.</p>
                <p>CoastalVille Exteriors was built to be the exterior company this community deserves. Specialising in gutters, gutter guards, and permanent lighting for Oceanside area homeowners who want the job done right and don't want to think about it twice.</p>
                <p>Book a job with us and you'll hear from us before, during, and after. We show up when we say we will. We clean up before we leave. And if something isn't right, we make it right.</p>
              </div>
              <a 
                href="#" 
                className="inline-flex items-center gap-2 mt-10 px-8 py-4 border border-[#033852]/10 text-[#033852] rounded-full font-bold hover:bg-zinc-50 transition-all group"
              >
                Learn more about us <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Guarantee Box */}
          <div className="bg-[#033852] rounded-[2.5rem] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">The CoastalVille <span className="text-[#F8ABAC]">Guarantee</span></h3>
                <p className="text-zinc-300 text-lg mb-8 leading-relaxed">
                  We built this company because we saw a gap in the Oceanside area for reliable, professional exterior services. Our promise is simple: We show up on time, we do the job right, and we leave your property cleaner than we found it.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="/contact" className="px-8 py-4 bg-[#F8ABAC] text-white rounded-xl font-bold hover:bg-[#f59496] transition-all">
                    Get Your Free Quote
                  </a>
                  <div className="flex items-center gap-4 px-6 py-4 border border-white/20 rounded-xl">
                    <ShieldCheck className="w-6 h-6 text-[#F8ABAC]" />
                    <span className="font-bold">Fully Licensed & Insured</span>
                  </div>
                </div>
              </div>
              <div className="hidden lg:grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                    <CheckCircle2 className="w-8 h-8 text-[#F8ABAC] mb-4" />
                    <div className="font-bold text-lg">No Mess Left</div>
                    <div className="text-xs text-zinc-400 mt-1">We clean up every scrap.</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                    <Clock className="w-8 h-8 text-[#F8ABAC] mb-4" />
                    <div className="font-bold text-lg">On Time</div>
                    <div className="text-xs text-zinc-400 mt-1">We respect your schedule.</div>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                    <ShieldCheck className="w-8 h-8 text-[#F8ABAC] mb-4" />
                    <div className="font-bold text-lg">Quality First</div>
                    <div className="text-xs text-zinc-400 mt-1">2-year workmanship warranty.</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                    <Star className="w-8 h-8 text-[#F8ABAC] mb-4" />
                    <div className="font-bold text-lg">Local Experts</div>
                    <div className="text-xs text-zinc-400 mt-1">Parksville residents.</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#F8ABAC]/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F8ABAC]/10 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2" />
          </div>
        </div>
      </section>

      {/* SECTION 5 — REVIEWS */}
      <section id="reviews" className="py-24 bg-[#033852]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white">What Oceanside Homeowners Are Saying</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <ReviewCard 
              stars={5} 
              name="Katharine Carling" 
              platform="Google" 
              content="CoastalVille Exteriors installed our permanent outdoor lights and we are so impressed! The team was professional, on time, and walked us through every step of the process. Highly recommend!"
            />
            <ReviewCard 
              stars={5} 
              name="Adrianne & Jeff" 
              platform="Facebook" 
              content="We had an incredible experience with CoastalVille from start to finish. The installation of the permanent lights was seamless, and the lights look amazing!"
            />
            <ReviewCard 
              stars={5} 
              name="Jacquie P." 
              platform="Google" 
              content="These guys easily earned 5 stars from us. Cleaned the gutters and roof. It looks night and day. They worked fast, efficient, clean and were super affordable!"
            />
            <ReviewCard 
              stars={5} 
              name="Keanna Mullen" 
              platform="Google" 
              content="So happy we decided to get Gutter Guards installed on our Parksville home. CoastalVille Exteriors made everything simple and the work was done professionally."
            />
            <ReviewCard 
              stars={5} 
              name="Keith" 
              platform="Google · Local Guide" 
              content="Really happy with CoastalVille Exteriors. They came by to clean our gutters, did a thorough job, and even tested the downspouts. Super friendly and easy to deal with."
            />
            <ReviewCard 
              stars={5} 
              name="Christine Williams" 
              platform="Google" 
              content="Absolutely best ever! Not only are Brandon and Jordan amazing...the work they did surpasses anything I could have dreamed! I got the ultimate BEST LIGHTS."
            />
          </div>

          <a 
            href="https://share.google/LBOBGmIoU0Qrwufca" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#033852] rounded-xl font-bold hover:bg-zinc-100 transition-all shadow-lg"
          >
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /> See All Reviews on Google
          </a>
        </div>
      </section>

      {/* SECTION 6 — INTRODUCING PERMANENT LIGHTING */}
      <section id="lighting" className="py-32 relative overflow-hidden bg-[#1a1a1a]">
        {/* Background Image with Fade Effect */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/0dt460T/0-L5-A7370-2.jpg" 
            alt="Permanent Lighting Background" 
            className="w-full h-full object-cover object-right opacity-100"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/90 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-12 bg-[#F8ABAC]/30" />
                <span className="text-[#F8ABAC] font-bold text-sm uppercase tracking-widest block">Now Available</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Introducing <span className="text-[#F8ABAC]">PERMANENT</span> Lighting
              </h2>
              <p className="text-zinc-300 text-lg mb-10 leading-relaxed">
                Say goodbye to seasonal installs and ladder risks. CoastalVille's permanent lighting systems give your home a stunning, app-controlled light display, 365 days a year.
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex gap-4">
                  <div className="mt-1">
                    <CheckCircle2 className="w-6 h-6 text-[#F8ABAC]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Installed Once. Enjoyed Forever.</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">No more ladders, no more tangled lights, no more annual installs. Your lights are installed on your soffits and fascia permanently.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1">
                    <CheckCircle2 className="w-6 h-6 text-[#F8ABAC]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Controlled from Your Phone</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">Change colours, set schedules, and create custom displays from an app. Any holiday, any mood, any time.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1">
                    <CheckCircle2 className="w-6 h-6 text-[#F8ABAC]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Built for the BC Coast</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">High-grade, weatherproof LEDs engineered to handle coastal conditions. Energy-efficient and low maintenance year-round.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1">
                    <CheckCircle2 className="w-6 h-6 text-[#F8ABAC]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Year-Round Versatility</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">Christmas, Halloween, Valentine's Day, Canada Day or just elegant white for everyday curb appeal.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/contact" className="px-8 py-4 bg-[#F8ABAC] text-white rounded-xl font-bold hover:bg-[#f59496] transition-all shadow-lg text-center">
                  Get a Free Quote
                </a>
                <a href="/services/permanent-lighting" className="px-8 py-4 border border-white/20 text-white rounded-xl font-bold hover:bg-white/5 transition-all text-center">
                  Learn More
                </a>
              </div>
            </div>

            <div className="hidden lg:block relative h-full min-h-[400px]">
              {/* 365 Days a Year Badge */}
              <div className="absolute bottom-0 right-0 bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 rounded-2xl flex items-center gap-3">
                <div className="w-2 h-2 bg-[#F8ABAC] rounded-full animate-pulse" />
                <span className="font-bold text-[10px] tracking-[0.3em] uppercase">365 Days a Year</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — SERVICE AREAS */}
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
                We are a local team based in Parksville, providing professional gutter and lighting services to homeowners across the region.
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
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#033852] text-white rounded-xl font-bold hover:bg-[#044a6b] transition-all shadow-lg"
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

      {/* SECTION 8 — CTA */}
      <section className="bg-white py-32 px-6 text-center overflow-hidden relative border-t border-zinc-100">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-[#033852] mb-8 leading-tight">
            Ready to <span className="text-[#F8ABAC]">Protect Your Home</span> <br /> from the Elements?
          </h2>
          <p className="text-zinc-500 text-xl mb-12">Free quotes. Fast response. Locally owned.</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" className="px-10 py-5 bg-[#F8ABAC] text-white rounded-xl font-bold text-lg hover:bg-[#f59496] transition-all shadow-xl shadow-[#F8ABAC]/20">Get a Free Quote</a>
            <a href="tel:2502701010" className="px-10 py-5 border border-[#033852]/20 text-[#033852] rounded-xl font-bold text-lg hover:bg-zinc-50 transition-all">Call (250) 270-1010</a>
          </div>
          <p className="text-zinc-400 text-sm mt-6">We respond within 24 hours, usually much faster.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
