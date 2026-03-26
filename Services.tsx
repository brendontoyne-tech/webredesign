import { motion } from "motion/react";
import { 
  ArrowRight,
  ShieldCheck,
  MapPin,
  CheckCircle2,
  Clock
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { SEO } from "../components/SEO";

const ServiceCard = ({ number, title, description, price, link, image }: { 
  number: string; 
  title: string; 
  description: string; 
  price: string; 
  link: string;
  image: string;
}) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white rounded-2xl overflow-hidden shadow-sm border border-zinc-100 flex flex-col h-full group hover:translate-y-[-4px] transition-all duration-300"
  >
    <div className="aspect-[4/3] overflow-hidden relative">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        referrerPolicy="no-referrer"
      />
      <div className="absolute top-4 left-4 bg-[#033852] text-[#F8ABAC] font-mono text-xs px-3 py-1 rounded-full">
        {number}
      </div>
    </div>
    <div className="p-8 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-[#033852] mb-4 uppercase tracking-tight">{title}</h3>
      <p className="text-zinc-600 text-sm leading-relaxed mb-6 flex-grow">
        {description}
      </p>
      <div className="pt-6 border-t border-zinc-50 mt-auto">
        <div className="text-[#F8ABAC] font-bold text-xs uppercase tracking-widest mb-4">{price}</div>
        <a 
          href={link} 
          className="inline-flex items-center gap-2 text-[#033852] font-bold text-sm group-hover:gap-3 transition-all"
        >
          Learn More <ArrowRight className="w-4 h-4 text-[#F8ABAC]" />
        </a>
      </div>
    </div>
  </motion.div>
);

