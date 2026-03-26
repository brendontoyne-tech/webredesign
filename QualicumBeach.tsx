import { motion } from "motion/react";
import { 
  ShieldCheck, 
  MapPin, 
  Quote, 
  Clock, 
  Star, 
  ChevronRight, 
  CheckCircle2,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { SEO } from "../components/SEO";

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-zinc-200 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-bold text-[#033852] group-hover:text-[#F8ABAC] transition-colors">{question}</span>
        <ChevronDown className={`w-5 h-5 text-[#F8ABAC] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="text-zinc-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

export default function QualicumBeach() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "CoastalVille Exteriors",
        "image": "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80",
        "@id": "https://coastalville.ca/qualicum-beach",
        "url": "https://coastalville.ca/qualicum-beach",
        "telephone": "2502701010",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Qualicum Beach",
          "addressRegion": "BC",
          "addressCountry": "CA"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 49.348,
          "longitude": -124.444
        },
        "areaServed": {
          "@type": "City",
          "name": "Qualicum Beach"
        }
      },
      {
        "@type": "Service",
        "serviceType": "Gutter Cleaning",
        "provider": {
          "@type": "LocalBusiness",
          "name": "CoastalVille Exteriors"
        },
        "areaServed": {
          "@type": "City",
          "name": "Qualicum Beach"
        },
        "description": "Professional gutter cleaning in Qualicum Beach BC. We remove debris, flush downspouts, and inspect every visit."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How often should Qualicum Beach homeowners clean their gutters?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "At least once a year in late fall. Properties near the Village or with arbutus, fir, or Garry oak trees benefit from twice a year."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need to be home during the cleaning?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. We message you on arrival and completion with inspection notes."
            }
          },
          {
            "@type": "Question",
            "name": "How quickly can you get to a Qualicum Beach job?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Typically one to two weeks. Based in Parksville — right next door. Urgent situations call (250) 270-1010."
            }
          },
          {
            "@type": "Question",
            "name": "Do you also serve Parksville and surrounding areas?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes — Parksville, Lantzville, Nanoose Bay, Coombs, Errington. No travel surcharges."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer gutter guards in Qualicum Beach?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Alu-Rex DoublePro — lifetime clog-free warranty covering pine areas."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[#033852] selection:bg-[#F8ABAC]/30">
      <SEO 
        title="Gutter Cleaning Qualicum Beach BC | CoastalVille Exteriors"
        description="Professional gutter cleaning in Qualicum Beach BC. We remove debris, flush downspouts, and inspect every visit. Local company, already working in your neighbourhood. From $150. Call (250) 270-1010."
        schema={schema}
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
            src="https://i.ibb.co/v6R4mJG0/5.png" 
            alt="Qualicum Beach Exterior" 
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
                QUALICUM BEACH · GUTTER SPECIALISTS
              </span>
              <div className="hidden md:block h-[1px] w-24 bg-white/30" />
            </div>

            {/* Main Headline */}
            <h1 className="flex flex-col items-center mb-10">
              <span className="font-sans font-bold text-6xl md:text-[110px] text-white leading-none uppercase tracking-tight mb-2">
                Qualicum
              </span>
              <span className="font-sans font-black text-5xl md:text-[90px] text-[#F8ABAC] leading-none uppercase tracking-tight">
                Gutter Care
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="max-w-xl text-white/80 text-sm md:text-base font-medium leading-relaxed mb-12">
              Professional debris removal, downspout flushing, and full system inspection. Starting from $150.
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
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 bg-[#F8ABAC]/10 text-[#F8ABAC] rounded-full text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
              100% Local Service
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#033852] mb-8 leading-tight">
              Gutter Cleaning in Qualicum Beach
            </h2>
            <div className="space-y-6 text-xl text-zinc-600 leading-relaxed">
              <p>
                CoastalVille Exteriors is a Parksville-based exterior company cleaning gutters on homes across the Oceanside area, including right here in Qualicum Beach. We're not driving up from Nanaimo. We're local, we're familiar with these streets, and we're active in Qualicum Beach year-round on properties like those on Qualicum Road, Crescent Road, and throughout the surrounding neighbourhoods.
              </p>
              <p className="font-bold text-[#033852]">
                If your gutters need attention, we're already in your area.
              </p>
            </div>

          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://i.ibb.co/qMbqfPdZ/IMG-4711.jpg" 
                className="w-full h-full object-cover" 
                alt="Professional Gutter Cleaning" 
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-[#033852] p-10 rounded-3xl text-white shadow-2xl hidden md:block">
              <div className="text-4xl font-bold mb-1">100%</div>
              <div className="text-[10px] font-bold uppercase tracking-widest opacity-60">Satisfaction Guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — WHAT'S INCLUDED (GUARANTEE STYLE) */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto bg-[#033852] rounded-[2.5rem] p-8 md:p-20 relative overflow-hidden shadow-2xl">
          {/* Decorative Blurs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#F8ABAC]/10 blur-[100px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F8ABAC]/5 blur-[100px] translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">What's Included in <span className="text-[#F8ABAC]">Every Visit</span></h3>
              <p className="text-zinc-300 text-lg max-w-2xl mx-auto leading-relaxed">
                A gutter clean isn't just scooping out leaves. We provide a full exterior maintenance check on every Qualicum Beach property.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "Full Debris Removal", desc: "Leaves, pine needles, seeds, and buildup removed by hand from every section of your gutter system." },
                { title: "Downspout Flushing", desc: "We run water through every downspout to confirm it's flowing freely end to end, preventing foundation issues." },
                { title: "Full System Inspection", desc: "We check hangers, seals, pitch, end caps, and connections while we're up there to catch small issues early." },
                { title: "Written Report", desc: "If we find anything that needs attention, we tell you before we leave. No surprises, just clear communication." }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl group">
                  <CheckCircle2 className="w-8 h-8 text-[#F8ABAC] mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <div className="inline-block p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
                <p className="text-white font-bold italic">
                  "You'll know exactly what condition your gutters are in when we drive away. That's our standard, not an upgrade."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — WHY REGULAR CLEANING */}
      <section className="py-24 md:py-32 px-6 bg-zinc-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#033852] mb-12">
            Why Qualicum Beach Homes Need Regular Attention
          </h2>
          <div className="space-y-8 text-xl text-zinc-600 leading-relaxed">
            <p>
              Qualicum Beach's mature trees and coastal climate make it one of the tougher areas on the Oceanside for gutter maintenance. The combination of heavy fall and winter rainfall with the abundance of arbutus, Douglas fir, and Garry oak trees throughout the area means gutters fill up faster than most homeowners expect.
            </p>
            <p>
              Left uncleaned, gutters overflow and push water back against your fascia, soffits, and foundation - leading to rot, mold, and water damage that costs significantly more to fix than a regular cleaning. For most Qualicum Beach homes we recommend at least once a year in late fall. Properties near the Village or along the beachfront with heavy tree coverage often benefit from twice a year.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6 — PRICING */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-[#033852]">Transparent Pricing</h2>
            <p className="text-zinc-500 text-lg max-w-2xl mx-auto mt-4">
              No hidden fees. No surprises. We confirm the price before we start every job.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-12 rounded-2xl shadow-sm border border-zinc-100 relative overflow-hidden group">
              <h3 className="text-2xl font-bold mb-2 text-[#033852]">Single Storey</h3>
              <p className="text-zinc-500 mb-8 text-sm">Standard roofline, easy access</p>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-sm font-bold text-zinc-400 uppercase tracking-widest">From</span>
                <span className="text-6xl font-bold text-[#033852]">$150</span>
              </div>
              <ul className="space-y-4 mb-10">
                {["Full Debris Removal", "Downspout Flush", "System Inspection"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-600 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-[#F8ABAC]" /> {item}
                  </li>
                ))}
              </ul>
              <a href="/contact" className="block w-full py-5 bg-zinc-50 text-[#033852] rounded-md text-center font-black uppercase tracking-widest text-xs hover:bg-[#033852] hover:text-white transition-all">Book This Plan</a>
            </div>

            <div className="bg-[#033852] p-12 rounded-2xl shadow-xl relative overflow-hidden group text-white">
              <div className="inline-block px-4 py-1.5 bg-[#F8ABAC] text-[#033852] rounded-full text-[10px] font-bold uppercase tracking-[0.3em] mb-6">Most Popular</div>
              <h3 className="text-2xl font-bold mb-2 text-white">Two Storey+</h3>
              <p className="text-white/60 mb-8 text-sm">Higher access, more linear footage</p>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-sm font-bold text-white/40 uppercase tracking-widest">From</span>
                <span className="text-6xl font-bold text-white">$200</span>
              </div>
              <ul className="space-y-4 mb-10">
                {["Full Debris Removal", "Downspout Flush", "System Inspection", "High-Access Equipment"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-[#F8ABAC]" /> {item}
                  </li>
                ))}
              </ul>
              <a href="/contact" className="block w-full py-5 bg-[#F8ABAC] text-[#033852] rounded-md text-center font-black uppercase tracking-widest text-xs hover:bg-[#f59496] transition-all shadow-xl shadow-[#F8ABAC]/20">Book This Plan</a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — FAQ */}
      <section className="py-24 md:py-32 px-6 bg-zinc-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#033852]">Common Questions</h2>
            <p className="text-zinc-500 font-medium uppercase tracking-widest text-xs mt-4">Qualicum Beach Homeowner FAQ</p>
          </div>
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-zinc-100">
            <FAQItem 
              question="How often should Qualicum Beach homeowners clean their gutters?" 
              answer="At least once a year in late fall after the leaves have dropped. Qualicum Beach properties near the Village or with arbutus, fir, or Garry oak trees close by benefit from twice a year, the leaf and needle load builds up quickly in this area."
            />
            <FAQItem 
              question="Do I need to be home during the cleaning?" 
              answer="No. We complete the job whether you're home or not. We'll message you when we arrive and again when we're done with notes from our inspection."
            />
            <FAQItem 
              question="How quickly can you get to a Qualicum Beach job?" 
              answer="Typically within one to two weeks. We're based in Parksville so Qualicum Beach is right in our backyard, no travel delay. For urgent situations call us directly at (250) 270-1010."
            />
            <FAQItem 
              question="Do you also serve Parksville and surrounding areas?" 
              answer="Yes. Parksville, Lantzville, Nanoose Bay, Coombs, Errington. No travel surcharges."
            />
            <FAQItem 
              question="Do you offer gutter guards in Qualicum Beach?" 
              answer="Yes. After a cleaning we can assess whether gutter guards would be a good fit for your home. We install Alu-Rex DoublePro, the only gutter guard with a lifetime clog-free warranty covering pine needle areas."
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

      {/* SECTION 9 — CTA */}
      <section className="bg-white py-32 px-6 text-center overflow-hidden relative border-t border-zinc-100">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-8 bg-[#F8ABAC]/30" />
            <span className="text-[#F8ABAC] font-bold text-xs uppercase tracking-[0.4em]">Get In Touch</span>
            <div className="h-px w-8 bg-[#F8ABAC]/30" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-[#033852] mb-8 leading-tight tracking-tight uppercase">
            Ready to <span className="text-[#F8ABAC]">Protect Your Home</span> <br /> from the Elements?
          </h2>
          <p className="text-zinc-500 text-xl mb-12">Free quotes. Fast response. Locally owned.</p>
          
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