export default function Services() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#F8ABAC]/30 text-[#033852]">
      <SEO 
        title="Our Services | Gutters, Guards & Permanent Lighting | CoastalVille Exteriors Parksville"
        description="CoastalVille Exteriors offers gutter cleaning, gutter repair, gutter guard installation, downspout repair, soffit and fascia, permanent LED lighting and holiday lighting in Parksville and Qualicum Beach."
      />
      <Navbar />

      {/* SECTION 1 — HERO */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
            src="https://i.ibb.co/MywP8KWK/Adobe-Stock-1413204912.jpg" 
            alt="CoastalVille Services" 
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
                Everything Your
              </span>
              <span className="font-sans font-black text-5xl md:text-[90px] text-[#F8ABAC] leading-none uppercase tracking-tight">
                Exterior Needs
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="max-w-xl text-white/80 text-sm md:text-base font-medium leading-relaxed mb-12">
              From gutters to permanent lighting. Locally owned, professionally done, Parksville based.
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

      {/* Section 1: Six Service Cards Grid */}
      <section className="py-24 px-6 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-12 bg-[#F8ABAC]/30" />
              <span className="text-[#F8ABAC] font-bold text-sm uppercase tracking-widest block">Our Expertise</span>
              <div className="h-px w-12 bg-[#F8ABAC]/30" />
            </div>
            <h2 className="text-4xl font-bold text-[#033852] tracking-tight uppercase">What We Do</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              number="01"
              title="Gutter Cleaning"
              description="We remove debris, flush downspouts, and inspect the full system on every visit. You'll know exactly what condition your gutters are in when we're finished."
              price="Starting from $150"
              link="/services/gutter-cleaning"
              image="https://i.ibb.co/MkJZrF8K/IMG-4425-2.jpg"
            />
            <ServiceCard 
              number="02"
              title="Gutter Repair"
              description="Seam repairs, resealing, sagging rehang, section replacement, and end cap repairs. We assess the full system and fix what's needed in one visit where possible."
              price="Starting from $100"
              link="/services/gutter-repair"
              image="https://i.ibb.co/fdz3DLYF/510478217-24631936363075837-4948363611486984379-n.jpg"
            />
            <ServiceCard 
              number="03"
              title="Gutter Guards"
              description="We install Alu-Rex DoublePro, the only gutter guard with a lifetime clog-free warranty covering pine needle areas. No more seasonal cleaning."
              price="Starting from $500"
              link="/services/gutter-guards"
              image="https://i.ibb.co/sdDK0L5h/484152751-1161308205784458-6375819081680255836-n.jpg"
            />
            <ServiceCard 
              number="04"
              title="Downspouts"
              description="Blocked or damaged downspouts cause foundation damage and water intrusion. We repair, replace, and install, including extensions and underground drainage solutions."
              price="Starting from $100"
              link="/services/downspouts"
              image="https://i.ibb.co/gM47hbgX/474087581-593371070222804-6158609919322347624-n.jpg"
            />
            <ServiceCard 
              number="05"
              title="Soffits"
              description="Installation, replacement, repair, and venting. Vinyl and aluminum soffit solutions for Oceanside homes."
              price="Starting from $100"
              link="/services/soffits"
              image="https://i.ibb.co/nq7xyvYm/IMG-63-BB2231-FAEF-4-D2-D-A2-EB-A6-BBB3-C93-E76.jpg"
            />
            <ServiceCard 
              number="06"
              title="Permanent LED Lighting"
              description="App-controlled LED lighting installed on your soffits and fascia. Any colour, any occasion, year-round. Includes a free design mockup before you commit."
              price="Starting from $1,500"
              link="/services/permanent-lighting"
              image="https://i.ibb.co/VYQ1FxYb/0-L5-A7355-3.jpg"
            />
          </div>
        </div>
      </section>

      {/* Section 2: Featured Service (Guarantee Style) */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#033852] rounded-[2.5rem] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-[#F8ABAC] font-bold text-xs uppercase tracking-[0.3em] mb-6">
                  ✦ FEATURED SERVICE (OCT–DEC)
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight tracking-tight uppercase">
                  Holiday Light <br /> <span className="text-[#F8ABAC]">Installation</span>
                </h2>
                <p className="text-zinc-300 text-lg mb-10 leading-relaxed max-w-xl">
                  Professional holiday light installation, takedown, and storage. We're active throughout the Oceanside area and Nanaimo. Spots fill fast, so book your lighting consult today.
                </p>
                <div className="flex flex-wrap gap-6 mb-10">
                  <a href="/holiday-lighting-parksville" className="text-[#F8ABAC] font-bold text-sm uppercase tracking-widest hover:underline">Parksville →</a>
                  <a href="/holiday-lighting-qualicum-beach" className="text-[#F8ABAC] font-bold text-sm uppercase tracking-widest hover:underline">Qualicum Beach →</a>
                  <a href="/holiday-lighting-nanaimo" className="text-[#F8ABAC] font-bold text-sm uppercase tracking-widest hover:underline">Nanaimo →</a>
                </div>
                <a 
                  href="/contact" 
                  className="inline-flex items-center gap-3 px-10 py-5 bg-[#F8ABAC] text-[#033852] rounded-md text-xs font-black uppercase tracking-widest hover:bg-[#f59496] transition-all shadow-xl shadow-[#F8ABAC]/20"
                >
                  Book a Consult
                </a>
              </div>
              <div className="hidden lg:block">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border border-white/10 relative group">
                  <img 
                    src="https://i.ibb.co/Fbc6GvyZ/B94-A301-C-E966-404-E-9-BAA-8092-D68674-D3.jpg" 
                    alt="Holiday lighting installation" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#033852]/40 to-transparent" />
                </div>
              </div>
            </div>
            
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#F8ABAC]/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F8ABAC]/10 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2" />
          </div>
        </div>
      </section>

      {/* SECTION 4 — SERVICE AREA */}
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
                We're based in Parksville and serve the entire Oceanside community. No travel surcharges, no hidden fees — just reliable local service.
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

      {/* Section 5: Final CTA */}
      <section className="bg-white py-32 px-6 text-center overflow-hidden relative border-t border-zinc-100">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-8 bg-[#F8ABAC]/30" />
            <span className="text-[#F8ABAC] font-bold text-xs uppercase tracking-[0.4em]">Get In Touch</span>
            <div className="h-px w-8 bg-[#F8ABAC]/30" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-[#033852] mb-8 leading-tight tracking-tight uppercase">
            Not Sure <span className="text-[#F8ABAC]">What You Need?</span>
          </h2>
          <p className="text-zinc-500 text-xl mb-12">Give us a call or fill out the form, we'll point you in the right direction.</p>
          
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
